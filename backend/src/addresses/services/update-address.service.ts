import { getCustomRepository } from "typeorm";
import { Address } from "../entities";
import { AppError } from "../../app";
import { AddressRepository } from "../repositories";

interface IUpdateAddressRequest {
  id: string;
  user_id: string;
  address: string;
  county: string;
  cep: string;
  federative_unit: string;
  district: string;
  state: string;
  number: number;
}

export class UpdateAddressService {
  async execute({
    id,
    user_id,
    address,
    county,
    cep,
    federative_unit,
    district,
    state,
    number,
  }: IUpdateAddressRequest): Promise<Address> {
    const addressesRepository = getCustomRepository(AddressRepository);

    const addressExists = await addressesRepository.findOne({ id, user_id });

    if (!addressExists) {
      throw new AppError("Address doesn't exist!", 404, `/addresses/${id}`);
    }

    addressExists.address = address || addressExists.address;
    addressExists.county = county || addressExists.county;
    addressExists.cep = cep || addressExists.cep;
    addressExists.federative_unit =
      federative_unit || addressExists.federative_unit;
    addressExists.district = district || addressExists.district;
    addressExists.state = state || addressExists.state;
    addressExists.number = number || addressExists.number;

    await addressesRepository.save(addressExists);

    return addressExists;
  }
}
