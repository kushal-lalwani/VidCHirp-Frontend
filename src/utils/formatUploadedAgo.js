export const formatUploadedAgo = (createdAt) => {
    const timeNow = new Date().getTime()
    const uploadTime = new Date(createdAt).getTime()

    const timeDifference = timeNow - uploadTime

    let interval = Math.floor(timeDifference / 1000 / 60 / 60 / 24 / 365)
    if (interval >= 1) {
        return interval == 1 ? `${interval} year ago` : `${interval} years ago`
    }

    interval = Math.floor(timeDifference / 1000 / 60 / 60 / 24 / 30)
    if (interval >= 1) {
        return interval == 1 ? `${interval} month ago` : `${interval} months ago`
    }
    interval = Math.floor(timeDifference / 1000 / 60 / 60 / 24 / 7)
    if (interval >= 1) {
        return interval == 1 ? `${interval} week ago` : `${interval} weeks ago`
    }
    interval = Math.floor(timeDifference / 1000 / 60 / 60 / 24)
    if (interval >= 1) {
        return interval == 1 ? `${interval} day ago` : `${interval} days ago`
    }
    interval = Math.floor(timeDifference / 1000 / 60 / 60)
    if (interval >= 1) {
        return interval == 1 ? `${interval} hour ago` : `${interval} hours ago`
    }
    interval = Math.floor(timeDifference / 1000 / 60)
    if (interval >= 1) {
        return interval == 1 ? `${interval} minute ago` : `${interval} minutes ago`
    }

    return `${interval} seconds ago`
}