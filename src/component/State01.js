import React, { useState } from "react";

const State01 = () => {
  // 리액트에서 제공하는 useState 함수
  // [현재 상태의 값을 저장하고 있는 변수, 상태를 업데이트하는 함수] = (초기값)
  const [count, setCount] = useState(0);

  // button의 이벤트 핸들러
  const onIncrease = () => {
    setCount(count + 1);
  };
  function onDecrease() {
    setCount(count - 1);
  }

  // count2는 값이 증가되긴 하지만, 컴포넌트가 리렌더되지 않아서 웹에 찍히지 않는다!
  let count2 = 0;
  function onIncrease2() {
    count2++;
    console.log("count2 값" + count2);
  }

  return (
    <React.Fragment>
      <div>--------------------------------------</div>
      <button onClick={onIncrease}>증가 +1 버튼</button>
      <h2>카운트 : {count}</h2>
      <button onClick={onDecrease}>감소 -1 버튼</button>
      <div>--------------------------------------</div>
      <h2>카운트2 : {count2}</h2>
      <button onClick={onIncrease2}>+1</button>
    </React.Fragment>
  );
};

export default State01;
