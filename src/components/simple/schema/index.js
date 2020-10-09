export const simpleSchema = {
  type: "object",
  properties: {
    input: {
      type: "string",
      title: "输入",
      required: true,
      "x-component": "Input",
      "x-component-props": {
        placeholder: "请输入"
      }
    },
    input2: {
      type: "string",
      title: "输入2",
      required: true,
      "x-component": "Input",
      "x-component-props": {
        placeholder: "请输入"
      }
    },
    select: {
      type: "number",
      title: "下拉选",
      required: true,
      "x-component-props": {
        placeholder: "请选择"
      },
      enum: [
        { label: "选项一", value: 1 },
        { label: "选项二", value: 2 }
      ],
      "x-component": "select"
    },
    radio: {
      title: "单选",
      "x-component": "RadioGroup",
      enum: ["1", "2", "3", "4"]
    },
    checkbox: {
      title: "复选",
      "x-component": "CheckboxGroup",
      enum: [
        { label: "One", value: 1 },
        { label: "Two", value: 2 },
        { label: "Three", value: 3 }
      ]
    },
    dateRange: {
      type: "object",
      title: "时间范围",
      required: true,
      properties: {
        "[start,end]": {
          "x-component": "RangePicker",
          "x-component-props": {
            placeholder: ["开始时间", "结束时间"]
          }
        }
      }
    },
    upload: {
      type: "array",
      title: "图片",
      "x-component-props": {
        listType: "card",
        action: "https://www.mocky.io/v2/5cc8019d300000980a055e76"
      },
      "x-component": "upload",
      description: "仅支持多图类上传"
    }
  }
};
