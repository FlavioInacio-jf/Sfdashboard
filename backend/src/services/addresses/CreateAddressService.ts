import { getCustomRepository } from "typeorm";
import { Address } from "../../entities/Address";
import { AppError } from "../../errors/AppError";
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
    const addressesCount = await addressesRepository.count({ user_id });

    if (addressesCount > 2) {
      throw new AppError(
        "The limit of registered addresses has been reached. A user can only have a maximum of 3 addresses!",
        409,
        "/addresses",
      );
    }

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
