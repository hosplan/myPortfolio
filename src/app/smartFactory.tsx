export default function SmartFactory(){
    return (
      <div className="flex flex-col gap-5 border-t pt-10 border-b-slate-500 w-full">
        <div className="text-4xl text-left font-extrabold">
          <p>🏭 MD산업 스마트팩토리 </p>
        </div>
        <div className="text-xl font-bold">
          <p>1. 개요</p>
          <p>판넬 제조업 특성 맞춤 MES 자재관리 파트개발</p>
          
        </div>
        <div>
          <p>2. 주요업무</p>
          <p>- 기존의 수기로 관리되던 기업의 프로세스를 전산화 변경 작업</p>
          <p>
            - 판넬 제조 시 발생되는 불량 품목 실시간 감지(스마트 카메라 자체 개발)
          </p>
          <p>- 제품, 자재, 생산 지시서 관리</p>
          <p>- QR-Code를 활용한 자재의 실시간 위치 파악</p>
          <p>- Clovine B2B 버전 API 연동 작업</p>
          <p>
            - Alibi-Detect를 활용한 불량감지 인공지능 모듈 개발 및 스마트 카메라
            연동
          </p>
        </div>
        <div>
          <p>🔎 주 사용기술</p>
          <p>- React, Node.js, python</p>
          <p>- mongodb</p>
        </div>
      </div>
    );
}