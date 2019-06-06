import React from 'react';
import './Service.css';

function Service(props) {
  return (
    <div className="service">
      Service [{props.data.name}] - {props.data.price}{props.data.currency}
    </div>
  );
}

export default Service;
