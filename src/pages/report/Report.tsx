import { useRef } from "react";
import { useForm } from "react-hook-form";
import { BiPrinter } from "react-icons/bi";
import { Button } from "antd";
import ReInput from "./components/ReInput";
import jsPDF from "jspdf";

type FormInputs = {
  secfirst_1: string;
  secfirst_2: string;
  secfirst_3: string;
  secfirst_4: string;
  secfirst_5: string;
  secfirst_6: string;
  secfirst_7: string;
  secfirst_8: string;
  secfirst_9: string;
  secfirst_10: string;
  secsecond_1: string;
  secsecond_2: string;
  secsecond_3: string;
  secsecond_4: string;
  secsecond_5: string;
  secsecond_6: string;
  secthird_1: string;
  secthird_2: string;
};

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();
  const formRef = useRef<HTMLDivElement>(null);

  const onSubmit = async (data: FormInputs) => {
    console.log("🚀 ~ onSubmit ~ data:", data);
    generatePdf(data);
  };

  const generatePdf = async (data: FormInputs) => {
    const pdf = new jsPDF("p", "mm", "a4");

    pdf.setFontSize(12);
    pdf.text("Form Data:", 10, 10);

    const keys = Object.keys(data) as (keyof FormInputs)[];
    let yPos = 20;
    const margin = 10;
    const lineHeight = 10;

    keys.forEach((key) => {
      const text = `${key}: ${data[key]}`;
      const textArray = pdf.splitTextToSize(text, 180);
      pdf.text(textArray, margin, yPos);
      yPos += textArray.length * lineHeight;
      if (yPos > pdf.internal.pageSize.height - 20) {
        pdf.addPage();
        yPos = 20;
      }
    });

    pdf.save("form_data.pdf");
  };

  return (
    <div className="flex flex-col" ref={formRef}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col items-center px-10 gap-10 justify-center h-[70vh]"
      >
        <div className="flex justify-between p-4 w-full">
          <h2>Gozegcilik Namasy</h2>
          <span>
            <Button htmlType="submit">
              <BiPrinter /> Cap et
            </Button>
          </span>
        </div>
        {/* Section one  */}
        <div className="w-full flex flex-col items-center gap-4">
          <h2 className="text-xl font-semibold">
            1. Ulgam arkaly gozeginin baslayan gumruk edarasynyn bellikleri
          </h2>
          <div className="flex w-full gap-5">
            <ReInput
              register={register}
              name="secfirst_1"
              inputname="Enjamyn GD-nyn we UY-nyn belgileri"
            />
            <ReInput
              register={register}
              name="secfirst_2"
              inputname="Baryan ugry (Gumruk edarasy)"
            />
            <ReInput
              register={register}
              name="secfirst_3"
              inputname="Auto ulag kysymy modeli gornusi"
            />
          </div>
          <div className="flex w-full gap-5">
            <ReInput
              register={register}
              name="secfirst_4"
              inputname="Awto ulag yurdy belgisi win belgisi"
            />
            <ReInput
              register={register}
              name="secfirst_5"
              inputname="Dasayjynyn ady familyasy we salgysy"
            />
            <ReInput
              register={register}
              name="secfirst_6"
              inputname="Surujinin umumy ady we mukdary"
            />
          </div>
          <div className="flex w-full gap-5">
            <ReInput
              register={register}
              name="secfirst_7"
              inputname="Password belgisi we senesi telefony"
            />
            <ReInput
              register={register}
              name="secfirst_8"
              inputname="Iberjinin ady we salgysy"
            />
            <ReInput
              register={register}
              name="secfirst_9"
              inputname="Alyjynyn ady we salgysy"
            />
            <ReInput
              register={register}
              name="secfirst_10"
              inputname="Harydyn umumy ady we mukdary"
            />
          </div>
        </div>
        {/* Section 2 */}
        <div className="w-full flex flex-col items-center gap-4">
          <h2 className="text-xl font-semibold">
            2. Aralykdaky gumruk edara bellikleri
          </h2>
          <div className="flex w-full gap-5">
            <ReInput
              register={register}
              name="secsecond_1"
              inputname="Gumruk edaranyn kody we ady"
            />
            <ReInput
              register={register}
              name="secsecond_2"
              inputname="UD belgisi"
            />
            <ReInput
              register={register}
              name="secsecond_3"
              inputname="Baryan ugry (Gumruk edarasy yurtlar)"
            />
          </div>
          <div className="flex w-full gap-5">
            <ReInput
              register={register}
              name="secsecond_4"
              inputname="Iberjinin ady we salgysy"
            />
            <ReInput
              register={register}
              name="secsecond_5"
              inputname="Alyjynyn ady salgysy"
            />
            <ReInput
              register={register}
              name="secsecond_6"
              inputname="Harydyn umumy ady mukdary"
            />
          </div>
        </div>
        {/* section 3 */}
        <div className="w-full flex flex-col items-center gap-4">
          <h2 className="text-xl font-semibold">
            3. Ulgam arkaly gozegciligin tamamlanyan gumruk edarasynyn
            bellikleri
          </h2>
          <div className="flex w-full gap-5">
            <ReInput
              name="secthird_1"
              register={register}
              inputname="Gumruk edaranyn kody we ady"
            />
            <ReInput
              name="secthird_2"
              register={register}
              inputname="Gozegciligin tamamlanmagy"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
