import axios from "axios"

export default async(user_id)=>{
    try {
        const user= await axios(`https://jsonplaceholder.typicode.com/users/${user_id}`)
        const posts= await axios(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`)

        return {user, posts}

    } catch (error) {
        return error
    }

}