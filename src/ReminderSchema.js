import * as Yup from "yup";

export default Yup.object().shape({
  description: Yup.string()
    .max(30, 'Description should be 30 chars or less!')
    .required('Description is Required'),
  date: Yup.date()
    .required('Required'),
  time: Yup.string(),
  city: Yup.string(),
  color: Yup.string()
});
