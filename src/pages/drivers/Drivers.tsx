import React, { useEffect, useState } from "react";
import { Table, Button, Modal, Form, Input } from "antd";

import { BiTrash } from "react-icons/bi";
import { DriverPayload } from "../../types/driverService";
import { useAppDispatch, useAppSelector } from "../../app/store/hooks";
import { driversListService } from "../../services/driversList.service";
import { selectDriverList } from "../../reducers/driverList.slice";
import { driverCreateService } from "../../services/driverCreate.service";
import { api } from "../../app/api/api";

const Drivers: React.FC = () => {
  const dispatch = useAppDispatch();
  const driverList = useAppSelector(selectDriverList);
  const listData = driverList?.map((item, index) => ({
    ...item,
    no: index + 1,
    key: item.id,
  }));
  useEffect(() => {
    dispatch(driversListService());
  }, []);

  const deleteDriver = async (id: number) => {
    try {
      await api
        .delete(`/driver/delete_driver/${id}`)
        .then(() => dispatch(driversListService()));
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      title: "TB",
      dataIndex: "no",
    },
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Ady",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Telefon nomeri",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Ulag nomeri",
      dataIndex: "car_number",
      key: "car_number",
    },
    {
      title: "Ulag kysymy",
      dataIndex: "car_model",
      key: "car_model",
    },
    {
      title: "Agramy",
      dataIndex: "weight",
      key: "weight",
    },
    {
      title: "Yurdy",
      dataIndex: "country",
      key: "country",
    },
    {
      title: "",
      key: "action",
      render: (record: any) => (
        <span className="flex items-center">
          <Button
            className="text-red-500"
            onClick={() => deleteDriver(record.id)}
          >
            <BiTrash />
          </Button>
        </span>
      ),
    },
  ];

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modaldata, setModalData] = useState<DriverPayload | null>(null);
  const [form] = Form.useForm();

  const showModal = (data: null | DriverPayload) => {
    setModalData(data);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values: DriverPayload) => {
        // adddriver(values)
        console.log(values);
        dispatch(
          driverCreateService({
            name: values.name,
            phone: values.phone,
            car_number: values.car_number,
            car_model: values.car_model,
            weight: Number(values.weight),
            country: values.country,
          })
        ).then(() => dispatch(driversListService()));
        form.resetFields();
        handleCancel();
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="p-4">
      <Button type="primary" onClick={() => showModal(null)}>
        Suruji gosmak
      </Button>
      <Table
        columns={columns}
        dataSource={listData}
        rowKey="id"
        style={{ marginTop: 16 }}
      />
      <Modal
        title="Suruji gosmak"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical" name="car_info_form">
          <Form.Item name="name" label="Surujinin ady">
            <Input />
          </Form.Item>
          <Form.Item name="phone" label="Telefon nomer">
            <Input />
          </Form.Item>
          <Form.Item name="car_number" label="Ulag nomeri">
            <Input />
          </Form.Item>
          <Form.Item name="car_model" label="Ulag kysymy">
            <Input />
          </Form.Item>
          <Form.Item name="weight" label="Agram">
            <Input type="number" />
          </Form.Item>
          <Form.Item name="country" label="Yurdy">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Drivers;
