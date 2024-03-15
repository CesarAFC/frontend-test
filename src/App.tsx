import './App.css'
import {Provider} from 'react-redux'
import store from './store'
import Products from './components/Products'
import CreditCardInfo from './components/CreditCardInfo'

function App() {

  return (
    <Provider store={store}>
     <h1>Hello World!</h1>
     <Products />
     <CreditCardInfo />
    </Provider>
  )
}

export default App
