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
    this.setState({ onModal: card });
  };

  getCatList = () => {
    axios
      .get("http://localhost:3001/cat/list")
      .then((data) => {
        this.setState({ cats: data.data });
        this.setState({ catsListReady: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  adoptCat = (cat) => {
    axios
      .post("http://localhost:3001/cat/adopt/" + cat.id)
      .then((data) => {
        const cats = [...this.state.cats];
        const indexOfObject = cats.findIndex((object) => {
          return object.id === cat.id;
        });
        cats[indexOfObject].status = data.data.status;
        this.setState({ cats });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  placeFavorites = (cat) => {
    const cats = [...this.state.cats];
    const indexOfObject = cats.findIndex((object) => {
      return object.id === cat.id;
    });
    const target = cats[indexOfObject];

    if (target.name[target.name.length - 1] == '♥') {
      cats[indexOfObject].name = target.name.slice(0, -2);
      console.log(cats[indexOfObject].name)
    }
    else cats[indexOfObject].name = cats[indexOfObject].name + " ♥";
    this.setState({ cats });
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
          functions={{
            handleCardClick: this.handleCardClick,
            adoptCat: this.adoptCat,
            placeFavorites: this.placeFavorites,
          }}
        />
      </div>
    );
  }
}

export default App;
