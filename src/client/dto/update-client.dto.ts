import { IsOptional, IsString, Length } from 'class-validator';

export class UpdateClientDto {
  @IsOptional()
  @IsString()
  @Length(3, 255)
  description?: string;

  @IsOptional()
  @IsString()
  active?: string;
}