import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  handleIncrement() {
    alert('Increment Clicked!');
  }

  render() {
    return ( <div>
      <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
      <button onClick={this.handleIncrement} className={this.getBtnClasse()}>Increment</button>
    </div>
    );
  }

  getBtnClasse() {
    let negar = "btn btn-sm btn-";
    negar += this.state.count === 0 ? "secondary" : "warning";
    return negar;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;



// tags: ["tag1: negar", "tag2: negin", "tag3: pedram"],

// renderTags() {
//   if (this.state.tags.length === 0) return <p>There are NO tags!</p>;

//   return (
//     <ul>
//       {this.state.tags.map((tag) => (
//         <li key={tag}>{tag}</li>
//       ))}
//     </ul>
//   );
// }