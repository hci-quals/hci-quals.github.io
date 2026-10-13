import { BrowserRouter, Navigate, Route, Routes, useParams } from 'react-router-dom'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { EncyclopediaPage } from './pages/EncyclopediaPage'
import { ArticlePage } from './pages/ArticlePage'
import { SyllabusPage } from './pages/SyllabusPage'

function LegacyArticle() {
  const { id } = useParams()
  return <Navigate to={`/encyclopedia/${id}`} replace />
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="encyclopedia" element={<EncyclopediaPage />} />
          <Route path="encyclopedia/:id" element={<ArticlePage />} />
          <Route path="syllabus" element={<SyllabusPage />} />
          <Route path="a/:id" element={<LegacyArticle />} />
          <Route path="timeline" element={<Navigate to="/encyclopedia?view=timeline" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
