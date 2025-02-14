import { useState } from 'react'
import { auth } from '../firebaseConfig'

export default function ArticleEntry({ addArticle }) {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [error, setError] = useState(null)

  function submit(e) {
    setError(null)
    e.preventDefault()
    if (!title.trim() || !body.trim()) {
      setError('Both the title and body must be supplied')
    } else {
      const author = {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      }
      addArticle({ title, body, author })
    }
  }

  return (
    <div className="article__entry">
      <form onSubmit={submit} className="flex">
        {error && <p className="error">{error}</p>}
        <h2>Create An Article</h2>
        <div className="title__body flex">
          <div className="article__inputs-title-container flex">
            <label>Title:</label>
            <input value={title} onChange={e => setTitle(e.target.value)} />
          </div>
          <div className="article__inputs-body-container">
            <label>Body:</label>
            <textarea rows="16" value={body} onChange={e => setBody(e.target.value)}></textarea>
          </div>
        </div>
        <button type="submit" className="create">
          Create
        </button>
      </form>
    </div>
  )
}
