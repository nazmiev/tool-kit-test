// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux/es/exports'
import { BrowserRouter } from 'react-router-dom'
import { store } from "./redux/store.ts";

const rootElem = document.getElementById('root');

if (rootElem) {
  ReactDOM.createRoot(rootElem as HTMLElement).render(
    <BrowserRouter basename="/tool-kit-test">
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  )
}
