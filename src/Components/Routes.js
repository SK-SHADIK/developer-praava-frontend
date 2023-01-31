import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Login from './Login';

const RoutesList = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />}></Route>
                    <Route path="/Login" element={<Login />}></Route>
                </Routes>
                
            </BrowserRouter>
        </div>
    )
}
export default RoutesList;