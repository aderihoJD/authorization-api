"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.RolesController = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var roles_model_1 = require("./roles.model");
var RolesController = /** @class */ (function () {
    function RolesController(roleService) {
        this.roleService = roleService;
    }
    RolesController.prototype.addRole = function (addRoleDto) {
        return this.roleService.addRole(addRoleDto);
    };
    RolesController.prototype.getRole = function (value) {
        return this.roleService.getRole(value);
    };
    __decorate([
        swagger_1.ApiOperation({ summary: 'Add new role' }),
        swagger_1.ApiResponse({ status: 201, type: roles_model_1.Role }),
        common_1.Post(),
        __param(0, common_1.Body())
    ], RolesController.prototype, "addRole");
    __decorate([
        swagger_1.ApiOperation({ summary: 'Get role by value' }),
        swagger_1.ApiResponse({ status: 200, type: roles_model_1.Role }),
        common_1.Get('/:value'),
        __param(0, common_1.Param('value'))
    ], RolesController.prototype, "getRole");
    RolesController = __decorate([
        swagger_1.ApiTags('Roles'),
        common_1.Controller('roles')
    ], RolesController);
    return RolesController;
}());
exports.RolesController = RolesController;
