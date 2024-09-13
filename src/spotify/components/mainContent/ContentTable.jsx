import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useGetContent } from "../../hooks/";

export const ContentTable = () => {
    const { itemsLibrary } = useSelector(state => state.spotify);

    const { pathname } = useLocation();
    const segments = pathname.split('/');
    const entity = segments[1];
    const ID = segments[2];

    const { contentList } = useGetContent(entity, ID);


    useEffect(() => {
        
    }, [contentList]);


    return (
        <div className="fill-base-primary dark:fill-text-primary">
            <div className="grid grid-cols-table-content h-7 m-4 ml-sm border-b-l-text-secondary border-solid border-b">
                <p className="flex justify-center w-full">#</p>
                <p>Title</p>
                <div className="flex justify-center">
                    <svg aria-hidden="true" className="w-5"><path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path><path d="M8 3.25a.75.75 0 0 1 .75.75v3.25H11a.75.75 0 0 1 0 1.5H7.25V4A.75.75 0 0 1 8 3.25z"></path></svg>
                </div>
            </div>
            {contentList && contentList.map(item => (
                <div key={item.id} className="grid grid-cols-table-content hover:bg-l-hover-card dark:hover:bg-hover-card rounded-sm items-center first:justify-items-center ml-sm">
                    <div className="flex justify-center w-full">
                        <svg aria-hidden="true" className="h-4" viewBox="0 0 24 24" ><path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path></svg>
                    </div>
                    <div className="flex">
                        <img src={item.img} alt="" className="w-12 max-h-12 rounded-sm mr-sm my-sm" />
                        <div>
                            <p className="font-semibold">{item.name}</p>
                            <p className="font-light">{item.info}</p>
                        </div>
                    </div>
                    <p>{item.duration}</p>
                </div>
            ))}
        </div>
    )
};