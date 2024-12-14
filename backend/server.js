 const express = require('express');
 const app = express();
 const port = 3000;

 app.get('/api/trends', (req, res) => {
     const mockTrends = {
         categories: [
             {name: "news", topics: ["president visit", "new law", "inflation"]},
             {name: "sports", topics: ["football match", "basketball match", "swimming match"]},
             {name: "politics", topics: ["election discussions", "government decisions", "local policy"]},
         ],
     };
     res.json(mockTrends);
 });

 app.listen(port, () => {
     console.log(`Server running on port ${port}`);
 });
