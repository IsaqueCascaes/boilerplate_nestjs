import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProductService } from '../service/product.service';
import { CreateProductDto } from 'src/domain/dto/product/create-product.dto';
import { ApiCreateProductResponse } from '../decorator/create-product-response.decorator';
import { UpdateProductDto } from 'src/domain/dto/product/update-product.dto';
import { ApiUpdateProductResponse } from '../decorator/update-product-response.decorator';
import { ApiGetProductByIdResponse } from '../decorator/get-product-by-id-response.decorator';
import { ApiDeleteProductResponse } from '../decorator/delete-product-response.decorator';
import { ApiGetAllProductsResponse } from '../decorator/get-all-products-response.decorator';
import { FindAllProductsDto } from 'src/domain/dto/product/find-all-products.dto';
import { ApiFindAllProductsResponse } from '../decorator/find-all-products-response.decorator';
import { UseApiKeyAuth } from 'src/infrastructure/configuration/guards/decorator/api-key.decorator';

@ApiTags('products')
@UseApiKeyAuth()
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('/search')
  @ApiFindAllProductsResponse()
  async findAll(@Query() query: FindAllProductsDto) {
    return this.productService.findAll(query);
  }

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

  @Get(':id')
  @ApiGetProductByIdResponse()
  async getById(@Param('id') id: string) {
    return this.productService.getProductById(id);
  }

  @Delete(':id')
  @ApiDeleteProductResponse()
  async delete(@Param('id') id: string) {
    return this.productService.deleteProduct(id);
  }

  @Get()
  @ApiGetAllProductsResponse()
  async getAll() {
    return this.productService.getAllProducts();
  }
}
