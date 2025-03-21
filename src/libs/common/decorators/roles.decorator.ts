import { SetMetadata } from '@nestjs/common';
import { Role } from '../../../apps/user-service/enums/role.enum';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles); 