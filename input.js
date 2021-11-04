const { connect } = require("./client");

//setting up a listener when the user puts in a key example: a key in the terminal and collects it
const conn = connect();

const setupInput = function () {
  const stdin = process.stdin; //initializing standard input
  stdin.setRawMode(true); // part of the config setRawMode
  stdin.setEncoding("utf8"); //a bite of information how to process the keys 8 bit system, theres 16, 32 ( 8 is english 16 32 other languages)
  stdin.resume(); //config set to continue to listen key input
  stdin.on("data", (key) => {
    handleUserInput(key, conn);
  }); //setup a callback or listener use .on is a listener, listen for data and checking for a key (ctrl C)
  return stdin; //use it to listen on the keys
};
//key is only in the context of data so you need anonomyous function to pass it through handleUserInput handleUserInput(key,conn)  will not work because key does not exist

const handleUserInput = function (key, conn) {
  if (key === "\u0003") {
    connection.destroy(); //always destroy, or delete listeners when you're done. Prevent memory leak
    process.exit();
  }
  if (key === "w") {
    //conn is an object needs to be defined or passed in
    conn.write("Move: up");
  }
  if (key === "a") {
    conn.write("Move: left");
  }
  if (key === "s") {
    conn.write("Move: down");
  }
  if (key === "d") {
    conn.write("Move: right");
  }
  if (key === "p") {
    conn.write("Say: Hello World");
  }
};

const stdin = setupInput(); //capture to use what its being return
