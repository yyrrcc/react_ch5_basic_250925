import "./Main.css";

const Main = () => {
  const number1 = 10;
  const number2 = 20;
  const str1 = "hello";
  const str2 = "world";
  const bool1 = true;
  const bool2 = false;
  const obj1 = { name: "홍길동", age: 21 };
  return (
    // JSX가 반환하는 모든 태그는 반드시 최상위 태그로 감싸야 한다. <div />
    // <React.Fragment/> 도 가능 하지만 import React from "react"; 리액트 라이브러리 가져와야함
    <>
      <div style={{ color: "#dddddd", backgroundColor: "blue" }}>
        <h3>body : 내용이 들어 갈 자리 입니다</h3>
      </div>
      <h3>{number1}</h3>
      <h3>{number1 + number2}</h3>
      <h3>{str1 + str2}</h3>
      <h3 className="txt1">boolean은 랜더링 되지 않아 String 형변환 해야 출력됨</h3>
      <h3>{bool1}</h3>
      <h3>{String(bool2)}</h3>
      <h3>{obj1.name}</h3>
      <h3>{obj1.age}</h3>
      {/* JSX : 닫힘 규칙에 엄격하다 */}
      {/* <img src=""></img> */}
      <input />
      <h3>--------------------------------</h3>
    </>
  );
};

export default Main;
