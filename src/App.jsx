import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { Provider, useSelector } from "react-redux";
import appStore from "./store/appStore.js";

import Navbar from "./components/Navbar.jsx";
import LoginPage from "./pages/Loginpage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import FeedPage from "./pages/FeedPage.jsx";
import RequestsPage from "./pages/RequestsPage.jsx";
import ConnectionsPage from "./pages/ConnectionsPage.jsx";
import ChatPage from "./pages/ChatPage.jsx";

function ProtectedRoute({ children }) {
  const user = useSelector((state) => state.user.user);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <Navbar />

        <Routes>
          {/* Public Route */}
          <Route path="/login" element={<LoginPage />} />

          {/* Protected Routes */}
          <Route 
            path="/feed" 
            element={
              <ProtectedRoute>
                <FeedPage />
              </ProtectedRoute>
            } 
          />

          <Route 
            path="/profile" 
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            } 
          />

          <Route 
            path="/requests" 
            element={
              <ProtectedRoute>
                <RequestsPage />
              </ProtectedRoute>
            } 
          />

          <Route 
            path="/connections" 
            element={
              <ProtectedRoute>
                <ConnectionsPage />
              </ProtectedRoute>
            } 
          />

          <Route 
            path="/chat/:id" 
            element={
              <ProtectedRoute>
                <ChatPage />
              </ProtectedRoute>
            } 
          />

          {/* Redirect unknown paths */}
          <Route path="*" element={<Navigate to="/feed" replace />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
