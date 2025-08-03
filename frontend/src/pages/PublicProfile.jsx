// src/pages/PublicProfile.jsx
import React from 'react';

const PublicProfile = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-10">
      <h1 className="text-3xl font-bold">Prasoon Pandey</h1>
      <p className="text-gray-500">CSE Student • State-level Footballer • Rotaract Treasurer</p>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="bg-green-100 p-4 rounded-lg text-center">
          <p className="text-xl font-bold">8</p>
          <p className="text-sm">Skills Mastered</p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg text-center">
          <p className="text-xl font-bold">45</p>
          <p className="text-sm">Teaching Hours</p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg text-center">
          <p className="text-xl font-bold">127</p>
          <p className="text-sm">Students Taught</p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg text-center">
          <p className="text-xl font-bold">1850</p>
          <p className="text-sm">Karma Earned</p>
        </div>
      </div>
    </div>
  );
};

export default PublicProfile;
