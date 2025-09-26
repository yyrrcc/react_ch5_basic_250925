import React from "react";

const Array = ({ name, food = [], children }) => {
  console.log(children); // 작명은 하기 나름
  return (
    <React.Fragment>
      <h1>----------------- Array ---------------------</h1>
      <h4>
        {name}이(가) 좋아하는 음식 개수는 {food.length} 개 입니다.
      </h4>
      <h5>Props로 컴포넌트 전달하기 : {children}</h5>
    </React.Fragment>
  );
};

export default Array;
