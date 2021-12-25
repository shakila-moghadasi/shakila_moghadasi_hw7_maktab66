class Media{
    constructor(name,subject,language,year){
        this.name=name
        this.subject=subject
        this.language=language
        this.year=year
    }
}
class Film extends Media{
    constructor(name,subject,language,year,genre,seasonNumber,partNumber){
    super(name,subject,language,year)
        this.genre=genre
        this.seasonNumber=seasonNumber
        this.partNumber=partNumber
    }
}
let freinds = new Film("freinds","story about 6 freinds","english","1994","drama-comedy","5","22")
console.log(freinds)


class Book extends Media{
    constructor(name,subject,language,year,pagenumber,writer){
        super(name,subject,language,year)
        this.pagenumber=pagenumber
        this.writer=writer
    }
}
let samfonimordegan = new Book("samfonimordegan","story about family in iran","2001","100","abbas-marofi")
console.log(samfonimordegan)


class music extends Media{
    constructor(name,subject,language,year,singer,composer){
        super(name,subject,language,year)
        this.singer=singer
        this.composer=composer
    }    
}
let boroaghab = new music("boroaghab","gang","persian-english","2020","erfan-paydar","dara-paydar")
console.log(boroaghab)