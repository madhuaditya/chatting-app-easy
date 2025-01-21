import React from 'react'
import {useDispatch} from "react-redux";
import authService from "../../appwrite/auth.js";
import {logout} from "../../stores/authSlice.js";
import {useNavigate} from "react-router-dom";
const LogoutBtn = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
   const Logouted = ()=>{
       authService.logout().then(() => {
           dispatch(logout());
           navigate("/login");
       }).catch((err) => {
           console.error(err);
       })
   }
    return (
        <div className={'flex py-2  justify-end'}>
            <button onClick={Logouted} >
                logOut!
            </button>
        </div>
    )
}
export default LogoutBtn
