  const createSeller = async(sellerId,contract,account)=>{
    if (!contract) {
        return false;
      }
      const res = await contract.methods.createSeller(sellerId).send({from:account});
      return res;

  }

  const createNFT = async(contract,tokenURI,sellerId,productId,customer,expiry,imageURI,account)=>{
    if (!contract) {
        return false;
      }
      const res = await contract.methods.createNFT(tokenURI,sellerId,productId,customer,expiry,imageURI).send({from:account});
      return res;
  }
  const resell = async(contract,to,tokenId,sellerId,account)=>{
    if (!contract) {
        return false;
      }
      const res = await contract.methods.resell(to,tokenId,sellerId).send({from:account})
      return res;

  }

  
const verify = async(contract,account,productId,sellerId,tokenId)=>{
  if (!contract) {
    return false;
  }
  const res = await contract.methods.verifyOwnership(productId,sellerId,tokenId).send({from:account});
  return res;
}

const claim = async(contract,account,sellerId,tokenId)=>{
  if (!contract) {
    return false;
  }
  const res = await contract.methods.claimNMint(sellerId,tokenId).send({from:account})
  return res;
}
export{
  createSeller,
  createNFT,
  resell,
  verify,
  claim
}