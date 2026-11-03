
export interface CategoryFieldsType{
    id : string,
    name : string,
    description : string
}

export interface CategoryResponse{
    data: CategoryFieldsType[],
    success: false,
    message: string
}


export interface ProductFilterCriteria {
    categoryIds: string[],
    minPrice: string,
    maxPrice: string,
    rating: string | null
}
