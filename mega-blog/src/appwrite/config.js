import { Client, ID, Databases, Storage, Query } from "appwrite";

export class StorageService {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(import.meta.env.VITE_APPWRITE_URL)
      .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        import.meta.env.VITE_APPWRITE_DATABASE_ID,
        import.meta.env.VITE_APPWRITE_COLLECTION_ID,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
     console.log(error);
      throw error;
    }
  }

  async updatePost(slug,{title,content,featuredImage,status}){
    try{
       return await this.databases.updateDocument(import.meta.env.VITE_APPWRITE_DATABASE_ID,import.meta.env.VITE_APPWRITE_COLLECTION_ID,slug,{
        title,
        content,
        featuredImage,
        status,
       })

    }catch(error){
        console.log(error);
      throw error;
    }
  }

  async deletePost(slug){
    try{
         await this.databases.deleteDocument(import.meta.env.VITE_APPWRITE_DATABASE_ID,import.meta.env.VITE_APPWRITE_COLLECTION_ID,slug);
            return true;

    }catch(error){
        console.log(error);
      return false;
    }
    
  }

  async getPost(slug){
    try{
       return await this.databases.getDocument(import.meta.env.VITE_APPWRITE_DATABASE_ID,import.meta.env.VITE_APPWRITE_COLLECTION_ID,slug);
    }catch(error){
        console.log(error);
      return false;
    }
  }

  async getPosts(queries=[Query.equal('status','active')]){
    try{
    return await this.databases.listDocuments(import.meta.env.VITE_APPWRITE_DATABASE_ID,import.meta.env.VITE_APPWRITE_COLLECTION_ID,queries);

    }
    catch(error){
        console.log(error);
      return false;
    }
  } 

  //file upload service
  async uploadFile(file){
    try{
       return await this.bucket.createFile(import.meta.env.VITE_APPWRITE_BUCKET_ID,ID.unique(),file)
 
    }catch(error){
        console.log(error);
      return false;
    }
  }

  async deleteFile(fileId){
    try{
         await this.bucket.deleteFile(import.meta.env.VITE_APPWRITE_BUCKET_ID,fileId);
         return true;
    }catch(error){
        console.log(error);
      return false;
    }
  }

  getFilePreview(fileId){
    return this.bucket.getFilePreview(import.meta.env.VITE_APPWRITE_BUCKET_ID,fileId);
  }
}

const storageService = new StorageService();
export default storageService;
