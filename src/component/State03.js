import { useState } from "react";

// 회원가입 테스트
const State03 = () => {
  // 1. 변수가 많아지면 관리하기 힘들다
  // const [name, setName] = useState("");
  // const [gender, setGender] = useState("");
  // const [birth, setBirth] = useState("");
  // const [bio, setBio] = useState("");

  // function onChangeName(e) {
  //   setName(e.target.value);
  // }
  // function onChangeGender(e) {
  //   setGender(e.target.value);
  // }
  // function onChangeBirth(e) {
  //   setBirth(e.target.value);
  // }
  // function onChangeBio(e) {
  //   setBio(e.target.value);
  // }

  // 2. 한꺼번에 관리하기 (객체로 받으면 된다)
  const [state, setState] = useState({
    name: "",
    gender: "",
    birth: "",
    bio: "",
  });

  const onChanges = (e) => {
    // setState({ name: e.target.value, gender: e.target.value, birth: e.target.value, bio: e.target.value });
    // 스프레드 연산자를 이용해 기존 객체 state의 값을 나열, 객체의 괄호 표기법을 사용
    setState({ ...state, [e.target.name]: e.target.value });
    console.log(e.target.name);
  };

  return (
    <div>
      <div>
        <input type="text" name="name" placeholder="이름" value={state.name} onChange={onChanges} />
      </div>
      <div>
        <select name="gender" value={state.gender} onChange={onChanges}>
          <option key={"female"}>여성</option>
          <option key={"male"}>남성</option>
        </select>
      </div>
      <div>
        <input type="date" name="birth" value={state.birth} onChange={onChanges} />
      </div>
      <div>
        <textarea type="text" name="bio" placeholder="자기소개" value={state.bio} onChange={onChanges} />
      </div>
      <div>
        <h4>[회원가입 출력]</h4>
        이름 : {state.name}
        <br />
        성별 : {state.gender}
        <br />
        생일 : {state.birth}
        <br />
        자기소개 : {state.bio}
        <br />
      </div>
    </div>
  );
};

export default State03;
