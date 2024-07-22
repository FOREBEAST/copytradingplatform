// Staking.sol
pragma solidity ^0.8.0;

contract Staking {
    struct Stake {
        uint256 amount;
        uint256 timestamp;
    }

    mapping(address => Stake) public stakes;

    function stake() public payable {
        require(msg.value > 0, "Stake amount should be greater than 0");
        stakes[msg.sender] = Stake(msg.value, block.timestamp);
    }

    function getStake(address user) public view returns (uint256, uint256) {
        Stake memory stake = stakes[user];
        return (stake.amount, stake.timestamp);
    }

    // Additional functions for reward distribution
}
