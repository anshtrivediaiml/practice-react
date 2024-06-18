import {Client,Account,ID} from 'appwrite';

export class AuthService{
    client= new Client();
    account;

    constructor(){
        this.client.setEndpoint(import.meta.env.VITE_APPWRITE_URL).setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

        this.account= new Account(this.client);
    }

    async  createAccount({email,password,name}){
      try{
      const userAccount=await this.account.create(ID.unique(),email,password,name);
      if(userAccount){
        console.log("Account created, now logging in.")
       return this.login({email,password});
      }
      else{
        return userAccount;
      }
      }catch(error){
        console.log("Error in createAccount:",error);
        throw  error;
      }
    }


    async login({email,password}){
        try{
            console.log("Logging in");
        return await this.account.createEmailPasswordSession(email,password);

        }catch(error){
            console.log("Error in login:",error);
            throw  error;
        }
    }

    async getCurrentUser(){
        try{
         return await this.account.get();
        }catch(error){
            throw error;
        }

        return null;
    }

    async logout(){
        try{
            return await this.account.deleteSessions();
        }catch(error){
            console.error('Appwrite service :: logout :: error', error);
            throw error;
        }
    }
}

const authService=new AuthService();
export default authService;