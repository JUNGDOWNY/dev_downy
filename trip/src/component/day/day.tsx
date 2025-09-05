"use client";
import Style  from "./day.module.scss";

function getDday(targetDate: string): number {
  // 여행 시작일: 2025-09-20, 종료일: 2025-09-23
  const start = new Date('2025-09-20');
  const end = new Date('2025-09-23');
  const input = new Date(targetDate);
  if (input < start) return 0; // 여행 전
  if (input > end) return 5; // 여행 완료
  // 여행 중: day1~day4
  return Math.floor((input.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;
}

const Day = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  const todayStr = `${yyyy}-${mm}-${dd}`;

  const result = getDday(todayStr);
  let dayResult = "";
  if (result === 0) {
    // 오늘 날짜와 여행 시작일 차이 계산
    const start = new Date('2025-09-20');
    const todayDate = new Date(todayStr);
    const diff = Math.ceil((start.getTime() - todayDate.getTime()) / (1000 * 60 * 60 * 24));
    dayResult = `D-${diff}`;
  } else if (result >= 1 && result <= 4) {
    dayResult = `day${result}`;
  } else if (result === 5) {
    dayResult = "여행 완료!";
  }

  return (
    <div className={Style.day}>
      <h2 className={Style.title}>오키나와 여행</h2>
        <div className={Style.result}>{dayResult}</div>
    </div>
  );
};

export default Day;
