import './App.css';
import LoginPage from "./Components";
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Login from "./Components/Login";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path={'/login-page'} element={<LoginPage />}/>
                <Route path={'/'} element={<Login/>}/>
                <Route path={'*'} element={<div>not found</div>}/>
            </Routes>
        </BrowserRouter>

    </div>
  );
}
export default App;
