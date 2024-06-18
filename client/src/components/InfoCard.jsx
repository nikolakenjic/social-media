import React, { useState } from 'react';
import Wrapper from '../assets/wrappers/InfoCardWrapper';
import { UilPen } from '@iconscout/react-unicons';
import ProfileModal from './ProfileModal';

const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <Wrapper>
      <div className="infoHead">
        <h4>Your Info</h4>
        <div>
          <UilPen
            width="2rem"
            height="1.2rem"
            onClick={() => setModalOpened(true)}
          />
          <ProfileModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
        </div>
      </div>
      <div className="info">
        <span>
          <b>Status </b>
        </span>
        <span>in Relationship</span>
      </div>
      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>Multan</span>
      </div>
      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>Zainkeepscode inst</span>
      </div>
      <button className="button logout-button">Logout</button>
    </Wrapper>
  );
};

export default InfoCard;
