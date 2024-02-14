const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :)', (name) => {
rl.question('What do you listen to while doing your favourite activity?', (music) => {
rl.question('What\'s an activity you like doing?', (activity) => {
rl.question('What\'s your favourite thing to eat?', (eat) => {
rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)?', (meal) => {
rl.question('Which sport is your absolute favourite?', (sport) => {
rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (superpower) => {
  console.log(`${name} loves listening to ${music} while ${activity}, devouring ${eat} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${superpower}.`);

  rl.close();
});
});
});
});
});
});
});
