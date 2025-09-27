import { useState } from 'react';

const Ref01 = () => {
  // setText: state를 변경하는 함수
  const [text, setText] = useState('');

  // button 클릭했을 때 input에서 작성한 값 가져오기
  function onClickAlert() {
    alert(text);
  }

  // input에 작성한 값을 setText에 넣어주기
  function onChangeInput(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <h1>----------------- Ref01 -------------------</h1>
      <input value={text} onChange={onChangeInput} />
      <button onClick={onClickAlert}>작성완료</button>
    </div>
  );
};

export default Ref01;
