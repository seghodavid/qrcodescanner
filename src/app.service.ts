import { Injectable } from '@nestjs/common';
import * as QRCode from 'qrcode';
import { URL } from './common/config/env.config';
import { Cron, Interval } from '@nestjs/schedule';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async generateCode(): Promise<any> {
    const movies = this.getMovies();
    const url = `http://localhost:3000/movies/list?movies=${encodeURIComponent(
      JSON.stringify(movies),
    )}`;

    const urlShown = Math.floor(Math.random() * url.length);
    const qr = await QRCode.toDataURL(url[urlShown]);

    console.log(qr);

    // 'http://localhost:3000/movies'

    return { qr };
  }

  @Interval(10000)
  handleInterval() {
    console.log('done');
    this.generateCode();
  }

  async getMovies(): Promise<any> {
    const movies = [
      {
        Title: 'Avatar',
        Year: '2009',
        Language: 'English, Spanish',
        Country: 'USA, UK',
        Type: 'movie',
      },
      {
        Title: 'I Am Legend',
        Year: '2007',
        Language: 'English',
        Country: 'USA',
        Type: 'movie',
      },
      {
        Title: '300',
        Year: '2006',
        Language: 'English',
        Country: 'USA',
        Type: 'movie',
      },
      {
        Title: 'The Avengers',
        Year: '2012',
        Language: 'English, Russian',
        Country: 'USA',
        Type: 'movie',
      },
      {
        Title: 'The Wolf of Wall Street',
        Year: '2013',
        Language: 'English, French',
        Country: 'USA',
        Type: 'movie',
      },
      {
        Title: 'Interstellar',
        Year: '2014',
        Language: 'English',
        Country: 'USA, UK',
        Type: 'movie',
      },
      {
        Title: 'Game of Thrones',
        Year: '2011–',
        Language: 'English',
        Country: 'USA, UK',
        Type: 'series',
      },
      {
        Title: 'Vikings',
        Year: '2013–',
        Language: 'English, Old English, Norse, Old, Latin',
        Country: 'Ireland, Canada',
        Type: 'series',
      },
      {
        Title: 'Gotham',
        Year: '2014–',
        Language: 'English',
        Country: 'USA',
        Type: 'series',
      },
      {
        Title: 'Power',
        Year: '2014–',
        Language: 'English',
        Country: 'USA',
        Type: 'series',
      },
      {
        Title: 'Narcos',
        Year: '2015–',
        Language: 'English, Spanish',
        Country: 'USA',
        Type: 'series',
      },
      {
        Title: 'Breaking Bad',
        Year: '2008–2013',
        Language: 'English, Spanish',
        Country: 'USA',
        Type: 'series',
      },
      {
        Title: 'Doctor Strange',
        Year: '2016',
        Language: 'English',
        Country: 'USA',
        Type: 'movie',
      },
      {
        ComingSoon: true,
        Title: 'Rogue One: A Star Wars Story',
        Year: '2016',
        Language: 'English',
        Country: 'USA',
        Type: 'movie',
      },
      {
        Title: "Assassin's Creed",
        Year: '2016',
        Language: 'English',
        Country: 'UK, France, USA, Hong Kong',
        Type: 'movie',
      },
      {
        Title: 'Luke Cage',
        Year: '2016–',
        Language: 'English',
        Country: 'USA',
        Type: 'series',
      },
    ];

    const arr = [];

    for (let i = 0; i < 10; i++) {
      const randomPick = Math.floor(Math.random() * movies.length);

      arr.push(movies[randomPick]);
    }

    return { arr };
  }
}
