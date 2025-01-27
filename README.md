# 이미지 편집기

이미지 편집기는 간단하고 직관적인 UI를 통해 이미지를 편집할 수 있는 웹 애플리케이션입니다. 사용자는 이미지를 업로드한 후, 픽셀 크기를 조정하거나 배경을 제거/변경하며 편집한 이미지를 다운로드할 수 있습니다.

## 프로젝트 링크
- [이미지 편집기 링크](https://image-editor-nine-psi.vercel.app/)

## 주요 기능
- **이미지 업로드**: 첨부 버튼 또는 드래그 앤 드롭 방식으로 이미지를 업로드할 수 있습니다.
- **픽셀 크기 조정**: 이미지의 너비와 높이를 사용자가 직접 입력하여 조정할 수 있습니다.
- **배경 제거**: 배경을 제거하는 체크박스를 통해 배경을 간단히 없앨 수 있습니다.
- **배경색 변경**: RGB 색상을 선택하여 이미지의 배경색을 변경할 수 있습니다.
- **이미지 다운로드**: 편집된 이미지를 원본 파일명으로 다운로드할 수 있습니다.

## 사용 기술
- **Frontend**:
  - React: 컴포넌트 기반 사용자 인터페이스 개발
  - Redux Toolkit: 전역 상태 관리 (이미지 크기, 배경색, 배경 제거 여부 등)
  - TailwindCSS: UI 스타일링 및 반응형 디자인 구현
- **Deployment**:
  - Vercel: 프론트엔드 배포
- **기타**:
  - HTML5 Canvas: 이미지 렌더링 및 편집
  - JavaScript: 파일 업로드 및 다운로드 로직 처리

## 설치 및 실행 방법

1. **레포지토리 클론**
   ```bash
   git clone https://github.com/yourusername/image-editor.git
   cd image-editor
