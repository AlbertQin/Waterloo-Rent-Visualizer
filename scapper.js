const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://listings.och.uwaterloo.ca/Listings/Search/Results?page=1&ps=50';

rp(url)
.then(function(html){
    //success!
    var addresses = [];

    for(let i = 0; i < 50; i++){
      addresses.push($('a[style="float:left;"]', html)[i].attribs.href);
    }

    var cities = [];
    $('span[id="pageHeaderPlaceHolderSpan"]').each(function(i, elem) {
      cities[i] = $(this).text();
      console.log($(this).text());
    });
    console.log($('span[id="pageHeaderPlaceHolderSpan"]').text());
    console.log(addresses);
  })
  .catch(function(err){
    //handle error
  });
