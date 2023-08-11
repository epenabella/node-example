import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: 'user_profiles', schema: 'public' })
export class UserProfile {
  @PrimaryColumn('uuid')
  Id!: string;

  @Column({ type: 'timestamp' })
  CreatedAt!: Date;

  @Column({ type: 'timestamp', nullable: true })
  UpdatedAt?: Date;

  @Column({ type: 'timestamp', nullable: true })
  DeletedAt?: Date;

  @Column({ type:'character varying', nullable: true })
  FirstName?: string;

  @Column({ type:'character varying', nullable: true })
  LastName?: string;
}