import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { RolesService } from '../roles/roles.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userRepository: typeof User,
        private roleService: RolesService) { }

    async createUser(newUser: CreateUserDto) {

        const user = await this.userRepository.create(newUser);

        const role = await this.roleService.getRole('USER');

        await user.$set('roles', [role.id]);

        return user;

    }

    async getAllUsers() {

        const users = await this.userRepository.findAll({ include: { all: true } });

        return users;
    }

}
