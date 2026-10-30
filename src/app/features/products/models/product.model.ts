export interface ProductListResponse {
    message: string;
    success: boolean;
    data: Product[]; 
}

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;       
    discount: number;
    category: {
        id: string;      
        name: string;
        description: string;
    };
    images: string[];
    createdAt: string;   
    updatedAt: string;   
}


