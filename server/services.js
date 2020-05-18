var jwt = require('jwt-simple');

var moment = require('moment');

var config = require('./config');

var service = {
    createToken : function(client) {

        var payload = {
      
          sub: client._id,
      
          iat: moment().unix(),
      
        };
      //   console.log(jwt.encode(payload, config.TOKEN_SECRET));
      //   var payload2 = jwt.decode(jwt.encode(payload, config.TOKEN_SECRET),config.TOKEN_SECRET);
      //   console.log(payload2.sub);
        
        return jwt.encode(payload, config.TOKEN_SECRET);
      
    },
    checkToken : function(token){
        var payload = jwt.decode(token,config.TOKEN_SECRET);
        return payload.sub;
    },
    extractCookie: function(req){
      let cookielist = req.headers.cookie.split("; ");
      let token = ''
      cookielist.forEach(cookies => {
        let cookie = cookies.split('=');
        if(cookie[0]=='token'){
            token = cookie[1];
        }
      });
      if(token!=''){
        return this.checkToken(token)
      }else{
        return false;
      }
    }

}

// exports.createToken = function(client) {

//   var payload = {

//     sub: client._id,

//     iat: moment().unix(),

//   };
// //   console.log(jwt.encode(payload, config.TOKEN_SECRET));
// //   var payload2 = jwt.decode(jwt.encode(payload, config.TOKEN_SECRET),config.TOKEN_SECRET);
// //   console.log(payload2.sub);
  
//   return jwt.encode(payload, config.TOKEN_SECRET);

// };
module.exports = service;