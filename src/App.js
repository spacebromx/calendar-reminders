import React from 'react';
import Layout from "./components/Layout";
import Calendar from "./components/Calendar";
import Modal from "./components/Modal";
import {ContextProvider} from "./Store";

import './styles/main.css'

function App() {
  return (
    <ContextProvider>
      <Modal />
      <Layout>
        {/*<Calendar/>*/}
      </Layout>
    </ContextProvider>
  );
}

export default App;
