import { useState, useRef } from 'react';

const Ref02 = () => {
  const [text, setText] = useState('');
  const textRef = useRef(''); // 1. useRef() 함수를 이용해 Ref 객체 생성 후 textRef에 저장
  // 2. Ref를 이용하면 돔 요소를 원하는 형태로 조작할 수 있음

  function onClickAlert() {
    if (text.length < 5) {
      alert(text + ': 글자수 5자 미만');
      textRef.current.focus(); // 4. input창에 focus 두기
    } else {
      alert(text);
      setText(''); // 4. 변수 공백문자로 초기화
    }
    // alert(text);
    // textRef.current.value = ''; // 3. useRef를 이용해 텍스트 입력 폼을 초기화
  }

  function onChangeInput(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <h1>----------------- Ref02 -------------------</h1>
      <input ref={textRef} value={text} onChange={onChangeInput} />
      <button onClick={onClickAlert}>작성완료</button>
    </div>
  );
};

export default Ref02;
