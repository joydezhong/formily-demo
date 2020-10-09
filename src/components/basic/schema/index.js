export const basicSchema = {
  type: "object",
  properties: {
    className: {
      type: "string",
      title: "{{help('属性一','这是帮助信息')}}",
      required: true,
      "x-component": "input"
    },
    type: {
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
    classType: {
      type: "number",
      enum: [
        {
          label: "显示",
          value: 1
        },
        {
          label: "隐藏",
          value: 0
        }
      ],
      title: "联动①",
      required: true,
      default: 1,
      "x-component": "select",
      description: "利用生命周期做联动"
    },
    currentToggle: {
      type: "string",
      title: "联动①组件",
      required: true,
      "x-component": "Input"
    },
    currentStatus: {
      type: "string",
      title: "联动①状态",
      required: true,
      "x-component": "Input"
    },
    linkTwo: {
      type: "number",
      enum: [
        {
          label: "联动②显示",
          value: 1
        },
        {
          label: "联动②隐藏",
          value: 0
        },
        {
          label: "联动②控制schema的title字段",
          value: 3
        }
      ],
      title: "联动②",
      required: true,
      default: 1,
      "x-component": "select",
      'x-linkages': [
        {
          type: 'value:visible',
          target: 'linkTwoEle',
          condition: '{{ $value === 1 || $value === 3 }}'
        },
        {
          type: "value:schema",
          target: 'linkTwoEle',  //采用相邻查找和相对路径查找语法
          condition: '{{ $value === 3 }}',//当值为123时发生联动
          schema: {
            title: "这是联动的标题"
          }
        },
      ],
      description:
        "利用 x-linkages 属性做联动，这个只是简单联动，它无法描述异步联动，也无法描述联动过程中的各种复杂数据处理。"
    },
    linkTwoEle: {
      type: "object",
      title: "联动②组件",
      required: true,
      properties: {
        "[start,end]": {
          // title: "RangePicker",
          "x-component": "RangePicker",
          'x-component-props': {
            placeholder: ['开始时间','结束时间'],
          },
        }
      }
    },
    checkboxField: {
      title: '复选字段',
      'x-component': 'CheckboxGroup',
      enum: [
        { label: 'One', value: 1 },
        { label: 'Two', value: 2 },
        { label: 'Three', value: 3 },
        { label: 'Four', value: 4 }
      ]
    },
  }
};
