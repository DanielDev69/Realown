// import React from 'react';
// import { BrowserRouter, Routes, Route, } from 'react-router-dom';
// import './App.css';
// import {} from "antd";
// import Home from './pages/home/Home'
// import Marketplace from './pages/marketplace/Marketplace'
// import Activities from './pages/activities/Activities'
// import Myportfolio from './pages/myportfolio/Myportfolio'
// import More from './pages/more/More'
// import Notfound from './pages/notfound/Notfound'
// import SideMenu from './components/SideMenu';


// const App = () => {
//   return (
//     <BrowserRouter className="App">
//       <SideMenu />
//       <Routes>
//       <Route exact path="/" element={<Home/>} />
//       <Route path="marketplace" element={<Marketplace/>} />
//       <Route path="activities" element={<Activities/>} />
//       <Route path="myportfolio" element={<Myportfolio/>} />
//       <Route path="more" element={<More/>} />
//       <Route path="notfound" element={<Notfound/>} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App;

import { Space } from "antd";
import "./App.css";
import PageContent from "./components/PageContent/PageContent";
import SideMenu from "./components/SideMenu/SideMenu";

const App = () => {
  return <div className="App">
  <Space className="SideMenuAndPageContent">
    <SideMenu></SideMenu>
    <PageContent></PageContent>
  </Space>
  </div>
}

export default App