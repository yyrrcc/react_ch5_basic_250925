import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Main from "./component/Main";
import Section from "./component/Section";
import Array from "./component/Array";
import Event from "./component/Event";
import State01 from "./component/State01";
import State02 from "./component/State02";
import State03 from "./component/State03";
import State04 from "./component/State04";

// props가 아닌 컴포넌트에 컴포넌트를 보낼 수도 있다(Array -> ChildComp)
function ChildComp() {
  return <div>child component</div>;
}

function App() {
  const name = "김민지";
  const age = 24;
  const sectionProps = {
    username: "이지수",
    userage: 32,
  };
  const arrayProps = {
    name: "박혜윤",
    //food: ["파스타", "짜장면", "김치찜"],
  };
  return (
    <div className="App">
      {/* <Header />
      <Main />
      <Section name={name} age={age} {...sectionProps} />
      <Array {...arrayProps}>
        <ChildComp />
      </Array>
      <Event />
      <State01 />
      <State02 />
      <State03 />
      <Footer /> */}
      <State04 />
    </div>
  );
}

export default App;
