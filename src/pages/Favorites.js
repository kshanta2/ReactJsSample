import { useContext } from 'react';
import FavoritesContext from '../store/favorite-context';
import MeetupList from '../components/meetups/MeetupList';
function FavoritesPage(){

    const favoriteCtx = useContext(FavoritesContext);
    
    let content;

    if (favoriteCtx.totalFavorites === 0 ){
        content = <p>You got no Favorites yet. Start adding some?</p>;
    }else{
        content = <MeetupList meetups = {favoriteCtx.favorites}></MeetupList>;
    }


    return (
        <section>
            <h1>My Favorites</h1>
            {content}
        </section>
    );
}

export default FavoritesPage;