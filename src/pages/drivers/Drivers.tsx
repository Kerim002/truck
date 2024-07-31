import React, { useEffect, useState } from "react";
import { Table, Button, Modal, Form, Input } from "antd";

import { BiEdit, BiTrash } from "react-icons/bi";

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
      title: "ID Авто",
      dataIndex: "carID",
      key: "carID",
    },
    {
      title: "Дата",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "ID Устройства",
      dataIndex: "deviceID",
      key: "deviceID",
    },
    {
      title: "Конечная Точка",
      dataIndex: "endPoint",
      key: "endPoint",
    },
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Имя",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Начальная Точка",
      dataIndex: "startPoint",
      key: "startPoint",
    },
    {
      title: "Фамилия",
      dataIndex: "surname",
      key: "surname",
    },
    {
      title: "Телефонный Номер",
      dataIndex: "telNum",
      key: "telNum",
    },
    {
      title: "Action",
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
      <Button type="primary" onClick={() => showModal(null)}>
        Добавить Запись
      </Button>
      <Table
        columns={columns}
        // dataSource={driverList?.data}
        style={{ marginTop: 16 }}
      />
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
