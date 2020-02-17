export interface Config {
  configStatus: string;
  date: number;
  configName: string;
  installMethod: string;
  nodes: Node[];
  installId?: string;

}

export interface Node {
  host: string;
  status: string;
  message: string;
}
