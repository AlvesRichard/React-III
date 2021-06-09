import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => (
  <div className="col-xs-2">
      <section className= 'sidebar'>
        <img src="/juke.svg" className="logo" />
        <section>
          <h4 className="menu-item active">
            <Link to="/albums">ALBUMS</Link>
          </h4>
        </section>
        <section>
          <h4 className="menu-item active">
            <Link to="/artists">ARTISTS</Link>
          </h4>
        </section>
      <hr />
      <section>
        <h4 className="text-muted">PLAYLISTS</h4>
        <ul className="list-unstyled">
          {props.playList.map(list=>{
            return (
            <li className="playlist-item menu-item" key={list.id}>
              <Link to="FILL_ME_IN" >{list.name}</Link>
            </li>
          )})}
        </ul>
        <h4>
        <Link className="btn btn-primary btn-block" to="/NewPlaylist">
            <span className="glyphicon glyphicon-plus"></span> PLAYLIST
          </Link>
        </h4>
      </section>
      </section>
    </div>
);
