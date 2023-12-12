import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Input, Inject } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-viewer-text',
  templateUrl: './viewer-text.component.html',
  styleUrls: ['./viewer-text.component.scss']
})
export class ViewerTextComponent implements OnInit {
  @Input() log: SafeHtml = ``;

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit() {
    let node = document.createElement('script');
    node.dataset["repo"]="morgrave/xperion"
    node.dataset["repoId"]="R_kgDOIl1gMg"
    node.dataset["category"]="General"
    node.dataset["categoryId"]="DIC_kwDOIl1gMs4CbrQG"
    node.dataset["mapping"]="pathname"
    node.dataset["strict"]="0"
    node.dataset["reactionsEnabled"]="0"
    node.dataset["emitMetadata"]="0"
    node.dataset["inputPosition"]="bottom"
    node.dataset["theme"]="preferred_color_scheme"
    node.dataset["lang"]="ko"
    node.src = "https://giscus.app/client.js";
    node.type = 'text/javascript';
    node.async = true;
    document.getElementsByClassName('comment')[0].appendChild(node);
  }

}
