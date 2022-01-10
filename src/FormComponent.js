import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class FormComponent extends React.Component{
    render(){
        return(
            <div>
                
                <Form>
                    <FormGroup>
                        <Label for="FirstName">FirstName</Label>
                        {' '}
                        <Input  type="FirstName" name="FirstName" id="FirstName" placeholder="FirstName"  bsSize="lg" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="MiddleName">MiddleName</Label>
                        {' '}
                        <Input  type="MiddleName" name="MiddleName" id="MiddleName" placeholder="MiddleName"  bsSize="lg" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="LastName">LastName</Label>
                        {' '}
                        <Input  type="LastName" name="LastName" id="LastName" placeholder="LastName"  bsSize="lg" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Suffix">Suffix</Label>
                        {' '}
                        <Input  type="Suffix" name="Suffix" id="Suffix" placeholder="Suffix"  bsSize="lg" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Year">ClassYear</Label>
                        {' '}
                        <Input  type="Year" name="Year" id="Year" placeholder="Year"  bsSize="lg" />
                        <Label for="School">School</Label>
                        {' '}
                        <Input  type="School" name="School" id="School" placeholder="School"  bsSize="lg" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Country">Country</Label>
                        {' '}
                        <Input  type="Country" name="Country" id="Country" placeholder="Country"  bsSize="lg" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Street1">Street1</Label>
                        {' '}
                        <Input  type="Street1" name="Street1" id="Street1" placeholder="Street1"  bsSize="lg" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Street2">Street2</Label>
                        {' '}
                        <Input  type="Street2" name="Street2" id="Street2" placeholder="Street2"  bsSize="lg" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Country">Country</Label>
                        {' '}
                        <Input  type="Country" name="Country" id="Country" placeholder="Country"  bsSize="lg" />
                        <Label for="Country">Country</Label>
                        {' '}
                        <Input  type="Country" name="Country" id="Country" placeholder="Country"  bsSize="lg" />
                        <Label for="Country">Country</Label>
                        {' '}
                        <Input  type="Country" name="Country" id="Country" placeholder="Country"  bsSize="lg" />
                    </FormGroup>
                </Form>
            </div>
            
        );
    }
}

    
