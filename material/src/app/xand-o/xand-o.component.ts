import { Component, OnInit } from '@angular/core';
import { count } from 'rxjs/operators';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-xand-o',
  templateUrl: './xand-o.component.html',
  styleUrls: ['./xand-o.component.css']
})
export class XandOComponent implements OnInit {
  public Plays = [];
  private strX: string = "X";//IT IS PLAYER COPMUTER
  private strO: string = "O";
  private countClick: number = 0;

  public sMsgWinner: string = "none";
  constructor(private router: Router) {
    

  }


  ngOnInit() {
    debugger;
    $('.toast').toast('show');
    for (var i = 0; i < 9; i++) {
      this.Plays.push({
        play: "",
        index: i,
        disabled: false

      });
    }
    

  }
  onClickToChooes(event, index) {
    this.countClick++;
    console.log(index);
    if (this.Plays[index].play === "") {
      this.Plays[index].play = this.strX;
      this.Plays[index].disabled = true;
    }
    
    var nCoputerChooes = this.getChooesComputer();
  
      this.Plays[nCoputerChooes].play = this.strO;
      this.Plays[nCoputerChooes].disabled = true;
    
    this.sMsgWinner = this.whoWinner();
    //console.log(sWinner);
    //debugger;
    //if (sWinner != "none") {
    //  //alert(sWinner);

    //}
  }
  getChooesComputer() {
    debugger;
    var bFlag = true;
    
    while (bFlag && this.countClick < 5) {
      var nCoputerChooes = Math.floor(Math.random() * 9);
     
      if (this.Plays[nCoputerChooes].play === "") {
        console.log(nCoputerChooes);
        bFlag = false;
        return nCoputerChooes;
      }
      else {
        bFlag = true;
      }
    }
    

  }
  onPlayAgin() {
   
    //this.router.navigate(['XandO']);
    //this.ngOnInit();
    
  }
  onGoToHome() {
    this.router.navigate(['']);
  }

  
  whoWinner() {
    //chek the index in 4 this is flag that can be winner
    //2 6 || 0 8
    //you winner
    //3 5 || 1 7
    //you winner

    //012 || 678  ||036 || 258

   


     //chek the index in 4 this is flag that can be winner
    //2 6 || 0 8
    //you winner
    //3 5 || 1 7
    //you winner

    if (!!this.Plays[4].play) {

      if (this.Plays[4].play === this.strO) {
        if ((this.Plays[2].play === this.strO && this.Plays[6].play === this.strO) || (this.Plays[0].play === this.strO && this.Plays[8].play === this.strO)) {

          return this.strO;
        }
        if ((this.Plays[3].play === this.strO && this.Plays[5].play === this.strO) || (this.Plays[1].play === this.strO && this.Plays[7].play === this.strO)) {

          return this.strO;
        }
      }
      if (this.Plays[4].play === this.strX) {
        if ((this.Plays[2].play === this.strX && this.Plays[6].play === this.strX) || (this.Plays[0].play === this.strX && this.Plays[8].play === this.strX)) {

          return this.strX;
        }
        if ((this.Plays[3].play === this.strX && this.Plays[5].play === this.strX) || (this.Plays[1].play === this.strX && this.Plays[7].play === this.strX)) {

          return this.strX;
        }
      }


    }
    //012

    if (!!this.Plays[0].play && !!this.Plays[1].play && !!this.Plays[2].play) {
      if (this.Plays[0].play === this.strO && this.Plays[1].play === this.strO && this.Plays[2].play === this.strO) {
        return this.strO;
      }

      if (this.Plays[0].play === this.strX && this.Plays[1].play === this.strX && this.Plays[2].play === this.strX) {
        return this.strX;
      }


    }


    //678

    if (!!this.Plays[6].play && !!this.Plays[7].play && !!this.Plays[8].play) {
      if (this.Plays[6].play === this.strO && this.Plays[7].play === this.strO && this.Plays[8].play === this.strO) {
        return this.strO;
      }

      if (this.Plays[6].play === this.strX && this.Plays[7].play === this.strX && this.Plays[8].play === this.strX) {
        return this.strX;
      }


    }


    //036
    if (!!this.Plays[0].play && !!this.Plays[3].play && !!this.Plays[6].play) {
      if (this.Plays[0].play === this.strO && this.Plays[3].play === this.strO && this.Plays[6].play === this.strO) {
        return this.strO;
      }

      if (this.Plays[0].play === this.strX && this.Plays[3].play === this.strX && this.Plays[6].play === this.strX) {
        return this.strX;
      }


    }


    //258

    if (!!this.Plays[2].play && !!this.Plays[5].play && !!this.Plays[8].play) {
      if (this.Plays[2].play === this.strO && this.Plays[5].play === this.strO && this.Plays[8].play === this.strO) {
        return this.strO;
      }

      if (this.Plays[2].play === this.strX && this.Plays[5].play === this.strX && this.Plays[8].play === this.strX) {
        return this.strX;
      }


    }


    
    return "none";



  }


}
