import React, { useRef, useState } from 'react';
import Wrapper from '../assets/wrappers/PostShareWrapper';
import profileImg from './../assets/img/profileImg.jpg';
import { UilScenery } from '@iconscout/react-unicons';
import { UilPlayCircle } from '@iconscout/react-unicons';
import { UilLocationPoint } from '@iconscout/react-unicons';
import { UilSchedule } from '@iconscout/react-unicons';
import { UilTimes } from '@iconscout/react-unicons';

const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      //   setImage({
      //     image: URL.createObjectURL(img),
      //   });
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage({
          image: reader.result,
        });
      };
      reader.readAsDataURL(img);
    }
  };
  return (
    <Wrapper>
      <img src={profileImg} alt="profile img" className="profileImg" />
      <div className="postShare__info">
        <input
          type="text"
          placeholder="What's happening"
          className="postShare__info-input"
        />
        <div className="postOptions">
          <div
            className="option"
            style={{ color: 'var(--photo)' }}
            onClick={() => imageRef.current.click()}
          >
            <UilScenery />
            Photo
          </div>
          <div className="option" style={{ color: 'var(--video)' }}>
            <UilPlayCircle />
            Video
          </div>
          <div className="option" style={{ color: 'var(--location)' }}>
            <UilLocationPoint />
            Location
          </div>
          <div className="option" style={{ color: 'var(--shedule)' }}>
            <UilSchedule />
            Shedule
          </div>
          <button className="button ps-button">Share</button>
          <div style={{ display: 'none' }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>
        {image && (
          <div className="previewImage">
            <UilTimes onClick={() => setImage(null)} />
            <img src={image.image} alt="" className="previewImg__img" />
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default PostShare;
