
function Click(clicks, clickBoost){ // gets called when clicked on
  newClicks = applyUpgrades(clicks, clickBoost);
  return newClicks;
}

function applyUpgrades(clicks, clickBoost){
  clicks = clicks + clickBoost;
  return clicks;
}

function getCookie(cname, type) { // cookie stuff... stol- i mean borrowed from w3schools
  if (!type) throw new Error("No type was passed to getCookie!");

  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      let ret = c.substring(name.length, c.length);
      switch (type) {
        case String: {
          return ret;
          break;
        }
        case Number: {
          return Number(ret);
          break;
        }
        
        case Boolean: {
          return ret.toLowerCase() === 'true'
          break;
        }
      }
    }
  }
  return "";
}
