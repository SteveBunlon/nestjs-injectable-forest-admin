import { Entity, Column } from 'typeorm';

@Entity('users')
export class User {
  @Column({
    name: 'id',
    generated: 'increment',
    primary: true,
  })
  id: number;

  @Column({
    name: 'firstname',
  })
  firstname: string;

  @Column({
    name: 'lastname',
  })
  @Column()
  lastname: string;
}
