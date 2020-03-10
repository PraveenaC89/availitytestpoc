import React from 'react';
import { Button, Card } from 'reactstrap';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import Content from './Content';
import RegisterMem from './RegisterMem';

const MainView = () => {
  return (
    <Card Body>
      <BrowserRouter>
        <div className="btn-group">
          <NavLink exact to="/register" class="nav-item nav-link active col-4">
            <span>
              <Button className="mt-3" color="primary">
                Register
              </Button>
            </span>
          </NavLink>
          {'   |   '}
          <NavLink exact to="/users" class="nav-item nav-link active col-4">
            <span>
              <Button className="mt-3" color="primary">
                User Details
              </Button>
            </span>
          </NavLink>
        </div>
        <Switch>
          <Route exact path="/register" component="RegisterMem">
            <RegisterMem />
          </Route>
          <Route exact path="/users" component="Content">
            <Content />
          </Route>
        </Switch>
      </BrowserRouter>
    </Card>
  );
};
export default MainView;
