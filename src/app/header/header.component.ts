import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  @Output() ancorClicked: EventEmitter<any> = new EventEmitter;

  onAncorClick(link:string){
    this.ancorClicked.emit();
  }
}
