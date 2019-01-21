import { combineReducers } from 'redux';
import repositories from './repositories'
import repositoryData from './repository'

export default combineReducers({
    repositories,
    repositoryData
})