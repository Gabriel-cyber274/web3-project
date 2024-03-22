import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom';


function Successful() {
    const navigate = useNavigate();

    
    useLayoutEffect(()=> {
        if(localStorage.currentUser == null && localStorage.googleUser == null || localStorage.currentUser == undefined && localStorage.googleUser == undefined) {
            navigate('/');
        }
      
    }, []);

    useEffect(()=> {
        const timeout = ()=> {
            navigate('/main');
        }
        setTimeout(timeout, 3000);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

  return (
    <div className='d-flex align-items-center justify-content-center text-success' style={{width: '100%', fontSize: '32px', height: '100vh'}}>Successful</div>
  )
}

export default Successful