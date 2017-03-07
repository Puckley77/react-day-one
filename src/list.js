import React, { Component } from 'react';
import './list.css'

class List extends Component {

  render(){

    let items = this.props.items.map((item, i) => {
      return <li key={i}>{item}</li>
    })

    let titleStyle = {
      backgroundColor: 'red'
    }

    return(
      <div className="list-body">
      <h1 style={titleStyle}>{this.props.title}</h1>
      <ul>
        {items}
      </ul>
      </div>
    )
  }
}

export default List;
