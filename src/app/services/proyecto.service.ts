import { Injectable } from "@angular/core";
import { Proyecto } from "../Proyecto";
import { proyectos } from "../Datos";

@Injectable({
  providedIn: "root"
})
export class ProyectoService {
  portfolio: Proyecto[] = proyectos;

  constructor() {}

  get_proyects(): Proyecto[] {
    return this.portfolio;
  }

  get_proyect(id: number): Proyecto | undefined {
    return this.portfolio.find((r) => r.id === id);
  }
}
