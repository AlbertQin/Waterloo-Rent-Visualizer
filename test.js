function main(callback){
  x = 2;
  callback(x);
}

function meme(x){
  return x;
}

console.log(main(meme));
