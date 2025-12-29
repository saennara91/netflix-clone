# 🎬 Netflix Clone (React + Firebase)

A Netflix-inspired web application built with **React**, **Firebase Authentication**, and **TMDB API**.  

This project demonstrates a complete authentication flow, protected routes, and dynamic movie data fetching in a real-world application.

---

## ✨ Features

- 🔐 Firebase Authentication (Email / Password)
- 🔒 Protected Routes (Only logged-in users can access content)
- ⏳ Loading Spinner while checking auth state
- 🎬 Netflix-style redirect flow
- 📺 Movie data from TMDB API
- ▶️ Trailer playback using YouTube embed
- 🚪 Login / Sign Up / Logout
- 📱 Fully responsive UI

---

## 🛠 Tech Stack

- **Frontend**: React + Vite
- **Routing**: React Router DOM
- **Authentication**: Firebase Auth
- **Database**: Firestore
- **API**: The Movie Database (TMDB)
- **Styling**: CSS
- **Notifications**: React Toastify

---

## 📁 Project Structure

src/
├── assets/ # Images & icons
├── components/
│ ├── Cards/
| │ └── Cards.css
| │ └── Cards.jsx
│ ├── Footer/
| │ └── Footer.css
| │ └── Footer.jsx
│ ├── Navbar/
| │ └── Navbar.css
| │ └── Navbar.jsx
│ ├── ProtectedRoute.jsx
│ ├── AuthLoading.jsx
├── context/
│ └── AuthContext.jsx
├── pages/
│ ├── Home/
|    └── Home.jsx
|    └── Home.css
│ ├── Login/
|    └── Login.css
|    └── Login.jsx
│ ├── Player/
|    └── Player.css
|    └── Player.jsx
├── App.jsx
├── firebase.js
├── index.css
├── main.jsx

## 🧪 Known Behaviors

- Authentication state persists on page refresh

- Direct access to protected routes redirects correctly based on auth status

- Invalid credentials trigger an error notification

## 🙏 Credits

Movie data provided by TMDB

UI inspired by Netflix

Learning & resources from the GreatStack YouTube channel

## 📄 License

This project is for educational and portfolio purposes only.
Netflix name and branding are used for demonstration only.