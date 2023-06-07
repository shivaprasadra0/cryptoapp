import { observable, action } from 'mobx';

class WalletStore {
  @observable walletType = 'bitcoin';
  @observable privateKey = '';
  @observable receiverAddress = '';
  @observable amount = 0;

  @action setWalletType = (type) => {
    this.walletType = type;
  }

  @action setPrivateKey = (key) => {
    this.privateKey = key;
  }

  @action setReceiverAddress = (address) => {
    this.receiverAddress = address;
  }

  @action setAmount = (amount) => {
    this.amount = amount;
  }
  @action switchNetwork = (network) => {

  }
}

const walletStore = new WalletStore();
export default walletStore;
