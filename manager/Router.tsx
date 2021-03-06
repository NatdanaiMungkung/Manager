import React from 'react'
import {Scene, Router, Actions} from 'react-native-router-flux'
import LoginForm from './src/components/LoginForm'
import EmployeeList from './src/components/EmployeeList'
import EmployeeCreate from './src/components/EmployeeCreate'
import EmployeeEdit from './src/components/EmployeeEdit'

const RouterComponent = () => {
    return (
        <Router sceneStyle={{paddingTop:65}}>
            <Scene key="auth">
                <Scene key="login" component={LoginForm} title="Please Login" initial/>
            </Scene>
            <Scene key="main">
                <Scene key="employeeList" component={EmployeeList} title="Employees" 
                rightTitle="Add" onRight={()=> Actions.employeeCreate()} initial
                />
                <Scene key="employeeCreate" component={EmployeeCreate} title="Create new Employee" />
                <Scene key="employeeEdit" component={EmployeeEdit} title="Edit Employee" />
            </Scene>
        </Router>
    )
}

export default RouterComponent