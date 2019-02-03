import styled from 'styled-components';
import React from 'react';

export const SunShower = () => {
  return (
    <div className="icon sun-shower">
      <div className="cloud" />
      <div className="sun">
        <div className="rays" />
      </div>
      <div className="rain" />
    </div>
  );
};
export const ThunderStorm = () => {
  return (
    <div className="icon thunder-storm">
      <div className="cloud" />
      <div className="rain" />
      <div className="lightning">
        <div className="bolt" />
        <div className="bolt" />
      </div>
    </div>
  );
};
export const Cloud = () => {
  return (
    <div className="icon cloudy">
      <div className="cloud" />
      <div className="cloud" />
    </div>
  );
};

export const Snow = () => {
  return (
    <div className="icon flurries">
      <div className="cloud" />
      <div className="snow">
        <div className="flake" />
        <div className="flake" />
      </div>
    </div>
  );
};

export const Sunny = () => {
  return (
    <div className="icon sunny">
      <div className="sun">
        <div className="rays" />
      </div>
    </div>
  );
};

export const Rainy = () => {
  return (
    <div className="icon rainy">
      <div className="cloud" />
      <div className="rain" />
    </div>
  );
};
