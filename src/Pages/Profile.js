import React, { Component } from 'react';

export default class Profile extends Component {
  state = {
    students: [
      {
        id: 1,
        name: 'Nat',
        age: 25
      },
      {
        id: 2,
        name: 'Sonter',
        age: 19
      },
      {
        id: 3,
        name: 'Tobtab',
        age: 24
      }
    ]
  };
  render() {
    const { students } = this.state;
    const id = this.props.match.params.id;
    const index = id - 1;

    return (
      <div>
        <h1>Name: {students[index].name}</h1>
        <h2>Age: {students[index].age}</h2>
      </div>
    );
  }
}
