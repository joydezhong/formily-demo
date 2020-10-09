export const extendSchema = {
  type: "object",
  properties: {
    a1: {
      type: "number",
      title: "x-rules校验",
      required: true,
      "x-component": "input",
      "x-rules": {
        validator: (value) => {
          return value === "123" ? "不能等于123" : "";
        }
      }
    },
    a2: {
      type: "number",
      title: "属性二",
      required: true,
      "x-component-props": {
        placeholder: "请选择品类类型"
      },
      enum: [
        { label: "选项一", value: 1 },
        { label: "选项二", value: 2 },
        { label: "选项三", value: 3 },
        { label: "选项四", value: 4 }
      ],
      "x-component": "select"
    },
    a3: {
      type: "string",
      title: "自定义函数校验",
      required: true,
      "x-component": "Input",
      "x-rules": {
        customRule2: true
      }
    },
    a4: {
      title: "属性四",
      "x-component": "CheckboxGroup",
      enum: [
        { label: "One", value: 1 },
        { label: "Two", value: 2 },
        { label: "Three", value: 3 },
        { label: "Four", value: 4 }
      ]
    },
    t1: {
      type: "object",
      "x-component": "CustomTitle",
      "x-component-props": {
        text: "下面是字段组件和虚拟组件的扩展"
      }
    },
    a5: {
      type: "string",
      title: "自定义字段属性",
      required: true,
      "x-component": "CustomFieldComponent",
      "x-component-props": {
        dataSource: [1, 3, 5]
      }
    },
    a6: {
      type: "object",
      title: "自定义虚拟布局",
      "x-component": "CustomLayout",
      "x-component-props": {
        say: "这是虚拟字段，一般用于布局"
      }
    }
  }
};
