import { Injectable, Scope } from '@nestjs/common';

global.DependencyInjection = {
  transform<T>(
    classType: new (...args: any[]) => T,
    injectorParams = { scope: Scope.DEFAULT }
  ): new (...args: any[]) => T {
    return Reflect.decorate([Injectable(injectorParams)], classType) as new (
      ...args: any[]
    ) => T;
  },
  Inject(injectorParams = { scope: Scope.DEFAULT }) {
    return <T>(target: new (...args: any[]) => T) => {
      DependencyInjection.transform(target, injectorParams);
    };
  }
};
global.Queries = {} as any;
