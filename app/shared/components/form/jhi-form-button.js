import React from 'react';
import { useFormikContext } from 'formik';
import { Text, TouchableOpacity } from 'react-native';
import { ApplicationStyles } from '../../themes';

export default React.forwardRef(({ title, ...otherProps }, ref) => {
  const { handleSubmit } = useFormikContext();

  return (
    <TouchableOpacity style={[ApplicationStyles.screen.button]} onPress={handleSubmit} ref={ref} {...otherProps}>
      <Text style={ApplicationStyles.screen.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
});
