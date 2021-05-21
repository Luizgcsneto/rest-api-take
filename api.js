const axios = require('axios')

axios.get('https://api.github.com/users/takenet').then(function(data){
    console.log(data)
})



module.exports = api;