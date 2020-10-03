import React from "react";

class ShipCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onMission: false,
    };
  }

  

  render() {
    return (
      <div id="ship">
        
        <h3>{this.props.name} </h3>
        "add rename field sometime"
        <div id="shipInfo">
        Info:
        <ul>Speed: {this.props.speed}</ul>
        <ul>Strength: {this.props.strength}</ul>
        </div>
      </div>
    );
  }
}

export default ShipCard;
