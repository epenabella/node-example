import {
     Controller, Get, Route
   } from "tsoa";
import { postGresDataSource } from "../app-data-source";
import { UserProfile } from '../entity/UserProfile';

@Route("api/user-profiles")
export class UserProfilesController extends Controller {
  @Get()
  public async getUsers(): Promise<UserProfile[]> {
     const userProfiles = 
          await postGresDataSource.getRepository(UserProfile)
          .find();
    

     return userProfiles;
  } 
}
