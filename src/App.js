import { Provider } from 'react-redux';
import './App.css';
import store from './utils/store';
import { RouterProvider } from 'react-router-dom';
import { appRouter } from './router/router';

function App() {
  return (
    <Provider store={store}>
      <div className="App w-screen h-screen font-poppins ">
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
