import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ChangeDetectionStrategy
} from '@angular/core';
import {Flight} from '@flight-workspace/flight-api';

@Component({
  selector: 'flight-card',
  templateUrl: './flight-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlightCardComponent implements OnInit, OnChanges, OnDestroy {

  @Input() item: Flight;
  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();

  constructor(private element: ElementRef, private zone: NgZone) {
  }

  ngOnInit() {
    // setTimeout(() => this.selectedChange.next(true), 0);
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnDestroy(): void {
  }

  select() {
    this.selected = true;
    this.selectedChange.next(true);
  }

  deselect() {
    this.selected = false;
    this.selectedChange.next(false);
  }

  blink() {
    // Dirty Hack used to visualize the change detector
    // let originalColor = this.element.nativeElement.firstChild.style.backgroundColor;
    this.element.nativeElement.firstChild.style.backgroundColor = 'crimson';
    //              ^----- DOM-Element

    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        this.element.nativeElement.firstChild.style.backgroundColor = 'white';
      }, 1000);
    });

    return null;
  }


}

