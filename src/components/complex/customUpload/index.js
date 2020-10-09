import React from 'react'
import UploadImage from "./uploadImage"

const CustomUpload = (props) => {
  const { mutators } = props
  const uploadProps = props.props['x-component-props'] || {}
  
  return <UploadImage
    imgUrl={props.value}
    onChange={data => {
      mutators.change(data)
    }}
    {...uploadProps}
  />
}

CustomUpload.isFieldComponent = true

export default CustomUpload