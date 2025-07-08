import { ImageIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const UploadImage = () => {
  const [uploadedFiles, setUploadedFiles] = useState(null);
  // image uploading function

  const handleFileUpload = () => {
    // Simulate file upload
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const newFile = {
          id: Date.now(),
          name: file.name,
          file: URL.createObjectURL(file), // Create a local URL for the file
        };
        setUploadedFiles(newFile);
      }
    };
    input.click();
  };
  // image removing function
  const handleRemoveFile = () => {
    setUploadedFiles(null);
  };
  return (
    <>
      {!uploadedFiles ? (
        <button
          onClick={handleFileUpload}
          className="w-12 h-12 border border-[#00000033] rounded-lg flex items-center justify-center cursor-pointer"
        >
          <ImageIcon className="w-5 h-5 text-gray-400" />
        </button>
      ) : (
        <Image
          onClick={() => handleRemoveFile()}
          src={uploadedFiles.file}
          alt={`City view `}
          width={120}
          height={120}
          className="object-cover w-12 h-12 border border-[#00000033] rounded-lg flex items-center justify-center cursor-pointer"
        />
      )}
    </>
  );
};

export default UploadImage;
