import { getCustomRepository } from "typeorm";
import { AppError } from "../../errors/AppError";
import { Address } from "../entities";
import { AddressRepository } from "../repositories";

interface IDeleteAddressRequest {
  id: string;
  user_id: string;
}

export class DeleteAddressService {
  async execute({ id, user_id }: IDeleteAddressRequest): Promise<Address> {
    const addressesRepository = getCustomRepository(AddressRepository);

    const addressExists = await addressesRepository.findOne({ id, user_id });

    if (!addressExists) {
      throw new AppError("Address doesn't exist!", 404, `/addresses/${id}`);
    }

    await addressesRepository.delete({ id });
    return addressExists;
  }
}
