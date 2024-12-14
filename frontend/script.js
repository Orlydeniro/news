 async function fetchTrends() {
  const response = await fetch('/api/trends');
  const data = await response.json();

  console.log(data)

  // Render Data on Frontend
 }

  fetchTrends();
