import React from "react";
import {
  SchemaForm,
  FormButtonGroup,
  Submit,
  Reset,
  createFormActions,
  // FormEffectHooks
} from "@formily/antd";
import { Input, Select, MegaLayout, FormTab } from "@formily/antd-components";
import { tabsSchema } from "./schema";

const tabsAction = createFormActions();

const components = {
  Input,
  Select,
  tab: FormTab,
  tabpane: FormTab.TabPane,
  MegaLayout
};

const TabsFormily = () => (
  <SchemaForm
    labelCol={24}
    wrapperCol={24}
    components={components}
    schema={tabsSchema}
    actions={tabsAction}
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

export default TabsFormily;
