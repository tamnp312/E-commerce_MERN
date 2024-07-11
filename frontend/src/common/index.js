const backendDomain ="http://localhost:8080" ;

const summaryApi ={
    signUP : {
        url : `${backendDomain}/api/signup`,
        method : "POST"
    },
    signIn  : {
        url : `${backendDomain}/api/signin`,
        method : "POST"
    },
    current_user : {
        url : `${backendDomain}/api/user-details`,
        method : "GET"
    },
    logout_user : {
        url : `${backendDomain}/api/userLogout`,
        method : "GET"
    },
    all_users : {
        url : `${backendDomain}/api/all-users`,
        method : "GET"
    },
    update_user : {
        url : `${backendDomain}/api/update-user`,
        method : "POST"
    }

}


export default summaryApi;