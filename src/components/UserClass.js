import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("UserClass Child constructor called", props);
    this.state = {
      userInfo: {
        name: "",
        location: ""
      }
    };
  }
  //async componentDidMount() {
  componentDidMount() {
    //Api calls inside this
    //const data = await fetch("https://api.github.com/users/susmitasahu");
    // const json = await data.json();
    // console.log("json:", json);
    // this.setState({
    //   userInfo: json
    //  });
    this.timer = setInterval(() => {
      console.log("Timer called");
    }, 1000);
  }
  componentDidUpdate() {
    console.log("UserClass Child componentDidUpdate called");
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("UserClass Child componentWillUnmount called"); //this called when component is removed from dom
  }
  render() {
    const { name, location } = this.props;
    //const { name, location } = this.state.userInfo;
    console.log("Name:", name, "Location:", location);
    return (
      <div className="user-card">
        <h1>
          Name: {name}
          Location: {location}
        </h1>
      </div>
    );
  }
}
export default UserClass;
