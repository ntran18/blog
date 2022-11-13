import { useEffect, useState } from 'react'
import Articles from './Articles'
import ArticleEntry from './ArticleEntry'
import { SignIn, SignOut, useAuthentication } from '../services/authService'
import { fetchArticles, createArticle } from '../services/articleService'
import './App.css'

export default function App() {
  const [articles, setArticles] = useState([])
  const [writing, setWriting] = useState(false)
  // Anytime dirty is true, then it will trigger the fetch via the useEffect
  const [dirty, setDirty] = useState(true)
  const user = useAuthentication()

  // This is a trivial app, so just fetch all the articles only when
  // a user logs in. A real app would do pagination. Note that
  // "fetchArticles" is what gets the articles from the service and
  // then "setArticles" writes them into the React state.
  useEffect(() => {
    if (user) {
      fetchArticles()
        .then(setArticles)
        .then(() => {
          console.log('FETCHED')
          setDirty(false)
        })
    }
  }, [user, dirty])

  // Update the "database" *then* update the internal React state. These
  // two steps are definitely necessary.
  function addArticle({ title, body, author }) {
    createArticle({ title, body, author }).then(article => {
      setArticles([article, ...articles])
      setWriting(false)
    })
  }

  return (
    <div className="App">
      <header>
        <h4
          onClick={() => {
            setDirty(true)
            setWriting(false)
          }}
        >
          Blog
        </h4>
        {user && (
          <button onClick={() => setWriting(true)} className="create__button">
            New Article
          </button>
        )}
        {!user ? <SignIn /> : <SignOut />}
      </header>

      {!user ? (
        ''
      ) : writing ? (
        <ArticleEntry addArticle={addArticle} />
      ) : (
        <Articles articles={articles} setDirty={setDirty} />
      )}
    </div>
  )
}
