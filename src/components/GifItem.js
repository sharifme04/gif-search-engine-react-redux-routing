import React from 'react';
import { Link } from 'react-router-dom';

const GifItem = (newitem) => {
  return (
    <li className="url-position">
       <Link to={`${newitem.gif.id}`}><img src={newitem.gif.images.downsized.url} alt="gif"/></Link>
       {/*<a  href={newitem.gif.images.downsized.url}><img src={newitem.gif.images.downsized.url} alt="gif"/></a>
       <a  href={newitem.gif.images.downsized.url}>{newitem.gif.title}</a>*/}
    </li>
  )
};

export default GifItem;
