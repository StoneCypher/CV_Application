import React from "react";
import PersonalInformation from "./personal_information";
import Experience from "./experience";
import Button from "./button";

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
           personalInformation: {},
           numberOfExperience: 0,
           experienceInformation: [],
           numberOfEducation: 0,
           educationInformation: []
        }
        this.submitButtonClicked = this.submitButtonClicked.bind(this);
        this.setPersonalInformation = this.setPersonalInformation.bind(this);
    }

    setPersonalInformation(attributeName, attributeValue) {
        const updatedPersonalInformation = this.state.personalInformation;
        updatedPersonalInformation[attributeName] = attributeValue;
        this.setState({
            personalInformation: updatedPersonalInformation
        });
    }

    submitButtonClicked(event) {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        const fromSubmitButton = <Button textContent="Submit" onClickMethod={this.submitButtonClicked}/>;

        return(
            <form method={"#"}>
                <PersonalInformation setPersonalInformation={this.setPersonalInformation}/>
                <Experience />
                {fromSubmitButton}
            </form>
        );
    }

}

export default Form;