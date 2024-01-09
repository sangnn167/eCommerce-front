import React, { FC } from 'react';
import styles from './styles.module.css';

type Props = {
  id?: string;
  name?: string;
  type?: 'text' | 'password' | 'email' | 'number';
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  label?: string;
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  mb?: number;
  mt?: number;
};

export const TextInput: FC<Props> = ({
  id,
  name,
  type,
  value,
  onChange,
  placeholder,
  disabled,
  label,
  style,
  labelStyle,
  inputStyle,
  mb = 0,
  mt = 0,
}) => {
  return (
    <div style={{ marginTop: mt, marginBottom: mb, ...style }} className={styles.container}>
      {label && (
        <div style={labelStyle} className={styles.label}>
          {label}
        </div>
      )}
      <input
        id={id}
        name={name}
        type={type}
        style={inputStyle}
        className={styles.input}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  );
};
