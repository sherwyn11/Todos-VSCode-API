import { Entity, ObjectID, ObjectIdColumn, Column, BaseEntity } from "typeorm"; 

@Entity()
export default class User extends BaseEntity {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  username: string;

  @Column()
  email: string;
}