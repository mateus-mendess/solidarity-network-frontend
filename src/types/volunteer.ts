export interface volunteer {
  cpf: string;
  name: string;
  lastName: string;
  birthday: string;
  gender: string;
  phone: string;
  profilePhoto: File | null;
  work: string;
  authorized: boolean;
  email: string;
  password: string;
  confirmPassword: string;
}