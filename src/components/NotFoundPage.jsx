/**
 * 404ページ。
 */
export const NotFoundPage = () => {
  return (
    <>
      {/* コンテンツヘッダ */}
      <section className="content-header">
        {/* タイトル */}
        <h1 className="content-header__title">404 : Not Found</h1>
        <hr />
      </section>

      {/* コンテンツボディ */}
      <section className="content-body">
        <div className="content-body__text--center">
          😔 ページが見つかりません...
        </div>
      </section>
    </>
  )
}
