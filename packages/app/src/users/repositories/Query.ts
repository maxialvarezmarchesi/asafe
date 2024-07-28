export class Query {

    private id: Number | null = null;


    public getId(): Number | null {
        return this.id;
    }

    public setId(value: Number | null): Query {
        this.id = value;
        return this;
    }



}