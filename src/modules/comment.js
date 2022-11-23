const commnentAPI = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${process.env.APP_ID}/comments`

export const fetchComment = async (id) => {
    try {
        const res = await fetch(`${commnentAPI}?item_id=${id}`)
        const data = await res.json()

        if(!res.ok) {
            console.log([])
            return []
        }
        console.log(data)
        return data
    } catch (error) {
        return error
    }
}

`

  return commentDiv
}

// export const addComment = async (id) => {

//     const newComment = {
//         "item_id": id,
//         "username": "ada",
//         "comment": "Hello"
//     }
//     try {
//         const res = await fetch(`${commnentAPI}`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//               },
//               body: JSON.stringify(newComment),
//         })
//         console.log(res)
//         const data = await res.json()
//         console.log(data)
//     } catch (error) {
//         return error
//     }
// }