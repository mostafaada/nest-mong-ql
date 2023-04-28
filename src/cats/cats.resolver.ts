import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CatType } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { CatInput } from './inputs/cat.input';




@Resolver()
export class CatsResolver {

    constructor(private readonly catService: CatsService){}


    @Query(() => String)
    async hello() // (@Query ('cat') cat: String)
    {
        return 'hello';

    }

    @Query( () => [CatType])
    async cats()
    {
        return this.catService.findAll();
    }

    @Mutation( () => CatType)
    async createCat(@Args('input') input: CatInput) {
        return this.catService.create(input);
    }

}
