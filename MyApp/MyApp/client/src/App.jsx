import { BrowserRouter, Routes, Route } from "react-router-dom";
import Stopwatch from "./components/stopwatch";
import Counter from "./components/counter";
import Login from "./components/login";
import Admin from "./components/admin";
import User from "./components/user";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/stopwatch" element={<Stopwatch />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/user" element={<User />} />
          <Route path="/mycart" element={<h1>My Cart Page</h1>} />
          <Route path="/myorders" element={<h1>My Orders Page</h1>} />
          <Route path="/settings" element={<h1>Settings Page</h1>} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
