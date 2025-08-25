# Better TMDB Website 🎬

A modern and minimal movie discovery app built with **React** and **Vite**, powered by The Movie Database (TMDB) API. Search for movies, explore trending titles, and enjoy a fast, responsive user experience.

---

## 🚀 Features

- 🔍 Search movies by keyword  
- 📈 View trending and popular titles  
- 🎨 Clean and responsive UI  
- ⚡️ Fast performance with Vite and HMR  
- 🔒 Secure API calls via Node.js backend  
- 🧠 Built with React hooks and functional components  

---

## 🛠️ Tech Stack

- **Frontend**: React + Vite  
- **Backend**: Node.js + Express  
- **Styling**: CSS Modules / Custom styles  
- **API**: [TMDB API](https://developer.themoviedb.org/docs)  
- **Tooling**: ESLint, Babel or SWC (via Vite plugins)

---

## 📸 Preview

Here's a quick look at the Better TMDB Website in action:  
<img width="1259" height="1966" alt="image" src="https://github.com/user-attachments/assets/e94d42be-b0c6-430c-91cf-cc68e4343eb5" />

---

## 📦 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/GiaHuyTang/better_TMDB_website.git
cd better_TMDB_website
```
### ⚙️ Frontend Setup
#### 2. Install dependencies
```bash
npm install
```

#### 3. Add your TMDB API key
Create a .env file in the root directory and add:
```env.local
VITE_TMDB_API_KEY=your_api_key_here
```
You can get an API key from TMDB's developer portal.

#### 4. Run the development server
```bash
npm run dev
```

### 🔐 Backend Setup (Node.js)
To improve security and hide your TMDB API key from the frontend, this project includes a lightweight Node.js + Express backend that acts as a proxy between the frontend and TMDB.

#### 1. Navigate to the backend folder and install backend dependencies
```bash
cd backend
npm install
```

#### 2. Add your TMDB Bearer Token
Create a .env file inside the backend/ folder:
```env
TMDB_API_KEY=your_tmdb_bearer_token_here
```
You can get a v4 Bearer Token from TMDB's API settings.

#### 3. Run the backend server
```bash
node index.js
```
The backend will start on http://localhost:5000.

## 🔁 API Endpoints
These endpoints are used by the frontend to fetch movie data securely:

    - Search movies 
        GET http://localhost:5000/api/search?q=your_query
    - Discover trending movies 
        GET http://localhost:5000/api/discover

## 📁 Project Structure
``` 
better_TMDB_website/
├── backend/           # Node.js backend for secure API calls
│   ├── index.js       # Express server
│   ├── .env           # TMDB Bearer Token
│   └── package.json
├── src/               # React frontend
│   ├── components/    # Reusable UI components
│   ├── pages/         # Main page views
│   ├── assets/        # Images and static files
│   ├── App.jsx        # Root component
│   └── main.jsx       # Entry point
└── README.md
```
## 🔌 Appwrite Setup (Optional)

If you'd like to enable search tracking and trending movie suggestions using [Appwrite](https://appwrite.io/), follow these steps:

### 🧱 Backend Setup

1. Create a project on [Appwrite Cloud](https://cloud.appwrite.io/)
2. Create a **Database** (e.g. `tmdbSearch`)
3. Inside the database, create a **Collection** (e.g. `searches`) with the following attributes:

| Attribute Name | Type     | Required | Description                        |
|----------------|----------|----------|------------------------------------|
| `searchTerm`   | String   | ✅        | The keyword the user searched      |
| `count`        | Integer  | ✅        | Number of times the term was used |
| `poster_url`   | String   | ❌        | Poster image URL from TMDB         |
| `movie_id`     | String   | ❌        | TMDB movie ID                      |

### ⚙️ Frontend Integration

#### 1. Install Appwrite SDK:

```bash
npm install appwrite
```
#### 2. Add the following to your .env file:

```env
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id
```

Appwrite client is initialized in src/appwrite.js 
Search tracking logic is handled in src/utils/searchTracker.js 
You don't need to modify these files unless you're customizing endpoints or logic.

This integration allows the app to track user search terms and recommend movies that are trending based on search frequency. Perfect for adding a smart, data-driven layer to your movie discovery experience.

## 📄 License
This project is licensed under the MIT License.

