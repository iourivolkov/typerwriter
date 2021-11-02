const sentence = "hello there from lighthouse labs\n";

let delay = 50;

for(let i = 0; i < sentence.length; i++){
    setTimeout(() => {
      process.stdout.write(sentence[i]);
    }, delay);
    delay += 50;
  };

