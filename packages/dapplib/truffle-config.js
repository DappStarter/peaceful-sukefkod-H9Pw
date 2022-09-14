require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea climb flee skull guard render remind huge hidden clinic onion tenant'; 
let testAccounts = [
"0xdd09b78d42cc5186feccdf3b61daabbd1b9b81ef2c5c43f168e4e3f59d7f9fb0",
"0x12c680bbe774e315ecedafae42c3d1731d13b929edf6541a4cd69db280a93e82",
"0x82301d559cbad5f9ccb1aa88b0e1d660954015b6ade96f1a11ef0f12aa0728bb",
"0x85eb8f41dc9330c1d8c712518d65323c136bab28fd95f5888c989fcc26c80749",
"0x2974cb1ee2166b0aecacc1cc31780b964d96950e51195618ff4fe6c497e52435",
"0xa00e08878a6e02b57fc476bf8bfa40249da16394b25a336fed51a32853c61085",
"0x7ad099e2655502f61ff7af6141f6fc514d12d3aaa0fd3cb038e2244ed375765f",
"0x678a0859273a0c2a2a2d71067d9bade7bae59c9b2249969999746550912b07b8",
"0x2b0196053319c05b32afa3d7c80c0ed5833797899b78735fdee9c55cafe81f13",
"0xfaa25072b5205c5e4bcef9257db4248c74d998e92ddd9042be5d96da6518039b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
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

