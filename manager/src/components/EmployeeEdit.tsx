import React, { Component } from 'react'
import {Card,CardSection,Button,Confirm} from './common'
import {connect} from 'react-redux'
import EmployeeForm from './EmployeeForm'
import {employeeUpdated,employeeSave,employeeDelete} from './actions'
import Communications from 'react-native-communications'
import _ from 'lodash'

class EmployeeEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
    }
    UNSAFE_componentWillMount() {
        console.log(this.props.employee)
        if (this.props.employee) {
            _.each(this.props.employee,(value,prop) => {
                this.props.employeeUpdated({prop,value})
            })
            
        }
    }
    onButtonPress() {
        const {name,phone,shift} = this.props
        this.props.employeeSave({name,phone,shift,uid: this.props.employee.uid})
    }

    onTextPress() {
        const {phone,shift} = this.props
        Communications.text(phone,`You have been assigned to shift ${shift}`)
    }


    render() {
        return (
            <Card>
                <EmployeeForm/>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>Save Changes</Button>
                    
                </CardSection>
                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>Text Shift</Button>
                </CardSection>

                <CardSection>
                    <Button onPress={()=>this.setState({showModal:true})}>Fire !!!</Button>
                </CardSection>
                <Confirm visible={this.state.showModal} 
                onAccept={()=> this.props.employeeDelete({uid:this.props.employee.uid})}
                onReject={()=> this.setState({showModal:false})}>Sure?</Confirm>
            </Card>
        )
    }
}

const mapStateToProps = state => {
    const {name,phone,shift} = state.employeeForm
    return {name,phone,shift}
}

export default connect(mapStateToProps,{employeeUpdated,employeeSave,employeeDelete}) (EmployeeEdit)