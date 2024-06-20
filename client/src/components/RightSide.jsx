import React, { useState } from 'react';
import Wrapper from '../assets/wrappers/RightSideWrapper';
import { ShareModal, TrendCard } from './index';
import { UilSetting } from '@iconscout/react-unicons';
import Home from './../assets/img/home.png';
import Noti from './../assets/img/noti.png';
import Comment from './../assets/img/comment.png';

const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <Wrapper>
      <div className="navIcons">
        <img src={Home} alt="" />
        <UilSetting />
        <img src={Noti} alt="" />
        <img src={Comment} alt="" />
      </div>

      <TrendCard />

      <button
        className="button r-button" /*onClick={() => setModalOpened(true)}*/
      >
        Share
      </button>
      {/* <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} /> */}
      <ShareModal />
    </Wrapper>
  );
};

export default RightSide;
