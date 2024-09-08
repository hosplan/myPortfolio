export default function Introduce(){
    return (
      <div className="w-full flex flex-col gap-5">
        <div className="text-center flex flex-col gap-3">
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-extrabold">김태호</h2>
          <h2 className="text-xl sm:text-3xl md:text-5xl font-extrabold">
            웹 어플리케이션 개발자 포트폴리오
          </h2>
        </div>
        <div className="p-6">
          <div className="flex flex-col text-base sm:text-2xl md:text-4xl text-center gap-1 md:gap-3">
            <p>👋🏻 안녕하세요.</p>
            <p>성장하기 위해 끊임없이 도전하는</p>
            <p>웹 어플리케이션 개발자, 김태호 입니다.</p>
          </div>
        </div>

        <div className="p-2 grid grid-col-1 md:grid-cols-3 gap-10 md:gap-5 justify-center justify-items-center items-center text-2xl">
          <div className="flex flex-col text-center">
            <div className="text-center text-4xl">🧑🏻</div>
            <div className="text-center font-bold">이름</div>
            <div className="text-center">김태호</div>
          </div>
          <div>
            <div className="text-center text-4xl">📪</div>
            <div className="text-center font-bold">이메일</div>
            <div className="text-center">xogh940821@gmail.com</div>
          </div>
         
          <div>
            <div className="text-center text-4xl">🏠</div>
            <div className="text-center font-bold">주소지</div>
            <div className="text-center">대구광역시 북구</div>
          </div>
          <div>
            <div className="text-center text-4xl">📞</div>
            <div className="text-center font-bold">연락처</div>
            <div className="text-center">010-2827-0682</div>
          </div>
          <div>
            <div className="text-center text-4xl">🗒️</div>
            <div className="text-center font-bold">생년월일</div>
            <div className="text-center">94.08.21</div>
          </div>
          <div>
            <div className="text-center text-4xl">🏛️</div>
            <div className="text-center font-bold">학력</div>
            <div className="text-center">계명대학교</div>
          </div>
        </div>

        <div className="p-2 flex flex-row gap-2 justify-between justify-items-center items-center text-2xl"></div>
      </div>
    );
}