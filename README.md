<div align="center">
  
  ## Please do not install this package. We are currently fixing some errors. We're sorry if you had to deal with that.

  <img src="https://github.com/benhexie/angel-form/blob/d2c9af7c85ba1e23c0abe21793449cc1b2e92460/assets/logo/angel-form-cover.png?raw=true" width="100%" />
</div>

# angel-form

A form state management package for React.

### Features

- Familiar syntax with support for native form elements.
- Boosts deeveloper speed with out-of-the-box state management.

### Coming Soon

- User entry validation

### Install

    npm install angel-form

### Quickstart

```jsx
import { useEffect, useState } from 'react'
import {Button, Form, Input, Checkbox, Radio,
  Select, Option, Textarea, Validator } from './packages/angel-form';

const App = () => {

  const [formState, setFormState] = useState({})

  const form = (
    <Form stateHandler={setFormState}>    // Links angel-form to your project
      <Input id='username' placeholder='Username'>Hello World</Input>
      <Input id='Password' type={'password'}></Input>
      <Input id='button' type='button'>Click Me!</Input>
      <Button onClick={(e) => {
        e.preventDefault()
        alert('Hello')
      }}>Submit</Button>
      <Select id='countries' defaultValue='paris'>
        <Option value="nigeria">Nigeria</Option>
        <Option value="paris">Paris</Option>
        <Option value="turkey">Turkey</Option>
      </Select>
      <Checkbox name="subjects" defaultChecked>Mathematics</Checkbox>
      <Checkbox name="subjects">English</Checkbox>
      <Checkbox name="subjects">Chemistry</Checkbox>
      <Radio name="language">English</Radio>
      <Radio name="language" defaultChecked>Spanish</Radio>
      <Radio name="language">French</Radio>
      <Input type='checkbox' name='seasons' value='summer'>Summer</Input>
      <Input type='checkbox' name='seasons'>Winter</Input>  // omitting the value property
      <Textarea id={'message'}>Message:</Textarea>          // would set the value to 'Winter' automatically
    </Form>
  )

  console.log(formState)    // view form state

  return (
    <div className="App">
      {form}
    </div>
  );
```

### Contributors

[FlexiSaf CohortT12023](https://www.linkedin.com/company/flexisafedusoftlimited/mycompany/)

##### Contributions are welcome :)
