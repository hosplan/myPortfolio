import Link from "next/link";

export default function Iuniverse(){
    return (
      <div className="flex flex-col gap-5 border-t border-b-slate-500 pt-10 w-full">
        <div className="text-4xl text-left font-extrabold">
          <p>🖥️ Iuniverse</p>
        </div>
        <div className="text-xl font-bold">
          <p className="font-bold">1. 개요</p>
          <p className="font-bold">사용자 경험에 맞춘 범용적인 업무지원 시스템</p>
          
        </div>
        <div>
          <p>- 개발인원: 3명, 디자이너: 1명 으로 구성</p>
          <p>- FrontEnd 와 BackEnd를 분리하여 독립적으로 개발 및 운영</p>
          <p>
            - 보다 쉽게 업무를 관리할 수 있게끔 업무를 지원하며 자칫 지루 해질 수
            있는 시스템을 아바타 기능을 도입하여 해소
          </p>
         
        </div>
        <div>
          <p>2. 주요업무</p>
          <p>- 프로젝트 PM</p>
          <p>- 프로젝트 기획,설계 에서 개발, 배포, 운영까지 총괄 역할</p>
        </div>
        <div>
          <p>🔎 주 사용기술</p>
          <p>- FrontEnd: NextJS, TypeScript</p>
          <p>- BackEnd: Java</p>
          <p>- Postgre, Jwt, Https</p>
          <p>- AWS, AWS SES, Docker</p>
        </div>
        <div>
        <p className="text-blue-600">
            <Link href={"https://github.com/hosplan/pub-iuni-service"}>
              💻 Iuniverse FrontEnd 코드 보러가기
            </Link>
          </p>

          <p className="text-blue-600">
            <Link href={"https://github.com/hosplan/pub-content-api"}>
              💻 Iuniverse ContentAPI 코드 보러가기
            </Link>
          </p>
          <p className="text-blue-600">
            {" "}
            <Link href={"https://github.com/hosplan/pub-login-api"}>
             💻 Iuniverse LoginAPI 코드 보러가기
            </Link>
          </p>
        </div>
      </div>
    );
}