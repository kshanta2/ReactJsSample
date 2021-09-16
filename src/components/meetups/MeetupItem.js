import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import { useContext } from 'react';
import FavoriteContext from '../../store/favorite-context';

function MeetupItem(props){

    const favoritesCtx = useContext(FavoriteContext);

    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

    function toggleFavoriteStatusHandler(){

        if(itemIsFavorite){
            favoritesCtx.removeFavorite(props.id);
        }
        else{
            favoritesCtx.addFavorite(
                {
                    id: props.id,
                    title: props.title,
                    description: props.description,
                    image: props.image,
                    address: props.address,
                }
            )
        }
    }
    return(
        <Card>
        <li className={classes.item}>
            <div className={classes.image}>
                <img src={props.image} alt={props.title}></img>
            </div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className={classes.actions}>
                <button onClick= {toggleFavoriteStatusHandler}>{ itemIsFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</button>
            </div>
        </li>
        </Card>
    );
}

export default MeetupItem;