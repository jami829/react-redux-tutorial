// export default () => "Home";
import React, { useState } from "react";

function Home() {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
    // setText(""); // 입력, 제출, 다시 인풋칸을 빈칸으로.
  }
  function onSubmit(e) {
    e.preventDefault();
    console.log(text) // state가 onChange로 인해 변경된 값.
    setText(""); // 제출 후 다시 인풋값 빈칸으로 초기화
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul></ul>
    </>
  );
}

export default Home;