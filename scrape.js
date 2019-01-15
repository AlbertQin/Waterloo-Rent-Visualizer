var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const jsdom = require("jsdom");
const { JSDOM } = jsdom;


var addresses = [];
function getAddresses(){

  addresses.push(["big chungus"]);
  console.log("hello world");
  console.log(addresses);
}

var url = 'https://listings.och.uwaterloo.ca/Listings/Search/Results?page=1&ps=50';
function getHTML(url){
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", url, false ); // false for synchronous request
  xmlHttp.responseType = "document";
  xmlHttp.send( null );
  return xmlHttp.responseText;
}

hello = getHTML(url);
const dom = new JSDOM(hello);
console.log(dom.window.document.querySelector("div").textContent);
