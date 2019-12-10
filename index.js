const SHA256 = require('crypto-js/sha256');
Block = require('./Block.js');
BlockChain = require('./BlockChain.js');
let blockChain = new BlockChain();

blockChain.addBlock(new Block('1', '30/10/2018', {
    'Name': 'Habeeb Salami',
    'Gender': 'Male'
}));

blockChain.addBlock(new Block('2', '10/10/2018', {
    'Name': 'Sidiq Salami',
    'Gender': 'Male'
}));

blockChain.addBlock(new Block('3', '01/10/2018', {
    'Name': 'Ismail Salami',
    'Gender': 'Male'
}));

blockChain.addBlock(new Block('4', '30/10/2018', {
    'Name': 'Rodiah Salami',
    'Gender': 'Female'
}));

blockChain.addBlock(new Block('5', '30/10/2018', {
    'Name': 'Aolat Salami',
    'Gender': 'Female'
}));

blockChain.addBlock(new Block('6', '30/10/2018', {
    'Name': 'Kareemah Salami',
    'Gender': 'Female'
}));


console.log(JSON.stringify(blockChain, null, 4));
//  console.log('Is Block Valid ' + blockChain.isValidChain());