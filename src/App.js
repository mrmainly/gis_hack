import logo from './logo.svg';
import React, { useState, useEffect } from 'react'
import MainPageYoung from './pages/MainPageYoung/mainPageYong'
import Login from './pages/auth/login'
import Register from './pages/auth/register'
import Verification from './pages/auth/verification'
import axios from 'axios'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import MangaRoute from './pages/routePage/mangaRoutePage'
import MangaRoutePage from './pages/routePage/mangaRoutePage';

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
        <Route path="/" component={MainPageYoung} exact />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/verification" component={Verification} />
        <Route path="/manga/:id" render={(routerProps) => {
          console.log(routerProps)
          let mangaId = parseInt(routerProps.match.params.id)
          let foundManga = data.find(mangaObj => mangaObj.id == mangaId)
          return (foundManga ? <MangaRoutePage /> : <p>error</p>)
        }} />
      </Switch>
    </Router>
  );
}

export default App;
