import "./style.css";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";
const form = document.querySelector("#todo-form");
const input = document.querySelector("#todo-input");
const list = document.querySelector("#todo-list");
const status = document.querySelector("#status");

async function loadTodos() {
  status.textContent = "불러오는 중...";
  try {
    const r = await fetch(`${API_URL}/api/todos`);
    const todos = await r.json();
    list.innerHTML = todos.map(t => `<li>${t.text}</li>`).join("");
    status.textContent = `${todos.length}개의 할 일`;
  } catch {
    status.textContent = "백엔드에 연결할 수 없습니다.";
  }
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  await fetch(`${API_URL}/api/todos`, {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({text})
  });
  input.value = "";
  await loadTodos();
});
loadTodos();
