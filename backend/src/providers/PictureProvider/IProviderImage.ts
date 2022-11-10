export interface IPictureProvider {
  generate(prompt: string): Promise<string>;
}
