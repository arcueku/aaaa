import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./compornents/InputTodo";
import { IncompleteTodos } from "./compornents/IncompleteTodos";
import { CompleteTodos } from "./compornents/CompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incomplateTodos, setIncomplateTodos] = useState([
    "ああああ",
    "いいいい"
  ]);
  const [complateTodos, setComplateTodos] = useState(["うううう"]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incomplateTodos, todoText];
    setIncomplateTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incomplateTodos];
    newTodos.splice(index, 1);
    setIncomplateTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incomplateTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...complateTodos, incomplateTodos[index]];

    setIncomplateTodos(newIncompleteTodos);
    setComplateTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...complateTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incomplateTodos, complateTodos[index]];

    setComplateTodos(newCompleteTodos);
    setIncomplateTodos(newIncompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incomplateTodos.length >= 5}
      />
      {incomplateTodos.length >= 5 && (
        <p style={{ color: "red" }}>
          登録できるtodoは５個まで。消化してね〜〜。
        </p>
      )}

      <IncompleteTodos
        incomplateTodos={incomplateTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />

      <CompleteTodos complateTodos={complateTodos} onClickBack={onClickBack} />
    </>
  );
};
