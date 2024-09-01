import { LocationStrategy } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Campaign, Log } from '../shared/models/campaigns.model';

@Injectable()
export class ViewerService {
  headers = new HttpHeaders({
    'Content-Type': 'text/plain',
  });
  requestOptions: Object = {
    headers: this.headers,
    responseType: 'text',
  };
  scss: SafeHtml = ``;
  fvttscss: SafeHtml = ``;
  ccfoliascss: SafeHtml = ``;
  log: SafeHtml = ``;
  image: string = ``;
  interface: string = ``;
  baseHref = this.locationStrategy.getBaseHref();
  curTitle = ``;
  curIndex = ``;
  curVideo = ``;
  curImages: any[] = [];
  curInterfaces: any[] = [];
  assetSrc = environment.production
    ? `https://raw.githubusercontent.com/morgrave/bookshelf/main/src/campaigns`
    : `${this.baseHref}campaigns`;

  constructor(
    private locationStrategy: LocationStrategy,
    private http: HttpClient,
    private sanitizer: DomSanitizer
  ) {}

  async loadHtml(campaign: Campaign, log: Log) {
    this.log = ``;
    this.curTitle = campaign.title;
    this.assetSrc = environment.production
      ? campaign.assetSrc ??
        `https://raw.githubusercontent.com/morgrave/bookshelf/main/src/campaigns`
      : `${this.baseHref}campaigns`;
    this.curIndex = log.index;
    this.curImages = log.images ? log.images : [];
    this.curVideo = log.video ? log.video : ``;
    this.curInterfaces = log.interfaces ? log.interfaces : [];
    if (this.curImages.length) {
      this.loadImage(0);
    }
    if (this.curInterfaces.length) {
      this.loadInterface(0);
    }
    if (!this.scss) {
      await this.http
        .get<string>(`${this.baseHref}assets/common.scss`, this.requestOptions)
        .pipe(
          map((res) => {
            this.scss = this.sanitizer.bypassSecurityTrustHtml(res);
            return;
          })
        )
        .toPromise();
    }
    if (!this.fvttscss) {
      await this.http
        .get<string>(
          `${this.baseHref}assets/common.fvtt.scss`,
          this.requestOptions
        )
        .pipe(
          map((res) => {
            this.fvttscss = this.sanitizer.bypassSecurityTrustHtml(res);
            return;
          })
        )
        .toPromise();
    }
    if (!this.ccfoliascss) {
      await this.http
        .get<string>(
          `${this.baseHref}assets/common.ccfolia.scss`,
          this.requestOptions
        )
        .pipe(
          map((res) => {
            this.ccfoliascss = this.sanitizer.bypassSecurityTrustHtml(res);
            return;
          })
        )
        .toPromise();
    }
    const html = await this.http
      .get<string>(
        `${this.assetSrc}/${campaign.title}/logs/${
          log.index
        }.html`,
        this.requestOptions
      )
      .pipe(
        map((res) => {
          let log = res;
          if (campaign.platform === 'FVTT') {
            const regexp = new RegExp(
              `<h4 class="message-sender([^<]*)chat-portrait-text-size-name-dnd5e"([^<]*)>`,
              'gi'
            );
            log = log.replace(
              regexp,
              `<h4 class="message-sender chat-portrait-text-size-name">`
            );
            // log = log.replace(/src="/gi, `src="http://193.123.242.178/`);
          }
          log = campaign.npcs?.reduce((log, npc) => {
            if (campaign.platform === 'FVTT') {
              const regexp = new RegExp(
                `(<img([^<]+)<h4 class="message-sender chat-portrait-text-size-name">${npc.name}</h4>)`,
                'gi'
              );
              const regexp2 = new RegExp(
                `(<img([^<]+)<h4 class="message-sender chat-portrait-text-size-name-pf2e" style="align-self: center;">${npc.name}</h4>)`,
                'gi'
              );
              const regexp3 = new RegExp(
                `(<img([^<]+)<\/div>([^<]+)<h4 class="message-sender">${npc.name}<\/h4>)`,
                'gi'
              );
              return log.replace(
                regexp,
                `<img src="${this.baseHref}assets/images/${npc.avatar}" width="36" height="36" class="message-portrait" style="border: none"/><h4 class="message-sender chat-portrait-text-size-name">${npc.name}</h4>`
              ).replace(
                regexp2,
                `<img src="${this.baseHref}assets/images/${npc.avatar}" width="36" height="36" class="message-sender chat-portrait-text-size-name-pf2e" style="border: none;"/><h4 class="message-sender chat-portrait-text-size-name-pf2e" style="align-self: center;">${npc.name}</h4>`
              ).replace(
                regexp3,
                `<img src="${this.baseHref}assets/images/${npc.avatar}" width="36" height="36" class="message-sender chat-portrait-text-size-name-pf2e" style="border: none;"/></div><h4 class="message-sender">${npc.name}</h4>`
              );
            } else {
              const regexp = new RegExp(
                `<span class="by">${npc.name}:</span>*`,
                'gi'
              );
              return log.replace(
                regexp,
                `<div class="avatar" aria-hidden="true"><img src="${npc.avatar}"/></div><span class="by">${npc.name}:</span>`
              );
            }
          }, log);
          if (environment.production === true) {
            this.log = this.sanitizer.bypassSecurityTrustHtml(
              log.replace(
                campaign.platform === 'FVTT'
                  ? /data-message-id/gi
                  : /data-messageid/gi,
                `id`
              ) +
                `<style>${
                  campaign.platform === 'FVTT' ? this.fvttscss : (campaign.platform === 'ccfolia' ? this.ccfoliascss : this.scss)
                }</style>`
            );
          } else {
            this.log = this.sanitizer.bypassSecurityTrustHtml(
              log.replace(
                campaign.platform === 'FVTT'
                  ? /data-message-id="([\w]{16})"/gi
                  : /data-messageid="([-\w]{20})"/gi,
                `id="$1"><button onClick='const t = document.createElement("textarea");
            document.body.appendChild(t);
            t.value = "$1";
            t.select();
            document.execCommand("copy");
            document.body.removeChild(t);'>복사</button>`
              ) +
                `<style>${
                  campaign.platform === 'FVTT' ? this.fvttscss : (campaign.platform === 'ccfolia' ? this.ccfoliascss : this.scss)
                }</style>`
            );
          }
          return;
        })
      )
      .toPromise();
    return;
  }

  loadImage(index: number) {
    this.image = `${this.assetSrc}/${this.curTitle}/images/${this.curIndex}/${this.curImages[index].file}`;
  }

  loadInterface(index: number) {
    if (this.curInterfaces[index].file) {
      this.interface = `${this.assetSrc}/${this.curTitle}/images/${this.curIndex}/interfaces/${this.curInterfaces[index].file}`;
    } else {
      this.interface = ``;
    }
  }
}
