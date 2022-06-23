import { Route, Routes } from 'react-router-dom';
import { NavBar } from 'components/NavBar';
import { Footer } from 'components/Footer';
import { LeaderBoardPage } from 'pages/leaderboard';

export const ManageRoutes = () => {
  return (
    <div id="__next">
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