import { useState } from "react";

const State02 = () => {
  const [text, setText] = useState("");
  function inputOnChange(e) {
    //console.log(e.target.value); // 유저가 input에 입력한 값을 콘솔창에 출력하기
    setText(e.target.value);
  }

  const [date, setDate] = useState("");
  function dateOnChange(e) {
    setDate(e.target.value);
  }

  const [fruit, setFruit] = useState("");
  function fruitOnChange(e) {
    setFruit(e.target.value);
  }

  const [textarea, setTextarea] = useState("");
  const [texting, setTexting] = useState("글 입력대기");
  function textareaOnChange(e) {
    setTextarea(e.target.value);
    setTexting("글 입력중");
  }

  return (
    <>
      <h1>----------------- State02 ---------------------</h1>
      {/* 자바스크립트 기본 이벤트 : 변화가 있을 때 onChange 함수 */}
      입력폼 : <input onChange={inputOnChange} value={text} />
      <div>출력1 : {text}</div>
      <br />
      날짜 : <input type="date" onChange={dateOnChange} value={date} />
      <div>출력2 : {date}</div>
      <br />
      선택 :
      <select value={fruit} onChange={fruitOnChange}>
        <option key={"apple"}>사과</option>
        <option key={"grape"}>포도</option>
        <option key={"kiwi"}>키위</option>
      </select>
      <div>출력3 : 신선하고 맛있는 {fruit}</div>
      <br />
      글상자 : <textarea value={textarea} onChange={textareaOnChange} />
      <div>~~{texting}~~</div>
      <div>출력4 : {textarea}</div>
      <br />
    </>
  );
};

export default State02;
