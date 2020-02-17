import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Config} from './config';
import {map} from 'rxjs/operators';

@Injectable()
export class ConfigService {
  configUrl = './assets/install_history.json';
  constructor(private http: HttpClient) { }
  public getConfig() {
    return this.http.get(this.configUrl);
  }
}
