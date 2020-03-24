import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent implements OnInit {

  public activeMenu:string = "";

  constructor(private layoutService: LayoutService) { }

  ngOnInit() {
  }

  openItem(item:string){
    if(this.activeMenu == item){
      this.activeMenu = "";
    } else {
      this.activeMenu = item;
    }
  }

  toggleSmallMenu(){
    this.layoutService.toggleLeftBar();
  }
}
