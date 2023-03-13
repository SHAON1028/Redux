import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import BookingForm from './components/BookingForm';
import FormData from './components/FormData';
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
   <Provider store = {store}>
     <div className="App">
     <Header></Header>
     <BookingForm></BookingForm>
     <FormData></FormData>
    </div>
   </Provider>
  );
}

export default App;
