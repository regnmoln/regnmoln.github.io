const keyPress = e => {
  if (e.keyCode == 13 || e.which == 13) {
    let password = document.getElementById('password').value;

    if(password) {
      let hashedPassword = hash(password);

      if(urlExists(window.location.href + '/' + hashedPassword + ".png"))
        window.location.href = '/' + hashedPassword + ".png";
    }

    document.getElementById('password').value = '';
    document.getElementById('password').placeholder = 'You suck!';
  }
};

const urlExists = url => {
    let http = new XMLHttpRequest();

    http.open('HEAD', url, false);
    http.send();

    return http.status != 404;
}

const hash = str => {
  let i, l, hval = 0x811c9dc5;

  for (i = 0, l = str.length; i < l; i++) {
      hval ^= str.charCodeAt(i);
      hval += (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);
  }

  return (hval >>> 0).toString(16);
}
