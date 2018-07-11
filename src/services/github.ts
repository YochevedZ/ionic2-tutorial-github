import {Injectable} from '@angular/core';  
import { HttpClient } from '@angular/common/http';


@Injectable()
export class GitHubService {  
    constructor(public httpClient: HttpClient) {
    }

    getRepos(username) {
        let repos = this.httpClient.get(`https://api.github.com/users/${username}/repos`);
        return repos;
    }
}