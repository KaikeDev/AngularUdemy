import { Component, signal } from '@angular/core';

//Interface
import { iKnowledge } from '../../interface/iKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {

  public arrayKnowledge = signal<iKnowledge[]>([
      {
        src: 'assets/icons/knowledge/teste.svg', alt: 'Icone do HTML5'
      },
      {
        src: 'assets/icons/knowledge/css3.svg', alt: 'Icone do CSS3'
      },
      {
        src: 'assets/icons/knowledge/angular.svg', alt: 'Icone do Angular'
      },
      {
        src: 'assets/icons/knowledge/javascript.svg', alt: 'Icone do JavaScript'
      },
      {
        src: 'assets/icons/knowledge/nodejs.svg', alt: 'Icone do HTML5'
      },
  ])
}
