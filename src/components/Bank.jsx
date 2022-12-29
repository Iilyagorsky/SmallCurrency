import { Outlet } from 'react-router-dom';
import Header from './Header/Header';

const Bank = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Bank;