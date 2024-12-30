import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/index";
import ImageUploader from "./components/ImageUploader";
import ImageEditor from "./components/ImageEditor";
import DownloadButton from "./components/DownloadButton";

const App = () => (
  <Provider store={store}>
    <div className="min-h-screen flex flex-col items-center justify-center space-y-6 relative bg-gray-100 pt-2 pb-2">
      {/* Background Illustration */}

      {/* Overlay Title */}
      <div className="relative z-10 text-center">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img
            // src={process.env.PUBLIC_URL + "/titleImage.png"}
            src="./titleImage.png"
            alt="이미지 편집기 배경 이미지"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-3xl font-extrabold mb-2 text-gray-800">
          이미지 편집기
        </h1>
        <p className="text-gray-600 text-sm max-w-md mx-auto">
          이 도구를 사용하여 이미지를 간편하게 업로드하고, 픽셀 크기를
          조정하거나 배경을 제거 및 변경할 수 있습니다. 완료된 이미지는 다운로드
          버튼으로 저장할 수 있습니다!
        </p>
      </div>

      {/* Components */}
      <div className="min-h-screen flex flex-col items-center justify-center space-y-6">
        <ImageUploader />
        <ImageEditor />
        <DownloadButton />
      </div>
    </div>
  </Provider>
);

export default App;
