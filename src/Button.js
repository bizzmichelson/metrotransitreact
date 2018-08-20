import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonClicks: 0,
      username: props.userName,
      route: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios("https://svc.metrotransit.org/NexTrip/Routes").then(response => {
      console.log(response);
    });
  }

  componentDidUpdate() {
    // console.log("COMPONENT UPDATED");
    // if (this.props.infiniteLoop !== t)
    //   this.setState(state => {
    //     return { nums: state.nums + 1 };
    //   });
  }

  handleClick(e) {
    e.target.className = "hide";
    // <button class="hide"></button>
    this.setState(state => {
      return { buttonClicks: state.buttonClicks + 1 };
    });
  }

  handleChange(e) {
    this.setState({ username: e.target.value || this.props.userName });
    console.log("change happened");
  }

  render() {
    const { buttonClicks, username } = this.state;
    console.log("Rendered");
    return (
      <React.Fragment>
        <div>
          <button onClick={this.handleClick}>Click Me</button>
          <p>{buttonClicks}</p>
          <input type="text" onChange={this.handleChange} />
          <p>username: {username}</p>
        </div>
      </React.Fragment>
    );
  }
}

Button.propTypes = {
  userName: PropTypes.string,
  isLoggedIn: PropTypes.bool
};

export default Button;
