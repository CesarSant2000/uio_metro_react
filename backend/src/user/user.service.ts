import { Injectable } from '@nestjs/common'
import { User } from './user.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UpdateUserDto } from './dto/update-user'

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly _cityRepository: Repository<User>,
    ) {
    }

    findAll(): Promise<User[]> {
        return this._cityRepository.find({
            relations: ['country'],
        })
    }

    findById(id: number): Promise<User> {
        return this._cityRepository.findOne({
            where: {
                id: id,
            },
            relations: ['country'],
        })
    }

    delete(id: number): Promise<any> {
        return this._cityRepository.delete(id)
    }

    create(city: any): Promise<any> {
        return this._cityRepository.save(city)
    }

    update(id: number, city: UpdateUserDto): Promise<User> {
        return this._cityRepository.save({
            ...city,
            id,
        })
    }
}
