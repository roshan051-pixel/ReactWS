import React, { Component } from "react";
import Header from "./Header"

import './ShowSubscribers.css';
import './common/common.css';

class ShowSubscribers extends Component {

  constructor(){
    super();
    this.state = {
      subscriberListTOShow: []
    }
    console.log(1);
  }
  componentDidMount(){
    let newsubscriber = {
      id: 1,
      name: "Roshan",
      phone: "9999999999"
    }
    let subscriberList  = this.state.subscriberListTOShow;
    subscriberList.push(newsubscriber);
    this.setState({subscriberListTOShow: subscriberList})
    console.log(2);
  }

  myDeleteHandler(msg){
alert(msg);
  }

  render () {
    console.log(3);
    // let subscribers = [
    //   {
    //     id: 1,
    //     name: "A Roy",
    //     phone: "111111111"
    //   },
    //   {
    //     id: 2,
    //     name: "B Roy",
    //     phone: "222222222"
    //   }
    // ]

    return (
    <div className="component-container">
        <Header heading="Roshan Phone Directory" instructor="Upgrad instructor"></Header>
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item name-heading">Phone</span>
          </div>
          {
            this.state.subscriberListTOShow.map(sub => {
              return <div key={sub.id} className="grid-container">
                <span className="grid-item">{sub.name}</span>
                <span className="grid-item">{sub.phone}</span>
                <span className="grid-item action-btn-container">
                  <button className="custom-btn delete-btn" onClick={this.myDeleteHandler.bind(this, "Delete Clicked")}>Delete</button>
                </span>
                </div>
            }
            )
          }
        </div>
    </div>
      
    );
  }
}

export default ShowSubscribers;
