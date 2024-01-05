import { Body, Controller, Get, Param, Patch, Post, Res } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get()
  findAll(@Res() response) {
    return response.status(200).json({ message: 'listagem de cursos' });
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `listagem do curso ${id}`;
  }

  @Post()
  create(@Body() body) {
    //@HttpCode(204) em cima do @Post para personalizar o statuscode
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `Curso de id:${id}, foi atualizado ${body}`;
  }
}
