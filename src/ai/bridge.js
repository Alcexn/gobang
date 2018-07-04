import AI from "./ai.js"
import R from "./role.js"
import config from './config.js'

var ai = new AI();

onmessage = function(e) {
  var d = e.data;
  console.log('get message' + d.type)
  if(d.type == "START") {
    ai.start(15);
  } else if(d.type == "BEGIN") {
    var p = ai.begin();
    postMessage(p);
  } else if(d.type == "GO") {
    var p = ai.turn(e.data.x, e.data.y);
    postMessage(p);
  } else if(d.type == "BACK") {
    ai.back();
  } else if(d.type == "CONFIG") {
    var d = e.data.config
    if (d.searchDeep) config.searchDeep = d.searchDeep
    if (d.countLimit) config.countLimit = d.countLimit
    if (d.vcxDeep) config.vcxDeep = d.vcxDeep
    if (d.timeLimit) config.timeLimit = d.timeLimit
    if (d.spreadLimit !== undefined) config.spreadLimit = d.spreadLimit
  }
}