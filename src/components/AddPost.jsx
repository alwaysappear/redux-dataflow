import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPost } from '../features/posts/postsSlice'
import { selectAllUsers } from '../features/users/usersSlice'

const AddPost = () => {
    const dispatch = useDispatch()
    const users = useSelector(selectAllUsers)

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [userId, setUserId] = useState("")

    const onSave = () => {
        if (valid) dispatch(addPost(title, content, userId))

        setTitle("")
        setContent("")
        setUserId("")
    }

    const usersOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))

    const valid = Boolean(title) && Boolean(content) && Boolean(userId)

    return (
        <section>
            <h2 className="header-2">add new post</h2>
            <form className="addpost-form">
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
                <div>
                    <label htmlFor="authtor">author: </label>
                    <select value={userId} id="authtor"
                        onChange={(e) => setUserId(e.target.value)}>
                        <option>Select author</option>
                        {usersOptions}
                    </select>
                </div>
                <button className="submit-btn disabled:opacity-[50%]"
                    disabled={!valid} onClick={() => onSave()}>
                    save post
                </button>
            </form>
        </section>
    )
}

export default AddPost