import React from 'react';
import { assets } from "../assets/assets";

const TopClients = () => {
  return (
    <div className="my-16">
      <h2 className="text-3xl font-medium text-center">Top Clients</h2>
      <p className="text-center text-sm text-gray-600 mt-4">
        Trusted by leading businesses and high-profile individuals.
      </p>
      <div className="flex justify-center gap-8 mt-8">
        <div className="w-24 h-24">
          <img src={assets.client_logo1} alt="Client 1" className="object-contain" />
        </div>
        <div className="w-24 h-24">
          <img src={assets.client_logo2} alt="Client 2" className="object-contain" />
        </div>
        <div className="w-24 h-24">
          <img src={assets.client_logo3} alt="Client 3" className="object-contain" />
        </div>
        <div className="w-24 h-24">
          <img src={assets.client_logo4} alt="Client 4" className="object-contain" />
        </div>
      </div>
    </div>
  );
};

export default TopClients;
