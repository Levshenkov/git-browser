import axios from 'axios'

const UPDATE_USER_NAME = 'UPDATE_USER_NAME'
const SET_REPOSITORIES = 'SET_REPOSITORIES'
const README = 'README'

const initialState = {
  username: '',
  list: [],
  readme: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_NAME:
      return {
        ...state,
        username: action.username
      }
    case SET_REPOSITORIES:
      return {
        ...state,
        list: action.list
      }
    case README:
      return {
        ...state,
        readme: action.readme
      }
    default:
      return state
  }
}

export function updateUsername(username) {
  return { type: UPDATE_USER_NAME, username }
}

export function setRepositories(username) {
  // eslint-disable-next-line func-names
  return function(dispatch) {
    axios(`https://api.github.com/users/${username}/repos`).then((it) => {
      const list = it.data.map((repo) => repo.name)
      dispatch({ type: SET_REPOSITORIES, list })
    })
  }
}

export function setReadme(username, repositoryname) {
  // eslint-disable-next-line func-names
  return function(dispatch) {
    axios(
      `https://api.github.com/repos/${username}/${repositoryname}/contents/README.md?ref=master`
    ).then((text) => {
      const readme = atob(text.data.content)
      dispatch({ type: README, readme })
    })
  }
}
