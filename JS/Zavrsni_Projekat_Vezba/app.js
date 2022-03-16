import { Chatroom } from "./chats.js";
import { ChatUI } from "./ui.js";
// let chat1 = new Chatroom(`js`, `Mica Mala`);
// console.log(chat1);
// let chat2 = new Chatroom(`general`, `Aleksa`);
// console.log(chat2);
let chat3 = new Chatroom(`homework`, `Toma`);
// chat1.room = `chill`;
// console.log(chat1);
// chat2.username = `Hot`;
// console.log(chat2);
// console.log(chat1);
console.log(chat3);
chat3.addChat(`Idemo se kume!`)
.then(() => console.log(`Sve je superiska!`))
.catch(err => console.log(`Huston, we have a problem: ${err}`));

