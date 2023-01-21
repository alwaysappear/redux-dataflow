import PostAuthor from './PostAuthor'
import TimePosted from './TimePosted'
import { useSelector } from 'react-redux'
import { selectAllPosts } from '../features/posts/postsSlice'

const PostsList = () => {
    const posts = useSelector(selectAllPosts)

    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    const renderedPosts =
        orderedPosts.map(post => (
            <article key={post.id} className="post">
                <h3>{post.title}</h3>
                <p className="text-lg">{post.content.substring(0, 52)}</p>
                <p className="text-xs">
                    <PostAuthor userId={post.userId} />
                    <TimePosted timestamp={post.date} />
                </p>
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