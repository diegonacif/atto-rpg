import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { WhitePage } from './pages/WhitePage';
import { Skills } from './components/Skills/Skills';
import { Equipments } from './components/Equipments/Equipments';
import { Attributes } from './components/Attributes/Attributes';
import { Experience } from './pages/Experience/Experience';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Attributes />} />
        <Route path="skills" element={<Skills />} />
        <Route path="equipments" element={<Equipments />} />
        <Route path="experience" element={<Experience />} />
      </Route>
    </Routes>
    
  </BrowserRouter>
)
