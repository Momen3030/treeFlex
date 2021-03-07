import { Component, Element, EventEmitter, h, Prop, State,Event } from '@stencil/core';

@Component({
  tag: 'treeflex-map',
  styleUrl: 'treeflex-map.css',
  shadow: true,
})
export class TreeflexMap {
  @Element() el:HTMLElement;
@Prop() nodeLevelTwoNumber:number;
@Prop() nodeLevelTwoFirstNumber:number;
@Prop() nodeLevelTwoSecondNumber:number;
@Prop() nodeLevelTwoThirdNumber:number;
@Prop() nodeLevelTwoFourthNumber:number;
@Prop() nodeLevelTwoFifthNumber:number;
// @Prop() levelTwoFirst:string[];
@Prop() parent:string;
@Prop({reflect:true}) nodeColor:string="";
@Prop() textColor:string;

nodeLevelTwo:any[]=[1,2,3,4,5];
nodeLevelTwoFirst:any[]=[1,2,3,4,5];
nodeLevelTwoSecond:any[]=[1,2,3,4,5];
nodeLevelTwoThird:any[]=[1,2,3,4,5];
nodeLevelTwoFourth:any[]=[1,2,3,4,5];
nodeLevelTwoFifth:any[]=[1,2,3,4,5];
//level 3
@Prop() nodeLevelThreeFirstNumber:number;
       nodeLevelThreeFirst:any[]=[1,2,3,4,5];

@Prop() nodeLevelThreeFirstSecondNumber:number;
       nodeLevelThreeFirstSecond:any[]=[1,2,3,4,5];
@Prop() nodeLevelThreeSecondFirstNumber:number;
nodeLevelThreeSecondFirst:any[]=[1,2,3,4,5];


@Prop() nodeLevelThreeSecondSecondNumber:number;
nodeLevelThreeSecondSecond:any[]=[1,2,3,4,5]
// nodeLevelTwoFirst:any[]=[1,2,3,4,5];

@Prop() levelTwo: string;
@State() internallevelTwo:any[];


@Prop() levelTwoFirst: string;
@State() internallevelTwoFirst:any[];

@Prop() levelTwoSecond: string;
@State() internallevelTwoSecond:any[];
///3
@Prop() levelThreeFirst: string;
@State() internallevelThreeFirst:any[];

@Prop() levelThreeFirstSecond: string;
@State() internallevelThreeFirstSecond:any[];


@Prop() levelThreeSecondFirst: string;
@State() internallevelThreeSecondFirst:any[];


@Prop() levelThreeSecondSecond: string;
@State() internallevelThreeSecondSecond:any[];




@Prop() content: string;
@State() satate: any[] = [];
@Event() updateSatisfiedEvent: EventEmitter<any>;

allClicked(ind){
    // const obj2=this.satate.find((o)=>o.index==ind);
    const obj2 = this.satate.findIndex((o) => o.index == ind);
    this.satate[obj2]["clicked"] = true;
    // console.log(obj2);
    // console.log(this.satate);
    if (this.satate.every((ox) => ox.clicked)) {

      this.updateSatisfiedEvent.emit(this.content)

      console.log("All clicked");

    }
}

private getContent(): any {

  const con = JSON.parse(this.content);
  return con.attributes;
}


constructor(){
this.internallevelTwo=this.getContent()?.levelTwo;
this.internallevelTwoFirst=this.getContent()?.levelTwoFirst;
this.internallevelTwoSecond=this.getContent()?.levelTwoSecond;
this.internallevelThreeFirst=this.getContent()?.levelThreeFirst;
this.internallevelThreeFirstSecond=this.getContent()?.levelThreeFirstSecond;
this.internallevelThreeSecondFirst=this.getContent()?.levelThreeSecondFirst;
this.internallevelThreeSecondSecond=this.getContent()?.levelThreeSecondSecond;


 if(this.getContent().nodeLevelTwoNumber!=null){

if ( this.nodeLevelTwo.length!=this.getContent().nodeLevelTwoNumber) {
  let slice = this.nodeLevelTwo.length - this.getContent().nodeLevelTwoNumber;
  this.nodeLevelTwo.splice(0, slice);
  if (this.getContent().nodeLevelTwoNumber == 1) {
    this.nodeLevelTwo.length = 0;
    this.nodeLevelTwo.push({m:(this.internallevelTwo[0]?this.internallevelTwo[0]:'')})
  }
else if (this.getContent().nodeLevelTwoNumber == 2) {
  this.nodeLevelTwo.length = 0;
  this.nodeLevelTwo.push({m:(this.internallevelTwo[0]?this.internallevelTwo[0]:'')},{m:(this.internallevelTwo[1]?this.internallevelTwo[1]:'')});
}


else if (this.getContent().nodeLevelTwoNumber == 3) {
  this.nodeLevelTwo.length = 0;
  this.nodeLevelTwo.push({m:(this.internallevelTwo[0]?this.internallevelTwo[0]:'')},{m:(this.internallevelTwo[1]?this.internallevelTwo[1]:'')},{m:(this.internallevelTwo[2]?this.internallevelTwo[2]:'')});
  // console.log(this.nodeLevelTwo);

}

else if (this.getContent().nodeLevelTwoNumber == 4) {
  this.nodeLevelTwo.length = 0;
  this.nodeLevelTwo.push({m:(this.internallevelTwo[0]?this.internallevelTwo[0]:'')},{m:(this.internallevelTwo[1]?this.internallevelTwo[1]:'')}
  ,{m:(this.internallevelTwo[2]?this.internallevelTwo[2]:'')},{m:(this.internallevelTwo[3]?this.internallevelTwo[3]:'')});
  // console.log(this.nodeLevelTwo);

}

}else{
  this.nodeLevelTwo.length = 0;
  this.nodeLevelTwo.push({m:(this.internallevelTwo[0]?this.internallevelTwo[0]:'')},{m:(this.internallevelTwo[1]?this.internallevelTwo[1]:'')}
  ,{m:(this.internallevelTwo[2]?this.internallevelTwo[2]:'')},
  {m:(this.internallevelTwo[3]?this.internallevelTwo[3]:'')},
  {m:(this.internallevelTwo[4]?this.internallevelTwo[4]:'')}
  );
  // console.log(this.nodeLevelTwo);

}


}
else{
// alert("dsd")
this.nodeLevelTwo.length = 0;
// this.nodeLevelTwo.push(0);
// console.log(this.nodeLevelTwo);

}

/////// node level Two First /////////////////
if(this.getContent().nodeLevelTwoFirstNumber!=null){
if ( this.nodeLevelTwoFirst.length!=this.getContent().nodeLevelTwoFirstNumber) {
if (this.getContent().nodeLevelTwoFirstNumber == 1) {
  this.nodeLevelTwoFirst.length = 0;
  this.nodeLevelTwoFirst.push({m:(this.internallevelTwoFirst[0]?this.internallevelTwoFirst[0]:'')})

}
else if (this.getContent().nodeLevelTwoFirstNumber == 2) {
this.nodeLevelTwoFirst.length = 0;
this.nodeLevelTwoFirst.push({m:(this.internallevelTwoFirst[0]?this.internallevelTwoFirst[0]:'')},{m:(this.internallevelTwoFirst[1]?this.internallevelTwoFirst[1]:'')});
// console.log(this.internallevelTwoFirst);
}


else if (this.getContent().nodeLevelTwoFirstNumber == 3) {
this.nodeLevelTwoFirst.length = 0;
this.nodeLevelTwoFirst.push({m:(this.internallevelTwoFirst[0]?this.internallevelTwoFirst[0]:'')},{m:(this.internallevelTwoFirst[1]?this.internallevelTwoFirst[1]:'')},{m:(this.internallevelTwoFirst[2]?this.internallevelTwoFirst[2]:'')});
// console.log(this.internallevelTwoFirst);

}

else if (this.getContent().nodeLevelTwoFirstNumber == 4) {
this.nodeLevelTwoFirst.length = 0;
this.nodeLevelTwoFirst.push({m:(this.internallevelTwoFirst[0]?this.internallevelTwoFirst[0]:'')},{m:(this.internallevelTwoFirst[1]?this.internallevelTwoFirst[1]:'')}
,{m:(this.internallevelTwoFirst[2]?this.internallevelTwoFirst[2]:'')},{m:(this.internallevelTwoFirst[3]?this.internallevelTwoFirst[3]:'')});
// console.log(this.internallevelTwoFirst);

}

}
else{
this.nodeLevelTwoFirst.length = 0;
this.nodeLevelTwoFirst.push({m:(this.internallevelTwoFirst[0]?this.internallevelTwoFirst[0]:'')},{m:(this.internallevelTwoFirst[1]?this.internallevelTwoFirst[1]:'')}
,{m:(this.internallevelTwoFirst[2]?this.internallevelTwoFirst[2]:'')},{m:(this.internallevelTwoFirst[3]?this.internallevelTwoFirst[3]:'')}
,{m:(this.internallevelTwoFirst[4]?this.internallevelTwoFirst[4]:'')}
);
// console.log(this.internallevelTwoFirst);

}
}
else{
this.nodeLevelTwoFirst.length = 0;
}
/////// node level Two Second /////////////////
if(this.getContent().nodeLevelTwoSecondNumber!=null){
if ( this.nodeLevelTwoSecond.length!=this.getContent().nodeLevelTwoSecondNumber) {
let slice = this.nodeLevelTwoSecond.length - this.getContent().nodeLevelTwoSecondNumber;
this.nodeLevelTwoSecond.splice(0, slice);
if (this.getContent().nodeLevelTwoSecondNumber == 1) {
  this.nodeLevelTwoSecond.length = 0;
  this.nodeLevelTwoSecond.push({m:(this.internallevelTwoSecond[0]?this.internallevelTwoSecond[0]:'')})
}
else if (this.getContent().nodeLevelTwoSecondNumber == 2) {
this.nodeLevelTwoSecond.length = 0;
this.nodeLevelTwoSecond.push({m:(this.internallevelTwoSecond[0]?this.internallevelTwoSecond[0]:'')},{m:(this.internallevelTwoSecond[1]?this.internallevelTwoSecond[1]:'')});
// console.log(this.nodeLevelTwoSecond);
}


else if (this.getContent().nodeLevelTwoSecondNumber == 3) {
this.nodeLevelTwoSecond.length = 0;
this.nodeLevelTwoSecond.push({m:(this.internallevelTwoSecond[0]?this.internallevelTwoSecond[0]:'')},
{m:(this.internallevelTwoSecond[1]?this.internallevelTwoSecond[1]:'')},{m:(this.internallevelTwoSecond[2]?this.internallevelTwoSecond[2]:'')});
// console.log(this.nodeLevelTwoSecond);

}

else if (this.getContent().nodeLevelTwoSecondNumber == 4) {
this.nodeLevelTwoSecond.length = 0;

this.nodeLevelTwoSecond.push({m:(this.internallevelTwoSecond[0]?this.internallevelTwoSecond[0]:'')},
{m:(this.internallevelTwoSecond[1]?this.internallevelTwoSecond[1]:'')}
,{m:(this.internallevelTwoSecond[2]?this.internallevelTwoSecond[2]:'')},
{m:(this.internallevelTwoSecond[3]?this.internallevelTwoSecond[3]:'')}
);
// console.log(this.nodeLevelTwoSecond);

}

}
else{
this.nodeLevelTwoSecond.length = 0;
this.nodeLevelTwoSecond.push({m:(this.internallevelTwoSecond[0]?this.internallevelTwoSecond[0]:'')},
{m:(this.internallevelTwoSecond[1]?this.internallevelTwoSecond[1]:'')}
,{m:(this.internallevelTwoSecond[2]?this.internallevelTwoSecond[2]:'')},
{m:(this.internallevelTwoSecond[3]?this.internallevelTwoSecond[3]:'')},
{m:(this.internallevelTwoSecond[4]?this.internallevelTwoSecond[4]:'')})
// );  console.log(this.nodeLevelTwoSecond);

}

}else{
this.nodeLevelTwoSecond.length = 0;
}

/////// node level Two third /////////////////
if(this.getContent().nodeLevelTwoThirdNumber!=null){

if ( this.nodeLevelTwoThird.length!=this.getContent().nodeLevelTwoThirdNumber) {
let slice = this.nodeLevelTwoThird.length - this.getContent().nodeLevelTwoThirdNumber;
this.nodeLevelTwoThird.splice(0, slice);
if (this.getContent().nodeLevelTwoThirdNumber == 1) {
  this.nodeLevelTwoThird.length = 0;
  this.nodeLevelTwoThird.push({m:"lolo"})
}
else if (this.getContent().nodeLevelTwoThirdNumber == 2) {
this.nodeLevelTwoThird.length = 0;
this.nodeLevelTwoThird.push({m:"lolo"},{m:"loolol"});
console.log(this.nodeLevelTwoThird);
}


else if (this.getContent().nodeLevelTwoThirdNumber == 3) {
this.nodeLevelTwoThird.length = 0;
this.nodeLevelTwoThird.push({m:"lolo"},{m:"loolol"},{m:"loolol"});
console.log(this.nodeLevelTwoThird);

}

else if (this.getContent().nodeLevelTwoThirdNumber == 4) {
this.nodeLevelTwoThird.length = 0;
this.nodeLevelTwoThird.push({m:"lolo"},{m:"loolol"},{m:"loolol"},{m:"loolol"});
console.log(this.nodeLevelTwoThird);

}

}
else{
this.nodeLevelTwoThird.length = 0;
this.nodeLevelTwoThird.push({m:"lolo"},{m:"loolol"},{m:"loolol"},{m:"loolol"},{m:"loolol"});
console.log(this.nodeLevelTwoThird);

}

}else{
this.nodeLevelTwoThird.length = 0;
}



/////// node level Two Fourth /////////////////

if ( this.nodeLevelTwoFourth.length!=this.getContent().nodeLevelTwoFourthNumber) {
let slice = this.nodeLevelTwoFourth.length - this.getContent().nodeLevelTwoFourthNumber;
this.nodeLevelTwoFourth.splice(0, slice);
if (this.getContent().nodeLevelTwoFourthNumber == 1) {
  this.nodeLevelTwoFourth.length = 0;
  this.nodeLevelTwoFourth.push({m:"lolo"})
}
else if (this.getContent().nodeLevelTwoFourthNumber == 2) {
this.nodeLevelTwoFourth.length = 0;
this.nodeLevelTwoFourth.push({m:"lolo"},{m:"loolol"});
console.log(this.nodeLevelTwoFourth);
}


else if (this.getContent().nodeLevelTwoFourthNumber == 3) {
this.nodeLevelTwoFourth.length = 0;
this.nodeLevelTwoFourth.push({m:"lolo"},{m:"loolol"},{m:"loolol"});
console.log(this.nodeLevelTwoFourth);

}

else if (this.getContent().nodeLevelTwoFourthNumber == 4) {
this.nodeLevelTwoFourth.length = 0;
this.nodeLevelTwoFourth.push({m:"lolo"},{m:"loolol"},{m:"loolol"},{m:"loolol"});
console.log(this.nodeLevelTwoFourth);

}

}
else{
this.nodeLevelTwoFourth.length = 0;
this.nodeLevelTwoFourth.push({m:"lolo"},{m:"loolol"},{m:"loolol"},{m:"loolol"},{m:"loolol"});
console.log(this.nodeLevelTwoFourth);

}






/////// node level Two Fifth /////////////////

if ( this.nodeLevelTwoFifth.length!=this.getContent().nodeLevelTwoFifthNumber) {
let slice = this.nodeLevelTwoFifth.length - this.getContent().nodeLevelTwoFifthNumber;
this.nodeLevelTwoFifth.splice(0, slice);
if (this.getContent().nodeLevelTwoFifthNumber == 1) {
  this.nodeLevelTwoFifth.length = 0;
  this.nodeLevelTwoFifth.push({m:"lolo"})
}
else if (this.getContent().nodeLevelTwoFifthNumber == 2) {
this.nodeLevelTwoFifth.length = 0;
this.nodeLevelTwoFifth.push({m:"lolo"},{m:"loolol"});
console.log(this.nodeLevelTwoFifth);
}


else if (this.getContent().nodeLevelTwoFifthNumber == 3) {
this.nodeLevelTwoFifth.length = 0;
this.nodeLevelTwoFifth.push({m:"lolo"},{m:"loolol"},{m:"loolol"});
console.log(this.nodeLevelTwoFifth);

}

else if (this.getContent().nodeLevelTwoFifthNumber == 4) {
this.nodeLevelTwoFifth.length = 0;
this.nodeLevelTwoFifth.push({m:"lolo"},{m:"loolol"},{m:"loolol"},{m:"loolol"});
console.log(this.nodeLevelTwoFifth);

}

}
else{
this.nodeLevelTwoFifth.length = 0;
this.nodeLevelTwoFifth.push({m:"lolo"},{m:"loolol"},{m:"loolol"},{m:"loolol"},{m:"loolol"});
console.log(this.nodeLevelTwoFifth);

}



////////////////  node level Three First First   /////////////////
if(this.getContent().nodeLevelThreeFirstNumber!=null){
if(this.nodeLevelThreeFirst.length!=this.getContent().nodeLevelThreeFirstNumber){
if(this.getContent().nodeLevelThreeFirstNumber==1){
  this.nodeLevelThreeFirst.length=0;
  this.nodeLevelThreeFirst.push({m:(this.internallevelThreeFirst[0]?this.internallevelThreeFirst[0]:'')});
 //  console.log(this.internallevelThreeFirst);

}
else if(this.getContent().nodeLevelThreeFirstNumber==2){
 this.nodeLevelThreeFirst.length=0;
 this.nodeLevelThreeFirst.push({m:(this.internallevelThreeFirst[0]?this.internallevelThreeFirst[0]:'')},
 {m:(this.internallevelThreeFirst[1]?this.internallevelThreeFirst[1]:'')}
 );


}


else if(this.getContent().nodeLevelThreeFirstNumber==3){
 this.nodeLevelThreeFirst.length=0;
 this.nodeLevelThreeFirst.push({m:(this.internallevelThreeFirst[0]?this.internallevelThreeFirst[0]:'')},
 {m:(this.internallevelThreeFirst[1]?this.internallevelThreeFirst[1]:'')},
 {m:(this.internallevelThreeFirst[2]?this.internallevelThreeFirst[2]:'')}
 );
 // console.log(this.nodeLevelThreeFirst);

}

else if(this.getContent().nodeLevelThreeFirstNumber==4){
 this.nodeLevelThreeFirst.length=0;
 this.nodeLevelThreeFirst.push({m:(this.internallevelThreeFirst[0]?this.internallevelThreeFirst[0]:'')},
 {m:(this.internallevelThreeFirst[1]?this.internallevelThreeFirst[1]:'')},
 {m:(this.internallevelThreeFirst[2]?this.internallevelThreeFirst[2]:'')},
 {m:(this.internallevelThreeFirst[3]?this.internallevelThreeFirst[3]:'')}
 );

}



}else{
this.nodeLevelThreeFirst.length=0;
this.nodeLevelThreeFirst.push({m:(this.internallevelThreeFirst[0]?this.internallevelThreeFirst[0]:'')},
{m:(this.internallevelThreeFirst[1]?this.internallevelThreeFirst[1]:'')},
{m:(this.internallevelThreeFirst[2]?this.internallevelThreeFirst[2]:'')},
{m:(this.internallevelThreeFirst[3]?this.internallevelThreeFirst[3]:'')},
{m:(this.internallevelThreeFirst[4]?this.internallevelThreeFirst[4]:'')}
);

}
}
else{
this.nodeLevelThreeFirst.length=0;
}

////////////////  node level Three First Second   /////////////////
if(this.getContent().nodeLevelThreeFirstSecondNumber!=null){
if(this.nodeLevelThreeFirstSecond.length ! =this.getContent().nodeLevelThreeFirstSecondNumber){
if(this.getContent().nodeLevelThreeFirstSecondNumber==1){
  this.nodeLevelThreeFirstSecond.length=0;
  this.nodeLevelThreeFirstSecond.push({m:(this.internallevelThreeFirstSecond[0]?this.internallevelThreeFirstSecond[0]:'')});
  console.log(this.internallevelThreeFirst);

}
else if(this.getContent().nodeLevelThreeFirstSecondNumber==2){
 this.nodeLevelThreeFirstSecond.length=0;
 this.nodeLevelThreeFirstSecond.push({m:(this.internallevelThreeFirstSecond[0]?this.internallevelThreeFirstSecond[0]:'')},
 {m:(this.internallevelThreeFirstSecond[1]?this.internallevelThreeFirstSecond[1]:'')}
 );


}


else if(this.getContent().nodeLevelThreeFirstSecondNumber==3){
 this.nodeLevelThreeFirstSecond.length=0;
 this.nodeLevelThreeFirstSecond.push({m:(this.internallevelThreeFirstSecond[0]?this.internallevelThreeFirstSecond[0]:'')},
 {m:(this.internallevelThreeFirstSecond[1]?this.internallevelThreeFirstSecond[1]:'')},
 {m:(this.internallevelThreeFirstSecond[2]?this.internallevelThreeFirstSecond[2]:'')}
 );
 // console.log(this.nodeLevelThreeFirst);

}

else if(this.getContent().nodeLevelThreeFirstSecondNumber==4){
 this.nodeLevelThreeFirstSecond.length=0;
 this.nodeLevelThreeFirstSecond.push({m:(this.internallevelThreeFirstSecond[0]?this.internallevelThreeFirstSecond[0]:'')},
 {m:(this.internallevelThreeFirstSecond[1]?this.internallevelThreeFirstSecond[1]:'')},
 {m:(this.internallevelThreeFirstSecond[2]?this.internallevelThreeFirstSecond[2]:'')},
 {m:(this.internallevelThreeFirstSecond[3]?this.internallevelThreeFirstSecond[3]:'')}
 );

}



}else{
this.nodeLevelThreeFirstSecond.length=0;
this.nodeLevelThreeFirstSecond.push({m:(this.internallevelThreeFirstSecond[0]?this.internallevelThreeFirstSecond[0]:'')},
{m:(this.internallevelThreeFirstSecond[1]?this.internallevelThreeFirstSecond[1]:'')},
{m:(this.internallevelThreeFirstSecond[2]?this.internallevelThreeFirstSecond[2]:'')},
{m:(this.internallevelThreeFirstSecond[3]?this.internallevelThreeFirstSecond[3]:'')},
{m:(this.internallevelThreeFirstSecond[4]?this.internallevelThreeFirstSecond[4]:'')}
);

}

}else{
this.nodeLevelThreeFirstSecond.length=0;

}



////////////////  node level Three Second First   /////////////////

// console.log(this.getContent().nodeLevelThreeSecondFirstNumber);
if(this.getContent().nodeLevelThreeSecondFirstNumber!=null){

if(this.nodeLevelThreeSecondFirst.length!=this.getContent().nodeLevelThreeSecondFirstNumber){
if(this.getContent().nodeLevelThreeSecondFirstNumber==1){
  this.nodeLevelThreeSecondFirst.length=0;
  this.nodeLevelThreeSecondFirst.push({m:(this.internallevelThreeSecondFirst[0]?this.internallevelThreeSecondFirst[0]:'')});

}
else if(this.getContent().nodeLevelThreeSecondFirstNumber==2){
 this.nodeLevelThreeSecondFirst.length=0;
 this.nodeLevelThreeSecondFirst.push({m:(this.internallevelThreeSecondFirst[0]?this.internallevelThreeSecondFirst[0]:'')},
{m:(this.internallevelThreeSecondFirst[1]?this.internallevelThreeSecondFirst[1]:'')}
);

}


else if(this.getContent().nodeLevelThreeSecondFirstNumber==3){
 this.nodeLevelThreeSecondFirst.length=0;
 this.nodeLevelThreeSecondFirst.push({m:(this.internallevelThreeSecondFirst[0]?this.internallevelThreeSecondFirst[0]:'')},
 {m:(this.internallevelThreeSecondFirst[1]?this.internallevelThreeSecondFirst[1]:'')},
 {m:(this.internallevelThreeSecondFirst[2]?this.internallevelThreeSecondFirst[2]:'')}
 );

}

else if(this.getContent().nodeLevelThreeSecondFirstNumber==4){
 this.nodeLevelThreeSecondFirst.length=0;
 this.nodeLevelThreeSecondFirst.push({m:(this.internallevelThreeSecondFirst[0]?this.internallevelThreeSecondFirst[0]:'')},
 {m:(this.internallevelThreeSecondFirst[1]?this.internallevelThreeSecondFirst[1]:'')},
 {m:(this.internallevelThreeSecondFirst[2]?this.internallevelThreeSecondFirst[2]:'')},
 {m:(this.internallevelThreeFirstSecond[3]?this.internallevelThreeSecondFirst[3]:'')}
 );

}



}else{
this.nodeLevelThreeSecondFirst.length=0;
this.nodeLevelThreeSecondFirst.push({m:(this.internallevelThreeSecondFirst[0]?this.internallevelThreeSecondFirst[0]:'')},
{m:(this.internallevelThreeSecondFirst[1]?this.internallevelThreeSecondFirst[1]:'')},
{m:(this.internallevelThreeSecondFirst[2]?this.internallevelThreeSecondFirst[2]:'')},
{m:(this.internallevelThreeFirstSecond[3]?this.internallevelThreeSecondFirst[3]:'')},
{m:(this.internallevelThreeSecondFirst[4]?this.internallevelThreeSecondFirst[4]:'')}
);
}

}else{
this.nodeLevelThreeSecondFirst.length=0;
}




////////////////  node level Three Second Second   /////////////////
if(this.getContent().nodeLevelThreeSecondSecondNumber!=null){
if(this.nodeLevelThreeSecondSecond.length!=this.getContent().nodeLevelThreeSecondSecondNumber){
if(this.getContent().nodeLevelThreeSecondSecondNumber==1){
  this.nodeLevelThreeSecondSecond.length=0;
  this.nodeLevelThreeSecondSecond.push({m:(this.internallevelThreeSecondSecond[0]?this.internallevelThreeSecondSecond[0]:'')});

}
else if(this.getContent().nodeLevelThreeSecondSecondNumber==2){
 this.nodeLevelThreeSecondSecond.length=0;
 this.nodeLevelThreeSecondSecond.push({m:(this.internallevelThreeSecondSecond[0]?this.internallevelThreeSecondSecond[0]:'')},
{m:(this.internallevelThreeSecondSecond[1]?this.internallevelThreeSecondSecond[1]:'')}
);

}


else if(this.getContent().nodeLevelThreeSecondSecondNumber==3){
 this.nodeLevelThreeSecondSecond.length=0;
 this.nodeLevelThreeSecondSecond.push({m:(this.internallevelThreeSecondSecond[0]?this.internallevelThreeSecondSecond[0]:'')},
 {m:(this.internallevelThreeSecondSecond[1]?this.internallevelThreeSecondSecond[1]:'')},
 {m:(this.internallevelThreeSecondSecond[2]?this.internallevelThreeSecondSecond[2]:'')}
 );

}

else if(this.getContent().nodeLevelThreeSecondSecondNumber==4){
 this.nodeLevelThreeSecondSecond.length=0;
 this.nodeLevelThreeSecondSecond.push({m:(this.internallevelThreeSecondSecond[0]?this.internallevelThreeSecondSecond[0]:'')},
 {m:(this.internallevelThreeSecondSecond[1]?this.internallevelThreeSecondSecond[1]:'')},
 {m:(this.internallevelThreeSecondSecond[2]?this.internallevelThreeSecondSecond[2]:'')},
 {m:(this.internallevelThreeSecondSecond[3]?this.internallevelThreeSecondSecond[3]:'')}
 );

}



}else{
this.nodeLevelThreeSecondSecond.length=0;
this.nodeLevelThreeSecondSecond.push({m:(this.internallevelThreeSecondSecond[0]?this.internallevelThreeSecondSecond[0]:'')},
 {m:(this.internallevelThreeSecondSecond[1]?this.internallevelThreeSecondSecond[1]:'')},
 {m:(this.internallevelThreeSecondSecond[2]?this.internallevelThreeSecondSecond[2]:'')},
 {m:(this.internallevelThreeSecondSecond[3]?this.internallevelThreeSecondSecond[3]:'')},
 {m:(this.internallevelThreeSecondSecond[4]?this.internallevelThreeSecondSecond[4]:'')}
 );
}


}else{
this.nodeLevelThreeSecondSecond.length=0;
}










}


componentDidLoad() {
// this.getContent().nodeColor="red";

var childs22 = this.el.shadowRoot.querySelectorAll('.tf-nc');
childs22.forEach(item=>{
  // console.log(item);
  (item as HTMLElement).style.backgroundColor =(this.getContent().nodeColor?this.getContent().nodeColor:'blueviolet');
  (item as HTMLElement).style.color =(this.getContent().textColor?this.getContent().textColor:'#fff');
})
}










expand(index) {
//  console.log(index);
 if(index==0){
var childs = this.el.shadowRoot.querySelectorAll('.child1')
for(let i = 0; i < childs.length; i++) {
  // if(i==0){
  //   var childs11 = this.el.shadowRoot.querySelectorAll('.child11')
  //   for(let i = 0; i < childs11.length; i++) {
  //     (childs11[i] as HTMLElement).style.visibility = 'visible';

  //   }
  // }
      // var childs11 = this.el.shadowRoot.querySelectorAll('.child11');
      // (childs11[i] as HTMLElement).style.visibility = 'visible';
  (childs[i] as HTMLElement).style.visibility = 'visible';
  this.updateSatisfiedEvent.emit(this.content)
}
 }

else if(index==1){
var childs2 = this.el.shadowRoot.querySelectorAll('.child2')
for(let i = 0; i < childs2.length; i++) {
  (childs2[i] as HTMLElement).style.visibility = 'visible';
}

}


else if(index==2){
  var childs3 = this.el.shadowRoot.querySelectorAll('.child3')
  for(let i = 0; i < childs3.length; i++) {
    (childs3[i] as HTMLElement).style.visibility = 'visible';
  }
}



else if(index==3){
  var childs4 = this.el.shadowRoot.querySelectorAll('.child4')
  for(let i = 0; i < childs4.length; i++) {
    (childs4[i] as HTMLElement).style.visibility = 'visible';
  }
}

else if(index==4){
  var childs5 = this.el.shadowRoot.querySelectorAll('.child5')
  for(let i = 0; i < childs5.length; i++) {
    (childs5[i] as HTMLElement).style.visibility = 'visible';
  }
}










}
expand2(index2){
//  console.log(index2);

if(index2==0){
  var childs = this.el.shadowRoot.querySelectorAll('.child11')
  for(let i = 0; i < childs.length; i++) {
    // if(i==0){
    //   var childs11 = this.el.shadowRoot.querySelectorAll('.child11')
    //   for(let i = 0; i < childs11.length; i++) {
    //     (childs11[i] as HTMLElement).style.visibility = 'visible';

    //   }
    // }
        // var childs11 = this.el.shadowRoot.querySelectorAll('.child11');
        // (childs11[i] as HTMLElement).style.visibility = 'visible';
    (childs[i] as HTMLElement).style.visibility = 'visible';
    this.updateSatisfiedEvent.emit(this.content)
  }
   }
   if(index2==1){
    var childs = this.el.shadowRoot.querySelectorAll('.child13')
    for(let i = 0; i < childs.length; i++) {
      // if(i==0){
      //   var childs11 = this.el.shadowRoot.querySelectorAll('.child11')
      //   for(let i = 0; i < childs11.length; i++) {
      //     (childs11[i] as HTMLElement).style.visibility = 'visible';

      //   }
      // }
          // var childs11 = this.el.shadowRoot.querySelectorAll('.child11');
          // (childs11[i] as HTMLElement).style.visibility = 'visible';
      (childs[i] as HTMLElement).style.visibility = 'visible';
      this.updateSatisfiedEvent.emit(this.content)
    }



     }





}

expand3(index2){


if(index2==0){
  var childs = this.el.shadowRoot.querySelectorAll('.child12')
  for(let i = 0; i < childs.length; i++) {
    (childs[i] as HTMLElement).style.visibility = 'visible';
    this.updateSatisfiedEvent.emit(this.content)
  }

   }

   if(index2==1){
    var childs = this.el.shadowRoot.querySelectorAll('.child14')
    for(let i = 0; i < childs.length; i++) {
      (childs[i] as HTMLElement).style.visibility = 'visible';
      this.updateSatisfiedEvent.emit(this.content)
    }

     }




}






