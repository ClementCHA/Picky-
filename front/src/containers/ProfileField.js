import { connect } from 'react-redux';
import ProfileField from 'src/components/ProfileField';
// import {} from 'src/actions/profileuser';
import {changeInputValue, reset} from 'src/actions/user';
import { getProfil, patchProfil, deleteProfil } from 'src/actions/profil'
const mapStateToProps = (state) => ({
  email: state.user.email,
  pseudo: state.user.pseudo,
  password: state.user.password,
  isConnected: state.status.isConnected,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, key) => {
    const action = changeInputValue(value, key)
    dispatch(action)
  },
  
  resetPage: () => {
    const action = reset(); 
    dispatch(action)
  },

  getProfil: () => {
    dispatch(getProfil())
  },

  deleteProfil: () => {
    dispatch(deleteProfil())
  },

  patchProfil: () => {
    dispatch(patchProfil())
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileField);
