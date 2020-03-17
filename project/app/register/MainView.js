import React from 'react';
import { Button, Card } from 'reactstrap';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import { Provider } from 'react-redux';
import Content from './Content';
import MemberRegistration from './MemberRegistration';
import configureStore from '../redux/configureStore';

const store = configureStore();
const MainView = () => {
  return (
    <Provider store={store}>
      <>
        <Card Body>
          <BrowserRouter>
            <div className="btn-group">
              <NavLink exact to="/register" className="nav-item nav-link active col-4">
                <span>
                  <Button className="mt-3" color="primary">
                    Register
                  </Button>
                </span>
              </NavLink>
              {'   |   '}
              <NavLink exact to="/users" className="nav-item nav-link active col-4">
                <span>
                  <Button className="mt-3" color="primary">
                    User Details
                  </Button>
                </span>
              </NavLink>
            </div>
            <Switch>
              <Route exact path="/register" component="RegisterMem">
                <MemberRegistration />
              </Route>
              <Route exact path="/users" component="Content">
                <Content />
              </Route>
            </Switch>
          </BrowserRouter>
        </Card>
      </>
    </Provider>
  );
};
export default MainView;
