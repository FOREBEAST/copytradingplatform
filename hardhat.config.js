require("@nomiclabs/hardhat-waffle");
c
module.exports = {
  solidity: "0.8.0",
  networks: {
    hardhat: {
      chainId: 1337
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/https://mainnet.infura.io/v3/5a30495c53414429a17633eb6f1c61b1`,
      accounts: [`0x5a30495c53414429a17633eb6f1c61b1`]
    }
  }
};
