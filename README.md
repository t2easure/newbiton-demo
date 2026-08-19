# Newbiton Demo

뉴비톤 2차 교육용 **Git/GitHub 협업 + 배포 시연 프로젝트**입니다.

## 프로젝트 구조
- `frontend/` : Vite 기반 초간단 Todo UI
- `backend/` : FastAPI API
- `docs/team-status.md` : merge conflict 시연용 파일
- `DEMO_SCRIPT.md` : 발표 당일 Git 시연 순서
- `CONFLICT_DEMO.md` : conflict 연습 절차
- `DEPLOY.md` : Vercel + Render 배포 절차
- `REHEARSAL_CHECKLIST.md` : 발표 전 체크리스트

## 로컬 실행

### Backend
```bash
cd backend
python -m venv .venv
```

가상환경 활성화 후:
```bash
pip install -r requirements.txt
```

`.env.example`을 `.env`로 복사한 뒤:
```bash
uvicorn app:app --reload --port 8000
```

확인:
`http://localhost:8000/health`

### Frontend
새 VS Code 터미널에서:
```bash
cd frontend
npm install
```

`.env.example`을 `.env`로 복사한 뒤:
```bash
npm run dev
```

보통 `http://localhost:5173`에서 실행됩니다.

## GitHub에 처음 올리기
이 ZIP은 로컬 Git 저장소까지 초기화해 둔 상태입니다.

GitHub에서 **빈 repository**를 하나 만든 뒤:
```bash
git remote add origin <YOUR_REPOSITORY_URL>
git push -u origin main
```

그 뒤 다른 폴더에서 다시 clone하면 실제 발표 시연 준비가 끝납니다.

```bash
git clone <YOUR_REPOSITORY_URL>
```
