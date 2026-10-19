# Silver Lining Letter

생년월일에 맞춘 오늘의 별자리 편지를 보여주는 정적 웹사이트입니다. HTML, CSS, JavaScript만으로 동작하므로 배포된 사이트를 열 때 Python 서버를 실행할 필요가 없습니다.

## GitHub Pages 배포

1. 이 폴더의 파일을 GitHub 저장소에 올립니다. 저장소 이름은 영문과 하이픈으로 정하는 것을 권장합니다.
2. 저장소의 **Settings → Pages → Build and deployment → Source**에서 **GitHub Actions**를 선택합니다.
3. `main` 또는 `master` 브랜치에 코드를 올리면 `.github/workflows/deploy.yml`이 사이트를 자동 배포합니다. 처음 배포는 저장소의 **Actions** 탭에서 완료 여부를 확인하세요.
4. 배포가 끝나면 저장소의 **Settings → Pages**에 표시되는 URL로 휴대폰 Safari에서 접속할 수 있습니다. 일반적인 프로젝트 저장소 URL은 `https://<GitHub사용자이름>.github.io/<저장소이름>/` 형식입니다.

이후 `main` 또는 `master` 브랜치에 변경 사항을 올릴 때마다 자동으로 다시 배포됩니다. 브라우저나 CDN 캐시에 이전 화면이 남아 있으면 Safari에서 페이지를 새로고침하세요.

## 데이터 및 배포 파일

- 배포되는 파일은 `index.html`, `app.js`, `style.css`입니다.
- 별도 서버나 빌드 과정은 필요하지 않습니다. `main.py`는 웹사이트 배포에 사용되지 않습니다.
- 생년월일은 해당 기기의 브라우저 `localStorage`에 저장되며 서버로 전송되지 않습니다.
- GitHub Pages 공개 여부와 무료 사용 가능 여부는 저장소 공개 설정과 GitHub 요금제에 따라 달라집니다. 저장소의 **Settings → Pages**에서 사용 가능 여부를 확인하세요.
