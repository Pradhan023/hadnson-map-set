// Q1
// var str = "abcadeecfb".split("");
// var n = str.length;
// function removeDuplicate(str, n)
//     {
//         var index = 0;
 
//         for (var i = 0; i < n; i++)
//         {
//             var j;
//             for (j = 0; j < i; j++)
//             {
//                 if (str[i] == str[j])
//                 {
//                     break;
//                 }
//             }
 
//             if (j == i)
//             {
//                 str[index++] = str[i];
//             }
//         }
         
//         return str.join("").slice(str, index);
//     }
    
//     console.log((removeDuplicate(str, n)));
     