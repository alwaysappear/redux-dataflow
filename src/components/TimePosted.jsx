import { parseISO, formatDistanceToNow } from 'date-fns'

const TimePosted = ({ timestamp }) => {
    let timePassed = ''
    if (timestamp) {
        const date = parseISO(timestamp)
        const timePeriod = formatDistanceToNow(date)
        timePassed = `${timePeriod} ago`
    }

    return (
        <span title={timePassed}>
            &nbsp; <i>{timePassed}</i>
        </span>
    )
}

export default TimePosted