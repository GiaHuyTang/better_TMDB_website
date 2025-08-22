const express = require('express');
const axios = require('axios');
require('dotenv').config();
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

// TMDB headers setup
const TMDB_HEADERS = {
  Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
  accept: 'application/json'
};

// Search movies by query
app.get('/api/search', async (req, res) => {
  const query = req.query.q;

  if (!query) {
    return res.status(400).json({ error: 'Missing query parameter' });
  }

  try {
    const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
      params: { query },
      headers: TMDB_HEADERS
    });

    res.json(response.data);
  } catch (err) {
    console.error('TMDB search error:', err.response?.data || err.message);
    res.status(500).json({ error: 'Failed to fetch from TMDB' });
  }
});

// Discover popular movies
app.get('/api/discover', async (req, res) => {
  try {
    const response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
      params: { sort_by: 'popularity.desc' },
      headers: TMDB_HEADERS
    });

    res.json(response.data);
  } catch (err) {
    console.error('TMDB discover error:', err.response?.data || err.message);
    res.status(500).json({ error: 'Failed to fetch trending movies' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
