// import logo from './logo.svg';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {

  // const router = createBrowserRouter([

  //   {
  //     path: "/",
  //     element: <LandingPage />
  //   },
  //   {
  //     path: "/login",
  //     element: <Login />
  //   },
  //   {
  //     path: "/register",
  //     element: <Register />
  //   }

  // ])

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<LandingPage />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/register"
            element={<Register />}
          />
        </Routes>

      </Router>
    </div>
  );
}

export default App;

// // import logo from './logo.svg';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import './App.css';
// import Header from './components/Header/Header';
// import LandingPage from './pages/LandingPage';
// import Login from './pages/Login';
// import Register from './pages/Register';

// function App() {

//   const router = createBrowserRouter([

//     {
//       path: "/",
//       element: <LandingPage />
//     },
//     {
//       path: "/login",
//       element: <Login />
//     },
//     {
//       path: "/register",
//       element: <Register />
//     }

//   ])

//   return (
//     <div className="App">
//       <Header/>
//       <RouterProvider router={router} />
//     </div>
//   );
// }

// export default App;

