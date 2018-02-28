import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'

export default compose(
  // create listener for map, results go into redux
  firestoreConnect([{ collection: 'map' }]),
  // map redux state to props
  connect(({ firestore: { data } }) => ({
    map: data.map
  }))
)
