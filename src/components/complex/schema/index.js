export const complexSchema = {
  type: "object",
  properties: {
    fieldOne: {
      type: "string",
      title: "属性一",
      required: true,
      "x-component": "Input"
    },
    connect: {
      type: "string",
      title: "联系操作",
      "x-component-props": {
        disabled: true,
        addonAfter: "{{connectOperation}}"
      },
      "x-component": "Input"
    },
    upload: {
      type: "string",
      title: "图片",
      "x-component-props": {
        listType: "card"
      },
      "x-component": "CustomUpload",
      description: "仅支持JPG/PNG//JPEG等图片格式数据单张上传"
    }
  }
};
