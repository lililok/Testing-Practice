function caesarCipher(string, n) {
    let res = ""

    for (let i = 0; i < string.length; i++) {
        let c = string[i];
    
        if (c.match(/[a-z]/i)) {
          const code = string.charCodeAt(i);

          if (code >= 65 && code <= 90) {
            c = String.fromCharCode(((code - 65 + n) % 26) + 65);
          } else if (code >= 97 && code <= 122) {
            c = String.fromCharCode(((code - 97 + n) % 26) + 97);
          }
        }
        
        res += c;
    }
    return res;
}

  module.exports = caesarCipher;