import React from 'react';
import './App.css';
import RepoDetail from './components/repos/RepoDetail';
import { Routes, Route } from "react-router-dom"
import Home from './components/home/Home';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/detail-page/*'>
        <Route path=":id" element={<RepoDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
