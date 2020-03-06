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
            <button class="btn btn-primary" onClick={this.get}>
              Get Data
            </button>
          </p>

          <div>
            <table class="table table-striped table-inverse table-responsive">
              <thead class="thead-inverse">
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
      console.log('inside get');
      console.log(this.state.data);
    });

  post = () => console.log('Post');
}

export default Content;
