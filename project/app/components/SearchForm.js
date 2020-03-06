import React from 'react';
import { Form, Field } from '@availity/form';
import { Button, Card } from 'reactstrap';
import * as yup from 'yup';
import { useAppStore } from '@/hooks';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import RegisterMem from '../register/RegisterMem';

const schema = yup.object().shape({
  memberId: yup
    .string()
    .isRequired(true, 'This Field is Required.')
    .matches(/^\d{8}$/, 'Member ID must be 8 digits.'),
  zipCode: yup
    .string()
    .isRequired(true, 'This Field is Required.')
    .matches(/^\d{5}(?:-\d{4})?$/, 'Valid Zip Code Formats: 12345 or 12345-6789'),
});

async function stall(stallTime = 3000) {
  await new Promise(resolve => setTimeout(resolve, stallTime));
}

const SearchForm = () => {
  const { memberId, zipCode, setLoading, setMemberInfo } = useAppStore(store => ({
    memberId: store.memberInfo?.memberId || '',
    zipCode: store.memberInfo?.zipCode || '',
    setLoading: store.setLoading,
    setMemberInfo: store.setMemberInfo,
  }));

  const handleSubmit = async values => {
    setLoading(true);
    await stall();
    setMemberInfo({
      ...values,
      name: 'John Doe',
    });
    setLoading(false);
  };

  return (
    <React.Fragment>
      <Card body>
        <BrowserRouter>
          <NavLink exact to="/register" class="nav-item nav-link active col-4">
            <div>
              <h4>
                <Button class="btn btn-success">Register </Button>
                <span class="sr-only">(current)</span>
              </h4>
            </div>
          </NavLink>
          <Switch>
            <Route exact path="/register" component="RegisterMem">
              <RegisterMem />
            </Route>
          </Switch>
        </BrowserRouter>
        <Form
          initialValues={{
            memberId,
            zipCode,
          }}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          <Field name="memberId" type="text" label="Member ID" />
          <Field name="zipCode" type="text" label="Zip Code" />
          <Button type="submit" color="primary" className="float-right">
            View Member Card
          </Button>
        </Form>
      </Card>
    </React.Fragment>
  );
};

export default SearchForm;
