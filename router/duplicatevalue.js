const express = require("express");
const bodyParser = require("body-parser");
const router=express.Router();


let data=[];
let k={
    prev:null,
    value:null,
    next:null
}

router.get("/",(req,res)=>{

res.render("main", {date:data});
})

router.post("/",function(req,res){
    // let d = req.body.data;               //algorithem start
    let head,tail;
    // data=[d,...data];
    head=tail=10;
    if(data.length === 0){
       
        
        k.value=req.body.data;
        k.prev=head;
        k.next=head;
       
        data=[...data,k];
        console.log(data);
        k={
            prev:null,
            value:null,
            next:null
        }
    } else { if(data.length > 0){

        tail=9+data.length;
       
        data[0].prev=tail+1;
        data[data.length-1].next=tail+1;
    
        k.value=req.body.data;
        k.prev=tail;
        k.next=head;
       data.push(k);
       k={
        prev:null,
        value:null,
        next:null
    }
    } 
      console.log(data);
        
    }                                   //algorithem end

res.redirect("/")
});

module.exports=router;