// console.log(process.env.LANG);

// node command require : live server 가져와봐
const server = require("live-server");

const params = {
  host: "localhost",
  port: 1029,
  open: false,
  root: "./client",
};

server.start(params);
