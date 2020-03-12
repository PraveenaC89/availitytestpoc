import React, { Component } from 'react';
import axios from 'axios';
import { Card } from 'reactstrap';

class Content extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      createdData: [],
    };
  }

  render() {
    return (
      <Card body>
        <div>
          <p>
            <button type="button" className="btn btn-primary" onClick={this.get}>
              Get Data
            </button>
            <button type="button" className="btn btn-primary" onClick={this.create}>
              Create Data
            </button>
            <button type="button" className="btn btn-primary" onClick={this.clear}>
              Clear Data
            </button>
          </p>
          <div>
            Created Data :
            {
              // eslint-disable-next-line react/destructuring-assignment
              this.state.createdData.toString
            }
          </div>
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
                {// eslint-disable-next-line react/destructuring-assignment
                this.state.data.map(dt => {
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

  create = () =>
    axios
      .post('https://jsonplaceholder.typicode.com/posts', {
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then(response => {
        this.setState({ createdData: response.data });
        return response.data;
      })
      .then(json => console.log(json));

  clear = () => {
    this.setState({ data: [] });
  };

  post = () => console.log('Post');
}

export default Content;
