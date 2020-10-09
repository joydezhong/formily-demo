import React from "react";
import {
  SchemaForm,
  FormButtonGroup,
  Submit,
  Reset,
  createFormActions,
  // FormEffectHooks
} from "@formily/antd"; // 或者 @formily/next
import { Input, Select, Upload, DatePicker, Checkbox } from "@formily/antd-components"; // 或者@formily/next-components
import { Tooltip } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { basicSchema } from "./schema";

const basicAction = createFormActions();

const text = (params) => {
  return <span>{params}</span>;
};

const help = (title, desc) => {
  return (
    <div>
      <span>{title}</span>
      <Tooltip title={desc}>
        <QuestionCircleOutlined
          style={{ margin: "0 3px", cursor: "default", marginLeft: 3 }}
        />
      </Tooltip>
    </div>
  );
};

const components = {
  Input,
  Select,
  Upload,
  RangePicker: DatePicker.RangePicker,
  CheckboxGroup: Checkbox.Group
};

const BasicFormily = () => (
  <SchemaForm
    labelCol={24}
    wrapperCol={24}
    expressionScope={{
      help,
      text,
    }}
    components={components}
    schema={basicSchema}
    actions={basicAction}
    effects={($, { setFieldState }) => {
      $("onFieldValueChange", "classType").subscribe((parentState) => {
        setFieldState("currentToggle", (state) => {
          state.visible = parentState.value;
        });
        setFieldState("currentStatus", (state) => {
          state.value = parentState.value ? "显示" : "隐藏";
        });
      });
    }}
    onSubmit={(values) => {
      console.log(values);
    }}
  >
    <FormButtonGroup offset={0}>
      <Submit>查询</Submit>
      <Reset>重置</Reset>
    </FormButtonGroup>
  </SchemaForm>
);

export default BasicFormily;
