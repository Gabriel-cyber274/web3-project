import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Web3 from 'web3';
import { ToastContainer, toast } from 'react-toastify';


function Bottompart({trending}) {
    const navigate = useNavigate();
    const [paymentAmount, setPaymentAmount] = useState(0);
    const notify = (mess) => toast.success(mess);
    const notify2 = (mess) => toast.error(mess);

    const funct =()=> {
    }

    const handlePayment = async () => {
        if (window.ethereum) {
          const web3 = new Web3(window.ethereum);
          try {
            // Request account access if needed
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            // Get the user's account address
            const accounts = await web3.eth.getAccounts();
            const userAddress = accounts[0];
            // Send payment transaction
            await web3.eth.sendTransaction({
              to: '0x6a5b0443Cc518d7096A25007e45ec54E739Af2b8',
              from: userAddress,
              value: web3.utils.toWei(paymentAmount.toString(), 'ether')
            });
            // Payment successful
            // alert('Payment successful!');
            notify('Payment successful!')
          } catch (error) {
            console.error('Payment error:', error);
            // alert('Payment failed. Please try again.');
            notify2('Payment failed.' + error.toString())
          }
        } else {
        //   alert('MetaMask not installed. Please install MetaMask to make a payment.');
          notify2('Non-Ethereum browser detected. go to https://metamask.io/');
        }
      };


  return (
    <div className='bottom_stuck px-3 py-3'>
        <button className='a'><svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 0.500006L1 2.77783H2.56741L3.65219 2.77783L14.75 2.75V0.500006L1 0.500006Z" fill="#F2F2F2"/>
        <path d="M1 3L1 0.500006L14.75 0.500006V2.75L3.65219 2.77783L2.56741 2.77783H0.5" stroke="#F2F2F2"/>
        </svg>
        </button>

        <button className='b mx-2 d-flex justify-content-around' onClick={()=> {
            setPaymentAmount('2000');
            trending  ? navigate('/completeOrder') : handlePayment()
            }}>
            Total price 
            <span>N 2000</span>
        </button>

        <button className='c'>
            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.99999 0.5H6.72217V2.06741V3.15219V14H9L8.99999 0.5Z" fill="#F2F2F2"/>
            <path d="M6.5 0.5H8.99999L9 14H6.72217V3.15219V2.06741V0" stroke="#F2F2F2"/>
            <path d="M1.25 5.75001L1.25 8.02783H2.81741H3.90219L15 8V5.75001L1.25 5.75001Z" fill="#F2F2F2"/>
            <path d="M1.25 8.25L1.25 5.75001L15 5.75001V8L3.90219 8.02783H2.81741H0.75" stroke="#F2F2F2"/>
            </svg>
        </button>
    </div>
  )
}

export default Bottompart