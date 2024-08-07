import { getGetNextPickTimeQueryOptions } from "@/generated/pick/pick";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { useSuspenseQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { VoteLayout } from "./VoteLayout";

export function VoteDonePage() {
  const [next, setNext] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setNext(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AppScreen>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Suspense>
          <VoteLayout>
            <main className="flex flex-col px-8 py-7 space-y-4">
              {!next ? <DoneCongrat /> : <VoteLeftTime />}
            </main>
          </VoteLayout>
        </Suspense>
      </ErrorBoundary>
    </AppScreen>
  );
}

function DoneCongrat() {
  return (
    <>
      <div className="flex items-end justify-center h-[250px]">
        <img
          width={120}
          height={120}
          className="animate-zoom"
          alt="congrat"
          src="/src/assets/Congrat.gif"
        />
      </div>
      <div className="px-5 py-4 flex flex-col items-center space-y-[10px] bg-offWhite010/40 rounded-12 animate-zoom-sm">
        <h4 className="t-b2-m-15 text-gray064">투표 종료</h4>
        <p className="t-h2-b-26 text-purple100">투표를 끝냈어요!</p>
      </div>
    </>
  );
}

function VoteLeftTime() {
  const { data } = useSuspenseQuery(getGetNextPickTimeQueryOptions());
  const [time, setTime] = React.useState(() =>
    dayjs(data.data).diff(dayjs(), "second"),
  );
  const formattedTime = dayjs(time * 1000)
    .format("HH:mm:ss")
    .toString();

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        if (prev <= 0) {
          // move to vote page
          location.assign("/vote");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="flex items-end justify-center h-[250px]">
        <img
          width={120}
          height={120}
          alt="left-time"
          src="/src/assets/Waiting.gif"
        />
      </div>
      <div className="px-5 py-4 flex flex-col items-center space-y-[10px] bg-offWhite010/40 rounded-12">
        <h4 className="t-b2-m-15 text-gray064">다음 투표까지 남은 시간:</h4>
        <p className="t-h2-b-26 text-purple100 tabular-nums">{formattedTime}</p>
      </div>
    </>
  );
}
