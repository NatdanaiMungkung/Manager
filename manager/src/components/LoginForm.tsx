import React, {Component} from 'react'
import {View,Text} from 'react-native'
import {Card, CardSection, Input, Button,Spinner} from './common'
import {emailChanged,passwordChanged,loginUser} from './actions'
import {connect} from 'react-redux'

class LoginForm extends Component {
    onEmailChanged(text) {
        this.props.emailChanged(text)
    }

    onPasswordChanged(text) {
        this.props.passwordChanged(text)
    }
    onLogin() {
        const {email,password} = this.props;
        this.props.loginUser(email,password)
    }
    renderError() {
        if (this.props.error) {
            return (
                <View style={{backgroundColor: 'white'}}>
                    <Text style={styles.errorStyle}>{this.props.error}</Text>
                </View>
            )
        }
    }
    renderButton() {
        if (this.props.loading) {
            return (<Spinner size="large"/>)
        } else {
            return (<Button onPress={this.onLogin.bind(this)}>Login</Button>)
        }
    }
    render() {
        return (
            <Card>
                <CardSection>
                    <Input label="Email" placeholder="email@gmail.com" 
                    onChangeText={this.onEmailChanged.bind(this)} value={this.props.email}/>
                </CardSection>
                <CardSection>
                    <Input label="Password" placeholder="password" 
                    onChangeText={this.onPasswordChanged.bind(this)} value={this.props.password}
                    secureTextEntry/>
                </CardSection>
                {this.renderError()}
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        )
    }
}

const styles = {
    errorStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    }
}

export default connect(mapStateToProps,{emailChanged,passwordChanged,loginUser})(LoginForm)