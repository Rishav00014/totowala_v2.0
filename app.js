const express =require("express")
const bodyParser=require("body-parser")

const http = require("https")
const app = new express()


app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));


app.get("/",(req,res)=>{
    res.sendFile(__dirname +"/index.html")
})
app.get("/query",(req,res)=>{
    res.sendFile(__dirname +"/signup.html")
})


app.post("/",(req,res)=>{
    let {name,email,query} = req.body
    let data = {
        members :[{
            email_address : email ,
            status : "subscribed",
            merge_fields : {
                FNAME : name.split(" ")[0],
                LNAME : name.split(" ")[1],
                MMERGE6 : query
            }

        }]
    }

    let jsonData = JSON.stringify(data)

    const url = "https://us9.api.mailchimp.com/3.0/lists/bcd8c9f416";

    const options = {
        method : "POST",
        auth : "Rishav:28c14efbee2691b23705d6f50167b2dc-us9"
    }

    const request = http.request(url,options,(response)=>{
        if(response.statusCode==200){
            res.sendFile(__dirname +"/sucess.html")
        }
        else{
            res.sendFile(__dirname +"/failer.html")
        }
    })
    request.write(jsonData)
    request.end()
})
app.listen(3000,()=>{
    console.log("hello working at port 3000");
})