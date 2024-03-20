import React, {useState, useEffect} from 'react'
import Web3 from 'web3';

function Web() {
    const [web3, setWeb3] = useState(null);

    useEffect(() => {
      // Instantiate web3 with the provider from MetaMask (or other provider)
      const initWeb3 = async () => {
        if (window.ethereum) {
          // Modern DApp browsers
          const web3Instance = new Web3(window.ethereum);
          try {
            // Request account access if needed
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            setWeb3(web3Instance);
          } catch (error) {
            console.error('User denied account access');
          }
        } else if (window.web3) {
          // Legacy DApp browsers
          const web3Instance = new Web3(window.web3.currentProvider);
          setWeb3(web3Instance);
        } else {
          // Non-DApp browsers
          console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
        }
      };
      initWeb3();
    }, []);

  return (
    <div>Web</div>
  )
}

export default Web