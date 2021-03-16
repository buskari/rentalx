import { Router } from 'express';

import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';
import { SpecificationsRepository } from '../modules/cars/repositories/SpecificationsRepository';

const specificationsRoutes = Router();
const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post('/', (request, response) => {
  const { name, description } = request.body;
  const createSpecificaionService = new CreateSpecificationService(specificationsRepository);

  createSpecificaionService.execute({ name, description });

  return response.status(201).send();
})

specificationsRoutes.get('/', (request, response) => {
  const allSpecifications = specificationsRepository.list();
  return response.json(allSpecifications);
})

export { specificationsRoutes };