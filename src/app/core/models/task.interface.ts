import { UserInterface } from "./user.interface";

export interface TaskInterface {
    id: string | number; //string o numero
    title: string;
    tags: string[]; // array de string, tambien se puede colocar asi: Array<string>
    user: UserInterface;
    status: 'En progreso' | 'Completado' | 'No iniciado'; //string	
}