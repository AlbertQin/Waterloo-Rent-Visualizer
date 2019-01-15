const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://listings.och.uwaterloo.ca/Listings/Search/Results?page=1&ps=50';

function checkspace(str){
  return !((str == '        ') || (str == ''));
}
rp(url)
.then(function(html){
    //success!
    var links = [];

    for(let i = 0; i < 50; i++){
      links.push($('a[style="float:left;"]', html)[i].attribs.href);
    }

    var addresses = [];
    addresses = $('a[style="float:left;"]', html).text().split("\n");
    addresses = addresses.filter(checkspace);
    addresses = addresses.map(s => s.trim());
    console.log(links);
    console.log(addresses);
  })
  .catch(function(err){
    //handle error
  });
