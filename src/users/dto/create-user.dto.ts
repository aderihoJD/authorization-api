import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    
    @ApiProperty({example: 'realmail@gmail.com', description: 'User email'})
    readonly email: string;
    
    @ApiProperty({example: 'Aa123456', description: 'User password'})
    readonly password: string;   
}