import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";

// Importing all components used in different routes/pages
import Login from "./components/account/Login";
import DataProvider from "./context/DataProvider"; // Context for managing global state (like user info)
import Header from "./components/header/Header"; // Top navigation bar
import Homes from "./components/home/Homes"; // Homepage showing posts
import CreatePosts from "./components/create/CreatePosts"; // Create new post
import DetailView from "./components/details/DetailView"; // View post details
import Update from "./components/create/Update"; // Update existing post
import About from "./components/about/About"; // About page
import Contact from "./components/contact/Contact"; // Contact page
import Errors from "./components/error/Errors"; // 404 or wrong route page

// ========== PrivateRoute Component ========== //
// This component protects routes from unauthenticated access.
// It checks if the user is logged in using state + token.
const PrivateRoute = ({ isUserAuthenticated, ...props }) => {
  const token = sessionStorage.getItem("accessToken"); // token is stored during login

  return isUserAuthenticated && token ? (
    <>
      <Header /> {/* If authenticated, show the Header and requested route */}
      <Outlet /> {/* Outlet loads the nested route inside <Route> */}
    </>
  ) : (
    <Navigate replace to="/login" /> // If not logged in, redirect to login
  );
};

function App() {
  // ========== App Level Authentication State ========== //
  const [isUserAuthenticated, setUserAuthenticated] = useState(false);

  return (
    <DataProvider>
      {" "}
      {/* Provides global data context across app */}
      <BrowserRouter>
        {" "}
        {/* Wraps all routes */}
        <div className="mt-16">
          {" "}
          {/* Adds top margin below fixed header */}
          <Routes>
            {/* Public Route: Login Page */}
            <Route
              path="/login"
              element={<Login setUserAuthenticated={setUserAuthenticated} />}
            />

            {/* Protected Route: Homepage */}
            <Route
              path="/"
              element={
                <PrivateRoute isUserAuthenticated={isUserAuthenticated} />
              }
            >
              <Route path="/" element={<Homes />} />
            </Route>

            {/* Protected Route: Create Post */}
            <Route
              path="/create"
              element={
                <PrivateRoute isUserAuthenticated={isUserAuthenticated} />
              }
            >
              <Route path="/create" element={<CreatePosts />} />
            </Route>

            {/* Protected Route: Post Details */}
            <Route
              path="/details/:id"
              element={
                <PrivateRoute isUserAuthenticated={isUserAuthenticated} />
              }
            >
              <Route path="/details/:id" element={<DetailView />} />
            </Route>

            {/* Protected Route: Update Post */}
            <Route
              path="/update/:id"
              element={
                <PrivateRoute isUserAuthenticated={isUserAuthenticated} />
              }
            >
              <Route path="/update/:id" element={<Update />} />
            </Route>

            {/* Protected Route: About Page */}
            <Route
              path="/about"
              element={
                <PrivateRoute isUserAuthenticated={isUserAuthenticated} />
              }
            >
              <Route path="/about" element={<About />} />
            </Route>

            {/* Protected Route: Contact Page */}
            <Route
              path="/contact"
              element={
                <PrivateRoute isUserAuthenticated={isUserAuthenticated} />
              }
            >
              <Route path="/contact" element={<Contact />} />
            </Route>

            {/* Catch-All Route: 404 Page */}
            <Route path="/*" element={<Errors />} />
          </Routes>
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;

// PrivateRoute: Guards all protected pages. If the user isn't authenticated, it redirects to /login.

// Outlet: React Router v6 feature used inside PrivateRoute to render nested components.

// DataProvider: Wraps the whole app to share user data (like username) across components.

// sessionStorage: Used to store access token temporarily while the session is alive.

// setUserAuthenticated: Passed to <Login /> so it can update the login state when user logs in successfully.
