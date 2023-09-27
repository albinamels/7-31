import "./App.css";
import React from "react";
import { Form } from "./components/Form";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // inputValue: "",
      // optionValue: "female",
      // radioBtn: "",
      inputVal: "",
      submittedMsg: "",
      messageArr: [],
      prevMessage: "",
      showAllMessages: false,
    };
  }
  /*
  // update inputValue
  handleChange = (event) => {
    console.log("changed");
    this.setState({ inputValue: event.target.value });
  };
  // update optionValue
  handleSelect = (e) => {
    this.setState({ optionValue: e.target.value });
  };
  // update radioBtn
  handleRadioBtn = (e) => {
    this.setState({ radioBtn: e.target.value });
  }; */
  // responds onChange in the Form's input field
  handleInput = (e) => {
    this.setState({ inputVal: e.target.value });
  };

  // responds onSubmit in the Form's btn and enter
  handleSubmit = (event) => {
    event.preventDefault();

    // pass inputVal to submittedMsg state, clear the inputVal and input field on UI
    // this.setState({ submittedMsg: this.state.inputVal, inputVal: "" });

    let newMessage = this.state.inputVal; // temp storage for every new inputVal
    let tempArr = this.state.messageArr; // temp storage array for newMessages
    tempArr.push(newMessage); // push and store all newMessage into tempArr

    // update the state
    this.setState({
      submittedMsg: newMessage,
      inputVal: "",
      messageArr: [...tempArr],
    });
  };

  prevMessageFunc = () => {
    // if messageArr contains at least 2 messages
    if (this.state.messageArr.length >= 2) {
      // tempMessage is a message right before the last one
      let tempMessage = this.state.messageArr[this.state.messageArr.length - 2];
      // update state
      this.setState({
        prevMessage: tempMessage,
      });
    } else {
      // otherwise show this response
      this.setState({
        prevMessage: "No previous message",
      });
    }
  };

  // btn to toggle state
  allMessagesFunc = () => {
    this.setState({ showAllMessages: true });
  };

  render() {
    // const { inputValue, optionValue, radioBtn } = this.state;
    const { inputVal, submittedMsg, prevMessage, messageArr, showAllMessages } =
      this.state;
    return (
      <div className="App">
        <div className="container">
          <h3>A Message You Would Like To Pass</h3>
          <Form
            inputVal={inputVal}
            handleInput={this.handleInput}
            handleSubmit={this.handleSubmit}
          />
          <h3>Last Message Delivered:</h3>
          <p>{submittedMsg.toUpperCase()}</p>

          {/* Conditional rendering: render ShowPrevMsg btn only if message array contains at least 1 message, otherwise do not render that btn*/}
          {messageArr.length >= 1 ? (
            <button onClick={this.prevMessageFunc}>
              Show previous message
            </button>
          ) : null}
          <p>{prevMessage.toUpperCase()}</p>

          {/* Conditional rendering: render all messages only if state showAllMessages is true, which changed by clicking on ShowAllMsg btn*/}
          <button onClick={this.allMessagesFunc}>Show all messages</button>
          {showAllMessages
            ? messageArr.map((message, index) => {
                return <p key={index}>{message.toUpperCase()}</p>;
              })
            : null}
        </div>

        {/* <label htmlFor="name"> // htmlFor & id are for accessibility
          Name
          <input
            id="name"
            type="text"
            placeholder="Enter text..."
            value={inputValue}
            onChange={this.handleChange} // no need for callback 
          />
        </label>

        <label htmlFor="gender">Select your gender</label>
        <select id="gender" onChange={this.handleSelect} value={optionValue}>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="other">Other</option>
        </select>

        <div>
          Your English level:
          <label htmlFor="">
            <input
              type="radio"
              value="intermediate"
              onChange={this.handleRadioBtn}
              // checked={radioBtn === "intermediate"}
            />
            Intermediate
          </label>
          <label htmlFor="">
            <input
              type="radio"
              value="advanced"
              onChange={this.handleRadioBtn}
              checked={radioBtn === "advanced"}
            />
            Advanced
          </label>
          <label htmlFor="">
            <input
              type="radio"
              value="native"
              onChange={this.handleRadioBtn}
              checked={radioBtn === "native"}
            />
            Native
          </label>
        </div> */}
      </div>
    );
  }
}
export default App;

//implement "Show prev msg" functionality: the button should be rendered only after the user enters the first msg. if there's no prev msg, the user should see "sorry, no msgs available." if the prev msg exists, then show prev msg. create "Show prev msg" btn inside the App
