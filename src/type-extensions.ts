import 'hardhat/types/config';
import 'hardhat/types/runtime';
import '@nomiclabs/hardhat-ethers/types';

// declare module 'hardhat/types/config' {}

declare module '@nomiclabs/hardhat-ethers/types' {
  // This is an example of an extension to the Hardhat Runtime Environment.
  // This new field will be available in tasks' actions, scripts, and tests.
  interface HardhatEthersHelpers {
    b: () => number;
  }
}
