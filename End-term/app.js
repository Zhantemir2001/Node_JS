var http=require('http');
var fs=require('fs');

function serveStaticFile(res,path,contentType,responceCode){
    if(!responceCode){responceCode=200;}
    fs.readFile(__dirname+path,function(err,data){
        if(err){
            res.writeHead(500,{'Content-Type':'text/plain'});
            res.end("500-Internal Error");
        }
        else{
            res.writeHead(responceCode,{'Content-Type': contentType});
            res.end(data);
        }
    })
}

http.createServer(function(req,res){
    var path=req.url.replace(/\/?(?:\?.*)?$/,'').toLowerCase();
    switch(path){
        case '':
            serveStaticFile(res,'/index.html','text/html');
            break;
        case '/about':
            serveStaticFile(res,'/about.html','text/html');
            break;
        case '/img/gallery/study.jpg':
            serveStaticFile(res,'/img/gallery/study.jpg','image/jpeg');
            break;
        case '/img/gallery/graduation.jpg':
            serveStaticFile(res,'/img/gallery/graduation.jpg','image/jpeg');
            break;
        case '/video/students/memes.mp4':
            serveStaticFile(res,'/video/students/memes.mp4','video/mp4');
            break;
        default:
            serveStaticFile(res,'/error.html','text/html',404);
            break;
            
        
    }
}).listen(3000);

console.log("Server strted on localhost 3000, press Ctrl+c to terminate")