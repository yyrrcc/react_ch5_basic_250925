import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Main from "./component/Main";
import Section from "./component/Section";
import Array from "./component/Array";
import Event from "./component/Event";
import State01 from "./component/State01";

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
      <Header />
      <Main />
      <Section name={name} age={age} {...sectionProps} />
      <Array {...arrayProps}>
        <ChildComp />
      </Array>
      <Event />
      <State01 />
      <Footer />
    </div>
  );
}

export default App;
