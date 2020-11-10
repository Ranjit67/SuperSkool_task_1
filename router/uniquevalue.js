const express = require("express");
const bodyParser = require("body-parser");
const router=express.Router();


let ds=[];
let k={
    prev:null,
    value:null,
    next:null
}

router.get("/another",(req,res)=>{

res.render("another", {date:ds});
});

router.post("/another",function(req,res){
                                    //algorithem start
    let d =null;
    d= ds.find(e=>{
        return e.value === req.body.data;
    });
    console.log(d);
    if(d){
        return res.redirect("/another")
    }
    let head,tail;
    // data=[d,...data];
    head=tail=10;
    if(ds.length === 0){
       
        
        k.value=req.body.data;
        k.prev=head;
        k.next=head;
       
        ds=[...ds,k];
        console.log(ds);
        k={
            prev:null,
            value:null,
            next:null
        }
    } else { if(ds.length > 0){

        tail=9+ds.length;
       
        ds[0].prev=tail+1;
        ds[ds.length-1].next=tail+1;
    
        k.value=req.body.data;
        k.prev=tail;
        k.next=head;
       ds.push(k);
       k={
        prev:null,
        value:null,
        next:null
    }
    } 
      console.log(ds);                          //algorithem end
        
    }

res.redirect("/another")
});



module.exports=router;