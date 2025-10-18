const backendDomain = "http://localhost:8080"

const SummaryApi = {
    signUP : {
        url : `${backendDomain}/api/signup`,
        method : "Post"
    },
    signIn :{
        url : `${backendDomain}/api/signin`,
        method : "Post"
    }
}

export default SummaryApi;