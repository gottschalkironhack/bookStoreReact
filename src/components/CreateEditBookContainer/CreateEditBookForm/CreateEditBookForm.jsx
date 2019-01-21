import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Button, FormGroup, Label } from 'reactstrap';
import { withFormik, Field, Form } from 'formik';
import { handleCreateBook } from '../../../actions/createBook';
import { handleEditBook } from '../../../actions/editBook';


const CreateEditBookForm = ({
  values,
  errors,
  touched,
  isSubmitting,
}) => (
  <Form>
    <FormGroup>
      {values.bookId ? <Field type="hidden" id="bookId" name="bookId" value={values.bookId} /> : null }
      <Label htmlFor="bookTitle">Book title</Label>
      <Field
        className={`form-control ${errors.bookTitle && touched.bookTitle && 'is-invalid'}`}
        type="text"
        id="bookTitle"
        name="bookTitle"
        placeholder="Book title"
        aria-describedby="Enter book title"
      />
      {errors.bookTitle && touched.bookTitle && <div className="invalid-feedback">{errors.bookTitle}</div>}
    </FormGroup>
    <FormGroup>
      <Label htmlFor="bookAuthor">Book author</Label>
      <Field
        className={`form-control ${errors.bookAuthor && touched.bookAuthor && 'is-invalid'}`}
        type="text"
        id="bookAuthor"
        name="bookAuthor"
        placeholder="Book Author"
        aria-describedby="Specify book Author"
      />
      { errors.bookAuthor && touched.bookAuthor && <div className="invalid-feedback">{errors.bookAuthor}</div>}
    </FormGroup>
    <FormGroup>
      <Label htmlFor="bookDescription">Book description</Label>
      <Field
        className={`form-control ${errors.bookDescription && touched.bookDescription && 'is-invalid'}`}
        component="textarea"
        id="bookDescription"
        name="bookDescription"
        placeholder="Book description"
        aria-describedby="Enter book description"
      />
      {errors.bookDescription && touched.bookDescription && <div className="invalid-feedback">{ errors.bookDescription}</div>}
    </FormGroup>
    <FormGroup>
      <Label htmlFor="bookPrice">Book price</Label>
      <Field
        className={`form-control ${errors.bookPrice && touched.bookPrice && 'is-invalid'}`}
        type="text"
        id="bookPrice"
        name="bookPrice"
        placeholder="Book price"
        aria-describedby="Enter book price"
      />
      {errors.bookPrice && touched.bookPrice && <div className="invalid-feedback">{ errors.bookPrice }</div> }
    </FormGroup>
    <Button type="submit" disabled={isSubmitting}>Submit</Button>
  </Form>
);

const Formik = withFormik({
  mapPropsToValues({
    title,
    author,
    description,
    price,
    _id,
  }) {
    return ({
      bookId: _id || '',
      bookTitle: title || '',
      bookAuthor: author || '',
      bookDescription: description || '',
      bookPrice: price || '',
    });
  },

  validationSchema: Yup.object().shape({
    bookTitle: Yup.string().max(40, 'Title can not be longer than 255 characters').required('Book title is required'),
    bookAuthor: Yup.string().max(40, 'Author can not be longer than 40 characters').required('Book author is required'),
    bookDescription: Yup.string().max(255, 'Description can not be longer than 255 characters').required('Book description is required'),
    bookPrice: Yup.number().typeError('Price needs to be a number').required('Price is required'),
  }),
  enableReinitialize: true,
  handleSubmit(values, {
    props,
    resetForm,
    setSubmitting,
  }) {
    if (values.bookId) {
      props.dispatch(handleEditBook(values, values.bookId))
        .then(() => {
          setSubmitting(false);
          resetForm();
        })
        .catch((error) => {
          setSubmitting(false);
        });
    } else {
      props.dispatch(handleCreateBook(values, values.bookId))
        .then(() => {
          setSubmitting(false);
          resetForm();
        })
        .catch((error) => {
          setSubmitting(false);
        });
    }
  },
})(CreateEditBookForm);

CreateEditBookForm.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
};

export default connect()(Formik);
