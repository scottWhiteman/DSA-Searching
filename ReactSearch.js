import React from 'react';

export default class ReactSearch extends React.Component {
  state = {
    data: [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5],
    linear: 0,
    binary: 0
  }

  binarySearch(array, value, start, end) {
    var start = start === undefined ? 0 : start;
    var end = end === undefined ? array.length : end;
  
    if (start > end) {
        return 0;
    }
  
    const index = Math.floor((start + end) / 2);
    const item = array[index];
    if (item == value) {
        return 0;
    }
    else if (item < value) {
        return 1 + this.binarySearch(array, value, index + 1, end);
    }
    else if (item > value) {
        return 1 + this.binarySearch(array, value, start, index - 1);
    }
  };

  linearReactSearch(value) {
    let searches = 0;
    const find = this.state.data.find((num, index) => {
      if (num == value) {
        searches = index;
        return true;
      }
    })
    if (!find) {
      console.log('Not Found');
      return -1;
    }
    else {
      return searches;
    }
  }
  binaryReactSearch(value) {
    const tempData = this.state.data.slice();
    tempData.sort();
    return this.binarySearch(tempData, value)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { search } = e.target;
    let linear = this.linearReactSearch(search.value);
    let binary = this.binaryReactSearch(search.value);
    if (linear === -1) {
      binary = -1;
    }
    this.setState(
      {
        linear,
        binary
      }
    )
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name="search"></input>
          <button type='submit'>Search Number</button>
          <h3 id="linear" className="linear-results">{this.state.linear}</h3>
          <h3 id="binary" className="binary-results">{this.state.binary}</h3>
        </form>
      </div>
    )
  }
}