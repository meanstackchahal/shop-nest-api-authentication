export class CreateProductDTO {
    readonly title: string; 
    readonly description: string;
    readonly price: string;
    readonly img_url: string;
    readonly created_at: Date;
}