var express = require('express');
var router = express.Router();
var user = require('../modals/user');

//get user
router.get('/user',(req,res)=>{
  user.find({})
  .then((data)=>res.json(data))
  .catch((err)=>console.log(err))
})

//add user
router.post('/add',(req,res)=>{
  var person = new user(req.body);
  person.save()
  .then(()=>res.end("data added"))
  .catch((err)=>console.log(err))
})

//update user
router.put('/update/:id',(req,res)=>{
  var userId = req.params.id;
  var updatedUser = req.body;
  user.updateOne({_id:userId},updatedUser)
  .then((re)=>{
    if(re.modifiedCount>0){
      res.end("data updated");
    }
    else{
      res.end("data not updated");
    }
  })
  .catch((err)=>console.log(err))

})


module.exports = router;
