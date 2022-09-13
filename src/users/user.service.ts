import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }

  getUserPhoneNumberForList(records: User[]): string[] {
    return records.map((user) => '0123456789');
  }

  validatePhoneNumber(_: string) {
    return true;
  }

  async updateFirstName(id: number, firstname: string): Promise<Object> {
    const user = await this.usersRepository.findOneBy({ id });
    user.firstname = firstname.toUpperCase();
    return this.usersRepository.save({
      ...user,
    });
  }
}
