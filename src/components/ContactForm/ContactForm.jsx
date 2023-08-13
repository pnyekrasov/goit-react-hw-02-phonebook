import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Label, StyledForm, StyledField, Button } from './ContactForm.staled';

const schema = Yup.object().shape({
  name: Yup.string().trim().min(2, 'Too Short!').required('Required'),
  number: Yup.number().min(3, 'Too Short!').required('Required'),
});

export const ContactForm = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={schema}
      onSubmit={values => {
        console.log(values);
      }}
    >
      <StyledForm>
        <Label>
          Name
          <StyledField name="name" placeholder="Jane Smit" />
          <ErrorMessage name="name" />
        </Label>

        <Label>
          Number
          <StyledField name="number" placeholder="XXX-XX-XX" />
          <ErrorMessage name="number" />
        </Label>

        <Button type="submit">Add contact</Button>
      </StyledForm>
    </Formik>
  );
};
