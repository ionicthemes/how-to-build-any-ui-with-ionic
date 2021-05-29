import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { createAnimation, Animation } from '@ionic/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements AfterViewInit {

  @ViewChild('animatedIcon', { read: ElementRef }) animatedIcon: ElementRef;

  public favStateOn = false;
  public favOnAnimation: Animation;
  public favOffAnimation: Animation;

  constructor() {}

  ngAfterViewInit() {
    this.favOnAnimation = createAnimation('')
    .addElement(this.animatedIcon.nativeElement)
    .duration(500)
    .keyframes([
      { offset: 0, transform: 'scale(1)', opacity: '0.4' },
      { offset: 0.5, transform: 'scale(1.8)', opacity: '0.8' },
      { offset: 1, transform: 'scale(1)', opacity: '1' },
    ]);

    this.favOffAnimation = createAnimation('')
    .addElement(this.animatedIcon.nativeElement)
    .duration(500)
    .keyframes([
      { offset: 0, transform: 'scale(0.8)', opacity: '0.4' },
      { offset: 0.5, transform: 'scale(0.5)', opacity: '0.8' },
      { offset: 1, transform: 'scale(1)', opacity: '1' }
    ]);
  }

  animate(): void {
    if (this.favStateOn) {
      this.favOnAnimation.stop();
      this.favOffAnimation.play();
    } else {
      this.favOffAnimation.stop();
      this.favOnAnimation.play();
    }
    this.favStateOn = !this.favStateOn;
  }
}
