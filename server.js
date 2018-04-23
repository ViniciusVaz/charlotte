const express = require("express") 
    , path = require("path") 
    , serveStatic = require("serve-static") 
    , port = process.env.PORT || 4004 
    , app = express() 
 
app.use(serveStatic(path.join(__dirname, "dist"))) 
 
app.listen(port, () => { 
    console.log(`Server started: ${port}`) 
})