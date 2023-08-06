import { ID, InputType, Field } from "@nestjs/graphql"



@InputType()
export class UpdateUserInput {
  
  @Field(() => ID)
  id: number

  @Field({nullable: true})
  email: string

  @Field({nullable: true})
  name: string
}