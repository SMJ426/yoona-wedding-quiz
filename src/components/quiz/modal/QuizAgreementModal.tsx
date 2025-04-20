interface Props {
  onCloseModal: () => void;
}

export default function QuizAgreementModal({ onCloseModal }: Props) {
  return (
    <div className="z-10 bg-[#f9f9f9] w-screen h-screen p-[20px] flex flex-col gap-[50px] items-center absolute top-0 left-0">
      {/* 메인 문구 */}
      <div className="mt-[50px] font-extrabold text-[30px]">
        <p>간단한 정보를</p>
        <p>입력해주세요!</p>
      </div>
      {/* 중앙 이미지 */}
      <img src="/images/couple.png" alt="정보수집동의" className="w-[70%]" />
      {/* 간단한 Q&A */}
      <div className="p-[20px] w-full border border-solid border-blue_gray-500 rounded-[9px]">
        <div className="flex items-center justify-start gap-[10px]">
          <p className="text-[50px]">🤷‍♂️</p>
          <div>
            <p className="text-[14px] text-gray-400">어디에 사용되나요?</p>
            <p className="text-[16px] font-bold">
              입력된 정보는 추첨용으로만 사용됩니다
            </p>
          </div>
        </div>
        <div className="flex items-center justify-start gap-[10px]">
          <p className="text-[50px]">🤷‍♀️</p>
          <div>
            <p className="text-[14px] text-gray-400">어떤 정보가 필요한가요?</p>
            <p className="text-[16px] font-bold">
              성함과, 전화번호가 필요합니다
            </p>
          </div>
        </div>
      </div>
      {/* 정보 입력하러 가기 */}
      <button
        type="button"
        onClick={onCloseModal}
        className="flex items-center justify-center w-full h-[55px] rounded-[10px] bg-blue-600 font-bold text-[18px] text-white"
      >
        정보 입력하러 가기
      </button>
    </div>
  );
}
