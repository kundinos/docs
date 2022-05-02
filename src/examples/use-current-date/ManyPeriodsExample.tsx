import React, { FC, memo } from "react";
import { useCurrentDate } from "@kundinos/react-hooks";

export interface FormattedDateProps {
  currentDate: Date;
  withMs?: boolean;
}

export interface DateProps {
  every: "millisecond" | "second" | "minute" | number;
  withMs?: boolean;
}

const styles = {
  p: {
    marginBottom: "10px",
  },
};

function addLeadingZero(number: number): string {
  return number < 10 ? `0${number}` : String(number);
}

const FormattedDate: FC<FormattedDateProps> = (props) => {
  const { currentDate, withMs } = props;

  // Получаем компоненты текущей даты
  const hours = addLeadingZero(currentDate.getHours());
  const minutes = addLeadingZero(currentDate.getMinutes());
  const seconds = addLeadingZero(currentDate.getSeconds());
  const milliseconds = currentDate.getMilliseconds();

  let str = `${hours}:${minutes}:${seconds}`;
  if (withMs) str += `:${milliseconds}`;

  return <strong>{str}</strong>;
};

const CurrentDate: FC<DateProps> = (props) => {
  const { every, withMs } = props;
  const currentDate = useCurrentDate({ every });

  return <FormattedDate currentDate={currentDate} withMs={withMs} />;
};

function ManyPeriodsExample() {
  return (
    <div>
      <p style={styles.p}>
        Обновляется каждую миллисекунду: <CurrentDate every={"millisecond"} withMs />
      </p>
      <p style={styles.p}>
        Обновляется каждую секунду: <CurrentDate every={"second"} />
      </p>
      <p style={styles.p}>
        Обновляется каждые 5 секунд: <CurrentDate every={5000} />
      </p>
      <p style={{ marginBottom: 0 }}>
        Обновляется каждую минуту: <CurrentDate every={"minute"} />
      </p>
    </div>
  );
}

export default memo(ManyPeriodsExample);
