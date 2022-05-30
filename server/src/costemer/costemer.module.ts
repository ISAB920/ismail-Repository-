import { Module } from "@nestjs/common";
import { CostemerModuleBase } from "./base/costemer.module.base";
import { CostemerService } from "./costemer.service";
import { CostemerController } from "./costemer.controller";
import { CostemerResolver } from "./costemer.resolver";

@Module({
  imports: [CostemerModuleBase],
  controllers: [CostemerController],
  providers: [CostemerService, CostemerResolver],
  exports: [CostemerService],
})
export class CostemerModule {}
