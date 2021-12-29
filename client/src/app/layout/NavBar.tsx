import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";

export default function NavBar () {
    return(
        <Menu inverted fixed="top" >
        <Container>
            <Menu.Item header>
                
                PlaceholderTitle 
            </Menu.Item>
            
            <Menu.Item name="Notes"/>
            <Menu.Item>
                <Button positive content='New Note'/>
            </Menu.Item>

        </Container>
    </Menu>
    )
}