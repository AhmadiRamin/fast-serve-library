declare interface ISharedLibraryStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'SharedLibraryStrings' {
  const strings: ISharedLibraryStrings;
  export = strings;
}
