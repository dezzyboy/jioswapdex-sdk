import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | number | string

export enum ChainId {
  MAINNET = 868455272153094,
  TESTNET = 868455272153094,
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESS = '0x36b5db9ECF848c1057bcB1dc36EFDcD35392e1B2'

export const FACTORY_ADDRESS_MAP = {
  [ChainId.MAINNET]: FACTORY_ADDRESS,
  [ChainId.TESTNET]: '0x36b5db9ECF848c1057bcB1dc36EFDcD35392e1B2'
}

export const INIT_CODE_HASH = '0x4d2aa46a43c997a6659df1acaaa2771acdbfcba47edb77e97a97903a44c49d80'

export const INIT_CODE_HASH_MAP = {
  [ChainId.MAINNET]: INIT_CODE_HASH,
  [ChainId.TESTNET]: '0x4d2aa46a43c997a6659df1acaaa2771acdbfcba47edb77e97a97903a44c49d80'
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const FEES_NUMERATOR = JSBI.BigInt(9975)
export const FEES_DENOMINATOR = JSBI.BigInt(10000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
