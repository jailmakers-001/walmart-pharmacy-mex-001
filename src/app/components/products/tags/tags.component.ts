import { Component, Input, OnInit } from '@angular/core';
import { TagsTypes } from '@models/tagsTypes';
@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  @Input('tags-param') tags:any;
  tagsTypes: any = TagsTypes;
  constructor() { }

  ngOnInit(): void {
  }

}
