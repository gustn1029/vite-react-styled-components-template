# vite-react-template
- vite를 설치할 때 자동으로 생성되는 불필요한 파일, 태그들을 제거한 템플릿 입니다.
- 설치 방법: npx degit gustn1029/vite-react-styled-components-template my-new-project
    - my-new-project 부분은 내가 만들 "프로젝트 명"입니다. 원하시는 제목으로 바꾸시면 됩니다.
    - 폴더가 만들어지는 걸 원하지 않는 분들은 my-new-project 이 부분에 "."을 입력하시면 됩니다.
- 기능: React, Javascript, styled-reset, styled-components,gh-pages(GitHub Pages 배포)

## 배포 방법
- vite.config.js에서 base를 본인 레포지토리로 변경
- package.json "hompage" 부분을 "본인 GitHub Pages로 변경"
- 레포지토리 생성
- 변경 내용 커밋, 푸시
- npm run build 실행
- npm run predeploy 실행
- npm run deploy 실행
- 레포지토리 Settings -> Pages -> Branch gh-pages로 변경 후 Save