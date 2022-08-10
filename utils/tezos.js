import { BeaconWallet } from "@taquito/beacon-wallet";
import { TezosToolkit } from "@taquito/taquito";

// Update CONTRACT_ADDRESS and other constants below as required
const DAPP_NAME = "InstaFund";
// const RPC_URL = "https://ithacanet.smartpy.io";
const RPC_URL = "	https://jakartanet.ecadinfra.com/";
const NETWORK = "jakartanet";
const CONTRACT_ADDRESS = "KT1WoD6NEkYvdrc7LGa84Fq1fqg1ksvpENYA";

// Initialize TezosToolkit
const Tezos = new TezosToolkit(RPC_URL);

// Initialize BeaconWallet
const options = {
  name: "Tezos Developer Hub",
  // iconUrl: "https://tezostaquito.io/img/favicon.svg",
  preferredNetwork: "jakartanet",
  // eventHandlers: {
  //   PERMISSION_REQUEST_SUCCESS: {
  //     handler: async (data) => {
  //       console.log("permission data:", data);
  //     },
  //   },
  // },
};
const wallet = new BeaconWallet(options);

// Setting the wallet as the wallet provider for Taquito.
Tezos.setWalletProvider(wallet);

// Create getActiveAccount function to connect with wallet
const getActiveAccount = async () => {
  await wallet.requestPermissions({ network: { type: "jakartanet" } });
  await wallet.getPKH();

  console.log(await wallet.client.getActiveAccount());
  return;
};

// Create clearActiveAccount function to disconnect the wallet
const clearActiveAccount = async () => {
  await wallet.client.clearActiveAccount();
  console.log(await wallet.client.getActiveAccount());
  return;
};

// Fetching contract
const getContract = async () => {
  return Tezos.wallet.at(CONTRACT_ADDRESS);
};

// Fetching Contract's storage
const getContractStorage = async () => {
  return (await getContract()).storage();
};

export {
  Tezos,
  wallet,
  getActiveAccount,
  clearActiveAccount,
  getContract,
  getContractStorage,
};
