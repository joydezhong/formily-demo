import React from "react";
import { useFormEffects, useFieldState } from "@formily/antd";
import { Checkbox } from "antd";

const CustomFieldComponent = (props) => {
  const { value, schema, className, editable, path, mutators, form } = props;

  // 自定义状态
  const [state, setFieldState] = useFieldState({
    toggle: false
  });

  //获取”x-component-props"的属性值
  const componentProps = schema.getExtendsComponentProps() || {};

  // 组件内通过 useFormEffects 监听自定义事件
  useFormEffects(($, { notify, setFieldState, getFieldState }) => {
    $("customEvent1").subscribe((payload) => {
      console.log(payload);
    });
    $("customEvent2").subscribe((payload) => {
      console.log(payload);
    });
  });

  const onChange = (e) => {
    setFieldState({
      toggle: e.target.checked
    });
  };

  return (
    <div>
      <h3 style={{ fontSize: 14 }}>这是自定义字段组件描述</h3>
      <Checkbox onChange={onChange}>是否显示详情</Checkbox>
      <input
        value={value || ""}
        onChange={(e) => mutators.change(e.target.value)}
      />
      {state.toggle && (
        <p style={{ fontSize: 14 }}>
          {componentProps["dataSource"].toString()}
        </p>
      )}
    </div>
  );
};

CustomFieldComponent.isFieldComponent = true;

export default CustomFieldComponent;
