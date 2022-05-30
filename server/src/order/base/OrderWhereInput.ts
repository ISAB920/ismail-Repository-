/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CostemerWhereUniqueInput } from "../../costemer/base/CostemerWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ProductListRelationFilter } from "../../product/base/ProductListRelationFilter";
@InputType()
class OrderWhereInput {
  @ApiProperty({
    required: false,
    type: () => CostemerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CostemerWhereUniqueInput)
  @IsOptional()
  @Field(() => CostemerWhereUniqueInput, {
    nullable: true,
  })
  costemer?: CostemerWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: FloatNullableFilter,
  })
  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  price?: FloatNullableFilter;

  @ApiProperty({
    required: false,
    type: () => ProductListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ProductListRelationFilter)
  @IsOptional()
  @Field(() => ProductListRelationFilter, {
    nullable: true,
  })
  products?: ProductListRelationFilter;
}
export { OrderWhereInput };
