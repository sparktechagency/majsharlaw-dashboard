"use client"

import React, { useRef, useState } from "react";
import JoditEditor from "jodit-react";

const TermsAndConditions = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = {
    readonly: false,
    height: 400,
    toolbarButtonSize: "medium",
    toolbarSticky: false,
    buttons: [
      'undo', 'redo', '|',
      'bold', 'italic', 'underline', 'strikethrough', '|',
      'fontsize', 'font', 'paragraph', '|',
      'ul', 'ol', 'align', '|',
      'image', 'link', 'table', '|',
      'brush', 'copyformat', '|',
      'fullsize', 'preview', 'print', '|',
      'source'
    ],
    uploader: { insertImageAsBase64URI: true }
  };

  const handleSave = () => {
    console.log("Saved Terms & Conditions:", content);
    // Here you can trigger an API call to save the content
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        onBlur={(newContent) => setContent(newContent)}
      />

      <button
        onClick={handleSave}
        className="mt-4 px-6 py-2 bg-[#6DA40A] text-white rounded hover:bg-[#6ea40acb] transition cursor-pointer"
      >
        Save
      </button>
    </div>
  );
};

export default TermsAndConditions;
