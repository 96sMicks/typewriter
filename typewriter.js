const sentence = "hello there from lighthouse labs \n";
let counter = 0;

for (const char of sentence) {
  if (char) {
    counter += 100
  }

  setTimeout(() => {
    process.stdout.write(char)
  }, counter);
}

