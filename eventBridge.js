import "dotenv/config";
// import axios from "axios";
import {instance,instance1} from "./app.js";
import {insta,insta1} from "./app1.js";
eventBridgeV1();

async function eventBridgeV1() {
    console.log("Listening...");
    instance.on("burnedToken", async(event) => {
        console.log("Event recived");
        await insta1.swapeth();
        console.log("Wrapped ether generated");
     })
}
