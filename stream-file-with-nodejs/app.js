const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res)=>{

})
server.listen(2080, ()=>{
    console.log(`Server is running on http://localhost:${2080}`);
})