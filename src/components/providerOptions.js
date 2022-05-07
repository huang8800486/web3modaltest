import WalletConnectProvider from "@walletconnect/web3-provider";
export default {
  injected: {
    package: null,
  },
  // Example with WalletConnect provider
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: "555e9536472049d387ed6b2e3837b8ba", // required
      // infuraId: undefined, // required
      // // // rpc: {
      // // //   1: "https://mainnet.infura.io/v3/555e9536472049d387ed6b2e3837b8ba",
      // // // },
      // rpc: {
      //   56: "https://bsc-dataseed.binance.org/555e9536472049d387ed6b2e3837b8ba",
      // },
      // chainId: 56,
    },
  },
};
