import { Route, Switch } from 'react-router-dom'
import { EmployeeListPage } from './EmployeeListPage'
import { EmployeeSavePage } from './EmployeeSavePage'
import { NotFoundPage } from './NotFoundPage'
import { TopPage } from './TopPage'

/**
 * コンテンツエリア。
 */
export const Content = () => {
  return (
    <main className="content">
      <Switch>
        <Route exact path="/">
          <TopPage />
        </Route>
        <Route path="/employee-list">
          <EmployeeListPage />
        </Route>
        <Route path="/employee-register">
          <EmployeeSavePage />
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </main>
  )
}
