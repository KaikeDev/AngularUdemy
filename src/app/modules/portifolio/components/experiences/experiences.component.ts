import { Component, signal } from '@angular/core';
import { IEExperiences } from '../../interface/IEExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {

  public arrayExperiences = signal<IEExperiences[]>([
    {
      summary: {
        strong: "Assistente Administrativo JR",
        p:"Maxtel | ABR 2023 - Present",
      },

      text: "<p>Na empresa nós vendemos planos de internet TIM para CNPJ, eu cuido da parte dos nossos consultores/parceiros. Então tenho como função tratar de todos os pedidos, e auxiliar os vendedores  na parte dos contratos, tirar dúvidas sobre determinados assuntos, e verificar como está os andamentos dos pedidos no sistema. Utilizar vários sistemas da TIM, por exemplo o RADAR, EASY VENDAS, TIM FIBRA.</p>"

    }
  ])

}
