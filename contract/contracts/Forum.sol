//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Forum {

    Message[] public Messages;

    struct Message {
        string text;
        address username;
    }

    function getMessages() public view returns (Message[] memory) {
        return Messages;
    }

    function pushMessage(string memory _text) public {
        Messages.push(Message(_text, msg.sender));
    }

    constructor(string memory _text) {
        Message memory newMessage = Message(_text, msg.sender);
        Messages.push(newMessage);
    }

}