import React from 'react';

type RankBoxProps = {
    name: string;
    average: number;
    rank: number;
    isYou: boolean;
    emoji: string;
};

const RankBox = ({name, average, rank, isYou, emoji}: RankBoxProps) => {
    return (
            <div
                className={"sm:w4/7 bg-zinc-900 border-[2px] border-[#333333] w-full rounded-lg  mt-3 mb-3 py-2 px-3 text-lg box-sizing:border-box"}>
                <div className={"grid grid-cols-4  pe-6"}>
                    <div className={"text-neutral-400 flex  justify-between align-center "}>#{rank}</div>
                    <div className={"col-start-2"}>{name}</div>
                    {false ? <div
                        className={" bg-[#011D81] bg-opacity-40 border-2 rounded border-[#121957]  text-xs flex items-center max-w-9 px-1.5 mx-2"}>You</div> : ''}
                    <div className={"col-start-4"}>{average}</div>
                    <div className={"col-start-5 ps-6"}>{emoji}</div>
                </div>
            </div>
    );
};

export default RankBox;