import { getCustomRepository } from "typeorm";
import { Address } from "../../entities/Address";
import { AddressRepository } from "../../repositories/AddressRepository";

interface ICreateAddressRequest {
  user_id: string;
  address: string;
  county: string;
  cep: string;
  federative_unit: string;
  district: string;
  state: string;
  number: number;
}

export class CreateAddressService {
  async execute({
    user_id,
    address,
    county,
    cep,
    federative_unit,
    district,
    state,
    number,
  }: ICreateAddressRequest): Promise<Address> {
    const addressesRepository = getCustomRepository(AddressRepository);

    const addressCreated = addressesRepository.create({
      user_id,
      address,
      county,
      cep,
      federative_unit,
      district,
      state,
      number,
    });

    await addressesRepository.save(addressCreated);

    return addressCreated;
  }
}
