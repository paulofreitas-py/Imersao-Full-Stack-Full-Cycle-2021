import { Injectable } from '@nestjs/common';

export type Route = {
  title: String,
  startPosition: {"lat": String, "long": String},
  endPosition: {"lat": String, "long": String}
}
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getRoutes(): Route[] {
    let routes: Route[]

    routes = [
      {"title": "Rota1", "endPosition": {"lat": "-3.6818489", "long": "-40.3531322"}, "startPosition": {"lat": "-3.6832301", "long": "-40.3582713"}},
      {"title": "Rota2", "endPosition": {"lat": "-3.6859441", "long": "-40.3489733"}, "startPosition": {"lat": "-3.6859441", "long": "-40.3489733"}},
      {"title": "Rota3", "endPosition": {"lat": "-3.6846821", "long": "-40.3467328"}, "startPosition": {"lat": "-3.6846821", "long": "-40.3467328"}},
      {"title": "Rota4", "endPosition": {"lat": "-3.6839127", "long": "-40.3646872"}, "startPosition": {"lat": "-3.6868636", "long": "-40.3502397"}},
      {"title": "cred-detran", "endPosition": {"lat": "-3.6730546", "long": "-40.3680094"}, "startPosition": {"lat": "-3.6723767", "long": "-40.35526"}},
    ]

    return routes;
  }
}
