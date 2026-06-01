import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateAssetDto } from './dto/create-asset.dto';
import { UpdateAssetDto } from './dto/update-asset.dto';

@Injectable()
export class AssetsService {
  constructor(private readonly databaseService: DatabaseService) {}

  create(createAssetDto: CreateAssetDto) {
    return this.databaseService.asset.create({ data: createAssetDto });
  }

  findAll() {
    return this.databaseService.asset.findMany();
  }

  findOne(id: string) {
    return this.databaseService.asset.findUnique({ where: { id } });
  }

  update(id: string, updateAssetDto: UpdateAssetDto) {
    return this.databaseService.asset.update({
      where: { id },
      data: updateAssetDto,
    });
  }

  remove(id: string) {
    return this.databaseService.asset.delete({ where: { id } });
  }
}