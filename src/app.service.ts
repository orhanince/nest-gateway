import { Inject, Injectable } from '@nestjs/common';
import { CreateUserRequest } from './create-user-request.dto';
import { CreateUser } from './create-user.event';
import { ClientProxy } from '@nestjs/microservices';
import { first, map } from 'rxjs';

@Injectable()
export class AppService {
  constructor(@Inject('USER') private readonly userService: ClientProxy) {}

  getHello(): string {
    return 'Hello World!';
  }

  createUser(createUserRequest: CreateUserRequest) {
    return this.userService
      .emit(
        'create_user',
        new CreateUser(createUserRequest.email, createUserRequest.password),
      )
      .toPromise();
  }
}
