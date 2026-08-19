# 발표 당일 Git 시연 순서

## 1. Clone
```bash
git clone <REPOSITORY_URL>
cd newbiton-demo
git status
```

## 2. Branch 생성
```bash
git switch -c feature/title
git branch
```

## 3. 파일 수정
`frontend/index.html`의:
```html
<h1>오늘 할 일</h1>
```
을:
```html
<h1>뉴비톤 Todo</h1>
```
로 변경.

## 4. 변경사항 확인
```bash
git status
git diff
```

설명 포인트:
- 어떤 파일이 바뀌었는지
- 실제로 어떤 코드가 바뀌었는지
- AI Agent를 썼다면 특히 꼭 확인

## 5. .gitignore
`.gitignore`에서 다음을 보여주기:
```gitignore
.env
node_modules/
.venv/
```

설명:
- API Key와 환경변수는 `.env`
- `.env`는 GitHub에 올리지 않음
- 배포 플랫폼에는 Environment Variables로 따로 등록

## 6. 필요한 파일만 add
```bash
git add frontend/index.html
git status
git diff --staged
```

강조:
- 초보자는 `git add .`를 습관처럼 쓰지 않기
- 내가 커밋할 파일을 알고 있어야 함

## 7. Commit
```bash
git commit -m "feat: update todo page title"
git log --oneline -5
```

## 8. Push
```bash
git push -u origin feature/title
```

## 9. Pull Request
GitHub에서:
1. Compare & pull request
2. Files changed 확인
3. PR 생성
4. Merge

## 10. Pull
```bash
git switch main
git pull origin main
```

## 11. Merge Conflict
`CONFLICT_DEMO.md` 순서로 진행.

## 마무리 한 줄
> AI가 코드를 만들어줄 수는 있지만, 어떤 변경을 프로젝트에 넣을지는 개발자가 결정합니다.
