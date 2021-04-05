import { AfterViewInit, Component, OnInit, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit, AfterViewInit {

  constructor() { }

  keyEvent:String | undefined
  @ViewChild('info1') info1ElementRef: ElementRef | undefined;
  @ViewChild('terminalBarEndText') terminalBarEndTextElementRef: ElementRef | undefined;
  @ViewChild('terminalbar') terminalbarElementRef: ElementRef | undefined;
  @ViewChild('terminalbar2') terminalbar2ElementRef: ElementRef | undefined;

  onKeyPress(event:any) {
    if(event.key == "Enter") {
      this.keyEvent = "Enter"
      this.info1ElementRef!.nativeElement.style.display = "block"

      //Clone
      let cloneTerminalBar = this.terminalbarElementRef!.nativeElement.cloneNode(true)
      this.terminalbar2ElementRef!.nativeElement.appendChild(cloneTerminalBar)
      this.terminalbar2ElementRef!.nativeElement.element.querySelector('.terminalBarEndText').innerHTML = "Bingo!"
      // this.terminalBarEndTextElementRef!.nativeElement.innerHTML = ""
      // this.terminalBarEndTextElementRef!.nativeElement.innerHTML = "Hello"

    }
  }

  ngAfterViewInit(): void {
    // this.terminalBarEndTextElementRef!.nativeElement.innerHTML = "Welcome. Press Enter to continue..."
  }

  ngOnInit(): void {
  }

}
