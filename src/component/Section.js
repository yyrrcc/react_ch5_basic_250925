import React from "react";

const Section = ({ name, age, ...rest }) => {
  const num = 11;
  const { username, userage } = rest;
  return (
    <React.Fragment>
      <h1>----------------- Section ---------------------</h1>
      <h4>
        {num}는 {num % 2 === 0 ? "짝수" : "홀수"}
      </h4>
      <h3>
        전달 받은 이름1 : {name}, 나이 : {age}
      </h3>
      <h3>
        전달 받은 이름2 : {username}, 나이 : {userage}
      </h3>
    </React.Fragment>
  );
};

export default Section;
