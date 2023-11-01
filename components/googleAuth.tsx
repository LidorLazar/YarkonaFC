'use client'

import {useSession, signIn, signOut} from "next-auth/react";
import {useEffect, useState} from "react";

export default function GoogleButton() {

    const [isAdmin, setIsAdmin] = useState(false)
    const {data: session} = useSession()

    if (session && session.user)
        return (
            <div>
                <p>
                    {session?.user?.role === 'ADMIN' && ' yes'}
                </p>
                <p>{session.user.name} 👋 |
                    <button onClick={() => signOut()}>התנתק</button>
                </p>

            </div>
        )


return (
    <div>
        <button onClick={() => signIn()}>התחבר</button>
    </div>
)
}
