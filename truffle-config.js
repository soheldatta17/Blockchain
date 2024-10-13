module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost
      port: 7545,            // Ganache default port
      network_id: "*",       // Match any network id
    },
  },
  compilers: {
    solc: {
      version: "0.8.21",    // Fetch exact version from solc-bin
    },
  },
};
