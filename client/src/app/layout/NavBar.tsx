import { observer } from "mobx-react-lite";
import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Container, Dropdown, Menu } from "semantic-ui-react";
import { useStore } from "../stores/store";

export default observer(function NavBar () {

    const {userStore: {user,logout}} = useStore();

    function redirect(){
        window.location.href = "https://www.markdownguide.org/cheat-sheet/";
    }
    return(
        <Menu inverted fixed="top"  >
            <Container fluid>
                <Menu.Item as={NavLink} to='/' exact header>
                    <img src='assets/logo.png' alt="logo" style={{marginRight:'5px'}}/>
                    Noto
                    
                </Menu.Item>
                
                <Menu.Item as={NavLink} to='/notes' name="Notes"/>
                
                <Menu.Item >
                    <Button as={NavLink} to='/createNote' style={{fontSize: '1.25em',backgroundColor:'#5B84B1FF'}}  content='+'/>
                </Menu.Item>
                <Menu.Item position="right">
                        <Dropdown multiple pointing='top left' text={user?.displayName}>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={logout} text="Logout" icon="power" />
                                <Dropdown.Item onClick={redirect} text="Markdown?" icon="question" />
                                
                            </Dropdown.Menu>   
                            
                        </Dropdown>
                        
                    
                    

                    
                </Menu.Item>

            </Container>
        </Menu>
    )
})