import axios from 'axios';
import { actionSaveUser, LOGIN, logout, updateSignInError } from 'src/actions/user';
const auth = (store) => (next) => (action) => {
  switch (action.type){
    case LOGIN: {
      const state = store.getState();
      axios.post('/api/picky/signin', {
        email: state.user.email,
        password: state.user.password,
      })
        .then((response) => {
          const { email, token, pseudo} = response.data;
          const saveUser = actionSaveUser(email, token, pseudo);
          store.dispatch(saveUser);
          setTimeout(() => {
            store.dispatch(logout()),
            window.localStorage.clear()
         }, 3600000 );
        })
        .catch((error) => {
          store.dispatch(updateSignInError(error.response.data))
        });
      break;
    }
    default:
      next(action);
  }
};

export default auth
