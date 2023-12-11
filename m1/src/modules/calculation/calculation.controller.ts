import {Body, Controller, Post} from '@nestjs/common';
import {CalculateDto} from "./dto/calculateDto";
import {CalculationService} from "./calculation.service";
import {Observable} from "rxjs";

@Controller('calculation')
export class CalculationController {
    constructor(private readonly calculationService: CalculationService) {}

    @Post()
    async calculate(@Body() body:CalculateDto): Promise<Observable<number>> {
        return this.calculationService.calculate(body);
    }
}
