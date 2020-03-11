import React from 'react';
import PropTypes from 'prop-types';
import { Container, Button, Card } from 'reactstrap';
import PageHeader from '@availity/page-header';
import { connect } from 'react-redux';

import { AvForm, AvField, AvCheckbox, AvCheckboxGroup } from 'availity-reactstrap-validation';
import createMember from '../redux/actions/RegisterAction';

class MemberRegistration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      memberDetails: [
        {
          name: '',
          birthDate: '',
          telephoneNumber: '',
          emailId: '',
          color: '',
          location: '',
        },
      ],
    };
  }

  handleChange = event => {
    this.setState(prevState => ({ ...prevState, name: event.target.value }));
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.dispatch(createMember(this.state.memberDetails));
  };

  render() {
    return (
      <Container data-testid="sso-container" className="container-sm">
        <PageHeader appName="Registration" />
        <Card body>
          <AvForm onSubmit={this.handleSubmit}>
            <div className="form-group-row">
              <AvField
                class="col-sm-4"
                name="name"
                // eslint-disable-next-line react/destructuring-assignment
                value={this.state.memberDetails.name}
                onChange={this.handleSubmit}
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

            <Button color="primary" type="submit" className="float-right">
              Submit
            </Button>
          </AvForm>
          <div>
            {this.props.memberDetails.map(memberDetails => (
              <div key={memberDetails.name}> MemberDetails: {memberDetails.name}</div>
            ))}
          </div>
        </Card>
      </Container>
    );
  }
}

MemberRegistration.propTypes = {
  dispatch: PropTypes.func.isRequired,
  memberDetails: PropTypes.array.isRequired,
};
function mapStatetoProps(state) {
  return {
    memberDetails: state.memberDetails,
  };
}

export default connect(mapStatetoProps)(MemberRegistration);