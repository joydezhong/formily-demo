import React, { useState } from 'react'
import { Upload, message, Button } from 'antd';
import { LoadingOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons';

import './index.css'

const UploadImage = (props) => {
  const [ loading, setLoading ] = useState(false)

  const { imgUrl, onChange } = props

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('仅支持上传 JPG/PNG 文件!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('图片不超过2MB!');
    }
    return isJpgOrPng && isLt2M;
  }

  const handleChange = info => {
    if (info.file.status === 'uploading') {
      setLoading(true)
      return;
    }
    if (info.file.status === 'done') {
      console.log(info.file)
      setLoading(false)
      // setImageUrl(info.file.response.url)
      onChange(info.file.response.url)
    }
  }

  const clearImage = () =>  {
    onChange('')
  }

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>上传</div>
    </div>
  )

  return (
    <div className="customeUploadImage">
      <Upload
        name="avatar"
        listType="picture-card"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imgUrl ? <img src={imgUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
      </Upload>
      {
        imgUrl && <div className="deleteWrap"><Button onClick={clearImage} className="deleteBtn" type="text" icon={<DeleteOutlined />} /></div>
      }
    </div> 
  )
}

export default UploadImage