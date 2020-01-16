import React, { Component } from 'react'
import {CardSection} from './common'
import {Text, TouchableWithoutFeedback,View} from 'react-native'
import { Actions } from 'react-native-router-flux'

class ListItem extends Component {
    onRowPress() {
        Actions.employeeEdit({employee: this.props.library})
    }
    render() {
        const {library} = this.props
        const {titleStyles} = styles;
        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardSection>
                        <Text style={titleStyles}>{library.name}</Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = {
    titleStyles: {
        fontSize: 18,
        paddingLeft: 15,
    }
}

export default ListItem