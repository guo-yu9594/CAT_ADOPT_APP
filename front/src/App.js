// import logo from './logo.svg';
import "./App.css";
import Card from "./components/Card";

function App() {
  const catImg =
    "https://cdn.futura-sciences.com/buildsv6/images/wide1920/a/0/f/a0fc73919d_50166390_chaton.jpg";
  const img2 =
    "https://www.sciencesetavenir.fr/assets/img/2020/01/17/cover-r4x3w1000-5e21bf77a1547-chartreux-3298051-1920.jpg";
  const img3 =
    "https://www.journaldugeek.com/content/uploads/2021/11/template-jdg-25.jpg";
  const img4 =
    "https://www.parc-chartreuse.net/content/uploads/2018/03/chat_forestier_2.jpg";

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <header className="App-header">
        <h1>Adopte un chat</h1>
      </header>
      <div className="Cards-container">
        <div className="cards">
          <Card details={catImg} />
          <Card details={img2} />
          <Card details={img3} />
          <Card details={img4} />
          <Card details={img2} />
        </div>
        <div className="cards">
          <Card details={catImg} />
          <Card details={img2} />
          <Card details={catImg} />
          <Card details={catImg} />
          <Card details={catImg} />
          <Card details={img3} />
        </div>
        <div className="cards">
          <Card details={catImg} />
          <Card details={img3} />
          <Card details={img4} />
          <Card details={catImg} />
          <Card details={img3} />
        </div>
        <div className="cards">
          <Card details={img4} />
          <Card details={catImg} />
          <Card details={img2} />
          <Card details={catImg} />
        </div>
        <div className="cards">
          <Card details={catImg} />
          <Card details={img3} />
          <Card details={img4} />
          <Card details={catImg} />
          <Card details={img3} />
        </div>
      </div>
    </div>
  );
}

export default App;
