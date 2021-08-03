import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() id: string;
  @Input() maxSize: number = 7;
  @Input()
  get directionLinks(): boolean {
    return this._directionLinks;
  }
  set directionLinks(value: boolean) {
    this._directionLinks = this.coerceToBoolean(value);
  }
  @Input()
  get autoHide(): boolean {
    return this._autoHide;
  }
  set autoHide(value: boolean) {
    this._autoHide = this.coerceToBoolean(value);
  }
  @Input()
  get responsive(): boolean {
    return this._responsive;
  }
  set responsive(value: boolean) {
    this._responsive = this.coerceToBoolean(value);
  }
  @Input() previousLabel: string = 'Anterior';
  @Input() nextLabel: string = 'Siguiente';
  @Input() screenReaderPaginationLabel: string = 'Pagination';
  @Input() screenReaderPageLabel: string = 'page';
  @Input() screenReaderCurrentLabel: string = `You're on page`;
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() pageBoundsCorrection: EventEmitter<number> = new EventEmitter<number>();

  private _directionLinks: boolean = true;
  private _autoHide: boolean = false;
  private _responsive: boolean = false;
  @Output() currentPage: EventEmitter<number> = new EventEmitter<number>();
  @Output() itemsPerPage: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  coerceToBoolean(input: string | boolean): boolean {
    return !!input && input !== 'false';
  }
  onPageChange(page: number) {
    this.currentPage.emit(page);
  }
  onItemsPerPageChange($event) {
    let selected = $event.srcElement.value;
    this.itemsPerPage.emit(selected);
  }

}
