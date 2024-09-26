import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
 
export const { handlers, signIn, signOut, auth } = NextAuth({
    providers:[
      GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        
    ],
    
    callbacks:{
        async signIn(user, ) {
            console.log('User after sign in:', {...user.user,email_verified:user.profile?.email_verified},user.profile);
            // Return true to allow sign-in
            return true;
          },
          
    }
  })