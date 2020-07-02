//readfile uses a buffer which read the file in single run like capturing all the text in buffer size of same as file size which leads to buffererror as rangeerror
//   but
//createReadStream uses also buffer but in CHUNK manner which means captures each text in single seperate  buffer whic leads to faster execution of large files

// const fs = require('fs');
