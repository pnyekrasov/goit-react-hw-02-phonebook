import { InputFilter } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <InputFilter
      type="text"
      value={value}
      onChange={evt => onChange(evt.target.value)}
    />
  );
};
