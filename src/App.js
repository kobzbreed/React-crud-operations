import './App.css';
import Create from './components/create/create';
import Read from './components/read/read';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Updated imports
import Update from './components/update/update';
import Delete from './components/delete/delete';

function App() {
  return (
    <BrowserRouter>
      <div className='main'>
        <div>
          <h1>React Crud Operations</h1>
        </div>



        {/* <div style={{ marginTop: 20 }}>
          <Read />
        </div> */}

        <Routes> {/* Use Routes component for route configuration */}
          <Route path='/update' element={<Update />} />
          <Route path='/delete' element={<Delete />} />
          <Route exact path='/create' element={<Create />} />
          <Route exact path='/read' element={<Read />} />
        </Routes>

      </div >
    </BrowserRouter >
  );
}

export default App;
