import React from 'react';
import './ServicesList.css';
import Service from '../services/Service';

function ServicesList() {
  const data = [
    {
      name: 'Design',
      price: 9.99,
      currency: '$'
    },
    {
      name: 'Programming',
      price: 25.99,
      currency: '$'
    },
    {
      name: 'Consulting',
      price: 0.99,
      currency: '$'
    }
  ];

  const serviveHTML = data.map( (service) =>
                        <Service data={service} key={service.name}/>
                      );

  return (
    <div className="services-list">
      {serviveHTML}
    </div>
  );
}

export default ServicesList;
