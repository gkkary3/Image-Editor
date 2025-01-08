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
      <h2 className="mb-4 text-lg font-bold">첨부파일</h2>
      <div className="flex items-center w-full max-w-md p-2 border border-gray-400 rounded-lg bg-gray-50">
        {/* 드래그 앤 드롭 영역 */}
        <div
          className="flex items-center justify-center flex-grow h-20 text-gray-500 border-2 border-blue-500 border-dashed"
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
          <label htmlFor="fileInput" className="text-gray-500 cursor-pointer">
            <p className="p-1 text-xs sm:text-sm sm:p-2">
              {/* {" "} */}
              이미지를 드래그 앤 드롭하거나 클릭하세요.{" "}
            </p>
          </label>
        </div>
        {/* 첨부 버튼 */}
        <button
          className="px-2 py-2 ml-2 text-xs text-white bg-blue-500 border border-blue-700 rounded-lg sm:px-4 sm:text-sm hover:bg-blue-600 hover:border-blue-800"
          onClick={() => document.getElementById("fileInput").click()}
        >
          첨부
        </button>
      </div>
    </div>
  );
};

export default ImageUploader;
