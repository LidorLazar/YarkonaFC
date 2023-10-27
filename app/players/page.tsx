
import {Suspense} from "react";
import Loading from "@/components/loading";
import PlayerCard from "@/components/playerCard";


export default function Player(){
    return(
        <div>
            <Suspense fallback={<Loading/>}>
                <PlayerCard/>
            </Suspense>
        </div>
    )
}