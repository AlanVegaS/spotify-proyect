import PropTypes from 'prop-types';
import { ContentCard } from './';

export const Catalog = ({ category, contenList }) => {
    return (
        <section className="p-lg text-l-text-primary dark:text-text-primary">
            <h2 className="font-bold text-2xl cursor-default">{category}</h2>
            <section className='mt-3 -m-3 w-full grid grid-cols-catalog-content grid-rows-catalog-content'>
                <ContentCard img='https://i.scdn.co/image/ab67656300005f1f8b34d64e614539df299e7839' name='Duo lingo' description='Description'></ContentCard>
                <ContentCard img='https://i.scdn.co/image/ab67656300005f1f8b34d64e614539df299e7839' name='Duo lingo' description='Description'></ContentCard>
                <ContentCard img='https://i.scdn.co/image/ab67656300005f1f8b34d64e614539df299e7839' name='Duo lingo' description='Description'></ContentCard>
                <ContentCard img='https://i.scdn.co/image/ab67656300005f1f8b34d64e614539df299e7839' name='Duo lingo' description='Description'></ContentCard>
            </section>
        </section>
    );
};

Catalog.propTypes = {
    category: PropTypes.string.isRequired,
    contenList: PropTypes.array.isRequired,
}