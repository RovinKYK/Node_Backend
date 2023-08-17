const express = require('express')
const app = express()

//routes
app.get('/', (req,res)=> {
    res.send("Hello Node Api")
})

app.listen(3000, ()=>{
    console.log('listening on port 3000')
})

