import React, { useRef, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setWidth,
  setHeight,
  setRemoveBackground,
  setBackgroundColor,
  setIsImageUploading,
} from "../store/editorSlice";

const ImageEditor = () => {
  const canvasRef = useRef(null);
  const { image, imageName, width, height, removeBackground, backgroundColor } =
    useSelector((state) => state.editor);
  const dispatch = useDispatch();

  const handleDraw = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.src = image;

    img.onload = () => {
      if (removeBackground) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      } else {
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      ctx.drawImage(img, 0, 0, width, height);
    };
  }, [image, width, height, removeBackground, backgroundColor]);

  useEffect(() => {
    if (image) {
      handleDraw();
      dispatch(setIsImageUploading(true));
    }
  }, [
    image,
    width,
    height,
    removeBackground,
    backgroundColor,
    handleDraw,
    dispatch,
  ]);

  return (
    <>
      <div>
        <canvas
          ref={canvasRef}
          width={width}
          height={height}
          className="border-2 border-dashed border-zinc-600"
        />
        {imageName && <p className="mt-2 text-sm text-gray-600">{imageName}</p>}
      </div>
      <div className="mt-4">
        <div>
          <label>너비:</label>
          <input
            type="number"
            value={width === 0 ? "" : width}
            onChange={(e) => {
              const value = e.target.value === "" ? 0 : Number(e.target.value);
              dispatch(setWidth(value));
            }}
            className="p-1 ml-2 border"
          />
        </div>
        <div>
          <label>높이:</label>
          <input
            type="number"
            value={height === 0 ? "" : height}
            onChange={(e) => {
              const value = e.target.value === "" ? 0 : Number(e.target.value);
              dispatch(setHeight(value));
            }}
            className="p-1 ml-2 border"
          />
        </div>

        <div className="flex items-center justify-between my-4">
          {/* 배경 제거 */}
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={removeBackground}
              onChange={(e) => dispatch(setRemoveBackground(e.target.checked))}
              className="mr-2"
            />
            배경 제거
          </label>

          {/* 배경색 */}
          <div className="flex items-center">
            <label className="mr-2">배경색:</label>
            <input
              type="color"
              value={backgroundColor}
              onChange={(e) => dispatch(setBackgroundColor(e.target.value))}
              className="w-10 h-10 p-1 border rounded"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageEditor;
