const Event = () => {
  // 함수 handleOnClick을 선언
  function handleOnClick() {
    alert("클릭 성공!");
  }
  // 버튼 눌렀을 때 모든 정보가 e 객체에 저장됨
  function handleOnClick2(e) {
    console.log(e.target.name);
    alert("A, B 어떤 버튼을 눌렀는지는 콘솔창에서 확인하세요.");
  }

  return (
    <>
      <h1>----------------- Event ---------------------</h1>
      {/* {}안에 함수의 이름만 전달하면 됨 */}
      <button onClick={handleOnClick}>클릭하세요</button>
      <br />
      <button name="btnA" onClick={handleOnClick2}>
        A클릭!
      </button>
      <button name="btnB" onClick={handleOnClick2}>
        B클릭!
      </button>
      <br />
    </>
  );
};

export default Event;
