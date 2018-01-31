var HDWalletProvider = require("truffle-hdwallet-provider");
var provider = new HDWalletProvider(mnemonic, "https://mainnet.infura.io/G4mEQL6IFYKUEJ3fA8ru");
var mnemonic = "high flock iron thumb cart feel goose ticket glove equal innocent decade";

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: new HDWalletProvider(mnemonic, "https://mainnet.infura.io/G4mEQL6IFYKUEJ3fA8ru"),
      network_id: 3
    }
  }
};
