// Import the MultiversX wallet provider
import { WalletConnectProvider } from '@multiversx/sdk-js-wallet-connect-provider';

// Create a new WalletConnect provider
const walletProvider = new WalletConnectProvider();

// Connect to the wallet
walletProvider.connect().then(async () => {
  // Get the wallet address
  const walletAddress = await walletProvider.getAddress();

  // Display the wallet address on the website
  document.getElementById('wallet-address').innerHTML = walletAddress;
});

// this need to paste in App.js <div id="wallet-address"></div>