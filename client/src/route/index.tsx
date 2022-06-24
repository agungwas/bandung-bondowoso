import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import NavBar from 'components/NavBar';
import Footer from 'components/Footer';
import LeaderBoardPage from 'pages/LeaderBoard';


const Router = () => {
  return (
    <div id="__next">
        <ToastContainer/> 
      <div className="root-page row justify-content-center" style={{ backgroundColor: '#202228' }}>

        <NavBar />
        <Routes>
          <Route index element={<LeaderBoardPage />} />
        </Routes>
        <Footer />
        
      </div>
    </div>
  );
}

export default Router