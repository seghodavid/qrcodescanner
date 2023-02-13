"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const QRCode = require("qrcode");
const schedule_1 = require("@nestjs/schedule");
let AppService = class AppService {
    getHello() {
        return 'Hello World!';
    }
    async generateCode() {
        const movies = this.getMovies();
        const url = `http://localhost:3000/movies/list?movies=${encodeURIComponent(JSON.stringify(movies))}`;
        console.log(url);
        const urlShown = Math.floor(Math.random() * url.length);
        const qr = await QRCode.toDataURL(url[urlShown]);
        return { qr };
    }
    handleInterval() {
        console.log('done');
        this.generateCode();
    }
    async getMovies() {
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
};
__decorate([
    (0, schedule_1.Interval)(10000),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppService.prototype, "handleInterval", null);
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map