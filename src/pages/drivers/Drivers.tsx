import React, { useEffect, useState } from "react";
import { Table, Button, Modal, Form, Input } from "antd";

import { BiTrash } from "react-icons/bi";
import { DriverPayload } from "../../types/driverService";
import { useAppDispatch, useAppSelector } from "../../app/store/hooks";
import { driversListService } from "../../services/driversList.service";
import { selectDriverList } from "../../reducers/driverList.slice";

const Drivers: React.FC = () => {
  const dispatch = useAppDispatch();
  const driverList = useAppSelector(selectDriverList);

  useEffect(() => {
    dispatch(driversListService());
  }, []);

  const columns = [
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
      title: "Телефонный Номер",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Номер Авто",
      dataIndex: "car_number",
      key: "car_number",
    },
    {
      title: "Модель Авто",
      dataIndex: "car_model",
      key: "car_model",
    },
    {
      title: "Вес",
      dataIndex: "weight",
      key: "weight",
    },
    {
      title: "Страна",
      dataIndex: "country",
      key: "country",
    },
    {
      title: "Action",
      key: "action",
      render: (record: DriverPayload) => (
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
        // dispatch(driverCreateService(values));
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
        Добавить Запись
      </Button>
      <Table
        columns={columns}
        dataSource={driverList}
        rowKey="id"
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
            name="car_number"
            label="Номер Авто"
            rules={[
              { required: true, message: "Пожалуйста, введите номер авто!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="car_model"
            label="Модель Авто"
            rules={[
              { required: true, message: "Пожалуйста, введите модель авто!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="weight"
            label="Вес"
            rules={[
              {
                required: true,
                message: "Пожалуйста, введите вес!",
                type: "integer",
              },
            ]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            name="name"
            label="Имя"
            rules={[{ required: true, message: "Пожалуйста, введите имя!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="phone"
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
          <Form.Item
            name="country"
            label="Страна"
            rules={[
              {
                required: true,
                message: "Пожалуйста, введите страну!",
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
