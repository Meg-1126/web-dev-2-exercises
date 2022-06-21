class BiteFish extends Fish {
  constructor(options) {
    super(options);
    this.surgeSecondsLeft = 0;
    this.maxSurge = 1.0;
    this.surgMult = 3.0;
    this.imageUri = '/images/bite-fish.gif';
  }

  updateOneTick() {
    const fishes = Object.values(this.tank.denizens).filter((fish) => {
      return fish.isTasty;
    });
    console.log('fishes', fishes);
    fishes.forEach((fish) => {
      console.log('distance', this.position.distance(fish.position));
      if (
        this.position.distance(fish.position) > 0 &&
        this.position.distance(fish.position) < 100
      ) {
        fish.kill();
      }
    });
    var delta = this.swimVelocity.scale(
      PHYSICS_TICK_SIZE_S * (1 + this.surgeSecondsLeft * this.surgMult)
    );
    this.position.addMut(delta);
    this.timeUntilSpeedChange -= PHYSICS_TICK_SIZE_S;
    if (this.timeUntilSpeedChange < 0) {
      this.makeNewVelocity();
    }
    this.surgeSecondsLeft = Math.max(
      0,
      this.surgeSecondsLeft - PHYSICS_TICK_SIZE_S
    );
  }

  onClick(event) {
    this.surgeSecondsLeft = this.maxSurge;
  }
}
