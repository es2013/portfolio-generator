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
//     profileDataArr.forEach((profileItem) => {
//         console.log(profileItem)
//     });
// };


// //other option to rewrite function above
// profileDataArr.forEach(profileItem => console.log(profileItem))
// LESSON 9.3 CODE TO BE COMMENTED OUT
const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template');
// const pageHTML = generatePage(name, github);

inquirer
.prompt([{
    type:'input',
    name:'name',
    message:'What is your name?'

}
])
.then(answers => console.log(answers));

// fs.writeFile('./index.html', generatePage(name, github), err =>{
//     if (err) throw err;
//     console.log('Portfolio complete! Check out index.html to see the output!');

// })