# 배포 실습 — Vercel + Render

## 구조
```text
GitHub
 ├─ frontend/ → Vercel
 └─ backend/  → Render
```

## 1. Backend — Render
1. Render 로그인
2. New → Web Service 또는 Blueprint
3. GitHub repository 연결
4. `render.yaml` 설정 확인
5. Environment Variable:
   - `FRONTEND_ORIGIN` = 프론트 주소
6. Deploy
7. 생성된 URL의 `/health` 확인

정상 응답:
```json
{"status":"ok"}
```

## 2. Frontend — Vercel
1. Vercel 로그인
2. Add New → Project
3. GitHub repository 선택
4. Root Directory → `frontend`
5. Framework Preset → Vite
6. Environment Variable:
   - `VITE_API_URL` = Render 백엔드 URL
7. Deploy

## 3. CORS 업데이트
Vercel URL이 생기면 Render의:
`FRONTEND_ORIGIN`
값을 Vercel 주소로 변경 후 재배포.

## 4. 최종 확인
- Vercel URL 접속
- Todo 목록 보이는지 확인
- 새 Todo 추가해보기

> 이 예제는 DB가 없는 교육용 서버라 Render가 재시작되면 Todo가 초기화될 수 있습니다.

## 발표 전 필수
- 실제 배포를 한 번 끝까지 완료
- 배포된 URL을 메모
- Vercel/Render 로그인 유지
- 라이브 배포가 꼬이면 이미 배포된 결과 화면으로 전환
