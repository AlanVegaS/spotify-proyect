import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { ContentCard } from './';

export const Catalog = ({ category, contenList }) => {
    const sectionSizeRef = useRef(null);//section ref
    const [numberCards, setnumberCards] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            const width = sectionSizeRef.current.offsetWidth;

            const numItems = Math.round(width / 205);
            setnumberCards(numItems);
        };

        const observer = new ResizeObserver(handleResize);
        if (sectionSizeRef.current) {
            observer.observe(sectionSizeRef.current);
        }
        handleResize();
        return () => {
            observer.disconnect();
        };
    }, [contenList]);

    return (
        <section className="p-lg text-l-text-primary dark:text-text-primary" ref={sectionSizeRef}>
            <h2 className="font-bold text-2xl cursor-default">{category}</h2>
            <section className='mt-3 grid grid-rows-catalog-content' style={{ gridTemplateColumns: `repeat(${numberCards}, minmax(165px, 1fr))` }}>
                {
                    contenList.slice(0, numberCards).map(contentCard => (
                        <ContentCard key={contentCard.name} {...contentCard}></ContentCard>
                    ))
                }
            </section>
        </section >
    );
};

Catalog.propTypes = {
    category: PropTypes.string.isRequired,
    contenList: PropTypes.array.isRequired,
}