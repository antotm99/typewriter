const typewriter = function(sentence) {
  let timer = 50
  let start = 1000
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, start);
    start += timer;
  }
  setTimeout(() => {
    process.stdout.write("\n");
  }, start);
}

typewriter("hello there from lighthouse labs");