import React, { useState, useEffect } from "react";
import styled from "styled-components";

const RowContainer = styled.div`
  color: hsl(0, 0%, 100%);
  display: flex;
  justify-content: center;
  gap: 1.4vmax;
`;

const Heading = styled.h1`
  color: #988301;
  text-align: center;
  font-size: 1.6vmax;
  letter-spacing: -0.5px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 48px;
  height: 48px;
`;

const ItemValue = styled.span`
  color: white;
  font-size: 1.6vmax;
  font-weight: bold;
  margin-bottom: 0px;
`;
const ItemLabel = styled.p`
  color: white;
  font-size: 14px;
  margin-bottom: 3px;
  letter-spacing: 0;
`;

const Card = styled.div`
  align-self: baseline;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  text-align: center;
  margin-bottom: 5px;
  margin-left: auto;
  margin-right: auto;
`;
interface timerTypes {
  timerVisible?: boolean;
  setTimerVisible?: any;
  mintStartAt?: any;
}
const Timer: React.FC<timerTypes> = ({
  mintStartAt,
  setTimerVisible,
  timerVisible,
}) => {
  const [title, setTitle] = useState("");
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now() / 1000;
      if (now < mintStartAt) {
        setTitle(``);
        setDays(Math.floor((mintStartAt - now) / (60 * 60 * 24)));
        setHours(Math.floor((mintStartAt - now) / (60 * 60)) % 24);
        setMinutes(Math.floor((mintStartAt - now) / 60) % 60);
        setSeconds(Math.floor(mintStartAt - now) % 60);
        setTimerVisible(true);
      } else {
        setTimerVisible(false);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [mintStartAt]);

  return timerVisible ? (
    <Card>
      <Heading>{title}</Heading>
      <RowContainer>
        <Item>
          <ItemValue id="days">
            {days.toLocaleString("en-US", { minimumIntegerDigits: 2 })}
          </ItemValue>
          <ItemLabel>Day</ItemLabel>
        </Item>
        <Item>
          <ItemValue id="days">
            {hours.toLocaleString("en-US", { minimumIntegerDigits: 2 })}
          </ItemValue>
          <ItemLabel>Hour</ItemLabel>
        </Item>
        <Item>
          <ItemValue id="days">
            {minutes.toLocaleString("en-US", { minimumIntegerDigits: 2 })}
          </ItemValue>
          <ItemLabel>Min</ItemLabel>
        </Item>
        <Item>
          <ItemValue id="days">
            {seconds.toLocaleString("en-US", { minimumIntegerDigits: 2 })}
          </ItemValue>
          <ItemLabel>Sec</ItemLabel>
        </Item>
      </RowContainer>
    </Card>
  ) : (
    <>
      <p>Mint Now Before It’s Too Late!</p>
    </>
  );
};

export default Timer;
