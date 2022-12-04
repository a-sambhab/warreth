//SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.0.0/contracts/token/ERC721/ERC721.sol";
interface IPUSHCommInterface {
    function sendNotification(address _channel, address _recipient, bytes calldata _identity) external;
}


interface INFTWarranty {
    function getSellerNFTs(uint256 sellerId)
        external
        view
        returns (uint256[] memory);

    function getSellers() external view returns (uint256[] memory);

    function getExpiry(uint256 sellerId, uint256 tokenId)
        external
        view
        returns (uint256 expiry);

    function getCreation(uint256 sellerId, uint256 tokenId)
        external
        view
        returns (uint256 creation);

    function getStatus(uint256 sellerId, uint256 tokenId)
        external
        view
        returns (uint256 stat);
        function getSellerNFT(uint256 sellerId,uint256 Index)external view returns(uint256);
        function getSellerNFTSize(uint256 sellerId)external view returns(uint256);

    function burn(uint256 tokenId) external;
}

contract NFTResolver {

    contract Push is ERC721 {
    address public EPNS_COMM_ADDRESS = 0xb3971BCef2D791bc4027BbfedFb47319A4AAaaAa;

    constructor ()
        ERC20("Push Token", "PUSH")
        public {
        _mint(msg.sender, uint(decimals()));
    }
    function checker(address contract_add)
        external
        view
        returns (bool canExec, bytes memory execPayload)
    
    {
        uint256[] memory ans = INFTWarranty(contract_add).getSellers();
        for (uint256 i = 0; i < ans.length; i++) {

            for (uint256 j = 0; j <  INFTWarranty(contract_add).getSellerNFTSize(ans[i]); j++) {
                //uint256 creationTime =  INFTWarranty(contract_add).getCreation(ans[i],nfts[i]);
                if ( (INFTWarranty(contract_add).getExpiry(ans[i],INFTWarranty(contract_add).getSellerNFT(ans[i],j) ) <
                        block.timestamp) &&
                    (INFTWarranty(contract_add).getStatus(ans[i], INFTWarranty(contract_add).getSellerNFT(ans[i],j)) == 2)
                ) {
                    execPayload = abi.encodeWithSelector(
                        INFTWarranty.burn.selector,
                        uint256(INFTWarranty(contract_add).getSellerNFT(ans[i],j))
                    );
                    IPUSHCommInterface(EPNS_COMM_ADDRESS).sendNotification(
            0xE8793A14bb05C2aA94ff304CfAA1B2e7823912C8, // from channel - recommended to set channel via dApp and put it's value -> then once contract is deployed, go back and add the contract address as delegate for your channel
            to, // to recipient, put address(this) in case you want Broadcast or Subset. For Targetted put the address to which you want to send
            bytes(
                string(
                    // We are passing identity here: https://docs.epns.io/developers/developer-guides/sending-notifications/advanced/notification-payload-types/identity/payload-identity-implementations
                    abi.encodePacked(
                        "0", // this is notification identity: https://docs.epns.io/developers/developer-guides/sending-notifications/advanced/notification-payload-types/identity/payload-identity-implementations
                        "+", // segregator
                        "3", // this is payload type: https://docs.epns.io/developers/developer-guides/sending-notifications/advanced/notification-payload-types/payload (1, 3 or 4) = (Broadcast, targetted or subset)
                        "+", // segregator
                        "Tranfer Alert", // this is notificaiton title
                        "+", // segregator
                        "Hooray! ", // notification body
                        addressToString(msg.sender), // notification body
                        " sent ", // notification body
                        uint2str(amount.div(10 ** uint(decimals()))), // notification body
                        " PUSH to you!" // notification body
                    )
                )
            )
        );
                    
                    return (true, execPayload);
                }
                
            }
        }
    }
    }
    
}
