# Merge Conflict 시연

같은 파일의 **같은 줄**을 두 branch에서 다르게 바꾸면 conflict를 쉽게 만들 수 있습니다.

가장 안전한 발표 방식은 **두 개의 clone 폴더**를 준비하는 것입니다.

- `newbiton-demo-a`
- `newbiton-demo-b`

## A 폴더
```bash
git switch main
git pull origin main
git switch -c feature/frontend-status
```

`docs/team-status.md`의:
```text
상태: 개발 시작 전
```
을:
```text
상태: 프론트엔드 구현 완료
```
로 변경.

```bash
git add docs/team-status.md
git commit -m "docs: update frontend status"
git push -u origin feature/frontend-status
```

GitHub에서 PR을 만들고 **먼저 merge**.

## B 폴더
A가 merge되기 전에 받아둔 오래된 main 상태에서:
```bash
git switch -c feature/backend-status
```

같은 줄을:
```text
상태: 백엔드 구현 완료
```
로 변경.

```bash
git add docs/team-status.md
git commit -m "docs: update backend status"
git push -u origin feature/backend-status
```

두 번째 PR에서 conflict가 발생할 수 있습니다.

## 설명할 말
> Git이 망가진 것이 아니라, 두 사람이 같은 부분을 다르게 수정해서 Git이 어떤 것을 남겨야 할지 판단할 수 없는 상태입니다.

VS Code에서 conflict를 해결한 뒤:
```bash
git add docs/team-status.md
git commit -m "fix: resolve team status conflict"
git push
```
