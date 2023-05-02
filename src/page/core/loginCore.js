import * as Yup from "yup"

export const initialValues = {
    email : "",
    password : "",
};

export const onSubmit = (values, actions) => {
    console.log(values);
};

export const validationSchema = Yup.object({
    email : Yup.string().required("لطفا این قسمت را پرکنید").email("قالب ایمیل را رعایت کنید"),
    password : Yup.string().required("لطفا این قسمت را پرکنید").min(8, "حداقل 8 کاراکتر"),
});