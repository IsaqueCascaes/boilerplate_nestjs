import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProductService } from '../service/product.service';
import { CreateProductDto } from 'src/domain/dto/product/create-product.dto';
import { ApiCreateProductResponse } from '../decorator/create-product-response.decorator';

@ApiTags('products')
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @ApiCreateProductResponse()
  async create(@Body() body: CreateProductDto) {
    return this.productService.create(body);
  }
}
