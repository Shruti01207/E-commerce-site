export interface userCredentials {
    name: string;
    email: string;
    password: string;
}

export interface loginCredentials {
    email: string;
    password: string;

}

export interface productDetails {
    id:number;
    productName: string;
    productPrice: string;
    productColor: string;
    productCategory: string
    productDescription: string;
    productImage: string;

}