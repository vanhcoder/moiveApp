import React from 'react';
import apiConfig from '../../api/apiConfig';
import {Link} from 'react-router-dom';
import Button from '../button/Button';
import { category}  from '../../api/tmdbApi';
import './movie-card.scss';


function MovieCard(props) {
    
    const item = props.item;
    const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);
    const link = '/'+ category[props.category] + '/' + item.id;
    return (
        <Link to={link}>
            <div className="movie-card" style={{backgroundImage:`url(${bg})`}}>
                  <Button>
                      <i className="bx bx-play"></i>
                  </Button>
            </div>
            <h3>{item.title || item.name}</h3>
        </Link>
    );
}

export default MovieCard;