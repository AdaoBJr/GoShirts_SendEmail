export interface IResponseSubscribeNewslleter {
  subscribe: boolean;
}

interface IGoShirtsProvider {
  sendWelcomeNewsletter(email: string): Promise<IResponseSubscribeNewslleter>;
}

export { IGoShirtsProvider };
