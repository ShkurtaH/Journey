import ReactDOM from 'react-dom/client';

import './assets/fonts/montserrat/Montserrat-Bold.ttf';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PlacesToStay from './components/places-to-stay/PlacesToStay';
import PlacesList from './components/places-to-stay/PlacesList';
import GetToKnowTheCounty from './components/get-to-know-the-county/GetToKnowTheCounty';
import GetToKnowTheCountyDetail from './components/get-to-know-the-county/GetToKnowTheCountyDetail';
import NewsOverview from './components/news/NewsOverview';
import Suitcase from './components/suitcase/Suitcase';
import PlacesDetail from './components/places-to-stay/PlacesDetail';
import Login from './components/admin/login/Login';
import Register from './components/register/Register';
import Dashboard from './components/admin/dashboard/Dashboard';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/places-to-stay" element={<PlacesToStay />} />
      <Route path="/places-to-stay/list" element={<PlacesList />} />
      <Route path="/places-to-stay/list/detail" element={<PlacesDetail />} />
      <Route path="/get-to-know-the-county" element={<GetToKnowTheCounty />} />
      <Route path="/news" element={<NewsOverview />} />
      <Route path="/get-to-know-the-county/:userId" element={<GetToKnowTheCountyDetail />} />
      <Route path="/suitcase" element={<Suitcase />} />
      <Route path="/register" element={<Register/>}/>
      <Route path="/admin" element={<Login />} />
      <Route path="/admin/dashboard" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
