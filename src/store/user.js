import axios from 'axios'

const GET_LIST = 'USER/GET_LIST'

const changeList = list => ({
  type: GET_LIST,
  ulist: list
})

export const getUserList = (host) => {
  return (dispatch, getState, axiosInstance) => {
    return axios.get(`http://${host}/api/user/list`)
    .then(res => {
      const {list} = res.data
      dispatch(changeList(list))
    })
  }
}

const defaultState = {
  ulist: []
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case GET_LIST:
      const newState = {
        ...state,
        ulist: action.ulist
      }
      return newState
    default:
      return state
  }
}