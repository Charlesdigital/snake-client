// const net = require("net");

// // establishes a connection with the game server
// const connect = function () {
//   const conn = net.createConnection({
//     host: // IP address here,
//     port: // PORT number here,
//   });

//   // interpret incoming data as text
//   conn.setEncoding("utf8");

//   return conn;
// };

console.log("Connecting ...");
connect();

const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
const conn = connect();

setupInput(conn);
