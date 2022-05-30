import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CostemerService } from "./costemer.service";
import { CostemerControllerBase } from "./base/costemer.controller.base";

@swagger.ApiTags("costemers")
@common.Controller("costemers")
export class CostemerController extends CostemerControllerBase {
  constructor(
    protected readonly service: CostemerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
