import React from "react";
import "./App.css";
import axios from "axios";
import Body from "./components/Body";

class App extends React.Component {
  state = {
    cats: [],
    catsListReady: false,
    onModal: -1,
  };

  handleCardClick = (card) => {
    console.log("Card clicked");
    this.setState({ onModal: card.id });
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
          <h1>Adopte un chat</h1>
        </header>
        <Body
          cats={this.state.cats}
          functions={{ handleCardClick: this.handleCardClick }}
        />
      </div>
    );
  }
}

export default App;
