import React from "react";

function ToDo({ text }) {  // Home.js와 동일한 이유로 객체로 감싸주는 것.
  return (
    <li>
      {text} <button>삭제</button>
    </li>
  );
}

export default ToDo;