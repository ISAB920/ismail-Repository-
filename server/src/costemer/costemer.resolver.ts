import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { CostemerResolverBase } from "./base/costemer.resolver.base";
import { Costemer } from "./base/Costemer";
import { CostemerService } from "./costemer.service";

@graphql.Resolver(() => Costemer)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CostemerResolver extends CostemerResolverBase {
  constructor(
    protected readonly service: CostemerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
