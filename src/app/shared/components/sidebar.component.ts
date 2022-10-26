import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewerService } from '../../viewer/viewer.service';
import { Campaign, Log, Campaigns } from '../models/campaigns.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  campaigns = Campaigns;

  constructor(
    public viewerService: ViewerService,
    private router: Router,
  ) { }

  async ngOnInit() {
  }

  async view(campaign: Campaign, log: Log) {
    if (!(this.viewerService.curTitle === campaign.title && this.viewerService.curIndex === log.index)) {
      this.router.navigate([`/viewer/${campaign.title}/${log.index}`]);
      await this.viewerService.loadHtml(campaign, log);
    }
  }

}
