import { deleteArticle } from "../services/articleService"
export default function Article({ articles }) {
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
    <div className="displayArticle">
      {articles.map((article) => {
        console.log(article)
        console.log(article.id)
        return (
          <div className = "article">
            <div className = "title">
              <h1>{article.title}</h1>
              <div className="deletePost">
                <button
                  onClick={() => {
                    deleteArticle(article.id);
                  }}
                >
                  {" "}
                  &#128465;
                </button>
              </div>
            </div>
            <div className="date">{`Posted: ${article.date}`}</div>
            <div className="body">{article.body}</div>
          </div>
        )
      })}

    </div>
  );
}
