import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import GlobalStyle from "./styles/globalStyles";
// import { Provider } from 'react-redux';
// import { persistor, store } from 'redux/store';
// import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}> */}
        <BrowserRouter basename="/GooseTrack-project-group-1-frontend">
          <GlobalStyle/>
          <App />
        </BrowserRouter>
      {/* </PersistGate> */}
  {/* //   </Provider>{' '} */}
  </React.StrictMode>
);