import type { CategoryDTO } from "@/cases/categories/dtos/category.dto";

export interface ProductDto {
  id: string;
  name: string;
  description?: string | null;
  price: string | number; // numeric costuma vir como string
  active: boolean;
  picture?: string | null;
  category: CategoryDTO | null; // relacionamento com a categoria

}