import { ErrorMessage, Form, Formik } from "formik";
import { observer } from "mobx-react-lite";
import React from "react";
import { Button, Header, Label } from "semantic-ui-react";
import MyTextInput from "../../app/common/customs/MyTextInput";
import { useStore } from "../../app/stores/store";
import * as Yup from 'yup';
export default observer(function RegisterForm(){
    const {userStore} = useStore();
    return(
        <Formik
        initialValues={{displayName:'',userName:'',email:'',password:'',error:null}}
        onSubmit={
            (values,{setErrors}) => userStore.register(values).catch(error=>
            setErrors({error: 'Invalid Email or Password!'}))}
            
            validationSchema={Yup.object({
                displayName: Yup.string().required(),
                userName: Yup.string().required(),
                email: Yup.string().required().email(),
                password: Yup.string().required()
            })}

        >
            {({handleSubmit,isSubmitting,errors,isValid,dirty}) => (
                <Form className='ui form' autoComplete="off" onSubmit={handleSubmit}>
                    <Header as="h2" content="Sign up to Noto" color='orange' textAlign="center"/>
                    <MyTextInput name='email' placeholder="Email"/>
                    <MyTextInput name='userName' placeholder="Username"/>
                    <MyTextInput name='displayName' placeholder="First Name"/>
                    <MyTextInput name='password' placeholder="Password" type="password"/>
                    <ErrorMessage
                    name='error' render={()=> 
                    <Label style={{marginBottom:10 }}color="red" content={errors.error} />} />
                    <Button disabled={!isValid || !dirty || isSubmitting} loading={isSubmitting} style={{backgroundColor:'orange'}} content='Register' type='submit' fluid/>
                </Form>
            )}
        </Formik>
    )
})