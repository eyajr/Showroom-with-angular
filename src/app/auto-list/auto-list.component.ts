import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Auto } from '../auto';


@Component({
  selector: 'app-auto-list',
  templateUrl: './auto-list.component.html',
  styleUrls: ['./auto-list.component.css']
})
export class AutoListComponent {
  @Input() autos:Auto[]=[]
  @Output() selectAutoEvent= new EventEmitter<Auto>();

  result:Auto[]=[]
  searchAutoList(textSearch:string) {
    this.result=this.autos.filter
    (auto=>auto.make.toUpperCase().includes(textSearch.toUpperCase()))

  }

  selectAuto(auto:Auto) {
    this.selectAutoEvent.emit(auto)

  }


}

