import { useDispatch } from "react-redux"
import { BiShocked } from 'react-icons/bi'
import { FaThumbsUp, FaRocket, FaCoffee, FaHeart } from 'react-icons/fa'

const reactionEmoji = {
    wow: BiShocked,
    heart: FaHeart,
    letgo: FaRocket,
    coffe: FaCoffee,
    thumbsUp: FaThumbsUp,
}


const ReactionButtons = () => {
    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button>

            </button>
        )
    })
    return (
        <article>

        </article>
    )

}

export default ReactionButtons