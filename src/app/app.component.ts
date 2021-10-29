import { Component } from '@angular/core';
import { ButtonViewComponent } from './button-view/button-view.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  name: string;

  constructor() {}

  settings = {
    columns: {
      id: {
        title: 'ID',
      },
      button: {
        title: 'Button',
        type: 'custom',
        renderComponent: ButtonViewComponent,
      },
    },
    actions: false,
  };

  data = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      button: 'Button #1',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      button: 'Button #2',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      button: 'Button #3',
    },
  ];
}

//https://hackernoon.com/angular-pro-tip-how-to-dynamically-create-components-in-body-ba200cc289e6
