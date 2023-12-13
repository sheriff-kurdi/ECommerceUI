import {OnInit} from '@angular/core';
import {Component} from '@angular/core';
import {LayoutService} from './service/app.layout.service';

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

  model: any[] = [];

  constructor(public layoutService: LayoutService) {
  }

  ngOnInit() {
    this.model = [
      {
        label: 'Home',
        items: [
          {label: 'Inventory', icon: 'pi pi-fw pi-home', routerLink: ['/inventory']}
        ]
      },
      {
        label: 'Pages',
        icon: 'pi pi-fw pi-briefcase',
        items: [
          {
            label: 'Pages', icon: 'pi pi-fw pi-bookmark',
            items: [
              {label: 'Free Blocks', icon: 'pi pi-fw pi-eye', routerLink: ['/blocks'], badge: 'NEW'},

              {
                label: 'Landing',
                icon: 'pi pi-fw pi-globe',
                routerLink: ['/landing']
              },
              {
                label: 'Auth',
                icon: 'pi pi-fw pi-user',
                items: [
                  {
                    label: 'Login',
                    icon: 'pi pi-fw pi-sign-in',
                    routerLink: ['/auth/login']
                  },
                  {
                    label: 'Error',
                    icon: 'pi pi-fw pi-times-circle',
                    routerLink: ['/auth/error']
                  },
                  {
                    label: 'Access Denied',
                    icon: 'pi pi-fw pi-lock',
                    routerLink: ['/auth/access']
                  }
                ]
              },
              {
                label: 'Crud',
                icon: 'pi pi-fw pi-pencil',
                routerLink: ['/pages/crud']
              },
              {
                label: 'Timeline',
                icon: 'pi pi-fw pi-calendar',
                routerLink: ['/pages/timeline']
              },
              {
                label: 'Not Found',
                icon: 'pi pi-fw pi-exclamation-circle',
                routerLink: ['/notfound']
              },
              {
                label: 'Empty',
                icon: 'pi pi-fw pi-circle-off',
                routerLink: ['/pages/empty']
              },
            ]
          }

        ]
      },
      {
        label: 'Hierarchy',
        items: [
          {
            label: 'Submenu 1', icon: 'pi pi-fw pi-bookmark',
            items: [
              {
                label: 'Submenu 1.1', icon: 'pi pi-fw pi-bookmark',
                items: [
                  {label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark'},
                  {label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark'},
                  {label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark'},
                ]
              },
              {
                label: 'Submenu 1.2', icon: 'pi pi-fw pi-bookmark',
                items: [
                  {label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark'}
                ]
              },
            ]
          },
          {
            label: 'Submenu 2', icon: 'pi pi-fw pi-bookmark',
            items: [
              {
                label: 'Submenu 2.1', icon: 'pi pi-fw pi-bookmark',
                items: [
                  {label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark'},
                  {label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark'},
                ]
              },
              {
                label: 'Submenu 2.2', icon: 'pi pi-fw pi-bookmark',
                items: [
                  {label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark'},
                ]
              },
            ]
          }
        ]
      }
    ];
  }
}
