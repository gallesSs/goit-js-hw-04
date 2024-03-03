const profile = {
  username: "Jacob",
  hoursPlayed: 300,
  getInfo() {
    return `${this.username} has ${this.hoursPlayed} active hours!`;
  },
  changeUsername(newUsername) {
    this.username = newUsername;
  },
  updatePlayTime(hours) {
    this.hoursPlayed += hours;
  }
};


console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"