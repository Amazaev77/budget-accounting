import React, { FC, memo } from 'react'
import { FormControl, NativeSelect } from "@material-ui/core"

const months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

type PropsType = {
  month: string
  handleChangeMonth: (value: string) => void
}

const MonthSelect: FC<PropsType> = ({ month , handleChangeMonth}) => {
  const handleChange = (event: React.ChangeEvent<{ value: string }>) => {
    handleChangeMonth(event.target.value);
  }

  return (
    <div>
      <FormControl>
        <NativeSelect
          value={month}
          onChange={handleChange}
        >
          {months.map((m, idx) => (
            <option value={m} key={idx}>
              {m}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  )
}

export default memo(MonthSelect)