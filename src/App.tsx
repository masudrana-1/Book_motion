import { Provider } from 'react-redux';
import './App.css'
import router from './routes'
import { RouterProvider } from "react-router-dom";
import store from './redux/store';

function App() {

  return (
    <div>
      <Provider store={store}>
          <RouterProvider router={router}></RouterProvider>
      </Provider>
    </div>
  )
}

export default App
