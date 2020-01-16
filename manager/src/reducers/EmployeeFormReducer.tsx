import {EMPLOYEE_UPDATE, EMPLOYEE_CREATE} from '../components/actions/types'

const INIT_STATE = {name:"",phone:"",shift:""}

export default (state = INIT_STATE,action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            return {...state,[action.payload.prop]:action.payload.value};
        case EMPLOYEE_CREATE:
            return {...state,...INIT_STATE}
        default:
            return state;
    }
}