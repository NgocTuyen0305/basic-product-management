import React, { useState } from "react";
import { Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";

const CloudinaryUpload = ({onImageUploadSuccess}:any) => {
  const [imageUrl, setImageUrl] = useState("");

  const handleUpload = async (options: any) => {
    const { onSuccess, onError, file } = options;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "Typescript");
    formData.append("folder", "Typescript");
    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/dnywbghd0/image/upload`,
        formData
      );
      setImageUrl(response.data.secure_url);
      onImageUploadSuccess(response.data.secure_url);
      console.log(response.data.secure_url);
      
      onSuccess("ok");
    } catch (err) {
      console.log(err);
      onError(
        new Error("Error uploading image. Please try again later.")
      );
    }
  };

  const customRequest = ({ onSuccess, onError, file }: any) => {
    handleUpload({
      file,
      onSuccess,
      onError,
    });
  };

  return (
    <div>
      <Upload
        accept=".jpg,.jpeg,.png"
        customRequest={customRequest}
        showUploadList={false}
      >
        <Button icon={<UploadOutlined />}>Upload</Button>
      </Upload>
      {imageUrl && (
        <img
          src={imageUrl}
          alt="Uploaded"
          style={{ width: "150px", marginTop: "16px" }}
        />
      )}
    </div>
  );
};

export default CloudinaryUpload;
