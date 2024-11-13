import { Component } from '@angular/core';
import CapturaPedidoComponent from "./formularios/captura-pedido/pedido.component";
import DetallePedidoComponent from "./formularios/detalle-pedido/detalle-pedido.component";
import VentasDiaComponent from "./formularios/ventas-dia/ventas-dia.component";
/*import FormularioClienteComponent from "./formularios/formulario-cliente/formulario-cliente.component";
import { FormularioPizzaComponent } from "./formularios/formulario-pizza/formulario-pizza.component";
import { DetallePedidoComponent } from "./formularios/detalle-pedido/detalle-pedido.component";*/

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CapturaPedidoComponent, DetallePedidoComponent, VentasDiaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pizzeria';
}