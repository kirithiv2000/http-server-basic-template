const http = require("http");
const port = 8000;
const fs = require("fs")
function requestHandler(req,res){
    console.log(req.url);
    res.writeHead(200,{'context-type':'text/html'})
    filepath = "./index.html"
    switch (req.url) {
        case "/":
            filepath = "./index.html"
            break;
        case "/profile":
            filepath = "./profile.html"
            break;
    
        default:
            filepath = "./404.html"

            break;
    }
    try {
        const indexhtml = fs.readFileSync(filepath)
        res.end(indexhtml)

    } catch (error) {
        res.end("<h1>Error</h1>")
    }
}
const server = http.createServer(requestHandler)


server.listen(port,(err)=>{
    if (err){
        console.log(err)
        return ;
    }
    console.log("server is running on port",port)
})
