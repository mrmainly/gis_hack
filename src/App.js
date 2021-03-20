import React, { useState, useEffect } from 'react'
import MainPageYoung from './pages/MainPageYoung/mainPageYong'
import axios from 'axios'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import HomePage from './pages/HomePage/index'
import Faq from './pages/Faq/faq'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/route').then((res) => {
      console.log('ddasd', res.data.find(id => id.id))
      setData(res.data)

    })
  }, [])

  return (
    <Router>
      <Switch>
        <Route path="/maps" component={MainPageYoung} />
        <Route path="/faq" component={Faq} />
        <Route path="/" component={HomePage} exact />
      </Switch>
    </Router>
  );
}

export default App;
