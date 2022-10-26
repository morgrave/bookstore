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
  }

}
