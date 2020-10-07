import React from 'react';
import Layout from "./components/Layout";
import Calendar from "./components/Calendar";
import {ContextProvider} from "./Store";

import './styles/main.css'

function App() {
  return (
    <ContextProvider>
      <Layout>
        <Calendar/>
      </Layout>
    </ContextProvider>
  );
}

export default App;
