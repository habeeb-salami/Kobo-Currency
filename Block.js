const SHA256 = require('crypto-js/sha256');

class Block {
    //var index, timestamp, data, previousHash;
    constructor(index, timestamp, data, previousHash = '') {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }
    calculateHash() {
        return SHA256(this.index + this.timestamp + JSON.stringify(this.data) + this.previousHash + this.nonce).toString();
    }
    mineBlock(difficultyLevel) {
        while (this.hash.substring(0, difficultyLevel) !== Array(difficultyLevel + 1).join("0")) {
            this.nonce++;
            this.hash = this.calculateHash();
        }
        console.log('Mined Block ' + this.hash);
    }
}
module.exports = Block;