
type IUser = {
  name: string;
  username: string;
  password: string;
};

export class UserEntity {
  name: string;
  username: string;
  password: string;
  id: string;
  isAdmin: boolean;

  private constructor(props: IUser){
    this.name = props.name;
    this.username = props.username;
    this.password = props.password;
    this.id = Math.random().toString(36).substring(2, 15); // Simple ID generation
    this.isAdmin = false; // Default value
  }
  static create(props: IUser){
    const user = new UserEntity(props);
    return user;
  }
}