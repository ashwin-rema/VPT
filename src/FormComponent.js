import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText ,Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class FormComponent extends React.Component{
    render(){
        return(
            <div className="col-3 l">
                <Card>
                    <CardBody>

                    <CardTitle><h3>Contact Information</h3></CardTitle>
                    <Form>
                    
                    <FormGroup>
                        <Label for="FirstName">FirstName</Label>
                        
                        <Input  type="FirstName" name="FirstName" id="FirstName" placeholder="FirstName"   />
                    </FormGroup>
                    <FormGroup>
                        <Label for="MiddleName">MiddleName</Label>
                      
                        <Input  type="MiddleName" name="MiddleName" id="MiddleName" placeholder="MiddleName"  />
                    </FormGroup>
                    <FormGroup>
                        <Label for="LastName">LastName</Label>
                      
                        <Input  type="LastName" name="LastName" id="LastName" placeholder="LastName" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Suffix">Suffix</Label>
                       
                        <Input  type="Suffix" name="Suffix" id="Suffix" placeholder="Suffix"  />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Year">ClassYear</Label>
                        
                        <Input  type="Year" name="Year" id="Year" placeholder="Year"  />
                      
                        <Label for="School">School</Label>
                       
                        <Input  type="School" name="School" id="School" placeholder="School" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Country">Country</Label>
                       
                        <Input  type="Country" name="Country" id="Country" placeholder="Country"   />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Street1">Street1</Label>
                     
                        <Input  type="Street1" name="Street1" id="Street1" placeholder="Street1"   />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Street2">Street2</Label>
                      
                        <Input  type="Street2" name="Street2" id="Street2" placeholder="Street2"   />
                    </FormGroup>
                    <FormGroup>
                        <Label for="City">City</Label>
                       
                        <Input  type="City" name="City" id="City" placeholder="City"   />
                       
                        <Label for="State">State</Label>
                      
                        <Input  type="State" name="State" id="State" placeholder="State"   />
                       
                        <Label for="ZIP">ZIP Code</Label>
                      
                        <Input  type="ZIP" name="ZIP" id="Country" placeholder="ZIP"   />
                    </FormGroup>
                    </Form>
                    </CardBody>
                </Card>
                
            </div>
            
        );
    }
}

    
