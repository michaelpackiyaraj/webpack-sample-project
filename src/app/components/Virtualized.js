import React, { Component } from 'react';
import { List } from "react-virtualized";

const rowCount = 3000;
const listHeight = 600;
const rowHeight = 350;
const rowWidth = 1000;

class Virtualized extends Component {
  constructor() {
    super();
    this.renderRow = this.renderRow.bind(this);
    this.list = Array(rowCount).fill().map((val, idx) => {
      return {
        id: idx, 
        image: 'http://lorempixel.com/800/300/'
      }
    });
  }
  
  renderRow({ index, key, style }) {
    return (
      <div key={key} style={style} className="row">
        <div className="image">
          <img src={this.list[index].image} alt="" />
        </div>
      </div>
    );
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2 className="App-title">Welcome to react-virtualized</h2>
        </header>
        <div className="list">
          <List
            width={rowWidth}
            height={listHeight}
            rowHeight={rowHeight}
            rowRenderer={this.renderRow}
            rowCount={this.list.length}
            overscanRowCount={3} />
        </div>
      </div>
    );
  }
}

export default Virtualized;
