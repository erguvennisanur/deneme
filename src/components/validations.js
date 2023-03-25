import * as yup from "yup" ;

const validations = yup.object().shape({
    email: yup.string().email('Geçerli bir email girin .').required('Zorunlu Alan.'),
    password: yup.string().min(6,'6 haneli şifrenizi giriniz.').required('Zorunlu Alan.'),
    passwordConfirm: yup.string().oneOf([yup.ref('password')],'Parolalar uyuşmamaktadır.').required('Zorunlu Alan.'),
});

export default validations ;