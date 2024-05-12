"use client";
import React, {useEffect, useState} from 'react';
import RankBox from "@/components/RankBox";
import {NextApiRequest} from "next";
// @ts-ignore
import requestIp from 'request-ip'

let animals = [
    {name: "Dog", emoji: "🐶"},
    {name: "Cat", emoji: "🐱"},
    {name: "Mouse", emoji: "🐭"},
    {name: "Rabbit", emoji: "🐰"},
    {name: "Bear", emoji: "🐻"},
    {name: "Panda", emoji: "🐼"},
    {name: "Tiger", emoji: "🐯"},
    {name: "Lion", emoji: "🦁"},
    {name: "Cow", emoji: "🐮"},
    {name: "Frog", emoji: "🐸"},
    {name: "Octopus", emoji: "🐙"},
    {name: "Monkey", emoji: "🐵"},
    {name: "Chicken", emoji: "🐔"},
    {name: "Penguin", emoji: "🐧"},
    {name: "Fish", emoji: "🐠"},
    {name: "Whale", emoji: "🐳"},
    {name: "Elephant", emoji: "🐘"},
    {name: "Koala", emoji: "🐨"},
    {name: "Camel", emoji: "🐪"},
    {name: "Giraffe", emoji: "🦒"},
    {name: "Kangaroo", emoji: "🦘"},
    {name: "Badger", emoji: "🦡"},
    {name: "Turkey", emoji: "🦃"},
    {name: "Dove", emoji: "🕊️"},
    {name: "Eagle", emoji: "🦅"},
    {name: "Swan", emoji: "🦢"},
    {name: "Peacock", emoji: "🦚"},
    {name: "Parrot", emoji: "🦜"},
    {name: "Flamingo", emoji: "🦩"},
];

const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const leaderBoardPage = () => {
    const [users, setUsers] = useState([])
    const [currentIp, setCurrentIp] = useState('')

    const fetchUsers = async () => {
        const response = await fetch('/api/avgs', {method: 'GET'});
        const data = await response.json()
        setUsers(data)
    }

    const fetchCurrentIp = async () => {
        const response = await fetch('/api/ip', {method: 'GET'});
        const dataIP = await response.json();
        // console.log(dataIP)
        setCurrentIp(dataIP);
    }

    useEffect(() => {
        // fetchCurrentIp()
        setCurrentIp("0.0.0.0")
        fetchUsers()
    }, []);

    users.sort((a: { avg: number; }, b: { avg: number; }) => b.avg - a.avg);
    const shuffledAnimals = shuffleArray([...animals]);

    return (
        <div className={"pb-8"}>
            <h1 className={"flex justify-center align-center lg:text-6xl text-5xl py-2 mb-8"}>Leaderboard</h1>
            <div className={"flex  justify-center align-center"}>
                <div className={"flex flex-col gap-3"}>
                    {
                        users.length === 0 ? (
                            <p className={"opacity-80 text-lg"}>Nothing yet! 🫥</p>
                        ) : (
                            users.map((entry: { ip: string, avg: string; }, index: number) => {
                                const animal = shuffledAnimals[index % shuffledAnimals.length];
                                const average = parseFloat(entry.avg).toFixed(2);
                                let isYou;
                                if (currentIp === null) {
                                    isYou = false
                                } else {
                                    isYou = entry.ip === currentIp;
                                }
                                // @ts-ignore
                                return <RankBox key={index} name={animal.name} average={average} rank={index + 1}
                                                isYou={isYou}
                                                emoji={animal.emoji}/>
                            })
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default leaderBoardPage;