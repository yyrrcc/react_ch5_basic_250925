import { useState } from "react";

// Viewer 는 State04의 하위 컴포넌트
// Props로 State04 컴포넌트에 있는 State 변수 number가 전달됨
// 부모의 State 값이 변하면 해당 State를 Props로 받은 자식 컴포넌트 역시 리렌더 된다
function Viewer({ number }) {
  return <div>{number % 3 === 0 ? "3의 배수" : "3의 배수가 아니다"}</div>;
}

// Viewer2도 State04의 하위 컴포넌트
// 부모 컨포넌트 State04가 리랜더하면 자식인 Viewer2도 마찬가지로 함께 리랜더가 된다. (Viewer2의 변화가 없어도)
// 의미 없는 리렌더 발생
function Viewer2() {
  console.log("뷰어2 컴포넌트 생성");
  return <div>Viewer2 컴포넌트 입니다.</div>;
}

const State04 = () => {
  const [number, setNumber] = useState(0);
  function onClickPlus() {
    setNumber(number + 1);
  }
  function onClickMinus() {
    setNumber(number - 1);
  }
  return (
    <>
      숫자 {number} : <Viewer number={number} />
      <div>
        <button onClick={onClickPlus}>+ 증가</button>
        <button onClick={onClickMinus}>- 감소</button>
      </div>
      <div>
        <Viewer2 />
      </div>
    </>
  );
};
export default State04;
