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
import { ValidateNested, IsOptional, IsNumber } from "class-validator";
import { Type } from "class-transformer";
import { ProductCreateNestedManyWithoutOrdersInput } from "./ProductCreateNestedManyWithoutOrdersInput";
@InputType()
class OrderCreateInput {
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
  costemer?: CostemerWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  price?: number | null;

  @ApiProperty({
    required: false,
    type: () => ProductCreateNestedManyWithoutOrdersInput,
  })
  @ValidateNested()
  @Type(() => ProductCreateNestedManyWithoutOrdersInput)
  @IsOptional()
  @Field(() => ProductCreateNestedManyWithoutOrdersInput, {
    nullable: true,
  })
  products?: ProductCreateNestedManyWithoutOrdersInput;
}
export { OrderCreateInput };