export class Satellite {

	name: string;
	type: string;
	launchDate: string;
	orbitType: string;
	operational: boolean;

	constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
		this.name = name;
		this.type = type;
		this.launchDate = launchDate;
		this.orbitType = orbitType;
		this.operational = operational;
   }
	
// this is what must be fixed:
//	isSpaceDebris(): boolean {
// 		return true;
		
//    }
// TODO 3a: fix isSpaceDebris check
shouldShowWarning() {
	return this.type == "Space Debris";
	// if this.name = 'Space Debris' {
	// return this.name === true;
	// }
}  

}



