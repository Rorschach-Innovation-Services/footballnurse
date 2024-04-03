import { Home } from './home/home'
import { ContactUs } from './contact-us/contact-us'
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </>
  )
}

export default App
