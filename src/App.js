
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/store';
import MainRoutes from './routes';
import { Container } from '@material-ui/core/';
import Header from './components/Header';

const App = () => {
  
  
  const localCart = JSON.parse(localStorage.getItem('dioshopping: cart')) //parse, método que converte string em JSON
    
  if(localCart !== null) {
    store.dispatch({type: 'CHANGE_CART', localCart}) //dentro da store tem o dispatch, por isso pode ser usada.
  }
  
  return(
    <Provider store={store}>
      <Container maxWidth="xl">
        <Router>
          <Header />
          <MainRoutes />
        </Router>
      </Container>
    </Provider>
  )
}

export default App;
