export class CreateUser {
  constructor(
    public readonly email: string,
    public readonly password: string,
  ) {}
}
