export class HeroReactive {
  identify: { name: string; alterego: string };
  powers: string[];
  enemy?: string;
  planet: string;
  weaknesses?: string[];

  constructor(
    _identify: { name: string; alterego: string },
    _powers: string[],
    _planet: string,
    _enemy?: string,
    _weaknesses?: string[]
  ) {
    this.identify = _identify;
    this.powers = _powers;
    this.planet = _planet;
    this.enemy = _enemy;
    this.weaknesses = _weaknesses;
  }
}
