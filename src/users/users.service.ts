import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  // En TypeScript, la palabra clave private se utiliza para declarar una propiedad o método como privado dentro de una clase. Cuando una propiedad o método se declara como privado, solo puede ser accedido y utilizado dentro de la misma clase en la que se declaró.
  private users = [
    {
      id: 1,
      name: 'John Doe',
      phone: '123',
    },
    {
      id: 2,
      name: 'Jane Doe',
      phone: '456',
    },
    {
      id: 3,
      name: 'Alice',
      phone: '789',
    },
  ];

  getUsers() {
    // En TypeScript, la palabra clave this se utiliza para hacer referencia al objeto actual en el que se está ejecutando el código. Es una referencia al contexto en el que se encuentra el código en ese momento.
    return this.users;
  }
}
