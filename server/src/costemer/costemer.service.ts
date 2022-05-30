import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { CostemerServiceBase } from "./base/costemer.service.base";

@Injectable()
export class CostemerService extends CostemerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
