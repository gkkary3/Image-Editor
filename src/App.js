import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/index";
import ImageUploader from "./components/ImageUploader";
import ImageEditor from "./components/ImageEditor";
import DownloadButton from "./components/DownloadButton";
import titleImage from "./editor.jpg"; // 이미지 파일 import
const App = () => (
  <Provider store={store}>
    <div className="relative flex flex-col items-center justify-center min-h-screen pt-2 pb-2 space-y-6 bg-gray-100">
      {/* Background Illustration */}

      {/* Overlay Title */}
      <div className="relative z-10 text-center">
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <img
            // src={process.env.PUBLIC_URL + "/titleImage.png"}
            src={titleImage}
            alt="이미지 편집기 배경 이미지"
            className="object-cover w-full h-full"
          />
        </div>
        <h1 className="mb-2 text-3xl font-extrabold text-gray-800">
          <span className="animate-gradient">이미지</span> 편집기
        </h1>

        <p className="max-w-md mx-auto text-sm text-gray-600">
          이 도구를 사용하여 이미지를 간편하게 업로드하고, 픽셀 크기를
          조정하거나 배경을 제거 및 변경할 수 있습니다. 완료된 이미지는 다운로드
          버튼으로 저장할 수 있습니다!
        </p>
      </div>

      {/* Components */}
      <div className="flex flex-col items-center justify-center min-h-screen space-y-6">
        <ImageUploader />
        <ImageEditor />
        <DownloadButton />
      </div>
    </div>
  </Provider>
);

export default App;
