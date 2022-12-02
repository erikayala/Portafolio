import { Component, OnInit } from "@angular/core";
import { ProyectoService } from "../../services/proyecto.service";
import { Proyecto } from "../../Proyecto";

@Component({
  selector: "app-proyectos",
  templateUrl: "./proyectos.component.html",
  styleUrls: ["./proyectos.component.css"]
})
export class ProyectosComponent implements OnInit {
  proyectos!: Proyecto[];

  constructor(private proyectoService: ProyectoService) {}
  title = "Portafolio";
  ngOnInit(): void {
    this.proyectos = this.proyectoService.get_proyects();
  }
}
