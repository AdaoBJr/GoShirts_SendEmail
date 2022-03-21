import { Request } from 'express';

function parseRequestBody(request: Request) {
  const requestBody = request.body;

  const requestGraphQL = requestBody.input?.data || requestBody.input;
  const { email, firstname, lastname } = requestGraphQL || requestBody;
  const token = request.headers.authorization;

  return { token, email, firstname, lastname };
}

export { parseRequestBody };
