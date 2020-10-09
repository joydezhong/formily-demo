import React from "react";
import {
  SchemaForm,
  FormButtonGroup,
  Submit,
  Reset,
  createFormActions,
  // FormEffectHooks
} from "@formily/antd";
import { Input, Upload } from "@formily/antd-components";
import { complexSchema } from "./schema";
import CustomUpload from "./customUpload"

import "./index.css";

const complexAction = createFormActions();

const connectOperation = <span className="connectButton">关联</span>;

const components = {
  Input,
  Upload,
  CustomUpload
};

const ComplexLinkFormily = () => (
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
);

export default ComplexLinkFormily;