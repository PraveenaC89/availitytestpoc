import React, { Component } from 'react';
import { Container, Button } from 'reactstrap';
import PageHeader from '@availity/page-header';
import Spaces from '@availity/spaces';
import { AvForm, AvField, AvCheckbox, AvCheckboxGroup } from 'availity-reactstrap-validation';

class RegisterMem extends Component {
  render() {
    return (
      <Container data-testid="sso-container" className="container-sm">
        <PageHeader appName="Registration" />

        <AvForm>
          <div class="form-group-row">
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
          <div class="form-group-row">
            <AvField
              name="dateProp"
              label="Birth Date"
              type="text"
              validate={{ date: { format: 'MM/DD/YYYY' } }}
              title="Use MM/DD/YYYY"
            />
          </div>
          <div class="form-group-row">
            <AvField name="telephoneProp" label="Phone Number" type="text" validate={{ tel: true }} />
          </div>
          <div class="form-group-row">
            <AvField name="emailProp" label="Email" type="text" validate={{ email: true }} />
          </div>
          <div class="form-group-row">
            <AvCheckboxGroup
              inline
              name="maxCheckedCheckboxList"
              label="Color [ Max two]"
              validate={{ max: { value: 2 } }}
            >
              <AvCheckbox label="Blue" value="Blue" />
              <AvCheckbox label="Green" value="Green" />
              <AvCheckbox label="Yellow" value="Yellow" />
              <AvCheckbox label="Red" value="Red" disabled />
            </AvCheckboxGroup>
          </div>
          <div class="form-group-row">
            <AvCheckboxGroup
              inline
              name="minCheckedCheckboxList"
              label="Prefered Location"
              validate={{ min: { value: 2 } }}
            >
              <AvCheckbox label="Bulbasaur" value="Bulbasaur" />
              <AvCheckbox label="Squirtle" value="Squirtle" />
              <AvCheckbox label="Charmander" value="Charmander" />
              <AvCheckbox label="Pikachu" value="Pikachu" disabled />
            </AvCheckboxGroup>
          </div>

          <Button class="btn btn-primary"> Submit</Button>
        </AvForm>
      </Container>
    );
  }
}
export default RegisterMem;
