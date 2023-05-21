import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    console.log("constructor");
    super();
    this.state = {
      monsters: [],
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
    return (
      <div className="App">
        {this.state.monsters.map((m) => {
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
