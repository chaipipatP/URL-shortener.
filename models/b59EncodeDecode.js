var encode_str = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ0123456789";
var base = encode_str.length;

function encode(num){
  var encoded = '';
  while (num){
    var remainder = num % base;
    num = Math.floor(num / base);
    encoded = encode_str[remainder] + encoded+'';
  }
  return encoded;
}

function decode(str){
  var decoded = 0;
  while (str){
    var index = encode_str.indexOf(str[0]);
    var power = str.length - 1;
    decoded += index * (Math.pow(base, power));
    str = str.substring(1);
  }
  return decoded;
}

module.exports.encode = encode;
module.exports.decode = decode;