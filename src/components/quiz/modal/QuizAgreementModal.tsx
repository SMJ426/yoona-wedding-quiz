interface Props {
  onCloseModal: () => void;
}

export default function QuizAgreementModal({ onCloseModal }: Props) {
  return (
    <div className="z-10 bg-[#f9f9f9] w-screen h-screen p-[20px] flex flex-col gap-[20px] items-center absolute top-0 left-0">
      {/* 메인 문구 */}
      <div className=" font-extrabold text-[30px]">
        <p>간단한 정보를</p>
        <p>입력해주세요!</p>
      </div>
      {/* 중앙 이미지 */}
      <div className="flex items-center justify-center gap-[15px] pb-[10px]">
        <img className="w-[120px]" src="/images/yoona.png" alt="유나" />
        <img className="w-[120px]" src="/images/heedo.png" alt="희도" />
      </div>
      {/* 간단한 Q&A */}
      <div className="p-[15px] w-full border border-solid border-blue_gray-500 rounded-[9px]">
        <div className="flex items-center justify-start gap-[10px]">
          <p className="text-[50px]">🤷‍♂️</p>
          <div>
            <p className="text-[14px] text-gray-400">어디에 사용되나요?</p>
            <p className="text-[16px] font-bold">
              입력된 정보는 추첨용으로만 사용돼요!
            </p>
          </div>
        </div>
        <div className="flex items-center justify-start gap-[10px]">
          <p className="text-[50px]">🤷‍♀️</p>
          <div>
            <p className="text-[14px] text-gray-400">어떤 정보가 필요한가요?</p>
            <p className="text-[16px] font-bold">
              성함과, 전화번호가 필요해요!
            </p>
          </div>
        </div>
      </div>
      {/* 정보 입력하러 가기 */}
      <div className="w-screen px-[20px] ">
        <button
          type="button"
          onClick={onCloseModal}
          className="flex items-center justify-center w-full h-[55px] rounded-[10px] bg-blue-600 font-bold text-[18px] text-white active:scale-95 transition-transform duration-100 "
        >
          정보 입력하러 가기
        </button>
      </div>
    </div>
  );
}
