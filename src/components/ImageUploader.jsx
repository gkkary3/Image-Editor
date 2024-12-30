import React from "react";
import { useDispatch } from "react-redux";
import { setImage, setImageName } from "../store/editorSlice";

const ImageUploader = () => {
  const dispatch = useDispatch();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(setImageName(file.name));
      const reader = new FileReader();
      reader.onload = () => {
        dispatch(setImage(reader.result));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      dispatch(setImageName(file.name));
      const reader = new FileReader();
      reader.onload = () => {
        dispatch(setImage(reader.result));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-lg font-bold mb-4">첨부파일</h2>
      <div className="flex items-center w-full max-w-md border border-gray-400 rounded-lg p-2 bg-gray-50">
        {/* 드래그 앤 드롭 영역 */}
        <div
          className="flex-grow h-20 border-dashed border-2 border-blue-500 flex items-center justify-center text-gray-500"
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
          <input
            type="file"
            accept="image/*"
            id="fileInput"
            onChange={handleFileChange}
            className="hidden"
          />
          <label htmlFor="fileInput" className="cursor-pointer text-gray-500">
            이미지를 드래그 앤 드롭하거나 클릭하세요.
          </label>
        </div>
        {/* 첨부 버튼 */}
        <button
          className="ml-2 px-4 py-2 bg-blue-500 text-white border border-blue-700 rounded-lg hover:bg-blue-600 hover:border-blue-800"
          onClick={() => document.getElementById("fileInput").click()}
        >
          첨부
        </button>
      </div>
    </div>
  );
};

export default ImageUploader;
