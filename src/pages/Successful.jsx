import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom';


function Successful() {
    const navigate = useNavigate();

    
    useLayoutEffect(()=> {
        if(localStorage.currentUser == null || localStorage.currentUser == undefined) {
            navigate('/');
        }
    }, []);

    useEffect(()=> {
        setTimeout(timeout, 3000);

        const timeout = ()=> {
            navigate('/main');
        }
        return () => {
            clearTimeout(timeout);
        };
    }, []);

  return (
    <div className='d-flex align-items-center justify-content-center text-success' style={{width: '100%', fontSize: '32px', height: '100vh'}}>Successful</div>
  )
}

export default Successful