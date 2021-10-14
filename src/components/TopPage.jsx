/**
 * トップページ。
 */
export const TopPage = () => {
  return (
    <>
      {/* コンテンツヘッダ */}
      <section className="content-header">
        {/* タイトル */}
        <h1 className="content-header__title">社員情報</h1>
        <hr />
      </section>

      {/* コンテンツボディ */}
      <section className="content-body">
        <div className="content-body__text--center">👋 Top page.</div>
      </section>
    </>
  )
}
