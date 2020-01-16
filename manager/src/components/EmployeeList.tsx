import React, { Component } from 'react';
import {FlatList} from 'react-native'
import {connect} from 'react-redux'
import {employeeFetch} from './actions'
import ListItem from './ListItem'
import _ from 'lodash'

class EmployeeList extends Component {
    UNSAFE_componentWillMount() {
        this.props.employeeFetch();
    }
    renderRow({item: library}) {
        return <ListItem library={library}/>
    }
    render() {
        //console.log(this.props)
        return (
            <FlatList data={this.props.employees} renderItem={this.renderRow} keyExtractor={item => item.uid.toString()}/>
        )
    }
}

const mapStateToProps = (state) => {
    const employees = _.map(state.employee,(val,uid) => {
        return {...val,uid}
    })
    //console.log(employees)
    return {employees}
}

export default connect(mapStateToProps,{employeeFetch})(EmployeeList)