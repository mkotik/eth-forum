export const FORUM_CONTRACT_ADDRESS =
  "0xE01d695D191DD737DEC75e6b2b1A4c5F63FD5707";
export const FORUM_CONTRACT_ABI = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_text",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "Messages",
    outputs: [
      {
        internalType: "string",
        name: "text",
        type: "string",
      },
      {
        internalType: "address",
        name: "username",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getMessages",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "text",
            type: "string",
          },
          {
            internalType: "address",
            name: "username",
            type: "address",
          },
        ],
        internalType: "struct Forum.Message[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_text",
        type: "string",
      },
    ],
    name: "pushMessage",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "text",
            type: "string",
          },
          {
            internalType: "address",
            name: "username",
            type: "address",
          },
        ],
        internalType: "struct Forum.Message[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];
