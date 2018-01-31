import { connect } from 'react-redux'
import buyTokenform from '../../ui/buytokenform/buyTokenForm'
import { updateUser } from './buyTokenformactions'

const mapStateToProps = (state, ownProps) => {
  return {
    name: state.user.data.name
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onbuytokenformSubmit: (name) => {
      event.preventDefault();

      dispatch(updateUser(name))
    }
  }
}

const buyTokenformcontainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(buyTokenform)

export default buyTokenformcontainer
