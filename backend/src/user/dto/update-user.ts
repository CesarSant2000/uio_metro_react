import {
  IsBoolean,
  IsDate,
  IsOptional,
  IsString,
} from '@nestjs/class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  name: string;
  @IsOptional()
  @IsBoolean()
  isSafeCity: boolean;
  @IsOptional()
  @IsDate()
  lastVisitDate: Date;
  @IsOptional()
  qtyVisits: number;
  @IsOptional()
  @IsString()
  placesToVisit: string;
}
