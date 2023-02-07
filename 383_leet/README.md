## 383 Ransome Note

Given two strings `ransomNote` and `magazine`, return `true` if `ransomNote` can be constructed by using the letters from `magazine` and false otherwise.

Each letter in `magazine` can only be used once in `ransomNote`.

 

**Example 1:**
~~~
Input: ransomNote = "a", magazine = "b"
Output: false
~~~
**Example 2:**
~~~
Input: ransomNote = "aa", magazine = "ab"
Output: false
~~~
**Example 3:**
~~~
Input: ransomNote = "aa", magazine = "aab"
Output: true
~~~
 

**Constraints:**
~~~
    1 <= ransomNote.length, magazine.length <= 105
    ransomNote and magazine consist of lowercase English letters.
~~~

## Solution

### Code
```
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
```
```
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
};`
```