import React, { useEffect, useState } from "react";
class Countdown extends React.Component {
  state = {
    count: 5,
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        count: this.state.count - 1,
      });
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count && this.state.count === 0) {
      if (this.timer) {
        clearInterval(this.timer);
        this.props.setTimeUp();
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return <div>{this.state.count}</div>;
  }
}

const NewCountDown = () => {
  const [count, setCount] = useState(5);

  useEffect(() => {
    if(count === 0) {
      return 
    }
    let timer = setInterval(() => {
      setCount(count - 1);
    }, 1000);
    return () => {
      clearTimeout(timer)
    }
  }, [count]);

 

  return <div>{count}</div>;
};
export { Countdown, NewCountDown };
