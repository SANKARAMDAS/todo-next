"use client";

import { useRouter } from "next/navigation";

async function update(id, isDone, refresh) {
  await fetch(`/api/todo/update`, {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify({ id, isDone }),
  });
  refresh();
}

async function deleteTodo(id, refresh) {
    await fetch(`/api/todo/delete?id=${id}`,{
        method: 'DELETE',
        mode: "no-cors",
    });
    refresh();
}

export default function Todo({ todo }) {

    const router = useRouter();
  return (
    <>
      <input
        type="checkbox"
        onChange={(e) => update(todo.id, e.target.checked, router.refresh)}
        checked={todo.isDone}
      />
      {t.name}
      <button onClick={(e) => deleteTodo(todo.id, router.refresh)}>Delete</button>
    </>
  );
}
