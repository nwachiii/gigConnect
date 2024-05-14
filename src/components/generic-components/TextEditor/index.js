import { Box, Stack } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { LuSend } from "react-icons/lu";
const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });

const TextEditor = ({ placeholder }) => {
  const quillRef = useRef();
  useEffect(() => {
    if (quillRef.current) {
      const quill = quillRef.current.getEditor();
      const toolbar = quill.getModule("toolbar");

      toolbar.addHandler("luSend", function () {
        console.log("LuSend button was clicked!");
        // Add your logic here
      });
    }
  }, []);

  return (
    <div className="text-editor">
      <div id="toolbar">
        <button className="ql-bold"></button>
        <button className="ql-italic"></button>
        <button className="ql-underline"></button>
        <button className="ql-strike"></button>
      </div>
      <QuillEditor
        placeholder={placeholder}
        ref={quillRef}
        modules={{ toolbar: "#toolbar" }}
      />
      <LuSend
        style={{
          padding: ".25rem",
          background: "#053AF9",
          borderRadius: "100%",
          alignSelf: "end",
          marginRight: '1rem',
          position: 'absolute',
          marginBottom: '3rem'
        }}
        color="#FFF"
        className="ql-luSend"
        size={30}
      />
    </div>
  );
};

export default TextEditor;
