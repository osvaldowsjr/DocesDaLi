export class item {
  constructor(
    public id: string,
    public name: string,
    public pic: string,
    public description: string,
    public price: string
  ) {}
}

export class ingredient {
  constructor(
    public id: string,
    public name: string,
    public amount: Number,
    public price: String,
    public brand: String
  ) {}
}
