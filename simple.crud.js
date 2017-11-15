// Include Express lib.
const app = require('express')();


var arrayData = [{
    "id":"1",
    "name":"test1"
},{
    "id":"2",
    "name":"test2"
},{
    "id":"3",
    "name":"test3"
},{
    "id":"4",
    "name":"test4"
},{
    "id":"5",
    "name":"test5"
}
];

app.get('/getdata', function (request, response) {
    response.send(arrayData); 
})



app.listen(3000, () => console.log('Example app listening on port 3000!'))