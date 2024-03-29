export type StoreCategory = {
    id: string;
    name: string;
}

export type Store = {
    id: string;
    name: string;
    description: string;
    color: string;
    categories: StoreCategory[];
}

export type Stores = Store[];