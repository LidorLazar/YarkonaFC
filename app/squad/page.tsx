'use client'
import {useSession} from "next-auth/react";


export  default function Squad() {

    const {data: session} = useSession()



    return (
        <section className={'h-fullScreen flex items-center justify-center'}>
            {session?.user.role === 'ADMIN' && <div>You are Admin</div>}
            <article>
            </article>
        </section>
    )
}