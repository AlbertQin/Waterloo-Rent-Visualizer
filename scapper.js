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
         links.push($('a[style="float:left;"]', html)[i].attribs.href);
        }

        addresses = [];
        addresses = $('a[style="float:left;"]', html).text().split("\n");
        addresses = addresses.filter(checkspace);

    console.log(addresses);
    console.log(links);

  })
    .catch(function(err){
        console.log(err);
      })
    .then(function() {
        resolve([addresses, links]);
      });
  });
}

getInfo().then(function(res) {
  console.log(res);
})
