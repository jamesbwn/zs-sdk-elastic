export declare const FACTORY_ADDRESS = "0x7cbb1dB566beC88E4A7d2a1E47dFc6C95885a126";
export declare const ADDRESS_ZERO = "0x0000000000000000000000000000000000000000";
export declare const POOL_INIT_CODE_HASH = "0x62727aa274be42ff169ce253ffab784a80793c607a93adfe47e0695f085b94ff";
/**
 * The default factory enabled fee amounts, denominated in hundredths of bips.
 */
export declare enum FeeAmount {
    STABLE = 8,
    LOWEST = 10,
    LOW = 40,
    MEDIUM = 300,
    HIGH = 1000
}
/**
 * The default factory tick spacings by fee amount.
 */
export declare const TICK_SPACINGS: {
    [amount in FeeAmount]: number;
};
export declare const MIN_LIQUIDITY = 100000;
