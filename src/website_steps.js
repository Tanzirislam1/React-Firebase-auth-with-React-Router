/* steps of website building

1. install react router and set routes on app.js...

2. create components for routes and set navbar custom-active-link use border bottom the route useing from stackclitz....

3. custom-hook : create custom hook function / export a function.. and set url perameter and inside function create state and useEffect and insdie the useEffect fetch the url and return only 1 item we can use array and object to return multiple items and we are set hook-function-perameter name url for easy to set data.. we are calling the function / import the function any route and set function perameter value as a (url-link / fake-data-file) to load data and store data in state and function return state values we can use any route...

4. condition for set data.length amount (slice-data) : amra usersData k slice kore koyta data dekhabe sheita set korte pari kinto aikhane amra data er length k condition akare use kore data er length er akta amount value set kore ditase jae amra koto ta data dekhate chai...
condition : 
if(usersData.length){
    usersData.length = 6;
}

5. show-all-user : amra home route er moddhe users gula deikhaise kinto shob gula user deikhai ni amra show All user button e click korle users route e niye jabe and users route er moddhe shob gulo users k show korbe amra users er moddhe hook import kore ter moddhe amra url link paste kore data load korse...

6. user-info (use-dynamic-route) : dynamic route : amra dynamic route set korte 1st e amra akta route nibo then route er path er moddhe amra ('pathname/:id-name') 1st e path-name dibo terpor / diye then :userID colon diye amra dynamic route er akta id name dise...terpor amra element e akta component set kore dise....ai dynamic route ta amra users route singleUser component er user-info button er to={`/user/${id}`} to={} field er moddhe dynamic vabe amra {`/dynamic-route-path-name/${id}`} dynamic route path-name diye ter moddhe enter kore terpor {id} dynamic vabe id set kore ditase....ai dynamic route kore jei id ta pass kortase and SingleUsers theke dynamic vabe id set kore oi id ta k amra dynamic route er jei element component set korse oi component er moddhe userId ta k useParams hook use kore {useId} destructure kortase...aivabe amra single userinfo pitase then amra abar hook use kore data load korse kinto aiber data load korar shomoy amra shob gulo user dekhabo nh shudhu single user k dekhabo tai amra url er moddhe dynamic vabe id set kore ditase aita hocche dynamic route er moddhe amra jei id name dise shei id name...

7. set-single-user-info : amra useParams kore dynamic-route er jei id name oita k destructure kore singel user er id tah k paitase amra singel user er data gulo pete amra hook function k import kore ter moddhe function perameter value hisabe jei url set korbo oi url er moddhe dynamic vabe amra dynamic-route-id-name k dynamic vabe set kortase single-user er id access korar jonne...terpor amra userId k console korle single id pabo...amra id chara baki information dekhate amra akta allUsers variable er moddhe hook import kore data load korar jonne url er moddhe dynamic-route-id-name set kortase ai variable hocche shobgulo user ai variable er 0 index set kore ditase allUsers[0] amra singleUsers component er moddhe props akare single user k pathacchi ter moddhe amra allUsers[0] aita set kore ditase single user er info er data dekhate... 

* firebase login setup

8. toggle check box on login route : optionally chaing 1 from contents depend in checkbox input field and set onChange and set login state (!login) reuse login state for toggle login or register cause the state normally set false when we change checkbox field register and login are toggleing...

9. firebase authentication enable for email and password if you need another then enable it!...

10. create required-auth-component and copy stackblitz code and rap the route in required-auth component for protected route....

11. useing react-firebase-hooks for create user and login system 

12. access input field target value useings state :  amra aikhane akta state declair korse state er vitor kicu object diclair korse empty string hisabe ai state er [event.target.name] = event.target.value set kortase normally empty string thakbe jokhon amra kicu likhbo tokhon oi object property ta k return korbe amra oi property er moddhe ja likhse...amra handleFormInput er moddhe state tah set korse and proti ta input er moddhe onBlur kortase ai onBlur er moddhe arrow function niye ter perameter e event k call kortase and handler function k call kore ter moddhe o event k set kortase...amra userinfo state k console korle dekhte parbo amra input field gulo tae ja likhbo oi field gulo k akta oject akaree return kortase and amra object theke oi property gulo k access korte pari... 
example ->
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
        confirmPass: ''
    })

13. from onSubmit handler setup in form onBlur and event.preventDefault() 

14. redirected login route : Example =>
* redirected 
let navigate = useNavigate();
let location = useLocation();

let from = location.state?.from?.pathname || "/";
if (loginUser) {
    navigate(from, { replace: true });
}

15. toggle navbar login : jodi user login kore tahole signout dekhabe er jodi login nh kora thake tahole login dekhabe....amra signout er kaj tao korse jokhon signout e click korbo tokhon signout hoye jabe....

*/