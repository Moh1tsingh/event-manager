"use client"
import { getKindeServerSession, LoginLink, LogoutLink } from '@kinde-oss/kinde-auth-nextjs/server';
import React, { useEffect } from 'react'

function AuthButton() {
    let user = null;
    useEffect(()=>{
        const {getUser} = getKindeServerSession();
         user = getUser();
    },[])
  return (
    <div>
      {!user ? (
        <LoginLink>
          <button className=" px-5 py-2 rounded-full bg-white shadow-lg font-semibold tracking-tighter hover:bg-black hover:text-white duration-200 ease-linear">
            Sign in
          </button>
        </LoginLink>
      ) : (
        <button className=" px-5 py-2 rounded-full bg-white shadow-lg font-semibold tracking-tighter hover:bg-black hover:text-white duration-200 ease-linear">
          <LogoutLink>Log out</LogoutLink>
        </button>
      )}
    </div>
  );
}

export default AuthButton