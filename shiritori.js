class Shiritori {
  constructor() {
    this.words = [];
    this.game_over = false;
  }
  counter = 0;

  play(str) {
    if (this.words.includes(str)) {
      this.game_over = true;
      return `Game over: invalid! - ${str} has already been said`;
    }

    if (this.words.length > 0) {
      if (this.words[this.words.length - 1].slice(-1) !== str[0]) {
        this.game_over = true;
        return `Game over: invalid! - ${str} with start with ${this.words[
          this.words.length - 1
        ].slice(-1)}`;
      }
    }

    this.words.push(str);

    return "Valid!";
  }

  restart() {
    this.words.length = 0;
    this.game_over = false;
    return "Game restarted";
  }
}

const myShiritori = new Shiritori();

console.log(myShiritori.play("apple"));
console.log(myShiritori.play("ear"));
console.log(myShiritori.play("rape"));
console.log(myShiritori.words);
console.log(myShiritori.play("ear"));
console.log(myShiritori.words);
console.log(myShiritori.game_over);
console.log(myShiritori.restart());
console.log(myShiritori.words);
console.log(myShiritori.game_over);
