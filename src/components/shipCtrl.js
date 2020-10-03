import React from "react";
import ShipCard from './shipCard';

const ships={
    fast:{
        speed:3,
        strength: 'small sattellites',
        cost:1,
    },
    medium:{
        speed:2,
        strength: 'telecommunication sattellites',
        cost:1,
    },
    slow:{
        speed:1,
        strength: 'telescope sattellites',
        cost:1,
    },
}

class ShipCtrl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      energy:"",
      fleet:[],
      money:0,
    shipsArr:[],
    };
  }

  addShip=(type)=>{
      console.log(`added ${type}`);
    let oldFleet= this.state.fleet;
    oldFleet.push(ships[type])
    console.log(oldFleet);
    this.setState({fleet:oldFleet}) 
    this.makeShipcards()
  }

  makeShipcards=()=>{
    const size = this.state.fleet.length
    // console.log(size);
    let arr1=[];
    for (let i=0;i<size;i++){
        arr1.push(
            <ShipCard
                name={'Ship '+i}
                speed={this.state.fleet[i].speed}
                strength={this.state.fleet[i].strength}
                key={i}
            />

        )
    }
    // console.log(arr1);
    this.setState({shipsArr:arr1})
  }

//   componentDidUpdate(prevState){
//     if (this.state.shipsArr===prevState.shipsArr){
//         this.makeShipcards()
//     }
//   }

  render() {
    return (
      <div id="shipCtrl">
        <button onClick={() => this.addShip('fast')}> Add Fast</button>
        <button onClick={() => this.addShip('medium')}> Add Medium</button>
        <button onClick={() => this.addShip('slow')}> Add Slow</button>
        {this.state.shipsArr}
      </div>
    );
  }
}

export default ShipCtrl;
