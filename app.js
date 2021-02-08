// var commandLineArgs = process.argv;
// console.log(commandLineArgs);
// const profileDataArgs = process.argv.slice(2, process.argv.length);

// lesson 9.1 original code for reference
// console.log(profileDataArgs);

// //lets us print each arugment 
// const printProfileData = (profiledataArr) => {
//     //this ..
//     for (let i = 0; i < profiledataArr.length; i++) {
//         console.log(profiledataArr[i]);
//     }
//     console.log('==========');
//     //is the same as this....
//     profileDataArr.forEach((progileItem) => {
//         console.log(profileItem)
//     });
// };


// //other option to rewrite function above
// profileDataArr.forEach(profileItem => console.log(profileItem))
const fs = require('fs');
const profileDataArgs = process.argv.slice(2);
const [name, github] = profileDataArgs;
const generatePage = require('./src/page-template');
fs.writeFile('./index.html', generatePage(name, github), err =>{
    if (err) throw err;
    console.log('Portfolio complete! Check out index.html to see the output!');

})