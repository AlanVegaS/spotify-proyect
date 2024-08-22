import PropTypes from 'prop-types';
import { ContentCard } from './';
import { useEffect, useRef, useState } from 'react';
import { configUi } from '../../ui/config';

export const Catalog = ({ category, contenList }) => {
    const sectionSizeRef = useRef(null);//section ref
    const [contentCards, setContentCards] = useState(contenList.slice(3));
    const { uiSizes } = configUi();

    useEffect(() => {
        if (sectionSizeRef.current) {
            //setWidth(sectionSizeRef.current.offsetWidth);
        }

        const handleResize = () => {
            const width = sectionSizeRef.current.offsetWidth;

            if (width <= 750) {
                console.log(1);
                setContentCards(contenList.slice(3));
            }
            if (width >= 1024) {
                console.log(2);
                setContentCards(contenList.slice(4));
            }
            if (width >= 1400) {
                console.log(3);
                setContentCards(contenList.slice(5));
            }
            if (width > 1600) {
                console.log(4);
                setContentCards(contenList.slice(6));
            }
        };

        window.addEventListener('resize', () => {
            handleResize();
        });

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section className="p-lg text-l-text-primary dark:text-text-primary" ref={sectionSizeRef}>
            <h2 className="font-bold text-2xl cursor-default">{category}</h2>
            <section className='mt-3 -m-3 w-full grid grid-cols-catalog-content grid-rows-catalog-content'>
                {
                    contentCards.map(card => {
                        console.log('log');
                        <ContentCard img={card.img} name={card.name} description={card.description} key={card.name} ></ContentCard>
                    })
                }
            </section>
        </section >
    );
};

Catalog.propTypes = {
    category: PropTypes.string.isRequired,
    contenList: PropTypes.array.isRequired,
}