import React, { Component } from 'react'
import {Card, CardSection, Button} from './common'
import { employeeUpdated,employeeCreated } from './actions'
import {connect} from 'react-redux'
import EmployeeForm from './EmployeeForm'

class EmployeeCreate extends Component {
    onButtonPressed() {
        const {name,phone,shift} = this.props;
        this.props.employeeCreated({name,phone,shift: shift || "Mon"});
    }
    render() {
        //console.log(this.props.employee)
        return (
            <Card>
                <EmployeeForm {...this.props}/>
                <CardSection>
                    <Button onPress={this.onButtonPressed.bind(this)}>Create</Button>
                </CardSection>
            </Card>
        )
    }
}



const mapStateToProp = (state) => {
    const {name,phone,shift} = state.employeeForm
    return {name,phone,shift}
}

export default connect(mapStateToProp,{employeeUpdated,employeeCreated})(EmployeeCreate) 