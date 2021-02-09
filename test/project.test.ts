import {assert} from 'chai';

import {useEnvironment} from './helpers';

describe('Integration tests examples', function () {
  describe('Hardhat Runtime Environment extension', function () {
    useEnvironment('hardhat-project');

    it('It should add the b field to ethers', function () {
      assert.isNumber(this.env.ethers.b());
    });
  });
});
