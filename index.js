class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '');
  }
  
  static titleize(string) {
    let s = [];
    let rejects = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let words = string.split(" ");
    let l = words.length;
    for (let i = 0; i < l; i++) {
      if (i === 0) {
        s.push(this.capitalize(words[i]))
      } else {
        if (rejects.includes(words[i])) {
          s.push(words[i]);
        } else {
          s.push(this.capitalize(words[i]));
        }
      }
    }
    return s.join(" ")
  }
}

