function doGet(e) {
  
  if(typeof e !== 'undefined'){
    return requestHandler(e);
  }
}

function doPost(e) {
  if(typeof e !== 'undefined'){
    return requestHandler(e);
  }  
}

function requestHandler(e){
  var res = handleRequest(e);
  return ContentService.createTextOutput(res);
}

function handleRequest(e) {
  if(typeof e.parameter.bot_token === 'undefined'){
    return 'Error! Bot token not provided';
  } else if(typeof e.parameter.method === 'undefined') {
    return 'Error! Method name not provided';
  }
  var bot_token = e.parameter.bot_token;
  var tg_method = e.parameter.method;
  
  var data = {
    "method": "post",
    "muteHttpExceptions": true
  }
  if(typeof e.parameter.args !== 'undefined'){
    var args = e.parameter.args;
    data.payload = JSON.parse(args);
  }
  var res = UrlFetchApp.fetch('https://api.telegram.org/bot' + bot_token + '/' + tg_method, data);
  return res.getContentText();
}
