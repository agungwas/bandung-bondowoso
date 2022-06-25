import { Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import NavBar from 'components/NavBar';
import Footer from 'components/Footer';
import LeaderBoardPage from 'pages/Leaderboard';
import Explorer from 'pages/Explorer';


const Router = () => {
  return (
    <div id="__next">
      <ToastContainer/>
      <div className="root-page row justify-content-center" style={{ backgroundColor: '#202228' }}>
        <NavBar />
        <div className="content-layout">
          <Routes>
              <Route index element={<Navigate replace to="/leaderboard" />} />
              <Route path='/leaderboard' element={<LeaderBoardPage />} />
              <Route path='/explorer' element={<Explorer />} />
              <Route path='*' element={<Navigate replace to="/" />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Router