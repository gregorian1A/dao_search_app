import './App.css';
import { Route, Routes, Switch } from 'react-router-dom';
import { DataProvider } from './context';
import Sidebar from './components/Sidebar/Sidebar';
import DaoScreen from './components/DaoScreen/DaoScreen';
import NewDao from './components/NewDao/NewDao';
import DaoPage from './components/DaoPage/DaoPage';
import EditDao from './components/EditDao/EditDao';
import Learn from './components/Learn/Learn';

const App = () => {

  return (
    <DataProvider>
    <div className="App">
      <Sidebar />
      <Routes>
      <Route path="/" exact element={<DaoScreen />} />
      <Route path="/new" exact element={<NewDao />} />
      <Route path="/:id" exact element={<DaoPage />} />
      <Route path="/:id/edit" exact element={<EditDao />} />
      <Route path="/learn" exact element={<Learn />} />
    </Routes>
    </div>
    
    </DataProvider>
  );
}

export default App;
