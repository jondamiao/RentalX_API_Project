import { ICategoryRepository } from '../../repositories/ICategoriesRepository';

interface IRequest {
    name: string,
    description: string
}

class CreateCategoryUseCase {
    constructor(private categoriesRepository: ICategoryRepository) {}

    execute({ description, name }: IRequest): void {
        const categoryAlreadyExists = this.categoriesRepository.findByName(name);

        if (categoryAlreadyExists) {
            throw new Error("Category already Exists");
        }

        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryUseCase }