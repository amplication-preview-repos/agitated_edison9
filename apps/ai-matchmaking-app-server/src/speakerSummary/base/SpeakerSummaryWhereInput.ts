/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { JsonFilter } from "../../util/JsonFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { StringFilter } from "../../util/StringFilter";
import { SpeakerWhereUniqueInput } from "../../speaker/base/SpeakerWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

@InputType()
class SpeakerSummaryWhereInput {
  @ApiProperty({
    required: false,
    type: JsonFilter,
  })
  @Type(() => JsonFilter)
  @IsOptional()
  @Field(() => JsonFilter, {
    nullable: true,
  })
  embeddings?: JsonFilter;

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
    type: () => SpeakerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SpeakerWhereUniqueInput)
  @IsOptional()
  @Field(() => SpeakerWhereUniqueInput, {
    nullable: true,
  })
  speaker?: SpeakerWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  summary?: StringNullableFilter;
}

export { SpeakerSummaryWhereInput as SpeakerSummaryWhereInput };