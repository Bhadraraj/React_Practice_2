import React, { Component } from "react";

class ProductCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }  
  }

  handleIncreament = () => {
    if (this.state.count < 0) {
    this.setState({ count: this.state.count + 1 });
    }
  }
  handleDecrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }


  }

render() {
  return (
    <>
      <h3>Count : {this.state.count}</h3>
      <button onClick={this.handleIncreament}>add product </button>

      <button onClick={this.handleDecrement}>Remove product </button>
    </>

  )
}

}
// class ProductCounter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }

//   handleIncrement = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   handleDecrement = () => {
//     if (this.state.count > 0) {
//       this.setState({ count: this.state.count - 1 });
//     }
//   };

// render() {
//   return (
//     <div>
//       <h2>Product Counter</h2>
//       <p>Count: {this.state.count}</p>
//       <button onClick={this.handleIncrement}>Add Product</button>
//       <button onClick={this.handleDecrement}>Remove Product</button>
//     </div>
//   );
// }
// }

export default ProductCounter;
