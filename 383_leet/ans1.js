/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let map = new Map();
    // Add each character to map, saving it frequency as value and char as key
 
    for (let m of magazine) {
        if(map.has(m)) {
            map.set(m, map.get(m) + 1);
        }
        else {
            map.set(m, 1);
        }
    }
 
    for (let r of ransomNote)
    {
        if (map.has(r))
        {
            if (map.get(r) == 0)
            {
                return false;
            }
            map.set(r, map.get(r) - 1);
        }
        else {
            return false;
        }
    }
 
     return true;
 };