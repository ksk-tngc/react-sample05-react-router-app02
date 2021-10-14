import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

/**
 * 社員一覧ページ。
 */
export const EmployeeListPage = () => {
  const [employees, setEmployees] = useState([])
  const history = useHistory()

  // 社員データの初期データ設定
  useEffect(() => {
    setEmployees([
      { id: 1, name: 'Tom', deptId: 1, deptName: '営業' },
      { id: 2, name: 'Jane', deptId: 2, deptName: '開発' },
      { id: 3, name: 'Jack', deptId: 1, deptName: '営業' },
      { id: 4, name: 'Bob', deptId: 2, deptName: '開発' },
    ])
  }, [])

  /**
   * 編集ボタンのハンドラ。
   */
  const onClickEdit = ({ id, empName, deptId }) =>
    history.push('/employee-register', {
      type: 'EDIT',
      title: '社員編集',
      id,
      empName,
      deptId,
    })

  return (
    <>
      {/* コンテンツヘッダ */}
      <section className="content-header">
        {/* タイトル */}
        <h1 className="content-header__title">社員一覧</h1>
        <hr />
      </section>

      {/* コンテンツボディ */}
      <section className="content-body">
        {/* テーブル */}
        <table className="content-table">
          {/* テーブル：ヘッダ */}
          <thead>
            <tr>
              <th>#</th>
              <th>名前</th>
              <th>部署名</th>
              <th></th>
            </tr>
          </thead>
          {/* テーブル：ボディー */}
          <tbody>
            {employees.map((employee, index) => (
              <tr key={index}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.deptName}</td>
                <td className="content-table__btn-cell">
                  <button
                    className="content-table__btn"
                    onClick={() =>
                      onClickEdit({
                        id: employee.id,
                        empName: employee.name,
                        deptId: employee.deptId,
                      })
                    }
                  >
                    編集
                  </button>
                  <button className="content-table__btn">削除</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  )
}
