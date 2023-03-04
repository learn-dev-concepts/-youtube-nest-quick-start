import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { AnotherMiddleware } from './middlewares/another/another.middleware';
import { ExampleMiddleware } from './middlewares/example/example.middleware';
import { UsersService } from './services/users/users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ExampleMiddleware)
      .forRoutes('users')
      .apply(AnotherMiddleware)
      .forRoutes('users');
  }
}
