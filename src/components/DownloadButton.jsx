import React from "react";
import { useSelector } from "react-redux";
const DownloadButton = () => {
  const { imageAdjusting, imageName } = useSelector((state) => state.editor);

  const handleDownload = () => {
    if (!imageAdjusting) {
      alert("이미지를 선택해주세요.");
      return;
    }

    const canvas = document.querySelector("canvas");
    const link = document.createElement("a");
    // 파일명 적용 (기본 파일명 fallback)
    const downloadFileName = imageName
      ? imageName.split(".")[0] + ".png"
      : "download.png";
    link.download = downloadFileName;
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <button
      onClick={handleDownload}
      className="bg-blue-500 text-white p-2 rounded"
    >
      다운로드
    </button>
  );
};

export default DownloadButton;
