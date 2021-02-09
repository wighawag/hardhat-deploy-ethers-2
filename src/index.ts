import {extendEnvironment} from 'hardhat/config';
import './type-extensions';
import {lazyObject} from 'hardhat/plugins';
import '@nomiclabs/hardhat-ethers';

extendEnvironment((hre) => {
  const prevEthers = hre.ethers;
  hre.ethers = lazyObject(() => {
    prevEthers.b = () => 1;
    return prevEthers;
  });
  // getSigner: (address: string) => getSigner(hre, address),
  // getSigners: () => getSigners(hre),

  // We cast to any here as we hit a limitation of Function#bind and
  // overloads. See: https://github.com/microsoft/TypeScript/issues/28582
  // getContractFactory: getContractFactory.bind(null, hre) as any,
  // getContractAt: getContractAt.bind(null, hre),
});
