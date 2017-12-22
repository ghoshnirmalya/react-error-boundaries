import React from 'react';

import ErrorBoundary from "../error-boundary";
import Ability from "../ability";

import "./styles.css";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data: []
    };
  }
  componentWillMount() {
    fetch("http://pokeapi.co/api/v2/pokemon/1/")
      .then(data => data.json())
      .then(data => {
        this.setState({
          data: data.abilities
        });
      });
  }

  errorBoundaryNode = (ability, index) => {
    return (
      <ErrorBoundary key={index}>
        <Ability ability={ability} />
      </ErrorBoundary>
    );
  }

  abilitiesNode = () => {
    return this.state.data.map((ability, index) => {
      return this.errorBoundaryNode(ability, index);
    });
  }

  render() {
    return (
      <div className="app">
        { this.abilitiesNode() }
      </div>
    );
  }
}
