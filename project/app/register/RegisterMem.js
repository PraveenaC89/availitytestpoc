import React from 'react';
import { Container, Button, Card } from 'reactstrap';
import PageHeader from '@availity/page-header';

import { AvForm, AvField, AvCheckbox, AvCheckboxGroup } from 'availity-reactstrap-validation';

const RegisterMem = () => {
  return (
    <Container data-testid="sso-container" className="container-sm">
      <PageHeader appName="Registration" />
      <Card body>
        <AvForm>
          <div className="form-group-row">
            <AvField
              class="col-sm-4"
              name="name"
              label="Name"
              type="text"
              validate={{
                required: { value: true, errorMessage: 'Please enter a name' },
                pattern: {
                  value: '^[A-Za-z0-9]+$',
                  errorMessage: 'Your name must be composed only with letter and numbers',
                },
                minLength: {
                  value: 6,
                  errorMessage: 'Your name must be between 6 and 16 characters',
                },
                maxLength: {
                  value: 12,
                  errorMessage: 'Your name must be between 6 and 16 characters',
                },
              }}
            />
          </div>
          <div className="form-group-row">
            <AvField
              name="birthDate"
              label="Birth Date"
              type="text"
              validate={{ date: { format: 'MM/DD/YYYY' } }}
              title="Use MM/DD/YYYY"
            />
          </div>
          <div className="form-group-row">
            <AvField name="telephoneNumber" label="Phone Number" type="text" validate={{ tel: true }} />
          </div>
          <div className="form-group-row">
            <AvField name="emailId" label="Email" type="text" validate={{ email: true }} />
          </div>
          <div className="form-group-row">
            <AvCheckboxGroup inline name="color" label="Color" validate={{ max: { value: 2 } }}>
              <AvCheckbox label="Blue" value="Blue" />
              <AvCheckbox label="Green" value="Green" />
              <AvCheckbox label="Yellow" value="Yellow" />
              <AvCheckbox label="Red" value="Red" disabled />
            </AvCheckboxGroup>
          </div>
          <div className="form-group-row">
            <AvCheckboxGroup inline name="location" label="Prefered Location" validate={{ min: { value: 2 } }}>
              <AvCheckbox label="Bulbasaur" value="Bulbasaur" />
              <AvCheckbox label="Squirtle" value="Squirtle" />
              <AvCheckbox label="Charmander" value="Charmander" />
              <AvCheckbox label="Pikachu" value="Pikachu" disabled />
            </AvCheckboxGroup>
          </div>

          <Button color="primary" className="float-right">
            Submit
          </Button>
        </AvForm>
      </Card>
    </Container>
  );
};

export default RegisterMem;
