import express from "express"

const app:express.Application = express();

app.get('/',function(req:express.Request,res:express.Response){
    const {a,b} = req.query;
    if(a !== undefined && b !== undefined){
        const r = add(a,b);
        res.send(`add() ==> ${r}`)
    }else{
        res.send(`请确保 a 和 b 的存在`)
    }
})

function add(a:number,b:number):number{
    a = +a;
    b = +b;
    return a + b;
}

app.listen(3001,()=>{console.log("on part 3001!")})