export default function History(){
    return (
      <div className="flex flex-col gap-2 border-t border-b-slate-500 pt-10">
        {/* <div>
          <div className="text-2xl text-left">
            <p>현실에 안주해 있지 않고 성장하는 개발자가 되고 싶습니다.</p>
          </div>
          <div className="text-2xl text-left">
            <p>현재는 Saas 서비스를 운영하는 회사에 근무하고 있으며</p>
            <p>
              Saas 서비스를 운영,개발 을 하면서 다양한 경험과 기술을 배워나가고
              있습니다.
            </p>
          </div>
        </div> */}

        <div className="">
          <h3 className="text-left pt-6 text-4xl font-extrabold">📝 Project Career</h3>
          <div className="w-full p-10 flex flex-row gap-2">
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
              <li className="mb-10 ms-6 relative">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
                style={{top:"3px", left:"-36px"}}>
                  <svg
                    className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </span>
                <h3 className="flex items-center mb-1 text-2xl font-semibold dark:text-white">
                  Cartax 관리자 페이지 운영, 유지보수 및 기능 개발
                  
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-200 dark:text-white">
                  2024.06 ~ 현재
                </time>
                <p className="text-base font-normal dark:text-gray-400">
                  - Cartax 관리자 페이지 유지보수 및 트러블 슈팅, 리펙터링
                </p>
                <p className="mb-4 text-base font-normal  dark:text-gray-400">
                  - AI 운행기록 검사 기능 개발
                </p>
                <a
                  href="https://cartax.biz/features"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium  bg-white border text-blue-600 border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                  🚗 카택스 홈페이지 이동
                </a>
              </li>

              <li className="mb-10 ms-6 relative">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900" style={{top:"3px", left:"-36px"}}>
                  <svg
                    className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </span>
                <h3 className="flex items-center mb-1 text-2xl font-semibold  dark:text-white">
                  Iuniverse 개발
                 
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:">
                  2023.11 ~ 2024.05
                </time>
                <p className="text-base font-normal  dark:text-gray-400">
                  - 개발자 : 3명, 디자이너 : 1명으로 구성된 사이드 프로젝트
                </p>
                <p className="text-base font-normal  dark:text-gray-400">
                  - 사용자 경험에 맞춘 범용적인 업무지원 시스템
                </p>
                <p className="mb-4 text-base font-normal  dark:text-gray-400">
                  - 사이드 프로젝트
                </p>
                <a
                  href="https://iuniverse.me"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium  bg-white border text-blue-600 border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                 🖥️ Iuniverse로 이동하기
                </a>
              </li>
              <li className="mb-10 ms-6 relative">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900" style={{top:"3px", left:"-36px"}}>
                  <svg
                    className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </span>
                <h3 className="mb-1 text-2xl font-semibold  dark:text-white">
                  Clovine 운영 / 고도화 / 선행 연구 개발
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:">
                  2022.06 ~ 2023.10
                </time>
                <p className="text-base font-normal  dark:text-gray-400">
                  - Clovine 핵심 이슈/오류 트러블 슈팅 및 운영 개선
                </p>

                <p className="text-base font-normal  dark:text-gray-400">
                  - 개발 확장성을 고려한 모듈화 작업 진행
                </p>

                <p className="text-base font-normal  dark:text-gray-400">
                  - 신규 제품 기능 개선 및 개발에 필요한 선행 신 기술 연구
                </p>
              </li>
              <li className="ms-6 mb-10 relative">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900" style={{top:"3px", left:"-36px"}}>
                  <svg
                    className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </span>
                <h3 className="mb-1 text-2xl font-semibold  dark:text-white">
                  Dynamic Mindmap 개발
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:">
                  2022.10 ~ 2023.06 (업무 외 개인 프로토타입 개발 2022.09 ~
                  2022.10)
                </time>
                <p className="text-base font-normal  dark:text-gray-400">
                  - 기존 Clovine Mindmap 을 대처하는 D3.js 를 활용한 차세대
                  MindMap 개발
                </p>

                <p className="text-base font-normal  dark:text-gray-400">
                  - 회사 입사 후 기존 마인드맵의 현재 구조상 발생되는 성능 이슈,
                  버그 해결 및 신규 기술을 적용하고 싶어 개인시간 투자
                </p>
                <p className="text-base font-normal  dark:text-gray-400">
                  - 프로토 타입 개발 성능 및 UI 등의 강점으로 인해 정식
                  프로젝트로 승격
                </p>
              </li>
              <li className="ms-6 mb-10 relative">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900" style={{top:"3px", left:"-36px"}}>
                  <svg
                    className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </span>
                <h3 className="mb-1 text-2xl font-semibold  dark:text-white">
                  Clovine MSA Converting 시도
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:">
                  2022.08 ~ 2022.09
                </time>
                <p className="text-base font-normal  dark:text-gray-400">
                  Get started with dozens of web components and interactive
                  elements built on top of Tailwind CSS.
                </p>
              </li>
              <li className="ms-6 mb-10 relative">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900" style={{top:"3px", left:"-36px"}}>
                  <svg
                    className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </span>
                <h3 className="mb-1 text-2xl font-semibold  dark:text-white">
                  MD 산업 자재 관리 스마트 팩토리 개발
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:">
                  2022.03 ~ 2022.12
                </time>
                <p className="text-base font-normal  dark:text-gray-400">
                  - 판넬 제조업 특성 맞춤 MES 자재관리 파트개발
                </p>
                <p className="text-base font-normal  dark:text-gray-400">
                  - 판넬 제조 시 발생되는 불량 품목 실시간 감지(스마트 카메라
                  자체 개발)
                </p>
              </li>
              <li className="ms-6 mb-10 relative">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900" style={{top:"3px", left:"-36px"}}>
                  <svg
                    className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </span>
                <h3 className="mb-1 text-2xl font-semibold  dark:text-white">
                  대우조선 엔지니어링 EDDM 개발
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:">
                  2021.05 ~ 2021.12
                </time>
                <p className="text-base font-normal  dark:text-gray-400">
                  - EDDM (Engienrring data digital map)
                </p>

                <p className="text-base font-normal  dark:text-gray-400">
                  - 대우조선 선박 건조에 필요한 설계 작업에 활용되는 API 루트
                  비교
                </p>

                <p className="text-base font-normal  dark:text-gray-400">
                  - 최적의 API 루트 맵 추천
                </p>
              </li>
              <li className="ms-6 mb-10 relative">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900" style={{top:"3px", left:"-36px"}}>
                  <svg
                    className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </span>
                <h3 className="mb-1 text-2xl font-semibold  dark:text-white">
                  프로젝트 관리 솔루션 PMIS 개발 / 운영
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:">
                  기간 : 2020.12 ~ 2021.09
                </time>
                <p className="text-base font-normal  dark:text-gray-400">
                  - PMIS(Project Management Information System)
                </p>

                <p className="text-base font-normal  dark:text-gray-400">
                  - 상기 프로젝트의 선박설계(Spec 형상관리, HandOver) 파트로
                  쌓은 노하우로 선박 업중에 한정시키지 않은 자사의 시스템
                </p>

                <p className="text-base font-normal  dark:text-gray-400">
                  - 선박 설계 파트의 담당 경험 기반으로 1인 개발
                </p>

                <p className="text-base font-normal  dark:text-gray-400">
                  - 해군사관학교, 진주 사천 드림팜 시스템 도입
                </p>
              </li>
              <li className="ms-6 mb-10 relative">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900" style={{top:"3px", left:"-36px"}}>
                  <svg
                    className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </span>
                <h3 className="mb-1 text-2xl font-semibold  dark:text-white">
                  현대미포조선 차세대 해양조선 시스템 개발 / 안정화
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:">
                  기간 : 2020.02 ~ 2020.11
                </time>
                <p className="text-base font-normal  dark:text-gray-400">
                  - 현대미포조선 차세대 해양 중/소형 선박건조 시스템
                </p>

                <p className="text-base font-normal  dark:text-gray-400">
                  - 선박 계약 부터 설계나 제조 출하 까지의 모든 업무 프로세스
                  개선, 차세대 개발
                </p>

                <p className="text-base font-normal  dark:text-gray-400">
                  - 타사 시스템(지멘스-Polarion) API 성능 이슈 및 프로젝트
                  수주사의 프로세스 규모 및 상황에 맞춰 관련 모듈 자체 개발
                </p>
              </li>
              <li className="ms-6 mb-10 relative">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900" style={{top:"3px", left:"-36px"}}>
                  <svg
                    className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </span>
                <h3 className="mb-2 text-2xl font-semibold  dark:text-white">
                  현대중공업 차세대 해양조선 시스템 개발 / 안정화
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:">
                  기간 : 2019.02 ~ 2020.01
                </time>
                <p className="text-base font-normal  dark:text-gray-400">
                  - 현대중공업 차세대 해양 초대형 선박건조 시스템
                </p>
                <p className="text-base font-normal  dark:text-gray-400">
                  - 선박 계약 부터 설계나 제조 출하 까지의 모든 업무 프로세스
                  개선, 차세대 개발
                </p>
              </li>
            </ol>

            {/* <div className="w-full border-r border-b-slate-500 p-5">
                        <p className="text-2xl">🏢 회사업무</p>
                        <ol className="list-decimal text-xl pt-2">
                        <li>현대중공업 차세대 해양조선 시스템 개발 / 안정화</li>
                        <li>현대미포조선 차세대 해양조선 시스템 개발 / 안정화</li>
                        <li>프로젝트 관리 솔루션 PMIS 개발 / 운영</li>
                        <li>대우조선 엔지니어링 EDDM 개발</li>
                        <li>MD산업 자재관리 스마트 팩토리 개발</li>
                        <li>Clovine MSA Converting 시도</li>
                        <li>Dynamic Mindmap 개발</li>
                        <li>Clovine 운영 / 고도화 / 선행연구 개발</li>
                        <li>Cartax 운영 / 유지보수 / 기능개발</li>
                        </ol>
                    </div>
                    <div className="w-full p-5">
                        <p className="text-2xl">🏃‍♂️ 개인 성장을 위한 노력</p>
                        <ol className="list-decimal text-xl pt-2">
                        <li>빅데이터 공유 / 시각화 및 공모전 개최 플랫폼</li>
                        <li>다엘 음악학원 통합관리 시스템</li>
                        <li>사용자 경험에 맞춘 범용적 업무 지원 시스템 Iuniverse</li>  
                        </ol>  
                    </div> */}
          </div>
        </div>
      </div>
    );
}