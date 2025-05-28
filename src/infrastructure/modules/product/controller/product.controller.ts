import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProductService } from '../service/product.service';
import { CreateProductDto } from 'src/domain/dto/product/create-product.dto';
import { ApiCreateProductResponse } from '../decorator/create-product-response.decorator';
import { UpdateProductDto } from 'src/domain/dto/product/update-product.dto';
import { ApiUpdateProductResponse } from '../decorator/update-product-response.decorator';

@ApiTags('products')
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @ApiCreateProductResponse()
  async create(@Body() body: CreateProductDto) {
    return this.productService.create(body);
  }

  @Put(':id')
  @ApiUpdateProductResponse()
  async update(@Param('id') id: string, @Body() body: UpdateProductDto) {
    return this.productService.updateProduct(id, body);
  }
}
