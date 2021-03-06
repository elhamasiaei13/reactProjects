import React from 'react'
import moment from 'moment-jalaali'
import DatePicker from '../../../src/components/DatePicker';

class component extends React.Component { 
  constructor(props) {
    super(props);

    this.state = {value: moment()};
  }
  render() {
    return <DatePicker
      value={this.state.value}
      onChange={value => this.setState({ value })}
    />
  }
}

const title = 'Default';
const code = `class component extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {value: moment()};
  }
  render() {
    return <DatePicker
      value={this.state.value}
      onChange={value => this.setState({ value })}
    />
  }
}
`;
const Default = { component, title, code };

export default Default;