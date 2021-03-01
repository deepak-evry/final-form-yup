import * as yup from 'yup';

//const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const userSchema = yup.object({
    firstName: yup.string().required('Please enter first name'),
    lastName: yup.string().notRequired(),
    phoneNumber: yup.number()
    .typeError("enter valid phone number"),
    //  yup.string().required("required")
    // .matches(phoneRegExp, 'Phone number is not valid')
    // .min(10, "to short")
    // .max(10, "to long"),
    email:yup.string().email(),
    isDescrition :yup.boolean().default(false),
    description : yup.string().when('isDescrition',(isDescrition:boolean)=>{
        return  isDescrition?  yup.string().required() : yup.string().notRequired()
    })
    
})