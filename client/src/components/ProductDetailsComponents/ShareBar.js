/* eslint-disable react/prop-types */
import React from 'react';
import {
  FacebookShareButton,
  PinterestShareButton,
  TwitterShareButton,
  TwitterIcon,
  FacebookIcon,
  PinterestIcon
} from 'react-share';

const ShareBar = ({ id, image }) => {
  const shareUrl = `http://localhost:3000/#/${id}`;
  const message = 'Check out this product!';
  const imageUrl = image;

  return (
    <div id="share-bar">
      <FacebookShareButton
        url={shareUrl}
        quote={message}
        style={{ margin: 5 }}
        id="facebook-share-button"
      >
        <FacebookIcon size={32} round id="facebook-icon" />
      </FacebookShareButton>

      <TwitterShareButton
        url={shareUrl}
        title={message}
        style={{ margin: 5 }}
        id="twitter-share-button"
      >
        <TwitterIcon size={32} round id="twitter-icon" />
      </TwitterShareButton>

      <PinterestShareButton
        url={shareUrl}
        media={imageUrl}
        style={{ margin: 5 }}
        id="pinterest-share-button"
      >
        <PinterestIcon size={32} round id="pinterest-icon" />
      </PinterestShareButton>
    </div>
  );
};

export default ShareBar;
