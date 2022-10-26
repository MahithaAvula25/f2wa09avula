var express=require('express');
var router = express.Router();

router.get('/',function(req,res,next){
   var number1=Math.floor(Math.random())
   var number2=Math.floor(Math.random())
   var number3=Math.floor(Math.random()*20)
   var number4=Math.floor(Math.random())
   var sinfunction=Math.sin(number1);
   var acosfunction=Math.acos(number2);
   var sinhfunction=Math.sinh(number3);
   var absfunction=Math.abs(number4);
   res.render('computation',
   {
    title:'Mahitha Avula computation',
    number1:number1,
    number2:number2,
    number3:number3,
    number4:number4,
    acos:acosfunction,
    sinh:sinhfunction,
    abs:absfunction,
    sin:sinfunction,


   });
   
});



module.exports=router;