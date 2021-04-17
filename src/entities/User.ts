import { Entity, ObjectID, ObjectIdColumn, Column } from "typeorm";

@Entity()
export default class User {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  username: string;

  @Column()
  email: string;
}