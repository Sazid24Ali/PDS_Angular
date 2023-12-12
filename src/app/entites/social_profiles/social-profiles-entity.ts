export class SocialProfilesEntity{

    constructor(
    public socialPlatformURL:string = '',
    public socialPlatformUsername:string = '',
    public socialPlatformName:string = '',
    public isDeleted:boolean = false
    ){}

}
