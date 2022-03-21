interface ICreateUserDTO {
  email: string;
  password: string;
  fisrtname: string;
  lastname: string;
  telephone: string;
  cpf: string;
  date_of_birth: string;
  gender: number;
  tokens?: Array<object>;
}

export { ICreateUserDTO };
