import Text from './Text';
import { Pressable, View, StyleSheet } from 'react-native';

import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import * as yup from "yup";
import { ScrollView } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 10,
    marginBottom: 8,
  },
  button: {
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 40,
    fontSize: 16,
    boderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  }
})

const validationSchema = yup.object().shape({
  username: yup
     .string()
     .required('Username is required'),
  password: yup
     .string()
     .required('password is required'),
})

const onSubmit = (values) => {
  console.log(values);
};

const SignIn = () => {
  return (
    <ScrollView
    contentContainerStyle={styles.container}>
          <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <View style={styles.inputContainer}>
          <FormikTextInput 
            name="username" 
            placeholder="Username"
            style={styles.input}
          />
          <FormikTextInput 
            name="password" 
            placeholder="Password"
            secureTextEntry
            style={styles.input}
          />
          <Pressable onPress={handleSubmit} style={styles.button}>
            <Text style={styles.buttonText}>Sign In</Text>
          </Pressable>
        </View>
      )}
    </Formik>
    </ScrollView>
  );
};



export default SignIn;