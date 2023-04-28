import { Module } from '@nestjs/common';
import { CatsResolver } from './cats.resolver';
import { CatsService } from './cats.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CatSchema } from './schemas/cat.schema';

@Module({
  imports:[
    MongooseModule.forFeature([{ name: 'Cat', schema: CatSchema}])

  ],
  providers: [CatsResolver, CatsService]
})
export class CatsModule {}
