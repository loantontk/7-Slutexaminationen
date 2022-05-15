import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import droneImage from '../graphics/drone.svg';

function Status() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const handleGoToMenuPage = () => {
    navigate('/menu');
  };

  return (
    <div className='status-container'>
      {!state ? (
        <button className='btn accept-btn' onClick={handleGoToMenuPage}>
          Go to order
        </button>
      ) : (
        <>
          <p className='order-number-text'>
            Order number:{' '}
            <span className='order-number'>
              {state.orderNr}
            </span>
          </p>
          <div className='droneImage'>
            <img src={droneImage} alt='Drone' />
          </div>
          <h1 className='text'>
            Din beställning är på väg !
          </h1>
          <p className='time'>
            <span className='time-number'>{state.eta}</span>{' '}
            minuter
          </p>
          <button className='btn accept-btn' onClick={handleGoToMenuPage}>
            Ok, cool!
          </button>
        </>
      )}
    </div>
  );
}

export default Status;