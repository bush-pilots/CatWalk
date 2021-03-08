import React, {useState} from 'react';

import Thumbnail from './Thumbnail.js';

const AnswerThumbnails = ({thumbnails}) => {
  return (
    <div className="AnswerThumbnails">
      {
        thumbnails.map( thumbnail => {
          return <Thumbnail
          thumbnail={thumbnail.url}
          key={thumbnail.id}
        />
      })}
    </div>
  );
};

export default AnswerThumbnails;