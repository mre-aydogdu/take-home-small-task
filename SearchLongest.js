function Vowel_Counter(str){
const count = str.match(/[aeiou]/gi).length

return count;
}      
      
function Find_Longest(str){

str = str.match(/[a-zA-Z0-9]+/gi);
let largest = "";

for (let i = 0; i<str.length; i++){
    if(str[i].length > largest.length)
        largest = str[i]
        else if(str[i].length == largest.length){
            if(Vowel_Counter(str[i]) > Vowel_Counter(largest))
                largest = str[i]

                    
                    
        }
    }
    return largest;
}

console.log(Find_Longest("Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers"))

        
