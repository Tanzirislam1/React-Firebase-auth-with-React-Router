import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import UserInfo from './Components/UserInfo/UserInfo';
import Users from './Components/Users/Users';
import RequireAuth from './RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}>Home</Route>
        <Route path="/users" element={<Users></Users>}>Users</Route>
        {/* dynamic route : amra dynamic route set korte 1st e amra akta route nibo then route er path er moddhe amra ('pathname/:id-name') 1st e path-name dibo terpor / diye then :userID colon diye amra dynamic route er akta id name dise...terpor amra element e akta component set kore dise....ai dynamic route ta amra users route singleUser component er user-info button er to={`/user/${id}`} to={} field er moddhe dynamic vabe amra {`/dynamic-route-path-name/${id}`} dynamic route path-name diye ter moddhe enter kore terpor {id} dynamic vabe id set kore ditase....ai dynamic route kore jei id ta pass kortase and SingleUsers theke dynamic vabe id set kore oi id ta k amra dynamic route er jei element component set korse oi component er moddhe userId ta k useParams hook use kore {useId} destructure kortase...aivabe amra single userinfo pitase then amra abar hook use kore data load korse kinto aiber data load korar shomoy amra shob gulo user dekhabo nh shudhu single user k dekhabo tai amra url er moddhe dynamic vabe id set kore ditase aita hocche dynamic route er moddhe amra jei id name dise shei id name...  */}
        <Route path='user/:userId' element={
          /* required auth / protected route */
          <RequireAuth>
            <UserInfo></UserInfo>
          </RequireAuth>
        }>User Info</Route>
        <Route path="/login" element={<Login></Login>}>Login</Route>
      </Routes>
    </div>
  );
}

export default App;
