interface VocabExampleSeed {
    example_text: string;
    meaning_vi: string;
    meaning_en: string;
    furigana: string;
  }
  
   interface VocabSeedData {
    vocab: string;
    furigana?: string;
    meaning_vi: string;
    meaning_en: string;
    lesson_number: number; // để tự liên kết lesson
    examples?: VocabExampleSeed[];
    kanji_list?: string[]; // nếu có kanji liên kết thủ công
  }
      export const vocabMimikaraSeedN3Data: VocabSeedData[] = 
      [

        {
            "vocab": "男性",
            "furigana": "だんせい",
            "meaning_vi": "nam giới, đàn ông, giới tính nam",
            "meaning_en": "Men, men, male gender",
            "examples": [
              {
                "example_text": "理想の　{男性／女性}　と結婚する",
                "furigana": "理想（りそう）だんせいじょせいけっこんする",
                "meaning_vi": "Kết hôn với người đàn ông/ phụ nữ lý tưởng.",
                "meaning_en": "Marry your ideal {male/female}"
              }
            ],
            "lesson_number": 1
          },
          {
            "vocab": "女性",
            "furigana": "じょせい",
            "meaning_vi": "nữ giới, phụ nữ, giới tính nữ",
            "meaning_en": "Women, women, female gender",
            "examples": [
              {
                "example_text": "「あの｛○女性／○女の人／x女｝はだれですか」",
                "furigana": "「あの｛○女性（じょせい）おんなひとおんな｝はだれですか」",
                "meaning_vi": "Người con gái/phụ nữ kia là ai vậy.",
                "meaning_en": "\"Who is that {○ woman/○ woman/x woman}?\""
              }
            ],
            "lesson_number": 1
          },
          {
            "vocab": "高齢",
            "furigana": "こうれい",
            "meaning_vi": "tuổi cao",
            "meaning_en": "old age",
            "examples": [
              {
                "example_text": "祖母は高齢だが、まだとても元気だ",
                "furigana": "祖母（そぼ）こうれいげんきだ",
                "meaning_vi": "Bà tôi tuy tuổi đã cao nhưng rất khỏe mạnh.",
                "meaning_en": "My grandmother is old, but still very well"
              }
            ],
            "lesson_number": 1
          },
          {
            "vocab": "年上",
            "furigana": "としうえ",
            "meaning_vi": "lớn tuổi hơn, hơn tuổi",
            "meaning_en": "older, older than age",
            "examples": [
              {
                "example_text": "年上の友だち",
                "furigana": "年上（としうえ）ともだち",
                "meaning_vi": "Bạn hơn tuổi.",
                "meaning_en": "Older friends"
              }
            ],
            "lesson_number": 1
          },
          {
            "vocab": "目上",
            "furigana": "めうえ",
            "meaning_vi": "cấp trên, bề trên",
            "meaning_en": "superiors, superiors",
            "examples": [
              {
                "example_text": "目上の人には敬語で話したほうがいい",
                "furigana": "目上（めうえ）ひとけいごはなしたほうがいい",
                "meaning_vi": "Đối với người bề trên nên nói chuyện bằng kính ngữ.",
                "meaning_en": "It's better to speak honorifics to someone superior"
              }
            ],
            "lesson_number": 1
          },
          {
            "vocab": "先輩",
            "furigana": "せんぱい",
            "meaning_vi": "người đi trước",
            "meaning_en": "forecast",
            "examples": [
              {
                "example_text": "田中さんと私は同じ年だが、職場では彼のほうが先輩だ",
                "furigana": "田中（たなか）わたしおなとししょくばかれせんぱいだ",
                "meaning_vi": "Tanaka và tôi cùng tuổi nhưng ở công ty cậu ấy là tiền bối.",
                "meaning_en": "Tanaka and I are the same age, but he is a senior at work."
              }
            ],
            "lesson_number": 1
          },
          {
            "vocab": "後輩",
            "furigana": "こうはい",
            "meaning_vi": "người đi sau",
            "meaning_en": "latter",
            "examples": [],
            "lesson_number": 1
          },
          {
            "vocab": "上司",
            "furigana": "じょうし",
            "meaning_vi": "cấp trên",
            "meaning_en": "superior",
            "examples": [
              {
                "example_text": "上司に相談してから決定する",
                "furigana": "上司（じょうし）そうだんけっていする",
                "meaning_vi": "Tôi sẽ trao đổi với cấp trên rồi mới quyết định.",
                "meaning_en": "Consult your boss before making a decision"
              }
            ],
            "lesson_number": 1
          },
          {
            "vocab": "相手",
            "furigana": "あいて",
            "meaning_vi": "đối phương",
            "meaning_en": "enemy",
            "examples": [
              {
                "example_text": "相手の目を見て話す",
                "furigana": "相手（あいて）めみはなす",
                "meaning_vi": "Nhìn vào mắt người đối diện mà nói chuyện.",
                "meaning_en": "Look into the other person's eyes and talk"
              }
            ],
            "lesson_number": 1
          },
          {
            "vocab": "知り合い",
            "furigana": "しりあい",
            "meaning_vi": "người quen",
            "meaning_en": "acquaintance",
            "examples": [
              {
                "example_text": "知り合いに息子の就職を頼む",
                "furigana": "知（し）あむすこしゅうしょくたのむ",
                "meaning_vi": "Nhờ người quen xin việc cho đứa con trai.",
                "meaning_en": "Ask an acquaintance to find a job for his son"
              }
            ],
            "lesson_number": 1
          },
          {
            "vocab": "友人",
            "furigana": "ゆうじん",
            "meaning_vi": "bạn, người bạn",
            "meaning_en": "You, friend",
            "examples": [
              {
                "example_text": "「田中さんを知っていますか」...「ええ、学生時代の友人です」",
                "furigana": "「田中（たなか）しがくせいじだいゆうじんです」",
                "meaning_vi": "\"Bạn có biết anh Tanka không?\" \"Có, là bạn thời học sinh của tôi.\"",
                "meaning_en": "\"Do you know Tanaka-san?\"... \"Yeah, I'm a friend from my school days.\""
              }
            ],
            "lesson_number": 1
          },
          {
            "vocab": "仲",
            "furigana": "なか",
            "meaning_vi": "quan hệ, mối quan hệ",
            "meaning_en": "Relationship, relationship",
            "examples": [
              {
                "example_text": "私は山本さんと仲がいい",
                "furigana": "私（わたし）やまもとなかがいい",
                "meaning_vi": "Tôi thân với anh Yamamoto.",
                "meaning_en": "I'm on good terms with Yamamoto-san"
              }
            ],
            "lesson_number": 1
          },
          {
            "vocab": "生年月日",
            "furigana": "せいねんがっぴ",
            "meaning_vi": "ngày tháng năm sinh",
            "meaning_en": "Date of birth",
            "examples": [
              {
                "example_text": "書類に生年月日を記入する",
                "furigana": "書類（しょるい）せいねんがっぴきにゅうする",
                "meaning_vi": "Điền ngày tháng năm sinh vào tài liệu.",
                "meaning_en": "Enter your date of birth on the document"
              }
            ],
            "lesson_number": 1
          },
          {
            "vocab": "誕生",
            "furigana": "たんじょう",
            "meaning_vi": "ra đời",
            "meaning_en": "launch",
            "examples": [
              {
                "example_text": "新しい命の誕生を祝う",
                "furigana": "新（あたら）いのちたんじょういわう",
                "meaning_vi": "Cầu chúc sự ra đời của sinh mệnh mới.",
                "meaning_en": "Celebrating the birth of a new life"
              }
            ],
            "lesson_number": 1
          },
          {
            "vocab": "年",
            "furigana": "とし",
            "meaning_vi": "năm, tuổi",
            "meaning_en": "year, age",
            "examples": [
              {
                "example_text": "年の初めに１年の計画を立てる",
                "furigana": "年（とし）はじねんけいかくたてる",
                "meaning_vi": "Lập kế hoạch cho một năm vào đầu năm mới.",
                "meaning_en": "Plan for the year at the beginning of the year"
              }
            ],
            "lesson_number": 1
          },
          {
            "vocab": "出身",
            "furigana": "しゅっしん",
            "meaning_vi": "xuất thân, gốc gác",
            "meaning_en": "Original, original",
            "examples": [
              {
                "example_text": "「ご出身はどちらですか」...「東京です」",
                "furigana": "「ご出身（しゅっしん）とうきょうです」",
                "meaning_vi": "\"Bạn đến từ đâu?\" \"Đến từ Tokyo.\"",
                "meaning_en": "\"Where are you from?\"... \"It's Tokyo.\""
              }
            ],
            "lesson_number": 1
          },
          {
            "vocab": "故郷",
            "furigana": "こきょう",
            "meaning_vi": "quê hương",
            "meaning_en": "hometown",
            "examples": [
              {
                "example_text": "仕事が忙しくて、もう何年も故郷に帰っていない",
                "furigana": "仕事（しごと）いそがなんねんこきょうかえっていない",
                "meaning_vi": "Vì công việc bận rộn, nên nhiều năm chưa trở về quê hương.",
                "meaning_en": "I'm busy with work and haven't returned to my hometown for years now."
              }
            ],
            "lesson_number": 1
          },
          {
            "vocab": "成長",
            "furigana": "せいちょう",
            "meaning_vi": "sinh trưởng, phát triển, trưởng thành",
            "meaning_en": "growth, development, growth",
            "examples": [
              {
                "example_text": "子どもの成長を喜ぶ",
                "furigana": "子（こ）せいちょうよろこぶ",
                "meaning_vi": "Vui mừng về sự trưởng thành của đứa con.",
                "meaning_en": "Rejoice in the growth of children"
              }
            ],
            "lesson_number": 2
          },
          {
            "vocab": "成人",
            "furigana": "せいじん",
            "meaning_vi": "người trưởng thành",
            "meaning_en": "adult",
            "examples": [
              {
                "example_text": "日本では二十歳以上の人を成人という",
                "furigana": "日本（にほん）はたちいじょうひとせいじんという",
                "meaning_vi": "Ở Nhật người ta gọi người trên 20 tuổi là người trưởng thành.",
                "meaning_en": "In Japan, people over the age of 20 are called adults."
              }
            ],
            "lesson_number": 2
          },
          {
            "vocab": "合格",
            "furigana": "ごうかく",
            "meaning_vi": "thi đỗ, trúng tuyển",
            "meaning_en": "pass, admission",
            "examples": [
              {
                "example_text": "｛大学／入学試験／検査　…｝に合格する",
                "furigana": "｛大学（だいがく）にゅうがくしけんけんさごうかくする",
                "meaning_vi": "Đỗ {Kỳ thi đại học / Kỳ thi nhập học / Kiểm tra ...}.",
                "meaning_en": "Pass {University/Admission Examination/Inspection...}"
              }
            ],
            "lesson_number": 2
          },
          {
            "vocab": "進学",
            "furigana": "しんがく",
            "meaning_vi": "học lên",
            "meaning_en": "study",
            "examples": [
              {
                "example_text": "子どもの進学について考える",
                "furigana": "子（こ）しんがくかんがえる",
                "meaning_vi": "Tôi suy nghĩ về việc học lên của đứa con.",
                "meaning_en": "Thinking about children's advancement in college"
              }
            ],
            "lesson_number": 2
          },
          {
            "vocab": "退学",
            "furigana": "たいがく",
            "meaning_vi": "thôi học",
            "meaning_en": "stop",
            "examples": [
              {
                "example_text": "退学の理由を説明する",
                "furigana": "退学（たいがく）りゆうせつめいする",
                "meaning_vi": "Trình bày lý do thôi học.",
                "meaning_en": "Explain the reason for dropping out"
              }
            ],
            "lesson_number": 2
          },
          {
            "vocab": "就職",
            "furigana": "しゅうしょく",
            "meaning_vi": "tìm việc",
            "meaning_en": "find",
            "examples": [
              {
                "example_text": "旅行会社に就職する",
                "furigana": "旅行（りょこう）がいしゃしゅうしょくする",
                "meaning_vi": "Tôi sẽ làm việc ở công ty du lịch.",
                "meaning_en": "Get a job at a travel agency"
              }
            ],
            "lesson_number": 2
          },
          {
            "vocab": "退職",
            "furigana": "たいしょく",
            "meaning_vi": "nghỉ việc",
            "meaning_en": "quit one's job",
            "examples": [
              {
                "example_text": "母の介護のため、退職を決めた",
                "furigana": "母（はは）かいごたいしょくきめた",
                "meaning_vi": "Tôi quyết định thôi việc để chăm sóc mẹ.",
                "meaning_en": "I decided to quit to take care of my mother."
              }
            ],
            "lesson_number": 2
          },
          {
            "vocab": "失業",
            "furigana": "しつぎょう",
            "meaning_vi": "thất nghiệp",
            "meaning_en": "unemployment",
            "examples": [
              {
                "example_text": "会社が倒産して失業した",
                "furigana": "会社（かいしゃ）とうさんしつぎょうした",
                "meaning_vi": "Vì công ty phá sản nên tôi thất nghiệp.",
                "meaning_en": "The company went bankrupt and lost its job"
              }
            ],
            "lesson_number": 2
          },
          {
            "vocab": "残業",
            "furigana": "ざんぎょう",
            "meaning_vi": "làm thêm giờ",
            "meaning_en": "overtime",
            "examples": [
              {
                "example_text": "残業が多くて疲れた",
                "furigana": "残業（ざんぎょう）おおつかれた",
                "meaning_vi": "Vì tăng ca nhiều nên mệt mỏi.",
                "meaning_en": "I'm tired of working so much overtime"
              }
            ],
            "lesson_number": 2
          },
          {
            "vocab": "生活",
            "furigana": "せいかつ",
            "meaning_vi": "sinh hoạt, cuộc sống",
            "meaning_en": "activities, life",
            "examples": [
              {
                "example_text": "健康的な生活を送る",
                "furigana": "健康的（けんこうてき）せいかつおくる",
                "meaning_vi": "Sống cuộc sống khỏe mạnh.",
                "meaning_en": "Lessons for a healthy life"
              }
            ],
            "lesson_number": 2
          },
          {
            "vocab": "通勤",
            "furigana": "つうきん",
            "meaning_vi": "đi làm",
            "meaning_en": "go to work",
            "examples": [
              {
                "example_text": "私は毎日１時間かけて通勤している",
                "furigana": "私（わたし）まいにちじかんつうきんしている",
                "meaning_vi": "Hàng ngày tôi mất một tiếng đi làm.",
                "meaning_en": "I spend an hour commuting every day"
              }
            ],
            "lesson_number": 2
          },
          {
            "vocab": "学歴",
            "furigana": "がくれき",
            "meaning_vi": "bằng cấp, quá trình học tập",
            "meaning_en": "degree, learning process",
            "examples": [
              {
                "example_text": "学歴が高くても、実力があるかどうかはわからない",
                "furigana": "学歴（がくれき）たかじつりょくがあるかどうかはわからない",
                "meaning_vi": "Cho dù bằng cấp cao nhưng thực lực thì không biết thế nào.",
                "meaning_en": "Even if you have a high academic background, you don't know if you have the ability"
              }
            ],
            "lesson_number": 2
          },
          {
            "vocab": "給料",
            "furigana": "きゅうりょう",
            "meaning_vi": "tiền lương",
            "meaning_en": "salary",
            "examples": [
              {
                "example_text": "会社から給料をもらう",
                "furigana": "会社（かいしゃ）きゅうりょうをもらう",
                "meaning_vi": "Nhận lương từ công ty.",
                "meaning_en": "Get paid by the company"
              }
            ],
            "lesson_number": 2
          },
          {
            "vocab": "面接",
            "furigana": "めんせつ",
            "meaning_vi": "phỏng vấn",
            "meaning_en": "interview",
            "examples": [
              {
                "example_text": "きょう、会社の人との面接がある",
                "furigana": "きょう、会社（かいしゃ）ひとめんせつがある",
                "meaning_vi": "Hôm nay có buổi phỏng vấn với người trong công ty.",
                "meaning_en": "I'll have an interview with someone from work today."
              }
            ],
            "lesson_number": 2
          },
          {
            "vocab": "休憩",
            "furigana": "きゅうけい",
            "meaning_vi": "nghỉ giải lao",
            "meaning_en": "holiday",
            "examples": [
              {
                "example_text": "「ではここで、１０分間の休憩です」",
                "furigana": "「ではここで、１０分間（ぷんかん）きゅうけいです」",
                "meaning_vi": "\"Thế thì, nghỉ giải lao 10 phút từ bây giờ.\"",
                "meaning_en": "\"Now, here's a 10-minute break.\""
              }
            ],
            "lesson_number": 2
          },
          {
            "vocab": "観光",
            "furigana": "かんこう",
            "meaning_vi": "tham quan, du lịch",
            "meaning_en": "Sightseeing, travel",
            "examples": [
              {
                "example_text": "「来日の目的は観光です」",
                "furigana": "「来日（らいにち）もくてきかんこうです」",
                "meaning_vi": "Mục đích đến Nhật Bản là du lịch.",
                "meaning_en": "\"The purpose of visiting Japan is to tourism.\""
              }
            ],
            "lesson_number": 2
          },
          {
            "vocab": "帰国",
            "furigana": "きこく",
            "meaning_vi": "về nước",
            "meaning_en": "return home",
            "examples": [
              {
                "example_text": "今度の正月には帰国するつもりだ",
                "furigana": "今度（こんど）しょうがつきこくするつもりだ",
                "meaning_vi": "Dịp tết lần này tôi dự định sẽ về nước.",
                "meaning_en": "I plan to return to Japan this year"
              }
            ],
            "lesson_number": 2
          },
          {
            "vocab": "帰省",
            "furigana": "きせい",
            "meaning_vi": "về quê",
            "meaning_en": "come home",
            "examples": [
              {
                "example_text": "お盆にはふるさとに帰省する日本人が多い",
                "furigana": "お盆（ぼん）きせいにほんじんおおい",
                "meaning_vi": "Vào dịp lễ Obon rất nhiều người Nhật về quê nhà.",
                "meaning_en": "Many Japanese people return to their hometown during Obon"
              }
            ],
            "lesson_number": 3
          },
          {
            "vocab": "帰宅",
            "furigana": "きたく",
            "meaning_vi": "về nhà",
            "meaning_en": "go home",
            "examples": [
              {
                "example_text": "毎日忙しくて帰宅が遅い",
                "furigana": "毎日（まいにち）いそがきたくおそい",
                "meaning_vi": "Hàng ngày tôi bận cho nên về nhà muộn.",
                "meaning_en": "I'm busy every day and I get home late"
              }
            ],
            "lesson_number": 3
          },
          {
            "vocab": "参加",
            "furigana": "さんか",
            "meaning_vi": "tham gia",
            "meaning_en": "join",
            "examples": [
              {
                "example_text": "ボランティア活動に参加する",
                "furigana": "ボランティア活動（かつどう）さんかする",
                "meaning_vi": "Tham gia các hoạt động tình nguyện.",
                "meaning_en": "Participate in volunteer activities"
              }
            ],
            "lesson_number": 3
          },
          {
            "vocab": "出席",
            "furigana": "しゅっせき",
            "meaning_vi": "tham gia, có mặt",
            "meaning_en": "participate, present",
            "examples": [
              {
                "example_text": "ミーテイングに出席する",
                "furigana": "ミーテイングに出席（しゅっせき）する",
                "meaning_vi": "Tham dự cuộc họp.",
                "meaning_en": "Attend meeting"
              }
            ],
            "lesson_number": 3
          },
          {
            "vocab": "欠席",
            "furigana": "けっせき",
            "meaning_vi": "vắng mặt",
            "meaning_en": "absent",
            "examples": [
              {
                "example_text": "授業を欠席する",
                "furigana": "授業（じゅぎょう）けっせきする",
                "meaning_vi": "Vắng mặt buổi học.",
                "meaning_en": "Absent from class"
              }
            ],
            "lesson_number": 3
          },
          {
            "vocab": "遅刻",
            "furigana": "ちこく",
            "meaning_vi": "đến muộn",
            "meaning_en": "arrive",
            "examples": [
              {
                "example_text": "寝坊して授業に遅刻する",
                "furigana": "寝坊（ねぼう）じゅぎょうちこくする",
                "meaning_vi": "Vì ngủ quên nên đến lớp trễ.",
                "meaning_en": "Oversleeping and being late for class"
              }
            ],
            "lesson_number": 3
          },
          {
            "vocab": "化粧",
            "furigana": "けしょう",
            "meaning_vi": "trang điểm",
            "meaning_en": "make up",
            "examples": [
              {
                "example_text": "「あなたは毎日、お化粧に何分ぐらいかけていますか」",
                "furigana": "「あなたは毎日（まいにち）けしょうなんぷんぐらいかけていますか」",
                "meaning_vi": "\"Bạn mất bao nhiêu phút để trang điểm mỗi ngày?\"",
                "meaning_en": "\"How many minutes do you wear makeup every day?\""
              }
            ],
            "lesson_number": 3
          },
          {
            "vocab": "計算",
            "furigana": "けいさん",
            "meaning_vi": "tính toán",
            "meaning_en": "calculate",
            "examples": [
              {
                "example_text": "私は計算が苦手だ",
                "furigana": "私（わたし）けいさんにがてだ",
                "meaning_vi": "Tôi không giỏi tính toán.",
                "meaning_en": "I'm not good at calculations"
              }
            ],
            "lesson_number": 3
          },
          {
            "vocab": "計画",
            "furigana": "けいかく",
            "meaning_vi": "kế hoạch",
            "meaning_en": "plan",
            "examples": [
              {
                "example_text": "来年の計画を立てる",
                "furigana": "来年（らいねん）けいかくたてる",
                "meaning_vi": "Lập kế hoạch cho năm tới.",
                "meaning_en": "Plan for next year"
              }
            ],
            "lesson_number": 3
          },
          {
            "vocab": "成功",
            "furigana": "せいこう",
            "meaning_vi": "thành công",
            "meaning_en": "success",
            "examples": [
              {
                "example_text": "実験に成功する",
                "furigana": "実験（じっけん）せいこうする",
                "meaning_vi": "Thí nghiệm thành công.",
                "meaning_en": "Successful experiment"
              }
            ],
            "lesson_number": 3
          },
          {
            "vocab": "失敗",
            "furigana": "しっぱい",
            "meaning_vi": "thất bại",
            "meaning_en": "failure",
            "examples": [
              {
                "example_text": "実験の失敗で、計画は中止になった",
                "furigana": "実験（じっけん）しっぱいけいかくちゅうしになった",
                "meaning_vi": "Vì thí nghiệm thất bại nên kế hoạch phải dừng lại.",
                "meaning_en": "The plan was cancelled due to a failure in the experiment"
              }
            ],
            "lesson_number": 3
          },
          {
            "vocab": "準備",
            "furigana": "じゅんび",
            "meaning_vi": "chuẩn bị",
            "meaning_en": "prepare",
            "examples": [
              {
                "example_text": "引っ越しの準備が終わった",
                "furigana": "引（ひ）こじゅんびおわった",
                "meaning_vi": "Việc chuẩn bị chuyển nhà đã xong.",
                "meaning_en": "The preparations for the move are finished"
              }
            ],
            "lesson_number": 3
          },
          {
            "vocab": "整理",
            "furigana": "せいり",
            "meaning_vi": "sắp xếp, vứt bỏ",
            "meaning_en": "Arrange, throw away",
            "examples": [
              {
                "example_text": "資料の整理",
                "furigana": "資料（しりょう）せいり",
                "meaning_vi": "Sắp xếp tài liệu.",
                "meaning_en": "Organizing the materials"
              }
            ],
            "lesson_number": 3
          },
          {
            "vocab": "注文",
            "furigana": "ちゅうもん",
            "meaning_vi": "đặt hàng, gọi đồ, yêu cầu",
            "meaning_en": "order, order, request",
            "examples": [
              {
                "example_text": "注文の品が届く",
                "furigana": "注文（ちゅうもん）しなとどく",
                "meaning_vi": "Sản phẩm đặt hàng sẽ được gửi đến.",
                "meaning_en": "Ordered items will be delivered"
              }
            ],
            "lesson_number": 3
          },
          {
            "vocab": "貯金",
            "furigana": "ちょきん",
            "meaning_vi": "tiền tiết kiệm, gửi tiết kiệm",
            "meaning_en": "Savings, savings deposit",
            "examples": [
              {
                "example_text": "貯金が増える",
                "furigana": "貯金（ちょきん）ふえる",
                "meaning_vi": "Tiền tiết kiệm gia tăng.",
                "meaning_en": "Your savings increase"
              }
            ],
            "lesson_number": 3
          },
          {
            "vocab": "徹夜",
            "furigana": "てつや",
            "meaning_vi": "thức suốt đêm, thức trắng đêm",
            "meaning_en": "stay up all night, stay up all night",
            "examples": [
              {
                "example_text": "徹夜が続く",
                "furigana": "徹夜（てつや）つづく",
                "meaning_vi": "Liên tục thức trắng đêm.",
                "meaning_en": "Staying up all night"
              }
            ],
            "lesson_number": 3
          },
          {
            "vocab": "引っ越し",
            "furigana": "ひっこし",
            "meaning_vi": "chuyển nhà",
            "meaning_en": "move",
            "examples": [
              {
                "example_text": "引っ越しを手伝う",
                "furigana": "引（ひ）こてつだう",
                "meaning_vi": "Giúp đỡ chuyển nhà.",
                "meaning_en": "Helping with the move"
              }
            ],
            "lesson_number": 3
          },
          {
            "vocab": "身長",
            "furigana": "しんちょう",
            "meaning_vi": "chiều cao cơ thể",
            "meaning_en": "Body height",
            "examples": [
              {
                "example_text": "身長を測る",
                "furigana": "身長（しんちょう）はかる",
                "meaning_vi": "Đo chiều cao cơ thể.",
                "meaning_en": "Measure your height"
              }
            ],
            "lesson_number": 3
          },
          {
            "vocab": "体重",
            "furigana": "たいじゅう",
            "meaning_vi": "cân nặng, trọng lượng",
            "meaning_en": "Weight, weight",
            "examples": [
              {
                "example_text": "体重を測る",
                "furigana": "体重（たいじゅう）はかる",
                "meaning_vi": "Đo cân nặng.",
                "meaning_en": "Weighing"
              }
            ],
            "lesson_number": 4
          },
          {
            "vocab": "けが",
            "furigana": "けが",
            "meaning_vi": "vết thương",
            "meaning_en": "wound",
            "examples": [
              {
                "example_text": "小さなけが",
                "furigana": "小（ちい）さなけが",
                "meaning_vi": "Vết thương nhỏ.",
                "meaning_en": "A small injury"
              }
            ],
            "lesson_number": 4
          },
          {
            "vocab": "会",
            "furigana": "かい",
            "meaning_vi": "bữa tiệc",
            "meaning_en": "party",
            "examples": [
              {
                "example_text": "忘年会を｛開く／する｝",
                "furigana": "忘年（ぼうねん）かいひらく／する｝",
                "meaning_vi": "Mở tiệc tất niên.",
                "meaning_en": "{Cancel/To End Year-end Party}"
              }
            ],
            "lesson_number": 4
          },
          {
            "vocab": "趣味",
            "furigana": "しゅみ",
            "meaning_vi": "sở thích, gu thẩm mỹ",
            "meaning_en": "Hobbies, aesthetics",
            "examples": [
              {
                "example_text": "趣味は読書です",
                "furigana": "趣味（しゅみ）どくしょです",
                "meaning_vi": "Sở thích của tôi là đọc sách.",
                "meaning_en": "My hobby is reading"
              }
            ],
            "lesson_number": 4
          },
          {
            "vocab": "興味",
            "furigana": "きょうみ",
            "meaning_vi": "hứng thú",
            "meaning_en": "interest",
            "examples": [
              {
                "example_text": "私は歴史に興味がある",
                "furigana": "私（わたし）れきしきょうみがある",
                "meaning_vi": "Tôi có hứng thú với lịch sử.",
                "meaning_en": "I'm interested in history"
              }
            ],
            "lesson_number": 4
          },
          {
            "vocab": "思い出",
            "furigana": "おもいで",
            "meaning_vi": "kỷ niệm",
            "meaning_en": "celebrate",
            "examples": [
              {
                "example_text": "子どものころの思い出",
                "furigana": "子（こ）おもで",
                "meaning_vi": "Kỷ niệm thời thơ ấu.",
                "meaning_en": "Childhood memories"
              }
            ],
            "lesson_number": 4
          },
          {
            "vocab": "冗談",
            "furigana": "じょうだん",
            "meaning_vi": "nói đùa",
            "meaning_en": "joking",
            "examples": [
              {
                "example_text": "冗談を言ったら、みんなが本気にした",
                "furigana": "冗談（じょうだん）いほんきにした",
                "meaning_vi": "Tôi nói đùa mà mọi người xem là thật.",
                "meaning_en": "When I was kidding, everyone got serious"
              }
            ],
            "lesson_number": 4
          },
          {
            "vocab": "目的",
            "furigana": "もくてき",
            "meaning_vi": "mục đích",
            "meaning_en": "purpose",
            "examples": [
              {
                "example_text": "日本に来た目的は大学への入学だ",
                "furigana": "日本（にほん）きもくてきだいがくにゅうがくだ",
                "meaning_vi": "Mục đích tôi đến Nhật Bản là vào đại học.",
                "meaning_en": "My purpose to come to Japan was to enroll in university."
              }
            ],
            "lesson_number": 4
          },
          {
            "vocab": "約束",
            "furigana": "やくそく",
            "meaning_vi": "hứa, hứa hẹn",
            "meaning_en": "promise, promise",
            "examples": [
              {
                "example_text": "彼と結婚の約束をした",
                "furigana": "彼（かれ）けっこんやくそくをした",
                "meaning_vi": "Tôi đã hẹn ước kết hôn cùng anh ấy.",
                "meaning_en": "I made a promise to marry him"
              }
            ],
            "lesson_number": 4
          },
          {
            "vocab": "おしゃべり",
            "furigana": "おしゃべり",
            "meaning_vi": "nói chuyện, tán gẫu",
            "meaning_en": "Talk, chat",
            "examples": [
              {
                "example_text": "授業中に隣の人とおしゃべりしていて、先生に怒られた",
                "furigana": "授業中（じゅぎょうちゅう）となりひとせんせいおこられた",
                "meaning_vi": "Vì tôi nói chuyện suốt với bạn bên cạnh trong giờ học nên làm giáo viên giận.",
                "meaning_en": "During class, I was chatting with the person next to me and my teacher got mad."
              }
            ],
            "lesson_number": 4
          },
          {
            "vocab": "遠慮",
            "furigana": "えんりょ",
            "meaning_vi": "khách khí, ngại ngần",
            "meaning_en": "Guest gas, hesitant",
            "examples": [
              {
                "example_text": "「遠慮しないで食べてください」",
                "furigana": "「遠慮（えんりょ）たべてください」",
                "meaning_vi": "\"Ăn đi, đừng khách khí.\"",
                "meaning_en": "\"Don't hesitate to eat.\""
              }
            ],
            "lesson_number": 4
          },
          {
            "vocab": "我慢",
            "furigana": "がまん",
            "meaning_vi": "chịu đựng, nhẫn nại",
            "meaning_en": "endure, patience",
            "examples": [
              {
                "example_text": "痛くてもがまんする",
                "furigana": "痛（いた）くてもがまんする",
                "meaning_vi": "Dù đau nhưng vẫn chịu đựng.",
                "meaning_en": "Even if it hurts, I'll struggle"
              }
            ],
            "lesson_number": 4
          },
          {
            "vocab": "迷惑",
            "furigana": "めいわく",
            "meaning_vi": "làm phiền, quấy rầy",
            "meaning_en": "disturbing, disturbing",
            "examples": [
              {
                "example_text": "人に迷惑をかけてはいけない",
                "furigana": "人（ひと）めいわくをかけてはいけない",
                "meaning_vi": "Không được làm phiền người khác.",
                "meaning_en": "Don't cause trouble to others"
              }
            ],
            "lesson_number": 4
          },
          {
            "vocab": "希望",
            "furigana": "きぼう",
            "meaning_vi": "hy vọng, kỳ vọng, khao khát",
            "meaning_en": "hope, expectations, longing",
            "examples": [
              {
                "example_text": "最後まで希望を捨ててはいけない",
                "furigana": "最後（さいご）きぼうすててはいけない",
                "meaning_vi": "Không được từ bỏ hy vọng khi chưa kết thúc.",
                "meaning_en": "Don't give up hope until the end"
              }
            ],
            "lesson_number": 4
          },
          {
            "vocab": "夢",
            "furigana": "ゆめ",
            "meaning_vi": "giấc mơ",
            "meaning_en": "dream",
            "examples": [
              {
                "example_text": "きのう、こわい夢を見た",
                "furigana": "きのう、こわい夢（ゆめ）みた",
                "meaning_vi": "Hôm qua, tôi đã gặp ác mộng.",
                "meaning_en": "Yesterday, I had a scary dream"
              }
            ],
            "lesson_number": 5
          },
          {
            "vocab": "賛成",
            "furigana": "さんせい",
            "meaning_vi": "tán thành, đồng ý",
            "meaning_en": "agree, agree",
            "examples": [
              {
                "example_text": "「賛成の人は手を挙げてください」",
                "furigana": "「賛成（さんせい）ひとてあげてください」",
                "meaning_vi": "\"Ai tán thành thì giơ tay!\"",
                "meaning_en": "\"If you agree, please raise your hand.\""
              }
            ],
            "lesson_number": 5
          },
          {
            "vocab": "反対",
            "furigana": "はんたい",
            "meaning_vi": "đối ngược, phản đối",
            "meaning_en": "opposite, opposition",
            "examples": [
              {
                "example_text": "プラスの反対はマイナスだ",
                "furigana": "プラスの反対（はんたい）はマイナスだ",
                "meaning_vi": "Ngược lại với cộng là trừ.",
                "meaning_en": "The positive opposition is negative"
              }
            ],
            "lesson_number": 5
          },
          {
            "vocab": "想像",
            "furigana": "そうぞう",
            "meaning_vi": "tưởng tượng",
            "meaning_en": "imagine",
            "examples": [
              {
                "example_text": "想像と現実は違う",
                "furigana": "想像（そうぞう）げんじつちがう",
                "meaning_vi": "Tưởng tượng và thực tế khác nhau.",
                "meaning_en": "Imagination and reality are different"
              }
            ],
            "lesson_number": 5
          },
          {
            "vocab": "努力",
            "furigana": "どりょく",
            "meaning_vi": "nỗ lực, sự cố gắng",
            "meaning_en": "Efforts, efforts",
            "examples": [
              {
                "example_text": "一生懸命、努力をする",
                "furigana": "一生懸命（いっしょうけんめい）どりょくをする",
                "meaning_vi": "Cố gắng hết sức.",
                "meaning_en": "I'll try hard"
              }
            ],
            "lesson_number": 5
          },
          {
            "vocab": "太陽",
            "furigana": "たいよう",
            "meaning_vi": "mặt trời, ánh mặt trời",
            "meaning_en": "Sun, sunlight",
            "examples": [
              {
                "example_text": "太陽が昇って、暖かくなった",
                "furigana": "太陽（たいよう）のぼあたたかくなった",
                "meaning_vi": "Mặt trời lên, thời tiết trở nên ấm áp.",
                "meaning_en": "The sun rose and it warmed"
              }
            ],
            "lesson_number": 6
          },
          {
            "vocab": "地球",
            "furigana": "ちきゅう",
            "meaning_vi": "trái đất, địa cầu",
            "meaning_en": "Earth, Earth",
            "examples": [
              {
                "example_text": "地球の環境が悪化している",
                "furigana": "地球（ちきゅう）かんきょうあっかしている",
                "meaning_vi": "Môi trường của trái đất ngày càng xấu đi.",
                "meaning_en": "The global environment is deteriorating"
              }
            ],
            "lesson_number": 6
          },
          {
            "vocab": "温度",
            "furigana": "おんど",
            "meaning_vi": "nhiệt độ",
            "meaning_en": "temperature",
            "examples": [
              {
                "example_text": "温度を測る",
                "furigana": "温度（おんど）はかる",
                "meaning_vi": "Đo nhiệt độ.",
                "meaning_en": "Measure the temperature"
              }
            ],
            "lesson_number": 6
          },
          {
            "vocab": "湿度",
            "furigana": "しつど",
            "meaning_vi": "độ ẩm",
            "meaning_en": "moisture",
            "examples": [
              {
                "example_text": "今年の夏は特に湿度が高い",
                "furigana": "今年（ことし）なつとくしつどたかい",
                "meaning_vi": "Hè năm nay độ ẩm cao một cách bất thường.",
                "meaning_en": "This summer is especially humid"
              }
            ],
            "lesson_number": 6
          },
          {
            "vocab": "湿気",
            "furigana": "しっけ",
            "meaning_vi": "hơi ẩm, sự ẩm ướt",
            "meaning_en": "moisture, moisture",
            "examples": [
              {
                "example_text": "日本の夏は湿気が多い",
                "furigana": "日本（にほん）なつしっけおおい",
                "meaning_vi": "Mùa hè ở Nhật Bản rất ẩm ướt.",
                "meaning_en": "Summer in Japan is very humid"
              }
            ],
            "lesson_number": 6
          },
          {
            "vocab": "梅雨",
            "furigana": "つゆ",
            "meaning_vi": "mùa mưa",
            "meaning_en": "Rainy season",
            "examples": [
              {
                "example_text": "６月から７月は梅雨の時期だ",
                "furigana": "６月（がつ）がつつゆじきだ",
                "meaning_vi": "Từ tháng 6 đến tháng 7 là mùa mưa.",
                "meaning_en": "June to July is the rainy season."
              }
            ],
            "lesson_number": 6
          },
          {
            "vocab": "かび",
            "furigana": "かび",
            "meaning_vi": "nấm mốc",
            "meaning_en": "mold",
            "examples": [
              {
                "example_text": "梅雨の時期はかびがはえやすい",
                "furigana": "梅雨（つゆ）じきはかびがはえやすい",
                "meaning_vi": "Mùa mưa nấm mốc dễ phát triển.",
                "meaning_en": "Mold is easy to grow during the rainy season"
              }
            ],
            "lesson_number": 6
          },
          {
            "vocab": "暖房",
            "furigana": "だんぼう",
            "meaning_vi": "điều hòa chế độ làm ấm, máy sưởi ấm",
            "meaning_en": "Air conditioning mode, heating",
            "examples": [
              {
                "example_text": "寒いので暖房をつける",
                "furigana": "寒（さむ）だんぼうをつける",
                "meaning_vi": "Bởi vì trời lạnh nên bật máy sưởi ấm.",
                "meaning_en": "It's cold so turn on the heater"
              }
            ],
            "lesson_number": 6
          },
          {
            "vocab": "皮",
            "furigana": "かわ",
            "meaning_vi": "da, vỏ",
            "meaning_en": "skin, shell",
            "examples": [
              {
                "example_text": "｛くだもの／やさい／どうぶつ　…｝の皮",
                "furigana": "｛くだもの／やさい／どうぶつ　…｝の皮（かわ）",
                "meaning_vi": "Vỏ, da {Trái cây / rau củ / động vật ...}.",
                "meaning_en": "{Fruit/Earthquake...} skin"
              }
            ],
            "lesson_number": 6
          },
          {
            "vocab": "缶",
            "furigana": "かん",
            "meaning_vi": "lon",
            "meaning_en": "lon",
            "examples": [
              {
                "example_text": "おかしをカンに入れて保存する",
                "furigana": "おかしをカンに入（い）ほぞんする",
                "meaning_vi": "Bảo quản kẹo bằng cách bỏ vào trong hộp kim loại.",
                "meaning_en": "Put the odd beans in your can and store them"
              }
            ],
            "lesson_number": 6
          },
          {
            "vocab": "画面",
            "furigana": "がめん",
            "meaning_vi": "màn hình, màn ảnh",
            "meaning_en": "Screen, screen",
            "examples": [
              {
                "example_text": "パソコンの画面をずっと見ていると、目が疲れる",
                "furigana": "パソコンの画面（がめん）みめつかれる",
                "meaning_vi": "Cứ nhìn suốt vào màn hình máy tính thì sẽ mỏi mắt.",
                "meaning_en": "My eyes get tired when I keep looking at my computer screen"
              }
            ],
            "lesson_number": 6
          },
          {
            "vocab": "番組",
            "furigana": "ばんぐみ",
            "meaning_vi": "chương trình ti vi, kênh",
            "meaning_en": "TV program, channel",
            "examples": [
              {
                "example_text": "テレビの番組を見る",
                "furigana": "テレビの番組（ばんぐみ）みる",
                "meaning_vi": "Xem chương trình Tivi.",
                "meaning_en": "Watch TV shows"
              }
            ],
            "lesson_number": 6
          },
          {
            "vocab": "記事",
            "furigana": "きじ",
            "meaning_vi": "bài viết, phóng sự",
            "meaning_en": "Posts, reportage",
            "examples": [
              {
                "example_text": "この記事のよると、日本に住む外国人が増えているそうだ",
                "furigana": "この記事（きじ）にほんすがいこくじんふえているそうだ",
                "meaning_vi": "Theo bài viết này, nghe nói người nước ngoài sống ở Nhật Bản đang gia tăng.",
                "meaning_en": "According to this article, the number of foreigners living in Japan is increasing."
              }
            ],
            "lesson_number": 6
          },
          {
            "vocab": "近所",
            "furigana": "きんじょ",
            "meaning_vi": "hàng xóm, vùng lân cận",
            "meaning_en": "Neighbors, surrounding areas",
            "examples": [
              {
                "example_text": "近所の人とは仲良くしてほうがいい",
                "furigana": "近所（きんじょ）ひとなかよくしてほうがいい",
                "meaning_vi": "Nên tạo mối quan hệ tốt với hàng xóm.",
                "meaning_en": "You should get along well with your neighbors"
              }
            ],
            "lesson_number": 6
          },
          {
            "vocab": "警察",
            "furigana": "けいさつ",
            "meaning_vi": "cảnh sát, ngành cảnh sát",
            "meaning_en": "Police, police industry",
            "examples": [
              {
                "example_text": "自転車を盗まれたので、警察に届けた",
                "furigana": "自転車（じてんしゃ）ぬすけいさつとどけた",
                "meaning_vi": "Vì bị lấy mất xe đạp nên tôi đến trình bày cảnh sát.",
                "meaning_en": "My bike was stolen and I sent it to the police."
              }
            ],
            "lesson_number": 6
          },
          {
            "vocab": "犯人",
            "furigana": "はんにん",
            "meaning_vi": "tội phạm, thủ phạm",
            "meaning_en": "Crime, culprit",
            "examples": [
              {
                "example_text": "事件の犯人",
                "furigana": "事件（じけん）はんにん",
                "meaning_vi": "Thủ phạm của vụ việc.",
                "meaning_en": "The perpetrator of the incident"
              }
            ],
            "lesson_number": 6
          },
          {
            "vocab": "小銭",
            "furigana": "こぜに",
            "meaning_vi": "tiền lẻ, đồng lẻ",
            "meaning_en": "change, retail",
            "examples": [
              {
                "example_text": "バスに乗ってから小銭がないことに気がつき、とても困った",
                "furigana": "バスに乗（の）こぜにきこまった",
                "meaning_vi": "Sau khi lên xe bus tôi mới nhận ra là mình không có tiền lẻ, thật sự éo le.",
                "meaning_en": "After getting on the bus, I realized that I had no change, which was very troublesome."
              }
            ],
            "lesson_number": 6
          },
          {
            "vocab": "ごちそう",
            "furigana": "ごちそう",
            "meaning_vi": "chiêu đãi, khao",
            "meaning_en": "entertainment, longing",
            "examples": [
              {
                "example_text": "家族みんなでごちそうを食べて、祖父の誕生日を祝った",
                "furigana": "家族（かぞく）たそふたんじょうびいわった",
                "meaning_vi": "Mọi người trong gia đình cùng ăn tiệc và chúc mừng ngày sinh của ông.",
                "meaning_en": "The whole family celebrated their grandfather's birthday."
              }
            ],
            "lesson_number": 7
          },
          {
            "vocab": "作者",
            "furigana": "さくしゃ",
            "meaning_vi": "tác giả",
            "meaning_en": "author",
            "examples": [
              {
                "example_text": "｛小説／詩／絵／彫刻　…｝の作者",
                "furigana": "｛小説（しょうせつ）しえちょうこくさくしゃ",
                "meaning_vi": "Tác giả của {Tiểu thuyết / Thơ / Tranh / Điêu khắc ...}",
                "meaning_en": "Author of {Novels/Poetry/Painting/Sculpture...}"
              }
            ],
            "lesson_number": 7
          },
          {
            "vocab": "作品",
            "furigana": "さくひん",
            "meaning_vi": "tác phẩm",
            "meaning_en": "work",
            "examples": [
              {
                "example_text": "学生の作品をロビーに展示する",
                "furigana": "学生（がくせい）さくひんてんじする",
                "meaning_vi": "Trưng bày tác phẩm của sinh viên ở sảnh.",
                "meaning_en": "Student works will be displayed in the lobby"
              }
            ],
            "lesson_number": 7
          },
          {
            "vocab": "制服",
            "furigana": "せいふく",
            "meaning_vi": "đồng phục",
            "meaning_en": "uniform",
            "examples": [
              {
                "example_text": "日本の中学校には制服のある学校が多い",
                "furigana": "日本（にほん）ちゅうがっこうせいふくがっこうおおい",
                "meaning_vi": "Nhiều trường trung học ở Nhật Bản có đồng phục.",
                "meaning_en": "Many junior high schools in Japan have uniforms."
              }
            ],
            "lesson_number": 7
          },
          {
            "vocab": "洗剤",
            "furigana": "せんざい",
            "meaning_vi": "chất tẩy rửa",
            "meaning_en": "detergent",
            "examples": [
              {
                "example_text": "洗剤で食器を洗う",
                "furigana": "洗剤（せんざい）しょっきあらう",
                "meaning_vi": "Rửa chén bát bằng nước rửa chén.",
                "meaning_en": "Wash dishes with detergent"
              }
            ],
            "lesson_number": 7
          },
          {
            "vocab": "底",
            "furigana": "そこ",
            "meaning_vi": "đế, đáy",
            "meaning_en": "base, bottom",
            "examples": [
              {
                "example_text": "くつの底に穴があく",
                "furigana": "くつの底（そこ）あながあく",
                "meaning_vi": "Thủng lỗ ở đế giày.",
                "meaning_en": "There is a hole in the bottom of the shoe"
              }
            ],
            "lesson_number": 7
          },
          {
            "vocab": "地下",
            "furigana": "ちか",
            "meaning_vi": "ngầm, dưới mặt đất",
            "meaning_en": "underground",
            "examples": [
              {
                "example_text": "大都市は地下の開発が進んでいる",
                "furigana": "大都市（だいとし）ちかかいはつすすんでいる",
                "meaning_vi": "Đô thị lớn đang phát triển tầng hầm dưới mặt đất.",
                "meaning_en": "Underground development in large cities"
              }
            ],
            "lesson_number": 7
          },
          {
            "vocab": "寺",
            "furigana": "てら",
            "meaning_vi": "chùa",
            "meaning_en": "pagoda",
            "examples": [
              {
                "example_text": "寺に｛まいる／おまいりする｝",
                "furigana": "寺（てら）に｛まいる／おまいりする｝",
                "meaning_vi": "Đi thăm đền thờ.",
                "meaning_en": "To the temple {I'll come/I'll ​​come}"
              }
            ],
            "lesson_number": 7
          },
          {
            "vocab": "道路",
            "furigana": "どうろ",
            "meaning_vi": "đại lộ",
            "meaning_en": "avenue",
            "examples": [
              {
                "example_text": "道路が込む",
                "furigana": "道路（どうろ）こむ",
                "meaning_vi": "Đường phố đông đúc.",
                "meaning_en": "The road is in"
              }
            ],
            "lesson_number": 7
          },
          {
            "vocab": "坂",
            "furigana": "さか",
            "meaning_vi": "dốc",
            "meaning_en": "slope",
            "examples": [
              {
                "example_text": "坂を上る",
                "furigana": "坂（さか）のぼる",
                "meaning_vi": "Leo dốc.",
                "meaning_en": "Go up the hill"
              }
            ],
            "lesson_number": 7
          },
          {
            "vocab": "煙",
            "furigana": "けむり",
            "meaning_vi": "khói",
            "meaning_en": "smoke",
            "examples": [
              {
                "example_text": "「火事のときは、煙に注意して逃げてください」",
                "furigana": "「火事（かじ）けむりちゅういにげてください」",
                "meaning_vi": "\"Khi có hỏa hoạn, hãy cẩn thận với khói và trốn thoát.\"",
                "meaning_en": "\"In the event of a fire, be careful of smoke and run away.\""
              }
            ],
            "lesson_number": 7
          },
          {
            "vocab": "灰",
            "furigana": "はい",
            "meaning_vi": "Tro",
            "meaning_en": "Tro",
            "examples": [
              {
                "example_text": "たばこの灰",
                "furigana": "たばこの灰（はい）",
                "meaning_vi": "Tàn thuốc lá.",
                "meaning_en": "Tobacco ashes"
              }
            ],
            "lesson_number": 7
          },
          {
            "vocab": "判",
            "furigana": "はん",
            "meaning_vi": "Phán quyết",
            "meaning_en": "Decision",
            "examples": [
              {
                "example_text": "書類に判を押す",
                "furigana": "書類（しょるい）はんおす",
                "meaning_vi": "Đóng dấu vào tài liệu.",
                "meaning_en": "Press the document"
              }
            ],
            "lesson_number": 7
          },
          {
            "vocab": "名刺",
            "furigana": "めいし",
            "meaning_vi": "danh thiếp",
            "meaning_en": "business card",
            "examples": [
              {
                "example_text": "名刺を交換する",
                "furigana": "名刺（めいし）こうかんする",
                "meaning_vi": "Trao đổi danh thiếp.",
                "meaning_en": "Exchange business cards"
              }
            ],
            "lesson_number": 7
          },
          {
            "vocab": "免許",
            "furigana": "めんきょ",
            "meaning_vi": "Giấy phép lái xe",
            "meaning_en": "Driving license",
            "examples": [
              {
                "example_text": "レストランを開くには、調理師の免許が必要だ",
                "furigana": "レストランを開（ひら）ちょうりしめんきょひつようだ",
                "meaning_vi": "Để mở nhà hàng cần có chứng chỉ đầu bếp.",
                "meaning_en": "You need a chef's license to open a restaurant."
              }
            ],
            "lesson_number": 7
          },
          {
            "vocab": "多く",
            "furigana": "おおく",
            "meaning_vi": "Nhiều",
            "meaning_en": "Much",
            "examples": [
              {
                "example_text": "オリンピックには｛○多くの／✕多いの／✕多い｝国が参加した",
                "furigana": "オリンピックには｛○多（おお）おおおおくにさんかした",
                "meaning_vi": "Nhiều quốc gia đã tham gia Thế vận hội.",
                "meaning_en": "The countries participated in the Olympics {○Many/✕Load/✕Load}"
              }
            ],
            "lesson_number": 7
          },
          {
            "vocab": "前半",
            "furigana": "ぜんはん",
            "meaning_vi": "Nửa đầu",
            "meaning_en": "In the first half",
            "examples": [
              {
                "example_text": "映画の前半はたいくつだったが、後半はおもしろかった",
                "furigana": "映画（えいが）ぜんはんこうはんはおもしろかった",
                "meaning_vi": "Phần đầu phim chán lắm nhưng phần sau thì thú vị.",
                "meaning_en": "The first half of the movie was pretty cool, but the second half was fun."
              }
            ],
            "lesson_number": 7
          },
          {
            "vocab": "後半",
            "furigana": "こうはん",
            "meaning_vi": "Nửa thứ hai",
            "meaning_en": "Second half",
            "examples": [
              {
                "example_text": "映画の前半はたいくつだったが、後半はおもしろかった",
                "furigana": "映画（えいが）ぜんはんこうはんはおもしろかった",
                "meaning_vi": "Phần đầu phim chán lắm nhưng phần sau thì thú vị.",
                "meaning_en": "The first half of the movie was pretty cool, but the second half was fun."
              }
            ],
            "lesson_number": 7
          },
          {
            "vocab": "最高",
            "furigana": "さいこう",
            "meaning_vi": "Cao nhất",
            "meaning_en": "Highest",
            "examples": [
              {
                "example_text": "最高気温",
                "furigana": "最高（さいこう）きおん",
                "meaning_vi": "Nhiệt độ cao nhất.",
                "meaning_en": "Highest temperature"
              }
            ],
            "lesson_number": 8
          },
          {
            "vocab": "最低",
            "furigana": "さいてい",
            "meaning_vi": "thấp nhất",
            "meaning_en": "lowest",
            "examples": [
              {
                "example_text": "最低気温",
                "furigana": "最低（さいてい）きおん",
                "meaning_vi": "Nhiệt độ thấp nhất .",
                "meaning_en": "Lowest temperature"
              }
            ],
            "lesson_number": 8
          },
          {
            "vocab": "最初",
            "furigana": "さいしょ",
            "meaning_vi": "Đầu tiên",
            "meaning_en": "Firstly",
            "examples": [
              {
                "example_text": "最初にひらがなを、次にカタカナを勉強した",
                "furigana": "最初（さいしょ）つぎべんきょうした",
                "meaning_vi": "Đầu tiên tôi học Hiragana và sau đó là Katakana.",
                "meaning_en": "First I studied hiragana, then katakana"
              }
            ],
            "lesson_number": 8
          },
          {
            "vocab": "最後",
            "furigana": "さいご",
            "meaning_vi": "cuối cùng",
            "meaning_en": "Final",
            "examples": [
              {
                "example_text": "「あとから来た人は列の最後に並んでください」",
                "furigana": "「あとから来（き）ひとれつさいごならんでください」",
                "meaning_vi": "\"Những người đến sau hãy đứng phía cuối hàng.\"",
                "meaning_en": "\"If you come later, please line up at the end of the line.\""
              }
            ],
            "lesson_number": 8
          },
          {
            "vocab": "自動",
            "furigana": "じどう",
            "meaning_vi": "tự động",
            "meaning_en": "automatic",
            "examples": [
              {
                "example_text": "このドアは自動だから、手で開けなくてもいい",
                "furigana": "このドアは自動（じどう）てあけなくてもいい",
                "meaning_vi": "Cửa này là tự động nên không cần phải mở bằng tay.",
                "meaning_en": "This door is automatic so you don't have to open it by hand."
              }
            ],
            "lesson_number": 8
          },
          {
            "vocab": "種類",
            "furigana": "しゅるい",
            "meaning_vi": "loại",
            "meaning_en": "type",
            "examples": [
              {
                "example_text": "公園にはいろいろな種類の花がある",
                "furigana": "公園（こうえん）しゅるいはながある",
                "meaning_vi": "Trong công viên có rất nhiều loại hoa.",
                "meaning_en": "There are many different kinds of flowers in the park"
              }
            ],
            "lesson_number": 8
          },
          {
            "vocab": "性格",
            "furigana": "せいかく",
            "meaning_vi": "tính cách",
            "meaning_en": "character",
            "examples": [
              {
                "example_text": "あの人は性格がいいので、みんなに好かれている",
                "furigana": "あの人（ひと）せいかくすかれている",
                "meaning_vi": "Người ấy có tính cách tốt nên được mọi người yêu quý.",
                "meaning_en": "That person has a good personality and is liked by everyone."
              }
            ],
            "lesson_number": 8
          },
          {
            "vocab": "性質",
            "furigana": "せいしつ",
            "meaning_vi": "thiên nhiên",
            "meaning_en": "nature",
            "examples": [
              {
                "example_text": "この布は燃えにくい性質を持っている",
                "furigana": "この布（ぬの）もせいしつもっている",
                "meaning_vi": "Vải này có tính chất chống cháy.",
                "meaning_en": "This fabric is resistant to burning."
              }
            ],
            "lesson_number": 8
          },
          {
            "vocab": "順番",
            "furigana": "じゅんばん",
            "meaning_vi": "đặt hàng",
            "meaning_en": "order",
            "examples": [
              {
                "example_text": "発表の順番を決める",
                "furigana": "発表（はっぴょう）じゅんばんきめる",
                "meaning_vi": "Quyết định thứ tự thuyết trình.",
                "meaning_en": "Decide the order of presentations"
              }
            ],
            "lesson_number": 8
          },
          {
            "vocab": "番",
            "furigana": "ばん",
            "meaning_vi": "Con số",
            "meaning_en": "Number",
            "examples": [
              {
                "example_text": "次は私の番だ",
                "furigana": "次（つぎ）わたしばんだ",
                "meaning_vi": "Tiếp theo đến lượt của tôi.",
                "meaning_en": "Next is my turn"
              }
            ],
            "lesson_number": 8
          },
          {
            "vocab": "方法",
            "furigana": "ほうほう",
            "meaning_vi": "phương pháp",
            "meaning_en": "method",
            "examples": [
              {
                "example_text": "いい方法を探す",
                "furigana": "いい方法（ほうほう）さがす",
                "meaning_vi": "Tìm kiếm phương pháp hiệu quả.",
                "meaning_en": "Find a good way"
              }
            ],
            "lesson_number": 8
          },
          {
            "vocab": "製品",
            "furigana": "せいひん",
            "meaning_vi": "sản phẩm",
            "meaning_en": "product",
            "examples": [
              {
                "example_text": "完成した製品を検査する",
                "furigana": "完成（かんせい）せいひんけんさする",
                "meaning_vi": "Kiểm tra sản phẩm đã hoàn thành.",
                "meaning_en": "Inspect the finished product"
              }
            ],
            "lesson_number": 8
          },
          {
            "vocab": "値上がり",
            "furigana": "ねあがり",
            "meaning_vi": "Tăng giá",
            "meaning_en": "Rise",
            "examples": [
              {
                "example_text": "食品の値上がり",
                "furigana": "食品（しょくひん）ねあがり",
                "meaning_vi": "Thực phẩm tăng giá.",
                "meaning_en": "Food prices rise"
              }
            ],
            "lesson_number": 8
          },
          {
            "vocab": "生",
            "furigana": "せい",
            "meaning_vi": "sinh",
            "meaning_en": "born",
            "examples": [
              {
                "example_text": "生の魚",
                "furigana": "生（なま）さかな",
                "meaning_vi": "Cá tươi.",
                "meaning_en": "Raw fish"
              }
            ],
            "lesson_number": 8
          },
          {
            "vocab": "渇く",
            "furigana": "かわく",
            "meaning_vi": "Khát",
            "meaning_en": "Thirsty",
            "examples": [
              {
                "example_text": "のどがかわいた",
                "furigana": "のどがかわいた",
                "meaning_vi": "Khát nước.",
                "meaning_en": "My throat is blurry"
              }
            ],
            "lesson_number": 9
          },
          {
            "vocab": "嗅ぐ",
            "furigana": "かぐ",
            "meaning_vi": "mùi",
            "meaning_en": "smell",
            "examples": [
              {
                "example_text": "においをかぐ",
                "furigana": "においをかぐ",
                "meaning_vi": "Ngửi thấy mùi.",
                "meaning_en": "Smell the smell"
              }
            ],
            "lesson_number": 9
          },
          {
            "vocab": "叩く",
            "furigana": "たたく",
            "meaning_vi": "Đánh nó",
            "meaning_en": "Hit it",
            "examples": [
              {
                "example_text": "子どものおしりをたたく",
                "furigana": "子（こ）どものおしりをたたく",
                "meaning_vi": "Đánh vào mông đứa trẻ.",
                "meaning_en": "Thrashing a child's butt"
              }
            ],
            "lesson_number": 9
          },
          {
            "vocab": "殴る",
            "furigana": "なぐる",
            "meaning_vi": "đánh",
            "meaning_en": "fight",
            "examples": [
              {
                "example_text": "教師が生徒をなぐって、問題になっている",
                "furigana": "教師（きょうし）せいともんだいになっている",
                "meaning_vi": "Đang có vấn đề bởi giáo viên đấm học sinh.",
                "meaning_en": "Teachers are blaming students and it's becoming a problem"
              }
            ],
            "lesson_number": 9
          },
          {
            "vocab": "ける",
            "furigana": "ける",
            "meaning_vi": "Ốm",
            "meaning_en": "Sick",
            "examples": [
              {
                "example_text": "ボールをける",
                "furigana": "ボールをける",
                "meaning_vi": "Đá bóng.",
                "meaning_en": "Let the ball go"
              }
            ],
            "lesson_number": 9
          },
          {
            "vocab": "抱く",
            "furigana": "だく",
            "meaning_vi": "Tôi sẽ nắm lấy",
            "meaning_en": "I will take",
            "examples": [
              {
                "example_text": "子どもを両手でしっかりと抱く",
                "furigana": "子（こ）りょうてだく",
                "meaning_vi": "Ẫm đứa bé bằng hai tay một cách cẩn thận.",
                "meaning_en": "Hold the child firmly with both hands"
              }
            ],
            "lesson_number": 9
          },
          {
            "vocab": "倒れる",
            "furigana": "たおれる",
            "meaning_vi": "Rơi xuống",
            "meaning_en": "Falling",
            "examples": [
              {
                "example_text": "台風で木が倒れた",
                "furigana": "台風（たいふう）きたおれた",
                "meaning_vi": "Do bão nên cây đổ.",
                "meaning_en": "A typhoon knocked down the tree"
              }
            ],
            "lesson_number": 9
          },
          {
            "vocab": "倒す",
            "furigana": "たおす",
            "meaning_vi": "hạ gục",
            "meaning_en": "defeat",
            "examples": [
              {
                "example_text": "花びんを倒して割ってしまった",
                "furigana": "花（はな）たおわってしまった",
                "meaning_vi": "Tôi làm đổ bình hoa và nó vỡ mất rồi.",
                "meaning_en": "I knocked down the petals and broke them"
              }
            ],
            "lesson_number": 9
          },
          {
            "vocab": "起きる",
            "furigana": "おきる",
            "meaning_vi": "Awaken/bắt giữ",
            "meaning_en": "Awaken/Arrest",
            "examples": [
              {
                "example_text": "きょうは８時に起きた",
                "furigana": "きょうは８時（じ）おきた",
                "meaning_vi": "Hôm nay tôi thức dậy lúc 8 giờ.",
                "meaning_en": "I woke up at 8am today"
              }
            ],
            "lesson_number": 9
          },
          {
            "vocab": "起こす",
            "furigana": "おこす",
            "meaning_vi": "Thức dậy",
            "meaning_en": "Wake up",
            "examples": [
              {
                "example_text": "うちの子は朝起こしてもなかなか起きない",
                "furigana": "うちの子（こ）あさおおきない",
                "meaning_vi": "Bọn trẻ nhà tôi, sáng có đánh thức chúng thì mãi chúng cũng không dậy cho ngay.",
                "meaning_en": "My child doesn't wake up in the morning"
              }
            ],
            "lesson_number": 9
          },
          {
            "vocab": "尋ねる",
            "furigana": "たずねる",
            "meaning_vi": "hỏi",
            "meaning_en": "ask",
            "examples": [
              {
                "example_text": "交番で警官に市役所までの道をたずねた",
                "furigana": "交番（こうばん）けいかんしやくしょみちをたずねた",
                "meaning_vi": "Hỏi đường đến tòa thị chính với viên cảnh sát tại bốt cảnh sát.",
                "meaning_en": "I asked the police officers on the road to city hall at the police box."
              }
            ],
            "lesson_number": 9
          },
          {
            "vocab": "呼ぶ",
            "furigana": "よぶ",
            "meaning_vi": "Gọi",
            "meaning_en": "Call",
            "examples": [
              {
                "example_text": "「名前を呼ばれたら返事をしてください」",
                "furigana": "「名前（なまえ）よへんじをしてください」",
                "meaning_vi": "\"Vui lòng trả lời khi được gọi tên\"",
                "meaning_en": "\"If you call me your name, please reply.\""
              }
            ],
            "lesson_number": 9
          },
          {
            "vocab": "叫ぶ",
            "furigana": "さけぶ",
            "meaning_vi": "hét lên",
            "meaning_en": "scream",
            "examples": [
              {
                "example_text": "大声で叫んだが、　相手は気づかずに行ってしまった",
                "furigana": "大（おお）こえさけあいてきいってしまった",
                "meaning_vi": "Dù đã gào thét lớn tiếng nhưng đối phương vẫn đi mất mà không hề biết gì.",
                "meaning_en": "I cried out loud, but the other person left without realizing it."
              }
            ],
            "lesson_number": 9
          },
          {
            "vocab": "黙る",
            "furigana": "だまる",
            "meaning_vi": "Giữ im lặng",
            "meaning_en": "Keep silent",
            "examples": [
              {
                "example_text": "先生が質問したが、だれも答えないでだまっている",
                "furigana": "先生（せんせい）しつもんこたえないでだまっている",
                "meaning_vi": "Thầy giáo đặt câu hỏi nhưng tất cả đều im lặng không trả lời.",
                "meaning_en": "The teacher asked, but no one answered and fooled him."
              }
            ],
            "lesson_number": 9
          },
          {
            "vocab": "飼う",
            "furigana": "かう",
            "meaning_vi": "giữ",
            "meaning_en": "hold",
            "examples": [
              {
                "example_text": "何かペットを飼いたいと思っている",
                "furigana": "何（なに）かおもっている",
                "meaning_vi": "Tôi muốn nuôi một con vật gì nào đó.",
                "meaning_en": "I want to have some pet"
              }
            ],
            "lesson_number": 9
          },
          {
            "vocab": "数える",
            "furigana": "かぞえる",
            "meaning_vi": "đếm",
            "meaning_en": "count",
            "examples": [
              {
                "example_text": "数を数える",
                "furigana": "数（かず）かぞえる",
                "meaning_vi": "Đếm số.",
                "meaning_en": "Count the number"
              }
            ],
            "lesson_number": 9
          },
          {
            "vocab": "乾く",
            "furigana": "かわく",
            "meaning_vi": "khô",
            "meaning_en": "dried",
            "examples": [
              {
                "example_text": "風が強かったので、外に干した洗たく物はすぐに乾いた",
                "furigana": "風（かぜ）つよそとほせんものかわいた",
                "meaning_vi": "Gió mạnh nên đồ phơi ở ngoài nhanh khô.",
                "meaning_en": "The wind was strong, so the washes that were dried outside quickly dried."
              }
            ],
            "lesson_number": 10
          },
          {
            "vocab": "乾かす",
            "furigana": "かわかす",
            "meaning_vi": "khô",
            "meaning_en": "dried",
            "examples": [
              {
                "example_text": "ドライヤーでぬれた髪を乾かした",
                "furigana": "ドライヤーでぬれた髪（かみ）かわかした",
                "meaning_vi": "Tôi sấy khô tóc ướt bằng máy sấy.",
                "meaning_en": "Drying wet hair with a hair dryer"
              }
            ],
            "lesson_number": 10
          },
          {
            "vocab": "畳む",
            "furigana": "たたむ",
            "meaning_vi": "nếp gấp",
            "meaning_en": "fold",
            "examples": [
              {
                "example_text": "洗たく物をたたむ",
                "furigana": "洗（せん）ものをたたむ",
                "meaning_vi": "Gấp đồ đã giặt.",
                "meaning_en": "Fold what you want to wash"
              }
            ],
            "lesson_number": 10
          },
          {
            "vocab": "誘う",
            "furigana": "さそう",
            "meaning_vi": "Mời tôi",
            "meaning_en": "Invite me",
            "examples": [
              {
                "example_text": "友だちを誘って映画を見に行った",
                "furigana": "友（とも）さそえいがみいった",
                "meaning_vi": "Tôi đã rủ bạn đi xem phim.",
                "meaning_en": "I invited a friend to go and watch a movie."
              }
            ],
            "lesson_number": 10
          },
          {
            "vocab": "おごる",
            "furigana": "おごる",
            "meaning_vi": "Tôi sẽ đối xử với bạn",
            "meaning_en": "I will treat you",
            "examples": [
              {
                "example_text": "きのうは後輩に焼き肉をおごった",
                "furigana": "きのうは後輩（こうはい）やにくをおごった",
                "meaning_vi": "Hôm qua tôi đã khao đàn em một bữa thịt nướng.",
                "meaning_en": "Yesterday I sold a yakiniku to my junior."
              }
            ],
            "lesson_number": 10
          },
          {
            "vocab": "預かる",
            "furigana": "あずかる",
            "meaning_vi": "chăm sóc",
            "meaning_en": "take care of",
            "examples": [
              {
                "example_text": "旅行に行く友だちから犬を預かることになった",
                "furigana": "旅行（りょこう）いともいぬあずかることになった",
                "meaning_vi": "Tôi sẽ chăm sóc cho chú chó từ người bạn đi du lịch.",
                "meaning_en": "A friend on a trip decided to take care of her dog."
              }
            ],
            "lesson_number": 10
          },
          {
            "vocab": "預ける",
            "furigana": "あずける",
            "meaning_vi": "Tôi sẽ để nó",
            "meaning_en": "I will leave it",
            "examples": [
              {
                "example_text": "銀行にお金を預けると、利子がつく",
                "furigana": "銀行（ぎんこう）かねあずりしがつく",
                "meaning_vi": "Gởi tiền vào ngân hàng sẽ sinh lãi.",
                "meaning_en": "If you deposit money in the bank, you will receive interest"
              }
            ],
            "lesson_number": 10
          },
          {
            "vocab": "決まる",
            "furigana": "きまる",
            "meaning_vi": "Nó được quyết định",
            "meaning_en": "It is decided",
            "examples": [
              {
                "example_text": "帰国の日が決まった",
                "furigana": "帰国（きこく）ひきまった",
                "meaning_vi": "Ngày về nước đã được quyết định.",
                "meaning_en": "The date of return has been decided"
              }
            ],
            "lesson_number": 10
          },
          {
            "vocab": "決める",
            "furigana": "きめる",
            "meaning_vi": "quyết định",
            "meaning_en": "decision",
            "examples": [
              {
                "example_text": "「進学か就職か、早く決めたほうがいいですよ」",
                "furigana": "「進学（しんがく）しゅうしょくはやきめたほうがいいですよ」",
                "meaning_vi": "\"Nên quyết định sớm học lên hay đi làm.\"",
                "meaning_en": "\"You should decide early whether to go to college or get a job.\""
              }
            ],
            "lesson_number": 10
          },
          {
            "vocab": "写る",
            "furigana": "うつる",
            "meaning_vi": "Ảnh",
            "meaning_en": "Image",
            "examples": [
              {
                "example_text": "このカメラは暗いところでもよく写る",
                "furigana": "このカメラは暗（くら）うつる",
                "meaning_vi": "Chiếc máy ảnh này chụp tốt cả những nơi tối.",
                "meaning_en": "This camera is very visible even in dark places"
              }
            ],
            "lesson_number": 10
          },
          {
            "vocab": "写す",
            "furigana": "うつす",
            "meaning_vi": "Sao chép",
            "meaning_en": "Copy",
            "examples": [
              {
                "example_text": "写真を写す",
                "furigana": "写真（しゃしん）うつす",
                "meaning_vi": "Chụp ảnh.",
                "meaning_en": "Take a photo"
              }
            ],
            "lesson_number": 10
          },
          {
            "vocab": "思い出す",
            "furigana": "おもいだす",
            "meaning_vi": "nhớ",
            "meaning_en": "miss",
            "examples": [
              {
                "example_text": "毎年春になると、高校の入学式を思い出します",
                "furigana": "毎年春（まいとしはる）こうこうにゅうがくしきおもだします",
                "meaning_vi": "Mỗi năm khi mùa xuân đến, tôi lại hồi tưởng về buổi lễ nhập học THPT.",
                "meaning_en": "Every spring, I remember the high school entrance ceremony"
              }
            ],
            "lesson_number": 10
          },
          {
            "vocab": "教わる",
            "furigana": "おそわる",
            "meaning_vi": "được dạy",
            "meaning_en": "taught",
            "examples": [
              {
                "example_text": "この料理の作り方は母｛から／に｝教わりました",
                "furigana": "この料理（りょうり）つくかたははおそわりました",
                "meaning_vi": "Tôi được mẹ dạy cách làm món ăn này.",
                "meaning_en": "I was taught how to make this dish from my mother {from/from}"
              }
            ],
            "lesson_number": 10
          },
          {
            "vocab": "申し込む",
            "furigana": "もうしこむ",
            "meaning_vi": "áp dụng",
            "meaning_en": "apply",
            "examples": [
              {
                "example_text": "パーティーに参加を申し込む",
                "furigana": "パーティーに参加（さんか）もうこむ",
                "meaning_vi": "Đăng kí tham gia bữa tiệc.",
                "meaning_en": "Apply to join the party"
              }
            ],
            "lesson_number": 10
          },
          {
            "vocab": "断る",
            "furigana": "ことわる",
            "meaning_vi": "từ chối",
            "meaning_en": "refuse",
            "examples": [
              {
                "example_text": "頼まれた仕事を断った",
                "furigana": "頼（たの）しごとことわった",
                "meaning_vi": "Tôi đã từ chối công việc được nhờ vả.",
                "meaning_en": "I refused the job I was asked to do"
              }
            ],
            "lesson_number": 10
          },
          {
            "vocab": "見つかる",
            "furigana": "みつかる",
            "meaning_vi": "Nó được tìm thấy",
            "meaning_en": "It is found",
            "examples": [
              {
                "example_text": "なくなったと思っていた指輪が、　ソファーの下｛で／から｝見つかった",
                "furigana": "なくなったと思（おも）ゆびわしたみつかった",
                "meaning_vi": "Đã tìm thấy chiếc nhẫn cứ ngỡ đã mất ở dưới ghế Sofa.",
                "meaning_en": "The ring I thought was gone was found under the sofa {from/from}"
              }
            ],
            "lesson_number": 10
          },
          {
            "vocab": "見つける",
            "furigana": "みつける",
            "meaning_vi": "tìm thấy",
            "meaning_en": "find",
            "examples": [
              {
                "example_text": "なくなったと思っていた指輪を、ソファーの下で見つけた",
                "furigana": "なくなったと思（おも）ゆびわしたみつけた",
                "meaning_vi": "Đã tìm ra chiếc nhẫn cứ ngỡ đã mất ở dưới ghế Sofa.",
                "meaning_en": "I found a ring that I thought was gone under the sofa."
              }
            ],
            "lesson_number": 10
          },
          {
            "vocab": "捕まる",
            "furigana": "つかまる",
            "meaning_vi": "bị bắt",
            "meaning_en": "caught",
            "examples": [
              {
                "example_text": "犯人が警察に捕まった",
                "furigana": "犯人（はんにん）けいさつつかまった",
                "meaning_vi": "Phạm nhân đã bị cảnh sát bắt giữ.",
                "meaning_en": "The perpetrator was caught by the police"
              }
            ],
            "lesson_number": 11
          },
          {
            "vocab": "捕まえる",
            "furigana": "つかまえる",
            "meaning_vi": "nắm lấy",
            "meaning_en": "grasp",
            "examples": [
              {
                "example_text": "警察が泥棒を捕まえた",
                "furigana": "警察（けいさつ）どろぼうつかまえた",
                "meaning_vi": "Cảnh sát tóm lấy tên trộm.",
                "meaning_en": "Police caught a thief"
              }
            ],
            "lesson_number": 11
          },
          {
            "vocab": "乗る",
            "furigana": "のる",
            "meaning_vi": "Nhận trên",
            "meaning_en": "Upper",
            "examples": [
              {
                "example_text": "毎朝、電車に乗って学校に通っている",
                "furigana": "毎朝（まいあさ）でんしゃのがっこうかよっている",
                "meaning_vi": "Sáng nào tôi cũng lên tàu điện đi đến trường.",
                "meaning_en": "I take the train to school every morning."
              }
            ],
            "lesson_number": 11
          },
          {
            "vocab": "乗せる",
            "furigana": "のせる",
            "meaning_vi": "Có thể được mang theo",
            "meaning_en": "Can be carried",
            "examples": [
              {
                "example_text": "子どもを車に乗せて、学校まで送って行った",
                "furigana": "子（こ）くるまのがっこうおくいった",
                "meaning_vi": "Cho bọn trẻ lên xe rồi đưa đến trường.",
                "meaning_en": "I took my child to the school and took him to the car."
              }
            ],
            "lesson_number": 11
          },
          {
            "vocab": "降りる／下りる",
            "furigana": "おりる／おりる",
            "meaning_vi": "Đi xuống/đi xuống",
            "meaning_en": "Go down/go down",
            "examples": [
              {
                "example_text": "電車を降りる",
                "furigana": "電車（でんしゃ）おりる",
                "meaning_vi": "Xuống tàu điện.",
                "meaning_en": "Get off the train"
              }
            ],
            "lesson_number": 11
          },
          {
            "vocab": "降ろす／下ろす",
            "furigana": "おろす／おろす",
            "meaning_vi": "Hạ gục/ hạ gục",
            "meaning_en": "Defeat/ defeat",
            "examples": [
              {
                "example_text": "（タクシーの客が）「あの銀行の前で降ろしてください」",
                "furigana": "（タクシーの客（きゃく）ぎんこうまえおろしてください」",
                "meaning_vi": "(Khách đi Taxi) \"Xin hãy cho tôi xuống trước ngân hàng kia\".",
                "meaning_en": "(Tax customer) \"Please drop me off in front of that bank.\""
              }
            ],
            "lesson_number": 11
          },
          {
            "vocab": "直る",
            "furigana": "なおる",
            "meaning_vi": "Sửa nó",
            "meaning_en": "Fix it",
            "examples": [
              {
                "example_text": "こわれたパソコンが直った",
                "furigana": "こわれたパソコンが直（なお）った",
                "meaning_vi": "Máy tính cá nhân bị hỏng đã được sửa.",
                "meaning_en": "The broken computer has been fixed"
              }
            ],
            "lesson_number": 11
          },
          {
            "vocab": "直す",
            "furigana": "なおす",
            "meaning_vi": "sửa chữa",
            "meaning_en": "repair",
            "examples": [
              {
                "example_text": "こわれた時計を直す",
                "furigana": "こわれた時計（とけい）なおす",
                "meaning_vi": "Sửa đồng hồ bị hỏng.",
                "meaning_en": "Fix a broken clock"
              }
            ],
            "lesson_number": 11
          },
          {
            "vocab": "治る",
            "furigana": "なおる",
            "meaning_vi": "Nó sẽ chữa lành",
            "meaning_en": "It will heal",
            "examples": [
              {
                "example_text": "なかなか頭痛が治らない",
                "furigana": "なかなか頭痛（ずつう）なおらない",
                "meaning_vi": "Mãi mà không khỏi đau đầu.",
                "meaning_en": "My headaches don't go away very well"
              }
            ],
            "lesson_number": 11
          },
          {
            "vocab": "治す",
            "furigana": "なおす",
            "meaning_vi": "sự chữa bệnh",
            "meaning_en": "healing",
            "examples": [
              {
                "example_text": "「よく休んで早くかぜを治してください」",
                "furigana": "「よく休（やす）はやなおしてください」",
                "meaning_vi": "\"Hãy nghỉ ngơi thư thái cho nhanh khỏi cảm nhé.\"",
                "meaning_en": "\"Resting well and get rid of the cold quickly.\""
              }
            ],
            "lesson_number": 11
          },
          {
            "vocab": "亡くなる",
            "furigana": "なくなる",
            "meaning_vi": "Tôi sẽ chết",
            "meaning_en": "I will die",
            "examples": [
              {
                "example_text": "社長が９０歳でなくなった",
                "furigana": "社長（しゃちょう）さいでなくなった",
                "meaning_vi": "Giám đốc mất vào năm 90 tuổi.",
                "meaning_en": "The president is gone at 90 years old"
              }
            ],
            "lesson_number": 12
          },
          {
            "vocab": "亡くす",
            "furigana": "なくす",
            "meaning_vi": "thua",
            "meaning_en": "lose",
            "examples": [
              {
                "example_text": "彼は子どものとき、父親をなくした",
                "furigana": "彼（かれ）こちちおやをなくした",
                "meaning_vi": "Anh ấy mất bố khi còn nhỏ.",
                "meaning_en": "He lost his father when he was a child."
              }
            ],
            "lesson_number": 12
          },
          {
            "vocab": "生まれる",
            "furigana": "うまれる",
            "meaning_vi": "Sinh",
            "meaning_en": "Born",
            "examples": [
              {
                "example_text": "先月子どもが生まれた",
                "furigana": "先月（せんげつ）こうまれた",
                "meaning_vi": "Đứa trẻ được sinh ra vào tháng trước.",
                "meaning_en": "My child was born last month"
              }
            ],
            "lesson_number": 12
          },
          {
            "vocab": "産む 生む",
            "furigana": "うむうむ",
            "meaning_vi": "Sinh con để sinh con",
            "meaning_en": "Giving birth to give birth",
            "examples": [
              {
                "example_text": "妻が先日元気な女の子を産んだ",
                "furigana": "妻（つま）せんじつげんきおんなこうんだ",
                "meaning_vi": "Cách đây vài ngày, vợ tôi đã sinh ra một bé gái khỏe mạnh.",
                "meaning_en": "My wife gave birth to a healthy girl the other day."
              }
            ],
            "lesson_number": 12
          },
          {
            "vocab": "出会う",
            "furigana": "であう",
            "meaning_vi": "bắt gặp",
            "meaning_en": "encounter",
            "examples": [
              {
                "example_text": "駅で偶然大学時代の友人｛に／と｝出会った",
                "furigana": "駅（えき）ぐうぜんだいがくじだいゆうじんであった",
                "meaning_vi": "Ở nhà ga, tôi tình cờ gặp người bạn thời đại học.",
                "meaning_en": "I happened to meet a friend from university at the station"
              }
            ],
            "lesson_number": 12
          },
          {
            "vocab": "訪ねる",
            "furigana": "たずねる",
            "meaning_vi": "thăm nom",
            "meaning_en": "visit",
            "examples": [
              {
                "example_text": "友人の家を訪ねた",
                "furigana": "友人（ゆうじん）いえたずねた",
                "meaning_vi": "Đến thăm nhà bạn.",
                "meaning_en": "I visited a friend's house"
              }
            ],
            "lesson_number": 12
          },
          {
            "vocab": "付き合う",
            "furigana": "つきあう",
            "meaning_vi": "Giữ công ty",
            "meaning_en": "Keep the company",
            "examples": [
              {
                "example_text": "隣の家の人と親しく付き合っている",
                "furigana": "隣（となり）いえひとしたつあっている",
                "meaning_vi": "Giữ mối quan hệ thân thiết với nhà bên cạnh.",
                "meaning_en": "I'm close to the person next door"
              }
            ],
            "lesson_number": 12
          },
          {
            "vocab": "効く",
            "furigana": "きく",
            "meaning_vi": "Nó hoạt động",
            "meaning_en": "It works",
            "examples": [
              {
                "example_text": "この薬は頭痛によく効く",
                "furigana": "この薬（くすり）ずつうきく",
                "meaning_vi": "Thuốc này rất hiệu quả cho người bị đau đầu.",
                "meaning_en": "This medicine works well for headaches"
              }
            ],
            "lesson_number": 13
          },
          {
            "vocab": "はやる",
            "furigana": "はやる",
            "meaning_vi": "Tôi sẽ làm điều đó",
            "meaning_en": "I will do that",
            "examples": [
              {
                "example_text": "この冬は赤い色がはやっている",
                "furigana": "この冬（ふゆ）あかいろがはやっている",
                "meaning_vi": "Mùa đông này màu đỏ rất thịnh hành.",
                "meaning_en": "The red colour is on this winter"
              }
            ],
            "lesson_number": 13
          },
          {
            "vocab": "経つ",
            "furigana": "たつ",
            "meaning_vi": "Đi qua",
            "meaning_en": "Passing",
            "examples": [
              {
                "example_text": "日本へ来てから10年がたった",
                "furigana": "日本（にほん）きねんがたった",
                "meaning_vi": "Đã đến Nhật được 10 năm rồi.",
                "meaning_en": "It's been 10 years since I came to Japan"
              }
            ],
            "lesson_number": 13
          },
          {
            "vocab": "間に合う",
            "furigana": "まにあう",
            "meaning_vi": "Nó trong thời gian",
            "meaning_en": "It is in time",
            "examples": [
              {
                "example_text": "電車が遅れたが、駅から走って、なんとか授業に間に合った",
                "furigana": "電車（でんしゃ）おくえきはしじゅぎょうまあった",
                "meaning_vi": "Xe điện đến muộn, nhưng mà chạy từ ga nên vừa kịp giờ học.",
                "meaning_en": "The train was late, but I ran from the station and managed to make it in time for class."
              }
            ],
            "lesson_number": 13
          },
          {
            "vocab": "間に合わせる",
            "furigana": "まにあわせる",
            "meaning_vi": "Làm cho nó kịp thời",
            "meaning_en": "Make it timely",
            "examples": [
              {
                "example_text": "レポートを、がんばって締め切りに間に合わせた",
                "furigana": "レポートを、がんばって締（し）きまあわせた",
                "meaning_vi": "Tôi đã cố gắng hoàn thành bản báo cáo đúng thời hạn.",
                "meaning_en": "I worked hard to meet the deadline"
              }
            ],
            "lesson_number": 13
          },
          {
            "vocab": "通う",
            "furigana": "かよう",
            "meaning_vi": "đi đến",
            "meaning_en": "go",
            "examples": [
              {
                "example_text": "｛学校／会社／病院　…｝に通う",
                "furigana": "｛学校（がっこう）かいしゃびょういんかよう",
                "meaning_vi": "Đi học / đi làm / đi viện…",
                "meaning_en": "Visiting {School/Company/Hospital...}"
              }
            ],
            "lesson_number": 13
          },
          {
            "vocab": "込む",
            "furigana": "こむ",
            "meaning_vi": "TRONG",
            "meaning_en": "IN",
            "examples": [
              {
                "example_text": "｛電車／店／道　…｝が込む",
                "furigana": "｛電車（でんしゃ）みせみちこむ",
                "meaning_vi": "{ Xe điện / cửa hàng  / đường ...} đông đúc.",
                "meaning_en": "{Train/Store/Tour...} is in"
              }
            ],
            "lesson_number": 13
          },
          {
            "vocab": "すれ違う",
            "furigana": "すれちがう",
            "meaning_vi": "Vượt qua khác nhau",
            "meaning_en": "Overtake",
            "examples": [
              {
                "example_text": "この道はせまいので、自動車がすれ違うのは大変だ",
                "furigana": "この道（みち）じどうしゃちがたいへんだ",
                "meaning_vi": "Con đường này hẹp nên ô tô ngược hướng khó đi ngang qua nhau.",
                "meaning_en": "This road is narrow, so it's difficult for cars to pass by"
              }
            ],
            "lesson_number": 13
          },
          {
            "vocab": "掛かる",
            "furigana": "かかる",
            "meaning_vi": "Nó sẽ mất",
            "meaning_en": "It will be lost",
            "examples": [
              {
                "example_text": "このサラダには何もかかっていないようだ",
                "furigana": "このサラダには何（なに）もかかっていないようだ",
                "meaning_vi": "Hình như món rau trộn này không cho bất kỳ cái gì lên trên cả.",
                "meaning_en": "It seems there's nothing left on this salad"
              }
            ],
            "lesson_number": 13
          },
          {
            "vocab": "掛ける",
            "furigana": "かける",
            "meaning_vi": "Treo",
            "meaning_en": "Hang",
            "examples": [
              {
                "example_text": "料理にしょうゆをかけて食べる",
                "furigana": "料理（りょうり）たべる",
                "meaning_vi": "Cho vài giọt nước tương lên món ăn rồi ăn.",
                "meaning_en": "Sprinkle soy sauce on the dish to eat"
              }
            ],
            "lesson_number": 13
          },
          {
            "vocab": "動く",
            "furigana": "うごく",
            "meaning_vi": "Di chuyển",
            "meaning_en": "Move",
            "examples": [
              {
                "example_text": "「写真を撮るから動かないでください」",
                "furigana": "「写真（しゃしん）とうごかないでください」",
                "meaning_vi": "\"Tôi sẽ chụp ảnh nên đừng cử động.\"",
                "meaning_en": "\"I'll take a photo so please don't move.\""
              }
            ],
            "lesson_number": 13
          },
          {
            "vocab": "動かす",
            "furigana": "うごかす",
            "meaning_vi": "di chuyển",
            "meaning_en": "move",
            "examples": [
              {
                "example_text": "ひどいけがをして、体を動かすこともできない",
                "furigana": "ひどいけがをして、体（からだ）うごかすこともできない",
                "meaning_vi": "Bị thương rất nặng nên việc cử động cơ thể cũng không thể làm được.",
                "meaning_en": "I've suffered a terrible injury and can't move"
              }
            ],
            "lesson_number": 13
          },
          {
            "vocab": "離れる",
            "furigana": "はなれる",
            "meaning_vi": "Bỏ đi",
            "meaning_en": "Leave",
            "examples": [
              {
                "example_text": "危ないから、ストーブから離れて遊びなさい」",
                "furigana": "危（あぶ）はなあそびなさい」",
                "meaning_vi": "\"Vì nguy hiểm nên hãy chơi tranh xa khu vực lò sưởi ra!\"",
                "meaning_en": "It's dangerous, so just leave the stove and play.\""
              }
            ],
            "lesson_number": 14
          },
          {
            "vocab": "離す",
            "furigana": "はなす",
            "meaning_vi": "Hãy đi",
            "meaning_en": "Please go",
            "examples": [
              {
                "example_text": "テストのときは、机を離して並べる",
                "furigana": "テストのときは、机（つくえ）はなならべる",
                "meaning_vi": "Khi kiểm tra thì xếp bàn cách xa nhau.",
                "meaning_en": "When testing, leave the desks and line them up"
              }
            ],
            "lesson_number": 14
          },
          {
            "vocab": "ぶつかる",
            "furigana": "ぶつかる",
            "meaning_vi": "Đụng độ",
            "meaning_en": "Encounter",
            "examples": [
              {
                "example_text": "道で自転車にぶつかってけがをした",
                "furigana": "道（みち）じてんしゃにぶつかってけがをした",
                "meaning_vi": "Tôi bị thương bởi va chạm với chiếc xe đạp trên đường.",
                "meaning_en": "I was injured when I hit a bicycle on the road"
              }
            ],
            "lesson_number": 14
          },
          {
            "vocab": "ぶつける",
            "furigana": "ぶつける",
            "meaning_vi": "Thổi nó",
            "meaning_en": "Blow it",
            "examples": [
              {
                "example_text": "運転していて、車を電柱にぶつけてしまった",
                "furigana": "運転（うんてん）くるまでんちゅうにぶつけてしまった",
                "meaning_vi": "Đang lái xe thì ô tô tông chạm mạnh vào cột điện.",
                "meaning_en": "I was driving and hit a car on a pole."
              }
            ],
            "lesson_number": 14
          },
          {
            "vocab": "こぼれる",
            "furigana": "こぼれる",
            "meaning_vi": "Tràn ra",
            "meaning_en": "Overflow",
            "examples": [
              {
                "example_text": "手がふるえてお茶がこばれてしまった",
                "furigana": "手（て）ちゃがこばれてしまった",
                "meaning_vi": "Tay run rẩy nên nước trà tràn ra ngoài.",
                "meaning_en": "My hands tremble and tea got smashed"
              }
            ],
            "lesson_number": 14
          },
          {
            "vocab": "こぼす",
            "furigana": "こぼす",
            "meaning_vi": "Tràn ra",
            "meaning_en": "Overflow",
            "examples": [
              {
                "example_text": "コップを倒して水をこぼしてしまった",
                "furigana": "コップを倒（たお）みずをこぼしてしまった",
                "meaning_vi": "Làm đổ cốc nên làm nước tràn ra ngoài.",
                "meaning_en": "I knocked down the cup and spilled water"
              }
            ],
            "lesson_number": 14
          },
          {
            "vocab": "ふく",
            "furigana": "ふく",
            "meaning_vi": "lau đi",
            "meaning_en": "wipe",
            "examples": [
              {
                "example_text": "汗をふく",
                "furigana": "汗（あせ）をふく",
                "meaning_vi": "Lau mồ hôi .",
                "meaning_en": "Sweat"
              }
            ],
            "lesson_number": 14
          },
          {
            "vocab": "片付く",
            "furigana": "かたづく",
            "meaning_vi": "Dọn dẹp",
            "meaning_en": "Clean up",
            "examples": [
              {
                "example_text": "大掃除をして、やっと部屋がかたづいた",
                "furigana": "大掃除（おおそうじ）へやがかたづいた",
                "meaning_vi": "Sau khi tổng vệ sinh, cuối cùng phòng ốc căn cũng được dọn dẹp.",
                "meaning_en": "After doing a big cleaning, the room finally chocked."
              }
            ],
            "lesson_number": 14
          },
          {
            "vocab": "片付ける",
            "furigana": "かたづける",
            "meaning_vi": "bỏ đi",
            "meaning_en": "leave",
            "examples": [
              {
                "example_text": "机の上をかたづける",
                "furigana": "机（つくえ）うえをかたづける",
                "meaning_vi": "Dọn dẹp phía trên mặt bàn.",
                "meaning_en": "Put the table on"
              }
            ],
            "lesson_number": 14
          },
          {
            "vocab": "包む",
            "furigana": "つつむ",
            "meaning_vi": "Bọc",
            "meaning_en": "Wrap",
            "examples": [
              {
                "example_text": "プレゼントをきれいな紙｛で／に｝包む",
                "furigana": "プレゼントをきれいな紙（かみ）つつむ",
                "meaning_vi": "Gói quà bằng giấy đẹp.",
                "meaning_en": "Wrap the present in beautiful paper {/in}"
              }
            ],
            "lesson_number": 14
          },
          {
            "vocab": "張る",
            "furigana": "はる",
            "meaning_vi": "Dán",
            "meaning_en": "Paste",
            "examples": [
              {
                "example_text": "壁にポスターを張る",
                "furigana": "壁（かべ）はる",
                "meaning_vi": "Dán áp phích lên tường.",
                "meaning_en": "Place a poster on the wall"
              }
            ],
            "lesson_number": 14
          },
          {
            "vocab": "無くなる",
            "furigana": "なくなる",
            "meaning_vi": "Nó sẽ biến mất",
            "meaning_en": "It will disappear",
            "examples": [
              {
                "example_text": "部屋のかぎがなくなってしまった",
                "furigana": "部屋（へや）のかぎがなくなってしまった",
                "meaning_vi": "Chìa khóa căn phòng đã bị mất rồi.",
                "meaning_en": "The key to the room is gone"
              }
            ],
            "lesson_number": 14
          },
          {
            "vocab": "無くす",
            "furigana": "なくす",
            "meaning_vi": "thua",
            "meaning_en": "lose",
            "examples": [
              {
                "example_text": "パスポートをなくして困っている",
                "furigana": "パスポートをなくして困（こま）っている",
                "meaning_vi": "Tôi đã làm mất hộ chiếu nên giờ không biết phải làm sao nữa đây.",
                "meaning_en": "I'm having trouble losing my passport"
              }
            ],
            "lesson_number": 14
          },
          {
            "vocab": "足りる",
            "furigana": "たりる",
            "meaning_vi": "Nó là đủ",
            "meaning_en": "It is enough",
            "examples": [
              {
                "example_text": "この収入では生活するのに全然足りない",
                "furigana": "この収入（しゅうにゅう）せいかつぜんぜんたりない",
                "meaning_vi": "Với thu nhập này thì hoàn toàn không đủ sống.",
                "meaning_en": "This income is not enough to live"
              }
            ],
            "lesson_number": 14
          },
          {
            "vocab": "残る",
            "furigana": "のこる",
            "meaning_vi": "Nó vẫn còn",
            "meaning_en": "It is still",
            "examples": [
              {
                "example_text": "料理を作りすぎて、たくさん残ってしまった",
                "furigana": "料理（りょうり）つくのこってしまった",
                "meaning_vi": "Làm quá nhiều đồ ăn nên vẫn còn lại khá nhiều.",
                "meaning_en": "I cooked too much and ended up with so much left"
              }
            ],
            "lesson_number": 14
          },
          {
            "vocab": "残す",
            "furigana": "のこす",
            "meaning_vi": "rời khỏi",
            "meaning_en": "leave",
            "examples": [
              {
                "example_text": "ごはんを残してしまった",
                "furigana": "ごはんを残（のこ）してしまった",
                "meaning_vi": "Tôi đã để thừa cơm.",
                "meaning_en": "I left some rice"
              }
            ],
            "lesson_number": 14
          },
          {
            "vocab": "腐る",
            "furigana": "くさる",
            "meaning_vi": "Nó thối rữa",
            "meaning_en": "It rotten",
            "examples": [
              {
                "example_text": "腐ったものを食べて、おなかを壊してしまった",
                "furigana": "腐（くさ）たこわしてしまった",
                "meaning_vi": "Ăn phải đồ thiu nên bị đau bụng mất rồi.",
                "meaning_en": "I ate something rotten and my stomach got damaged"
              }
            ],
            "lesson_number": 14
          },
          {
            "vocab": "むける",
            "furigana": "むける",
            "meaning_vi": "Tôi sẽ nhận được nó",
            "meaning_en": "I will receive it",
            "examples": [
              {
                "example_text": "海で日焼けをして、背中の皮がむけた",
                "furigana": "海（うみ）ひやせなかかわがむけた",
                "meaning_vi": "Da ở lưng bị bong tróc do bị cháy nắng ở biển.",
                "meaning_en": "I got sunburned in the ocean and the skin on my back was peeled."
              }
            ],
            "lesson_number": 15
          },
          {
            "vocab": "むく",
            "furigana": "むく",
            "meaning_vi": "Tôi sẽ",
            "meaning_en": "I will",
            "examples": [
              {
                "example_text": "果物の皮をむく",
                "furigana": "果物（くだもの）かわをむく",
                "meaning_vi": "Bóc vỏ trái cây.",
                "meaning_en": "Peeling fruit"
              }
            ],
            "lesson_number": 15
          },
          {
            "vocab": "滑る",
            "furigana": "すべる",
            "meaning_vi": "cầu trượt",
            "meaning_en": "slide",
            "examples": [
              {
                "example_text": "新しいスケート場はきれいで、楽しくすべることができた",
                "furigana": "新（あたら）じょうたのしくすべることができた",
                "meaning_vi": "Sân trượt băng mới thật sạch đẹp, có thể trượt băng vui vẻ.",
                "meaning_en": "The new skating rink was beautiful and I had fun sliding"
              }
            ],
            "lesson_number": 15
          },
          {
            "vocab": "積もる",
            "furigana": "つもる",
            "meaning_vi": "Nó đang chồng chất lên",
            "meaning_en": "It is piling up",
            "examples": [
              {
                "example_text": "きのう降った雪が積もっている",
                "furigana": "きのう降（ふ）ゆきつもっている",
                "meaning_vi": "Tuyết rơi vào hôm qua tích lại nhiều.",
                "meaning_en": "There's snow that fell yesterday"
              }
            ],
            "lesson_number": 15
          },
          {
            "vocab": "積む",
            "furigana": "つむ",
            "meaning_vi": "Đang tải",
            "meaning_en": "Download",
            "examples": [
              {
                "example_text": "机の上に本がたくさん積んである",
                "furigana": "机（つくえ）うえほんつんである",
                "meaning_vi": "Có rất nhiều sách chồng chất lên nhau trên bàn làm việc.",
                "meaning_en": "There are lots of books stacked on the desk"
              }
            ],
            "lesson_number": 15
          },
          {
            "vocab": "空く",
            "furigana": "あく",
            "meaning_vi": "Nó trống rỗng",
            "meaning_en": "It is empty",
            "examples": [
              {
                "example_text": "くつしたに穴が空いてしまった",
                "furigana": "くつしたに穴（あな）あいてしまった",
                "meaning_vi": "Có lỗ hổng ở tất.",
                "meaning_en": "I've got a hole in my shoes"
              }
            ],
            "lesson_number": 15
          },
          {
            "vocab": "空ける",
            "furigana": "あける",
            "meaning_vi": "Hãy trống rỗng",
            "meaning_en": "Be empty",
            "examples": [
              {
                "example_text": "かべに穴を空ける",
                "furigana": "かべに穴（あな）あける",
                "meaning_vi": "Khoan lỗ trên tường.",
                "meaning_en": "Make a hole in the wall"
              }
            ],
            "lesson_number": 15
          },
          {
            "vocab": "下がる",
            "furigana": "さがる",
            "meaning_vi": "Nó đang đi xuống",
            "meaning_en": "It is going down",
            "examples": [
              {
                "example_text": "｛熱／温度／値段／成績　…｝が下がる",
                "furigana": "｛熱（ねつ）おんどねだんせいせきさがる",
                "meaning_vi": "Hạ sốt / nhiệt độ giảm / giá giảm / thành tích đi xuống…",
                "meaning_en": "{heat/temperature/price/results...} decreases"
              }
            ],
            "lesson_number": 15
          },
          {
            "vocab": "下げる",
            "furigana": "さげる",
            "meaning_vi": "Thấp hơn",
            "meaning_en": "Lower",
            "examples": [
              {
                "example_text": "｛熱／温度／値段／成績　…｝を下げる",
                "furigana": "｛熱（ねつ）おんどねだんせいせきさげる",
                "meaning_vi": "Hạ sốt / hạ nhiệt độ / hạ giá / hạ thành tích…",
                "meaning_en": "Lower {heat/temperature/price/results...}"
              }
            ],
            "lesson_number": 15
          },
          {
            "vocab": "冷える",
            "furigana": "ひえる",
            "meaning_vi": "Trời trở nên lạnh",
            "meaning_en": "It became cold",
            "examples": [
              {
                "example_text": "寒いところに長くいたので、手足が冷えてしまった",
                "furigana": "寒（さむ）ながてあしひえてしまった",
                "meaning_vi": "Ở chỗ lạnh lâu nên chân tay lạnh ngắt luôn rồi.",
                "meaning_en": "I was in a cold place for a long time, so my hands and feet got cold"
              }
            ],
            "lesson_number": 15
          },
          {
            "vocab": "冷やす",
            "furigana": "ひやす",
            "meaning_vi": "mát mẻ",
            "meaning_en": "cool",
            "examples": [
              {
                "example_text": "この果物は冷やして食べたほうがおいしい",
                "furigana": "この果物（くだもの）ひたべたほうがおいしい",
                "meaning_vi": "Trái cây này thì làm lạnh ăn sẽ ngon hơn.",
                "meaning_en": "This fruit is better if it's cooled"
              }
            ],
            "lesson_number": 15
          },
          {
            "vocab": "冷める",
            "furigana": "さめる",
            "meaning_vi": "Trời trở nên lạnh",
            "meaning_en": "It became cold",
            "examples": [
              {
                "example_text": "この料理は冷めるとおいしくない",
                "furigana": "この料理（りょうり）さめるとおいしくない",
                "meaning_vi": "Món ăn này mà nguội đi sẽ không ngon.",
                "meaning_en": "This dish doesn't taste good when it cools down"
              }
            ],
            "lesson_number": 16
          },
          {
            "vocab": "冷ます",
            "furigana": "さます",
            "meaning_vi": "mát mẻ",
            "meaning_en": "cool",
            "examples": [
              {
                "example_text": "お風呂のをお湯が熱くなりすぎた。少し冷ましてから入ろう",
                "furigana": "お風呂（ふろ）ゆあつすこさはいろう",
                "meaning_vi": "Nước nóng trong bồn tắm nóng quá. Hãy để nguội một chút rồi vào tắm.",
                "meaning_en": "The hot water in the bath got too hot. Let it cool a little before you put in"
              }
            ],
            "lesson_number": 16
          },
          {
            "vocab": "燃える",
            "furigana": "もえる",
            "meaning_vi": "Bỏng",
            "meaning_en": "Burn",
            "examples": [
              {
                "example_text": "｛火／紙　…｝が燃える",
                "furigana": "｛火（ひ）かみもえる",
                "meaning_vi": "{ Lửa / giấy ...} cháy.",
                "meaning_en": "{Fire/Paper...} burns"
              }
            ],
            "lesson_number": 16
          },
          {
            "vocab": "燃やす",
            "furigana": "もやす",
            "meaning_vi": "Đốt cháy",
            "meaning_en": "Burn",
            "examples": [
              {
                "example_text": "｛火／紙　…｝が燃やす",
                "furigana": "｛火（ひ）かみもやす",
                "meaning_vi": "Đốt lửa / đốt giấy…",
                "meaning_en": "{Fire/Paper...} burns"
              }
            ],
            "lesson_number": 16
          },
          {
            "vocab": "沸く",
            "furigana": "わく",
            "meaning_vi": "Đun sôi",
            "meaning_en": "Boil",
            "examples": [
              {
                "example_text": "｛湯／風呂｝がわく",
                "furigana": "｛湯（ゆ）ふろ｝がわく",
                "meaning_vi": "Nước sôi / bồn tắm sẵn sàng.",
                "meaning_en": "{Hot water/bath}"
              }
            ],
            "lesson_number": 16
          },
          {
            "vocab": "沸かす",
            "furigana": "わかす",
            "meaning_vi": "đun sôi",
            "meaning_en": "boil",
            "examples": [
              {
                "example_text": "｛湯／風呂｝をわかす",
                "furigana": "｛湯（ゆ）ふろ｝をわかす",
                "meaning_vi": "Đun sôi nước / chuẩn bị bồn tắm.",
                "meaning_en": "Get the {hot water/bath}"
              }
            ],
            "lesson_number": 16
          },
          {
            "vocab": "鳴る",
            "furigana": "なる",
            "meaning_vi": "Nó nhẫn",
            "meaning_en": "It is ringing",
            "examples": [
              {
                "example_text": "雷が鳴っている",
                "furigana": "雷（かみなり）なっている",
                "meaning_vi": "Tiếng sấm vang vọng.",
                "meaning_en": "Thunder is roaring"
              }
            ],
            "lesson_number": 16
          },
          {
            "vocab": "鳴らす",
            "furigana": "ならす",
            "meaning_vi": "Nhẫn",
            "meaning_en": "Ring",
            "examples": [
              {
                "example_text": "ブザーを鳴らす",
                "furigana": "ブザーを鳴（な）らす",
                "meaning_vi": "Bấm chuông điện.",
                "meaning_en": "Sound the buzzer"
              }
            ],
            "lesson_number": 16
          },
          {
            "vocab": "役立つ",
            "furigana": "やくだつ",
            "meaning_vi": "Hữu ích",
            "meaning_en": "Useful",
            "examples": [
              {
                "example_text": "インターネットの情報は、勉強や仕事｛に役立つ／の役に立つ｝",
                "furigana": "インターネットの情報（じょうほう）べんきょうしごとやくだやくたつ｝",
                "meaning_vi": "Thông tin trên Internet rất hữu ích cho học tập cũng như công việc.",
                "meaning_en": "Internet information is useful for studying and working"
              }
            ],
            "lesson_number": 16
          },
          {
            "vocab": "役立てる",
            "furigana": "やくだてる",
            "meaning_vi": "Hữu ích",
            "meaning_en": "Useful",
            "examples": [
              {
                "example_text": "インターネットの情報を、勉強や仕事｛に役立てる／の役に立てる｝",
                "furigana": "インターネットの情報（じょうほう）べんきょうしごとやくだやくたてる｝",
                "meaning_vi": "Sử dụng thông tin trên Internet để giúp ích cho học tập cũng như công việc.",
                "meaning_en": "Use Internet information to study and work (use it for/use it for)"
              }
            ],
            "lesson_number": 16
          },
          {
            "vocab": "飾り",
            "furigana": "かざり",
            "meaning_vi": "trang trí",
            "meaning_en": "decorate",
            "examples": [
              {
                "example_text": "クリスマスの飾りを買った",
                "furigana": "クリスマスの飾（かざ）かった",
                "meaning_vi": "Tôi đã mua đồ trang trí Giáng sinh.",
                "meaning_en": "I bought a Christmas decoration"
              }
            ],
            "lesson_number": 17
          },
          {
            "vocab": "遊び",
            "furigana": "あそび",
            "meaning_vi": "chơi",
            "meaning_en": "play",
            "examples": [
              {
                "example_text": "かくれんぼは子どもの遊びだ",
                "furigana": "かくれんぼは子（こ）あそびだ",
                "meaning_vi": "Trốn tìm là trò chơi của những đứa trẻ.",
                "meaning_en": "Hide and seek is a child's game"
              }
            ],
            "lesson_number": 17
          },
          {
            "vocab": "集まり",
            "furigana": "あつまり",
            "meaning_vi": "Tập hợp",
            "meaning_en": "Aggregate",
            "examples": [
              {
                "example_text": "あした、マンションの住人の集まりがある",
                "furigana": "あした、マンションの住人（じゅうにん）あつまりがある",
                "meaning_vi": "Ngày mai, sẽ có buổi họp mặt những người sống ở chung cư.",
                "meaning_en": "Tomorrow, there will be a gathering of apartment residents."
              }
            ],
            "lesson_number": 17
          },
          {
            "vocab": "教え",
            "furigana": "おしえ",
            "meaning_vi": "bài học",
            "meaning_en": "lesson",
            "examples": [
              {
                "example_text": "母の教えを今でも思い出す",
                "furigana": "母（はは）おしいまおもだす",
                "meaning_vi": "Đến bây giờ tôi vẫn nhớ những lời mẹ dạy.",
                "meaning_en": "I still remember my mother's teachings"
              }
            ],
            "lesson_number": 17
          },
          {
            "vocab": "踊り",
            "furigana": "おどり",
            "meaning_vi": "nhảy",
            "meaning_en": "dance",
            "examples": [
              {
                "example_text": "留学生が各国の踊りを踊った",
                "furigana": "留学生（りゅうがくせい）かっこくおどおどった",
                "meaning_vi": "Du học sinh nhảy múa điệu nhảy của các nước.",
                "meaning_en": "International students danced around the world"
              }
            ],
            "lesson_number": 17
          },
          {
            "vocab": "思い",
            "furigana": "おもい",
            "meaning_vi": "nghĩ",
            "meaning_en": "think",
            "examples": [
              {
                "example_text": "あの人に私の思いが届いた",
                "furigana": "あの人（ひと）わたしおもとどいた",
                "meaning_vi": "Tình cảm của tôi đã truyền tải đến người ấy.",
                "meaning_en": "My thoughts have reached that person"
              }
            ],
            "lesson_number": 17
          },
          {
            "vocab": "考え",
            "furigana": "かんがえ",
            "meaning_vi": "nghĩ",
            "meaning_en": "think",
            "examples": [
              {
                "example_text": "私にいい考えがある",
                "furigana": "私（わたし）かんがえがある",
                "meaning_vi": "Tôi có ý tưởng tốt.",
                "meaning_en": "I have a good idea"
              }
            ],
            "lesson_number": 17
          },
          {
            "vocab": "片づけ",
            "furigana": "かたづけ",
            "meaning_vi": "Dọn dẹp",
            "meaning_en": "Clean up",
            "examples": [
              {
                "example_text": "私は片づけが苦手だ",
                "furigana": "私（わたし）かたにがてだ",
                "meaning_vi": "Tôi không thích dọn dẹp.",
                "meaning_en": "I'm not good at tidying up"
              }
            ],
            "lesson_number": 17
          },
          {
            "vocab": "手伝い",
            "furigana": "てつだい",
            "meaning_vi": "giúp đỡ",
            "meaning_en": "help",
            "examples": [
              {
                "example_text": "引っ越しの手伝いをする",
                "furigana": "引（ひ）こてつだいをする",
                "meaning_vi": "Giúp chuyển nhà.",
                "meaning_en": "Helping with the move"
              }
            ],
            "lesson_number": 17
          },
          {
            "vocab": "働き",
            "furigana": "はたらき",
            "meaning_vi": "Công việc",
            "meaning_en": "Job",
            "examples": [
              {
                "example_text": "血液の働きの一つは、体に栄養を運ぶことだ",
                "furigana": "血液（けつえき）はたらひとからだえいようはこぶことだ",
                "meaning_vi": "Một trong những chức năng của máu là vận chuyển dinh dưỡng cho cơ thể.",
                "meaning_en": "One of the functions of blood is to carry nutrients to the body."
              }
            ],
            "lesson_number": 17
          },
          {
            "vocab": "決まり",
            "furigana": "きまり",
            "meaning_vi": "Chắc chắn",
            "meaning_en": "Sure",
            "examples": [
              {
                "example_text": "学校で新しい決まりが作られた",
                "furigana": "学校（がっこう）あたらきつくられた",
                "meaning_vi": "Quy định mới được thiết lập ở trường học.",
                "meaning_en": "A new rule was created at school"
              }
            ],
            "lesson_number": 17
          },
          {
            "vocab": "騒ぎ",
            "furigana": "さわぎ",
            "meaning_vi": "Làm ồn",
            "meaning_en": "Noise",
            "examples": [
              {
                "example_text": "きのう、駅前で騒ぎがあった",
                "furigana": "きのう、駅前（えきまえ）さわぎがあった",
                "meaning_vi": "Hôm qua, trước nhà ga đã có một cuộc náo loạn.",
                "meaning_en": "Yesterday, there was a fuss in front of the station."
              }
            ],
            "lesson_number": 17
          },
          {
            "vocab": "知らせ",
            "furigana": "しらせ",
            "meaning_vi": "Hãy cho tôi biết",
            "meaning_en": "Please tell me",
            "examples": [
              {
                "example_text": "父が入院したという知らせがあった",
                "furigana": "父（ちち）にゅういんしらせがあった",
                "meaning_vi": "Có thông báo rằng bố tôi đã nhập viện.",
                "meaning_en": "There was news that my father was hospitalized."
              }
            ],
            "lesson_number": 17
          },
          {
            "vocab": "頼み",
            "furigana": "たのみ",
            "meaning_vi": "Vui lòng",
            "meaning_en": "Please",
            "examples": [
              {
                "example_text": "「あなたに頼みがあるんです」",
                "furigana": "「あなたに頼（たの）みがあるんです」",
                "meaning_vi": "\"Tôi có một việc muốn nhờ anh.\"",
                "meaning_en": "\"I have a request from you.\""
              }
            ],
            "lesson_number": 17
          },
          {
            "vocab": "疲れ",
            "furigana": "つかれ",
            "meaning_vi": "Mệt",
            "meaning_en": "Tired",
            "examples": [
              {
                "example_text": "仕事で疲れがたまっている",
                "furigana": "仕事（しごと）つかれがたまっている",
                "meaning_vi": "Mệt mỏi chất chồng bởi công việc.",
                "meaning_en": "I'm tired from work"
              }
            ],
            "lesson_number": 17
          },
          {
            "vocab": "違い",
            "furigana": "ちがい",
            "meaning_vi": "sự khác biệt",
            "meaning_en": "difference",
            "examples": [
              {
                "example_text": "この二つの違いがわからない",
                "furigana": "この二（ふた）ちがいがわからない",
                "meaning_vi": "Tôi không biết sự khác biệt giữa hai cái này.",
                "meaning_en": "I don't know the difference between these two"
              }
            ],
            "lesson_number": 17
          },
          {
            "vocab": "始め",
            "furigana": "はじめ",
            "meaning_vi": "Người mới bắt đầu",
            "meaning_en": "Beginner",
            "examples": [
              {
                "example_text": "本を始めから終わりまで全部読んだ",
                "furigana": "本（ほん）はじおぜんぶよんだ",
                "meaning_vi": "Tôi đọc tất cả cuốn sách từ đầu đến cuối.",
                "meaning_en": "I read the whole book from start to finish"
              }
            ],
            "lesson_number": 17
          },
          {
            "vocab": "続き",
            "furigana": "つづき",
            "meaning_vi": "tiếp tục",
            "meaning_en": "continue",
            "examples": [
              {
                "example_text": "早く本の続きが読みたい",
                "furigana": "早（はや）ほんつづよみたい",
                "meaning_vi": "Tôi muốn sớm đọc đoạn tiếp theo của quyển sách.",
                "meaning_en": "I want to read the rest of the book soon"
              }
            ],
            "lesson_number": 17
          },
          {
            "vocab": "暮れ",
            "furigana": "くれ",
            "meaning_vi": "Hoàng hôn",
            "meaning_en": "Sunset",
            "examples": [
              {
                "example_text": "年の暮れは忙しい",
                "furigana": "年（とし）くいそがしい",
                "meaning_vi": "Cuối năm thì bận rộn.",
                "meaning_en": "I'm busy at the end of the year"
              }
            ],
            "lesson_number": 17
          },
          {
            "vocab": "行き",
            "furigana": "いき",
            "meaning_vi": "Đang đi",
            "meaning_en": "Go",
            "examples": [],
            "lesson_number": 17
          },
          {
            "vocab": "帰り",
            "furigana": "かえり",
            "meaning_vi": "trở lại",
            "meaning_en": "return",
            "examples": [
              {
                "example_text": "旅行は、行きは新幹線、帰りは飛行機だった",
                "furigana": "旅行（りょこう）いしんかんせんかえひこうきだった",
                "meaning_vi": "Chuyến lữ hành thì chiều đi đi bằng tàu Shinkansen, chiều về đi bằng máy bay.",
                "meaning_en": "On the trip, I went by bullet train and on the way back, I took a plane."
              }
            ],
            "lesson_number": 17
          },
          {
            "vocab": "急ぎ",
            "furigana": "いそぎ",
            "meaning_vi": "Sự vội vàng",
            "meaning_en": "Haste",
            "examples": [
              {
                "example_text": "急ぎの仕事が入った",
                "furigana": "急（いそ）しごとはいった",
                "meaning_vi": "Tôi có việc gấp.",
                "meaning_en": "I got a quick job"
              }
            ],
            "lesson_number": 17
          },
          {
            "vocab": "遅れ",
            "furigana": "おくれ",
            "meaning_vi": "trì hoãn",
            "meaning_en": "delay",
            "examples": [
              {
                "example_text": "電車に3分の遅れが出た",
                "furigana": "電車（でんしゃ）ぷんおくでた",
                "meaning_vi": "Tàu điện đã muộn 3 phút.",
                "meaning_en": "The train was delayed by 3 minutes"
              }
            ],
            "lesson_number": 17
          },
          {
            "vocab": "貸し",
            "furigana": "かし",
            "meaning_vi": "Cho thuê",
            "meaning_en": "Lease",
            "examples": [
              {
                "example_text": "あの人には10万円の貸しがある",
                "furigana": "あの人（ひと）まんえんかしがある",
                "meaning_vi": "Tôi cho người kia vay 10 man.",
                "meaning_en": "That person has a loan of 100,000 yen"
              }
            ],
            "lesson_number": 17
          },
          {
            "vocab": "借り",
            "furigana": "かり",
            "meaning_vi": "Vay mượn",
            "meaning_en": "Borrow",
            "examples": [
              {
                "example_text": "借りは返さなければならない",
                "furigana": "借（か）かえさなければならない",
                "meaning_vi": "Vay thì phải trả.",
                "meaning_en": "You have to pay back the debt"
              }
            ],
            "lesson_number": 17
          },
          {
            "vocab": "勝ち",
            "furigana": "かち",
            "meaning_vi": "Thắng",
            "meaning_en": "Win",
            "examples": [
              {
                "example_text": "きょうの試合はAチームの勝ちだった",
                "furigana": "きょうの試合（しあい）かちだった",
                "meaning_vi": "Trận đấu hôm nay đội A thắng.",
                "meaning_en": "Team A won today's match."
              }
            ],
            "lesson_number": 17
          },
          {
            "vocab": "負け",
            "furigana": "まけ",
            "meaning_vi": "Mất",
            "meaning_en": "Lost",
            "examples": [
              {
                "example_text": "負けが続いて、いやになった",
                "furigana": "負（ま）つづいて、いやになった",
                "meaning_vi": "Thấy khó chịu bởi thất bại liên tiếp.",
                "meaning_en": "The loss continued and it got disgusted"
              }
            ],
            "lesson_number": 17
          },
          {
            "vocab": "迎え",
            "furigana": "むかえ",
            "meaning_vi": "Chào mừng",
            "meaning_en": "Welcome",
            "examples": [
              {
                "example_text": "迎えの車がなかなか来ない",
                "furigana": "迎（むか）くるまこない",
                "meaning_vi": "Ô tô đến đón mãi chưa thấy tới.",
                "meaning_en": "The car to pick me up is not coming very often"
              }
            ],
            "lesson_number": 17
          },
          {
            "vocab": "始まり",
            "furigana": "はじまり",
            "meaning_vi": "Sự khởi đầu",
            "meaning_en": "Start",
            "examples": [
              {
                "example_text": "映画の始まりに間に合わなかった",
                "furigana": "映画（えいが）はじまあわなかった",
                "meaning_vi": "Đã không kịp xem bộ phim từ lúc mở màn.",
                "meaning_en": "I couldn't make it to the beginning of the movie"
              }
            ],
            "lesson_number": 17
          },
          {
            "vocab": "終わり",
            "furigana": "おわり",
            "meaning_vi": "kết thúc",
            "meaning_en": "end",
            "examples": [
              {
                "example_text": "夏休みはもうすぐ終わりだ",
                "furigana": "夏休（なつやす）おわりだ",
                "meaning_vi": "Kỳ nghỉ hè sắp kết thúc.",
                "meaning_en": "Summer vacation is almost over"
              }
            ],
            "lesson_number": 17
          },
          {
            "vocab": "戻り",
            "furigana": "もどり",
            "meaning_vi": "trở lại",
            "meaning_en": "return",
            "examples": [
              {
                "example_text": "「きょうの戻りは３時ごろになります」",
                "furigana": "「きょうの戻（もど）じごろになります」",
                "meaning_vi": "\"Hôm nay tôi quay lại lúc tầm 3 giờ.\"",
                "meaning_en": "\"Today's return will be around 3 o'clock.\""
              }
            ],
            "lesson_number": 17
          },
          {
            "vocab": "別れ",
            "furigana": "わかれ",
            "meaning_vi": "Tạm biệt",
            "meaning_en": "Goodbye",
            "examples": [
              {
                "example_text": "日本では3月は別れの季節だ",
                "furigana": "日本（にほん）げつわかきせつだ",
                "meaning_vi": "Ở Nhật , tháng 3 là mùa chia ly.",
                "meaning_en": "March is the season for farewells in Japan"
              }
            ],
            "lesson_number": 17
          },
          {
            "vocab": "喜び",
            "furigana": "よろこび",
            "meaning_vi": "vui sướng",
            "meaning_en": "funny",
            "examples": [
              {
                "example_text": "優勝できて、喜びでいっぱいだ",
                "furigana": "優勝（ゆうしょう）よろこびでいっぱいだ",
                "meaning_vi": "Đã giành chức vô địch, thật là tràn đầy niềm vui sướng.",
                "meaning_en": "I'm so happy to win"
              }
            ],
            "lesson_number": 17
          },
          {
            "vocab": "楽しみ",
            "furigana": "たのしみ",
            "meaning_vi": "vui vẻ",
            "meaning_en": "happy",
            "examples": [
              {
                "example_text": "来週のパーティー｛が楽しみだ／を楽しみにしている}",
                "furigana": "来週（らいしゅう）たのたのしみにしている}",
                "meaning_vi": "Mong đợi bữa tiệc tuần tới.",
                "meaning_en": "I'm looking forward to next week's party {I'm looking forward to it}"
              }
            ],
            "lesson_number": 17
          },
          {
            "vocab": "笑い",
            "furigana": "わらい",
            "meaning_vi": "CƯỜI",
            "meaning_en": "LAUGH",
            "examples": [
              {
                "example_text": "歌手の冗談で会場に笑いが起きた",
                "furigana": "歌手（かしゅ）じょうだんかいじょうわらおきた",
                "meaning_vi": "Cả hội trường dậy lên tiếng cười vì câu nói đùa của ca sỹ.",
                "meaning_en": "The singer's joke caused laughter in the audience"
              }
            ],
            "lesson_number": 17
          },
          {
            "vocab": "驚き",
            "furigana": "おどろき",
            "meaning_vi": "sự ngạc nhiên",
            "meaning_en": "surprise",
            "examples": [
              {
                "example_text": "この大きな家がたったの100万円とは驚きだ",
                "furigana": "この大（おお）いえまんえんおどろきだ",
                "meaning_vi": "Thật bất ngờ khi chỉ mất 1.000.000 yên để xây ngôi nhà to rộng này.",
                "meaning_en": "I'm surprised that this big house costs only 1 million yen."
              }
            ],
            "lesson_number": 17
          },
          {
            "vocab": "怒り",
            "furigana": "いかり",
            "meaning_vi": "sự tức giận",
            "meaning_en": "anger",
            "examples": [
              {
                "example_text": "殺人のニュースに怒りを感じた",
                "furigana": "殺人（さつじん）いかかんじた",
                "meaning_vi": "Tôi cảm thấy phẫn nộ trước tin tức về kẻ sát nhân.",
                "meaning_en": "I was angry at the news of the murder"
              }
            ],
            "lesson_number": 17
          },
          {
            "vocab": "悲しみ",
            "furigana": "かなしみ",
            "meaning_vi": "nỗi buồn",
            "meaning_en": "sorrow",
            "examples": [
              {
                "example_text": "愛犬を亡くした悲しみが消えない",
                "furigana": "愛犬（あいけん）なかなきえない",
                "meaning_vi": "Nỗi buồn về cái chết của chú chó cưng day dứt khôn nguôi.",
                "meaning_en": "The sadness of losing my beloved dog won't go away"
              }
            ],
            "lesson_number": 17
          },
          {
            "vocab": "幸せな",
            "furigana": "しあわせな",
            "meaning_vi": "Vui mừng",
            "meaning_en": "Delighted",
            "examples": [
              {
                "example_text": "幸せな人生",
                "furigana": "幸（しあわ）じんせい",
                "meaning_vi": "Sống hạnh phúc.",
                "meaning_en": "A happy life"
              }
            ],
            "lesson_number": 18
          },
          {
            "vocab": "得意な",
            "furigana": "とくいな",
            "meaning_vi": "Tôi giỏi nó",
            "meaning_en": "I'm good at it",
            "examples": [
              {
                "example_text": "彼女は｛ギター／作文／料理　…｝が得意だ",
                "furigana": "彼女（かのじょ）さくぶんりょうりとくいだ",
                "meaning_vi": "Cô ấy giỏi về {đàn guitar / viết văn / nấu ăn...}.",
                "meaning_en": "She's good at {guitar/writing/cooking...}"
              }
            ],
            "lesson_number": 18
          },
          {
            "vocab": "苦手な",
            "furigana": "にがてな",
            "meaning_vi": "Tôi không giỏi về nó",
            "meaning_en": "I am not good at it",
            "examples": [
              {
                "example_text": "彼女は｛ギター／作文／料理　…｝が苦手だ",
                "furigana": "彼女（かのじょ）さくぶんりょうりにがてだ",
                "meaning_vi": "Cô ấy không giỏi { đàn guitar / viết văn / nấu ăn ...}.",
                "meaning_en": "She's not good at {guitar/writing/cooking...}"
              }
            ],
            "lesson_number": 18
          },
          {
            "vocab": "熱心な",
            "furigana": "ねっしんな",
            "meaning_vi": "Người đam mê",
            "meaning_en": "Enthusiast",
            "examples": [
              {
                "example_text": "熱心な仕事ぶりが認められて昇進した",
                "furigana": "熱心（ねっしん）しごとみとしょうしんした",
                "meaning_vi": "Được ghi nhận sự nhiệt tình trong công việc và được thăng chức.",
                "meaning_en": "He was promoted after his enthusiastic workmanship was recognized."
              }
            ],
            "lesson_number": 18
          },
          {
            "vocab": "夢中な",
            "furigana": "むちゅうな",
            "meaning_vi": "Tôi điên",
            "meaning_en": "I'm crazy",
            "examples": [
              {
                "example_text": "子どものころ、SF漫画に夢中になった",
                "furigana": "子（こ）まんがむちゅうになった",
                "meaning_vi": "Hồi còn nhỏ, tôi say mê truyện tranh SF.",
                "meaning_en": "When I was a child, I was obsessed with science fiction manga."
              }
            ],
            "lesson_number": 18
          },
          {
            "vocab": "退屈な",
            "furigana": "たいくつな",
            "meaning_vi": "Nhạt nhẽo",
            "meaning_en": "Tasteless",
            "examples": [
              {
                "example_text": "ほかの観客は笑いながら見ていたが、私には退屈な映画だった",
                "furigana": "ほかの観客（かんきゃく）わらみわたしたいくつえいがだった",
                "meaning_vi": "Các khán giả khác vừa xem vừa cười, nhưng đó là một bộ phim nhàm chán đối với tôi .",
                "meaning_en": "The other audiences were laughing, but it was a boring movie for me."
              }
            ],
            "lesson_number": 18
          },
          {
            "vocab": "健康な",
            "furigana": "けんこうな",
            "meaning_vi": "Khỏe mạnh",
            "meaning_en": "Healthy",
            "examples": [
              {
                "example_text": "心も体も健康な子どもを育てたい",
                "furigana": "心（こころ）からだけんこうこそだてたい",
                "meaning_vi": "Tôi muốn nuôi dạy con khỏe mạnh cả thể chất lẫn tinh thần.",
                "meaning_en": "I want to raise healthy children both in their mind and body"
              }
            ],
            "lesson_number": 18
          },
          {
            "vocab": "苦しい",
            "furigana": "くるしい",
            "meaning_vi": "đau đớn",
            "meaning_en": "painful",
            "examples": [
              {
                "example_text": "｛息／胸／心／生活…｝が苦しい",
                "furigana": "｛息（いき）むねこころせいかつくるしい",
                "meaning_vi": "Hơi thở khó nhọc/ tức ngực/ khó chịu ở tim/ cuộc sống khổ cực…",
                "meaning_en": "{breath/chest/heart/life...} is painful"
              }
            ],
            "lesson_number": 18
          },
          {
            "vocab": "平気な",
            "furigana": "へいきな",
            "meaning_vi": "Không sao đâu",
            "meaning_en": "It's OK",
            "examples": [
              {
                "example_text": "彼女は、どんなに悪口を言われても平気な顔をしている",
                "furigana": "彼女（かのじょ）わるぐちいへいきかおをしている",
                "meaning_vi": "Dù cho  bị nói xấu đến mức nào thì, cô ấy vẫn luôn tỏ ra khuôn mặt bình tĩnh.",
                "meaning_en": "She looks unfairly swearing, no matter how bad he is being told"
              }
            ],
            "lesson_number": 18
          },
          {
            "vocab": "悔しい",
            "furigana": "くやしい",
            "meaning_vi": "Đáng tiếc",
            "meaning_en": "Unfortunate",
            "examples": [
              {
                "example_text": "何度練習してもうまくできなくて、悔しい",
                "furigana": "何度（なんど）れんしゅうくやしい",
                "meaning_vi": "Cảm thấy tiếc nuối vì dù luyện tập bao nhiêu vẫn không giỏi.",
                "meaning_en": "No matter how many times I practice, I can't do it well, so I'm disappointed"
              }
            ],
            "lesson_number": 18
          },
          {
            "vocab": "うらやましい",
            "furigana": "うらやましい",
            "meaning_vi": "Tôi ghen tị",
            "meaning_en": "I'm jealous",
            "examples": [
              {
                "example_text": "才能の豊かな人がうらやましい",
                "furigana": "才能（さいのう）ゆたひとがうらやましい",
                "meaning_vi": "Ghen tị với người có nhiều tài năng.",
                "meaning_en": "I envy people with great talent"
              }
            ],
            "lesson_number": 18
          },
          {
            "vocab": "かゆい",
            "furigana": "かゆい",
            "meaning_vi": "ngứa",
            "meaning_en": "itchy",
            "examples": [
              {
                "example_text": "蚊に刺されて首がかゆい",
                "furigana": "蚊（か）さくびがかゆい",
                "meaning_vi": "Cổ tôi bị ngứa do muỗi cắn.",
                "meaning_en": "My neck gets itchy after being bitten by a mosquito"
              }
            ],
            "lesson_number": 18
          },
          {
            "vocab": "おとなしい",
            "furigana": "おとなしい",
            "meaning_vi": "Im lặng",
            "meaning_en": "Silent",
            "examples": [
              {
                "example_text": "彼はおとなしい人だ",
                "furigana": "彼（かれ）ひとだ",
                "meaning_vi": "Anh ấy là một người trầm tính.",
                "meaning_en": "He's a quiet person"
              }
            ],
            "lesson_number": 19
          },
          {
            "vocab": "我慢強い",
            "furigana": "がまんづよい",
            "meaning_vi": "Tính kiên nhẫn",
            "meaning_en": "Patience",
            "examples": [
              {
                "example_text": "がまん強い性格",
                "furigana": "がまん強（つよ）せいかく",
                "meaning_vi": "Tiính cách nhẫn nạn, chịu đựng.",
                "meaning_en": "A strong personality"
              }
            ],
            "lesson_number": 19
          },
          {
            "vocab": "正直な",
            "furigana": "しょうじきな",
            "meaning_vi": "Trung thực",
            "meaning_en": "Honest",
            "examples": [
              {
                "example_text": "彼は正直な人だから、うそをつくことができない",
                "furigana": "彼（かれ）しょうじきひとだから、うそをつくことができない",
                "meaning_vi": "Anh ấy là người trung thực nên anh ấy không biết nói dối đâu.",
                "meaning_en": "He's an honest person so he can't lie."
              }
            ],
            "lesson_number": 19
          },
          {
            "vocab": "けちな",
            "furigana": "けちな",
            "meaning_vi": "Keo kiệt",
            "meaning_en": "Stingy",
            "examples": [
              {
                "example_text": "あの人はとてもけちだ",
                "furigana": "あの人（ひと）はとてもけちだ",
                "meaning_vi": "Người đó rất keo kiệt.",
                "meaning_en": "That person is very stingy"
              }
            ],
            "lesson_number": 19
          },
          {
            "vocab": "わがままな",
            "furigana": "わがままな",
            "meaning_vi": "Ích kỷ",
            "meaning_en": "Selfish",
            "examples": [
              {
                "example_text": "わがままな｛人／性格／行動　…｝",
                "furigana": "わがままな｛人（ひと）せいかくこうどう　…｝",
                "meaning_vi": "Người ích kỷ, tính cách ích kỷ, hành động ích kỷ…",
                "meaning_en": "Selfish {people/personality/behavior...}"
              }
            ],
            "lesson_number": 19
          },
          {
            "vocab": "積極的な",
            "furigana": "せっきょくてきな",
            "meaning_vi": "Chủ động",
            "meaning_en": "Active",
            "examples": [
              {
                "example_text": "積極的な｛人／性格／行動　…｝",
                "furigana": "積極的（せっきょくてき）ひとせいかくこうどう　…｝",
                "meaning_vi": "{Người / cá tính / hành vi ...} mang tính tích cực.",
                "meaning_en": "Proactive {people/personality/behavior...}"
              }
            ],
            "lesson_number": 19
          },
          {
            "vocab": "消極的な",
            "furigana": "しょうきょくてきな",
            "meaning_vi": "Miễn cưỡng",
            "meaning_en": "Reluctant",
            "examples": [
              {
                "example_text": "消極的な　{人／性格　…}",
                "furigana": "消極的（しょうきょくてき）ひとせいかく　…}",
                "meaning_vi": "Con người thụ động/ tính cách tiêu cực…",
                "meaning_en": "Passive {person/personality...}"
              }
            ],
            "lesson_number": 19
          },
          {
            "vocab": "満足な",
            "furigana": "まんぞくな",
            "meaning_vi": "Thỏa mãn",
            "meaning_en": "Satisfaction",
            "examples": [
              {
                "example_text": "アルバイトだけでは満足な収入は得られない",
                "furigana": "アルバイトだけでは満足（まんぞく）しゅうにゅうえられない",
                "meaning_vi": "Chỉ làm thêm thôi thì không thể nhận mức lương ưng ý được.",
                "meaning_en": "Part-time jobs alone won't give you a satisfactory income"
              }
            ],
            "lesson_number": 19
          },
          {
            "vocab": "不満な",
            "furigana": "ふまんな",
            "meaning_vi": "Không hài lòng",
            "meaning_en": "Dissatisfied",
            "examples": [
              {
                "example_text": "この仕事に不満な点はない",
                "furigana": "この仕事（しごと）ふまんてんはない",
                "meaning_vi": "Tôi không có điểm nào để chê về công việc này cả.",
                "meaning_en": "I have no complaints about this job"
              }
            ],
            "lesson_number": 19
          },
          {
            "vocab": "不安な",
            "furigana": "ふあんな",
            "meaning_vi": "Lo lắng",
            "meaning_en": "Worry",
            "examples": [
              {
                "example_text": "最近、体の調子がよくない。悪い病気ではないかと不安だ",
                "furigana": "最近（さいきん）からだちょうしわるびょうきふあんだ",
                "meaning_vi": "Thời gian gần đây, tình trạng cơ thể không tốt. Tôi đang lo không biết có bệnh gì xấu không.",
                "meaning_en": "I've been feeling unwell lately. I'm worried that it might be a bad disease"
              }
            ],
            "lesson_number": 19
          },
          {
            "vocab": "大変な",
            "furigana": "たいへんな",
            "meaning_vi": "Thật khó khăn",
            "meaning_en": "It is difficult",
            "examples": [
              {
                "example_text": "子育て中のお母さんは大変だ",
                "furigana": "子育（こそだ）ちゅうかあたいへんだ",
                "meaning_vi": "Người mẹ vất vả trong quá trình nuôi dạy con cái.",
                "meaning_en": "It's hard for moms raising children"
              }
            ],
            "lesson_number": 19
          },
          {
            "vocab": "無理な",
            "furigana": "むりな",
            "meaning_vi": "Nó là không thể",
            "meaning_en": "It is impossible",
            "examples": [
              {
                "example_text": "たった１００万円で家を建てるなんて無理な話だ",
                "furigana": "たった１００万円（まんえん）いえたむりはなしだ",
                "meaning_vi": "Xây nhà chỉ với 100 vạn yên thật là câu chuyện vô lý.",
                "meaning_en": "It's impossible to build a house for just 1 million yen."
              }
            ],
            "lesson_number": 20
          },
          {
            "vocab": "不注意な",
            "furigana": "ふちゅういな",
            "meaning_vi": "Bất cẩn",
            "meaning_en": "Careless",
            "examples": [
              {
                "example_text": "不注意な人",
                "furigana": "不注意（ふちゅうい）ひと",
                "meaning_vi": "Người cẩu thả (mất tập trung).",
                "meaning_en": "Careless person"
              }
            ],
            "lesson_number": 20
          },
          {
            "vocab": "楽な",
            "furigana": "らくな",
            "meaning_vi": "Dễ",
            "meaning_en": "Easy",
            "examples": [
              {
                "example_text": "もう少し楽な暮らしがしたい",
                "furigana": "もう少（すこ）らくくらしがしたい",
                "meaning_vi": "Muốn sống một cuộc sống an nhàn hơn chút nữa.",
                "meaning_en": "I want to live a little easier"
              }
            ],
            "lesson_number": 20
          },
          {
            "vocab": "面倒な",
            "furigana": "めんどうな",
            "meaning_vi": "Nó là rắc rối",
            "meaning_en": "It is trouble",
            "examples": [
              {
                "example_text": "「ご入会にはめんどうな手続きはいりません」",
                "furigana": "「ご入会（にゅうかい）てつづきはいりません」",
                "meaning_vi": "\"Khi nhập hội thì không cần làm mấy thủ tục rắc rối đâu\" .",
                "meaning_en": "\"There are no complicated procedures to join.\""
              }
            ],
            "lesson_number": 20
          },
          {
            "vocab": "失礼な",
            "furigana": "しつれいな",
            "meaning_vi": "Xin lỗi",
            "meaning_en": "Sorry",
            "examples": [
              {
                "example_text": "あいさつしても返事もしない。なんて失礼な人だろう",
                "furigana": "あいさつしても返事（へんじ）しつれいひとだろう",
                "meaning_vi": "Chào hỏi rồi mà không thèm trả lời. Đúng là người vô lễ.",
                "meaning_en": "Even when I greet him, he doesn't respond. What a rude person"
              }
            ],
            "lesson_number": 20
          },
          {
            "vocab": "当然な",
            "furigana": "とうぜんな",
            "meaning_vi": "Tất nhiên rồi",
            "meaning_en": "Of course",
            "examples": [
              {
                "example_text": "お金を借りたら、返すのが当然だ",
                "furigana": "お金（かね）かかえとうぜんだ",
                "meaning_vi": "Nếu mượn tiền thì đương nhiên phải trả.",
                "meaning_en": "If you borrow money, it's only natural to pay it back."
              }
            ],
            "lesson_number": 20
          },
          {
            "vocab": "意外な",
            "furigana": "いがいな",
            "meaning_vi": "Đáng ngạc nhiên",
            "meaning_en": "Surprisingly",
            "examples": [
              {
                "example_text": "事故を調査するうちに意外な事実がわかった",
                "furigana": "事故（じこ）ちょうさいがいじじつがわかった",
                "meaning_vi": "Trong khi điều tra vụ tai nạn tôi đã biết sự thật bất ngờ.",
                "meaning_en": "As I investigated the accident, I discovered some surprising facts."
              }
            ],
            "lesson_number": 20
          },
          {
            "vocab": "結構な",
            "furigana": "けっこうな",
            "meaning_vi": "Khá khá nhiều",
            "meaning_en": "Quite a lot",
            "examples": [
              {
                "example_text": "「お味はいかがですか」「大変けっこうです」",
                "furigana": "「お味（あじ）たいへんけっこうです」",
                "meaning_vi": "\"Mùi vị thế nào\" \"Rất ngon.\"",
                "meaning_en": "\"How about the taste?\" \"It's quite good.\""
              }
            ],
            "lesson_number": 20
          },
          {
            "vocab": "派手な",
            "furigana": "はでな",
            "meaning_vi": "Tuyệt vời",
            "meaning_en": "Great",
            "examples": [
              {
                "example_text": "はでな｛人／性格／服／化粧／デザイン／生活　…｝",
                "furigana": "はでな｛人（ひと）せいかくふくけしょうせいかつ　…｝",
                "meaning_vi": "{người / tính cách / quần áo / trang điểm / thiết kế / cuộc sống ...} đồng bóng, màu mè, phong cách, hào nhoáng.",
                "meaning_en": "Hadena {People/Personality/Clothing/Makeup/Design/Life...}"
              }
            ],
            "lesson_number": 20
          },
          {
            "vocab": "地味な",
            "furigana": "じみな",
            "meaning_vi": "Tỉnh táo",
            "meaning_en": "Conscious",
            "examples": [
              {
                "example_text": "じみな｛人／性格／服／化粧／デザイン／生活　…｝",
                "furigana": "じみな｛人／性格／服／化粧／デザイン／生活　…｝",
                "meaning_vi": "{người / cá / quần áo / trang điểm / thiết kế / cuộc sống ...} giản dị.",
                "meaning_en": "A familiar {people/personality/clothes/makeup/design/life...}"
              }
            ],
            "lesson_number": 20
          },
          {
            "vocab": "おしゃれな",
            "furigana": "おしゃれな",
            "meaning_vi": "Thời trang",
            "meaning_en": "Fashion",
            "examples": [
              {
                "example_text": "彼女はとてもおしゃれだ",
                "furigana": "彼女（かのじょ）はとてもおしゃれだ",
                "meaning_vi": "Cô ấy ăn mặc rất thời trang.",
                "meaning_en": "She's very stylish"
              }
            ],
            "lesson_number": 21
          },
          {
            "vocab": "変な",
            "furigana": "へんな",
            "meaning_vi": "Lạ lùng",
            "meaning_en": "Strange",
            "examples": [
              {
                "example_text": "変なメールが届いたのですぐに消した",
                "furigana": "変（へん）とどけした",
                "meaning_vi": "Có mail lạ gửi đến nên tôi đã xóa ngay rồi.",
                "meaning_en": "I received a strange email so I deleted it right away."
              }
            ],
            "lesson_number": 21
          },
          {
            "vocab": "不思議な",
            "furigana": "ふしぎな",
            "meaning_vi": "Lạ lùng",
            "meaning_en": "Strange",
            "examples": [
              {
                "example_text": "この村には不思議な話が伝わっている",
                "furigana": "この村（むら）ふしぎはなしつたわっている",
                "meaning_vi": "Ở làng này truyền tai nhau một câu chuyện kì lạ.",
                "meaning_en": "There's a strange story behind this village"
              }
            ],
            "lesson_number": 21
          },
          {
            "vocab": "ましな",
            "furigana": "ましな",
            "meaning_vi": "Tốt",
            "meaning_en": "Good",
            "examples": [
              {
                "example_text": "せきがひどかったが、うがいをしたら前よりましになった",
                "furigana": "せきがひどかったが、うがいをしたら前（まえ）よりましになった",
                "meaning_vi": "Ho nhiều nhưng khi súc miệng thì đã đỡ hơn trước rồi.",
                "meaning_en": "The cough was terrible, but when I gargled it, it turned out better than before."
              }
            ],
            "lesson_number": 21
          },
          {
            "vocab": "むだな",
            "furigana": "むだな",
            "meaning_vi": "Nó vô dụng",
            "meaning_en": "It is useless",
            "examples": [
              {
                "example_text": "落ちるとわかっているのに試験を受けるのは、むだなことだ",
                "furigana": "落（お）しけんうけるのは、むだなことだ",
                "meaning_vi": "Dù biết là trượt mà vẫn dự thi thì thật là vô ích.",
                "meaning_en": "It's a waste to take the exam even though you know you'll fail."
              }
            ],
            "lesson_number": 21
          },
          {
            "vocab": "自由な",
            "furigana": "じゆうな",
            "meaning_vi": "Miễn phí",
            "meaning_en": "Free of charge",
            "examples": [
              {
                "example_text": "赤ちゃんがいるので、自由な時間がほとんどない",
                "furigana": "赤（あか）じゆうじかんがほとんどない",
                "meaning_vi": "Vì có em bé nên hầu như không có thời gian rảnh.",
                "meaning_en": "There's a baby so there's very little free time"
              }
            ],
            "lesson_number": 21
          },
          {
            "vocab": "不自由な",
            "furigana": "ふじゆうな",
            "meaning_vi": "Không giải quyết được",
            "meaning_en": "Inseparable",
            "examples": [
              {
                "example_text": "目／耳／足／体　…｝が不自由な人",
                "furigana": "目（め）みみあしからだふじゆうひと",
                "meaning_vi": "Người {khiếm thị/khiếm thính/tàn tật chân/tàn tật…}.",
                "meaning_en": "People with disabilities in eyes/ears/foots/body..."
              }
            ],
            "lesson_number": 21
          },
          {
            "vocab": "暖まる/温まる",
            "furigana": "あたたまる/あたたまる",
            "meaning_vi": "Ấm áp/ấm áp",
            "meaning_en": "Warm/Warm",
            "examples": [
              {
                "example_text": "お風呂に入ると体が　｛暖／温｝まる",
                "furigana": "お風呂（ふろ）はいからだあたたあたた｝まる",
                "meaning_vi": "Tắm bồn thì cơ thể sẽ dần dần ấm lên.",
                "meaning_en": "When I take a bath, my body gets warmer"
              }
            ],
            "lesson_number": 22
          },
          {
            "vocab": "暖める/温める",
            "furigana": "あたためる/あたためる",
            "meaning_vi": "Ấm áp/ấm áp",
            "meaning_en": "Warm/Warm",
            "examples": [
              {
                "example_text": "エアコンをつけて部屋を暖める",
                "furigana": "エアコンをつけて部屋（へや）あたためる",
                "meaning_vi": "Bật điều hòa làm ấm phòng.",
                "meaning_en": "Turn on the air conditioner and warm the room"
              }
            ],
            "lesson_number": 22
          },
          {
            "vocab": "高まる",
            "furigana": "たかまる",
            "meaning_vi": "Nó ngày càng cao",
            "meaning_en": "It is getting higher and higher",
            "examples": [
              {
                "example_text": "台風が近づき、波が高まっている",
                "furigana": "台風（たいふう）ちかなみたかまっている",
                "meaning_vi": "Bão đến gần, sóng đang dân lên.",
                "meaning_en": "The typhoon is approaching and the waves are rising"
              }
            ],
            "lesson_number": 22
          },
          {
            "vocab": "高める",
            "furigana": "たかめる",
            "meaning_vi": "Tăng",
            "meaning_en": "Increase",
            "examples": [
              {
                "example_text": "若者はもっとコミュニケーション能力を高める必要がある",
                "furigana": "若者（わかもの）のうりょくたかひつようがある",
                "meaning_vi": "Giới trẻ cần nâng cao khả năng giao tiếp hơn nữa.",
                "meaning_en": "Young people need to improve their communication skills"
              }
            ],
            "lesson_number": 22
          },
          {
            "vocab": "強まる",
            "furigana": "つよまる",
            "meaning_vi": "Trở nên mạnh mẽ hơn",
            "meaning_en": "Become stronger",
            "examples": [
              {
                "example_text": "台風の勢力はますます強まっている",
                "furigana": "台風（たいふう）せいりょくつよまっている",
                "meaning_vi": "Ảnh hưởng của cơn bão đang mạnh dần lên.",
                "meaning_en": "The typhoon power is getting stronger"
              }
            ],
            "lesson_number": 22
          },
          {
            "vocab": "強める",
            "furigana": "つよめる",
            "meaning_vi": "tăng tốc lên",
            "meaning_en": "accelerate",
            "examples": [
              {
                "example_text": "｛火／力／自信　…｝を強める",
                "furigana": "｛火（ひ）ちからじしんつよめる",
                "meaning_vi": "Làm lớn lửa/ Tăng cường sức lực/ Làm tăng sự tự tin.",
                "meaning_en": "Strengthen {Fire/Strength/Confidence...}"
              }
            ],
            "lesson_number": 22
          },
          {
            "vocab": "弱まる",
            "furigana": "よわまる",
            "meaning_vi": "Nó suy yếu",
            "meaning_en": "It weakens",
            "examples": [
              {
                "example_text": "疲れていると抵抗力が弱まって、かぜにかかりやすくなる",
                "furigana": "疲（つか）ていこうりょくよわまって、かぜにかかりやすくなる",
                "meaning_vi": "Mệt mỏi thì sức đề kháng bị suy yếu, trở nên rất dễ bị cảm.",
                "meaning_en": "When you're tired, your resistance weakens and you become more prone to colds"
              }
            ],
            "lesson_number": 22
          },
          {
            "vocab": "弱める",
            "furigana": "よわめる",
            "meaning_vi": "Yếu nó",
            "meaning_en": "Weak it",
            "examples": [
              {
                "example_text": "「材料がやわらかくなったら、火を弱めてゆっくり煮込んでください」",
                "furigana": "「材料（ざいりょう）ひよわにこんでください」",
                "meaning_vi": "Khi đồ mềm rồi thì vặn nhỏ lửa lại rồi cứ từ từ ninh.",
                "meaning_en": "\"When the ingredients become soft, reduce the heat and simmer slowly.\""
              }
            ],
            "lesson_number": 22
          },
          {
            "vocab": "広まる",
            "furigana": "ひろまる",
            "meaning_vi": "lây lan",
            "meaning_en": "spread",
            "examples": [
              {
                "example_text": "そのうわさは１日で会社中に広まった",
                "furigana": "そのうわさは１日（にち）かいしゃじゅうひろまった",
                "meaning_vi": "Tin đồn đó lan khắp công ty chỉ trong 1 ngày.",
                "meaning_en": "The rumor spread throughout the office in just one day."
              }
            ],
            "lesson_number": 22
          },
          {
            "vocab": "広める",
            "furigana": "ひろめる",
            "meaning_vi": "Lan truyền nó",
            "meaning_en": "Spread it",
            "examples": [
              {
                "example_text": "明治時代に、ヨーロッパから帰国した留学生たちが、日本に西洋文化を広めた",
                "furigana": "明治（めいじ）じだいきこくりゅうがくせいにほんせいようぶんかひろめた",
                "meaning_vi": "Vào thời Minh Trị, học sinh sinh viên du học từ Châu Âu về đã làm cho văn hóa phương Tây lan rộng tại Nhật.",
                "meaning_en": "During the Meiji period, international students who returned from Europe spread Western culture to Japan."
              }
            ],
            "lesson_number": 22
          },
          {
            "vocab": "深まる",
            "furigana": "ふかまる",
            "meaning_vi": "Đào sâu",
            "meaning_en": "Deepen",
            "examples": [
              {
                "example_text": "子どもができて、二人の愛情はますます深まった",
                "furigana": "子（こ）ふたりあいじょうふかまった",
                "meaning_vi": "Có con rồi, tình cảm của 2 người càng ngày càng sâu sắc hơn.",
                "meaning_en": "Having children has grown stronger and deeper love between them"
              }
            ],
            "lesson_number": 22
          },
          {
            "vocab": "深める",
            "furigana": "ふかめる",
            "meaning_vi": "đào sâu",
            "meaning_en": "deepen",
            "examples": [
              {
                "example_text": "交流を深め、相手の国のことを理解することが大切だ",
                "furigana": "交流（こうりゅう）ふかあいてくにりかいたいせつだ",
                "meaning_vi": "Việc tăng cường giao lưu và hiểu biết nước bạn là điều quan trọng.",
                "meaning_en": "It is important to deepen your interactions and understand the other country."
              }
            ],
            "lesson_number": 22
          },
          {
            "vocab": "世話",
            "furigana": "せわ",
            "meaning_vi": "sự chăm sóc",
            "meaning_en": "care",
            "examples": [
              {
                "example_text": "うちではペットの世話は私の仕事だ",
                "furigana": "うちではペットの世話（せわ）わたししごとだ",
                "meaning_vi": "Ở nhà việc chăm sóc thú nuôi là công việc của tôi.",
                "meaning_en": "Care for pets is my job at home"
              }
            ],
            "lesson_number": 23
          },
          {
            "vocab": "家庭",
            "furigana": "かてい",
            "meaning_vi": "gia đình",
            "meaning_en": "family",
            "examples": [
              {
                "example_text": "NARUTO課長は仕事ではきびしいが、家庭ではやさしいお父さんだそうだ",
                "furigana": "NARUTO課長（かちょう）しごとかていとうさんだそうだ",
                "meaning_vi": "Trưởng phòng Tanaka là một người nghiêm khắc khi làm việc nhưng nghe nói ở nhà ngài ấy lại là một người cha dễ tính.",
                "meaning_en": "The NARUTO section chief is strict at work, but he is a friendly father at home."
              }
            ],
            "lesson_number": 23
          },
          {
            "vocab": "協力",
            "furigana": "きょうりょく",
            "meaning_vi": "sự hợp tác",
            "meaning_en": "cooperation",
            "examples": [
              {
                "example_text": "家族で協力して祖母の介護をした",
                "furigana": "家族（かぞく）きょうりょくそぼかいごをした",
                "meaning_vi": "Gia đình cùng đồng lòng chăm sóc bà.",
                "meaning_en": "The family worked together to care for my grandmother"
              }
            ],
            "lesson_number": 23
          },
          {
            "vocab": "感謝",
            "furigana": "かんしゃ",
            "meaning_vi": "tri ân",
            "meaning_en": "grateful",
            "examples": [
              {
                "example_text": "アドバイスしてれた先輩に、とても感謝している",
                "furigana": "アドバイスしてれた先輩（せんぱい）かんしゃしている",
                "meaning_vi": "Tôi rất biết ơn tiền bối đã cho tôi lời khuyên.",
                "meaning_en": "I am very grateful to my senior who gave me advice."
              }
            ],
            "lesson_number": 23
          },
          {
            "vocab": "（お）礼",
            "furigana": "おれい",
            "meaning_vi": "(O)",
            "meaning_en": "(O)",
            "examples": [
              {
                "example_text": "お世話になった方にお礼をした",
                "furigana": "お世話（せわ）かたれいをした",
                "meaning_vi": "Tôi đã tạ ơn người đã giúp đỡ tôi.",
                "meaning_en": "Thank you to those who helped me"
              }
            ],
            "lesson_number": 23
          },
          {
            "vocab": "（お）侘び",
            "furigana": "おわび",
            "meaning_vi": "(O)",
            "meaning_en": "(O)",
            "examples": [
              {
                "example_text": "迷惑をかけた人におわびをした",
                "furigana": "迷惑（めいわく）ひとにおわびをした",
                "meaning_vi": "Tôi đã xin lỗi người mà tôi gây rắc rối.",
                "meaning_en": "I apologized to those who caused trouble"
              }
            ],
            "lesson_number": 23
          },
          {
            "vocab": "（お）じぎ",
            "furigana": "（お）じぎ",
            "meaning_vi": "(O)",
            "meaning_en": "(O)",
            "examples": [
              {
                "example_text": "「お客様にはていねいにおじぎをしましょう」",
                "furigana": "「お客様（きゃくさま）にはていねいにおじぎをしましょう」",
                "meaning_vi": "\"Hãy lễ phép cúi chào khách hàng.\"",
                "meaning_en": "\"Let's bow carefully to our customers.\""
              }
            ],
            "lesson_number": 23
          },
          {
            "vocab": "握手",
            "furigana": "あくしゅ",
            "meaning_vi": "bắt tay",
            "meaning_en": "shake hands",
            "examples": [
              {
                "example_text": "コンサートで歌手と握手した",
                "furigana": "コンサートで歌手（かしゅ）あくしゅした",
                "meaning_vi": "Tôi đã bắt tay với ca sĩ ở buổi hòa nhạc.",
                "meaning_en": "Shaking hands with the singer at the concert"
              }
            ],
            "lesson_number": 23
          },
          {
            "vocab": "意地悪",
            "furigana": "いじわる",
            "meaning_vi": "Sự lộn xộn",
            "meaning_en": "Mess",
            "examples": [
              {
                "example_text": "好きな子にはついいじわるしてしまう",
                "furigana": "好（す）こにはついいじわるしてしまう",
                "meaning_vi": "Tôi đã lỡ làm đứa bé tôi thích giận mất rồi.",
                "meaning_en": "I'll be mischievous to the girl I like"
              }
            ],
            "lesson_number": 23
          },
          {
            "vocab": "いたずら",
            "furigana": "いたずら",
            "meaning_vi": "nghịch ngợm",
            "meaning_en": "naughty",
            "examples": [
              {
                "example_text": "いたずらをして、先生に怒られた",
                "furigana": "いたずらをして、先生（せんせい）おこられた",
                "meaning_vi": "Tôi nghịch ngợm và bị thầy mắng.",
                "meaning_en": "I was mad at the teacher for playing a prank"
              }
            ],
            "lesson_number": 23
          },
          {
            "vocab": "節約",
            "furigana": "せつやく",
            "meaning_vi": "cứu",
            "meaning_en": "rescue",
            "examples": [
              {
                "example_text": "生活費の節約",
                "furigana": "生活費（せいかつひ）せつやく",
                "meaning_vi": "Tiết kiệm phí sinh hoạt.",
                "meaning_en": "Savings on living expenses"
              }
            ],
            "lesson_number": 23
          },
          {
            "vocab": "経営",
            "furigana": "けいえい",
            "meaning_vi": "sự quản lý",
            "meaning_en": "management",
            "examples": [
              {
                "example_text": "父はスーパーを経営している",
                "furigana": "父（ちち）けいえいしている",
                "meaning_vi": "Bố tôi đang quản lí một siêu thị.",
                "meaning_en": "My father runs a supermarket"
              }
            ],
            "lesson_number": 23
          },
          {
            "vocab": "反省",
            "furigana": "はんせい",
            "meaning_vi": "hướng nội",
            "meaning_en": "introverted",
            "examples": [
              {
                "example_text": "1日の反省を日記に書く",
                "furigana": "1日（にち）はんせいにっきかく",
                "meaning_vi": "Tôi viết nhật kí xem sét lại những việc đã làm trong 1 ngày.",
                "meaning_en": "Write down your daily regrets in your diary"
              }
            ],
            "lesson_number": 23
          },
          {
            "vocab": "実行",
            "furigana": "じっこう",
            "meaning_vi": "thực thi",
            "meaning_en": "enforcement",
            "examples": [
              {
                "example_text": "この計画は実行が難しい",
                "furigana": "この計画（けいかく）じっこうむずかしい",
                "meaning_vi": "Kế hoạch này thực hiện rất khó.",
                "meaning_en": "This plan is difficult to implement"
              }
            ],
            "lesson_number": 23
          },
          {
            "vocab": "進歩",
            "furigana": "しんぽ",
            "meaning_vi": "Tiến triển",
            "meaning_en": "Evolution",
            "examples": [
              {
                "example_text": "英語を勉強しているが、進歩がない",
                "furigana": "英語（えいご）べんきょうしんぽがない",
                "meaning_vi": "Tôi đang học tiếng Anh nhưng không tiến bộ mấy.",
                "meaning_en": "I'm studying English but I haven't made any progress"
              }
            ],
            "lesson_number": 23
          },
          {
            "vocab": "変化",
            "furigana": "へんか",
            "meaning_vi": "thay đổi",
            "meaning_en": "change",
            "examples": [
              {
                "example_text": "大きな変化",
                "furigana": "大（おお）へんか",
                "meaning_vi": "Sự thay đổi lớn.",
                "meaning_en": "Big change"
              }
            ],
            "lesson_number": 23
          },
          {
            "vocab": "発達",
            "furigana": "はったつ",
            "meaning_vi": "phát triển",
            "meaning_en": "develop",
            "examples": [
              {
                "example_text": "体や心が発達する",
                "furigana": "体（からだ）こころはったつする",
                "meaning_vi": "Cơ thể, tâm hồn phát triển.",
                "meaning_en": "The body and mind develop"
              }
            ],
            "lesson_number": 24
          },
          {
            "vocab": "体力",
            "furigana": "たいりょく",
            "meaning_vi": "Thể lực thể chất",
            "meaning_en": "Physical physical physical",
            "examples": [
              {
                "example_text": "若者の体力が低下している",
                "furigana": "若者（わかもの）たいりょくていかしている",
                "meaning_vi": "Thể lực của giới trẻ đang giảm đi.",
                "meaning_en": "Young people are losing their physical strength"
              }
            ],
            "lesson_number": 24
          },
          {
            "vocab": "出場",
            "furigana": "しゅつじょう",
            "meaning_vi": "Sự tham gia",
            "meaning_en": "Participation",
            "examples": [
              {
                "example_text": "オリンピックへの出場が決まった",
                "furigana": "オリンピックへの出場（しゅつじょう）きまった",
                "meaning_vi": "Việc tham dự Olympic đã được quyết định.",
                "meaning_en": "He has been selected to compete in the Olympics"
              }
            ],
            "lesson_number": 24
          },
          {
            "vocab": "活躍",
            "furigana": "かつやく",
            "meaning_vi": "Tích cực",
            "meaning_en": "Positive",
            "examples": [
              {
                "example_text": "NARUTO選手の活躍を期待する",
                "furigana": "NARUTO選手（せんしゅ）かつやくきたいする",
                "meaning_vi": "Tôi kì vọng vào màn trình diễn của tuyển thủ Tanaka.",
                "meaning_en": "I look forward to the success of NARUTO players"
              }
            ],
            "lesson_number": 24
          },
          {
            "vocab": "競争",
            "furigana": "きょうそう",
            "meaning_vi": "cuộc thi",
            "meaning_en": "competition",
            "examples": [
              {
                "example_text": "どちらがいい成績を取るか、友だちと競争した",
                "furigana": "どちらがいい成績（せいせき）とともきょうそうした",
                "meaning_vi": "Tôi đã thi đấu với bạn xem bên nào sẽ dành được thành tích tốt hơn.",
                "meaning_en": "I competed with my friends to see which one would get better results."
              }
            ],
            "lesson_number": 24
          },
          {
            "vocab": "応援",
            "furigana": "おうえん",
            "meaning_vi": "ủng hộ",
            "meaning_en": "donate",
            "examples": [
              {
                "example_text": "自分の学校のチームを応援する",
                "furigana": "自分（じぶん）がっこうおうえんする",
                "meaning_vi": "Cỗ vũ cho đội của trường mình.",
                "meaning_en": "Support your school team"
              }
            ],
            "lesson_number": 24
          },
          {
            "vocab": "拍手",
            "furigana": "はくしゅ",
            "meaning_vi": "vỗ tay",
            "meaning_en": "clap",
            "examples": [
              {
                "example_text": "ステージの歌手に拍手をする",
                "furigana": "ステージの歌手（かしゅ）はくしゅをする",
                "meaning_vi": "Vỗ tay cỗ vũ cho ca sĩ trên sân khấu.",
                "meaning_en": "Applause to the singer on stage"
              }
            ],
            "lesson_number": 24
          },
          {
            "vocab": "人気",
            "furigana": "にんき",
            "meaning_vi": "Sự phổ biến",
            "meaning_en": "Dissemination",
            "examples": [
              {
                "example_text": "彼はクラスで一番人気がある",
                "furigana": "彼（かれ）いちばんにんきがある",
                "meaning_vi": "Anh ấy được yêu thích nhất lớp.",
                "meaning_en": "He is the most popular in the class"
              }
            ],
            "lesson_number": 24
          },
          {
            "vocab": "うわさ",
            "furigana": "うわさ",
            "meaning_vi": "Tin đồn",
            "meaning_en": "Rumor",
            "examples": [
              {
                "example_text": "クラスメートのうわさをしていたら、そこに本人が現れた",
                "furigana": "クラスメートのうわさをしていたら、そこに本人（ほんにん）あらわれた",
                "meaning_vi": "Cậu ấy đến và phát hiện ra mọi người đang lan truyền tin đồn về mình.",
                "meaning_en": "While I was rumouring about my classmate, I saw him appear there."
              }
            ],
            "lesson_number": 24
          },
          {
            "vocab": "情報",
            "furigana": "じょうほう",
            "meaning_vi": "thông tin",
            "meaning_en": "information",
            "examples": [
              {
                "example_text": "テレビからいろいろな情報を得る",
                "furigana": "テレビからいろいろな情報（じょうほう）える",
                "meaning_vi": "Có được nhiều thông tin từ Tivi.",
                "meaning_en": "Get a variety of information from the TV"
              }
            ],
            "lesson_number": 24
          },
          {
            "vocab": "交換",
            "furigana": "こうかん",
            "meaning_vi": "trao đổi",
            "meaning_en": "exchange",
            "examples": [
              {
                "example_text": "｛プレゼント／名刺／情報／意見　…｝を交換する",
                "furigana": "｛プレゼント／名刺（めいし）じょうほういけんこうかんする",
                "meaning_vi": "Trao đổi quà, danh thiếp, thông tin, ý kiến…",
                "meaning_en": "Exchange {Gifts/Business Cards/Information/Opinions...}"
              }
            ],
            "lesson_number": 24
          },
          {
            "vocab": "流行",
            "furigana": "りゅうこう",
            "meaning_vi": "Sự phổ biến",
            "meaning_en": "Dissemination",
            "examples": [
              {
                "example_text": "新しい流行",
                "furigana": "新（あたら）りゅうこう",
                "meaning_vi": "Trào lưu mới.",
                "meaning_en": "New trends"
              }
            ],
            "lesson_number": 24
          },
          {
            "vocab": "宣伝",
            "furigana": "せんでん",
            "meaning_vi": "Khuyến mãi",
            "meaning_en": "Promotion",
            "examples": [
              {
                "example_text": "バーゲンセールの宣伝が始まった",
                "furigana": "バーゲンセールの宣伝（せんでん）はじまった",
                "meaning_vi": "Bắt đầu công khai đợt bán giảm giá.",
                "meaning_en": "Advertising for bargain sales has begun"
              }
            ],
            "lesson_number": 24
          },
          {
            "vocab": "広告",
            "furigana": "こうこく",
            "meaning_vi": "quảng cáo",
            "meaning_en": "advertisement",
            "examples": [
              {
                "example_text": "｛新聞／雑誌｝に新製品の広告がのっていた",
                "furigana": "｛新聞（しんぶん）ざっししんせいひんこうこくがのっていた",
                "meaning_vi": "Đăng quảng cáo sản phẩm mới trên báo, tạp chí.",
                "meaning_en": "New products were advertised in {Newspapers/Magazines}"
              }
            ],
            "lesson_number": 24
          },
          {
            "vocab": "注目",
            "furigana": "ちゅうもく",
            "meaning_vi": "chú ý",
            "meaning_en": "attention",
            "examples": [
              {
                "example_text": "有名歌手の結婚が注目を集めている",
                "furigana": "有名（ゆうめい）かしゅけっこんちゅうもくあつめている",
                "meaning_vi": "Việc kết hôn của ca sĩ nổi tiếng đang thu hút sự chú ý.",
                "meaning_en": "The marriage of famous singers is attracting attention"
              }
            ],
            "lesson_number": 24
          },
          {
            "vocab": "通訳",
            "furigana": "つうやく",
            "meaning_vi": "Giải thích",
            "meaning_en": "Explain",
            "examples": [
              {
                "example_text": "英語を日本語に通訳する",
                "furigana": "英語（えいご）にほんごつうやくする",
                "meaning_vi": "Phiên dịch tiếng Anh sang tiếng Nhật.",
                "meaning_en": "Translating English into Japanese"
              }
            ],
            "lesson_number": 25
          },
          {
            "vocab": "翻訳",
            "furigana": "ほんやく",
            "meaning_vi": "dịch",
            "meaning_en": "pandemic",
            "examples": [
              {
                "example_text": "日本語の小説を英語に翻訳する",
                "furigana": "日本語（にほんご）しょうせつえいごほんやくする",
                "meaning_vi": "Dịch tiểu thuyết tiếng Nhật sang tiếng Anh.",
                "meaning_en": "Translation of Japanese novels into English"
              }
            ],
            "lesson_number": 25
          },
          {
            "vocab": "伝言",
            "furigana": "でんごん",
            "meaning_vi": "tin nhắn",
            "meaning_en": "message",
            "examples": [
              {
                "example_text": "留守番電話に伝言を残す",
                "furigana": "留守番（るすばん）でんわでんごんのこす",
                "meaning_vi": "Để lại lời nhắn trong hộp thư thoại.",
                "meaning_en": "Leave a message on the answering machine"
              }
            ],
            "lesson_number": 25
          },
          {
            "vocab": "報告",
            "furigana": "ほうこく",
            "meaning_vi": "Báo cáo",
            "meaning_en": "Report",
            "examples": [
              {
                "example_text": "出張の報告",
                "furigana": "出張（しゅっちょう）ほうこく",
                "meaning_vi": "Báo cáo công tác.",
                "meaning_en": "Report on business trip"
              }
            ],
            "lesson_number": 25
          },
          {
            "vocab": "録画",
            "furigana": "ろくが",
            "meaning_vi": "Ghi âm",
            "meaning_en": "Record",
            "examples": [
              {
                "example_text": "テレビ番組をビデオに録画する",
                "furigana": "テレビ番組（ばんぐみ）ろくがする",
                "meaning_vi": "Ghi lại thành video chương trình trên tivi.",
                "meaning_en": "Record TV shows on video"
              }
            ],
            "lesson_number": 25
          },
          {
            "vocab": "混雑",
            "furigana": "こんざつ",
            "meaning_vi": "sự tắc nghẽn",
            "meaning_en": "congestion",
            "examples": [
              {
                "example_text": "デパートは、大勢の人で混雑している",
                "furigana": "デパートは、大勢（おおぜい）ひとこんざつしている",
                "meaning_vi": "Cửa hàng bách hóa tổng hợp đang hỗn loạn vì đám đông.",
                "meaning_en": "Department stores are crowded with people"
              }
            ],
            "lesson_number": 25
          },
          {
            "vocab": "渋滞",
            "furigana": "じゅうたい",
            "meaning_vi": "tắc đường",
            "meaning_en": "traffic jam",
            "examples": [
              {
                "example_text": "道路が渋滞していて、会議に遅刻した",
                "furigana": "道路（どうろ）じゅうたいかいぎちこくした",
                "meaning_vi": "Vì tắc đường nên tôi đến trễ cuộc họp.",
                "meaning_en": "The road was congested and I was late for a meeting"
              }
            ],
            "lesson_number": 25
          },
          {
            "vocab": "衝突",
            "furigana": "しょうとつ",
            "meaning_vi": "xung đột",
            "meaning_en": "conflict",
            "examples": [
              {
                "example_text": "電車の衝突の場面を見た",
                "furigana": "電車（でんしゃ）しょうとつばめんみた",
                "meaning_vi": "Tôi đã chứng kiến cảnh va chạm của xe điện.",
                "meaning_en": "I saw a scene of a train collision"
              }
            ],
            "lesson_number": 25
          },
          {
            "vocab": "被害",
            "furigana": "ひがい",
            "meaning_vi": "hư hại",
            "meaning_en": "damage",
            "examples": [
              {
                "example_text": "台風の被害",
                "furigana": "台風（たいふう）ひがい",
                "meaning_vi": "Thiệt hại do bão.",
                "meaning_en": "Typhoon damage"
              }
            ],
            "lesson_number": 25
          },
          {
            "vocab": "事故",
            "furigana": "じこ",
            "meaning_vi": "tai nạn",
            "meaning_en": "accident",
            "examples": [
              {
                "example_text": "事故の原因を調べる",
                "furigana": "事故（じこ）げんいんしらべる",
                "meaning_vi": "Điều tra nguyên nhân của tai nạn.",
                "meaning_en": "Investigate the cause of the accident"
              }
            ],
            "lesson_number": 25
          },
          {
            "vocab": "事件",
            "furigana": "じけん",
            "meaning_vi": "sự kiện",
            "meaning_en": "event",
            "examples": [
              {
                "example_text": "近所で子どもが次々といなくなるという事件があった",
                "furigana": "近所（きんじょ）こつぎつぎじけんがあった",
                "meaning_vi": "Khu vực gần đây liên tục xảy ra các vụ mất tích trẻ con.",
                "meaning_en": "There was an incident in the neighborhood where children were gone one after another."
              }
            ],
            "lesson_number": 25
          },
          {
            "vocab": "故障",
            "furigana": "こしょう",
            "meaning_vi": "Lỗi",
            "meaning_en": "Error",
            "examples": [
              {
                "example_text": "洗たく機が故障したので、コインランドリーへ行った",
                "furigana": "洗（せん）きこしょういった",
                "meaning_vi": "Vì máy giặt bị hỏng nên mang đồ đi giặt ở tiệm giặt tự động.",
                "meaning_en": "My washing machine broke down so I went to the laundromat."
              }
            ],
            "lesson_number": 25
          },
          {
            "vocab": "修理",
            "furigana": "しゅうり",
            "meaning_vi": "Sửa chữa",
            "meaning_en": "Repair",
            "examples": [
              {
                "example_text": "パソコンがこわれたので、修理に出した",
                "furigana": "パソコンがこわれたので、修理（しゅうり）だした",
                "meaning_vi": "Máy tính bị hỏng nên tôi mang đi sửa.",
                "meaning_en": "My computer was broken so I sent it to repair it."
              }
            ],
            "lesson_number": 25
          },
          {
            "vocab": "停電",
            "furigana": "ていでん",
            "meaning_vi": "Mất điện",
            "meaning_en": "Losing power",
            "examples": [
              {
                "example_text": "雷が落ちて停電した",
                "furigana": "雷（かみなり）おていでんした",
                "meaning_vi": "Sét đánh xuống rồi mất điện.",
                "meaning_en": "Lightning hit and the power went out"
              }
            ],
            "lesson_number": 25
          },
          {
            "vocab": "調子",
            "furigana": "ちょうし",
            "meaning_vi": "tình trạng",
            "meaning_en": "status",
            "examples": [
              {
                "example_text": "｛体／機械　…｝の調子がいい",
                "furigana": "｛体（からだ）きかいちょうしがいい",
                "meaning_vi": "{Tình trạng cơ thể/ máy móc... } tốt.",
                "meaning_en": "{body/machine...} is in good condition"
              }
            ],
            "lesson_number": 25
          },
          {
            "vocab": "緊張",
            "furigana": "きんちょう",
            "meaning_vi": "lo lắng",
            "meaning_en": "worry",
            "examples": [
              {
                "example_text": "面接では緊張して、うまく答えられなかった",
                "furigana": "面接（めんせつ）きんちょうこたえられなかった",
                "meaning_vi": "Lúc phỏng vấn vì căng thẳng nên tôi không thể trả lời trôi chảy được.",
                "meaning_en": "I was nervous during the interview and couldn't answer well."
              }
            ],
            "lesson_number": 26
          },
          {
            "vocab": "自信",
            "furigana": "じしん",
            "meaning_vi": "sự tự tin",
            "meaning_en": "confidence",
            "examples": [
              {
                "example_text": "体力に自信がある",
                "furigana": "体力（たいりょく）じしんがある",
                "meaning_vi": "Tự tin vào thể lực.",
                "meaning_en": "I'm confident in my strength"
              }
            ],
            "lesson_number": 26
          },
          {
            "vocab": "自慢",
            "furigana": "じまん",
            "meaning_vi": "kiêu hãnh",
            "meaning_en": "pride",
            "examples": [
              {
                "example_text": "自慢の料理を作る",
                "furigana": "自慢（じまん）りょうりつくる",
                "meaning_vi": "Làm món tủ.",
                "meaning_en": "Make your proud dishes"
              }
            ],
            "lesson_number": 26
          },
          {
            "vocab": "感心",
            "furigana": "かんしん",
            "meaning_vi": "Ấn tượng",
            "meaning_en": "Impression",
            "examples": [
              {
                "example_text": "チンさんの進歩の速さに感心した",
                "furigana": "チンさんの進歩（しんぽ）はやかんしんした",
                "meaning_vi": "Tôi ngưỡng mộ sự tiến bộ nhanh chóng của Chin.",
                "meaning_en": "I was impressed by how fast Chin made progress."
              }
            ],
            "lesson_number": 26
          },
          {
            "vocab": "感動",
            "furigana": "かんどう",
            "meaning_vi": "di chuyển",
            "meaning_en": "move",
            "examples": [
              {
                "example_text": "パラリンピックを見て、とても｛感動した／感動させられた｝",
                "furigana": "パラリンピックを見（み）かんどうかんどうさせられた｝",
                "meaning_vi": "Xem Paralymic, tôi đã rất xúc động/ làm tôi thấy xúc động (paralympic là đại hôi thể thao người khuyết tật).",
                "meaning_en": "I was so moved/impressed by the Paralympics."
              }
            ],
            "lesson_number": 26
          },
          {
            "vocab": "興奮",
            "furigana": "こうふん",
            "meaning_vi": "hào hứng",
            "meaning_en": "excited",
            "examples": [
              {
                "example_text": "試合を見ていた観客たちは、興奮して大声を出した",
                "furigana": "試合（しあい）みかんきゃくこうふんおおごえだした",
                "meaning_vi": "Khán giả xem trận đấu hưng phấn và reo hò ầm ĩ.",
                "meaning_en": "The audience members who were watching the match cried out in excitement."
              }
            ],
            "lesson_number": 26
          },
          {
            "vocab": "感想",
            "furigana": "かんそう",
            "meaning_vi": "Suy nghĩ",
            "meaning_en": "Think",
            "examples": [
              {
                "example_text": "［ご感想はいかがですか」「すばらしかったです」",
                "furigana": "［ご感想（かんそう）はいかがですか」「すばらしかったです」",
                "meaning_vi": "Bạn cảm thấy thế nào? Rất tuyệt vời.",
                "meaning_en": "[What do you think?] \"It was amazing.\""
              }
            ],
            "lesson_number": 26
          },
          {
            "vocab": "予想",
            "furigana": "よそう",
            "meaning_vi": "dự đoán",
            "meaning_en": "forecast",
            "examples": [
              {
                "example_text": "選挙の結果を予想する",
                "furigana": "選挙（せんきょ）けっかよそうする",
                "meaning_vi": "Dự đoán kết quả bầu cử.",
                "meaning_en": "Predict the outcome of the election"
              }
            ],
            "lesson_number": 26
          },
          {
            "vocab": "専門",
            "furigana": "せんもん",
            "meaning_vi": "Chuyên",
            "meaning_en": "Specialized",
            "examples": [
              {
                "example_text": "専門は言語学です",
                "furigana": "専門（せんもん）げんごがくです",
                "meaning_vi": "Chuyên môn của tôi là ngôn ngữ học.",
                "meaning_en": "My specialty is linguistics"
              }
            ],
            "lesson_number": 26
          },
          {
            "vocab": "研究",
            "furigana": "けんきゅう",
            "meaning_vi": "Nghiên cứu",
            "meaning_en": "Study",
            "examples": [
              {
                "example_text": "私は大学で日本の政治を研究している",
                "furigana": "私（わたし）だいがくにほんせいじけんきゅうしている",
                "meaning_vi": "Tôi đang nghiên cứu chính trị Nhật Bản ở trường đại học.",
                "meaning_en": "I am studying Japanese politics at university."
              }
            ],
            "lesson_number": 26
          },
          {
            "vocab": "調査",
            "furigana": "ちょうさ",
            "meaning_vi": "cuộc điều tra",
            "meaning_en": "investigation",
            "examples": [
              {
                "example_text": "調査を行う",
                "furigana": "調査（ちょうさ）おこなう",
                "meaning_vi": "Tiến hành điều tra.",
                "meaning_en": "Do an investigation"
              }
            ],
            "lesson_number": 26
          },
          {
            "vocab": "原因",
            "furigana": "げんいん",
            "meaning_vi": "lý do",
            "meaning_en": "reason",
            "examples": [
              {
                "example_text": "今、警察が事故の原因を調べている",
                "furigana": "今（いま）けいさつじこげんいんしらべている",
                "meaning_vi": "Bây giờ cảnh sát đang điều tra nguyên nhân của vụ tai nạn.",
                "meaning_en": "Police are now investigating the cause of the accident"
              }
            ],
            "lesson_number": 26
          },
          {
            "vocab": "結果",
            "furigana": "けっか",
            "meaning_vi": "kết quả",
            "meaning_en": "result",
            "examples": [
              {
                "example_text": "１位になりたかったが、結果は３位だった",
                "furigana": "１位（い）けっかいだった",
                "meaning_vi": "Tôi muốn vị trí số 1 nhưng kết quả đạt được vị trí thứ 3.",
                "meaning_en": "I wanted to be number one, but the result was third."
              }
            ],
            "lesson_number": 26
          },
          {
            "vocab": "解決",
            "furigana": "かいけつ",
            "meaning_vi": "gỡ rối",
            "meaning_en": "troubleshoot",
            "examples": [
              {
                "example_text": "大きな問題が解決した",
                "furigana": "大（おお）もんだいかいけつした",
                "meaning_vi": "Vấn đề lớn được giải quyết.",
                "meaning_en": "A big problem has been solved"
              }
            ],
            "lesson_number": 26
          },
          {
            "vocab": "確認",
            "furigana": "かくにん",
            "meaning_vi": "xác nhận",
            "meaning_en": "confirm",
            "examples": [
              {
                "example_text": "まちがいがないかどうか確認する",
                "furigana": "まちがいがないかどうか（を）かくにんする",
                "meaning_vi": "Kiểm tra lại xem có lỗi sai không.",
                "meaning_en": "Check if there is no mistake"
              }
            ],
            "lesson_number": 27
          },
          {
            "vocab": "利用",
            "furigana": "りよう",
            "meaning_vi": "sử dụng",
            "meaning_en": "use",
            "examples": [
              {
                "example_text": "水不足なので、水道の利用を減らした",
                "furigana": "水不足（みずぶそく）すいどうりようへらした",
                "meaning_vi": "Vì thiếu nước nên phải giảm thiểu việc sử dụng nước sinh hoạt.",
                "meaning_en": "Due to a lack of water, we reduced water use."
              }
            ],
            "lesson_number": 27
          },
          {
            "vocab": "理解",
            "furigana": "りかい",
            "meaning_vi": "hiểu",
            "meaning_en": "understand",
            "examples": [
              {
                "example_text": "意味の理解",
                "furigana": "意味（いみ）りかい",
                "meaning_vi": "Hiểu rõ ý nghĩa.",
                "meaning_en": "Understanding meaning"
              }
            ],
            "lesson_number": 27
          },
          {
            "vocab": "発見",
            "furigana": "はっけん",
            "meaning_vi": "khám phá",
            "meaning_en": "discover",
            "examples": [
              {
                "example_text": "大きな発見",
                "furigana": "大（おお）はっけん",
                "meaning_vi": "Phát kiến lớn.",
                "meaning_en": "Big discovery"
              }
            ],
            "lesson_number": 27
          },
          {
            "vocab": "発明",
            "furigana": "はつめい",
            "meaning_vi": "sự phát minh",
            "meaning_en": "invention",
            "examples": [
              {
                "example_text": "ベルは電話を発明した",
                "furigana": "ベルは電話（でんわ）はつめいした",
                "meaning_vi": "Bell đã phát minh ra điện thoại.",
                "meaning_en": "Bell invented the phone"
              }
            ],
            "lesson_number": 27
          },
          {
            "vocab": "関係",
            "furigana": "かんけい",
            "meaning_vi": "mối quan hệ",
            "meaning_en": "relationship",
            "examples": [
              {
                "example_text": "「お二人の関係は」「親子／兄弟　…｝です」",
                "furigana": "「お二人（ふたり）かんけいおやこきょうだい　…｝です」",
                "meaning_vi": "Quan hệ của hai người là (cha/ con; anh/ em…).",
                "meaning_en": "\"The relationship between you two is\" \"parents and children/siblings...\""
              }
            ],
            "lesson_number": 27
          },
          {
            "vocab": "団体",
            "furigana": "だんたい",
            "meaning_vi": "Nhóm",
            "meaning_en": "Group",
            "examples": [
              {
                "example_text": "博物館で団体のチケットを買う",
                "furigana": "博物館（はくぶつかん）だんたいかう",
                "meaning_vi": "Tôi mua vé theo nhóm vào tham quan viện bảo tàng.",
                "meaning_en": "Buy group tickets at the museum"
              }
            ],
            "lesson_number": 27
          },
          {
            "vocab": "選挙",
            "furigana": "せんきょ",
            "meaning_vi": "bầu cử",
            "meaning_en": "elector",
            "examples": [
              {
                "example_text": "1月に選挙が行われる",
                "furigana": "1月（がつ）せんきょおこなわれる",
                "meaning_vi": "Tháng 1 bầu cử sẽ được tiến hành.",
                "meaning_en": "The election will be held in January"
              }
            ],
            "lesson_number": 27
          },
          {
            "vocab": "税金",
            "furigana": "ぜいきん",
            "meaning_vi": "thuế",
            "meaning_en": "tax",
            "examples": [
              {
                "example_text": "年度末に税金を払う",
                "furigana": "年度末（ねんどまつ）ぜいきんはらう",
                "meaning_vi": "Trả tiền thuế vào cuối năm.",
                "meaning_en": "Pay taxes at the end of the fiscal year"
              }
            ],
            "lesson_number": 27
          },
          {
            "vocab": "責任",
            "furigana": "せきにん",
            "meaning_vi": "trách nhiệm",
            "meaning_en": "responsibility",
            "examples": [
              {
                "example_text": "「この失敗はあなたの責任ではない」",
                "furigana": "「この失敗（しっぱい）せきにんではない」",
                "meaning_vi": "\"Thất bại này không phải là trách nhiệm của bạn.\"",
                "meaning_en": "\"This mistake is not your fault.\""
              }
            ],
            "lesson_number": 27
          },
          {
            "vocab": "書類",
            "furigana": "しょるい",
            "meaning_vi": "tài liệu",
            "meaning_en": "document",
            "examples": [
              {
                "example_text": "留学の手続きに必要な書類を準備する",
                "furigana": "留学（りゅうがく）てつづひつようしょるいじゅんびする",
                "meaning_vi": "Chuẩn bị giấy tờ cần thiết để làm thủ tục du học.",
                "meaning_en": "Prepare the documents necessary for studying abroad procedures"
              }
            ],
            "lesson_number": 27
          },
          {
            "vocab": "題名",
            "furigana": "だいめい",
            "meaning_vi": "Tiêu đề",
            "meaning_en": "Title",
            "examples": [
              {
                "example_text": "コンクールに出す作品に題名をつける",
                "furigana": "コンクールに出（だ）さくひんだいめいをつける",
                "meaning_vi": "Đặt tên cho tác phẩm tham gia cuộc thi âm nhạc.",
                "meaning_en": "Give titles to the works that will be presented in the competition"
              }
            ],
            "lesson_number": 27
          },
          {
            "vocab": "条件",
            "furigana": "じょうけん",
            "meaning_vi": "tình trạng",
            "meaning_en": "status",
            "examples": [
              {
                "example_text": "運転免許を持っていることが採用の条件だ",
                "furigana": "運転（うんてん）めんきょもさいようじょうけんだ",
                "meaning_vi": "Điều kiện tuyển dụng là phải có bằng lái xe.",
                "meaning_en": "Having a driver's license is a condition for employment."
              }
            ],
            "lesson_number": 27
          },
          {
            "vocab": "締め切り",
            "furigana": "しめきり",
            "meaning_vi": "thời hạn",
            "meaning_en": "duration",
            "examples": [
              {
                "example_text": "レポートのしめ切りは30日です",
                "furigana": "レポートのしめ切（き）にちです",
                "meaning_vi": "Ngày 30 là hạn cuối nộp báo cáo.",
                "meaning_en": "The report will be cut off for 30 days."
              }
            ],
            "lesson_number": 28
          },
          {
            "vocab": "期間",
            "furigana": "きかん",
            "meaning_vi": "Giai đoạn",
            "meaning_en": "Stage",
            "examples": [
              {
                "example_text": "｛申し込む／休業／工事　…｝期間は１２月１日から３日までです",
                "furigana": "｛申（もう）こきゅうぎょうこうじきかんがつついたちみっかまでです",
                "meaning_vi": "Thời hạn đăng kí/ đóng cửa/ thicông xây dựng... là ngày 1 đến ngày 3 tháng 12.",
                "meaning_en": "{Apply/Closed/Construction...} The period is from December 1st to 3rd"
              }
            ],
            "lesson_number": 28
          },
          {
            "vocab": "倍",
            "furigana": "ばい",
            "meaning_vi": "Gấp đôi",
            "meaning_en": "Double",
            "examples": [
              {
                "example_text": "値段が倍になる",
                "furigana": "値段（ねだん）ばいになる",
                "meaning_vi": "Giá tăng lên gấp đôi.",
                "meaning_en": "The price will double"
              }
            ],
            "lesson_number": 28
          },
          {
            "vocab": "くじ",
            "furigana": "くじ",
            "meaning_vi": "Xổ số",
            "meaning_en": "Lottery",
            "examples": [
              {
                "example_text": "ス―パーで買い物をしてくじをひいたら、テレビが当たった",
                "furigana": "ス―パーで買（か）ものあたった",
                "meaning_vi": "Đi mua đồ ở siêu thị, sau khi rút thăm trúng thưởng thì đã trúng được cái tivi.",
                "meaning_en": "I went shopping at Super and won a lottery, and I won a TV."
              }
            ],
            "lesson_number": 28
          },
          {
            "vocab": "近道",
            "furigana": "ちかみち",
            "meaning_vi": "Lối tắt",
            "meaning_en": "Shortcut",
            "examples": [
              {
                "example_text": "駅への近道を通る",
                "furigana": "駅（えき）ちかみちとおる",
                "meaning_vi": "Đến nhà ga thông qua đường tắt.",
                "meaning_en": "Take the shortcut to the station"
              }
            ],
            "lesson_number": 28
          },
          {
            "vocab": "中心",
            "furigana": "ちゅうしん",
            "meaning_vi": "trung tâm",
            "meaning_en": "center",
            "examples": [
              {
                "example_text": "街の中心",
                "furigana": "街（まち）ちゅうしん",
                "meaning_vi": "Trung tâm thành phố.",
                "meaning_en": "The city centre"
              }
            ],
            "lesson_number": 28
          },
          {
            "vocab": "辺り",
            "furigana": "あたり",
            "meaning_vi": "Xung quanh",
            "meaning_en": "Around",
            "examples": [
              {
                "example_text": "あたりを見回す",
                "furigana": "あたりを見回（みまわ）す",
                "meaning_vi": "Nhìn xung quanh.",
                "meaning_en": "Looking around"
              }
            ],
            "lesson_number": 28
          },
          {
            "vocab": "周り/回り",
            "furigana": "まわり/まわり",
            "meaning_vi": "Xung quanh/tròn",
            "meaning_en": "Surrounding/round",
            "examples": [
              {
                "example_text": "池の周りを歩く",
                "furigana": "池（いけ）まわあるく",
                "meaning_vi": "Đi bộ xung quanh ao.",
                "meaning_en": "Walking around the pond"
              }
            ],
            "lesson_number": 28
          },
          {
            "vocab": "穴",
            "furigana": "あな",
            "meaning_vi": "hố",
            "meaning_en": "pit",
            "examples": [
              {
                "example_text": "地面にあなを掘る",
                "furigana": "地面（じめん）ほる",
                "meaning_vi": "Đào một cái lỗ trên mặt đất.",
                "meaning_en": "Dig your own in the ground"
              }
            ],
            "lesson_number": 28
          },
          {
            "vocab": "列",
            "furigana": "れつ",
            "meaning_vi": "Danh sách",
            "meaning_en": "List",
            "examples": [
              {
                "example_text": "入り口の前には長い列ができていた",
                "furigana": "入（い）ぐちまえながれつができていた",
                "meaning_vi": "Có một hàng dài trước cổng vào.",
                "meaning_en": "There was a long line in front of the entrance."
              }
            ],
            "lesson_number": 28
          },
          {
            "vocab": "幅",
            "furigana": "はば",
            "meaning_vi": "chiều rộng",
            "meaning_en": "width",
            "examples": [
              {
                "example_text": "道のはばが広い",
                "furigana": "道（みち）ひろい",
                "meaning_vi": "Chiều rộng của con đường này rộng.",
                "meaning_en": "The road is wide"
              }
            ],
            "lesson_number": 28
          },
          {
            "vocab": "範囲",
            "furigana": "はんい",
            "meaning_vi": "phạm vi",
            "meaning_en": "scope",
            "examples": [
              {
                "example_text": "試験の範囲",
                "furigana": "試験（しけん）はんい",
                "meaning_vi": "Phạm vi bài thi.",
                "meaning_en": "Scope of the exam"
              }
            ],
            "lesson_number": 28
          },
          {
            "vocab": "内容",
            "furigana": "ないよう",
            "meaning_vi": "nội dung",
            "meaning_en": "Content",
            "examples": [
              {
                "example_text": "｛話／授業／本／ニュース　…｝の内容",
                "furigana": "｛話（はなし）じゅぎょうほんないよう",
                "meaning_vi": "Nội dung {cuộc nói chuyện / bài giảng/ sách/ bảng tin…}.",
                "meaning_en": "Contents of {talk/class/book/news...}"
              }
            ],
            "lesson_number": 28
          },
          {
            "vocab": "中身",
            "furigana": "なかみ",
            "meaning_vi": "nội dung",
            "meaning_en": "Content",
            "examples": [
              {
                "example_text": "箱を開けて中身を見る",
                "furigana": "箱（はこ）あなかみみる",
                "meaning_vi": "Mở hộp xem bên trong.",
                "meaning_en": "Open the box and look inside"
              }
            ],
            "lesson_number": 29
          },
          {
            "vocab": "特徴",
            "furigana": "とくちょう",
            "meaning_vi": "Đặc trưng",
            "meaning_en": "Feature",
            "examples": [
              {
                "example_text": "商品の特徴を確かめる",
                "furigana": "商品（しょうひん）とくちょうたしかめる",
                "meaning_vi": "Kiểm định lại những đặc tính của sản phẩm.",
                "meaning_en": "Check the product features"
              }
            ],
            "lesson_number": 29
          },
          {
            "vocab": "普通",
            "furigana": "ふつう",
            "meaning_vi": "thường xuyên",
            "meaning_en": "frequent",
            "examples": [
              {
                "example_text": "パスポートの申請には１週間ぎらいかかるのがふつうだ",
                "furigana": "パスポートの申請（しんせい）しゅうかんぎらいかかるのがふつうだ",
                "meaning_vi": "Việc xin hộ chiếu thông thường mất một tuần.",
                "meaning_en": "It is common for a week to apply for a passport."
              }
            ],
            "lesson_number": 29
          },
          {
            "vocab": "当たり前",
            "furigana": "あたりまえ",
            "meaning_vi": "rõ ràng",
            "meaning_en": "clear",
            "examples": [
              {
                "example_text": "そんなひどいことをされたら、怒るのがあたりまえだ",
                "furigana": "そんなひどいことをされたら、怒（おこ）るのがあたりまえだ",
                "meaning_vi": "Nếu bị chơi xấu như thế thì nổi giận là chuyện đương nhiên.",
                "meaning_en": "If you do something so bad, it's only natural to get mad"
              }
            ],
            "lesson_number": 29
          },
          {
            "vocab": "偽",
            "furigana": "にせ",
            "meaning_vi": "Giả",
            "meaning_en": "Fake",
            "examples": [
              {
                "example_text": "にせ銀行員にだまされてお金を取られた",
                "furigana": "にせ（の）ぎんこういんかねとられた",
                "meaning_vi": "Bị nhân viên ngân hàng giả mạo lừa lấy hết tiền.",
                "meaning_en": "I was fooled by a false banker and took my money"
              }
            ],
            "lesson_number": 29
          },
          {
            "vocab": "別",
            "furigana": "べつ",
            "meaning_vi": "khác",
            "meaning_en": "other",
            "examples": [
              {
                "example_text": "「米」は「ごはん」とは別（の）ものだ",
                "furigana": "「米（こめ）べつ（の）ものだ",
                "meaning_vi": "Gạo khác với cơm.",
                "meaning_en": "\"Rice\" is different from \"rice.\""
              }
            ],
            "lesson_number": 29
          },
          {
            "vocab": "国籍",
            "furigana": "こくせき",
            "meaning_vi": "quốc tịch",
            "meaning_en": "nationality",
            "examples": [
              {
                "example_text": "私はずっとアメリカで暮らしているが、国籍は日本だ",
                "furigana": "私（わたし）くこくせきにほんだ",
                "meaning_vi": "Tôi cư trú ở Mỹ nhưng quốc tịch Nhật.",
                "meaning_en": "I've been living in the US for a long time, but my nationality is in Japan."
              }
            ],
            "lesson_number": 29
          },
          {
            "vocab": "東洋",
            "furigana": "とうよう",
            "meaning_vi": "Phương Đông",
            "meaning_en": "Orient",
            "examples": [
              {
                "example_text": "東洋の文化と西洋の文化を比べる",
                "furigana": "東洋（とうよう）ぶんかせいようぶんかくらべる",
                "meaning_vi": "So sánh văn hóa phương Đông và phương Tây.",
                "meaning_en": "Comparing Eastern culture with Western culture"
              }
            ],
            "lesson_number": 29
          },
          {
            "vocab": "西洋",
            "furigana": "せいよう",
            "meaning_vi": "Phương Tây",
            "meaning_en": "West",
            "examples": [
              {
                "example_text": "東洋の文化と西洋の文化を比べる",
                "furigana": "東洋の文化と西洋の文化を比べる",
                "meaning_vi": "So sánh văn hóa phương Đông và văn hóa phương Tây.",
                "meaning_en": "Comparing Eastern culture with Western culture"
              }
            ],
            "lesson_number": 29
          },
          {
            "vocab": "国際",
            "furigana": "こくさい",
            "meaning_vi": "quốc tế",
            "meaning_en": "international",
            "examples": [
              {
                "example_text": "日本企業の海外支社でのトラブルが国際問題に発展した",
                "furigana": "日本（にほん）きぎょうかいがいししゃこくさいもんだいはってんした",
                "meaning_vi": "Vấn đề ở chi nhánh nước ngoài của xí nghiệp Nhật Bản đã phát triển thành vấn đề quốc tế.",
                "meaning_en": "A problem at overseas branches of Japanese companies has developed into an international problem"
              }
            ],
            "lesson_number": 29
          },
          {
            "vocab": "自然",
            "furigana": "しぜん",
            "meaning_vi": "thiên nhiên",
            "meaning_en": "nature",
            "examples": [
              {
                "example_text": "山や海へ行って、自然の中で過ごす",
                "furigana": "山（やま）うみいしぜんなかすごす",
                "meaning_vi": "Đi núi đi biển để hòa mình trong thiên nhiên.",
                "meaning_en": "Go to the mountains and the sea and spend time in nature"
              }
            ],
            "lesson_number": 29
          },
          {
            "vocab": "景色",
            "furigana": "けしき",
            "meaning_vi": "phong cảnh",
            "meaning_en": "scenery",
            "examples": [
              {
                "example_text": "初めて日本の山に行った。すばらしい景色だった",
                "furigana": "初（はじ）にほんやまいけしきだった",
                "meaning_vi": "Lần đầu tiên đi chơi núi của Nhật Bản, phong cảnh đẹp tuyệt vời.",
                "meaning_en": "This was my first time going to mountains in Japan. It was a wonderful view"
              }
            ],
            "lesson_number": 29
          },
          {
            "vocab": "宗教",
            "furigana": "しゅうきょう",
            "meaning_vi": "tôn giáo",
            "meaning_en": "religion",
            "examples": [
              {
                "example_text": "世界にはいろいろな宗教がある",
                "furigana": "世界（せかい）しゅうきょうがある",
                "meaning_vi": "Trên thế giới có rất nhiều tôn giáo.",
                "meaning_en": "There are many different religions in the world"
              }
            ],
            "lesson_number": 29
          },
          {
            "vocab": "愛",
            "furigana": "あい",
            "meaning_vi": "giống",
            "meaning_en": "alike",
            "examples": [
              {
                "example_text": "私は｛家族／自然／国　…｝を愛している",
                "furigana": "私（わたし）かぞくしぜんくにあいしている",
                "meaning_vi": "Tôi yêu {gia đình/ tự nhiên/ đất nước…}.",
                "meaning_en": "I love {family/nature/country...}"
              }
            ],
            "lesson_number": 29
          },
          {
            "vocab": "届く",
            "furigana": "とどく",
            "meaning_vi": "với tới",
            "meaning_en": "to",
            "examples": [
              {
                "example_text": "父から手紙が届いた",
                "furigana": "父（ちち）てがみとどいた",
                "meaning_vi": "Bức thư của bố được giao đến.",
                "meaning_en": "I received a letter from my father"
              }
            ],
            "lesson_number": 30
          },
          {
            "vocab": "届ける",
            "furigana": "とどける",
            "meaning_vi": "giao",
            "meaning_en": "deliver",
            "examples": [
              {
                "example_text": "隣の家に旅行のおみやげを届けた",
                "furigana": "隣（となり）いえりょこうとどけた",
                "meaning_vi": "Giao quà du lịch đến nhà bên cạnh.",
                "meaning_en": "I delivered a souvenir from my trip to the house next door."
              }
            ],
            "lesson_number": 30
          },
          {
            "vocab": "かく",
            "furigana": "かく",
            "meaning_vi": "viết",
            "meaning_en": "write",
            "examples": [
              {
                "example_text": "頭をかく",
                "furigana": "頭（あたま）をかく",
                "meaning_vi": "Gãi đầu.",
                "meaning_en": "Scratch your head"
              }
            ],
            "lesson_number": 30
          },
          {
            "vocab": "つかむ",
            "furigana": "つかむ",
            "meaning_vi": "Vồ lấy",
            "meaning_en": "Grab",
            "examples": [
              {
                "example_text": "電車で突然腕をつかまれてびっくりした",
                "furigana": "電車（でんしゃ）とつぜんうでをつかまれてびっくりした",
                "meaning_vi": "Ở trên tàu bỗng nhiên tay bị ai đó nắm cánh tay, giật hết cả mình.",
                "meaning_en": "I was surprised when I was suddenly grabbed by the arm on the train."
              }
            ],
            "lesson_number": 30
          },
          {
            "vocab": "握る",
            "furigana": "にぎる",
            "meaning_vi": "Giữ nó",
            "meaning_en": "Hold it",
            "examples": [
              {
                "example_text": "子どもはこわがって母親の手を強くにぎった",
                "furigana": "子（こ）ははおやてつよくにぎった",
                "meaning_vi": "Đứa trẻ tỏ vẻ sợ hãi nắm chặt lấy tay mẹ.",
                "meaning_en": "The child was scared and squeezed his mother's hand very hard."
              }
            ],
            "lesson_number": 30
          },
          {
            "vocab": "押さえる",
            "furigana": "おさえる",
            "meaning_vi": "Giữ nó xuống",
            "meaning_en": "Hold it down",
            "examples": [
              {
                "example_text": "あの人はおなかを押さえて座っている。腹痛だろうか",
                "furigana": "あの人（ひと）おすわふくつうだろうか",
                "meaning_vi": "Người kia cứ ngồi ôm bụng. Chắc có vẻ đau bụng thì phải.",
                "meaning_en": "That person is sitting with his stomach held down. Is it a stomachache?"
              }
            ],
            "lesson_number": 30
          },
          {
            "vocab": "近づく",
            "furigana": "ちかづく",
            "meaning_vi": "Hãy đến gần hơn",
            "meaning_en": "Please come closer",
            "examples": [
              {
                "example_text": "目的地｛が／に｝近づいてきた",
                "furigana": "目的地（もくてきち）ちかづいてきた",
                "meaning_vi": "Dần tiến gần địa điểm đích.",
                "meaning_en": "I'm approaching my destination"
              }
            ],
            "lesson_number": 30
          },
          {
            "vocab": "近づける",
            "furigana": "ちかづける",
            "meaning_vi": "Hãy đến gần hơn",
            "meaning_en": "Please come closer",
            "examples": [
              {
                "example_text": "車を道のわきに近づける",
                "furigana": "車（くるま）みちちかづける",
                "meaning_vi": "Lái xe tiến vào gần đoạn rẽ.",
                "meaning_en": "Bring your car closer to the side of the road"
              }
            ],
            "lesson_number": 30
          },
          {
            "vocab": "合う",
            "furigana": "あう",
            "meaning_vi": "phù hợp",
            "meaning_en": "Fit",
            "examples": [
              {
                "example_text": "ふと顔を上げると、先生と目が合ってしまった",
                "furigana": "ふと顔（かお）あせんせいめあってしまった",
                "meaning_vi": "Bất chợt ngẩng mặt lên thì gặp ánh mắt giáo viên.",
                "meaning_en": "I suddenly looked up and my eyes met with the teacher."
              }
            ],
            "lesson_number": 30
          },
          {
            "vocab": "合わせる",
            "furigana": "あわせる",
            "meaning_vi": "cuộc thi đấu",
            "meaning_en": "competition",
            "examples": [
              {
                "example_text": "みんなで力を合わせてがんばりましょう",
                "furigana": "みんなで力（ちから）あわせてがんばりましょう",
                "meaning_vi": "Mọi người cùng chung sức cố gắng nhé.",
                "meaning_en": "Let's all work together and work hard"
              }
            ],
            "lesson_number": 30
          },
          {
            "vocab": "当たる",
            "furigana": "あたる",
            "meaning_vi": "Bạn sẽ nhận được nó",
            "meaning_en": "You will receive it",
            "examples": [
              {
                "example_text": "ボールが当たって窓がラスが割れた",
                "furigana": "ボールが当（あ）まどわれた",
                "meaning_vi": "Quả bóng này đập vào cái cửa sổ thế là kính vỡ.",
                "meaning_en": "The ball hit and the window cracked."
              }
            ],
            "lesson_number": 30
          },
          {
            "vocab": "当てる",
            "furigana": "あてる",
            "meaning_vi": "Tôi sẽ đánh nó",
            "meaning_en": "I will hit it",
            "examples": [
              {
                "example_text": "相手選手にボールが速いので、ラケットに当てるのも大変だ",
                "furigana": "相手（あいて）せんしゅはやあたいへんだ",
                "meaning_vi": "Vì bóng của đối phương rất nhanh nên đỡ trúng là rất khó.",
                "meaning_en": "The ball is fast to the opponent, so hitting the racket is also difficult."
              }
            ],
            "lesson_number": 30
          },
          {
            "vocab": "比べる",
            "furigana": "くらべる",
            "meaning_vi": "so sánh",
            "meaning_en": "compare",
            "examples": [
              {
                "example_text": "東京と大阪の面積を比べる",
                "furigana": "東京（とうきょう）おおさかめんせきくらべる",
                "meaning_vi": "So sánh diện tích của Tokyo và Osaka.",
                "meaning_en": "Comparing the area between Tokyo and Osaka"
              }
            ],
            "lesson_number": 31
          },
          {
            "vocab": "似合う",
            "furigana": "にあう",
            "meaning_vi": "Nó phù hợp với bạn",
            "meaning_en": "It suits you",
            "examples": [
              {
                "example_text": "彼女は着物がよく似合う",
                "furigana": "彼女（かのじょ）きものにあう",
                "meaning_vi": "Cô ấy rất hợp với kimono.",
                "meaning_en": "She looks good in a kimono"
              }
            ],
            "lesson_number": 31
          },
          {
            "vocab": "似る",
            "furigana": "にる",
            "meaning_vi": "Tương tự",
            "meaning_en": "Similar",
            "examples": [
              {
                "example_text": "彼女は母親によく似ている",
                "furigana": "彼女（かのじょ）ははおやにている",
                "meaning_vi": "Cô ấy rất giống mẹ.",
                "meaning_en": "She looks very similar to her mother"
              }
            ],
            "lesson_number": 31
          },
          {
            "vocab": "似せる",
            "furigana": "にせる",
            "meaning_vi": "Nó trông giống nhau",
            "meaning_en": "It looks the same",
            "examples": [
              {
                "example_text": "アイドルに髪型を似せる",
                "furigana": "アイドルに髪型（かみがた）にせる",
                "meaning_vi": "Bắt chước kiểu tóc của thần tượng .",
                "meaning_en": "Make your hairstyle look similar to an idol"
              }
            ],
            "lesson_number": 31
          },
          {
            "vocab": "分かれる",
            "furigana": "わかれる",
            "meaning_vi": "Đã chia ra",
            "meaning_en": "Divided",
            "examples": [
              {
                "example_text": "トイレは、男性用と女性用に分かれている",
                "furigana": "トイレは、男性用（だんせいよう）じょせいようわかれている",
                "meaning_vi": "Vệ sinh của nam và nữ thì được phân chia tách biệt ra.",
                "meaning_en": "The toilets are divided into men's and women's."
              }
            ],
            "lesson_number": 31
          },
          {
            "vocab": "分ける",
            "furigana": "わける",
            "meaning_vi": "Chia",
            "meaning_en": "Chia",
            "examples": [
              {
                "example_text": "財産を３人の子どもに分ける",
                "furigana": "財産（ざいさん）にんこわける",
                "meaning_vi": "Phân chia tài sản cho ba người con.",
                "meaning_en": "Dividing assets into three children"
              }
            ],
            "lesson_number": 31
          },
          {
            "vocab": "足す",
            "furigana": "たす",
            "meaning_vi": "Thêm vào",
            "meaning_en": "Add",
            "examples": [
              {
                "example_text": "味が薄かったので塩を足した",
                "furigana": "味（あじ）うすしおたした",
                "meaning_vi": "Món ăn này hơi nhạt nên cho thêm muối vào.",
                "meaning_en": "It had a bit of flavor so I added salt"
              }
            ],
            "lesson_number": 31
          },
          {
            "vocab": "引く",
            "furigana": "ひく",
            "meaning_vi": "Sự lôi kéo",
            "meaning_en": "Drawing",
            "examples": [
              {
                "example_text": "「このドアは押すのではなく、引いて開けるんです」",
                "furigana": "「このドアは押（お）ひあけるんです」",
                "meaning_vi": "Mở cửa này không phải đẩy vào mà kéo ra.",
                "meaning_en": "\"This door is not pushed, but you can pull it open.\""
              }
            ],
            "lesson_number": 31
          },
          {
            "vocab": "増える",
            "furigana": "ふえる",
            "meaning_vi": "tăng",
            "meaning_en": "increase",
            "examples": [
              {
                "example_text": "｛貯金／体重／人口　…｝が増える",
                "furigana": "｛貯金（ちょきん）たいじゅうじんこうふえる",
                "meaning_vi": "{Tiền tiết kiệm/ cân nặng/ số dân…} tăng.",
                "meaning_en": "{Savings/Weight/Population...} increases"
              }
            ],
            "lesson_number": 31
          },
          {
            "vocab": "増やす",
            "furigana": "ふやす",
            "meaning_vi": "tăng",
            "meaning_en": "increase",
            "examples": [
              {
                "example_text": "｛貯金／体重／人口　…｝を増やす",
                "furigana": "｛貯金（ちょきん）たいじゅうじんこうふやす",
                "meaning_vi": "Tăng {tiền tiết kiệm/ cân nặng / dân số…}.",
                "meaning_en": "Increase {Savings/Weight/Population...}"
              }
            ],
            "lesson_number": 31
          },
          {
            "vocab": "減る",
            "furigana": "へる",
            "meaning_vi": "Nó sẽ giảm",
            "meaning_en": "It will decrease",
            "examples": [
              {
                "example_text": "貯金／体重／人口　…｝が減る",
                "furigana": "貯金（ちょきん）たいじゅうじんこうへる",
                "meaning_vi": "Giảm {tiền tiết kiệm/ cân nặng/ dân số…}.",
                "meaning_en": "Decreases in savings/weight/population..."
              }
            ],
            "lesson_number": 31
          },
          {
            "vocab": "減らす",
            "furigana": "へらす",
            "meaning_vi": "giảm bớt",
            "meaning_en": "decrease",
            "examples": [
              {
                "example_text": "｛貯金／体重／人口　…｝を減らす",
                "furigana": "｛貯金／（ちょきん／）たいじゅうじんこうへらす",
                "meaning_vi": "Làm giảm {tiền tiêt kiệm/ cân nặng/ dân số…}.",
                "meaning_en": "Reduce {Savings/Weight/Population...}"
              }
            ],
            "lesson_number": 31
          },
          {
            "vocab": "変わる",
            "furigana": "かわる",
            "meaning_vi": "thay đổi",
            "meaning_en": "change",
            "examples": [
              {
                "example_text": "季節／時代／場所／法律／性格　…｝が変わる",
                "furigana": "季節（きせつ）じだいばしょほうりつせいかくかわる",
                "meaning_vi": "{Thời tiết/ thời đại/ địa điểm/ luật pháp/ tính cách…} thay đổi.",
                "meaning_en": "Seasons/Ages/Locations/Laws/Characteristics...} changes"
              }
            ],
            "lesson_number": 31
          },
          {
            "vocab": "変える",
            "furigana": "かえる",
            "meaning_vi": "thay đổi",
            "meaning_en": "change",
            "examples": [
              {
                "example_text": "｛髪型／時間／場所／法律　…｝を変える",
                "furigana": "｛髪型（かみがた）じかんばしょほうりつかえる",
                "meaning_vi": "Thay đổi {kiểu tóc/ thời gian/ địa điểm/ luật pháp…}.",
                "meaning_en": "Change {Hairstyle/Time/Location/Law...}"
              }
            ],
            "lesson_number": 31
          },
          {
            "vocab": "替わる/代わる/換わる",
            "furigana": "かわる/かわる/かわる",
            "meaning_vi": "Thay thế/thay thế/thay thế",
            "meaning_en": "Replace/replace/replace",
            "examples": [
              {
                "example_text": "４月に店長がかわった",
                "furigana": "４月（がつ）てんちょうがかわった",
                "meaning_vi": "Thay quản lí mới vào tháng 4.",
                "meaning_en": "The manager changed in April"
              }
            ],
            "lesson_number": 31
          },
          {
            "vocab": "替える/代える/換える",
            "furigana": "かえる/かえる/かえる",
            "meaning_vi": "Thay thế/thay thế/thay thế",
            "meaning_en": "Replace/replace/replace",
            "examples": [
              {
                "example_text": "千円札を百円玉にかえてもらった",
                "furigana": "千円（せんえん）さつぴゃくえんだまにかえてもらった",
                "meaning_vi": "Tôi muốn đổi tờ nghìn yên qua đồng xu 100 yên.",
                "meaning_en": "I had my 1,000 yen bill replaced with a 100 yen coin."
              }
            ],
            "lesson_number": 31
          },
          {
            "vocab": "返る",
            "furigana": "かえる",
            "meaning_vi": "Trở lại",
            "meaning_en": "Return",
            "examples": [
              {
                "example_text": "友だちに貸したお金が返ってきた",
                "furigana": "友（とも）かかねかえってきた",
                "meaning_vi": "Tiền cho bạn vay đã được trả lại.",
                "meaning_en": "I've got the money I lent my friend back"
              }
            ],
            "lesson_number": 32
          },
          {
            "vocab": "返す",
            "furigana": "かえす",
            "meaning_vi": "trở lại",
            "meaning_en": "return",
            "examples": [
              {
                "example_text": "この本は２週間以内に図書館に返さなければならない",
                "furigana": "この本（ほん）しゅうかんいないとしょかんかえさなければならない",
                "meaning_vi": "Trong vòng hai tuần phải trả lại sách cho thư viện.",
                "meaning_en": "This book must be returned to the library within two weeks."
              }
            ],
            "lesson_number": 32
          },
          {
            "vocab": "譲る",
            "furigana": "ゆずる",
            "meaning_vi": "Cho nó",
            "meaning_en": "For it",
            "examples": [
              {
                "example_text": "電車の中で、お年よりに席をゆずった",
                "furigana": "電車（でんしゃ）なかせきをゆずった",
                "meaning_vi": "Trong xe điện tôi đã nhường ghế cho cụ già.",
                "meaning_en": "I gave up my seat on the train since I was older."
              }
            ],
            "lesson_number": 32
          },
          {
            "vocab": "助かる",
            "furigana": "たすかる",
            "meaning_vi": "Nó hữu ích",
            "meaning_en": "It is useful",
            "examples": [
              {
                "example_text": "飛行機が落ちたが、３人が助かった",
                "furigana": "飛行機（ひこうき）おにんたすかった",
                "meaning_vi": "Máy bay rơi, có ba người sống sót.",
                "meaning_en": "The plane fell, but three people saved"
              }
            ],
            "lesson_number": 32
          },
          {
            "vocab": "助ける",
            "furigana": "たすける",
            "meaning_vi": "giúp đỡ",
            "meaning_en": "help",
            "examples": [
              {
                "example_text": "川に落ちた子どもを助けた",
                "furigana": "川（かわ）おこたすけた",
                "meaning_vi": "Cứu đứa trẻ bị rơi xuống sông.",
                "meaning_en": "I saved a child who fell into the river"
              }
            ],
            "lesson_number": 32
          },
          {
            "vocab": "いじめる",
            "furigana": "いじめる",
            "meaning_vi": "bắt nạt",
            "meaning_en": "bully",
            "examples": [
              {
                "example_text": "弟／ネコ　…｝をいじめる",
                "furigana": "弟（おとうと）／ネコ　…｝をいじめる",
                "meaning_vi": "Bắt nạt em, bắt nạt con mèo….",
                "meaning_en": "Bullying my brother/cat..."
              }
            ],
            "lesson_number": 32
          },
          {
            "vocab": "だます",
            "furigana": "だます",
            "meaning_vi": "ngu xuẩn",
            "meaning_en": "stupid",
            "examples": [
              {
                "example_text": "彼は「独身だ」とだまして５人の女性とつきあっていた",
                "furigana": "彼（かれ）どくしんにんじょせいとつきあっていた",
                "meaning_vi": "Anh ta nói dối rằng độc thân và cặp kè cùng lúc 5 cô gái.",
                "meaning_en": "He cheated on five women saying he was \"single.\""
              }
            ],
            "lesson_number": 32
          },
          {
            "vocab": "盗む",
            "furigana": "ぬすむ",
            "meaning_vi": "ăn cắp",
            "meaning_en": "steal",
            "examples": [
              {
                "example_text": "留守中にどろぼうに入られて、お金をぬすまれてしまった",
                "furigana": "留守中（るすちゅう）はいかねをぬすまれてしまった",
                "meaning_vi": "Khi vắng nhà thì bị kẻ trộm lẻn vào, lấy cắp mất tiền.",
                "meaning_en": "I was left alone and was forced to get into a thief and my money was stolen."
              }
            ],
            "lesson_number": 32
          },
          {
            "vocab": "刺さる",
            "furigana": "ささる",
            "meaning_vi": "Nó dính",
            "meaning_en": "It is sticky",
            "examples": [
              {
                "example_text": "指にとげが刺さって痛い",
                "furigana": "指（ゆび）さいたい",
                "meaning_vi": "Gai đâm vào ngón tay đau quá.",
                "meaning_en": "A thorn sticks to my finger and it hurts"
              }
            ],
            "lesson_number": 32
          },
          {
            "vocab": "刺す",
            "furigana": "さす",
            "meaning_vi": "Dán",
            "meaning_en": "Paste",
            "examples": [
              {
                "example_text": "指にとげが刺してしまった",
                "furigana": "指（ゆび）さしてしまった",
                "meaning_vi": "Đâm gai vào ngón tay.",
                "meaning_en": "A thorn stuck in my finger"
              }
            ],
            "lesson_number": 32
          },
          {
            "vocab": "殺す",
            "furigana": "ころす",
            "meaning_vi": "giết",
            "meaning_en": "kill",
            "examples": [
              {
                "example_text": "ゴキブリをスリッパでたたいて殺した",
                "furigana": "ゴキブリをスリッパでたたいて殺（ころ）した",
                "meaning_vi": "Dùng dép đập chết con gián.",
                "meaning_en": "I killed a cockroach by hitting it with slippers."
              }
            ],
            "lesson_number": 32
          },
          {
            "vocab": "隠れる",
            "furigana": "かくれる",
            "meaning_vi": "trốn",
            "meaning_en": "hide",
            "examples": [
              {
                "example_text": "逃げた犯人は空き家にかくれていた",
                "furigana": "逃（に）はんにんあやにかくれていた",
                "meaning_vi": "Tên tội phạm bỏ chạy đang ẩn núp trong ngôi nhà hoang.",
                "meaning_en": "The perpetrator who escaped was hidden in an empty house."
              }
            ],
            "lesson_number": 32
          },
          {
            "vocab": "隠す",
            "furigana": "かくす",
            "meaning_vi": "trốn",
            "meaning_en": "hide",
            "examples": [
              {
                "example_text": "お金を引き出しの奥にかくした",
                "furigana": "お金（かね）ひだおくにかくした",
                "meaning_vi": "Giấu tiền sâu bên trong ngăn kéo.",
                "meaning_en": "I hid the money deep inside the withdrawal"
              }
            ],
            "lesson_number": 32
          },
          {
            "vocab": "埋まる",
            "furigana": "うまる",
            "meaning_vi": "Điền",
            "meaning_en": "Fill",
            "examples": [
              {
                "example_text": "山がくずれて家がうまってしまった",
                "furigana": "山（やま）いえがうまってしまった",
                "meaning_vi": "Núi lở, nhà cửa bị chôn vùi.",
                "meaning_en": "The mountains have fallen and the house has been buried"
              }
            ],
            "lesson_number": 32
          },
          {
            "vocab": "埋める",
            "furigana": "うめる",
            "meaning_vi": "Điền vào",
            "meaning_en": "Fill in",
            "examples": [
              {
                "example_text": "あなを掘ってごみをうめた",
                "furigana": "あなを掘（ほ）ってごみをうめた",
                "meaning_vi": "Đào lỗ rồi chôn rác.",
                "meaning_en": "I dug you and groaned the trash"
              }
            ],
            "lesson_number": 32
          },
          {
            "vocab": "囲む",
            "furigana": "かこむ",
            "meaning_vi": "Bao quanh",
            "meaning_en": "Surround",
            "examples": [
              {
                "example_text": "テーブルを囲んで座る",
                "furigana": "テーブルを囲（かこ）すわる",
                "meaning_vi": "Ngồi quanh bàn.",
                "meaning_en": "Sit around the table"
              }
            ],
            "lesson_number": 32
          },
          {
            "vocab": "詰まる",
            "furigana": "つまる",
            "meaning_vi": "Nó được đóng gói",
            "meaning_en": "It is packaged",
            "examples": [
              {
                "example_text": "かばんにたくさん荷物がつまっていて重い",
                "furigana": "かばんにたくさん荷物（にもつ）おもい",
                "meaning_vi": "Hành lí chất đầy trong cặp nặng thật .",
                "meaning_en": "A lot of luggage is packed in my bag and it's heavy"
              }
            ],
            "lesson_number": 33
          },
          {
            "vocab": "詰める",
            "furigana": "つめる",
            "meaning_vi": "Đóng gói nó",
            "meaning_en": "Packed it",
            "examples": [
              {
                "example_text": "かばんに荷物をつめる",
                "furigana": "かばんに荷物（にもつ）をつめる",
                "meaning_vi": "Nhét đầy đồ vào cặp.",
                "meaning_en": "Pack your bags in your bag"
              }
            ],
            "lesson_number": 33
          },
          {
            "vocab": "開く",
            "furigana": "ひらく",
            "meaning_vi": "mở",
            "meaning_en": "open",
            "examples": [
              {
                "example_text": "ドアが開く",
                "furigana": "ドアが開（ひら）く",
                "meaning_vi": "Mở cửa.",
                "meaning_en": "The door opens"
              }
            ],
            "lesson_number": 33
          },
          {
            "vocab": "閉じる",
            "furigana": "とじる",
            "meaning_vi": "đóng",
            "meaning_en": "close",
            "examples": [
              {
                "example_text": "エレベーターのドアが閉じた",
                "furigana": "エレベーターのドアが閉（と）じた",
                "meaning_vi": "Đóng cửa thang máy.",
                "meaning_en": "The elevator door closed"
              }
            ],
            "lesson_number": 33
          },
          {
            "vocab": "飛ぶ",
            "furigana": "とぶ",
            "meaning_vi": "nhảy",
            "meaning_en": "dance",
            "examples": [
              {
                "example_text": "鳥が空を飛んでいる",
                "furigana": "鳥（とり）そらとんでいる",
                "meaning_vi": "Chim đang bay trên bầu trời.",
                "meaning_en": "Birds are flying in the sky"
              }
            ],
            "lesson_number": 33
          },
          {
            "vocab": "飛ばす",
            "furigana": "とばす",
            "meaning_vi": "Tôi sẽ bay",
            "meaning_en": "I will fly",
            "examples": [
              {
                "example_text": "紙飛行機を飛ばす",
                "furigana": "紙（かみ）ひこうきとばす",
                "meaning_vi": "Phóng máy bay giấy.",
                "meaning_en": "Flying a paper plane"
              }
            ],
            "lesson_number": 33
          },
          {
            "vocab": "振る",
            "furigana": "ふる",
            "meaning_vi": "lắc",
            "meaning_en": "shake",
            "examples": [
              {
                "example_text": "手をふる",
                "furigana": "手（て）をふる",
                "meaning_vi": "Vẫy tay.",
                "meaning_en": "Shake your hands"
              }
            ],
            "lesson_number": 34
          },
          {
            "vocab": "めくる",
            "furigana": "めくる",
            "meaning_vi": "lật lại",
            "meaning_en": "turn over",
            "examples": [
              {
                "example_text": "｛カード／ページ／カレンダー　…｝をめくる",
                "furigana": "｛カード／ページ／カレンダー　…｝をめくる",
                "meaning_vi": "Lật {card/ trang/ lịch…}.",
                "meaning_en": "Turn {cards/pages/calendar...}"
              }
            ],
            "lesson_number": 34
          },
          {
            "vocab": "見かける",
            "furigana": "みかける",
            "meaning_vi": "nhìn thấy",
            "meaning_en": "see",
            "examples": [
              {
                "example_text": "街で偶然、昔の友だちを見かけた",
                "furigana": "街（まち）ぐうぜんむかしともみかけた",
                "meaning_vi": "Tình cờ gặp bạn cũ trên phố.",
                "meaning_en": "I happened to see an old friend in the city"
              }
            ],
            "lesson_number": 34
          },
          {
            "vocab": "確かめる",
            "furigana": "たしかめる",
            "meaning_vi": "Kiểm tra",
            "meaning_en": "Check",
            "examples": [
              {
                "example_text": "フャックスが届いたかどうか、相手に電話して確かめた",
                "furigana": "フャックスが届（とど）あいてでんわたしかめた",
                "meaning_vi": "Tôi gọi điện xác nhận với đối tác xem là fax đã gửi đến chưa.",
                "meaning_en": "I called the other person to see if the fax had arrived."
              }
            ],
            "lesson_number": 34
          },
          {
            "vocab": "試す",
            "furigana": "ためす",
            "meaning_vi": "thử",
            "meaning_en": "try",
            "examples": [
              {
                "example_text": "洋服が似合うかどうか、着て試してみた",
                "furigana": "洋服（ようふく）にあきためしてみた",
                "meaning_vi": "Tôi đã mặc thử xem có hợp với bộ Tây phục không.",
                "meaning_en": "I tried wearing it to see if it suits my clothes."
              }
            ],
            "lesson_number": 34
          },
          {
            "vocab": "繰り返す",
            "furigana": "くりかえす",
            "meaning_vi": "lặp lại",
            "meaning_en": "repeat",
            "examples": [
              {
                "example_text": "「同じ失敗をくり返してはいけません」",
                "furigana": "「同（おな）しっぱいかえしてはいけません」",
                "meaning_vi": "\"Không được lặp lại cùng một sai lầm.\"",
                "meaning_en": "\"You shouldn't make the same mistakes over and over again.\""
              }
            ],
            "lesson_number": 34
          },
          {
            "vocab": "訳す",
            "furigana": "やくす",
            "meaning_vi": "Dịch",
            "meaning_en": "Pandemic",
            "examples": [
              {
                "example_text": "英語を日本語に訳す",
                "furigana": "英語（えいご）にほんごやくす",
                "meaning_vi": "Dịch tiếng Anh sang tiếng Nhật.",
                "meaning_en": "Translation of English into Japanese"
              }
            ],
            "lesson_number": 34
          },
          {
            "vocab": "行う",
            "furigana": "おこなう",
            "meaning_vi": "chỉ đạo",
            "meaning_en": "direct",
            "examples": [
              {
                "example_text": "｛試験／会議／スピーチ／イベント　…｝を行う",
                "furigana": "｛試験（しけん）かいぎおこなう",
                "meaning_vi": "Tổ chức {kì thi/ cuộc hop/ thuyết trình/ sự kiện…}.",
                "meaning_en": "Conduct {Exams/Conferences/Speeches/Events...}"
              }
            ],
            "lesson_number": 34
          },
          {
            "vocab": "間違う",
            "furigana": "まちがう",
            "meaning_vi": "Nó sai",
            "meaning_en": "It is wrong",
            "examples": [
              {
                "example_text": "この計算は間違っている",
                "furigana": "この計算（けいさん）まちがっている",
                "meaning_vi": "Tính toán này bị sai.",
                "meaning_en": "This calculation is wrong"
              }
            ],
            "lesson_number": 34
          },
          {
            "vocab": "間違える",
            "furigana": "まちがえる",
            "meaning_vi": "sai lầm",
            "meaning_en": "mistake",
            "examples": [
              {
                "example_text": "テストの答えを間違えた",
                "furigana": "テストの答（こた）まちがえた",
                "meaning_vi": "Trả lời sai câu hỏi kiểm tra.",
                "meaning_en": "I got the answer to the test wrong"
              }
            ],
            "lesson_number": 34
          },
          {
            "vocab": "許す",
            "furigana": "ゆるす",
            "meaning_vi": "tha thứ",
            "meaning_en": "forgive",
            "examples": [
              {
                "example_text": "ひどいことを言われてけんかになったが、相手が謝ったので許してあげた",
                "furigana": "ひどいことを言（い）あいてあやまゆるしてあげた",
                "meaning_vi": "Bị nói những lời tồi tệ nên đã cải nhau nhưng đối phương đã xin lỗi nên tôi đã tha thứ.",
                "meaning_en": "We got into a fight after something terrible said, but the other person apologized so I forgive him."
              }
            ],
            "lesson_number": 34
          },
          {
            "vocab": "慣れる",
            "furigana": "なれる",
            "meaning_vi": "Làm quen với nó",
            "meaning_en": "Get acquainted with it",
            "examples": [
              {
                "example_text": "日本へ来て半年たって、生活にも慣れた",
                "furigana": "日本（にほん）きはんとしせいかつなれた",
                "meaning_vi": "Tôi đến Nhật Bản nửa năm, cũng đã quen cuộc sống ở đây.",
                "meaning_en": "Six months into Japan, I've become accustomed to my lifestyle."
              }
            ],
            "lesson_number": 34
          },
          {
            "vocab": "慣らす",
            "furigana": "ならす",
            "meaning_vi": "Làm quen với nó",
            "meaning_en": "Get acquainted with it",
            "examples": [
              {
                "example_text": "準備運動をして体を慣らしてからプールに入ったほうがいい",
                "furigana": "準備（じゅんび）うんどうからだなはいったほうがいい",
                "meaning_vi": "Nên chuẩn bị vận động cho quen cơ thể rồi xuống hồ bơi thì tốt.",
                "meaning_en": "It's better to warm up and get used to it before going into the pool"
              }
            ],
            "lesson_number": 34
          },
          {
            "vocab": "立つ",
            "furigana": "たつ",
            "meaning_vi": "đứng",
            "meaning_en": "stand",
            "examples": [
              {
                "example_text": "「名前を呼ばれたら立ってください」",
                "furigana": "「名前（なまえ）よたってください」",
                "meaning_vi": "Sau khi được gọi tên thì hãy đứng dậy.",
                "meaning_en": "\"Stay if you call me your name.\""
              }
            ],
            "lesson_number": 34
          },
          {
            "vocab": "立てる",
            "furigana": "たてる",
            "meaning_vi": "Đứng lên",
            "meaning_en": "Stand up",
            "examples": [
              {
                "example_text": "屋根の上にアンテナを立てる",
                "furigana": "屋根（やね）うえたてる",
                "meaning_vi": "Dựng ăng ten trên mái nhà.",
                "meaning_en": "Set up the antenna on the roof"
              }
            ],
            "lesson_number": 34
          },
          {
            "vocab": "建つ",
            "furigana": "たつ",
            "meaning_vi": "đứng",
            "meaning_en": "stand",
            "examples": [
              {
                "example_text": "家の前に大きなマンションが建って",
                "furigana": "家（いえ）まえおおたって",
                "meaning_vi": "Chung cư lớn được xây trước nhà.",
                "meaning_en": "A large apartment building in front of the house"
              }
            ],
            "lesson_number": 35
          },
          {
            "vocab": "建てる",
            "furigana": "たてる",
            "meaning_vi": "xây dựng",
            "meaning_en": "build",
            "examples": [
              {
                "example_text": "都心に家を建てるのは大変だ",
                "furigana": "都心（としん）いえたたいへんだ",
                "meaning_vi": "Xây nhà ở trung tâm thành phố rất vất vả.",
                "meaning_en": "Building a house in the city centre is tough"
              }
            ],
            "lesson_number": 35
          },
          {
            "vocab": "育つ",
            "furigana": "そだつ",
            "meaning_vi": "Lớn lên",
            "meaning_en": "Grow up",
            "examples": [
              {
                "example_text": "雨が多い年は、米がよく育つ",
                "furigana": "雨（あめ）おおとしこめそだつ",
                "meaning_vi": "Năm nay mưa nhiều lúa phát triển tốt.",
                "meaning_en": "Rice grows well in rainy years"
              }
            ],
            "lesson_number": 35
          },
          {
            "vocab": "育てる",
            "furigana": "そだてる",
            "meaning_vi": "Nâng lên",
            "meaning_en": "Up",
            "examples": [
              {
                "example_text": "母は５人の子どもを育てた",
                "furigana": "母（はは）にんこそだてた",
                "meaning_vi": "Mẹ tôi đã nuôi nấng 5 đứa con.",
                "meaning_en": "My mother raised five children"
              }
            ],
            "lesson_number": 35
          },
          {
            "vocab": "生える",
            "furigana": "はえる",
            "meaning_vi": "Nó phát triển",
            "meaning_en": "It develops",
            "examples": [
              {
                "example_text": "｛髪／ひげ／歯／草／かび　…｝が生える",
                "furigana": "｛髪（かみ）はくさはえる",
                "meaning_vi": "{Tóc, râu ,răng, mốc…} mọc lên.",
                "meaning_en": "{Hair/Beard/Tooth/Grass/Mold...} grows"
              }
            ],
            "lesson_number": 35
          },
          {
            "vocab": "生やす",
            "furigana": "はやす",
            "meaning_vi": "phát triển",
            "meaning_en": "develop",
            "examples": [
              {
                "example_text": "ひげを生やす",
                "furigana": "ひげを生（は）やす",
                "meaning_vi": "Mọc râu.",
                "meaning_en": "Grow a beard"
              }
            ],
            "lesson_number": 35
          },
          {
            "vocab": "汚れる",
            "furigana": "よごれる",
            "meaning_vi": "Bị bẩn",
            "meaning_en": "Dirty",
            "examples": [
              {
                "example_text": "空気の汚れたところには住みたくない",
                "furigana": "空気（くうき）よごすみたくない",
                "meaning_vi": "Tôi không muốn sống trong một nơi ô nhiễm không khí.",
                "meaning_en": "I don't want to live in dirty air"
              }
            ],
            "lesson_number": 35
          },
          {
            "vocab": "汚す",
            "furigana": "よごす",
            "meaning_vi": "Vết bẩn",
            "meaning_en": "Stain",
            "examples": [
              {
                "example_text": "どろ遊びをして服を汚した",
                "furigana": "どろ遊（あそ）ふくよごした",
                "meaning_vi": "Nghịch bùn làm bẩn quần áo.",
                "meaning_en": "I played muddy and tainted my clothes"
              }
            ],
            "lesson_number": 35
          },
          {
            "vocab": "壊れる",
            "furigana": "こわれる",
            "meaning_vi": "Nó bị hỏng",
            "meaning_en": "It is broken",
            "examples": [
              {
                "example_text": "｛家／家具／電気製品　…｝を壊れる",
                "furigana": "｛家（いえ）かぐでんきせいひんこわれる",
                "meaning_vi": "{Nhà/ đồ đạc/ đồ điện…} bị hư hỏng.",
                "meaning_en": "Broken {home/furniture/electrical products...}"
              }
            ],
            "lesson_number": 35
          },
          {
            "vocab": "壊す",
            "furigana": "こわす",
            "meaning_vi": "phá vỡ",
            "meaning_en": "disrupt",
            "examples": [
              {
                "example_text": "｛家／家具／電気製品　…｝を壊す",
                "furigana": "｛家（いえ）かぐでんきせいひんこわす",
                "meaning_vi": "Làm hỏng {nhà/ đồ đạc/ đồ điện…}.",
                "meaning_en": "Destroy {Home/Furniture/Electrical Products...}"
              }
            ],
            "lesson_number": 35
          },
          {
            "vocab": "割れる",
            "furigana": "われる",
            "meaning_vi": "Nó bị nứt",
            "meaning_en": "It is cracked",
            "examples": [
              {
                "example_text": "｛ガラス／皿／コップ　…｝が割れる",
                "furigana": "｛ガラス／皿（さら）われる",
                "meaning_vi": "{Kính( thủy tinh)/ đĩa/ cóc…} bị vỡ.",
                "meaning_en": "{Glass/Plate/Cup...} breaks"
              }
            ],
            "lesson_number": 35
          },
          {
            "vocab": "割る",
            "furigana": "わる",
            "meaning_vi": "chia",
            "meaning_en": "chia",
            "examples": [
              {
                "example_text": "｛ガラス／皿／コップ　…｝を割る",
                "furigana": "｛ガラス／皿（さら）わる",
                "meaning_vi": "Làm {kính / đĩa/ cốc…} vỡ.",
                "meaning_en": "Crack {Glass/Plate/Cup...}"
              }
            ],
            "lesson_number": 35
          },
          {
            "vocab": "折れる",
            "furigana": "おれる",
            "meaning_vi": "Nó phá vỡ",
            "meaning_en": "It breaks",
            "examples": [
              {
                "example_text": "強い風で枝が折れた",
                "furigana": "強（つよ）かぜえだおれた",
                "meaning_vi": "Cành cây bị gãy vì gió mạnh.",
                "meaning_en": "The strong wind broke the branch"
              }
            ],
            "lesson_number": 35
          },
          {
            "vocab": "折る",
            "furigana": "おる",
            "meaning_vi": "Nếp gấp",
            "meaning_en": "Fold",
            "examples": [
              {
                "example_text": "スキーをして、店の骨を折った",
                "furigana": "スキーをして、店（みせ）ほねおった",
                "meaning_vi": "Tôi trượt tuyết và bị gãy chân.",
                "meaning_en": "I skied and broke the store"
              }
            ],
            "lesson_number": 35
          },
          {
            "vocab": "破れる",
            "furigana": "やぶれる",
            "meaning_vi": "xé",
            "meaning_en": "rip",
            "examples": [
              {
                "example_text": "｛紙／本／布／服　…｝が破れる",
                "furigana": "｛紙（かみ）ほんぬのふくやぶれる",
                "meaning_vi": "{Giấy/ sách/ vải/ áo…} bị rách.",
                "meaning_en": "{Paper/Book/Clothing...} torn"
              }
            ],
            "lesson_number": 35
          },
          {
            "vocab": "破る",
            "furigana": "やぶる",
            "meaning_vi": "Phá vỡ",
            "meaning_en": "Disrupt",
            "examples": [
              {
                "example_text": "｛紙／ノート／布／服　…｝を破る",
                "furigana": "｛紙（かみ）ぬのふくやぶる",
                "meaning_vi": "Làm rách {giấy/ vở/ vải/ áo…}.",
                "meaning_en": "Break {paper/notebook/clothing...}"
              }
            ],
            "lesson_number": 35
          },
          {
            "vocab": "曲がる",
            "furigana": "まがる",
            "meaning_vi": "Nó bị uốn cong",
            "meaning_en": "It is bent",
            "examples": [
              {
                "example_text": "曲がった道",
                "furigana": "曲（ま）みち",
                "meaning_vi": "Khúc đường cong.",
                "meaning_en": "A curved road"
              }
            ],
            "lesson_number": 35
          },
          {
            "vocab": "曲げる",
            "furigana": "まげる",
            "meaning_vi": "uốn cong",
            "meaning_en": "curved",
            "examples": [
              {
                "example_text": "｛針金／ひざ／腰　…｝を曲げる",
                "furigana": "｛針金（はりがね）こしまげる",
                "meaning_vi": "Bẻ cong, gập dây kim loại, đầu gối…",
                "meaning_en": "Bend the wire/knee/hide..."
              }
            ],
            "lesson_number": 35
          },
          {
            "vocab": "外れる",
            "furigana": "はずれる",
            "meaning_vi": "Nó tắt",
            "meaning_en": "It turns off",
            "examples": [
              {
                "example_text": "ボタンがはずれる",
                "furigana": "ボタンがはずれる",
                "meaning_vi": "Nút rớt ra.",
                "meaning_en": "The button is unlocked"
              }
            ],
            "lesson_number": 36
          },
          {
            "vocab": "外す",
            "furigana": "はずす",
            "meaning_vi": "di dời",
            "meaning_en": "relocate",
            "examples": [
              {
                "example_text": "｛メガネ／腕時計／ボタン　…｝をはずす",
                "furigana": "｛メガネ／腕（うで）どけい／ボタン　…｝をはずす",
                "meaning_vi": "Tháo {kính/ đồng hồ đeo tay/ nút…}.",
                "meaning_en": "Remove the glasses/watch/buttons..."
              }
            ],
            "lesson_number": 36
          },
          {
            "vocab": "揺れる",
            "furigana": "ゆれる",
            "meaning_vi": "Run rẩy",
            "meaning_en": "Trembling",
            "examples": [
              {
                "example_text": "風で木の葉がゆれている",
                "furigana": "風（かぜ）きはがゆれている",
                "meaning_vi": "Lá cây lay động trong gió.",
                "meaning_en": "The leaves are shaking with the wind"
              }
            ],
            "lesson_number": 36
          },
          {
            "vocab": "揺らす",
            "furigana": "ゆらす",
            "meaning_vi": "Lắc",
            "meaning_en": "Shake",
            "examples": [
              {
                "example_text": "子どもの乗ったブランコをゆらして遊ばせた",
                "furigana": "子（こ）のあそばせた",
                "meaning_vi": "Cái xích đu mà đứa trẻ leo lên được đu qua đu lại.",
                "meaning_en": "I let my child play by swinging the swing on his"
              }
            ],
            "lesson_number": 36
          },
          {
            "vocab": "流れる",
            "furigana": "ながれる",
            "meaning_vi": "Nó chảy",
            "meaning_en": "It flows",
            "examples": [
              {
                "example_text": "町の中心を大きな川が流れている",
                "furigana": "町（まち）ちゅうしんおおかわながれている",
                "meaning_vi": "Giữa thành phố có con sông rất lớn chảy qua.",
                "meaning_en": "A large river flows through the center of the town"
              }
            ],
            "lesson_number": 36
          },
          {
            "vocab": "流す",
            "furigana": "ながす",
            "meaning_vi": "Hãy để nó chảy",
            "meaning_en": "Let it flow",
            "examples": [
              {
                "example_text": "汚れた水を川に流してはいけない",
                "furigana": "汚（よご）みずかわながしてはいけない",
                "meaning_vi": "Không được cho nước bẩn lan ra ngoài sông.",
                "meaning_en": "Do not let dirty water flow into the river"
              }
            ],
            "lesson_number": 36
          },
          {
            "vocab": "濡れる",
            "furigana": "ぬれる",
            "meaning_vi": "Bị ướt",
            "meaning_en": "Wet",
            "examples": [
              {
                "example_text": "雨にぬれて、かぜをひいた",
                "furigana": "雨（あめ）にぬれて、かぜをひいた",
                "meaning_vi": "Tôi ướt mưa và bị cảm lạnh.",
                "meaning_en": "I got wet in the rain and caught a cold"
              }
            ],
            "lesson_number": 36
          },
          {
            "vocab": "濡らす",
            "furigana": "ぬらす",
            "meaning_vi": "ướt",
            "meaning_en": "wet",
            "examples": [
              {
                "example_text": "水をこぼして、服をぬらしてしまった",
                "furigana": "水（みず）ふくをぬらしてしまった",
                "meaning_vi": "Tôi làm đổ nước nên ướt áo.",
                "meaning_en": "I spilled water and wetted my clothes"
              }
            ],
            "lesson_number": 36
          },
          {
            "vocab": "迷う",
            "furigana": "まよう",
            "meaning_vi": "Tôi bối rối",
            "meaning_en": "I am confused",
            "examples": [
              {
                "example_text": "道に迷う",
                "furigana": "道（みち）まよう",
                "meaning_vi": "Lạc đường.",
                "meaning_en": "Get lost"
              }
            ],
            "lesson_number": 36
          },
          {
            "vocab": "悩む",
            "furigana": "なやむ",
            "meaning_vi": "lo lắng",
            "meaning_en": "worry",
            "examples": [
              {
                "example_text": "就職するか、進学するか、悩んでいる",
                "furigana": "就職（しゅうしょく）しんがくなやんでいる",
                "meaning_vi": "Tôi lo lắng về việc tìm việc hay học lên tiếp.",
                "meaning_en": "I'm wondering whether to get a job or go to college"
              }
            ],
            "lesson_number": 36
          },
          {
            "vocab": "慌てる",
            "furigana": "あわてる",
            "meaning_vi": "hoảng loạn",
            "meaning_en": "panic",
            "examples": [
              {
                "example_text": "学校に遅れそうになって、あわてて家を出た",
                "furigana": "学校（がっこう）おくいえでた",
                "meaning_vi": "Sắp muộn học nên tôi vội vàng phi nhanh ra khỏi nhà.",
                "meaning_en": "I was about to be late for school and hurriedly left the house."
              }
            ],
            "lesson_number": 36
          },
          {
            "vocab": "覚める",
            "furigana": "さめる",
            "meaning_vi": "thức dậy",
            "meaning_en": "wake up",
            "examples": [
              {
                "example_text": "昨夜は暑くて、夜中に何度も目が覚めた",
                "furigana": "昨夜（さくや）あつよなかなんどめさめた",
                "meaning_vi": "Đêm qua rất nóng nên giữa đêm tôi đã tỉnh dậy không biết bao nhiêu lần.",
                "meaning_en": "It was hot last night and I woke up many times in the middle of the night."
              }
            ],
            "lesson_number": 37
          },
          {
            "vocab": "覚ます",
            "furigana": "さます",
            "meaning_vi": "Tôi thức dậy",
            "meaning_en": "I wake up",
            "examples": [
              {
                "example_text": "目を覚ますと、もう１０時だった",
                "furigana": "目（め）さじだった",
                "meaning_vi": "Khi mở mắt thì đã 10 giờ rồi.",
                "meaning_en": "When I woke up, it was already 10 o'clock."
              }
            ],
            "lesson_number": 37
          },
          {
            "vocab": "眠る",
            "furigana": "ねむる",
            "meaning_vi": "ngủ",
            "meaning_en": "Sleep",
            "examples": [
              {
                "example_text": "入試の前の日、緊張してよくぬ眠れなかった",
                "furigana": "入試（にゅうし）まえひきんちょうねむれなかった",
                "meaning_vi": "Hôm trước ngày thi tôi rất căng thẳng và ngủ không ngon.",
                "meaning_en": "The day before the entrance exam I was so nervous I couldn't sleep well"
              }
            ],
            "lesson_number": 37
          },
          {
            "vocab": "祈る",
            "furigana": "いのる",
            "meaning_vi": "cầu nguyện",
            "meaning_en": "pray",
            "examples": [
              {
                "example_text": "家族の健康を神に祈った",
                "furigana": "家族（かぞく）けんこうかみいのった",
                "meaning_vi": "Tôi cầu sức khỏe cho gia đình với các thánh thần.",
                "meaning_en": "I prayed to God for the health of my family"
              }
            ],
            "lesson_number": 37
          },
          {
            "vocab": "祝う",
            "furigana": "いわう",
            "meaning_vi": "kỉ niệm",
            "meaning_en": "memory",
            "examples": [
              {
                "example_text": "｛新年／誕生日／成功　…｝を祝って乾杯した",
                "furigana": "｛新年（しんねん）たんじょうびせいこういわかんぱいした",
                "meaning_vi": "Chúc mừng {năm mới/ sinh nhật/ thành công…} cạn li!",
                "meaning_en": "Cheers to celebrate {New Year/Birthday/Success...}"
              }
            ],
            "lesson_number": 37
          },
          {
            "vocab": "感じる",
            "furigana": "かんじる",
            "meaning_vi": "cảm thấy",
            "meaning_en": "feel",
            "examples": [
              {
                "example_text": "｛寒さ／痛み／空腹／甘み／ゆれ　…｝を感じる",
                "furigana": "｛寒（さむ）いたくうふくあまかんじる",
                "meaning_vi": "Cảm giác {lạnh/ đau / đói/ rung…}.",
                "meaning_en": "Feeling {Cold/Pain/Hungry/Sweetness/Sway...}"
              }
            ],
            "lesson_number": 37
          },
          {
            "vocab": "クラスメート",
            "furigana": "クラスメート",
            "meaning_vi": "Bạn cùng lớp",
            "meaning_en": "Classmate",
            "examples": [
              {
                "example_text": "クラスメートと仲よくする",
                "furigana": "クラスメートと仲（なか）よくする",
                "meaning_vi": "Quan hệ tốt với bạn trong lớp.",
                "meaning_en": "Getting along with your classmates"
              }
            ],
            "lesson_number": 38
          },
          {
            "vocab": "グループ",
            "furigana": "グループ",
            "meaning_vi": "nhóm",
            "meaning_en": "group",
            "examples": [
              {
                "example_text": "３人のグループで旅行をする",
                "furigana": "３人（にん）りょこうをする",
                "meaning_vi": "Du lịch nhóm 3 người.",
                "meaning_en": "Traveling in a group of three"
              }
            ],
            "lesson_number": 38
          },
          {
            "vocab": "チーム",
            "furigana": "チーム",
            "meaning_vi": "đội",
            "meaning_en": "team",
            "examples": [
              {
                "example_text": "私たちのチームが勝った",
                "furigana": "私（わたし）かった",
                "meaning_vi": "Đội chúng ta đã thắng.",
                "meaning_en": "Our team won"
              }
            ],
            "lesson_number": 38
          },
          {
            "vocab": "プロフェッショナル",
            "furigana": "プロフェッショナルプロ",
            "meaning_vi": "chuyên nghiệp",
            "meaning_en": "professional",
            "examples": [
              {
                "example_text": "プロのサッカー選手になりたい",
                "furigana": "プロのサッカー選手（せんしゅ）になりたい",
                "meaning_vi": "Tôi muốn trở thành một cầu thủ bóng đá chuyên nghiêp.",
                "meaning_en": "I want to be a professional soccer player"
              }
            ],
            "lesson_number": 38
          },
          {
            "vocab": "アマチュア",
            "furigana": "アマチュアアマ",
            "meaning_vi": "nghiệp dư",
            "meaning_en": "amateur",
            "examples": [
              {
                "example_text": "この絵はアマチュアの作品とは思えないほどすばらしい",
                "furigana": "この絵（え）さくひんおもえないほどすばらしい",
                "meaning_vi": "Bức tranh tuyệt đến mức tôi không thể nghĩ đó là một tác phẩm nghiệp dư.",
                "meaning_en": "This picture is so amazing that it's hard to believe it's an amateur work"
              }
            ],
            "lesson_number": 38
          },
          {
            "vocab": "トレーニング",
            "furigana": "トレーニング",
            "meaning_vi": "đào tạo",
            "meaning_en": "train",
            "examples": [
              {
                "example_text": "勝つためには毎日のトレーニングが必要だ",
                "furigana": "勝（か）まいにちひつようだ",
                "meaning_vi": "Để chiến thắng cần tập luyện mỗi ngày.",
                "meaning_en": "You need daily training to win"
              }
            ],
            "lesson_number": 38
          },
          {
            "vocab": "マッサージ",
            "furigana": "マッサージ",
            "meaning_vi": "mát xa",
            "meaning_en": "massage",
            "examples": [
              {
                "example_text": "頭をマッサージしてもらうと気持ちがいい",
                "furigana": "頭（あたま）きもちがいい",
                "meaning_vi": "Cảm giác thật tuyệt khi được mát xa đầu.",
                "meaning_en": "Getting a massage of your head feels good"
              }
            ],
            "lesson_number": 38
          },
          {
            "vocab": "アドバイス",
            "furigana": "アドバイス",
            "meaning_vi": "khuyên bảo",
            "meaning_en": "advise",
            "examples": [
              {
                "example_text": "後輩に仕事のやり方についてアドバイスをする",
                "furigana": "後輩（こうはい）しごとかたについてアドバイスをする",
                "meaning_vi": "Tôi khuyên đàn em về cách làm việc.",
                "meaning_en": "Give advice to juniors about how to do their job"
              }
            ],
            "lesson_number": 38
          },
          {
            "vocab": "アイデア",
            "furigana": "アイデア",
            "meaning_vi": "Ý tưởng",
            "meaning_en": "Idea",
            "examples": [
              {
                "example_text": "いいアイデアが浮かんだ",
                "furigana": "いいアイデアが浮（う）かんだ",
                "meaning_vi": "Đã nảy ra ý tưởng hay.",
                "meaning_en": "A good idea came up"
              }
            ],
            "lesson_number": 38
          },
          {
            "vocab": "トップ",
            "furigana": "トップ",
            "meaning_vi": "đứng đầu",
            "meaning_en": "head",
            "examples": [
              {
                "example_text": "彼はクラスでトップの成績だ",
                "furigana": "彼（かれ）せいせきだ",
                "meaning_vi": "Anh ấy có thành tích đứng đầu.",
                "meaning_en": "He is the best in his class."
              }
            ],
            "lesson_number": 38
          },
          {
            "vocab": "スピード",
            "furigana": "スピード",
            "meaning_vi": "tốc độ",
            "meaning_en": "speed",
            "examples": [
              {
                "example_text": "「運転手さん、もう少しスピードを上げてください」",
                "furigana": "「運転手（うんてんしゅ）すこあげてください」",
                "meaning_vi": "\"Bác tài ơi, chạy nhanh hơn một chút giúp với.\"",
                "meaning_en": "\"Driver, please speed up a little more.\""
              }
            ],
            "lesson_number": 38
          },
          {
            "vocab": "ラッシュ",
            "furigana": "ラッシュ",
            "meaning_vi": "cây bấc",
            "meaning_en": "wick",
            "examples": [
              {
                "example_text": "年末年始は、帰省ラッシュでチケットがとりにくい",
                "furigana": "年末（ねんまつ）ねんしきせいラッシュでチケットがとりにくい",
                "meaning_vi": "Đầu năm cuối năm là thời gian cao điểm khó mua vé.",
                "meaning_en": "During the New Year holidays, it's difficult to get tickets due to the rush of returning home."
              }
            ],
            "lesson_number": 38
          },
          {
            "vocab": "バイク",
            "furigana": "バイク",
            "meaning_vi": "Xe đạp",
            "meaning_en": "Bicycle",
            "examples": [
              {
                "example_text": "類 オートバイ、原付＜原動機付き時電車",
                "furigana": "類 オートバイ、原付（げんつき）げんどうきつじでんしゃ",
                "meaning_vi": "Motobike/ xe gắn máy",
                "meaning_en": "Types: Motorcycles, mopeds <Trains with prime movers"
              }
            ],
            "lesson_number": 38
          },
          {
            "vocab": "ヘルメット",
            "furigana": "ヘルメット",
            "meaning_vi": "mũ bảo hiểm",
            "meaning_en": "helmet",
            "examples": [
              {
                "example_text": "バイクに乗るときは、ヘルメットをかぶる",
                "furigana": "バイクに乗（の）るときは、ヘルメットをかぶる",
                "meaning_vi": "Khi đi xe máy thì đội mũ bảo hiểm.",
                "meaning_en": "When riding a bike, wear a helmet"
              }
            ],
            "lesson_number": 38
          },
          {
            "vocab": "コンタクトレンズ",
            "furigana": "コンタクトレンズ",
            "meaning_vi": "Kính áp tròng",
            "meaning_en": "Contact lenses",
            "examples": [
              {
                "example_text": "連 ＿を｛する／入れる／はめる／つける｝ <=> ｛はずす／とる｝",
                "furigana": "連 ＿を｛する／入（い）れる／はめる／つける｝ <=> ｛はずす／とる｝",
                "meaning_vi": "Đeo kính <=> bỏ kính ra",
                "meaning_en": "{Add/Add/Added} <=> {Remove/Add}"
              }
            ],
            "lesson_number": 38
          },
          {
            "vocab": "ガラス",
            "furigana": "ガラス",
            "meaning_vi": "Thủy tinh",
            "meaning_en": "Glass",
            "examples": [
              {
                "example_text": "ボールをぶつけて窓ガラスを割ってしまった",
                "furigana": "ボールをぶつけて窓（まど）わってしまった",
                "meaning_vi": "Đánh bóng làm bể kính của sổ.",
                "meaning_en": "I hit a ball and broke the window glass."
              }
            ],
            "lesson_number": 38
          },
          {
            "vocab": "プラスチック",
            "furigana": "プラスチック",
            "meaning_vi": "nhựa",
            "meaning_en": "plastic",
            "examples": [
              {
                "example_text": "「プラスチック製品は生ごみの中にいれないでください」",
                "furigana": "「プラスチック製品（せいひん）なまなかにいれないでください」",
                "meaning_vi": "Đồ nhựa không được cho vào rác phân hủy.",
                "meaning_en": "\"Do not put plastic products in food waste.\""
              }
            ],
            "lesson_number": 38
          },
          {
            "vocab": "ベランダ",
            "furigana": "ベランダ",
            "meaning_vi": "Hiên",
            "meaning_en": "Porch",
            "examples": [
              {
                "example_text": "ベランダに洗たく物を干す",
                "furigana": "ベランダに洗（せん）ものほす",
                "meaning_vi": "Phơi đồ giặt ở ban công.",
                "meaning_en": "Dry the things you want to wash on the balcony"
              }
            ],
            "lesson_number": 38
          },
          {
            "vocab": "ペット",
            "furigana": "ペット",
            "meaning_vi": "Vật nuôi",
            "meaning_en": "Livestock",
            "examples": [
              {
                "example_text": "アパートなので、ペットが飼えない",
                "furigana": "アパートなので、ペットが飼（か）えない",
                "meaning_vi": "Viì là chung cư nên không được nuôi động vật.",
                "meaning_en": "It's an apartment so you can't keep pets"
              }
            ],
            "lesson_number": 38
          },
          {
            "vocab": "ベンチ",
            "furigana": "ベンチ",
            "meaning_vi": "băng ghế",
            "meaning_en": "bench",
            "examples": [
              {
                "example_text": "公園のベンチで休む",
                "furigana": "公園（こうえん）やすむ",
                "meaning_vi": "Nghỉ ngơi trên ghế dài của công viên.",
                "meaning_en": "Rest on a park bench"
              }
            ],
            "lesson_number": 38
          },
          {
            "vocab": "デザイン",
            "furigana": "デザイン",
            "meaning_vi": "thiết kế",
            "meaning_en": "design",
            "examples": [
              {
                "example_text": "あのドレスは色もデザインもいい",
                "furigana": "あのドレスは色（いろ）もデザインもいい",
                "meaning_vi": "Bộ trang phục kia màu cũng như thiết kế đều đẹp.",
                "meaning_en": "That dress has good colour and design"
              }
            ],
            "lesson_number": 38
          },
          {
            "vocab": "バーゲンセール",
            "furigana": "バーゲンセール",
            "meaning_vi": "Bán hàng mặc cả",
            "meaning_en": "Sales bargain",
            "examples": [
              {
                "example_text": "デパートで今バーゲンセールをして  (A) 要る",
                "furigana": "デパートで今（いま）バーゲンセールをして  (A) 要る",
                "meaning_vi": "Đang có giảm giá trong trung tâm mua sắm.",
                "meaning_en": "Have a bargain sale now at a department store (A)"
              }
            ],
            "lesson_number": 38
          },
          {
            "vocab": "パート",
            "furigana": "パート",
            "meaning_vi": "phần",
            "meaning_en": "part",
            "examples": [
              {
                "example_text": "母は週三日、スーパーでパートをしている",
                "furigana": "母（はは）しゅうみっか、スーパーでパートをしている",
                "meaning_vi": "Mẹ tôi làm thêm ở siêu thị 3 ngày 1 tuần.",
                "meaning_en": "My mother works part-time at the supermarket three days a week."
              }
            ],
            "lesson_number": 38
          },
          {
            "vocab": "コンビニエンスストア",
            "furigana": "コンビニエンスストア",
            "meaning_vi": "Cửa hàng tiện lợi",
            "meaning_en": "Convenience store",
            "examples": [],
            "lesson_number": 38
          },
          {
            "vocab": "レジ",
            "furigana": "レジレジスター",
            "meaning_vi": "Máy tính tiền",
            "meaning_en": "Pre -computer",
            "examples": [
              {
                "example_text": "スーパーでレジのアルバイトをしている",
                "furigana": "スーパーでレジのアルバイトをしている",
                "meaning_vi": "Tôi làm thu ngân ở siêu thị.",
                "meaning_en": "I work part-time at the cash register at the supermarket"
              }
            ],
            "lesson_number": 38
          },
          {
            "vocab": "レシート",
            "furigana": "レシート",
            "meaning_vi": "biên lai",
            "meaning_en": "receipt",
            "examples": [
              {
                "example_text": "レジでお金を払って、レシートを受け取る",
                "furigana": "レジでお金（かね）はらうとる",
                "meaning_vi": "Trả tiền ở quầy tính tiền rồi nhận hóa đơn.",
                "meaning_en": "Pay at the cash register and receive your receipt"
              }
            ],
            "lesson_number": 38
          },
          {
            "vocab": "インスタント",
            "furigana": "インスタント",
            "meaning_vi": "lập tức",
            "meaning_en": "instantly",
            "examples": [
              {
                "example_text": "インスタント食品は便利だ",
                "furigana": "インスタント食品（しょくひん）べんりだ",
                "meaning_vi": "Thức ăn nhanh thì tiện lợi.",
                "meaning_en": "Instant food is convenient"
              }
            ],
            "lesson_number": 38
          },
          {
            "vocab": "ファストフード",
            "furigana": "ファストフード",
            "meaning_vi": "Thức ăn nhanh",
            "meaning_en": "Fast food",
            "examples": [
              {
                "example_text": "そばは江戸時代のファストフードだった",
                "furigana": "そばは江戸（えど）じだいのファストフードだった",
                "meaning_vi": "Soba là thức ăn nhanh thời Edo.",
                "meaning_en": "The soba was fast food from the Edo period."
              }
            ],
            "lesson_number": 38
          },
          {
            "vocab": "フルーツ",
            "furigana": "フルーツ",
            "meaning_vi": "hoa quả",
            "meaning_en": "fruit",
            "examples": [
              {
                "example_text": "暖かいところには、いろいろなフルーツがある",
                "furigana": "暖（あたた）かいところには、いろいろなフルーツがある",
                "meaning_vi": "Có nhiều loại trái cây ở vùng ấm áp.",
                "meaning_en": "There are a variety of fruits in the warm place"
              }
            ],
            "lesson_number": 38
          },
          {
            "vocab": "デザート",
            "furigana": "デザート",
            "meaning_vi": "Món tráng miệng",
            "meaning_en": "Dessert",
            "examples": [
              {
                "example_text": "デザートにアイスクリームを食べる",
                "furigana": "デザートにアイスクリームを食（た）べる",
                "meaning_vi": "Ăn kem tráng miệng.",
                "meaning_en": "Eat ice cream for dessert"
              }
            ],
            "lesson_number": 38
          },
          {
            "vocab": "インターネット",
            "furigana": "インターネット",
            "meaning_vi": "internet",
            "meaning_en": "internet",
            "examples": [
              {
                "example_text": "インターネットで世界の環境問題について調べた",
                "furigana": "インターネットで世界（せかい）かんきょうもんだいしらべた",
                "meaning_vi": "Tra cứu vấn đề môi trường của thế giới trên internet.",
                "meaning_en": "We investigated global environmental issues on the Internet"
              }
            ],
            "lesson_number": 38
          },
          {
            "vocab": "チャイム",
            "furigana": "チャイム",
            "meaning_vi": "kêu vang",
            "meaning_en": "chime",
            "examples": [
              {
                "example_text": "授業が始まるとき、チャイムが鳴る",
                "furigana": "授業（じゅぎょう）はじなる",
                "meaning_vi": "Khi bắt đầu tiết học thì chuông reo.",
                "meaning_en": "When class starts, the chimes ring"
              }
            ],
            "lesson_number": 38
          },
          {
            "vocab": "アナウンス",
            "furigana": "アナウンス",
            "meaning_vi": "thông báo",
            "meaning_en": "Notification",
            "examples": [
              {
                "example_text": "電車の中でアナウンスを聞く",
                "furigana": "電車（でんしゃ）なかきく",
                "meaning_vi": "Nghe thông báo trên tàu điện.",
                "meaning_en": "Listen to the announcement on the train"
              }
            ],
            "lesson_number": 38
          },
          {
            "vocab": "メッセージ",
            "furigana": "メッセージ",
            "meaning_vi": "tin nhắn",
            "meaning_en": "message",
            "examples": [
              {
                "example_text": "留守番電話にメッセージをのこす",
                "furigana": "留守番（るすばん）でんわにメッセージをのこす",
                "meaning_vi": "Để lại lời nhắn trong điện thoại trả lời tự động khi vắng nhà.",
                "meaning_en": "Send a message to the answering machine"
              }
            ],
            "lesson_number": 38
          },
          {
            "vocab": "パンフレット",
            "furigana": "パンフレット",
            "meaning_vi": "Cuốn sách nhỏ",
            "meaning_en": "Small book",
            "examples": [
              {
                "example_text": "旅行会社でパンフレットをたくさんもらってきた",
                "furigana": "旅行（りょこう）かいしゃでパンフレットをたくさんもらってきた",
                "meaning_vi": "Lấy nhiều tờ rơi ở công ty du lịch.",
                "meaning_en": "I received lots of pamphlets from a travel agency."
              }
            ],
            "lesson_number": 38
          },
          {
            "vocab": "カード",
            "furigana": "カード",
            "meaning_vi": "thẻ",
            "meaning_en": "card",
            "examples": [
              {
                "example_text": "合 ｛キャッシュ／クレジット／テレホン　…｝＋カード",
                "furigana": "合 ｛キャッシュ／クレジット／テレホン　…｝＋カード",
                "meaning_vi": "Thẻ {ngân hàng/ tín dụng/ điện thoại…}",
                "meaning_en": "{Cash/Credit/Telephone...} + Card"
              }
            ],
            "lesson_number": 38
          },
          {
            "vocab": "インタビュー",
            "furigana": "インタビュー",
            "meaning_vi": "Phỏng vấn",
            "meaning_en": "Interview",
            "examples": [
              {
                "example_text": "勝ったチームの選手にインタビューする",
                "furigana": "勝（か）せんしゅにインタビューする",
                "meaning_vi": "Phỏng vấn tuyển thủ của đội thắng.",
                "meaning_en": "Interview the players from the winning team"
              }
            ],
            "lesson_number": 38
          },
          {
            "vocab": "アンケート",
            "furigana": "アンケート",
            "meaning_vi": "Bảng câu hỏi",
            "meaning_en": "Questionnaire",
            "examples": [
              {
                "example_text": "「アンケートにご協力ください」",
                "furigana": "「アンケートにご協力（きょうりょく）ください」",
                "meaning_vi": "Xin hãy hợp tác làm giúp bảng điều tra.",
                "meaning_en": "\"Please cooperate with the survey.\""
              }
            ],
            "lesson_number": 38
          },
          {
            "vocab": "データ",
            "furigana": "データ",
            "meaning_vi": "dữ liệu",
            "meaning_en": "data",
            "examples": [
              {
                "example_text": "研究のために、データを集めている",
                "furigana": "研究（けんきゅう）あつめている",
                "meaning_vi": "Tôi đang tập hợp tài liệu để phục vụ nghiên cứu.",
                "meaning_en": "Collecting data for research"
              }
            ],
            "lesson_number": 38
          },
          {
            "vocab": "ーセント",
            "furigana": "ーセント",
            "meaning_vi": "-Đã gửi",
            "meaning_en": "-Sent",
            "examples": [
              {
                "example_text": "合 ［数字］　＋パーセント",
                "furigana": "合 ［数字（すうじ）］　＋パーセント",
                "meaning_vi": "Số từ + パーセント",
                "meaning_en": "Total [Number] + Percent"
              }
            ],
            "lesson_number": 38
          },
          {
            "vocab": "濃い",
            "furigana": "こい",
            "meaning_vi": "tối tăm",
            "meaning_en": "dark",
            "examples": [
              {
                "example_text": "｛色／味／コーヒー／お茶／化粧／ひげ　…｝が濃い",
                "furigana": "｛色（いろ）あじちゃけしょうこい",
                "meaning_vi": "Màu/ vị / cà phê/ trà/ trang điểm đậm/ râu dày….",
                "meaning_en": "Strong color/taste/coffee/tea/makeup/beard..."
              }
            ],
            "lesson_number": 39
          },
          {
            "vocab": "薄い",
            "furigana": "うすい",
            "meaning_vi": "gầy",
            "meaning_en": "thin",
            "examples": [
              {
                "example_text": "薄い本",
                "furigana": "薄（うす）ほん",
                "meaning_vi": "Quyển sách mỏng.",
                "meaning_en": "A thin book"
              }
            ],
            "lesson_number": 39
          },
          {
            "vocab": "酸っぱい",
            "furigana": "すっぱい",
            "meaning_vi": "chua",
            "meaning_en": "chua",
            "examples": [
              {
                "example_text": "レモンはすっぱい",
                "furigana": "レモンはすっぱい",
                "meaning_vi": "Chanh thì chua.",
                "meaning_en": "Lemon is sour"
              }
            ],
            "lesson_number": 39
          },
          {
            "vocab": "臭い",
            "furigana": "くさい",
            "meaning_vi": "mùi",
            "meaning_en": "smell",
            "examples": [
              {
                "example_text": "なっとうはくさいから嫌いだという日本人も多い",
                "furigana": "なっとうはくさいから嫌（きら）にほんじんおおい",
                "meaning_vi": "Có nhiều người Nhật ghét Natto vì nó có mùi thối.",
                "meaning_en": "Many Japanese people say they don't like it because it's so weird"
              }
            ],
            "lesson_number": 39
          },
          {
            "vocab": "おかしい",
            "furigana": "おかしい",
            "meaning_vi": "lạ lùng",
            "meaning_en": "strange",
            "examples": [
              {
                "example_text": "山本君は、授業中にいつもおかしいことを言ってみんなを笑わせる",
                "furigana": "山本君（やまもとくん）じゅぎょうちゅういわらわせる",
                "meaning_vi": "Bạn Yamamoto ở trong lớp lúc nào cũng nói mấy câu hài hài làm mọi người phá lên cười.",
                "meaning_en": "Yamamoto always says weird things during class and makes everyone laugh"
              }
            ],
            "lesson_number": 39
          },
          {
            "vocab": "かっこいい",
            "furigana": "かっこいい",
            "meaning_vi": "mát mẻ",
            "meaning_en": "cool",
            "examples": [
              {
                "example_text": "あの先輩は、かっこいいので人気がある",
                "furigana": "あの先輩（せんぱい）にんきがある",
                "meaning_vi": "Thầy giáo đó bảnh bao nên được hâm mộ.",
                "meaning_en": "That senior is popular because he's cool"
              }
            ],
            "lesson_number": 39
          },
          {
            "vocab": "うまい",
            "furigana": "うまい",
            "meaning_vi": "Tốt",
            "meaning_en": "Good",
            "examples": [
              {
                "example_text": "母は料理がうまい",
                "furigana": "母（はは）りょうりがうまい",
                "meaning_vi": "Mẹ rất giỏi nấu ăn.",
                "meaning_en": "My mother is good at cooking"
              }
            ],
            "lesson_number": 39
          },
          {
            "vocab": "親しい",
            "furigana": "したしい",
            "meaning_vi": "đóng",
            "meaning_en": "close",
            "examples": [
              {
                "example_text": "私は田中さんと親しい",
                "furigana": "私（わたし）たなかしたしい",
                "meaning_vi": "Tôi thân với anh Tanaka.",
                "meaning_en": "I'm close to Tanaka"
              }
            ],
            "lesson_number": 39
          },
          {
            "vocab": "詳しい",
            "furigana": "くわしい",
            "meaning_vi": "Hãy quen thuộc với",
            "meaning_en": "Be familiar with",
            "examples": [
              {
                "example_text": "この地図はとてもくわしい",
                "furigana": "この地図（ちず）はとてもくわしい",
                "meaning_vi": "Cái bản đồ này rất chi tiết.",
                "meaning_en": "This map is very info"
              }
            ],
            "lesson_number": 39
          },
          {
            "vocab": "細かい",
            "furigana": "こまかい",
            "meaning_vi": "khỏe",
            "meaning_en": "Strong",
            "examples": [
              {
                "example_text": "新聞の字は細かくて、お年よりには読みづらい",
                "furigana": "新聞（しんぶん）じこまとしよみづらい",
                "meaning_vi": "Chữ của tờ báo rất nhỏ nên đối với người già thì khó đọc.",
                "meaning_en": "The letters in the newspaper are detailed and difficult to read than the old age."
              }
            ],
            "lesson_number": 39
          },
          {
            "vocab": "浅い",
            "furigana": "あさい",
            "meaning_vi": "nông",
            "meaning_en": "shallow",
            "examples": [
              {
                "example_text": "この川は浅いので、子どもが泳いでも危なくない",
                "furigana": "この川（かわ）あさこおよあぶなくない",
                "meaning_vi": "Con sông này nông nên dù bọn trẻ bơi cũng không nguy hiểm.",
                "meaning_en": "This river is shallow, so it's not dangerous for children to swim."
              }
            ],
            "lesson_number": 39
          },
          {
            "vocab": "硬い/固い",
            "furigana": "かたい/かたい",
            "meaning_vi": "Cứng/cứng",
            "meaning_en": "Hard/hard",
            "examples": [
              {
                "example_text": "このパンはとても固い",
                "furigana": "このパンはとても固（かた）い",
                "meaning_vi": "Cái bánh này rất cứng.",
                "meaning_en": "This bread is very hard"
              }
            ],
            "lesson_number": 40
          },
          {
            "vocab": "ぬるい",
            "furigana": "ぬるい",
            "meaning_vi": "Ấm áp",
            "meaning_en": "Warm",
            "examples": [
              {
                "example_text": "ぬるいコーヒーはおいしくない",
                "furigana": "ぬるいコーヒーはおいしくない",
                "meaning_vi": "Cà phê nguội thì không ngon.",
                "meaning_en": "Lukewarm coffee isn't tasty"
              }
            ],
            "lesson_number": 40
          },
          {
            "vocab": "まぶしい",
            "furigana": "まぶしい",
            "meaning_vi": "sáng",
            "meaning_en": "bright",
            "examples": [
              {
                "example_text": "カーテンを開けたら、太陽がまぶしかった",
                "furigana": "カーテンを開（あ）たいようがまぶしかった",
                "meaning_vi": "Khi mở rèm thì thấy mặt trời khá chói.",
                "meaning_en": "When I opened the curtains, the sun was shining"
              }
            ],
            "lesson_number": 40
          },
          {
            "vocab": "蒸し暑い",
            "furigana": "むしあつい",
            "meaning_vi": "ẩm ướt",
            "meaning_en": "humid",
            "examples": [
              {
                "example_text": "日本の夏は、蒸し暑い",
                "furigana": "日本（にほん）なつむあつい",
                "meaning_vi": "Mùa hè ở Nhật thì oi bức.",
                "meaning_en": "Summer in Japan is hot and humid"
              }
            ],
            "lesson_number": 40
          },
          {
            "vocab": "清潔な",
            "furigana": "せいけつな",
            "meaning_vi": "Lau dọn",
            "meaning_en": "Clean",
            "examples": [
              {
                "example_text": "清潔な服を身につける",
                "furigana": "清潔（せいけつ）ふくみにつける",
                "meaning_vi": "Mặc lên người bộ áo quần sạch sẽ.",
                "meaning_en": "Wear clean clothes"
              }
            ],
            "lesson_number": 40
          },
          {
            "vocab": "新鮮な",
            "furigana": "しんせんな",
            "meaning_vi": "Tươi",
            "meaning_en": "Fresh",
            "examples": [
              {
                "example_text": "新鮮な魚はおいしい",
                "furigana": "新鮮（しんせん）さかなはおいしい",
                "meaning_vi": "Cá tươi thì ngon.",
                "meaning_en": "Fresh fish is delicious"
              }
            ],
            "lesson_number": 40
          },
          {
            "vocab": "豊かな",
            "furigana": "ゆたかな",
            "meaning_vi": "Giàu có",
            "meaning_en": "Rich",
            "examples": [
              {
                "example_text": "豊かな｛資源／自然／緑／財産／暮らし／心／才能／個性／表情　…｝",
                "furigana": "豊（ゆた）しげんしぜんみどりざいさんくこころさいのうこせいひょうじょう　…｝",
                "meaning_vi": "Trù phú, nhiều tài nguyên, {thiên nhiên, cây cối, tài sản, cuộc sống} đa dạng, trái tim, tài năng, cá tính, biểu cảm….",
                "meaning_en": "Rich {Resources/Nature/Green/Assets/Life/Heart/Talent/Individuality/Expression...}"
              }
            ],
            "lesson_number": 40
          },
          {
            "vocab": "立派な",
            "furigana": "りっぱな",
            "meaning_vi": "Tuyệt vời",
            "meaning_en": "Great",
            "examples": [
              {
                "example_text": "りっぱな｛人／仕事／成績／建物　…｝",
                "furigana": "りっぱな｛人（ひと）しごとせいせきたてもの　…｝",
                "meaning_vi": "Người, công việc, thành tích, tòa nhà … tuyệt vời.",
                "meaning_en": "Great {people/work/grades/building...}"
              }
            ],
            "lesson_number": 40
          },
          {
            "vocab": "正確な",
            "furigana": "せいかくな",
            "meaning_vi": "Chính xác",
            "meaning_en": "Exactly",
            "examples": [
              {
                "example_text": "正確な数はわからないが、この観客は5,000人ぐらいだろう",
                "furigana": "正確（せいかく）かずかんきゃくは5,000人ぐらいだろう",
                "meaning_vi": "Tôi không biết con số chính xác nhưng ở đây có khoảng 5000 khách.",
                "meaning_en": "I don't know the exact number, but this audience is probably around 5,000."
              }
            ],
            "lesson_number": 40
          },
          {
            "vocab": "確かな",
            "furigana": "たしかな",
            "meaning_vi": "Chắc chắn",
            "meaning_en": "Sure",
            "examples": [
              {
                "example_text": "新聞は確かな事実だけを伝えなければならない",
                "furigana": "新聞（しんぶん）たしじじつつたえなければならない",
                "meaning_vi": "Báo chí nên đưa những tin đúng sự thật.",
                "meaning_en": "Newspapers must only convey certain facts"
              }
            ],
            "lesson_number": 40
          },
          {
            "vocab": "重要な",
            "furigana": "じゅうような",
            "meaning_vi": "Quan trọng",
            "meaning_en": "Important",
            "examples": [
              {
                "example_text": "きょうは午後から重要な会議がある",
                "furigana": "きょうは午後（ごご）じゅうようかいぎがある",
                "meaning_vi": "Hôm nay, từ chiều sẽ có cuộc họp quan trọng.",
                "meaning_en": "There will be an important meeting in the afternoon today."
              }
            ],
            "lesson_number": 41
          },
          {
            "vocab": "必要な",
            "furigana": "ひつような",
            "meaning_vi": "Cần thiết",
            "meaning_en": "Necessary",
            "examples": [
              {
                "example_text": "子どもに必要なのは、親の温かい愛情だ",
                "furigana": "子（こ）ひつようおやあたたあいじょうだ",
                "meaning_vi": "Việc cần thiết đối với con cái là tình cảm ấm áp từ bố mẹ.",
                "meaning_en": "What a child needs is the warm love of his parents."
              }
            ],
            "lesson_number": 41
          },
          {
            "vocab": "もったいない",
            "furigana": "もったいない",
            "meaning_vi": "Quá tốt để lãng phí",
            "meaning_en": "Too good to waste",
            "examples": [
              {
                "example_text": "流行遅れでもまだ着られる服を捨てるのはもったいない",
                "furigana": "流行（りゅうこう）おくきふくすてるのはもったいない",
                "meaning_vi": "Dù có lỗi mốt mà vứt bỏ quần áo vẫn có thể mặc được thì thật lãng phí.",
                "meaning_en": "It's a waste to throw away clothes that can still be worn even if it's out of fashion"
              }
            ],
            "lesson_number": 41
          },
          {
            "vocab": "すごい",
            "furigana": "すごい",
            "meaning_vi": "tuyệt vời",
            "meaning_en": "Great",
            "examples": [
              {
                "example_text": "きのうの台風はすごかった",
                "furigana": "きのうの台風（たいふう）はすごかった",
                "meaning_vi": "Cơn bão hôm qua thật là kinh khủng.",
                "meaning_en": "Yesterday's typhoon was amazing"
              }
            ],
            "lesson_number": 41
          },
          {
            "vocab": "ひどい",
            "furigana": "ひどい",
            "meaning_vi": "kinh khủng",
            "meaning_en": "terrible",
            "examples": [
              {
                "example_text": "一人をおおぜいでいじめるとはひどい",
                "furigana": "一人（ひとり）をおおぜいでいじめるとはひどい",
                "meaning_vi": "Nhiều người bắt nạt một người thì thật là tồi tệ.",
                "meaning_en": "It's terrible to bully one person for a big deal"
              }
            ],
            "lesson_number": 41
          },
          {
            "vocab": "激しい",
            "furigana": "はげしい",
            "meaning_vi": "mãnh liệt",
            "meaning_en": "highness",
            "examples": [
              {
                "example_text": "｛雨／風／戦い／感情／痛み　…｝が激しい",
                "furigana": "｛雨（あめ）かぜたたかかんじょういたはげしい",
                "meaning_vi": "{Mưa, gió, đánh nhau, cơn đau…} mãnh liệt.",
                "meaning_en": "{Rain/wind/fight/emotion/pain...} is intense"
              }
            ],
            "lesson_number": 41
          },
          {
            "vocab": "そっくりな",
            "furigana": "そっくりな",
            "meaning_vi": "Nó trông giống hệt như vậy",
            "meaning_en": "It looks like that",
            "examples": [
              {
                "example_text": "兄は父に顔も声もそっくりだ",
                "furigana": "兄（あに）ちちかおこえもそっくりだ",
                "meaning_vi": "Anh với bố có giọng với mặt rất giống nhau.",
                "meaning_en": "My brother looks exactly like his father's face and voice."
              }
            ],
            "lesson_number": 41
          },
          {
            "vocab": "急な",
            "furigana": "きゅうな",
            "meaning_vi": "Đột nhiên",
            "meaning_en": "Suddenly",
            "examples": [
              {
                "example_text": "急に歯が痛みだした",
                "furigana": "急（きゅう）はいたみだした",
                "meaning_vi": "Tự nhiên bị đau răng.",
                "meaning_en": "My teeth suddenly started to hurt"
              }
            ],
            "lesson_number": 41
          },
          {
            "vocab": "適当な",
            "furigana": "てきとうな",
            "meaning_vi": "Phù hợp",
            "meaning_en": "Fit",
            "examples": [
              {
                "example_text": "家庭教師を探しているが、適当な人がなかなかいない",
                "furigana": "家庭（かてい）きょうしさがてきとうひとがなかなかいない",
                "meaning_vi": "Đang tìm giáo viên dạy tại nhà nhưng mà mãi chưa có người thích hợp.",
                "meaning_en": "I'm looking for a private tutor, but I don't have a lot of people to choose."
              }
            ],
            "lesson_number": 41
          },
          {
            "vocab": "特別な",
            "furigana": "とくべつな",
            "meaning_vi": "Đặc biệt",
            "meaning_en": "Special",
            "examples": [
              {
                "example_text": "彼女には音楽家としての特別な才能がある",
                "furigana": "彼女（かのじょ）おんがくかとくべつさいのうがある",
                "meaning_vi": "Cô ấy có một tài năng đặc biệt của một nhạc gia.",
                "meaning_en": "She has a special talent as a musician."
              }
            ],
            "lesson_number": 42
          },
          {
            "vocab": "完全な",
            "furigana": "かんぜんな",
            "meaning_vi": "Hoàn thành",
            "meaning_en": "Complete",
            "examples": [
              {
                "example_text": "土の中から古代の器が完全な形で出てきた",
                "furigana": "土（つち）なかこだいうつわかんぜんかたちでてきた",
                "meaning_vi": "Một cái bát cổ tròn nguyên vẹn hình dáng lấy lên từ trong lòng đất.",
                "meaning_en": "Ancient vessels came out in perfect form from the soil"
              }
            ],
            "lesson_number": 42
          },
          {
            "vocab": "盛んな",
            "furigana": "さかんな",
            "meaning_vi": "Nó phổ biến",
            "meaning_en": "It is popular",
            "examples": [
              {
                "example_text": "私のふるさとは農業が盛んだ",
                "furigana": "私（わたし）のうぎょうさかんだ",
                "meaning_vi": "Quê tôi nông nghiệp phát triển.",
                "meaning_en": "My hometown has a strong agriculture"
              }
            ],
            "lesson_number": 42
          },
          {
            "vocab": "様々な",
            "furigana": "々さまざまな",
            "meaning_vi": "Nhiều",
            "meaning_en": "Much",
            "examples": [
              {
                "example_text": "インターネットからさまざまな情報が得られる",
                "furigana": "インターネットからさまざまな情報（じょうほう）えられる",
                "meaning_vi": "Có thể tiếp cận được thông tin đa dạng từ Internet.",
                "meaning_en": "A variety of information can be obtained from the Internet"
              }
            ],
            "lesson_number": 42
          },
          {
            "vocab": "可能な",
            "furigana": "かのうな",
            "meaning_vi": "Khả thi",
            "meaning_en": "Feasible",
            "examples": [
              {
                "example_text": "科学が進歩して、今まで不可能だったことも可能になった",
                "furigana": "科学（かがく）しんぽいまふかのうかのうになった",
                "meaning_vi": "Khoa học tiến bộ, những điều không thể từ trước đến giờ cũng đã trở thành có thể.",
                "meaning_en": "Science has advanced, and things that were previously impossible have become possible."
              }
            ],
            "lesson_number": 42
          },
          {
            "vocab": "不可能な",
            "furigana": "ふかのうな",
            "meaning_vi": "Không thể nào",
            "meaning_en": "Impossible",
            "examples": [
              {
                "example_text": "不可能な計画ならはじめから立てないほうがいい",
                "furigana": "不可能（ふかのう）けいかくたてないほうがいい",
                "meaning_vi": "Những kế hoạch không khả thi thì ngay từ đầu không nên vạch ra.",
                "meaning_en": "If it's impossible, it's better not to start with it"
              }
            ],
            "lesson_number": 42
          },
          {
            "vocab": "基本的な",
            "furigana": "きほんてきな",
            "meaning_vi": "Nền tảng",
            "meaning_en": "Foundation",
            "examples": [
              {
                "example_text": "パソコンの基本的な使い方はマニュアルに書いてある",
                "furigana": "パソコンの基本的（きほんてき）つかかたかいてある",
                "meaning_vi": "Cách sử dụng máy tính cơ bản được viết trong sách hướng dẫn.",
                "meaning_en": "The basic usage of a computer is explained in the manual."
              }
            ],
            "lesson_number": 42
          },
          {
            "vocab": "国際的な",
            "furigana": "こくさいてきな",
            "meaning_vi": "Quốc tế",
            "meaning_en": "International",
            "examples": [
              {
                "example_text": "東京で国際的なアニメフェスティバルが開かれた",
                "furigana": "東京（とうきょう）こくさいてきひらかれた",
                "meaning_vi": "Ở Tokyo tổ chức một liên hoan Anime Quốc tế.",
                "meaning_en": "An international anime festival was held in Tokyo"
              }
            ],
            "lesson_number": 42
          },
          {
            "vocab": "ばらばらな",
            "furigana": "ばらばらな",
            "meaning_vi": "Mất trí",
            "meaning_en": "Dementia",
            "examples": [
              {
                "example_text": "みんなの意見がばらばらで、なかんか結論が出ない",
                "furigana": "みんなの意見（いけん）けつろんでない",
                "meaning_vi": "Ý kiến mọi người phân tán, mãi mà không đưa ra được quyết định.",
                "meaning_en": "Everyone's opinions are disparate and there is no conclusion in place"
              }
            ],
            "lesson_number": 42
          },
          {
            "vocab": "ぼろぼろな",
            "furigana": "ぼろぼろな",
            "meaning_vi": "Rách nát",
            "meaning_en": "Tattered",
            "examples": [
              {
                "example_text": "ぼろぼろ｛な／の｝｛服／家　…｝",
                "furigana": "ぼろぼろ｛な／の｝｛服（ふく）いえ　…｝",
                "meaning_vi": "Áo rách, nhà tồi tàn….",
                "meaning_en": "Tattered {/no}{clothes/house...}"
              }
            ],
            "lesson_number": 42
          },
          {
            "vocab": "非常に",
            "furigana": "ひじょうに",
            "meaning_vi": "Rất",
            "meaning_en": "Very",
            "examples": [
              {
                "example_text": "これは非常に高価なものですので、気をつけて運んでください",
                "furigana": "これは非常（ひじょう）こうかきはこんでください",
                "meaning_vi": "Vì là đồ đặc biệt, đắt tiền nên hãy vận chuyển cẩn thận nhé.",
                "meaning_en": "This is very expensive, so be careful when carrying it"
              }
            ],
            "lesson_number": 43
          },
          {
            "vocab": "大変（に）",
            "furigana": "たいへんに",
            "meaning_vi": "Thật khó khăn",
            "meaning_en": "It is difficult",
            "examples": [
              {
                "example_text": "朝夕は電車が大変込むので疲れる",
                "furigana": "朝夕（あさゆう）でんしゃたいへんこつかれる",
                "meaning_vi": "Tàu điện lúc nào cũng đông nên mệt mỏi vô cùng.",
                "meaning_en": "It's tiring because the trains are busy in the mornings and evenings"
              }
            ],
            "lesson_number": 43
          },
          {
            "vocab": "ほとんど",
            "furigana": "ほとんど",
            "meaning_vi": "phần lớn",
            "meaning_en": "largely",
            "examples": [
              {
                "example_text": "準備はほとんどできた",
                "furigana": "準備（じゅんび）はほとんどできた",
                "meaning_vi": "Việc chuẩn bị gần như đã xong.",
                "meaning_en": "I've almost finished preparing"
              }
            ],
            "lesson_number": 43
          },
          {
            "vocab": "大体",
            "furigana": "だいたい",
            "meaning_vi": "đại khái",
            "meaning_en": "generally",
            "examples": [
              {
                "example_text": "きょうの試験はだいたいできた",
                "furigana": "きょうの試験（しけん）はだいたいできた",
                "meaning_vi": "Bài kiểm tra hôm qua gần như là OK.",
                "meaning_en": "Today's exam was pretty much done"
              }
            ],
            "lesson_number": 43
          },
          {
            "vocab": "かなり",
            "furigana": "かなり",
            "meaning_vi": "đẹp",
            "meaning_en": "Pretty",
            "examples": [
              {
                "example_text": "頭痛の薬を飲んだら、３０分ぐらいでかなりよくなった",
                "furigana": "頭痛（ずつう）くすりのぷんぐらいでかなりよくなった",
                "meaning_vi": "Sau khi uống thuốc đau đầu khoảng 30 phút thì đỡ hơn rất nhiều.",
                "meaning_en": "After taking headache medication, it got much better in about 30 minutes."
              }
            ],
            "lesson_number": 43
          },
          {
            "vocab": "ずいぶん",
            "furigana": "ずいぶん",
            "meaning_vi": "Khá nhiều",
            "meaning_en": "Pretty much",
            "examples": [
              {
                "example_text": "しばらく会わない間に、チンさんはずいぶん日本語が上手になっていた",
                "furigana": "しばらく会（あ）あいだにほんごじょうずになっていた",
                "meaning_vi": "Chỉ trong khoảng thời gian ngắn không gặp mà tiếng Nhật của Chin đã tiến bộ đáng kể.",
                "meaning_en": "While we were not meeting for a while, Chin had become quite good at Japanese."
              }
            ],
            "lesson_number": 43
          },
          {
            "vocab": "けっこう",
            "furigana": "けっこう",
            "meaning_vi": "Khá một chút",
            "meaning_en": "Quite a bit",
            "examples": [
              {
                "example_text": "日曜日なので込んでいるかと思ったら、けっこうすいていた",
                "furigana": "日曜日（にちようび）こおもったら、けっこうすいていた",
                "meaning_vi": "Vì chủ nhật nên tôi nghĩ là sẽ đông nhưng cuối cùng thì cũng rất vắng.",
                "meaning_en": "It was a Sunday, so I thought it was packed, but it was quite busy."
              }
            ],
            "lesson_number": 43
          },
          {
            "vocab": "大分",
            "furigana": "だいぶ",
            "meaning_vi": "Oita",
            "meaning_en": "Do",
            "examples": [
              {
                "example_text": "病気はだいぶよくなった",
                "furigana": "病気（びょうき）はだいぶよくなった",
                "meaning_vi": "Bệnh cũng đã khá hơn nhiều.",
                "meaning_en": "My illness has improved considerably"
              }
            ],
            "lesson_number": 43
          },
          {
            "vocab": "もっと",
            "furigana": "もっと",
            "meaning_vi": "hơn",
            "meaning_en": "than",
            "examples": [
              {
                "example_text": "リンゴよりイチゴのほうが好きだ。でも、メロンはもっと好きだ",
                "furigana": "リンゴよりイチゴのほうが好（す）すきだ",
                "meaning_vi": "So với táo thì tôi thích dâu hơn nhưng mà so với quả dưa gang thì tôi còn thích hơn nhiều.",
                "meaning_en": "I prefer strawberries over apples. But I like melons more"
              }
            ],
            "lesson_number": 43
          },
          {
            "vocab": "すっかり",
            "furigana": "すっかり",
            "meaning_vi": "Nó hoàn toàn",
            "meaning_en": "It is completely",
            "examples": [
              {
                "example_text": "さくらの花はもうすっかり散ってしまった",
                "furigana": "さくらの花（はな）ちってしまった",
                "meaning_vi": "Hoa anh đào đã rụng hết rồi.",
                "meaning_en": "The cherry blossoms have already fallen"
              }
            ],
            "lesson_number": 43
          },
          {
            "vocab": "いっぱい",
            "furigana": "いっぱい",
            "meaning_vi": "đầy",
            "meaning_en": "full",
            "examples": [
              {
                "example_text": "会場には子どもたちがいっぱいいて、とてもにぎやかだった",
                "furigana": "会場（かいじょう）こどもたちがいっぱいいて、とてもにぎやかだった",
                "meaning_vi": "Hội trường đầy trẻ con, rất là náo nhiệt.",
                "meaning_en": "There were lots of kids in the venue, and it was very lively."
              }
            ],
            "lesson_number": 43
          },
          {
            "vocab": "ぎりぎり",
            "furigana": "ぎりぎり",
            "meaning_vi": "Phút cuối cùng",
            "meaning_en": "Last minute",
            "examples": [
              {
                "example_text": "走れば、９時の電車にぎりぎり間に合うだろう",
                "furigana": "走（はし）じでんしゃまあうだろう",
                "meaning_vi": "Nếu chạy thì có thể vừa kịp chuyến tàu lúc 9 giờ.",
                "meaning_en": "If you run, you'll be in the last minute for the 9 o'clock train."
              }
            ],
            "lesson_number": 44
          },
          {
            "vocab": "ぴったり",
            "furigana": "ぴったりと",
            "meaning_vi": "Hoàn hảo",
            "meaning_en": "Perfect",
            "examples": [
              {
                "example_text": "７時ぴったりにめざまし時計をセットした",
                "furigana": "７時（じ）とけいをセットした",
                "meaning_vi": "Tôi đã cài đặt đồng hồ báo thức vào 7 giờ đúng.",
                "meaning_en": "I set the alarm clock exactly at 7 o'clock."
              }
            ],
            "lesson_number": 44
          },
          {
            "vocab": "たいてい",
            "furigana": "たいてい",
            "meaning_vi": "nói chung là",
            "meaning_en": "Generally",
            "examples": [
              {
                "example_text": "日曜日はたいていうちにいます",
                "furigana": "日曜日（にちようび）はたいていうちにいます",
                "meaning_vi": "Chủ nhật thường thì tôi ở nhà.",
                "meaning_en": "I usually stay there on Sundays"
              }
            ],
            "lesson_number": 44
          },
          {
            "vocab": "同時に",
            "furigana": "どうじに",
            "meaning_vi": "Đồng thời",
            "meaning_en": "Simultaneously",
            "examples": [
              {
                "example_text": "二人は同時にゴールした",
                "furigana": "二人（ふたり）どうじにゴールした",
                "meaning_vi": "Hai ngươi về đích (ghi điểm) cùng lúc.",
                "meaning_en": "The two reached the finish at the same time"
              }
            ],
            "lesson_number": 44
          },
          {
            "vocab": "前もって",
            "furigana": "まえもって",
            "meaning_vi": "Trước khi bạn đi",
            "meaning_en": "Before you go",
            "examples": [
              {
                "example_text": "「もし欠席する場合は、前もってご連絡します」",
                "furigana": "「もし欠席（けっせき）ばあいまえれんらくします」",
                "meaning_vi": "\"Trong trường hợp vắng mặt thì tôi sẽ báo trước.\"",
                "meaning_en": "\"If you are absent, we will contact you in advance.\""
              }
            ],
            "lesson_number": 44
          },
          {
            "vocab": "すぐ",
            "furigana": "すぐに",
            "meaning_vi": "Ngay lập tức",
            "meaning_en": "Right away",
            "examples": [
              {
                "example_text": "チャイムを鳴らすと、すぐにドアが開いた",
                "furigana": "チャイムを鳴（な）ひらいた",
                "meaning_vi": "Chuông cửa vừa reo thì ngay lập tức cửa mở.",
                "meaning_en": "I heard the chime and the door opened immediately."
              }
            ],
            "lesson_number": 44
          },
          {
            "vocab": "もうすぐ",
            "furigana": "もうすぐ",
            "meaning_vi": "Rất sớm",
            "meaning_en": "Early",
            "examples": [
              {
                "example_text": "日本へ来て、もうすぐ3年になる",
                "furigana": "日本（にほん）きねんになる",
                "meaning_vi": "Tôi đến Nhật sắp được 3 năm rồi.",
                "meaning_en": "It's almost three years since I came to Japan."
              }
            ],
            "lesson_number": 44
          },
          {
            "vocab": "突然",
            "furigana": "とつぜん",
            "meaning_vi": "Đột nhiên",
            "meaning_en": "Suddenly",
            "examples": [
              {
                "example_text": "子どもが突然飛び出して来たので、急ブレーキをかけた",
                "furigana": "子（こ）とつぜんとだききゅうブレーキをかけた",
                "meaning_vi": "Vì đứa trẻ đột nhiên lao ra nên tôi đã phanh gấp.",
                "meaning_en": "The child suddenly came out, so I put the brakes on suddenly."
              }
            ],
            "lesson_number": 44
          },
          {
            "vocab": "あっと言う間（に）",
            "furigana": "あっというまに",
            "meaning_vi": "Trong đèn flash",
            "meaning_en": "In the flash",
            "examples": [
              {
                "example_text": "子どもの成長は早い。あっという間に、もう小学生だ",
                "furigana": "子（こ）せいちょうはやましょうがくせいだ",
                "meaning_vi": "Con tôi lớn nhanh quá, loáng cái đã thành học sinh tiểu học.",
                "meaning_en": "Children grow quickly. In the blink of an eye, I'm already elementary school student"
              }
            ],
            "lesson_number": 44
          },
          {
            "vocab": "いつの間にか",
            "furigana": "いつのまにか",
            "meaning_vi": "Trước khi tôi biết điều đó",
            "meaning_en": "Before I knew that",
            "examples": [
              {
                "example_text": "いつの間にか、外は暗くなっていた",
                "furigana": "いつの間（ま）そとくらくなっていた",
                "meaning_vi": "Trời tối từ lúc nào không biết.",
                "meaning_en": "Before I knew it, it was dark outside"
              }
            ],
            "lesson_number": 44
          },
          {
            "vocab": "しばらく",
            "furigana": "しばらく",
            "meaning_vi": "trong một thời gian",
            "meaning_en": "For a while",
            "examples": [
              {
                "example_text": "「ただ今窓口が込んでいますので、もうしばらくお待ちください」",
                "furigana": "「ただ今（いま）まどぐちこまちください」",
                "meaning_vi": "\"Hiện tại thì cửa hàng đang đông, xin hãy đợi thêm chút nữa.\"",
                "meaning_en": "\"The counter is currently in, so please wait a little longer.\""
              }
            ],
            "lesson_number": 44
          },
          {
            "vocab": "ずっと",
            "furigana": "ずっと",
            "meaning_vi": "mãi mãi",
            "meaning_en": "forever",
            "examples": [
              {
                "example_text": "バスよりも地下鉄で行くほうがずっと速い",
                "furigana": "バスよりも地下鉄（ちかてつ）いはやい",
                "meaning_vi": "So với xe buýt thì rõ ràng đi tàu điện ngầm sẽ nhanh hơn nhiều.",
                "meaning_en": "It's much faster to get there by subway than a bus"
              }
            ],
            "lesson_number": 44
          },
          {
            "vocab": "相変わらず",
            "furigana": "あいかわらず",
            "meaning_vi": "Như mọi khi",
            "meaning_en": "As usual",
            "examples": [
              {
                "example_text": "あの女優は、年を取って今もあいかわらずきれいだ",
                "furigana": "あの女優（じょゆう）としといまもあいかわらずきれいだ",
                "meaning_vi": "Nữ diễn viên ấy dù cho có tuổi thì vẫn đẹp như thường.",
                "meaning_en": "That actress is still beautiful now, getting older"
              }
            ],
            "lesson_number": 44
          },
          {
            "vocab": "次々に",
            "furigana": "々つぎつぎに",
            "meaning_vi": "Hết lần này đến",
            "meaning_en": "This time comes",
            "examples": [
              {
                "example_text": "新しいタイプのインスタント食品が次々に発売されている",
                "furigana": "新（あたら）しょくひんつぎつぎはつばいされている",
                "meaning_vi": "Những loại mì tôm mới đang được lần lượt bán ra.",
                "meaning_en": "New types of instant foods are being released one after another."
              }
            ],
            "lesson_number": 45
          },
          {
            "vocab": "どんどん",
            "furigana": "どんどん",
            "meaning_vi": "Ngày càng nhiều",
            "meaning_en": "More and more",
            "examples": [
              {
                "example_text": "きょうは体調もよく、仕事がどんどん進んだ",
                "furigana": "きょうは体調（たいちょう）しごとすすんだ",
                "meaning_vi": "Hôm nay thể trạng tốt, công việc thì tiến triển thành công.",
                "meaning_en": "I'm feeling well today and my work is progressing rapidly."
              }
            ],
            "lesson_number": 45
          },
          {
            "vocab": "ますます",
            "furigana": "ますます",
            "meaning_vi": "Ngày càng nhiều",
            "meaning_en": "More and more",
            "examples": [
              {
                "example_text": "朝から降っていた雨は、午後になるとますます強くなった",
                "furigana": "朝（あさ）ふあめごごつよくなった",
                "meaning_vi": "Cơn mua buổi sáng càng về chiều càng nặng hạt.",
                "meaning_en": "The rain that had been falling since the morning became stronger in the afternoon."
              }
            ],
            "lesson_number": 45
          },
          {
            "vocab": "やっと",
            "furigana": "やっと",
            "meaning_vi": "cuối cùng",
            "meaning_en": "Final",
            "examples": [
              {
                "example_text": "30分も待って、やっとバスが来た",
                "furigana": "30分（ぷん）まきた",
                "meaning_vi": "Đợi 30 phút và cuối cùng xe bus cũng tới.",
                "meaning_en": "After 30 minutes, the bus finally arrived."
              }
            ],
            "lesson_number": 45
          },
          {
            "vocab": "とうとう",
            "furigana": "とうとう",
            "meaning_vi": "Cuối cùng",
            "meaning_en": "Final",
            "examples": [
              {
                "example_text": "長い間使っていた洗たく機がとうとう壊れてしまった",
                "furigana": "長（なが）あいだつかせんきこわれてしまった",
                "meaning_vi": "Sau một thời gian dài sử dụng thì cuối cùng cái máy giặt cũng hỏng.",
                "meaning_en": "The washing machine I used for a long time has finally broken."
              }
            ],
            "lesson_number": 45
          },
          {
            "vocab": "ついに",
            "furigana": "ついに",
            "meaning_vi": "Cuối cùng",
            "meaning_en": "Final",
            "examples": [
              {
                "example_text": "若いころの夢をついに実現することができた",
                "furigana": "若（わか）ゆめじつげんすることができた",
                "meaning_vi": "Cuối cùng tôi đã có thể thực hiện được giấc mơ thời trẻ của mình.",
                "meaning_en": "I finally managed to realize my younger dreams"
              }
            ],
            "lesson_number": 45
          },
          {
            "vocab": "もちろん",
            "furigana": "もちろん",
            "meaning_vi": "tất nhiên rồi",
            "meaning_en": "Of course",
            "examples": [
              {
                "example_text": "マンションを買った。もちろん、ローンでだ",
                "furigana": "マンションを買（か）った。もちろん、ローンでだ",
                "meaning_vi": "Đã mua căn chung cư, tất nhiên là trả góp.",
                "meaning_en": "I bought an apartment. Of course, it's on a loan"
              }
            ],
            "lesson_number": 45
          },
          {
            "vocab": "やはり",
            "furigana": "やはり",
            "meaning_vi": "Mà còn",
            "meaning_en": "But also",
            "examples": [
              {
                "example_text": "やはりAチームが勝った。予想通りだった",
                "furigana": "やはりAチームが勝（か）よそうどおりだった",
                "meaning_vi": "Đôi A là đội chiến thắng quả đúng như theo dự đoán.",
                "meaning_en": "Team A won after all. It was as expected"
              }
            ],
            "lesson_number": 45
          },
          {
            "vocab": "きっと",
            "furigana": "きっと",
            "meaning_vi": "chắc chắn",
            "meaning_en": "sure",
            "examples": [
              {
                "example_text": "田中さんはいつも遅刻するから、きょうもきっと遅れてくるだろう",
                "furigana": "田中（たなか）ちこくおくれてくるだろう",
                "meaning_vi": "Anh Tanaka lúc nào cũng muộn giờ nên chắc chắn hôm nay cũng sẽ đến muộn.",
                "meaning_en": "Tanaka is always late, so I'm sure he'll be late today too."
              }
            ],
            "lesson_number": 45
          },
          {
            "vocab": "ぜひ",
            "furigana": "ぜひ",
            "meaning_vi": "Xin vui lòng",
            "meaning_en": "Please",
            "examples": [
              {
                "example_text": "若いときに、ぜひ留学したいと思っている",
                "furigana": "若（わか）りゅうがくおもっている",
                "meaning_vi": "Khi còn trẻ tôi nhất định sẽ đi du học.",
                "meaning_en": "I would definitely like to study abroad when I was young"
              }
            ],
            "lesson_number": 45
          },
          {
            "vocab": "なるべく",
            "furigana": "なるべく",
            "meaning_vi": "Càng nhiều càng tốt",
            "meaning_en": "As much as possible",
            "examples": [
              {
                "example_text": "「なるべく辞書を見ないで、こお本を読んでみてください」",
                "furigana": "「なるべく辞書（じしょ）みほんよんでみてください」",
                "meaning_vi": "\"Hãy đọc thử cuốn sách này mà cố gắng không nhìn từ điển.\"",
                "meaning_en": "\"Please read Koo's book without looking at the dictionary as much as possible.\""
              }
            ],
            "lesson_number": 45
          },
          {
            "vocab": "案外",
            "furigana": "あんがい",
            "meaning_vi": "bất ngờ",
            "meaning_en": "surprise",
            "examples": [
              {
                "example_text": "きょうはくもっているが、案外暖かい",
                "furigana": "きょうはくもっているが、案外（あんがい）あたたかい",
                "meaning_vi": "Trời hôm nay có nhiều mây nhưng lại nóng không ngờ.",
                "meaning_en": "It's cloudy today, but surprisingly warm"
              }
            ],
            "lesson_number": 45
          },
          {
            "vocab": "もしかすると/もしかしたら/もしかして",
            "furigana": "もしかすると/もしかしたら/もしかして",
            "meaning_vi": "Có lẽ/có thể/có thể",
            "meaning_en": "Perhaps/possible/",
            "examples": [
              {
                "example_text": "体調が悪いので、もしかすると、あした休むかもしれません",
                "furigana": "体調（たいちょう）わるやすむかもしれません",
                "meaning_vi": "Sức khỏe của tôi không tốt lắm, có lẽ ngày mai tôi sẽ nghỉ.",
                "meaning_en": "I'm not feeling well so maybe I'll take a day off tomorrow"
              }
            ],
            "lesson_number": 46
          },
          {
            "vocab": "まさか",
            "furigana": "まさか",
            "meaning_vi": "Không đời nào",
            "meaning_en": "No way",
            "examples": [
              {
                "example_text": "「あの二人、離婚するそうだよ」「まさか！　あんなに仲がよかったのに」",
                "furigana": "「あの二人（ふたり）りこんなかがよかったのに」",
                "meaning_vi": "\"Nghe nói hai người kia sắp li hôn đó.\" -\"Không thể nào, họ rất gắn bó với nhau cơ mà.\"",
                "meaning_en": "\"They're going to get divorced.\" \"No way! We were so close.\""
              }
            ],
            "lesson_number": 46
          },
          {
            "vocab": "うっかり",
            "furigana": "うっかり",
            "meaning_vi": "vô tình",
            "meaning_en": "by chance",
            "examples": [
              {
                "example_text": "うっかりして、さとうと塩を間違えて入れてしまった",
                "furigana": "うっかりして、さとうと塩（しお）まちがいれてしまった",
                "meaning_vi": "Lơ đãng một chút tôi đã vô ý nhầm muối với đường.",
                "meaning_en": "I accidentally put in the sugar and salt in the wrong way."
              }
            ],
            "lesson_number": 46
          },
          {
            "vocab": "つい",
            "furigana": "つい",
            "meaning_vi": "vô tình",
            "meaning_en": "by chance",
            "examples": [
              {
                "example_text": "禁煙しようと思うのだが、食事の後などについ吸ってしまう",
                "furigana": "禁煙（きんえん）おもしょくじあとすってしまう",
                "meaning_vi": "Tôi định là bỏ thuốc mà vẫn lỡ hút sau giờ cơm.",
                "meaning_en": "I'm thinking about quitting smoking, but I end up smoking after eating."
              }
            ],
            "lesson_number": 46
          },
          {
            "vocab": "思わず",
            "furigana": "おもわず",
            "meaning_vi": "Tôi không thể không nghĩ",
            "meaning_en": "I can't help but think",
            "examples": [
              {
                "example_text": "夜道で急に肩をたたかれ、思わず「ワーッ」と叫んでしまった",
                "furigana": "夜道（よみち）きゅうかたおもさけんでしまった",
                "meaning_vi": "Trong lúc đi bộ vào ban đêm, bất chợt bị đập vào vai, tôi đã hét toáng lên (theo bản năng).",
                "meaning_en": "I was suddenly hit on the shoulder on the road at night, and I couldn't help but scream \"Wow!\""
              }
            ],
            "lesson_number": 46
          },
          {
            "vocab": "ほっと",
            "furigana": "ほっと",
            "meaning_vi": "Vì thế",
            "meaning_en": "Therefore",
            "examples": [
              {
                "example_text": "｛試験が終わって／ガンではないとわかって　…｝ほっとした",
                "furigana": "｛試験（しけん）おわって／ガンではないとわかって　…｝ほっとした",
                "meaning_vi": "Hoàn thành kì thi/ biết không phải là ung thư… thở phào nhẹ nhõm.",
                "meaning_en": "{After the exam/I realized that I wasn't cancer...} I was relieved"
              }
            ],
            "lesson_number": 46
          },
          {
            "vocab": "いらいら",
            "furigana": "いらいら",
            "meaning_vi": "Tôi bị kích thích",
            "meaning_en": "I am excited",
            "examples": [
              {
                "example_text": "急いでいるのにバスがなかなか来なくていらいらした",
                "furigana": "急（いそ）こなくていらいらした",
                "meaning_vi": "Đang vội mà xe bus mãi không đến, cảm thấy rất nóng lòng.",
                "meaning_en": "I was in a hurry, but the bus couldn't come so I was annoyed."
              }
            ],
            "lesson_number": 46
          },
          {
            "vocab": "のんびり",
            "furigana": "のんびり",
            "meaning_vi": "nhàn nhã",
            "meaning_en": "leisurely",
            "examples": [
              {
                "example_text": "半年はどとても忙しかった。温泉へでも行ってのんびりしたい",
                "furigana": "半年（はんとし）いそがおんせんいってのんびりしたい",
                "meaning_vi": "Khoảng nữa năm bận vô cùng nên muốn đi suối nước nóng thong thả nghỉ ngơi.",
                "meaning_en": "Six months have been very busy. I want to go to the hot springs and relax"
              }
            ],
            "lesson_number": 46
          },
          {
            "vocab": "実は",
            "furigana": "じつは",
            "meaning_vi": "Thực ra",
            "meaning_en": "Actually",
            "examples": [
              {
                "example_text": "「きのう言ったことは、実はうそなんです」",
                "furigana": "「きのう言（い）じつはうそなんです」",
                "meaning_vi": "\"Chuyện tôi nói ngày hôm qua thực ra là nói phét đấy.\"",
                "meaning_en": "\"What I said yesterday is actually a lie.\""
              }
            ],
            "lesson_number": 46
          },
          {
            "vocab": "読書",
            "furigana": "どくしょ",
            "meaning_vi": "đọc",
            "meaning_en": "read",
            "examples": [
              {
                "example_text": "趣味は読書だ",
                "furigana": "趣味（しゅみ）どくしょだ",
                "meaning_vi": "Sở thích là đọc sách.",
                "meaning_en": "My hobby is reading"
              }
            ],
            "lesson_number": 47
          },
          {
            "vocab": "演奏",
            "furigana": "えんそう",
            "meaning_vi": "Hiệu suất",
            "meaning_en": "Efficiency",
            "examples": [
              {
                "example_text": "楽器を演奏する",
                "furigana": "楽器（がっき）えんそうする",
                "meaning_vi": "Biểu diễn nhạc cụ.",
                "meaning_en": "Playing an instrument"
              }
            ],
            "lesson_number": 47
          },
          {
            "vocab": "芸術",
            "furigana": "げいじゅつ",
            "meaning_vi": "nghệ thuật",
            "meaning_en": "art",
            "examples": [
              {
                "example_text": "美術、音楽、文学、演劇などは、みな、芸術の一種であると言える",
                "furigana": "美術（びじゅつ）おんがくぶんがくえんげきげいじゅついっしゅいえる",
                "meaning_vi": "Mỹ thuật, âm nhạc, văn học, kịch…tất cả có thể nói là một loại hình nghệ thuật.",
                "meaning_en": "Art, music, literature, and theater are all kinds of art."
              }
            ],
            "lesson_number": 47
          },
          {
            "vocab": "検査",
            "furigana": "けんさ",
            "meaning_vi": "điều tra",
            "meaning_en": "investigate",
            "examples": [
              {
                "example_text": "｛胃／製品　…｝の検査",
                "furigana": "｛胃（い）せいひんけんさ",
                "meaning_vi": "Kiểm tra dạ dày, sản phẩm..",
                "meaning_en": "{Status/Product...} Examination"
              }
            ],
            "lesson_number": 47
          },
          {
            "vocab": "血液",
            "furigana": "けつえき",
            "meaning_vi": "máu",
            "meaning_en": "blood",
            "examples": [
              {
                "example_text": "体の中を血液が流れている",
                "furigana": "体（からだ）なかけつえきながれている",
                "meaning_vi": "Máu chảy trong cơ thể.",
                "meaning_en": "Blood flows through the body"
              }
            ],
            "lesson_number": 47
          },
          {
            "vocab": "治療",
            "furigana": "ちりょう",
            "meaning_vi": "đối xử",
            "meaning_en": "treat",
            "examples": [
              {
                "example_text": "病気を治療した",
                "furigana": "病気（びょうき）ちりょうした",
                "meaning_vi": "Đã chữa bệnh.",
                "meaning_en": "I treated the illness"
              }
            ],
            "lesson_number": 47
          },
          {
            "vocab": "症状",
            "furigana": "しょうじょう",
            "meaning_vi": "Triệu chứng",
            "meaning_en": "Symptom",
            "examples": [
              {
                "example_text": "かぜの症状は、熱、せき、鼻水などだ",
                "furigana": "かぜの症状（しょうじょう）ねつはなみずなどだ",
                "meaning_vi": "Triệu chứng khi ốm là ho, sốt, nước mũi..",
                "meaning_en": "Symptoms of colds include fever, cough, and runny nose"
              }
            ],
            "lesson_number": 47
          },
          {
            "vocab": "予防",
            "furigana": "よぼう",
            "meaning_vi": "phòng ngừa",
            "meaning_en": "prevent",
            "examples": [
              {
                "example_text": "かぜの予防",
                "furigana": "かぜの予防（よぼう）",
                "meaning_vi": "Đề phòng ốm.",
                "meaning_en": "Preventing colds"
              }
            ],
            "lesson_number": 47
          },
          {
            "vocab": "栄養",
            "furigana": "えいよう",
            "meaning_vi": "dinh dưỡng",
            "meaning_en": "nutrition",
            "examples": [
              {
                "example_text": "栄養のある食べ物",
                "furigana": "栄養（えいよう）たもの",
                "meaning_vi": "Đồ ăn dinh dưỡng.",
                "meaning_en": "Nutritious foods"
              }
            ],
            "lesson_number": 47
          },
          {
            "vocab": "手術",
            "furigana": "しゅじゅつ",
            "meaning_vi": "Hoạt động",
            "meaning_en": "Work",
            "examples": [
              {
                "example_text": "胃の手術を｛した／受けた｝",
                "furigana": "胃（い）しゅじゅつうけた｝",
                "meaning_vi": "Phẫu thuật dạ dày.",
                "meaning_en": "Had/expected stomach surgery"
              }
            ],
            "lesson_number": 47
          },
          {
            "vocab": "死亡",
            "furigana": "しぼう",
            "meaning_vi": "chết",
            "meaning_en": "die",
            "examples": [
              {
                "example_text": "死亡の原因を調べる",
                "furigana": "死亡（しぼう）げんいんしらべる",
                "meaning_vi": "Tìm hiểu nguyên nhân chết.",
                "meaning_en": "Investigate the cause of death"
              }
            ],
            "lesson_number": 47
          },
          {
            "vocab": "命",
            "furigana": "いのち",
            "meaning_vi": "mạng sống",
            "meaning_en": "life",
            "examples": [
              {
                "example_text": "命は大切にしなければならない",
                "furigana": "命（いのち）たいせつにしなければならない",
                "meaning_vi": "Đối với sinh mạng thì phải thận trọng.",
                "meaning_en": "Life must be cherished"
              }
            ],
            "lesson_number": 47
          },
          {
            "vocab": "一生",
            "furigana": "いっしょう",
            "meaning_vi": "trọn đời",
            "meaning_en": "lifetime",
            "examples": [
              {
                "example_text": "ピカソの一生を調べる",
                "furigana": "ピカソの一生（いっしょう）しらべる",
                "meaning_vi": "Tìm hiểu cuộc đời của Picaso.",
                "meaning_en": "Find out what Picasso has to do with life"
              }
            ],
            "lesson_number": 47
          },
          {
            "vocab": "誤解",
            "furigana": "ごかい",
            "meaning_vi": "Hiểu lầm",
            "meaning_en": "Misread",
            "examples": [
              {
                "example_text": "誤解がないようにするには、よく話し合うことが大切だ",
                "furigana": "誤解（ごかい）はなあたいせつだ",
                "meaning_vi": "Để cho mọi người không hiểu nhầm nên việc bàn bạc thảo luận rất quan trọng.",
                "meaning_en": "It is important to discuss it carefully to avoid misunderstandings."
              }
            ],
            "lesson_number": 47
          },
          {
            "vocab": "後悔",
            "furigana": "こうかい",
            "meaning_vi": "hối tiếc",
            "meaning_en": "regret",
            "examples": [
              {
                "example_text": "私は若いころに勉強しなかったことを、とても後悔している",
                "furigana": "私（わたし）わかべんきょうこうかいしている",
                "meaning_vi": "Tôi đã rất hối hận thi không học đến nơi đến chốn khi còn trẻ.",
                "meaning_en": "I regret not studying when I was younger."
              }
            ],
            "lesson_number": 47
          },
          {
            "vocab": "訳",
            "furigana": "わけ",
            "meaning_vi": "lý do",
            "meaning_en": "reason",
            "examples": [
              {
                "example_text": "遅刻したわけを話す",
                "furigana": "遅刻（ちこく）はなす",
                "meaning_vi": "Bạn hãy nói nguyên nhân đến muộn.",
                "meaning_en": "Tell me why I was late"
              }
            ],
            "lesson_number": 47
          },
          {
            "vocab": "態度",
            "furigana": "たいど",
            "meaning_vi": "thái độ",
            "meaning_en": "attitude",
            "examples": [
              {
                "example_text": "あの学生は、授業中の態度が悪い",
                "furigana": "あの学生（がくせい）じゅぎょうちゅうたいどわるい",
                "meaning_vi": "Học sinh kia có thái độ không tốt trong giờ học.",
                "meaning_en": "That student had a bad attitude during class"
              }
            ],
            "lesson_number": 48
          },
          {
            "vocab": "癖",
            "furigana": "くせ",
            "meaning_vi": "thói quen",
            "meaning_en": "habit",
            "examples": [
              {
                "example_text": "私のくせは、困ったとき頭をかくことだ",
                "furigana": "私（わたし）こまあたまをかくことだ",
                "meaning_vi": "Thói quen của tôi là mỗi khi có việc khó khăn thì tôi hay gãi đầu.",
                "meaning_en": "My habit is to scratch my head when I'm in trouble"
              }
            ],
            "lesson_number": 48
          },
          {
            "vocab": "礼儀",
            "furigana": "れいぎ",
            "meaning_vi": "lịch sự",
            "meaning_en": "polite",
            "examples": [
              {
                "example_text": "目上の人への礼儀",
                "furigana": "目上（めうえ）ひとれいぎ",
                "meaning_vi": "Chào hỏi cấp trên.",
                "meaning_en": "Courtesy to the superior"
              }
            ],
            "lesson_number": 48
          },
          {
            "vocab": "文句",
            "furigana": "もんく",
            "meaning_vi": "Mệnh đề",
            "meaning_en": "Clause",
            "examples": [
              {
                "example_text": "給料に文句がある",
                "furigana": "給料（きゅうりょう）もんくがある",
                "meaning_vi": "Tôi có phàn nàn về tiền lương.",
                "meaning_en": "I have complaints about my salary"
              }
            ],
            "lesson_number": 48
          },
          {
            "vocab": "表情",
            "furigana": "ひょうじょう",
            "meaning_vi": "sự biểu lộ",
            "meaning_en": "manifestation",
            "examples": [
              {
                "example_text": "顔の表情",
                "furigana": "顔（かお）ひょうじょう",
                "meaning_vi": "Biểu cảm khuôn mặt.",
                "meaning_en": "Face expression"
              }
            ],
            "lesson_number": 48
          },
          {
            "vocab": "表面",
            "furigana": "ひょうめん",
            "meaning_vi": "bề mặt",
            "meaning_en": "surface",
            "examples": [
              {
                "example_text": "水の表面",
                "furigana": "水（みず）ひょうめん",
                "meaning_vi": "Bề mặt nước.",
                "meaning_en": "Water surface"
              }
            ],
            "lesson_number": 48
          },
          {
            "vocab": "禁煙",
            "furigana": "きんえん",
            "meaning_vi": "Không hút thuốc",
            "meaning_en": "Non -smoking",
            "examples": [
              {
                "example_text": "「この部屋は禁煙です」",
                "furigana": "「この部屋（へや）きんえんです」",
                "meaning_vi": "\"Phòng này cấm hút thuốc.\"",
                "meaning_en": "\"This room is non-smoking.\""
              }
            ],
            "lesson_number": 48
          },
          {
            "vocab": "禁止",
            "furigana": "きんし",
            "meaning_vi": "cấm",
            "meaning_en": "ban",
            "examples": [
              {
                "example_text": "美術館の中では、写真をとることは禁止されている",
                "furigana": "美術館（びじゅつかん）なかしゃしんきんしされている",
                "meaning_vi": "Ở trong bảo tàng nghệ thuật thì bị cấm chụp ảnh.",
                "meaning_en": "Photographs are prohibited in museums"
              }
            ],
            "lesson_number": 48
          },
          {
            "vocab": "完成",
            "furigana": "かんせい",
            "meaning_vi": "Hoàn thành",
            "meaning_en": "Complete",
            "examples": [
              {
                "example_text": "｛建物／作品　…｝が完成した",
                "furigana": "｛建物（たてもの）さくひんかんせいした",
                "meaning_vi": "{Tòa nhà/ tác phẩm…} đã hoàn thành.",
                "meaning_en": "{Buildings/Works...} has been completed"
              }
            ],
            "lesson_number": 48
          },
          {
            "vocab": "課題",
            "furigana": "かだい",
            "meaning_vi": "phân công",
            "meaning_en": "assign",
            "examples": [
              {
                "example_text": "現在の日本には、高齢化、ごみ問題など、多くの課題がある",
                "furigana": "現在（げんざい）にほんこうれいかもんだいおおかだいがある",
                "meaning_vi": "Nhật Bản lúc này đang gặp những vấn đề như rác, dân số già hóa..",
                "meaning_en": "Japan currently has many issues, including the aging population and the issue of waste."
              }
            ],
            "lesson_number": 48
          },
          {
            "vocab": "例外",
            "furigana": "れいがい",
            "meaning_vi": "ngoại lệ",
            "meaning_en": "exception",
            "examples": [
              {
                "example_text": "どんな規則にも例外がある",
                "furigana": "どんな規則（きそく）れいがいがある",
                "meaning_vi": "Quy tắc nào cũng có ngoại lệ.",
                "meaning_en": "There are exceptions to every rule"
              }
            ],
            "lesson_number": 48
          },
          {
            "vocab": "基本",
            "furigana": "きほん",
            "meaning_vi": "Nền tảng",
            "meaning_en": "Foundation",
            "examples": [
              {
                "example_text": "何の練習でも、基本が大切だ",
                "furigana": "何（なん）れんしゅうきほんたいせつだ",
                "meaning_vi": "Dù có luyện tập cái gì đi nữa thì cái cơ bản rất là quan trọng.",
                "meaning_en": "The basics are important in any practice"
              }
            ],
            "lesson_number": 48
          },
          {
            "vocab": "記録",
            "furigana": "きろく",
            "meaning_vi": "ghi",
            "meaning_en": "take note",
            "examples": [
              {
                "example_text": "先週の会議の記録を読んだ",
                "furigana": "先週（せんしゅう）かいぎきろくよんだ",
                "meaning_vi": "Tôi đã đọc ghi chép của hội nghị tuần trước.",
                "meaning_en": "Read the records from last week's meeting."
              }
            ],
            "lesson_number": 48
          },
          {
            "vocab": "状態",
            "furigana": "じょうたい",
            "meaning_vi": "tình huống",
            "meaning_en": "situation",
            "examples": [
              {
                "example_text": "あの会社は、いま経営の状態がよくない",
                "furigana": "あの会社（かいしゃ）けいえいじょうたいがよくない",
                "meaning_vi": "Công ty đó trạng thái kinh doanh không tốt lắm.",
                "meaning_en": "That company is currently in poor management"
              }
            ],
            "lesson_number": 48
          },
          {
            "vocab": "出来事",
            "furigana": "できごと",
            "meaning_vi": "sự kiện",
            "meaning_en": "event",
            "examples": [
              {
                "example_text": "大きなできごと",
                "furigana": "大（おお）きなできごと",
                "meaning_vi": "Sự kiện lớn.",
                "meaning_en": "Big events"
              }
            ],
            "lesson_number": 48
          },
          {
            "vocab": "場面",
            "furigana": "ばめん",
            "meaning_vi": "bối cảnh",
            "meaning_en": "context",
            "examples": [
              {
                "example_text": "目の前でトラックとバスが衝突した。その場面が夢に出てきた",
                "furigana": "目（め）まえしょうとつばめんゆめでてきた",
                "meaning_vi": "Xe tải và xe bus đã va chạm trước mắt tôi. Cảnh đó đã xuất hiện trong giấc mơ.",
                "meaning_en": "The truck and bus collided right in front of me. That scene appeared in my dream"
              }
            ],
            "lesson_number": 49
          },
          {
            "vocab": "機会",
            "furigana": "きかい",
            "meaning_vi": "cơ hội",
            "meaning_en": "opportunity",
            "examples": [
              {
                "example_text": "彼女と二人で話したいのだが、なかなか機会がない",
                "furigana": "彼女（かのじょ）ふたりはなきかいがない",
                "meaning_vi": "Tôi muốn nói chuyện hai người với cô ấy nhưng mãi mà không có cơ hội.",
                "meaning_en": "I want to talk to her and I don't have the opportunity to do so."
              }
            ],
            "lesson_number": 49
          },
          {
            "vocab": "距離",
            "furigana": "きょり",
            "meaning_vi": "khoảng cách",
            "meaning_en": "distance",
            "examples": [
              {
                "example_text": "駅からの距離を測る",
                "furigana": "駅（えき）きょりはかる",
                "meaning_vi": "Đo khoảng cách từ nhà ga.",
                "meaning_en": "Measure the distance from the station"
              }
            ],
            "lesson_number": 49
          },
          {
            "vocab": "提案",
            "furigana": "ていあん",
            "meaning_vi": "gợi ý",
            "meaning_en": "suggest",
            "examples": [
              {
                "example_text": "会議で提案をする",
                "furigana": "会議（かいぎ）ていあんをする",
                "meaning_vi": "Đề xuất dự án trong cuộc họp.",
                "meaning_en": "Make proposals at meetings"
              }
            ],
            "lesson_number": 49
          },
          {
            "vocab": "やり取り",
            "furigana": "やりとり",
            "meaning_vi": "trao đổi",
            "meaning_en": "exchange",
            "examples": [
              {
                "example_text": "友だちとメールはやりとりする",
                "furigana": "友（とも）だちとメールはやりとりする",
                "meaning_vi": "Trao đổi mail với bạn bè.",
                "meaning_en": "I exchange emails with friends"
              }
            ],
            "lesson_number": 49
          },
          {
            "vocab": "知識",
            "furigana": "ちしき",
            "meaning_vi": "Kiến thức",
            "meaning_en": "Knowledge",
            "examples": [
              {
                "example_text": "本を読んで知識を身につける",
                "furigana": "本（ほん）よちしきみにつける",
                "meaning_vi": "Đọc sách để trao đổi kiến thức.",
                "meaning_en": "Read books to gain knowledge"
              }
            ],
            "lesson_number": 49
          },
          {
            "vocab": "実力",
            "furigana": "じつりょく",
            "meaning_vi": "Khả năng thực sự",
            "meaning_en": "Real ability",
            "examples": [
              {
                "example_text": "試合で実力を出す",
                "furigana": "試合（しあい）じつりょくだす",
                "meaning_vi": "Thể hiện thực lực trong trận đấu.",
                "meaning_en": "Show your skills in the match"
              }
            ],
            "lesson_number": 49
          },
          {
            "vocab": "手段",
            "furigana": "しゅだん",
            "meaning_vi": "có nghĩa",
            "meaning_en": "meaning",
            "examples": [
              {
                "example_text": "問題を解決するために必要な手段をとる",
                "furigana": "問題（もんだい）かいけつひつようしゅだんをとる",
                "meaning_vi": "Để giải quyết vấn đề này dùng phương kế cần thiết.",
                "meaning_en": "Take the necessary steps to solve the problem"
              }
            ],
            "lesson_number": 49
          },
          {
            "vocab": "代表",
            "furigana": "だいひょう",
            "meaning_vi": "đại diện",
            "meaning_en": "represent",
            "examples": [
              {
                "example_text": "クラスの代表として会議に参加する",
                "furigana": "クラスの代表（だいひょう）かいぎさんかする",
                "meaning_vi": "Tôi tham gia họp với tư cách là đại diện lớp.",
                "meaning_en": "Join the meeting as a class representative"
              }
            ],
            "lesson_number": 49
          },
          {
            "vocab": "影響",
            "furigana": "えいきょう",
            "meaning_vi": "Ảnh hưởng",
            "meaning_en": "Affect",
            "examples": [
              {
                "example_text": "両親の影響で、私も子どものころから絵をかき始めた",
                "furigana": "両親（りょうしん）えいきょうわたしこえはじめた",
                "meaning_vi": "Do ảnh hưởng của bố mẹ tôi cũng đã bắt đầu vẽ tranh từ khi còn nhỏ.",
                "meaning_en": "Due to the influence of my parents, I also started drawing since I was a child."
              }
            ],
            "lesson_number": 50
          },
          {
            "vocab": "効果",
            "furigana": "こうか",
            "meaning_vi": "tác dụng",
            "meaning_en": "effect",
            "examples": [
              {
                "example_text": "この薬を飲んだら、すぐに効果が出た",
                "furigana": "この薬（くすり）のこうかでた",
                "meaning_vi": "Uống thuốc này xong, đã có hiệu quả ngay.",
                "meaning_en": "I took this medicine and it worked quickly"
              }
            ],
            "lesson_number": 50
          },
          {
            "vocab": "印象",
            "furigana": "いんしょう",
            "meaning_vi": "ấn tượng",
            "meaning_en": "impression",
            "examples": [
              {
                "example_text": "彼女と初めて会ったとき、優しそうな人だという印象を受けた",
                "furigana": "彼女（かのじょ）はじあやさひといんしょううけた",
                "meaning_vi": "Lần đầu khi tôi gặp cô ấy, tôi dã ấn tượng rằng cô ấy là người hiền lành.",
                "meaning_en": "When I first met her, I was impressed by her kindness."
              }
            ],
            "lesson_number": 50
          },
          {
            "vocab": "印",
            "furigana": "しるし",
            "meaning_vi": "in",
            "meaning_en": "in",
            "examples": [
              {
                "example_text": "地図の目的地にしろしをつける",
                "furigana": "地図（ちず）もくてきちにしろしをつける",
                "meaning_vi": "Đánh dấu vào bản đồ điểm tích.",
                "meaning_en": "Add a new destination on the map"
              }
            ],
            "lesson_number": 50
          },
          {
            "vocab": "合図",
            "furigana": "あいず",
            "meaning_vi": "dấu hiệu",
            "meaning_en": "token",
            "examples": [
              {
                "example_text": "友だちに目で｛合図する／合図を送る｝",
                "furigana": "友（とも）めあいずあいずおくる｝",
                "meaning_vi": "Ra hiệu bằng mắt với bạn.",
                "meaning_en": "Eyes {sign/send a signal} to your friends"
              }
            ],
            "lesson_number": 50
          },
          {
            "vocab": "共通",
            "furigana": "きょうつう",
            "meaning_vi": "chung",
            "meaning_en": "chung",
            "examples": [
              {
                "example_text": "二人の共通の趣味は音楽だ",
                "furigana": "二人（ふたり）きょうつうしゅみおんがくだ",
                "meaning_vi": "Điểm chung của hai người là sở thích nghe nhạc.",
                "meaning_en": "Their shared hobby is music."
              }
            ],
            "lesson_number": 50
          },
          {
            "vocab": "強調",
            "furigana": "きょうちょう",
            "meaning_vi": "Nhấn mạnh",
            "meaning_en": "Emphasize",
            "examples": [
              {
                "example_text": "大事な点な協調して説明する",
                "furigana": "大事（だいじ）てんきょうちょうせつめいする",
                "meaning_vi": "Nhấn mạnh và giải thích điểm quan trọng.",
                "meaning_en": "Explain important points in cooperation"
              }
            ],
            "lesson_number": 50
          },
          {
            "vocab": "省略",
            "furigana": "しょうりゃく",
            "meaning_vi": "bỏ sót",
            "meaning_en": "miss",
            "examples": [
              {
                "example_text": "くわしい説明を省略して簡単に話す",
                "furigana": "くわしい説明（せつめい）しょうりゃくかんたんはなす",
                "meaning_vi": "Lược bớt những chi tiết hãy nói thật đơn giản.",
                "meaning_en": "Simply talk without any detailed explanations"
              }
            ],
            "lesson_number": 50
          },
          {
            "vocab": "挑戦",
            "furigana": "ちょうせん",
            "meaning_vi": "thử thách",
            "meaning_en": "challenge",
            "examples": [
              {
                "example_text": "｛むずかしい課題／チャンピオン　…｝に挑戦する",
                "furigana": "｛むずかしい課題（かだい）ちょうせんする",
                "meaning_vi": "Thử thách {vấn đề khó/ nhà vô dịch…}.",
                "meaning_en": "Challenge {Difficult Champions/Champions...}"
              }
            ],
            "lesson_number": 50
          },
          {
            "vocab": "やる気",
            "furigana": "やるき",
            "meaning_vi": "Động lực",
            "meaning_en": "Dynamic",
            "examples": [
              {
                "example_text": "やる気のある人",
                "furigana": "やる気（き）ひと",
                "meaning_vi": "Người có động lực.",
                "meaning_en": "Motivated person"
              }
            ],
            "lesson_number": 50
          },
          {
            "vocab": "勇気",
            "furigana": "ゆうき",
            "meaning_vi": "lòng can đảm",
            "meaning_en": "courage",
            "examples": [
              {
                "example_text": "困難に立ち向かう勇気",
                "furigana": "困難（こんなん）たむゆうき",
                "meaning_vi": "Dũng cảm đối đầu với khó khăn.",
                "meaning_en": "The courage to face difficulties"
              }
            ],
            "lesson_number": 50
          },
          {
            "vocab": "資格",
            "furigana": "しかく",
            "meaning_vi": "Trình độ chuyên môn",
            "meaning_en": "Professional qualifications",
            "examples": [
              {
                "example_text": "弁護士の資格を取る",
                "furigana": "弁護士（べんごし）しかくとる",
                "meaning_vi": "Lấy bằng luật sư.",
                "meaning_en": "Get a lawyer qualification"
              }
            ],
            "lesson_number": 50
          },
          {
            "vocab": "申請",
            "furigana": "しんせい",
            "meaning_vi": "Áp dụng",
            "meaning_en": "Apply",
            "examples": [
              {
                "example_text": "パスポートの申請",
                "furigana": "パスポートの申請（しんせい）",
                "meaning_vi": "Đăng kí hộ chiếu.",
                "meaning_en": "Passport application"
              }
            ],
            "lesson_number": 50
          },
          {
            "vocab": "本人",
            "furigana": "ほんにん",
            "meaning_vi": "TÔI",
            "meaning_en": "I",
            "examples": [
              {
                "example_text": "通帳は貯金をする本人が作らなければならない",
                "furigana": "通帳（つうちょう）ちょきんほんにんつくらなければならない",
                "meaning_vi": "Sổ tiết kiệm thì phải chính phủ làm.",
                "meaning_en": "The bankbook must be created by the person who saves the money."
              }
            ],
            "lesson_number": 50
          },
          {
            "vocab": "契約",
            "furigana": "けいやく",
            "meaning_vi": "hợp đồng",
            "meaning_en": "contract",
            "examples": [
              {
                "example_text": "アパートを２年間借りる契約をした",
                "furigana": "アパートを２年間（ねんかん）かけいやくをした",
                "meaning_vi": "Đã làm hợp đồng thuê nhà hai năm.",
                "meaning_en": "I signed a contract to rent an apartment for two years"
              }
            ],
            "lesson_number": 50
          },
          {
            "vocab": "証明",
            "furigana": "しょうめい",
            "meaning_vi": "Bằng chứng",
            "meaning_en": "Proof",
            "examples": [
              {
                "example_text": "銀行口座を開くときには、身分を証明するものが必要だ",
                "furigana": "銀行（ぎんこう）こうざひらみぶんしょうめいひつようだ",
                "meaning_vi": "Khi mở tài khoản ngân hàng thì cần có vật để chứng minh danh tính.",
                "meaning_en": "When opening a bank account, you need to prove your identity."
              }
            ],
            "lesson_number": 51
          },
          {
            "vocab": "変更",
            "furigana": "へんこう",
            "meaning_vi": "thay đổi",
            "meaning_en": "change",
            "examples": [
              {
                "example_text": "｛予定／計画／進路　…｝の変更を行う",
                "furigana": "｛予定（よてい）けいかくしんろへんこうおこなう",
                "meaning_vi": "Tiến hành thay đổi {dự định/ kế hoạch / lộ trình…}.",
                "meaning_en": "Make changes to {plan/plan/career...}"
              }
            ],
            "lesson_number": 51
          },
          {
            "vocab": "保存",
            "furigana": "ほぞん",
            "meaning_vi": "giữ",
            "meaning_en": "hold",
            "examples": [
              {
                "example_text": "食料の保存",
                "furigana": "食料（しょくりょう）ほぞん",
                "meaning_vi": "Bảo quản thực phẩm.",
                "meaning_en": "Preserving food"
              }
            ],
            "lesson_number": 51
          },
          {
            "vocab": "保護",
            "furigana": "ほご",
            "meaning_vi": "Bảo vệ",
            "meaning_en": "Protect",
            "examples": [
              {
                "example_text": "自然を保護する",
                "furigana": "自然（しぜん）ほごする",
                "meaning_vi": "Bảo tồn thiên nhiên.",
                "meaning_en": "Protect nature"
              }
            ],
            "lesson_number": 51
          },
          {
            "vocab": "環境",
            "furigana": "かんきょう",
            "meaning_vi": "môi trường",
            "meaning_en": "environment",
            "examples": [
              {
                "example_text": "都心より、環境のいい郊外に住みたい",
                "furigana": "都心（としん）かんきょうこうがいすみたい",
                "meaning_vi": "Tôi muốn sống ngoại ô có môi trường trong lành hơn là trung tâm thành phố.",
                "meaning_en": "I want to live in a suburb with a good environment, rather than in the city center"
              }
            ],
            "lesson_number": 51
          },
          {
            "vocab": "資源",
            "furigana": "しげん",
            "meaning_vi": "tài nguyên",
            "meaning_en": "resources",
            "examples": [
              {
                "example_text": "資源を有効に利用する",
                "furigana": "資源（しげん）ゆうこうりようする",
                "meaning_vi": "Sử dụng hiệu quả nguồn tài nguyên.",
                "meaning_en": "Make effective use of resources"
              }
            ],
            "lesson_number": 51
          },
          {
            "vocab": "不足",
            "furigana": "ふそく",
            "meaning_vi": "không đủ",
            "meaning_en": "insufficient",
            "examples": [
              {
                "example_text": "野菜が不足した食事",
                "furigana": "野菜（やさい）ふそくしょくじ",
                "meaning_vi": "Bữa ăn thiếu rau.",
                "meaning_en": "Vegetable shortages"
              }
            ],
            "lesson_number": 51
          },
          {
            "vocab": "平均",
            "furigana": "へいきん",
            "meaning_vi": "trung bình",
            "meaning_en": "medium",
            "examples": [
              {
                "example_text": "テストの点を平均する",
                "furigana": "テストの点（てん）へいきんする",
                "meaning_vi": "Tính bình quân điểm kiểm tra.",
                "meaning_en": "Averaging test scores"
              }
            ],
            "lesson_number": 51
          },
          {
            "vocab": "割合",
            "furigana": "わりあい",
            "meaning_vi": "tỷ lệ",
            "meaning_en": "proportion",
            "examples": [
              {
                "example_text": "デパートの客は女性の割合が高い",
                "furigana": "デパートの客（きゃく）じょせいわりあいたかい",
                "meaning_vi": "Khách hàng của cửa hàng bách hóa này tỉ lệ nữ giới cao.",
                "meaning_en": "Highly female customers in department stores"
              }
            ],
            "lesson_number": 51
          },
          {
            "vocab": "商売",
            "furigana": "しょうばい",
            "meaning_vi": "việc kinh doanh",
            "meaning_en": "business",
            "examples": [
              {
                "example_text": "父は衣料品の商売をしている",
                "furigana": "父（ちち）いりょうひんしょうばいをしている",
                "meaning_vi": "Bố tôi đang kinh doanh may mặc.",
                "meaning_en": "My father is doing business with clothing"
              }
            ],
            "lesson_number": 51
          },
          {
            "vocab": "商品",
            "furigana": "しょうひん",
            "meaning_vi": "hàng hóa",
            "meaning_en": "goods",
            "examples": [
              {
                "example_text": "店に商品を並べる",
                "furigana": "店（みせ）しょうひんならべる",
                "meaning_vi": "Xếp sản phẩm vào cửa hàng.",
                "meaning_en": "Arrange products in the store"
              }
            ],
            "lesson_number": 51
          },
          {
            "vocab": "質",
            "furigana": "しつ",
            "meaning_vi": "chất lượng",
            "meaning_en": "quality",
            "examples": [
              {
                "example_text": "このメーカーの製品は質がいい",
                "furigana": "このメーカーの製品（せいひん）しつがいい",
                "meaning_vi": "Sản phẩm của nhà sản suất này có chất lượng tốt.",
                "meaning_en": "This manufacturer's products are of good quality"
              }
            ],
            "lesson_number": 51
          },
          {
            "vocab": "型",
            "furigana": "かた",
            "meaning_vi": "Kiểu",
            "meaning_en": "Type",
            "examples": [
              {
                "example_text": "新しい型のパソコンを買った",
                "furigana": "新（あたら）かたかった",
                "meaning_vi": "Mua máy tính kiểu mới.",
                "meaning_en": "I bought a new computer"
              }
            ],
            "lesson_number": 51
          },
          {
            "vocab": "生産",
            "furigana": "せいさん",
            "meaning_vi": "sản xuất",
            "meaning_en": "manufacture",
            "examples": [
              {
                "example_text": "日本は農作物の生産が少ない",
                "furigana": "日本（にほん）のうさくぶつせいさんすくない",
                "meaning_vi": "Nhật Bản ít sản xuất ra những mặt hàng nông nghiệp.",
                "meaning_en": "Japan produces little agricultural products"
              }
            ],
            "lesson_number": 51
          },
          {
            "vocab": "消費",
            "furigana": "しょうひ",
            "meaning_vi": "Sự tiêu thụ",
            "meaning_en": "Consumption",
            "examples": [
              {
                "example_text": "牛乳の消費が減っている",
                "furigana": "牛乳（ぎゅうにゅう）しょうひへっている",
                "meaning_vi": "Tiêu dùng sữa đang giảm.",
                "meaning_en": "Milk consumption is decreasing"
              }
            ],
            "lesson_number": 51
          },
          {
            "vocab": "物価",
            "furigana": "ぶっか",
            "meaning_vi": "giá",
            "meaning_en": "price",
            "examples": [
              {
                "example_text": "東京は物価が高い",
                "furigana": "東京（とうきょう）ぶっかたかい",
                "meaning_vi": "Tokyo giá cả đắt đỏ.",
                "meaning_en": "Prices are high in Tokyo"
              }
            ],
            "lesson_number": 52
          },
          {
            "vocab": "倒産",
            "furigana": "とうさん",
            "meaning_vi": "Phá sản",
            "meaning_en": "Bankrupt",
            "examples": [
              {
                "example_text": "会社が倒産する",
                "furigana": "会社（かいしゃ）とうさんする",
                "meaning_vi": "Công ty phá sản.",
                "meaning_en": "The company goes bankrupt"
              }
            ],
            "lesson_number": 52
          },
          {
            "vocab": "携帯",
            "furigana": "けいたい",
            "meaning_vi": "Điện thoại di động",
            "meaning_en": "Cellular phone",
            "examples": [
              {
                "example_text": "外国人はいつも外国人登録証を携帯していなければならない",
                "furigana": "外国（がいこく）じんがいこくじんとうろくしょうけいたいしていなければならない",
                "meaning_vi": "Người ngoại quốc luôn luôn phải mang theo thẻ đăng kí nước ngoài.",
                "meaning_en": "Foreigners must always carry their foreign registration card."
              }
            ],
            "lesson_number": 52
          },
          {
            "vocab": "現代",
            "furigana": "げんだい",
            "meaning_vi": "hiện đại",
            "meaning_en": "modern",
            "examples": [
              {
                "example_text": "現代は情報の時代だと言われている",
                "furigana": "現代（げんだい）じょうほうじだいいわれている",
                "meaning_vi": "Ngày nay được nói là thời đại của thông tin.",
                "meaning_en": "It is said that today is the age of information"
              }
            ],
            "lesson_number": 52
          },
          {
            "vocab": "世紀",
            "furigana": "せいき",
            "meaning_vi": "thế kỷ",
            "meaning_en": "century",
            "examples": [
              {
                "example_text": "２１世紀が始まった",
                "furigana": "２１世紀（せいき）はじまった",
                "meaning_vi": "Thế kỉ 21 đã bắt đầu.",
                "meaning_en": "The 21st century has begun"
              }
            ],
            "lesson_number": 52
          },
          {
            "vocab": "文化",
            "furigana": "ぶんか",
            "meaning_vi": "văn hoá",
            "meaning_en": "culture",
            "examples": [
              {
                "example_text": "日本（の）文化",
                "furigana": "日本（にほん）ぶんか",
                "meaning_vi": "Văn hóa Nhật Bản.",
                "meaning_en": "Japanese culture"
              }
            ],
            "lesson_number": 52
          },
          {
            "vocab": "都市",
            "furigana": "とし",
            "meaning_vi": "Thành phố",
            "meaning_en": "City",
            "examples": [
              {
                "example_text": "都市に人口が集中する",
                "furigana": "都市（とし）じんこうしゅうちゅうする",
                "meaning_vi": "Dân số tập trung chủ yếu ở các đô thị.",
                "meaning_en": "Population is concentrated in cities"
              }
            ],
            "lesson_number": 52
          },
          {
            "vocab": "地方",
            "furigana": "ちほう",
            "meaning_vi": "địa điểm",
            "meaning_en": "location",
            "examples": [
              {
                "example_text": "雨が多い地方では、植物がよく育つ",
                "furigana": "雨（あめ）おおちほうしょくぶつそだつ",
                "meaning_vi": "Ở địa phương có mưa nhiều thì thực vật phát triển.",
                "meaning_en": "Plants grow well in areas where rain is high"
              }
            ],
            "lesson_number": 52
          },
          {
            "vocab": "戦争",
            "furigana": "せんそう",
            "meaning_vi": "chiến tranh",
            "meaning_en": "war",
            "examples": [
              {
                "example_text": "A国とB国の間で戦争が起きた",
                "furigana": "A国（こく）こくあいだせんそうおきた",
                "meaning_vi": "Đã xảy ra chiến tranh giữa hai nước A và B.",
                "meaning_en": "A war broke out between Countries A and Countries B."
              }
            ],
            "lesson_number": 52
          },
          {
            "vocab": "平和",
            "furigana": "へいわ",
            "meaning_vi": "hòa bình",
            "meaning_en": "peace",
            "examples": [
              {
                "example_text": "世界の平和を守る",
                "furigana": "世界（せかい）へいわまもる",
                "meaning_vi": "Giữ gìn hòa bình thế giới.",
                "meaning_en": "Protecting world peace"
              }
            ],
            "lesson_number": 52
          },
          {
            "vocab": "上る",
            "furigana": "のぼる",
            "meaning_vi": "leo",
            "meaning_en": "leo",
            "examples": [
              {
                "example_text": "｛階段／坂／川　…｝を上る",
                "furigana": "｛階段（かいだん）さかかわのぼる",
                "meaning_vi": "Leo {cầu thang/ dốc} ngược dòng sông….",
                "meaning_en": "Climbing the {staircase/slope/river...}"
              }
            ],
            "lesson_number": 53
          },
          {
            "vocab": "下る",
            "furigana": "くだる",
            "meaning_vi": "Đi xuống",
            "meaning_en": "Downward",
            "examples": [
              {
                "example_text": "｛坂／川／山　…｝を下る",
                "furigana": "｛坂（さか）かわやまくだる",
                "meaning_vi": "Xuống {dốc/ sông/ núi…}.",
                "meaning_en": "Down the {Slope/River/Mountain...}"
              }
            ],
            "lesson_number": 53
          },
          {
            "vocab": "進む",
            "furigana": "すすむ",
            "meaning_vi": "tiến lên",
            "meaning_en": "advance",
            "examples": [
              {
                "example_text": "出口に向かって進む",
                "furigana": "出口（でぐち）むすすむ",
                "meaning_vi": "Tiến lên hướng về lối ra.",
                "meaning_en": "Go towards the exit"
              }
            ],
            "lesson_number": 53
          },
          {
            "vocab": "進める",
            "furigana": "すすめる",
            "meaning_vi": "Tiếp tục",
            "meaning_en": "Continue",
            "examples": [
              {
                "example_text": "「もう少し車を前に進めてください」",
                "furigana": "「もう少（すこ）くるままえすすめてください」",
                "meaning_vi": "Hãy tiến xe ô tô lên một chút nữa.",
                "meaning_en": "\"Please move the car a little further.\""
              }
            ],
            "lesson_number": 53
          },
          {
            "vocab": "通る",
            "furigana": "とおる",
            "meaning_vi": "Vượt qua",
            "meaning_en": "Overcome",
            "examples": [
              {
                "example_text": "この道は車がたくさん通る",
                "furigana": "この道（みち）くるまとおる",
                "meaning_vi": "Con đường này nhiều xe ô tô qua lại.",
                "meaning_en": "There are many cars on this road"
              }
            ],
            "lesson_number": 53
          },
          {
            "vocab": "通す",
            "furigana": "とおす",
            "meaning_vi": "Vượt qua",
            "meaning_en": "Overcome",
            "examples": [
              {
                "example_text": "カーテンを通して光が部屋の中に入ってくる",
                "furigana": "カーテンを通（とお）ひかりへやなかはいってくる",
                "meaning_vi": "Ánh sáng xuyên qua rèm cửa vào trong phòng.",
                "meaning_en": "Light enters the room through the curtains"
              }
            ],
            "lesson_number": 53
          },
          {
            "vocab": "超える/越える",
            "furigana": "こえる/こえる",
            "meaning_vi": "Trên/qua",
            "meaning_en": "Over/over",
            "examples": [
              {
                "example_text": "この｛山／川｝を越えると隣の県だ",
                "furigana": "この｛山（やま）かわことなりけんだ",
                "meaning_vi": "Vượt qua {con sông/ núi…} này là đến tỉnh bên cạnh.",
                "meaning_en": "If you cross this {Mountain/River} it will be the neighboring prefecture."
              }
            ],
            "lesson_number": 53
          },
          {
            "vocab": "過ぎる",
            "furigana": "すぎる",
            "meaning_vi": "Nó quá nhiều",
            "meaning_en": "It is too much",
            "examples": [
              {
                "example_text": "列車は広島駅を過ぎた",
                "furigana": "列車（れっしゃ）ひろしまえきすぎた",
                "meaning_vi": "Tàu đã đi qua Hiroshima.",
                "meaning_en": "The train passed Hiroshima Station"
              }
            ],
            "lesson_number": 53
          },
          {
            "vocab": "過ごす",
            "furigana": "すごす",
            "meaning_vi": "tiêu",
            "meaning_en": "pepper",
            "examples": [
              {
                "example_text": "大学時代を東京で過ごした",
                "furigana": "大学（だいがく）じだいとうきょうすごした",
                "meaning_vi": "Tôi đã trải qua thờ sinh viên ở Tokyo.",
                "meaning_en": "I spent my university days in Tokyo"
              }
            ],
            "lesson_number": 53
          },
          {
            "vocab": "移る",
            "furigana": "うつる",
            "meaning_vi": "Di chuyển",
            "meaning_en": "Move",
            "examples": [
              {
                "example_text": "黒板の字が見えにくかったので、前の席に移った",
                "furigana": "黒板（こくばん）じみまえせきうつった",
                "meaning_vi": "Vì khó nhìn chữ trên bảng nên đã chuyển chỗ lên trên.",
                "meaning_en": "It was difficult to see the letters on the blackboard, so I moved to the front seat."
              }
            ],
            "lesson_number": 54
          },
          {
            "vocab": "移す",
            "furigana": "うつす",
            "meaning_vi": "Chuyển khoản",
            "meaning_en": "Transfer",
            "examples": [
              {
                "example_text": "本社は大阪から東京に移した",
                "furigana": "本社（ほんしゃ）おおさかとうきょううつした",
                "meaning_vi": "Chuyển trụ sở từ Osaka về Tokyo.",
                "meaning_en": "Head office has been moved from Osaka to Tokyo."
              }
            ],
            "lesson_number": 54
          },
          {
            "vocab": "連れる",
            "furigana": "つれる",
            "meaning_vi": "Tôi sẽ đưa bạn",
            "meaning_en": "I will take you",
            "examples": [
              {
                "example_text": "子どもを動物園へ連れて行った",
                "furigana": "子（こ）どうぶつえんついった",
                "meaning_vi": "Dẫn con đi chơi sở thú.",
                "meaning_en": "I took my child to the zoo"
              }
            ],
            "lesson_number": 54
          },
          {
            "vocab": "寄る",
            "furigana": "よる",
            "meaning_vi": "Tôi sẽ dừng lại",
            "meaning_en": "I will stop",
            "examples": [
              {
                "example_text": "窓のそばに寄って外を見た",
                "furigana": "窓（まど）よそとみた",
                "meaning_vi": "Ghé sát vào cửa sổ nhìn ra bên ngoài.",
                "meaning_en": "I stopped by the window and looked outside"
              }
            ],
            "lesson_number": 54
          },
          {
            "vocab": "寄せる",
            "furigana": "よせる",
            "meaning_vi": "Tôi sẽ mang nó",
            "meaning_en": "I will bring it",
            "examples": [
              {
                "example_text": "地震のときは、車を道の左側に寄せて止めなければならない",
                "furigana": "地震（じしん）くるまみちひだりがわよとめなければならない",
                "meaning_vi": "Khi có động đất oto phải tạt vào bên trái đường rồi dừng lại.",
                "meaning_en": "In the event of an earthquake, the car must be brought to the left side of the road and stopped."
              }
            ],
            "lesson_number": 54
          },
          {
            "vocab": "与える",
            "furigana": "あたえる",
            "meaning_vi": "đưa cho",
            "meaning_en": "give",
            "examples": [
              {
                "example_text": "成績のよい学生に奨学金を与える",
                "furigana": "成績（せいせき）がくせいしょうがくきんあたえる",
                "meaning_vi": "Tặng học bổng cho học sinh có thành tích tốt.",
                "meaning_en": "Granting scholarships to students with good grades"
              }
            ],
            "lesson_number": 54
          },
          {
            "vocab": "得る",
            "furigana": "える",
            "meaning_vi": "đạt được",
            "meaning_en": "achieve",
            "examples": [
              {
                "example_text": "｛収入／情報／知識　…｝を得る",
                "furigana": "｛収入（しゅうにゅう）じょうほうちしきえる",
                "meaning_vi": "Có {thu nhập/ thông tin/ấn tượng…}.",
                "meaning_en": "Gain {income/information/knowledge...}"
              }
            ],
            "lesson_number": 54
          },
          {
            "vocab": "向く",
            "furigana": "むく",
            "meaning_vi": "Đi về phía",
            "meaning_en": "Toward",
            "examples": [
              {
                "example_text": "私の部屋は、東南｛を／に｝向いている",
                "furigana": "私（わたし）へやとうなんむいている",
                "meaning_vi": "Phòng tôi hướng về phía đông nam.",
                "meaning_en": "My room is facing southeast {/to}"
              }
            ],
            "lesson_number": 54
          },
          {
            "vocab": "向ける",
            "furigana": "むける",
            "meaning_vi": "Đối với",
            "meaning_en": "For",
            "examples": [
              {
                "example_text": "顔を右に向ける",
                "furigana": "顔（かお）みぎむける",
                "meaning_vi": "Quay mặt sang phải.",
                "meaning_en": "Turn your face to the right"
              }
            ],
            "lesson_number": 54
          },
          {
            "vocab": "勧める",
            "furigana": "すすめる",
            "meaning_vi": "gợi ý",
            "meaning_en": "suggest",
            "examples": [
              {
                "example_text": "ダイエットしている友人に、いっしょにウォーキングをしようと勧めた",
                "furigana": "ダイエットしている友人（ゆうじん）すすめた",
                "meaning_vi": "Tôi đã gợi ý đứa bạn thân đang giảm cân cùng đi bộ với tôi.",
                "meaning_en": "I recommended my friend who was on a diet to go on a walk with me."
              }
            ],
            "lesson_number": 54
          },
          {
            "vocab": "薦める",
            "furigana": "すすめる",
            "meaning_vi": "gợi ý",
            "meaning_en": "suggest",
            "examples": [
              {
                "example_text": "先生にすすめられた本を買った",
                "furigana": "先生（せんせい）ほんかった",
                "meaning_vi": "Đã mua quyển sách mà thầy giới thiệu.",
                "meaning_en": "I bought a book recommended by my teacher"
              }
            ],
            "lesson_number": 54
          },
          {
            "vocab": "任せる",
            "furigana": "まかせる",
            "meaning_vi": "Để nó cho tôi",
            "meaning_en": "Let it give me",
            "examples": [
              {
                "example_text": "責任の重い仕事を新人に任せてみた",
                "furigana": "責任（せきにん）おもしごとしんじんまかせてみた",
                "meaning_vi": "Thử giao trách nhiệm công việc nặng nề cho người mới.",
                "meaning_en": "I left the job with a lot of responsibility to a new employee"
              }
            ],
            "lesson_number": 54
          },
          {
            "vocab": "守る",
            "furigana": "まもる",
            "meaning_vi": "bảo vệ",
            "meaning_en": "protect",
            "examples": [
              {
                "example_text": "｛法律／規則／ルール／約束　…｝を守る",
                "furigana": "｛法律（ほうりつ）きそくやくそくまもる",
                "meaning_vi": "Tuân thủ {pháp luật/ quy tắc/ luật lệ/ lời hứa…}.",
                "meaning_en": "Follow {Laws/Rules/Rules/Promise...}"
              }
            ],
            "lesson_number": 54
          },
          {
            "vocab": "争う",
            "furigana": "あらそう",
            "meaning_vi": "Trận đánh",
            "meaning_en": "Battle",
            "examples": [
              {
                "example_text": "あの兄弟はいつも小さなことで争っている",
                "furigana": "あの兄弟（きょうだい）ちいあらそっている",
                "meaning_vi": "Anh em nhà kia lúc nào cũng cãi nhau vì mấy chuyện nhỏ nhặt.",
                "meaning_en": "That brother is always fighting over small things"
              }
            ],
            "lesson_number": 55
          },
          {
            "vocab": "望む",
            "furigana": "のぞむ",
            "meaning_vi": "Tôi muốn",
            "meaning_en": "I want",
            "examples": [
              {
                "example_text": "卒業後は、教師になることを望んでいる",
                "furigana": "卒業後（そつぎょうご）きょうしのぞんでいる",
                "meaning_vi": "Sau khi tốt nghiệp tôi mong muốn trở thành giáo viên.",
                "meaning_en": "I hope to become a teacher after graduation"
              }
            ],
            "lesson_number": 55
          },
          {
            "vocab": "信じる",
            "furigana": "しんじる",
            "meaning_vi": "tin tưởng",
            "meaning_en": "trust",
            "examples": [
              {
                "example_text": "「きのう、ゆうれいを見たよ」「うそ！信じられない！」",
                "furigana": "「きのう、ゆうれいを見（み）しんじられない！」",
                "meaning_vi": "\"Ngày hôm qua tôi đã nhìn thấy ma đó.\" -\"Điêu! Thật là không thể tin nỗi.\"",
                "meaning_en": "\"I saw Yurei yesterday.\" \"No way! I can't believe it!\""
              }
            ],
            "lesson_number": 55
          },
          {
            "vocab": "通じる",
            "furigana": "つうじる",
            "meaning_vi": "Nó đi qua",
            "meaning_en": "It goes through",
            "examples": [
              {
                "example_text": "日本に来たとき、私の日本語が通じるかどうか心配だった",
                "furigana": "日本（にほん）きわたしにほんごつうしんぱいだった",
                "meaning_vi": "Khi đến Nhật tôi lo lắng mọi người không hiểu tiếng Nhật của tôi.",
                "meaning_en": "When I came to Japan I was worried if my Japanese would be communicated."
              }
            ],
            "lesson_number": 55
          },
          {
            "vocab": "飽きる",
            "furigana": "あきる",
            "meaning_vi": "Tôi chán",
            "meaning_en": "I'm bored",
            "examples": [
              {
                "example_text": "好きなものでも、毎日食べるとあきてしまう",
                "furigana": "好（す）まいにちたべるとあきてしまう",
                "meaning_vi": "Dù là đồ mình thích nhưng ngày nào cũng ăn sẽ rất chán.",
                "meaning_en": "Even if you like something, you'll be left with eating it every day"
              }
            ],
            "lesson_number": 55
          },
          {
            "vocab": "思いつく",
            "furigana": "おもいつく",
            "meaning_vi": "Nó xuất hiện trong tâm trí",
            "meaning_en": "It appears in the mind",
            "examples": [
              {
                "example_text": "｛アイディア／考え／方法　…｝を思いつく",
                "furigana": "｛アイディア／考（かんが）ほうほうおもいつく",
                "meaning_vi": "Nghĩ ra {ý tưởng/ suy nghĩ/ phương pháp…}.",
                "meaning_en": "I come up with {ideas/thinking/methods...}"
              }
            ],
            "lesson_number": 55
          },
          {
            "vocab": "思いやる",
            "furigana": "おもいやる",
            "meaning_vi": "Tôi nghĩ về nó",
            "meaning_en": "I think about it",
            "examples": [
              {
                "example_text": "父親の言葉は厳しかったが、その言葉には子どもを思いやる気持ちが表れていた",
                "furigana": "父親（ちちおや）ことばきびことばこおもきもあらわれていた",
                "meaning_vi": "Lời nói của bố mẹ rất nghiêm khắc nhưng những lời đó là biểu hiện sự quan tâm đến con cái.",
                "meaning_en": "The father's words were harsh, but those words showed a sense of caring for the child."
              }
            ],
            "lesson_number": 55
          },
          {
            "vocab": "熱中する",
            "furigana": "ねっちゅうする",
            "meaning_vi": "Nhận đam mê",
            "meaning_en": "Get passionate",
            "examples": [
              {
                "example_text": "母は今カラオケに熱中している",
                "furigana": "母（はは）いまねっちゅうしている",
                "meaning_vi": "Mẹ tôi bây giờ đang rất mải mê hát Karaoke.",
                "meaning_en": "My mother is currently obsessed with karaoke"
              }
            ],
            "lesson_number": 55
          },
          {
            "vocab": "暮らす",
            "furigana": "くらす",
            "meaning_vi": "sống",
            "meaning_en": "living",
            "examples": [
              {
                "example_text": "都会で暮らすのは便利だが、お金がかかる",
                "furigana": "都会（とかい）くべんりかねがかかる",
                "meaning_vi": "Sống ở thành phố rất tiện lợi nhưng tốn tiền.",
                "meaning_en": "Living in the city is convenient, but it costs money"
              }
            ],
            "lesson_number": 55
          },
          {
            "vocab": "巻く",
            "furigana": "まく",
            "meaning_vi": "Cuộn nó",
            "meaning_en": "Roll it",
            "examples": [
              {
                "example_text": "マフラーを首に巻く",
                "furigana": "マフラーを首（くび）まく",
                "meaning_vi": "Quàng khăn vào cổ.",
                "meaning_en": "Wrap the scarf around your neck"
              }
            ],
            "lesson_number": 55
          },
          {
            "vocab": "結ぶ",
            "furigana": "むすぶ",
            "meaning_vi": "Cà vạt",
            "meaning_en": "Tie",
            "examples": [
              {
                "example_text": "くつのひもを結ぶ",
                "furigana": "くつのひもを結（むす）ぶ",
                "meaning_vi": "Buộc dây giày.",
                "meaning_en": "Tie the strings of shoes"
              }
            ],
            "lesson_number": 55
          },
          {
            "vocab": "済む",
            "furigana": "すむ",
            "meaning_vi": "Hoàn thành",
            "meaning_en": "Complete",
            "examples": [
              {
                "example_text": "仕事が済んだらすぐ帰る",
                "furigana": "仕事（しごと）すかえる",
                "meaning_vi": "Sau khi hoàn thành công việc tôi về ngay.",
                "meaning_en": "I'll go home immediately after work"
              }
            ],
            "lesson_number": 55
          },
          {
            "vocab": "済ませる",
            "furigana": "すませる",
            "meaning_vi": "Kết thúc",
            "meaning_en": "End/end",
            "examples": [
              {
                "example_text": "お金の支払いを済ませる",
                "furigana": "お金（かね）しはらすませる",
                "meaning_vi": "Hoàn thành việc trả tiền.",
                "meaning_en": "Finish paying the money"
              }
            ],
            "lesson_number": 55
          },
          {
            "vocab": "出来る",
            "furigana": "できる",
            "meaning_vi": "Có thể được thực hiện",
            "meaning_en": "Can be done",
            "examples": [
              {
                "example_text": "駅前に新しいスーパーができた",
                "furigana": "駅前（えきまえ）あたらしいスーパーができた",
                "meaning_vi": "Trước nhà ga siêu thị mới đã hoàn thành.",
                "meaning_en": "A new supermarket has been opened in front of the station"
              }
            ],
            "lesson_number": 56
          },
          {
            "vocab": "切れる",
            "furigana": "きれる",
            "meaning_vi": "Nó cắt",
            "meaning_en": "It cuts",
            "examples": [
              {
                "example_text": "このはさみはよく切れる",
                "furigana": "このはさみはよく切（き）れる",
                "meaning_vi": "Cái kéo này cắt sắt nhỉ.",
                "meaning_en": "These scissors cut well"
              }
            ],
            "lesson_number": 56
          },
          {
            "vocab": "切らす",
            "furigana": "きらす",
            "meaning_vi": "Cắt bỏ",
            "meaning_en": "Cut off",
            "examples": [
              {
                "example_text": "うっかりしていて、｛さとう／せっけん／トイレットペーパー　…｝を切らしてしまった",
                "furigana": "うっかりしていて、｛さとう／せっけん／トイレットペーパー　…｝を切（き）らしてしまった",
                "meaning_vi": "Không để ý là đã dùng hết {đường / bột giặt/ giấy vệ sinh…}.",
                "meaning_en": "I was accidentally gone and lost my {Sato/Soap/Toilet Paper...}"
              }
            ],
            "lesson_number": 56
          },
          {
            "vocab": "伝わる",
            "furigana": "つたわる",
            "meaning_vi": "Nó được truyền đi",
            "meaning_en": "It is transmitted",
            "examples": [
              {
                "example_text": "彼が結婚するといううわさが伝わってきた",
                "furigana": "彼（かれ）けっこんつたわってきた",
                "meaning_vi": "Tin đồn anh ấy kết hôn đã được lan truyền.",
                "meaning_en": "Rumors have come to light that he'll be getting married"
              }
            ],
            "lesson_number": 57
          },
          {
            "vocab": "伝える",
            "furigana": "つたえる",
            "meaning_vi": "kể",
            "meaning_en": "tell",
            "examples": [
              {
                "example_text": "電話で用事を伝える",
                "furigana": "電話（でんわ）ようじつたえる",
                "meaning_vi": "Truyền đạt việc bận qua điện thoại.",
                "meaning_en": "Telling your errands over the phone"
              }
            ],
            "lesson_number": 57
          },
          {
            "vocab": "続く",
            "furigana": "つづく",
            "meaning_vi": "Tiếp tục",
            "meaning_en": "Continue",
            "examples": [
              {
                "example_text": "雨の日が続く",
                "furigana": "雨（あめ）ひつづく",
                "meaning_vi": "Tiếp tục những ngày mưa.",
                "meaning_en": "Rainy days continue"
              }
            ],
            "lesson_number": 57
          },
          {
            "vocab": "続ける",
            "furigana": "つづける",
            "meaning_vi": "Tiếp tục",
            "meaning_en": "Continue",
            "examples": [
              {
                "example_text": "もう３時間も会議を続けている",
                "furigana": "もう３時間（じかん）かいぎつづけている",
                "meaning_vi": "Cuộc họp đã kéo dài 3 tiếng vẫn tiếp tục.",
                "meaning_en": "I've been meeting for three hours now"
              }
            ],
            "lesson_number": 57
          },
          {
            "vocab": "つながる",
            "furigana": "つながる",
            "meaning_vi": "Kết nối",
            "meaning_en": "Connect",
            "examples": [
              {
                "example_text": "本州と四国は橋でつながっている",
                "furigana": "本州（ほんしゅう）しこくはしでつながっている",
                "meaning_vi": "Nối giữa hòn đảo Honshu và Shikoku là cây cầu.",
                "meaning_en": "Honshu and Shikoku are connected by a bridge"
              }
            ],
            "lesson_number": 57
          },
          {
            "vocab": "つなぐ",
            "furigana": "つなぐ",
            "meaning_vi": "treo lên",
            "meaning_en": "drape",
            "examples": [
              {
                "example_text": "この橋は本州と四国をつないでいる",
                "furigana": "この橋（はし）ほんしゅうしこくをつないでいる",
                "meaning_vi": "Cây cầu này nối hai đảo là Honshu và Shinkoku.",
                "meaning_en": "This bridge connects Honshu and Shikoku."
              }
            ],
            "lesson_number": 57
          },
          {
            "vocab": "つなげる",
            "furigana": "つなげる",
            "meaning_vi": "Kết nối",
            "meaning_en": "Connect",
            "examples": [
              {
                "example_text": "このチャンスをぜひ成功につなげたい",
                "furigana": "このチャンスをぜひ成功（せいこう）につなげたい",
                "meaning_vi": "Tôi muốn nắm chắc thành công ở cơ hội này.",
                "meaning_en": "I want to make this opportunity a success"
              }
            ],
            "lesson_number": 57
          },
          {
            "vocab": "伸びる",
            "furigana": "のびる",
            "meaning_vi": "mở rộng",
            "meaning_en": "extend",
            "examples": [
              {
                "example_text": "｛背／髪／ひげ　…｝が伸びる",
                "furigana": "｛背（せ）かみのびる",
                "meaning_vi": "{Lưng/ tóc/ râu…} dài ra.",
                "meaning_en": "{Back/Hair/Beard...} grows"
              }
            ],
            "lesson_number": 57
          },
          {
            "vocab": "伸ばす",
            "furigana": "のばす",
            "meaning_vi": "kéo dài",
            "meaning_en": "lengthen",
            "examples": [
              {
                "example_text": "｛髪／ひげ／身長　…｝を伸ばす",
                "furigana": "｛髪（かみ）しんちょうのばす",
                "meaning_vi": "Nuôi {tóc/ râu/ chiều cao…} dài ra.",
                "meaning_en": "Stretch {Hair/Beard/Height...}"
              }
            ],
            "lesson_number": 57
          },
          {
            "vocab": "延びる",
            "furigana": "のびる",
            "meaning_vi": "Nó sẽ mở rộng",
            "meaning_en": "It will expand",
            "examples": [
              {
                "example_text": "レポートのしめ切りが延びてよかった",
                "furigana": "レポートのしめ切（き）のびてよかった",
                "meaning_vi": "Hạn chót của báo cáo được trì hoãn thật may.",
                "meaning_en": "I'm glad the report was extended"
              }
            ],
            "lesson_number": 57
          },
          {
            "vocab": "延ばす",
            "furigana": "のばす",
            "meaning_vi": "mở rộng",
            "meaning_en": "extend",
            "examples": [
              {
                "example_text": "チケットが取れなかったので、帰国の日を延ばした",
                "furigana": "チケットが取（と）きこくひのばした",
                "meaning_vi": "Vì không lấy được vé, nên hoãn ngày về nước.",
                "meaning_en": "I couldn't get a ticket, so I extended the day I returned to Japan."
              }
            ],
            "lesson_number": 57
          },
          {
            "vocab": "重なる",
            "furigana": "かさなる",
            "meaning_vi": "Nó trùng lặp",
            "meaning_en": "It duplicates",
            "examples": [
              {
                "example_text": "印刷したら、紙が２枚重なって出てきた",
                "furigana": "印刷（いんさつ）かみまいかさでてきた",
                "meaning_vi": "Khi in, giấy chồng hai tờ lên nhau chui ra.",
                "meaning_en": "When I printed it, two sheets of paper came out."
              }
            ],
            "lesson_number": 57
          },
          {
            "vocab": "重ねる",
            "furigana": "かさねる",
            "meaning_vi": "Lớp nó",
            "meaning_en": "Layer",
            "examples": [
              {
                "example_text": "皿を重ねて置いておく",
                "furigana": "皿（さら）かさおいておく",
                "meaning_vi": "Chồng đĩa sẵn lên nhau.",
                "meaning_en": "Place the plates together"
              }
            ],
            "lesson_number": 57
          },
          {
            "vocab": "広がる",
            "furigana": "ひろがる",
            "meaning_vi": "lây lan",
            "meaning_en": "spread",
            "examples": [
              {
                "example_text": "道幅が広がって、歩きやすくなった",
                "furigana": "道幅（みちはば）ひろあるきやすくなった",
                "meaning_vi": "Con đường rất rộng nên đi bộ thoải mái.",
                "meaning_en": "The road has widened and it's easier to walk"
              }
            ],
            "lesson_number": 58
          },
          {
            "vocab": "広げる",
            "furigana": "ひろげる",
            "meaning_vi": "lây lan",
            "meaning_en": "spread",
            "examples": [
              {
                "example_text": "お客さんが増えているので、もっと店を広げたい",
                "furigana": "お客（きゃく）ふみせひろげたい",
                "meaning_vi": "Vì khách đang tăng lên nên muốn mở rộng quán hơn nữa.",
                "meaning_en": "As customers are increasing, I want to expand my store more"
              }
            ],
            "lesson_number": 58
          },
          {
            "vocab": "載る",
            "furigana": "のる",
            "meaning_vi": "Bao gồm",
            "meaning_en": "Include",
            "examples": [
              {
                "example_text": "この荷物は大きすぎて、私の車にはのらないだろう",
                "furigana": "この荷物（にもつ）おおわたしくるまにはのらないだろう",
                "meaning_vi": "Hành lí này quá to, có lẽ không vừa xe ô tô của tôi.",
                "meaning_en": "This bag is too big and won't fit in my car"
              }
            ],
            "lesson_number": 58
          },
          {
            "vocab": "載せる",
            "furigana": "のせる",
            "meaning_vi": "Đặt nó",
            "meaning_en": "Set it",
            "examples": [
              {
                "example_text": "たなに荷物をのせる",
                "furigana": "たなに荷物（にもつ）をのせる",
                "meaning_vi": "Cho hành lí lên giá.",
                "meaning_en": "Put your luggage on the tan"
              }
            ],
            "lesson_number": 58
          },
          {
            "vocab": "そろう",
            "furigana": "そろう",
            "meaning_vi": "Nó đúng",
            "meaning_en": "It is right",
            "examples": [
              {
                "example_text": "「全員がそろったら出発しましょう」",
                "furigana": "「全員（ぜんいん）しゅっぱつしましょう」",
                "meaning_vi": "Khi tụ tập đủ nhân viên sẽ xuất phát.",
                "meaning_en": "\"Let's leave when everyone is together.\""
              }
            ],
            "lesson_number": 58
          },
          {
            "vocab": "そろえる",
            "furigana": "そろえる",
            "meaning_vi": "Tất cả cùng nhau",
            "meaning_en": "All together",
            "examples": [
              {
                "example_text": "マージャンをするため、ナンバーをそろえた",
                "furigana": "マージャンをするため、ナンバーをそろえた",
                "meaning_vi": "Tập hợp thành viên để chơi mạt chược.",
                "meaning_en": "The numbers were all set to play mahjong."
              }
            ],
            "lesson_number": 58
          },
          {
            "vocab": "まとまる",
            "furigana": "まとまる",
            "meaning_vi": "Cùng nhau",
            "meaning_en": "Together",
            "examples": [
              {
                "example_text": "３時間話し合って、やっとクラスの意見がまとまった",
                "furigana": "３時間（じかん）はなあいけんがまとまった",
                "meaning_vi": "Cuối cùng đã thống nhất được ý kiến của lớp sau 3 tiếng thảo luận.",
                "meaning_en": "After three hours of discussion, the class finally came to terms with their opinions."
              }
            ],
            "lesson_number": 58
          },
          {
            "vocab": "まとめる",
            "furigana": "まとめる",
            "meaning_vi": "Cùng nhau",
            "meaning_en": "Together",
            "examples": [
              {
                "example_text": "引っ越しの前に、いらなくなったものをまとめて捨てた",
                "furigana": "引（ひ）こまえすてた",
                "meaning_vi": "Trước khi chuyển nhà đã tập hợp lại đồ không dùng nữa đem đi vứt.",
                "meaning_en": "Before moving, I threw away all the things I didn't need."
              }
            ],
            "lesson_number": 58
          },
          {
            "vocab": "付く",
            "furigana": "つく",
            "meaning_vi": "Đi kèm với",
            "meaning_en": "Comes with",
            "examples": [
              {
                "example_text": "けがをしてシャツに血がついた",
                "furigana": "けがをしてシャツに血（ち）がついた",
                "meaning_vi": "Bị thương nên máu dính vào áo.",
                "meaning_en": "He was injured and had blood on his shirt"
              }
            ],
            "lesson_number": 58
          },
          {
            "vocab": "付ける",
            "furigana": "つける",
            "meaning_vi": "mặc",
            "meaning_en": "wear",
            "examples": [
              {
                "example_text": "パンにジャムをつける",
                "furigana": "パンにジャムをつける",
                "meaning_vi": "Thêm mứt vào bánh mì.",
                "meaning_en": "Pour jam on bread"
              }
            ],
            "lesson_number": 58
          },
          {
            "vocab": "たまる",
            "furigana": "たまる",
            "meaning_vi": "Sưu tầm",
            "meaning_en": "Collect",
            "examples": [
              {
                "example_text": "｛お金／水／ごみ／ストレス　…｝がたまる",
                "furigana": "｛お金（かね）みず／ごみ／ストレス　…｝がたまる",
                "meaning_vi": "Tích {tiền/ nước/ rác/ stress…}.",
                "meaning_en": "{Money/water/garbage/stress...} accumulates"
              }
            ],
            "lesson_number": 59
          },
          {
            "vocab": "ためる",
            "furigana": "ためる",
            "meaning_vi": "Tôi sẽ tiết kiệm",
            "meaning_en": "I will save",
            "examples": [
              {
                "example_text": "｛お金／水／ごみ／ストレス　…｝がためる",
                "furigana": "｛お金（おかね）みず／ごみ／ストレス　…｝がためる",
                "meaning_vi": "Tích {tiền/ nước/ rác/ stress…} lại.",
                "meaning_en": "{Money/Water/Grash/Stress...} accumulates"
              }
            ],
            "lesson_number": 59
          },
          {
            "vocab": "混じる/交じる",
            "furigana": "まじる/まじる",
            "meaning_vi": "Trộn/trộn",
            "meaning_en": "Mix/mix",
            "examples": [
              {
                "example_text": "女の子が男の子に交じってサッカーをしている",
                "furigana": "女（おんな）こおとここまじってサッカーをしている",
                "meaning_vi": "Cả con trai lẫn con gái đang chơi đá bóng.",
                "meaning_en": "Girls playing soccer with boys"
              }
            ],
            "lesson_number": 59
          },
          {
            "vocab": "混ざる/交ざる",
            "furigana": "まざる/まざる",
            "meaning_vi": "Trộn/trộn",
            "meaning_en": "Mix/mix",
            "examples": [
              {
                "example_text": "男女が交ざってサッカーをした",
                "furigana": "男女（だんじょ）まざってサッカーをした",
                "meaning_vi": "Cả nam nữ hòa  vào nhau chơi đá bóng.",
                "meaning_en": "Men and women played soccer together"
              }
            ],
            "lesson_number": 59
          },
          {
            "vocab": "混ぜる/交ぜる",
            "furigana": "まぜる/まぜる",
            "meaning_vi": "Trộn/trộn",
            "meaning_en": "Mix/mix",
            "examples": [
              {
                "example_text": "お米に豆を交ぜてたいた",
                "furigana": "お米（こめ）まめまぜてたいた",
                "meaning_vi": "Trộn gạo lẫn với đậu.",
                "meaning_en": "I wanted to mix beans with rice"
              }
            ],
            "lesson_number": 59
          },
          {
            "vocab": "解ける/溶ける",
            "furigana": "とける/とける",
            "meaning_vi": "Nó tan chảy/mel",
            "meaning_en": "It melted/Mel",
            "examples": [
              {
                "example_text": "３時間かかって、やっと問題が解けた",
                "furigana": "３時間（じかん）もんだいとけた",
                "meaning_vi": "Mất 3 tiếng cuối cùng cũng giải quyết xong vấn đề.",
                "meaning_en": "It took me three hours and finally I solved the problem."
              }
            ],
            "lesson_number": 59
          },
          {
            "vocab": "解く",
            "furigana": "とく",
            "meaning_vi": "Giải quyết",
            "meaning_en": "Resolve",
            "examples": [
              {
                "example_text": "数学の問題を解く",
                "furigana": "数学（すうがく）もんだいとく",
                "meaning_vi": "Giải quyết vấn đề của bài toán.",
                "meaning_en": "Solving mathematics problems"
              }
            ],
            "lesson_number": 59
          },
          {
            "vocab": "含む",
            "furigana": "ふくむ",
            "meaning_vi": "bao gồm",
            "meaning_en": "include",
            "examples": [
              {
                "example_text": "レモンはビタミンCを多くふくんでいる",
                "furigana": "レモンはビタミンCを多（おお）くふくんでいる",
                "meaning_vi": "Quả chanh chưa nhiều vitamin C.",
                "meaning_en": "Lemons contain a lot of vitamin C"
              }
            ],
            "lesson_number": 59
          },
          {
            "vocab": "含める",
            "furigana": "ふくめる",
            "meaning_vi": "bao gồm",
            "meaning_en": "include",
            "examples": [
              {
                "example_text": "うちの家族は、私をふくめて５人です",
                "furigana": "うちの家族（かぞく）わたしにんです",
                "meaning_vi": "Gia đình tôi bao gồm cả tôi là 5 người.",
                "meaning_en": "My family has five people, including me."
              }
            ],
            "lesson_number": 59
          },
          {
            "vocab": "抜ける",
            "furigana": "ぬける",
            "meaning_vi": "Tôi sẽ rời đi",
            "meaning_en": "I will leave",
            "examples": [
              {
                "example_text": "髪の毛が抜ける",
                "furigana": "髪（かみ）けぬける",
                "meaning_vi": "Tóc rụng.",
                "meaning_en": "Hair falls out"
              }
            ],
            "lesson_number": 59
          },
          {
            "vocab": "抜く",
            "furigana": "ぬく",
            "meaning_vi": "Di dời",
            "meaning_en": "Relocate",
            "examples": [
              {
                "example_text": "虫歯を抜く",
                "furigana": "虫歯（むしば）ぬく",
                "meaning_vi": "Nhổ răng sâu.",
                "meaning_en": "Remove tooth decay"
              }
            ],
            "lesson_number": 59
          },
          {
            "vocab": "現れる",
            "furigana": "あらわれる",
            "meaning_vi": "xuất hiện",
            "meaning_en": "appear",
            "examples": [
              {
                "example_text": "犯人は金を取りに現れたところを逮捕された",
                "furigana": "犯人（はんにん）かねとあらわたいほされた",
                "meaning_vi": "Vừa lúc tên tội phạm xuất hiện để ăn trộm tiền thì bị bắt.",
                "meaning_en": "The perpetrator was arrested when he showed up to collect money."
              }
            ],
            "lesson_number": 59
          },
          {
            "vocab": "現す",
            "furigana": "あらわす",
            "meaning_vi": "Nó xuất hiện",
            "meaning_en": "It appears",
            "examples": [
              {
                "example_text": "雲がなくなって、富士山が姿を現した",
                "furigana": "雲（くも）ふじさんすがたあらわした",
                "meaning_vi": "Hiện ra hình dạng núi Phú Sĩ khi trời quang mây.",
                "meaning_en": "The clouds disappeared and Mt. Fuji appeared"
              }
            ],
            "lesson_number": 59
          },
          {
            "vocab": "表れる",
            "furigana": "あらわれる",
            "meaning_vi": "xuất hiện",
            "meaning_en": "appear",
            "examples": [
              {
                "example_text": "彼の顔には合格した喜びが表れていた",
                "furigana": "彼（かれ）かおごうかくよろこあらわれていた",
                "meaning_vi": "Mặt anh ấy hiện ra niềm vui khi đã đỗ.",
                "meaning_en": "His face showed joy in passing."
              }
            ],
            "lesson_number": 59
          },
          {
            "vocab": "表す",
            "furigana": "あらわす",
            "meaning_vi": "đại diện",
            "meaning_en": "represent",
            "examples": [
              {
                "example_text": "気持ちを｛言葉／絵／態度　…｝で表す",
                "furigana": "気持（きも）ことばえたいどあらわす",
                "meaning_vi": "Biểu thị cảm xúc bằng {từ ngữ/ tranh/ thái độ…}.",
                "meaning_en": "Express your feelings with words/pictures/attitudes..."
              }
            ],
            "lesson_number": 59
          },
          {
            "vocab": "散る",
            "furigana": "ちる",
            "meaning_vi": "Phân tán",
            "meaning_en": "Dispersion",
            "examples": [
              {
                "example_text": "風で桜が散ってしまった",
                "furigana": "風（かぜ）さくらちってしまった",
                "meaning_vi": "Hoa anh đào rụng vì gió.",
                "meaning_en": "The wind has scattered the cherry blossoms"
              }
            ],
            "lesson_number": 60
          },
          {
            "vocab": "散らす",
            "furigana": "ちらす",
            "meaning_vi": "Tiêu tan",
            "meaning_en": "Dissipate",
            "examples": [
              {
                "example_text": "風が桜を散らしてしまった",
                "furigana": "風（かぜ）さくらちらしてしまった",
                "meaning_vi": "Hoa anh đào bị rụng vì gió.",
                "meaning_en": "The wind has scattered the cherry blossoms"
              }
            ],
            "lesson_number": 60
          },
          {
            "vocab": "明ける",
            "furigana": "あける",
            "meaning_vi": "Phá vỡ",
            "meaning_en": "Disrupt",
            "examples": [
              {
                "example_text": "｛夜／年／梅雨｝が明ける",
                "furigana": "｛夜（よ）としつゆあける",
                "meaning_vi": "Đến đêm/ bắt đầu năm mới/ hết( cuối) mùa mưa.",
                "meaning_en": "{Night/Year/Rainy Season} is over"
              }
            ],
            "lesson_number": 60
          },
          {
            "vocab": "差す",
            "furigana": "さす",
            "meaning_vi": "Đã gửi",
            "meaning_en": "Sent",
            "examples": [
              {
                "example_text": "雨がやんで、日が差してきた",
                "furigana": "雨（あめ）ひさしてきた",
                "meaning_vi": "Hết cơn mưa trời lại sáng.",
                "meaning_en": "The rain stopped and the sun was shining"
              }
            ],
            "lesson_number": 60
          },
          {
            "vocab": "パートナー",
            "furigana": "パートナー",
            "meaning_vi": "cộng sự",
            "meaning_en": "associate",
            "examples": [
              {
                "example_text": "あの人は仕事のいいパートナーだ",
                "furigana": "あの人（ひと）しごとのいいパートナーだ",
                "meaning_vi": "Người đó chắc là đối tác tốt trong công việc.",
                "meaning_en": "That person is a good partner"
              }
            ],
            "lesson_number": 61
          },
          {
            "vocab": "リーダー",
            "furigana": "リーダー",
            "meaning_vi": "lãnh đạo",
            "meaning_en": "leader",
            "examples": [
              {
                "example_text": "グループのリーダーを決める",
                "furigana": "グループのリーダーを決（き）める",
                "meaning_vi": "Quyết định người đứng đầu của nhóm.",
                "meaning_en": "Decide who the group leader"
              }
            ],
            "lesson_number": 61
          },
          {
            "vocab": "ボランテイア",
            "furigana": "ボランテイア",
            "meaning_vi": "Tình nguyện viên",
            "meaning_en": "Volunteer",
            "examples": [
              {
                "example_text": "老人ホームでボランティアをしている",
                "furigana": "老人（ろうじん）ホームでボランティアをしている",
                "meaning_vi": "Làm tình nguyện ở viện dưỡng lão.",
                "meaning_en": "Volunteering at a nursing home"
              }
            ],
            "lesson_number": 61
          },
          {
            "vocab": "コミュニケーション",
            "furigana": "コミュニケーション",
            "meaning_vi": "giao tiếp",
            "meaning_en": "communicate",
            "examples": [
              {
                "example_text": "同僚とはじゅうぶんコミュニケーションをとったほうがよい",
                "furigana": "同僚（どうりょう）とはじゅうぶんコミュニケーションをとったほうがよい",
                "meaning_vi": "Nên giao tiếp thường xuyên với đồng nghiệp thì tốt hơn.",
                "meaning_en": "It's better to communicate well with your colleagues"
              }
            ],
            "lesson_number": 61
          },
          {
            "vocab": "ユーモア",
            "furigana": "ユーモア",
            "meaning_vi": "sự hài hước",
            "meaning_en": "humorance",
            "examples": [
              {
                "example_text": "ユーモアがある彼はクラスの人気者だ",
                "furigana": "ユーモアがある彼（かれ）にんきものだ",
                "meaning_vi": "Anh ấy có sự hài hước và được yêu quý trong lớp.",
                "meaning_en": "He has humor and is popular in his class."
              }
            ],
            "lesson_number": 61
          },
          {
            "vocab": "ショック",
            "furigana": "ショック",
            "meaning_vi": "sốc",
            "meaning_en": "shock",
            "examples": [
              {
                "example_text": "彼女にほかの恋人がいて、ショックだった",
                "furigana": "彼女（かのじょ）こいびとがいて、ショックだった",
                "meaning_vi": "Tôi rất sốc vì người yêu tôi có bạn trai mới.",
                "meaning_en": "She was shocked to have another girlfriend."
              }
            ],
            "lesson_number": 61
          },
          {
            "vocab": "ストレス",
            "furigana": "ストレス",
            "meaning_vi": "nhấn mạnh",
            "meaning_en": "emphasize",
            "examples": [
              {
                "example_text": "ストレスがたまったときは、カラオケに行く",
                "furigana": "ストレスがたまったときは、カラオケに行（い）く",
                "meaning_vi": "Khi căng thẳng nhiều tôi đi hát karaoke.",
                "meaning_en": "When I'm feeling stressed, go to karaoke"
              }
            ],
            "lesson_number": 61
          },
          {
            "vocab": "バランス",
            "furigana": "バランス",
            "meaning_vi": "THĂNG BẰNG",
            "meaning_en": "Balance",
            "examples": [
              {
                "example_text": "栄養のバランスがいい食事をする",
                "furigana": "栄養（えいよう）しょくじをする",
                "meaning_vi": "Ăn những bữa ăn cân bằng về dinh dưỡng.",
                "meaning_en": "Have a well-balanced diet"
              }
            ],
            "lesson_number": 61
          },
          {
            "vocab": "レベル",
            "furigana": "レベル",
            "meaning_vi": "mức độ",
            "meaning_en": "level",
            "examples": [
              {
                "example_text": "マリアさんは日本語のレベルが高い",
                "furigana": "マリアさんは日本語（にほんご）たかい",
                "meaning_vi": "Maria có trình độ tiếng Nhật cao.",
                "meaning_en": "Maria has a high level of Japanese"
              }
            ],
            "lesson_number": 61
          },
          {
            "vocab": "アップ",
            "furigana": "アップ",
            "meaning_vi": "hướng lên",
            "meaning_en": "upward",
            "examples": [
              {
                "example_text": "時給がアップした",
                "furigana": "時給（じきゅう）がアップした",
                "meaning_vi": "Tăng lương giờ.",
                "meaning_en": "Hourly wage has increased"
              }
            ],
            "lesson_number": 61
          },
          {
            "vocab": "ダウン",
            "furigana": "ダウン",
            "meaning_vi": "xuống",
            "meaning_en": "down",
            "examples": [
              {
                "example_text": "給料ダウンで生活が苦しい",
                "furigana": "給料（きゅうりょう）せいかつくるしい",
                "meaning_vi": "Vì giảm lương nên cuộc sống khó khăn.",
                "meaning_en": "A salary cut makes life difficult"
              }
            ],
            "lesson_number": 61
          },
          {
            "vocab": "プラス",
            "furigana": "プラス",
            "meaning_vi": "Thêm vào đó",
            "meaning_en": "Add to that",
            "examples": [
              {
                "example_text": "まじめに働いていたら、時給が20円プラスされた",
                "furigana": "まじめに働（はたら）じきゅうえんプラスされた",
                "meaning_vi": "Vì làm việc chăm chỉ nên lương giờ đã được tăng thêm 20 yên.",
                "meaning_en": "If I worked seriously, my hourly wage was 20 yen more"
              }
            ],
            "lesson_number": 61
          },
          {
            "vocab": "マイナス",
            "furigana": "マイナス",
            "meaning_vi": "trừ",
            "meaning_en": "apart from",
            "examples": [
              {
                "example_text": "今月の給料は1万円のマイナスだった",
                "furigana": "今月（こんげつ）きゅうりょうまんえんのマイナスだった",
                "meaning_vi": "Lương tháng này đã bị trừ một man.",
                "meaning_en": "This month's salary was 10,000 yen negative"
              }
            ],
            "lesson_number": 61
          },
          {
            "vocab": "イメージ",
            "furigana": "イメージ",
            "meaning_vi": "hình ảnh",
            "meaning_en": "image",
            "examples": [
              {
                "example_text": "私はこの曲から広い海をイメージした",
                "furigana": "私（わたし）きょくひろうみをイメージした",
                "meaning_vi": "Tôi đã hình dung thấy hình ảnh biển rộng từ bài hát này.",
                "meaning_en": "I imagined the wide ocean from this song"
              }
            ],
            "lesson_number": 61
          },
          {
            "vocab": "コンテスト",
            "furigana": "コンテスト",
            "meaning_vi": "Cuộc thi",
            "meaning_en": "Competition",
            "examples": [
              {
                "example_text": "スピーチのコンテストで優勝した",
                "furigana": "スピーチのコンテストで優勝（ゆうしょう）した",
                "meaning_vi": "Tôi đã chiến thắng trong cuộc thi diễn thuyết.",
                "meaning_en": "Winner of the speech contest"
              }
            ],
            "lesson_number": 61
          },
          {
            "vocab": "マスコミ",
            "furigana": "マスコミ",
            "meaning_vi": "Phương tiện truyền thông",
            "meaning_en": "Media",
            "examples": [
              {
                "example_text": "このニュースはマスコミに注目されている",
                "furigana": "このニュースはマスコミに注目（ちゅうもく）されている",
                "meaning_vi": "Tin tức này đang được phương tiện truyền thông chú ý.",
                "meaning_en": "This news is attracting attention from the media"
              }
            ],
            "lesson_number": 61
          },
          {
            "vocab": "プライバシー",
            "furigana": "プライバシー",
            "meaning_vi": "sự riêng tư",
            "meaning_en": "privacy",
            "examples": [
              {
                "example_text": "現代社会では個人のプライバシーが守られないことが多い",
                "furigana": "現代（げんだい）しゃかいこじんまもおおい",
                "meaning_vi": "Trong xã hội hiện đại, có nhiều khi không thể bảo vệ được quyền riêng tư cá nhân.",
                "meaning_en": "In modern society, individual privacy is often not maintained"
              }
            ],
            "lesson_number": 61
          },
          {
            "vocab": "オフィス",
            "furigana": "オフィス",
            "meaning_vi": "Văn phòng",
            "meaning_en": "Office",
            "examples": [
              {
                "example_text": "合 ＿街、＿ビル",
                "furigana": "合 ＿街（がい）、＿ビル",
                "meaning_vi": "Khu phố văn phòng, tòa nhà văn phòng",
                "meaning_en": "______________________________________________________________________________________________________________________________"
              }
            ],
            "lesson_number": 61
          },
          {
            "vocab": "ルール",
            "furigana": "ルール",
            "meaning_vi": "luật lệ",
            "meaning_en": "rules",
            "examples": [
              {
                "example_text": "サッカーのルールを覚える",
                "furigana": "サッカーのルールを覚（おぼ）える",
                "meaning_vi": "Nhớ luật của bóng đá.",
                "meaning_en": "Memorize the rules of soccer"
              }
            ],
            "lesson_number": 61
          },
          {
            "vocab": "マナー",
            "furigana": "マナー",
            "meaning_vi": "Thái độ",
            "meaning_en": "Attitude",
            "examples": [
              {
                "example_text": "フランス料理のマナーは難しい",
                "furigana": "フランス料理（りょうり）むずかしい",
                "meaning_vi": "Cách thức dùng món ăn Pháp là khó.",
                "meaning_en": "French cuisine etiquette is difficult"
              }
            ],
            "lesson_number": 61
          },
          {
            "vocab": "ミス",
            "furigana": "ミス",
            "meaning_vi": "Cô",
            "meaning_en": "Miss",
            "examples": [
              {
                "example_text": "試合でミスをして、負けてしまった",
                "furigana": "試合（しあい）まけてしまった",
                "meaning_vi": "Vì mắc lỗi trong trận đấu nên đã thua.",
                "meaning_en": "I made a mistake in the match and lost"
              }
            ],
            "lesson_number": 61
          },
          {
            "vocab": "スケジュール",
            "furigana": "スケジュール",
            "meaning_vi": "lịch trình",
            "meaning_en": "schedule",
            "examples": [
              {
                "example_text": "今週のスケジュールを確認する",
                "furigana": "今週（こんしゅう）かくにんする",
                "meaning_vi": "Xác nhận lại lịch của tuần này.",
                "meaning_en": "Check out this week's schedule"
              }
            ],
            "lesson_number": 61
          },
          {
            "vocab": "タイトル",
            "furigana": "タイトル",
            "meaning_vi": "tiêu đề",
            "meaning_en": "title",
            "examples": [
              {
                "example_text": "タイトルをよく見てから文章を読む",
                "furigana": "タイトルをよく見（み）ぶんしょうよむ",
                "meaning_vi": "Sau khi đọc kĩ tiêu đề xong thì đọc đoạn văn.",
                "meaning_en": "Read the text carefully before reading the title"
              }
            ],
            "lesson_number": 61
          },
          {
            "vocab": "テーマ",
            "furigana": "テーマ",
            "meaning_vi": "Chủ đề",
            "meaning_en": "Topic",
            "examples": [
              {
                "example_text": "この映画のテーマは「愛」だ",
                "furigana": "この映画（えいが）あい」だ",
                "meaning_vi": "Chủ đề của bộ phim là tình yêu.",
                "meaning_en": "The theme of this film is \"love.\""
              }
            ],
            "lesson_number": 61
          },
          {
            "vocab": "ストーリー",
            "furigana": "ストーリー",
            "meaning_vi": "câu chuyện",
            "meaning_en": "story",
            "examples": [
              {
                "example_text": "「あの映画のストーリーを教えてください」",
                "furigana": "「あの映画（えいが）おしえてください」",
                "meaning_vi": "\"Hãy kể câu chuyện của bộ phim đó cho tôi.\"",
                "meaning_en": "\"Please tell me the story of that movie.\""
              }
            ],
            "lesson_number": 61
          },
          {
            "vocab": "ヒット",
            "furigana": "ヒット",
            "meaning_vi": "đánh",
            "meaning_en": "fight",
            "examples": [
              {
                "example_text": "あの歌手の新曲はヒットしている",
                "furigana": "あの歌手（かしゅ）しんきょくはヒットしている",
                "meaning_vi": "Ca khúc mới của ca sĩ đó đang rất nổi tiếng.",
                "meaning_en": "That singer's new song is a hit"
              }
            ],
            "lesson_number": 61
          },
          {
            "vocab": "ブランド",
            "furigana": "ブランド",
            "meaning_vi": "thương hiệu",
            "meaning_en": "trademark",
            "examples": [
              {
                "example_text": "海外でブラインドのバッグを買った",
                "furigana": "海外（かいがい）かった",
                "meaning_vi": "Tôi đã mua túi sách có thương hiệu ở nước ngoài.",
                "meaning_en": "I bought a blind bag overseas"
              }
            ],
            "lesson_number": 61
          },
          {
            "vocab": "レンタル",
            "furigana": "レンタル",
            "meaning_vi": "cho thuê",
            "meaning_en": "lease",
            "examples": [
              {
                "example_text": "このスーツケースはレンタルだ",
                "furigana": "このスーツケースはレンタルだ",
                "meaning_vi": "Cái vali này là thuê.",
                "meaning_en": "This suitcase is available for rental"
              }
            ],
            "lesson_number": 61
          },
          {
            "vocab": "リサイクル",
            "furigana": "リサイクル",
            "meaning_vi": "tái chế",
            "meaning_en": "recycle",
            "examples": [
              {
                "example_text": "古いくなった服をリサイクルに出した",
                "furigana": "古（ふる）ふくだした",
                "meaning_vi": "Quần áo cũ mang đi tái chế.",
                "meaning_en": "We put out old clothes to recycle"
              }
            ],
            "lesson_number": 61
          },
          {
            "vocab": "ラベル",
            "furigana": "ラベル",
            "meaning_vi": "nhãn",
            "meaning_en": "label",
            "examples": [
              {
                "example_text": "ビンのラベルをはがして、リサイクルに出す",
                "furigana": "ビンのラベルをはがして、リサイクルに出（だ）す",
                "meaning_vi": "Bóc cái nhãn dán của cái bình ra rồi đưa đi tái chế.",
                "meaning_en": "Remove the label from the bottle and send it for recycling"
              }
            ],
            "lesson_number": 61
          },
          {
            "vocab": "タイプ",
            "furigana": "タイプ",
            "meaning_vi": "kiểu",
            "meaning_en": "type",
            "examples": [
              {
                "example_text": "このクラスにはいろいろなタイプの学生がいる",
                "furigana": "このクラスにはいろいろなタイプの学生（がくせい）がいる",
                "meaning_vi": "Trong lớp học này có nhiều kiểu học sinh.",
                "meaning_en": "There are many different types of students in this class"
              }
            ],
            "lesson_number": 61
          },
          {
            "vocab": "スタイル",
            "furigana": "スタイル",
            "meaning_vi": "phong cách",
            "meaning_en": "style",
            "examples": [
              {
                "example_text": "彼女はスタイルを気にしてダイエットしている",
                "furigana": "彼女（かのじょ）きにしてダイエットしている",
                "meaning_vi": "Cô ấy chú ý đến dáng và đang ăn kiêng.",
                "meaning_en": "She's on a diet because she cares about her style"
              }
            ],
            "lesson_number": 61
          },
          {
            "vocab": "セット",
            "furigana": "セット",
            "meaning_vi": "bộ",
            "meaning_en": "set",
            "examples": [
              {
                "example_text": "テーブルといすをセットで買う",
                "furigana": "テーブルといすをセットで買（か）う",
                "meaning_vi": "Mua một bộ bàn và ghế.",
                "meaning_en": "Buy a table and chair as a set"
              }
            ],
            "lesson_number": 61
          },
          {
            "vocab": "ウイルス",
            "furigana": "ウイルス",
            "meaning_vi": "vi-rút",
            "meaning_en": "Vi-Visus",
            "examples": [
              {
                "example_text": "この病気はウイルスによって起こる",
                "furigana": "この病気（びょうき）おこる",
                "meaning_vi": "Bệnh này do virut gây ra.",
                "meaning_en": "This disease is caused by a virus"
              }
            ],
            "lesson_number": 61
          },
          {
            "vocab": "ロボット",
            "furigana": "ロボット",
            "meaning_vi": "Robot",
            "meaning_en": "Robot",
            "examples": [
              {
                "example_text": "子どもはロボットのアニメが好きだ",
                "furigana": "子（こ）すきだ",
                "meaning_vi": "Trẻ con rất thích phim hoạt hình robot.",
                "meaning_en": "Kids love robot anime"
              }
            ],
            "lesson_number": 61
          },
          {
            "vocab": "エネルギー",
            "furigana": "エネルギー",
            "meaning_vi": "Năng lượng",
            "meaning_en": "Energy",
            "examples": [
              {
                "example_text": "地球ではさまざまなエネルギーが不足している",
                "furigana": "地球（ちきゅう）ふそくしている",
                "meaning_vi": "Trái đất đang thiếu nhiều loại năng lượng.",
                "meaning_en": "The Earth lacks a variety of energy"
              }
            ],
            "lesson_number": 61
          },
          {
            "vocab": "デジタル",
            "furigana": "デジタル",
            "meaning_vi": "điện tử",
            "meaning_en": "electronic",
            "examples": [
              {
                "example_text": "デジタルの時計は見やすい",
                "furigana": "デジタルの時計（とけい）みやすい",
                "meaning_vi": "Đồng hồ kĩ thuật số( đồng hồ điện tử) dễ nhìn.",
                "meaning_en": "Digital watches are easy to see"
              }
            ],
            "lesson_number": 61
          },
          {
            "vocab": "マイク",
            "furigana": "マイク",
            "meaning_vi": "micro",
            "meaning_en": "micro",
            "examples": [
              {
                "example_text": "みなんの前でマイクを持って話す",
                "furigana": "みなんの前（まえ）もはなす",
                "meaning_vi": "Cầm micro và nói trước mặt mọi người.",
                "meaning_en": "Hold the microphone and speak in front of Minoru"
              }
            ],
            "lesson_number": 61
          },
          {
            "vocab": "プレーキ",
            "furigana": "プレーキ",
            "meaning_vi": "Chơi",
            "meaning_en": "Play",
            "examples": [
              {
                "example_text": "ブレーキを踏んでスピードを落とした",
                "furigana": "ブレーキを踏（ふ）おとした",
                "meaning_vi": "Giẫm lên phanh giảm tốc độ.",
                "meaning_en": "I stepped on the brake and slowed down my speed."
              }
            ],
            "lesson_number": 61
          },
          {
            "vocab": "ペンキ",
            "furigana": "ペンキ",
            "meaning_vi": "sơn",
            "meaning_en": "paint",
            "examples": [
              {
                "example_text": "かべにペンキを塗る",
                "furigana": "かべにペンキを塗（ぬ）る",
                "meaning_vi": "Quét sơn lên tường.",
                "meaning_en": "Paint the wall"
              }
            ],
            "lesson_number": 61
          },
          {
            "vocab": "炊ける",
            "furigana": "たける",
            "meaning_vi": "Có thể nấu ăn",
            "meaning_en": "Cookable",
            "examples": [
              {
                "example_text": "ごはんがたけた",
                "furigana": "ごはんがたけた",
                "meaning_vi": "Cơm đã nấu xong.",
                "meaning_en": "The rice was poured"
              }
            ],
            "lesson_number": 62
          },
          {
            "vocab": "炊く",
            "furigana": "たく",
            "meaning_vi": "đầu bếp",
            "meaning_en": "chef",
            "examples": [
              {
                "example_text": "ごはんをたく",
                "furigana": "ごはんをたく",
                "meaning_vi": "Nấu cơm.",
                "meaning_en": "I'll eat rice"
              }
            ],
            "lesson_number": 62
          },
          {
            "vocab": "煮える",
            "furigana": "にえる",
            "meaning_vi": "Nó có thể được đun sôi",
            "meaning_en": "It can be boiled",
            "examples": [
              {
                "example_text": "「この野菜をスープで煮て、煮えたら塩で味をつけてください」",
                "furigana": "「この野菜（やさい）ににしおあじをつけてください」",
                "meaning_vi": "Ninh rau bằng súp, khi rau nhừ rồi cho gia vị muối vào.",
                "meaning_en": "\"Simmer these vegetables in soup and season them with salt when they've cooked.\""
              }
            ],
            "lesson_number": 62
          },
          {
            "vocab": "煮る",
            "furigana": "にる",
            "meaning_vi": "Ninh",
            "meaning_en": "Security",
            "examples": [],
            "lesson_number": 62
          },
          {
            "vocab": "炒める",
            "furigana": "いためる",
            "meaning_vi": "Khuấy xào",
            "meaning_en": "Stir",
            "examples": [
              {
                "example_text": "フライパンに油をひいて、肉と野菜をいためる",
                "furigana": "フライパンに油（あぶら）にくやさいをいためる",
                "meaning_vi": "Cho dầu ăn vào chảo, xào rau và thịt.",
                "meaning_en": "Pour oil into a frying pan and cook meat and vegetables"
              }
            ],
            "lesson_number": 62
          },
          {
            "vocab": "焼ける",
            "furigana": "やける",
            "meaning_vi": "Có thể được nướng",
            "meaning_en": "Grilled",
            "examples": [
              {
                "example_text": "よく焼けていないぶた肉は食べないほうがいい",
                "furigana": "よく焼（や）にくたべないほうがいい",
                "meaning_vi": "Thịt nướng chưa chín kĩ không nên ăn.",
                "meaning_en": "It's best not to eat uncooked pork meat"
              }
            ],
            "lesson_number": 62
          },
          {
            "vocab": "焼く",
            "furigana": "やく",
            "meaning_vi": "nướng",
            "meaning_en": "grill",
            "examples": [
              {
                "example_text": "フライパンでオムレツを焼く",
                "furigana": "フライパンでオムレツを焼（や）く",
                "meaning_vi": "Rán trứng ốp lết bằng chảo.",
                "meaning_en": "Bake the omelette in a frying pan"
              }
            ],
            "lesson_number": 62
          },
          {
            "vocab": "ゆでる",
            "furigana": "ゆでる",
            "meaning_vi": "Đun sôi",
            "meaning_en": "Boil",
            "examples": [
              {
                "example_text": "熱い湯で｛卵／野菜　…｝をゆでる",
                "furigana": "熱（あつ）ゆたまごやさい　…｝をゆでる",
                "meaning_vi": "Luộc {trứng/ rau…} bằng nước.",
                "meaning_en": "Boil {eggs/vegetables...} in hot water"
              }
            ],
            "lesson_number": 62
          },
          {
            "vocab": "揚げる",
            "furigana": "あげる",
            "meaning_vi": "Chiên rán",
            "meaning_en": "Fried",
            "examples": [
              {
                "example_text": "油で天ぷらをあげる",
                "furigana": "油（あぶら）てんぷらをあげる",
                "meaning_vi": "Chiên Tempura bằng dầu ăn.",
                "meaning_en": "Give tempura with oil"
              }
            ],
            "lesson_number": 62
          },
          {
            "vocab": "蒸す",
            "furigana": "むす",
            "meaning_vi": "Hơi nước",
            "meaning_en": "Steam",
            "examples": [
              {
                "example_text": "湯をわかして、その湯気でギョーザをむす",
                "furigana": "湯（ゆ）ゆげでギョーザをむす",
                "meaning_vi": "Đun sôi nước rồi hấp há cảo Gyoza bằng hơi đó.",
                "meaning_en": "Bring the hot water and use the steam to simmer the gyoza"
              }
            ],
            "lesson_number": 62
          },
          {
            "vocab": "ぐっすり",
            "furigana": "ぐっすり",
            "meaning_vi": "Ngủ ngon",
            "meaning_en": "Good night",
            "examples": [
              {
                "example_text": "子どもはぐっすり眠っていて、起こしてもなかなか起きなかった",
                "furigana": "子（こ）ねむおおきなかった",
                "meaning_vi": "Đứa bé đang ngủ say, dù đánh thức thì vẫn không chịu dậy.",
                "meaning_en": "The child was sleeping soundly and it was hard to wake up when he woke up."
              }
            ],
            "lesson_number": 63
          },
          {
            "vocab": "きちんと",
            "furigana": "きちんと",
            "meaning_vi": "Gọn gàng",
            "meaning_en": "Succinct",
            "examples": [
              {
                "example_text": "「背中をまっすぐにして、きちんと座りなさい」",
                "furigana": "「背中（せなか）すわりなさい」",
                "meaning_vi": "\"Hãy thẳng lưng lên và ngồi nghiêm chỉnh.\"",
                "meaning_en": "\"Sit down your back and sit properly.\""
              }
            ],
            "lesson_number": 63
          },
          {
            "vocab": "しっかり",
            "furigana": "しっかり",
            "meaning_vi": "Mạnh mẽ",
            "meaning_en": "Strong",
            "examples": [
              {
                "example_text": "まず基礎をしっかり　　身につけることが大切だ",
                "furigana": "まず基礎（きそ）とみたいせつだ",
                "meaning_vi": "Việc nắm những cái cơ bản đầu tiên là việc rất quan trọng.",
                "meaning_en": "First of all, it is important to acquire the basics."
              }
            ],
            "lesson_number": 63
          },
          {
            "vocab": "はっきり",
            "furigana": "はっきり",
            "meaning_vi": "rõ ràng",
            "meaning_en": "clear",
            "examples": [
              {
                "example_text": "富士山がはっきり見える",
                "furigana": "富士山（ふじさん）みえる",
                "meaning_vi": "Có thể nhìn thấy núi Phú Sĩ một cách rõ ràng.",
                "meaning_en": "Mount Fuji is clearly visible"
              }
            ],
            "lesson_number": 63
          },
          {
            "vocab": "じっと",
            "furigana": "じっと",
            "meaning_vi": "Ở lại",
            "meaning_en": "Stay",
            "examples": [
              {
                "example_text": "じっと｛見る／考える／がまんする　…｝",
                "furigana": "じっと｛見（み）かんがえる／がまんする　…｝",
                "meaning_vi": "Nhìn chằm chằm/ lặng lẽ suy nghĩ/ kiên nhẫn chịu đựng….",
                "meaning_en": "Stay {Look/Think/Stick...}"
              }
            ],
            "lesson_number": 63
          },
          {
            "vocab": "そっと",
            "furigana": "そっと",
            "meaning_vi": "Chậm",
            "meaning_en": "Slow",
            "examples": [
              {
                "example_text": "寝ている人を起こさないように、そっと部屋を出た",
                "furigana": "寝（ね）ひとおへやでた",
                "meaning_vi": "Ra khỏi phòng lặng lẽ sao cho không đánh thức những người đang ngủ.",
                "meaning_en": "I left the room gently to avoid waking up anyone who was sleeping."
              }
            ],
            "lesson_number": 63
          },
          {
            "vocab": "別々に",
            "furigana": "々べつべつに",
            "meaning_vi": "Riêng",
            "meaning_en": "Private",
            "examples": [
              {
                "example_text": "「チョコレートとクッキーは別々に包んでください」",
                "furigana": "「チョコレートとクッキーは別々（べつべつ）つつんでください」",
                "meaning_vi": "\"Hãy gói riêng sô cô la với bánh Cookie cho tôi\"",
                "meaning_en": "\"Wrap the chocolate and cookies separately.\""
              }
            ],
            "lesson_number": 63
          },
          {
            "vocab": "それぞれ",
            "furigana": "それぞれ",
            "meaning_vi": "mỗi",
            "meaning_en": "each",
            "examples": [
              {
                "example_text": "みんなはそれぞれ意見を言った",
                "furigana": "みんなはそれぞれ意見（いけん）いった",
                "meaning_vi": "Mỗi người đều đã nói ý kiến của mình.",
                "meaning_en": "Everyone expressed their opinions"
              }
            ],
            "lesson_number": 63
          },
          {
            "vocab": "互いに",
            "furigana": "たがいに",
            "meaning_vi": "Với nhau",
            "meaning_en": "Together",
            "examples": [
              {
                "example_text": "彼らは互いにはげまし合って練習した",
                "furigana": "彼（かれ）たがあれんしゅうした",
                "meaning_vi": "Các anh ấy vừa cổ vũ lẫn nhau vừa tập luyện.",
                "meaning_en": "They practiced against each other"
              }
            ],
            "lesson_number": 63
          },
          {
            "vocab": "直接",
            "furigana": "ちょくせつ",
            "meaning_vi": "trực tiếp",
            "meaning_en": "direct",
            "examples": [
              {
                "example_text": "新聞記者は、関係者から直接話を聞く必要がある",
                "furigana": "新聞（しんぶん）きしゃかんけいしゃちょくせつはなしきひつようがある",
                "meaning_vi": "Đối với kí giả làm báo thì việc trực tiếp nghe câu chuyện từ những người liên quan là rất quan trọng.",
                "meaning_en": "Newspaper reporters need to hear directly from those involved."
              }
            ],
            "lesson_number": 63
          },
          {
            "vocab": "本当に",
            "furigana": "ほんとうに",
            "meaning_vi": "Thật sự",
            "meaning_en": "Actually",
            "examples": [
              {
                "example_text": "優勝できて、本当にうれしい",
                "furigana": "優勝（ゆうしょう）ほんとうにうれしい",
                "meaning_vi": "Giành được chức vô địch, thực sự là rất vui.",
                "meaning_en": "I'm really happy to win"
              }
            ],
            "lesson_number": 63
          },
          {
            "vocab": "必ず",
            "furigana": "かならず",
            "meaning_vi": "chắc chắn",
            "meaning_en": "sure",
            "examples": [
              {
                "example_text": "この書類はあした必ず出してください",
                "furigana": "この書類（しょるい）かならだしてください",
                "meaning_vi": "Tài liệu này ngày mai chắc chắn phải nộp cho tôi.",
                "meaning_en": "Please be sure to submit this document tomorrow"
              }
            ],
            "lesson_number": 63
          },
          {
            "vocab": "絶対に",
            "furigana": "ぜったいに",
            "meaning_vi": "tuyệt đối",
            "meaning_en": "absolute",
            "examples": [
              {
                "example_text": "今年は絶対　　合格｛するつもりだ／したい／しなければならない　…｝",
                "furigana": "今年（ことし）ぜったいにごうかく｛するつもりだ／したい／しなければならない　…｝",
                "meaning_vi": "Năm nay nhất định tôi( sẽ, muốn, phải..) đỗ.",
                "meaning_en": "This year, I definitely want to pass the exam (I plan to/want to/have to do it...)"
              }
            ],
            "lesson_number": 64
          },
          {
            "vocab": "特に",
            "furigana": "とくに",
            "meaning_vi": "đặc biệt",
            "meaning_en": "special",
            "examples": [
              {
                "example_text": "くだものは何でも好きですが、特にメロンが好きです",
                "furigana": "くだものは何（なん）すとくすきです",
                "meaning_vi": "Hoa quả thì thứ gì tôi cũng thích cơ mà đặc biệt thích dưa hấu.",
                "meaning_en": "I like everything fruit, but I especially like melons."
              }
            ],
            "lesson_number": 64
          },
          {
            "vocab": "ただ",
            "furigana": "ただ",
            "meaning_vi": "chỉ",
            "meaning_en": "only",
            "examples": [
              {
                "example_text": "子どもは何を聞いてもただ泣いているだけだった",
                "furigana": "子（こ）なにきないているだけだった",
                "meaning_vi": "Đứa trẻ dù có hỏi gì đi nữa thì vẫn chỉ khóc thôi.",
                "meaning_en": "No matter what the child asked, he just cryed."
              }
            ],
            "lesson_number": 64
          },
          {
            "vocab": "少なくとも",
            "furigana": "すくなくとも",
            "meaning_vi": "ít nhất",
            "meaning_en": "at least",
            "examples": [
              {
                "example_text": "ここから駅まで歩いたら、少なくとも３０分はかかるだろう",
                "furigana": "ここから駅（えき）あるすくぷんはかかるだろう",
                "meaning_vi": "Từ đây đến ga tàu nếu mà đi bộ thì ít nhất cũng phải mất 30 phút.",
                "meaning_en": "It would take at least 30 minutes to walk to the station from here."
              }
            ],
            "lesson_number": 64
          },
          {
            "vocab": "決して",
            "furigana": "けっして",
            "meaning_vi": "không bao giờ",
            "meaning_en": "never",
            "examples": [
              {
                "example_text": "「このことは、決してほかの人は言わないいつもりだ」",
                "furigana": "「このことは、決（けっ）ひといわないいつもりだ」",
                "meaning_vi": "\"Chuyện này, tôi quyết sẽ không bao giờ nói cho một người nào khác.\"",
                "meaning_en": "\"This is always something that no one else would say.\""
              }
            ],
            "lesson_number": 64
          },
          {
            "vocab": "少しも",
            "furigana": "すこしも",
            "meaning_vi": "Một chút",
            "meaning_en": "A little bit",
            "examples": [
              {
                "example_text": "毎日運動しているのに、少しも体重が減らない",
                "furigana": "毎日（まいにち）うんどうすこたいじゅうへらない",
                "meaning_vi": "Ngày nào tôi cũng vận động vậy mà một chút cân nặng cũng không giảm.",
                "meaning_en": "I exercise every day, but I can't lose any weight"
              }
            ],
            "lesson_number": 64
          },
          {
            "vocab": "ちっとも",
            "furigana": "ちっとも",
            "meaning_vi": "Một chút",
            "meaning_en": "A little bit",
            "examples": [
              {
                "example_text": "「あの二人、付き合っているらしいよ」「へえ、ちっとも知らなかった」",
                "furigana": "「あの二人（ふたり）つあしらなかった」",
                "meaning_vi": "\"Hai người kia có vẻ đang hẹn hò đó.\" -\"Ế, tao chẳng biết 1 tí gì luôn.\"",
                "meaning_en": "\"They apparently they're dating,\" \"Wow, I didn't know at all.\""
              }
            ],
            "lesson_number": 64
          },
          {
            "vocab": "全く",
            "furigana": "まったく",
            "meaning_vi": "tuyệt đối",
            "meaning_en": "absolute",
            "examples": [
              {
                "example_text": "タイさんが帰国したことを、私は全く知らなかった",
                "furigana": "タイさんが帰国（きこく）わたしまったしらなかった",
                "meaning_vi": "Tôi hoàn toàn không biết chuyện Tuấn đã về nước.",
                "meaning_en": "I had no idea that Thai had returned to Japan."
              }
            ],
            "lesson_number": 64
          },
          {
            "vocab": "とても",
            "furigana": "とても",
            "meaning_vi": "rất",
            "meaning_en": "very",
            "examples": [
              {
                "example_text": "このレポートはとてもよく書けている",
                "furigana": "このレポートはとてもよく書（か）けている",
                "meaning_vi": "Bài báo cáo này viết được quá.",
                "meaning_en": "This report is very well written"
              }
            ],
            "lesson_number": 64
          },
          {
            "vocab": "どんなに",
            "furigana": "どんなに",
            "meaning_vi": "không có vấn đề như thế nào",
            "meaning_en": "There is no problem",
            "examples": [
              {
                "example_text": "「どうして連絡してくれなかったの？　どんなに心配したか、わかる？」",
                "furigana": "「どうして連絡（れんらく）しんぱいしたか、わかる？」",
                "meaning_vi": "\"Tại sao lại không liên lạc về hả thằng kia?\"-\"Mày có biết tao đã lo lắng bao nhiêu không hả.\"",
                "meaning_en": "\"Why didn't you contact me? Do you know how worried you were?\""
              }
            ],
            "lesson_number": 64
          },
          {
            "vocab": "どうしても",
            "furigana": "どうしても",
            "meaning_vi": "không có vấn đề gì",
            "meaning_en": "no problem",
            "examples": [
              {
                "example_text": "このレポートはどうしてもあしたまでに完成させなければならない",
                "furigana": "このレポートはどうしてもあしたまでに完成（かんせい）させなければならない",
                "meaning_vi": "Bài báo cáo này dù thế nào thì ngày mai cũng phải hoàn thành.",
                "meaning_en": "This report must be completed by tomorrow"
              }
            ],
            "lesson_number": 65
          },
          {
            "vocab": "まるで",
            "furigana": "まるで",
            "meaning_vi": "Nó giống như",
            "meaning_en": "It is like",
            "examples": [
              {
                "example_text": "まだ５月なのに、まるで真夏のように暑い",
                "furigana": "まだ５月（げつ）まなつあつい",
                "meaning_vi": "Mới tháng 5 thôi mà nóng như mùa hè í.",
                "meaning_en": "It's still May, but it's as hot as midsummer"
              }
            ],
            "lesson_number": 65
          },
          {
            "vocab": "一体",
            "furigana": "いったい",
            "meaning_vi": "Tích hợp",
            "meaning_en": "Integrated",
            "examples": [
              {
                "example_text": "あの人はいったい何をしているのだろう",
                "furigana": "あの人（ひと）なにをしているのだろう",
                "meaning_vi": "Cái người kia đang là cái quái gì vậy.",
                "meaning_en": "What exactly is that person doing?"
              }
            ],
            "lesson_number": 65
          },
          {
            "vocab": "別に",
            "furigana": "べつに",
            "meaning_vi": "Cá nhân",
            "meaning_en": "Individual",
            "examples": [
              {
                "example_text": "別に用はなかったが、声が聞きたくなって母に電話した",
                "furigana": "別（べつ）ようこえきははでんわした",
                "meaning_vi": "Chẳng có việc gì cụ thể nhưng mà tôi muốn nghe giọng nói của mẹ và đã gọi điện thoại cho bà ấy.",
                "meaning_en": "I didn't need it, but I wanted to hear my voice so I called my mother."
              }
            ],
            "lesson_number": 65
          },
          {
            "vocab": "たった",
            "furigana": "たった",
            "meaning_vi": "chỉ một",
            "meaning_en": "just one",
            "examples": [
              {
                "example_text": "５，０００人の会場に、たった　　１００人しかお客さんが来なかった",
                "furigana": "５，０００人（にん）かいじょうのにんきゃくこなかった",
                "meaning_vi": "Hội trường 5000 người mà chỉ có 100 khách đến.",
                "meaning_en": "Only 100 visitors came to the venue with 5,000 people."
              }
            ],
            "lesson_number": 65
          },
          {
            "vocab": "ほんの",
            "furigana": "ほんの",
            "meaning_vi": "chỉ một",
            "meaning_en": "just one",
            "examples": [
              {
                "example_text": "ここから隣町まで、バスでほんの５分しかかからない",
                "furigana": "ここから隣町（となりまち）ぷんしかかからない",
                "meaning_vi": "Từ đây đi đến thành phố bên cạnh bằng xe bus thì chỉ mất 5 phút.",
                "meaning_en": "It takes only 5 minutes by bus from here to the next town."
              }
            ],
            "lesson_number": 65
          },
          {
            "vocab": "それで",
            "furigana": "それで",
            "meaning_vi": "Vì thế",
            "meaning_en": "Therefore",
            "examples": [
              {
                "example_text": "けさ駅で事故があった。それで、２～３時間電車が遅れた",
                "furigana": "けさ駅（えき）じこじかんでんしゃおくれた",
                "meaning_vi": "Sáng nay có sự cố ở nhà ga nên là tàu đã chậm 2-3 giờ đồng hồ.",
                "meaning_en": "There was an accident at the station this morning. So the train was delayed for 2-3 hours."
              }
            ],
            "lesson_number": 65
          },
          {
            "vocab": "そこで",
            "furigana": "そこで",
            "meaning_vi": "Vì thế",
            "meaning_en": "Therefore",
            "examples": [
              {
                "example_text": "新しいパソコンが必要になった。そこで、銀行から貯金を少しおろすことにした",
                "furigana": "新（あたら）ひつようぎんこうちょきんすこしおろすことにした",
                "meaning_vi": "Cần phải có máy tính mới, nên là tôi quyết định rút một ít tiền tiết kiệm từ ngân hàng.",
                "meaning_en": "I needed a new computer. So I decided to take a little savings from the bank."
              }
            ],
            "lesson_number": 65
          },
          {
            "vocab": "そのうえ",
            "furigana": "そのうえ",
            "meaning_vi": "Đó là nó",
            "meaning_en": "That is it",
            "examples": [
              {
                "example_text": "彼女は優秀な研究者だ。そのうえ、性格もいいので、みんなから尊敬されている",
                "furigana": "彼女（かのじょ）ゆうしゅうけんきゅうしゃせいかくそんけいされている",
                "meaning_vi": "Cô ấy là một nhà nghiên cứu ưu tú, hơn thế nữa tính cách lại rất tốt nên nhận được sự tôn kính từ mọi người.",
                "meaning_en": "She is a brilliant researcher. Plus, he has a good personality and is respected by everyone."
              }
            ],
            "lesson_number": 65
          },
          {
            "vocab": "また",
            "furigana": "また",
            "meaning_vi": "Cũng",
            "meaning_en": "Also",
            "examples": [
              {
                "example_text": "彼は金行員で、まだ、有名な作家でもある",
                "furigana": "彼（かれ）きんこういんゆうめいさっかでもある",
                "meaning_vi": "Anh ấy là một nhân viên ngân hàng và cũng là một tác giả nổi tiếng.",
                "meaning_en": "He is a cashier and is still a famous writer."
              }
            ],
            "lesson_number": 66
          },
          {
            "vocab": "または",
            "furigana": "または",
            "meaning_vi": "hoặc",
            "meaning_en": "or",
            "examples": [
              {
                "example_text": "「この書類は、黒または青のペンで書くこと」",
                "furigana": "「この書類（しょるい）くろあおかくこと」",
                "meaning_vi": "\"Tài liệu này thì viết bằng bút mực đen hoặc mực xanh.\"",
                "meaning_en": "\"This document should be written with a black or blue pen.\""
              }
            ],
            "lesson_number": 66
          },
          {
            "vocab": "それとも",
            "furigana": "それとも",
            "meaning_vi": "Hoặc",
            "meaning_en": "Or",
            "examples": [
              {
                "example_text": "「コーヒーにしますか、それとも紅茶にしますか？」",
                "furigana": "「コーヒーにしますか、それとも紅茶（こうちゃ）にしますか？」",
                "meaning_vi": "\"Ngài uống cà phê hay là uống hồng trà?\".",
                "meaning_en": "\"Do you want coffee or tea?\""
              }
            ],
            "lesson_number": 66
          },
          {
            "vocab": "つまり",
            "furigana": "つまり",
            "meaning_vi": "Nói cách khác",
            "meaning_en": "In other words",
            "examples": [
              {
                "example_text": "彼は、父の姉の息子、つまり私のいとこにあたる",
                "furigana": "彼（かれ）ちちあねむすこわたしのいとこにあたる",
                "meaning_vi": "Anh ta là con trai của chị gái của bố tôi, nói cách khác là anh em họ của tôi.",
                "meaning_en": "He is my father's sister's son, or my cousin."
              }
            ],
            "lesson_number": 66
          }
        
       ]
