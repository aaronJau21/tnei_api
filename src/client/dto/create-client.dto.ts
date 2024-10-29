import { Found, Status } from '@prisma/client';
import {
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateClientDto {
  @IsNumber()
  @IsOptional()
  product_id: number;

  @IsNumber()
  @IsOptional()
  pack_id: number;

  @IsNumber()
  @IsOptional()
  cl_account_id: number;

  @IsString()
  @IsOptional()
  full_name: string;

  @IsString()
  @IsOptional()
  phone1: string;

  @IsString()
  @IsOptional()
  phone2: string;

  @IsString()
  @IsOptional()
  city_zip_code: string;

  @IsString()
  @IsOptional()
  date_ads: string;

  @IsString()
  @IsOptional()
  cities_job: string;

  @IsString()
  @IsOptional()
  service_list: string;

  @IsNumber()
  @IsOptional()
  sb_category_id: number;

  @IsNumber()
  @IsOptional()
  tean_guy_id: number;

  @IsString()
  @IsOptional()
  cl_main_area: string;

  @IsString()
  @IsOptional()
  cl_sub_area1: string;

  @IsString()
  @IsOptional()
  cl_sub_area2: string;

  @IsBoolean()
  @IsOptional()
  suscription: boolean;

  @IsNumber()
  @IsOptional()
  cl_category_id: number;

  @IsString()
  @IsOptional()
  cats: string;

  @IsString()
  @IsOptional()
  cl_name1: string;

  @IsString()
  @IsOptional()
  cl_name2: string;

  @IsString()
  @IsOptional()
  images_1_2_3_4: string;

  @IsString()
  @IsOptional()
  sus_cl_ads: string;

  @IsString()
  @IsOptional()
  su_serbiz_site: string;

  @IsString()
  @IsOptional()
  su_cuenta: string;

  @IsString()
  @IsOptional()
  pending_to_do: string;

  @IsEnum(Found)
  found: Found;

  @IsEnum(Status)
  status: Status;

  @IsString()
  @IsOptional()
  zip_code_1_2_3: string;

  @IsString()
  @IsOptional()
  business_title: string;

  @IsString()
  @IsOptional()
  notes_updates: string;

  @IsNumber()
  @IsOptional()
  user_id: number;
}
