import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Slide1 from './slides/Slide1'
import Slide2 from './slides/Slide2'
import Slide3 from './slides/Slide3'
import Slide4 from './slides/Slide4'
import Slide5 from './slides/Slide5'
import Slide6 from './slides/Slide6'
import Slide7 from './slides/Slide7'
import Slide8 from './slides/Slide8'
import Slide9 from './slides/Slide9'
import Slide10 from './slides/Slide10'
import Slide11 from './slides/Slide11'
import Slide12 from './slides/Slide12'
import Slide13 from './slides/Slide13'
import Slide14 from './slides/Slide14'
import Slide15 from './slides/Slide15'
import Slide16 from './slides/Slide16'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/slide/1" replace />} />
      <Route path="/slide/1" element={<Layout><Slide1 /></Layout>} />
      <Route path="/slide/2" element={<Layout><Slide2 /></Layout>} />
      <Route path="/slide/3" element={<Layout><Slide3 /></Layout>} />
      <Route path="/slide/4" element={<Layout><Slide4 /></Layout>} />
      <Route path="/slide/5" element={<Layout><Slide5 /></Layout>} />
      <Route path="/slide/6" element={<Layout><Slide6 /></Layout>} />
      <Route path="/slide/7" element={<Layout><Slide7 /></Layout>} />
      <Route path="/slide/8" element={<Layout><Slide8 /></Layout>} />
      <Route path="/slide/9" element={<Layout><Slide9 /></Layout>} />
      <Route path="/slide/10" element={<Layout><Slide10 /></Layout>} />
      <Route path="/slide/11" element={<Layout><Slide11 /></Layout>} />
      <Route path="/slide/12" element={<Layout><Slide12 /></Layout>} />
      <Route path="/slide/13" element={<Layout><Slide13 /></Layout>} />
      <Route path="/slide/14" element={<Layout><Slide14 /></Layout>} />
      <Route path="/slide/15" element={<Layout><Slide15 /></Layout>} />
      <Route path="/slide/16" element={<Layout><Slide16 /></Layout>} />
    </Routes>
  )
}

export default App