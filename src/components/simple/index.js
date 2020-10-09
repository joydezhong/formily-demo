import React from "react";
import { SchemaForm, FormButtonGroup, Submit, Reset } from "@formily/antd"; // 或者 @formily/next
import {
  Input,
  Select,
  Checkbox,
  Radio,
  DatePicker,
  Upload
} from "@formily/antd-components"; // 或者@formily/next-components
import { simpleSchema } from "./schema";

const components = {
  Input,
  Select,
  CheckboxGroup: Checkbox.Group,
  RadioGroup: Radio.Group,
  RangePicker: DatePicker.RangePicker,
  Upload
};

const SimpleFormily = () => (
  <SchemaForm
    labelCol={24}
    wrapperCol={24}
    components={components}
    schema={simpleSchema}
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

export default SimpleFormily;
