import * as CryptoJS from "crypto-js";

class Block {
    public index: number;
    public hash: string;
    public prevHash: string;
    public data: string;
    public timestamp: number;

    static calculateBlockHash = (index: number, prevHash: string, timestamp: number, data: string): string => 
        CryptoJS.SHA256(index+prevHash+timestamp+data).toString();

    constructor(index: number, hash: string, prevHash: string, data: string, timestamp: number) {
            this.index = index;
            this.hash = hash;
            this.prevHash = prevHash;
            this.data = data;
            this.timestamp = timestamp;
    }
}

const genesisBlock: Block = new Block(0, "20202020202020", "", "Hello", 123456);

// array of Block
let blockchain: Block[] = [genesisBlock];

console.log(blockchain);

const getBlockChain = () : Block[] => blockchain;

const getLatestBlock = () : Block => blockchain[blockchain.length-1];

const getNewTimeStamp = () : number => Math.round(new Date().getTime() / 1000);

export {};