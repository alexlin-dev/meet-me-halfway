const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Basic route to test if server is working
app.get('/', (req, res) => {
  res.send('Meet Me Halfway Backend API');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
