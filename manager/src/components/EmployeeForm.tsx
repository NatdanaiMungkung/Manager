import React, { Component } from 'react'
import {Picker, Text,View} from 'react-native'
import {CardSection, Input} from './common'
import { employeeUpdated } from './actions'
import {connect} from 'react-redux'

class EmployeeForm extends Component {
    render() {
        return (
            <View>
                <CardSection>
                    <Input label="Name" placeholder="Jane" value={this.props.name} 
                    onChangeText={value => this.props.employeeUpdated({prop:"name",value})}/>
                </CardSection>
                <CardSection>
                    <Input label="Telephone" placeholder="5555" value={this.props.phone} 
                    onChangeText={value => this.props.employeeUpdated({prop:"phone",value})}/>
                </CardSection>
                <CardSection style={{flexDirection: 'column',}}>
                    <Text style={style.pickerTextStyle}>Shift</Text>
                    <Picker selectedValue={this.props.shift}
                    onValueChange={value => this.props.employeeUpdated({prop:"shift",value})}>
                        <Picker.Item label="Mon" value="Mon"/>
                        <Picker.Item label="Tue" value="Tue"/>
                        <Picker.Item label="Wed" value="Wed"/>
                        <Picker.Item label="Thu" value="Thu"/>
                        <Picker.Item label="Fri" value="Fri"/>
                        <Picker.Item label="Sat" value="Sat"/>
                        <Picker.Item label="Sun" value="Sun"/>
                    </Picker>
                </CardSection>
            </View>
        )
    }
}

const style = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20,
    }
}

const mapStateToProp = (state) => {
    const {name,phone,shift} = state.employeeForm
    return {name,phone,shift}
}

export default connect(mapStateToProp,{employeeUpdated})(EmployeeForm)