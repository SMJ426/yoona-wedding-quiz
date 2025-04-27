'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

// 자동으로 '-' 붙여주는 로직
const formatPhoneNumber = (value: string) => {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  const len = digits.length;
  if (len < 4) {
    return digits;
  } else if (len < 8) {
    return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  } else {
    return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`;
  }
};

const EntryForm: React.FC = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [displayName, setDisplayName] = useState('');

  // 포맷된 값을 /^010-\d{4}-\d{4}$/ 으로 체크
  const validatePhone = (value: string) => {
    const phoneRegex = /^010-\d{4}-\d{4}$/;
    if (!phoneRegex.test(value)) {
      setPhoneError('전화번호 형식이 올바르지 않습니다. (예: 010-1234-5678)');
    } else {
      setPhoneError('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneError) {
      alert('전화번호 형식이 올바르지 않습니다.');
      return;
    }
    alert(`제출됨: 이름=${name}, 전화번호=${phone}`);
    router.push('/quiz/main');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-start w-screen h-screen gap-[40px] p-[20px]"
    >
      <div className="font-extrabold text-[30px] flex flex-col items-center justify-center w-full mt-[100px] text-center">
        <p className="min-h-[36px] font-extrabold text-[35px]">
          {displayName ? `${displayName}님,` : '\u00A0'}
        </p>
        <p>퀴즈 참여를 위해</p>
        <p>아래 정보를 입력해주세요</p>
      </div>

      {/* 이름 입력 필드 */}
      <label className="flex gap-[0px] flex-col w-full h-[50px] mt-[50px]">
        <p className="text-[13px]">이름</p>
        <input
          type="text"
          placeholder="이름을 입력하세요"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => setDisplayName(name.trim())}
          required
          className="text-[20px] bg-[#f9f9f9] font-bold focus:outline-none focus:ring-0 p-[6px] border-b-[2px]"
        />
      </label>

      {/** 전화번호 필드 */}
      <label className="flex flex-col w-full min-h-[70px]">
        <p className="text-[13px]">휴대폰 번호 (010-0000-0000)</p>
        <input
          type="tel"
          placeholder="숫자만 입력하세요"
          value={phone}
          onChange={(e) => {
            const formatted = formatPhoneNumber(e.target.value);
            setPhone(formatted);
            if (phoneError) setPhoneError('');
          }}
          onBlur={(e) => validatePhone(e.target.value)}
          required
          className="text-[20px] bg-[#f9f9f9] font-bold focus:outline-none focus:ring-0 p-[6px] border-b-[2px]"
        />
        <p className="mt-1 text-sm min-h-[20px] text-red-500">
          {phoneError || '\u00A0'}
        </p>
      </label>

      <button
        type="submit"
        className="flex items-center justify-center px-[20px] py-[10px] rounded bg-blue-600 font-bold text-[18px] text-white"
      >
        제출
      </button>
    </form>
  );
};

export default EntryForm;
