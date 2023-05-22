import { Component, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    console.log("constructor");
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        this.setState(
          () => {
            console.log("111111");
            return { monsters: users };
          },
          () => console.log(this.state)
        );
      });
  }

  render() {
    console.log("render");

    console.log(this.state.searchField);

    var filteredMonsters = this.state.monsters.filter((m) => {
      return m.name.toLocaleLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={(e) => {
            console.log(e.target.value.toLocaleLowerCase());

            this.setState({ searchField: e.target.value.toLocaleLowerCase() });
          }}
        />

        {filteredMonsters.map((m) => {
          return (
            <div key={m.id}>
              <h1>{m.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
