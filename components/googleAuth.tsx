'use client'

import {useSession, signIn, signOut} from "next-auth/react";

export default function GoogleButton(){


    const {data: session} = useSession()

    if (session && session.user){
        return (
            <div>
                <p>{session.user.role}</p>
                <p>{session.user.name} 👋 |<button onClick={() => signOut()}>התנתק</button> </p>
            </div>
        )
    }

    return(
        <div>
            <button onClick={() => signIn()}>התחבר</button>
        </div>
    )
}
