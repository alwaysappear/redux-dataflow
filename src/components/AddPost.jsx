import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPost } from '../features/posts/postsSlice'

const AddPost = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const onSave = e => {
        e.preventDefault()
        if (title && content) {
            dispatch(addPost(title, content))
        }
        setTitle("")
        setContent("")
    }

    return (
        <section>
            <h2 className="header-2">add new post</h2>
            <form onSubmit={e => onSave(e)} className="addpost-form">
                <div>
                    <label htmlFor="postTitle">post title: </label>
                    <input type="text" id="postTitle" value={title}
                        onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="postContent">post content: </label>
                    <textarea type="text" id="postContent" value={content}
                        onChange={(e) => setContent(e.target.value)} />
                </div>
                <button className="submit-btn">save post</button>
            </form>
        </section>
    )
}

export default AddPost