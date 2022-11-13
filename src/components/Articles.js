import { DateTime } from 'luxon'
import { auth } from '../firebaseConfig'
import { deleteArticle } from '../services/articleService'

export default function Articles({ articles, setDirty }) {
  return (
    <div className="articles__container">
      {articles.map(article => {
        const seconds = article.date.seconds
        const dateString = DateTime.fromSeconds(seconds).toLocaleString(DateTime.DATETIME_MED)
        console.log('ARTICLES > article.author', article.author)
        console.log('ARTICLES > auth.currentUser.uid', auth.currentUser.uid)
        return (
          <div className="article__container">
            <div className="article__header">
              <h1 className="article__title">{article.title}</h1>
              <div className="article__delete-icon">
                {article.author.id === auth.currentUser.uid && (
                  <button
                    onClick={() => {
                      deleteArticle(article.id)
                      // After we delete the article, the "view" is now "dirty" and needs to be refreshed
                      // Setting dirty to true, will trigger the useEffect in the parent "App"
                      setDirty(true)
                    }}
                  >
                    &#128465;
                  </button>
                )}
              </div>
            </div>
            <div className="article__date">{`Posted: ${dateString}`}</div>
            <div className="article__body">{article.body}</div>
            <div className="article__author">@{article.author.name}</div>
          </div>
        )
      })}
    </div>
  )
}
