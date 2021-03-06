import React from 'react';
import { Link } from 'react-router-dom';
import { FilterInput } from './FilterInput'

export default ({ artists }) => (
  <div>
  
    <h3>Artists</h3>
    <div className="list-group">
      {
        artists.map(artist => {
          return (
            <div className="list-group-item" key={artist.id}>
              <Link to={`/artists/${artist.id}`}>{ artist.name }</Link>   
            </div>
          )    
        })
      }
    </div>
  </div>  
);
