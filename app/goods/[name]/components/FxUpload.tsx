'use client';

import React, { useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Image, Upload, Col, message } from 'antd';
import type { GetProp, UploadFile, UploadProps } from 'antd';
import ButtonPart from './sub-comp/Button';
import { numberFilesTotUpload, sizeFileTotUpload } from '@/z-config/siteConfig'


type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
});
  

export default function FxUpload({ name }: { name: string }) {


  const [previewOpen, setPreviewOpen] = useState(false);
  const [isMessage, setIsMessage] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  
console.log(fileList)

  const handlePreview = async (file: UploadFile) => {
    if(file?.size){
      const isLt2M = file?.size / 1024 / 1024 < sizeFileTotUpload;
      if (isLt2M){
        if (!file.url && !file.preview) {
          file.preview = await getBase64(file.originFileObj as FileType);
        }
        setPreviewImage(file.url || (file.preview as string));
        setPreviewOpen(true);
      }
    }
  };

    const handleChange: UploadProps['onChange'] = ({ file, fileList: newFileList }) => {
      if(file?.size){
        const isLt2M = file?.size / 1024 / 1024 < sizeFileTotUpload;
        if (!isLt2M) {
          setIsMessage(true)
        }else{
          setFileList(newFileList);
        }
      }
    };

    useEffect(() => {
      if(isMessage){
        message.open({
          type: 'error',
          content: `Файл не должен быть больше ${sizeFileTotUpload}MB!`,
        });
        setIsMessage(false)
      }
    }, [isMessage]);



  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>{`до ${numberFilesTotUpload}х${sizeFileTotUpload} Mb`}</div>
    </button>
  );

  return (
    <>
      <Col span={24}>

        <Upload
          // action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
          listType="picture-card"
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}
          accept=".png, .jpg, .jpeg, .tif, .tiff" 
          // beforeUpload={beforeUpload}
        >
          {fileList.length >= numberFilesTotUpload ? null : uploadButton}
        </Upload>
        {previewImage && (
          <Image
            wrapperStyle={{ display: 'none' }}
            preview={{
              visible: previewOpen,
              onVisibleChange: (visible) => setPreviewOpen(visible),
              afterOpenChange: (visible) => !visible && setPreviewImage(''),
            }}
            src={previewImage}
          />
        )}
      </Col>
          <ButtonPart fileList={fileList}  name={name}/>
    </>
  );
};

// export default FxUpload;