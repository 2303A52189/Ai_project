
import React from 'react';
import { User } from '../types';
import { CoinIcon } from './IconComponents';

interface HeaderProps {
  user: User;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, onLogout }) => {
  return (
    <header className="bg-green-800 text-white p-4 flex justify-between items-center shadow-md sticky top-0 z-50">
      <h1 className="text-xl font-bold">AgroLearn</h1>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-1 bg-green-700 px-3 py-1 rounded-full">
          <CoinIcon className="w-5 h-5 text-yellow-300" />
          <span className="font-semibold">{user.agroCoins}</span>
        </div>
        <button
          onClick={onLogout}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full text-sm transition-colors"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
