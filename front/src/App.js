import React from "react";
import "./App.css";
import axios from "axios";
import Body from "./components/Body";
import FilterBoard from "./components/FilterBoard";

class App extends React.Component {
  state = {
    cats: [],
    catsListReady: false,
    onModal: null,
  };

  handleCardClick = (card) => {
    console.log("Card clicked");
    this.setState({ onModal: card });
    console.log(card);
  };

  getCatList = () => {
    axios
      .get("http://localhost:3001/cat/list")
      .then((data) => {
        this.setState({ cats: data.data });
        this.setState({ catsListReady: true });
        console.log("BACKED");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    if (this.state.catsListReady === false) this.getCatList();

    return (
      <div className="App">
        <header className="App-header">
          <div className="Header-img"></div>
          <h1>Adopte un chat</h1>
        </header>
        <FilterBoard />
        <Body
          state={this.state}
          functions={{ handleCardClick: this.handleCardClick }}
        />
      </div>
    );
  }
}

export default App;
