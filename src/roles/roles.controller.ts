import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AddRoleDto } from './dto/add-role.dto';
import { Role } from './roles.model';
import { RolesService } from './roles.service';

@ApiTags('Roles')
@Controller('roles')
export class RolesController {

    constructor(private roleService: RolesService) {}

    @ApiOperation({summary: 'Add new role'})
    @ApiResponse({status: 201, type: Role})
    @Post()
    addRole(@Body() addRoleDto: AddRoleDto) {
        
        return this.roleService.addRole(addRoleDto);
    }

    @ApiOperation({summary: 'Get role by value'})
    @ApiResponse({status: 200, type: Role})
    @Get('/:value')
    getRole(@Param('value') value: string) {
        
        return this.roleService.getRole(value);
    }
}
