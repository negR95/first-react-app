import React from "react";
import FormattedDate from "./FormattedDate";

class Clock extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    setInterval(
      () => {
        this.setState({
          date: new Date()
        });
      }, 1000
    );
  }

  render() {
    return (
      <div>
        <FormattedDate date={this.state.date} color={this.state.date} />
      </div>
    );
  }
}

export default Clock;