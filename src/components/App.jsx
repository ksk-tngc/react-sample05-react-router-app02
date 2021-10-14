import { BrowserRouter } from 'react-router-dom'
import '../scss/App.scss'
import { Content } from './Content'
import { Sidebar } from './Sidebar'

/**
 * ルートコンポーネント。
 */
export const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Sidebar />
          <Content />
        </div>
      </BrowserRouter>
    </>
  )
}
