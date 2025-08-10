export const myBorrowPromise = (email,accessToken )=> {
    return fetch(`https://library-client-ccb7c.web.app/my-orders?email=${email}`,{
        headers:{
            authorization: `Bearer ${accessToken}`
        }
    })
    .then(res => res.json())
}