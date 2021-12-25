//A

function Uniclass(className,classUnit,classCapicity){
    this.className=className
    this.classUnit=classUnit
    this.classCapicity=classCapicity
}
let softengineeringclass = new Uniclass("softengineeringclass","3","50")
let networkclass = new Uniclass("networkclass","4","45")
console.log(softengineeringclass)
console.log(networkclass)

//B

networkclass.project=true
softengineeringclass.Book="softEngneering"
console.log(networkclass)
console.log(softengineeringclass)