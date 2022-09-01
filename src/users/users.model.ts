import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { Role } from "../roles/roles.model";

import { UserRoles } from "../user-roles/user-roles.model";

interface UserCreationAttributes {
    email: string;
    password: string;

}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttributes> {

    @ApiProperty({example: '445', description: 'Unique identifier'})
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({example: 'realmail@gmail.com', description: 'User email'})
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    email: string;

    @ApiProperty({example: 'Aa123456', description: 'User password'})
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    password: string;

    @ApiProperty({example: 'true', description: 'Is user banned'})
    @Column({ type: DataType.BOOLEAN, defaultValue: false })
    banned: boolean;

    @ApiProperty({example: 'Bad behaviour', description: 'Ban reason'})
    @Column({ type: DataType.BOOLEAN, allowNull: true })
    banReason: string;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[];
}