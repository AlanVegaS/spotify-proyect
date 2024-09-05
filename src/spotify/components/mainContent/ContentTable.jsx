import { useSelector } from "react-redux"

export const ContentTable = () => {
    const { itemsLibrary } = useSelector(state => state.spotify);
    return (
        <>
            {itemsLibrary.map(item => (
                <div key={item.id} className="flex">
                    <p>1</p>
                    <img src={item.images[0].url} alt="" className="w-12 rounded-sm" />
                    <p>hola</p>
                    <p>44:55</p>
                </div>
            ))}
        </>
    )
};