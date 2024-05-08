import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller({})
export class UsersController {
  //Una manera corta de hacer el constructor, para que este se llame apenas se instancia la clase, es una manera de importar el usersService en este caso.
  constructor(private usersService: UsersService) {}

  @Get('/users')
  getUsers() {
    return this.usersService.getUsers();
  }
}
