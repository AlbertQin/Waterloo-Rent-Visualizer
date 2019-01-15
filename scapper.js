const rp = require('request-promise');
const $ = require('cheerio');

function checkspace(str){
  return !((str == '        ') || (str == ''));
}

var fulllink = [];
var fulladdresses = [];

function main(){
  var url = 'https://listings.och.uwaterloo.ca/Listings/Search/Results?page='+ 1 + '&ps=50';

  rp(url)
  .then(function(html){
      //success!

      var links = [];
      for(var i = 0; i < 50; i++){
       links.push($('a[style="float:left;"]', html)[i].attribs.href);
      }

      var addresses = [];
      addresses = $('a[style="float:left;"]', html).text().split("\n");
      addresses = addresses.filter(checkspace);

  console.log(addresses);
  console.log(links);

  return [fulllink, fulladdresses];
    })
    .catch(function(err){
      console.log(err);
    });

}
console.log(main());
