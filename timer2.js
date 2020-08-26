const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');


stdin.on('data', (key) => {

  //if press "b", beep right away (but I can't make the computer beep so I print dot?) => CHECKED!
  if (key === 'b') {
    process.stdout.write('.');
  }

  //if key is number 1-9, print a statement, and beep after that many seconds. => CHECKED!!!
  if (key >=1 && key <=9) {
    console.log(`setting timer for ${key} seconds`);
    
    setTimeout(() => {
      process.stdout.write('.');
    }, key*1000);
  }

  // if user pressed ctrl+C, exit program after saying thanks. => CHECKED!
  if (key === '\u0003') {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }
})












/* READLINE stuff...
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: press b to hear beep
});

rl.question("press 'b' to proceed", (input1) => {

  process.stdout.write('.');

})

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.on('line', (input) => {
  console.log(`Received: ${input}`);
});

rl.on('line', (line) => {
  switch (line.trim()) {
    case 'hello':
      console.log('world!');
      break;
    default:
      console.log(`Say what? I might have heard '${line.trim()}'`);
      break;
  }
  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});
*/