/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let found = -1
    for(let i = 0; i < ransomNote.length; i++)
    {   
       found = -1; 

       for(let j = 0; j < magazine.length; j++)
       {
           if (ransomNote[i] == magazine[j]){
               found = 1;
               magazine = magazine.substring(0, j) + magazine.substring(j + 1);
               break;
           }
       }
       if (found == -1) {
           return false
       }
    }
    return true;
};