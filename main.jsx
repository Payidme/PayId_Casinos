import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import ReactDOM from "react-dom/client";

const supabase = createClient(
  "https://dtmjtmpziidzfuwdcngo.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR0bWp0bXB6aWlkemZ1d2RjbmdvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0Mzc1Mzk1OCwiZXhwIjoyMDU5MzI5OTU4fQ.wTJPC-ZVg0Xjlq3-V3aY8KV04OUJgR3NG8GbKtIu9ws"
);

function App() {
  const [casinos, setCasinos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
        .from("casinos")
        .select("*")
        .order("whois_date", { ascending: false });
      if (!error) setCasinos(data);
    }
    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Featured Casinos</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {casinos
          .filter((c) => c.featured)
          .map((casino) => (
            <div className="border p-4 rounded shadow" key={casino.domain}>
              <img src={casino.favicon_url} alt={casino.domain} className="w-10 h-10 mb-2" />
              <h2 className="font-semibold">{casino.domain}</h2>
              <p className="text-sm">{casino.meta_description}</p>
              <a
                href={`/redirect.js?url=${encodeURIComponent(casino.referral_link)}`}
                className="text-blue-500 mt-2 inline-block"
              >
                Visit
              </a>
            </div>
          ))}
      </div>

      <h1 className="text-2xl font-bold my-4">All Casinos</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {casinos
          .filter((c) => !c.featured)
          .map((casino) => (
            <div className="border p-4 rounded shadow" key={casino.domain}>
              <img src={casino.favicon_url} alt={casino.domain} className="w-10 h-10 mb-2" />
              <h2 className="font-semibold">{casino.domain}</h2>
              <p className="text-sm">{casino.meta_description}</p>
              <a
                href={`/redirect.js?url=${encodeURIComponent(casino.referral_link)}`}
                className="text-blue-500 mt-2 inline-block"
              >
                Visit
              </a>
            </div>
          ))}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
