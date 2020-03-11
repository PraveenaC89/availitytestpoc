import React, { Component } from 'react';
import axios from 'axios';
import { Card } from 'reactstrap';

class Content extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  render() {
    return (
      <Card body>
        <div>
          <p>
            <button className="btn btn-primary" onClick={this.get}>
              Get Data
            </button>
            <button className="btn btn-primary" onClick={this.clear}>
              Clear Data
            </button>
          </p>

          <div>
            <table className="table table-striped table-inverse table-responsive">
              <thead className="thead-inverse">
                <tr>
                  <th>ID</th>
                  <th>User ID</th>
                  <th>Title</th>
                </tr>
              </thead>
              <tbody>
                {this.state.data.map(dt => {
                  return (
                    <>
                      <tr>
                        <td>{dt.id}</td>
                        <td>{dt.userId}</td>
                        <td>{dt.title}</td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </Card>
    );
  }

  get = () =>
    axios.get('https://jsonplaceholder.typicode.com/posts').then(result => {
      this.setState({ data: result.data });

      return true;
    });

  clear = () => {
    this.setState({ data: [] });
  };

  post = () => console.log('Post');
}

export default Content;
