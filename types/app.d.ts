declare global {
  declare type Url = string;
  declare type Id = string;

  /**
   * FSD
   *
   * Its hack way to export redux infering types from @/app
   * and use it in @/shared/model/hooks.ts
   */
  declare type RootState =
    import('../src/app/providers/store/config/appStore').RootState;
  declare type AppDispatch =
    import('../src/app/providers/store/config/appStore').AppDispatch;
}

export {};
