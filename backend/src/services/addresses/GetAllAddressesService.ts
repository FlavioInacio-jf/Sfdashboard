import { getCustomRepository } from "typeorm";
import { Address } from "../../entities/Address";
import { AddressRepository } from "../../repositories/AddressRepository";

interface IAllAddressesRequest {
  limit?: number;
  user_id: string;
}

export class GetAllAddressesService {
  async execute({
    user_id,
    limit = 8,
  }: IAllAddressesRequest): Promise<Address[]> {
    const addressesRepository = getCustomRepository(AddressRepository);

    const addresses = await addressesRepository.find({
      where: { user_id },
      select: [
        "id",
        "address",
        "cep",
        "county",
        "created_at",
        "district",
        "federative_unit",
        "number",
        "state",
      ],
      take: limit,
    });
    return addresses;
  }
}
