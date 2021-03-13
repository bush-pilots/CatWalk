/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

const Thumbnail = ({ thumbnail }) => {
  const [expandThumbnail, setExpandThumbnail] = useState(false);

  return (
    <>
      <img
        onClick={() => setExpandThumbnail(!expandThumbnail)}
        className={!expandThumbnail ? 'AnswerThumbnail' : 'AnswerExpandedThumbnail'}
        src={thumbnail}
        alt=""
      />
    </>
  );
};

export default Thumbnail;
