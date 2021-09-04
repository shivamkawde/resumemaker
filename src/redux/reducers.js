export const userReducer= (state=null,action)=>{

    switch(action.type)
    {
        case"SET_USER":return action.payload;
        default:return state
        
    }
}
export const tamplateReducer =(state=null,action)=>
{
    switch(action.type)
    {
        case "SET_TAMPLATE":
            return  action.payload;
            default :
            return state
    }

}
let inisialState={
    fname: "",
    lname: "",
    city: "",
    state: "",
    email: "",
    phone: "",
    degree: "",
    cgpa: "",
    college: "",
    year: "",
    isPublic: false,
    skill1:"",
    skill2:"", 
    skill3:"",
    skill4:"",
    skill5:"", 
    hobby1:"",
    hobby2:"",
    hobby3:"",
    hobby4:"",
    hobby5:"",
    achivement1:"",
    achivement2:""
}

export const detailReducer=(state=inisialState,action)=>{
    switch(action.type){
         
        case "SET_DETAILS":return{
            ...state,...action.payload
        }

        default:return state
    }
}
