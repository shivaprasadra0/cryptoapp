import { address as bitcoinAddress } from 'bitcoinjs-lib';
import { utils as ethersUtils } from 'ethers';

export const verifyBitcoinAddress = (address) => {
  try {
    bitcoinAddress.fromBase58Check(address);
    return true;
  } catch (error) {
    return false;
  }
};

export const verifyPolygonAddress = (address) => {
  try {
    ethers.Utils.getAddress(address);
    return true;
  } catch (error) {
    return false;
  }
};
