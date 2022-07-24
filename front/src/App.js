import React from "react";
import "./App.css";
import axios from "axios";
import CardsContainer from "./components/Card.container";

class App extends React.Component {
  state = {
    cats: [],
    catsListReady: false
  }

  getCatList = () => {
    axios
      .get("http://localhost:3001/cat/list")
      .then((data) => {
        this.setState({cats: data.data});
        this.setState({catsListReady: true});
        console.log('BACKED');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    if (this.state.catsListReady === false)
      this.getCatList();
    return (
      <div className="App">
        <header className="App-header">
          <h1>Adopte un chat</h1>
        </header>
        <CardsContainer cats={this.state.cats}/>
      </div>
    );
  }
}

export default App;
