import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
  @ApiProperty({example: "user@gmail.com", description: "email"})
  @IsString({message: "Will be string"})
  @IsEmail({},{message: "uncorrect email"})
  readonly email: string;
  @ApiProperty({example: "12345678", description: "password"})
  @IsString({message: "Will be string"})
  @Length(4, 16, {message: "Will be not smaller then 4 and bigger then 16 chars "})
  readonly password: string;
}