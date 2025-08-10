import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const axiosInstance = axios.create({
    baseURL : 'https://library-client-ccb7c.web.app', // Replace with your API base URL
    withCredentials: true,
})

const useAxiosSecure = () => {

    const {user , signOutUser} = useContext(AuthContext);

    axiosInstance.interceptors.request.use(config => {
        config.headers.authorization = `Bearer ${user.accessToken}`;
        return config;
    });

    // response interceptor to handle errors globally
    axiosInstance.interceptors.response.use(response =>{
        return response;
    } , error =>{
        if(error.status === 401 || error.status === 403){
            // console.log("logout the user  for 401");
            signOutUser()
            .then(() =>{
                console.log('sign out user for 401 status code');
            })
            .catch(err=>{
                console.log(err);
            })
        }
       // console.log('error in interceptor',error);
        return Promise.reject(error);
    })

    return axiosInstance;
};

export default useAxiosSecure;