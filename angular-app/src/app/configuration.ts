import { Injectable } from '@angular/core';

@Injectable()

//provides configurate to composer rest server
export class Configuration {
    //public ApiIP: string = "http://localhost";
    public ApiIP: string = "http://ec2-13-124-126-235.ap-northeast-2.compute.amazonaws.com";
    public ApiPort: string = "3000";
    public Server: string = this.ApiIP+":"+this.ApiPort;
    public ApiUrl: string = "/api/";
    public ServerWithApiUrl = this.Server + this.ApiUrl;
}
