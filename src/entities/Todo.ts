import { Entity, ObjectIdColumn, Column } from "typeorm";
import { ObjectID } from "mongodb";

@Entity()
export default class Todo {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  userID: ObjectID;

  @Column()
  todo: string;

  @Column()
  status: boolean;

  @Column("timestamp")
  createdAt: Date;
}