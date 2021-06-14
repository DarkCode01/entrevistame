import styled from "styled-components";

const Base = styled.select`
  width: 100%;
  padding: 10px 15px;
`;

interface ISelect {
  placeholder: string;
  options: { value: string; label: string }[];
}

export default function Select({ options, placeholder }: ISelect): JSX.Element {
  return (
    <Base>
      <option>{placeholder}</option>
      {options.map((_option, index) => (
        <option key={`${placeholder}-${index}`} value={_option.value}>
          {_option.label}
        </option>
      ))}
    </Base>
  );
}

Select.defaultProps = {
  placeholder: "Seleccione un valor",
  options: [],
};
