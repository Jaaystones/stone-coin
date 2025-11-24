import React from "react";
import { ConnectButton } from "@mysten/dapp-kit";


const NavBar: React.FC = () => {
  

  return (
    <nav className="relative z-20 bg-black/40 backdrop-blur-md border-b border-purple-500/20 p-4 shadow-lg w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo/Brand */}
        <div className="flex items-center">
          <h1 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 text-transparent bg-clip-text">
            $STONE
          </h1>
        </div>
        
        {/* Connect Wallet Button */}
        <div className="flex items-center">
          <ConnectButton />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
