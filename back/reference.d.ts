export {};

declare global {
  namespace DependencyInjection {
    function transform<T>(
      classType: new (...args: any[]) => T,
      injectorParams?: Record<string, any>
    ): new (...args: any[]) => T;

    function Inject(injectorParams?: Record<string, any>): {
      (target: new (...args: any[]) => any): void;
    };
  }
}
