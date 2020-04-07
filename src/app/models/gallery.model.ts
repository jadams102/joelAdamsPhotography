export class Gallery {
    public $key: string;
    public createdOn: Date = new Date();
    constructor(public title: string, public shortDesc: string, public longDesc: string ) {
    }
  }