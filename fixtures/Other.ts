export class MyService {
  protected someThingElse: string[] = [];

  private url: string;

  public doCallService(endpoint: string): Record<number, string> {
    return {
      0: this.url,
      1: endpoint,
      2: "hello there!",
    };
  }
}
