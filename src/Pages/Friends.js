import React, { Component } from 'react';
import axios from 'axios';

export default class Friends extends Component {
  state = { students: [] };

  getStudentsData = async () => {
    // you need to store json file in public folder
    const response = await axios.get('student_CC5.json');
    this.setState({ students: response.data });
  };

  componentDidMount() {
    this.getStudentsData();
  }

  render() {
    const { students } = this.state;
    const table = students.map(student => (
      <tr key={student.id}>
        <td>{student.id}</td>
        <td>{student.Name}</td>
        <td>{student.Surname}</td>
        <td>{student.Tel}</td>
        <td>{student.Email}</td>
        <td>
          <a href={student.Website}>{student.Website}</a>
        </td>
      </tr>
    ));
    return (
      <div>
        <h1>Friends</h1>
        <table className="ui striped table">
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Surname</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>{table}</tbody>
        </table>
      </div>
    );
  }
}
