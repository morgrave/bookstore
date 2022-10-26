import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { Campaigns } from '../../shared/models/campaigns.model';
import { ViewerService } from '../viewer.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-viewer-playlog',
  templateUrl: './viewer-playlog.component.html',
  styleUrls: ['./viewer-playlog.component.scss']
})
export class ViewerPlaylogComponent implements OnInit {
  imgareaX = 0;
  imgareaY = 0;
  textareaWidth = '405px';
  textareaLastWidth = 405;
  textareaCurWidth = 405;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private router: Router,
    private route: ActivatedRoute,
    public viewerService: ViewerService,
  ) { }

  async ngOnInit() {
    this.route.params
      .pipe(take(1))
      .subscribe(async (params) => {
        if (!params['title']) {
          this.router.navigate([`/viewer/${Campaigns[0].title}/${Campaigns[0].logs[0].index}`]);
        }
        else if (!params['index']) {
          const title = params['title'];
          this.router.navigate([`/viewer/${title}/${Campaigns[0].logs[0].index}`]);
        }
        else {
          const campaign = Campaigns.find(x => x.title === params['title']);
          const log = params['index'] ? campaign?.logs.find(x => x.index === params['index']) : campaign?.logs[0];
          if (campaign && log) {
            await this.viewerService.loadHtml(campaign, log);
          }
        }
      });
  }

  onScroll(event: any) {
    const mid = document.getElementById('mid');
    if (mid) {
      let curIndex = 0;
      const curPos = (mid.getBoundingClientRect().top + mid.getBoundingClientRect().bottom) / 2;
      if (this.viewerService.curImages.length && !this.isMobile()) {
        this.viewerService.curImages.forEach((img, i) => {
          const div = document.getElementById(img.id);
          if (div) {
            const divPos = (div.getBoundingClientRect().top + div.getBoundingClientRect().bottom) / 2;
            if (curPos >= divPos) {
              curIndex = i;
            }
          }
        });
        this.viewerService.loadImage(curIndex);
      }
      if (this.viewerService.curInterfaces.length && !this.isMobile()) {
        this.viewerService.curInterfaces.forEach((img, i) => {
          const div = document.getElementById(img.id);
          if (div) {
            const divPos = (div.getBoundingClientRect().top + div.getBoundingClientRect().bottom) / 2;
            if (curPos >= divPos) {
              curIndex = i;
            }
          }
        });
        this.viewerService.loadInterface(curIndex);
      }
    }
  }

  saveLastPos() {
    const area = document.getElementById('imgarea');
    if (area) {
      this.imgareaX = area.scrollLeft;
      this.imgareaY = area.scrollTop;
    }
  }

  onPan(event) {
    const area = document.getElementById('imgarea');
    if (area) {
      area.scrollLeft = this.imgareaX - event.deltaX;
      area.scrollTop = this.imgareaY - event.deltaY;
    }
  }

  saveLastTextAreaWidth() {
    this.textareaLastWidth = this.textareaCurWidth;
  }

  expandTextArea(event) {
    this.textareaCurWidth = this.textareaLastWidth - event.deltaX;
    this.textareaWidth = `${this.textareaCurWidth}px`;
  }

  isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }
}
