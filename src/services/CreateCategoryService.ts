import { CategoriesRepositories } from '../repositories/CategoryRepository'

interface IRequest {
    name: string,
    description: string
}

class CreateCategoryService {
    constructor(private categoriesRepository: CategoriesRepositories) {}

    execute({ description, name }: IRequest): void {
        const categoryAlreadyExists = this.categoriesRepository.findByName(name);

        if (categoryAlreadyExists) {
            throw new Error("Category already Exists");
        }

        this.categoriesRepository.create({ name, description });
    }

}

export { CreateCategoryService }