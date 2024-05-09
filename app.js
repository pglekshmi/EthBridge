import { Contract, WebSocketProvider, Wallet, ethers } from "ethers";
import brdg from "./eventBridge1.json" assert { type: "json" };
// import Details from "./Details2.json" assert { type: "json"};

const abi=brdg.abi;
const provider=new ethers.JsonRpcProvider("https://eth-sepolia.g.alchemy.com/v2/0loLZZe_TDjy-9X1wy9MobmDvCaj23jT");
const wProvider = new WebSocketProvider("wss://eth-sepolia.g.alchemy.com/v2/0loLZZe_TDjy-9X1wy9MobmDvCaj23jT");
  const wallet1 = new Wallet(process.env.PRIVATE_KEY, wProvider);
  const wallet2 = new Wallet(process.env.PRIVATE_KEY, provider)

  export const instance = new Contract(brdg.contract_address, abi, wallet1);
  export const instance1=new Contract(brdg.contract_address,abi,wallet2);

