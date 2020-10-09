import React from "react";
import {
  SchemaForm,
  FormButtonGroup,
  Submit,
  Reset,
  createFormActions,
  registerVirtualBox,
  registerValidationRules
  // FormEffectHooks
} from "@formily/antd";
import {
  Input,
  Select,
  Upload,
  DatePicker,
  Checkbox
} from "@formily/antd-components";
import { extendSchema } from "./schema";

import CustomFieldComponent from "./components/fieldComponent";

const extendAction = createFormActions();

// 注册virtual组件 一般用于布局
registerVirtualBox("CustomLayout", ({ children, schema }) => {
  return (
    <div style={{ border: "1px solid red", padding: 10 }}>
      {children}
      {schema["x-component-props"]["say"]}
    </div>
  );
});

registerVirtualBox("CustomTitle", ({ children, schema }) => {
  return (
    <h3>
      {children}
      {schema["x-component-props"]["text"]}
    </h3>
  );
});

// 自定义函数校验
registerValidationRules({
  customRule2: (value) => {
    return value === "123" ? "不能等于123" : "";
  }
});

const components = {
  Input,
  Select,
  Upload,
  RangePicker: DatePicker.RangePicker,
  CheckboxGroup: Checkbox.Group,
  CustomFieldComponent
};

// 全局自定义事件
extendAction.dispatch("customEvent1", { value: 666, text: "全局的payload" });

const ExtendFormily = () => (
  <SchemaForm
    labelCol={24}
    wrapperCol={24}
    // expressionScope={{
    //   CustomFieldComponent
    // }}
    components={components}
    schema={extendSchema}
    actions={extendAction}
    effects={($, { notify }) => {
      // effect派发自定义事件
      $("onFieldValueChange", "a2").subscribe((parentState) => {
        notify("customEvent2", parentState);
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

export default ExtendFormily;
