const fs = require('fs');

// fs.writeFile('example.txt','hello JS world',(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log('File created');
//         fs.readFile('example.txt','utf8',(err,file)=>{
//                     if(err)
//                         console.log(err);
//                     else
//                         console.log(file);
//         })
//     }
// });

// fs.rename('example2.txt','example.txt',(err)=>{
//     if(err){
//         console.log(err.message());
//     }else{
//         console.log('succcesfully replaced');
//     }
// })

// fs.appendFile('example.txt','newly replaced text',(err)=>{
//     if(err)
//         console.log(err);
//     else    
//         console.log('successfully appended');
// })

// fs.unlink('example.txt',(err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log("Successfull deleted");
// });
// fs.mkdir('tutorial',(err)=>{
//     if(err)
//         console.log(err);
//     else{
//         fs.writeFile('example.txt','hello JS world',(err)=>{
//                 if(err)
//                     console.log(err);
//                     else    
//                         console.log("successfully created");
//         });
//     }
// });

// fs.unlink('.nodejstut/tutorial/example.txt',(err)=>{
//     if(err)
//         console.log(err);
//     else{
//         // fs.rmdir('tutorial',(err)=>{
//         //     if(err)
//         //         console.log(err);
//         //     else{
//                 console.log('successfully deleted');
//             }
//         });
    

// fs.readdir('example',(err,files)=>{
//     if(err)
//         console.log(err);
//     else{
//         for(let file of files ){
//                 fs.unlink('./example/'+file,(err)=>{
//                     if(err)
//                         console.log(err);
//                     else{
//                         console.log('successfully deleted \n')
//                     }
//                 });
//         }
//     }
// });

// fs.rmdir('example',(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log('succesfully deleted');
//     }
// });
