// TransactionTable.tsx
import React, { useState, useEffect } from "react";
import { Table, TableProps } from "antd";
import UpdateOrCreateTransactionForm from "./components/UpdateOrCreateTransactionForm";
import { getTransactionList } from "../../services/mock/api";

const TransactionTable: React.FC = () => {
  const [transactions, setTransactions] = useState<API.TransactionType[]>([]);
  const [selectedTransaction, setSelectedTransaction] =
    useState<API.TransactionType | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    const data = await getTransactionList();
    setTransactions(data);
  };

  const handleRowDoubleClick = (transaction: API.TransactionType) => {
    setSelectedTransaction(transaction);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setSelectedTransaction(null);
    setIsModalVisible(false);
    fetchTransactions(); // Refresh data after editing or creating
  };

  const columns: TableProps<API.TransactionType>["columns"] = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      defaultSortOrder: "ascend",
      sorter: (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
      render: (date: string) => new Date(date).toLocaleDateString(),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Balance",
      dataIndex: "balance",
      key: "balance",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Vat",
      dataIndex: "vat",
      key: "vat",
      render: (vat: string) => vat + "%",
    },
    {
      title: "Declaration",
      dataIndex: "declaration",
      key: "declaration",
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        dataSource={transactions}
        rowKey="key"
        onRow={(record) => ({
          onDoubleClick: () => handleRowDoubleClick(record),
        })}
      />
      {isModalVisible && (
        <UpdateOrCreateTransactionForm
          selectedTransaction={selectedTransaction}
          open={isModalVisible}
          onClose={handleModalClose}
        />
      )}
    </>
  );
};

export default TransactionTable;
