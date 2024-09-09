(function() {
  function searchEncodedData(storage) {
    let dataToCopy = null;

    for (let i = 0; i < storage.length; i++) {
      const key = storage.key(i);
      const value = storage.getItem(key);

      if (value && (value.includes('query_id%3D') || value.includes('user%3D'))) {
        const queryRegex = /(query_id%3D[^&]+)/;
        const userRegex = /(user%3D[^&]+)/;
        
        const queryMatch = value.match(queryRegex);
        const userMatch = value.match(userRegex);
        
        if (queryMatch) {
          dataToCopy = queryMatch[1]; // Get value query_id
        } else if (userMatch) {
          dataToCopy = userMatch[1]; // Get value user if query_id not found
        }

        if (dataToCopy) break; 
      }
    }

    return dataToCopy;
  }

  // Try find data (query_id or user) at sessionStorage
  let dataToCopy = searchEncodedData(sessionStorage);

  if (dataToCopy) {
    console.log('Data ditemukan:', dataToCopy); 

    let input = document.createElement('input');
    input.value = dataToCopy;
    document.body.appendChild(input);
    input.select();
    
    try {
      document.execCommand('copy');
      console.log('Data berhasil disalin ke clipboard:');
    } catch (err) {
      console.warn('Gagal menyalin data ke clipboard. Salin secara manual dari console diatas');
    }

    
    document.body.removeChild(input);
  } else {
    console.log('Data query_id atau user tidak ditemukan di sessionStorage.');
  }
})();
