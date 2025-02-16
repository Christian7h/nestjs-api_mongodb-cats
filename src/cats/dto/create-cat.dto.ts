export class CreateCatDto {
  name: string;
  age: number;
  breed: string;
  color: string;
  weight: number;
  isVaccinated: boolean;
  owner?: {
    name: string;
    contact: string;
  };
}
