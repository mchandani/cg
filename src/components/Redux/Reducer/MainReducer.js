import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer'
import SignupReducer from './SignupReducer'

const MainReducer = combineReducers( {LoginReducer,SignupReducer} );

export default MainReducer;