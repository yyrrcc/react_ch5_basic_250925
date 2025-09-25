const Event = () => {
  // 함수 handleOnClick을 선언
  function handleOnClick() {
    alert("클릭 성공!");
  }
  function handleOnClick2(e) {
    console.log(e.target.name);
    alert("AB 버튼!");
  }

  return (
    <>
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
