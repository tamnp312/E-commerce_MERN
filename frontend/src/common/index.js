const backendDomain ="http://localhost:8080" ;

const summaryApi ={
    signUP : {
        url : `${backendDomain}/api/signup`,
        method : "POST"
    },
    signIn  : {
        url : `${backendDomain}/api/signin`,
        method : "POST"
    }

}


export default summaryApi;