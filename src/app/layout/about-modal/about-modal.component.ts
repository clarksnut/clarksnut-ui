import {
  Component,
  Renderer2,
  ViewChild,
  AfterViewInit,
  ViewEncapsulation
} from '@angular/core';

import { AboutService } from '../../shared/about.service';

@Component({
  selector: 'ofs-about-modal',
  templateUrl: './about-modal.component.html',
  styleUrls: ['./about-modal.component.scss']
})
export class AboutModalComponent implements AfterViewInit {

  @ViewChild('staticModal')
  staticModal: any;

  constructor(
    public about: AboutService,
    public renderer: Renderer2
  ) { }

  ngAfterViewInit() { }

  open() {
    this.staticModal.show();
  }

}
