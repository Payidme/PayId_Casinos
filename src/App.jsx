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
