// import logo from './logo.svg';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import AddFish from './pages/AddFish';
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
            element={<Home />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/register"
            element={<Register />}
          />
          <Route
            path="/addfish"
            element={<AddFish />}
          />
          <Route
            path="/fish"
            element={<LandingPage />}
          />
        </Routes>
        <Footer />
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

