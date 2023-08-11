import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: 'users', schema: 'auth' })
export class UserSupabase {
  @PrimaryColumn('uuid')
  InstanceId!: string;

  @PrimaryColumn('uuid')
  Id!: string;

  @Column()
  Aud?: string;

  @Column()
  Role?: string;

  @Column()
  Email?: string;

  @Column()
  EncryptedPassword?: string;

  @Column({ type: 'timestamp', nullable: true })
  EmailConfirmedAt?: Date;

  @Column({ type: 'timestamp', nullable: true })
  InvitedAt?: Date;

  @Column()
  ConfirmationToken?: string;

  @Column({ type: 'timestamp', nullable: true })
  ConfirmationSentAt?: Date;

  @Column()
  RecoveryToken?: string;

  @Column({ type: 'timestamp', nullable: true })
  RecoverySentAt?: Date;

  @Column()
  EmailChangeTokenNew?: string;

  @Column()
  EmailChange?: string;

  @Column({ type: 'timestamp', nullable: true })
  EmailChangeSentAt?: Date;

  @Column({ type: 'timestamp', nullable: true })
  LastSignInAt?: Date;

  @Column()
  RawAppMetaData?: string;

  @Column()
  RawUserMetaData?: string;

  @Column({ nullable: true })
  IsSuperAdmin?: boolean;

  @Column({ type: 'timestamp', nullable: true })
  CreatedAt?: Date;

  @Column({ type: 'timestamp', nullable: true })
  UpdatedAt?: Date;

  @Column({ nullable: true })
  Phone?: string;

  @Column({ type: 'timestamp', nullable: true })
  PhoneConfirmedAt?: Date;

  @Column()
  PhoneChange?: string;

  @Column()
  PhoneChangeToken?: string;

  @Column({ type: 'timestamp', nullable: true })
  PhoneChangeSentAt?: Date;

  @Column({ type: 'timestamp', nullable: true })
  ConfirmedAt?: Date;

  @Column()
  EmailChangeTokenCurrent?: string;

  @Column()
  EmailChangeConfirmStatus?: number;

  @Column({ type: 'timestamp', nullable: true })
  BannedUntil?: Date;

  @Column()
  ReauthenticationToken?: string;

  @Column({ type: 'timestamp', nullable: true })
  ReauthenticationSentAt?: Date;

  @Column()
  IsSsoUser?: boolean;

  @Column({ type: 'timestamp', nullable: true })
  DeletedAt?: Date;

  // Assuming there is a UserProfile entity defined, you can use @OneToOne relationship
  // Make sure to adjust the relationship configuration based on your UserProfile entity
  // @OneToOne(() => UserProfile)
  // @JoinColumn({ name: 'Id' })
  // UserProfile!: UserProfile;
}