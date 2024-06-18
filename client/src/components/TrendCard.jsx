import React from 'react';
import Wrapper from '../assets/wrappers/TrendCardWrapper';
import { TrendData } from './../assets/data/trendData';

const TrendCard = () => {
  return (
    <Wrapper>
      <h3>Trends for you</h3>
      {TrendData.map((trend) => {
        return (
          <div className="trend">
            <span>#{trend.name}</span>
            <span>{trend.shares}k shares</span>
          </div>
        );
      })}
    </Wrapper>
  );
};

export default TrendCard;
