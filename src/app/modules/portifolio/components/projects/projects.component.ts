import { Component, inject, signal } from '@angular/core';
//interface
import { IProjects } from '../../interface/IProjects.interface';

//Material

import {MatDialog, MatDialogModule} from '@angular/material/dialog';

//Enum
import { EDialogFinalClass } from '../../enum/EDialogFinalClass.enum';

//Dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  #dialog  = inject(MatDialog);


  public arrayProjects = signal<IProjects[]>([


    {
      src: 'assets/img/projects/task-list.png',
      alt: 'Primeiro Projeto em angular',
      title: 'Angular Begginer',
      width: '100px',
      height: '51px',
      description: 'Explore o blog ',
      links: [
        {
          name: 'Conheça o meu projeto desenvolvido em Angular, onde explora uma kini API para controle de tarefas uma pessoa',
          href: 'https://kaikedev.github.io/Projeto-Lista-de-Tarefas/'
        }
      ]
    },
    {
      src: 'assets/img/projects/html.png',
      alt: 'Primeiro Projeto em angular',
      title: 'Angular Begginer',
      width: '100px',
      height: '51px',
      description: 'Explore o blog ',
      links: [
        {
          name: 'Conheça alguns projetos de FrondEnd desenvolvidos com HTML5 e CSS3',
          href: 'https://github.com/KaikeDev/FRONTENDPROJETOS'
        }
      ]
    },
    {
      src: 'assets/img/projects/jwt.png',
      alt: 'Primeiro com JWT em Angular',
      title: 'Angular Begginer',
      width: '100px',
      height: '51px',
      description: 'Explore o site ',
      links: [
        {
          name: 'Conheça um projeto desenvolvido utilizando uma API de autenticação JWT! Este projeto implementa autenticação segura com JSON Web Tokens (JWT), garantindo que apenas usuários autorizados possam acessar determinadas funcionalidades.',
          href: 'https://kaikedev.github.io/auth-front/'
        }
      ]
    },

    {
      src: 'assets/img/projects/pokeapi.png',
      alt: 'Primeiro com JWT em Angular',
      title: 'Angular Begginer',
      width: '100px',
      height: '51px',
      description: 'Explore o site ',
      links: [
        {
          name: 'Conheça um projeto Pokédex desenvolvido utilizando uma API de Pokémon! Esse projeto traz uma experiência interativa, permitindo explorar diferentes Pokémon com informações detalhadas, como características, habilidades e imagens',
          href: 'https://kaikedev.github.io/Pokedex/'
        }
      ]
    },


  ])

  public openDialog(data:IProjects){
    this.#dialog.open(DialogProjectsComponent, {
        data,
        panelClass: EDialogFinalClass.PROJECTS
    })
  }
}
