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
        style={{margin: 5}}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <TwitterShareButton
        url={shareUrl}
        title={message}
        style={{margin: 5}}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>

      <PinterestShareButton
        url={shareUrl}
        media={imageUrl}
        style={{margin: 5}}
      >
        <PinterestIcon size={32} round />
      </PinterestShareButton>
    </div>
  );
};

export default ShareBar;
