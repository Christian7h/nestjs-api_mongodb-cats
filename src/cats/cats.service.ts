import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cat } from './schemas/cat.schema';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Injectable()
export class CatsService {
  constructor(@InjectModel(Cat.name) private catModel: Model<Cat>) {}

  async create(createCatDto: CreateCatDto): Promise<{ data: Cat }> {
    const createdCat = await this.catModel.create(createCatDto);
    return { data: createdCat };
  }

  async findAll(): Promise<{ data: Cat[] }> {
    const cats = await this.catModel.find().exec();
    return { data: cats };
  }

  async findOne(id: string): Promise<{ data: Cat }> {
    const cat = await this.catModel.findById(id).exec();
    if (!cat) throw new NotFoundException('Cat not found');
    return { data: cat };
  }

  async update(id: string, updateCatDto: UpdateCatDto): Promise<{ data: Cat }> {
    const updatedCat = await this.catModel.findByIdAndUpdate(id, updateCatDto, { new: true }).exec();
    if (!updatedCat) throw new NotFoundException('Cat not found');
    return { data: updatedCat };
  }

  async remove(id: string): Promise<{ message: string }> {
    const deletedCat = await this.catModel.findByIdAndDelete(id).exec();
    if (!deletedCat) throw new NotFoundException('Cat not found');
    return { message: 'Deleted successfully' };
  }
}
