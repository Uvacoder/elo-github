import { FETCHING, SUCCESS } from './actions';

export const fetchRepositories = (query) => async (dispatch, getState) => {
    dispatch({ type: FETCHING })
    
    const response = await fetch(`https://api.github.com/search/repositories?q=${query}&sort=name&order=asc`)
    const json = await response.json()

    dispatch({
        type: SUCCESS,
        payload: json
    })
}