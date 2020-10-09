export const tabsSchema = {
  type: "object",
  properties: {
    "tabs": {
      type: "object",
      "x-component": "tab",
      "x-component-props": {
        type: 'card'
      },
      properties: {
        "tab-1": {
          type: "object",
          "x-component": "tabpane",
          "x-component-props": {
            tab: "选项1"
          },
          properties: {
            a1: {
              type: "string",
              title: "属性一",
              required: true,
              "x-component": "input"
            },
            a2: {
              type: "number",
              title: "属性二",
              required: true,
              "x-component-props": {
                placeholder: "请选择"
              },
              enum: [
                { label: "选项一", value: 1 },
                { label: "选项二", value: 2 },
                { label: "选项三", value: 3 },
                { label: "选项四", value: 4 }
              ],
              "x-component": "select"
            },
          }
        },
        "tab-2": {
          type: "object",
          "x-component": "tabpane",
          "x-component-props": {
            tab: "选项2"
          },
          properties: {
            b1: {
              type: "string",
              title: "字段2",
              required: true,
              "x-component": "input"
            },
            b2: {
              type: "string",
              title: "字段3",
              required: true,
              "x-component": "input"
            },
            b3: {
              type: "string",
              title: "字段4",
              required: true,
              "x-component": "input"
            },
            b4: {
              type: "string",
              title: "字段5",
              required: true,
              "x-component": "input"
            }
          }
        }
      }
    }
  }
};
