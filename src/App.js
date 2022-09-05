import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AppSettings from './components/AppSettings/appSettings';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Sub from './components/Sub/Sub';

function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='' element={<Profile />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/news' element={<News />} />
            <Route path='/sub' element={<Sub/>} />
            <Route path='/dialogs' element={<Dialogs />} />
            <Route path='/appsettings' element={<AppSettings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
