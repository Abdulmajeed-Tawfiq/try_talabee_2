//// redux provider comp ////

import { store } from '../Redux/store'
import { Provider } from 'react-redux'
import { Tchildren } from '../Layout/app/Types'

function ReduxT({ children }: Tchildren) {

  return (

    <Provider store={store}>
        {children}
    </Provider>

  )
}

export default ReduxT