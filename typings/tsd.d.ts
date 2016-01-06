/// <reference path="node/node.d.ts" />

declare module 'twitter' {
  export default class Twitter {
    constructor(options: {
      consumer_key: string,
      consumer_secret: string,
      access_token_key: string,
      access_token_secret: string
    });

    post(
      url: string,
      params: any,
      callback: (error: Error, data: any) => any
    ): void;
  }
}
