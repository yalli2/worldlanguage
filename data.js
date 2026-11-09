/* 세계 외국어 시험 데이터 — 2026-11 조사. 응시료·일정은 변동되니 공식 사이트에서 확인하세요. */
window.EXAMS = [
 {
  "id": "toeic",
  "lang": "en",
  "name": "TOEIC",
  "full": "Test of English for International Communication (Listening & Reading)",
  "org": "ETS (한국: YBM 한국TOEIC위원회)",
  "official": "https://www.ets.org/toeic.html",
  "levels": "10–990점 (LC 5–495 + RC 5–495)",
  "levels_en": "10–990 (Listening 5–495 + Reading 5–495)",
  "cefr": "ETS 공식 CEFR 대응표 제공 (A1–C1; 예: B2 = L400/R385 이상)",
  "fees": [
   {
    "country": "KR",
    "amount": "52,500원",
    "note": "정기접수 (특별추가접수 57,750원, 10% 가산). 2024-06-16 시행분부터 적용 — 공식 사이트 직접 확인 불가로 나무위키·언론 보도 기준, 2026-11 기준"
   },
   {
    "country": "JP",
    "amount": "7,810엔 (세금 포함, 종이 성적표 발급) / 7,700엔 (디지털 성적표만)",
    "note": "IIBC 공개테스트, 2026-11 기준"
   },
   {
    "country": "US",
    "amount": "미확인",
    "note": "ETS 공식 페이지에 금액 미표시 (온라인 접수 시 확인)"
   }
  ],
  "register": [
   {
    "country": "KR",
    "label": "YBM 한국TOEIC위원회 시험접수",
    "url": "https://exam.toeic.co.kr/receipt/receiptStep1.php"
   },
   {
    "country": "JP",
    "label": "IIBC (일본 TOEIC 운영기관)",
    "url": "https://www.iibc-global.org/english/toeic/"
   },
   {
    "country": "US",
    "label": "ETS TOEIC 접수 (미국·캐나다)",
    "url": "https://www.ets.org/toeic/test-takers/register.html"
   },
   {
    "country": "GLOBAL",
    "label": "ETS 국가별 운영기관(EPN) 목록",
    "url": "https://www.ets.org/epn_directory.html"
   }
  ],
  "practice": [
   {
    "label": "ETS 공식 TOEIC L&R 샘플 테스트 (PDF)",
    "url": "https://www.ets.org/content/dam/ets-org/pdfs/toeic/toeic-listening-reading-sample-test.pdf"
   },
   {
    "label": "ETS TOEIC–CEFR 대응표 (PDF)",
    "url": "https://www.ets.org/content/dam/ets-org/pdfs/toeic/toeic-mapping-cefr-reference.pdf"
   }
  ],
  "note": "국내 취업·승진·졸업 기준으로 가장 널리 쓰이는 비즈니스 영어 시험",
  "note_en": "The most widely used workplace English test for jobs and promotion in Korea",
  "validity": "2년"
 },
 {
  "id": "toeic-sw",
  "lang": "en",
  "name": "TOEIC Speaking & Writing",
  "full": "TOEIC Speaking and Writing Tests",
  "org": "ETS (한국: YBM 한국TOEIC위원회)",
  "official": "https://www.ets.org/toeic/about/speaking-writing.html",
  "levels": "Speaking 0–200점, Writing 0–200점 (점수대별 등급 병기)",
  "levels_en": "Speaking 0–200, Writing 0–200 (with proficiency levels)",
  "cefr": "ETS 공식 CEFR 대응표 제공 (예: Speaking B2 = 160, C1 = 180 이상)",
  "fees": [
   {
    "country": "KR",
    "amount": "84,000원",
    "note": "TOEIC Speaking 또는 Writing 단일 시험 (S&W 통합 114,400원) — 공식 사이트 직접 확인 불가로 나무위키 기준, 2026-11 기준"
   },
   {
    "country": "JP",
    "amount": "10,450엔 (세금 포함)",
    "note": "IIBC S&W, 추가접수 13,200엔, 2026-11 기준"
   }
  ],
  "register": [
   {
    "country": "KR",
    "label": "YBM 한국TOEIC위원회 시험접수",
    "url": "https://exam.toeic.co.kr/receipt/receiptStep1.php"
   },
   {
    "country": "JP",
    "label": "IIBC (일본)",
    "url": "https://www.iibc-global.org/english/toeic/test/sw/guide01.html?hsLang=ja"
   },
   {
    "country": "US",
    "label": "ETS TOEIC 접수 안내 (미국은 AMIDEAST 경유)",
    "url": "https://www.ets.org/toeic/test-takers/register.html"
   },
   {
    "country": "GLOBAL",
    "label": "ETS 국가별 운영기관(EPN) 목록",
    "url": "https://www.ets.org/epn_directory.html"
   }
  ],
  "practice": [
   {
    "label": "ETS 공식 TOEIC S&W 샘플 테스트 (PDF)",
    "url": "https://www.ets.org/content/dam/ets-org/pdfs/toeic/toeic-speaking-writing-sample-tests.pdf"
   }
  ],
  "note": "말하기·쓰기 능력 평가, 국내 기업 채용에서 토익스피킹 등급(IM·IH·AL) 요구가 많음",
  "note_en": "Speaking/writing test; Korean employers often require TOEIC Speaking levels",
  "validity": "2년"
 },
 {
  "id": "toefl",
  "lang": "en",
  "name": "TOEFL iBT",
  "full": "Test of English as a Foreign Language, internet-Based Test",
  "org": "ETS",
  "official": "https://www.ets.org/toefl.html",
  "levels": "2026년 1월부터 1–6 밴드(0.5 단위) — 전환기 2년간 0–120점 환산점수 병기",
  "levels_en": "Band 1–6 in 0.5 steps (since Jan 2026); comparable 0–120 score shown during 2-year transition",
  "cefr": "ETS가 새 1–6 척도를 CEFR과 정렬되도록 설계했다고 명시",
  "fees": [
   {
    "country": "KR",
    "amount": "ETS 접수 페이지에서 시험장 선택 시 표시 (USD, 세금 별도)",
    "note": "국가별 상이. 부가 요금: 긴급 접수 $49, 일정 변경 $69, 추가 성적표 $29 — 2026-11 기준"
   }
  ],
  "register": [
   {
    "country": "KR",
    "label": "ETS 한국어 접수 안내",
    "url": "https://www.kr.ets.org/toefl/test-takers/ibt/register/how-to-register.html"
   },
   {
    "country": "KR",
    "label": "한미교육위원단(풀브라이트) 시험센터 안내",
    "url": "https://testing.fulbright.or.kr/en/exams/toefl/"
   },
   {
    "country": "GLOBAL",
    "label": "ETS TOEFL iBT 접수(Book Now)",
    "url": "https://www.ets.org/oets-toefl/register"
   },
   {
    "country": "GLOBAL",
    "label": "응시 방식(시험장·재택) 안내",
    "url": "https://www.ets.org/content/ets-org/language-master/en/home/toefl/test-takers/ibt/about/testing-options.html"
   }
  ],
  "practice": [
   {
    "label": "ETS 공식 TOEFL iBT 샘플 테스트",
    "url": "https://www.ets.org/toefl/test-takers/ibt/prepare/sample-test.html"
   },
   {
    "label": "ETS 공식 TOEFL 풀렝스 샘플 테스트 (2026 신형식, 간단한 양식 작성 후)",
    "url": "https://www.ets.org/toefl/test-takers/ibt/prepare/sample-test-jan-2026-1.html"
   },
   {
    "label": "ETS Global 무료 TOEFL 체험 테스트",
    "url": "https://goglobal.ets.org/try-the-toefl-test-for-free"
   }
  ],
  "note": "미국 등 해외 대학·대학원 유학용 대표 시험, 2026년 1월 개편(1–6 밴드)",
  "note_en": "Leading test for study abroad; redesigned January 2026 with a 1–6 band scale",
  "validity": "2년",
  "cefr_map": {
   "A1": "1",
   "A2": "2",
   "B1": "3",
   "B2": "4",
   "C1": "5",
   "C2": "6"
  }
 },
 {
  "id": "ielts",
  "lang": "en",
  "name": "IELTS",
  "full": "International English Language Testing System (Academic / General Training, One Skill Retake 포함)",
  "org": "British Council · IDP · Cambridge University Press & Assessment",
  "official": "https://ielts.org/",
  "levels": "밴드 0–9 (0.5 단위)",
  "levels_en": "Band 0–9 (half-band steps)",
  "cefr": "IELTS 공식: 8.5 이상 C2, C1 하한은 6.5–7 사이 (공식 CEFR 비교 페이지)",
  "fees": [
   {
    "country": "KR",
    "amount": "347,000원",
    "note": "Academic/General Training 컴퓨터 시험 (UKVI 389,000원, Life Skills 312,000원). 2026-03-22부터 한국은 컴퓨터 시험만 시행. British Council Korea 기준, 2026-11"
   },
   {
    "country": "GLOBAL",
    "amount": "One Skill Retake: 시험센터별 상이",
    "note": "공식 고정 가격 없음"
   }
  ],
  "register": [
   {
    "country": "KR",
    "label": "British Council Korea 접수 (Academic/General)",
    "url": "https://ieltsregistration.britishcouncil.org/?country=KR&lang=ko"
   },
   {
    "country": "KR",
    "label": "British Council Korea 시험일·응시료 안내",
    "url": "https://www.britishcouncil.kr/exam/ielts/dates-fees-locations"
   },
   {
    "country": "JP",
    "label": "일본 英検協会 IELTS 공식 사이트",
    "url": "https://www.eiken.or.jp/ielts/"
   },
   {
    "country": "GLOBAL",
    "label": "IELTS 공식 시험센터 찾기",
    "url": "https://ielts.org/test-centres"
   },
   {
    "country": "GLOBAL",
    "label": "IELTS One Skill Retake 안내",
    "url": "https://ielts.org/take-a-test/booking-your-test/one-skill-retake"
   }
  ],
  "practice": [
   {
    "label": "IELTS 공식 무료 샘플 문제",
    "url": "https://ielts.org/take-a-test/preparation-resources/sample-test-questions"
   },
   {
    "label": "IELTS Trial Test",
    "url": "https://ielts.org/take-a-test/preparation-resources/ielts-trial-test"
   },
   {
    "label": "IELTS와 CEFR 비교 (공식)",
    "url": "https://ielts.org/organisations/ielts-for-organisations/compare-ielts/ielts-and-the-cefr"
   }
  ],
  "note": "영국·호주·캐나다 유학·이민용 대표 시험. One Skill Retake로 컴퓨터 시험 후 60일 내 한 영역만 재응시 가능",
  "note_en": "Main test for UK/Australia/Canada study and migration; One Skill Retake lets you resit one skill within 60 days",
  "validity": "2년 (권장)",
  "cefr_map": {
   "C1": "≈7.0+",
   "C2": "8.5+"
  }
 },
 {
  "id": "cambridge",
  "lang": "en",
  "name": "Cambridge English Qualifications",
  "full": "A2 Key · B1 Preliminary · B2 First · C1 Advanced · C2 Proficiency (+ Young Learners)",
  "org": "Cambridge University Press & Assessment",
  "official": "https://www.cambridgeenglish.org/exams-and-tests/qualifications/",
  "levels": "Cambridge English Scale: A2 Key 100–150, B1 Preliminary 120–170, B2 First 140–190, C1 Advanced 160–210, C2 Proficiency 180–230 (등급 A/B/C)",
  "levels_en": "Cambridge English Scale: Key 100–150, Preliminary 120–170, First 140–190, Advanced 160–210, Proficiency 180–230 (grades A/B/C)",
  "cefr": "시험명 자체가 CEFR 레벨 (A2–C2), 점수별 CEFR 공식 표기",
  "fees": [
   {
    "country": "KR",
    "amount": "시험센터별 상이",
    "note": "공식 통일 응시료 없음 — 공인 시험센터에 문의, 2026-11 기준"
   }
  ],
  "register": [
   {
    "country": "GLOBAL",
    "label": "Cambridge 공식 시험센터 찾기 (한국 포함)",
    "url": "https://www.cambridgeenglish.org/find-a-centre/index.aspx"
   }
  ],
  "practice": [
   {
    "label": "A2 Key 공식 무료 샘플 테스트",
    "url": "https://www.cambridgeenglish.org/exams-and-tests/qualifications/key/preparation/index.aspx"
   },
   {
    "label": "B1 Preliminary 공식 무료 샘플 테스트",
    "url": "https://www.cambridgeenglish.org/exams-and-tests/qualifications/preliminary/preparation/index.aspx"
   },
   {
    "label": "B2 First 공식 무료 샘플 테스트 (디지털·종이)",
    "url": "https://www.cambridgeenglish.org/exams-and-tests/qualifications/first/preparation/index.aspx"
   },
   {
    "label": "C1 Advanced 공식 샘플 테스트",
    "url": "https://www.cambridgeenglish.org/exams-and-tests/qualifications/advanced/preparation/index.aspx"
   },
   {
    "label": "C2 Proficiency 공식 샘플 테스트",
    "url": "https://www.cambridgeenglish.org/exams-and-tests/qualifications/proficiency/preparation/index.aspx"
   }
  ],
  "note": "레벨별 자격증 시험, 합격 시 평생 유효한 증명서 (기관별 인정 기간은 상이)",
  "note_en": "Level-based qualifications; certificates do not expire (recognising bodies set their own limits)",
  "validity": "평생 (만료 없음)",
  "cefr_map": {
   "A2": "Key",
   "B1": "Preliminary",
   "B2": "First",
   "C1": "Advanced",
   "C2": "Proficiency"
  }
 },
 {
  "id": "pte",
  "lang": "en",
  "name": "PTE Academic",
  "full": "Pearson Test of English Academic",
  "org": "Pearson",
  "official": "https://www.pearsonpte.com/pte-academic/",
  "levels": "10–90점 (영역별 점수 + GSE)",
  "levels_en": "10–90 overall (plus skill scores, GSE)",
  "cefr": "공식 대응표 제공 (예: B2 50–75, C1 59–82, C2 76–90)",
  "fees": [
   {
    "country": "KR",
    "amount": "국가별 상이 — 공식 사이트에서 국가 선택 시 표시",
    "note": "공식 요금 페이지 자동 조회 불가, 2026-11 기준"
   }
  ],
  "register": [
   {
    "country": "GLOBAL",
    "label": "PTE 시험센터·응시료 찾기 (한국 포함)",
    "url": "https://www.pearsonpte.com/test-centers-and-fees.html"
   },
   {
    "country": "GLOBAL",
    "label": "myPTE 시험 예약",
    "url": "https://mypte.pearsonpte.com/test/search?examCode=PTE-A"
   }
  ],
  "practice": [
   {
    "label": "PTE 공식 Smart Prep 무료 Guided Practice Test (myPTE 계정 필요)",
    "url": "https://www.pearsonpte.com/articles/practice-for-pte-smart-preps-guided-practice-tests/"
   },
   {
    "label": "PTE 공식 Scored Practice Test (유료 모의고사)",
    "url": "https://www.pearsonpte.com/pte-academic/preparation/scored-practice-test/"
   }
  ],
  "note": "컴퓨터 기반 AI 채점, 결과가 빨라 호주·영국 유학·이민에 많이 사용",
  "note_en": "Computer-based, AI-scored test popular for Australia/UK study and migration",
  "validity": "2년",
  "cefr_map": {
   "B2": "50–75",
   "C1": "59–82",
   "C2": "76–90"
  }
 },
 {
  "id": "det",
  "lang": "en",
  "name": "Duolingo English Test",
  "full": "Duolingo English Test (DET)",
  "org": "Duolingo",
  "official": "https://englishtest.duolingo.com/",
  "levels": "10–160점 (5점 단위)",
  "levels_en": "10–160 (5-point steps)",
  "cefr": "공식 대응: A1–A2 10–55, B1 60–95, B2 100–125, C1 130–150, C2 155–160",
  "fees": [
   {
    "country": "GLOBAL",
    "amount": "US$70",
    "note": "전 세계 동일 온라인 응시료 (Duolingo 공식 블로그 기준, 게시일 미표시 — 결제 시 재확인 권장), 2026-11"
   }
  ],
  "register": [
   {
    "country": "GLOBAL",
    "label": "Duolingo English Test 온라인 응시 (재택, 국가 무관)",
    "url": "https://englishtest.duolingo.com/"
   }
  ],
  "practice": [
   {
    "label": "DET 공식 무료 연습 시험",
    "url": "https://englishtest.duolingo.com/practice"
   }
  ],
  "note": "집에서 약 1시간 온라인 응시, 이틀 내 결과 — 미국 대학 등에서 인정",
  "note_en": "About 1 hour online from home, results in ~2 days; accepted by many universities",
  "validity": "2년",
  "cefr_map": {
   "A1": "10–55",
   "A2": "10–55",
   "B1": "60–95",
   "B2": "100–125",
   "C1": "130–150",
   "C2": "155–160"
  }
 },
 {
  "id": "teps",
  "lang": "en",
  "name": "TEPS",
  "full": "Test of English Proficiency developed by Seoul National University",
  "org": "서울대학교 언어교육원 / TEPS관리위원회",
  "official": "https://www.teps.or.kr/",
  "levels": "0–600점 (청해 240, 어휘 60, 문법 60, 독해 240)",
  "levels_en": "0–600 (Listening 240, Vocabulary 60, Grammar 60, Reading 240)",
  "cefr": "공식 CEFR 대응 미확인",
  "fees": [
   {
    "country": "KR",
    "amount": "54,000원",
    "note": "정기접수, 2026-04-11(401회)부터 49,000원→54,000원 인상 (추가접수 57,000원). 공식 공지 존재하나 직접 열람 불가로 나무위키 기준, 2026-11"
   }
  ],
  "register": [
   {
    "country": "KR",
    "label": "TEPS 공식 사이트 (접수)",
    "url": "https://www.teps.or.kr/"
   },
   {
    "country": "KR",
    "label": "TEPS 응시료 인상 공식 공지",
    "url": "https://www.teps.or.kr/Community/Notice?seq=10301"
   }
  ],
  "practice": [
   {
    "label": "TEPS 공식 샘플 문제",
    "url": "https://www.teps.or.kr/home/Sample"
   },
   {
    "label": "New TEPS 샘플 문항",
    "url": "https://www.teps.or.kr/html/NEWTEPS/html/sample.html"
   }
  ],
  "note": "서울대 개발 국내 영어시험, 대학원 입학·졸업·공무원 시험 영어 대체에 활용",
  "note_en": "Korean English test by Seoul National University, used for grad school and civil-service exams",
  "validity": "2년"
 },
 {
  "id": "opic",
  "lang": "multi",
  "name": "OPIc",
  "full": "Oral Proficiency Interview – computer (한국 시행)",
  "org": "ACTFL 개발 (한국 공식 시행처 opic.or.kr)",
  "official": "https://www.opic.or.kr",
  "langs": [
   "en",
   "zh",
   "ru",
   "es",
   "ko",
   "ja",
   "vi"
  ],
  "levels": "NL · NM · NH · IL · IM(1–3) · IH · AL",
  "levels_en": "Novice Low – Advanced Low",
  "cefr": "ACTFL 기준 (CEFR 별도 매핑은 ACTFL 공식 안내 참고)",
  "fees": [
   {
    "country": "KR",
    "amount": "84,000원",
    "note": "VAT 포함, 2025.11.1 신청분부터 · 어종 공통 · as of 2026-11"
   }
  ],
  "register": [
   {
    "country": "KR",
    "label": "OPIc 공식 접수",
    "url": "https://www.opic.or.kr"
   },
   {
    "country": "KR",
    "label": "OPIc 공식 사이트 (멀티캠퍼스)",
    "url": "https://www.opic.or.kr/"
   },
   {
    "country": "KR",
    "label": "OPIc 수험자 가이드",
    "url": "https://www.opic.or.kr/opics/servlet/controller.opic.site.guide.GuideServlet?p_process=move-exam-guide"
   }
  ],
  "practice": [
   {
    "label": "OPIc 공식 시험 소개 (OPI·OPIc 비교)",
    "url": "https://www.opic.or.kr/opics/servlet/controller.opic.site.about.AboutServlet?p_process=move-page-compare&p_nav=3_1_1"
   }
  ],
  "note": "컴퓨터 기반 말하기 시험. 한국 기업 채용·승진에 널리 사용",
  "note_en": "Computer-based speaking test widely used by Korean employers.",
  "validity": "제출처 기준 확인",
  "cefr_map": {
   "A1": "NH",
   "A2": "IL",
   "B1": "IM · IH",
   "B2": "AL"
  }
 },
 {
  "id": "gtelp",
  "lang": "en",
  "name": "G-TELP",
  "full": "General Tests of English Language Proficiency",
  "org": "ITSC (국내: 한국지텔프위원회)",
  "official": "https://www.g-telp.co.kr/",
  "levels": "Level 1–5 (Level 2 정기시험 중심, 영역별 100점·총 300점 → 평균점수)",
  "levels_en": "Levels 1–5 (Level 2 most common; section scores out of 100)",
  "cefr": "공식 CEFR 대응 미확인",
  "fees": [
   {
    "country": "KR",
    "amount": "69,300원",
    "note": "Level 2 정기시험 (추가접수 74,100원) — 공식 사이트 직접 확인 불가로 나무위키 기준, 2026-11"
   }
  ],
  "register": [
   {
    "country": "KR",
    "label": "G-TELP 정기시험 접수",
    "url": "http://www.g-telp.co.kr/receipt/gst/receipt_main.asp"
   },
   {
    "country": "KR",
    "label": "G-TELP 정기시험 일정",
    "url": "http://www.g-telp.co.kr/receipt/schedule.asp"
   }
  ],
  "practice": [],
  "note": "공무원·군 간부·국가자격시험 영어 대체에 많이 쓰이는 시험 (Level 2 위주)",
  "note_en": "Widely used in Korea to substitute English for civil-service and licensing exams",
  "validity": "2년"
 },
 {
  "id": "languagecert",
  "lang": "en",
  "name": "LanguageCert Academic",
  "full": "LanguageCert Academic (English)",
  "org": "LanguageCert (PeopleCert 그룹)",
  "official": "https://www.languagecert.org/en/language-exams/english/languagecert-academic",
  "levels": "LanguageCert Global Scale 0–100점 (영역별 + 종합)",
  "levels_en": "LanguageCert Global Scale 0–100 (per skill + overall)",
  "cefr": "B1–C2 대상, 종합점수와 CEFR 레벨 함께 표기",
  "fees": [
   {
    "country": "GLOBAL",
    "amount": "US$140 (온라인) / US$250 (시험센터) / US$270 (UKVI 시험센터)",
    "note": "LanguageCert 공식 페이지 기준, 2026-11"
   }
  ],
  "register": [
   {
    "country": "GLOBAL",
    "label": "LanguageCert 시험센터 네트워크",
    "url": "https://www.languagecert.org/en/exam-types/test-centre-network"
   },
   {
    "country": "GLOBAL",
    "label": "LanguageCert 온라인(재택) 시험",
    "url": "https://www.languagecert.org/en/exam-types/online-exams"
   }
  ],
  "practice": [
   {
    "label": "LanguageCert Academic 공식 연습 문제지",
    "url": "https://www.languagecert.org/en/preparation/test-taker-resources/languagecert-academic/practice-papers"
   },
   {
    "label": "LanguageCert 공식 연습 자료 모음",
    "url": "https://www.languagecert.org/en/preparation/practice-material"
   }
  ],
  "note": "영국 UKVI·호주 비자 및 해외 대학 입학용 영어 시험, 온라인 재택 응시 가능",
  "note_en": "English test for UK/Australian visas and university entry; online remote option",
  "validity": ""
 },
 {
  "id": "trinity-ise",
  "lang": "en",
  "name": "Trinity ISE",
  "full": "Integrated Skills in English",
  "org": "Trinity College London",
  "official": "https://www.trinitycollege.com/qualifications/english-language/ISE",
  "levels": "ISE A1 · Foundation(A2) · I(B1) · II(B2) · III(C1) · IV(C2), 영역별 Pass/Merit/Distinction",
  "levels_en": "ISE A1, Foundation (A2), I (B1), II (B2), III (C1), IV (C2); Pass/Merit/Distinction per skill",
  "cefr": "레벨이 CEFR A1–C2에 직접 대응 (공식)",
  "fees": [
   {
    "country": "GLOBAL",
    "amount": "센터별 상이",
    "note": "공식 페이지에 응시료 미표시, 2026-11"
   }
  ],
  "register": [
   {
    "country": "GLOBAL",
    "label": "Trinity 시험 접수 (국가 선택)",
    "url": "https://trinitycollege.com/book-exam"
   },
   {
    "country": "GLOBAL",
    "label": "Trinity 국가별 지사 안내",
    "url": "https://trinitycollege.com/local-trinity"
   }
  ],
  "practice": [
   {
    "label": "Trinity ISE 공식 샘플 평가 자료",
    "url": "https://resources.trinitycollege.com/language/support/teacher/ise/sample-assessments"
   },
   {
    "label": "ISE Foundation 학습자 지원 자료",
    "url": "https://resources.trinitycollege.com/language/support/learner/ise/isef"
   }
  ],
  "note": "읽기·쓰기 + 말하기·듣기 2모듈 통합 평가, 영국 비자(SELT) 등에 활용",
  "note_en": "Two-module integrated skills exam; used for UK visas among others",
  "validity": "평생 (만료 없음)",
  "cefr_map": {
   "A1": "ISE A1",
   "A2": "Foundation",
   "B1": "ISE I",
   "B2": "ISE II",
   "C1": "ISE III",
   "C2": "ISE IV"
  }
 },
 {
  "id": "dele",
  "lang": "es",
  "name": "DELE",
  "full": "Diplomas de Español como Lengua Extranjera",
  "org": "Instituto Cervantes (스페인 교육부 명의 발급)",
  "official": "https://cervantes.org/es/examenes/dele",
  "levels": "A1·A2·B1·B2·C1·C2 (+A1·A2/B1·B2/C1 escolar)",
  "levels_en": "A1, A2, B1, B2, C1, C2 (+ school versions A1, A2/B1, B2/C1)",
  "cefr": "CEFR 기준",
  "fees": [
   {
    "country": "ES",
    "amount": "€138–€240",
    "note": "A2 €138 · B1 €173 · B2 €204 · C1 €225 · C2 €240 (Universitat de València 시험센터, 2026 일정 페이지 기준, as of 2026-11)"
   },
   {
    "country": "US",
    "amount": "$128–$210",
    "note": "A1 $128 · A2 $130 · B1 $154 · B2 $176 · C1 $195 · C2 $210 (Instituto Cervantes Los Angeles, as of 2026-11)"
   }
  ],
  "register": [
   {
    "country": "KR",
    "label": "주한 세르반테스 문화원 (Aula Cervantes de Seúl)",
    "url": "https://seul.cervantes.es/"
   },
   {
    "country": "GLOBAL",
    "label": "Instituto Cervantes 온라인 접수(Tienda)",
    "url": "https://tienda.cervantes.org"
   },
   {
    "country": "US",
    "label": "Instituto Cervantes Los Angeles – DELE",
    "url": "https://cervantes.org/us/los-angeles/en/learning-teaching/certification/dele"
   },
   {
    "country": "ES",
    "label": "Universitat de València – DELE",
    "url": "https://www.uv.es/uvweb/servicio-politica-linguistica/es/certificacion-idiomas/dele-espanol-1286003215548.html"
   }
  ],
  "practice": [],
  "note": "스페인 교육부 공식 학위, 평생 유효. 2027년 시험 접수는 2026-11-18부터",
  "note_en": "Official Spanish Ministry diploma, valid for life. 2027 registration opens 18 Nov 2026",
  "validity": "평생",
  "cefr_map": {
   "A1": "A1",
   "A2": "A2",
   "B1": "B1",
   "B2": "B2",
   "C1": "C1",
   "C2": "C2"
  }
 },
 {
  "id": "siele",
  "lang": "es",
  "name": "SIELE",
  "full": "Servicio Internacional de Evaluación de la Lengua Española",
  "org": "Instituto Cervantes · UNAM · Universidad de Salamanca · Universidad de Buenos Aires (운영: Telefónica)",
  "official": "https://siele.org",
  "levels": "점수제 0–1000 (각 영역 0–250) → A1~C1 매핑; Global·S1~S5 모듈",
  "levels_en": "Score-based 0–1000 (0–250 per skill) mapped to A1–C1; SIELE Global or modules S1–S5",
  "cefr": "CEFR 연계 (A1–C1)",
  "fees": [
   {
    "country": "GLOBAL",
    "amount": "€55–€155",
    "note": "SIELE Global €155 · S1 €55 · S2 €75 · S3 €100 · S4 €75 · S5 €100 (siele.org 예약 페이지, 국가 공통 표시, as of 2026-11)"
   }
  ],
  "register": [
   {
    "country": "GLOBAL",
    "label": "시험 예약 (국가·센터 선택, Corea del Sur 포함)",
    "url": "https://siele.org/reservas"
   },
   {
    "country": "GLOBAL",
    "label": "Encuentre su centro",
    "url": "https://siele.org/encuentre-su-centro"
   }
  ],
  "practice": [
   {
    "label": "공식 데모 시험(Examen demo)",
    "url": "https://examendemo.siele.org/"
   },
   {
    "label": "시험 구성·가이드(Exámenes)",
    "url": "https://siele.org/examenes"
   }
  ],
  "note": "합격/불합격 없이 점수·레벨 부여, 컴퓨터 시험, 5년 유효",
  "note_en": "Computer-based, no pass/fail – always awards a score/level; valid 5 years",
  "validity": "5년"
 },
 {
  "id": "delf-dalf",
  "lang": "fr",
  "name": "DELF/DALF",
  "full": "Diplôme d'études en langue française / Diplôme approfondi de langue française",
  "org": "France Éducation international (프랑스 교육부)",
  "official": "https://www.france-education-international.fr/diplome/delf-tout-public",
  "levels": "DELF A1·A2·B1·B2, DALF C1·C2 (+DELF Prim, Junior, Pro)",
  "levels_en": "DELF A1, A2, B1, B2; DALF C1, C2 (+ Prim, Junior, Pro versions)",
  "cefr": "CEFR 기준",
  "fees": [
   {
    "country": "KR",
    "amount": "150,000원–350,000원",
    "note": "A1 150,000 · A2 190,000 · B1 260,000 · B2 290,000 · C1 330,000 · C2 350,000원 (2026년도 응시료, Tout public; 덕성여대 불문과 공지 인용, as of 2026-11)"
   },
   {
    "country": "FR",
    "amount": "€130–€220",
    "note": "A1·A2 €130 · B1 €160 · B2 €200 · C1 €220 (Université Clermont Auvergne 센터 예시, 센터마다 상이, as of 2026-11)"
   }
  ],
  "register": [
   {
    "country": "KR",
    "label": "주한프랑스대사관 DELF-DALF 한국 사무국",
    "url": "https://www.delf-dalf.co.kr/ko/"
   },
   {
    "country": "KR",
    "label": "주한프랑스대사관 문화과 – 2026 11월 DELF-DALF 접수 공지",
    "url": "https://kr.ambafrance-culture.org/ko/evenement/2026-11%EC%9B%94-delf-dalf-%EC%8B%9C%ED%97%98-%EC%A0%91%EC%88%98/"
   },
   {
    "country": "GLOBAL",
    "label": "Centres d'examen (FEI 시험센터 목록)",
    "url": "https://www.france-education-international.fr/centres-d-examen/liste"
   },
   {
    "country": "FR",
    "label": "Université Clermont Auvergne – DELF/DALF",
    "url": "https://www.uca.fr/formation/nos-formations/service-commun-des-langues-vivantes/certifications/delf-dalf"
   }
  ],
  "practice": [
   {
    "label": "공식 예시 문제(Exemples de sujets) – DELF B1 등 레벨별 페이지",
    "url": "https://www.france-education-international.fr/diplome/delf-tout-public/niveau-b1"
   }
  ],
  "note": "프랑스 교육부 공식 학위, 평생 유효, 레벨별 독립 시험",
  "note_en": "French Ministry of Education diplomas, valid for life; each level is a separate exam",
  "validity": "평생",
  "cefr_map": {
   "A1": "DELF A1",
   "A2": "DELF A2",
   "B1": "DELF B1",
   "B2": "DELF B2",
   "C1": "DALF C1",
   "C2": "DALF C2"
  }
 },
 {
  "id": "tcf",
  "lang": "fr",
  "name": "TCF",
  "full": "Test de connaissance du français (TCF Tout public, TCF Canada, TCF Québec, TCF IRN, TCF DAP)",
  "org": "France Éducation international",
  "official": "https://france-education-international.fr/test/tcf-canada",
  "levels": "점수제 → A1~C2 (TCF Canada는 NCLC로 환산)",
  "levels_en": "Score-based, mapped to A1–C2 (TCF Canada also to NCLC)",
  "cefr": "CEFR 연계",
  "fees": [
   {
    "country": "KR",
    "amount": "220,000원–440,000원",
    "note": "TCF TP 필수(QCM) 220,000원 + 작문·말하기 각 110,000원 · TCF DAP 330,000원 · TCF Canada 440,000원 (서울 알리앙스 프랑세즈 2026 공지, as of 2026-11)"
   }
  ],
  "register": [
   {
    "country": "KR",
    "label": "서울 알리앙스 프랑세즈 – TCF 시험공지",
    "url": "https://www.afseoul.or.kr/bbs/board.php?bo_table=yb_board02"
   },
   {
    "country": "GLOBAL",
    "label": "TCF 시험센터 목록 (FEI)",
    "url": "https://france-education-international.fr/es/centres-d-examen/liste?type-centre=tcf"
   }
  ],
  "practice": [],
  "note": "이민·국적·대학 입학용 성적 증명, 결과 2년 유효",
  "note_en": "Score report for immigration, citizenship and university admission; valid 2 years",
  "validity": "2년",
  "cefr_map": {
   "A1": "100–199",
   "A2": "200–299",
   "B1": "300–399",
   "B2": "400–499",
   "C1": "500–599",
   "C2": "600–699"
  }
 },
 {
  "id": "tef",
  "lang": "fr",
  "name": "TEF",
  "full": "Test d'évaluation de français (TEF, TEF Canada, TEFAQ, TEF IRN)",
  "org": "CCI Paris Île-de-France (Le français des affaires)",
  "official": "https://www.lefrancaisdesaffaires.fr/tests-diplomes/test-evaluation-francais-tef/",
  "levels": "점수제 → A1~C2 (TEF Canada는 NCLC로 환산)",
  "levels_en": "Score-based, mapped to A1–C2 (TEF Canada also to NCLC)",
  "cefr": "CEFR 연계",
  "fees": [],
  "register": [
   {
    "country": "GLOBAL",
    "label": "Find a center (TEF 센터 검색)",
    "url": "https://www.lefrancaisdesaffaires.fr/en/find-a-center/"
   },
   {
    "country": "GLOBAL",
    "label": "TEF Canada 등록 안내",
    "url": "https://www.lefrancaisdesaffaires.fr/en/candidate/test-evaluation-francais/tef-canada/registration"
   }
  ],
  "practice": [
   {
    "label": "공식 예시 문제 – 독해(CE)",
    "url": "https://www.lefrancaisdesaffaires.fr/wp-content/uploads/2024/10/tef-exemples-epreuves-ce.pdf"
   },
   {
    "label": "공식 예시 문제 – 청해(CO)",
    "url": "https://www.lefrancaisdesaffaires.fr/wp-content/uploads/2024/10/tef-exemples-epreuves-co.pdf"
   },
   {
    "label": "공식 예시 문제 – 작문(EE)",
    "url": "https://www.lefrancaisdesaffaires.fr/wp-content/uploads/2024/10/tef-exemples-epreuve-ee.pdf"
   },
   {
    "label": "공식 예시 문제 – 말하기(EO)",
    "url": "https://www.lefrancaisdesaffaires.fr/wp-content/uploads/2024/10/tef-exemples-epreuve-eo.pdf"
   },
   {
    "label": "TEF Canada 준비 자료 페이지",
    "url": "https://www.lefrancaisdesaffaires.fr/en/candidate/test-evaluation-francais/tef-canada/preparation/"
   }
  ],
  "note": "캐나다·퀘벡 이민, 프랑스 국적용 모듈형 시험, 결과 2년 유효 (한국 시행 여부 미확인)",
  "note_en": "Modular test for Canada/Québec immigration and French citizenship; results valid 2 years",
  "validity": "2년"
 },
 {
  "id": "cils",
  "lang": "it",
  "name": "CILS",
  "full": "Certificazione di Italiano come Lingua Straniera",
  "org": "Università per Stranieri di Siena",
  "official": "https://cils.unistrasi.it",
  "levels": "A1·A2·UNO-B1·DUE-B2·TRE-C1·QUATTRO-C2 (+B1 Cittadinanza, Adolescenti 등)",
  "levels_en": "A1, A2, UNO-B1, DUE-B2, TRE-C1, QUATTRO-C2 (+ B1 Citizenship, teens modules)",
  "cefr": "CEFR 기준",
  "fees": [
   {
    "country": "IT",
    "amount": "€40–€160",
    "note": "A1·A2 €40 · UNO-B1 €90 · B1 Cittadinanza €100 · DUE-B2 €105 · TRE-C1 €135 · QUATTRO-C2 €160 (Università di Palermo 센터, 2026, as of 2026-11)"
   }
  ],
  "register": [
   {
    "country": "KR",
    "label": "CILS 한국 시험센터 목록 (주한이탈리아문화원, 한국외대 부산, ALTAitalia, LINKITALIA 등)",
    "url": "https://cils.unistrasi.it/1/180/158/REPUBBLICA_DI_COREA.htm"
   },
   {
    "country": "KR",
    "label": "주한이탈리아문화원 – Certificazioni",
    "url": "https://iicseoul.esteri.it/it/lingua-e-cultura/certificazioni/"
   },
   {
    "country": "GLOBAL",
    "label": "Le sedi di esami (시험센터)",
    "url": "https://cils.unistrasi.it/1/84/16/Le_sedi_di_esami.htm"
   },
   {
    "country": "IT",
    "label": "Università di Palermo – CILS 일정·요금",
    "url": "https://www.unipa.it/strutture/scuolaitalianastranieri/certificazione-cils/calendario-e-prezzi-/"
   }
  ],
  "practice": [
   {
    "label": "공식 기출 예시(Esempi prove di esami)",
    "url": "https://cils.unistrasi.it/1/89/188/Esempi_prove_di_esami.htm"
   }
  ],
  "note": "이탈리아 대학 입학·국적 신청에 인정, 현재 유효기간 없음",
  "note_en": "Recognised for Italian university admission and citizenship; currently no expiry",
  "validity": "평생",
  "cefr_map": {
   "A1": "A1",
   "A2": "A2",
   "B1": "UNO",
   "B2": "DUE",
   "C1": "TRE",
   "C2": "QUATTRO"
  }
 },
 {
  "id": "celi",
  "lang": "it",
  "name": "CELI",
  "full": "Certificati di Conoscenza della Lingua Italiana",
  "org": "Università per Stranieri di Perugia (CVCL)",
  "official": "https://cvcl.unistrapg.it/pagine/esami-celi-lingua-italiana",
  "levels": "CELI Impatto(A1)·CELI 1(A2)·2(B1)·3(B2)·4(C1)·5(C2) (+CELI adolescenti A2–B2, CELI immigrati A1–B1)",
  "levels_en": "CELI Impatto (A1), CELI 1 (A2), 2 (B1), 3 (B2), 4 (C1), 5 (C2) (+ teens A2–B2, immigrants A1–B1)",
  "cefr": "CEFR 기준",
  "fees": [
   {
    "country": "ES",
    "amount": "€105–€150",
    "note": "전체 시험 €150 · 부분 시험(필기 또는 구술) €105 (이탈리아문화원 바르셀로나 2026, 센터마다 상이, as of 2026-11)"
   }
  ],
  "register": [
   {
    "country": "KR",
    "label": "주한이탈리아문화원 – Certificazioni",
    "url": "https://iicseoul.esteri.it/it/lingua-e-cultura/certificazioni/"
   },
   {
    "country": "GLOBAL",
    "label": "Centri d'esame CELI",
    "url": "https://cvcl.unistrapg.it/pagine/centri-desame-001"
   },
   {
    "country": "GLOBAL",
    "label": "CELI 접수 안내",
    "url": "https://cvcl.unistrapg.it/pagine/iscrizione-esami-celi-000"
   }
  ],
  "practice": [
   {
    "label": "공식 예시 문제(esempi di prove) – CELI 레벨별 ZIP",
    "url": "https://cvcl.unistrapg.it/pagine/esami-celi-generici"
   }
  ],
  "note": "ALTE Q마크 인증, CELI 3(B2) 이상 이탈리아 대학 입학에 인정",
  "note_en": "ALTE Q-Mark; CELI 3 (B2)+ recognised for Italian university admission",
  "validity": "",
  "cefr_map": {
   "A1": "Impatto",
   "A2": "CELI 1",
   "B1": "CELI 2",
   "B2": "CELI 3",
   "C1": "CELI 4",
   "C2": "CELI 5"
  }
 },
 {
  "id": "plida",
  "lang": "it",
  "name": "PLIDA",
  "full": "Progetto Lingua Italiana Dante Alighieri",
  "org": "Società Dante Alighieri",
  "official": "https://plida.dante.global/it",
  "levels": "A2·B1·B2·C1·C2 (+PLIDA Juniores A1–B2)",
  "levels_en": "A2, B1, B2, C1, C2 (+ PLIDA Juniores A1–B2 for ages 13–18)",
  "cefr": "CEFR 기준",
  "fees": [],
  "register": [
   {
    "country": "KR",
    "label": "주한이탈리아문화원 – Certificazioni",
    "url": "https://iicseoul.esteri.it/it/lingua-e-cultura/certificazioni/"
   },
   {
    "country": "GLOBAL",
    "label": "PLIDA 시험센터 찾기",
    "url": "https://plida.dante.global/it/"
   },
   {
    "country": "GLOBAL",
    "label": "Dante Alighieri 전 세계 연락처",
    "url": "https://www.dante.global/it/contatti/lista-contatti"
   }
  ],
  "practice": [
   {
    "label": "Preparati all'esame (예시 문제)",
    "url": "https://plida.dante.global/it/preparati-allesame/"
   }
  ],
  "note": "단테 알리기에리 협회 주관, 이탈리아 외무부 인정 자격",
  "note_en": "Run by the Società Dante Alighieri; recognised by the Italian Foreign Ministry",
  "validity": "",
  "cefr_map": {
   "A2": "A2",
   "B1": "B1",
   "B2": "B2",
   "C1": "C1",
   "C2": "C2"
  }
 },
 {
  "id": "certit",
  "lang": "it",
  "name": "CERT.IT (Certit)",
  "full": "Certificazione dell'italiano come lingua straniera – Università Roma Tre",
  "org": "Università degli Studi Roma Tre",
  "official": "https://certificazioneitaliano.uniroma3.it/",
  "levels": "A1·A2·B1·B2·C1·C2",
  "levels_en": "A1, A2, B1, B2, C1, C2",
  "cefr": "CEFR 기준",
  "fees": [
   {
    "country": "IT",
    "amount": "€35–€200",
    "note": "A1 €35 · A2 €40 · B1 €80 · B2 €140 · C1 €200 · C2 €200 (Roma Tre 공식, as of 2026-11)"
   }
  ],
  "register": [
   {
    "country": "KR",
    "label": "주한이탈리아문화원 – Certificazioni (Roma Tre IT/ele.IT 안내)",
    "url": "https://iicseoul.esteri.it/it/lingua-e-cultura/certificazioni/"
   },
   {
    "country": "GLOBAL",
    "label": "Centri d'esame",
    "url": "https://certificazioneitaliano.uniroma3.it/gli-esami/centri-desame/"
   },
   {
    "country": "IT",
    "label": "Iscrizione agli esami",
    "url": "https://certificazioneitaliano.uniroma3.it/gli-esami/iscrizione-agli-esami/"
   }
  ],
  "practice": [],
  "note": "로마 트레 대학 주관 이탈리아어 인증, 레벨별 독립 시험",
  "note_en": "Roma Tre University Italian certification; separate exam per level",
  "validity": "",
  "cefr_map": {
   "A1": "A1",
   "A2": "A2",
   "B1": "B1",
   "B2": "B2",
   "C1": "C1",
   "C2": "C2"
  }
 },
 {
  "id": "caple",
  "lang": "pt",
  "name": "CAPLE (CIPLE·DEPLE·DIPLE·DAPLE·DUPLE)",
  "full": "Certificação e Avaliação de Português Língua Estrangeira",
  "org": "CAPLE – Faculdade de Letras, Universidade de Lisboa",
  "official": "https://caple.letras.ulisboa.pt",
  "levels": "ACESSO(A1)·CIPLE(A2)·DEPLE(B1)·DIPLE(B2)·DAPLE(C1)·DUPLE(C2) (+학생용 -e 버전, TEJO)",
  "levels_en": "ACESSO (A1), CIPLE (A2), DEPLE (B1), DIPLE (B2), DAPLE (C1), DUPLE (C2) (+ school '-e' versions, TEJO)",
  "cefr": "CEFR 기준",
  "fees": [
   {
    "country": "PT",
    "amount": "€60–€170",
    "note": "ACESSO €60 · CIPLE €95 · DIPLE €135 · DUPLE €170 (CAPLE 공식 propina, as of 2026-11)"
   }
  ],
  "register": [
   {
    "country": "GLOBAL",
    "label": "Centros de exame (LAPE)",
    "url": "https://caple.letras.ulisboa.pt/centros"
   },
   {
    "country": "GLOBAL",
    "label": "Inscrição",
    "url": "https://caple.letras.ulisboa.pt/inscricao"
   }
  ],
  "practice": [
   {
    "label": "CIPLE 공식 예시 – 독해·작문(PDF)",
    "url": "https://caple.letras.ulisboa.pt/files/exemplos/CIPLE_CL_PIE.pdf"
   },
   {
    "label": "CIPLE 공식 예시 – 청해(PDF)",
    "url": "https://caple.letras.ulisboa.pt/files/exemplos/CIPLE_CO.pdf"
   },
   {
    "label": "레벨별 시험 안내·예시(Exames)",
    "url": "https://caple.letras.ulisboa.pt/exames"
   }
  ],
  "note": "포르투갈 공식 포르투갈어 인증, CIPLE(A2)는 포르투갈 국적·영주권 신청에 활용",
  "note_en": "Portugal's official PFL certification; CIPLE (A2) used for Portuguese citizenship/residence",
  "validity": "",
  "cefr_map": {
   "A1": "ACESSO",
   "A2": "CIPLE",
   "B1": "DEPLE",
   "B2": "DIPLE",
   "C1": "DAPLE",
   "C2": "DUPLE"
  }
 },
 {
  "id": "celpe-bras",
  "lang": "pt",
  "name": "Celpe-Bras",
  "full": "Certificado de Proficiência em Língua Portuguesa para Estrangeiros",
  "org": "Inep / Ministério da Educação do Brasil",
  "official": "https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/celpe-bras",
  "levels": "Intermediário·Intermediário Superior·Avançado·Avançado Superior (단일 시험, 성적으로 등급 부여)",
  "levels_en": "Single exam; certifies Intermediate, Upper Intermediate, Advanced, Upper Advanced",
  "cefr": "자체 등급 (CEFR 미사용)",
  "fees": [
   {
    "country": "BR",
    "amount": "R$ 247",
    "note": "브라질 내 응시 R$ 247 · 해외 응시 US$ 115 (Inep FAQ '최근 회차 기준', as of 2026-11)"
   }
  ],
  "register": [
   {
    "country": "GLOBAL",
    "label": "Postos aplicadores (해외 시행처)",
    "url": "https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/celpe-bras/postos-aplicadores/exterior"
   },
   {
    "country": "BR",
    "label": "Postos aplicadores (Brasil)",
    "url": "https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/celpe-bras/celpe-bras/postos-aplicadores"
   }
  ],
  "practice": [
   {
    "label": "Inep 기출 문제(Provas)",
    "url": "https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/celpe-bras/celpe-bras/provas"
   },
   {
    "label": "Acervo Celpe-Bras (UFRGS 기출·자료 아카이브)",
    "url": "https://www.ufrgs.br/acervocelpebras/"
   }
  ],
  "note": "브라질 정부 유일 공식 포르투갈어 인증, 연 2회 시행, 유효기간은 제출기관이 결정",
  "note_en": "Brazil's only official Portuguese proficiency certificate; held twice a year; validity set by receiving institution",
  "validity": "기관별 상이"
 },
 {
  "id": "catalan",
  "lang": "ca",
  "name": "Certificats de català (IRL)",
  "full": "Certificats de coneixements generals de llengua catalana – Institut Ramon Llull",
  "org": "Institut Ramon Llull",
  "official": "https://www.llull.cat/english/aprendre_catala/certificats_intro.cfm",
  "levels": "A2(Bàsic)·B1(Elemental)·B2(Intermedi)·C1(Suficiència)·C2(Superior)",
  "levels_en": "A2 (Basic), B1 (Elementary), B2 (Intermediate), C1 (Proficiency), C2 (Advanced)",
  "cefr": "CEFR 기준",
  "fees": [
   {
    "country": "GLOBAL",
    "amount": "€30–€60",
    "note": "A2 €30 · B1 €35 · B2 €35 · C1 €60 · C2 €60 (일부 국가 면제, IRL 접수 페이지, as of 2026-11)"
   }
  ],
  "register": [
   {
    "country": "GLOBAL",
    "label": "Registration (IRL 접수 안내)",
    "url": "https://www.llull.cat/english/aprendre_catala/certificats_inscripcio.cfm"
   },
   {
    "country": "GLOBAL",
    "label": "2026 2차 시험(11월) – 아시아는 오사카·도쿄",
    "url": "https://www.llull.cat/english/aprendre_catala/certificats_2c.cfm"
   },
   {
    "country": "GLOBAL",
    "label": "2026 1차 시험",
    "url": "https://www.llull.cat/english/aprendre_catala/certificats_1c.cfm"
   }
  ],
  "practice": [
   {
    "label": "B2(Intermedi) 공식 모의시험(PDF)",
    "url": "http://www.llull.cat/rec_docs_2015/model_intermedi_B2.pdf"
   },
   {
    "label": "레벨별 안내·모의시험 페이지(B2 예)",
    "url": "https://www.llull.cat/english/aprendre_catala/certificats_intermedi.cfm"
   }
  ],
  "note": "카탈루냐 지역 외 해외 응시자용, 2026년 한국 시험장 없음(가장 가까운 곳 일본)",
  "note_en": "For learners outside Catalan-speaking areas; no venue in Korea in 2026 (nearest: Japan)",
  "validity": "",
  "cefr_map": {
   "A2": "Bàsic",
   "B1": "Elemental",
   "B2": "Intermedi",
   "C1": "Suficiència",
   "C2": "Superior"
  }
 },
 {
  "id": "goethe",
  "lang": "de",
  "name": "Goethe-Zertifikat",
  "full": "Goethe-Zertifikat A1–C2",
  "org": "Goethe-Institut",
  "official": "https://www.goethe.de/de/spr/prf.html",
  "levels": "A1–C2",
  "levels_en": "A1–C2",
  "cefr": "CEFR 기준",
  "fees": [
   {
    "country": "KR",
    "amount": "150,000–470,000원",
    "note": "주한독일문화원 2026 일정표(외부 응시자): A1 150,000 / A2 170,000 / B1 260,000 / B2 290,000 / C1 330,000 / C2 470,000원 (모듈별 85,000–150,000원, 수강생 20% 할인) — 2026-11 기준"
   }
  ],
  "register": [
   {
    "country": "KR",
    "label": "주한독일문화원 독일어 시험",
    "url": "https://www.goethe.de/ins/kr/ko/spr/prf.html"
   },
   {
    "country": "GLOBAL",
    "label": "Deutschprüfungen (Prüfungsorte weltweit)",
    "url": "https://www.goethe.de/de/spr/prf.html"
   }
  ],
  "practice": [
   {
    "label": "공식 연습문제(Übungsmaterialien, 한국어 안내)",
    "url": "https://www.goethe.de/ins/kr/ko/spr/prf/ueb.html"
   },
   {
    "label": "Prüfungstrainings (독일어)",
    "url": "https://www.goethe.de/de/spr/prf/ueb.html"
   }
  ],
  "note": "서울 주한독일문화원에서 연중 시행, B1 이상은 모듈별 응시 가능. 독일 내 응시료는 시험장별로 다름",
  "note_en": "Held year-round at Goethe-Institut Seoul; modular from B1. Fees in Germany vary by institute.",
  "validity": "평생",
  "cefr_map": {
   "A1": "A1",
   "A2": "A2",
   "B1": "B1",
   "B2": "B2",
   "C1": "C1",
   "C2": "C2"
  }
 },
 {
  "id": "testdaf",
  "lang": "de",
  "name": "TestDaF",
  "full": "Test Deutsch als Fremdsprache",
  "org": "TestDaF-Institut (g.a.s.t.)",
  "official": "https://www.testdaf.de/de/",
  "levels": "TDN 3–5",
  "levels_en": "TDN 3–5 (≈B2–C1)",
  "cefr": "자체 등급(TDN 3·4·5, 약 B2–C1)",
  "fees": [
   {
    "country": "DE",
    "amount": "€210",
    "note": "Goethe-Institut Frankfurt 2026 시험일 기준 — 2026-11 기준"
   }
  ],
  "register": [
   {
    "country": "KR",
    "label": "주한독일문화원 TestDaF 안내",
    "url": "https://www.goethe.de/ins/kr/ko/spr/prf/testdaf.html"
   },
   {
    "country": "GLOBAL",
    "label": "Testzentrum finden",
    "url": "https://www.testdaf.de/de/teilnehmende/mein-testdaf/testzentrum-finden/"
   },
   {
    "country": "GLOBAL",
    "label": "Termine und Anmeldung",
    "url": "https://www.testdaf.de/de/teilnehmende/mein-testdaf/testdaf-termine-und-anmeldung/"
   }
  ],
  "practice": [
   {
    "label": "디지털 TestDaF 준비(예시 문항·튜토리얼)",
    "url": "https://www.testdaf.de/de/teilnehmende/der-digitale-testdaf/vorbereitung-auf-den-digitalen-testdaf/"
   },
   {
    "label": "종이 TestDaF 준비 자료",
    "url": "https://www.testdaf.de/de/teilnehmende/der-papierbasierte-testdaf/vorbereitung-auf-den-papierbasierten-testdaf/"
   }
  ],
  "note": "독일 대학 입학용 시험. 한국은 주한독일문화원에서 시행(한국 응시료는 공식 페이지 미기재), TDN 4 전 영역이면 대부분 학과 입학 가능",
  "note_en": "German university admission test; offered at Goethe-Institut Seoul (KRW fee not published online). TDN 4 in all parts admits to almost all programmes.",
  "validity": "평생(무기한, 대학별 기준 확인)",
  "cefr_map": {
   "B2": "TDN 3",
   "C1": "TDN 4 · 5"
  }
 },
 {
  "id": "telc",
  "lang": "de",
  "name": "telc Deutsch",
  "full": "telc Deutsch A1–C2 (Start Deutsch, Zertifikat Deutsch, DTB, C1 Hochschule 등)",
  "org": "telc gGmbH",
  "official": "https://www.telc.net/sprachpruefungen/zertifikatspruefung/deutsch/",
  "levels": "A1–C2",
  "levels_en": "A1–C2 (incl. dual-level exams)",
  "cefr": "CEFR 기준",
  "fees": [],
  "register": [
   {
    "country": "GLOBAL",
    "label": "Prüfungszentrum finden",
    "url": "https://www.telc.net/sprachpruefungen/pruefungszentrum-finden/"
   }
  ],
  "practice": [
   {
    "label": "telc Deutsch B1 무료 Übungstest(ZIP)",
    "url": "https://www.telc.net/fileadmin/user_upload/mock_exams/Deutsch/telc_deutsch_b1.zip"
   },
   {
    "label": "레벨별 시험 페이지(각 페이지 Übungstest)",
    "url": "https://www.telc.net/sprachpruefungen/zertifikatspruefung/deutsch/"
   }
  ],
  "note": "독일 이민·직업·대학(C1 Hochschule)용으로 널리 인정. 응시료는 시험센터별로 다르며 한국 시험센터는 확인되지 않음",
  "note_en": "Widely used for German immigration, work and university (C1 Hochschule). Fees set by each centre; no Korean centre confirmed.",
  "validity": "평생(기관별 기준 확인)",
  "cefr_map": {
   "A1": "A1",
   "A2": "A2",
   "B1": "B1",
   "B2": "B2",
   "C1": "C1",
   "C2": "C2"
  }
 },
 {
  "id": "osd",
  "lang": "de",
  "name": "ÖSD",
  "full": "Österreichisches Sprachdiplom Deutsch",
  "org": "ÖSD (Österreichisches Sprachdiplom Deutsch, Wien)",
  "official": "https://osd.at/",
  "levels": "A1–C2",
  "levels_en": "A1–C2",
  "cefr": "CEFR 기준",
  "fees": [],
  "register": [
   {
    "country": "GLOBAL",
    "label": "ÖSD-Prüfungszentren",
    "url": "https://osd.at/pruefungszentren/"
   },
   {
    "country": "GLOBAL",
    "label": "Prüfungstermine",
    "url": "https://osd.at/pruefungstermine/"
   }
  ],
  "practice": [
   {
    "label": "ZB1 무료 Modellsatz(각 레벨 페이지에서 다운로드)",
    "url": "https://osd.at/portfolio-item/osd-zertifikat-b1-zb1/"
   },
   {
    "label": "ÖSD 시험 목록(레벨별 Modellsatz)",
    "url": "https://osd.at/oesd-pruefungen/"
   }
  ],
  "note": "오스트리아 공인 독일어 시험으로 독일·스위스에서도 인정. 응시료는 시험센터별 상이, 한국 시험센터는 확인되지 않음",
  "note_en": "Austrian German diploma, recognised in DE/CH too. Fees set per centre; no Korean centre confirmed.",
  "validity": "평생",
  "cefr_map": {
   "A1": "A1",
   "A2": "A2",
   "B1": "B1",
   "B2": "B2",
   "C1": "C1",
   "C2": "C2"
  }
 },
 {
  "id": "dsh",
  "lang": "de",
  "name": "DSH",
  "full": "Deutsche Sprachprüfung für den Hochschulzugang",
  "org": "독일 각 대학·Studienkolleg (HRK/KMK 기본규정 RO-DT)",
  "official": "https://www.hrk.de/fileadmin/redaktion/hrk/02-Dokumente/02-07-Internationales/20191014_RO-DT_mit_MPO_neu_final.pdf",
  "levels": "DSH-1·2·3",
  "levels_en": "DSH-1 / DSH-2 / DSH-3",
  "cefr": "자체 등급(DSH-2 = 대학 입학 기준)",
  "fees": [],
  "register": [],
  "practice": [],
  "note": "독일 현지 대학이 자체 시행하는 입학용 시험(한국 시행 없음). 응시료·일정은 대학별로 다름",
  "note_en": "University-run admission exam held only at German universities (not in Korea); fees/dates vary by university.",
  "validity": "대학별 규정"
 },
 {
  "id": "cnavt",
  "lang": "nl",
  "name": "CNaVT",
  "full": "Certificaat Nederlands als Vreemde Taal",
  "org": "Nederlandse Taalunie (KU Leuven CTO · Radboud Universiteit)",
  "official": "https://cnavt.org/",
  "levels": "A2–C1",
  "levels_en": "A2–C1 (5 profile exams)",
  "cefr": "CEFR 기준(A2–C1, 5개 프로필)",
  "fees": [],
  "register": [
   {
    "country": "KR",
    "label": "한국외국어대학교(서울) — 아시아 시험센터 목록",
    "url": "https://cnavt.org/examencentra/continent/azie"
   },
   {
    "country": "GLOBAL",
    "label": "Inschrijven (등록 안내)",
    "url": "https://cnavt.org/inschrijven"
   }
  ],
  "practice": [
   {
    "label": "공식 예시 시험(Voorbeeldexamens)",
    "url": "https://cnavt.org/voorbereiding/voorbeeldexamens"
   }
  ],
  "note": "해외 학습자용 네덜란드어 시험, 한국은 한국외대에서 시행. 연 1회(11월), 응시료는 국가·기관별로 다름(등록 시스템에서 확인)",
  "note_en": "Dutch exam for learners abroad; in Korea at HUFS. Once a year (November); fee varies by country/centre.",
  "validity": "평생",
  "cefr_map": {
   "A2": "A2",
   "B1": "B1",
   "B2": "B2",
   "C1": "C1"
  }
 },
 {
  "id": "nt2",
  "lang": "nl",
  "name": "Staatsexamen NT2",
  "full": "Staatsexamen Nederlands als tweede taal (Programma I·II)",
  "org": "네덜란드 교육문화과학부 · CvTE · DUO",
  "official": "https://www.staatsexamensnt2.nl/",
  "levels": "B1·B2",
  "levels_en": "Programma I (B1) / II (B2)",
  "cefr": "CEFR 기준",
  "fees": [
   {
    "country": "NL",
    "amount": "€50/영역, 전체 €200",
    "note": "DUO Examengeld (Programma I·II 동일) — 2026-11 기준"
   }
  ],
  "register": [
   {
    "country": "NL",
    "label": "DUO 신청 안내",
    "url": "https://www.duo.nl/particulier/staatsexamen-nt2/hoe-het-staatsexamen-nt2-werkt.jsp"
   }
  ],
  "practice": [
   {
    "label": "공식 연습 시험(Examens oefenen)",
    "url": "https://www.staatsexamensnt2.nl/voorbereiden/examens-oefenen"
   }
  ],
  "note": "네덜란드 거주·대학 입학용 국가시험, 네덜란드 내에서 응시(한국 시행 없음)",
  "note_en": "Dutch state exam for living/studying in NL; taken in the Netherlands (not offered in Korea).",
  "validity": "평생",
  "cefr_map": {
   "B1": "Programma I",
   "B2": "Programma II"
  }
 },
 {
  "id": "torfl",
  "lang": "ru",
  "name": "ТРКИ (TORFL)",
  "full": "Тест по русскому языку как иностранному",
  "org": "러시아 교육부 지정 시험기관(상트페테르부르크국립대·모스크바국립대·RUDN·푸시킨대학 등)",
  "official": "https://testingcenter.spbu.ru/ru/ekzameny/russia/trki.html",
  "levels": "ТЭУ(A1)–ТРКИ-4(C2)",
  "levels_en": "TEU (A1), TBU (A2), TORFL-1–4 (B1–C2)",
  "cefr": "자체 등급(CEFR A1–C2 대응)",
  "fees": [
   {
    "country": "RU",
    "amount": "₽5,800–8,100",
    "note": "SPbU 대면 기준 A1 5,800 / B1 6,800 / C2 8,100루블(온라인 7,000–9,000) — 2026-11 기준"
   }
  ],
  "register": [
   {
    "country": "GLOBAL",
    "label": "SPbU 해외 시험장 안내",
    "url": "https://testingcenter.spbu.ru/ru/places.html"
   }
  ],
  "practice": [
   {
    "label": "SPbU 공식 데모(ТРКИ-I B1)",
    "url": "https://testingcenter.spbu.ru/images/files/TRKI1_demo.pdf"
   },
   {
    "label": "SPbU 레벨별 데모·유형 시험 목록",
    "url": "https://testingcenter.spbu.ru/ru/ekzameny/russia/trki.html"
   }
  ],
  "note": "러시아 정부 공인 러시아어 시험. 한국 내 현행 시행기관·응시료는 공식 확인되지 않음(과거 경북대 등 시행) — 응시 전 확인 필요",
  "note_en": "Russian state-certified test; current Korean test centre/fee could not be verified — check before applying.",
  "validity": "제출처 기준 확인",
  "cefr_map": {
   "A1": "ТЭУ",
   "A2": "ТБУ",
   "B1": "ТРКИ-1",
   "B2": "ТРКИ-2",
   "C1": "ТРКИ-3",
   "C2": "ТРКИ-4"
  }
 },
 {
  "id": "polish",
  "lang": "pl",
  "name": "Certyfikat Polski",
  "full": "Państwowe egzaminy certyfikatowe z języka polskiego jako obcego",
  "org": "Państwowa Komisja do Spraw Poświadczania Znajomości Języka Polskiego jako Obcego (NAWA)",
  "official": "https://certyfikatpolski.pl/",
  "levels": "A1–C2",
  "levels_en": "A1–C2 (youth A1–B2)",
  "cefr": "CEFR 기준",
  "fees": [
   {
    "country": "PL",
    "amount": "€90–180",
    "note": "법정 상한: 성인 A1·A2 €120 / B1·B2 €150 / C1·C2 €180, 청소년 €90, 인증서 발급 €20 상당 PLN — 시험센터가 상한 내 결정 — 2026-11 기준"
   }
  ],
  "register": [
   {
    "country": "GLOBAL",
    "label": "시험 안내(About the examination)",
    "url": "https://certyfikatpolski.pl/en/about-the-examination/"
   }
  ],
  "practice": [
   {
    "label": "공식 기출문제(Examination tests from previous years)",
    "url": "https://certyfikatpolski.pl/en/?p=110856"
   },
   {
    "label": "공식 B1 예시 시험(PDF)",
    "url": "https://certyfikatpolski.pl/wp-content/uploads/2017/05/5_B1_test.pdf"
   }
  ],
  "note": "폴란드 정부 공인 폴란드어 시험. 시험은 인가된 시험센터에 직접 신청하며 한국 시험센터는 확인되지 않음",
  "note_en": "Polish state certificate; apply via authorised centres. No Korean centre confirmed.",
  "validity": "평생",
  "cefr_map": {
   "A1": "A1",
   "A2": "A2",
   "B1": "B1",
   "B2": "B2",
   "C1": "C1",
   "C2": "C2"
  }
 },
 {
  "id": "cce",
  "lang": "cs",
  "name": "CCE",
  "full": "Czech Language Certificate Exam (Certifikovaná zkouška z češtiny)",
  "org": "Charles University ÚJOP (Institute for Language and Preparatory Studies)",
  "official": "https://ujop.cuni.cz/UJOPEN-70.html?ujopcmsid=12%3Aczech-language-certificate-exam-cce",
  "levels": "A1–C1",
  "levels_en": "A1–C1",
  "cefr": "CEFR 기준",
  "fees": [
   {
    "country": "CZ",
    "amount": "3,200–4,900 CZK",
    "note": "A1 3,200 / A2 3,500 / B1 4,000 / B2 4,600 / C1 4,900 CZK (해외 €225부터) — 2026-11 기준"
   }
  ],
  "register": [
   {
    "country": "KR",
    "label": "체코센터 서울(시험장 목록상 'Republic of Korea – Soul')",
    "url": "https://seoul.czechcentres.cz/"
   },
   {
    "country": "GLOBAL",
    "label": "ÚJOP CCE 시험장·신청(EXAMINATION CENTRES)",
    "url": "https://ujop.cuni.cz/UJOPEN-70.html?ujopcmsid=12%3Aczech-language-certificate-exam-cce"
   }
  ],
  "practice": [
   {
    "label": "공식 모델 시험 B1(2026)",
    "url": "https://arche.is.cuni.cz/images/zkousky/dokumenty/CCE-B1_MODELOVÁ_VARIANTA_2026.pdf"
   }
  ],
  "note": "카렐대가 주관하는 체코어 공인시험, 해외 시험장 목록에 서울(체코센터)이 포함. 한국 응시료는 공식 미기재",
  "note_en": "Charles University's Czech exam; Seoul (Czech Centre) is on the overseas centre list. KRW fee not published.",
  "validity": "평생",
  "cefr_map": {
   "A1": "A1",
   "A2": "A2",
   "B1": "B1",
   "B2": "B2",
   "C1": "C1"
  }
 },
 {
  "id": "ecl",
  "lang": "hu",
  "name": "ECL (헝가리어)",
  "full": "ECL Exams – Hungarian",
  "org": "ECL 컨소시엄 / ECL Vizsgaközpont (PTE, Pécs)",
  "official": "https://ecl.hu/",
  "levels": "A2–C1",
  "levels_en": "A2–C1",
  "cefr": "CEFR 기준",
  "fees": [
   {
    "country": "HU",
    "amount": "30,000–59,000 HUF",
    "note": "종합시험(인증 언어·헝가리어 포함): A2 30,000 / B1 45,000 / B2 55,000 / C1 59,000 HUF — 2026-11 기준"
   }
  ],
  "register": [
   {
    "country": "HU",
    "label": "ECL 시험장(Vizsgahelyek)",
    "url": "https://ecl.hu/vizsgahelyek/"
   }
  ],
  "practice": [
   {
    "label": "공식 샘플 문제(Mintafeladatok, 언어 'Magyar' 선택)",
    "url": "https://ecl.hu/mintafeladatok-2/"
   }
  ],
  "note": "유럽 다국어 시험 체계로 헝가리어도 인증. 헝가리 사이트는 국내 시험만 안내, 한국 시행 없음",
  "note_en": "Multilingual European exam incl. Hungarian; Hungarian site covers domestic exams only — not offered in Korea.",
  "validity": "평생",
  "cefr_map": {
   "A2": "A2",
   "B1": "B1",
   "B2": "B2",
   "C1": "C1"
  }
 },
 {
  "id": "origo",
  "lang": "hu",
  "name": "Origó (헝가리어)",
  "full": "ELTE Origó – Magyar mint idegen nyelv nyelvvizsga",
  "org": "ELTE Origó Nyelvi Centrum (Eötvös Loránd University)",
  "official": "https://www.onyc.hu/magyar-mint-idegen-nyelv-vizsga/",
  "levels": "A2–C1",
  "levels_en": "A2 START, B1–C1 (accredited)",
  "cefr": "CEFR 기준",
  "fees": [],
  "register": [
   {
    "country": "HU",
    "label": "시험 일정·응시료(Vizsgaidőpontok és díjak)",
    "url": "https://www.onyc.hu/vizsgaidopontok-es-dijak/"
   },
   {
    "country": "HU",
    "label": "시험장(Vizsgahelyek)",
    "url": "https://www.onyc.hu/vizsgahelyek/"
   }
  ],
  "practice": [
   {
    "label": "공식 샘플·연습 문제",
    "url": "https://www.onyc.hu/minta-es-gyakorlofeladatok/"
   }
  ],
  "note": "헝가리 최대 어학시험 기관(ELTE)의 헝가리어 시험, 현 체제는 2027년 2월이 마지막이며 6월부터 Origó MONO로 전환. 한국 시행 없음",
  "note_en": "ELTE's Hungarian exam; current format ends Feb 2027, replaced by Origó MONO from June 2027. Not offered in Korea.",
  "validity": "평생",
  "cefr_map": {
   "A2": "A2",
   "B1": "B1",
   "B2": "B2",
   "C1": "C1"
  }
 },
 {
  "id": "ellinomatheia",
  "lang": "el",
  "name": "Ellinomatheia",
  "full": "Certificate of Attainment in Greek (Πιστοποίηση Ελληνομάθειας)",
  "org": "Centre for the Greek Language (ΚΕΓ, 그리스 교육부 산하)",
  "official": "https://www.greek-language.gr/certification/",
  "levels": "A1–C2",
  "levels_en": "A1–C2 (Α1–Γ2)",
  "cefr": "CEFR 기준",
  "fees": [
   {
    "country": "GB",
    "amount": "£100–110",
    "note": "주영 그리스대사관 공지: A1–B1 £100 / B2–C2 £110 (공지 내 연도 표기 혼재, 시험장별로 상이) — 2026-11 기준"
   }
  ],
  "register": [
   {
    "country": "KR",
    "label": "서울 시험장: 한국정교회 대교구(82001)",
    "url": "https://www.greek-language.gr/certification/exam_centers/show.html?cou=SOUTH%20KOREA"
   },
   {
    "country": "GLOBAL",
    "label": "Exam centres worldwide",
    "url": "https://www.greek-language.gr/certification/exam_centers"
   }
  ],
  "practice": [
   {
    "label": "공식 샘플 시험지(Δείγματα εξεταστικών θεμάτων)",
    "url": "https://www.greek-language.gr/certification/node/12.html"
   }
  ],
  "note": "그리스 정부 공인 그리스어 시험(주로 5월 시행), 서울 한국정교회가 공식 시험장. 신청은 2–3월 시험장에 직접",
  "note_en": "Official Greek certificate (main session in May); Seoul centre is the Orthodox Metropolis of Korea. Apply to the centre Feb–Mar.",
  "validity": "평생",
  "cefr_map": {
   "A1": "A1",
   "A2": "A2",
   "B1": "B1",
   "B2": "B2",
   "C1": "C1",
   "C2": "C2"
  }
 },
 {
  "id": "tys",
  "lang": "tr",
  "name": "TYS",
  "full": "Türkçe Yeterlik Sınavı",
  "org": "Yunus Emre Enstitüsü",
  "official": "https://tys.yee.org.tr/",
  "levels": "B2·C1",
  "levels_en": "B2, C1 (C2 discontinued)",
  "cefr": "CEFR 기준",
  "fees": [
   {
    "country": "KR",
    "amount": "US$140",
    "note": "TYS 공식 응시료표 'Güney Kore' — 2026-11 기준"
   },
   {
    "country": "TR",
    "amount": "800 TL",
    "note": "2026-11 기준"
   }
  ],
  "register": [
   {
    "country": "GLOBAL",
    "label": "TYS 응시자 시스템(sinav.yee.org.tr)",
    "url": "https://sinav.yee.org.tr/login"
   },
   {
    "country": "GLOBAL",
    "label": "시험 국가·센터 목록",
    "url": "https://tys.yee.org.tr/index.php?option=com_content&view=categories&id=21&Itemid=469"
   }
  ],
  "practice": [
   {
    "label": "공식 TYS 예시 문제",
    "url": "https://tys.yee.org.tr/index.php?option=com_content&view=article&id=63%3Atuerkce-yeterlik-s-nav-oernegi&Itemid=467&catid=20"
   }
  ],
  "note": "튀르키예 정부 기관 유누스 엠레 연구소의 터키어 시험, 한국(Güney Kore)도 시험국에 포함. 세부 시험장은 응시자 시스템 로그인 후 확인",
  "note_en": "Yunus Emre Institute's Turkish test; South Korea is a listed test country (centre details after login).",
  "validity": "제출처 기준 확인",
  "cefr_map": {
   "B2": "B2",
   "C1": "C1"
  }
 },
 {
  "id": "swedex",
  "lang": "sv",
  "name": "Swedex",
  "full": "Swedex (A2B1 / B2C1)",
  "org": "Folkuniversitetet (Swedex 본부)",
  "official": "https://www.folkuniversitetet.se/in-english/swedex-swedish-examinations/",
  "levels": "A2–C1",
  "levels_en": "A2B1 and B2C1 tests",
  "cefr": "CEFR 기준",
  "fees": [],
  "register": [
   {
    "country": "GLOBAL",
    "label": "Examination centres",
    "url": "https://www.folkuniversitetet.se/in-english/swedex-swedish-examinations/examination-centres/"
   }
  ],
  "practice": [],
  "note": "외국어로서의 스웨덴어 시험. 응시료는 시험센터별로 다르며 한국 시험센터는 확인되지 않음",
  "note_en": "Swedish as a foreign language exam; fees vary by centre, no Korean centre confirmed.",
  "validity": "평생",
  "cefr_map": {
   "A2": "A2",
   "B1": "B1",
   "B2": "B2",
   "C1": "C1"
  }
 },
 {
  "id": "tisus",
  "lang": "sv",
  "name": "Tisus",
  "full": "Test i svenska för universitets- och högskolestudier",
  "org": "Stockholm University",
  "official": "https://www.su.se/english/divisions/tisus---test-in-swedish-for-university-studies/about-tisus",
  "levels": "합격/불합격",
  "levels_en": "Pass/Fail (university entry, ≈Svenska 3)",
  "cefr": "자체 기준(CEFR 미연계, 고교 Svenska 3 상당)",
  "fees": [
   {
    "country": "SE",
    "amount": "2,380 SEK",
    "note": "스웨덴 내 전체 시험(재시험 1,190) — 2026-11 기준"
   },
   {
    "country": "GLOBAL",
    "amount": "2,875 SEK",
    "note": "해외 시험(재시험 1,440) + 현지 감독비 별도 — 2026-11 기준"
   }
  ],
  "register": [
   {
    "country": "GLOBAL",
    "label": "해외 시험장 지도(2025, PDF)",
    "url": "https://www.su.se/download/18.39dc5cbc19afcf09c00165a/1765377242786/Provorter_Tisus_utland_2025.pdf"
   }
  ],
  "practice": [
   {
    "label": "읽기 예시(Reading comprehension)",
    "url": "https://www.su.se/english/divisions/tisus---test-in-swedish-for-university-studies/about-tisus/reading-comprehension"
   },
   {
    "label": "쓰기 예시(Writing proficiency)",
    "url": "https://www.su.se/english/divisions/tisus---test-in-swedish-for-university-studies/about-tisus/writing-proficiency"
   }
  ],
  "note": "스웨덴 대학 입학용 스웨덴어 시험. 해외 시험장 목록에 서울은 없음(아시아는 도쿄·오사카·베이징 등)",
  "note_en": "Swedish test for university admission; Seoul is not on the overseas list (Asia: Tokyo, Osaka, Beijing…).",
  "validity": "평생"
 },
 {
  "id": "norskprove",
  "lang": "no",
  "name": "Norskprøve",
  "full": "Norskprøve A1–B2",
  "org": "HK-dir (Direktoratet for høyere utdanning og kompetanse)",
  "official": "https://prove.hkdir.no/norskprove-a1-b2/les-om-proven-norsk-A1-B2",
  "levels": "A1–B2",
  "levels_en": "A1–B2",
  "cefr": "CEFR 기준",
  "fees": [
   {
    "country": "NO",
    "amount": "517–1,034 NOK",
    "note": "베르겐시 개인응시자 기준: 영역별 517 / 말하기 1,034 NOK (시험장별 상이) — 2026-11 기준"
   }
  ],
  "register": [
   {
    "country": "NO",
    "label": "개인 응시자 등록(Meld deg på)",
    "url": "https://prove.hkdir.no/norskprove-a1-b2/meld-deg-pa-norsk-a1-b2"
   }
  ],
  "practice": [
   {
    "label": "공식 연습(Øv til prøve)",
    "url": "https://prove.hkdir.no/norskprove-a1-b2/ov-til-prove-norsk-A1-B2"
   }
  ],
  "note": "노르웨이 영주권·시민권용 국가시험, 노르웨이 국외에서는 응시 불가(한국 시행 없음)",
  "note_en": "Norwegian state test for residence/citizenship; cannot be taken outside Norway.",
  "validity": "평생",
  "cefr_map": {
   "A1": "A1",
   "A2": "A2",
   "B1": "B1",
   "B2": "B2"
  }
 },
 {
  "id": "bergenstest",
  "lang": "no",
  "name": "Bergenstesten",
  "full": "Test i norsk – høyere nivå (Bergenstesten)",
  "org": "Folkeuniversitetet",
  "official": "https://www.folkeuniversitetet.no/en/bergenstesten",
  "levels": "B2·C1",
  "levels_en": "B2, C1",
  "cefr": "CEFR 기준",
  "fees": [
   {
    "country": "NO",
    "amount": "2,500 NOK",
    "note": "필기시험(오슬로·스타방에르·해외 동일) — 2026-11 기준"
   }
  ],
  "register": [
   {
    "country": "GLOBAL",
    "label": "해외 필기시험 신청",
    "url": "https://kurs.folkeuniversitetet.no/shop/products/117/orders/init"
   }
  ],
  "practice": [],
  "note": "노르웨이 대학 입학·전문직용 상급 노르웨이어 시험. 일부 해외 시험장 있으나 한국은 확인되지 않음(공식 예시 시험은 유료)",
  "note_en": "Advanced Norwegian test for university/professional use; some sites abroad, Korea not confirmed (official sample test is paid).",
  "validity": "평생",
  "cefr_map": {
   "B2": "B2",
   "C1": "C1"
  }
 },
 {
  "id": "pd",
  "lang": "da",
  "name": "Prøve i Dansk",
  "full": "Prøve i Dansk 1·2·3 (PD1–PD3)",
  "org": "덴마크 SIRI (국제채용통합청)",
  "official": "https://danskogproever.dk/borger/danskproever/",
  "levels": "PD1–PD3",
  "levels_en": "PD1, PD2, PD3",
  "cefr": "자체 등급(CEFR 기반)",
  "fees": [
   {
    "country": "DK",
    "amount": "1,646 DKK",
    "note": "자비 응시자, PD1·2·3 동일 — 2026-11 기준"
   }
  ],
  "register": [
   {
    "country": "DK",
    "label": "신청 기한·시험일·응시료",
    "url": "https://danskogproever.dk/tilmeldingsfrister-og-proevedatoer/"
   },
   {
    "country": "DK",
    "label": "어학센터(시험기관) 목록",
    "url": "https://danskogproever.dk/sprogcenter/sprogcentre/"
   }
  ],
  "practice": [],
  "note": "덴마크 영주권·시민권 요건용 시험, 덴마크 어학센터에서만 응시(한국 시행 없음)",
  "note_en": "Danish tests for residence/citizenship, held at Danish language centres only.",
  "validity": "평생"
 },
 {
  "id": "studieprove",
  "lang": "da",
  "name": "Studieprøven",
  "full": "Studieprøven i dansk som andetsprog",
  "org": "덴마크 SIRI",
  "official": "https://danskogproever.dk/borger/danskproever/",
  "levels": "C1 상당",
  "levels_en": "≈C1",
  "cefr": "자체 기준(C1 상당)",
  "fees": [
   {
    "country": "DK",
    "amount": "1,974 DKK",
    "note": "필기 987 + 구술 987 DKK — 2026-11 기준"
   }
  ],
  "register": [
   {
    "country": "DK",
    "label": "신청 기한·시험일·응시료",
    "url": "https://danskogproever.dk/tilmeldingsfrister-og-proevedatoer/"
   }
  ],
  "practice": [],
  "note": "덴마크 대학 입학용 덴마크어 시험, 덴마크 내 어학센터에서 응시(한국 시행 없음)",
  "note_en": "Danish test for university admission, taken at language centres in Denmark.",
  "validity": "평생"
 },
 {
  "id": "yki",
  "lang": "fi",
  "name": "YKI",
  "full": "Yleiset kielitutkinnot (National Certificates of Language Proficiency)",
  "org": "Opetushallitus (Finnish National Agency for Education) · 유배스퀼래대학교",
  "official": "https://www.oph.fi/en/national-certificates-language-proficiency-yki",
  "levels": "1–6 (기초·중급·고급)",
  "levels_en": "Levels 1–6 (basic/intermediate/advanced)",
  "cefr": "자체 6단계(CEFR A1–C2 대응)",
  "fees": [
   {
    "country": "FI",
    "amount": "€165–216",
    "note": "기초 €165 / 중급 €190 / 고급 €216 (중급 영역별 응시 €43–84) — 2026-11 기준"
   }
  ],
  "register": [
   {
    "country": "FI",
    "label": "YKI 등록(Opintopolku)",
    "url": "http://yki.opintopolku.fi/"
   },
   {
    "country": "FI",
    "label": "YKI 시험센터 연락처",
    "url": "https://www.oph.fi/en/education-and-qualifications/contact-details-yki-test-centres"
   }
  ],
  "practice": [
   {
    "label": "공식 시연 페이지(JYU)",
    "url": "http://ykitesti.solki.jyu.fi/en/"
   },
   {
    "label": "YKI 시험 안내(디지털 연습 링크 포함)",
    "url": "https://www.oph.fi/en/education-and-qualifications/yki-test"
   }
  ],
  "note": "핀란드 시민권·취업용 국가 어학시험(핀란드어 외 다언어). 2026년부터 등록 변경 불가, 핀란드 내 시험센터에서 응시",
  "note_en": "Finnish national language certificate (citizenship/work); no rescheduling from 2026; held at test centres in Finland.",
  "validity": "평생",
  "cefr_map": {
   "A1": "1",
   "A2": "2",
   "B1": "3",
   "B2": "4",
   "C1": "5",
   "C2": "6"
  }
 },
 {
  "id": "ukrainian",
  "lang": "uk",
  "name": "우크라이나어 국가시험",
  "full": "Іспит на рівень володіння державною мовою (для набуття громадянства)",
  "org": "Національна комісія зі стандартів державної мови",
  "official": "https://mova.gov.ua/diyalnist-i-proyekti/ispit-na-riven-volodinnya-derzhavnoyu-movoyu/ispit-na-viznachennya-rivnya-volodinnya-derzhavnoyu-movoyu-dlya-nabuttya-gromadyanstva",
  "levels": "B1",
  "levels_en": "B1 (citizenship exam)",
  "cefr": "CEFR B1 상당(합격/불합격)",
  "fees": [
   {
    "country": "UA",
    "amount": "9,984 UAH",
    "note": "시민권 신청자(외국인), 2026-01-01부터 — 2026-11 기준"
   }
  ],
  "register": [
   {
    "country": "UA",
    "label": "시험장 목록(키이우·리비우·하르키우)",
    "url": "https://mova.gov.ua/diyalnist-i-proyekti/ispit-na-riven-volodinnya-derzhavnoyu-movoyu/ispit-na-viznachennya-rivnya-volodinnya-derzhavnoyu-movoyu-dlya-nabuttya-gromadyanstva/perelik-aktualnykh-ispytovykh-lokatsii-dlia-nabuttia-hromadianstva"
   },
   {
    "country": "UA",
    "label": "시험 시스템(exam.mova.gov.ua)",
    "url": "https://exam.mova.gov.ua"
   }
  ],
  "practice": [
   {
    "label": "공식 시험 샘플(PDF)",
    "url": "https://mova.gov.ua/storage/app/sites/19/exam/ispitovoi-roboti-ta-zrazki-zavdannya-ispitu-na-riven-volodinnya-derzhavnoyu-movoyu-dlya-nabuttya-gromadyanstva-ukraini-1.pdf"
   }
  ],
  "note": "외국인 대상 공식 우크라이나어 시험은 시민권용(B1)뿐이며 우크라이나 내 지정 대학에서 대면 응시만 가능(한국 시행 없음)",
  "note_en": "The only official exam for foreigners is the citizenship test (B1), in person at authorised Ukrainian universities only.",
  "validity": "평생(시민권 신청용)",
  "cefr_map": {
   "B1": "B1"
  }
 },
 {
  "id": "jlpt",
  "lang": "ja",
  "name": "JLPT",
  "full": "日本語能力試験 Japanese-Language Proficiency Test",
  "org": "Japan Foundation · JEES (한국: JLPT 일본어능력시험 한국실시위원회)",
  "official": "https://www.jlpt.jp/e/",
  "levels": "N5–N1 (합격/불합격, 연 2회 7·12월)",
  "levels_en": "N5–N1 (pass/fail, July & December)",
  "cefr": "공식 참고 대응(2025년 12월 시험부터 성적표 표기): N5 A1 · N4 A2 · N3 A2/B1 · N2 B1/B2 · N1 B2/C1 (합격자·총점 기준)",
  "fees": [
   {
    "country": "KR",
    "amount": "75,000원 / 60,000원",
    "note": "N1~N3 75,000원 · N4~N5 60,000원 (정규접수, 추가접수 시 10% 가산) · as of 2026-11"
   },
   {
    "country": "JP",
    "amount": "¥7,500",
    "note": "일본 국내 (2023년~) · as of 2026-11"
   }
  ],
  "register": [
   {
    "country": "KR",
    "label": "JLPT 한국 공식 접수 (한국실시위원회)",
    "url": "https://www.jlpt.or.kr"
   },
   {
    "country": "JP",
    "label": "日本国内受験 (JEES)",
    "url": "https://info.jees-jlpt.jp/"
   },
   {
    "country": "GLOBAL",
    "label": "Overseas test sites (국가·도시별 실시기관)",
    "url": "https://www.jlpt.jp/e/application/overseas_list.html"
   }
  ],
  "practice": [
   {
    "label": "공식 문제 예시 (N1–N5)",
    "url": "https://www.jlpt.jp/e/samples/forlearners.html"
   },
   {
    "label": "공식 문제집 (Practice Workbook)",
    "url": "https://www.jlpt.jp/e/samples/sampleindex.html"
   },
   {
    "label": "CEFR 참고 레벨 안내",
    "url": "https://jlpt.jp/e/about/cefr_reference.html"
   }
  ],
  "note": "가장 대표적인 일본어 시험. 합격증은 평생 유효하나 기관별로 최근 성적을 요구하기도 함",
  "note_en": "Most widely recognised Japanese test; certificate has no expiry, though some institutions require recent results.",
  "validity": "평생 (제출처 기준 확인)",
  "cefr_map": {
   "A1": "N5",
   "A2": "N4 · N3",
   "B1": "N3 · N2",
   "B2": "N2 · N1",
   "C1": "N1"
  }
 },
 {
  "id": "jpt",
  "lang": "ja",
  "name": "JPT",
  "full": "JPT 日本語能力試験 Japanese Proficiency Test",
  "org": "JPT 실행위원회 (한국: YBM)",
  "official": "https://jptest.jp/en/",
  "levels": "990점 만점 (청해 + 독해, 5점 단위)",
  "levels_en": "Score-based up to 990 (Listening + Reading)",
  "cefr": "공식 사이트: 370점 이상 ≈ CEFR A2 이상 (세부 매핑 미확인)",
  "fees": [
   {
    "country": "KR",
    "amount": "51,000원",
    "note": "정기접수 기준(2023.3 개정, 특별추가 56,100원) — 2026 최신 금액은 jpt.co.kr 확인 필요"
   },
   {
    "country": "JP",
    "amount": "¥7,700",
    "note": "일본 국내 (세금 포함) · as of 2026-11"
   }
  ],
  "register": [
   {
    "country": "KR",
    "label": "JPT 한국 공식 접수 (YBM)",
    "url": "http://www.jpt.co.kr"
   },
   {
    "country": "JP",
    "label": "Taking the Test in Japan",
    "url": "https://jptest.jp/en/examination/japan/"
   },
   {
    "country": "GLOBAL",
    "label": "Taking the Test overseas (국가별 실시기관)",
    "url": "https://jptest.jp/en/examination/overseas.php"
   }
  ],
  "practice": [
   {
    "label": "공식 체험 문제 (Trial)",
    "url": "https://jptest.jp/en/test/trial.php"
   }
  ],
  "note": "한국 기업·공공기관 취업에서 많이 쓰는 점수제 일본어 시험(토익형). 성적 유효기간 2년",
  "note_en": "TOEIC-style scored Japanese test widely used for Korean employment; scores valid 2 years.",
  "validity": "2년"
 },
 {
  "id": "eju",
  "lang": "ja",
  "name": "EJU",
  "full": "日本留学試験 Examination for Japanese University Admission for International Students",
  "org": "JASSO 일본학생지원기구 (한국: 사단법인 한일협회·부산한일교류센터)",
  "official": "https://www.jasso.go.jp/ryugaku/eju/examinee/bulletin.html",
  "levels": "점수제: 일본어 0–400 + 기술(작문) 0–50 · 이과/종합과목/수학 각 0–200",
  "levels_en": "Scored: Japanese 0–400 (+ writing 0–50); Science / Japan & the World / Math 0–200 each",
  "cefr": "공식 매핑 없음",
  "fees": [
   {
    "country": "KR",
    "amount": "65,000원 / 110,000원",
    "note": "1과목 65,000원 · 2과목 이상 110,000원 (+우편료 3,830원), 2026 해외 수험안내 기준"
   },
   {
    "country": "JP",
    "amount": "¥12,000 / ¥23,000",
    "note": "1과목 · 2과목 이상 (세금 포함) · as of 2026-11"
   }
  ],
  "register": [
   {
    "country": "KR",
    "label": "EJU 한국 실시 (한일협회)",
    "url": "https://www.ejutest.com/"
   },
   {
    "country": "JP",
    "label": "出願手続 (일본 국내)",
    "url": "https://www.jasso.go.jp/ryugaku/eju/examinee/procedure/application.html"
   },
   {
    "country": "GLOBAL",
    "label": "해외 시험장 목록 (2026 제2회)",
    "url": "https://www.jasso.go.jp/ryugaku/eju/examinee/site/nov_out_japan.html"
   },
   {
    "country": "GLOBAL",
    "label": "해외 실시협력기관 (아시아)",
    "url": "https://www.jasso.go.jp/ryugaku/eju/examinee/contact/asia.html"
   }
  ],
  "practice": [
   {
    "label": "과거 문제 샘플 (공식)",
    "url": "https://www.jasso.go.jp/ryugaku/eju/examinee/pastpaper_sample/index.html"
   }
  ],
  "note": "일본 대학 학부 유학용 입학시험(연 2회 6·11월). 성적 인정 회차는 대학별로 다름",
  "note_en": "Admission test for undergraduate study in Japan (June & November); accepted sessions vary by university.",
  "validity": "대학별 상이"
 },
 {
  "id": "jtest",
  "lang": "ja",
  "name": "J.TEST",
  "full": "実用日本語検定 J.TEST Test of Practical Japanese",
  "org": "日本語検定協会 / J.TEST 事務局 (語文研究社)",
  "official": "https://j-test.jp",
  "levels": "A-D 레벨 · E-F 레벨 · F-G 레벨 (점수에 따라 등급 판정)",
  "levels_en": "A-D, E-F, F-G level tests (grade determined by score)",
  "cefr": "공식: E-F 레벨 ≈ A2 이상(E), A1 이상(F) — 일본어교육 참조틀 기준",
  "fees": [
   {
    "country": "JP",
    "amount": "¥5,800",
    "note": "일본 국내 공개시험 (일본어학교 재학생 반액) · as of 2026-11"
   },
   {
    "country": "KR",
    "amount": "현지 실시기관 확인",
    "note": "한국 응시료는 공식 사이트에 미게재"
   }
  ],
  "register": [
   {
    "country": "KR",
    "label": "한국 서울 지역 실시처 (공식 사이트 연결)",
    "url": "https://japan.siwonschool.com/?s=event&p=jtest"
   },
   {
    "country": "KR",
    "label": "한국 서울 외 지역 실시처 (공식 사이트 연결)",
    "url": "https://cafe.naver.com/jtestkorea/"
   },
   {
    "country": "GLOBAL",
    "label": "海外事務局 (국가별 실시처)",
    "url": "https://j-test.jp/office1"
   },
   {
    "country": "JP",
    "label": "個人申込 (일본 국내)",
    "url": "https://j-test.jp/application"
   }
  ],
  "practice": [
   {
    "label": "공식 샘플 문제",
    "url": "https://j-test.jp/newj-sample"
   }
  ],
  "note": "연 6회 안팎 시행되는 실용 일본어 시험. 레벨별 점수로 급수 판정",
  "note_en": "Practical Japanese test held several times a year; level judged by score.",
  "validity": "규정 없음 (제출처 확인)"
 },
 {
  "id": "bjt",
  "lang": "ja",
  "name": "BJT",
  "full": "BJTビジネス日本語能力テスト Business Japanese Proficiency Test",
  "org": "日本漢字能力検定協会 (漢検)",
  "official": "https://www.kanken.or.jp/bjt/",
  "levels": "0–800점 · J5 / J4 / J3 / J2 / J1 / J1+",
  "levels_en": "0–800 scale; J5–J1+",
  "cefr": "공식 매핑 미확인",
  "fees": [
   {
    "country": "JP",
    "amount": "¥8,000",
    "note": "일본 국내 CBT (세금 포함, 2026.4 개정) · as of 2026-11"
   },
   {
    "country": "KR",
    "amount": "현지 사이트 확인",
    "note": "해외 응시료는 일본과 다름"
   }
  ],
  "register": [
   {
    "country": "KR",
    "label": "BJT 한국 안내 (공식 사이트 연결)",
    "url": "http://www.bjttest.com/"
   },
   {
    "country": "JP",
    "label": "申込方法 (일본 국내)",
    "url": "https://www.kanken.or.jp/bjt/exam/apply.html"
   },
   {
    "country": "GLOBAL",
    "label": "BJT English (해외 응시)",
    "url": "https://www.kanken.or.jp/bjt/english/"
   }
  ],
  "practice": [
   {
    "label": "공식 샘플 문제 (Part 1)",
    "url": "https://www.kanken.or.jp/bjt/sample/sample01.html"
   },
   {
    "label": "레벨 & 샘플",
    "url": "https://www.kanken.or.jp/bjt/about/level_sample.html"
   }
  ],
  "note": "비즈니스 일본어 CBT(피어슨 VUE 상시 응시). 일본 취업비자 가점 등에 활용",
  "note_en": "Business Japanese CBT taken year-round at Pearson VUE centres.",
  "validity": "규정 없음 (제출처 확인)"
 },
 {
  "id": "hsk",
  "lang": "zh",
  "name": "HSK (+HSKK)",
  "full": "汉语水平考试 Hanyu Shuiping Kaoshi · HSKK 口语考试",
  "org": "中文联盟/汉考国际 CTI (한국: HSK한국사무국 등)",
  "official": "https://www.chinesetest.cn",
  "levels": "HSK 3.0: 3단계 9급 (1–9급) · HSKK 초·중·고급",
  "levels_en": "HSK 3.0: 3 stages, levels 1–9; HSKK Elementary/Intermediate/Advanced",
  "cefr": "공식 매핑 없음",
  "fees": [
   {
    "country": "KR",
    "amount": "30,000–130,000원",
    "note": "HSK시험센터 응시규정: PBT 1급 30,000~6급 120,000원 · IBT 1급 35,000~6급 130,000원 · HSKK(IBT) 50,000/60,000/80,000원 — 2026.12 HSK 3.0 개편으로 변동 가능, 접수처 확인"
   }
  ],
  "register": [
   {
    "country": "KR",
    "label": "HSK한국사무국",
    "url": "https://www.hsk.or.kr"
   },
   {
    "country": "KR",
    "label": "HSK시험센터 (대교 차이홍)",
    "url": "https://www.hsk-korea.co.kr/"
   },
   {
    "country": "GLOBAL",
    "label": "Chinese Tests Service (국제 접수·시험장 검색)",
    "url": "https://www.chinesetest.cn"
   }
  ],
  "practice": [
   {
    "label": "HSK 3.0 공식 모의시험 체험",
    "url": "https://hsk3demo-intl.chinesetest.cn"
   },
   {
    "label": "HSK 3.0 공식 샘플 문제 (ZIP)",
    "url": "https://hsk-sample-1409982902.cos.ap-beijing.myqcloud.com/HSK3.0.zip"
   },
   {
    "label": "HSK 3.0 시험요강",
    "url": "https://www.chinesetest.cn/syllabus"
   }
  ],
  "note": "한국은 2026년 12월 13일 시험부터 HSK 3.0으로 전면 개편(기존 HSK는 11월 7일이 마지막). 성적 2년 유효",
  "note_en": "Korea switches to HSK 3.0 from the 13 Dec 2026 test; scores valid 2 years.",
  "validity": "2년"
 },
 {
  "id": "tocfl",
  "lang": "zh",
  "name": "TOCFL",
  "full": "華語文能力測驗 Test of Chinese as a Foreign Language (Taiwan)",
  "org": "國家華語測驗推動工作委員會 (SC-TOP, 대만 교육부)",
  "official": "https://tocfl.edu.tw/",
  "levels": "Band A(1–2급) · Band B(3–4급) · Band C(5–6급) (+Novice)",
  "levels_en": "Band A (L1–2), B (L3–4), C (L5–6) + Novice",
  "cefr": "A1–C2 대응 (1급 A1 … 6급 C2)",
  "fees": [
   {
    "country": "FR",
    "amount": "€25 / €30",
    "note": "지필 €25 · 디지털 €30 (프랑스 시험장 2026 안내)"
   },
   {
    "country": "KR",
    "amount": "해외 접수 시스템에서 확인",
    "note": "한국 응시료 공식 미확인"
   }
  ],
  "register": [
   {
    "country": "KR",
    "label": "해외 접수 시스템 (Test area: Korea)",
    "url": "https://tocfl.edu.tw/OS/index.php"
   },
   {
    "country": "TW",
    "label": "臺灣考區 報名",
    "url": "https://tocfl.edu.tw/TW/"
   },
   {
    "country": "GLOBAL",
    "label": "Overseas registration",
    "url": "https://tocfl.edu.tw/OS/index.php"
   }
  ],
  "practice": [
   {
    "label": "공식 모의시험 (模擬試題)",
    "url": "https://tocfl.edu.tw/tocfl/index.php/exam/test"
   }
  ],
  "note": "대만(번체자) 중국어 시험. 대만 정부 장학금·유학에 사용",
  "note_en": "Taiwan's Chinese test (traditional characters); used for Taiwan scholarships and study.",
  "validity": "제출처 기준 확인",
  "cefr_map": {
   "A1": "1급",
   "A2": "2급",
   "B1": "3급",
   "B2": "4급",
   "C1": "5급",
   "C2": "6급"
  }
 },
 {
  "id": "bct",
  "lang": "zh",
  "name": "BCT",
  "full": "商务汉语考试 Business Chinese Test",
  "org": "汉考国际 CTI",
  "official": "https://www.chinesetest.cn/BCT",
  "levels": "BCT(A) · BCT(B) 필기 + BCT Speaking",
  "levels_en": "BCT (A), BCT (B) written + BCT Speaking",
  "cefr": "공식 매핑 없음",
  "fees": [],
  "register": [
   {
    "country": "GLOBAL",
    "label": "Chinese Tests Service",
    "url": "https://www.chinesetest.cn"
   }
  ],
  "practice": [],
  "note": "비즈니스 중국어 시험(지필·IBT·홈테스트)",
  "note_en": "Business Chinese test (paper, internet-based, at-home).",
  "validity": "규정 없음 (제출처 확인)"
 },
 {
  "id": "yct",
  "lang": "zh",
  "name": "YCT",
  "full": "中小学生汉语考试 Youth Chinese Test",
  "org": "汉考国际 CTI",
  "official": "https://www.chinesetest.cn/YCT",
  "levels": "필기 1–4급 · 구술 초급/중급",
  "levels_en": "Written L1–4; Oral Elementary/Intermediate",
  "cefr": "공식 매핑 없음",
  "fees": [],
  "register": [
   {
    "country": "GLOBAL",
    "label": "Chinese Tests Service",
    "url": "https://www.chinesetest.cn"
   }
  ],
  "practice": [],
  "note": "초·중등학생 대상 중국어 시험",
  "note_en": "Chinese test for primary and secondary school students.",
  "validity": "규정 없음"
 },
 {
  "id": "topik",
  "lang": "ko",
  "name": "TOPIK",
  "full": "한국어능력시험 Test of Proficiency in Korean (PBT·IBT·말하기)",
  "org": "교육부 국립국제교육원 (NIIED)",
  "official": "https://www.topik.go.kr",
  "levels": "TOPIK I 1–2급 · TOPIK II 3–6급 · 말하기 1–6급",
  "levels_en": "TOPIK I L1–2, TOPIK II L3–6; Speaking L1–6",
  "cefr": "공식 매핑 없음",
  "fees": [
   {
    "country": "KR",
    "amount": "40,000–95,000원",
    "note": "지필 I 40,000 · II 55,000 / IBT I 70,000 · II 95,000 / 말하기 80,000원 (2026 시행계획) · 해외는 현지 기관별 상이"
   }
  ],
  "register": [
   {
    "country": "KR",
    "label": "TOPIK 공식 접수 (국내·해외)",
    "url": "https://www.topik.go.kr"
   }
  ],
  "practice": [
   {
    "label": "기출문제 공개 (홈페이지 학습자료 메뉴)",
    "url": "https://www.topik.go.kr"
   }
  ],
  "note": "외국인·재외동포 대상 한국어 시험. 성적은 발표일로부터 2년 유효",
  "note_en": "Korean test for non-native speakers; results valid 2 years from release.",
  "validity": "2년"
 },
 {
  "id": "vn-viet",
  "lang": "vi",
  "name": "베트남어 능력평가시험",
  "full": "Kỳ thi đánh giá năng lực tiếng Việt dùng cho người nước ngoài",
  "org": "베트남 교육훈련부(MOET) 규정(통문 17/2015 역량틀, 09/2026 시험규정)에 따라 대학 등 시행기관이 실시",
  "official": "https://vns.hcmussh.edu.vn/",
  "levels": "6단계 (Bậc 1–6, 베트남어 역량틀)",
  "levels_en": "6 levels (Bậc 1–6, Vietnamese Language Ability Framework)",
  "cefr": "공식 매핑 미확인",
  "fees": [],
  "register": [
   {
    "country": "VN",
    "label": "호찌민 인문사회과학대 베트남학부 (시행기관 예시, 연 5회)",
    "url": "https://vns.hcmussh.edu.vn/"
   }
  ],
  "practice": [],
  "note": "단일 국가시험이 아니라 교육부 규정에 따른 인가 기관별 시험. 기관·응시료는 개별 확인",
  "note_en": "Not a single national exam; run by authorised institutions under MOET rules.",
  "validity": "미확인"
 },
 {
  "id": "cu-tfl",
  "lang": "th",
  "name": "CU-TFL",
  "full": "Chulalongkorn University Test of Thai as a Foreign Language",
  "org": "쭐랄롱꼰대 시린톤 태국어연구소 (Sirindhorn Thai Language Institute)",
  "official": "https://www.sti.chula.ac.th/operation-service/thai-test/thai-test-for-non-native/cu-tfl-en/en-th",
  "levels": "Novice · Intermediate · Advanced · Superior · Distinguished (듣기·읽기·쓰기)",
  "levels_en": "Novice–Distinguished (listening, reading, writing)",
  "cefr": "공식 매핑 미확인",
  "fees": [],
  "register": [
   {
    "country": "GLOBAL",
    "label": "CU-TFL 공식 안내 (STI Chula)",
    "url": "https://www.sti.chula.ac.th/operation-service/thai-test/thai-test-for-non-native/cu-tfl-en/en-th"
   }
  ],
  "practice": [],
  "note": "태국 대표 태국어 능력시험. 태국 외 대만·홍콩 등 제휴 기관에서도 시행",
  "note_en": "Main Thai proficiency test; also held at partner institutions abroad.",
  "validity": "미확인"
 },
 {
  "id": "ukbi",
  "lang": "id",
  "name": "UKBI",
  "full": "Uji Kemahiran Berbahasa Indonesia (UKBI Adaptif)",
  "org": "Badan Pengembangan dan Pembinaan Bahasa (인도네시아 언어개발청)",
  "official": "https://ukbi.kemendikdasmen.go.id/",
  "levels": "250–800점, 7등급: Istimewa · Sangat Unggul · Unggul · Madya · Semenjana · Marginal · Terbatas",
  "levels_en": "250–800; 7 bands (Istimewa → Terbatas)",
  "cefr": "공식 매핑 미확인",
  "fees": [
   {
    "country": "ID",
    "amount": "Rp1,000,000",
    "note": "외국인 일반 Rp1,000,000 · 대학생 Rp500,000 · 학생 Rp250,000 (PP 22/2023 기준)"
   }
  ],
  "register": [
   {
    "country": "GLOBAL",
    "label": "UKBI Adaptif 공식 (온라인 응시)",
    "url": "https://ukbi.kemendikdasmen.go.id/"
   }
  ],
  "practice": [],
  "note": "인도네시아 정부 공인 인도네시아어 시험(온라인 적응형)",
  "note_en": "Indonesian government's official Indonesian proficiency test (adaptive online).",
  "validity": "미확인"
 },
 {
  "id": "hamza",
  "lang": "ar",
  "name": "Hamza",
  "full": "اختبار همزة Hamza Academic Arabic Proficiency Test",
  "org": "King Salman Global Academy for Arabic Language (KSGAAL) · 사우디 ETEC/Qiyas",
  "official": "https://ksaa.gov.sa/en/initiatives/50969-Hamza-Academic-Test",
  "levels": "4등급 A2 · B1 · B2 · C1 (듣기·읽기·쓰기·말하기)",
  "levels_en": "4 levels A2–C1 (4 skills)",
  "cefr": "CEFR 기반 설계 (A2–C1)",
  "fees": [
   {
    "country": "SA",
    "amount": "무료(2024–2025)",
    "note": "2026년 이후 유료 여부 미확인"
   }
  ],
  "register": [
   {
    "country": "GLOBAL",
    "label": "Hamza 공식 등록",
    "url": "https://form.ksaa.gov.sa/ic/builder/rt/hamzatest_1_0/live/webApps/regapp/"
   }
  ],
  "practice": [],
  "note": "사우디 정부 기관이 2023년 출범시킨 비원어민 대상 아랍어 표준시험(CBT·원격)",
  "note_en": "Saudi government standardised Arabic test for non-native speakers, launched 2023.",
  "validity": "미확인",
  "cefr_map": {
   "A2": "A2",
   "B1": "B1",
   "B2": "B2",
   "C1": "C1"
  }
 },
 {
  "id": "yael",
  "lang": "he",
  "name": "YAEL / YAELNET",
  "full": "Hebrew Proficiency Test (YAEL)",
  "org": "NITE 이스라엘 국립시험평가원",
  "official": "https://www.nite.org.il/other-tests/yael/about-the-test/?lang=en",
  "levels": "점수제 (대학 입학·히브리어 반 배정용)",
  "levels_en": "Scored (university admission & placement)",
  "cefr": "공식 매핑 없음",
  "fees": [
   {
    "country": "IL",
    "amount": "₪300",
    "note": "YAELNET 단독 응시(이스라엘 내) · 해외는 심리측정시험(Psychometric)과 함께 응시 시 추가비용 없음"
   }
  ],
  "register": [
   {
    "country": "IL",
    "label": "YAELNET 등록",
    "url": "https://niteop.nite.org.il/#/net-registration/H,1"
   },
   {
    "country": "GLOBAL",
    "label": "Tests administered overseas",
    "url": "https://nite.org.il/other-tests/tests-administered-overseas/?lang=en"
   }
  ],
  "practice": [],
  "note": "이스라엘 대학 입학용 히브리어 시험. 해외에서는 심리측정시험과 함께만 응시 가능",
  "note_en": "Hebrew test for Israeli university admission; abroad only with the Psychometric test.",
  "validity": "미확인"
 },
 {
  "id": "flex",
  "lang": "multi",
  "name": "FLEX",
  "full": "FLEX 외국어능력시험 Foreign Language EXamination",
  "org": "한국외국어대학교 FLEX센터 · 대한상공회의소",
  "official": "https://www.flex.or.kr",
  "langs": [
   "en",
   "zh",
   "ja",
   "fr",
   "de",
   "ru",
   "es",
   "ar",
   "vi",
   "th",
   "id",
   "hi"
  ],
  "levels": "듣기·읽기 1000점 / 쓰기·말하기 각 250점, 등급 1A–3C (9단계)",
  "levels_en": "L&R 1000 pts; W & S 250 each; grades 1A–3C",
  "cefr": "공식 매핑 미확인",
  "fees": [
   {
    "country": "KR",
    "amount": "45,000원 / 75,000원",
    "note": "듣기·읽기 45,000 · 쓰기 75,000 · 말하기 75,000원 (공식 안내자료 기준, 최신 금액 확인 필요)"
   }
  ],
  "register": [
   {
    "country": "KR",
    "label": "FLEX 공식",
    "url": "https://www.flex.or.kr"
   }
  ],
  "practice": [],
  "note": "정기시험 7개 언어 + 아랍어·베트남어·태국어·마인어·힌디어 등 특수외국어 시험. 성적 2년 유효",
  "note_en": "7 regular languages plus critical languages (Arabic, Vietnamese, Thai, Malay-Indonesian, Hindi…); valid 2 years.",
  "validity": "2년"
 },
 {
  "id": "snult",
  "lang": "multi",
  "name": "SNULT",
  "full": "Seoul National University Language Test",
  "org": "서울대학교 언어교육원 (TEPS관리위원회)",
  "official": "https://lei.snu.ac.kr/mobile/en/teps/products/snultEng.jsp",
  "langs": [
   "ja",
   "zh",
   "fr",
   "de",
   "es",
   "ru",
   "en",
   "pt",
   "ar"
  ],
  "levels": "100점 만점 (듣기·읽기 평균)",
  "levels_en": "0–100 (average of listening & reading)",
  "cefr": "미확인 (알려진 대응: B1 50 · B2 60 · C1 70 · C2 80점)",
  "fees": [],
  "register": [
   {
    "country": "KR",
    "label": "TEPS 공식 사이트 (SNULT 접수)",
    "url": "http://en.teps.or.kr/"
   }
  ],
  "practice": [],
  "note": "일·중·불·독·서·러 정기 시행(영·포·아랍어는 비정기). 외교관후보자시험 등에 활용",
  "note_en": "Regular tests in 6 languages (English, Portuguese, Arabic irregular); used for diplomatic service exams.",
  "validity": "미확인"
 },
 {
  "id": "actfl",
  "lang": "multi",
  "name": "ACTFL OPI/OPIc/WPT/L&Rcat",
  "full": "ACTFL Proficiency Assessments (US)",
  "org": "ACTFL · Language Testing International (LTI, 독점 라이선스)",
  "official": "https://www.actfl.org/assessments",
  "langs": [
   "120+ languages"
  ],
  "levels": "Novice (Low/Mid/High) – Intermediate – Advanced – Superior – Distinguished",
  "levels_en": "ACTFL scale Novice Low – Distinguished",
  "cefr": "ACTFL 공식: 모든 언어에서 CEFR 등급 부여 가능",
  "fees": [
   {
    "country": "US",
    "amount": "$165",
    "note": "개인 OPI $145 + 원격감독 $20 (ACTFL 안내) · as of 2026-11"
   }
  ],
  "register": [
   {
    "country": "GLOBAL",
    "label": "Language Testing International (응시 신청)",
    "url": "https://www.languagetesting.com/"
   }
  ],
  "practice": [
   {
    "label": "LTI 데모 체험",
    "url": "https://www.languagetesting.com/catalog/category/view/s/experience-a-demo/id/65/"
   },
   {
    "label": "ACTFL→CEFR 등급 안내",
    "url": "https://www.actfl.org/assessments/assigning-cefr-ratings-to-actfl-assessments"
   }
  ],
  "note": "미국 표준 외국어 능력 척도. 120개 이상 언어, 말하기(OPI)·쓰기(WPT)·듣기읽기(L&Rcat)",
  "note_en": "US standard proficiency scale; 120+ languages across speaking, writing, listening/reading.",
  "validity": "제출처 기준 확인"
 }
];
