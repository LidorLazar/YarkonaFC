import Image from "next/image";
import {db} from "@/lib/db";
import {NextResponse} from "next/server";

async function getPlayerData() {
    const response:any = await db.user.findMany()
    return NextResponse.json(response)
}

export default async function PlayerCard() {
    const data:any = await getPlayerData()

    return (
        <section dir={'rtl'} className={'grid grid-cols-2 mb-20 gap-2 md:grid-cols-4 '}>
            {data.map((item: any) => {
                if (item.image) {
                    return (
                        <div key={item.id}>
                            <div className={'relative '}>
                                <figure>
                                    <Image src={item.image} alt={item.name} title={item.name} width={300} height={300}
                                           quality={100} className={'object-contain w-full'}/>
                                </figure>
                                <article className={'absolute bottom-0 h-1/5 flex items-center w-full justify-center' +
                                    ' text-xl bg-white bg-opacity-50  shadow-lg backdrop-filter backdrop-blur-md backdrop-contrast-125 backdrop-brightness-125'}>
                                    <p className={''}>{item.name}</p>
                                </article>
                            </div>
                        </div>
                    )
                }
            })}
        </section>
    )
}