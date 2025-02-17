'use server'
import { BusinessFormState, FormState } from "@/Types/Type";
import { BusinessSignUpFormSchema, IndividualSignUpFormSchema } from "@/utils/auth/signup";

export async function individualSignup(state: FormState, formData: FormData) {

    console.log(state, 'what do we have here')
    const validatedFields = IndividualSignUpFormSchema.safeParse({
        lname: formData.get('lname'),
        email: formData.get('email'),
        password: formData.get('password'),
        confirm_password: formData.get('confirm_password'),
        country: formData.get('country'),
        fname: formData.get('fname'),
        pnumber: formData.get('pnumber'),
        state: formData.get('state')
    })

    if (!validatedFields.success) {
        return { errors: validatedFields.error.flatten().fieldErrors }
    }
    console.log(validatedFields, 'THIS WAS THE DISCIPLINARY ACTION');
}


export async function businessSignUp(
    state: BusinessFormState,
     formData: FormData) {
    // console.log(state, 'whats our business state logic')

    const validatedFields = BusinessSignUpFormSchema.safeParse({
        businessName: formData.get('businessName')
    })
    if (!validatedFields.success) {
        return { errors: validatedFields.error.flatten().fieldErrors }
    }
    console.log(validatedFields, 'fields have been validated')
}