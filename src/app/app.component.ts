import { Component, OnInit, Input } from '@angular/core';
import {ConfigService} from './config.service';
import {Config, Node} from './config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  constructor(private configService: ConfigService) {
  }

  title = 'Angular';
  public configs: Config[];
  public configStatus: string;
  configStatusArr: string[] = ['deleted', 'modified', 'not_changed'];
  installMethodArr: string[] = ['Replace'];
  public date: number;
  public configName: string;
  public installMethod: string;
  public nodeHost: string;
  public nodeStatus:string;
  public nodeMessage: string;
  public installId: string;
  editModal: boolean;


  ngOnInit() {
    this.getData();
  }

  getData() {
    this.configService.getConfig()
      .subscribe((resp: any) => {
        this.configs = resp;
      });
  }

  onConfigStatusChange(configStatus: string) {
    this.configStatus = configStatus;
    this.configStatusArr.includes(this.configStatus) ? null : this.configStatusArr.push(this.configStatus);
  }

  onDateChange(date: number) {
    this.date = date;
  }

  onConfigNameChange(configName: string) {
    this.configName = configName;
  }

  onInstallMethodChange(installMethod: string) {
    this.installMethod = installMethod;
    this.installMethodArr.includes(this.installMethod) ? null : this.installMethodArr.push(this.installMethod);
  }

  onNodeHostChange(nodeHost: string) {
    this.nodeHost = nodeHost;
  }

  onNodeStatusChange(nodeStatus: string) {
    this.nodeStatus = nodeStatus;
  }

  onNodeMessageChange(nodeMessage: string) {
    this.nodeMessage = nodeMessage;
  }

  onInstallIdChange(installId: string) {
    this.installId = installId;
  }
}

