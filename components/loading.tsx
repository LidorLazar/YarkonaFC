import Image from "next/image";
import ball from '../public/ball.png'


export default function Loading() {
    return (


        <section dir={'rtl'} className={'h-full w-full flex flex-col text-center items-center justify-center' +
            ' font-bold py-20 md:full'}>
            <figure className={'flex h-full w-full items-center justify-center md:w-1/2 '}>
                <Image src={ball} alt={'ball-image'} title={'ball-image'} className={'animate-bounce h-1/5 w-1/3'}/>
            </figure>
            <article>
                <p className={'text-xl md:text-[3em]'}>טוען ...</p>
            </article>
        </section>


    )
}