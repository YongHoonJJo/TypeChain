class Block {
    public index: number;
    public hash: string;
    public prevHash: string;
    public data: string;
    public timestamp: number;

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
let blockchain: [Block] = [genesisBlock];

console.log(blockchain);

export {};