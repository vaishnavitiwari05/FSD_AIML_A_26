import { BrowserRouter, Routes,Route } from "react-router-dom"

import Counter from "./components/counter"
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/Counter" element={<Counter />} />
        <Route path="/mycart" element={<h1>My Cart Page</h1>} />
        <Route path="/myorders" element={<h1>My Orders Page</h1>} />
        <Route path="/settings" element={<h1>Settings Page</h1>} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
