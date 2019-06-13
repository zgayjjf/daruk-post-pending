declare module 'http' {
  interface IncomingMessage {
    files: any;
  }
}