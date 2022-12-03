import { useState } from 'react'

const AddPost = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const onTitleChange = e => setTitle(e.target.value)
    const onContentChange = e => setContent(e.target.value)

    return (
        <section>
            <h2>Add New Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title: </label>
                <input type="text" id="postTitle" value={title}
                    onChange={(e) => onTitleChange(e)} />
                <label htmlFor="postContent">Post Title: </label>
                <textarea type="text" id="postContent" value={content}
                    onChange={(e) => onContentChange(e)} />
            </form>
            <button className="" type="submit">save post</button>
        </section>
    )
}

export default AddPost