import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { AssetType } from '@prisma/client';

export class CreateAssetDto {
  @IsString()
  @IsNotEmpty()
  symbol: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEnum(AssetType)
  type: AssetType;

  @IsString()
  @IsNotEmpty()
  country: string;
}