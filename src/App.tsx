import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { BrowsePage } from './pages/BrowsePage'
import { PartPage } from './pages/PartPage'
import { ArticlePage } from './pages/ArticlePage'
import { TimelinePage } from './pages/TimelinePage'
import { ReadingsPage } from './pages/ReadingsPage'
import { SessionsPage } from './pages/SessionsPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="browse" element={<BrowsePage />} />
          <Route path="part/:id" element={<PartPage />} />
          <Route path="a/:id" element={<ArticlePage />} />
          <Route path="timeline" element={<TimelinePage />} />
          <Route path="readings" element={<ReadingsPage />} />
          <Route path="sessions" element={<SessionsPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
