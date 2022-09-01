import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { AddRoleDto } from './dto/add-role.dto';
import { Role } from './roles.model';

@Injectable()
export class RolesService {

    constructor(@InjectModel(Role) private roleRepository: typeof Role) { }

    async addRole(newRole: AddRoleDto) {

        const role = await this.roleRepository.create(newRole);

        return role;
    }

    async getRole(value: string) {

        const role = await this.roleRepository.findOne({ where: { value } });

        return role;
    }
}
