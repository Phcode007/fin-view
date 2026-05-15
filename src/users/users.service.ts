import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UsersService {
  constructor(private readonly dataBaseServices: DatabaseService) {}
  create(createUserDto: CreateUserDto) {
    return this.dataBaseServices.user.create({ data: createUserDto });
  }

  findAll() {
    return this.dataBaseServices.user.findMany();
  }

  findOne(id: string) {
    return this.dataBaseServices.user.findUnique({ where: { id } });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.dataBaseServices.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  remove(id: string) {
    return this.dataBaseServices.user.delete({ where: { id } });
  }
}
