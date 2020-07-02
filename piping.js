//zipping a text file

// const fs = require('fs');
// const zlib = require('zlib');
// const gzip = zlib.createGzip();
// const readStream = fs.createReadStream('./pipingtext.txt','utf8');
// const writeStream = fs.createWriteStream('piping2.txt.gz'); //.gz is must
// readStream.pipe(gzip).pipe(writeStream);


//unzipping a file
const fs = require('fs');
const zlib = require('zlib');
const gunzip = zlib.createGunzip();
const readStream = fs.createReadStream('piping2.txt.gz');
const writeStream = fs.createWriteStream('./uncompressed.txt'); //.gz is must
readStream.pipe(gunzip).pipe(writeStream);

// readStream.on('data',(input)=>{
//     writeStream.write(input);
// });

//piping actualy a shorthand version of write a file fo=rom one to another
// readStream.pipe(writeStream);



// fs.unlink('piping2.txt',(err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log('succesfully deleted');
// })