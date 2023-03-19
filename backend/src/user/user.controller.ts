import {
    BadRequestException,
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    Param,
    ParseIntPipe,
    Post,
    Put,
} from '@nestjs/common'
import { UserService } from './user.service'
import { CreateUserDto } from './dto/create-user'
import { validate } from '@nestjs/class-validator'
import { UpdateUserDto } from './dto/update-user'

@Controller('city')
export class UserController {
    constructor(private readonly cityService: UserService) {
    }

    @Get()
    @HttpCode(200)
    async findAll() {
        return this.cityService.findAll()
    }

    @Get(':id')
    @HttpCode(200)
    async findById(@Param('id', ParseIntPipe) id: number) {
        return this.cityService.findById(id)
    }

    @Post()
    @HttpCode(201)
    async create(@Body() city: any) {
        const newCity = new CreateUserDto()
        newCity.name = city.name
        newCity.isSafeCity = city.isSafeCity
        newCity.lastVisitDate = new Date(city.lastVisitDate)
        newCity.placesToVisit = city.placesToVisit
        newCity.qtyVisits = parseInt(city.qtyVisits)
        newCity.country = city.country
        const errors = await validate(newCity)
        if (errors.length > 0) {
            console.error(errors)
            throw new BadRequestException({
                mensaje: 'Datos incorrectos',
            })
        }
        return this.cityService.create(city)
    }

    @Put(':id')
    @HttpCode(200)
    async update(@Body() city: any, @Param('id', ParseIntPipe) id: number) {
        const modifiedCity = new UpdateUserDto()
        modifiedCity.name = city.name
        modifiedCity.isSafeCity = city.isSafeCity
        modifiedCity.lastVisitDate = new Date(city.lastVisitDate)
        modifiedCity.placesToVisit = city.placesToVisit
        modifiedCity.qtyVisits = parseInt(city.qtyVisits)
        const errors = await validate(modifiedCity)
        if (errors.length > 0) {
            console.error(errors)
            throw new BadRequestException({
                mensaje: 'Datos incorrectos',
            })
        }
        return this.cityService.update(id, city)
    }

    @Delete(':id')
    @HttpCode(204)
    async delete(@Param('id', ParseIntPipe) id: number) {
        return this.cityService.delete(id)
    }
}
