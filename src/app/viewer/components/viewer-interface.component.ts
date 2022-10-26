import { Component, OnInit, Input, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common'; 

@Component({
  selector: 'app-viewer-interface',
  templateUrl: './viewer-interface.component.html',
  styleUrls: ['./viewer-interface.component.scss']
})
export class ViewerInterfaceComponent implements OnInit {
  @Input() interface: string = ``;
  interfaceareaX = 0;
  interfaceareaY = 0;
  interfacestartX = 0;
  interfacestartY = 0;

  constructor(
    @Inject(DOCUMENT) private document: any,
  ) { }

  ngOnInit() {
  }

  saveLastInterfacePos() {
    this.interfacestartX = this.interfaceareaX;
    this.interfacestartY = this.interfaceareaY;
  }
  
  onInterfacePan(event) { 
    const area = document.getElementById('interfacearea');
    if (area) {
      this.interfaceareaX = this.interfacestartX + event.deltaX;
      this.interfaceareaY = this.interfacestartY + event.deltaY;
      area.style.left = `${this.interfaceareaX}px`;
      area.style.top = `${this.interfaceareaY}px`;
    }
  }

}
