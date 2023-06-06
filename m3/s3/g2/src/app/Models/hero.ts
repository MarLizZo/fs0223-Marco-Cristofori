export class Hero {
  identify: { name: string; alterego: string };
  power: string;
  enemy?: string;
  planet: string;
  weakness?: string;

  constructor(
    _identify: { name: string; alterego: string },
    _power: string,
    _planet: string,
    _enemy?: string,
    _weakness?: string
  ) {
    this.identify = _identify;
    this.power = _power;
    this.planet = _planet;
    this.enemy = _enemy;
    this.weakness = _weakness;
  }
}
