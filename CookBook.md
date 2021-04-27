# Nest CookBook

## Instalar cli

```
$ npm i -g @nestjs/cli
$ nest new project-name
```

## Estrutura básica

- `app.controller.ts`	Controller (ontem tem GET, POST)
- `app.controller.spec.ts` Testes 
- `app.module.ts` Modulo principal da app
- `app.service.ts`	Service que é injetado no controller
- `main.ts`	entry point

## Anatomia básica do controller

💻 `nest g controller nomeDoController`

```ts
import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CreateCatDto, UpdateCatDto, ListAllEntities } from './dto';

@Controller('cats')
export class CatsController {
  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }

  @Get()
  findAll(@Query() query: ListAllEntities) {
    return `This action returns all cats (limit: ${query.limit} items)`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
```



