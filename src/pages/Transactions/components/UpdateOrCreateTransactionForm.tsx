// TransactionModal.tsx
import React from "react";
import { updateOrCreateTransaction } from "../../../services/mock/api";
import { Modal, Form, Input, InputNumber, Select } from "antd";

type UpdateOrCreateTransactionFormProps = {
  selectedTransaction: API.TransactionType | null;
  open: boolean;
  onClose: () => void;
};

const UpdateOrCreateTransactionForm: React.FC<
  UpdateOrCreateTransactionFormProps
> = ({ selectedTransaction, open: visible, onClose }) => {
  const [form] = Form.useForm();

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      await updateOrCreateTransaction(values);
      form.resetFields();
      onClose();
    } catch (error) {
      console.error("Form validation failed:", error);
    }
  };

  return (
    <Modal
      title="Edit Transaction"
      open={visible}
      onOk={handleOk}
      onCancel={onClose}
      destroyOnClose
    >
      <Form
        form={form}
        initialValues={selectedTransaction || { amount: 0, date: "" }}
        layout="vertical"
      >
        <Form.Item name="key" label="Key" hidden>
          <Input />
        </Form.Item>
        <Form.Item
          name="date"
          label="Date"
          rules={[{ required: true, message: "Please input the date" }]}
        >
          <Input type="date" />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input />
        </Form.Item>
        <Form.Item
          name="amount"
          label="Amount"
          rules={[{ required: true, message: "Please input the amount" }]}
        >
          <InputNumber suffix="€" />
        </Form.Item>
        <Form.Item
          name="balance"
          label="Balance"
          rules={[{ required: true, message: "Please input the balance" }]}
        >
          <InputNumber suffix="€" />
        </Form.Item>
        <Form.Item name="category" label="Category">
          <Select
            showSearch
            placeholder="Select a category"
            optionFilterProp="label"
            options={[
              {
                value: "Kaufpreis",
                label: "Kaufpreis",
              },
              {
                value: "Aufwertung",
                label: "Aufwertung",
              },
              {
                value: "Sonstige Investitionskosten",
                label: "Sonstige Investitionskosten",
              },
              {
                value: "Betriebskosten",
                label: "Betriebskosten",
              },
              {
                value: "Instandhaltung",
                label: "Instandhaltung",
              },
              {
                value: "Sonstige Kosten",
                label: "Sonstige Kosten",
              },
              {
                value: "Mieteinnahmen",
                label: "Mieteinnahmen",
              },
              {
                value: "Sonstige Einnahmen",
                label: "Sonstige Einnahmen",
              },
              {
                value: "Ignorieren",
                label: "Ignorieren",
              },
              {
                value: "Steuerrelevant",
                label: "Steuerrelevant",
              },
              {
                value: "-",
                label: "-",
              },
            ]}
          />
        </Form.Item>
        <Form.Item name="vat" label="Vat">
          <Select
            showSearch
            placeholder="Select the vat value"
            optionFilterProp="label"
            options={[
              {
                value: 21,
                label: "21 %",
              },
              {
                value: 10,
                label: "10 %",
              },
              {
                value: 9.5,
                label: "9.5 %",
              },
              {
                value: 4,
                label: "4 %",
              },
              {
                value: 0,
                label: "0 %",
              },
            ]}
          />
        </Form.Item>
        <Form.Item name="declaration" label="Declaration">
          <Select
            showSearch
            placeholder="Select the declaration"
            optionFilterProp="label"
            options={[
              {
                value: "303/210 - Nettomiete",
                label: "303/210 - Nettomiete",
              },
              {
                value: "303 - Kosten mit Ust",
                label: "303 - Kosten mit Ust",
              },
              {
                value: "210 - Kosten ohne Ust",
                label: "210 - Kosten ohne Ust",
              },
              {
                value: "-",
                label: "-",
              },
            ]}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UpdateOrCreateTransactionForm;
