import { deleteArticle } from "../services/articleService";
export default function Articles({ articles }) {
  return (
    // <article>
    //   {articles.length === 0 ? (
    //     // <p>No article selected</p>
    //     <p>There is no post yet</p>
    //   ) : (
    //     // <section>
    //     //   <h2>{article.title}</h2>
    //     //   <p className="date">{`Posted: ${article.date}`}</p>
    //     //   <p className="body">{article.body}</p>
    //     // </section>
    //     <div className="displayArticle">
    //       {articles.map((article) => {
    //         return (
    //           <div className = "article">
    //             <div className = "title">
    //               <h1>{article.title}</h1>
    //             </div>
    //             <div className="date">{`Posted: ${a  rticle.date}`}</div>
    //             <div className="body">{article.body}</div>
    //           </div>
    //         )
    //       })}

    //     </div>
    //   )}
    // </article>
    <div className="articles__container">
      {articles.map((article) => {
        console.log(article);
        console.log(article.id);
        return (
          <div className="article__container">
            <div className="article__header">
              <h1 className="article__title">{article.title}</h1>
              <div className="article__delete-icon">
                <button
                  onClick={() => {
                    deleteArticle(article.id);
                  }}
                >
                  &#128465;
                </button>
              </div>
            </div>
            <div className="article__date">{`Posted: ${article.date}`}</div>
            <div className="article__body">{article.body}</div>
          </div>
        );
      })}
    </div>
  );
}
