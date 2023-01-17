import React from "react";
import { Text, TextProps } from 'react-native'

import styles from "./styles";

const Name: React.FC<TextProps> = ({ children, style }) => (
    <Text testID="card-name-test-id" style={[styles.name, style]}>{children}</Text>
)

export default Name;