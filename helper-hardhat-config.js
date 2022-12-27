const networkConfig = {
    5: {
        name: "goerli",
        ethUsdPriceFeed: "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e",
    },
    137: {
        name: "polygon",
        ethUsdPriceFeed: "0x6Df09E975c830ECae5bd4eD9d90f3A95a4f88012",
    },
}

const developmentChains = ["hardhat", "localhost"]
const DECIMALS = 8
const INITAL_ANSWER = 200000000000

module.exports = {
    networkConfig,
    developmentChains,
    DECIMALS,
    INITAL_ANSWER,
}
