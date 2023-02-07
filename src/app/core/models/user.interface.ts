import { RolInterface } from "src/app/core/models/rol.interface";

export interface UserInterface {
    id: string;
    name: string;
    age: number;
    rols: RolInterface[];
}