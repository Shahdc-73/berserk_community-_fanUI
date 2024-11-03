import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.css']
})
export class Section2Component {
  @Input() mainImageSrc: string = '';
  @Input() mainTitle: string = '';
  @Input() mainText: string = '';
  @Input() mainDate: string = '';

  @Input() secondaryCards: Array<{
    imgSrc: string,
    title: string,
    text: string,
    subtitle: string
  }> = [];
}
