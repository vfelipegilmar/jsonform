
import validator from "@rjsf/validator-ajv6";
import Form, { IChangeEvent } from "@rjsf/core";
import { FormEvent } from "react";

export default function App() {

  const schema = {
    title: "Todo",
    type: "object",
    required: ["title"],
    properties: {
      title: {type: "string", title: "Title", default: "A new task"},
      done: {type: "boolean", title: "Done?", default: false}
    }
  };

  const onChange = () => {}
  const onSubmit = (data: IChangeEvent, event: FormEvent) => {
    event.preventDefault();
    console.log(data.formData);
  }
  const onError = () => {}

  return (
    <div>
      <h1>Form</h1>
      <Form
        schema={schema}
        validator={validator}
        onChange={onChange}
        onSubmit={onSubmit}
        onError={onError}
      >
        
      </Form>
      </div>
  )
}
