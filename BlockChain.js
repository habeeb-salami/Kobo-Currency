 Block = require('./Block.js');

 class BlockChain {
     constructor() {
         this.chain = [this.createFirstBlock()];
         this.difficulty = 4;
     }
     createFirstBlock() {
         return new Block(0, '01/01/2018', 'This is a first Block', '0');
     }
     getLatestBlock() {
         return this.chain[this.chain.length - 1];
     }
     addBlock(newBlock) {
         newBlock.previousHash = this.getLatestBlock().hash;
         //  newBlock.hash = newBlock.calculateHash();
         newBlock.mineBlock(this.difficulty);
         this.chain.push(newBlock);
     }
     isValidChain() {
         for (let i = 1; i < this.chain.length; i++) {
             const currentBlock = this.chain[i];
             const previousBlock = this.chain[i - 1];

             if (currentBlock.hash !== currentBlock.calculateHash()) {
                 //  console.log('currentBlock.hash !== previousBlock.calculateHash()');
                 //  console.log(currentBlock.hash + ' NOT Equal to This ' + currentBlock.calculateHash());
                 return false;
             }

             if (currentBlock.previousHash !== previousBlock.hash) {
                 // console.log('currentBlock.previousHash !== previousBlock.hash Current invalid Block ' + currentBlock + '  Previous Invalid Block ' + previousBlock);
                 return false;
             }
         }
         return true;
     }
 }

 module.exports = BlockChain;