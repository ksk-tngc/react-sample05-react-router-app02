import { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router'

/**
 * 社員登録・編集ページ。
 */
export const EmployeeSavePage = () => {
  const [title, setTitle] = useState('')
  const [empName, setEmpName] = useState('')
  const [deptValue, setDeptValue] = useState('1')

  const history = useHistory()

  // 遷移元から情報を受取る
  const location = useLocation()
  const locationType = location.state.type

  // このページに新たに遷移してきた時、遷移元からの情報を画面に反映する
  useEffect(() => {
    // 遷移元から渡された情報
    const {
      state: { title = '未設定', empName = '', deptId = '1' },
    } = location

    setTitle(title)
    setEmpName(empName)
    setDeptValue(deptId)
  }, [location])

  /**
   * 名前のonChangeハンドラ。
   */
  const onChangeEmpName = (e) => setEmpName(e.target.value)

  /**
   * 部署名のonChangeハンドラ。
   */
  const onChangeDeptValue = (e) => setDeptValue(e.target.value)

  /**
   * キャンセルボタンのハンドラ。
   */
  const onClickCancel = () => history.goBack()

  return (
    <>
      {/* コンテンツヘッダ */}
      <section className="content-header">
        {/* タイトル */}
        <h1 className="content-header__title">{title}</h1>
        <hr />
      </section>

      {/* コンテンツボディ */}
      <section className="content-body">
        {/* フォームエリア */}
        <div className="content-form">
          <div className="content-form__input-group">
            <label htmlFor="name" className="content-form__label">
              名前
            </label>
            <input
              id="name"
              className="content-form__input"
              value={empName}
              onChange={onChangeEmpName}
            />
          </div>
          <div className="content-form__input-group">
            <label htmlFor="deptName" className="content-form__label">
              部署名
            </label>
            <select
              id="deptName"
              className="content-form__input"
              value={deptValue}
              onChange={onChangeDeptValue}
            >
              <option className="content-form__select-option" value="1">
                営業
              </option>
              <option className="content-form__select-option" value="2">
                開発
              </option>
            </select>
          </div>
          <div className="content-form__btn-group">
            <button className="content-form__btn">保存</button>
            {/* 社員一覧の「編集」ボタンから遷移した場合、キャンセルボタンを追加 */}
            {locationType === 'EDIT' && (
              <button className="content-form__btn" onClick={onClickCancel}>
                キャンセル
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
