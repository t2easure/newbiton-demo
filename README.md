# Newbiton Todo Demo

뉴비톤 **「아이디어에서 서비스까지」** 강연에서 사용하는 풀스택 Todo 예제입니다.
작은 기능을 로컬에서 실행하고, Git/GitHub로 협업한 뒤, 프론트엔드와 백엔드를 공개 URL로 배포하는 전체 흐름을 연습합니다.

## 강연에서 다루는 내용

- 프론트엔드와 백엔드의 역할 이해
- 로컬 개발 환경에서 기능 실행 및 확인
- 기능 브랜치, 커밋, Push, Pull Request를 이용한 Git 협업
- 같은 부분을 수정했을 때 발생하는 Merge Conflict 이해
- Vercel을 이용한 Vite 프론트엔드와 FastAPI 백엔드 배포
- 환경변수와 공개 URL을 이용한 프론트엔드·백엔드 연결

## 기술 구성

- **Frontend:** Vite, Vanilla JavaScript, HTML, CSS
- **Backend:** FastAPI, Uvicorn
- **Deployment:** Vercel

## 프로젝트 구조

```text
newbiton-demo/
├── frontend/          # Todo 화면과 브라우저 코드
│   ├── src/
│   ├── index.html
│   └── package.json
├── backend/           # Todo API 서버
│   ├── app.py
│   ├── requirements.txt
│   └── vercel.json
└── README.md
```

## 로컬 실행

저장소를 내려받습니다.

```bash
git clone https://github.com/t2easure/newbiton-demo.git
cd newbiton-demo
```

### 1. 백엔드 실행

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
python3 -m pip install -r requirements.txt
cp .env.example .env
python3 -m uvicorn app:app --reload --port 8000
```

브라우저에서 <http://localhost:8000/health>에 접속했을 때 아래 응답이 나오면 정상입니다.

```json
{"status":"ok"}
```

### 2. 프론트엔드 실행

새 터미널을 열고 저장소 루트에서 실행합니다.

```bash
cd frontend
npm ci
cp .env.example .env
npm run dev
```

터미널에 표시된 주소(기본값 <http://localhost:5173>)로 접속합니다.

## 주요 API

| 메서드 | 경로 | 설명 |
| --- | --- | --- |
| `GET` | `/health` | 백엔드 상태 확인 |
| `GET` | `/api/todos` | Todo 목록 조회 |
| `POST` | `/api/todos` | 새 Todo 추가 |

## Git 협업 흐름

기능별 브랜치를 만들고 변경 내용을 커밋한 뒤 GitHub에 올립니다.

```bash
git switch -c feature/my-feature
git status
git add <변경한 파일>
git commit -m "feat: 변경 내용 요약"
git push -u origin feature/my-feature
```

GitHub에서 기능 브랜치가 `main`으로 합쳐지도록 Pull Request를 만들고, 변경 파일과 충돌 여부를 확인한 뒤 Merge합니다.

## Vercel 배포

같은 GitHub 저장소를 Vercel에서 두 개의 프로젝트로 가져옵니다.

### 프론트엔드 프로젝트

- Root Directory: `frontend`
- Framework Preset: `Vite`
- 환경변수: `VITE_API_URL=<백엔드 Production URL>`

### 백엔드 프로젝트

- Root Directory: `backend`
- 환경변수: `FRONTEND_ORIGIN=<프론트엔드 Production URL>`

백엔드 배포 후 `<백엔드 Production URL>/health`에서 상태를 확인합니다. 이후 프론트엔드 프로젝트에 `VITE_API_URL`을 저장하고 다시 배포하면 두 프로젝트가 연결됩니다.

## 환경변수 주의사항

- 실제 `.env` 파일은 Git에 올리지 않습니다.
- 필요한 변수 이름과 예시만 `.env.example`로 공유합니다.
- `VITE_`로 시작하는 값은 브라우저에 노출되므로 API 키나 비밀번호를 넣지 않습니다.
- 비밀키가 공개 저장소에 올라갔다면 즉시 폐기하고 새로 발급해야 합니다.

## 참고

이 프로젝트는 교육용 예제로 데이터베이스를 사용하지 않습니다. 백엔드가 다시 시작되면 새로 추가한 Todo가 초기화될 수 있습니다.
