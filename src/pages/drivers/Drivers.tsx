import React, { useState } from "react";
import { Table, Button, Modal, Form, Input } from "antd";

import { BiTrash } from "react-icons/bi";
import { DriverItem } from "../../types/driverService";
import { useAppDispatch, useAppSelector } from "../../app/store/hooks";
import { driversListService } from "../../services/drivers.service";
import { selectDriverList } from "../../reducers/driverList.slice";

const Drivers: React.FC = () => {
  const dispatch = useAppDispatch();
  const driverList = useAppSelector(selectDriverList);

  useEffect(() => {
    dispatch(driversListService());
  }, []);

  const columns = [
    {
      title: "Ady",
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
      title: "Pozmak",
      key: "action",
      render: (record: DriverItem) => (
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
  const [modaldata, setModalData] = useState<DriverItem | null>(null);
  const [form] = Form.useForm();

  const showModal = (data: null | DriverItem) => {
    setModalData(data);
    setIsModalVisible(true);
  };

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
    <div className="p-4">
      <Button type="primary" onClick={() => showModal(null)}>
        Добавить Запись
      </Button>
      <Table
        columns={columns}
        dataSource={driverList}
        rowKey="id"
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
            rules={[{ required: true, message: "Пожалуйста, введите вес!" }]}
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
