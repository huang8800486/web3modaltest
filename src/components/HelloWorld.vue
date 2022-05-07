<template>
  <div class="hello">
    {{ userAddress }}
    <button @click="connectWallet">连接钱包</button>
  </div>
</template>

<script>
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import providerOptions from "./providerOptions";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      userAddress: "",
    };
  },
  computed: {
    web3ModalObj() {
      return new Web3Modal({
        network: "mainnet", // optional
        cacheProvider: false, // optional
        providerOptions, // required
      });
    },
  },
  mounted() {
    console.log("web3ModalObj", this.web3ModalObj);
  },
  methods: {
    async connectWallet() {
      const instance = await this.web3ModalObj.connect();
      const provider = new ethers.providers.Web3Provider(instance);
      const signer = provider.getSigner();
      this.userAddress = await signer.getAddress();
      // console.log("userAddress", this.userAddress);
    },
    // 获取帐户
		getAccounts(type) {
			// console.log('window.webEthers.getSigner().getAddress()', window.ethers.ethers);
			window.ethereum
				.request({ method: 'eth_accounts' })
				.then(async (accounts) => {
					window.ethereum.request({ method: 'eth_chainId' }).then(async (result) => {
						console.log('result', result);
					});
					
				})
				.catch((err) => {
					
				});
		},
  },
};
</script>
