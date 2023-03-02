<div align="center">
  <img src="https://lh3.googleusercontent.com/jI6GNbgKGuBHOHu0zpanvkT-jKfeWXtEFEHt6Et6DgUIeJD3xY49Lpr9l3pkDoOOvyJNNHAznKBDkW-W5xkmUz0yltGDPDIzulUaOvIp_VAqVzDnywO9T24T_4V5tf6AziOW2YsLXdg8kXXCdYnRsjtxD0Z82ApFU8977tTGbF_irWdhMAIxUuw7ORL7qttRiht4fErJN_kLdVqzWN-YudO_xvY-0PAn6m5FLw97uVUENPODZIG5YQBi2iDhq8lnLf5bWDqvlp1abXHCKBTwPuGtziQlTLBwAP4kCbnFe8qYJIzqZDppZG0KjtZ_A7YtivMCkC4jOG1AqYKPm2H9Dp8ChANmNg3PzgvW5LpyBF6UCD_NSYv7Yrm4w9SgCgIRi_n7ifM4JMrrvGGCtSWAPfmmBPe_InGjxVTzHpG6RR39oTWvjXkLYQjX_vMUaaQ077gUwfXOeqsu5rKuoPL3Ox_2BZ33Nx4BgO-qH47pqWV43mecEvLDrOGUergfY3gsx37be7fQ-vnmWhtbRXJCBhGoOnI_vtjk-PteeXjK2W-SVdXuOVEdwJfKH-OV0SMDZa7fUuxb3JHedZ59xGKnFKUPb410RSGyp4ryT-LAIRNvirQyDcbJgbCMFLL3qkY3TkomMdHAnxyKTJImry7_gDIWjg3d_3Arj42PYoLb5wnD61VmyfYVHXOi3R_LoJRg34Kv927IQCYAaDa_BZEXMiVPPhhj0Pz50xQHjxtosHI5dMMKkrbYCV1zpgIfKU1S1rWWud8birXxQeuRa7aR5XwjGRHfF1jJA-aPFmZD84Y0YY4-_Tz9EgkFFjUv_mbRBdV3vXn5T3R3V_LBb9Ij4zMqKPlFX-KwHrhsVFXRR3Iz9xVIoMDlr4EgB-AJ-bWaTjo2EoYJvcLOX53tbJLd52ckPNshDp-A39HABgm53dzBKYQ=w950-h380-no?authuser=0" width="100%" />
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
