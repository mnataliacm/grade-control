import { Component } from '@angular/core';
import { isLowResolution as lowres} from 'src/app/utils/screen.utils';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  isLowResolution:()=>boolean = lowres;

  constructor() {}

}
