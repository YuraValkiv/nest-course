import { IsNumber, IsString } from "class-validator";

export class AddRoleDto {
  @IsString({message: "Will be string"})
  readonly value: string;
  @IsNumber({},{message: "Will be number"})
  readonly userId: number;
}