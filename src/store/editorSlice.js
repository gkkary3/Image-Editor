import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  image: null,
  imageName: null,
  width: 300,
  height: 300,
  removeBackground: false,
  imageAdjusting: false,
  backgroundColor: "rgb(255, 255, 255)", // 기본 흰색
};

const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    setImage(state, action) {
      state.image = action.payload;
    },
    setImageName(state, action) {
      state.imageName = action.payload;
    },
    setWidth(state, action) {
      state.width = action.payload;
    },
    setHeight(state, action) {
      state.height = action.payload;
    },
    setRemoveBackground(state, action) {
      state.removeBackground = action.payload;
    },
    setBackgroundColor(state, action) {
      state.backgroundColor = action.payload;
    },
    setIsImageUploading(state, action) {
      state.imageAdjusting = action.payload;
    },
  },
});

export const {
  setImage,
  setImageName,
  setWidth,
  setHeight,
  setRemoveBackground,
  setBackgroundColor,
  setIsImageUploading,
} = editorSlice.actions;

export default editorSlice.reducer;
