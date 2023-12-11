import { Module } from '@nestjs/common';
import { CalculationModule } from "./modules/calculation/calculation.module";
import {ClientsModule, Transport} from "@nestjs/microservices";

@Module({
  imports: [CalculationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
