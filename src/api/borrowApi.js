export const myBorrowPromise = (email,accessToken )=> {
    return fetch(`https://library-server-self-theta.vercel.app/my-orders?email=${email}`,{
        headers:{
            authorization: `Bearer ${accessToken}`
        }
    })
    .then(res => res.json())
}