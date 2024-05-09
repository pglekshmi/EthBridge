import { Contract, WebSocketProvider, Wallet, ethers } from "ethers";
import brdg from "./eventBridge1.json" assert { type: "json" };
// import Details from "./Details2.json" assert { type: "json"};

const abi=brdg.abi;
const provider=new ethers.JsonRpcProvider("https://polygon-amoy.g.alchemy.com/v2/P1lRmqY3DisgGsssDnAVK9Or6Pr-sFNj");
const wProvider = new WebSocketProvider("wss://polygon-amoy.g.alchemy.com/v2/P1lRmqY3DisgGsssDnAVK9Or6Pr-sFNj");
  const wallet1 = new Wallet(process.env.PRIVATE_KEY1, wProvider);
  const wallet2 = new Wallet(process.env.PRIVATE_KEY1, provider)

  export const insta = new Contract(brdg.contract_address, abi, wallet1);
  export const insta1=new Contract(brdg.contract_address,abi,wallet2);

