// frontend/src/components/MetaMaskButton.js
import React from 'react';
import Web3 from 'web3';

const MetaMaskButton = () => {
    const connectMetaMask = async () => {
        if (window.ethereum) {
            try {
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                const web3 = new Web3(window.ethereum);
                console.log('MetaMask connected');
            } catch (error) {
                console.error('Error connecting MetaMask', error);
            }
        } else {
            alert('Please install MetaMask!');
        }
    };

    return <button onClick={connectMetaMask}>Connect MetaMask</button>;
};

export default MetaMaskButton;
