const replace = require('replace-in-file');

const options = {
    //Glob(s) 
    files: [
      'build/**/*.html'
    ],
  
    from: '<html lang="en">',
    to: '<html lang="de">',
  };

  try {
    let changedFiles = replace.sync(options);
    console.log(`Modified ${changedFiles.length} files!`);
  }
  catch (error) {
    console.error('Error occurred:', error);
  }