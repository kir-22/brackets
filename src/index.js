module.exports = function check(str, bracketsConfig) {
      const array = [];
      if (str.length % 2 !== 0) {
          return false;
      }
      str = str.split('');
      for (let i = 0, length=str.length; i < length; i++) {
          for (let j = 0, len=bracketsConfig.length; j < len; j++) {
              let n=array.length-1;
              if ((array[n] === bracketsConfig[j][0]) && (str[i] === bracketsConfig[j][1]))
                  array.pop();
              else if (str[i] === bracketsConfig[j][0])
                  array.push(str[i]);
          }
      }
      return array.length === 0; 
}
