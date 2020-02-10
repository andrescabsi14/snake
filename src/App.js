import React from "react";
import { Grid } from "./Grid";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Yet another snake game...</h1>
        <h4 className="subtitle">by Andres Cabrera</h4>
      </header>
      <section>
        <Grid />
      </section>
    </div>
  );
}

export default App;
