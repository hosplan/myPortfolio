export default function Cartax(){
    return (
      <div className="flex flex-col gap-5 border-t border-b-slate-500 pt-10 w-full">
        <div className="text-4xl text-left font-extrabold">
          <p>🚗 Cartax</p>
        </div>
        <div className="text-xl font-bold">
          <p>1. 개요</p>
          <p>차량운행일지로부터 유류비정산, 지출관리, 차량관리까지 법인차 관리의 필요한 모든 기능을 손쉽게 제공</p>
        </div>
        <div>
          <p>- 앱을 통한 간단한 사용으로 기기를 부착해야되는 타사의 법인차량운행관리 서비스보다 차별점을 제공</p>
          <p>- 사용자에게는 앱과 관리에 에게는 웹페이지을 지원함으로써 체계적으로 관리가 가능</p>
         
        </div>
        <div>
          <p>2. 주요업무</p>
          <p>- 카택스 관리자 페이지 유지보수 / 트러블 슈팅 / 기능개발</p>
          <p>- AI 운행기록검사 기능 개발</p>
          <p>- 기존의 회사 소개페이지 php에서 React로 반응형 변경작업 진행</p>
        </div>
        <div>
          <p>🔎 주 사용기술</p>
          <p>- NextJS, TypeScript</p>
          <p>- Mysql</p>
        </div>
      </div>
    );
}