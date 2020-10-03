import React from "react";
import ShipCtrl from './components/shipCtrl';

class GameCont extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  

  render() {
    return (
      <div id="gameCont">
        <ShipCtrl/>
      </div>
    );
  }
}

export default GameCont;
