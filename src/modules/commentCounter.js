export const commmentCounter = async () =>  {
    const comments = document.querySelectorAll('.user-comment')
    console.log(comments.length)
    return comments.length
}