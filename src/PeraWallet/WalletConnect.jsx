import { useState, useEffect } from 'react';
import { PeraWalletConnect } from '@perawallet/connect';

import './App.css';

const peraWallet = new PeraWalletConnect();

export default function WalletConnect() {
  const [accountAddress, setAccountAddress] = useState(null);
  const isConnectedToPeraWallet = !!accountAddress;

  console.log(accountAddress);

  console.log(`Found ${accountAddress} accounts`);
  // The window.vuplex object gets created when the page starts loading,
  // so we double-check that it exists before using it here.
  // You can skip this step if you're sending a message after the page has loaded.
  if (window.vuplex) {
    // The window.vuplex object already exists, so go ahead and send the message.
    console.log('The window.vuplex object already exists');
    sendMessageToCSharp(accountAddress);
  } else {
    // The window.vuplex object hasn't been initialized yet because the page is still
    // loading, so add an event listener to send the message once it's initialized.
    console.log("The window.vuplex object hasn't been initialized yet");
    window.addEventListener('vuplexready', sendMessageToCSharp);
  }

  useEffect(() => {
    // Reconnect to the session when the component is mounted
    peraWallet
      .reconnectSession()
      .then(accounts => {
        peraWallet.connector.on('disconnect', handleDisconnectWalletClick);

        if (accounts.length) {
          setAccountAddress(accounts[0]);
        }
      })
      .catch(e => console.log(e));
  }, []);

  return (
    <button
      onClick={
        isConnectedToPeraWallet
          ? handleDisconnectWalletClick
          : handleConnectWalletClick
      }
    >
      {isConnectedToPeraWallet ? 'Disconnect' : 'Connect to Pera Wallet'}
    </button>
  );

  function handleConnectWalletClick() {
    peraWallet
      .connect()
      .then(newAccounts => {
        peraWallet.connector.on('disconnect', handleDisconnectWalletClick);

        setAccountAddress(newAccounts[0]);
      })
      .catch(error => {
        if (error?.data?.type !== 'CONNECT_MODAL_CLOSED') {
          console.log(error);
        }
      });
  }

  function handleDisconnectWalletClick() {
    peraWallet.disconnect();
    setAccountAddress(null);
  }

  function sendMessageToCSharp(message) {
    // This object passed to postMessage() automatically gets serialized as JSON
    // and is emitted via the C# MessageEmitted event. This API mimics the window.postMessage API.
    window.vuplex.postMessage({ type: 'address', message: message });
  }
}
