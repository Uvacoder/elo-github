import { FETCHING, SUCCESS } from './actions';

export const fetchRepository = (username, repo) => async (dispatch, getState) => {
    dispatch({ type: FETCHING })
    const response = await fetch(`https://api.github.com/repos/${username}/${repo}`)
    const json = await response.json()

    dispatch({
        type: SUCCESS,
        payload: json
    })
}