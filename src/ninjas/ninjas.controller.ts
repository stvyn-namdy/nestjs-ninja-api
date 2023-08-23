import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Controller('ninjas')
export class NinjasController {

    // GET /ninjas?type=fast --> []
    @Get()
    getNinjas(@Query('type')type: string) {
        return [
            { type }
        ];
    }

    // GET /ninjas/:id --> { ... }
    @Get(':id')
    getOneNinja(@Param('id') id: string) {
    return {
        id
    };
    }

    // POST /ninjas
    @Post()
    createninja(@Body() createninjadto: CreateNinjaDto) {
        return {
            name: createninjadto.name
        };
    }

    // PUT /ninjas/:id --> { ... }
    @Put()
    updateNinja(@Param('id') id: string, @Body() updateNinjadto: UpdateNinjaDto) {
        return {
            id,
            name: updateNinjadto,
        };
    }

    // DELETE /ninjas/:id --> { ... }
    @Delete()
    removveNinja() {
        return {};
    }
    }
