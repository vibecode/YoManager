import _ from 'lodash';
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import { fetchEmployees } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.fetchEmployees();

    this.createDataSourse(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSourse(nextProps);
  }

  createDataSourse({employees}) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees);
  }

  renderRow(employee) {
    return <ListItem employee={employee} />;
  }

  render() {
    return (
        <ListView
            enableEmptySections
            dataSource={this.dataSource}
            renderRow={this.renderRow}
        />
    )
  }
}

const mapStateToProps = (state) => {
  const employees = _.map(state.employees, (val, uid) => {
    return {...val, uid};
  });
  return { employees };
};

export default connect(mapStateToProps, {fetchEmployees})(EmployeeList);