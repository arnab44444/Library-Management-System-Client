export const myBorrowPromise = (email,accessToken )=> {
    return fetch(`http://localhost:3000/my-orders?email=${email}`,{
        headers:{
            authorization: `Bearer ${accessToken}`
        }
    })
    .then(res => res.json())
}