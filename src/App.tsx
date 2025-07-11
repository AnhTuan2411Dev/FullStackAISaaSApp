
import './App.css'
import { Routes, Route } from 'react-router-dom'

// Import all pages
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import BlogTitles from './pages/BlogTitles'
import WriteActicle from './pages/WriteActicle'
import Layout from './pages/Layout'
import RemoveObject from './pages/RemoveObject'
import GenerateImages from './pages/GenerateImages'
import RemoveBackground from './pages/RemoveBackground'
import ReviewResume from './pages/ReviewResume'
import Community from './pages/Community'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ai" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="blog-titles" element={<BlogTitles />} />
        <Route path="write-article" element={<WriteActicle />} />
        <Route path="remove-object" element={<RemoveObject />} />
        <Route path="generate-images" element={<GenerateImages />} />
        <Route path="remove-background" element={<RemoveBackground />} />
        <Route path="review-resume" element={<ReviewResume />} />
        <Route path="community" element={<Community />} />
      </Route>
    </Routes>
  )
}

export default App
