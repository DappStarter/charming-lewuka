require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drink frame suspect notice crime remember million jazz prize success gate'; 
let testAccounts = [
"0x155fc942d33933559530c02427d132980f4c583efbd2ba0431b62c72655f1a6d",
"0x8cbc8d8b30745bfd266bffcd5a1985036cf74c98226f99ce61ec5427805ca4b3",
"0xf8a071856a3ca00d258090ea16862c253422c53b3597cdb7e442b66d91803dcf",
"0xe77a57f2d187d964473480741bb02910c9d2c47b828355aab4bcdbc0338a705d",
"0x9edf72d76e11a1b51b73cd96d060c6b6a896cd61c3b85b012e49444593492ffc",
"0x61a5bee5c9639fdc49204c8b2321eaa2f9dc6a60f5b797da4a255595f7055b6d",
"0xcaf6e4fe3fff786b3f1485d46b5998d7cb18078299d912ff3933c829a6464c28",
"0x2219a4e4f80480be68279cbfbcc60355fef4dcef0f8a73d18874c9f5d9a2ca5c",
"0x612dac1647e91fc6a9c1ceac1a4d9ac86f1d94191a0ebc70b7afabe2d9c04ffc",
"0xaf2bddc5aa463473c453887a066bda5d044bf723a86f4d2db84f8dbff17fe5ff"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
