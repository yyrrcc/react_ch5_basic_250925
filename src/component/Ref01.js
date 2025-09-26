import { useState, useRef } from "react";

const Ref01 = () => {
  const [text, setText] = useState("");
  const textRef = useRef(); // 1. useRef() 함수를 이용해 Ref 객체 생성 후 textRef에 저장

  // 0. button 클릭했을 때 input에서 작성한 값 가져오기
  function onClickAlert() {
    if (text.length < 5) {
      alert(text + ": 글자수 5자 미만");
      textRef.current.focus(); // 3. input창에 focus 두기
    } else {
      alert(text);
      setText(""); // 3. 변수 공백문자로 초기화
    }
    //textRef.current.value = ""; // 2. Ref를 이용하면 돔 요소를 원하는 형태로 조작할 수 있음
  }

  // 0. input에 작성한 값을 setText에 넣어주기
  function onChangeInput(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <h1>----------------- Ref01 -------------------</h1>
      <input ref={textRef} value={text} onChange={onChangeInput} />
      <button onClick={onClickAlert}>작성완료</button>
    </div>
  );
};

export default Ref01;
