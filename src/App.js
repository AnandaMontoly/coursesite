import React from "react";
import ReactDOM from "react-dom";

class Car extends React.Component {
  constructor (props) {
    super(props);
    this.state = {color: "red",
                  music:"jamming"};
  }
  mood = () => {
    ///of note -  this will only change the listed values right here despite looking like it replaces the json object
    if (this.state.music == "jamming"){
      this.setState({music:"sad"});
    }else {
      this.setState({music:"jamming"});
    }
  }

  render () {
    return (
      <div>
        <h2>My name is Car. I am {this.state.color}. I am a {this.props.cartype.brand} car.</h2>
        <p>I low key be {this.state.music}</p>
        <button
          type="button"
          onClick={this.mood}
          >change your mood</button>
      </div>
    )

  }
}
class Garage extends React.Component {
  constructor () {
    super();
  }
  render () {
    const cartype = {brand:"Toyota", color:"Blue"}
    return (
      <div>
        <h2> Guess what its ya boy garage </h2>
        <Car cartype={cartype}/>
      </div>
    )
  }
}
export default Car;
