import React, { useState } from "react";
import {
  SchemaForm,
  FormButtonGroup,
  Submit,
  Reset,
  createFormActions,
  // createAsyncFormActions
  // FormEffectHooks
} from "@formily/antd";
import { Modal, Table } from "antd";
import { Input, Upload } from "@formily/antd-components";
import { complexSchema } from "./schema";
import CustomUpload from "./customUpload"

import "./index.css";

const dataSource = [
  {
    key: 1,
    name: "胡十三烂",
    age: 32,
    address: "西湖区湖底公园1号"
  },
  {
    key: 2,
    name: "胡清一色",
    age: 42,
    address: "西湖区湖底公园1号"
  }
];

const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age"
  },
  {
    title: "住址",
    dataIndex: "address",
    key: "address"
  }
];

const complexAction = createFormActions();

const ComplexLinkFormily = () => {
  const [visible, setVisible] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);

  const clickLink = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
    complexAction.setFieldValue("connect", selectedRows[0].name);
  };

  const connectOperation = (
    <span onClick={clickLink} className="connectButton">
      关联
    </span>
  );

  const onSelectChange = (selectedIds, selectedRows) => {
    setSelectedRowKeys(selectedIds);
    setSelectedRows(selectedRows);
    console.log(selectedRows);
  };

  const rowSelection = {
    type: "radio",
    selectedRowKeys,
    onChange: onSelectChange
  };

  const components = {
    Input,
    Upload,
    CustomUpload
  };

  return (
    <div>
      <SchemaForm
        labelCol={24}
        wrapperCol={24}
        expressionScope={{
          connectOperation
        }}
        components={components}
        schema={complexSchema}
        actions={complexAction}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <FormButtonGroup offset={0}>
          <Submit>查询</Submit>
          <Reset>重置</Reset>
        </FormButtonGroup>
      </SchemaForm>
      <Modal
        title="关联表格"
        visible={visible}
        onOk={handleOk}
        onCancel={() => setVisible(false)}
        okText="确定"
        cancelText="取消"
      >
        <Table
          dataSource={dataSource}
          columns={columns}
          rowSelection={rowSelection}
          rowKey="key"
          pagination={{ size: "small" }}
        />
      </Modal>
    </div>
  );
};

export default ComplexLinkFormily;
