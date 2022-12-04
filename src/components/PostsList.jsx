import { useSelector } from 'react-redux'
import { selectAllPosts } from '../features/posts/postsSlice'

const PostsList = () => {
    const posts = useSelector(selectAllPosts)

    const renderedPosts =
        posts.map(post => (
            <article key={post.id} className="post">
                <h3>{post.title}</h3>
                <p>{post.content.substring(0, 100)}</p>
            </article>
        ))

    return (
        <section>
            <h2 className="header-2">posts</h2>
            <div className="post-container">
                {renderedPosts}
            </div>
        </section>
    )
}

export default PostsList