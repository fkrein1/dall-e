export interface IStorageProvider {
  save(url: string): Promise<string>;
}
