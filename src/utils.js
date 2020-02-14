const logger = function (...args) {
  if(ENV === 'dev') {
    let pre = new Date().toUTCString();
    if(typeof args[0] === 'object'){
      pre += " | " + args[0].constructor.name + " | ";
      pre += args[1];
    } else {
      pre += " | " + args[0]
    }
    console.log(pre);
  }
}

function copy(obj){
  return JSON.parse(JSON.stringify(obj));
}

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

logger('Starting in ' + ENV + ' env.');