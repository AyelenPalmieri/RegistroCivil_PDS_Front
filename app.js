
const express = require('express');
const app = express();



const path = require('path');
const port = 3002
const router = express.Router();
app.use(express.static(('public')));


router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

router.get('/index.html',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

router.get('/pages/tramites/tramites.html', function(req,res){
  res.sendFile(path.join(__dirname+'/pages/tramites/tramites.html'));
});

router.get('/pages/turnos/dni/dni.html', function(req,res){
  res.sendFile(path.join(__dirname+'/pages/turnos/dni/dni.html'));
});

//add the router
app.use('/', router);
// static files
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
