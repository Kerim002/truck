import React, { useState } from "react";
import { Table, Button, Modal, Form, Input } from "antd";

import { BiTrash } from "react-icons/bi";
import Thead from "../../components/reusable/Thead";
import DriversRow from "./components/DriversRow";

const driversHead = [
  {
    size: 1,
    name: "TB",
  },
  {
    size: 3,
    name: "Ulag Id",
  },
  {
    size: 3,
    name: "Gulp Id",
  },
  {
    size: 3,
    name: "Wagty",
  },
  {
    size: 3,
    name: "Baslangyc nokady",
  },
  {
    size: 3,
    name: "Sonky nokady",
  },
  {
    size: 3,
    name: "Ady",
  },
  {
    size: 3,
    name: "Familyasy",
  },
  {
    size: 3,
    name: "Suruji tel nomer",
  },
  {
    size: 3,
    name: "Pozmak",
  },
];

interface DataType {
  key: string;
  carID: string;
  date: string;
  deviceID: string;
  endPoint: string;
  id: string;
  name: string;
  startPoint: string;
  surname: string;
  telNum: string;
}

const Drivers: React.FC = () => {
  const columns = [
    {
      title: "Ulag Id",
      dataIndex: "carID",
      key: "carID",
    },
    {
      title: "Gulp Id",
      dataIndex: "lockId",
      key: "lockId",
    },
    {
      title: "Wagty",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Baslangyc nokady",
      dataIndex: "startPoint",
      key: "startPoint",
    },
    {
      title: "Sonky nokady",
      dataIndex: "endPoint",
      key: "endPoint",
    },
    {
      title: "Ady",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Familyasy",
      dataIndex: "surname",
      key: "surname",
    },
    {
      title: "Suruji tel nomer",
      dataIndex: "telNum",
      key: "telNum",
    },

    {
      title: "Pozmak",
      key: "action",
      render: (record: DataType) => (
        <span className="flex items-center">
          <Button
            className="text-red-500"
            // onClick={() => deletedriver(record.id)}
          >
            <BiTrash />
          </Button>
        </span>
      ),
    },
  ];
  // const { data: driverList } = useGetAllDriversQuery(1);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modaldata, setModalData] = useState<DataType | null>(null);
  const [form] = Form.useForm();
  // const [deletedriver] = useDeleteDriverMutation();
  const showModal = (data: null | DataType) => {
    setModalData(data);
    setIsModalVisible(true);
  };
  // const [adddriver] = useAddDriverMutation();

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        // adddriver(values);
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
    <div className=" p-4">
      {/* <Button type="primary" onClick={() => showModal(null)}>
        Suruji Gosmak
      </Button> */}
      {/* <Table
        columns={columns}
        // dataSource={driverList?.data}
        style={{ marginTop: 16 }}
      /> */}
      <div className="mt-2">
        <Thead info={driversHead} />
        <div className="flex flex-col pt-2 gap-4">
          <DriversRow />
          <DriversRow />
          <DriversRow />
        </div>
      </div>
      <Modal
        title="Добавить Новую Запись"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical" name="car_info_form">
          <Form.Item
            name="carID"
            label="ID Авто"
            rules={[
              { required: true, message: "Пожалуйста, введите ID авто!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="date"
            label="Дата"
            rules={[{ required: true, message: "Пожалуйста, введите дату!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="deviceID"
            label="ID Устройства"
            rules={[
              { required: true, message: "Пожалуйста, введите ID устройства!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="endPoint"
            label="Конечная Точка"
            rules={[
              {
                required: true,
                message: "Пожалуйста, введите конечную точку!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="name"
            label="Имя"
            rules={[{ required: true, message: "Пожалуйста, введите имя!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="startPoint"
            label="Начальная Точка"
            rules={[
              {
                required: true,
                message: "Пожалуйста, введите начальную точку!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="surname"
            label="Фамилия"
            rules={[
              { required: true, message: "Пожалуйста, введите фамилию!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="telNum"
            label="Телефонный Номер"
            rules={[
              {
                required: true,
                message: "Пожалуйста, введите телефонный номер!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Drivers;
