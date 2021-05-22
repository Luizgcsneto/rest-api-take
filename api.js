const axios = require('axios')

axios.get('https://api.github.com/users/takenet').then(function(data){
    console.log(data)
})

const api = axios.create({
    baseUrl: 'https://api.github.com'
});

module.exports = api;