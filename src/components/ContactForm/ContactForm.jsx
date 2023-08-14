import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Label, StyledForm, StyledField, Button } from './ContactForm.staled';

const schema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .matches(
      /^ [a - zA - Zа - яА - Я] + (([' \-.][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    ),
  phoneNumber: Yup.string()
    .required('Phone number is required')
    .matches(
      /\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    ),
});

export const ContactForm = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        phoneNumber: '',
      }}
      validationSchema={schema}
      onSubmit={values => {
        console.log(values);
      }}
    >
      <StyledForm>
        <Label>
          Name
          <StyledField name="name" />
          <ErrorMessage name="name" />
        </Label>

        <Label>
          Phone Number
          <StyledField name="phoneNumber" />
          <ErrorMessage name="phoneNumber" />
        </Label>

        <Button type="submit">Add contact</Button>
      </StyledForm>
    </Formik>
  );
};
