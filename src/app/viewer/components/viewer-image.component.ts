import { Component, OnInit, Input } from '@angular/core';
import * as Axes from '@egjs/axes';

@Component({
  selector: 'app-viewer-image',
  templateUrl: './viewer-image.component.html',
  styleUrls: ['./viewer-image.component.scss'],
})
export class ViewerImageComponent implements OnInit {
  @Input() image: string = ``;
  axes: Axes.default = new Axes.default(
    {
      zoom: {
        startPos: 1,
        range: [0.1, 3],
      },
    },
  );
  imgzoom: string = 'scale(1)'

  constructor() {}

  ngOnInit() {
    this.axes.connect('zoom', new Axes.WheelInput('#imgarea', {
      scale: 0.1,
    }));
    this.axes.on('change', (e) => {
      this.imgzoom = `scale(${e.pos.zoom})`;
    });
  }
}
