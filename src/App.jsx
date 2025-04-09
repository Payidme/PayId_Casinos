
import React, { useEffect, useState } from 'react';
import { supabase } from './lib/supabase';

export default function App() {
  const [casinos, setCasinos] = useState([]);

 useEffect(() => {
  const fetchData = async () => {
    const { data, error } = await supabase.from('casinos').select('*');
    if (error) {
      console.error('❌ Supabase fetch error:', error.message);
    } else {
      console.log('✅ Casinos fetched:', data); // 👈 See if this fires
      alert(JSON.stringify(data, null, 2)); // 👈 Show data in browser
      setCasinos(data);
    }
  };
  fetchData();
}, []);
     }


  return (
    <div className="p-4 max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Top PayID Casinos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {casinos.map((casino) => (
          <div key={casino.id} className="bg-white rounded-2xl shadow-md p-4 text-center">
            <img src={casino.favicon_url} alt={casino.name} className="w-16 h-16 mx-auto mb-2 object-contain" />
            <h2 className="text-xl font-semibold text-gray-800">{casino.name}</h2>
            <p className="text-sm text-gray-600 mb-2">{casino.meta_description}</p>
            <a href={casino.referral_link} target="_blank" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">Visit Site</a>
          </div>
        ))}
      </div>
    </div>
  );
}
