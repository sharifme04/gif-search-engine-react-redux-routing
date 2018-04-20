import React from 'react';

const SingleView = (props) => {
  var postData = props.gifs.filter(post => post.id === props.match.params.postID)
  return (
    <div className="url-position">
       <div className="single-image">
         <img className="SingleView" src={postData[0].images.downsized.url} alt="gif"/>
       </div>
       <a  href={postData[0].images.downsized.url}>{postData[0].title}</a>
    </div>
  );
};

export default SingleView;
