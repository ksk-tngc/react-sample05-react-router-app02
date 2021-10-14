import { Link } from 'react-router-dom'

/**
 * サイドバー。
 */
export const Sidebar = () => {
  return (
    <nav className="sidebar">
      <h1 className="sidebar__title">
        <Link to="/">💁‍♂️ 社員情報</Link>
      </h1>
      <hr />
      <ul className="sidebar__menu">
        <li className="sidebar__menu-item">
          <Link to="/employee-list">📃 社員一覧</Link>
        </li>
        <li className="sidebar__menu-item">
          <Link
            to={{
              pathname: '/employee-register',
              state: { type: 'REGISTER', title: '社員登録' }, // 遷移先に渡す情報
            }}
          >
            ✍️ 社員登録
          </Link>
        </li>
      </ul>
      <hr />
    </nav>
  )
}
