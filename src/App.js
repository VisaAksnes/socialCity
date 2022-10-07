import {Route, Routes} from 'react-router-dom';
import WelcomePage from './Components/Pages/Welcome';
function App() {
  return (
    <div>
       <Routes>
          <Route path='/' element={<WelcomePage/>}></Route>
       </Routes>
    </div>
  );
}

export default App;
