import React, {useEffect, useState} from "react";
import Tours from "../components/Tours";
import { getGreeting } from "../services/greetingService";

export default function Home() {
    const [greeting,setGreeting] = useState('');

    useEffect(()=>{
        async function fetchGreeting(){
            try {
                const result = await getGreeting();
                setGreeting(result);
            } catch (error) {
                console.error('Error fetching greeting: ', error);
            }
        }
        fetchGreeting();
    },[])
    return (
        <div className="container">
            <h1 className="container mt-5">{greeting}</h1>
            <p className="container mt-5">TerraCustos is a passionately developed application that connects people's collective efforts in nature conservation and sustainability.
                The app aims to inspire and encourage people to protect and care for our Earth, while enabling them to actively participate in preserving the environment, all while fostering a closer connection to nature through the experiences gained during their journeys.</p>
            <Tours />
        </div>
    )
}