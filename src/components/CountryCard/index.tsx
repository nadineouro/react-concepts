import React from 'react';
import { Props } from './types';
import './styles.scss';

const CountryCard: React.FC<Props> = ({ country }) => {
  return (
    <div className='country-card'>
      <div className='country-card-title'>{country.name || 'nadine'}</div>
      <div className='country-card-content'>
        <div className='country-card-content-line'>
          <label>CODE: </label>
          <label>{country.code}</label>
        </div>
        <div className='country-card-content-line'>
          <label>PHONE: </label>
          <label>{country.phone}</label>
        </div>
        <div className='country-card-content-line'>
          <label>CURRENCY: </label>
          <label>{country.currency}</label>
        </div>
      </div>
    </div>
  )
}
export default CountryCard;