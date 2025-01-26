import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

export class About extends Component {
  constructor(props) {
    super(props);
    console.log("About Parent constructor called", props);
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <h1>About</h1>
        <h2>This is Namaste Project</h2>
        <User name={"Susmita(function)"} />
        <UserClass name={"Susmita(class)"} location={"Odisha(class)"} />
      </div>
    );
  }
}

/*export const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is Namaste Project</h2>
      <User name={"Susmita(function)"} />
      <UserClass name={"Susmita(class)"} location={"Odisha(class)"} />
    </div>
  );
};*/

export default About;
