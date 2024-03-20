import React, { useLayoutEffect } from 'react'
import Bottompart from '../components/Bottompart';
import { useNavigate } from 'react-router-dom';

function CompleteOrder() {
    const navigate = useNavigate();


    
    useLayoutEffect(()=> {
        if(localStorage.currentUser == null || localStorage.currentUser == undefined) {
            navigate('/');
        }
    }, []);

  return (
    <div className='trending_main complete_main'>
        <div className="nav d-flex align-items-center py-3 px-2">
            <svg onClick={()=> navigate(-1)} width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 0L11.1 2.175L5.775 7.5L24 7.5V10.5L5.775 10.5L11.1 15.825L9 18L0 9L9 0Z" fill="#2F2F2F"/>
            </svg>
            <h2 className='ms-3 '>Complete order</h2>
        </div>

        <div className='px-2 mt-4'>
            <h1>Payment transaction</h1>
            
            <div className="form mt-5 mb-4">
                <label htmlFor="address" className='mb-3'>
                    Payment mode
                </label>
                <select name="" id="address">
                    <option value="">Bitcoin address</option>
                </select>
            </div>
            <p>Please pay the exact amount on the screen</p>
        </div>

        <Bottompart />
    </div>
  )
}

export default CompleteOrder