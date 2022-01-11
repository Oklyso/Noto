import { observer } from "mobx-react-lite";
import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Header, Image, Segment } from "semantic-ui-react";
import { useStore } from "../../app/stores/store";
import LoginForm from "../users/LoginForm";
import RegisterForm from "../users/RegisterForm";

export default observer(function HomePage () {
    const {userStore,modalStore} = useStore();
    return(
       <Segment inverted textAlign='center' vertical className='masthead'>
           <Container  text>
               <Header className="ui center aligned"  as='h1' inverted>
                   {/* <Image size='massive' source='/assets/logo.png'  style={{marginBottom: 12}} /> */}
                   Noto
               </Header>
               {userStore.isLoggerIn ? (
                   <>
                   <Header className="ui center aligned" as='h2' inverted content='Welcome' />
                   <Button className="ui center aligned" as={Link} to='/notes' size="huge">
                    Go To Notes
                         </Button>
                   </>
                   
               ): (
                <>
                <Button onClick={() => modalStore.openModal(<LoginForm />)} size="huge">
                Login
                     </Button>
                     <Button onClick={() => modalStore.openModal(<RegisterForm />)} size="huge">
                     Register
                          </Button>
                 </>
               )}
               
               
               
           </Container>

       </Segment>
    )
})