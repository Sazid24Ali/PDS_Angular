export class UserEntity {
  constructor(
    // userId:number, Removed Because it is a @generated type
    public firstName: string,
    public lastName: string,
    public email: string,
    public dateOfBirth: string,
    // public profilePicture: string
  ) {}
}


  