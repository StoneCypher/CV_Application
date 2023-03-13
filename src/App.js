import React from "react";
import Form from "./components/form";
import CV from "./components/cv";

import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      information: {
        personalInformation: {},
        experienceInformation: {},
        educationInformation: {},
      }
    }
    this.informationUpdated = this.informationUpdated.bind(this);
  }

  informationUpdated(information) {
    this.setState({
      information: information
    });
  }

  render() {
    return(
      <div>
        <header>{"CV Creator"}</header>
        <Form onInformationUpdate={this.informationUpdated}/>
        <CV cvInformation={this.state.information}/>
      </div>
    );
  }
}

export default App;
