import { useState, useRef } from "react";

export const DragDropFiles = () => {
  const [files, setFiles] = useState(null);
  const inputRef = useRef();

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setFiles(e.dataTransfer.files);
  };

  // send files to the server // learn from my other video
  const handleUpload = () => {
    const formData = new FormData();
    formData.append("Files", files);
    console.log(formData.getAll());
    // fetch(
    //   "link", {
    //     method: "POST",
    //     body: formData
    //   }
    // )
  };

  if (files)
    return (
      <div className="uploads">
        <ul>
          {Array.from(files).map((file, idx) => (
            <li key={idx}>{file.name}</li>
          ))}
          <div className="actions">
            <button onClick={() => setFiles(null)}>Cancel</button>
            {/* <button onClick={handleUpload}>Upload</button> */}
          </div>
        </ul>
      </div>
    );

  return (
    <>
      <div className="dropzone" onDragOver={handleDragOver} onDrop={handleDrop}>
        <input
          type="file"
          multiple
          onChange={(e) => setFiles(e.target.files)}
          hidden
          accept="application/pdf,application/msword,
          application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          ref={inputRef}
        />
        <button onClick={() => inputRef.current.click()}>
          Drag & Drop or Select Resume to upload
        </button>
      </div>
    </>
  );
};
