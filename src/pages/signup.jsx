import React, {useState, useEffect} from 'react'
import Mainpage from '../components/Mainpage'
import Web3 from 'web3';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter, useNavigate } from 'react-router-dom';



function Signup() {
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const notify = (mess) => toast.success(mess);
  const notify2 = (mess) => toast.error(mess);
  const [enabled, setEnabled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('currentUser');
    // Instantiate web3 with the provider from MetaMask (or other provider)
    const initWeb3 = async () => {
      if (window.ethereum) {
        // notify('enabled')
        setEnabled(true);
      } else if (window.web3) {
        // Legacy DApp browsers
        const web3Instance = new Web3(window.web3.currentProvider);
        setWeb3(web3Instance);
      } else {
        // Non-DApp browsers
        notify2('Non-Ethereum browser detected. go to https://metamask.io/');

        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
      }
    };
    initWeb3();
  }, []);

  const signUpWallet = async()=> {
    if(enabled) {
        const web3Instance = new Web3(window.ethereum);
        try {
          // Request account access if needed
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          setWeb3(web3Instance);
          const accs = await web3Instance.eth.getAccounts();

          setAccounts(accs);

          localStorage.setItem('currentUser', accs);
          navigate('/main');
        } catch (error) {
          console.error('User denied account access');
        }

    }else {
      notify2('Non-Ethereum browser detected. go to https://metamask.io/');
      console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
  }

  const signUpGoogle = async()=> {
    console.log('google');
  }


  return (
    <div className='mainsign_cont'>
        <div className="first_sec">
            <div className="overlay"></div>
            <div>
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_4_7)">
                <rect width="56" height="56" rx="28" fill="#F2F2F2"/>
                <path d="M25.1406 50.0312C22.7188 50.0312 20.5898 49.1328 18.7734 47.3164C16.8594 48.6055 14.9453 49.25 13.0508 49.25C11.3906 49.25 9.94531 48.7227 8.73438 47.668C7.71875 46.7891 6.97656 45.5 6.46875 43.8008V43.7422C6.46875 43.6445 6.52734 43.5664 6.625 43.5469L7.44531 43.332C7.5625 43.332 7.64062 43.3711 7.67969 43.4297C8.08984 44.875 8.71484 45.9492 9.53516 46.6719C10.5312 47.5508 11.6836 48 13.0117 48C14.6719 48 16.293 47.4531 17.9141 46.3594C15.8242 43.9961 14.6719 40.9102 14.6719 38.0781C14.6719 36.125 15.1797 34.5234 16.1758 33.2734C16.9766 32.2578 18.168 31.75 19.7109 31.7305C20.4727 31.7695 21.1758 32.043 21.8203 32.5703C22.543 33.0977 23.0898 33.957 23.4609 35.1484C23.7539 36.2031 23.9102 37.2188 23.9102 38.1953C23.9102 39.2891 23.7344 40.3242 23.3828 41.3203C22.7188 43.2734 21.5078 45.0117 19.7891 46.5547C20.5312 47.3945 21.9375 48.4492 23.5 48.5469C26.625 48.4297 29.5352 44.8555 32.2109 37.8242C32.7383 36.4961 33.2852 35.0703 33.8711 33.5664C36.4297 26.7891 39.4961 19.2695 43.2461 13.9961C42.5625 13.957 41.8203 13.8984 41.0586 13.8008L36.625 13.5273L34.8672 13.4688C33.5781 13.4297 32.3477 13.5859 31.1758 13.7812C29.1836 14.1328 27.5625 14.9141 26.3125 16.1641C25.375 17.1992 24.8281 18.1758 24.6719 19.1133C24.4961 20.0508 24.418 20.6758 24.418 21.0273C24.418 22.1211 24.75 23.1172 25.375 23.9961C26.0391 24.7578 26.7812 25.1484 27.6406 25.1484C28.5586 25.1484 29.4766 24.8555 30.375 24.2891C31.1953 23.7422 31.8398 23.1562 32.2695 22.5312L32.4062 22.4336L32.6016 22.4531V22.4922L33.8906 23.3906C34.1055 23.5859 34.2227 23.7617 34.2227 23.957C34.2227 24.0547 34.1641 24.1719 34.0859 24.3086C32.7188 25.9297 31.5469 26.8086 30.5312 26.9453C29.5352 27.082 28.9297 27.1406 28.7344 27.1406C27.1523 27.1406 25.707 26.3594 24.3789 24.7969C23.5586 23.6641 23.1484 22.3945 23.1484 21.0273C23.1484 20.6758 23.1875 20.3242 23.2266 19.9531C23.5 18.1367 24.2227 16.5938 25.375 15.3242C26.8203 13.8398 28.6953 12.9219 30.9805 12.5312C32.2891 12.3359 33.6562 12.2383 35.082 12.2383C36.5273 12.2383 38.4414 12.3359 40.8438 12.5312L44.2227 12.8047C44.8086 12.0234 45.4922 11.3984 46.293 10.8711C46.6055 10.7344 46.8984 10.6562 47.1523 10.6562C47.4453 10.6562 47.7188 10.7539 47.9531 10.9297C48.4023 11.2422 48.6367 11.5547 48.6562 11.8477C48.6758 12.1406 48.6758 12.2969 48.6758 12.3359C48.6758 12.8438 48.4414 13.2734 47.9531 13.625C47.3672 13.9375 46.4297 14.0938 45.1016 14.0938C43.6172 16.7695 42.3281 21.125 41 26.125C39.3594 32.1602 37.4844 38.5078 34.9258 43.2734C33.6367 45.6367 32.1328 47.3945 30.3945 48.5078C28.7539 49.5039 27.4844 49.9922 26.5859 50.0117C25.668 50.0312 25.1992 50.0312 25.1406 50.0312ZM7.95312 21.8477C7.40625 18.7031 11.5469 17.1797 13.3047 19.9141C15.375 17.1797 19.6133 18.2344 18.9102 21.5352C18.4023 23.9375 15.5898 25.1875 14.2617 27.9219C12.1523 25.6758 8.42188 24.6016 7.95312 21.8477ZM16.6641 37.7656C16.6641 39.1133 16.8594 40.5 17.2305 41.8867C17.6797 43.5664 18.2656 44.8359 19.0078 45.6562C20.043 44.8359 20.8633 43.8398 21.4688 42.6484C22.2305 41.1836 22.6211 39.6797 22.6211 38.1367C22.6211 37.2578 22.4844 36.3789 22.2109 35.5C21.7031 33.8594 20.8242 33.0195 19.5938 33.0195C19.1445 33.0195 18.6953 33.1562 18.2266 33.4492C16.3516 34.8164 16.6641 37.1992 16.6641 37.7656ZM45.9609 12.8047C46.0391 12.8047 46.293 12.7656 46.7422 12.707C46.957 12.668 47.1328 12.6094 47.2891 12.5312C47.3672 12.4727 47.4062 12.3945 47.4062 12.2773C47.4062 12.0625 47.3281 11.9453 47.1328 11.9453C47.0547 11.9453 46.957 11.9844 46.8594 12.043C46.4883 12.2188 46.1953 12.4727 45.9609 12.8047Z" fill="#2F2F2F"/>
                </g>
                <defs>
                <clipPath id="clip0_4_7">
                <rect width="56" height="56" rx="28" fill="white"/>
                </clipPath>
                </defs>
                </svg>

                <h2 className='mb-5 mt-3'>Welcome to Joeron</h2>

                <button className='mb-3' onClick={signUpWallet}>Sign in with wallet address</button>
                <button onClick={signUpGoogle}>
                    <img width='22' height='22' className='me-2' src="https://s3-alpha-sig.figma.com/img/4857/60a6/3ce39eebd456ce082b2b2430645a5558?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lZgBlIQiIpQHPl8C0WP69z-z8jjjytz-WSOdzLbUMmZCjCztH1J5Djrhefpx9za3nc7OMrlGYTZPI~4iAA10CvoxLsLdA7EbCigu91wyCd5aiFSY5perUB1mMgoWWXsKFZPjW0lzxeFDNEFae0gMV3nEGpVamv3hIUDilKPjsOS8kELUp-cG~CDTd36MwJN1bDCGQVQk-tXCM~mFNiHLp8w0hMpZwmaeY4Kg~agieQraFKzmZzgZK7xNI3BpvJbTN2HQJMtecLaPbtsMq2HuTdbaHeR51979nqbGjwNn2Df5KLj4lW8w5sjZjeTXFHRqLZM68NVlrX0iUuSez9g4AA__" alt="" /> 
                    Sign in with Google
                </button>
                <p className='mt-3'>By clicking sign in with Google you’ll be automatically registered.</p>
            </div>
            
        </div>
        <Mainpage />

    </div>
  )
}

export default Signup