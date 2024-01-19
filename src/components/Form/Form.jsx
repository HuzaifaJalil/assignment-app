import React from "react";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  FormContainer,
  Subtitle,
  Title,
  CustomForm,
  Input,
  Button,
  ErrorText,
} from "./Form.styles";

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Full Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: Yup.string().required("Phone Number is required"),
  message: Yup.string(),
});

export const Form = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      // Handle form submission logic here
      console.log(values);

      emailjs
        .sendForm(
          "service_wuvlcwh",
          "template_uneyeq8",
          values, // Assuming your EmailJS template fields match the form field names
          "buAKJzkXHeyFlKIl3"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("Form Submitted");
            resetForm();
          },
          (error) => {
            console.log(error.text);
          }
        );

      // Reset the form after submission
    },
  });

  return (
    <FormContainer>
      <Title>Let’s Get Started</Title>
      <Subtitle>Get 40% Discount</Subtitle>
      <CustomForm onSubmit={formik.handleSubmit}>
        <Input
          type="text"
          name="fullName"
          placeholder="Full Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.fullName}
        />
        {formik.touched.fullName && formik.errors.fullName ? (
          <ErrorText>{formik.errors.fullName}</ErrorText>
        ) : null}

        <Input
          type="email"
          name="email"
          placeholder="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <ErrorText>{formik.errors.email}</ErrorText>
        ) : null}

        <Input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phoneNumber}
        />
        {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
          <ErrorText>{formik.errors.phoneNumber}</ErrorText>
        ) : null}

        <Input
          as="textarea"
          name="message"
          placeholder="Message"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
        />

        <Button type="submit">Submit</Button>
      </CustomForm>
    </FormContainer>
  );
};
