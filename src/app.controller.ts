import { Controller, Get, Header, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Get('/qr')
  @Header('Refresh', '10')
  @Render('qr')
  generateCode(): any {
    return this.appService.generateCode();
  }

  @Get('/movies')
  @Render('movies')
  getMovies(): any {
    return this.appService.getMovies();
  }
}
