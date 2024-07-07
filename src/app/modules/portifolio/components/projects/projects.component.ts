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
      src: 'assets/img/projects/vfull.png',
      alt: 'Primeiro Projeto em angular',
      title: 'Angular Begginer',
      width: '100px',
      height: '51px',
      description: 'Explore o blog ',
      links: [
        {
          name: 'Conheça o blog',
          href: 'https://vidafullstack.com.br'
        }
      ]
    },

    {
      src: 'assets/img/projects/vfull.png',
      alt: 'Primeiro Projeto em angular',
      title: 'Angular Begginer',
      width: '100px',
      height: '51px',
      description: 'Explore o blog ',
      links: [
        {
          name: 'Conheça o blog',
          href: 'https://vidafullstack.com.br'
        }
      ]
    },
    {
      src: 'assets/img/projects/vfull.png',
      alt: 'Primeiro Projeto em angular',
      title: 'Angular Begginer',
      width: '100px',
      height: '51px',
      description: 'Explore o blog ',
      links: [
        {
          name: 'Conheça o blog',
          href: 'https://vidafullstack.com.br'
        }
      ]
    },
    {
      src: 'assets/img/projects/vfull.png',
      alt: 'Primeiro Projeto em angular',
      title: 'Angular Begginer',
      width: '100px',
      height: '51px',
      description: 'Explore o blog ',
      links: [
        {
          name: 'Conheça o blog',
          href: 'https://vidafullstack.com.br'
        }
      ]
    },
    {
      src: 'assets/img/projects/vfull.png',
      alt: 'Primeiro Projeto em angular',
      title: 'Angular Begginer',
      width: '100px',
      height: '51px',
      description: 'Explore o blog ',
      links: [
        {
          name: 'Conheça o blog',
          href: 'https://vidafullstack.com.br'
        }
      ]
    },
    {
      src: 'assets/img/projects/vfull.png',
      alt: 'Primeiro Projeto em angular',
      title: 'Angular Begginer',
      width: '100px',
      height: '51px',
      description: 'Explore o blog ',
      links: [
        {
          name: 'Conheça o blog',
          href: 'https://vidafullstack.com.br'
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
