const express = require('express')
const app = express()
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
    getInfo().then(function(res1) {
    res.render('index', {addresses: res1[0], links: res1[1], error: null})
    console.log(res1);
  })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

//scrapper
const rp = require('request-promise');
const $ = require('cheerio');

function checkspace(str){
  return !((str == '        ') || (str == ''));
}

var fulllink = [];
var fulladdresses = [];
var links;
var addresses;

function getInfo(){
  return new Promise(function(resolve, reject){
    var url = 'https://listings.och.uwaterloo.ca/Listings/Search/Results?page='+ 1 + '&ps=50';

    rp(url)
    .then(function(html){
        //success!

        links = [];
        for(var i = 0; i < 50; i++){
         links.push( $('a[style="float:left;"]', html)[i].attribs.href);
        }

        addresses = [];
        addresses = $('a[style="float:left;"]', html).text().split("\n");
        addresses = addresses.filter(checkspace);

    //console.log(addresses);
    //console.log(links);

  })
    .catch(function(err){
        console.log(err);
      })
    .then(function() {
        resolve([addresses, links]);
      });
  });
}