 showlist(e) {

  if ( e.currentTarget.dataset.id == 'branch5'){
    (this.el.shadowRoot.querySelector('#list5') as HTMLElement).style.visibility='visible'
  }
  else if ( e.currentTarget.dataset.id == 'branch4'){
    (this.el.shadowRoot.querySelector('#list4') as HTMLElement).style.visibility='visible'
  }
  else if ( e.currentTarget.dataset.id == 'branch3'){
    (this.el.shadowRoot.querySelector('#list3') as HTMLElement).style.visibility='visible'

  // document.getElementById('list3').style.visibility = 'visible';
  }
  else if ( e.currentTarget.dataset.id == 'branch2'){
    (this.el.shadowRoot.querySelector('#list2') as HTMLElement).style.visibility='visible'

  }
  else if ( e.currentTarget.dataset.id == 'branch1'){
    (this.el.shadowRoot.querySelector('#list1') as HTMLElement).style.visibility='visible'

  }
  else if ( e.currentTarget.dataset.id == 'branch0'){
    (this.el.shadowRoot.querySelector('#list0') as HTMLElement).style.visibility='visible'
  }
}





render() {



var  nodeLevelTwoFirst1=[];
var  nodeLevelTwoSecond1=[];
var  nodeLevelTwoThird1=[];
var  nodeLevelTwoFourth1=[];
var  nodeLevelTwoFifth1=[];
// var third=[1,2,3,4,5,6];
// console.log(this.nodeLevelTwo);

  this.nodeLevelTwo.map((item,index)=>{
      
      let c=item;
    <span>{c}</span>

    /////// 1///////
      if(index==0){
        // console.log(index);
        this.nodeLevelTwoFirst.map((item2,index)=>{
            // console.log(item2,index)
          nodeLevelTwoFirst1.push((
                <li class="child1"  onClick={this.expand2.bind(this,index)} >
                <span class="tf-nc"><p class="text">{item2.m}</p></span>
                   {(index==0)?
                      <ul >
                        {this.nodeLevelThreeFirst.map(i=>
                          <li class="child11">
                          <span class="tf-nc"><p class="text">{i.m}</p></span>
                          </li>
                          )}

                      </ul>
                   :""}


                  {(index==1)?
                      <ul >
                        {this.nodeLevelThreeFirstSecond.map(i=>
                          <li class="child13">
                          <span class="tf-nc"><p class="text">{i.m}</p></span>
                          </li>
                          )}

                      </ul>
                   :""}

                     {/* {(index==0)?
                      <ul>
                        {third.map(i=>
                          <li class="child1">
                          <span class="tf-nc"><p class="text">{i}</p></span>
                          </li>
                          )}

                      </ul>
                   :""}  */}





                 </li>
                ));
        })
      }

////// 2//////
if(index==1){
// console.log(index);
this.nodeLevelTwoSecond.map((item2,index)=>{
  nodeLevelTwoSecond1.push((
        <li class="child2"  onClick={this.expand3.bind(this,index)} >
        <span class="tf-nc">
      <p class="text">
                {item2.m}
          </p>
         </span>
         {(index==0)?
                      <ul >
                        {this.nodeLevelThreeSecondFirst.map(i=>
                          <li class="child12">
                          <span class="tf-nc"><p class="text">{i.m}</p></span>
                          </li>
                          )}

                      </ul>
                   :""}

                {(index==1)?
                      <ul >
                        {this.nodeLevelThreeSecondSecond.map(i=>
                          <li class="child14">
                          <span class="tf-nc"><p class="text">{i.m}</p></span>
                          </li>
                          )}

                      </ul>
                   :""}


         </li>
        ));
})
}


////// 3//////
if(index==2){
// console.log(index);
this.nodeLevelTwoThird.map(item2=>{
  nodeLevelTwoThird1.push((
        <li class="child3">
        <span class="tf-nc">
      <p class="text">
                {item2.m}
          </p>
         </span>
         </li>
        ));
})
}

////// 4//////
if(index==3){
// console.log(index);
this.nodeLevelTwoFourth.map(item2=>{
  nodeLevelTwoFourth1.push((
        <li   class="child4">
        <span class="tf-nc">
      <p class="text">
                {item2.m}
          </p>
         </span>
         </li>
        ));
})
}



////// 5 //////
if(index==4){
// console.log(index);
this.nodeLevelTwoFifth.map(item2=>{
  nodeLevelTwoFifth1.push((
        <li class="child5">
        <span class="tf-nc">
      <p class="text">
                {item2.m}
          </p>
         </span>
         </li>
        ));
})
}






  });



  return (

    <div  style={{"direction": "ltr","font-family": "NeueFrutigerWorld"}}>

    <div class="tf-tree">
    <ul class="p"  >
    <li>
        <span class="tf-nc" id="parent" style={{"margin-top": "5%;"}}>
            <p class="text">
              {this.getContent().parent?this.getContent().parent:''}
                </p>
         </span>
         <ul >
        {this.nodeLevelTwo.map((item,inxd)=>

              <li  onClick={this.expand.bind(this,inxd)} ><span class="tf-nc">


              <p class="text"> {item.m} </p></span>
              <slot>
              <ul >
              {inxd==0?nodeLevelTwoFirst1.map((i)=>i):''}
              {inxd==1?nodeLevelTwoSecond1.map((i2)=>i2):''}
              {inxd==2?nodeLevelTwoThird1.map((i3)=>i3):''}
              {inxd==3?nodeLevelTwoFourth1.map((i4)=>i4):''}
              {inxd==4?nodeLevelTwoFifth1.map((i5)=>i5):''}

              </ul>

              </slot>

              </li>

        )}
           </ul>







</li>


    </ul>
      </div>


     </div>


  );
}

}
