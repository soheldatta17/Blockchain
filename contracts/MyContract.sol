// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyContract {
    string public name = "Hello, Solidity!";

    function setName(string memory newName) public {
        name = newName;
    }
}
