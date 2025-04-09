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
        export const vocabMimikaraSeedN2Data: VocabSeedData[] = 
        [

            {
                "vocab": "人生",
                "furigana": "じんせい",
                "meaning_vi": "cuộc sống",
                "meaning_en": "life",
                "examples": [
                  {
                    "example_text": "幸せな人生を送る。",
                    "furigana": "幸（しあわ）じんせいおくる。",
                    "meaning_vi": "Sống cuộc sống hạnh phúc.",
                    "meaning_en": "Living a happy life."
                  }
                ],
                "lesson_number": 1
              },
              {
                "vocab": "人間",
                "furigana": "にんげん",
                "meaning_vi": "con người",
                "meaning_en": "human",
                "examples": [
                  {
                    "example_text": "人間はみんな、平等である。",
                    "furigana": "人間（にんげん）びょうどうである。",
                    "meaning_vi": "Là con người, mọi người đều bình đẳng.",
                    "meaning_en": "All humans are equal."
                  }
                ],
                "lesson_number": 1
              },
              {
                "vocab": "人",
                "furigana": "ひと",
                "meaning_vi": "người",
                "meaning_en": "People",
                "examples": [
                  {
                    "example_text": "「佐藤さんという人から電話がありましたよ」",
                    "furigana": "「佐藤（さとう）ひとでんわがありましたよ」",
                    "meaning_vi": "Có cuộc điện thoại từ  chị Satou đấy ạ.",
                    "meaning_en": "\"I got a call from someone called Sato-san.\""
                  }
                ],
                "lesson_number": 1
              },
              {
                "vocab": "祖先",
                "furigana": "そせん",
                "meaning_vi": "tổ tiên",
                "meaning_en": "ancestor",
                "examples": [
                  {
                    "example_text": "人類の祖先は、アフリカで発生したと考えられている。",
                    "furigana": "人類（じんるい）そせんはっせいかんがえられている。",
                    "meaning_vi": "Tổ tiên của loài người phát triển từ Châu Phi.",
                    "meaning_en": "Human ancestors are believed to have originated in Africa."
                  }
                ],
                "lesson_number": 1
              },
              {
                "vocab": "親戚",
                "furigana": "しんせき",
                "meaning_vi": "họ hàng",
                "meaning_en": "relative",
                "examples": [
                  {
                    "example_text": "うちの親戚はみな近くで住んでいる。",
                    "furigana": "うちの親戚（しんせき）ちかすんでいる。",
                    "meaning_vi": "Họ hàng nhà tôi đều sống gần đây.",
                    "meaning_en": "All of my relatives live nearby."
                  }
                ],
                "lesson_number": 1
              },
              {
                "vocab": "夫婦",
                "furigana": "ふうふ",
                "meaning_vi": "vợ chồng",
                "meaning_en": "couple",
                "examples": [
                  {
                    "example_text": "小林さんは夫婦はいつも仲がいい。",
                    "furigana": "小林（こばやし）ふうふなかがいい。",
                    "meaning_vi": "Mối quan hệ của vợ chồng anh Kobayashi lúc nào cũng tốt.",
                    "meaning_en": "Kobayashi's couple is always on good terms."
                  }
                ],
                "lesson_number": 1
              },
              {
                "vocab": "長男",
                "furigana": "ちょうなん",
                "meaning_vi": "trưởng nam",
                "meaning_en": "male leader",
                "examples": [
                  {
                    "example_text": "日本では、長男は大事にされる傾向があった。",
                    "furigana": "日本（にほん）ちょうなんだいじけいこうがあった。",
                    "meaning_vi": "Ở Nhật Bản, trưởng nam có khuynh hướng được coi trọng.",
                    "meaning_en": "In Japan, the eldest son tended to be valued."
                  }
                ],
                "lesson_number": 1
              },
              {
                "vocab": "主人",
                "furigana": "しゅじん",
                "meaning_vi": "chồng, chủ tiệm",
                "meaning_en": "husband, shop owner",
                "examples": [
                  {
                    "example_text": "あのそばやの主人はまだ若いが、腕はいい。",
                    "furigana": "あのそばやの主人（しゅじん）わかうではいい。",
                    "meaning_vi": "Chủ cửa hàng mì Soba kia tuy còn trẻ nhưng tay nghề rất tốt.",
                    "meaning_en": "The owner of that sobaya is still young, but he has good skills."
                  }
                ],
                "lesson_number": 1
              },
              {
                "vocab": "双子",
                "furigana": "ふたご",
                "meaning_vi": "sinh đôi",
                "meaning_en": "twin",
                "examples": [
                  {
                    "example_text": "私には双子の弟がいます。",
                    "furigana": "私（わたし）ふたごおとうとがいます。",
                    "meaning_vi": "Tôi có người em sinh đôi.",
                    "meaning_en": "I have twin brothers."
                  }
                ],
                "lesson_number": 1
              },
              {
                "vocab": "迷子",
                "furigana": "まいご",
                "meaning_vi": "trẻ bị lạc",
                "meaning_en": "children are lost",
                "examples": [
                  {
                    "example_text": "（アナウンス）「迷子のお知らせをいたします」",
                    "furigana": "（アナウンス）「迷子（まいご）しらせをいたします」",
                    "meaning_vi": "Thông báo tìm trẻ lạc.",
                    "meaning_en": "(Announcement) \"We will inform you of a lost person.\""
                  }
                ],
                "lesson_number": 1
              },
              {
                "vocab": "他人",
                "furigana": "たにん",
                "meaning_vi": "người khác",
                "meaning_en": "else",
                "examples": [
                  {
                    "example_text": "友達だと思って声を掛けたら、全くの他人だった。",
                    "furigana": "友達（ともだち）おもこえかまったたにんだった。",
                    "meaning_vi": "Tưởng bạn nên cất tiếng gọi nhưng là người lạ hoàn toàn.",
                    "meaning_en": "I called out to her thinking she was friends, but she was totally stranger."
                  }
                ],
                "lesson_number": 1
              },
              {
                "vocab": "敵",
                "furigana": "てき",
                "meaning_vi": "kẻ thù",
                "meaning_en": "enemy",
                "examples": [
                  {
                    "example_text": "兄弟は敵と味方に分かれて戦った。",
                    "furigana": "兄弟（きょうだい）てきみかたわたたかった。",
                    "meaning_vi": "Anh em phân chia bên bạn bên thù đánh nhau.",
                    "meaning_en": "The brothers fought divided into enemies and allies."
                  }
                ],
                "lesson_number": 1
              },
              {
                "vocab": "味方",
                "furigana": "みかた",
                "meaning_vi": "bạn bè, đồng minh",
                "meaning_en": "Friends, allies",
                "examples": [
                  {
                    "example_text": "「何があっても、私はあなたの味方です」",
                    "furigana": "「何（なに）わたしみかたです」",
                    "meaning_vi": "Dù gặp chuyện gì đi chăng nữa, tôi vẫn là đồng minh của cậu.",
                    "meaning_en": "\"No matter what, I'm on your side.\""
                  }
                ],
                "lesson_number": 1
              },
              {
                "vocab": "筆者",
                "furigana": "ひっしゃ",
                "meaning_vi": "tác giả",
                "meaning_en": "author",
                "examples": [
                  {
                    "example_text": "筆者の最も言いたいことを下から選びなさい。",
                    "furigana": "筆者（ひっしゃ）もっといしたえらびなさい。",
                    "meaning_vi": "Tác giả muốn nói điều gì nhất, hãy chọn bên dưới.",
                    "meaning_en": "Choose what I want to say from the bottom."
                  }
                ],
                "lesson_number": 1
              },
              {
                "vocab": "寿命",
                "furigana": "じゅみょう",
                "meaning_vi": "tuổi thọ",
                "meaning_en": "longevity",
                "examples": [
                  {
                    "example_text": "医学の進歩によって、人間の寿命は100年前に比べるとずいぶん伸びた。",
                    "furigana": "医学（いがく）しんぽにんげんじゅみょうねんまえくらのびた。",
                    "meaning_vi": "Với sự tiến bộ của y học, tuổi thọ của con người so với 100 năm trước là cao hơn.",
                    "meaning_en": "With advances in medicine, human lifespan has increased significantly compared to 100 years ago."
                  }
                ],
                "lesson_number": 1
              },
              {
                "vocab": "将来",
                "furigana": "しょうらい",
                "meaning_vi": "tương lai",
                "meaning_en": "future",
                "examples": [
                  {
                    "example_text": "将来の希望は海外で働くことだ。",
                    "furigana": "将来（しょうらい）きぼうかいがいはたらくことだ。",
                    "meaning_vi": "Tôi có nguyện vọng là làm ở nước ngoài trong tương lai.",
                    "meaning_en": "My hope for the future is to work abroad."
                  }
                ],
                "lesson_number": 1
              },
              {
                "vocab": "才能",
                "furigana": "さいのう",
                "meaning_vi": "tài năng",
                "meaning_en": "talent",
                "examples": [
                  {
                    "example_text": "彼女には音楽の才能がある。",
                    "furigana": "彼女（かのじょ）おんがくさいのうがある。",
                    "meaning_vi": "Cô ấy có tài năng về âm nhạc.",
                    "meaning_en": "She has a musical talent."
                  }
                ],
                "lesson_number": 1
              },
              {
                "vocab": "能力",
                "furigana": "のうりょく",
                "meaning_vi": "năng lực",
                "meaning_en": "capacity",
                "examples": [
                  {
                    "example_text": "私にはこの問題を解決する能力はない。",
                    "furigana": "私（わたし）もんだいかいけつのうりょくはない。",
                    "meaning_vi": "Tôi không có năng lực để giải quyết vấn đề này.",
                    "meaning_en": "I don't have the ability to solve this problem."
                  }
                ],
                "lesson_number": 2
              },
              {
                "vocab": "長所",
                "furigana": "ちょうしょ",
                "meaning_vi": "sở trường",
                "meaning_en": "forte",
                "examples": [
                  {
                    "example_text": "「あなたの性格の長所と短所を言ってください。」",
                    "furigana": "「あなたの性格（せいかく）ちょうしょたんしょいってください。」",
                    "meaning_vi": "Hãy nói về sở trường và sở đoản trong tính cách của bạn.",
                    "meaning_en": "\"Tell me the pros and cons of your personality.\""
                  }
                ],
                "lesson_number": 2
              },
              {
                "vocab": "個性",
                "furigana": "こせい",
                "meaning_vi": "cá tính",
                "meaning_en": "personality",
                "examples": [
                  {
                    "example_text": "子供たちの個性を伸ばすような教育したい。",
                    "furigana": "子供（こども）こせいのきょういくしたい。",
                    "meaning_vi": "Muốn giáo dục để phát triển cá tính của con trẻ.",
                    "meaning_en": "I want to educate my children in a way that will develop their individuality."
                  }
                ],
                "lesson_number": 2
              },
              {
                "vocab": "遺伝",
                "furigana": "いでん",
                "meaning_vi": "di truyền",
                "meaning_en": "hereditary",
                "examples": [
                  {
                    "example_text": "私の左利きは親からの遺伝だ。",
                    "furigana": "私（わたし）ひだりきおやいでんだ。",
                    "meaning_vi": "Tôi thuận tay trái là sự di truyền từ bố mẹ.",
                    "meaning_en": "My left-handedness is inherited from my parents."
                  }
                ],
                "lesson_number": 2
              },
              {
                "vocab": "動作",
                "furigana": "どうさ",
                "meaning_vi": "động tác",
                "meaning_en": "movement",
                "examples": [
                  {
                    "example_text": "彼女の動作は優雅で美しい。",
                    "furigana": "彼女（かのじょ）どうさゆうがうつくしい。",
                    "meaning_vi": "Động tác của cô ấy dịu dàng và đẹp đẽ.",
                    "meaning_en": "Her movements are elegant and beautiful."
                  }
                ],
                "lesson_number": 2
              },
              {
                "vocab": "真似",
                "furigana": "まね",
                "meaning_vi": "bắt chước, copy",
                "meaning_en": "imitate, copy",
                "examples": [
                  {
                    "example_text": "子供は何でも親の真似をしたがるものだ。",
                    "furigana": "子供（こども）なんおやまねをしたがるものだ。",
                    "meaning_vi": "Trẻ con thường bắt chước cha mẹ.",
                    "meaning_en": "Children want to imitate their parents about anything."
                  }
                ],
                "lesson_number": 2
              },
              {
                "vocab": "睡眠",
                "furigana": "すいみん",
                "meaning_vi": "ngủ, giấc ngủ",
                "meaning_en": "Sleep, sleep",
                "examples": [
                  {
                    "example_text": "アンケートの結果、睡眠時間は平均7時間という人が最も多かった。",
                    "furigana": "アンケートの結果（けっか）すいみんじかんへいきんじかんひともっとおおかった。",
                    "meaning_vi": "Theo kết quả điều tra, trung bình người ngủ 7 tiếng mỗi ngày nhiều nhất.",
                    "meaning_en": "The survey showed that the average number of people sleep 7 hours."
                  }
                ],
                "lesson_number": 2
              },
              {
                "vocab": "食欲",
                "furigana": "しょくよく",
                "meaning_vi": "thèm ăn",
                "meaning_en": "appetite",
                "examples": [
                  {
                    "example_text": "今、風邪を引いて食欲がない。",
                    "furigana": "今（いま）かぜひしょくよくがない。",
                    "meaning_vi": "Bây giờ bị cảm nên không muốn ăn.",
                    "meaning_en": "I've just caught a cold and have no appetite."
                  }
                ],
                "lesson_number": 2
              },
              {
                "vocab": "外食",
                "furigana": "がいしょく",
                "meaning_vi": "ăn ngoài",
                "meaning_en": "eat",
                "examples": [
                  {
                    "example_text": "ひとり暮らしになって、外食が増えた。",
                    "furigana": "ひとり暮（ぐ）がいしょくふえた。",
                    "meaning_vi": "Sống một mình nên thường ăn ngoài.",
                    "meaning_en": "I've been living alone and have been eating out more."
                  }
                ],
                "lesson_number": 2
              },
              {
                "vocab": "家事",
                "furigana": "かじ",
                "meaning_vi": "việc nhà",
                "meaning_en": "housework",
                "examples": [
                  {
                    "example_text": "最近は、家事や育児する男性が増えた。",
                    "furigana": "最近（さいきん）かじいくじだんせいふえた。",
                    "meaning_vi": "Gần đây, số lượng nam giới làm việc nhà và chăm con đang tăng lên.",
                    "meaning_en": "Recently, more and more men are doing housework and raising children."
                  }
                ],
                "lesson_number": 2
              },
              {
                "vocab": "出産",
                "furigana": "しゅっさん",
                "meaning_vi": "sinh đẻ",
                "meaning_en": "give birth",
                "examples": [
                  {
                    "example_text": "先日、姉が女の子を出産した。",
                    "furigana": "先日（せんじつ）あねおんなこしゅっさんした。",
                    "meaning_vi": "Ngày trước, chị gái tôi đã sinh đứa bé gái.",
                    "meaning_en": "The other day, my sister gave birth to a girl."
                  }
                ],
                "lesson_number": 2
              },
              {
                "vocab": "介護",
                "furigana": "かいご",
                "meaning_vi": "chăm sóc, trông nom",
                "meaning_en": "care, look after",
                "examples": [
                  {
                    "example_text": "お年寄りの介護をする。",
                    "furigana": "お年寄（としよ）かいごをする。",
                    "meaning_vi": "Chăm sóc người già.",
                    "meaning_en": "Caring for the elderly."
                  }
                ],
                "lesson_number": 2
              },
              {
                "vocab": "共働き",
                "furigana": "ともばたらき",
                "meaning_vi": "vợ chồng cùng làm việc",
                "meaning_en": "Husband and wife work together",
                "examples": [
                  {
                    "example_text": "「結婚20年、すっと共働きだ」",
                    "furigana": "「結婚（けっこん）ねんともばたらきだ」",
                    "meaning_vi": "Kết hôn được 20 năm, hai vợ chồng đi làm suốt.",
                    "meaning_en": "\"We've been married for 20 years and have been working together.\""
                  }
                ],
                "lesson_number": 2
              },
              {
                "vocab": "出勤",
                "furigana": "しゅっきん",
                "meaning_vi": "đi làm",
                "meaning_en": "go to work",
                "examples": [
                  {
                    "example_text": "毎朝8時に出勤している。",
                    "furigana": "毎朝（まいあさ）じしゅっきんしている。",
                    "meaning_vi": "Tôi đi làm vào 8 giờ mỗi ngày.",
                    "meaning_en": "I go to work every morning at 8am."
                  }
                ],
                "lesson_number": 2
              },
              {
                "vocab": "出世",
                "furigana": "しゅっせ",
                "meaning_vi": "sự thăng tiến",
                "meaning_en": "promotion",
                "examples": [
                  {
                    "example_text": "出世もしたいが、仕事ばかりの人生も嫌だ。",
                    "furigana": "出世（しゅっせ）しごとじんせいいやだ。",
                    "meaning_vi": "Dù thành đạt nhưng nếu cuộc sống toàn là công việc thì cũng chán.",
                    "meaning_en": "I want to get promoted, but I don't like life that is full of work."
                  }
                ],
                "lesson_number": 2
              },
              {
                "vocab": "地位",
                "furigana": "ちい",
                "meaning_vi": "địa vị, vị trí",
                "meaning_en": "status, location",
                "examples": [
                  {
                    "example_text": "地位が上がるとともにストレスも増える。",
                    "furigana": "地位（ちい）あふえる。",
                    "meaning_vi": "Khi địa vị tăng lên thì áp lực cũng nhiều lên.",
                    "meaning_en": "As your status improves, stress increases."
                  }
                ],
                "lesson_number": 2
              },
              {
                "vocab": "受験",
                "furigana": "じゅけん",
                "meaning_vi": "kì thi, tham gia kỳ thi",
                "meaning_en": "Exam, take the exam",
                "examples": [
                  {
                    "example_text": "東京の大学に受験した。",
                    "furigana": "東京（とうきょう）だいがくじゅけんした。",
                    "meaning_vi": "Tôi đã tham gia kì thi của trường đại học ở Tokyo.",
                    "meaning_en": "I took the entrance exam to a university in Tokyo."
                  }
                ],
                "lesson_number": 2
              },
              {
                "vocab": "専攻",
                "furigana": "せんこう",
                "meaning_vi": "chuyên ngành",
                "meaning_en": "specialized",
                "examples": [
                  {
                    "example_text": "私は大学で経済学を専攻した。",
                    "furigana": "私（わたし）だいがくけいざいがくせんこうした。",
                    "meaning_vi": "Tôi đã học khoa kinh tế ở trường đại học.",
                    "meaning_en": "I majored in economics at university."
                  }
                ],
                "lesson_number": 2
              },
              {
                "vocab": "支度",
                "furigana": "したく",
                "meaning_vi": "sự chuẩn bị; sự sửa soạn",
                "meaning_en": "preparation; preparation",
                "examples": [
                  {
                    "example_text": "「出かけるから支度しなさい」",
                    "furigana": "「出（で）したくしなさい」",
                    "meaning_vi": "Sắp đi ra ngoài nên hãy chuẩn bị các thứ thôi.",
                    "meaning_en": "\"I'm off so get ready.\""
                  }
                ],
                "lesson_number": 2
              },
              {
                "vocab": "全身",
                "furigana": "ぜんしん",
                "meaning_vi": "toàn bộ cơ thể",
                "meaning_en": "The whole body",
                "examples": [
                  {
                    "example_text": "玄関に、全身を映す大きな鏡が置いてある。",
                    "furigana": "玄関（げんかん）ぜんしんうつおおかがみおいてある。",
                    "meaning_vi": "Đặt một gương to chiếu được cả cơ thể ở cửa.",
                    "meaning_en": "There is a large mirror in the entrance that reflects your whole body."
                  }
                ],
                "lesson_number": 2
              },
              {
                "vocab": "皺",
                "furigana": "しわ",
                "meaning_vi": "nếp nhăn",
                "meaning_en": "wrinkle",
                "examples": [
                  {
                    "example_text": "洗濯物のしわをアイロンで伸ばす。",
                    "furigana": "洗濯物（せんたくもの）のばす。",
                    "meaning_vi": "Dùng bàn là để ủi thẳng nếp nhăn trên áo quần.",
                    "meaning_en": "Iron out any wrinkles in the laundry."
                  }
                ],
                "lesson_number": 2
              },
              {
                "vocab": "服装",
                "furigana": "ふくそう",
                "meaning_vi": "quần áo, trang phục",
                "meaning_en": "Clothes, costumes",
                "examples": [
                  {
                    "example_text": "「面接にはきちんとした服装で行きなさい」",
                    "furigana": "「面接（めんせつ）ふくそういきなさい」",
                    "meaning_vi": "Hãy mặc áo quần chỉnh tề để đi phỏng vấn nhé.",
                    "meaning_en": "\"Clothes properly for the interview.\""
                  }
                ],
                "lesson_number": 3
              },
              {
                "vocab": "礼",
                "furigana": "れい",
                "meaning_vi": "lễ, cảm ơn",
                "meaning_en": "Ceremony, thanks",
                "examples": [
                  {
                    "example_text": "親切にしてもらった礼を述べた。",
                    "furigana": "親切（しんせつ）れいのべた。",
                    "meaning_vi": "Phát biểu lời cảm ơn vì đã được đối xử tốt.",
                    "meaning_en": "I thanked him for being kind."
                  }
                ],
                "lesson_number": 3
              },
              {
                "vocab": "(お)世辞",
                "furigana": "(お)せじ",
                "meaning_vi": "nịnh, ca tụng",
                "meaning_en": "flattering, praise",
                "examples": [
                  {
                    "example_text": "「いいネクタイですね」とお世辞を言った。",
                    "furigana": "「いいネクタイですね」とお世辞（せじ）いった。",
                    "meaning_vi": "Nói nịnh sếp \"Cà vạt đẹp thật đấy\".",
                    "meaning_en": "\"That's a great tie,\" he flattered."
                  }
                ],
                "lesson_number": 3
              },
              {
                "vocab": "言い訳",
                "furigana": "いいわけ",
                "meaning_vi": "lý do",
                "meaning_en": "reason",
                "examples": [
                  {
                    "example_text": "田中さんはいつも言い訳ばかり言って、自分の失敗を認めようとしない。",
                    "furigana": "田中（たなか）いわけいじぶんしっぱいみとめようとしない。",
                    "meaning_vi": "Anh Tanaka lúc nào cũng biện lí do mà không chịu thừa nhận thất bại của mình.",
                    "meaning_en": "Tanaka always makes excuses and refuses to admit his mistakes."
                  }
                ],
                "lesson_number": 3
              },
              {
                "vocab": "話題",
                "furigana": "わだい",
                "meaning_vi": "chủ đề (để nói chuyện)",
                "meaning_en": "Topic (to talk)",
                "examples": [
                  {
                    "example_text": "野中さんはとても話題が豊富な人で、話していて楽しい。",
                    "furigana": "野中（のなか）わだいほうふひとはなたのしい。",
                    "meaning_vi": "Anh Nonaka là người phong phú về chủ đề vì thế khi nói chuyện rất thú vị.",
                    "meaning_en": "Nonaka is a very talkative person and it's fun to talk about."
                  }
                ],
                "lesson_number": 3
              },
              {
                "vocab": "秘密",
                "furigana": "ひみつ",
                "meaning_vi": "bí mật",
                "meaning_en": "secret",
                "examples": [
                  {
                    "example_text": "「あなたを信用して私の秘密を打ち明けます」",
                    "furigana": "「あなたを信用（しんよう）わたしひみつうあけます」",
                    "meaning_vi": "Vì tin tưởng bạn nên tôi sẽ nói bí mật với bạn.",
                    "meaning_en": "\"I'll trust you and share my secrets.\""
                  }
                ],
                "lesson_number": 3
              },
              {
                "vocab": "尊敬",
                "furigana": "そんけい",
                "meaning_vi": "tôn trọng",
                "meaning_en": "respect",
                "examples": [
                  {
                    "example_text": "マザー・テレサは世界中の人々に尊敬されている。",
                    "furigana": "マザー・テレサは世界（せかい）じゅうひとびとそんけいされている。",
                    "meaning_vi": "Mẹ Teresa được tôn kính khắp thế giới.",
                    "meaning_en": "Mother Teresa is respected by people all over the world."
                  }
                ],
                "lesson_number": 3
              },
              {
                "vocab": "謙遜",
                "furigana": "けんそん",
                "meaning_vi": "khiêm tốn",
                "meaning_en": "modest",
                "examples": [
                  {
                    "example_text": "褒められたとき、謙遜して「そんなことはありません」という人も多い。",
                    "furigana": "褒（ほ）けんそんひとおおい。",
                    "meaning_vi": "Khi được khen thì nhiều người nói khiêm tốn \"không có chuyện đó đâu\".",
                    "meaning_en": "When praised, many people humble themselves and say, \"That's not the case.\""
                  }
                ],
                "lesson_number": 3
              },
              {
                "vocab": "期待",
                "furigana": "きたい",
                "meaning_vi": "mong chờ, kì vọng",
                "meaning_en": "Expect, expectation",
                "examples": [
                  {
                    "example_text": "山本選手の活躍を期待していたが、　期待はずれの結果に終わった。",
                    "furigana": "山本（やまもと）せんしゅかつやくきたいきたいけっかおわった。",
                    "meaning_vi": "Dù đã kì vọng vào tuyển thủ Yamamoto nhưng kết quả kết thúc ngoài sự mong chờ.",
                    "meaning_en": "We were hoping for Yamamoto to perform well, but the results ended in disappointing results."
                  }
                ],
                "lesson_number": 3
              },
              {
                "vocab": "苦労",
                "furigana": "くろう",
                "meaning_vi": "khó khăn, gian khổ",
                "meaning_en": "Difficulties, hardships",
                "examples": [
                  {
                    "example_text": "父の死後、母は苦労して私たちを育ててくれた。",
                    "furigana": "父（ちち）しごははくろうわたしそだててくれた。",
                    "meaning_vi": "Sau cái chết của bố, mẹ tôi đã làm việc vất vả để nuôi nấng chúng tôi.",
                    "meaning_en": "After my father's death, my mother worked hard to raise us."
                  }
                ],
                "lesson_number": 3
              },
              {
                "vocab": "意志",
                "furigana": "いし",
                "meaning_vi": "ý chí",
                "meaning_en": "will",
                "examples": [
                  {
                    "example_text": "彼女は意思が｛固い/強い｝から、きっと目的を達成するだろう。",
                    "furigana": "彼女（かのじょ）いしかたつよもくてきたっせいするだろう。",
                    "meaning_vi": "Ý chí của cô ấy rất mạnh mẽ thế nào cũng đạt được mục tiêu.",
                    "meaning_en": "She is sure to achieve her goal because she is {hard/strong} will."
                  }
                ],
                "lesson_number": 3
              },
              {
                "vocab": "感情",
                "furigana": "かんじょう",
                "meaning_vi": "cảm xúc, cảm giác, tình cảm",
                "meaning_en": "Emotions, sensations, emotions",
                "examples": [
                  {
                    "example_text": "田中さんはすぐに感情が顔に出る。",
                    "furigana": "田中（たなか）かんじょうかおでる。",
                    "meaning_vi": "Anh Tanaka ngay lập tức biểu thị cảm xúc lên khuôn mặt.",
                    "meaning_en": "Tanaka immediately felt emotions on his face."
                  }
                ],
                "lesson_number": 3
              },
              {
                "vocab": "材料",
                "furigana": "ざいりょう",
                "meaning_vi": "nguyên liệu",
                "meaning_en": "ingredient",
                "examples": [
                  {
                    "example_text": "スーパーへ夕食の材料を買いに行った。",
                    "furigana": "スーパーへ夕食（ゆうしょく）ざいりょうかいった。",
                    "meaning_vi": "Đến siêu thị mua nguyên liệu cho bữa tối.",
                    "meaning_en": "I went to the supermarket to buy some ingredients for dinner."
                  }
                ],
                "lesson_number": 4
              },
              {
                "vocab": "石",
                "furigana": "いし",
                "meaning_vi": "hòn đá",
                "meaning_en": "stone",
                "examples": [
                  {
                    "example_text": "グラウンドに落ちている石を拾った。",
                    "furigana": "グラウンドに落（お）いしひろった。",
                    "meaning_vi": "Nhặt những hòn đá rơi trên sân bóng.",
                    "meaning_en": "I picked up a stone that was falling on the ground."
                  }
                ],
                "lesson_number": 4
              },
              {
                "vocab": "紐",
                "furigana": "ひも",
                "meaning_vi": "dây",
                "meaning_en": "wire",
                "examples": [
                  {
                    "example_text": "古新聞をひもで縛る。",
                    "furigana": "古新聞（ふるしんぶん）しばる。",
                    "meaning_vi": "Buộc báo củ bằng dây.",
                    "meaning_en": "Tie old newspapers with strings."
                  }
                ],
                "lesson_number": 4
              },
              {
                "vocab": "券",
                "furigana": "けん",
                "meaning_vi": "vé",
                "meaning_en": "ticket",
                "examples": [
                  {
                    "example_text": "あの店はいつも込んでいて、入るのに整理券が必要だ。",
                    "furigana": "あの店（みせ）こはいせいりけんひつようだ。",
                    "meaning_vi": "Cửa hàng đó lúc nào cũng đông đúc nên vào cần phải có vé thứ tự.",
                    "meaning_en": "That store is always there and you need a ticket to get in."
                  }
                ],
                "lesson_number": 4
              },
              {
                "vocab": "名簿",
                "furigana": "めいぼ",
                "meaning_vi": "danh bạ, danh sách",
                "meaning_en": "Directory, list",
                "examples": [
                  {
                    "example_text": "クラスの名簿を作る。",
                    "furigana": "クラスの名簿（めいぼ）つくる。",
                    "meaning_vi": "Tạo danh sách lớp.",
                    "meaning_en": "Create a class list."
                  }
                ],
                "lesson_number": 4
              },
              {
                "vocab": "表",
                "furigana": "おもて",
                "meaning_vi": "bảng biểu",
                "meaning_en": "table",
                "examples": [
                  {
                    "example_text": "成績を表にする。",
                    "furigana": "成績（せいせき）ひょうにする。",
                    "meaning_vi": "Đưa thành tích lên bảng.",
                    "meaning_en": "Make a chart of your results."
                  }
                ],
                "lesson_number": 4
              },
              {
                "vocab": "針",
                "furigana": "はり",
                "meaning_vi": "kim",
                "meaning_en": "kim",
                "examples": [
                  {
                    "example_text": "針に糸を通す。",
                    "furigana": "針（はり）いととおす。",
                    "meaning_vi": "Xâu chỉ vào kim.",
                    "meaning_en": "Thread through the needle."
                  }
                ],
                "lesson_number": 4
              },
              {
                "vocab": "栓",
                "furigana": "せん",
                "meaning_vi": "nút, nắp",
                "meaning_en": "button, lid",
                "examples": [
                  {
                    "example_text": "ビールの栓を抜く。",
                    "furigana": "ビールの栓（せん）ぬく。",
                    "meaning_vi": "Mở nắp bia.",
                    "meaning_en": "Unplug the beer."
                  }
                ],
                "lesson_number": 4
              },
              {
                "vocab": "湯気",
                "furigana": "ゆげ",
                "meaning_vi": "hơi nước",
                "meaning_en": "steam",
                "examples": [
                  {
                    "example_text": "うどんの湯気で眼鏡が曇ってしまった。",
                    "furigana": "うどんの湯気（ゆげ）めがねくもってしまった。",
                    "meaning_vi": "Hơi từ bát mì Udon bám vào làm mờ mắt kính.",
                    "meaning_en": "My glasses were cloudy with the steam from the udon noodles."
                  }
                ],
                "lesson_number": 4
              },
              {
                "vocab": "日当たり",
                "furigana": "ひあたり",
                "meaning_vi": "nơi có ánh sáng chiếu vào",
                "meaning_en": "where there is light shining",
                "examples": [
                  {
                    "example_text": "私の部屋は南向きで日当たりがいい。",
                    "furigana": "私（わたし）へやみなみむひあたりがいい。",
                    "meaning_vi": "Phòng tôi hướng nam nên ánh sáng mặt trời chiếu rất tốt.",
                    "meaning_en": "My room is facing south and is sunny."
                  }
                ],
                "lesson_number": 4
              },
              {
                "vocab": "空",
                "furigana": "そら",
                "meaning_vi": "trống rỗng",
                "meaning_en": "empty",
                "examples": [
                  {
                    "example_text": "昨夜は一人でワイン一瓶をからにした。",
                    "furigana": "昨夜（さくや）ひとりひとびんをからにした。",
                    "meaning_vi": "Đêm qua một mình uống cạn chai vang.",
                    "meaning_en": "Last night I had a bottle of wine by myself."
                  }
                ],
                "lesson_number": 4
              },
              {
                "vocab": "斜め",
                "furigana": "ななめ",
                "meaning_vi": "nghiêng",
                "meaning_en": "lean",
                "examples": [
                  {
                    "example_text": "地震で家が斜めに傾いた。",
                    "furigana": "地震（じしん）いえななかたむいた。",
                    "meaning_vi": "Do động đất nên nhà bị nghiêng.",
                    "meaning_en": "The earthquake leaned the house at an angle."
                  }
                ],
                "lesson_number": 4
              },
              {
                "vocab": "履歴",
                "furigana": "りれき",
                "meaning_vi": "lý lịch",
                "meaning_en": "background",
                "examples": [
                  {
                    "example_text": "会社に応募するにあたり、履歴書を書いた。",
                    "furigana": "会社（かいしゃ）おうぼりれきしょかいた。",
                    "meaning_vi": "Để ứng cử vào công ty nên tôi đã viết sơ yếu lí lịch.",
                    "meaning_en": "When applying to the company, I wrote my resume."
                  }
                ],
                "lesson_number": 4
              },
              {
                "vocab": "娯楽",
                "furigana": "ごらく",
                "meaning_vi": "vui chơi, thú vui",
                "meaning_en": "fun, fun",
                "examples": [
                  {
                    "example_text": "うちの父は、釣りを娯楽として楽しんでいる。",
                    "furigana": "うちの父（ちち）つごらくたのしんでいる。",
                    "meaning_vi": "Bố tôi lấy việc câu cá làm thú tiêu khiển.",
                    "meaning_en": "My father enjoys fishing as a entertainment."
                  }
                ],
                "lesson_number": 4
              },
              {
                "vocab": "司会",
                "furigana": "しかい",
                "meaning_vi": "chủ tịch, chủ hội",
                "meaning_en": "President, owner",
                "examples": [
                  {
                    "example_text": "友人に結婚式の司会を頼んだ。",
                    "furigana": "友人（ゆうじん）けっこんしきしかいたのんだ。",
                    "meaning_vi": "Tôi nhờ bạn làm chủ hội trong lễ cưới.",
                    "meaning_en": "I asked a friend to host the wedding."
                  }
                ],
                "lesson_number": 4
              },
              {
                "vocab": "歓迎",
                "furigana": "かんげい",
                "meaning_vi": "hoan nghênh",
                "meaning_en": "welcome",
                "examples": [
                  {
                    "example_text": "新入社員を歓迎する会が開かれた。",
                    "furigana": "新入（しんにゅう）しゃいんかんげいかいひらかれた。",
                    "meaning_vi": "Tổ chức buổi tiệc đón những nhân viên mới.",
                    "meaning_en": "A party was held to welcome new employees."
                  }
                ],
                "lesson_number": 4
              },
              {
                "vocab": "窓口",
                "furigana": "まどぐち",
                "meaning_vi": "cửa bán vé",
                "meaning_en": "ticket door",
                "examples": [
                  {
                    "example_text": "｛銀行/役所/病院…｝の窓口には大勢の人が並んでいる。",
                    "furigana": "｛銀行（ぎんこう）やくしょびょういんまどぐちおおぜいひとならんでいる。",
                    "meaning_vi": "Ở cửa bán vé {ngân hàng/công sở/bệnh viện… } rất đông người đang xếp hàng.",
                    "meaning_en": "There are a large number of people lined up at the counter at the bank/garden/hospital..."
                  }
                ],
                "lesson_number": 4
              },
              {
                "vocab": "手続き",
                "furigana": "てつづき",
                "meaning_vi": "thủ tục",
                "meaning_en": "procedure",
                "examples": [
                  {
                    "example_text": "入学の手作りをする。",
                    "furigana": "入学（にゅうがく）てづくりをする。",
                    "meaning_vi": "Làm thủ tục nhập học.",
                    "meaning_en": "Handmade for admission."
                  }
                ],
                "lesson_number": 4
              },
              {
                "vocab": "徒歩",
                "furigana": "とほ",
                "meaning_vi": "đi bộ",
                "meaning_en": "walk",
                "examples": [
                  {
                    "example_text": "会社に徒歩で通っている。",
                    "furigana": "会社（かいしゃ）とほかよっている。",
                    "meaning_vi": "Tôi đi bộ đến công ty.",
                    "meaning_en": "I walk to work."
                  }
                ],
                "lesson_number": 4
              },
              {
                "vocab": "駐車",
                "furigana": "ちゅうしゃ",
                "meaning_vi": "đỗ xe",
                "meaning_en": "park",
                "examples": [
                  {
                    "example_text": "日曜日の都心は駐車することがない。",
                    "furigana": "日曜日（にちようび）としんちゅうしゃすることがない。",
                    "meaning_vi": "Vào ngày chủ nhật của thành phố không thể đậu xe.",
                    "meaning_en": "There is no parking in the city center on Sundays."
                  }
                ],
                "lesson_number": 5
              },
              {
                "vocab": "違反",
                "furigana": "いはん",
                "meaning_vi": "vi phạm",
                "meaning_en": "violate",
                "examples": [
                  {
                    "example_text": "｛規則/法律…｝に違反する。",
                    "furigana": "｛規則（きそく）ほうりついはんする。",
                    "meaning_vi": "",
                    "meaning_en": "Violates {rules/law...}."
                  }
                ],
                "lesson_number": 5
              },
              {
                "vocab": "平日",
                "furigana": "へいじつ",
                "meaning_vi": "ngày thường",
                "meaning_en": "daily",
                "examples": [
                  {
                    "example_text": "あの店は、平日は9時まで営業している。",
                    "furigana": "あの店（みせ）へいじつじえいぎょうしている。",
                    "meaning_vi": "Cửa hàng đó ngày thường kinh doanh đến 9 giờ.",
                    "meaning_en": "The store is open until 9am on weekdays."
                  }
                ],
                "lesson_number": 5
              },
              {
                "vocab": "日付",
                "furigana": "ひづけ",
                "meaning_vi": "ngày tháng",
                "meaning_en": "date",
                "examples": [
                  {
                    "example_text": "日付を書く。",
                    "furigana": "日付（ひづけ）かく。",
                    "meaning_vi": "Viết ngày tháng.",
                    "meaning_en": "Write the date."
                  }
                ],
                "lesson_number": 5
              },
              {
                "vocab": "日中",
                "furigana": "にっちゅう",
                "meaning_vi": "ban ngày",
                "meaning_en": "day",
                "examples": [
                  {
                    "example_text": "昨晩は冷え込むが、日中は穏やかな天気が続いている。",
                    "furigana": "昨晩（さくばん）ひこにっちゅうおだてんきつづいている。",
                    "meaning_vi": "Buổi tối thì trời se lạnh lại nhưng ban ngày thì thời tiết nắng ấm kéo dài.",
                    "meaning_en": "It was cold last night, but the weather continued to be mild during the day."
                  }
                ],
                "lesson_number": 5
              },
              {
                "vocab": "日程",
                "furigana": "にってい",
                "meaning_vi": "lịch trình, kế hoạch",
                "meaning_en": "schedules, plans",
                "examples": [
                  {
                    "example_text": "急な用事で、旅行の日程を変えた。",
                    "furigana": "急（きゅう）ようじりょこうにっていかえた。",
                    "meaning_vi": "Vì có công việc khẩn nên đã thay đổi lịch trình du lịch.",
                    "meaning_en": "Due to a sudden matter, I changed my trip schedule."
                  }
                ],
                "lesson_number": 5
              },
              {
                "vocab": "日帰り",
                "furigana": "ひがえり",
                "meaning_vi": "đi về trong ngày",
                "meaning_en": "Go home during the day",
                "examples": [
                  {
                    "example_text": "日光は東京から日帰りで行けます。",
                    "furigana": "日光（にっこう）とうきょうひがえいけます。",
                    "meaning_vi": "Từ Tokyo đến Nikkou có thể đi trong ngày.",
                    "meaning_en": "You can go to Nikko as a day trip from Tokyo."
                  }
                ],
                "lesson_number": 5
              },
              {
                "vocab": "順序",
                "furigana": "じゅんじょ",
                "meaning_vi": "thứ tự",
                "meaning_en": "order",
                "examples": [
                  {
                    "example_text": "子供たちが教室に順序よく並んで入っていく。",
                    "furigana": "子供（こども）きょうしつじゅんじょならはいっていく。",
                    "meaning_vi": "Bon trẻ xếp hàng ngay ngắn lần lượt theo thứ tự vào lớp.",
                    "meaning_en": "The children line up in the classroom in order."
                  }
                ],
                "lesson_number": 5
              },
              {
                "vocab": "時期",
                "furigana": "じき",
                "meaning_vi": "thời kì",
                "meaning_en": "period",
                "examples": [
                  {
                    "example_text": "3月から4月は、うちの会社にとって忙しい時期だ。",
                    "furigana": "3月（がつ）がつかいしゃいそがじきだ。",
                    "meaning_vi": "Từ tháng 3 đến tháng 4 được xem là thời kì bận rộn của công ty tôi.",
                    "meaning_en": "March to April is a busy time for our company."
                  }
                ],
                "lesson_number": 5
              },
              {
                "vocab": "現在",
                "furigana": "げんざい",
                "meaning_vi": "hiện tại",
                "meaning_en": "Present",
                "examples": [
                  {
                    "example_text": "駅前は昔は畑だったが、現在は大きなショッピングセンターになっている。",
                    "furigana": "駅前（えきまえ）むかしはたけげんざいおおきなショッピングセンターになっている。",
                    "meaning_vi": "Ngày xưa trước nhà ga là một cánh đồng nhưng giờ nó đã trở thành một trung tâm mua sắm lớn.",
                    "meaning_en": "In the past, there were fields in front of the station, but now it is a large shopping centre."
                  }
                ],
                "lesson_number": 5
              },
              {
                "vocab": "臨時",
                "furigana": "りんじ",
                "meaning_vi": "tạm thời",
                "meaning_en": "temporary",
                "examples": [
                  {
                    "example_text": "急病人が出たため、列車は臨時にこの駅に停車した。",
                    "furigana": "急病（きゅうびょう）にんでれっしゃりんじえきていしゃした。",
                    "meaning_vi": "Để đưa người ốm ra nên tàu hỏa đã tạm dừng tại nhà ga này.",
                    "meaning_en": "As a sudden illness emerged, the train stopped at this station temporarily."
                  }
                ],
                "lesson_number": 5
              },
              {
                "vocab": "費用",
                "furigana": "ひよう",
                "meaning_vi": "chi phí tiêu dùng",
                "meaning_en": "Consumption costs",
                "examples": [
                  {
                    "example_text": "旅行の費用をためる。",
                    "furigana": "旅行（りょこう）ひようをためる。",
                    "meaning_vi": "Dành tiền cho chi phí du lịch.",
                    "meaning_en": "Save money for your trip."
                  }
                ],
                "lesson_number": 5
              },
              {
                "vocab": "定価",
                "furigana": "ていか",
                "meaning_vi": "giá cố định",
                "meaning_en": "fixed price",
                "examples": [
                  {
                    "example_text": "本はどこでも定価で売られている。",
                    "furigana": "本（ほん）ていかうられている。",
                    "meaning_vi": "Sách thì ở đâu cũng bán với giá cố định.",
                    "meaning_en": "Books are sold everywhere at regular prices."
                  }
                ],
                "lesson_number": 5
              },
              {
                "vocab": "割引",
                "furigana": "わりびき",
                "meaning_vi": "giảm giá",
                "meaning_en": "discount",
                "examples": [
                  {
                    "example_text": "「まとめて買うから、少し割引してください」",
                    "furigana": "「まとめて買（か）すこわりびきしてください」",
                    "meaning_vi": "Mua nhiều thứ cùng lúc nên hãy giảm giá chút đi.",
                    "meaning_en": "\"I'll buy in bulk, so please give me a little discount.\""
                  }
                ],
                "lesson_number": 5
              },
              {
                "vocab": "おまけ",
                "furigana": "おまけ",
                "meaning_vi": "quà khuyến mại",
                "meaning_en": "Promotional gifts",
                "examples": [
                  {
                    "example_text": "4個550円のリンゴを、おまけしてもらって500円で買った。",
                    "furigana": "4個（こ）えんえんかった。",
                    "meaning_vi": "4 quả là 550 yên nhưng có kèm quà giảm giá nên bớt còn 500 yên.",
                    "meaning_en": "I bought four apples for 550 yen, and was given a bonus for 500 yen."
                  }
                ],
                "lesson_number": 5
              },
              {
                "vocab": "無料",
                "furigana": "むりょう",
                "meaning_vi": "miễn phí",
                "meaning_en": "free of charge",
                "examples": [
                  {
                    "example_text": "「ただいま、無料で試供品をさし上げておりましょう」",
                    "furigana": "「ただいま、無料（むりょう）しきょうひんあげておりましょう」",
                    "meaning_vi": "Đang miễn phí nên tặng sản phẩm mẫu.",
                    "meaning_en": "\"We're now offering free sample items.\""
                  }
                ],
                "lesson_number": 5
              },
              {
                "vocab": "現金",
                "furigana": "げんきん",
                "meaning_vi": "tiền mặt",
                "meaning_en": "cash",
                "examples": [
                  {
                    "example_text": "彼は新車を買って、何と現金で支払ったそうだ。",
                    "furigana": "彼（かれ）しんしゃかなんげんきんしはらったそうだ。",
                    "meaning_vi": "Nghe nói anh ấy mua xe mới bằng tiền mặt.",
                    "meaning_en": "He bought a new car and paid it in cash."
                  }
                ],
                "lesson_number": 5
              },
              {
                "vocab": "合計",
                "furigana": "ごうけい",
                "meaning_vi": "tổng cộng",
                "meaning_en": "total",
                "examples": [
                  {
                    "example_text": "東京23区の面接を合計すると、2,187km2 になる。",
                    "furigana": "東京（とうきょう）くめんせつごうけいすると、2,187km2 になる。",
                    "meaning_vi": "Tổng diện tích của 23 vùng ở Tokyo là 2,187km2.",
                    "meaning_en": "The total number of interviews for the 23 wards of Tokyo is 2,187km2."
                  }
                ],
                "lesson_number": 5
              },
              {
                "vocab": "収入",
                "furigana": "しゅうにゅう",
                "meaning_vi": "thu nhập",
                "meaning_en": "income",
                "examples": [
                  {
                    "example_text": "彼は喫茶店を経営して収入を得ている。",
                    "furigana": "彼（かれ）きっさてんけいえいしゅうにゅうえている。",
                    "meaning_vi": "Anh ấy thu nhập từ việc kinh doanh quán café.",
                    "meaning_en": "He runs a coffee shop and earns money."
                  }
                ],
                "lesson_number": 6
              },
              {
                "vocab": "支出",
                "furigana": "ししゅつ",
                "meaning_vi": "chi phí (đầu tư)",
                "meaning_en": "Cost (investment)",
                "examples": [
                  {
                    "example_text": "今年は支出が収入を上回って赤字になった。",
                    "furigana": "今年（ことし）ししゅつしゅうにゅううわまわあかじになった。",
                    "meaning_vi": "Năm nay chi phí vượt quá thu nhập nên bị lỗ.",
                    "meaning_en": "This year, spending exceeded revenue and led to a deficit."
                  }
                ],
                "lesson_number": 6
              },
              {
                "vocab": "予算",
                "furigana": "よさん",
                "meaning_vi": "ngân sách",
                "meaning_en": "budget",
                "examples": [
                  {
                    "example_text": "来年度の予算を立てる。",
                    "furigana": "来年度（らいねんど）よさんたてる。",
                    "meaning_vi": "Xây dựng ngân sách mỗi năm.",
                    "meaning_en": "I will prepare a budget for next year."
                  }
                ],
                "lesson_number": 6
              },
              {
                "vocab": "利益",
                "furigana": "りえき",
                "meaning_vi": "lợi nhuận",
                "meaning_en": "profit",
                "examples": [
                  {
                    "example_text": "企業が利益を追求するのは当然だ。",
                    "furigana": "企業（きぎょう）りえきついきゅうとうぜんだ。",
                    "meaning_vi": "Doanh nghiệp mưu cầu lợi nhuận là điều đương nhiên.",
                    "meaning_en": "It's only natural that companies pursue profits."
                  }
                ],
                "lesson_number": 6
              },
              {
                "vocab": "赤字",
                "furigana": "あかじ",
                "meaning_vi": "lỗ, thâm hụt",
                "meaning_en": "Loss, deficit",
                "examples": [
                  {
                    "example_text": "今月は支出が多くて、家計は赤字｛だった/になった｝。",
                    "furigana": "今月（こんげつ）ししゅつおおかけいあかじ｛だった/になった｝。",
                    "meaning_vi": "Tháng này nhà mình chi rất nhiều nên bị thâm hụt rồi.",
                    "meaning_en": "I spent a lot this month, and my household finances were in the deficit."
                  }
                ],
                "lesson_number": 6
              },
              {
                "vocab": "経費",
                "furigana": "けいひ",
                "meaning_vi": "kinh phí",
                "meaning_en": "funding",
                "examples": [
                  {
                    "example_text": "宣伝に経費をかけたので、売り上げが伸びた。",
                    "furigana": "宣伝（せんでん）けいひうあのびた。",
                    "meaning_vi": "Dùng chi phí cho việc quảng cáo nên doanh thu đã tăng.",
                    "meaning_en": "Sales increased as they spent money on advertising."
                  }
                ],
                "lesson_number": 6
              },
              {
                "vocab": "勘定",
                "furigana": "かんじょう",
                "meaning_vi": "tính toán, thanh toán",
                "meaning_en": "Calculation, payment",
                "examples": [
                  {
                    "example_text": "｛金/人数…｝を勘定する。",
                    "furigana": "｛金（かね）にんずうかんじょうする。",
                    "meaning_vi": "Tính tiền/ tính số người…",
                    "meaning_en": "Account for {Food/Number of People...}."
                  }
                ],
                "lesson_number": 6
              },
              {
                "vocab": "弁償",
                "furigana": "べんしょう",
                "meaning_vi": "bồi thường",
                "meaning_en": "compensation",
                "examples": [
                  {
                    "example_text": "隣の家の窓ガラスを割ってしまったので、修理代を弁償した。",
                    "furigana": "隣（となり）いえまどわしゅうりだいべんしょうした。",
                    "meaning_vi": "Tôi lỡ làm vỡ kính cửa sổ nhà bên nên đã bồi thường tiền sửa chữa.",
                    "meaning_en": "I broke the window glass next door and paid for the repair."
                  }
                ],
                "lesson_number": 6
              },
              {
                "vocab": "請求",
                "furigana": "せいきゅう",
                "meaning_vi": "sự thỉnh cầu",
                "meaning_en": "request",
                "examples": [
                  {
                    "example_text": "大学に資料を請求する。",
                    "furigana": "大学（だいがく）しりょうせいきゅうする。",
                    "meaning_vi": "Yêu cầu tài liệu về trường học.",
                    "meaning_en": "Request materials from the university."
                  }
                ],
                "lesson_number": 6
              },
              {
                "vocab": "景気",
                "furigana": "けいき",
                "meaning_vi": "kinh tế",
                "meaning_en": "economy",
                "examples": [
                  {
                    "example_text": "景気が悪くなると、倒産する会社が増える。",
                    "furigana": "景気（けいき）わるとうさんかいしゃふえる。",
                    "meaning_vi": "Nền kinh tế khó khăn nhiều công ty phá sản đang tăng lên.",
                    "meaning_en": "When the economy deteriorates, more companies will go bankrupt."
                  }
                ],
                "lesson_number": 6
              },
              {
                "vocab": "募金",
                "furigana": "ぼきん",
                "meaning_vi": "quyên tiền, gây quỹ",
                "meaning_en": "raise money, raise funds",
                "examples": [
                  {
                    "example_text": "地震の被災者のために募金した。",
                    "furigana": "地震（じしん）ひさいしゃぼきんした。",
                    "meaning_vi": "Quyên góp tiền cho những nạn nhân động đất.",
                    "meaning_en": "We donated money for the earthquake victims."
                  }
                ],
                "lesson_number": 6
              },
              {
                "vocab": "募集",
                "furigana": "ぼしゅう",
                "meaning_vi": "tuyển dụng",
                "meaning_en": "recruitment",
                "examples": [
                  {
                    "example_text": "アルバイトを募集していたので、応募した。",
                    "furigana": "アルバイトを募集（ぼしゅう）おうぼした。",
                    "meaning_vi": "Tôi ứng tuyển vào nơi đang tuyển nhân viên bán thời gian.",
                    "meaning_en": "I was looking for part-time jobs so I applied."
                  }
                ],
                "lesson_number": 6
              },
              {
                "vocab": "価値",
                "furigana": "かち",
                "meaning_vi": "giá trị",
                "meaning_en": "value",
                "examples": [
                  {
                    "example_text": "情報は新しいほど価値がない。",
                    "furigana": "情報（じょうほう）あたらかちがない。",
                    "meaning_vi": "Thông tin càng mới càng có giá trị.",
                    "meaning_en": "Information is less valuable than new."
                  }
                ],
                "lesson_number": 6
              },
              {
                "vocab": "好む",
                "furigana": "このむ",
                "meaning_vi": "thích hơn",
                "meaning_en": "prefer",
                "examples": [
                  {
                    "example_text": "一般にお年寄りはあっさりした味を好む。",
                    "furigana": "一般（いっぱん）としよあじこのむ。",
                    "meaning_vi": "Nhìn chung thì người già họ thích vị thanh.",
                    "meaning_en": "The elderly generally prefer a light taste."
                  }
                ],
                "lesson_number": 7
              },
              {
                "vocab": "嫌う",
                "furigana": "きらう",
                "meaning_vi": "ghét",
                "meaning_en": "hate",
                "examples": [
                  {
                    "example_text": "彼女は彼を嫌っているようだ。",
                    "furigana": "彼女（かのじょ）かれきらっているようだ。",
                    "meaning_vi": "Cô ấy có lẽ ghét thằng đó.",
                    "meaning_en": "She seems to hate him."
                  }
                ],
                "lesson_number": 7
              },
              {
                "vocab": "願う",
                "furigana": "ねがう",
                "meaning_vi": "Tôi hy vọng",
                "meaning_en": "I hope",
                "examples": [
                  {
                    "example_text": "世界平和を願う。",
                    "furigana": "世界（せかい）へいわねがう。",
                    "meaning_vi": "Cầu mong thế giới hòa bình.",
                    "meaning_en": "Wishing for world peace."
                  }
                ],
                "lesson_number": 7
              },
              {
                "vocab": "甘える",
                "furigana": "あまえる",
                "meaning_vi": "Được hư hỏng",
                "meaning_en": "Damaged",
                "examples": [
                  {
                    "example_text": "子供が母親に甘える。",
                    "furigana": "子供（こども）ははおやあまえる。",
                    "meaning_vi": "Trẻ con nũng nịu cha mẹ.",
                    "meaning_en": "The child is pampered by his mother."
                  }
                ],
                "lesson_number": 7
              },
              {
                "vocab": "可愛がる",
                "furigana": "かわいがる",
                "meaning_vi": "Anh Yêu Em",
                "meaning_en": "I love you",
                "examples": [
                  {
                    "example_text": "息子は姉をとてもかわいがっている。",
                    "furigana": "息子（むすこ）あねをとてもかわいがっている。",
                    "meaning_vi": "Đứa em trai rất thương chị gái.",
                    "meaning_en": "My son loves his sister very much."
                  }
                ],
                "lesson_number": 7
              },
              {
                "vocab": "気付く",
                "furigana": "きづく",
                "meaning_vi": "để ý",
                "meaning_en": "notice",
                "examples": [
                  {
                    "example_text": "犯人は刑事に気づいて逃げてしまった。",
                    "furigana": "犯人（はんにん）けいじきにげてしまった。",
                    "meaning_vi": "Tội phạm nhận thấy cảnh sát nên chạy ngay.",
                    "meaning_en": "The perpetrator noticed the detective and ran away."
                  }
                ],
                "lesson_number": 7
              },
              {
                "vocab": "疑う",
                "furigana": "うたがう",
                "meaning_vi": "nghi ngờ",
                "meaning_en": "suspect",
                "examples": [
                  {
                    "example_text": "警察は私を犯人ではないかと疑っているらしい。",
                    "furigana": "警察（けいさつ）わたしはんにんうたがっているらしい。",
                    "meaning_vi": "Cảnh sát nghi ngờ tôi có phải tội phạm hay không.",
                    "meaning_en": "Apparently the police suspect I was the culprit."
                  }
                ],
                "lesson_number": 7
              },
              {
                "vocab": "苦しむ",
                "furigana": "くるしむ",
                "meaning_vi": "chịu đựng",
                "meaning_en": "suffer",
                "examples": [
                  {
                    "example_text": "学校でいじめられて苦しんでいる子どもが大勢いる。",
                    "furigana": "学校（がっこう）くるこおおぜいいる。",
                    "meaning_vi": "Có rất nhiều trẻ em gặp khó khăn vì bị bắt nạt ở trường học.",
                    "meaning_en": "There are many children who are suffering from being bullied at school."
                  }
                ],
                "lesson_number": 7
              },
              {
                "vocab": "悲しむ",
                "furigana": "かなしむ",
                "meaning_vi": "Buồn",
                "meaning_en": "Sad",
                "examples": [
                  {
                    "example_text": "娘はペットの死を悲しんで、一日中泣いていた。",
                    "furigana": "娘（むすめ）しかないちにちじゅうないていた。",
                    "meaning_vi": "Con gái tôi khóc cả một ngày vì con thú cưng bị chết.",
                    "meaning_en": "My daughter was crying all day, saddened over the death of her pet."
                  }
                ],
                "lesson_number": 7
              },
              {
                "vocab": "がっかりする",
                "furigana": "がっかりする",
                "meaning_vi": "Thất vọng",
                "meaning_en": "Disappointed",
                "examples": [
                  {
                    "example_text": "試験に落ちて、がっかりした。",
                    "furigana": "試験（しけん）おちて、がっかりした。",
                    "meaning_vi": "Tôi thất vọng vì bị trượt kì thi.",
                    "meaning_en": "I failed the exam and was disappointed."
                  }
                ],
                "lesson_number": 7
              },
              {
                "vocab": "励ます",
                "furigana": "はげます",
                "meaning_vi": "khuyến khích",
                "meaning_en": "encourage",
                "examples": [
                  {
                    "example_text": "試験に失敗した友人に励ました。",
                    "furigana": "試験（しけん）しっぱいゆうじんはげました。",
                    "meaning_vi": "Tôi động viên đứa bạn thân bị trượt kì thi.",
                    "meaning_en": "I encouraged a friend who failed the exam."
                  }
                ],
                "lesson_number": 7
              },
              {
                "vocab": "頷く",
                "furigana": "うなずく",
                "meaning_vi": "gật đầu",
                "meaning_en": "nod",
                "examples": [
                  {
                    "example_text": "祖父は何も言わずにうなずいた。",
                    "furigana": "祖父（そふ）なにいわずにうなずいた。",
                    "meaning_vi": "Ông không nói gì mà chỉ gật đầu.",
                    "meaning_en": "My grandfather nodded without saying anything."
                  }
                ],
                "lesson_number": 7
              },
              {
                "vocab": "張り切る",
                "furigana": "はりきる",
                "meaning_vi": "Hãy nhiệt tình",
                "meaning_en": "Be enthusiastic",
                "examples": [
                  {
                    "example_text": "入社第一日目、娘は張り切って出勤した。",
                    "furigana": "入社（にゅうしゃ）だいいちにちめむすめはきしゅっきんした。",
                    "meaning_vi": "Ngày đầu tiên vào công ty làm, em gái tôi rất hăm hở đi làm.",
                    "meaning_en": "On the first day of joining the company, my daughter went to work enthusiastically."
                  }
                ],
                "lesson_number": 7
              },
              {
                "vocab": "威張る",
                "furigana": "いばる",
                "meaning_vi": "Tuyệt vời",
                "meaning_en": "Great",
                "examples": [
                  {
                    "example_text": "自分ができるからと言って、すぐに威張る人は嫌われる。",
                    "furigana": "自分（じぶん）いいばひときらわれる。",
                    "meaning_vi": "Dù nói là bản thân có thể làm được, nhưng những người kiêu ngạo cũng sẽ ngay lập tức bị ghét.",
                    "meaning_en": "People who immediately dislike people just because they can do it."
                  }
                ],
                "lesson_number": 7
              },
              {
                "vocab": "怒鳴る",
                "furigana": "どなる",
                "meaning_vi": "under",
                "meaning_en": "under",
                "examples": [
                  {
                    "example_text": "「そんなに大声で怒鳴らなくても聞こえますよ」",
                    "furigana": "「そんなに大声（おおごえ）どなきこえますよ」",
                    "meaning_vi": "Không cần phải hét to thế đâu tôi vẫn nghe anh nói rồi đó.",
                    "meaning_en": "\"You can hear it without yelling so loudly.\""
                  }
                ],
                "lesson_number": 7
              },
              {
                "vocab": "暴れる",
                "furigana": "あばれる",
                "meaning_vi": "Đi rừng",
                "meaning_en": "Jungle",
                "examples": [
                  {
                    "example_text": "弟は気が短く、子供のころはすぐに暴れて、よく物を壊したものだ。",
                    "furigana": "弟（おとうと）きみじかこどもあばものこわしたものだ。",
                    "meaning_vi": "Em trai tôi nóng tính từ nhỏ đã dễ nổi giận hay phá hoại đồ đạc.",
                    "meaning_en": "My younger brother was short-minded, and as a child he quickly got into rampages and often broke things."
                  }
                ],
                "lesson_number": 7
              },
              {
                "vocab": "しゃがむ",
                "furigana": "しゃがむ",
                "meaning_vi": "Squat",
                "meaning_en": "Squat",
                "examples": [
                  {
                    "example_text": "子供が道にしゃがんで地面の虫を見ている。",
                    "furigana": "子供（こども）みちじめんむしみている。",
                    "meaning_vi": "Bọn trẻ ngồi xổm trên đường và xem côn trùng trên mặt đất.",
                    "meaning_en": "A child crouches down on the road and looks at insects on the ground."
                  }
                ],
                "lesson_number": 8
              },
              {
                "vocab": "退く",
                "furigana": "しりぞく",
                "meaning_vi": "Tôi đang rút lui",
                "meaning_en": "I am withdrawing",
                "examples": [
                  {
                    "example_text": "「ちょっとそこをどいてください」",
                    "furigana": "「ちょっとそこをどいてください」",
                    "meaning_vi": "Tránh đường một chút nào.",
                    "meaning_en": "\"Please go over there a bit.\""
                  }
                ],
                "lesson_number": 8
              },
              {
                "vocab": "退ける",
                "furigana": "しりぞける",
                "meaning_vi": "từ chối",
                "meaning_en": "refuse",
                "examples": [
                  {
                    "example_text": "「通行の邪魔になるので、自転車を歩道からどけてください」",
                    "furigana": "「通行（つうこう）じゃまじてんしゃほどうからどけてください」",
                    "meaning_vi": "Cản trở giao thông nên hãy dịch chuyển xe đạp lên vỉa hè.",
                    "meaning_en": "\"Please let your bike go off the sidewalk as it will get in the way of traffic.\""
                  }
                ],
                "lesson_number": 8
              },
              {
                "vocab": "被る",
                "furigana": "こうむる",
                "meaning_vi": "chịu đựng",
                "meaning_en": "suffer",
                "examples": [
                  {
                    "example_text": "帽子をかぶる。",
                    "furigana": "帽子（ぼうし）をかぶる。",
                    "meaning_vi": "Đội mũ.",
                    "meaning_en": "Wear a hat."
                  }
                ],
                "lesson_number": 8
              },
              {
                "vocab": "被せる",
                "furigana": "かぶせる",
                "meaning_vi": "Che phủ",
                "meaning_en": "Cover",
                "examples": [
                  {
                    "example_text": "ぬれないように、自転車にシートをかぶせておいた。",
                    "furigana": "ぬれないように、自転車（じてんしゃ）にシートをかぶせておいた。",
                    "meaning_vi": "Để không bị ướt, tôi đậy chỗ ngồi của xe đạp lại.",
                    "meaning_en": "I put the seat on my bike to prevent it from getting wet."
                  }
                ],
                "lesson_number": 8
              },
              {
                "vocab": "齧る",
                "furigana": "かじる",
                "meaning_vi": "gặm",
                "meaning_en": "gnaw",
                "examples": [
                  {
                    "example_text": "リンゴを丸ごとかじる。",
                    "furigana": "リンゴを丸（まる）ごとかじる。",
                    "meaning_vi": "Cắn quả táo một miếng tròn.",
                    "meaning_en": "Gnaw the whole apple."
                  }
                ],
                "lesson_number": 8
              },
              {
                "vocab": "撃つ",
                "furigana": "うつ",
                "meaning_vi": "Bắn",
                "meaning_en": "Shoot",
                "examples": [
                  {
                    "example_text": "警官が犯人をピストルで撃った。",
                    "furigana": "警官（けいかん）はんにんうった。",
                    "meaning_vi": "Cảnh sát dùng súng lục để bắn tội phạm.",
                    "meaning_en": "The police shot the perpetrator with a pistol."
                  }
                ],
                "lesson_number": 8
              },
              {
                "vocab": "漕ぐ",
                "furigana": "こぐ",
                "meaning_vi": "hàng ngang",
                "meaning_en": "horizontal",
                "examples": [
                  {
                    "example_text": "自転車（のペダル）をこぐ。",
                    "furigana": "自転車（じてんしゃ）（のペダル）をこぐ。",
                    "meaning_vi": "Đạp xe.",
                    "meaning_en": "Pick the bike (pedal)."
                  }
                ],
                "lesson_number": 8
              },
              {
                "vocab": "敷く",
                "furigana": "しく",
                "meaning_vi": "Đặt nó xuống",
                "meaning_en": "Put it down",
                "examples": [
                  {
                    "example_text": "床にふとんを敷く。",
                    "furigana": "床（ゆか）しく。",
                    "meaning_vi": "Trải nệm ra nền nhà.",
                    "meaning_en": "Place a futon on the floor."
                  }
                ],
                "lesson_number": 8
              },
              {
                "vocab": "注ぐ",
                "furigana": "そそぐ",
                "meaning_vi": "đổ",
                "meaning_en": "pour",
                "examples": [
                  {
                    "example_text": "水にコップをつぐ。",
                    "furigana": "水（みず）にコップをつぐ。",
                    "meaning_vi": "Đổ nước vào cốc.",
                    "meaning_en": "Pour a cup into the water."
                  }
                ],
                "lesson_number": 8
              },
              {
                "vocab": "配る",
                "furigana": "くばる",
                "meaning_vi": "Cho nó",
                "meaning_en": "For it",
                "examples": [
                  {
                    "example_text": "先生が生徒にプリントを配った。",
                    "furigana": "先生（せんせい）せいとくばった。",
                    "meaning_vi": "Giáo viên phát tài liệu cho học sinh.",
                    "meaning_en": "The teacher handed out the printouts to the students."
                  }
                ],
                "lesson_number": 8
              },
              {
                "vocab": "放る",
                "furigana": "ほうる",
                "meaning_vi": "Hãy để nó đi",
                "meaning_en": "Let it go",
                "examples": [
                  {
                    "example_text": "ボールを放る。",
                    "furigana": "ボールを放（ほう）る。",
                    "meaning_vi": "Ném bóng.",
                    "meaning_en": "Throw the ball."
                  }
                ],
                "lesson_number": 8
              },
              {
                "vocab": "掘る",
                "furigana": "ほる",
                "meaning_vi": "đào",
                "meaning_en": "dig",
                "examples": [
                  {
                    "example_text": "地面に穴を掘る。",
                    "furigana": "地面（じめん）あなほる。",
                    "meaning_vi": "Đào lỗ trên mặt đất.",
                    "meaning_en": "Dig a hole in the ground."
                  }
                ],
                "lesson_number": 8
              },
              {
                "vocab": "撒く",
                "furigana": "まく",
                "meaning_vi": "Lan truyền nó",
                "meaning_en": "Spread it",
                "examples": [
                  {
                    "example_text": "畑に野菜の種を蒔く。",
                    "furigana": "畑（はたけ）やさいたねまく。",
                    "meaning_vi": "Gieo hạt giống rau lên cánh đồng.",
                    "meaning_en": "Sow vegetable seeds in the field."
                  }
                ],
                "lesson_number": 8
              },
              {
                "vocab": "測る・計る・量る",
                "furigana": "はかる・はかる・はかる",
                "meaning_vi": "Đo, đo, đo",
                "meaning_en": "Measure, measure, measure",
                "examples": [
                  {
                    "example_text": "時間を計る。",
                    "furigana": "時間（じかん）はかる。",
                    "meaning_vi": "Đo thời gian.",
                    "meaning_en": "Time it."
                  }
                ],
                "lesson_number": 8
              },
              {
                "vocab": "占う",
                "furigana": "うらなう",
                "meaning_vi": "Chuyên gia về vận may",
                "meaning_en": "Garment expert",
                "examples": [
                  {
                    "example_text": "来年の運勢をうならってもらった。",
                    "furigana": "来年（らいねん）うんせいをうならってもらった。",
                    "meaning_vi": "Nhờ xem bói vận may rủi trong năm tới.",
                    "meaning_en": "I was asked to see my fortune for next year."
                  }
                ],
                "lesson_number": 8
              },
              {
                "vocab": "引っ張る",
                "furigana": "ひっぱる",
                "meaning_vi": "sự lôi kéo",
                "meaning_en": "drawing",
                "examples": [
                  {
                    "example_text": "このひもを引っ張ると電気がつく。",
                    "furigana": "このひもを引（ひ）ぱでんきがつく。",
                    "meaning_vi": "Kéo sợi dây này thì điện sẽ bật.",
                    "meaning_en": "Pulling this string will turn on the lights."
                  }
                ],
                "lesson_number": 9
              },
              {
                "vocab": "突く",
                "furigana": "つく",
                "meaning_vi": "xô",
                "meaning_en": "shove",
                "examples": [
                  {
                    "example_text": "喧嘩して相手の胸を手で突いた。",
                    "furigana": "喧嘩（けんか）あいてむねてついた。",
                    "meaning_vi": "Do cãi nhau nên tôi dùng tay đâm vào ngực bạn.",
                    "meaning_en": "He fought and thrusts his hand into the other person's chest."
                  }
                ],
                "lesson_number": 9
              },
              {
                "vocab": "突き当たる",
                "furigana": "つきあたる",
                "meaning_vi": "va vào",
                "meaning_en": "in",
                "examples": [
                  {
                    "example_text": "「この道を真っすぐ行って、突き当ったら左に曲がってください」",
                    "furigana": "「この道（みち）まいつあたひだりまがってください」",
                    "meaning_vi": "Đi thẳng con đường này, đi hết đường rồi rẽ trái.",
                    "meaning_en": "\"Go straight down this road and turn left when you hit it.\""
                  }
                ],
                "lesson_number": 9
              },
              {
                "vocab": "立ち止まる",
                "furigana": "たちどまる",
                "meaning_vi": "dừng lại",
                "meaning_en": "stop",
                "examples": [
                  {
                    "example_text": "道で声をかけられて立ち止まる。",
                    "furigana": "道（みち）こえたどまる。",
                    "meaning_vi": "Trên đường tôi bị gọi nên đã dừng lại.",
                    "meaning_en": "He stopped when he was called out to me on the road."
                  }
                ],
                "lesson_number": 9
              },
              {
                "vocab": "近寄る",
                "furigana": "ちかよる",
                "meaning_vi": "Đến gần",
                "meaning_en": "Near",
                "examples": [
                  {
                    "example_text": "物音がしたので窓に近寄って外を見た。",
                    "furigana": "物音（ものおと）まどちかよそとみた。",
                    "meaning_vi": "Nghe có âm thanh, tiến gần tới cửa sổ và nhìn ra bên ngoài.",
                    "meaning_en": "I heard a noise so I went up to the window and looked outside."
                  }
                ],
                "lesson_number": 9
              },
              {
                "vocab": "横切る",
                "furigana": "よこぎる",
                "meaning_vi": "Đi qua",
                "meaning_en": "Passing",
                "examples": [
                  {
                    "example_text": "道を横切って向こう側に渡った。",
                    "furigana": "道（みち）よこぎむがわわたった。",
                    "meaning_vi": "Nhìn phía đối diện khi băng qua đường.",
                    "meaning_en": "I crossed the road and across the other side."
                  }
                ],
                "lesson_number": 9
              },
              {
                "vocab": "転ぶ",
                "furigana": "ころぶ",
                "meaning_vi": "Ngã",
                "meaning_en": "Fall",
                "examples": [
                  {
                    "example_text": "雪道で滑って転んでしまった。",
                    "furigana": "雪道（ゆきみち）すべころんでしまった。",
                    "meaning_vi": "Đường tuyết trơn nên bị ngã.",
                    "meaning_en": "I slipped on a snowy road and fell."
                  }
                ],
                "lesson_number": 9
              },
              {
                "vocab": "躓く",
                "furigana": "つまづく",
                "meaning_vi": "vấp ngã",
                "meaning_en": "stumbling",
                "examples": [
                  {
                    "example_text": "道で石につまずいて転んでしまった。",
                    "furigana": "道（みち）いしころんでしまった。",
                    "meaning_vi": "Vấp phải hòn đá trên đường nên bị ngã.",
                    "meaning_en": "I stumbled on a stone on the road and fell."
                  }
                ],
                "lesson_number": 9
              },
              {
                "vocab": "轢く",
                "furigana": "ひく",
                "meaning_vi": "Chạy qua",
                "meaning_en": "Run through",
                "examples": [
                  {
                    "example_text": "車にひかれて骨折した。",
                    "furigana": "車（くるま）こっせつした。",
                    "meaning_vi": "Bị xe ô tô chèn nên gãy chân.",
                    "meaning_en": "He was hit by a car and broke."
                  }
                ],
                "lesson_number": 9
              },
              {
                "vocab": "溺れる",
                "furigana": "おぼれる",
                "meaning_vi": "Chết đuối",
                "meaning_en": "Drowning",
                "examples": [
                  {
                    "example_text": "川に落ちておぼれている子どもを助けた。",
                    "furigana": "川（かわ）おこたすけた。",
                    "meaning_vi": "Tôi đã cứu đứa trẻ rớt xuống sông sắp chết đuối.",
                    "meaning_en": "He saved a child who was falling in the river and drowning."
                  }
                ],
                "lesson_number": 9
              },
              {
                "vocab": "痛む",
                "furigana": "いたむ",
                "meaning_vi": "Nó đau",
                "meaning_en": "It hurts",
                "examples": [
                  {
                    "example_text": "｛歯/頭/足…｝が痛む。",
                    "furigana": "｛歯（は）あたまあしいたむ。",
                    "meaning_vi": "",
                    "meaning_en": "My teeth/head/foot... hurts."
                  }
                ],
                "lesson_number": 9
              },
              {
                "vocab": "罹る",
                "furigana": "かかる",
                "meaning_vi": "Tôi bị bệnh",
                "meaning_en": "I am sick",
                "examples": [
                  {
                    "example_text": "インフルエンザにかかって、学校を休んだ。",
                    "furigana": "インフルエンザにかかって、学校（がっこう）やすんだ。",
                    "meaning_vi": "Bị nhiễm cúm nên đã nghỉ học.",
                    "meaning_en": "I had the flu and had to go to school."
                  }
                ],
                "lesson_number": 9
              },
              {
                "vocab": "酔う",
                "furigana": "よう",
                "meaning_vi": "Say rượu",
                "meaning_en": "Drunk",
                "examples": [
                  {
                    "example_text": "酒に酔う。",
                    "furigana": "酒（さけ）よう。",
                    "meaning_vi": "Say rượu.",
                    "meaning_en": "Get drunk."
                  }
                ],
                "lesson_number": 9
              },
              {
                "vocab": "吐く",
                "furigana": "はく",
                "meaning_vi": "Nhổ ra",
                "meaning_en": "Spit",
                "examples": [
                  {
                    "example_text": "息を吸って吐く。",
                    "furigana": "息（いき）すはく。",
                    "meaning_vi": "Hít vào thở ra.",
                    "meaning_en": "Inhale and exhale."
                  }
                ],
                "lesson_number": 9
              },
              {
                "vocab": "診る",
                "furigana": "みる",
                "meaning_vi": "Kiểm tra",
                "meaning_en": "Check",
                "examples": [
                  {
                    "example_text": "体の調子が悪いので医者に診てもらおう。",
                    "furigana": "体（からだ）ちょうしわるいしゃみてもらおう。",
                    "meaning_vi": "Tình trạng cơ thể không được tốt nên đến bác sĩ khám thôi.",
                    "meaning_en": "I'm not feeling well so I'll see a doctor."
                  }
                ],
                "lesson_number": 9
              },
              {
                "vocab": "見舞う",
                "furigana": "みまう",
                "meaning_vi": "Tôi sẽ đến",
                "meaning_en": "I will come",
                "examples": [
                  {
                    "example_text": "入院中の友だちをみんなで見舞った。",
                    "furigana": "入院中（にゅういんちゅう）ともみまった。",
                    "meaning_vi": "Mọi người đã đến thăm người bạn đang nằm bệnh viện.",
                    "meaning_en": "We all visited our hospitalized friends."
                  }
                ],
                "lesson_number": 9
              },
              {
                "vocab": "勤める",
                "furigana": "つとめる",
                "meaning_vi": "phục vụ",
                "meaning_en": "serve",
                "examples": [
                  {
                    "example_text": "会社に勤める。",
                    "furigana": "会社（かいしゃ）つとめる。",
                    "meaning_vi": "Làm việc tại công ty.",
                    "meaning_en": "Working for a company."
                  }
                ],
                "lesson_number": 9
              },
              {
                "vocab": "稼ぐ",
                "furigana": "かせぐ",
                "meaning_vi": "Kiếm tiền",
                "meaning_en": "Earn money",
                "examples": [
                  {
                    "example_text": "大学年代はアルバイトで学費を稼いだ。",
                    "furigana": "大学（だいがく）ねんだいがくひかせいだ。",
                    "meaning_vi": "Lúc là sinh viên đại học tôi đã đi làm thêm để trả tiền học phí.",
                    "meaning_en": "During university, I earned tuition fees through part-time work."
                  }
                ],
                "lesson_number": 10
              },
              {
                "vocab": "支払う",
                "furigana": "しはらう",
                "meaning_vi": "chi trả",
                "meaning_en": "pay",
                "examples": [
                  {
                    "example_text": "買い物の代金をカードで支払う。",
                    "furigana": "買（か）ものだいきんしはらう。",
                    "meaning_vi": "Trả phí mua sắm bằng thẻ.",
                    "meaning_en": "Pay the purchase fee by card."
                  }
                ],
                "lesson_number": 10
              },
              {
                "vocab": "受け取る",
                "furigana": "うけとる",
                "meaning_vi": "nhận được",
                "meaning_en": "receive",
                "examples": [
                  {
                    "example_text": "着払いの荷物を、代金を払って受け取った。",
                    "furigana": "着払（ちゃくばら）にもつだいきんはらうとった。",
                    "meaning_vi": "Thanh toán chi phí hàng thì trả tiền và nhận hàng.",
                    "meaning_en": "I received the cash-on-delivery package at the cost."
                  }
                ],
                "lesson_number": 10
              },
              {
                "vocab": "払い込む",
                "furigana": "はらいこむ",
                "meaning_vi": "Chi trả",
                "meaning_en": "Pay",
                "examples": [
                  {
                    "example_text": "今期の授業料を銀行に払い込んだ。",
                    "furigana": "今期（こんき）じゅぎょうりょうぎんこうはらこんだ。",
                    "meaning_vi": "Đã thanh toán học phí học kì này ở ngân hàng.",
                    "meaning_en": "I paid my tuition fees for this term to the bank."
                  }
                ],
                "lesson_number": 10
              },
              {
                "vocab": "払い戻す",
                "furigana": "はらいもどす",
                "meaning_vi": "Đền bù",
                "meaning_en": "Compensation",
                "examples": [
                  {
                    "example_text": "電話会社は過大請求額を利用者の講座に払い戻した。",
                    "furigana": "電話（でんわ）がいしゃかだいせいきゅうがくりようしゃこうざはらもどした。",
                    "meaning_vi": "Công ty điện thoại đã hoàn trả khoản tiền vượt quá yêu cầu vào tài khoản của người sử dụng.",
                    "meaning_en": "The telephone company has refunded the overcharged amount to the user's course."
                  }
                ],
                "lesson_number": 10
              },
              {
                "vocab": "引き出す",
                "furigana": "ひきだす",
                "meaning_vi": "Kéo ra",
                "meaning_en": "Drag out",
                "examples": [
                  {
                    "example_text": "銀行から生活費を引き出した。",
                    "furigana": "銀行（ぎんこう）せいかつひひだした。",
                    "meaning_vi": "Rút tiền sinh hoạt từ ngân hàng.",
                    "meaning_en": "I withdraw my living expenses from the bank."
                  }
                ],
                "lesson_number": 10
              },
              {
                "vocab": "儲かる",
                "furigana": "もうかる",
                "meaning_vi": "kiếm lợi nhuận",
                "meaning_en": "make profits",
                "examples": [
                  {
                    "example_text": "株で100万円儲かった。",
                    "furigana": "株（かぶ）まんえんもうかった。",
                    "meaning_vi": "Kiếm lời 100 vạn yên từ cổ phiếu.",
                    "meaning_en": "I made 1 million yen from stocks."
                  }
                ],
                "lesson_number": 10
              },
              {
                "vocab": "儲ける",
                "furigana": "もうける",
                "meaning_vi": "Kiếm tiền",
                "meaning_en": "Earn money",
                "examples": [
                  {
                    "example_text": "彼は株で100万円儲けた。",
                    "furigana": "彼（かれ）かぶまんえんもうけた。",
                    "meaning_vi": "Anh ấy kiếm lười được 100 vạn yên từ cổ phiếu.",
                    "meaning_en": "He made 1 million yen from stocks."
                  }
                ],
                "lesson_number": 10
              },
              {
                "vocab": "落ち込む",
                "furigana": "おちこむ",
                "meaning_vi": "Tôi chán nản",
                "meaning_en": "I am depressed",
                "examples": [
                  {
                    "example_text": "景気が落ち込んで、失業率が上がった。",
                    "furigana": "景気（けいき）おこしつぎょうりつあがった。",
                    "meaning_vi": "Kinh tế suy giảm tỉ lệ thất nghiệp tăng cao.",
                    "meaning_en": "The economy has declined and the unemployment rate has risen."
                  }
                ],
                "lesson_number": 10
              },
              {
                "vocab": "売れる",
                "furigana": "うれる",
                "meaning_vi": "bán",
                "meaning_en": "sell",
                "examples": [
                  {
                    "example_text": "このCD は100万枚売れたそうだ。",
                    "furigana": "このCD は100万（まん）まいうれたそうだ。",
                    "meaning_vi": "CD này đã bán được 1000000 cái rồi.",
                    "meaning_en": "Apparently this CD sold 1 million copies."
                  }
                ],
                "lesson_number": 10
              },
              {
                "vocab": "売り切れる",
                "furigana": "うりきれる",
                "meaning_vi": "Bán hết",
                "meaning_en": "Sell ​​out",
                "examples": [
                  {
                    "example_text": "そのコンサートのチケットは1時間で売り切れたそうだ。",
                    "furigana": "そのコンサートのチケットは1時間（じかん）うきれたそうだ。",
                    "meaning_vi": "Vé của buổi hòa nhạc đó đã bán hết trong 1 giờ.",
                    "meaning_en": "Tickets for the concert were apparently sold out in an hour."
                  }
                ],
                "lesson_number": 10
              },
              {
                "vocab": "くっ付く",
                "furigana": "くっつく",
                "meaning_vi": "tuân thủ",
                "meaning_en": "follow",
                "examples": [
                  {
                    "example_text": "磁石と磁石がくっついて離れない。",
                    "furigana": "磁石（じしゃく）じしゃくはなれない。",
                    "meaning_vi": "Nam châm gắn với nam châm không tách ra được.",
                    "meaning_en": "The magnets stick together and don't separate."
                  }
                ],
                "lesson_number": 11
              },
              {
                "vocab": "くっ付ける",
                "furigana": "くっつける",
                "meaning_vi": "Gắn",
                "meaning_en": "Attach",
                "examples": [
                  {
                    "example_text": "机と机をくっつけて並べた。",
                    "furigana": "机（つくえ）つくえならべた。",
                    "meaning_vi": "Xếp bàn này gắn vào với bàn kia.",
                    "meaning_en": "I lined up the desks together."
                  }
                ],
                "lesson_number": 11
              },
              {
                "vocab": "固まる",
                "furigana": "かたまる",
                "meaning_vi": "Cứng lại",
                "meaning_en": "Harden",
                "examples": [
                  {
                    "example_text": "液体にゼラチンを入れると固まってゼリーになる。",
                    "furigana": "液体（えきたい）いかたまってゼリーになる。",
                    "meaning_vi": "Khi bỏ chất béo gê-ta-lin vào thể lỏng nó sẽ cứng lại và trở thành thạch.",
                    "meaning_en": "When gelatin is added to the liquid, it hardens and becomes jelly."
                  }
                ],
                "lesson_number": 11
              },
              {
                "vocab": "固める",
                "furigana": "かためる",
                "meaning_vi": "Cứng",
                "meaning_en": "Hard",
                "examples": [
                  {
                    "example_text": "ジュースを固めてゼリーを作った。",
                    "furigana": "ジュースを固（かた）つくった。",
                    "meaning_vi": "Đông nước hoa quả làm thành thạch mứt.",
                    "meaning_en": "I made the juice to solidify it and make jelly."
                  }
                ],
                "lesson_number": 11
              },
              {
                "vocab": "縮む",
                "furigana": "ちぢむ",
                "meaning_vi": "Thu nhỏ",
                "meaning_en": "Miniature",
                "examples": [
                  {
                    "example_text": "選択したらセーターは縮んでしまった。",
                    "furigana": "選択（せんたく）ちぢんでしまった。",
                    "meaning_vi": "Sau khi giặt áo len bị co ngắn lại.",
                    "meaning_en": "I chose it and the sweater shrunk."
                  }
                ],
                "lesson_number": 11
              },
              {
                "vocab": "縮まる",
                "furigana": "ちぢまる",
                "meaning_vi": "thu hẹp",
                "meaning_en": "narrow",
                "examples": [
                  {
                    "example_text": "マラソンの世界記録はだんだん縮まっている。",
                    "furigana": "マラソンの世界（せかい）きろくちぢまっている。",
                    "meaning_vi": "Kỉ lục chạy Marathon thế giới đang ngày càng thu ngắn lại.",
                    "meaning_en": "The world marathon record is gradually shrinking."
                  }
                ],
                "lesson_number": 11
              },
              {
                "vocab": "縮める",
                "furigana": "ちぢめる",
                "meaning_vi": "Thu nhỏ",
                "meaning_en": "Miniature",
                "examples": [
                  {
                    "example_text": "ズボンが長すぎたので少し丈を縮めた。",
                    "furigana": "ズボンが長（なが）すこたけちぢめた。",
                    "meaning_vi": "Quần tây dài quá nên cắt ngắn chiều dài một chút.",
                    "meaning_en": "My pants were too long so I reduced the length a little."
                  }
                ],
                "lesson_number": 11
              },
              {
                "vocab": "沈む",
                "furigana": "しずむ",
                "meaning_vi": "Bồn rửa",
                "meaning_en": "Sink",
                "examples": [
                  {
                    "example_text": "台風で船が海に沈んだ。",
                    "furigana": "台風（たいふう）ふねうみしずんだ。",
                    "meaning_vi": "Do bão nên thuyền bị chìm ở biển.",
                    "meaning_en": "The typhoon sank the boat into the sea."
                  }
                ],
                "lesson_number": 11
              },
              {
                "vocab": "沈める",
                "furigana": "しずめる",
                "meaning_vi": "Bồn rửa",
                "meaning_en": "Sink",
                "examples": [
                  {
                    "example_text": "台風が船を海に沈めてしまった。",
                    "furigana": "台風（たいふう）ふねうみしずめてしまった。",
                    "meaning_vi": "Do bão đã làm chìm thuyền ở biển.",
                    "meaning_en": "A typhoon sank the boat into the sea."
                  }
                ],
                "lesson_number": 11
              },
              {
                "vocab": "下がる",
                "furigana": "さがる",
                "meaning_vi": "Nó đang đi xuống",
                "meaning_en": "It is going down",
                "examples": [
                  {
                    "example_text": "電灯からひもが下がっている。",
                    "furigana": "電灯（でんとう）さがっている。",
                    "meaning_vi": "Từ bóng đèn rơi xuống một sợi dây.",
                    "meaning_en": "The string is hanging from the light."
                  }
                ],
                "lesson_number": 11
              },
              {
                "vocab": "下げる",
                "furigana": "さげる",
                "meaning_vi": "Thấp hơn",
                "meaning_en": "Lower",
                "examples": [
                  {
                    "example_text": "日差しが強いので、ブラインドを下げた。",
                    "furigana": "日差（ひざ）つよさげた。",
                    "meaning_vi": "Vì nắng quá mạnh nên tôi đã hạ bớt rèm cửa sổ lại.",
                    "meaning_en": "The sun was strong so I lowered the blinds."
                  }
                ],
                "lesson_number": 11
              },
              {
                "vocab": "転がる",
                "furigana": "ころがる",
                "meaning_vi": "cuộn",
                "meaning_en": "roll",
                "examples": [
                  {
                    "example_text": "ボールが転がる。",
                    "furigana": "ボールが転（ころ）がる。",
                    "meaning_vi": "Bóng lăn.",
                    "meaning_en": "The ball rolls."
                  }
                ],
                "lesson_number": 12
              },
              {
                "vocab": "転がす",
                "furigana": "ころがす",
                "meaning_vi": "cuộn",
                "meaning_en": "roll",
                "examples": [
                  {
                    "example_text": "ボーリングの球を転がしてピンを倒す。",
                    "furigana": "ボーリングの球（たま）ころたおす。",
                    "meaning_vi": "Lăn quả bóng bolling làm đổ đinh.",
                    "meaning_en": "Roll the bowling ball and knock down the pin."
                  }
                ],
                "lesson_number": 12
              },
              {
                "vocab": "傾く",
                "furigana": "かたむく",
                "meaning_vi": "Nghiêng",
                "meaning_en": "Lean",
                "examples": [
                  {
                    "example_text": "地震で併が傾いてしまった。",
                    "furigana": "地震（じしん）へいかたむいてしまった。",
                    "meaning_vi": "Động đất làm hàng rào đổ nghiêng.",
                    "meaning_en": "The earthquake has leaned into the co-op."
                  }
                ],
                "lesson_number": 12
              },
              {
                "vocab": "傾ける",
                "furigana": "かたむける",
                "meaning_vi": "Nghiêng",
                "meaning_en": "Lean",
                "examples": [
                  {
                    "example_text": "あの子は分からないことがあると、首を傾ける癖がある。",
                    "furigana": "あの子（こ）わくびかたむくせがある。",
                    "meaning_vi": "Cậu bé ấy cứ có chuyện không hiểu là lại có thói quen nghiêng đầu.",
                    "meaning_en": "That girl has a habit of tilting her head when there is something she doesn't understand."
                  }
                ],
                "lesson_number": 12
              },
              {
                "vocab": "裏返す",
                "furigana": "うらがえす",
                "meaning_vi": "Lật nó qua",
                "meaning_en": "Turn it over",
                "examples": [
                  {
                    "example_text": "「この書類を書き終わったら、裏返して机の上に置いてください」",
                    "furigana": "「この書類（しょるい）かおうらがえつくえうえおいてください」",
                    "meaning_vi": "Sau khi viết xong tài liệu hãy lật úp lại và đặt lên bàn nhé.",
                    "meaning_en": "\"When you've finished writing this document, turn it over and place it on your desk.\""
                  }
                ],
                "lesson_number": 12
              },
              {
                "vocab": "散らかる",
                "furigana": "ちらかる",
                "meaning_vi": "Nó lộn xộn",
                "meaning_en": "It is messy",
                "examples": [
                  {
                    "example_text": "兄の部屋はいつも散らかっている。",
                    "furigana": "兄（あに）へやちらかっている。",
                    "meaning_vi": "Phòng của anh trai lúc nào cũng vương vãi ra.",
                    "meaning_en": "My brother's room is always messy."
                  }
                ],
                "lesson_number": 12
              },
              {
                "vocab": "散らかす",
                "furigana": "ちらかす",
                "meaning_vi": "Phân tán",
                "meaning_en": "Dispersion",
                "examples": [
                  {
                    "example_text": "うちの子はすぐに部屋を散らかしてしまう。",
                    "furigana": "うちの子（こ）へやちらかしてしまう。",
                    "meaning_vi": "Con trai tôi hở chút là nó lại làm loạn cả phòng lên.",
                    "meaning_en": "My child quickly messes up the room."
                  }
                ],
                "lesson_number": 12
              },
              {
                "vocab": "散らばる",
                "furigana": "ちらばる",
                "meaning_vi": "Rải rác",
                "meaning_en": "Scattered",
                "examples": [
                  {
                    "example_text": "路上にゴミが散らばっている。",
                    "furigana": "路上（ろじょう）ちらばっている。",
                    "meaning_vi": "Rác vứt bừa bãi trên đường.",
                    "meaning_en": "Garbage is scattered all over the street."
                  }
                ],
                "lesson_number": 12
              },
              {
                "vocab": "刻む",
                "furigana": "きざむ",
                "meaning_vi": "Chặt",
                "meaning_en": "Cut",
                "examples": [
                  {
                    "example_text": "キャベツを刻んでいためる。",
                    "furigana": "キャベツを刻（きざ）んでいためる。",
                    "meaning_vi": "Cắt nhỏ bắp cải và xào.",
                    "meaning_en": "Chop the cabbage and eat it."
                  }
                ],
                "lesson_number": 12
              },
              {
                "vocab": "挟まる",
                "furigana": "はさまる",
                "meaning_vi": "Nó bị mắc kẹt",
                "meaning_en": "It is stuck",
                "examples": [
                  {
                    "example_text": "コートは電車のドアに挟まって抜けない。",
                    "furigana": "コートは電車（でんしゃ）はさぬけない。",
                    "meaning_vi": "Áo khoác bị kẹt vào cửa của xe điện không rút ra được.",
                    "meaning_en": "The coat is stuck in the train door and cannot be removed."
                  }
                ],
                "lesson_number": 12
              },
              {
                "vocab": "挟む",
                "furigana": "はさむ",
                "meaning_vi": "Pinch",
                "meaning_en": "Pinch",
                "examples": [
                  {
                    "example_text": "「電車のドアに挟まれないようご注意ください」",
                    "furigana": "「電車（でんしゃ）はさちゅういください」",
                    "meaning_vi": "Chú ý không để bị kẹp vào cửa tàu điện.",
                    "meaning_en": "\"Please be careful not to get caught by the train door.\""
                  }
                ],
                "lesson_number": 12
              },
              {
                "vocab": "潰れる",
                "furigana": "つぶれる",
                "meaning_vi": "Nó sẽ sụp đổ",
                "meaning_en": "It will collapse",
                "examples": [
                  {
                    "example_text": "箱が落ちて、中のケースがつぶれてしまった。",
                    "furigana": "箱（はこ）おなかのケースがつぶれてしまった。",
                    "meaning_vi": "Cái hộp bị rơi xuống, bánh bên trong hộp bị hỏng.",
                    "meaning_en": "The box fell down and the case inside was crushed."
                  }
                ],
                "lesson_number": 12
              },
              {
                "vocab": "潰す",
                "furigana": "つぶす",
                "meaning_vi": "Tôi sẽ nghiền nát nó",
                "meaning_en": "I will crush it",
                "examples": [
                  {
                    "example_text": "ゆでたジャガイモをつぶしてサラダを作った。",
                    "furigana": "ゆでたジャガイモをつぶしてサラダを作（つく）った。",
                    "meaning_vi": "Đập nát khoai đã luộc để làm salad.",
                    "meaning_en": "I made a salad by crushing boiled potatoes."
                  }
                ],
                "lesson_number": 12
              },
              {
                "vocab": "凹む",
                "furigana": "へこむ",
                "meaning_vi": "Trầm cảm",
                "meaning_en": "Depression",
                "examples": [
                  {
                    "example_text": "木にぶつかって車がへこんだ。",
                    "furigana": "木（き）くるまがへこんだ。",
                    "meaning_vi": "Tông vào cây, xe ô tô bị lõm.",
                    "meaning_en": "The car dented as it hit a tree."
                  }
                ],
                "lesson_number": 12
              },
              {
                "vocab": "解ける",
                "furigana": "とける",
                "meaning_vi": "Nó có thể được giải quyết",
                "meaning_en": "It can be resolved",
                "examples": [
                  {
                    "example_text": "くつのひもがほどけた。",
                    "furigana": "くつのひもがほどけた。",
                    "meaning_vi": "Cởi dây giày.",
                    "meaning_en": "The strings of the shoes unraveled."
                  }
                ],
                "lesson_number": 13
              },
              {
                "vocab": "解く",
                "furigana": "とく",
                "meaning_vi": "gỡ rối",
                "meaning_en": "troubleshoot",
                "examples": [
                  {
                    "example_text": "荷物のひもをほどいて中の物を出す。",
                    "furigana": "荷物（にもつ）なかものだす。",
                    "meaning_vi": "Tháo dây buộc hành lí và lấy đồ bên trong ra.",
                    "meaning_en": "Unlock the luggage string and take out the items inside."
                  }
                ],
                "lesson_number": 13
              },
              {
                "vocab": "枯れる",
                "furigana": "かれる",
                "meaning_vi": "Nó héo",
                "meaning_en": "It wilted",
                "examples": [
                  {
                    "example_text": "害虫のせいで、木が枯れてしまった。",
                    "furigana": "害虫（がいちゅう）きかれてしまった。",
                    "meaning_vi": "Do côn trùng gây hại mà cây bị héo úa.",
                    "meaning_en": "The pests have left the tree dead."
                  }
                ],
                "lesson_number": 13
              },
              {
                "vocab": "枯らす",
                "furigana": "からす",
                "meaning_vi": "Khô",
                "meaning_en": "Dried",
                "examples": [
                  {
                    "example_text": "病気が発生し、多くの木が枯らしてしまった。",
                    "furigana": "病気（びょうき）はっせいおおきからしてしまった。",
                    "meaning_vi": "Do dịch bệnh phát sinh nên nhiều cây bị héo.",
                    "meaning_en": "A disease has occurred, and many trees have died down."
                  }
                ],
                "lesson_number": 13
              },
              {
                "vocab": "傷む",
                "furigana": "いたむ",
                "meaning_vi": "Hư hại",
                "meaning_en": "Damage",
                "examples": [
                  {
                    "example_text": "生魚は傷みやすいから、早く食べたほうがいい。",
                    "furigana": "生魚（なまざかな）いたはやたべたほうがいい。",
                    "meaning_vi": "Cá tươi dễ bị hỏng nên ăn nhanh nhé.",
                    "meaning_en": "Raw fish is easily damaged, so it's best to eat it early."
                  }
                ],
                "lesson_number": 13
              },
              {
                "vocab": "湿る",
                "furigana": "しめる",
                "meaning_vi": "Ẩm",
                "meaning_en": "Warm",
                "examples": [
                  {
                    "example_text": "朝干した洗濯物がまだ湿っている。",
                    "furigana": "朝（あさ）ほせんたくものしめっている。",
                    "meaning_vi": "Đồ phơi buổi sáng vẫn còn ẩm ướt.",
                    "meaning_en": "The laundry I hanged in the morning was still damp."
                  }
                ],
                "lesson_number": 13
              },
              {
                "vocab": "凍る",
                "furigana": "こおる",
                "meaning_vi": "Đông cứng",
                "meaning_en": "Frozen",
                "examples": [
                  {
                    "example_text": "水が凍る。",
                    "furigana": "水（みず）こおる。",
                    "meaning_vi": "Nước đông đá.",
                    "meaning_en": "The water freezes."
                  }
                ],
                "lesson_number": 13
              },
              {
                "vocab": "震える",
                "furigana": "ふるえる",
                "meaning_vi": "Tôi run rẩy",
                "meaning_en": "I trembled",
                "examples": [
                  {
                    "example_text": "寒さ｛に/で｝手足がぶるぶる震える。",
                    "furigana": "寒（さむ）てあしふるえる。",
                    "meaning_vi": "Do lạnh nên chân tay run cầm cập.",
                    "meaning_en": "The cold is {in/} my arms and legs tremble."
                  }
                ],
                "lesson_number": 13
              },
              {
                "vocab": "輝く",
                "furigana": "かがやく",
                "meaning_vi": "Chiếu sáng",
                "meaning_en": "Illumination",
                "examples": [
                  {
                    "example_text": "空に太陽が輝いている。",
                    "furigana": "空（そら）たいようかがやいている。",
                    "meaning_vi": "Mặt trời chiếu sáng trên bầu trời.",
                    "meaning_en": "The sun is shining in the sky."
                  }
                ],
                "lesson_number": 13
              },
              {
                "vocab": "溢れる",
                "furigana": "あふれる",
                "meaning_vi": "Tràn",
                "meaning_en": "Overflow",
                "examples": [
                  {
                    "example_text": "大雨で川の水があふれた。",
                    "furigana": "大雨（おおあめ）かわみずがあふれた。",
                    "meaning_vi": "Do mưa lớn nên sông đầy nước.",
                    "meaning_en": "Heavy rain flooded the river."
                  }
                ],
                "lesson_number": 13
              },
              {
                "vocab": "余る",
                "furigana": "あまる",
                "meaning_vi": "Có thêm",
                "meaning_en": "Extra",
                "examples": [
                  {
                    "example_text": "作りすぎて料理が余ってしまった。",
                    "furigana": "作（つく）りょうりあまってしまった。",
                    "meaning_vi": "Nấu ăn quá nhiều nên thức ăn bị dư thừa.",
                    "meaning_en": "I cooked too much and had leftover food."
                  }
                ],
                "lesson_number": 13
              },
              {
                "vocab": "目立つ",
                "furigana": "めだつ",
                "meaning_vi": "Nổi bật",
                "meaning_en": "Outstanding",
                "examples": [
                  {
                    "example_text": "彼女は背が高いので目立つだ。",
                    "furigana": "彼女（かのじょ）せたかめだつだ。",
                    "meaning_vi": "Cô ấy cao nên nổi bật.",
                    "meaning_en": "She is tall so she stands out."
                  }
                ],
                "lesson_number": 13
              },
              {
                "vocab": "見下ろす",
                "furigana": "みおろす",
                "meaning_vi": "Nhìn xuống",
                "meaning_en": "Look down",
                "examples": [
                  {
                    "example_text": "このビルの屋上から町が見下ろせる。",
                    "furigana": "このビルの屋上（おくじょう）まちみおろせる。",
                    "meaning_vi": "Từ trần nhà của tòa nhà này nhìn xuống sẽ thấy được thành phố.",
                    "meaning_en": "You can see the town from the rooftop of this building."
                  }
                ],
                "lesson_number": 13
              },
              {
                "vocab": "戦う・闘う",
                "furigana": "たたかう・たたかう",
                "meaning_vi": "Chiến đấu/chiến đấu",
                "meaning_en": "Fighting/fighting",
                "examples": [
                  {
                    "example_text": "国と国とが領土をめぐって戦う。",
                    "furigana": "国（くに）くにりょうどたたかう。",
                    "meaning_vi": "Các nước gây chiến tranh quay quanh vấn đề lãnh thổ.",
                    "meaning_en": "Countries fight over territory."
                  }
                ],
                "lesson_number": 13
              },
              {
                "vocab": "敗れる",
                "furigana": "やぶれる",
                "meaning_vi": "Tôi sẽ thua",
                "meaning_en": "I will lose",
                "examples": [
                  {
                    "example_text": "試合に敗れる。",
                    "furigana": "試合（しあい）やぶれる。",
                    "meaning_vi": "Bị thua trận đấu.",
                    "meaning_en": "Losing the match."
                  }
                ],
                "lesson_number": 13
              },
              {
                "vocab": "逃げる",
                "furigana": "にげる",
                "meaning_vi": "chạy đi",
                "meaning_en": "run away",
                "examples": [
                  {
                    "example_text": "犯人は海外に逃げたらしい。",
                    "furigana": "犯人（はんにん）かいがいにげたらしい。",
                    "meaning_vi": "Tội phạm đã trốn ra nước ngoài.",
                    "meaning_en": "Apparently the perpetrator fled abroad."
                  }
                ],
                "lesson_number": 13
              },
              {
                "vocab": "逃がす",
                "furigana": "にがす",
                "meaning_vi": "Hãy để nó biến mất",
                "meaning_en": "Let it disappear",
                "examples": [
                  {
                    "example_text": "魚を釣ったが、小さいので逃がしてやった。",
                    "furigana": "魚（さかな）つちいにがしてやった。",
                    "meaning_vi": "Tôi câu cá nhưng nhỏ nên đã thả đi.",
                    "meaning_en": "I caught some fish, but it was small so I let it go."
                  }
                ],
                "lesson_number": 14
              },
              {
                "vocab": "戻る",
                "furigana": "もどる",
                "meaning_vi": "trở lại",
                "meaning_en": "return",
                "examples": [
                  {
                    "example_text": "忘れ物をしたのに気づいて、家に戻った。",
                    "furigana": "忘（わす）ものきいえもどった。",
                    "meaning_vi": "Nhận ra quên đồ nên đã quay lại nhà.",
                    "meaning_en": "I realized I had forgotten something and went back home."
                  }
                ],
                "lesson_number": 14
              },
              {
                "vocab": "戻す",
                "furigana": "もどす",
                "meaning_vi": "trở lại",
                "meaning_en": "return",
                "examples": [
                  {
                    "example_text": "「物は元にあった場所に戻しなさい」",
                    "furigana": "「物（もの）もとばしょもどしなさい」",
                    "meaning_vi": "Hãy đem đồ trở lại chỗ cũ.",
                    "meaning_en": "\"Return things back to where they were.\""
                  }
                ],
                "lesson_number": 14
              },
              {
                "vocab": "嵌まる",
                "furigana": "はまる",
                "meaning_vi": "Bị mắc câu",
                "meaning_en": "Caught",
                "examples": [
                  {
                    "example_text": "彼の薬指には指輪がはまっていた。",
                    "furigana": "彼（かれ）くすりゆびゆびわがはまっていた。",
                    "meaning_vi": "Ngón áp út của anh ấy bị kẹp nhẫn (không rút ra được).",
                    "meaning_en": "His ring finger was fitted with a ring."
                  }
                ],
                "lesson_number": 14
              },
              {
                "vocab": "嵌める",
                "furigana": "はめる",
                "meaning_vi": "Phù hợp",
                "meaning_en": "Fit",
                "examples": [
                  {
                    "example_text": "寒いので、上着のボタンを全部はめた。",
                    "furigana": "寒（さむ）うわぎぜんぶはめた。",
                    "meaning_vi": "Vì lạnh nên tôi gài khít những nút áo khoác.",
                    "meaning_en": "It was cold so I put all the buttons on my jacket."
                  }
                ],
                "lesson_number": 14
              },
              {
                "vocab": "扱う",
                "furigana": "あつかう",
                "meaning_vi": "xử lý",
                "meaning_en": "handle",
                "examples": [
                  {
                    "example_text": "「壊れやすい物ですから、丁寧に扱ってください」",
                    "furigana": "「壊（こわ）ものていねいあつかってください」",
                    "meaning_vi": "Vì đồ dễ vỡ nên hãy nhẹ nhàng.",
                    "meaning_en": "\"It's a fragile item, so please handle it with care.\""
                  }
                ],
                "lesson_number": 14
              },
              {
                "vocab": "関わる",
                "furigana": "かかわる",
                "meaning_vi": "Tôi tham gia",
                "meaning_en": "I join",
                "examples": [
                  {
                    "example_text": "将来は子供の教育にかかわる仕事がしたい。",
                    "furigana": "将来（しょうらい）こどもきょういくしごとがしたい。",
                    "meaning_vi": "Tương lai tôi muốn làm công việc liên quan đến giáo dục trẻ em.",
                    "meaning_en": "In the future, I would like to work involving children's education."
                  }
                ],
                "lesson_number": 14
              },
              {
                "vocab": "目指す",
                "furigana": "めざす",
                "meaning_vi": "mục tiêu",
                "meaning_en": "target",
                "examples": [
                  {
                    "example_text": "選手たちはゴールを目指して走り出した。",
                    "furigana": "選手（せんしゅ）めざはしだした。",
                    "meaning_vi": "Các cầu thủ nhắm vào quả bóng và chạy.",
                    "meaning_en": "The players started running towards the goal."
                  }
                ],
                "lesson_number": 14
              },
              {
                "vocab": "立つ・発つ",
                "furigana": "たつ・たつ",
                "meaning_vi": "Đứng và rời đi",
                "meaning_en": "Stand and leave",
                "examples": [
                  {
                    "example_text": "8月末に海外赴任でヨーロッパへ立つ予定だ。",
                    "furigana": "8月（がつ）まつかいがいふにんたよていだ。",
                    "meaning_vi": "Theo kế hoạch đi châu Âu nhận chức vào cuối tháng 8.",
                    "meaning_en": "He is scheduled to go to Europe on an overseas assignment at the end of August."
                  }
                ],
                "lesson_number": 14
              },
              {
                "vocab": "迎える",
                "furigana": "むかえる",
                "meaning_vi": "Chào mừng",
                "meaning_en": "Welcome",
                "examples": [
                  {
                    "example_text": "あの店はいつも客を笑顔で迎える。",
                    "furigana": "あの店（みせ）きゃくえがおむかえる。",
                    "meaning_vi": "Cửa hàng đó lúc não niềm nở đón chào khách.",
                    "meaning_en": "That shop always welcomes customers with a smile."
                  }
                ],
                "lesson_number": 14
              },
              {
                "vocab": "持てる",
                "furigana": "もてる",
                "meaning_vi": "Tôi có thể có nó",
                "meaning_en": "I can have it",
                "examples": [
                  {
                    "example_text": "「持てる力を十分に発揮してください」",
                    "furigana": "「持（も）ちからじゅうぶんはっきしてください」",
                    "meaning_vi": "Hãy phát hết huy khả năng của mình đang có.",
                    "meaning_en": "\"Please show your strength to the fullest.\""
                  }
                ],
                "lesson_number": 14
              },
              {
                "vocab": "例える",
                "furigana": "たとえる",
                "meaning_vi": "so sánh",
                "meaning_en": "compare",
                "examples": [
                  {
                    "example_text": "人生はよく旅にたとえられる。",
                    "furigana": "人生（じんせい）たびにたとえられる。",
                    "meaning_vi": "Cuộc sống con người được ví như những chuyến đi.",
                    "meaning_en": "Life is often likened to travel."
                  }
                ],
                "lesson_number": 14
              },
              {
                "vocab": "努める",
                "furigana": "つとめる",
                "meaning_vi": "Tôi sẽ thử",
                "meaning_en": "I will try",
                "examples": [
                  {
                    "example_text": "できるかぎり問題の解決に努めたい。",
                    "furigana": "できるかぎり問題（もんだい）かいけつつとめたい。",
                    "meaning_vi": "Nỗ lực để giải quyết vấn đề.",
                    "meaning_en": "I would like to try to resolve the problems as much as possible."
                  }
                ],
                "lesson_number": 15
              },
              {
                "vocab": "務まる",
                "furigana": "つとまる",
                "meaning_vi": "Tôi sẽ làm điều đó",
                "meaning_en": "I will do that",
                "examples": [
                  {
                    "example_text": "こんな難しい役が私に務まるだろうか。",
                    "furigana": "こんな難（むずか）やくわたしつとまるだろうか。",
                    "meaning_vi": "Một nhiệm vụ khó khăn như thế mà lại giao cho tôi à.",
                    "meaning_en": "I wonder if I could play such a difficult role."
                  }
                ],
                "lesson_number": 15
              },
              {
                "vocab": "務める",
                "furigana": "つとめる",
                "meaning_vi": "phục vụ",
                "meaning_en": "serve",
                "examples": [
                  {
                    "example_text": "会社で議長を務めた。",
                    "furigana": "会社（かいしゃ）ぎちょうつとめた。",
                    "meaning_vi": "Tôi làm trưởng hội nghị ở công ty.",
                    "meaning_en": "He served as chairman of the company."
                  }
                ],
                "lesson_number": 15
              },
              {
                "vocab": "取り消す",
                "furigana": "とりけす",
                "meaning_vi": "Hủy bỏ",
                "meaning_en": "Cancel",
                "examples": [
                  {
                    "example_text": "仕事が忙しくなり、飛行機の予約を取り消した。",
                    "furigana": "仕事（しごと）いそがひこうきよやくとけした。",
                    "meaning_vi": "Công việc trở nên bận rộn nên tôi đã hủy chuyến bay.",
                    "meaning_en": "I got busy with work so I canceled my flight booking."
                  }
                ],
                "lesson_number": 15
              },
              {
                "vocab": "終える",
                "furigana": "おえる",
                "meaning_vi": "Hoàn thành",
                "meaning_en": "Complete",
                "examples": [
                  {
                    "example_text": "今日は6時までに仕事を終えて退社するつもりだ。",
                    "furigana": "今日（きょう）じしごとおたいしゃするつもりだ。",
                    "meaning_vi": "Tôi dự định hôm nay 6 giờ hoàn thành công việc và rời công ty.",
                    "meaning_en": "I plan to finish work by 6am today and leave work."
                  }
                ],
                "lesson_number": 15
              },
              {
                "vocab": "呼びかける",
                "furigana": "よびかける",
                "meaning_vi": "Gọi",
                "meaning_en": "Call",
                "examples": [
                  {
                    "example_text": "意義不明の母に呼び掛けた。",
                    "furigana": "意義（いぎ）ふめいははよかけた。",
                    "meaning_vi": "Gọi người mẹ đang bất tỉnh.",
                    "meaning_en": "I called out to my mother, who had no meaning."
                  }
                ],
                "lesson_number": 15
              },
              {
                "vocab": "呼び出す",
                "furigana": "よびだす",
                "meaning_vi": "gọi",
                "meaning_en": "call",
                "examples": [
                  {
                    "example_text": "学費を払っていなかったので、事務局に呼び出された。",
                    "furigana": "学費（がくひ）はらじむきょくよだされた。",
                    "meaning_vi": "Vì không đóng học phí nên bị gọi lên văn phòng.",
                    "meaning_en": "I had not paid my tuition, so I was called to the secretariat."
                  }
                ],
                "lesson_number": 15
              },
              {
                "vocab": "有難い",
                "furigana": "ありがたい",
                "meaning_vi": "Cảm ơn",
                "meaning_en": "Thank",
                "examples": [
                  {
                    "example_text": "「病気の私の元へ来てくれたあなたの気持ちがありがたい」",
                    "furigana": "「病気（びょうき）わたしもとききもちがありがたい」",
                    "meaning_vi": "Cảm ơn mọi người đã đến thăm khi tôi nằm viện.",
                    "meaning_en": "\"I'm grateful for your feelings for coming to me, who is sick.\""
                  }
                ],
                "lesson_number": 16
              },
              {
                "vocab": "申し訳ない",
                "furigana": "もうしわけない",
                "meaning_vi": "Lấy làm tiếc",
                "meaning_en": "So sorry",
                "examples": [
                  {
                    "example_text": "「ご迷惑をおかけして、申し訳ありませんでした」",
                    "furigana": "「ご迷惑（めいわく）もうわけありませんでした」",
                    "meaning_vi": "Thành thật xin lỗi vì đã làm phiền.",
                    "meaning_en": "\"We apologize for the inconvenience.\""
                  }
                ],
                "lesson_number": 16
              },
              {
                "vocab": "目出度い",
                "furigana": "めでたい",
                "meaning_vi": "Trông tuyệt vời",
                "meaning_en": "Look great",
                "examples": [
                  {
                    "example_text": "子供たちの大学の合格や結婚など、今年はめでたいことが多かった。",
                    "furigana": "子供（こども）だいがくごうかくけっこんことしおおかった。",
                    "meaning_vi": "Bon trẻ đứa đỗ đại học, đứa kết hôn, năm nay thật nhiều chuyện vui.",
                    "meaning_en": "This year there were many happy things, such as children passing university entrance exams and getting married."
                  }
                ],
                "lesson_number": 16
              },
              {
                "vocab": "幸いな",
                "furigana": "さいわいな",
                "meaning_vi": "Tôi may mắn",
                "meaning_en": "I'm lucky",
                "examples": [
                  {
                    "example_text": "いい友人に恵まれて幸いだ。",
                    "furigana": "いい友人（ゆうじん）めぐさいわいだ。",
                    "meaning_vi": "Được bạn bè yêu mến thật vui.",
                    "meaning_en": "I'm blessed to have good friends."
                  }
                ],
                "lesson_number": 16
              },
              {
                "vocab": "恋しい",
                "furigana": "こいしい",
                "meaning_vi": "Tôi nhớ nó",
                "meaning_en": "I miss it",
                "examples": [
                  {
                    "example_text": "｛国の両親/恋人/ふるさと…｝が恋しい。",
                    "furigana": "｛国（くに）りょうしんこいびとこいしい。",
                    "meaning_vi": "Nhớ cha mẹ ở quê/ nhớ người yêu/ nhớ quê hương…",
                    "meaning_en": "I miss the parents/lovers/hometown in the country..."
                  }
                ],
                "lesson_number": 16
              },
              {
                "vocab": "懐かしい",
                "furigana": "なつかしい",
                "meaning_vi": "hoài cổ",
                "meaning_en": "nostalgic",
                "examples": [
                  {
                    "example_text": "子供のころが懐かしい。",
                    "furigana": "子供（こども）なつかしい。",
                    "meaning_vi": "Nhớ thời còn trẻ con.",
                    "meaning_en": "I miss my childhood."
                  }
                ],
                "lesson_number": 16
              },
              {
                "vocab": "幼い",
                "furigana": "おさない",
                "meaning_vi": "Trẻ",
                "meaning_en": "Young",
                "examples": [
                  {
                    "example_text": "幼い子供が遊んでいる。",
                    "furigana": "幼（おさな）こどもあそんでいる。",
                    "meaning_vi": "Những đứa trẻ đang chơi.",
                    "meaning_en": "Young children are playing."
                  }
                ],
                "lesson_number": 16
              },
              {
                "vocab": "心細い",
                "furigana": "こころぼそい",
                "meaning_vi": "Trái tim mỏng manh",
                "meaning_en": "The heart is fragile",
                "examples": [
                  {
                    "example_text": "始めて来日した時は、　言葉もわからず知り合いもなく、とても心細かった。",
                    "furigana": "始（はじ）らいにちときことばしあこころぼそかった。",
                    "meaning_vi": "Lúc mới sang Nhật, không hiểu tiếng, bạn bè cũng không có thật cô đơn.",
                    "meaning_en": "When I first came to Japan, I was very saddened, not even able to understand the language or acquaintances."
                  }
                ],
                "lesson_number": 16
              },
              {
                "vocab": "可哀想な",
                "furigana": "かわいそうな",
                "meaning_vi": "Nghèo",
                "meaning_en": "Poor",
                "examples": [
                  {
                    "example_text": "子供を叱ったが、泣いているのを見てかわいそうになった。",
                    "furigana": "子供（こども）しかなみてかわいそうになった。",
                    "meaning_vi": "Mặc dù mắng con, nhưng thấy nó khóc lại thấy tội nghiệp.",
                    "meaning_en": "He scolded the child, but he felt sorry for seeing him crying."
                  }
                ],
                "lesson_number": 16
              },
              {
                "vocab": "気の毒な",
                "furigana": "きのどくな",
                "meaning_vi": "Tôi cảm thấy tiếc cho bạn",
                "meaning_en": "I feel sorry for you",
                "examples": [
                  {
                    "example_text": "「彼女、先日お父さんを事故で亡くされたそうだよ」「お気の毒に…」",
                    "furigana": "「彼女（かのじょ）せんじつとうじこなきどくに…」",
                    "meaning_vi": "\"Nghe nói bố cô ấy bị tai nạn giao thông đã qua đời hôm trước rồi\"\"Thật đáng thương…\"",
                    "meaning_en": "\"She apparently lost her dad in an accident the other day.\" \"I'm sorry...\""
                  }
                ],
                "lesson_number": 16
              },
              {
                "vocab": "貧しい",
                "furigana": "まずしい",
                "meaning_vi": "nghèo",
                "meaning_en": "poor",
                "examples": [
                  {
                    "example_text": "私は貧しい家に育った。",
                    "furigana": "私（わたし）まずいえそだった。",
                    "meaning_vi": "Tôi được nuôi dưỡng trong gia đình nghèo.",
                    "meaning_en": "I grew up in a poor family."
                  }
                ],
                "lesson_number": 16
              },
              {
                "vocab": "惜しい",
                "furigana": "おしい",
                "meaning_vi": "Thật là xấu hổ",
                "meaning_en": "What a shame",
                "examples": [
                  {
                    "example_text": "後　一つ問題ができていれば合格だったのに。惜しかった。",
                    "furigana": "後（あと）ひともんだいごうかくおしかった。",
                    "meaning_vi": "Chỉ cần thêm một câu nữa là đậu rồi mà lại …tiếc quá đi.",
                    "meaning_en": "Also, if I had done one problem, I would have passed. It was a shame."
                  }
                ],
                "lesson_number": 16
              },
              {
                "vocab": "仕方(が)ない",
                "furigana": "しかた(が)ない",
                "meaning_vi": "Tôi không thể giúp nó",
                "meaning_en": "I can't help it",
                "examples": [
                  {
                    "example_text": "借金を返すには、休日も働くよりほかに仕方ない。",
                    "furigana": "借金（しゃっきん）かえきゅうじつはたらしかたない。",
                    "meaning_vi": "Để trả tiền vay, không còn cách nào khác là đi làm dù ngày nghỉ.",
                    "meaning_en": "There's no choice but to pay off my debts rather than working on my days off."
                  }
                ],
                "lesson_number": 17
              },
              {
                "vocab": "止むを得ない",
                "furigana": "やむをえない",
                "meaning_vi": "Nó không thể tránh khỏi",
                "meaning_en": "It cannot be avoided",
                "examples": [
                  {
                    "example_text": "この嵐では休校もやむを得ない。",
                    "furigana": "この嵐（あらし）きゅうこうえない。",
                    "meaning_vi": "Cơn sấm sét thế này thì không còn cách nào là phải thị học thôi.",
                    "meaning_en": "School closures are unavoidable in this storm."
                  }
                ],
                "lesson_number": 17
              },
              {
                "vocab": "面倒臭い",
                "furigana": "めんどうくさい",
                "meaning_vi": "Nó là rắc rối",
                "meaning_en": "It is trouble",
                "examples": [
                  {
                    "example_text": "ゴミの分別は面倒くさいが、環境のためには仕方ない。",
                    "furigana": "ゴミの分別（ぶんべつ）めんどうかんきょうしかたない。",
                    "meaning_vi": "Phân loại rác thật rắc rối nhưng vì môi trường nên không còn cách nào khác.",
                    "meaning_en": "Sorting garbage can be a hassle, but it can't be helped for the environment."
                  }
                ],
                "lesson_number": 17
              },
              {
                "vocab": "しつこい",
                "furigana": "しつこい",
                "meaning_vi": "Ở lại",
                "meaning_en": "Stay",
                "examples": [
                  {
                    "example_text": "店に店員にしつこく進められて困った。",
                    "furigana": "店（みせ）てんいんすすこまった。",
                    "meaning_vi": "Ở cửa hàng nhân viên cứ giới thiệu mãi thật là rắc rối.",
                    "meaning_en": "I was troubled by the store clerk being persistent in the store."
                  }
                ],
                "lesson_number": 17
              },
              {
                "vocab": "諄い",
                "furigana": "くどい",
                "meaning_vi": "Thường xuyên",
                "meaning_en": "Frequent",
                "examples": [
                  {
                    "example_text": "あの先生の注意はいつもくどくてうんざりする。",
                    "furigana": "あの先生（せんせい）ちゅういはいつもくどくてうんざりする。",
                    "meaning_vi": "Nhắc nhở của cô giáo lúc nào cũng dài dòng thật là chán.",
                    "meaning_en": "I'm always tired of that teacher's warning."
                  }
                ],
                "lesson_number": 17
              },
              {
                "vocab": "煙い",
                "furigana": "けむりい",
                "meaning_vi": "khói",
                "meaning_en": "smoke",
                "examples": [
                  {
                    "example_text": "煙いと思ったら、魚が焦げていた。",
                    "furigana": "煙（けむ）おもさかなこげていた。",
                    "meaning_vi": "Tưởng là khói ai ngờ cá cháy.",
                    "meaning_en": "Just as I thought it was smokey, the fish was burning."
                  }
                ],
                "lesson_number": 17
              },
              {
                "vocab": "邪魔な",
                "furigana": "じゃまな",
                "meaning_vi": "Thật khó chịu",
                "meaning_en": "So annoyed",
                "examples": [
                  {
                    "example_text": "仕事をするため、まず机の上の邪魔な物を片付けた。",
                    "furigana": "仕事（しごと）つくえうえじゃまものかたづけた。",
                    "meaning_vi": "Để làm công việc nên tôi dẹp những thứ vướng víu trên bàn.",
                    "meaning_en": "To work, I first put away the annoying things on my desk."
                  }
                ],
                "lesson_number": 17
              },
              {
                "vocab": "煩い",
                "furigana": "わずらい",
                "meaning_vi": "Bạn đang làm phiền tôi",
                "meaning_en": "You are bothering me",
                "examples": [
                  {
                    "example_text": "「テレビの音がうるさいから、ちょっと小さくして」",
                    "furigana": "「テレビの音（おと）ちいさくして」",
                    "meaning_vi": "Âm thanh tivi ồn ào nên vặn nhỏ chút đi.",
                    "meaning_en": "\"The TV is loud, so please make it a little smaller.\""
                  }
                ],
                "lesson_number": 17
              },
              {
                "vocab": "騒々しい",
                "furigana": "々そうぞうしい",
                "meaning_vi": "ồn ào",
                "meaning_en": "noisy",
                "examples": [
                  {
                    "example_text": "先生が怒ったら、騒々しかった教室は静かになった。",
                    "furigana": "先生（せんせい）おこそうぞうきょうしつしずかになった。",
                    "meaning_vi": "Sau khi cô giáo tức giận lên, lớp ồn trào trở nên im bặt.",
                    "meaning_en": "When the teacher got angry, the noisy classroom became quiet."
                  }
                ],
                "lesson_number": 17
              },
              {
                "vocab": "慌ただしい",
                "furigana": "あわただしい",
                "meaning_vi": "Nó rất bận rộn",
                "meaning_en": "It is very busy",
                "examples": [
                  {
                    "example_text": "今日は急な用事や来客が重なって、慌ただしい一日だった。",
                    "furigana": "今日（きょう）きゅうようじらいきゃくかさあわいちにちだった。",
                    "meaning_vi": "Hôm nay vừa có việc gấp vừa trùng lịch khách đến thăm thật là một ngày bận rộn.",
                    "meaning_en": "Today was a busy day with sudden errands and guests alike."
                  }
                ],
                "lesson_number": 17
              },
              {
                "vocab": "そそっかしい",
                "furigana": "そそっかしい",
                "meaning_vi": "tôi hiểu rồi",
                "meaning_en": "I got it",
                "examples": [
                  {
                    "example_text": "片方ずつ違った靴下をはくなんて、そそっかしい人だ。",
                    "furigana": "片方（かたほう）ちがくつしたひとだ。",
                    "meaning_vi": "Mang mỗi bên mỗi chiếc giày thật là người lơ đễnh mà.",
                    "meaning_en": "He's a bit insane to wear different socks at one by one."
                  }
                ],
                "lesson_number": 17
              },
              {
                "vocab": "思いがけない",
                "furigana": "おもいがけない",
                "meaning_vi": "Không ngờ tới",
                "meaning_en": "Unexpectedly",
                "examples": [
                  {
                    "example_text": "道で思いがけない人に会った。",
                    "furigana": "道（みち）おもひとあった。",
                    "meaning_vi": "Trên đường tôi đã gặp người không ngờ đến.",
                    "meaning_en": "I met an unexpected person on the road."
                  }
                ],
                "lesson_number": 17
              },
              {
                "vocab": "何気ない",
                "furigana": "なにげない",
                "meaning_vi": "bình thường",
                "meaning_en": "Normal",
                "examples": [
                  {
                    "example_text": "何気ない一言が、相手を傷つけることもある。",
                    "furigana": "何気（なにげ）ひとことあいてきずつけることもある。",
                    "meaning_vi": "Nói những lời không chủ ý ai ngờ làm tổn thương đối phương.",
                    "meaning_en": "A casual word can hurt someone."
                  }
                ],
                "lesson_number": 18
              },
              {
                "vocab": "とんでもない",
                "furigana": "とんでもない",
                "meaning_vi": "không đời nào",
                "meaning_en": "No way",
                "examples": [
                  {
                    "example_text": "「このリンゴは3000円！とんでもない値段だ」",
                    "furigana": "「このリンゴは3000円（えん）ねだんだ」",
                    "meaning_vi": "Trái táo này mà 3000 yên á, không tin được.",
                    "meaning_en": "\"This apple is 3,000 yen! It's an incredible price.\""
                  }
                ],
                "lesson_number": 18
              },
              {
                "vocab": "下らない",
                "furigana": "くだらない",
                "meaning_vi": "Nó sẽ không đi xuống",
                "meaning_en": "It will not go down",
                "examples": [
                  {
                    "example_text": "「くだらないことばかり言ってないで、早く仕事をしろ」",
                    "furigana": "「くだらないことばかり言（い）はやしごとをしろ」",
                    "meaning_vi": "Đừng nói những điều vô nghĩa nữa, mau làm việc đi.",
                    "meaning_en": "\"Don't just say silly things, get work soon.\""
                  }
                ],
                "lesson_number": 18
              },
              {
                "vocab": "馬鹿馬鹿しい",
                "furigana": "ばかばかしい",
                "meaning_vi": "Thật là ngu ngốc",
                "meaning_en": "It is stupid",
                "examples": [
                  {
                    "example_text": "この番組はばかばかしいが、面白いのでつい見てしまう。",
                    "furigana": "この番組（ばんぐみ）おもしろみてしまう。",
                    "meaning_vi": "Chương trình này ngớ ngẩn nhưng mà thú vị nên lỡ xem luôn.",
                    "meaning_en": "This show is ridiculous, but it's so funny I can't help but watch it."
                  }
                ],
                "lesson_number": 18
              },
              {
                "vocab": "出鱈目な",
                "furigana": "でたらめな",
                "meaning_vi": "Vô lý",
                "meaning_en": "Unreasonable",
                "examples": [
                  {
                    "example_text": "テストで答えをでたらめに書いたら、偶然合っていた。",
                    "furigana": "テストで答（こた）かぐうぜんあっていた。",
                    "meaning_vi": "Tôi đánh rùa bài thi ai ngờ đúng.",
                    "meaning_en": "I wrote the answer casually on a test and it happened."
                  }
                ],
                "lesson_number": 18
              },
              {
                "vocab": "だらしない",
                "furigana": "だらしない",
                "meaning_vi": "Không cẩu thả",
                "meaning_en": "Sloppy",
                "examples": [
                  {
                    "example_text": "「暑いからと言って、そんなだらしない恰好をするな」",
                    "furigana": "「暑（あつ）いかっこうをするな」",
                    "meaning_vi": "Dù là nóng cũng không được ăn mặc phong cách lôi thôi như thế.",
                    "meaning_en": "\"Just because it's hot, don't wear such a sloppy look.\""
                  }
                ],
                "lesson_number": 18
              },
              {
                "vocab": "図々しい",
                "furigana": "々ずうずうしい",
                "meaning_vi": "bất lực",
                "meaning_en": "impotent",
                "examples": [
                  {
                    "example_text": "レジの列にずうずうしく割り込む人がいる。",
                    "furigana": "レジの列（れつ）わこひとがいる。",
                    "meaning_vi": "Ở quầy tính tiền có người vô liêm sỉ cắt ngang hàng.",
                    "meaning_en": "Some people thrust into the line at the register."
                  }
                ],
                "lesson_number": 18
              },
              {
                "vocab": "狡い",
                "furigana": "こすい",
                "meaning_vi": "xảo quyệt",
                "meaning_en": "cunning",
                "examples": [
                  {
                    "example_text": "うちの上司はずるくて、いつも部下の成果を自分の物にしてしまう。",
                    "furigana": "うちの上司（じょうし）ぶかせいかじぶんものにしてしまう。",
                    "meaning_vi": "Sếp tôi láu cá lắm, lúc nào cũng lấy thành quả của cấp dưới làm công cho mình.",
                    "meaning_en": "My boss is so unfair that he always makes the results of his subordinates his own."
                  }
                ],
                "lesson_number": 18
              },
              {
                "vocab": "憎らしい",
                "furigana": "にくらしい",
                "meaning_vi": "đáng ghét",
                "meaning_en": "obnoxious",
                "examples": [
                  {
                    "example_text": "わが子はかわいいが、反抗的な態度をとると憎らしいときもある。",
                    "furigana": "わが子（こ）はんこうてきたいどにくらしいときもある。",
                    "meaning_vi": "Con nhà tôi dễ thương nhưng nhiều khi cũng ghét thái độ ương bướng của nó.",
                    "meaning_en": "My child is cute, but sometimes it's disgusting when he acts rebellious."
                  }
                ],
                "lesson_number": 18
              },
              {
                "vocab": "憎い",
                "furigana": "にくい",
                "meaning_vi": "đáng ghét",
                "meaning_en": "obnoxious",
                "examples": [
                  {
                    "example_text": "父を殺した犯人が憎い。",
                    "furigana": "父（ちち）ころはんにんにくい。",
                    "meaning_vi": "Căm thù người đã giết bố.",
                    "meaning_en": "I hate the perpetrator who killed my father."
                  }
                ],
                "lesson_number": 18
              },
              {
                "vocab": "険しい",
                "furigana": "けわしい",
                "meaning_vi": "Nó khó khăn",
                "meaning_en": "It is difficult",
                "examples": [
                  {
                    "example_text": "険しい山道を登る。",
                    "furigana": "険（けわ）やまみちのぼる。",
                    "meaning_vi": "Leo núi dốc.",
                    "meaning_en": "Climbing the steep mountain path."
                  }
                ],
                "lesson_number": 18
              },
              {
                "vocab": "辛い",
                "furigana": "からい",
                "meaning_vi": "cứng",
                "meaning_en": "hard",
                "examples": [
                  {
                    "example_text": "子供はつらい経験を乗り越えた成長する。",
                    "furigana": "子供（こども）けいけんのこせいちょうする。",
                    "meaning_vi": "Những đứa trẻ sau khi trải qua những kinh nghiệm xương máu sẽ thành công.",
                    "meaning_en": "Children grow up after overcoming difficult experiences."
                  }
                ],
                "lesson_number": 19
              },
              {
                "vocab": "きつい",
                "furigana": "きつい",
                "meaning_vi": "chặt",
                "meaning_en": "cut",
                "examples": [
                  {
                    "example_text": "太ってしまってズボンがきつくなった。",
                    "furigana": "太（ふと）ってしまってズボンがきつくなった。",
                    "meaning_vi": "Mập lên nên quần bị chật.",
                    "meaning_en": "I've gained weight and my pants are tight."
                  }
                ],
                "lesson_number": 19
              },
              {
                "vocab": "緩い",
                "furigana": "ゆるい",
                "meaning_vi": "lỏng lẻo",
                "meaning_en": "loose",
                "examples": [
                  {
                    "example_text": "やせてスカートが緩くなった。",
                    "furigana": "やせてスカートが緩（ゆる）くなった。",
                    "meaning_vi": "Ốm hơn nên váy bị lỏng.",
                    "meaning_en": "I've become thinner and my skirt is looser."
                  }
                ],
                "lesson_number": 19
              },
              {
                "vocab": "鈍い",
                "furigana": "にぶい",
                "meaning_vi": "đần độn",
                "meaning_en": "dull",
                "examples": [
                  {
                    "example_text": "このナイフは切れ味が鈍い。",
                    "furigana": "このナイフは切（き）あじにぶい。",
                    "meaning_vi": "Con dao này đùi.",
                    "meaning_en": "This knife is not sharp."
                  }
                ],
                "lesson_number": 19
              },
              {
                "vocab": "鋭い",
                "furigana": "するどい",
                "meaning_vi": "sắc",
                "meaning_en": "sharp",
                "examples": [
                  {
                    "example_text": "熊は鋭い爪を持っている。",
                    "furigana": "熊（くま）するどつめもっている。",
                    "meaning_vi": "Con gấu có móng vuốt sắc.",
                    "meaning_en": "The bear has sharp claws."
                  }
                ],
                "lesson_number": 19
              },
              {
                "vocab": "荒い・粗い",
                "furigana": "あらい・あらい",
                "meaning_vi": "Thô/thô",
                "meaning_en": "Raw/rough",
                "examples": [
                  {
                    "example_text": "彼は気性が荒い。",
                    "furigana": "彼（かれ）きしょうあらい。",
                    "meaning_vi": "Tính khí anh ấy thô thiển.",
                    "meaning_en": "He has a rough temper."
                  }
                ],
                "lesson_number": 19
              },
              {
                "vocab": "強引な",
                "furigana": "ごういんな",
                "meaning_vi": "Mạnh mẽ",
                "meaning_en": "Strong",
                "examples": [
                  {
                    "example_text": "与党は国会で強引法案を通した。",
                    "furigana": "与党（よとう）こっかいごういんほうあんとおした。",
                    "meaning_vi": "Đảng cầm quyền đã thông qua luật án cưỡng bức tại quốc hội.",
                    "meaning_en": "The ruling party passed a forced bill in the Diet."
                  }
                ],
                "lesson_number": 19
              },
              {
                "vocab": "勝手な",
                "furigana": "かってな",
                "meaning_vi": "Nó có ích kỷ không",
                "meaning_en": "Is it selfish?",
                "examples": [
                  {
                    "example_text": "勝手な言動はほかの人の迷惑になる。",
                    "furigana": "勝手（かって）げんどうひとめいわくになる。",
                    "meaning_vi": "Lời nói và việc làm tự ý sẽ gây phiền toái cho người khác.",
                    "meaning_en": "Selfish words and actions can be a nuisance to others."
                  }
                ],
                "lesson_number": 19
              },
              {
                "vocab": "強気な",
                "furigana": "つよきな",
                "meaning_vi": "Mạnh",
                "meaning_en": "Strong",
                "examples": [
                  {
                    "example_text": "彼女は強気な性格で、時々周りと衝突する。",
                    "furigana": "彼女（かのじょ）つよきせいかくときどきまわしょうとつする。",
                    "meaning_vi": "Cô ấy tính tình mạnh mẽ nên thỉnh thoảng lại xung đột với người xung quanh.",
                    "meaning_en": "She has a strong personality and sometimes clashes with others."
                  }
                ],
                "lesson_number": 19
              },
              {
                "vocab": "頑固な",
                "furigana": "がんこな",
                "meaning_vi": "Bướng bỉnh",
                "meaning_en": "Stubborn",
                "examples": [
                  {
                    "example_text": "妹は頑固で、一度言い出したら後へ引かない。",
                    "furigana": "妹（いもうと）がんこいちどいだあとひかない。",
                    "meaning_vi": "Em trai tôi rất cứng đầu, một lần đã nói ra thì sẽ không rút lại.",
                    "meaning_en": "My sister is stubborn and once she starts to say it, she won't back."
                  }
                ],
                "lesson_number": 20
              },
              {
                "vocab": "過剰な",
                "furigana": "かじょうな",
                "meaning_vi": "Quá mức",
                "meaning_en": "Excess",
                "examples": [
                  {
                    "example_text": "塩分を過剰に取ると体に悪い。",
                    "furigana": "塩分（えんぶん）かじょうとからだわるい。",
                    "meaning_vi": "Nếu tăng quá lượng muối sẽ ảnh hưởng xấu đến cơ thể.",
                    "meaning_en": "Extracting too much salt is bad for your health."
                  }
                ],
                "lesson_number": 20
              },
              {
                "vocab": "重大な",
                "furigana": "じゅうだいな",
                "meaning_vi": "Nghiêm trọng",
                "meaning_en": "Serious",
                "examples": [
                  {
                    "example_text": "政治の混乱を招いた首相の責任は重大だ。",
                    "furigana": "政治（せいじ）こんらんまねしゅしょうせきにんじゅうだいだ。",
                    "meaning_vi": "Trách nhiệm của thủ tướng gây ra hỗn loạn chính chị là rất nghiêm trọng.",
                    "meaning_en": "The Prime Minister's responsibility for causing political turmoil is a serious one."
                  }
                ],
                "lesson_number": 20
              },
              {
                "vocab": "深刻な",
                "furigana": "しんこくな",
                "meaning_vi": "Nghiêm trọng",
                "meaning_en": "Serious",
                "examples": [
                  {
                    "example_text": "猛暑によって深刻な水不足が起きた。",
                    "furigana": "猛暑（もうしょ）しんこくすいぶそくおきた。",
                    "meaning_vi": "Nóng bức gây ra mùa hè thiếu nước nghiêm trọng.",
                    "meaning_en": "The extreme heat caused serious water shortages."
                  }
                ],
                "lesson_number": 20
              },
              {
                "vocab": "気楽な",
                "furigana": "きらくな",
                "meaning_vi": "Dễ",
                "meaning_en": "Easy",
                "examples": [
                  {
                    "example_text": "寮に住むより一人暮らしの方が、お金はかかるが気楽でいい。",
                    "furigana": "寮（りょう）すひとりぐほうかねきらくでいい。",
                    "meaning_vi": "Sống một mình thì tốn tiền hơn ở kí túc nhưng lại thoải mái hơn.",
                    "meaning_en": "Living alone is more expensive, but more comfortable than living in a dormitory."
                  }
                ],
                "lesson_number": 20
              },
              {
                "vocab": "安易な",
                "furigana": "あんいな",
                "meaning_vi": "Dễ",
                "meaning_en": "Easy",
                "examples": [
                  {
                    "example_text": "今だけ楽しければいいというのは安易な考え方だ。",
                    "furigana": "今（いま）たのあんいかんがかただ。",
                    "meaning_vi": "Chỉ cần bây giờ vui là tốt thì đó là suy nghĩ quá đơn giản.",
                    "meaning_en": "It's a simple idea to say that it's fine as long as you're just having fun now."
                  }
                ],
                "lesson_number": 20
              },
              {
                "vocab": "運",
                "furigana": "うん",
                "meaning_vi": "May mắn",
                "meaning_en": "Lucky",
                "examples": [
                  {
                    "example_text": "「中村さんは3回続けて宝くじに当たったそうだ。なんて運のいい人だろう」",
                    "furigana": "「中村（なかむら）かいつづたからあうんひとだろう」",
                    "meaning_vi": "Nghe nói anh Nakamura trúng vé số 3 lần liên tiếp đấy. Người gì mà số đỏ thế.",
                    "meaning_en": "\"It seems that Nakamura won the lottery three times in a row. What a lucky person.\""
                  }
                ],
                "lesson_number": 21
              },
              {
                "vocab": "勘",
                "furigana": "かん",
                "meaning_vi": "Trực giác",
                "meaning_en": "Intuition",
                "examples": [
                  {
                    "example_text": "母は勘が良くて、嘘をついてもすぐばれてしまう。",
                    "furigana": "母（はは）かんようそをついてもすぐばれてしまう。",
                    "meaning_vi": "Mẹ linh cảm rất tốt, nói dối là bị mẹ phát hiện ngay.",
                    "meaning_en": "My mother has a good intuition and even if she lies, she gets caught quickly."
                  }
                ],
                "lesson_number": 21
              },
              {
                "vocab": "感覚",
                "furigana": "かんかく",
                "meaning_vi": "cảm xúc",
                "meaning_en": "feeling",
                "examples": [
                  {
                    "example_text": "冷えて、手足の感覚がなくなってしまった。",
                    "furigana": "冷（ひ）てあしかんかくがなくなってしまった。",
                    "meaning_vi": "Do trời lạnh nên tay chân mất luôn cảm giác.",
                    "meaning_en": "It got cold and I lost the sense of my hands and feet."
                  }
                ],
                "lesson_number": 21
              },
              {
                "vocab": "神経",
                "furigana": "しんけい",
                "meaning_vi": "Thần kinh",
                "meaning_en": "Nerve",
                "examples": [
                  {
                    "example_text": "虫歯が痛いので神経を抜いた。",
                    "furigana": "虫歯（むしば）いたしんけいぬいた。",
                    "meaning_vi": "Răng sâu đau ảnh hưởng đến cả thần kinh.",
                    "meaning_en": "I had a tooth decay so I removed the nerve."
                  }
                ],
                "lesson_number": 21
              },
              {
                "vocab": "記憶",
                "furigana": "きおく",
                "meaning_vi": "ký ức",
                "meaning_en": "memory",
                "examples": [
                  {
                    "example_text": "その時のことは全く記憶にない。",
                    "furigana": "その時（とき）まったきおくにない。",
                    "meaning_vi": "Mọi thứ ở thời điểm đó tôi không còn nhớ gì.",
                    "meaning_en": "I don't remember anything about that time at all."
                  }
                ],
                "lesson_number": 21
              },
              {
                "vocab": "様子",
                "furigana": "ようす",
                "meaning_vi": "tình trạng",
                "meaning_en": "status",
                "examples": [
                  {
                    "example_text": "手術を受けた母のことが心配で、何度も様子を見に行った。",
                    "furigana": "手術（しゅじゅつ）うははしんぱいなんどようすみいった。",
                    "meaning_vi": "Vì lo lắng về ca phẩu thuật của mẹ, nhiều lần tôi đến xem tình trạng mẹ.",
                    "meaning_en": "I was worried about my mother who had undergone surgery, so I went to check on her many times."
                  }
                ],
                "lesson_number": 21
              },
              {
                "vocab": "雰囲気",
                "furigana": "ふんいき",
                "meaning_vi": "bầu không khí",
                "meaning_en": "atmosphere",
                "examples": [
                  {
                    "example_text": "この店は雰囲気がいい。",
                    "furigana": "この店（みせ）ふんいきがいい。",
                    "meaning_vi": "Bầu không khí quán này rất tốt.",
                    "meaning_en": "This shop has a nice atmosphere."
                  }
                ],
                "lesson_number": 21
              },
              {
                "vocab": "魅力",
                "furigana": "みりょく",
                "meaning_vi": "quyến rũ",
                "meaning_en": "charming",
                "examples": [
                  {
                    "example_text": "始めて歌舞伎を見て、その魅力に引かれた。",
                    "furigana": "始（はじ）かぶきみみりょくひかれた。",
                    "meaning_vi": "Lần đầu xem kịch Kabuki, tôi đã bị cuốn hút vào nó.",
                    "meaning_en": "It was the first time I saw Kabuki, and I was captivated by its charm."
                  }
                ],
                "lesson_number": 21
              },
              {
                "vocab": "機嫌",
                "furigana": "きげん",
                "meaning_vi": "tâm trạng",
                "meaning_en": "mood",
                "examples": [
                  {
                    "example_text": "父は機嫌が悪いらしく、何を聞いても返事もしない。",
                    "furigana": "父（ちち）きげんわるなにきへんじもしない。",
                    "meaning_vi": "Tâm trạng bố có vẻ không tốt, hỏi gì cũng không trả lời cả.",
                    "meaning_en": "My father seems to be in a bad mood and never responds no matter what he asks."
                  }
                ],
                "lesson_number": 21
              },
              {
                "vocab": "関心",
                "furigana": "かんしん",
                "meaning_vi": "quan tâm",
                "meaning_en": "care about",
                "examples": [
                  {
                    "example_text": "私はスポーツにはあまり関心がない。",
                    "furigana": "私（わたし）かんしんがない。",
                    "meaning_vi": "Tôi không mấy quan tâm đến thể thao.",
                    "meaning_en": "I'm not particularly interested in sports."
                  }
                ],
                "lesson_number": 21
              },
              {
                "vocab": "意欲",
                "furigana": "いよく",
                "meaning_vi": "Một sự sẵn sàng",
                "meaning_en": "A ready",
                "examples": [
                  {
                    "example_text": "働く意欲はあるのだが、仕事が見つからない。",
                    "furigana": "働（はたら）いよくしごとみつからない。",
                    "meaning_vi": "Tôi có ý định làm việc nhưng chưa tìm được việc.",
                    "meaning_en": "I have the desire to work, but I can't find a job."
                  }
                ],
                "lesson_number": 21
              },
              {
                "vocab": "全力",
                "furigana": "ぜんりょく",
                "meaning_vi": "Tất cả những nỗ lực",
                "meaning_en": "All efforts",
                "examples": [
                  {
                    "example_text": "ボールを全力で投げた。",
                    "furigana": "ボールを全力（ぜんりょく）なげた。",
                    "meaning_vi": "Dồn toàn lực ném bóng.",
                    "meaning_en": "He threw the ball with all his might."
                  }
                ],
                "lesson_number": 21
              },
              {
                "vocab": "本気",
                "furigana": "ほんき",
                "meaning_vi": "Nghiêm túc",
                "meaning_en": "Serious",
                "examples": [
                  {
                    "example_text": "あの学生はやっと本気になって勉強し始めた。",
                    "furigana": "あの学生（がくせい）ほんきべんきょうはじめた。",
                    "meaning_vi": "Cuối cùng thì học sinh đó cũng chịu học hành.",
                    "meaning_en": "That student finally began to seriously study."
                  }
                ],
                "lesson_number": 21
              },
              {
                "vocab": "意識",
                "furigana": "いしき",
                "meaning_vi": "ý thức",
                "meaning_en": "awareness",
                "examples": [
                  {
                    "example_text": "頭を打って意識を失った。",
                    "furigana": "頭（あたま）ういしきうしなった。",
                    "meaning_vi": "Đánh vào đầu và mất hết ý thức.",
                    "meaning_en": "He hit his head and lost consciousness."
                  }
                ],
                "lesson_number": 22
              },
              {
                "vocab": "感激",
                "furigana": "かんげき",
                "meaning_vi": "lòng biết ơn",
                "meaning_en": "gratitude",
                "examples": [
                  {
                    "example_text": "めったに人を褒めない教授に褒められて、感激した。",
                    "furigana": "めったに人（ひと）ほきょうじゅほかんげきした。",
                    "meaning_vi": "Ít khi giáo sư khen ai nhưng tôi lại được ông khen thấy cảm kích.",
                    "meaning_en": "I was impressed to be praised by a professor who rarely praises others."
                  }
                ],
                "lesson_number": 22
              },
              {
                "vocab": "同情",
                "furigana": "どうじょう",
                "meaning_vi": "lòng thương xót",
                "meaning_en": "mercy",
                "examples": [
                  {
                    "example_text": "苦しんでいる人々に同情する。",
                    "furigana": "苦（くる）ひとびとどうじょうする。",
                    "meaning_vi": "Đồng cảm với những người sống cực khổ.",
                    "meaning_en": "I sympathize with those who are suffering."
                  }
                ],
                "lesson_number": 22
              },
              {
                "vocab": "同意",
                "furigana": "どうい",
                "meaning_vi": "đồng ý",
                "meaning_en": "Agree",
                "examples": [
                  {
                    "example_text": "大勢の人が私の意見に同意してくれた。",
                    "furigana": "大勢（おおぜい）ひとわたしいけんどういしてくれた。",
                    "meaning_vi": "Rất nhiều người đã đồng ý với ý kiến của tôi.",
                    "meaning_en": "A lot of people agreed with my opinion."
                  }
                ],
                "lesson_number": 22
              },
              {
                "vocab": "同感",
                "furigana": "どうかん",
                "meaning_vi": "Nói",
                "meaning_en": "Speak",
                "examples": [
                  {
                    "example_text": "中山さんの話に私も同感した。",
                    "furigana": "中山（なかやま）はなしわたしどうかんした。",
                    "meaning_vi": "Tôi đồng cảm với câu chuyện của anh Nakayama.",
                    "meaning_en": "I agreed with Nakayama's story."
                  }
                ],
                "lesson_number": 22
              },
              {
                "vocab": "対立",
                "furigana": "たいりつ",
                "meaning_vi": "Xung đột",
                "meaning_en": "Conflict",
                "examples": [
                  {
                    "example_text": "国会は与党と野党の対立が激しくなった。",
                    "furigana": "国会（こっかい）よとうやとうたいりつはげしくなった。",
                    "meaning_vi": "Tại quốc hội, đảng cầm quyền và đảng phản đối chống đối nhau gay gắt.",
                    "meaning_en": "The Diet has become more conflicted between the ruling party and the opposition party."
                  }
                ],
                "lesson_number": 22
              },
              {
                "vocab": "主張",
                "furigana": "しゅちょう",
                "meaning_vi": "Khẳng định",
                "meaning_en": "Confirm",
                "examples": [
                  {
                    "example_text": "会社側に労働者の権利を主張する。",
                    "furigana": "会社（かいしゃ）がわろうどうしゃけんりしゅちょうする。",
                    "meaning_vi": "Phía công ty chủ trương bảo vệ quyền lợi cho người lao động.",
                    "meaning_en": "Assist the rights of workers to the company."
                  }
                ],
                "lesson_number": 22
              },
              {
                "vocab": "要求",
                "furigana": "ようきゅう",
                "meaning_vi": "Yêu cầu",
                "meaning_en": "Request",
                "examples": [
                  {
                    "example_text": "労働組合が会社に賃金の値上げを要求した。しかし会社側はその要求を受け入れそうもない。",
                    "furigana": "労働組合（ろうどうくみあい）かいしゃちんぎんねあようきゅうかいしゃがわようきゅうういれそうもない。",
                    "meaning_vi": "Tổ chức lao động đã yêu cầu công ty tăng lương. Nhưng phía công ty đã không chấp nhận yêu cầu đó",
                    "meaning_en": "The union has asked the company to raise wages. However, the company is unlikely to accept the demand."
                  }
                ],
                "lesson_number": 22
              },
              {
                "vocab": "得",
                "furigana": "とく",
                "meaning_vi": "phải",
                "meaning_en": "Right",
                "examples": [
                  {
                    "example_text": "株を買ったらすぐに値上がりして得をした。",
                    "furigana": "株（かぶ）かねあとくをした。",
                    "meaning_vi": "Mua cổ phiếu và ngay lập tức lên giá nên đã lời.",
                    "meaning_en": "Once I bought stocks, I quickly rose and lost money."
                  }
                ],
                "lesson_number": 22
              },
              {
                "vocab": "損",
                "furigana": "そん",
                "meaning_vi": "sự mất mát",
                "meaning_en": "loss",
                "examples": [
                  {
                    "example_text": "株が上がって損をした。",
                    "furigana": "株（かぶ）あそんをした。",
                    "meaning_vi": "Cổ phiếu hạ nên lỗ.",
                    "meaning_en": "The stocks went up and lost."
                  }
                ],
                "lesson_number": 22
              },
              {
                "vocab": "勝負",
                "furigana": "しょうぶ",
                "meaning_vi": "Trận chiến",
                "meaning_en": "Battle",
                "examples": [
                  {
                    "example_text": "どちらがテストでいい点を取るか、友達と勝負をした。",
                    "furigana": "どちらがテストでいい点（てん）とともだちしょうぶをした。",
                    "meaning_vi": "Tôi cược với bạn ai sẽ là người có điểm kiểm tra cao hơn.",
                    "meaning_en": "I competed with my friends to see who scored better points on the test."
                  }
                ],
                "lesson_number": 22
              },
              {
                "vocab": "勢い",
                "furigana": "いきおい",
                "meaning_vi": "Động lượng",
                "meaning_en": "Momentum",
                "examples": [
                  {
                    "example_text": "選手たちはすごい勢いで私の前を走りすぎて行った。",
                    "furigana": "選手（せんしゅ）いきおわたしまえはしいった。",
                    "meaning_vi": "Những tuyển thủ với khí thế hùng hồn chạy trước tôi.",
                    "meaning_en": "The players ran too hard in front of me."
                  }
                ],
                "lesson_number": 22
              },
              {
                "vocab": "爆発",
                "furigana": "ばくはつ",
                "meaning_vi": "Vụ nổ",
                "meaning_en": "Explosion",
                "examples": [
                  {
                    "example_text": "ガスタンクが爆発して大きな被害が出た。",
                    "furigana": "ガスタンクが爆発（ばくはつ）おおひがいでた。",
                    "meaning_vi": "Nổ bình ga gây thiệt hại lớn.",
                    "meaning_en": "The gas tank exploded and caused serious damage."
                  }
                ],
                "lesson_number": 22
              },
              {
                "vocab": "災害",
                "furigana": "さいがい",
                "meaning_vi": "thảm họa",
                "meaning_en": "disaster",
                "examples": [
                  {
                    "example_text": "地震や火事などの災害に会ったときのために、保険に入っておこう。",
                    "furigana": "地震（じしん）かじさいがいあほけんはいっておこう。",
                    "meaning_vi": "Để dành những lúc tại họa như đông đất hay cháy hãy tham gia bảo hiểm.",
                    "meaning_en": "Get insurance in case you encounter an earthquake or fire."
                  }
                ],
                "lesson_number": 22
              },
              {
                "vocab": "天候",
                "furigana": "てんこう",
                "meaning_vi": "thời tiết",
                "meaning_en": "weather",
                "examples": [
                  {
                    "example_text": "今日の運動会は天候にも恵まれて、とてもいいものだった。",
                    "furigana": "今日（きょう）うんどうかいてんこうめぐまれて、とてもいいものだった。",
                    "meaning_vi": "Thời tiết hôm nay thuận hòa rất tốt cho thể thao.",
                    "meaning_en": "Today's sports day was great, with good weather."
                  }
                ],
                "lesson_number": 22
              },
              {
                "vocab": "乾燥",
                "furigana": "かんそう",
                "meaning_vi": "Sấy khô",
                "meaning_en": "Drying",
                "examples": [
                  {
                    "example_text": "草を乾燥させて家畜のえさにする。",
                    "furigana": "草（くさ）かんそうかちくのえさにする。",
                    "meaning_vi": "Làm khô cỏ rồi làm thức ăn cho gia súc.",
                    "meaning_en": "Dry the grass and feed it to livestock."
                  }
                ],
                "lesson_number": 22
              },
              {
                "vocab": "観測",
                "furigana": "かんそく",
                "meaning_vi": "quan sát",
                "meaning_en": "observe",
                "examples": [
                  {
                    "example_text": "地震の15分後に、高さ30センチの津波が観測された。",
                    "furigana": "地震（じしん）ふんあとたかつなみかんそくされた。",
                    "meaning_vi": "Sau trận động đất 15 phút, có thể quan sát thấy chiểu cao của sóng thần là 30m.",
                    "meaning_en": "A tsunami 30 cm tall was observed 15 minutes after the earthquake."
                  }
                ],
                "lesson_number": 23
              },
              {
                "vocab": "遭難",
                "furigana": "そうなん",
                "meaning_vi": "Đau khổ",
                "meaning_en": "Anguished",
                "examples": [
                  {
                    "example_text": "｛山/海｝で遭難する。",
                    "furigana": "｛山（やま）うみそうなんする。",
                    "meaning_vi": "Thảm họa ở núi/ biển",
                    "meaning_en": "Being lost in the mountains/sea."
                  }
                ],
                "lesson_number": 23
              },
              {
                "vocab": "発生",
                "furigana": "はっせい",
                "meaning_vi": "sự xuất hiện",
                "meaning_en": "appearance",
                "examples": [
                  {
                    "example_text": "事故が発生し、電車がストップした。",
                    "furigana": "事故（じこ）はっせいでんしゃがストップした。",
                    "meaning_vi": "Xảy ra sự cố, tàu điện đã dừng lại.",
                    "meaning_en": "An accident occurred and the train stopped."
                  }
                ],
                "lesson_number": 23
              },
              {
                "vocab": "登場",
                "furigana": "とうじょう",
                "meaning_vi": "Vẻ bề ngoài",
                "meaning_en": "Appearance",
                "examples": [
                  {
                    "example_text": "舞台に俳優が登場する。",
                    "furigana": "舞台（ぶたい）はいゆうとうじょうする。",
                    "meaning_vi": "Diễn viên xuất hiện trên sân khấu.",
                    "meaning_en": "Actors appear on stage."
                  }
                ],
                "lesson_number": 23
              },
              {
                "vocab": "回復",
                "furigana": "かいふく",
                "meaning_vi": "sự hồi phục",
                "meaning_en": "recovery",
                "examples": [
                  {
                    "example_text": "経済状況が回復する。",
                    "furigana": "経済（けいざい）じょうきょうかいふくする。",
                    "meaning_vi": "Hồi phục tình hình kinh tế.",
                    "meaning_en": "The economic situation will recover."
                  }
                ],
                "lesson_number": 23
              },
              {
                "vocab": "援助",
                "furigana": "えんじょ",
                "meaning_vi": "hỗ trợ",
                "meaning_en": "support",
                "examples": [
                  {
                    "example_text": "親戚の援助で学校を卒業できた。",
                    "furigana": "親戚（しんせき）えんじょがっこうそつぎょうできた。",
                    "meaning_vi": "Nhờ sự giúp đỡ của người thân quên tôi đã có thể tốt nghiệp đại học.",
                    "meaning_en": "I was able to graduate from school with the help of my relatives."
                  }
                ],
                "lesson_number": 23
              },
              {
                "vocab": "保険",
                "furigana": "ほけん",
                "meaning_vi": "bảo hiểm",
                "meaning_en": "insurance",
                "examples": [
                  {
                    "example_text": "子供が生まれたので、生命保険に入った。",
                    "furigana": "子供（こども）うせいめいほけんはいった。",
                    "meaning_vi": "Vì sinh con nên tham gia bảo nhân thọ.",
                    "meaning_en": "I got life insurance after I had a baby."
                  }
                ],
                "lesson_number": 23
              },
              {
                "vocab": "追加",
                "furigana": "ついか",
                "meaning_vi": "phép cộng",
                "meaning_en": "plus",
                "examples": [
                  {
                    "example_text": "飲み会でビールを追加する。",
                    "furigana": "飲（の）かいついかする。",
                    "meaning_vi": "Gọi thêm bia ở bữa tiệc.",
                    "meaning_en": "Add some beer at drinking parties."
                  }
                ],
                "lesson_number": 23
              },
              {
                "vocab": "応用",
                "furigana": "おうよう",
                "meaning_vi": "ứng dụng",
                "meaning_en": "application",
                "examples": [
                  {
                    "example_text": "この技術はいろいろな機械に応用できる。",
                    "furigana": "この技術（ぎじゅつ）きかいおうようできる。",
                    "meaning_vi": "Kĩ thuật này có thể áp dụng cho rất nhiều loại máy móc.",
                    "meaning_en": "This technology can be applied to a variety of machines."
                  }
                ],
                "lesson_number": 23
              },
              {
                "vocab": "解答(回答)",
                "furigana": "かいとう(かいとう)",
                "meaning_vi": "Trả lời (Trả lời)",
                "meaning_en": "Answer (answer)",
                "examples": [
                  {
                    "example_text": "10問のうち5問解答できないと失格になります。",
                    "furigana": "10問（とい）といかいとうしっかくになります。",
                    "meaning_vi": "Nếu không trả lời được 5 trên 10 câu hỏi thì sẽ bị trượt.",
                    "meaning_en": "If you cannot answer five of the 10 questions, you will be disqualified."
                  }
                ],
                "lesson_number": 23
              },
              {
                "vocab": "結論",
                "furigana": "けつろん",
                "meaning_vi": "Kết luận",
                "meaning_en": "Conclude",
                "examples": [
                  {
                    "example_text": "3時間議論しても、結論は出なかった。",
                    "furigana": "3時間（じかん）ぎろんけつろんでなかった。",
                    "meaning_vi": "Dù mất 3 tiếng thảo luận nhưng vẫn chưa đưa ra được kết luận.",
                    "meaning_en": "After three hours of discussion, no conclusion was reached."
                  }
                ],
                "lesson_number": 23
              },
              {
                "vocab": "案",
                "furigana": "あん",
                "meaning_vi": "trường hợp",
                "meaning_en": "case",
                "examples": [
                  {
                    "example_text": "新製品について、案を出すように言われた。",
                    "furigana": "新製品（しんせいひん）あんだいわれた。",
                    "meaning_vi": "Đưa ra kế hoạch về sản phẩm mới.",
                    "meaning_en": "I was told to come up with a proposal for a new product."
                  }
                ],
                "lesson_number": 23
              },
              {
                "vocab": "集中",
                "furigana": "しゅうちゅう",
                "meaning_vi": "tập trung",
                "meaning_en": "concentrate",
                "examples": [
                  {
                    "example_text": "人口は大都市に集中している。",
                    "furigana": "人口（じんこう）だいとししゅうちゅうしている。",
                    "meaning_vi": "Dân số tập trung ở các thành phố lớn.",
                    "meaning_en": "The population is concentrated in large cities."
                  }
                ],
                "lesson_number": 23
              },
              {
                "vocab": "区別",
                "furigana": "くべつ",
                "meaning_vi": "Phân biệt",
                "meaning_en": "Distinguish",
                "examples": [
                  {
                    "example_text": "レポートを書くときは、事実と意見を区別して書かなければならない。",
                    "furigana": "レポートを書（か）じじついけんくべつかかなければならない。",
                    "meaning_vi": "Khi viết báo cáo cần phân biệt rõ ràng sự thực và ý kiến cá nhân.",
                    "meaning_en": "When writing a report, you must distinguish between facts and opinions."
                  }
                ],
                "lesson_number": 23
              },
              {
                "vocab": "差別",
                "furigana": "さべつ",
                "meaning_vi": "sự khác biệt",
                "meaning_en": "difference",
                "examples": [
                  {
                    "example_text": "差別のない社会を作りたい。",
                    "furigana": "差別（さべつ）しゃかいつくりたい。",
                    "meaning_vi": "Tôi muốn xây dựng một xã hội không phân biệt chủng tộc.",
                    "meaning_en": "We want to create a society that is free from discrimination."
                  }
                ],
                "lesson_number": 23
              },
              {
                "vocab": "中間",
                "furigana": "ちゅうかん",
                "meaning_vi": "ở giữa",
                "meaning_en": "between",
                "examples": [
                  {
                    "example_text": "名古屋は東京と大阪の中間にある。",
                    "furigana": "名古屋（なごや）とうきょうおおさかちゅうかんにある。",
                    "meaning_vi": "Nagoya ở giữa Tokyo và Osaka.",
                    "meaning_en": "Nagoya is located halfway between Tokyo and Osaka."
                  }
                ],
                "lesson_number": 23
              },
              {
                "vocab": "逆",
                "furigana": "ぎゃく",
                "meaning_vi": "đảo ngược",
                "meaning_en": "reverse",
                "examples": [
                  {
                    "example_text": "鏡では左右が逆になる。",
                    "furigana": "鏡（かがみ）さゆうぎゃくになる。",
                    "meaning_vi": "Nhìn vào gương sẽ thấy ngược trái phải.",
                    "meaning_en": "In the mirror, the left and right are reversed."
                  }
                ],
                "lesson_number": 23
              },
              {
                "vocab": "他所",
                "furigana": "たしょ",
                "meaning_vi": "Những nơi khác",
                "meaning_en": "Other places",
                "examples": [
                  {
                    "example_text": "方言はよその土地の人には分かりにくい。",
                    "furigana": "方言（ほうげん）とちひとわかりにくい。",
                    "meaning_vi": "Tiếng địa phương đối với người khác thì hơi khó hiểu.",
                    "meaning_en": "Dialects are difficult for people in other places to understand."
                  }
                ],
                "lesson_number": 23
              },
              {
                "vocab": "外",
                "furigana": "そと",
                "meaning_vi": "ngoài",
                "meaning_en": "outside",
                "examples": [
                  {
                    "example_text": "「私には分かりませんので、ほかの人に聞いてください」",
                    "furigana": "「私（わたし）わひときいてください」",
                    "meaning_vi": "Tôi không hiểu nên hãy hỏi người khác nhé.",
                    "meaning_en": "\"I don't know, so please ask someone else.\""
                  }
                ],
                "lesson_number": 24
              },
              {
                "vocab": "境",
                "furigana": "さかい",
                "meaning_vi": "lãnh thổ",
                "meaning_en": "territory",
                "examples": [
                  {
                    "example_text": "隣の家の堺には併がある。",
                    "furigana": "隣（となり）いえさかいへいがある。",
                    "meaning_vi": "Có hàng rào ngăn cách nhà tôi với nhà kế bên.",
                    "meaning_en": "There is a co-op in Sakai, the neighboring house."
                  }
                ],
                "lesson_number": 24
              },
              {
                "vocab": "半ば",
                "furigana": "なかば",
                "meaning_vi": "ở giữa",
                "meaning_en": "between",
                "examples": [
                  {
                    "example_text": "彼女の話の半ばは嘘だ。",
                    "furigana": "彼女（かのじょ）はなしなかうそだ。",
                    "meaning_vi": "Câu chuyện của cô ấy một nửa là nói dối.",
                    "meaning_en": "Her half-talk is a lie."
                  }
                ],
                "lesson_number": 24
              },
              {
                "vocab": "普段",
                "furigana": "ふだん",
                "meaning_vi": "thông thường",
                "meaning_en": "normally",
                "examples": [
                  {
                    "example_text": "普段は7時に起きるが、今日は寝坊してしまった。",
                    "furigana": "普段（ふだん）じおきょうねぼうしてしまった。",
                    "meaning_vi": "Thông thường tôi ngủ dậy 7 giờ, nhưng hôm nay lại ngủ quên mất.",
                    "meaning_en": "I usually wake up at 7am, but today I overslept."
                  }
                ],
                "lesson_number": 25
              },
              {
                "vocab": "日常",
                "furigana": "にちじょう",
                "meaning_vi": "hằng ngày",
                "meaning_en": "daily",
                "examples": [
                  {
                    "example_text": "日常の業務を果たす。",
                    "furigana": "日常（にちじょう）ぎょうむはたす。",
                    "meaning_vi": "Hoàn thành nhiệm vụ hằng ngày.",
                    "meaning_en": "Perform daily tasks."
                  }
                ],
                "lesson_number": 25
              },
              {
                "vocab": "一般",
                "furigana": "いっぱん",
                "meaning_vi": "nói chung là",
                "meaning_en": "Generally",
                "examples": [
                  {
                    "example_text": "これは一般の店では手に入らない薬だ。",
                    "furigana": "これは一般（いっぱん）みせてはいくすりだ。",
                    "meaning_vi": "Đây là cửa hàng tổng hợp nên không mua được thuốc đâu.",
                    "meaning_en": "This is a medicine that is not available at regular stores."
                  }
                ],
                "lesson_number": 25
              },
              {
                "vocab": "常識",
                "furigana": "じょうしき",
                "meaning_vi": "lẽ thường",
                "meaning_en": "common sense",
                "examples": [
                  {
                    "example_text": "ミスをしたらきちんと責任を取るのが社会人の常識だ。",
                    "furigana": "ミスをしたらきちんと責任（せきにん）としゃかいじんじょうしきだ。",
                    "meaning_vi": "Khi mắc lỗi, nghiêm chỉnh nhận trách nhiệm thì đó là một việc làm bình thường của con người trong xã hội này.",
                    "meaning_en": "It is common knowledge among working adults to take responsibility if you make a mistake."
                  }
                ],
                "lesson_number": 25
              },
              {
                "vocab": "諺",
                "furigana": "ことわざ",
                "meaning_vi": "tục ngữ",
                "meaning_en": "byword",
                "examples": [
                  {
                    "example_text": "ことわざには教訓が含まれていることが多い。",
                    "furigana": "ことわざには教訓（きょうくん）ふくおおい。",
                    "meaning_vi": "Rất nhiều câu tục ngữ bao hàm cả những điều giáo huấn.",
                    "meaning_en": "Proverbs often contain lessons."
                  }
                ],
                "lesson_number": 25
              },
              {
                "vocab": "権利",
                "furigana": "けんり",
                "meaning_vi": "Phải",
                "meaning_en": "Right",
                "examples": [
                  {
                    "example_text": "すべての国民には健康的な生活を送る権利がある。",
                    "furigana": "すべての国民（こくみん）けんこうてきせいかつおくけんりがある。",
                    "meaning_vi": "Tất cả công dân đều có quyền mưu cầu cuộc sống sức khỏe.",
                    "meaning_en": "All citizens have the right to live a healthy life."
                  }
                ],
                "lesson_number": 25
              },
              {
                "vocab": "義務",
                "furigana": "ぎむ",
                "meaning_vi": "nghĩa vụ",
                "meaning_en": "obligation",
                "examples": [
                  {
                    "example_text": "親には子どもに教育を受けさせる義務がある。",
                    "furigana": "親（おや）こきょういくうぎむがある。",
                    "meaning_vi": "Cha mẹ có nghĩa vụ nuôi dạy con cái.",
                    "meaning_en": "Parents have an obligation to provide their children with an education."
                  }
                ],
                "lesson_number": 25
              },
              {
                "vocab": "切っ掛け(切掛)",
                "furigana": "きっかけ(きりがかり)",
                "meaning_vi": "Trick (Trick)",
                "meaning_en": "Trick (Trick)",
                "examples": [
                  {
                    "example_text": "喧嘩のきっかけは、つまらないことだった。",
                    "furigana": "喧嘩（けんか）のきっかけは、つまらないことだった。",
                    "meaning_vi": "Cãi nhau đó là một chuyện chán ngẩn.",
                    "meaning_en": "The reason for the fight was boring."
                  }
                ],
                "lesson_number": 25
              },
              {
                "vocab": "行動",
                "furigana": "こうどう",
                "meaning_vi": "hoạt động",
                "meaning_en": "work",
                "examples": [
                  {
                    "example_text": "彼の行動は、とても立派だった。",
                    "furigana": "彼（かれ）こうどうりっぱだった。",
                    "meaning_vi": "Hành động của anh ấy lúc nào cũng rất tuyệt vời.",
                    "meaning_en": "His actions were very impressive."
                  }
                ],
                "lesson_number": 25
              },
              {
                "vocab": "使用",
                "furigana": "しよう",
                "meaning_vi": "sử dụng",
                "meaning_en": "use",
                "examples": [
                  {
                    "example_text": "今は、文章の作成にはパソコンが使用されることが多い。",
                    "furigana": "今（いま）ぶんしょうさくせいしようおおい。",
                    "meaning_vi": "Bây giờ, máy tính được sử dụng nhiều trong việc xây dựng bài văn.",
                    "meaning_en": "Nowadays, computers are often used to create text."
                  }
                ],
                "lesson_number": 25
              },
              {
                "vocab": "提出",
                "furigana": "ていしゅつ",
                "meaning_vi": "đề xuất",
                "meaning_en": "propose",
                "examples": [
                  {
                    "example_text": "願書の提出は10月31日までだ。",
                    "furigana": "願書（がんしょ）ていしゅつがつにちまでだ。",
                    "meaning_vi": "Hạn nộp hồ sơ nhập học là đến ngày 31 tháng 10.",
                    "meaning_en": "Applications can be submitted until October 31st."
                  }
                ],
                "lesson_number": 25
              },
              {
                "vocab": "期限",
                "furigana": "きげん",
                "meaning_vi": "thuật ngữ",
                "meaning_en": "term",
                "examples": [
                  {
                    "example_text": "支払いの期限を延ばしてもらった。",
                    "furigana": "支払（しはら）きげんのばしてもらった。",
                    "meaning_vi": "Tôi được gia hạn trả tiền.",
                    "meaning_en": "I had my payment deadline extended."
                  }
                ],
                "lesson_number": 25
              },
              {
                "vocab": "延期",
                "furigana": "えんき",
                "meaning_vi": "hoãn",
                "meaning_en": "delay",
                "examples": [
                  {
                    "example_text": "大雨のため、運動会は1週間後に延期された。",
                    "furigana": "大雨（おおあめ）うんどうかいしゅうかんごえんきされた。",
                    "meaning_vi": "Vì trời mưa nên hội thể thao sẽ hoãn lại vào tuần sau.",
                    "meaning_en": "Due to heavy rain, the sports day was postponed a week later."
                  }
                ],
                "lesson_number": 25
              },
              {
                "vocab": "延長",
                "furigana": "えんちょう",
                "meaning_vi": "mở rộng",
                "meaning_en": "extend",
                "examples": [
                  {
                    "example_text": "結論が出なかったので、会議は30分延長された。",
                    "furigana": "結論（けつろん）でかいぎぷんえんちょうされた。",
                    "meaning_vi": "Mãi chưa đưa ra được kết luận, cuộc họp kéo dài 30 phút.",
                    "meaning_en": "As no conclusion was reached, the meeting was extended for 30 minutes."
                  }
                ],
                "lesson_number": 25
              },
              {
                "vocab": "短縮",
                "furigana": "たんしゅく",
                "meaning_vi": "rút ngắn",
                "meaning_en": "shorten",
                "examples": [
                  {
                    "example_text": "冬は動物園の営業時間が短縮される。",
                    "furigana": "冬（ふゆ）どうぶつえんえいぎょうじかんたんしゅくされる。",
                    "meaning_vi": "Mùa đông sẽ rút ngắn thời gian mở cửa sở thú.",
                    "meaning_en": "Zoos will be open for shorter hours in winter."
                  }
                ],
                "lesson_number": 25
              },
              {
                "vocab": "映像",
                "furigana": "えいぞう",
                "meaning_vi": "hình ảnh",
                "meaning_en": "image",
                "examples": [
                  {
                    "example_text": "この辺りは電波の状態が悪く、テレビの映像が良く乱れる。",
                    "furigana": "この辺（あた）でんぱじょうたいわるえいぞうよみだれる。",
                    "meaning_vi": "Tình trạng sóng điện ở vùng này rất xấu nên hình ảnh tivi hãy nhiễu loạn.",
                    "meaning_en": "The signal is poor in this area, and the TV images are well distorted."
                  }
                ],
                "lesson_number": 26
              },
              {
                "vocab": "撮影",
                "furigana": "さつえい",
                "meaning_vi": "Ảnh",
                "meaning_en": "Image",
                "examples": [
                  {
                    "example_text": "プロのカメラマンに顔写真を撮影してもらった。",
                    "furigana": "プロのカメラマンに顔（かお）しゃしんさつえいしてもらった。",
                    "meaning_vi": "Tôi nhờ nhiếp ảnh gia chuyên nghiệp chụp cho ảnh chân dung.",
                    "meaning_en": "I had a professional photographer take my face photo."
                  }
                ],
                "lesson_number": 26
              },
              {
                "vocab": "背景",
                "furigana": "はいけい",
                "meaning_vi": "lý lịch",
                "meaning_en": "background",
                "examples": [
                  {
                    "example_text": "これは家族の写真で、背景はうちの庭だ。",
                    "furigana": "これは家族（かぞく）しゃしんはいけいにわだ。",
                    "meaning_vi": "Đây là bức ảnh gia đình, lấy bối cảnh là sân vườn nhà tôi.",
                    "meaning_en": "This is a family photo, with the background being my garden."
                  }
                ],
                "lesson_number": 26
              },
              {
                "vocab": "独立",
                "furigana": "どくりつ",
                "meaning_vi": "độc lập",
                "meaning_en": "independence",
                "examples": [
                  {
                    "example_text": "アメリカはイギリスから独立した。",
                    "furigana": "アメリカはイギリスから独立（どくりつ）した。",
                    "meaning_vi": "Nước Mỹ dành được độc lập từ nước Anh.",
                    "meaning_en": "The United States has become independent from the UK."
                  }
                ],
                "lesson_number": 26
              },
              {
                "vocab": "候補",
                "furigana": "こうほ",
                "meaning_vi": "ứng viên",
                "meaning_en": "candidate",
                "examples": [
                  {
                    "example_text": "今度の市長選挙は、5人の候補で争われることになった。",
                    "furigana": "今度（こんど）しちょうせんきょにんこうほあらそわれることになった。",
                    "meaning_vi": "Trong cuộc bầu cử thị trưởng lần này, có 5 ứng cử viên cùng cạnh tranh nhau.",
                    "meaning_en": "The upcoming mayoral election will be held between five candidates."
                  }
                ],
                "lesson_number": 26
              },
              {
                "vocab": "支持",
                "furigana": "しじ",
                "meaning_vi": "ủng hộ",
                "meaning_en": "donate",
                "examples": [
                  {
                    "example_text": "私は首相を支持している。",
                    "furigana": "私（わたし）しゅしょうしじしている。",
                    "meaning_vi": "Tôi ủng hộ thủ tướng.",
                    "meaning_en": "I support the Prime Minister."
                  }
                ],
                "lesson_number": 26
              },
              {
                "vocab": "投票",
                "furigana": "とうひょう",
                "meaning_vi": "bỏ phiếu",
                "meaning_en": "vote",
                "examples": [
                  {
                    "example_text": "選挙でA候補に投票した。",
                    "furigana": "選挙（せんきょ）こうほとうひょうした。",
                    "meaning_vi": "Trong cuộc bầu cử, tôi đã bầu cho ứng cử viên A.",
                    "meaning_en": "I voted for candidate A in the election."
                  }
                ],
                "lesson_number": 26
              },
              {
                "vocab": "当選",
                "furigana": "とうせん",
                "meaning_vi": "Người chiến thắng",
                "meaning_en": "Winter",
                "examples": [
                  {
                    "example_text": "先日の選挙で、知り合いが市長に当選した。",
                    "furigana": "先日（せんじつ）せんきょしあしちょうとうせんした。",
                    "meaning_vi": "Trong cuộc bầu cử hôm trước, người thân của tôi đã trúng cử chức thị trưởng.",
                    "meaning_en": "In the other day's election, an acquaintance was elected mayor."
                  }
                ],
                "lesson_number": 26
              },
              {
                "vocab": "抽選",
                "furigana": "ちゅうせん",
                "meaning_vi": "Xổ số",
                "meaning_en": "Lottery",
                "examples": [
                  {
                    "example_text": "抽選に当たってテレビをもらった。",
                    "furigana": "抽選（ちゅうせん）あたってテレビをもらった。",
                    "meaning_vi": "Rút thăm trúng tôi nhận được cái tivi.",
                    "meaning_en": "I won the lottery and got a TV."
                  }
                ],
                "lesson_number": 26
              },
              {
                "vocab": "配布",
                "furigana": "はいふ",
                "meaning_vi": "phân bổ",
                "meaning_en": "allocate",
                "examples": [
                  {
                    "example_text": "駅前に通行人にチラシを配布する。",
                    "furigana": "駅前（えきまえ）つうこうにんはいふする。",
                    "meaning_vi": "Phát tờ rơi cho người đi đường ở trước nhà ga.",
                    "meaning_en": "Flyers will be distributed to passersby in front of the station."
                  }
                ],
                "lesson_number": 26
              },
              {
                "vocab": "失格",
                "furigana": "しっかく",
                "meaning_vi": "Không đủ tiêu chuẩn",
                "meaning_en": "Incompetent",
                "examples": [
                  {
                    "example_text": "試合でひ反則をすると失格になった。",
                    "furigana": "試合（しあい）はんそくしっかくになった。",
                    "meaning_vi": "Trong trận đấu, phạm lỗi nặng nên bị mất quyền thi đấu.",
                    "meaning_en": "He was disqualified if he committed a foul in a match."
                  }
                ],
                "lesson_number": 26
              },
              {
                "vocab": "余暇",
                "furigana": "よか",
                "meaning_vi": "Thời gian giải trí",
                "meaning_en": "Entertainment time",
                "examples": [
                  {
                    "example_text": "余暇を利用して、ボランティアをしている。",
                    "furigana": "余暇（よか）りようして、ボランティアをしている。",
                    "meaning_vi": "Tôi dùng thời gian rảnh để làm tình nguyện.",
                    "meaning_en": "I use my leisure time to volunteer."
                  }
                ],
                "lesson_number": 26
              },
              {
                "vocab": "行事",
                "furigana": "ぎょうじ",
                "meaning_vi": "Sự kiện",
                "meaning_en": "Event",
                "examples": [
                  {
                    "example_text": "正月の行事は地方によってさまざまだ。",
                    "furigana": "正月（しょうがつ）ぎょうじちほうによってさまざまだ。",
                    "meaning_vi": "Sự kiện vào ngày tết, tùy vào từng địa phương mà khác nhau.",
                    "meaning_en": "New Year's events vary from region to region."
                  }
                ],
                "lesson_number": 26
              },
              {
                "vocab": "理想",
                "furigana": "りそう",
                "meaning_vi": "lý tưởng",
                "meaning_en": "ideal",
                "examples": [
                  {
                    "example_text": "若者には高い理想を持ってもらいたい。",
                    "furigana": "若者（わかもの）たかりそうもってもらいたい。",
                    "meaning_vi": "Tôi muốn giới trẻ ôm ấp những hoài bão lớn.",
                    "meaning_en": "I want young people to have high ideals."
                  }
                ],
                "lesson_number": 26
              },
              {
                "vocab": "現実",
                "furigana": "げんじつ",
                "meaning_vi": "thực tế",
                "meaning_en": "reality",
                "examples": [
                  {
                    "example_text": "理想と現実が違う。",
                    "furigana": "理想（りそう）げんじつちがう。",
                    "meaning_vi": "Lý tưởng và hiện thực rất khác nhau.",
                    "meaning_en": "The ideal and reality are different."
                  }
                ],
                "lesson_number": 26
              },
              {
                "vocab": "体験",
                "furigana": "たいけん",
                "meaning_vi": "Kinh nghiệm",
                "meaning_en": "Experience",
                "examples": [
                  {
                    "example_text": "日本では、戦争したことのない世代が増えている。",
                    "furigana": "日本（にほん）せんそうせだいふえている。",
                    "meaning_vi": "Ở Nhật, thế hệ không trải qua chiến tranh đang tăng lên.",
                    "meaning_en": "In Japan, there are more and more generations who have never been to war."
                  }
                ],
                "lesson_number": 26
              },
              {
                "vocab": "体験",
                "furigana": "たいけん",
                "meaning_vi": "Kinh nghiệm",
                "meaning_en": "Experience",
                "examples": [
                  {
                    "example_text": "弟は空想ばかりして、現実を見ようとしない。",
                    "furigana": "弟（おとうと）くうそうげんじつみようとしない。",
                    "meaning_vi": "Em trai tôi toàn mơ mọng hảo huyền không chịu nhìn vào thực tế.",
                    "meaning_en": "My younger brother is always fantasizing and refuses to see reality."
                  }
                ],
                "lesson_number": 26
              },
              {
                "vocab": "実物",
                "furigana": "じつぶつ",
                "meaning_vi": "Mặt hàng thực tế",
                "meaning_en": "Actual items",
                "examples": [
                  {
                    "example_text": "このダイヤモンドは、写真で見ると大きく見えるが、実物はずっと小さい。",
                    "furigana": "このダイヤモンドは、写真（しゃしん）みおおみじつぶつちいさい。",
                    "meaning_vi": "Kim cương này nhìn ảnh thì to nhưng khi nhìn thật thì rất nhỏ.",
                    "meaning_en": "This diamond looks bigger in the photo, but it is actually much smaller."
                  }
                ],
                "lesson_number": 26
              },
              {
                "vocab": "実現",
                "furigana": "じつげん",
                "meaning_vi": "nhận thức",
                "meaning_en": "awareness",
                "examples": [
                  {
                    "example_text": "長年の夢｛を/が｝実現した。",
                    "furigana": "長年（ながねん）ゆめじつげんした。",
                    "meaning_vi": "Hiện thực được giấc mơ lâu năm.",
                    "meaning_en": "A long-standing dream has come true."
                  }
                ],
                "lesson_number": 26
              },
              {
                "vocab": "実施",
                "furigana": "じっし",
                "meaning_vi": "thực hiện",
                "meaning_en": "perform",
                "examples": [
                  {
                    "example_text": "大会は予定通り実施された。",
                    "furigana": "大会（たいかい）よていどおじっしされた。",
                    "meaning_vi": "Thực hiện đại hội theo như dự tính.",
                    "meaning_en": "The tournament was held as planned."
                  }
                ],
                "lesson_number": 27
              },
              {
                "vocab": "許可",
                "furigana": "きょか",
                "meaning_vi": "giấy phép",
                "meaning_en": "license",
                "examples": [
                  {
                    "example_text": "路上での撮影には警察の許可が必要だ。",
                    "furigana": "路上（ろじょう）さつえいけいさつきょかひつようだ。",
                    "meaning_vi": "Chụp ảnh trên đường cần sự cho phép của cảnh sát.",
                    "meaning_en": "Police permission is required to film on the street."
                  }
                ],
                "lesson_number": 27
              },
              {
                "vocab": "全体",
                "furigana": "ぜんたい",
                "meaning_vi": "trọn",
                "meaning_en": "full",
                "examples": [
                  {
                    "example_text": "この会社の従業員は、全体で500人ぐらいだ。",
                    "furigana": "この会社（かいしゃ）じゅうぎょういんぜんたいにんぐらいだ。",
                    "meaning_vi": "Tổng thể nhân viên của công ty này khoảng 5000 người.",
                    "meaning_en": "The company has about 500 employees in total."
                  }
                ],
                "lesson_number": 27
              },
              {
                "vocab": "部分",
                "furigana": "ぶぶん",
                "meaning_vi": "phần",
                "meaning_en": "part",
                "examples": [
                  {
                    "example_text": "レポートの最後の部分は書き直すつもりだ。",
                    "furigana": "レポートの最後（さいご）ぶぶんかなおすつもりだ。",
                    "meaning_vi": "Tôi định sửa lại phần kết của bài báo cáo.",
                    "meaning_en": "I plan to rewrite the final part of the report."
                  }
                ],
                "lesson_number": 27
              },
              {
                "vocab": "統一",
                "furigana": "とういつ",
                "meaning_vi": "thống nhất",
                "meaning_en": "unified",
                "examples": [
                  {
                    "example_text": "EU　は通貨のをユーロに統一した。",
                    "furigana": "EU　は通貨（つうか）とういつした。",
                    "meaning_vi": "Trong EU thống nhất dùng tiền chung.",
                    "meaning_en": "The EU has unified its currency to the euro."
                  }
                ],
                "lesson_number": 27
              },
              {
                "vocab": "拡大",
                "furigana": "かくだい",
                "meaning_vi": "mở rộng",
                "meaning_en": "extend",
                "examples": [
                  {
                    "example_text": "地図が小さくて見づらいので、拡大コピーを取った。",
                    "furigana": "地図（ちず）ちいみかくだいとった。",
                    "meaning_vi": "Bản đồ nhỏ nhìn rất khổ sở nên phô tô một bản phóng lớn.",
                    "meaning_en": "The map is small and difficult to see, so I took an enlarged copy."
                  }
                ],
                "lesson_number": 27
              },
              {
                "vocab": "縮小",
                "furigana": "しゅくしょう",
                "meaning_vi": "Thu nhỏ",
                "meaning_en": "Miniature",
                "examples": [
                  {
                    "example_text": "B4をA4に縮小してコピーした。",
                    "furigana": "B4をA4に縮小（しゅくしょう）してコピーした。",
                    "meaning_vi": "Copy giảm từ B4 xuống A4.",
                    "meaning_en": "I reduced the B4 to A4 and copied it."
                  }
                ],
                "lesson_number": 27
              },
              {
                "vocab": "集合",
                "furigana": "しゅうごう",
                "meaning_vi": "tập trung",
                "meaning_en": "concentrate",
                "examples": [
                  {
                    "example_text": "「面接を受ける人は、予定時間の30分前に会場に集合してください」",
                    "furigana": "「面接（めんせつ）うひとよていじかんぷんまえかいじょうしゅうごうしてください」",
                    "meaning_vi": "Những người tham gia phỏng vấn đến trước thời gian dự kiến 30 phút và tập trung tại công ty.",
                    "meaning_en": "\"People who are undergoing interviews should meet at the venue 30 minutes before their scheduled time.\""
                  }
                ],
                "lesson_number": 27
              },
              {
                "vocab": "方向",
                "furigana": "ほうこう",
                "meaning_vi": "phương hướng",
                "meaning_en": "direction",
                "examples": [
                  {
                    "example_text": "川は北東から南西の方向に流れている。",
                    "furigana": "川（かわ）ほくとうなんせいほうこうながれている。",
                    "meaning_vi": "Con sông này chảy từ hướng đông bắc xuống tây nam.",
                    "meaning_en": "The river flows from northeast to southwest."
                  }
                ],
                "lesson_number": 27
              },
              {
                "vocab": "間隔",
                "furigana": "かんかく",
                "meaning_vi": "khoảng thời gian",
                "meaning_en": "interval",
                "examples": [
                  {
                    "example_text": "50センチの間隔をあけて机を並べた。",
                    "furigana": "50センチの間隔（かんかく）つくえならべた。",
                    "meaning_vi": "Xếp các bàn có khoảng cách 50 cm.",
                    "meaning_en": "I lined up the desks with a space of 50 cm apart."
                  }
                ],
                "lesson_number": 27
              },
              {
                "vocab": "脇",
                "furigana": "わき",
                "meaning_vi": "bên",
                "meaning_en": "beside",
                "examples": [
                  {
                    "example_text": "体温計をわきの下に挟んで熱を測る。",
                    "furigana": "体温計（たいおんけい）したはさねつはかる。",
                    "meaning_vi": "Kẹp nhiệt kế vào nách và đo nhiệt độ.",
                    "meaning_en": "Place the thermometer under your armpit to measure your fever."
                  }
                ],
                "lesson_number": 27
              },
              {
                "vocab": "通過",
                "furigana": "つうか",
                "meaning_vi": "vượt qua",
                "meaning_en": "overcome",
                "examples": [
                  {
                    "example_text": "国境を車で通過する。",
                    "furigana": "国境（こっきょう）くるまつうかする。",
                    "meaning_vi": "Xe ô tô thông qua biên giới.",
                    "meaning_en": "Pass the border by car."
                  }
                ],
                "lesson_number": 27
              },
              {
                "vocab": "移動",
                "furigana": "いどう",
                "meaning_vi": "di chuyển",
                "meaning_en": "move",
                "examples": [
                  {
                    "example_text": "今度の旅行では、移動はすべてバスだ。",
                    "furigana": "今度（こんど）りょこういどうはすべてバスだ。",
                    "meaning_vi": "Chuyến du lịch lần này, di chuyển sẽ hoàn toàn bằng xe buýt.",
                    "meaning_en": "On my next trip, all travel is by bus."
                  }
                ],
                "lesson_number": 27
              },
              {
                "vocab": "停止",
                "furigana": "ていし",
                "meaning_vi": "dừng lại",
                "meaning_en": "stop",
                "examples": [
                  {
                    "example_text": "そのスーパーは停電のため、営業を停止した。",
                    "furigana": "そのスーパーは停電（ていでん）えいぎょうていしした。",
                    "meaning_vi": "Vì siêu thị cúp điện nên tạm dừng kinh doanh.",
                    "meaning_en": "The supermarket was suspended due to a power outage."
                  }
                ],
                "lesson_number": 27
              },
              {
                "vocab": "低下",
                "furigana": "ていか",
                "meaning_vi": "Giảm",
                "meaning_en": "Reduce",
                "examples": [
                  {
                    "example_text": "高く昇れば昇るほど、気温が低下する。",
                    "furigana": "高（たか）のぼのぼきおんていかする。",
                    "meaning_vi": "Càng leo lên cao nhiệt độ càng giảm.",
                    "meaning_en": "The higher the rise, the lower the temperature."
                  }
                ],
                "lesson_number": 27
              },
              {
                "vocab": "超過",
                "furigana": "ちょうか",
                "meaning_vi": "Quá",
                "meaning_en": "Too",
                "examples": [
                  {
                    "example_text": "彼女の荷物は規定の重量を10キロも超過していた。",
                    "furigana": "彼女（かのじょ）にもつきていじゅうりょうちょうかしていた。",
                    "meaning_vi": "Hành lí của cô ấy vượt quá trọng lượng quy định 10kg.",
                    "meaning_en": "Her baggage exceeded the specified weight by 10 kilos."
                  }
                ],
                "lesson_number": 27
              },
              {
                "vocab": "立ち上がる",
                "furigana": "たちあがる",
                "meaning_vi": "đứng lên",
                "meaning_en": "stand up",
                "examples": [
                  {
                    "example_text": "椅子から立ち上がる。",
                    "furigana": "椅子（いす）たあがる。",
                    "meaning_vi": "Đứng dậy khỏi ghế.",
                    "meaning_en": "Stand up from the chair."
                  }
                ],
                "lesson_number": 28
              },
              {
                "vocab": "飛び上がる",
                "furigana": "とびあがる",
                "meaning_vi": "Nhảy lên",
                "meaning_en": "Jump",
                "examples": [
                  {
                    "example_text": "飛び上がって喜ぶ。",
                    "furigana": "飛（と）あよろこぶ。",
                    "meaning_vi": "Nhảy cẩng lên vui sướng.",
                    "meaning_en": "It jumps up and rejoices."
                  }
                ],
                "lesson_number": 28
              },
              {
                "vocab": "浮かび上がる",
                "furigana": "うかびあがる",
                "meaning_vi": "Nó nổi",
                "meaning_en": "It is floating",
                "examples": [
                  {
                    "example_text": "水面に浮かび上がる。",
                    "furigana": "水面（すいめん）うあがる。",
                    "meaning_vi": "Trôi nổi trên mặt nước.",
                    "meaning_en": "It floats to the surface of the water."
                  }
                ],
                "lesson_number": 28
              },
              {
                "vocab": "舞い上がる",
                "furigana": "まいあがる",
                "meaning_vi": "Tôi đang tăng vọt",
                "meaning_en": "I am soaring",
                "examples": [
                  {
                    "example_text": "｛砂/誇り…｝が舞い上がる。",
                    "furigana": "｛砂（すな）ほこまあがる。",
                    "meaning_vi": "Cát/ mùi hương… bay lên.",
                    "meaning_en": "{Sand/Pride...} soars up."
                  }
                ],
                "lesson_number": 28
              },
              {
                "vocab": "燃え上がる",
                "furigana": "もえあがる",
                "meaning_vi": "Đốt",
                "meaning_en": "Burn",
                "examples": [
                  {
                    "example_text": "｛火/闘志/恋心…｝が燃え上がる。",
                    "furigana": "｛火（ひ）とうしこいごころもあがる。",
                    "meaning_vi": "",
                    "meaning_en": "{Fire/Fighting spirit/Love...} burns."
                  }
                ],
                "lesson_number": 28
              },
              {
                "vocab": "盛り上がる",
                "furigana": "もりあがる",
                "meaning_vi": "Nhận được phấn khích",
                "meaning_en": "Get excited",
                "examples": [
                  {
                    "example_text": "筋肉が盛り上がっている。",
                    "furigana": "筋肉（きんにく）もあがっている。",
                    "meaning_vi": "Tăng cơ bắp.",
                    "meaning_en": "My muscles are growing."
                  }
                ],
                "lesson_number": 28
              },
              {
                "vocab": "沸き上がる",
                "furigana": "わきあがる",
                "meaning_vi": "Nó đang sôi",
                "meaning_en": "It is boiling",
                "examples": [
                  {
                    "example_text": "歓声が沸き上がる。",
                    "furigana": "歓声（かんせい）わあがる。",
                    "meaning_vi": "Tiếng hoan hô náo nhiệt lên.",
                    "meaning_en": "Cheers erupt."
                  }
                ],
                "lesson_number": 28
              },
              {
                "vocab": "晴れ上がる",
                "furigana": "はれあがる",
                "meaning_vi": "rõ ràng",
                "meaning_en": "clear",
                "examples": [
                  {
                    "example_text": "腫れあがった秋空。",
                    "furigana": "腫（は）あきぞら。",
                    "meaning_vi": "Bầu trời thu nắng đẹp, trong xanh.",
                    "meaning_en": "The swollen autumn sky."
                  }
                ],
                "lesson_number": 28
              },
              {
                "vocab": "震え上がる",
                "furigana": "ふるえあがる",
                "meaning_vi": "Tôi run rẩy",
                "meaning_en": "I trembled",
                "examples": [
                  {
                    "example_text": "｛寒さ/恐怖…｝に震え上がる。",
                    "furigana": "｛寒（さむ）きょうふふるあがる。",
                    "meaning_vi": "Run lên vì lạnh/ sợ….",
                    "meaning_en": "I tremble in the cold/fear..."
                  }
                ],
                "lesson_number": 28
              },
              {
                "vocab": "縮み上がる",
                "furigana": "ちぢみあがる",
                "meaning_vi": "co rúm",
                "meaning_en": "co rUm",
                "examples": [
                  {
                    "example_text": "｛寒さ/恐怖…｝に縮み上がる。",
                    "furigana": "｛寒（さむ）きょうふちぢあがる。",
                    "meaning_vi": "Co lại vì lạnh/ sợ….",
                    "meaning_en": "It shrinks to {Cold/Fear...}."
                  }
                ],
                "lesson_number": 28
              },
              {
                "vocab": "干上がる",
                "furigana": "ひあがる",
                "meaning_vi": "Làm khô",
                "meaning_en": "Dry",
                "examples": [
                  {
                    "example_text": "｛池/湖/川…｝が干上がる。",
                    "furigana": "｛池（いけ）みずうみかわひあがる。",
                    "meaning_vi": "Ao/ hồ/ sông….khô.",
                    "meaning_en": "The {pond/lake/river...} drips down."
                  }
                ],
                "lesson_number": 28
              },
              {
                "vocab": "出来上がる",
                "furigana": "できあがる",
                "meaning_vi": "Nó đã hoàn thành",
                "meaning_en": "It has been completed",
                "examples": [
                  {
                    "example_text": "料理が出来上がった。",
                    "furigana": "料理（りょうり）できあがった。",
                    "meaning_vi": "Cơm đã nấu xong.",
                    "meaning_en": "The food is finished."
                  }
                ],
                "lesson_number": 28
              },
              {
                "vocab": "持ち上げる",
                "furigana": "もちあげる",
                "meaning_vi": "thang máy",
                "meaning_en": "elevator",
                "examples": [
                  {
                    "example_text": "荷物を持ち上げる。",
                    "furigana": "荷物（にもつ）もあげる。",
                    "meaning_vi": "Mang hành lí.",
                    "meaning_en": "Lift the luggage."
                  }
                ],
                "lesson_number": 28
              },
              {
                "vocab": "見上げる",
                "furigana": "みあげる",
                "meaning_vi": "Nhìn lên",
                "meaning_en": "Look up",
                "examples": [
                  {
                    "example_text": "空を見上げる。",
                    "furigana": "空（そら）みあげる。",
                    "meaning_vi": "Nhìn lên bầu trời.",
                    "meaning_en": "Looking up at the sky."
                  }
                ],
                "lesson_number": 28
              },
              {
                "vocab": "積み上げる",
                "furigana": "つみあげる",
                "meaning_vi": "Xếp chồng lên nhau",
                "meaning_en": "Overlap",
                "examples": [
                  {
                    "example_text": "資料を積み上げる。",
                    "furigana": "資料（しりょう）つあげる。",
                    "meaning_vi": "Chất những tài liệu.",
                    "meaning_en": "Piling up the materials."
                  }
                ],
                "lesson_number": 28
              },
              {
                "vocab": "打ち上げる",
                "furigana": "うちあげる",
                "meaning_vi": "phóng",
                "meaning_en": "launch",
                "examples": [
                  {
                    "example_text": "｛ロケット/花火…｝を打ち上げる。",
                    "furigana": "｛ロケット/花火（はなび）うあげる。",
                    "meaning_vi": "Bắn tên lửa/ pháo hoa…",
                    "meaning_en": "Launch {Rocket/Fireworks...}."
                  }
                ],
                "lesson_number": 28
              },
              {
                "vocab": "立ち上げる",
                "furigana": "たちあげる",
                "meaning_vi": "Đứng lên",
                "meaning_en": "Stand up",
                "examples": [
                  {
                    "example_text": "コンピューターを立ち上げる。",
                    "furigana": "コンピューターを立（た）あげる。",
                    "meaning_vi": "Khởi động máy tính.",
                    "meaning_en": "Start up the computer."
                  }
                ],
                "lesson_number": 28
              },
              {
                "vocab": "切り上げる",
                "furigana": "きりあげる",
                "meaning_vi": "Cắt lên",
                "meaning_en": "Cut up",
                "examples": [
                  {
                    "example_text": "今日は仕事を5時で切り上げよう。",
                    "furigana": "今日（きょう）しごとじきあげよう。",
                    "meaning_vi": "Hôm nay tôi sẽ gắng hoàn thành công việc lúc 5 giờ.",
                    "meaning_en": "Let's finish work today at 5am."
                  }
                ],
                "lesson_number": 28
              },
              {
                "vocab": "繰り上げる",
                "furigana": "くりあげる",
                "meaning_vi": "Nâng nó lên",
                "meaning_en": "Lift it up",
                "examples": [
                  {
                    "example_text": "｛時間/予定/順位…｝を繰り上げる。",
                    "furigana": "｛時間（じかん）よていじゅんいくあげる。",
                    "meaning_vi": "Sớm hơn thời gian/ dự định…",
                    "meaning_en": "Move up {Time/Present/Ranking...}."
                  }
                ],
                "lesson_number": 28
              },
              {
                "vocab": "磨き上げる",
                "furigana": "みがきあげる",
                "meaning_vi": "Đánh bóng lên",
                "meaning_en": "Polish",
                "examples": [
                  {
                    "example_text": "磨き上げた靴。",
                    "furigana": "磨（みが）あくつ。",
                    "meaning_vi": "Giày đã được đánh bóng.",
                    "meaning_en": "Polished shoes."
                  }
                ],
                "lesson_number": 28
              },
              {
                "vocab": "鍛え上げる",
                "furigana": "きたえあげる",
                "meaning_vi": "Đào tạo lên",
                "meaning_en": "Training",
                "examples": [
                  {
                    "example_text": "選手たちを鍛え上げる。",
                    "furigana": "選手（せんしゅ）きたあげる。",
                    "meaning_vi": "Huấn luyện các tuyển thủ.",
                    "meaning_en": "Training the players."
                  }
                ],
                "lesson_number": 28
              },
              {
                "vocab": "書き上げる",
                "furigana": "かきあげる",
                "meaning_vi": "Viết nó lên",
                "meaning_en": "Write it up",
                "examples": [
                  {
                    "example_text": "レポートを書き上げた。",
                    "furigana": "レポートを書（か）あげた。",
                    "meaning_vi": "Viết xong báo cáo.",
                    "meaning_en": "I've finished writing the report."
                  }
                ],
                "lesson_number": 29
              },
              {
                "vocab": "育て上げる",
                "furigana": "そだてあげる",
                "meaning_vi": "Nâng nó lên",
                "meaning_en": "Lift it up",
                "examples": [
                  {
                    "example_text": "子供を育て上げる。",
                    "furigana": "子供（こども）そだあげる。",
                    "meaning_vi": "Nuôi dạy con cái.",
                    "meaning_en": "Raising children."
                  }
                ],
                "lesson_number": 29
              },
              {
                "vocab": "読み上げる",
                "furigana": "よみあげる",
                "meaning_vi": "Đọc ra",
                "meaning_en": "Read",
                "examples": [
                  {
                    "example_text": "卒業生の名前を読み上げる。",
                    "furigana": "卒業生（そつぎょうせい）なまえよあげる。",
                    "meaning_vi": "Đọc to tên học sinh tốt nghiệp.",
                    "meaning_en": "Read out the names of the graduates."
                  }
                ],
                "lesson_number": 29
              },
              {
                "vocab": "数え上げる",
                "furigana": "かぞえあげる",
                "meaning_vi": "liệt kê",
                "meaning_en": "list",
                "examples": [
                  {
                    "example_text": "欠点を数え上げる。",
                    "furigana": "欠点（けってん）かぞあげる。",
                    "meaning_vi": "Đếm to ra những khuyết điểm.",
                    "meaning_en": "Count down the flaws."
                  }
                ],
                "lesson_number": 29
              },
              {
                "vocab": "投げ出す",
                "furigana": "なげだす",
                "meaning_vi": "Ném nó ra",
                "meaning_en": "Throw it out",
                "examples": [
                  {
                    "example_text": "足を投げ出して座る。",
                    "furigana": "足（あし）なだすわる。",
                    "meaning_vi": "Bỏ chân ra và ngồi.",
                    "meaning_en": "Throw your legs out and sit."
                  }
                ],
                "lesson_number": 29
              },
              {
                "vocab": "持ち出す",
                "furigana": "もちだす",
                "meaning_vi": "Lấy nó ra",
                "meaning_en": "Remove",
                "examples": [
                  {
                    "example_text": "この本は図書館から持ち出さないでください。",
                    "furigana": "この本（ほん）としょかんもださないでください。",
                    "meaning_vi": "Không mang cuốn sách này ra khỏi thư viện.",
                    "meaning_en": "Do not take this book out of the library."
                  }
                ],
                "lesson_number": 29
              },
              {
                "vocab": "追い出す",
                "furigana": "おいだす",
                "meaning_vi": "Đẩy ra",
                "meaning_en": "Push out",
                "examples": [
                  {
                    "example_text": "入ってきた虫をを追い出す。",
                    "furigana": "入（はい）むしおだす。",
                    "meaning_vi": "Đuổi con sâu đi.",
                    "meaning_en": "Drop out the incoming insects."
                  }
                ],
                "lesson_number": 29
              },
              {
                "vocab": "放り出す",
                "furigana": "ほうりだす",
                "meaning_vi": "Ném nó ra",
                "meaning_en": "Throw it out",
                "examples": [
                  {
                    "example_text": "子供は学校から帰ってくると、かばんを放り出して遊びに行った。",
                    "furigana": "子供（こども）がっこうかえほうだあそいった。",
                    "meaning_vi": "Đứa con vừa đi học về liền ném cặp sang một bên và đi chơi.",
                    "meaning_en": "When the child came home from school, he threw out his bags and went out to play."
                  }
                ],
                "lesson_number": 29
              },
              {
                "vocab": "貸し出す",
                "furigana": "かしだす",
                "meaning_vi": "cho mượn",
                "meaning_en": "loan",
                "examples": [
                  {
                    "example_text": "「この図書館では雑誌も貸し出していますか」",
                    "furigana": "「この図書館（としょかん）ざっしかだしていますか」",
                    "meaning_vi": "Ở thư viện này có cho mượn tạp chí không ạ?",
                    "meaning_en": "\"Does this library also lend magazines?\""
                  }
                ],
                "lesson_number": 29
              },
              {
                "vocab": "聞き出す",
                "furigana": "ききだす",
                "meaning_vi": "Lắng nghe",
                "meaning_en": "Listen",
                "examples": [
                  {
                    "example_text": "相手から情報を聞き出す。",
                    "furigana": "相手（あいて）じょうほうきだす。",
                    "meaning_vi": "Nghe thông tin từ đối phương.",
                    "meaning_en": "Get information from the other person."
                  }
                ],
                "lesson_number": 29
              },
              {
                "vocab": "連れ出す",
                "furigana": "つれだす",
                "meaning_vi": "Lấy nó ra",
                "meaning_en": "Remove",
                "examples": [
                  {
                    "example_text": "嫌がる娘をむりやり連れ出して病院に行った。",
                    "furigana": "嫌（いや）むすめつだびょういんいった。",
                    "meaning_vi": "Dẫn đứa em gái không thích đi bệnh viện một cách cướng chế.",
                    "meaning_en": "I took my daughter out of reluctantly and went to the hospital."
                  }
                ],
                "lesson_number": 29
              },
              {
                "vocab": "引っ張り出す",
                "furigana": "ひっぱりだす",
                "meaning_vi": "Kéo ra",
                "meaning_en": "Drag out",
                "examples": [
                  {
                    "example_text": "押し入れの奥から古いアルバムを引っ張り出した。",
                    "furigana": "押（お）いおくふるひぱだした。",
                    "meaning_vi": "Lôi ra album cũ từ phía trong ngăn.",
                    "meaning_en": "I pulled out an old album from the back of the closet."
                  }
                ],
                "lesson_number": 29
              },
              {
                "vocab": "逃げ出す",
                "furigana": "にげだす",
                "meaning_vi": "Chạy đi",
                "meaning_en": "Run away",
                "examples": [
                  {
                    "example_text": "燃えている家の中から逃げ出す。",
                    "furigana": "燃（も）いえなかにだす。",
                    "meaning_vi": "Chạy trốn khỏi căn nhà đang cháy.",
                    "meaning_en": "He runs away from the burning house."
                  }
                ],
                "lesson_number": 29
              },
              {
                "vocab": "飛び出す",
                "furigana": "とびだす",
                "meaning_vi": "Bay ra",
                "meaning_en": "Bay",
                "examples": [
                  {
                    "example_text": "箱を開けるとカエルが飛び出した。",
                    "furigana": "箱（はこ）あとだした。",
                    "meaning_vi": "Vừa mở cái hộp con ếch đã nhảy ra.",
                    "meaning_en": "When I opened the box, a frog came flying out."
                  }
                ],
                "lesson_number": 29
              },
              {
                "vocab": "見つけ出す",
                "furigana": "みつけだす",
                "meaning_vi": "tìm ra",
                "meaning_en": "find",
                "examples": [
                  {
                    "example_text": "図書館の本棚から、探していた本を見つけ出した。",
                    "furigana": "図書館（としょかん）ほんだなさがほんみだした。",
                    "meaning_vi": "Tôi đã tìm thấy quyển sách đang tìm ở hàng sách của thư viện.",
                    "meaning_en": "I found the book I was looking for from the library's bookshelves."
                  }
                ],
                "lesson_number": 29
              },
              {
                "vocab": "探し出す",
                "furigana": "さがしだす",
                "meaning_vi": "Tìm nó",
                "meaning_en": "Find it",
                "examples": [
                  {
                    "example_text": "行方不明になっていたペットを探し出した。",
                    "furigana": "行方（ゆくえ）ふめいさがだした。",
                    "meaning_vi": "Đã tìm ra con thú cưng bị thất lạc.",
                    "meaning_en": "He searched for a missing pet."
                  }
                ],
                "lesson_number": 29
              },
              {
                "vocab": "書き出す",
                "furigana": "かきだす",
                "meaning_vi": "Xuất khẩu",
                "meaning_en": "Export",
                "examples": [
                  {
                    "example_text": "今日の予定をノートに書きだした。",
                    "furigana": "今日（きょう）よていかきだした。",
                    "meaning_vi": "Ghi ra những dự định hôm nay vào vở.",
                    "meaning_en": "I wrote down today's plans in a notebook."
                  }
                ],
                "lesson_number": 29
              },
              {
                "vocab": "飛び込む",
                "furigana": "とびこむ",
                "meaning_vi": "lặn",
                "meaning_en": "dive",
                "examples": [
                  {
                    "example_text": "プールに飛び込む。",
                    "furigana": "プールに飛（と）こむ。",
                    "meaning_vi": "Nhảy vào hồ bơi.",
                    "meaning_en": "Dive into the pool."
                  }
                ],
                "lesson_number": 29
              },
              {
                "vocab": "駆け込む",
                "furigana": "かけこむ",
                "meaning_vi": "Chạy vào",
                "meaning_en": "Run in",
                "examples": [
                  {
                    "example_text": "大急ぎで教室に駆け込んだ。",
                    "furigana": "大急（おおいそ）きょうしつかこんだ。",
                    "meaning_vi": "Vì rất vội nên đã lao vào lớp học.",
                    "meaning_en": "I rushed into the classroom."
                  }
                ],
                "lesson_number": 29
              },
              {
                "vocab": "割り込む",
                "furigana": "わりこむ",
                "meaning_vi": "ngắt",
                "meaning_en": "interrupt",
                "examples": [
                  {
                    "example_text": "列に割り込む。",
                    "furigana": "列（れつ）わこむ。",
                    "meaning_vi": "Cắt ngang hàng.",
                    "meaning_en": "Interrupt the line."
                  }
                ],
                "lesson_number": 29
              },
              {
                "vocab": "差し込む",
                "furigana": "さしこむ",
                "meaning_vi": "Chèn nó",
                "meaning_en": "Insert it",
                "examples": [
                  {
                    "example_text": "日の光が部屋いっぱいに差し込んでいる。",
                    "furigana": "日（ひ）ひかりへやさこんでいる。",
                    "meaning_vi": "Ánh nắng mặt trời chiếu rất nhiều vào phòng.",
                    "meaning_en": "The sunlight fills the room."
                  }
                ],
                "lesson_number": 30
              },
              {
                "vocab": "染み込む",
                "furigana": "しみこむ",
                "meaning_vi": "Vết bẩn",
                "meaning_en": "Stain",
                "examples": [
                  {
                    "example_text": "雨が土に染み込む。",
                    "furigana": "雨（あめ）つちしこむ。",
                    "meaning_vi": "Nước mưa thấm vào đất.",
                    "meaning_en": "The rain soaks into the soil."
                  }
                ],
                "lesson_number": 30
              },
              {
                "vocab": "引っ込む",
                "furigana": "ひっこむ",
                "meaning_vi": "Rút lại",
                "meaning_en": "Withdraw",
                "examples": [
                  {
                    "example_text": "秘書は客を応接室に通すと、奥へ引っ込んだ。",
                    "furigana": "秘書（ひしょ）きゃくおうせつしつとおおくひこんだ。",
                    "meaning_vi": "Tác giả đi ngang qua phòng tiếp đãi khách hàng, nên đã vào trong.",
                    "meaning_en": "The secretary passed the customer into the reception room and retreated into the back."
                  }
                ],
                "lesson_number": 30
              },
              {
                "vocab": "詰め込む",
                "furigana": "つめこむ",
                "meaning_vi": "Đóng gói nó",
                "meaning_en": "Packed it",
                "examples": [
                  {
                    "example_text": "かばんに荷物を詰め込む。",
                    "furigana": "かばんに荷物（にもつ）つこむ。",
                    "meaning_vi": "Nhét hành lí vào cặp.",
                    "meaning_en": "Pack your bags."
                  }
                ],
                "lesson_number": 30
              },
              {
                "vocab": "飲み込む",
                "furigana": "のみこむ",
                "meaning_vi": "nuốt",
                "meaning_en": "swallow",
                "examples": [
                  {
                    "example_text": "食べ物をかまずに飲み込む。",
                    "furigana": "食（た）もののこむ。",
                    "meaning_vi": "Không nhai đồ ăn mà nuốt chửng.",
                    "meaning_en": "Swallow food without biting."
                  }
                ],
                "lesson_number": 30
              },
              {
                "vocab": "運び込む",
                "furigana": "はこびこむ",
                "meaning_vi": "Mang nó vào",
                "meaning_en": "Bring it in",
                "examples": [
                  {
                    "example_text": "引っ越しの荷物を部屋に運び込む。",
                    "furigana": "引（ひ）こにもつへやはここむ。",
                    "meaning_vi": "Vận chuyển hành lí chuyển nhà vào trong phòng.",
                    "meaning_en": "Bring the moving items to the room."
                  }
                ],
                "lesson_number": 30
              },
              {
                "vocab": "打ち込む",
                "furigana": "うちこむ",
                "meaning_vi": "Đi vào",
                "meaning_en": "Enter",
                "examples": [
                  {
                    "example_text": "パソコンにデータを打ち込む。",
                    "furigana": "パソコンにデータを打（う）こむ。",
                    "meaning_vi": "Nhập dữ liệu vào máy tính.",
                    "meaning_en": "Enter data into a computer."
                  }
                ],
                "lesson_number": 30
              },
              {
                "vocab": "注ぎ込む",
                "furigana": "そそぎこむ",
                "meaning_vi": "Đổ nó",
                "meaning_en": "Pour",
                "examples": [
                  {
                    "example_text": "子供に愛情を注ぎ込む。",
                    "furigana": "子供（こども）あいじょうそそこむ。",
                    "meaning_vi": "Mang lại yêu thương cho trẻ em.",
                    "meaning_en": "Putting love into the child."
                  }
                ],
                "lesson_number": 30
              },
              {
                "vocab": "引き込む",
                "furigana": "ひきこむ",
                "meaning_vi": "Kéo vào",
                "meaning_en": "Pull in",
                "examples": [
                  {
                    "example_text": "友人を悪の道に引き込む。",
                    "furigana": "友人（ゆうじん）あくみちひこむ。",
                    "meaning_vi": "Bạn thân tôi bị vướng vào con đường xấu.",
                    "meaning_en": "Pull your friends into the path of evil."
                  }
                ],
                "lesson_number": 30
              },
              {
                "vocab": "書き込む",
                "furigana": "かきこむ",
                "meaning_vi": "Viết",
                "meaning_en": "Write",
                "examples": [
                  {
                    "example_text": "ノートに感想を書き込む。",
                    "furigana": "ノートに感想（かんそう）かこむ。",
                    "meaning_vi": "Viết cảm tưởng vào vở.",
                    "meaning_en": "Write your thoughts in a notebook."
                  }
                ],
                "lesson_number": 30
              },
              {
                "vocab": "巻き込む",
                "furigana": "まきこむ",
                "meaning_vi": "Liên quan đến nó",
                "meaning_en": "Related to it",
                "examples": [
                  {
                    "example_text": "事故に巻き込まれてけがをした。",
                    "furigana": "事故（じこ）まこまれてけがをした。",
                    "meaning_vi": "Bị vướng vào tai nạn nên đã bị thương.",
                    "meaning_en": "He was involved in an accident and was injured."
                  }
                ],
                "lesson_number": 30
              },
              {
                "vocab": "追い込む",
                "furigana": "おいこむ",
                "meaning_vi": "Đẩy nó",
                "meaning_en": "Push it",
                "examples": [
                  {
                    "example_text": "羊の群れを囲いに追い込む。",
                    "furigana": "羊（ひつじ）むかこおこむ。",
                    "meaning_vi": "Lùa đàn cừu vào chuồng.",
                    "meaning_en": "Driving herds into the enclosure."
                  }
                ],
                "lesson_number": 30
              },
              {
                "vocab": "呼び込む",
                "furigana": "よびこむ",
                "meaning_vi": "Gọi",
                "meaning_en": "Call",
                "examples": [
                  {
                    "example_text": "ある国では、赤は運を呼び込む色だと言われている。",
                    "furigana": "ある国（くに）あかうんよこいろいわれている。",
                    "meaning_vi": "Ở đất nước đó, màu đỏ được coi là màu may mắn.",
                    "meaning_en": "In some countries, red is said to be a colour that brings you luck."
                  }
                ],
                "lesson_number": 30
              },
              {
                "vocab": "座り込む",
                "furigana": "すわりこむ",
                "meaning_vi": "Ngồi xuống",
                "meaning_en": "Sit down",
                "examples": [
                  {
                    "example_text": "疲れていすに座り込む。",
                    "furigana": "疲（つか）すわこむ。",
                    "meaning_vi": "Vì mệt nên ngồi sụp xuống ghế.",
                    "meaning_en": "I sit down tiredly."
                  }
                ],
                "lesson_number": 30
              },
              {
                "vocab": "寝込む",
                "furigana": "ねこむ",
                "meaning_vi": "Tôi đang ngủ",
                "meaning_en": "I am sleeping",
                "examples": [
                  {
                    "example_text": "病気で1週間寝込んだ。",
                    "furigana": "病気（びょうき）しゅうかんねこんだ。",
                    "meaning_vi": "Vì bệnh nên ngủ suốt 1 tuần.",
                    "meaning_en": "I was sick and went to bed for a week."
                  }
                ],
                "lesson_number": 30
              },
              {
                "vocab": "話し込む",
                "furigana": "はなしこむ",
                "meaning_vi": "Nói chuyện với tôi",
                "meaning_en": "Talk to me",
                "examples": [
                  {
                    "example_text": "友人と電話で3時間も話し込んだ。",
                    "furigana": "友人（ゆうじん）でんわじかんはなこんだ。",
                    "meaning_vi": "Nói chuyện với đứa bạn thân tới 3 giờ đồng hồ.",
                    "meaning_en": "I talked to a friend over the phone for three hours."
                  }
                ],
                "lesson_number": 30
              },
              {
                "vocab": "黙り込む",
                "furigana": "だまりこむ",
                "meaning_vi": "Giữ im lặng",
                "meaning_en": "Keep silent",
                "examples": [
                  {
                    "example_text": "母は不機嫌になると黙り込む。",
                    "furigana": "母（はは）ふきげんだまこむ。",
                    "meaning_vi": "Khi mẹ không khỏe sẽ im lặng.",
                    "meaning_en": "When my mother gets mad, she goes silent."
                  }
                ],
                "lesson_number": 30
              },
              {
                "vocab": "泊まり込む",
                "furigana": "とまりこむ",
                "meaning_vi": "Ở lại qua đêm",
                "meaning_en": "Stay overnight",
                "examples": [
                  {
                    "example_text": "病院に泊まり込んで看病する。",
                    "furigana": "病院（びょういん）とこかんびょうする。",
                    "meaning_vi": "Ở lại bệnh viện để chăm sóc bệnh nhân.",
                    "meaning_en": "I stayed at the hospital and looked after me."
                  }
                ],
                "lesson_number": 30
              },
              {
                "vocab": "住み込む",
                "furigana": "すみこむ",
                "meaning_vi": "sống",
                "meaning_en": "living",
                "examples": [
                  {
                    "example_text": "弟子になって、師匠の家に住み込む。",
                    "furigana": "弟子（でし）ししょういえすこむ。",
                    "meaning_vi": "Khi trở thành đệ tử sẽ sống tại nhà sư phụ.",
                    "meaning_en": "He became a disciple and lived in the master's house."
                  }
                ],
                "lesson_number": 30
              },
              {
                "vocab": "煮込む",
                "furigana": "にこむ",
                "meaning_vi": "Ninh",
                "meaning_en": "Security",
                "examples": [
                  {
                    "example_text": "弱火で煮込む。",
                    "furigana": "弱火（よわび）にこむ。",
                    "meaning_vi": "Nấu bằng lửa nhẹ.",
                    "meaning_en": "Simmer over low heat."
                  }
                ],
                "lesson_number": 30
              },
              {
                "vocab": "売り込む",
                "furigana": "うりこむ",
                "meaning_vi": "Người bán",
                "meaning_en": "Seller",
                "examples": [
                  {
                    "example_text": "新製品を売り込む。",
                    "furigana": "新製品（しんせいひん）うこむ。",
                    "meaning_vi": "Bán sản phẩm mới.",
                    "meaning_en": "Sold new products."
                  }
                ],
                "lesson_number": 30
              },
              {
                "vocab": "頼み込む",
                "furigana": "たのみこむ",
                "meaning_vi": "Tôi hỏi",
                "meaning_en": "I asked",
                "examples": [
                  {
                    "example_text": "頭を下げて先輩に頼み込んだ。",
                    "furigana": "頭（あたま）させんぱいたのこんだ。",
                    "meaning_vi": "Cúi đầu nhờ tiền bối.",
                    "meaning_en": "I bowed my head and asked my senior."
                  }
                ],
                "lesson_number": 30
              },
              {
                "vocab": "教え込む",
                "furigana": "おしえこむ",
                "meaning_vi": "Dạy tôi",
                "meaning_en": "Teach me",
                "examples": [
                  {
                    "example_text": "動物に根気よく芸を教え込んだ。",
                    "furigana": "動物（どうぶつ）こんきげいおしこんだ。",
                    "meaning_vi": "Kiên nhẫn dạy nghệ thuật cho động vật.",
                    "meaning_en": "He patiently taught animals the arts."
                  }
                ],
                "lesson_number": 30
              },
              {
                "vocab": "話し合う",
                "furigana": "はなしあう",
                "meaning_vi": "bàn luận",
                "meaning_en": "discuss",
                "examples": [
                  {
                    "example_text": "「暴力はいけない。話し合って解決しよう」",
                    "furigana": "「暴力（ぼうりょく）はなあかいけつしよう」",
                    "meaning_vi": "Không được dùng bạo lực, hãy nói chuyện cùng nhau để giải quyết.",
                    "meaning_en": "\"No violence. Let's talk and solve it.\""
                  }
                ],
                "lesson_number": 31
              },
              {
                "vocab": "言い合う",
                "furigana": "いいあう",
                "meaning_vi": "Nói nhau",
                "meaning_en": "Spoke",
                "examples": [
                  {
                    "example_text": "言いたいことを言い合って、最後に仲直りした。",
                    "furigana": "言（い）いあさいごなかなおりした。",
                    "meaning_vi": "Nói cùng nhau những điều cần nói, cuối cùng đã làm hòa.",
                    "meaning_en": "We all said what we wanted to say and finally made up."
                  }
                ],
                "lesson_number": 31
              },
              {
                "vocab": "語り合う",
                "furigana": "かたりあう",
                "meaning_vi": "Nói chuyện với nhau",
                "meaning_en": "Talk to each other",
                "examples": [
                  {
                    "example_text": "久しぶりに会った友人と深夜まで語り合った。",
                    "furigana": "久（ひさ）あゆうじんしんやかたあった。",
                    "meaning_vi": "Nói chuyện đến tận khuya với người bạn lâu nay không gặp.",
                    "meaning_en": "I talked to a friend I had met for the first time in a while until late at night."
                  }
                ],
                "lesson_number": 31
              },
              {
                "vocab": "見つめ合う",
                "furigana": "みつめあう",
                "meaning_vi": "Chúng tôi nhìn chằm chằm vào nhau",
                "meaning_en": "We stare at each other",
                "examples": [
                  {
                    "example_text": "二人は互いの目を見つめ合った。",
                    "furigana": "二人（ふたり）たがめみあった。",
                    "meaning_vi": "Hai người nhìn chằm chằm vào mắt nhau.",
                    "meaning_en": "The two looked into each other's eyes."
                  }
                ],
                "lesson_number": 31
              },
              {
                "vocab": "向かい合う",
                "furigana": "むかいあう",
                "meaning_vi": "Đối mặt với nhau",
                "meaning_en": "Facing each other",
                "examples": [
                  {
                    "example_text": "相手と向かい合って座る。＜＝＞並んで座る",
                    "furigana": "相手（あいて）むあすわならすわる",
                    "meaning_vi": "Ngồi đối diện với đối phương.",
                    "meaning_en": "Sit face to face with your opponent. <=>Sit side by side"
                  }
                ],
                "lesson_number": 31
              },
              {
                "vocab": "助け合う",
                "furigana": "たすけあう",
                "meaning_vi": "Giúp đỡ lẫn nhau",
                "meaning_en": "Help each other",
                "examples": [
                  {
                    "example_text": "「困ったときは助け合おう」",
                    "furigana": "「困（こま）たすあおう」",
                    "meaning_vi": "Hãy giúp đỡ lẫn nhau khi gặp khó khăn.",
                    "meaning_en": "\"If you're in trouble, let's help each other.\""
                  }
                ],
                "lesson_number": 31
              },
              {
                "vocab": "分け合う",
                "furigana": "わけあう",
                "meaning_vi": "chia sẻ",
                "meaning_en": "share",
                "examples": [
                  {
                    "example_text": "一つのパンをみんなで分け合って食べた。",
                    "furigana": "一（ひと）わあたべた。",
                    "meaning_vi": "Xé một cái bánh ra chia cho mọi người cùng ăn.",
                    "meaning_en": "We shared one bread with everyone and ate it."
                  }
                ],
                "lesson_number": 31
              },
              {
                "vocab": "出し合う",
                "furigana": "だしあう",
                "meaning_vi": "Cho nó cùng nhau",
                "meaning_en": "Let it together",
                "examples": [
                  {
                    "example_text": "兄弟でお金を出し合って、両親にプレゼントをした。",
                    "furigana": "兄弟（きょうだい）かねだありょうしんにプレゼントをした。",
                    "meaning_vi": "Anh em chia tiền ra mua quà tặng ba mẹ.",
                    "meaning_en": "The brothers gave each other money and gave presents to their parents."
                  }
                ],
                "lesson_number": 31
              },
              {
                "vocab": "申し合わせる",
                "furigana": "もうしあわせる",
                "meaning_vi": "Tôi sẽ thỏa thuận",
                "meaning_en": "I will agree",
                "examples": [
                  {
                    "example_text": "会議の内容は外部には言わないことを申し合わせた。",
                    "furigana": "会議（かいぎ）ないようがいぶいもうあわせた。",
                    "meaning_vi": "Sắp xếp nội dung cuộc họp mà không nói ra ngoài.",
                    "meaning_en": "We agreed not to mention the contents of the meeting to the outside world."
                  }
                ],
                "lesson_number": 31
              },
              {
                "vocab": "誘い合わせる",
                "furigana": "さそいあわせる",
                "meaning_vi": "Mời nhau",
                "meaning_en": "Invite each other",
                "examples": [
                  {
                    "example_text": "クラスメートたちと誘い合わせて富士山に行った。",
                    "furigana": "クラスメートたちと誘（さそ）あふじさんいった。",
                    "meaning_vi": "Rủ đứa bạn cùng lớp cùng đi núi Phú Sĩ.",
                    "meaning_en": "I invited my classmates to Mt. Fuji."
                  }
                ],
                "lesson_number": 31
              },
              {
                "vocab": "隣り合わせる",
                "furigana": "となりあわせる",
                "meaning_vi": "Bên cạnh nhau",
                "meaning_en": "Beside each other",
                "examples": [
                  {
                    "example_text": "名 隣り合わせ",
                    "furigana": "名 隣（とな）あわせ",
                    "meaning_vi": "",
                    "meaning_en": "Name next to each other"
                  }
                ],
                "lesson_number": 31
              },
              {
                "vocab": "組み合わせる",
                "furigana": "くみあわせる",
                "meaning_vi": "kết hợp",
                "meaning_en": "combine",
                "examples": [
                  {
                    "example_text": "部品を組み合わせてプラモデルを作る。",
                    "furigana": "部品（ぶひん）くあつくる。",
                    "meaning_vi": "Lắp ráp các bộ phận để tạo thành mô hình nhựa.",
                    "meaning_en": "Combine the parts to create a plastic model."
                  }
                ],
                "lesson_number": 31
              },
              {
                "vocab": "詰め合わせる",
                "furigana": "つめあわせる",
                "meaning_vi": "Loại",
                "meaning_en": "Type",
                "examples": [
                  {
                    "example_text": "一箱にいろいろなお菓子が詰め合わせてある。",
                    "furigana": "一（ひと）ばこかしつあわせてある。",
                    "meaning_vi": "Có rất nhiều kẹo được đóng gói trong hộp.",
                    "meaning_en": "A box of various sweets is included."
                  }
                ],
                "lesson_number": 31
              },
              {
                "vocab": "重ね合わせる",
                "furigana": "かさねあわせる",
                "meaning_vi": "Lớp phủ",
                "meaning_en": "Coat",
                "examples": [
                  {
                    "example_text": "二つの事件を重ね合わせて考えてみると、共通点が浮かび上がった。",
                    "furigana": "二（ふた）じけんかさあかんがきょうつうてんうあがった。",
                    "meaning_vi": "Khi thử kết hợp suy nghĩ hai sự kiện thì thấy điểm chung đã nổi lên.",
                    "meaning_en": "When I looked at the two incidents together, I found a commonality."
                  }
                ],
                "lesson_number": 31
              },
              {
                "vocab": "居合わせる",
                "furigana": "いあわせる",
                "meaning_vi": "Tôi sẽ ở đó",
                "meaning_en": "I will be there",
                "examples": [
                  {
                    "example_text": "犯人は居合わせた客を人質に取って逃走した。",
                    "furigana": "犯人（はんにん）いあきゃくひとじちととうそうした。",
                    "meaning_vi": "Tội phạm đã bắt khách hàng ở cùng làm con tin rồi chạy trốn.",
                    "meaning_en": "The perpetrator took the customer who was present hostage and fled."
                  }
                ],
                "lesson_number": 31
              },
              {
                "vocab": "乗り合わせる",
                "furigana": "のりあわせる",
                "meaning_vi": "Tiếp tục",
                "meaning_en": "Continue",
                "examples": [
                  {
                    "example_text": "バスで小銭がなくて困っていたら、乗り合わせていた人が200円貸してくれた。",
                    "furigana": "バスで小銭（こぜに）こまのあひとえんかしてくれた。",
                    "meaning_vi": "Khi trên xe buýt tôi gặp rắc rối vì không có tiền lẽ, thì người đi chung đã cho tôi mượn 200 yên.",
                    "meaning_en": "I was having trouble with not having any change on the bus, but the person I was riding with me lend me 200 yen."
                  }
                ],
                "lesson_number": 31
              },
              {
                "vocab": "持ち合わせる",
                "furigana": "もちあわせる",
                "meaning_vi": "Tôi sẽ có nó",
                "meaning_en": "I will have it",
                "examples": [
                  {
                    "example_text": "「すみません、今日は名刺を持ち合わせておりませんで」",
                    "furigana": "「すみません、今日（きょう）めいしもあわせておりませんで」",
                    "meaning_vi": "Xin lỗi, hôm nay tôi không mang theo danh thiếp.",
                    "meaning_en": "\"Sorry, I don't have a business card today.\""
                  }
                ],
                "lesson_number": 31
              },
              {
                "vocab": "問い合わせる",
                "furigana": "といあわせる",
                "meaning_vi": "Liên hệ với chúng tôi",
                "meaning_en": "Contact us",
                "examples": [
                  {
                    "example_text": "住民登録について、区役所に問い合わせた。",
                    "furigana": "住民（じゅうみん）とうろくくやくしょとあわせた。",
                    "meaning_vi": "Kiểm tra phường về đăng kí thường trú.",
                    "meaning_en": "We have inquired the ward office regarding resident registration."
                  }
                ],
                "lesson_number": 31
              },
              {
                "vocab": "照らし合わせる",
                "furigana": "てらしあわせる",
                "meaning_vi": "So sánh",
                "meaning_en": "Compare",
                "examples": [
                  {
                    "example_text": "過去の同様のケースと照らし合わせて考える。",
                    "furigana": "過去（かこ）どうようてあかんがえる。",
                    "meaning_vi": "Suy nghĩ, kiểm tra cùng với trường hợp giống như vậy trong quá khứ.",
                    "meaning_en": "Think about it against similar cases in the past."
                  }
                ],
                "lesson_number": 31
              },
              {
                "vocab": "聞き直す",
                "furigana": "ききなおす",
                "meaning_vi": "Nghe lại",
                "meaning_en": "Re -listen",
                "examples": [
                  {
                    "example_text": "聞こえなかったので聞き直した。",
                    "furigana": "聞（き）きなおした。",
                    "meaning_vi": "Không thể nghe gì nên nghe lại.",
                    "meaning_en": "I couldn't hear it so I listened again."
                  }
                ],
                "lesson_number": 31
              },
              {
                "vocab": "やり直す",
                "furigana": "やりなおす",
                "meaning_vi": "Tôi sẽ thử lại",
                "meaning_en": "I will try again",
                "examples": [
                  {
                    "example_text": "実験がうまくいかなかったので、初めからやり直した。",
                    "furigana": "実験（じっけん）はじなおした。",
                    "meaning_vi": "Thí nghiệm không tốt nên đã làm lại từ đầu.",
                    "meaning_en": "The experiment didn't work, so I started over again."
                  }
                ],
                "lesson_number": 31
              },
              {
                "vocab": "かけ直す",
                "furigana": "かけなおす",
                "meaning_vi": "Gọi lại",
                "meaning_en": "Call back",
                "examples": [
                  {
                    "example_text": "（電話をかけたが、相手がいなかったとき）「またあとで掛け直します」",
                    "furigana": "（電話（でんわ）あいてかなおします」",
                    "meaning_vi": "(Gọi điện đến nhưng đối phương không có) \"Tôi sẽ gọi lại sau\"",
                    "meaning_en": "(If I made a call but there was no one there) \"I'll call you again later.\""
                  }
                ],
                "lesson_number": 32
              },
              {
                "vocab": "出直す",
                "furigana": "でなおす",
                "meaning_vi": "Tôi sẽ quay lại",
                "meaning_en": "I will come back",
                "examples": [
                  {
                    "example_text": "「改めて出直してまいります」",
                    "furigana": "「改（あらた）でなおしてまいります」",
                    "meaning_vi": "Tôi sẽ đến lại lần nữa.",
                    "meaning_en": "\"I'll start again.\""
                  }
                ],
                "lesson_number": 32
              },
              {
                "vocab": "持ち直す",
                "furigana": "もちなおす",
                "meaning_vi": "Quay lại",
                "meaning_en": "Come back",
                "examples": [
                  {
                    "example_text": "落としそうになった荷物を持ち直す。",
                    "furigana": "落（お）にもつもなおす。",
                    "meaning_vi": "Cầm lại đồ vật sắp rơi.",
                    "meaning_en": "I bring back the luggage that I almost dropped."
                  }
                ],
                "lesson_number": 32
              },
              {
                "vocab": "考え直す",
                "furigana": "かんがえなおす",
                "meaning_vi": "Nghĩ lại",
                "meaning_en": "Rethink",
                "examples": [
                  {
                    "example_text": "仕事を辞めるつもりだったが、考え直した方がいいと言われた。",
                    "furigana": "仕事（しごと）やかんがなおほういわれた。",
                    "meaning_vi": "Tôi tính nghỉ việc nhưng người ta bảo nên suy nghĩ lại.",
                    "meaning_en": "I was planning to quit my job, but I was told I should rethink it."
                  }
                ],
                "lesson_number": 32
              },
              {
                "vocab": "思い直す",
                "furigana": "おもいなおす",
                "meaning_vi": "Suy nghĩ lại",
                "meaning_en": "Ruminate",
                "examples": [
                  {
                    "example_text": "就職するつもりだったが思い直して進学することにした。",
                    "furigana": "就職（しゅうしょく）おもなおしんがくすることにした。",
                    "meaning_vi": "Tôi tính đi làm nhưng suy nghĩ lại quyết định đi học cao học.",
                    "meaning_en": "I was planning to get a job, but I decided to change my mind and go on to college."
                  }
                ],
                "lesson_number": 32
              },
              {
                "vocab": "アンテナ",
                "furigana": "アンテナ",
                "meaning_vi": "ăng ten",
                "meaning_en": "antenna",
                "examples": [
                  {
                    "example_text": "アンテナの向きのせいかテレビの映りが悪い。",
                    "furigana": "アンテナの向（む）うつわるい。",
                    "meaning_vi": "Không biết do hướng ăng ten hay không mà hình ảnh tivi không tốt.",
                    "meaning_en": "Perhaps because of the direction of the antenna, the TV is showing poorly."
                  }
                ],
                "lesson_number": 33
              },
              {
                "vocab": "イヤホン",
                "furigana": "イヤホン",
                "meaning_vi": "Tai nghe",
                "meaning_en": "Earphone",
                "examples": [
                  {
                    "example_text": "電車の中でイヤホンを付けて音楽を聞いている若者が多い。",
                    "furigana": "電車（でんしゃ）なかつおんがくきわかものおおい。",
                    "meaning_vi": "Nhiều người trẻ gắm tai phôn và nghe nhạc trên tàu điện.",
                    "meaning_en": "Many young people listen to music while wearing earphones on the train."
                  }
                ],
                "lesson_number": 33
              },
              {
                "vocab": "サイレン",
                "furigana": "サイレン",
                "meaning_vi": "còi báo động",
                "meaning_en": "siren",
                "examples": [
                  {
                    "example_text": "工場でお昼のサイレンが鳴った。",
                    "furigana": "工場（こうじょう）ひるなった。",
                    "meaning_vi": "Tiếng chuông báo hiệu giờ nghỉ trưa ở công ty reo lên.",
                    "meaning_en": "A lunchtime siren rang out at the factory."
                  }
                ],
                "lesson_number": 33
              },
              {
                "vocab": "コード",
                "furigana": "コード",
                "meaning_vi": "mã số",
                "meaning_en": "code",
                "examples": [
                  {
                    "example_text": "アイロンのコードをコンセントにつないだ。",
                    "furigana": "アイロンのコードをコンセントにつないだ。",
                    "meaning_vi": "Dây điện của bàn ủi nối với ổ cắm.",
                    "meaning_en": "Connect the iron cord to the outlet."
                  }
                ],
                "lesson_number": 33
              },
              {
                "vocab": "モニター",
                "furigana": "モニター",
                "meaning_vi": "màn hình",
                "meaning_en": "screen",
                "examples": [
                  {
                    "example_text": "警備室には、建物内部を映すモニターがある。",
                    "furigana": "警備室（けいびしつ）たてものないぶうつすモニターがある。",
                    "meaning_vi": "Ở phòng an ninh có một màn hình phản chiếu bộ phận bên trong tòa nhà.",
                    "meaning_en": "The security room has a monitor that reflects the interior of the building."
                  }
                ],
                "lesson_number": 33
              },
              {
                "vocab": "メーター",
                "furigana": "メーター",
                "meaning_vi": "mét",
                "meaning_en": "meter",
                "examples": [
                  {
                    "example_text": "メーターを見ると、電気やガス使用量が分かる。",
                    "furigana": "メーターを見（み）でんきしようりょうわかる。",
                    "meaning_vi": "Nhìn đồng hồ đo sẽ hiểu biết được lượng tiêu dùng của điện và ga.",
                    "meaning_en": "Looking at the meter, you can see how much electricity and gas is used."
                  }
                ],
                "lesson_number": 33
              },
              {
                "vocab": "ペア",
                "furigana": "ペア",
                "meaning_vi": "đôi",
                "meaning_en": "pair",
                "examples": [
                  {
                    "example_text": "男女をペアになってゲームをした。",
                    "furigana": "男女（だんじょ）をペアになってゲームをした。",
                    "meaning_vi": "Kết hợp cặp đôi nam nữ và chơi trò chơi.",
                    "meaning_en": "A man and a woman were paired with a game."
                  }
                ],
                "lesson_number": 33
              },
              {
                "vocab": "リズム",
                "furigana": "リズム",
                "meaning_vi": "nhịp điệu",
                "meaning_en": "rhythm",
                "examples": [
                  {
                    "example_text": "この曲のリズムは3拍子だ。",
                    "furigana": "この曲（きょく）びょうしだ。",
                    "meaning_vi": "Nhịp của ca khúc này là 3 nhịp.",
                    "meaning_en": "The rhythm of this song is in three beats."
                  }
                ],
                "lesson_number": 33
              },
              {
                "vocab": "アクセント",
                "furigana": "アクセント",
                "meaning_vi": "giọng",
                "meaning_en": "tone",
                "examples": [
                  {
                    "example_text": "｛生活/仕事/睡眠…｝のリズム",
                    "furigana": "｛生活（せいかつ）しごとすいみん…｝のリズム",
                    "meaning_vi": "",
                    "meaning_en": "The rhythm of {Life/Work/Sleep...}"
                  }
                ],
                "lesson_number": 33
              },
              {
                "vocab": "アルファベット",
                "furigana": "アルファベット",
                "meaning_vi": "Bảng chữ cái",
                "meaning_en": "Alphabet",
                "examples": [
                  {
                    "example_text": "図書館では英語の本はアルファベットの順に並べている。",
                    "furigana": "図書館（としょかん）えいごほんじゅんならべている。",
                    "meaning_vi": "Ở thư viện, sách tiếng Anh được xếp theo thứ tự bảng chữ cái.",
                    "meaning_en": "In libraries, English books are arranged in alphabetical order."
                  }
                ],
                "lesson_number": 33
              },
              {
                "vocab": "アドレス",
                "furigana": "アドレス",
                "meaning_vi": "Địa chỉ",
                "meaning_en": "Address",
                "examples": [
                  {
                    "example_text": "友達とメールのアドレスを交換した。",
                    "furigana": "友達（ともだち）こうかんした。",
                    "meaning_vi": "Trao đổi địa chỉ mail với bạn.",
                    "meaning_en": "I exchanged email addresses with friends."
                  }
                ],
                "lesson_number": 33
              },
              {
                "vocab": "メモ",
                "furigana": "メモ",
                "meaning_vi": "Ghi chú",
                "meaning_en": "Note",
                "examples": [
                  {
                    "example_text": "大事なことを紙にメモする。",
                    "furigana": "大事（だいじ）かみにメモする。",
                    "meaning_vi": "Ghi chú điều quan trọng vào giấy.",
                    "meaning_en": "Make note of important things on paper."
                  }
                ],
                "lesson_number": 33
              },
              {
                "vocab": "マーク",
                "furigana": "マーク",
                "meaning_vi": "đánh dấu",
                "meaning_en": "tick",
                "examples": [
                  {
                    "example_text": "文章の重要なポイントにマークを付けて覚える。",
                    "furigana": "文章（ぶんしょう）じゅうようつおぼえる。",
                    "meaning_vi": "Đánh dấu vào chỗ trọng yếu của bài văn để nhớ.",
                    "meaning_en": "Mark important points in the text to remember."
                  }
                ],
                "lesson_number": 33
              },
              {
                "vocab": "イラスト",
                "furigana": "イラスト",
                "meaning_vi": "Hình minh họa",
                "meaning_en": "Illustration",
                "examples": [
                  {
                    "example_text": "この本はイラストがたくさんあって内容が理解やすい。",
                    "furigana": "この本（ほん）ないようりかいやすい。",
                    "meaning_vi": "Quyển sách này có nhiều hình ảnh minh họa nên nội dung rất dễ hiểu.",
                    "meaning_en": "This book has many illustrations and is easy to understand."
                  }
                ],
                "lesson_number": 33
              },
              {
                "vocab": "サイン",
                "furigana": "サイン",
                "meaning_vi": "dấu hiệu",
                "meaning_en": "token",
                "examples": [
                  {
                    "example_text": "契約書にサインをする。",
                    "furigana": "契約書（けいやくしょ）にサインをする。",
                    "meaning_vi": "Kí vào hợp đồng.",
                    "meaning_en": "Sign the contract."
                  }
                ],
                "lesson_number": 34
              },
              {
                "vocab": "スター",
                "furigana": "スター",
                "meaning_vi": "Ngôi sao",
                "meaning_en": "Star",
                "examples": [
                  {
                    "example_text": "映画がヒットし、主演俳優はたちまち世界的なスターになった。",
                    "furigana": "映画（えいが）しゅえんはいゆうせかいてきなスターになった。",
                    "meaning_vi": "Phim hot nên diễn viên chính cũng ngay lập tức trở thành ngôi sao thế giới.",
                    "meaning_en": "The film became a hit, and the lead actor quickly became a global star."
                  }
                ],
                "lesson_number": 34
              },
              {
                "vocab": "アンコール",
                "furigana": "アンコール",
                "meaning_vi": "Encore",
                "meaning_en": "Encore",
                "examples": [
                  {
                    "example_text": "観客のアンコールに応えて出演者が舞台で挨拶した。",
                    "furigana": "観客（かんきゃく）こたしゅつえんしゃぶたいあいさつした。",
                    "meaning_vi": "Để đáp lại yêu cầu của khán giả, diễn viên đã cúi chào ở sân khấu.",
                    "meaning_en": "In response to the audience's encore, the performers greeted the show on stage."
                  }
                ],
                "lesson_number": 34
              },
              {
                "vocab": "モデル",
                "furigana": "モデル",
                "meaning_vi": "Người mẫu",
                "meaning_en": "Model",
                "examples": [
                  {
                    "example_text": "彼女はファッションショーのモデルをしている。",
                    "furigana": "彼女（かのじょ）はファッションショーのモデルをしている。",
                    "meaning_vi": "Cô ấy đang làm người mẫu thời trang ở fashion show.",
                    "meaning_en": "She is a model for a fashion show."
                  }
                ],
                "lesson_number": 34
              },
              {
                "vocab": "サンプル",
                "furigana": "サンプル",
                "meaning_vi": "vật mẫu",
                "meaning_en": "sample",
                "examples": [
                  {
                    "example_text": "食堂の入口に料理のサンプルが置いてある。",
                    "furigana": "食堂（しょくどう）いりくちりょうりおいてある。",
                    "meaning_vi": "Có để sẵn mẫu thức ăn ở cửa ra vào của nhà ăn.",
                    "meaning_en": "A sample of the food is placed at the entrance to the cafeteria."
                  }
                ],
                "lesson_number": 34
              },
              {
                "vocab": "スタイル",
                "furigana": "スタイル",
                "meaning_vi": "phong cách",
                "meaning_en": "style",
                "examples": [
                  {
                    "example_text": "彼女はとてもスタイルがいい。",
                    "furigana": "彼女（かのじょ）はとてもスタイルがいい。",
                    "meaning_vi": "Cô ấy có phong cách thời trang rất tốt.",
                    "meaning_en": "She has a very good style."
                  }
                ],
                "lesson_number": 34
              },
              {
                "vocab": "ウエスト",
                "furigana": "ウエスト",
                "meaning_vi": "Thắt lưng",
                "meaning_en": "Belt",
                "examples": [
                  {
                    "example_text": "最近太ってスカートのウエストがきつくなった。",
                    "furigana": "最近（さいきん）ふとってスカートのウエストがきつくなった。",
                    "meaning_vi": "Gần đây mập lên nên vòng eo váy bị chật.",
                    "meaning_en": "Recently I've become fat and my skirt has become tighter."
                  }
                ],
                "lesson_number": 34
              },
              {
                "vocab": "カロリー",
                "furigana": "カロリー",
                "meaning_vi": "calo",
                "meaning_en": "decline",
                "examples": [
                  {
                    "example_text": "成人男性が1日に必要なカロリーは、1800～2000kcal ぐらいと言われている。",
                    "furigana": "成人（せいじん）だんせいにちひつよういわれている。",
                    "meaning_vi": "Người đàn ông trưởng thành lượng calo cần thiết cho họ một ngày từ 1800 đến 2000kcal.",
                    "meaning_en": "It is said that the daily calories required by an adult man is around 1,800 to 2,000 kcal."
                  }
                ],
                "lesson_number": 34
              },
              {
                "vocab": "オーバー",
                "furigana": "オーバー",
                "meaning_vi": "qua-",
                "meaning_en": "via-",
                "examples": [
                  {
                    "example_text": "志願者が定員をオーバーした。",
                    "furigana": "志願者（しがんしゃ）ていいんをオーバーした。",
                    "meaning_vi": "Những người có nguyện vọng vượt quá số người quy định.",
                    "meaning_en": "The number of applicants exceeded the capacity."
                  }
                ],
                "lesson_number": 34
              },
              {
                "vocab": "コントロール",
                "furigana": "コントロール",
                "meaning_vi": "điều khiển",
                "meaning_en": "control",
                "examples": [
                  {
                    "example_text": "この機械はコンピューターでコントロールされている。",
                    "furigana": "この機械（きかい）はコンピューターでコントロールされている。",
                    "meaning_vi": "Máy này được điều khiển bằng máy tính.",
                    "meaning_en": "This machine is controlled by a computer."
                  }
                ],
                "lesson_number": 34
              },
              {
                "vocab": "カーブ",
                "furigana": "カーブ",
                "meaning_vi": "đường cong",
                "meaning_en": "curve",
                "examples": [
                  {
                    "example_text": "道が大きくカーブしている。",
                    "furigana": "道（みち）おおきくカーブしている。",
                    "meaning_vi": "Con đường làm khúc cua lớn.",
                    "meaning_en": "The road is curved large."
                  }
                ],
                "lesson_number": 35
              },
              {
                "vocab": "コース",
                "furigana": "コース",
                "meaning_vi": "khóa học",
                "meaning_en": "course",
                "examples": [
                  {
                    "example_text": "この道は市民マラソンのコースになっている。",
                    "furigana": "この道（みち）しみんマラソンのコースになっている。",
                    "meaning_vi": "Con đường này trở thành đường đua marathon của thành phố.",
                    "meaning_en": "This road is a civic marathon course."
                  }
                ],
                "lesson_number": 35
              },
              {
                "vocab": "レース",
                "furigana": "レース",
                "meaning_vi": "loài",
                "meaning_en": "species",
                "examples": [
                  {
                    "example_text": "競輪場へレースを見に行った。",
                    "furigana": "競輪（けいりん）じょうみいった。",
                    "meaning_vi": "Tôi đã đến đường đua xe đạp để xem cuộc đua xe.",
                    "meaning_en": "I went to the cycling track to see the race."
                  }
                ],
                "lesson_number": 35
              },
              {
                "vocab": "リード",
                "furigana": "リード",
                "meaning_vi": "Chỉ huy",
                "meaning_en": "Command",
                "examples": [
                  {
                    "example_text": "A国は経済で世界をリードしている。",
                    "furigana": "A国（こく）けいざいせかいをリードしている。",
                    "meaning_vi": "Nước A là nước dẫn đầu thế giới về kinh tế.",
                    "meaning_en": "Country A is the world's leading economy."
                  }
                ],
                "lesson_number": 35
              },
              {
                "vocab": "トップ",
                "furigana": "トップ",
                "meaning_vi": "đứng đầu",
                "meaning_en": "head",
                "examples": [
                  {
                    "example_text": "100メートル走でトップでゴールインした。",
                    "furigana": "100メートル走（そう）でトップでゴールインした。",
                    "meaning_vi": "Nhờ dẫn đầu trong cuộc thi 100m nên đã chiến thắng.",
                    "meaning_en": "He reached the top in the 100-meter run."
                  }
                ],
                "lesson_number": 35
              },
              {
                "vocab": "ゴール",
                "furigana": "ゴール",
                "meaning_vi": "mục tiêu",
                "meaning_en": "target",
                "examples": [
                  {
                    "example_text": "山本選手は、100メートル背泳ぎで世界新記録でゴールした。",
                    "furigana": "山本（やまもと）せんしゅせおよせかいしんきろくでゴールした。",
                    "meaning_vi": "Tuyển thủ Yamamoto trong cuộc thi 100m bơi ngửa đã phá kỉ lục thế giới.",
                    "meaning_en": "Yamamoto finished with a new world record in the 100-meter backstroke."
                  }
                ],
                "lesson_number": 35
              },
              {
                "vocab": "パス",
                "furigana": "パス",
                "meaning_vi": "con đường",
                "meaning_en": "road",
                "examples": [
                  {
                    "example_text": "テストにパスする。",
                    "furigana": "テストにパスする。",
                    "meaning_vi": "Đỗ kì thi.",
                    "meaning_en": "Pass the test."
                  }
                ],
                "lesson_number": 35
              },
              {
                "vocab": "ベスト",
                "furigana": "ベスト",
                "meaning_vi": "Tốt nhất",
                "meaning_en": "Best",
                "examples": [
                  {
                    "example_text": "この方法はベストではないが、かなり効果がある。",
                    "furigana": "この方法（ほうほう）こうかがある。",
                    "meaning_vi": "Phương pháp không phải là tốt nhất nhưng cũng sẽ có hiệu quả.",
                    "meaning_en": "This method is not the best, but it does work very well."
                  }
                ],
                "lesson_number": 35
              },
              {
                "vocab": "レギュラー",
                "furigana": "レギュラー",
                "meaning_vi": "thường xuyên",
                "meaning_en": "frequent",
                "examples": [
                  {
                    "example_text": "チームのレギュラーになれるように頑張っている。",
                    "furigana": "チームのレギュラーになれるように頑張（がんば）っている。",
                    "meaning_vi": "Để có thể quen bình thường với đội tôi sẽ cố gắng.",
                    "meaning_en": "I'm trying my best to become a regular on the team."
                  }
                ],
                "lesson_number": 35
              },
              {
                "vocab": "コーチ",
                "furigana": "コーチ",
                "meaning_vi": "huấn luyện viên",
                "meaning_en": "coach",
                "examples": [
                  {
                    "example_text": "ここ柔道部のコーチは厳しいことで有名だ。",
                    "furigana": "ここ柔道（じゅうどう）ぶきびゆうめいだ。",
                    "meaning_vi": "Huấn luận viên của đội Judo này nổi tiếng nghiêm khắc.",
                    "meaning_en": "The coaches here in the judo club are well known for being strict."
                  }
                ],
                "lesson_number": 35
              },
              {
                "vocab": "キャプテン",
                "furigana": "キャプテン",
                "meaning_vi": "đội trưởng",
                "meaning_en": "captain",
                "examples": [
                  {
                    "example_text": "スポーツのキャプテンは、責任感とチームをまとめる力を求められる。",
                    "furigana": "スポーツのキャプテンは、責任（せきにん）かんちからもとめられる。",
                    "meaning_vi": "Đội trưởng trong thể thao đòi hỏi một người có năng lực tập hợp đội và có tinh thần trách nhiệm.",
                    "meaning_en": "Sports captains are required to have a sense of responsibility and the ability to bring together the team."
                  }
                ],
                "lesson_number": 36
              },
              {
                "vocab": "サークル",
                "furigana": "サークル",
                "meaning_vi": "vòng tròn",
                "meaning_en": "circle",
                "examples": [
                  {
                    "example_text": "学生時代、演劇のサークル入っていた。",
                    "furigana": "学生（がくせい）じだいえんげきはいっていた。",
                    "meaning_vi": "Thời học sinh, tôi đã tham gia câu lạc bộ diễn kịch.",
                    "meaning_en": "When I was a student, I was in a theater club."
                  }
                ],
                "lesson_number": 36
              },
              {
                "vocab": "キャンパス",
                "furigana": "キャンパス",
                "meaning_vi": "khuôn viên đại học",
                "meaning_en": "University campus",
                "examples": [
                  {
                    "example_text": "この大学のキャンパスは緑が豊かだ。",
                    "furigana": "この大学（だいがく）みどりゆたかだ。",
                    "meaning_vi": "Khuôn viên trường này có nhiều cây xanh.",
                    "meaning_en": "This university's campus is rich in greenery."
                  }
                ],
                "lesson_number": 36
              },
              {
                "vocab": "オリエンテーション",
                "furigana": "オリエンテーション",
                "meaning_vi": "định hướng",
                "meaning_en": "orientation",
                "examples": [
                  {
                    "example_text": "新学期、学生を対象に授業登録のオリエンテーションがあった。",
                    "furigana": "新学期（しんがっき）がくせいたいしょうじゅぎょうとうろくのオリエンテーションがあった。",
                    "meaning_vi": "Trong học kì mới, có sự định hướng đăng kí lớp học với đối tượng là các học sinh.",
                    "meaning_en": "In the new semester, students were assigned to orientations to register their classes."
                  }
                ],
                "lesson_number": 36
              },
              {
                "vocab": "カリキュラム",
                "furigana": "カリキュラム",
                "meaning_vi": "chương trình giảng dạy",
                "meaning_en": "curriculum",
                "examples": [
                  {
                    "example_text": "カリキュラムに沿って授業を行う。",
                    "furigana": "カリキュラムに沿（そ）じゅぎょうおこなう。",
                    "meaning_vi": "Tổ chức buổi học theo như giáo trình.",
                    "meaning_en": "Lectures are conducted in line with the curriculum."
                  }
                ],
                "lesson_number": 36
              },
              {
                "vocab": "プログラム",
                "furigana": "プログラム",
                "meaning_vi": "chương trình",
                "meaning_en": "programme",
                "examples": [
                  {
                    "example_text": "大会の参加者にプログラムが配られた。",
                    "furigana": "大会（たいかい）さんかしゃくばられた。",
                    "meaning_vi": "Phát lịch trình cho những người tham gia đại hội.",
                    "meaning_en": "The program was distributed to participants in the tournament."
                  }
                ],
                "lesson_number": 36
              },
              {
                "vocab": "レッスン",
                "furigana": "レッスン",
                "meaning_vi": "bài học",
                "meaning_en": "lesson",
                "examples": [
                  {
                    "example_text": "ピアノのレッスンに通う。",
                    "furigana": "ピアノのレッスンに通（かよ）う。",
                    "meaning_vi": "Theo học khóa học piano.",
                    "meaning_en": "I'm taking piano lessons."
                  }
                ],
                "lesson_number": 36
              },
              {
                "vocab": "レクリエーション",
                "furigana": "レクリエーション",
                "meaning_vi": "Giải trí",
                "meaning_en": "Entertainment",
                "examples": [
                  {
                    "example_text": "合宿では、勉強だけではなくレクリエーションも行われる。",
                    "furigana": "合宿（がっしゅく）べんきょうおこなわれる。",
                    "meaning_vi": "Ở trại huấn luyện, không chỉ có học tập mà sự giải trí cũng được tổ chức.",
                    "meaning_en": "During the training camp, not only studies but recreation is also held."
                  }
                ],
                "lesson_number": 36
              },
              {
                "vocab": "レジャー",
                "furigana": "レジャー",
                "meaning_vi": "thời gian rảnh rỗi",
                "meaning_en": "Free time",
                "examples": [
                  {
                    "example_text": "休みに海外へレジャーに出かける。",
                    "furigana": "休（やす）かいがいでかける。",
                    "meaning_vi": "Tôi sẽ đi nước ngoài thư giãn vào kì nghỉ hè.",
                    "meaning_en": "I go out to leisure abroad on my days off."
                  }
                ],
                "lesson_number": 36
              },
              {
                "vocab": "ガイド",
                "furigana": "ガイド",
                "meaning_vi": "hướng dẫn",
                "meaning_en": "instruct",
                "examples": [
                  {
                    "example_text": "旅行会社でガイドをしている。",
                    "furigana": "旅行（りょこう）がいしゃでガイドをしている。",
                    "meaning_vi": "Tôi làm hướng dẫn viên du lịch tại công ty du lịch.",
                    "meaning_en": "I'm a guide at a travel agency."
                  }
                ],
                "lesson_number": 36
              },
              {
                "vocab": "シーズン",
                "furigana": "シーズン",
                "meaning_vi": "mùa",
                "meaning_en": "season",
                "examples": [
                  {
                    "example_text": "日本では12月から2月にかけてが受験のシーズンだ。",
                    "furigana": "日本（にほん）がつがつじゅけんのシーズンだ。",
                    "meaning_vi": "Ở Nhật Bản từ tháng 12 đến tháng 2 là mùa thi cử.",
                    "meaning_en": "In Japan, the exam season is from December to February."
                  }
                ],
                "lesson_number": 36
              },
              {
                "vocab": "ダイヤ(グラム)",
                "furigana": "ダイヤ(グラム)",
                "meaning_vi": "sơ đồ)",
                "meaning_en": "diagram)",
                "examples": [
                  {
                    "example_text": "事故で列車のダイヤが乱れたが、数時間後に復旧した。",
                    "furigana": "事故（じこ）れっしゃみだすうじかんごふっきゅうした。",
                    "meaning_vi": "Do sự cố nên bảng giờ tàu chạy bị hỗn loạn, sau vài giờ đã khôi phục được.",
                    "meaning_en": "The train schedule was disrupted in the accident, but it was restored a few hours later."
                  }
                ],
                "lesson_number": 36
              },
              {
                "vocab": "ウイークデー",
                "furigana": "ウイークデー",
                "meaning_vi": "Ngày trong tuần",
                "meaning_en": "Day of the week",
                "examples": [
                  {
                    "example_text": "この道路はウィークデーは渋滞するが、休日はガラガラだ。",
                    "furigana": "この道路（どうろ）じゅうたいきゅうじつはガラガラだ。",
                    "meaning_vi": "Ở con đường này, ngày trong tuần đã tắc nghẽn rồi đến ngày nghĩ là huyên náo lên.",
                    "meaning_en": "This road is congested on weekends, but it's empty on holidays."
                  }
                ],
                "lesson_number": 36
              },
              {
                "vocab": "サービス",
                "furigana": "サービス",
                "meaning_vi": "dịch vụ",
                "meaning_en": "service",
                "examples": [
                  {
                    "example_text": "「当社はお客様に喜ばれるサービスを心がけております」",
                    "furigana": "「当社（とうしゃ）きゃくさまよろここころがけております」",
                    "meaning_vi": "Công ty chúng tôi luôn khắc ghi trong tim những dịch vụ làm cho khách hàng được thõa mãn.",
                    "meaning_en": "\"We strive to provide services that please our customers.\""
                  }
                ],
                "lesson_number": 36
              },
              {
                "vocab": "アルコール",
                "furigana": "アルコール",
                "meaning_vi": "rượu bia",
                "meaning_en": "ale",
                "examples": [
                  {
                    "example_text": "注射の前にアルコールで消毒する。",
                    "furigana": "注射（ちゅうしゃ）まえしょうどくする。",
                    "meaning_vi": "Trước khi tiêm cần phải khử trùng bằng cồn.",
                    "meaning_en": "Disinfect with alcohol before injection."
                  }
                ],
                "lesson_number": 37
              },
              {
                "vocab": "デコレーション",
                "furigana": "デコレーション",
                "meaning_vi": "trang trí",
                "meaning_en": "decorate",
                "examples": [
                  {
                    "example_text": "12月になると、多くの店がクリスマスのデコレーションをする。",
                    "furigana": "12月（がつ）おおみせがクリスマスのデコレーションをする。",
                    "meaning_vi": "Đến tháng 12 nhiều cửa hàng sẽ trang trí lễ giáng sinh.",
                    "meaning_en": "In December, many shops will decorate Christmas."
                  }
                ],
                "lesson_number": 37
              },
              {
                "vocab": "最も",
                "furigana": "もっとも",
                "meaning_vi": "hầu hết",
                "meaning_en": "most of",
                "examples": [
                  {
                    "example_text": "世界で最も面積の広い国はロシアである。",
                    "furigana": "世界（せかい）もっとめんせきひろくにはロシアである。",
                    "meaning_vi": "Trên thế giới đất nước có diện tích lớn nhất là nước Nga.",
                    "meaning_en": "Russia is the largest country in the world."
                  }
                ],
                "lesson_number": 38
              },
              {
                "vocab": "ほぼ",
                "furigana": "ほぼ",
                "meaning_vi": "Hầu hết",
                "meaning_en": "Most of",
                "examples": [
                  {
                    "example_text": "新しいビルはほぼ完成した。",
                    "furigana": "新（あたら）かんせいした。",
                    "meaning_vi": "Tòa nhà mới đã gần như xây xong.",
                    "meaning_en": "The new building is almost complete."
                  }
                ],
                "lesson_number": 38
              },
              {
                "vocab": "相当",
                "furigana": "そうとう",
                "meaning_vi": "khá",
                "meaning_en": "rather",
                "examples": [
                  {
                    "example_text": "彼の表情からすると、相当強く叱られたようだ。",
                    "furigana": "彼（かれ）ひょうじょうそうとうつよしかられたようだ。",
                    "meaning_vi": "Từ biểu cảm của anh ấy, chắc đã bị mắng xối xả.",
                    "meaning_en": "From his expression, it seemed he was scolded quite strongly."
                  }
                ],
                "lesson_number": 38
              },
              {
                "vocab": "割に(割と・割合に・と)",
                "furigana": "わりに(わりと・わりあいに・と)",
                "meaning_vi": "Tương đối (theo tỷ lệ)",
                "meaning_en": "Relative (in proportion)",
                "examples": [
                  {
                    "example_text": "道が込んでいるかと思ったら、わりにすいていた。",
                    "furigana": "道（みち）こおもったら、わりにすいていた。",
                    "meaning_vi": "Cứ nghĩ đường sẽ đông lắm nhưng lại khá vắng.",
                    "meaning_en": "I thought there was a road that was in the middle of the road, but it was rather empty."
                  }
                ],
                "lesson_number": 38
              },
              {
                "vocab": "多少",
                "furigana": "たしょう",
                "meaning_vi": "Bao nhiêu",
                "meaning_en": "How much",
                "examples": [
                  {
                    "example_text": "寒い日が続いているが、今日は多少暖かい。",
                    "furigana": "寒（さむ）ひつづきょうたしょうあたたかい。",
                    "meaning_vi": "Trải qua những ngày lạnh giá, hôm nay trời đã có ấm chút ít.",
                    "meaning_en": "It's been cold, but today it's a little warmer."
                  }
                ],
                "lesson_number": 38
              },
              {
                "vocab": "少々",
                "furigana": "々しょうしょう",
                "meaning_vi": "Một chút",
                "meaning_en": "A little bit",
                "examples": [
                  {
                    "example_text": "魚は水気を取り、塩を少々降っておきます。",
                    "furigana": "魚（さかな）みずけとしおしょうしょうふっておきます。",
                    "meaning_vi": "Rắc một ít muối để cá không bị ẩm.",
                    "meaning_en": "Remove the fish and pour some salt on it."
                  }
                ],
                "lesson_number": 38
              },
              {
                "vocab": "全て",
                "furigana": "すべて",
                "meaning_vi": "tất cả",
                "meaning_en": "all",
                "examples": [
                  {
                    "example_text": "問題はすべて解決した。",
                    "furigana": "問題（もんだい）かいけつした。",
                    "meaning_vi": "Vấn đề đã giải quyết hoàn toàn.",
                    "meaning_en": "All the problems have been solved."
                  }
                ],
                "lesson_number": 38
              },
              {
                "vocab": "何もかも",
                "furigana": "なにもかも",
                "meaning_vi": "Mọi thứ",
                "meaning_en": "Everything",
                "examples": [
                  {
                    "example_text": "何もかも捨てて人生をやり直したい。",
                    "furigana": "何（なに）すじんせいなおしたい。",
                    "meaning_vi": "Muốn vứt bỏ mọi thứ để làm lại cuộc sống.",
                    "meaning_en": "I want to throw away everything and start my life over again."
                  }
                ],
                "lesson_number": 38
              },
              {
                "vocab": "たっぷり",
                "furigana": "たっぷり",
                "meaning_vi": "Rất nhiều",
                "meaning_en": "So many",
                "examples": [
                  {
                    "example_text": "時間がたっぷりあるから、急がなくてもいい。",
                    "furigana": "時間（じかん）いそがなくてもいい。",
                    "meaning_vi": "Có đủ thời gian nên không cần phải vội vàng đâu.",
                    "meaning_en": "There's plenty of time, so there's no need to hurry."
                  }
                ],
                "lesson_number": 38
              },
              {
                "vocab": "出来るだけ",
                "furigana": "できるだけ",
                "meaning_vi": "Càng nhiều càng tốt",
                "meaning_en": "As much as possible",
                "examples": [
                  {
                    "example_text": "「できるだけ早くお返事ください」",
                    "furigana": "「できるだけ早（はや）へんじください」",
                    "meaning_vi": "Nếu được thì hãy trả lời sớm cho tôi.",
                    "meaning_en": "\"Please reply as soon as possible.\""
                  }
                ],
                "lesson_number": 38
              },
              {
                "vocab": "次第に",
                "furigana": "しだいに",
                "meaning_vi": "dần dần",
                "meaning_en": "gradually",
                "examples": [
                  {
                    "example_text": "冬至を過ぎると、日が次第に長くなる。",
                    "furigana": "冬至（とうじ）すひしだいながくなる。",
                    "meaning_vi": "Qua đông chí thì ngày trở nên dài hơn.",
                    "meaning_en": "After the winter solstice, the days gradually become longer."
                  }
                ],
                "lesson_number": 38
              },
              {
                "vocab": "徐々に",
                "furigana": "々じょじょに",
                "meaning_vi": "dần dần",
                "meaning_en": "gradually",
                "examples": [
                  {
                    "example_text": "車は徐々にスピードを落とし、やがて止まった。",
                    "furigana": "車（くるま）じょじょおとまった。",
                    "meaning_vi": "Ô tô hạ tốc độ dần dần và cuối cùng dừng lại.",
                    "meaning_en": "The car gradually slowed down and then stopped."
                  }
                ],
                "lesson_number": 38
              },
              {
                "vocab": "更に",
                "furigana": "さらに",
                "meaning_vi": "Hơn nữa",
                "meaning_en": "Furthermore",
                "examples": [
                  {
                    "example_text": "7月も暑かったが、8月になるとさらに暑さが増した。",
                    "furigana": "7月（がつ）あつがつあつました。",
                    "meaning_vi": "Tháng 7 đã nóng rồi, đến tháng 8 sẽ lại nóng hơn.",
                    "meaning_en": "July was hot, but in August it got even hotter."
                  }
                ],
                "lesson_number": 38
              },
              {
                "vocab": "一層",
                "furigana": "いっそう",
                "meaning_vi": "lớp",
                "meaning_en": "class",
                "examples": [
                  {
                    "example_text": "夜になって、風雨は一層激しくなった。",
                    "furigana": "夜（よる）ふうういっそうはげしくなった。",
                    "meaning_vi": "Đến tối mưa gió sẽ trở nên mạnh hơn.",
                    "meaning_en": "At night, the wind and rain became even more intense."
                  }
                ],
                "lesson_number": 38
              },
              {
                "vocab": "一段と",
                "furigana": "いちだんと",
                "meaning_vi": "Một bước",
                "meaning_en": "One step",
                "examples": [
                  {
                    "example_text": "1月になると、寒さは一段と厳しくなった。",
                    "furigana": "1月（がつ）さむいちだんきびしくなった。",
                    "meaning_vi": "Bước vào tháng 1, cái lạnh sẽ khắc nghiệt hơn nhiều.",
                    "meaning_en": "By January, the cold got even worse."
                  }
                ],
                "lesson_number": 39
              },
              {
                "vocab": "より",
                "furigana": "より",
                "meaning_vi": "xoắn",
                "meaning_en": "curly",
                "examples": [
                  {
                    "example_text": "より良い未来を築くために、みんなで力を合わせましょう。",
                    "furigana": "より良（よ）みらいきずちからあわせましょう。",
                    "meaning_vi": "Mọi người hãy cùng chung sức với nhau để xây dựng một tương lai tốt đẹp hơn.",
                    "meaning_en": "Let's all work together to build a better future."
                  }
                ],
                "lesson_number": 39
              },
              {
                "vocab": "結局",
                "furigana": "けっきょく",
                "meaning_vi": "Cuối cùng",
                "meaning_en": "Final",
                "examples": [
                  {
                    "example_text": "いろいろ考えて、結局断ることにした。",
                    "furigana": "いろいろ考（かんが）けっきょくことわることにした。",
                    "meaning_vi": "Tôi đã suy nghĩ rất nhiều và quyết định từ chối.",
                    "meaning_en": "After thinking about it a lot, I decided to refuse."
                  }
                ],
                "lesson_number": 39
              },
              {
                "vocab": "漸く",
                "furigana": "ようやく",
                "meaning_vi": "Cuối cùng",
                "meaning_en": "Final",
                "examples": [
                  {
                    "example_text": "5年かかって、ようやく橋が完成した。",
                    "furigana": "5年（ねん）はしかんせいした。",
                    "meaning_vi": "Mất 5 năm, cuối cùng thì cây cầu cũng đã hoàn thành.",
                    "meaning_en": "After five years, the bridge was finally completed."
                  }
                ],
                "lesson_number": 39
              },
              {
                "vocab": "再び",
                "furigana": "ふたたび",
                "meaning_vi": "lại",
                "meaning_en": "again",
                "examples": [
                  {
                    "example_text": "1年目は不合格だったので、翌年再び受験し、今度は合格した。",
                    "furigana": "1年（ねん）めふごうかくよくねんふたたじゅけんこんどごうかくした。",
                    "meaning_vi": "Năm thứ nhất thi trượt, năm nay thi lần nữa và đã đổ.",
                    "meaning_en": "I failed my first year, so I took the exam again the following year, and this time I passed."
                  }
                ],
                "lesson_number": 39
              },
              {
                "vocab": "忽ち",
                "furigana": "たちまち",
                "meaning_vi": "ngay lập tức",
                "meaning_en": "right away",
                "examples": [
                  {
                    "example_text": "空が暗くなったかと思うと、たちまち雨が降り始めた。",
                    "furigana": "空（そら）くらおもあめふはじめた。",
                    "meaning_vi": "Bầu trời tối lại, ngay lập tức trời bắt đầu mưa.",
                    "meaning_en": "Just as the sky was getting dark, it started to rain immediately."
                  }
                ],
                "lesson_number": 39
              },
              {
                "vocab": "今度",
                "furigana": "こんど",
                "meaning_vi": "lần sau",
                "meaning_en": "next time",
                "examples": [
                  {
                    "example_text": "今度できたレストランは、味がいいと評判だ。",
                    "furigana": "今度（こんど）あじひょうばんだ。",
                    "meaning_vi": "Nhà hàng vừa mới hoàn thành được đánh giá là ngon đấy.",
                    "meaning_en": "The next restaurant opened is well known for its good taste."
                  }
                ],
                "lesson_number": 39
              },
              {
                "vocab": "今後",
                "furigana": "こんご",
                "meaning_vi": "Từ giờ trở đi",
                "meaning_en": "From now on",
                "examples": [
                  {
                    "example_text": "会社を辞めた。今後のことはまだ何も決まっていない。",
                    "furigana": "会社（かいしゃ）やこんごなにきまっていない。",
                    "meaning_vi": "Nghỉ công ty và sau đó làm gì tôi vẫn chưa quyết định.",
                    "meaning_en": "I left the company. Nothing has been decided yet for the future."
                  }
                ],
                "lesson_number": 39
              },
              {
                "vocab": "後に",
                "furigana": "あとに",
                "meaning_vi": "Sau đó",
                "meaning_en": "Afterward",
                "examples": [
                  {
                    "example_text": "松本さんは文学部を卒業した後に、医学部に入り直したそうだ。",
                    "furigana": "松本（まつもと）ぶんがくぶそつぎょうのちいがくぶはいなおしたそうだ。",
                    "meaning_vi": "Matsumoto sau khi tốt nghiệp ngành văn học sẽ vào học lại ngành y đấy.",
                    "meaning_en": "After graduating from the Faculty of Letters, Matsumoto re-entered medical school."
                  }
                ],
                "lesson_number": 39
              },
              {
                "vocab": "間も無く",
                "furigana": "まもなく",
                "meaning_vi": "sớm",
                "meaning_en": "early",
                "examples": [
                  {
                    "example_text": "「まもなく開演です。お席にお着きになってお待ちください」",
                    "furigana": "「まもなく開演（かいえん）せきつまちください」",
                    "meaning_vi": "Buổi biểu diễn sắp bắt đầu, quý khách vui lòng ổn định chỗ ngồi và chờ xem.",
                    "meaning_en": "\"The show will start soon. Please take your seat and wait.\""
                  }
                ],
                "lesson_number": 39
              },
              {
                "vocab": "そのうち(に)",
                "furigana": "そのうち(に)",
                "meaning_vi": "Cuối cùng (vào)",
                "meaning_en": "Last (in)",
                "examples": [
                  {
                    "example_text": "「そんなめちゃくちゃな生活をしていたら、そのうち病気になるよ」",
                    "furigana": "「そんなめちゃくちゃな生活（せいかつ）びょうきになるよ」",
                    "meaning_vi": "Sống cuộc sống bừa bãi như thế có ngày bị bệnh đó.",
                    "meaning_en": "\"If you live such a messed up life, you'll eventually get sick.\""
                  }
                ],
                "lesson_number": 39
              },
              {
                "vocab": "やがて",
                "furigana": "やがて",
                "meaning_vi": "Sau cùng",
                "meaning_en": "Last",
                "examples": [
                  {
                    "example_text": "朝5時になった。やがて夜が明けるだろう。",
                    "furigana": "朝（あさ）じよあけるだろう。",
                    "meaning_vi": "5 giờ sáng rồi. Sắp rạng đông rồi.",
                    "meaning_en": "It was 5am. The dawn will soon begin."
                  }
                ],
                "lesson_number": 39
              },
              {
                "vocab": "いずれ",
                "furigana": "いずれ",
                "meaning_vi": "Một ngày nào đó",
                "meaning_en": "One day",
                "examples": [
                  {
                    "example_text": "子供はいずれ親から離れていくものだ。",
                    "furigana": "子供（こども）おやはなれていくものだ。",
                    "meaning_vi": "Con cái sớm hay muộn cũng rời xa bố mẹ.",
                    "meaning_en": "Children will eventually leave their parents."
                  }
                ],
                "lesson_number": 39
              },
              {
                "vocab": "先ほど",
                "furigana": "さきほど",
                "meaning_vi": "Vừa rồi",
                "meaning_en": "Just now",
                "examples": [
                  {
                    "example_text": "先ほど、無事到着したとの連絡があった。",
                    "furigana": "先（さき）ぶじとうちゃくれんらくがあった。",
                    "meaning_vi": "Vừa rồi có liên lạc rằng đã đến nơi an toàn.",
                    "meaning_en": "I just received a message saying it had arrived safely."
                  }
                ],
                "lesson_number": 39
              },
              {
                "vocab": "疾っくに",
                "furigana": "しつっくに",
                "meaning_vi": "Chậm",
                "meaning_en": "Slow",
                "examples": [
                  {
                    "example_text": "「松井さんは？」「とっくに帰ったよ」",
                    "furigana": "「松井（まつい）かえったよ」",
                    "meaning_vi": "Matsui đâu? Về lâu rồi.",
                    "meaning_en": "\"What about Matsui-san?\" \"I've been home long ago.\""
                  }
                ],
                "lesson_number": 39
              },
              {
                "vocab": "既に",
                "furigana": "すでに",
                "meaning_vi": "đã",
                "meaning_en": "Satisfied",
                "examples": [
                  {
                    "example_text": "私が駅に着いたとき、終電はすでに出た後だった。",
                    "furigana": "私（わたし）えきつしゅうでんであとだった。",
                    "meaning_vi": "Khi tôi đến nhà ga thì đã sau chuyến tàu cuối cùng rồi.",
                    "meaning_en": "When I arrived at the station, the last train was already out."
                  }
                ],
                "lesson_number": 40
              },
              {
                "vocab": "事前に",
                "furigana": "じぜんに",
                "meaning_vi": "Trước bạn",
                "meaning_en": "Before you",
                "examples": [
                  {
                    "example_text": "インタビューの相手に、事前に質問を伝えておいた。",
                    "furigana": "インタビューの相手（あいて）じぜんしつもんつたえておいた。",
                    "meaning_vi": "Trước tiên phải truyền tải câu hỏi đến người phỏng vấn.",
                    "meaning_en": "I told the interviewer about the questions I had asked in advance."
                  }
                ],
                "lesson_number": 40
              },
              {
                "vocab": "当日",
                "furigana": "とうじつ",
                "meaning_vi": "Vào ngày",
                "meaning_en": "Day",
                "examples": [
                  {
                    "example_text": "入式当日、熱を出してしまった。",
                    "furigana": "入（にゅう）しきとうじつねつだしてしまった。",
                    "meaning_vi": "Vào ngày thi thì lại bị ốm.",
                    "meaning_en": "On the day of the ceremony, I got a fever."
                  }
                ],
                "lesson_number": 40
              },
              {
                "vocab": "当時",
                "furigana": "とうじ",
                "meaning_vi": "tại thời điểm đó",
                "meaning_en": "At that time",
                "examples": [
                  {
                    "example_text": "私は京都出身だが、当時住んでいた家はもうない。",
                    "furigana": "私（わたし）きょうとしゅっしんとうじすいえはもうない。",
                    "meaning_vi": "Tôi suất thân ở Kyoto nhưng ngôi nhà sống thòi gian đó đã không còn nữa.",
                    "meaning_en": "I'm from Kyoto, but I no longer have the house I lived in at the time."
                  }
                ],
                "lesson_number": 40
              },
              {
                "vocab": "一時",
                "furigana": "いちじ",
                "meaning_vi": "Tạm thời",
                "meaning_en": "Temporary",
                "examples": [
                  {
                    "example_text": "子供のころ、一時アメリカに住んでいたことがある。",
                    "furigana": "子供（こども）いちじすんでいたことがある。",
                    "meaning_vi": "Lúc tôi còn nhỏ, tôi đã từng sống ở Mỹ.",
                    "meaning_en": "I used to live in the United States for a while as a child."
                  }
                ],
                "lesson_number": 40
              },
              {
                "vocab": "至急",
                "furigana": "しきゅう",
                "meaning_vi": "cấp bách",
                "meaning_en": "urgent",
                "examples": [
                  {
                    "example_text": "この患者は至急病院へ運ぶ必要がある。",
                    "furigana": "この患者（かんじゃ）しきゅうびょういんはこひつようがある。",
                    "meaning_vi": "Bệnh nhân này cần được chuyển đến bệnh viện khẩn cấp.",
                    "meaning_en": "This patient must be taken to the hospital as soon as possible."
                  }
                ],
                "lesson_number": 40
              },
              {
                "vocab": "直ちに",
                "furigana": "ただちに",
                "meaning_vi": "ngay lập tức",
                "meaning_en": "right away",
                "examples": [
                  {
                    "example_text": "事故の情報は直ちに社長に伝えられた。",
                    "furigana": "事故（じこ）じょうほうただしゃちょうつたえられた。",
                    "meaning_vi": "Thông tin của vụ tai nạn ngay lập tức đã được lan truyền đến giám đốc.",
                    "meaning_en": "Information about the accident was immediately communicated to the president."
                  }
                ],
                "lesson_number": 40
              },
              {
                "vocab": "早速",
                "furigana": "さっそく",
                "meaning_vi": "ngay lập tức",
                "meaning_en": "right away",
                "examples": [
                  {
                    "example_text": "新しいレストランができたので、さっそく行ってみた。",
                    "furigana": "新（あたら）いってみた。",
                    "meaning_vi": "Cửa hàng mới vừa mới hoàn thành phải nhanh đến xem thử.",
                    "meaning_en": "A new restaurant was set up so I went straight to it."
                  }
                ],
                "lesson_number": 40
              },
              {
                "vocab": "行き成り",
                "furigana": "いきなり",
                "meaning_vi": "Kết quả",
                "meaning_en": "Result",
                "examples": [
                  {
                    "example_text": "ノックもせずにいきなり部屋に入るのは失礼だ。",
                    "furigana": "ノックもせずにいきなり部屋（へや）はいしつれいだ。",
                    "meaning_vi": "Không gõ cửa mà bất thình lình vào phòng là bất lịch sự.",
                    "meaning_en": "It's rude to suddenly enter the room without even knocking."
                  }
                ],
                "lesson_number": 40
              },
              {
                "vocab": "常に",
                "furigana": "つねに",
                "meaning_vi": "luôn luôn",
                "meaning_en": "always",
                "examples": [
                  {
                    "example_text": "鈴木さんは常に努力を怠らない、素晴らしい学生だ。",
                    "furigana": "鈴木（すずき）つねどりょくおこたすばがくせいだ。",
                    "meaning_vi": "Suzuki lúc nào cũng không sao lãng việc nổ lực, đúng là học sinh tuyệt vời.",
                    "meaning_en": "Suzuki is a wonderful student who always keeps trying hard."
                  }
                ],
                "lesson_number": 40
              },
              {
                "vocab": "絶えず",
                "furigana": "たえず",
                "meaning_vi": "liên tục",
                "meaning_en": "continuous",
                "examples": [
                  {
                    "example_text": "妹は体が弱くて、絶えず風邪を引いている。",
                    "furigana": "妹（いもうと）からだよわたかぜひいている。",
                    "meaning_vi": "Em gái tôi gầy yếu nên bị bệnh suốt.",
                    "meaning_en": "My sister is weak and constantly catches a cold."
                  }
                ],
                "lesson_number": 40
              },
              {
                "vocab": "屡々",
                "furigana": "々しばしば",
                "meaning_vi": "Thường",
                "meaning_en": "Often",
                "examples": [
                  {
                    "example_text": "年のせいか、しばしば物忘れをするようになった。",
                    "furigana": "年（とし）ものわすれをするようになった。",
                    "meaning_vi": "Không biết có phải do tuổi cao hay không mà bắt đầu hay quên đồ.",
                    "meaning_en": "Perhaps because of my age, I often end up forgetting things."
                  }
                ],
                "lesson_number": 40
              },
              {
                "vocab": "度々",
                "furigana": "々たびたび",
                "meaning_vi": "Thường xuyên",
                "meaning_en": "Frequent",
                "examples": [
                  {
                    "example_text": "田中さんとは仕事以外でもたびたび会うようになった。",
                    "furigana": "田中（たなか）しごといがいあうようになった。",
                    "meaning_vi": "Cũng thường hay gặp anh Tanaka kể cả lúc ngoài công việc.",
                    "meaning_en": "I've started meeting Tanaka often outside of work."
                  }
                ],
                "lesson_number": 40
              },
              {
                "vocab": "しょっちゅう",
                "furigana": "しょっちゅう",
                "meaning_vi": "Thường",
                "meaning_en": "Often",
                "examples": [
                  {
                    "example_text": "この道路のバスはしょっちゅう遅れるから困る。",
                    "furigana": "この道路（どうろ）おくこまる。",
                    "meaning_vi": "Xe buýt đường này thường xuyên đến trể thật rắc rối.",
                    "meaning_en": "Buses on this road are often late, so it's a problem."
                  }
                ],
                "lesson_number": 40
              },
              {
                "vocab": "偶に",
                "furigana": "たまに",
                "meaning_vi": "Tình cờ",
                "meaning_en": "Incidentally",
                "examples": [
                  {
                    "example_text": "最近運動不足なので、たまにたくさん歩くと疲れる。",
                    "furigana": "最近（さいきん）うんどうぶそくあるつかれる。",
                    "meaning_vi": "Gần đây ít vận động nên thỉnh thoảng vận động nhiều chút là lại mệt.",
                    "meaning_en": "I've been feeling a little lack of exercise lately, so walking a lot is tiring."
                  }
                ],
                "lesson_number": 40
              },
              {
                "vocab": "滅多に",
                "furigana": "めったに",
                "meaning_vi": "Thường",
                "meaning_en": "Often",
                "examples": [
                  {
                    "example_text": "この辺りでは、雪はめったに降らない。",
                    "furigana": "この辺（あた）ゆきふらない。",
                    "meaning_vi": "Ở vùng này tuyết hiếm khi rơi.",
                    "meaning_en": "There's rarely snow around here."
                  }
                ],
                "lesson_number": 40
              },
              {
                "vocab": "にこにこ・にっこり",
                "furigana": "にこにこ・にっこり",
                "meaning_vi": "Nụ cười, mỉm cười",
                "meaning_en": "Smile, smile",
                "examples": [
                  {
                    "example_text": "あの人はいつも愛想よく、にこにこしている。",
                    "furigana": "あの人（ひと）あいそよく、にこにこしている。",
                    "meaning_vi": "Người đó dễ gần lúc nào cũng cười khúc khích.",
                    "meaning_en": "That person is always friendly and smiling."
                  }
                ],
                "lesson_number": 40
              },
              {
                "vocab": "にやにや・にやりと",
                "furigana": "にやにや・にやりと",
                "meaning_vi": "Cười toe toét",
                "meaning_en": "Grin",
                "examples": [
                  {
                    "example_text": "「何をニヤニヤしているんだ。気持ち悪い」",
                    "furigana": "「何（なに）きもわるい」",
                    "meaning_vi": "Có con gì kêu meo meo thê gì, bực mình quá.",
                    "meaning_en": "\"What are you grinning? Is it disgusting?\""
                  }
                ],
                "lesson_number": 41
              },
              {
                "vocab": "どきどき・どきりと",
                "furigana": "どきどき・どきりと",
                "meaning_vi": "Bị kích thích và hồi hộp",
                "meaning_en": "Stimulated and nervous",
                "examples": [
                  {
                    "example_text": "緊張で胸がどきどきする。",
                    "furigana": "緊張（きんちょう）むねがどきどきする。",
                    "meaning_vi": "Hồi hộp làm tim đập thình thịch.",
                    "meaning_en": "My heart throbbed with tension."
                  }
                ],
                "lesson_number": 41
              },
              {
                "vocab": "はらはら",
                "furigana": "はらはら",
                "meaning_vi": "Harahara",
                "meaning_en": "Hamper",
                "examples": [
                  {
                    "example_text": "桜の花びらがはらはらと散った。",
                    "furigana": "桜（さくら）はなちった。",
                    "meaning_vi": "Những cánh hoa anh đào run rẫy rơi xuống.",
                    "meaning_en": "The cherry blossom petals scattered."
                  }
                ],
                "lesson_number": 41
              },
              {
                "vocab": "かんかん",
                "furigana": "かんかん",
                "meaning_vi": "Kankan",
                "meaning_en": "No",
                "examples": [
                  {
                    "example_text": "「お父さん、怒ってる？」「かんかんだよ」",
                    "furigana": "「お父（とう）おこってる？」「かんかんだよ」",
                    "meaning_vi": "Bố đang giận à? Ầm ầm lên đấy!",
                    "meaning_en": "\"Dad, are you angry?\" \"No way?\""
                  }
                ],
                "lesson_number": 41
              },
              {
                "vocab": "びしょびしょ・びっしょり",
                "furigana": "びしょびしょ・びっしょり",
                "meaning_vi": "Ướt và ngâm",
                "meaning_en": "Wet and soaked",
                "examples": [
                  {
                    "example_text": "洗面台の周りがびしょびしょだ。",
                    "furigana": "洗面台（せんめんだい）まわりがびしょびしょだ。",
                    "meaning_vi": "Xung quanh bồn rửa ướt sủng.",
                    "meaning_en": "The area around the sink is soaked."
                  }
                ],
                "lesson_number": 41
              },
              {
                "vocab": "うろうろ",
                "furigana": "うろうろ",
                "meaning_vi": "Hãy đi",
                "meaning_en": "Please go",
                "examples": [
                  {
                    "example_text": "友人の家の場所が分からず、30分もうろうろ歩き回った。",
                    "furigana": "友人（ゆうじん）いえばしょわぷんあるまわった。",
                    "meaning_vi": "Không biết nhà bạn nên đi lòng vong mất 30 phút.",
                    "meaning_en": "I didn't know where my friend was, so I wandered around for 30 minutes."
                  }
                ],
                "lesson_number": 41
              },
              {
                "vocab": "のろのろ",
                "furigana": "のろのろ",
                "meaning_vi": "Một cái",
                "meaning_en": "One",
                "examples": [
                  {
                    "example_text": "渋滞で、車はのろのろとしか進まなかった。",
                    "furigana": "渋滞（じゅうたい）くるますすまなかった。",
                    "meaning_vi": "Do tắc nghẽn nên ô tô chỉ tiến chậm rãi.",
                    "meaning_en": "The car was running slowly due to traffic."
                  }
                ],
                "lesson_number": 41
              },
              {
                "vocab": "ふらふら",
                "furigana": "ふらふら",
                "meaning_vi": "Lung lay",
                "meaning_en": "Lung lay",
                "examples": [
                  {
                    "example_text": "熱で頭がふらふらする。",
                    "furigana": "熱（ねつ）あたまがふらふらする。",
                    "meaning_vi": "Do cảm nên đầu choáng váng.",
                    "meaning_en": "My head is shaking from the fever."
                  }
                ],
                "lesson_number": 41
              },
              {
                "vocab": "ぶらぶら",
                "furigana": "ぶらぶら",
                "meaning_vi": "Đi dạo xung quanh",
                "meaning_en": "Walk around",
                "examples": [
                  {
                    "example_text": "折れた木の枝がぶらぶら揺れている。",
                    "furigana": "折（お）きえだゆれている。",
                    "meaning_vi": "Cành cây bị gãy đang đong đưa.",
                    "meaning_en": "Broken tree branches swaying around."
                  }
                ],
                "lesson_number": 41
              },
              {
                "vocab": "従って",
                "furigana": "したがって",
                "meaning_vi": "Vì thế",
                "meaning_en": "Therefore",
                "examples": [
                  {
                    "example_text": "A社は大企業で給料も高い。したがって、入社希望も多い。",
                    "furigana": "A社（しゃ）だいきぎょうきゅうりょうたかにゅうしゃきぼうおおい。",
                    "meaning_vi": "Công ty A là một công ty lớn nên lương cũng cao, theo đó thì người có nguyện vọng vào công ty cũng nhiều.",
                    "meaning_en": "Company A is a large company and has a high salary. Therefore, there are many requests for joining the company."
                  }
                ],
                "lesson_number": 41
              },
              {
                "vocab": "だが",
                "furigana": "だが",
                "meaning_vi": "Nhưng",
                "meaning_en": "But",
                "examples": [
                  {
                    "example_text": "必死に勉強した。だが、不合格だった。",
                    "furigana": "必死（ひっし）べんきょうふごうかくだった。",
                    "meaning_vi": "Quyết tâm học vậy mà vẫn trượt.",
                    "meaning_en": "I studied hard. But I failed."
                  }
                ],
                "lesson_number": 41
              },
              {
                "vocab": "ところが",
                "furigana": "ところが",
                "meaning_vi": "Tuy nhiên,",
                "meaning_en": "However,",
                "examples": [
                  {
                    "example_text": "8時には到着する予定だった。ところが事故で渋滞し、9時過ぎになってしまった。",
                    "furigana": "8時（じ）とうちゃくよていじこじゅうたいじすぎになってしまった。",
                    "meaning_vi": "Dự định đến lúc 8 giờ nhưng do tai nạn tắc đường nên mãi hơn 9 giờ mới đến.",
                    "meaning_en": "I was scheduled to arrive at 8am. However, a traffic jam occurred in an accident and it was past 9am."
                  }
                ],
                "lesson_number": 41
              },
              {
                "vocab": "然も",
                "furigana": "しかも",
                "meaning_vi": "Điều đó cũng vậy",
                "meaning_en": "That is the same",
                "examples": [
                  {
                    "example_text": "この辺りの夏は気温が高く、しかも湿度も高い。",
                    "furigana": "この辺（あた）なつきおんたかしつどたかい。",
                    "meaning_vi": "Mùa hè vùng này nhiệt độ rất cao, hơn nữa độ ẩm cũng cao.",
                    "meaning_en": "The temperatures are high in summer around this time, and the humidity is also high."
                  }
                ],
                "lesson_number": 41
              },
              {
                "vocab": "すると",
                "furigana": "すると",
                "meaning_vi": "Sau đó",
                "meaning_en": "Afterward",
                "examples": [
                  {
                    "example_text": "カーテンを開けた。すると、目の前に海が見えた。",
                    "furigana": "カーテンを開（あ）めまえうみみえた。",
                    "meaning_vi": "Mở rèm cửa ra, ngay lập tức có thể nhìn thấy biển trước mắt.",
                    "meaning_en": "I opened the curtains. Then I saw the ocean in front of me."
                  }
                ],
                "lesson_number": 41
              },
              {
                "vocab": "なぜなら",
                "furigana": "なぜなら",
                "meaning_vi": "bởi vì",
                "meaning_en": "because",
                "examples": [
                  {
                    "example_text": "この辺りは昔は海だったと考えられる。なぜなら、貝の化石が見つかっているからだ。",
                    "furigana": "この辺（あた）むかしうみかんがかいかせきみつかっているからだ。",
                    "meaning_vi": "Người ta nói vùng này trước đây là biển, vì tìm thấy hóa thạch của sò biển.",
                    "meaning_en": "This area is thought to have been the sea in the past. This is because fossil shellfish have been found."
                  }
                ],
                "lesson_number": 41
              },
              {
                "vocab": "だって",
                "furigana": "だって",
                "meaning_vi": "Bởi vì",
                "meaning_en": "Because",
                "examples": [
                  {
                    "example_text": "「どうして食べないの？」「だって、嫌いなんだもん」",
                    "furigana": "「どうして食（た）きらいなんだもん」",
                    "meaning_vi": "\"Tại sao lại không ăn?\"\"Tại em không thích\"",
                    "meaning_en": "\"Why don't you eat it?\" \"Because I hate it.\""
                  }
                ],
                "lesson_number": 41
              },
              {
                "vocab": "要するに",
                "furigana": "ようするに",
                "meaning_vi": "Tóm lại",
                "meaning_en": "In short",
                "examples": [
                  {
                    "example_text": "不合格になったということは、要するに実力がなかったのだ。",
                    "furigana": "不合格（ふごうかく）ようじつりょくがなかったのだ。",
                    "meaning_vi": "Lí do trượt tóm lại là không có thực lực.",
                    "meaning_en": "The fact that he failed was that he was not capable."
                  }
                ],
                "lesson_number": 42
              },
              {
                "vocab": "即ち",
                "furigana": "すなわち",
                "meaning_vi": "Đó là",
                "meaning_en": "That is",
                "examples": [
                  {
                    "example_text": "一郎君は妻の兄の子ども、すなわち、おいにあたる。",
                    "furigana": "一郎君（いちろうくん）つまあにこども、すなわち、おいにあたる。",
                    "meaning_vi": "Cậu Ichiro là con của anh trai tôi, tức là cháu trai của tôi.",
                    "meaning_en": "Ichiro is the child of his wife's older brother, that is, the man."
                  }
                ],
                "lesson_number": 42
              },
              {
                "vocab": "或は",
                "furigana": "あるいは",
                "meaning_vi": "Hoặc",
                "meaning_en": "Or",
                "examples": [
                  {
                    "example_text": "この書類にはサイン、あるいは印鑑が必要だ。",
                    "furigana": "この書類（しょるい）いんかんひつようだ。",
                    "meaning_vi": "Tài liệu này cần có chữ kí hay con dấu.",
                    "meaning_en": "This document requires a signature or seal."
                  }
                ],
                "lesson_number": 42
              },
              {
                "vocab": "さて",
                "furigana": "さて",
                "meaning_vi": "Tốt",
                "meaning_en": "Good",
                "examples": [
                  {
                    "example_text": "「これで文法の説明を終わります。さて、次は聴解です。」",
                    "furigana": "「これで文法（ぶんぽう）せつめいおつぎちょうかいです。」",
                    "meaning_vi": "Kết thúc phần giải thích ngữ pháp, tiếp theo là nghe.",
                    "meaning_en": "\"This concludes my grammar explanation. Now, the next step is to listen.\""
                  }
                ],
                "lesson_number": 42
              },
              {
                "vocab": "では",
                "furigana": "では",
                "meaning_vi": "Vậy thì",
                "meaning_en": "Then",
                "examples": [
                  {
                    "example_text": "「皆さん、お集りですね。では出発しましょう！」",
                    "furigana": "「皆（みな）あつましゅっぱつしましょう！」",
                    "meaning_vi": "Mọi người đã tập hợp đông đủ rồi nhỉ, thế thì chúng ta xuất phát thôi.",
                    "meaning_en": "\"Everyone, we're gathering. Let's head out!\""
                  }
                ],
                "lesson_number": 42
              },
              {
                "vocab": "所で",
                "furigana": "しょで",
                "meaning_vi": "Tại nơi",
                "meaning_en": "At",
                "examples": [
                  {
                    "example_text": "「今日はお疲れ様ですた。ところで、今晩の予定は？」「いえ、別に…」「それでは、ご一緒に食事でもいかがですか」",
                    "furigana": "「今日（きょう）つかさまこんばんよていべついっしょしょくじでもいかがですか」",
                    "meaning_vi": "Cảm ơn em đã vất vả hôm nay, nhân tiện dự định tối nay là gì? Không có dự định gì cả. Thế thì cùng nhau đi ăn tối nhé.",
                    "meaning_en": "\"Thank you for your hard work today. By the way, what are your plans for tonight?\" \"No, nothing...\" \"So, why not have a meal together?\""
                  }
                ],
                "lesson_number": 42
              },
              {
                "vocab": "そう言えば",
                "furigana": "そういえば",
                "meaning_vi": "Nếu bạn nói như vậy",
                "meaning_en": "If you say that",
                "examples": [
                  {
                    "example_text": "「同窓会の場所、予約しました」「ありがとう、そういえば、山口先生が本を出されたそうですよ。知ってました？」",
                    "furigana": "「同窓会（どうそうかい）ばしょよやくやまぐちせんせいほんだしってました？」",
                    "meaning_vi": "Mình đặt chỗ cho buổi tiệc cùng lớp rồi. Cảm ơn nhé, à nói vậy thầy Yamaguchi đã đưa sách rồi đấy, đã biết chưa?",
                    "meaning_en": "\"I have booked the reunion location.\" \"Thank you, it seems that Yamaguchi-sensei has published a book. Did you know?\""
                  }
                ],
                "lesson_number": 42
              },
              {
                "vocab": "唯",
                "furigana": "ただ",
                "meaning_vi": "chỉ một",
                "meaning_en": "just one",
                "examples": [
                  {
                    "example_text": "あのレストランは味もいいし、値段も安い。だが、場所はちょっと不便だ。",
                    "furigana": "あのレストランは味（あじ）ねだんやすばしょふべんだ。",
                    "meaning_vi": "Nhà hàng này vừa ngon vừa rẻ chỉ có điều là địa điểm hơi bất tiện.",
                    "meaning_en": "The restaurant tastes good and the prices are cheap. But the location is a bit inconvenient."
                  }
                ],
                "lesson_number": 42
              },
              {
                "vocab": "食料・食糧",
                "furigana": "しょくりょう・しょくりょう",
                "meaning_vi": "Thức ăn và thực phẩm",
                "meaning_en": "Food and food",
                "examples": [
                  {
                    "example_text": "日本は食料の自給率が低いと言われる。",
                    "furigana": "日本（にほん）しょくりょうじきゅうりつひくいわれる。",
                    "meaning_vi": "Nước Nhật là nước có tỉ lệ tự cung thức ăn thấp.",
                    "meaning_en": "It is said that Japan has a low food self-sufficiency rate."
                  }
                ],
                "lesson_number": 43
              },
              {
                "vocab": "粒",
                "furigana": "つぶ",
                "meaning_vi": "ngũ cốc",
                "meaning_en": "cereal",
                "examples": [
                  {
                    "example_text": "ぶどうを一粒を食べる。",
                    "furigana": "ぶどうを一粒（ひとつぶ）たべる。",
                    "meaning_vi": "Ăn từng hạt nho.",
                    "meaning_en": "Eat a single grape."
                  }
                ],
                "lesson_number": 43
              },
              {
                "vocab": "屑",
                "furigana": "くず",
                "meaning_vi": "Cạo râu",
                "meaning_en": "Shave",
                "examples": [
                  {
                    "example_text": "野菜のくずを捨てる。",
                    "furigana": "野菜（やさい）すてる。",
                    "meaning_vi": "Vứt vụn rác của rau.",
                    "meaning_en": "Throw away vegetable trash."
                  }
                ],
                "lesson_number": 43
              },
              {
                "vocab": "栽培",
                "furigana": "さいばい",
                "meaning_vi": "Tu luyện",
                "meaning_en": "Cultivate",
                "examples": [
                  {
                    "example_text": "この畑では小麦を栽培している。",
                    "furigana": "この畑（はたけ）こむぎさいばいしている。",
                    "meaning_vi": "Cánh đồng này đang trồng lúa mì.",
                    "meaning_en": "Wheat is grown in this field."
                  }
                ],
                "lesson_number": 43
              },
              {
                "vocab": "収穫",
                "furigana": "しゅうかく",
                "meaning_vi": "mùa gặt",
                "meaning_en": "harvest",
                "examples": [
                  {
                    "example_text": "今年は米が昨年の1.5倍の収穫を上げた。",
                    "furigana": "今年（ことし）こめさくねんばいしゅうかくあげた。",
                    "meaning_vi": "Năm nay thu hoạch lúa mì gấp 1,5 lần so với năm ngoái.",
                    "meaning_en": "This year, rice harvested 1.5 times the amount of last year."
                  }
                ],
                "lesson_number": 43
              },
              {
                "vocab": "産地",
                "furigana": "さんち",
                "meaning_vi": "Khu vực xuất xứ",
                "meaning_en": "Area of ​​origin",
                "examples": [
                  {
                    "example_text": "青森県は、リンゴの産地として有名だ。",
                    "furigana": "青森（あおもり）けんさんちゆうめいだ。",
                    "meaning_vi": "Huyện Aomori nổi tiếng với đặc sản là táo.",
                    "meaning_en": "Aomori Prefecture is famous for its apple production area."
                  }
                ],
                "lesson_number": 43
              },
              {
                "vocab": "土地",
                "furigana": "とち",
                "meaning_vi": "đất",
                "meaning_en": "land",
                "examples": [
                  {
                    "example_text": "土地を買って家を建てる。",
                    "furigana": "土地（とち）かいえたてる。",
                    "meaning_vi": "Mua đất xây nhà.",
                    "meaning_en": "Buy land and build a house."
                  }
                ],
                "lesson_number": 43
              },
              {
                "vocab": "倉庫",
                "furigana": "そうこ",
                "meaning_vi": "Nhà kho",
                "meaning_en": "Storehouse",
                "examples": [
                  {
                    "example_text": "港には多くの倉庫が並んでいる。",
                    "furigana": "港（みなと）おおそうこならんでいる。",
                    "meaning_vi": "Có rất nhiều kho ở cảng biển.",
                    "meaning_en": "There are many warehouses lined up at the port."
                  }
                ],
                "lesson_number": 43
              },
              {
                "vocab": "所有",
                "furigana": "しょゆう",
                "meaning_vi": "tất cả",
                "meaning_en": "all",
                "examples": [
                  {
                    "example_text": "山本家は広い畑を所有している。",
                    "furigana": "山本家（やまもとけ）ひろはたけしょゆうしている。",
                    "meaning_vi": "Nhà Yamamoto sở hửu một cánh đồng rộng lớn.",
                    "meaning_en": "The Yamamoto family owns a large field."
                  }
                ],
                "lesson_number": 43
              },
              {
                "vocab": "収集",
                "furigana": "しゅうしゅう",
                "meaning_vi": "bộ sưu tập",
                "meaning_en": "collection",
                "examples": [
                  {
                    "example_text": "ゴミは可燃・不燃に分別して収集する地域が多い。",
                    "furigana": "ゴミは可燃（かねん）ふねんぶんべつしゅうしゅうちいきおおい。",
                    "meaning_vi": "Có rất nhiều vùng phân chia rác cháy được và không cháy được rồi tập hợp lại.",
                    "meaning_en": "Many areas collect waste separately and non-combustible."
                  }
                ],
                "lesson_number": 43
              },
              {
                "vocab": "滞在",
                "furigana": "たいざい",
                "meaning_vi": "ở lại",
                "meaning_en": "stay",
                "examples": [
                  {
                    "example_text": "今回の海外出張は、約1か月の滞在になる予定だ。",
                    "furigana": "今回（こんかい）かいがいしゅっちょうやくげつたいざいよていだ。",
                    "meaning_vi": "Chuyến đi công tác nước ngoài lần này, dự tính sẽ ở lại một tháng.",
                    "meaning_en": "This overseas business trip is scheduled to last about a month."
                  }
                ],
                "lesson_number": 43
              },
              {
                "vocab": "便",
                "furigana": "びん",
                "meaning_vi": "Mong",
                "meaning_en": "Mong",
                "examples": [
                  {
                    "example_text": "ここは交通の便がいい。",
                    "furigana": "ここは交通（こうつう）べんがいい。",
                    "meaning_vi": "Ở đây phương tiện giao thông thuận lợi.",
                    "meaning_en": "It's convenient to transport here."
                  }
                ],
                "lesson_number": 43
              },
              {
                "vocab": "便",
                "furigana": "びん",
                "meaning_vi": "Mong",
                "meaning_en": "Mong",
                "examples": [
                  {
                    "example_text": "「朝一番の便で書類を送ったから、明日の午前中に着くと思います」",
                    "furigana": "「朝（あさ）いちばんびんしょるいおくあしたごぜんちゅうつおもいます」",
                    "meaning_vi": "Nếu gửi tài liệu vào chuyến bưu điện sớm nhất buổi sáng thì sẽ tới trong sáng ngày mai đấy.",
                    "meaning_en": "\"I sent the documents on the first flight in the morning, so I think I'll arrive tomorrow morning.\""
                  }
                ],
                "lesson_number": 43
              },
              {
                "vocab": "設備",
                "furigana": "せつび",
                "meaning_vi": "thiết bị",
                "meaning_en": "device",
                "examples": [
                  {
                    "example_text": "うちの大学はスポーツ設備が充実している。",
                    "furigana": "うちの大学（だいがく）せつびじゅうじつしている。",
                    "meaning_vi": "Trường đại học của tôi trang bị đầy đủ các thiết bị thể thao.",
                    "meaning_en": "Our university has a wide range of sports facilities."
                  }
                ],
                "lesson_number": 43
              },
              {
                "vocab": "設計",
                "furigana": "せっけい",
                "meaning_vi": "thiết kế",
                "meaning_en": "design",
                "examples": [
                  {
                    "example_text": "このロボットは、設計から制作まですべて大学生たちが行った。",
                    "furigana": "このロボットは、設計（せっけい）せいさくだいがくせいおこなった。",
                    "meaning_vi": "Con robot này từ thiết kế đến chế tạo toàn bộ đều do học sinh đại học tổ chức.",
                    "meaning_en": "This robot was done by university students from design to production."
                  }
                ],
                "lesson_number": 43
              },
              {
                "vocab": "制作・製作",
                "furigana": "せいさく・せいさく",
                "meaning_vi": "Sản xuất và sản xuất",
                "meaning_en": "Production and production",
                "examples": [
                  {
                    "example_text": "｛絵/彫刻/番組/映画…｝を制作する",
                    "furigana": "｛絵（え）ちょうこくばんぐみえいがせいさくする",
                    "meaning_vi": "",
                    "meaning_en": "Producing {pictures/sculptures/programs/movies...}"
                  }
                ],
                "lesson_number": 43
              },
              {
                "vocab": "製造",
                "furigana": "せいぞう",
                "meaning_vi": "sản xuất",
                "meaning_en": "manufacture",
                "examples": [
                  {
                    "example_text": "この会社は車を製造している。",
                    "furigana": "この会社（かいしゃ）くるませいぞうしている。",
                    "meaning_vi": "Công ty này sản xuất ô tô.",
                    "meaning_en": "The company manufactures cars."
                  }
                ],
                "lesson_number": 43
              },
              {
                "vocab": "建築",
                "furigana": "けんちく",
                "meaning_vi": "ngành kiến ​​​​trúc",
                "meaning_en": "architecture",
                "examples": [
                  {
                    "example_text": "｛橋/家…｝を建築する。",
                    "furigana": "｛橋（はし）いえけんちくする。",
                    "meaning_vi": "",
                    "meaning_en": "Building {bridges/houses...}."
                  }
                ],
                "lesson_number": 43
              },
              {
                "vocab": "人工",
                "furigana": "じんこう",
                "meaning_vi": "Nhân tạo",
                "meaning_en": "Artificial",
                "examples": [
                  {
                    "example_text": "このスキー場では人口の雪を降らせている。",
                    "furigana": "このスキー場（じょう）じんこうゆきふらせている。",
                    "meaning_vi": "Bãi trượt tuyết này người ta làm tuyết rơi nhân tạo.",
                    "meaning_en": "This ski resort is causing snow to the population."
                  }
                ],
                "lesson_number": 44
              },
              {
                "vocab": "圧力",
                "furigana": "あつりょく",
                "meaning_vi": "áp lực",
                "meaning_en": "pressure",
                "examples": [
                  {
                    "example_text": "空気に圧力を加えて圧縮する。",
                    "furigana": "空気（くうき）あつりょくくわあっしゅくする。",
                    "meaning_vi": "Nén khí bằng cách gia tăng áp lực.",
                    "meaning_en": "Pressure is applied to the air to compress."
                  }
                ],
                "lesson_number": 44
              },
              {
                "vocab": "刺激",
                "furigana": "しげき",
                "meaning_vi": "Kích thích",
                "meaning_en": "Stimulate",
                "examples": [
                  {
                    "example_text": "筋肉で電気で刺激を与えると、ぴくりと働く。",
                    "furigana": "筋肉（きんにく）でんきしげきあたはたらく。",
                    "meaning_vi": "Kích thích cơ bắp bằng điện sẽ cử động giật giật.",
                    "meaning_en": "When stimulated with electrical muscles, it twitches."
                  }
                ],
                "lesson_number": 44
              },
              {
                "vocab": "摩擦",
                "furigana": "まさつ",
                "meaning_vi": "Mắt",
                "meaning_en": "Eye",
                "examples": [
                  {
                    "example_text": "木の枝の摩擦の熱で森林火災が起こった。",
                    "furigana": "木（き）えだまさつねつしんりんかさいおこった。",
                    "meaning_vi": "Do nhiệt của sự ma sát các cành cây mà đã xảy ra cháy rừng.",
                    "meaning_en": "The heat of friction on tree branches caused a bushfire."
                  }
                ],
                "lesson_number": 44
              },
              {
                "vocab": "立場",
                "furigana": "たちば",
                "meaning_vi": "chức vụ",
                "meaning_en": "position",
                "examples": [
                  {
                    "example_text": "自分の意見を主張するだけではなく、相手の立場に立って考えてみることも大切だ。",
                    "furigana": "自分（じぶん）いけんしゅちょうあいてたちばたかんがたいせつだ。",
                    "meaning_vi": "Không chỉ chủ trương ý kiến của cá nhân mình, việc đứng vào trường hợp của người khác và suy nghĩ cũng là điều quan trọng.",
                    "meaning_en": "It is important not only to assert your own opinions, but also to think about them from the other person's point of view."
                  }
                ],
                "lesson_number": 44
              },
              {
                "vocab": "役割",
                "furigana": "やくわり",
                "meaning_vi": "vai trò",
                "meaning_en": "role",
                "examples": [
                  {
                    "example_text": "仕事の役割を決める。",
                    "furigana": "仕事（しごと）やくわりきめる。",
                    "meaning_vi": "Quyết định vai trò công việc.",
                    "meaning_en": "Decide the role of your work."
                  }
                ],
                "lesson_number": 44
              },
              {
                "vocab": "分担",
                "furigana": "ぶんたん",
                "meaning_vi": "Chia sẻ",
                "meaning_en": "Share",
                "examples": [
                  {
                    "example_text": "同僚と分担して仕事を進めている。",
                    "furigana": "同僚（どうりょう）ぶんたんしごとすすめている。",
                    "meaning_vi": "Chia sẻ công việc với đồng nghiệp và tiến triển nó.",
                    "meaning_en": "I share my work with my colleagues."
                  }
                ],
                "lesson_number": 44
              },
              {
                "vocab": "担当",
                "furigana": "たんとう",
                "meaning_vi": "phụ trách",
                "meaning_en": "in charge",
                "examples": [
                  {
                    "example_text": "会社で営業を担当している。",
                    "furigana": "会社（かいしゃ）えいぎょうたんとうしている。",
                    "meaning_vi": "Ở công ty đảm nhiệm việc kinh doanh.",
                    "meaning_en": "I am in charge of sales at the company."
                  }
                ],
                "lesson_number": 44
              },
              {
                "vocab": "交代・交替",
                "furigana": "こうたい・こうたい",
                "meaning_vi": "Hướng dẫn và xen kẽ",
                "meaning_en": "Instructions and alternating",
                "examples": [
                  {
                    "example_text": "首相が交代した。",
                    "furigana": "首相（しゅしょう）こうたいした。",
                    "meaning_vi": "Thay đổi chính phủ.",
                    "meaning_en": "The prime minister has been replaced."
                  }
                ],
                "lesson_number": 44
              },
              {
                "vocab": "代理",
                "furigana": "だいり",
                "meaning_vi": "hành động",
                "meaning_en": "act",
                "examples": [
                  {
                    "example_text": "父の代理で親戚の結婚式に出席した。",
                    "furigana": "父（ちち）だいりしんせきけっこんしきしゅっせきした。",
                    "meaning_vi": "Tôi đại diện bố tham dự lễ kết hôn của người quen.",
                    "meaning_en": "He attended a relative's wedding on behalf of his father."
                  }
                ],
                "lesson_number": 44
              },
              {
                "vocab": "審判",
                "furigana": "しんぱん",
                "meaning_vi": "Sự thử nghiệm",
                "meaning_en": "Testing",
                "examples": [
                  {
                    "example_text": "審判が笛を吹いて、試合が始まった。",
                    "furigana": "審判（しんぱん）ふえふしあいはじまった。",
                    "meaning_vi": "Trọng tài thổi còi, trận đấu bắt đầu.",
                    "meaning_en": "The referee blew the whistle and the match began."
                  }
                ],
                "lesson_number": 44
              },
              {
                "vocab": "監督",
                "furigana": "かんとく",
                "meaning_vi": "giám đốc",
                "meaning_en": "manager",
                "examples": [
                  {
                    "example_text": "スポーツ大会の監督を務める。",
                    "furigana": "スポーツ大会（たいかい）かんとくつとめる。",
                    "meaning_vi": "Tôi đảm nhận công việc huấn luyện viên của đại hội thể thao.",
                    "meaning_en": "He serves as the coach of sports tournaments."
                  }
                ],
                "lesson_number": 44
              },
              {
                "vocab": "予測",
                "furigana": "よそく",
                "meaning_vi": "dự đoán",
                "meaning_en": "forecast",
                "examples": [
                  {
                    "example_text": "データに基づいて結果を予測する。",
                    "furigana": "データに基（もと）けっかよそくする。",
                    "meaning_vi": "Dựa vào dữ liệu để dự đoán kết quả.",
                    "meaning_en": "Predict results based on data."
                  }
                ],
                "lesson_number": 44
              },
              {
                "vocab": "予期",
                "furigana": "よき",
                "meaning_vi": "Dự đoán",
                "meaning_en": "Forecast",
                "examples": [
                  {
                    "example_text": "今回の実験では、予期に反し、いいデータが得られなかった。",
                    "furigana": "今回（こんかい）じっけんよきはんえられなかった。",
                    "meaning_vi": "Thí nghiệm lần này, số liệu không đạt được như mong đợi.",
                    "meaning_en": "In this experiment, we were unable to obtain good data, contrary to our expectations."
                  }
                ],
                "lesson_number": 44
              },
              {
                "vocab": "判断",
                "furigana": "はんだん",
                "meaning_vi": "Sự phán xét",
                "meaning_en": "Judgment",
                "examples": [
                  {
                    "example_text": "外見や肩書で人を判断するのはよくない。",
                    "furigana": "外見（がいけん）かたがきひとはんだんするのはよくない。",
                    "meaning_vi": "Phán đoán con người dựa vào ngoại hình và chức vụ là không tốt.",
                    "meaning_en": "It's not good to judge someone by their appearance or title."
                  }
                ],
                "lesson_number": 44
              },
              {
                "vocab": "評価",
                "furigana": "ひょうか",
                "meaning_vi": "sự đánh giá",
                "meaning_en": "appreciation",
                "examples": [
                  {
                    "example_text": "この映画に対する世間の評価を高める。",
                    "furigana": "この映画（えいが）たいせけんひょうかたかめる。",
                    "meaning_vi": "Bộ phim này được thế giới đánh giá cao.",
                    "meaning_en": "It will raise public recognition for this film."
                  }
                ],
                "lesson_number": 45
              },
              {
                "vocab": "指示",
                "furigana": "しじ",
                "meaning_vi": "hướng dẫn",
                "meaning_en": "instruct",
                "examples": [
                  {
                    "example_text": "部長は田中さんに会議のレポートを出すよう指示した。",
                    "furigana": "部長（ぶちょう）たなかかいぎだしじした。",
                    "meaning_vi": "Trưởng phòng chỉ thị anh Tanaka đưa ra báo cáo trong cuộc họp.",
                    "meaning_en": "The manager instructed Tanaka to submit a report on the meeting."
                  }
                ],
                "lesson_number": 45
              },
              {
                "vocab": "無視",
                "furigana": "むし",
                "meaning_vi": "phớt lờ",
                "meaning_en": "ignore",
                "examples": [
                  {
                    "example_text": "話しかけたのに無視された。",
                    "furigana": "話（はな）むしされた。",
                    "meaning_vi": "Dù đã bắt chuyện nhưng bị lờ đi.",
                    "meaning_en": "I spoke to him but he ignored him."
                  }
                ],
                "lesson_number": 45
              },
              {
                "vocab": "無断",
                "furigana": "むだん",
                "meaning_vi": "Không có sự cho phép",
                "meaning_en": "Uncontrollable",
                "examples": [
                  {
                    "example_text": "無断で人のものを使ってはいけない。",
                    "furigana": "無断（むだん）ひとつかってはいけない。",
                    "meaning_vi": "Không có sự cho phép mà sử dụng đồ của người khác là không được.",
                    "meaning_en": "Do not use other people's items without permission."
                  }
                ],
                "lesson_number": 45
              },
              {
                "vocab": "承知",
                "furigana": "しょうち",
                "meaning_vi": "Hiểu",
                "meaning_en": "Understand",
                "examples": [
                  {
                    "example_text": "「この仕事、明日までに頼みます」「承知しました」",
                    "furigana": "「この仕事（しごと）あしたたのしょうちしました」",
                    "meaning_vi": "Công việc đến sáng mai nhờ anh nhé. Vâng tôi hiểu rồi.",
                    "meaning_en": "\"I'll ask you to do this work by tomorrow.\" \"I understand.\""
                  }
                ],
                "lesson_number": 45
              },
              {
                "vocab": "納得",
                "furigana": "なっとく",
                "meaning_vi": "Bằng lòng",
                "meaning_en": "Consent",
                "examples": [
                  {
                    "example_text": "会社のやり方には納得できない。",
                    "furigana": "会社（かいしゃ）かたなっとくできない。",
                    "meaning_vi": "Tôi không thể lí giải được cách làm của công ty.",
                    "meaning_en": "I don't agree with the company's method."
                  }
                ],
                "lesson_number": 45
              },
              {
                "vocab": "疑問",
                "furigana": "ぎもん",
                "meaning_vi": "Câu hỏi",
                "meaning_en": "Question",
                "examples": [
                  {
                    "example_text": "子供はいろいろなことに疑問を持つ。",
                    "furigana": "子供（こども）ぎもんもつ。",
                    "meaning_vi": "Bọn trẻ có rất nhiều điều thắc mắc.",
                    "meaning_en": "Children have many questions."
                  }
                ],
                "lesson_number": 45
              },
              {
                "vocab": "推測",
                "furigana": "すいそく",
                "meaning_vi": "Đầu cơ",
                "meaning_en": "Speculative",
                "examples": [
                  {
                    "example_text": "相手の気持ちを推測する。",
                    "furigana": "相手（あいて）きもすいそくする。",
                    "meaning_vi": "Suy đoán cảm xúc đối phương.",
                    "meaning_en": "Guess the other person's feelings."
                  }
                ],
                "lesson_number": 45
              },
              {
                "vocab": "肯定",
                "furigana": "こうてい",
                "meaning_vi": "tình yêu",
                "meaning_en": "love",
                "examples": [
                  {
                    "example_text": "相手の意見を肯定する。",
                    "furigana": "相手（あいて）いけんこうていする。",
                    "meaning_vi": "Khẳng định ý kiến của đối phương.",
                    "meaning_en": "Affirm the other person's opinion."
                  }
                ],
                "lesson_number": 45
              },
              {
                "vocab": "参考",
                "furigana": "さんこう",
                "meaning_vi": "thẩm quyền giải quyết",
                "meaning_en": "Authority to settle",
                "examples": [
                  {
                    "example_text": "いろいろな資料を参考してレポートを書いた。",
                    "furigana": "いろいろな資料（しりょう）さんこうかいた。",
                    "meaning_vi": "Tham khảo nhiều tài liệu và viết báo cáo.",
                    "meaning_en": "I wrote the report using various materials."
                  }
                ],
                "lesson_number": 45
              },
              {
                "vocab": "程度",
                "furigana": "ていど",
                "meaning_vi": "bằng cấp",
                "meaning_en": "degree",
                "examples": [
                  {
                    "example_text": "彼女の学校は教育の程度が高い。",
                    "furigana": "彼女（かのじょ）がっこうきょういくていどたかい。",
                    "meaning_vi": "Trường học của cô ấy có trình độ giáo dục cao.",
                    "meaning_en": "Her school is highly educated."
                  }
                ],
                "lesson_number": 45
              },
              {
                "vocab": "程度",
                "furigana": "ていど",
                "meaning_vi": "bằng cấp",
                "meaning_en": "degree",
                "examples": [
                  {
                    "example_text": "大統領就任演説は評判が良かった。",
                    "furigana": "大統領（だいとうりょう）しゅうにんえんぜつひょうばんよかった。",
                    "meaning_vi": "Bài diễn thuyết nhận chức của vị tổng thống được đánh giá cao.",
                    "meaning_en": "His inaugural speech was well received."
                  }
                ],
                "lesson_number": 45
              },
              {
                "vocab": "批評",
                "furigana": "ひひょう",
                "meaning_vi": "chỉ trích",
                "meaning_en": "criticize",
                "examples": [
                  {
                    "example_text": "新聞に新刊書の批評が載った。",
                    "furigana": "新聞（しんぶん）しんかんしょひひょうのった。",
                    "meaning_vi": "Trên bài báo đăng đánh giá về công bố mới.",
                    "meaning_en": "A review of the new book was featured in the newspaper."
                  }
                ],
                "lesson_number": 45
              },
              {
                "vocab": "推薦",
                "furigana": "すいせん",
                "meaning_vi": "gợi ý",
                "meaning_en": "suggest",
                "examples": [
                  {
                    "example_text": "重役たちは、田中氏を次期社長に推薦した。",
                    "furigana": "重役（じゅうやく）たなかしじきしゃちょうすいせんした。",
                    "meaning_vi": "Tiến cử anh Tanaka làm giám đốc trong nhiệm kì tới.",
                    "meaning_en": "The executives recommended Tanaka as the next president."
                  }
                ],
                "lesson_number": 45
              },
              {
                "vocab": "信用",
                "furigana": "しんよう",
                "meaning_vi": "Tín dụng",
                "meaning_en": "Credit",
                "examples": [
                  {
                    "example_text": "｛人/人の言葉｝を信用してお金を貸す。",
                    "furigana": "｛人（ひと）ひとことばしんようかねかす。",
                    "meaning_vi": "Tin người/ tin lời người nói rồi cho mượn tiền.",
                    "meaning_en": "Lending money by trusting {people/people's words}."
                  }
                ],
                "lesson_number": 46
              },
              {
                "vocab": "信頼",
                "furigana": "しんらい",
                "meaning_vi": "lòng tin",
                "meaning_en": "trust",
                "examples": [
                  {
                    "example_text": "彼は信頼できる指導者だ。",
                    "furigana": "彼（かれ）しんらいしどうしゃだ。",
                    "meaning_vi": "Anh ấy là một nhà lãnh đạo đáng tin cậy.",
                    "meaning_en": "He is a trustworthy leader."
                  }
                ],
                "lesson_number": 46
              },
              {
                "vocab": "尊重",
                "furigana": "そんちょう",
                "meaning_vi": "sự tôn trọng",
                "meaning_en": "respect",
                "examples": [
                  {
                    "example_text": "人の意見を尊重する。",
                    "furigana": "人（ひと）いけんそんちょうする。",
                    "meaning_vi": "Tôn trọng ý kiến của người khác.",
                    "meaning_en": "Respect others' opinions."
                  }
                ],
                "lesson_number": 46
              },
              {
                "vocab": "作業",
                "furigana": "さぎょう",
                "meaning_vi": "công việc",
                "meaning_en": "job",
                "examples": [
                  {
                    "example_text": "時計を作る仕事は、作業が細かくて複雑だ。",
                    "furigana": "時計（とけい）つくしごとさぎょうこまふくざつだ。",
                    "meaning_vi": "Công việc làm đồng hồ có những thao tác tỉ mỉ phức tạp.",
                    "meaning_en": "The job of making a watch is detailed and complicated."
                  }
                ],
                "lesson_number": 47
              },
              {
                "vocab": "工夫",
                "furigana": "くふう",
                "meaning_vi": "Ngây thơ",
                "meaning_en": "Innocent",
                "examples": [
                  {
                    "example_text": "仕事のやり方を工夫すれば、もう少し時間を短縮できるだろう。",
                    "furigana": "仕事（しごと）かたくふうすこじかんたんしゅくできるだろう。",
                    "meaning_vi": "Nếu chịu khó làm công việc này công phu hơn thì sẽ có thể rút ngắn thời gian.",
                    "meaning_en": "If you think about how you work, you can save a little more time."
                  }
                ],
                "lesson_number": 47
              },
              {
                "vocab": "消化",
                "furigana": "しょうか",
                "meaning_vi": "Tiêu hóa",
                "meaning_en": "Digest",
                "examples": [
                  {
                    "example_text": "私は胃腸が弱いので、消化｛が/に｝いいものを食べるようにしている。",
                    "furigana": "私（わたし）いちょうよわしょうかたべるようにしている。",
                    "meaning_vi": "Dạ dày tôi yếu nên ăn những thứ dễ tiêu hóa tốt.",
                    "meaning_en": "I have a weak stomach and intestines, so I try to eat things that are good for digestion."
                  }
                ],
                "lesson_number": 47
              },
              {
                "vocab": "吸収",
                "furigana": "きゅうしゅう",
                "meaning_vi": "sự hấp thụ",
                "meaning_en": "absorption",
                "examples": [
                  {
                    "example_text": "この物質は｛水分/匂い/音…｝を吸収する。",
                    "furigana": "この物質（ぶっしつ）すいぶんにおおときゅうしゅうする。",
                    "meaning_vi": "Sản phẩm này hấp thụ nước/ mùi hôi/ âm thanh….",
                    "meaning_en": "This substance absorbs {water/odor/sound...}."
                  }
                ],
                "lesson_number": 47
              },
              {
                "vocab": "設置",
                "furigana": "せっち",
                "meaning_vi": "cài đặt",
                "meaning_en": "setting",
                "examples": [
                  {
                    "example_text": "工場に新しい機械を設置する。",
                    "furigana": "工場（こうじょう）あたらきかいせっちする。",
                    "meaning_vi": "Công ty lắp đặt máy mới.",
                    "meaning_en": "Install new machines in the factory."
                  }
                ],
                "lesson_number": 47
              },
              {
                "vocab": "設定",
                "furigana": "せってい",
                "meaning_vi": "cài đặt",
                "meaning_en": "setting",
                "examples": [
                  {
                    "example_text": "エアコンの温度を26度に設定する。",
                    "furigana": "エアコンの温度（おんど）どせっていする。",
                    "meaning_vi": "Thiết lập nhiệt độ điều hòa ở 26 độ.",
                    "meaning_en": "Set the air conditioner temperature to 26 degrees."
                  }
                ],
                "lesson_number": 47
              },
              {
                "vocab": "調節",
                "furigana": "ちょうせつ",
                "meaning_vi": "điều chỉnh",
                "meaning_en": "adjust",
                "examples": [
                  {
                    "example_text": "リモコンで温度の調節をする。",
                    "furigana": "リモコンで温度（おんど）ちょうせつをする。",
                    "meaning_vi": "Điều khiển nhiệt độ bằng điều khiển từ xa.",
                    "meaning_en": "Adjust the temperature using the remote control."
                  }
                ],
                "lesson_number": 47
              },
              {
                "vocab": "調整",
                "furigana": "ちょうせい",
                "meaning_vi": "Điều chỉnh",
                "meaning_en": "Adjust",
                "examples": [
                  {
                    "example_text": "テレビの映りが悪いので、アンテナの向きを調節した。",
                    "furigana": "テレビの映（うつ）わるむちょうせつした。",
                    "meaning_vi": "Hình ảnh của tivi không tốt, điều chỉnh hướng của ăng ten.",
                    "meaning_en": "The TV was not showing well, so I adjusted the antenna orientation."
                  }
                ],
                "lesson_number": 47
              },
              {
                "vocab": "解放",
                "furigana": "かいほう",
                "meaning_vi": "Giải phóng",
                "meaning_en": "Free",
                "examples": [
                  {
                    "example_text": "人質を解放する。",
                    "furigana": "人質（ひとじち）かいほうする。",
                    "meaning_vi": "Giải phóng con tin.",
                    "meaning_en": "Release the hostages."
                  }
                ],
                "lesson_number": 47
              },
              {
                "vocab": "総合",
                "furigana": "そうごう",
                "meaning_vi": "Tổng quan",
                "meaning_en": "Overview",
                "examples": [
                  {
                    "example_text": "皆の意見を総合して、結論を出す。",
                    "furigana": "皆（みな）いけんそうごうけつろんだす。",
                    "meaning_vi": "Tổng hợp ý kiến của mọi người và đưa ra kết luận.",
                    "meaning_en": "Combine everyone's opinions and come to a conclusion."
                  }
                ],
                "lesson_number": 47
              },
              {
                "vocab": "連続",
                "furigana": "れんぞく",
                "meaning_vi": "liên tục",
                "meaning_en": "continuous",
                "examples": [
                  {
                    "example_text": "3回連続で失敗してしまった。",
                    "furigana": "3回（かい）れんぞくしっぱいしてしまった。",
                    "meaning_vi": "Thất bại lần thứ 3 liên tiếp.",
                    "meaning_en": "I failed three times in a row."
                  }
                ],
                "lesson_number": 47
              },
              {
                "vocab": "持続",
                "furigana": "じぞく",
                "meaning_vi": "Sự kiên trì",
                "meaning_en": "Perseverance",
                "examples": [
                  {
                    "example_text": "この薬の効果は6時間持続する。",
                    "furigana": "この薬（くすり）こうかじかんじぞくする。",
                    "meaning_vi": "Hiệu quả của thuốc này sẽ kéo dài trong 6 tiếng đồng hồ.",
                    "meaning_en": "The effect of this drug lasts for 6 hours."
                  }
                ],
                "lesson_number": 47
              },
              {
                "vocab": "中断",
                "furigana": "ちゅうだん",
                "meaning_vi": "Ngắt",
                "meaning_en": "Interrupt",
                "examples": [
                  {
                    "example_text": "雨で試合が中断した。",
                    "furigana": "雨（あめ）しあいちゅうだんした。",
                    "meaning_vi": "Trận đấu tạm hoãn do mưa.",
                    "meaning_en": "The match was interrupted due to the rain."
                  }
                ],
                "lesson_number": 47
              },
              {
                "vocab": "安定",
                "furigana": "あんてい",
                "meaning_vi": "Ổn định",
                "meaning_en": "Stable",
                "examples": [
                  {
                    "example_text": "正社員になって、安定した暮らしがしたい。",
                    "furigana": "正社員（せいしゃいん）あんていくらしがしたい。",
                    "meaning_vi": "Muốn trở thành nhân viên chính thức để có cuộc sống ổn định hơn.",
                    "meaning_en": "I want to become a full-time employee and live a stable life."
                  }
                ],
                "lesson_number": 47
              },
              {
                "vocab": "混乱",
                "furigana": "こんらん",
                "meaning_vi": "lú lẫn",
                "meaning_en": "confused",
                "examples": [
                  {
                    "example_text": "頭が混乱して、どうしていいのかわからない。",
                    "furigana": "頭（あたま）こんらんして、どうしていいのかわからない。",
                    "meaning_vi": "Cái đầu đang rối loạn nên không biết cái nào là tốt.",
                    "meaning_en": "My mind is confused and I don't know what to do."
                  }
                ],
                "lesson_number": 47
              },
              {
                "vocab": "上昇",
                "furigana": "じょうしょう",
                "meaning_vi": "tăng lên",
                "meaning_en": "increase",
                "examples": [
                  {
                    "example_text": "午後から気温が急激に上昇した。",
                    "furigana": "午後（ごご）きおんきゅうげきじょうしょうした。",
                    "meaning_vi": "Từ chiều nhiệt độ đột ngột tăng cao.",
                    "meaning_en": "Temperatures rose sharply in the afternoon."
                  }
                ],
                "lesson_number": 47
              },
              {
                "vocab": "達成",
                "furigana": "たっせい",
                "meaning_vi": "Thành tích",
                "meaning_en": "Achievement",
                "examples": [
                  {
                    "example_text": "5年かかって、やっと目標を達成した。",
                    "furigana": "5年（ねん）もくひょうたっせいした。",
                    "meaning_vi": "Mất 5 năm, cuối cùng cũng đạt được mục đích.",
                    "meaning_en": "After five years, I finally achieved my goal."
                  }
                ],
                "lesson_number": 47
              },
              {
                "vocab": "事情",
                "furigana": "じじょう",
                "meaning_vi": "vấn đề",
                "meaning_en": "problem",
                "examples": [
                  {
                    "example_text": "「この旅、事情により退社することになりました」",
                    "furigana": "「この旅（たび）じじょうたいしゃすることになりました」",
                    "meaning_vi": "Chuyến đi này, tôi đã từ chức vì tình hình sự việc.",
                    "meaning_en": "\"Due to circumstances, I have to leave the company.\""
                  }
                ],
                "lesson_number": 48
              },
              {
                "vocab": "事態",
                "furigana": "じたい",
                "meaning_vi": "tình huống",
                "meaning_en": "situation",
                "examples": [
                  {
                    "example_text": "預金している銀行が倒産するという、大変な事態になった。",
                    "furigana": "預金（よきん）ぎんこうとうさんたいへんじたいになった。",
                    "meaning_vi": "Ngân hàng tôi đang gửi tiết kiệm bị phá sản nên đang lâm vào tình trạng khó khăn.",
                    "meaning_en": "The banks that were deposited were bankrupt, causing a terrible situation."
                  }
                ],
                "lesson_number": 48
              },
              {
                "vocab": "障害",
                "furigana": "しょうがい",
                "meaning_vi": "trở ngại",
                "meaning_en": "obstacle",
                "examples": [
                  {
                    "example_text": "彼は目が見えないという障害を乗り越えてピアニストになった。",
                    "furigana": "彼（かれ）めみしょうがいのこえてピアニストになった。",
                    "meaning_vi": "Anh ấy đã vượt qua chướng ngại với đôi mắt không nhìn thấy để trở thành nhà piano.",
                    "meaning_en": "He overcomes the obstacles of blindness and becomes a pianist."
                  }
                ],
                "lesson_number": 48
              },
              {
                "vocab": "福祉",
                "furigana": "ふくし",
                "meaning_vi": "phúc lợi",
                "meaning_en": "welfare",
                "examples": [
                  {
                    "example_text": "大学で福祉について勉強した。",
                    "furigana": "大学（だいがく）ふくしべんきょうした。",
                    "meaning_vi": "Tôi đang học về phúc lợi xã hội tại trường đại học.",
                    "meaning_en": "I studied welfare at university."
                  }
                ],
                "lesson_number": 48
              },
              {
                "vocab": "社会",
                "furigana": "しゃかい",
                "meaning_vi": "xã hội",
                "meaning_en": "society",
                "examples": [
                  {
                    "example_text": "定年退職後は社会の役に立つことをしたい。",
                    "furigana": "定年（ていねん）たいしょくごしゃかいやくたつことをしたい。",
                    "meaning_vi": "Sau khi về hưu tôi muốn làm công việc có ích cho xã hội.",
                    "meaning_en": "After retirement, I want to do something useful to society."
                  }
                ],
                "lesson_number": 48
              },
              {
                "vocab": "都会",
                "furigana": "とかい",
                "meaning_vi": "Đô thị",
                "meaning_en": "Urban",
                "examples": [
                  {
                    "example_text": "田舎の高校生だったの私は、都会にあこがれていた。",
                    "furigana": "田舎（いなか）こうこうせいわたしとかいにあこがれていた。",
                    "meaning_vi": "Một đứa học sinh vùng quê như tôi rất ao ước sống ở thành phố.",
                    "meaning_en": "As a high school student in the countryside, I longed for the city."
                  }
                ],
                "lesson_number": 48
              },
              {
                "vocab": "世論",
                "furigana": "せろん",
                "meaning_vi": "dư luận",
                "meaning_en": "public",
                "examples": [
                  {
                    "example_text": "現代の政治家は世論を無視することはできない。",
                    "furigana": "現代（げんだい）せいじかよろんむしすることはできない。",
                    "meaning_vi": "Những nhà chính trị gia ngày nay không thể phớt lờ ý kiến của công chúng.",
                    "meaning_en": "Modern politicians cannot ignore public opinion."
                  }
                ],
                "lesson_number": 48
              },
              {
                "vocab": "民族",
                "furigana": "みんぞく",
                "meaning_vi": "quốc tịch",
                "meaning_en": "nationality",
                "examples": [
                  {
                    "example_text": "世界にはさまざまな民族が存在する。",
                    "furigana": "世界（せかい）みんぞくそんざいする。",
                    "meaning_vi": "Trên thế giới tồn tại rất nhiều dân tộc.",
                    "meaning_en": "There are many different ethnic groups in the world."
                  }
                ],
                "lesson_number": 48
              },
              {
                "vocab": "増大",
                "furigana": "ぞうだい",
                "meaning_vi": "Tăng",
                "meaning_en": "Increase",
                "examples": [],
                "lesson_number": 49
              },
              {
                "vocab": "増量",
                "furigana": "ぞうりょう",
                "meaning_vi": "Số tiền tăng lên",
                "meaning_en": "The amount increased",
                "examples": [],
                "lesson_number": 49
              },
              {
                "vocab": "増税",
                "furigana": "ぞうぜい",
                "meaning_vi": "Tăng thuế",
                "meaning_en": "Tax increase",
                "examples": [],
                "lesson_number": 49
              },
              {
                "vocab": "増員",
                "furigana": "ぞういん",
                "meaning_vi": "Tăng nhân viên",
                "meaning_en": "Increase employee",
                "examples": [],
                "lesson_number": 49
              },
              {
                "vocab": "減点",
                "furigana": "げんてん",
                "meaning_vi": "Suy luận",
                "meaning_en": "Deduce",
                "examples": [],
                "lesson_number": 49
              },
              {
                "vocab": "減退",
                "furigana": "げんたい",
                "meaning_vi": "Sự giảm bớt",
                "meaning_en": "Reduction",
                "examples": [],
                "lesson_number": 49
              },
              {
                "vocab": "減量",
                "furigana": "げんりょう",
                "meaning_vi": "Giảm cân",
                "meaning_en": "Losing weight",
                "examples": [],
                "lesson_number": 49
              },
              {
                "vocab": "開発",
                "furigana": "かいはつ",
                "meaning_vi": "phát triển",
                "meaning_en": "develop",
                "examples": [],
                "lesson_number": 49
              },
              {
                "vocab": "開店",
                "furigana": "かいてん",
                "meaning_vi": "Mở",
                "meaning_en": "Open",
                "examples": [],
                "lesson_number": 49
              },
              {
                "vocab": "開業",
                "furigana": "かいぎょう",
                "meaning_vi": "Mở",
                "meaning_en": "Open",
                "examples": [],
                "lesson_number": 49
              },
              {
                "vocab": "開催",
                "furigana": "かいさい",
                "meaning_vi": "cầm",
                "meaning_en": "hold",
                "examples": [],
                "lesson_number": 49
              },
              {
                "vocab": "開放",
                "furigana": "かいほう",
                "meaning_vi": "mở",
                "meaning_en": "open",
                "examples": [],
                "lesson_number": 49
              },
              {
                "vocab": "閉鎖",
                "furigana": "へいさ",
                "meaning_vi": "Đóng cửa",
                "meaning_en": "Close the door",
                "examples": [],
                "lesson_number": 49
              },
              {
                "vocab": "密閉",
                "furigana": "みっぺい",
                "meaning_vi": "Đóng",
                "meaning_en": "Close",
                "examples": [],
                "lesson_number": 49
              },
              {
                "vocab": "改善",
                "furigana": "かいぜん",
                "meaning_vi": "cải thiện",
                "meaning_en": "improve",
                "examples": [
                  {
                    "example_text": "組合は待遇の改善を求めてストを行った。",
                    "furigana": "組合（くみあい）たいぐうかいぜんもとおこなった。",
                    "meaning_vi": "Các tổ chức công đoàn đã tổ chức những cuộc biểu tình đòi cải thiện chế độ đãi ngộ.",
                    "meaning_en": "The union took a strike in sought improvements in treatment."
                  }
                ],
                "lesson_number": 50
              },
              {
                "vocab": "改良",
                "furigana": "かいりょう",
                "meaning_vi": "Cải tiến",
                "meaning_en": "Improve",
                "examples": [
                  {
                    "example_text": "その製品は改良を重ねることで、一層使いやすくなかった。",
                    "furigana": "その製品（せいひん）かいりょうかさいっそうつかいやすくなかった。",
                    "meaning_vi": "Sản phẩm này bao gồm những cải tiến nên đã dễ dàng sử dụng hơn rất nhiều.",
                    "meaning_en": "The product has been further improved and has become even easier to use."
                  }
                ],
                "lesson_number": 50
              },
              {
                "vocab": "改革",
                "furigana": "かいかく",
                "meaning_vi": "Cải cách",
                "meaning_en": "Reform",
                "examples": [
                  {
                    "example_text": "古い制度を改革しなければ、この国の発展は望めない。",
                    "furigana": "古（ふる）せいどかいかくくにはってんのぞめない。",
                    "meaning_vi": "Nếu không cải cách chế độ cũ thì không mong sự phát triển ở đất nước này.",
                    "meaning_en": "Without reforming the old system, we cannot hope for the development of this country."
                  }
                ],
                "lesson_number": 50
              },
              {
                "vocab": "改正",
                "furigana": "かいせい",
                "meaning_vi": "Sửa đổi",
                "meaning_en": "Modify",
                "examples": [
                  {
                    "example_text": "4月から新幹線のダイヤが改正されるそうだ。",
                    "furigana": "4月（がつ）しんかんせんかいせいされるそうだ。",
                    "meaning_vi": "Nghe nói từ tháng 4 bảng giờ tàu shinkansen sẽ được thay đổi.",
                    "meaning_en": "The Shinkansen schedule will be revised from April."
                  }
                ],
                "lesson_number": 50
              },
              {
                "vocab": "改定",
                "furigana": "かいてい",
                "meaning_vi": "ôn tập",
                "meaning_en": "review",
                "examples": [
                  {
                    "example_text": "来年から消費税率が改定されることになった。",
                    "furigana": "来年（らいねん）しょうひぜいりつかいていされることになった。",
                    "meaning_vi": "Từ năm sau sẽ cải cách thuế tiêu thụ.",
                    "meaning_en": "The consumption tax rate will be revised from next year."
                  }
                ],
                "lesson_number": 50
              },
              {
                "vocab": "改修",
                "furigana": "かいしゅう",
                "meaning_vi": "Cải tạo",
                "meaning_en": "Renovate",
                "examples": [
                  {
                    "example_text": "アパートが古くなったので、大規模な改修が行われることになった。",
                    "furigana": "アパートが古（ふる）だいきぼかいしゅうおこなわれることになった。",
                    "meaning_vi": "Căn nhà đã cũ nên quyết định tổ chức cải cách với quy mô lớn.",
                    "meaning_en": "As the apartment became old, major renovations were to be undertaken."
                  }
                ],
                "lesson_number": 50
              },
              {
                "vocab": "一致",
                "furigana": "いっち",
                "meaning_vi": "Nhất quán",
                "meaning_en": "Consistent",
                "examples": [
                  {
                    "example_text": "二人の意見が一致した。",
                    "furigana": "二人（ふたり）いけんいっちした。",
                    "meaning_vi": "Thống nhất ý kiến hai người với nhau.",
                    "meaning_en": "The two agreed."
                  }
                ],
                "lesson_number": 50
              },
              {
                "vocab": "一方",
                "furigana": "いっぽう",
                "meaning_vi": "mặt khác",
                "meaning_en": "on the other hand",
                "examples": [
                  {
                    "example_text": "飛行機の中で乗客が一方に片寄ると危ない。",
                    "furigana": "飛行機（ひこうき）なかじょうきゃくいっぽうかたよあぶない。",
                    "meaning_vi": "Trong máy bay, hành khách dồn về một phía sẽ rất nguy hiểm.",
                    "meaning_en": "It's dangerous if passengers move to one side on the plane."
                  }
                ],
                "lesson_number": 50
              },
              {
                "vocab": "一定",
                "furigana": "いってい",
                "meaning_vi": "phải",
                "meaning_en": "Right",
                "examples": [
                  {
                    "example_text": "倉庫の中は一定の温度を保たれている。",
                    "furigana": "倉庫（そうこ）なかいっていおんどたもたれている。",
                    "meaning_vi": "Trong kho đang bảo quản một nhiệt độ nhất định.",
                    "meaning_en": "The temperature is maintained constant inside the warehouse."
                  }
                ],
                "lesson_number": 50
              },
              {
                "vocab": "一人前",
                "furigana": "いちにんまえ",
                "meaning_vi": "Một người",
                "meaning_en": "A person",
                "examples": [
                  {
                    "example_text": "経済的に親から独立しなければ、一人前とは言えないだろう。",
                    "furigana": "経済的（けいざいてき）おやどくりついちにんまえいえないだろう。",
                    "meaning_vi": "Nếu không độc lập kinh tế khỏi bố mẹ thì không thể nói là người lớn được.",
                    "meaning_en": "If you are not financially independent of your parents, you cannot say you are a full-fledged person."
                  }
                ],
                "lesson_number": 50
              },
              {
                "vocab": "一流",
                "furigana": "いちりゅう",
                "meaning_vi": "Hạng nhất",
                "meaning_en": "First class",
                "examples": [
                  {
                    "example_text": "彼がまだ若いが、コックとしての腕は一流だ。",
                    "furigana": "彼（かれ）わかうでいちりゅうだ。",
                    "meaning_vi": "Anh ấy vẫn còn trẻ nhưng tay nghề nấu ăn thì bậc nhất.",
                    "meaning_en": "He's still young, but his cock is top-notch."
                  }
                ],
                "lesson_number": 50
              },
              {
                "vocab": "映る",
                "furigana": "うつる",
                "meaning_vi": "Nó được phản ánh",
                "meaning_en": "It is reflected",
                "examples": [
                  {
                    "example_text": "鏡には左右が逆に映る。",
                    "furigana": "鏡（かがみ）さゆうぎゃくうつる。",
                    "meaning_vi": "Gương phản chiếu hình ảnh ngược trái phải.",
                    "meaning_en": "The left and right sides are reflected in the mirror."
                  }
                ],
                "lesson_number": 51
              },
              {
                "vocab": "映す",
                "furigana": "うつす",
                "meaning_vi": "Trình diễn",
                "meaning_en": "Demonstration",
                "examples": [
                  {
                    "example_text": "全身を映せる鏡が欲しい。",
                    "furigana": "全身（ぜんしん）うつかがみほしい。",
                    "meaning_vi": "Tôi muốn có chiếc gương chiếu toàn bộ thân hình.",
                    "meaning_en": "I want a mirror that can reflect my whole body."
                  }
                ],
                "lesson_number": 51
              },
              {
                "vocab": "漬かる",
                "furigana": "つかる",
                "meaning_vi": "Dưa chua",
                "meaning_en": "Melon",
                "examples": [
                  {
                    "example_text": "大雨で家の床まで水につかった。",
                    "furigana": "大雨（おおあめ）いえゆかみずにつかった。",
                    "meaning_vi": "Do mưa lớn nên nước ngập cả sàn nhà.",
                    "meaning_en": "Heavy rain caused water to even the floor of the house."
                  }
                ],
                "lesson_number": 51
              },
              {
                "vocab": "漬ける",
                "furigana": "つける",
                "meaning_vi": "Dưa chua",
                "meaning_en": "Melon",
                "examples": [
                  {
                    "example_text": "汚れが落ちにくいときは、洗剤の液にしばらく付けておくとよい。",
                    "furigana": "汚（よご）おせんざいえきつけておくとよい。",
                    "meaning_vi": "Khi vết bẩn khó giặt thìnên chấm dung dịch bột giặt lên một lúc.",
                    "meaning_en": "If the dirt is difficult to remove, it is a good idea to soak it in a detergent solution for a while."
                  }
                ],
                "lesson_number": 51
              },
              {
                "vocab": "浮かぶ",
                "furigana": "うかぶ",
                "meaning_vi": "Trôi nổi",
                "meaning_en": "Floating",
                "examples": [
                  {
                    "example_text": "池にボートが浮かんでいる。",
                    "furigana": "池（いけ）うかんでいる。",
                    "meaning_vi": "Quả bóng nổi trên mặt hồ.",
                    "meaning_en": "A boat is floating in the pond."
                  }
                ],
                "lesson_number": 51
              },
              {
                "vocab": "浮かべる",
                "furigana": "うかべる",
                "meaning_vi": "Trôi nổi",
                "meaning_en": "Floating",
                "examples": [
                  {
                    "example_text": "池におもちゃのボートを浮かべて遊んだ。",
                    "furigana": "池（いけ）うあそんだ。",
                    "meaning_vi": "Làm nổi quả bóng trên mặt nước và chơi.",
                    "meaning_en": "We played with a toy boat floating in the pond."
                  }
                ],
                "lesson_number": 51
              },
              {
                "vocab": "浮く",
                "furigana": "うく",
                "meaning_vi": "trôi nổi",
                "meaning_en": "floating",
                "examples": [
                  {
                    "example_text": "一円玉は水に浮く。",
                    "furigana": "一（いち）えんだまみずうく。",
                    "meaning_vi": "Đồng tiền 1 yên nổi trên mặt nước.",
                    "meaning_en": "One-yen coins float in the water."
                  }
                ],
                "lesson_number": 51
              },
              {
                "vocab": "潜る",
                "furigana": "もぐる",
                "meaning_vi": "lặn",
                "meaning_en": "dive",
                "examples": [
                  {
                    "example_text": "「日本の「海女」は長時間海に潜って貝や魚を取ることができる。",
                    "furigana": "「日本（にほん）あまちょうじかんうみもぐかいさかなとることができる。",
                    "meaning_vi": "Những nữ thợ lặn Nhật Bản, lặn hàng giờ dưới biển và có thể bắt cá và sò.",
                    "meaning_en": "\"Japanese \"a-ma\" can dive into the sea for a long time to grab shellfish and fish."
                  }
                ],
                "lesson_number": 51
              },
              {
                "vocab": "跳ねる",
                "furigana": "はねる",
                "meaning_vi": "Nảy",
                "meaning_en": "Bounce",
                "examples": [
                  {
                    "example_text": "カエルは地面から大きく跳ねて、草の中へ消えた。",
                    "furigana": "カエルは地面（じめん）おおはくさなかきえた。",
                    "meaning_vi": "Con ếch nhảy những bước nhảy lớn từ mặt đất lẩn vào trong cỏ và biến mất.",
                    "meaning_en": "The frog leapt wildly from the ground and disappeared into the grass."
                  }
                ],
                "lesson_number": 51
              },
              {
                "vocab": "背負う",
                "furigana": "せおう",
                "meaning_vi": "Mang theo lưng của bạn",
                "meaning_en": "Bring your back",
                "examples": [
                  {
                    "example_text": "背中にリュックを背負う。",
                    "furigana": "背中（せなか）せおう。",
                    "meaning_vi": "Mang hành lí trên vai.",
                    "meaning_en": "He carries a backpack on his back."
                  }
                ],
                "lesson_number": 51
              },
              {
                "vocab": "追う",
                "furigana": "おう",
                "meaning_vi": "Theo",
                "meaning_en": "Theo",
                "examples": [
                  {
                    "example_text": "子供は走って母親の後を追った。",
                    "furigana": "子供（こども）はしははおやあとおった。",
                    "meaning_vi": "Đứa trẻ chạy đuổi theo sau lưng mẹ.",
                    "meaning_en": "The child ran and followed his mother."
                  }
                ],
                "lesson_number": 51
              },
              {
                "vocab": "追いかける",
                "furigana": "おいかける",
                "meaning_vi": "Đuổi",
                "meaning_en": "Chase",
                "examples": [
                  {
                    "example_text": "犯人を追いかけたが、逃げられてしまった。",
                    "furigana": "犯人（はんにん）おにげられてしまった。",
                    "meaning_vi": "Đuổi theo tội phạm nhưng đã chạy thoát mất.",
                    "meaning_en": "He chased the perpetrator, but he escaped."
                  }
                ],
                "lesson_number": 52
              },
              {
                "vocab": "追いつく",
                "furigana": "おいつく",
                "meaning_vi": "bắt kịp",
                "meaning_en": "caught",
                "examples": [
                  {
                    "example_text": "彼は足が速いから、今から追いかけても追いつかないだろう。",
                    "furigana": "彼（かれ）あしはやいまおおいつかないだろう。",
                    "meaning_vi": "Anh ấy đi rất nhanh, giờ có đuổi theo cũng không đuổi kịp đâu.",
                    "meaning_en": "He's fast, so even if he chases him now, he won't be able to keep up."
                  }
                ],
                "lesson_number": 52
              },
              {
                "vocab": "追い越す",
                "furigana": "おいこす",
                "meaning_vi": "vượt qua",
                "meaning_en": "overcome",
                "examples": [
                  {
                    "example_text": "前を走る選手に追いついたが、追い越すことはできなかった。",
                    "furigana": "前（まえ）はしせんしゅおおこすことはできなかった。",
                    "meaning_vi": "Đã đuổi kịp vận động viên chạy trước tôi nhưng không thể vượt qua được.",
                    "meaning_en": "He caught up with the player running in front of him, but he couldn't pass."
                  }
                ],
                "lesson_number": 52
              },
              {
                "vocab": "振り向く",
                "furigana": "ふりむく",
                "meaning_vi": "quay lại",
                "meaning_en": "come back",
                "examples": [
                  {
                    "example_text": "名前を呼ばれて、振り向いだ。",
                    "furigana": "名前（なまえ）よふむいだ。",
                    "meaning_vi": "Ai đó gọi tên, tôi nhìn quanh xem ai.",
                    "meaning_en": "He called his name and turned around."
                  }
                ],
                "lesson_number": 52
              },
              {
                "vocab": "捕る・採る・執る",
                "furigana": "とる・とる・とる",
                "meaning_vi": "Bắt, chọn, lấy",
                "meaning_en": "Getting, choosing, taking",
                "examples": [
                  {
                    "example_text": "公園でセミを捕った。",
                    "furigana": "公園（こうえん）とった。",
                    "meaning_vi": "Bắt ve ở công viên.",
                    "meaning_en": "Cicadas were caught in the park."
                  }
                ],
                "lesson_number": 52
              },
              {
                "vocab": "取り上げる",
                "furigana": "とりあげる",
                "meaning_vi": "đảm nhận",
                "meaning_en": "undertake",
                "examples": [
                  {
                    "example_text": "彼女は机の上の本を取り上げた。",
                    "furigana": "彼女（かのじょ）つくえうえほんとあげた。",
                    "meaning_vi": "Cô ấy cầm quyển sách ở trên bàn.",
                    "meaning_en": "She picked up the book on her desk."
                  }
                ],
                "lesson_number": 52
              },
              {
                "vocab": "取り入れる",
                "furigana": "とりいれる",
                "meaning_vi": "Kết hợp",
                "meaning_en": "Combine",
                "examples": [
                  {
                    "example_text": "洗濯物を取り入れる。",
                    "furigana": "洗濯物（せんたくもの）といれる。",
                    "meaning_vi": "Lấy đồ giặt vào.",
                    "meaning_en": "Incorporate laundry."
                  }
                ],
                "lesson_number": 52
              },
              {
                "vocab": "削る",
                "furigana": "けずる",
                "meaning_vi": "Cắt nó xuống",
                "meaning_en": "Cut it down",
                "examples": [
                  {
                    "example_text": "ナイフで鉛筆を削った。",
                    "furigana": "ナイフで鉛筆（えんぴつ）けずった。",
                    "meaning_vi": "Gọt bút chì bằng dao.",
                    "meaning_en": "I sharpened the pencil with a knife."
                  }
                ],
                "lesson_number": 52
              },
              {
                "vocab": "縛る",
                "furigana": "しばる",
                "meaning_vi": "Buộc nó lên",
                "meaning_en": "Tie it up",
                "examples": [
                  {
                    "example_text": "古い雑誌を重ねてひもで縛る。",
                    "furigana": "古（ふる）ざっしかさしばる。",
                    "meaning_vi": "Dùng dây buộc tạp chí cũ lại.",
                    "meaning_en": "Layer old magazines and tie them up with strings."
                  }
                ],
                "lesson_number": 52
              },
              {
                "vocab": "絞る・搾る",
                "furigana": "しぼる・しぼる",
                "meaning_vi": "Siết/siết",
                "meaning_en": "Tighten/tighten",
                "examples": [
                  {
                    "example_text": "水に濡らしたタオルを絞る。",
                    "furigana": "水（みず）ぬしぼる。",
                    "meaning_vi": "Vắt khăn bị ướt.",
                    "meaning_en": "Writhe a wet towel."
                  }
                ],
                "lesson_number": 52
              },
              {
                "vocab": "回る",
                "furigana": "まわる",
                "meaning_vi": "Nó quay",
                "meaning_en": "It turns",
                "examples": [
                  {
                    "example_text": "地球は太陽の周りを回っている。",
                    "furigana": "地球（ちきゅう）たいようまわまわっている。",
                    "meaning_vi": "Trái đất quay quanh mặt trời.",
                    "meaning_en": "The earth revolves around the sun."
                  }
                ],
                "lesson_number": 52
              },
              {
                "vocab": "回す",
                "furigana": "まわす",
                "meaning_vi": "xoay",
                "meaning_en": "turn",
                "examples": [
                  {
                    "example_text": "ドアの取っ手を回して開ける。",
                    "furigana": "ドアの取（と）てまわあける。",
                    "meaning_vi": "Vặn tay nắm cửa thì cửa sẽ mở.",
                    "meaning_en": "Turn the door handle to open it."
                  }
                ],
                "lesson_number": 52
              },
              {
                "vocab": "区切る",
                "furigana": "くぎる",
                "meaning_vi": "chấm câu",
                "meaning_en": "punctuation",
                "examples": [
                  {
                    "example_text": "一つ一つ言葉を区切って話す。",
                    "furigana": "一（ひと）ひとことばくぎはなす。",
                    "meaning_vi": "Nói nhả từng chữ một.",
                    "meaning_en": "Speak each word by separating it."
                  }
                ],
                "lesson_number": 53
              },
              {
                "vocab": "組む",
                "furigana": "くむ",
                "meaning_vi": "Đặt cùng nhau",
                "meaning_en": "Put together",
                "examples": [
                  {
                    "example_text": "｛足/腕/肩…｝を組む。",
                    "furigana": "｛足（あし）うでかたくむ。",
                    "meaning_vi": "",
                    "meaning_en": "Closing the legs/arms/shoulders..."
                  }
                ],
                "lesson_number": 53
              },
              {
                "vocab": "組み立てる",
                "furigana": "くみたてる",
                "meaning_vi": "lắp ráp",
                "meaning_en": "assemble",
                "examples": [
                  {
                    "example_text": "部品を組み立てて機械を作った。",
                    "furigana": "部品（ぶひん）くたきかいつくった。",
                    "meaning_vi": "Lắp ráp bộ phận để tạo nên máy móc.",
                    "meaning_en": "The parts were assembled and the machine was built."
                  }
                ],
                "lesson_number": 53
              },
              {
                "vocab": "加わる",
                "furigana": "くわわる",
                "meaning_vi": "Tham gia",
                "meaning_en": "Join",
                "examples": [
                  {
                    "example_text": "新しい選手がチームに加わった。",
                    "furigana": "新（あたら）せんしゅくわわった。",
                    "meaning_vi": "Thêm thành viên mới vào nhóm.",
                    "meaning_en": "New players have joined the team."
                  }
                ],
                "lesson_number": 53
              },
              {
                "vocab": "加える",
                "furigana": "くわえる",
                "meaning_vi": "Thêm vào",
                "meaning_en": "Add",
                "examples": [
                  {
                    "example_text": "3に8を加えると11になる。",
                    "furigana": "3に8を加（くわ）えると11になる。",
                    "meaning_vi": "Cộng 8 vào 3 sẽ thành 11.",
                    "meaning_en": "Adding 8 to 3 gives 11."
                  }
                ],
                "lesson_number": 53
              },
              {
                "vocab": "仕上がる",
                "furigana": "しあがる",
                "meaning_vi": "Hoàn thành",
                "meaning_en": "Complete",
                "examples": [
                  {
                    "example_text": "恋人に挙げるマフラーがやっと仕上がった。",
                    "furigana": "恋人（こいびと）あしあがった。",
                    "meaning_vi": "Cuối cùng đan xong chiếc khăn quàng cổ tặng người yêu.",
                    "meaning_en": "The scarf I'm giving as a lover has finally been finished."
                  }
                ],
                "lesson_number": 53
              },
              {
                "vocab": "仕上げる",
                "furigana": "しあげる",
                "meaning_vi": "Hoàn thành",
                "meaning_en": "Complete",
                "examples": [
                  {
                    "example_text": "「この仕事は月末までに仕上げてください」",
                    "furigana": "「この仕事（しごと）げつまつしあげてください」",
                    "meaning_vi": "Hãy làm xong công việc này đến cuối tháng nhé.",
                    "meaning_en": "\"Please finish this job by the end of the month.\""
                  }
                ],
                "lesson_number": 53
              },
              {
                "vocab": "通りかかる",
                "furigana": "とおりかかる",
                "meaning_vi": "Đi qua",
                "meaning_en": "Passing",
                "examples": [
                  {
                    "example_text": "ラーメン屋の前を通りかかると、大勢の人が行列していた。",
                    "furigana": "ラーメン屋（や）まえとおおおぜいひとぎょうれつしていた。",
                    "meaning_vi": "Tình cờ đi ngang qua cửa hàng mì, thấy rất đông người đang xếp hàng.",
                    "meaning_en": "When I passed by the ramen restaurant, there were a large number of people lined up."
                  }
                ],
                "lesson_number": 53
              },
              {
                "vocab": "飛び回る",
                "furigana": "とびまわる",
                "meaning_vi": "Bay xung quanh",
                "meaning_en": "Flying",
                "examples": [
                  {
                    "example_text": "ミツバチがぶんぶん飛び回っている。",
                    "furigana": "ミツバチがぶんぶん飛（と）まわっている。",
                    "meaning_vi": "Ong bay vo ve xung quanh.",
                    "meaning_en": "The bees are flying around."
                  }
                ],
                "lesson_number": 53
              },
              {
                "vocab": "巡る",
                "furigana": "めぐる",
                "meaning_vi": "Đi xung quanh",
                "meaning_en": "Surrounding",
                "examples": [
                  {
                    "example_text": "お土産をもらった子供は喜んで飛び回った。",
                    "furigana": "お土産（みやげ）こどもよろことまわった。",
                    "meaning_vi": "Đứa trẻ nhận được quà vui mừng chạy vòng quanh.",
                    "meaning_en": "The children who received the souvenirs were happy to fly around."
                  }
                ],
                "lesson_number": 53
              },
              {
                "vocab": "補う",
                "furigana": "おぎなう",
                "meaning_vi": "đền bù",
                "meaning_en": "compensation",
                "examples": [
                  {
                    "example_text": "栄養不足を補うために、薬を飲んでいる。",
                    "furigana": "栄養（えいよう）ぶそくおぎなくすりのんでいる。",
                    "meaning_vi": "Tôi uống thuốc để bổ sung sự thiếu chất dinh dưỡng.",
                    "meaning_en": "I take medicine to compensate for my nutritional deficiency."
                  }
                ],
                "lesson_number": 53
              },
              {
                "vocab": "防ぐ",
                "furigana": "ふせぐ",
                "meaning_vi": "ngăn chặn",
                "meaning_en": "prevent",
                "examples": [
                  {
                    "example_text": "泥棒を防ぐために、鍵を二つ付けた。",
                    "furigana": "泥棒（どろぼう）ふせかぎふたつけた。",
                    "meaning_vi": "Để phòng trộm tôi làm hai chìa khóa.",
                    "meaning_en": "To prevent thieves, I put two keys on it."
                  }
                ],
                "lesson_number": 53
              },
              {
                "vocab": "救う",
                "furigana": "すくう",
                "meaning_vi": "cứu",
                "meaning_en": "rescue",
                "examples": [
                  {
                    "example_text": "ペニシリンの発見は、多くの人々の命を救った。",
                    "furigana": "ペニシリンの発見（はっけん）おおひとびといのちすくった。",
                    "meaning_vi": "Việc phát hiện ra penicilin đã cứu sống nhiều mạng người.",
                    "meaning_en": "The discovery of penicillin saved the lives of many people."
                  }
                ],
                "lesson_number": 53
              },
              {
                "vocab": "除く",
                "furigana": "のぞく",
                "meaning_vi": "ngoại trừ",
                "meaning_en": "except",
                "examples": [
                  {
                    "example_text": "この機械は空気中の有害物質を取り除く作用がある。",
                    "furigana": "この機械（きかい）くうきちゅうゆうがいぶっしつとのぞさようがある。",
                    "meaning_vi": "Loại máy này có tác dụng tiêu diệt những côn trùng gây hại trong không trung.",
                    "meaning_en": "This machine has the effect of removing harmful substances from the air."
                  }
                ],
                "lesson_number": 54
              },
              {
                "vocab": "省く",
                "furigana": "はぶく",
                "meaning_vi": "Bỏ qua nó",
                "meaning_en": "Ignore it",
                "examples": [
                  {
                    "example_text": "「表1はあまり関係ないので資料から省きましょう」",
                    "furigana": "「表（ひょう）かんけいしりょうはぶきましょう」",
                    "meaning_vi": "Bảng 1 không liên quan lắm nên hãy lược bớt khỏi tài liệu đi.",
                    "meaning_en": "\"Table 1 is not very relevant, so let's skip it from the materials.\""
                  }
                ],
                "lesson_number": 54
              },
              {
                "vocab": "誤る",
                "furigana": "あやまる",
                "meaning_vi": "Nó sai",
                "meaning_en": "It is wrong",
                "examples": [
                  {
                    "example_text": "運転を誤って、事故を起こしてしまった。",
                    "furigana": "運転（うんてん）あやまじこおこしてしまった。",
                    "meaning_vi": "Phạm lỗi trong lái xe nên gây ra tai nạn.",
                    "meaning_en": "I accidentally drove and caused an accident."
                  }
                ],
                "lesson_number": 54
              },
              {
                "vocab": "奪う",
                "furigana": "うばう",
                "meaning_vi": "Lấy nó",
                "meaning_en": "Take it",
                "examples": [
                  {
                    "example_text": "コンビニで強盗が入り、レジから売上金を奪って逃走した。",
                    "furigana": "コンビニで強盗（ごうとう）はいうりあげきんうばとうそうした。",
                    "meaning_vi": "Tên trộm vào cửa hàng tiện lợi ăn cắp doanh thu ở quầy tính tiền và tẩu thoát.",
                    "meaning_en": "A robber was robbed at a convenience store, robbed the cash register and fled."
                  }
                ],
                "lesson_number": 54
              },
              {
                "vocab": "しまう",
                "furigana": "しまう",
                "meaning_vi": "Tôi đặt nó vào",
                "meaning_en": "I put it in",
                "examples": [
                  {
                    "example_text": "春になったので、冬物をしまった。",
                    "furigana": "春（はる）ふゆものをしまった。",
                    "meaning_vi": "Đến mùa xuân nên cất đồ mùa đông.",
                    "meaning_en": "It's spring, so I went to winter."
                  }
                ],
                "lesson_number": 54
              },
              {
                "vocab": "怠ける",
                "furigana": "なまける",
                "meaning_vi": "Laze",
                "meaning_en": "Laze",
                "examples": [
                  {
                    "example_text": "仕事を怠ける。",
                    "furigana": "仕事（しごと）なまける。",
                    "meaning_vi": "Lười biếng công việc.",
                    "meaning_en": "Lack of work."
                  }
                ],
                "lesson_number": 54
              },
              {
                "vocab": "失う",
                "furigana": "うしなう",
                "meaning_vi": "thua",
                "meaning_en": "lose",
                "examples": [
                  {
                    "example_text": "地震で財産を失った。",
                    "furigana": "地震（じしん）ざいさんうしなった。",
                    "meaning_vi": "Mất hết tài sản vì động đất.",
                    "meaning_en": "He lost his property in the earthquake."
                  }
                ],
                "lesson_number": 54
              },
              {
                "vocab": "攻める",
                "furigana": "せめる",
                "meaning_vi": "tấn công",
                "meaning_en": "attack",
                "examples": [
                  {
                    "example_text": "敵を攻める。",
                    "furigana": "敵（てき）せめる。",
                    "meaning_vi": "Tấn công kẻ thù.",
                    "meaning_en": "Attack the enemy."
                  }
                ],
                "lesson_number": 54
              },
              {
                "vocab": "睨む",
                "furigana": "にらむ",
                "meaning_vi": "Tráng men",
                "meaning_en": "Enamel",
                "examples": [
                  {
                    "example_text": "その学生は注意されて、逆に先生をにらんだ。",
                    "furigana": "その学生（がくせい）ちゅういぎゃくせんせいをにらんだ。",
                    "meaning_vi": "Học sinh đó bị nhắc nhở ngược lại còn lườm lại giáo viên.",
                    "meaning_en": "The student was warned and instead stared at the teacher."
                  }
                ],
                "lesson_number": 54
              },
              {
                "vocab": "責める",
                "furigana": "せめる",
                "meaning_vi": "đổ tội",
                "meaning_en": "blame",
                "examples": [
                  {
                    "example_text": "相手の失敗を責める。",
                    "furigana": "相手（あいて）しっぱいせめる。",
                    "meaning_vi": "Đổ lỗi thất bại cho đối phương.",
                    "meaning_en": "Blaming the other person for their mistakes."
                  }
                ],
                "lesson_number": 54
              },
              {
                "vocab": "裏切る",
                "furigana": "うらぎる",
                "meaning_vi": "phản bội",
                "meaning_en": "betray",
                "examples": [
                  {
                    "example_text": "彼は味方を裏切り、敵のグループに入った。",
                    "furigana": "彼（かれ）みかたうらぎてきはいった。",
                    "meaning_vi": "Anh ta phản bội đồng đội gia nhập vào đội kẻ thù.",
                    "meaning_en": "He betrayed his allies and joined the enemy group."
                  }
                ],
                "lesson_number": 54
              },
              {
                "vocab": "頼る",
                "furigana": "たよる",
                "meaning_vi": "phụ thuộc",
                "meaning_en": "dependent",
                "examples": [
                  {
                    "example_text": "彼は学費を親に頼らず、自分で働いて払っている。",
                    "furigana": "彼（かれ）がくひおやたよじぶんはたらはらっている。",
                    "meaning_vi": "Anh ấy không nhờ vào tiền học phí của ba mẹ mà tự đi làm để trả.",
                    "meaning_en": "He does not rely on his parents, but instead works and pays for his tuition."
                  }
                ],
                "lesson_number": 54
              },
              {
                "vocab": "遭う",
                "furigana": "あう",
                "meaning_vi": "Tôi sẽ gặp",
                "meaning_en": "I will meet",
                "examples": [
                  {
                    "example_text": "交通事故に遭ってけがをした。",
                    "furigana": "交通（こうつう）じこあってけがをした。",
                    "meaning_vi": "Gặp tai nạn giao thông nên bị thương.",
                    "meaning_en": "He was injured in a traffic accident."
                  }
                ],
                "lesson_number": 54
              },
              {
                "vocab": "招く",
                "furigana": "まねく",
                "meaning_vi": "Mời",
                "meaning_en": "Invite",
                "examples": [
                  {
                    "example_text": "自宅に友人を招いた。",
                    "furigana": "自宅（じたく）ゆうじんまねいた。",
                    "meaning_vi": "Mời bạn đến chơi nhà.",
                    "meaning_en": "I invited a friend to my house."
                  }
                ],
                "lesson_number": 54
              },
              {
                "vocab": "引っ掛かる",
                "furigana": "ひっかかる",
                "meaning_vi": "Nó bị cuốn hút",
                "meaning_en": "It is fascinated",
                "examples": [
                  {
                    "example_text": "山で服が木に引っかかって破れてしまった。",
                    "furigana": "山（やま）ふくきひやぶれてしまった。",
                    "meaning_vi": "Trên núi, áo bị mắc vào cây rách te tua.",
                    "meaning_en": "My clothes got caught in the mountains and fell apart."
                  }
                ],
                "lesson_number": 55
              },
              {
                "vocab": "引っ掛ける",
                "furigana": "ひっかける",
                "meaning_vi": "cái móc",
                "meaning_en": "hook",
                "examples": [
                  {
                    "example_text": "釘に服をひっかけて破ってしまった。",
                    "furigana": "釘（くぎ）ふくやぶってしまった。",
                    "meaning_vi": "Mắc áo vào đinh nên bị rách.",
                    "meaning_en": "I hooked my clothes onto the nail and torn it."
                  }
                ],
                "lesson_number": 55
              },
              {
                "vocab": "ひっくり返る",
                "furigana": "ひっくりかえる",
                "meaning_vi": "Lật nó qua",
                "meaning_en": "Turn it over",
                "examples": [
                  {
                    "example_text": "ボートが波でひっくりかえって上下さかさまになった。",
                    "furigana": "ボートが波（なみ）じょうげさかさまになった。",
                    "meaning_vi": "Thuyền bị sóng đánh cứ dập dềnh lên xuống.",
                    "meaning_en": "The boat was turned over by the waves and turned upside down."
                  }
                ],
                "lesson_number": 55
              },
              {
                "vocab": "ひっくり返す",
                "furigana": "ひっくりかえす",
                "meaning_vi": "lật lại",
                "meaning_en": "turn over",
                "examples": [
                  {
                    "example_text": "魚をひっくり返して焼く。",
                    "furigana": "魚（さかな）かえやく。",
                    "meaning_vi": "Lật ngược con cá lại và nướng.",
                    "meaning_en": "Turn the fish over and grill it."
                  }
                ],
                "lesson_number": 55
              },
              {
                "vocab": "ずれる",
                "furigana": "ずれる",
                "meaning_vi": "Nó đang thay đổi",
                "meaning_en": "It is changing",
                "examples": [
                  {
                    "example_text": "地震で鉄道のレールがずれた。",
                    "furigana": "地震（じしん）てつどうのレールがずれた。",
                    "meaning_vi": "Do động đất nên xe điện bị trượt đường ray.",
                    "meaning_en": "The rails on the railway were shifted due to the earthquake."
                  }
                ],
                "lesson_number": 55
              },
              {
                "vocab": "ずらす",
                "furigana": "ずらす",
                "meaning_vi": "Nhảy",
                "meaning_en": "Dance",
                "examples": [
                  {
                    "example_text": "机を少しずらして床を掃除した。",
                    "furigana": "机（つくえ）すこゆかそうじした。",
                    "meaning_vi": "Dịch bàn ra một chút để lau chùi sàn nhà.",
                    "meaning_en": "I moved the desk a little and cleaned the floor."
                  }
                ],
                "lesson_number": 55
              },
              {
                "vocab": "崩れる",
                "furigana": "くずれる",
                "meaning_vi": "Nó đang sụp đổ",
                "meaning_en": "It is collapse",
                "examples": [
                  {
                    "example_text": "大雨で山が崩れた。",
                    "furigana": "大雨（おおあめ）やまくずれた。",
                    "meaning_vi": "Do mưa lớn nên núi bị sạt lở.",
                    "meaning_en": "Heavy rain caused the mountain to collapse."
                  }
                ],
                "lesson_number": 55
              },
              {
                "vocab": "崩す",
                "furigana": "くずす",
                "meaning_vi": "Phá vỡ nó xuống",
                "meaning_en": "Break it down",
                "examples": [
                  {
                    "example_text": "山を崩して住宅地が造られている。",
                    "furigana": "山（やま）くずじゅうたくちつくられている。",
                    "meaning_vi": "Phá núi để làm nhà.",
                    "meaning_en": "Residential areas have been created by shattering the mountains."
                  }
                ],
                "lesson_number": 55
              },
              {
                "vocab": "荒れる",
                "furigana": "あれる",
                "meaning_vi": "Nó đang trở nên khó khăn",
                "meaning_en": "It is becoming difficult",
                "examples": [
                  {
                    "example_text": "台風の接近で山も海も荒れている。",
                    "furigana": "台風（たいふう）せっきんやまうみあれている。",
                    "meaning_vi": "Do sự tiếp cận của bão nên núi và biển đều động.",
                    "meaning_en": "The mountains and the sea are raging due to the approaching typhoon."
                  }
                ],
                "lesson_number": 55
              },
              {
                "vocab": "荒らす",
                "furigana": "あらす",
                "meaning_vi": "Troll",
                "meaning_en": "Troll",
                "examples": [
                  {
                    "example_text": "泥棒が入られ、部屋が荒らされた。",
                    "furigana": "泥棒（どろぼう）はいへやあらされた。",
                    "meaning_vi": "Trộm vào làm loạn tung cả phòng lên.",
                    "meaning_en": "A thief was entered and the room was ruined."
                  }
                ],
                "lesson_number": 55
              },
              {
                "vocab": "認める",
                "furigana": "みとめる",
                "meaning_vi": "thừa nhận",
                "meaning_en": "admit",
                "examples": [
                  {
                    "example_text": "彼は犯行を認めた。",
                    "furigana": "彼（かれ）はんこうみとめた。",
                    "meaning_vi": "Anh ấy đã nhận là phạm tội.",
                    "meaning_en": "He admitted to the crime."
                  }
                ],
                "lesson_number": 56
              },
              {
                "vocab": "見直す",
                "furigana": "みなおす",
                "meaning_vi": "Ôn tập",
                "meaning_en": "Review",
                "examples": [
                  {
                    "example_text": "「テストを出す前に、もう一度見直しなさい」",
                    "furigana": "「テストを出（だ）まえいちどみなおしなさい」",
                    "meaning_vi": "Trước khi nộp bài hãy nhìn lại một lần nữa.",
                    "meaning_en": "\"Review it again before you put it out.\""
                  }
                ],
                "lesson_number": 56
              },
              {
                "vocab": "見慣れる",
                "furigana": "みなれる",
                "meaning_vi": "Hãy quen thuộc",
                "meaning_en": "Be familiar",
                "examples": [
                  {
                    "example_text": "見慣れない人が教室にいる。",
                    "furigana": "見慣（みな）ひときょうしつにいる。",
                    "meaning_vi": "Có người lạ trong lớp.",
                    "meaning_en": "There's someone you don't know in the classroom."
                  }
                ],
                "lesson_number": 56
              },
              {
                "vocab": "求める",
                "furigana": "もとめる",
                "meaning_vi": "yêu cầu",
                "meaning_en": "request",
                "examples": [
                  {
                    "example_text": "彼女は職を求めている。",
                    "furigana": "彼女（かのじょ）しょくもとめている。",
                    "meaning_vi": "Cô ấy đang tìm việc.",
                    "meaning_en": "She is looking for a job."
                  }
                ],
                "lesson_number": 56
              },
              {
                "vocab": "漏れる",
                "furigana": "もれる",
                "meaning_vi": "Rò rỉ",
                "meaning_en": "Leak",
                "examples": [
                  {
                    "example_text": "台所でガスが漏れている。",
                    "furigana": "台所（だいどころ）もれている。",
                    "meaning_vi": "Ga rò rỉ ở nhà bếp.",
                    "meaning_en": "Gas is leaking in the kitchen."
                  }
                ],
                "lesson_number": 56
              },
              {
                "vocab": "漏らす",
                "furigana": "もらす",
                "meaning_vi": "Hở",
                "meaning_en": "Open",
                "examples": [
                  {
                    "example_text": "一滴も漏らさず水をバケツで運んだ。",
                    "furigana": "一滴（いってき）もみずはこんだ。",
                    "meaning_vi": "Vận chuyển bình đựng nước không rò rỉ ra dù chỉ một giọt.",
                    "meaning_en": "Without leaking a drop, I carried the water in a bucket."
                  }
                ],
                "lesson_number": 56
              },
              {
                "vocab": "なる",
                "furigana": "なる",
                "meaning_vi": "Nó sẽ trở thành",
                "meaning_en": "It will become",
                "examples": [
                  {
                    "example_text": "庭に実がなる木を植えた。",
                    "furigana": "庭（にわ）みきうえた。",
                    "meaning_vi": "Trong vườn cây đã ra quả.",
                    "meaning_en": "I planted fruit-bearing trees in my garden."
                  }
                ],
                "lesson_number": 56
              },
              {
                "vocab": "焦げる",
                "furigana": "こげる",
                "meaning_vi": "Bỏng",
                "meaning_en": "Burn",
                "examples": [
                  {
                    "example_text": "焼き過ぎて、魚が真っ黒にこげてしまった。",
                    "furigana": "焼（や）すさかなまくろにこげてしまった。",
                    "meaning_vi": "Do nướng quá nên cá bị cháy đen thui.",
                    "meaning_en": "It was overcooked and the fish was completely black."
                  }
                ],
                "lesson_number": 56
              },
              {
                "vocab": "反する",
                "furigana": "はんする",
                "meaning_vi": "Mâu thuẫn",
                "meaning_en": "Conflict",
                "examples": [
                  {
                    "example_text": "両親の期待に反して、大学に進学しなかった。",
                    "furigana": "両親（りょうしん）きたいはんだいがくしんがくしなかった。",
                    "meaning_vi": "Trái với kì vọng của ba mẹ không đi học đại học.",
                    "meaning_en": "Contrary to my parents' expectations, I didn't go to university."
                  }
                ],
                "lesson_number": 56
              },
              {
                "vocab": "膨れる",
                "furigana": "ふくれる",
                "meaning_vi": "sưng lên",
                "meaning_en": "swollen",
                "examples": [
                  {
                    "example_text": "網の上でもちが膨れている。",
                    "furigana": "網（あみ）うえふくれている。",
                    "meaning_vi": "Ở trên lưới bánh giầy đang phòng lên.",
                    "meaning_en": "The difference is bulging on the net."
                  }
                ],
                "lesson_number": 56
              },
              {
                "vocab": "膨らむ",
                "furigana": "ふくらむ",
                "meaning_vi": "Nó sưng lên",
                "meaning_en": "It is swollen",
                "examples": [
                  {
                    "example_text": "桜のつぼみが膨らんだ。",
                    "furigana": "桜（さくら）ふくらんだ。",
                    "meaning_vi": "Nụ hoa Sakura đã nở.",
                    "meaning_en": "The cherry blossom buds have swelled."
                  }
                ],
                "lesson_number": 57
              },
              {
                "vocab": "膨らます",
                "furigana": "ふくらます",
                "meaning_vi": "thổi phồng lên",
                "meaning_en": "exaggerate",
                "examples": [
                  {
                    "example_text": "娘は怒ると頬を膨らます。",
                    "furigana": "娘（むすめ）おこほおふくらます。",
                    "meaning_vi": "Em gái tôi khi tức giận sẽ phồng má lên.",
                    "meaning_en": "When her daughter gets angry, her cheeks bulge."
                  }
                ],
                "lesson_number": 57
              },
              {
                "vocab": "尖る",
                "furigana": "とがる",
                "meaning_vi": "Nhọn",
                "meaning_en": "Sharp",
                "examples": [
                  {
                    "example_text": "新入生は｛希望/期待｝に胸を膨らませて学校に行った。",
                    "furigana": "新入生（しんにゅうせい）きぼうきたいむねふくがっこういった。",
                    "meaning_vi": "Những học sinh mới nhập học tràn đầy kì vọng đến trường.",
                    "meaning_en": "The new students went to school with their hearts bulging out at hope/expectation."
                  }
                ],
                "lesson_number": 57
              },
              {
                "vocab": "当てはまる",
                "furigana": "あてはまる",
                "meaning_vi": "áp dụng",
                "meaning_en": "apply",
                "examples": [
                  {
                    "example_text": "口をとがらせて不満を言う。",
                    "furigana": "口（くち）ふまんいう。",
                    "meaning_vi": "Bỉu môi nói những lời bất mãn.",
                    "meaning_en": "Pinch and complain."
                  }
                ],
                "lesson_number": 57
              },
              {
                "vocab": "就く",
                "furigana": "つく",
                "meaning_vi": "Đi đến",
                "meaning_en": "Go",
                "examples": [
                  {
                    "example_text": "大学を卒業して教職に就いた。",
                    "furigana": "大学（だいがく）そつぎょうきょうしょくついた。",
                    "meaning_vi": "Sau khi tốt nghiệp tôi muốn kiếm việc về giáo dục.",
                    "meaning_en": "He graduated from university and took up a teaching career."
                  }
                ],
                "lesson_number": 57
              },
              {
                "vocab": "受け持つ",
                "furigana": "うけもつ",
                "meaning_vi": "Tôi sẽ chăm sóc",
                "meaning_en": "I will take care",
                "examples": [
                  {
                    "example_text": "サークルで、今年は会計を受け持つことになった。",
                    "furigana": "サークルで、今年（ことし）かいけいうもつことになった。",
                    "meaning_vi": "Năm nay tôi đảm nhận kế toán cho câu lạc bộ.",
                    "meaning_en": "This year I was assigned to be responsible for accounting in the circle."
                  }
                ],
                "lesson_number": 57
              },
              {
                "vocab": "従う",
                "furigana": "したがう",
                "meaning_vi": "theo",
                "meaning_en": "theo",
                "examples": [
                  {
                    "example_text": "「非常の際は係員の指示に従って避難してください」",
                    "furigana": "「非常（ひじょう）さいかかりいんしじしたがひなんしてください」",
                    "meaning_vi": "Vào những lúc khẩn cấp hãy nghe theo chỉ thị của quản lí để lánh nạn.",
                    "meaning_en": "\"In the event of an emergency, please follow the instructions of the staff to evacuate.\""
                  }
                ],
                "lesson_number": 57
              },
              {
                "vocab": "呟く",
                "furigana": "つぶやく",
                "meaning_vi": "Tôi tweet",
                "meaning_en": "I tweet",
                "examples": [
                  {
                    "example_text": "彼女は下を向いて、何かぶつぶつつぶやいてた。",
                    "furigana": "彼女（かのじょ）したむなにかぶつぶつつぶやいてた。",
                    "meaning_vi": "Cô ấy cúi đầu xuống và lẩm bẩm điều gì đó.",
                    "meaning_en": "She looked down and muttered something."
                  }
                ],
                "lesson_number": 57
              },
              {
                "vocab": "述べる",
                "furigana": "のべる",
                "meaning_vi": "Tình trạng",
                "meaning_en": "Status",
                "examples": [
                  {
                    "example_text": "自分の意見を述べる。",
                    "furigana": "自分（じぶん）いけんのべる。",
                    "meaning_vi": "Phát biểu ý kiến của bản thân.",
                    "meaning_en": "Express your own opinion."
                  }
                ],
                "lesson_number": 57
              },
              {
                "vocab": "目覚める",
                "furigana": "めざめる",
                "meaning_vi": "thức dậy",
                "meaning_en": "wake up",
                "examples": [
                  {
                    "example_text": "早朝、鳥の声で目覚めた。",
                    "furigana": "早朝（そうちょう）とりこえめざめた。",
                    "meaning_vi": "Sáng sớm tôi bị thức giấc bởi tiếng chim.",
                    "meaning_en": "I woke up early in the morning to the sound of birds."
                  }
                ],
                "lesson_number": 57
              },
              {
                "vocab": "限る",
                "furigana": "かぎる",
                "meaning_vi": "Giới hạn",
                "meaning_en": "Limit",
                "examples": [
                  {
                    "example_text": "日本では漫画を読むのは子供に限らない。",
                    "furigana": "日本（にほん）まんがよこどもかぎらない。",
                    "meaning_vi": "Ở Nhật Bản không chỉ có trẻ em đọc truyện tranh manga.",
                    "meaning_en": "In Japan, it is not just children to read manga."
                  }
                ],
                "lesson_number": 57
              },
              {
                "vocab": "片寄る・偏る",
                "furigana": "かたよる・かたよる",
                "meaning_vi": "Trở thành một chút thiên vị",
                "meaning_en": "Become a little biased",
                "examples": [
                  {
                    "example_text": "ボートで客が一方に片寄ったため、船体が傾いてしまった。",
                    "furigana": "ボートで客（きゃく）いっぽうかたよせんたいかたむいてしまった。",
                    "meaning_vi": "Vì hành khách dồn về một phía nên thuyền bị nghiêng.",
                    "meaning_en": "The boat leaned towards one side, causing the hull to tilt."
                  }
                ],
                "lesson_number": 57
              },
              {
                "vocab": "薄まる",
                "furigana": "うすまる",
                "meaning_vi": "Nó mờ dần",
                "meaning_en": "It fades",
                "examples": [
                  {
                    "example_text": "凍りがとけてジュースが薄まった。",
                    "furigana": "凍（こお）うすまった。",
                    "meaning_vi": "Đá tan ra làm nhạt nước trái cây.",
                    "meaning_en": "The freeze melted and the juice faded."
                  }
                ],
                "lesson_number": 57
              },
              {
                "vocab": "薄める",
                "furigana": "うすめる",
                "meaning_vi": "pha loãng",
                "meaning_en": "dilute",
                "examples": [
                  {
                    "example_text": "水を足して味を薄めた。",
                    "furigana": "水（みず）たあじうすめた。",
                    "meaning_vi": "Thêm nước vào để làm nhạt vị.",
                    "meaning_en": "Added water to dilute the flavor."
                  }
                ],
                "lesson_number": 57
              },
              {
                "vocab": "薄れる",
                "furigana": "うすれる",
                "meaning_vi": "Nó mờ dần",
                "meaning_en": "It fades",
                "examples": [
                  {
                    "example_text": "霧が薄れ、見通しが良くなった。",
                    "furigana": "霧（きり）うすみとおよくなった。",
                    "meaning_vi": "Sương mờ, nhìn rõ được con đường.",
                    "meaning_en": "The fog faded and the outlook improved."
                  }
                ],
                "lesson_number": 57
              },
              {
                "vocab": "透き通る",
                "furigana": "すきとおる",
                "meaning_vi": "Minh bạch",
                "meaning_en": "Transparent",
                "examples": [
                  {
                    "example_text": "川の水が透き通っている。",
                    "furigana": "川（かわ）みずすとおっている。",
                    "meaning_vi": "Dòng nước của con sông trong suốt.",
                    "meaning_en": "The river is clear."
                  }
                ],
                "lesson_number": 58
              },
              {
                "vocab": "静まる・鎮まる",
                "furigana": "しずまる・しずまる",
                "meaning_vi": "Yên tĩnh và bình tĩnh",
                "meaning_en": "Quiet and calm",
                "examples": [
                  {
                    "example_text": "先生が入ってくると、教室がしいんと静まった。",
                    "furigana": "先生（せんせい）はいきょうしつしずまった。",
                    "meaning_vi": "Khi cô giáo vào, cả lớp im như tờ.",
                    "meaning_en": "When the teacher came in, the classroom was silent."
                  }
                ],
                "lesson_number": 58
              },
              {
                "vocab": "静める・鎮める",
                "furigana": "しずめる・しずめる",
                "meaning_vi": "Yên tĩnh và bình tĩnh",
                "meaning_en": "Quiet and calm",
                "examples": [
                  {
                    "example_text": "司会者は騒がしい場内を一言で静めた。",
                    "furigana": "司会者（しかいしゃ）さわじょうないひとことしずめた。",
                    "meaning_vi": "Người dẫn chương trình nói vài câu để làm yên lặng hội trường ồn ào.",
                    "meaning_en": "The host calmed the noisy venue in one word."
                  }
                ],
                "lesson_number": 58
              },
              {
                "vocab": "優れる",
                "furigana": "すぐれる",
                "meaning_vi": "Xuất sắc",
                "meaning_en": "Excellent",
                "examples": [
                  {
                    "example_text": "彼は運動能力｛が/に｝優れている。",
                    "furigana": "彼（かれ）うんどうのうりょくすぐれている。",
                    "meaning_vi": "Anh ấy giỏi về năng lực vận động.",
                    "meaning_en": "He has excellent athletic abilities."
                  }
                ],
                "lesson_number": 58
              },
              {
                "vocab": "落ち着く",
                "furigana": "おちつく",
                "meaning_vi": "bình tĩnh",
                "meaning_en": "calm",
                "examples": [
                  {
                    "example_text": "「慌てないで、落ち着いて話してください」",
                    "furigana": "「慌（あわ）おつはなしてください」",
                    "meaning_vi": "Đừng vội vàng, hãy bình tĩnh mà nói.",
                    "meaning_en": "\"Don't panic, just talk calmly.\""
                  }
                ],
                "lesson_number": 58
              },
              {
                "vocab": "長引く",
                "furigana": "ながびく",
                "meaning_vi": "Nó dài",
                "meaning_en": "It is long",
                "examples": [
                  {
                    "example_text": "仕事が長引いて約束に遅れてしまった。",
                    "furigana": "仕事（しごと）ながびやくそくおくれてしまった。",
                    "meaning_vi": "Công việc kéo dài làm trễ giờ hẹn.",
                    "meaning_en": "My work was long and I was late to my appointment."
                  }
                ],
                "lesson_number": 58
              },
              {
                "vocab": "衰える",
                "furigana": "おとろえる",
                "meaning_vi": "lãng phí đi",
                "meaning_en": "waste",
                "examples": [
                  {
                    "example_text": "年を取ると、体力が衰える。",
                    "furigana": "年（とし）とたいりょくおとろえる。",
                    "meaning_vi": "Khi có tuổi thì sẽ giảm thể lực.",
                    "meaning_en": "As you get older, your physical strength decreases."
                  }
                ],
                "lesson_number": 58
              },
              {
                "vocab": "備わる",
                "furigana": "そなわる",
                "meaning_vi": "Được trang bị",
                "meaning_en": "Equipped",
                "examples": [
                  {
                    "example_text": "新幹線にはさまざまな安全装置が備わっている。",
                    "furigana": "新幹線（しんかんせん）あんぜんそうちそなわっている。",
                    "meaning_vi": "Trong tàu shinkansen được trang bị nhiều thiết bị an toàn.",
                    "meaning_en": "The Shinkansen has a variety of safety equipment."
                  }
                ],
                "lesson_number": 58
              },
              {
                "vocab": "備える",
                "furigana": "そなえる",
                "meaning_vi": "Chuẩn bị",
                "meaning_en": "Prepare",
                "examples": [
                  {
                    "example_text": "学校では火災報知器が備えてある。",
                    "furigana": "学校（がっこう）かさいほうちきそなえてある。",
                    "meaning_vi": "Ở trường học được trang bị sẵn những thiết bị báo cháy.",
                    "meaning_en": "The school has fire alarms."
                  }
                ],
                "lesson_number": 58
              },
              {
                "vocab": "蓄える",
                "furigana": "たくわえる",
                "meaning_vi": "cửa hàng",
                "meaning_en": "shop",
                "examples": [
                  {
                    "example_text": "お金を蓄える。",
                    "furigana": "お金（かね）たくわえる。",
                    "meaning_vi": "Tích trữ tiền.",
                    "meaning_en": "Save money."
                  }
                ],
                "lesson_number": 58
              },
              {
                "vocab": "整う・調う",
                "furigana": "ととのう・ととのう",
                "meaning_vi": "Chuẩn bị và điều chỉnh",
                "meaning_en": "Preparation and adjustment",
                "examples": [
                  {
                    "example_text": "準備が整った。",
                    "furigana": "準備（じゅんび）ととのった。",
                    "meaning_vi": "Chuẩn bị sẵn sàng.",
                    "meaning_en": "Ready to go."
                  }
                ],
                "lesson_number": 58
              },
              {
                "vocab": "整える・調える",
                "furigana": "ととのえる・ととのえる",
                "meaning_vi": "Điều chỉnh và điều chỉnh",
                "meaning_en": "Adjust and adjust",
                "examples": [
                  {
                    "example_text": "準備を整えた。",
                    "furigana": "準備（じゅんび）ととのえた。",
                    "meaning_vi": "Chuẩn bị sẵn sàng.",
                    "meaning_en": "I've got ready."
                  }
                ],
                "lesson_number": 58
              },
              {
                "vocab": "覆う",
                "furigana": "おおう",
                "meaning_vi": "che phủ",
                "meaning_en": "cover",
                "examples": [
                  {
                    "example_text": "テーブルをテーブルクロスで覆った。",
                    "furigana": "テーブルをテーブルクロスで覆（おお）った。",
                    "meaning_vi": "Trải khăn bàn lên bàn.",
                    "meaning_en": "The table was covered with a tablecloth."
                  }
                ],
                "lesson_number": 58
              },
              {
                "vocab": "照る",
                "furigana": "てる",
                "meaning_vi": "Chiếu sáng",
                "meaning_en": "Illumination",
                "examples": [
                  {
                    "example_text": "日が照っているうちに洗濯物を干そう。",
                    "furigana": "日（ひ）てせんたくものほそう。",
                    "meaning_vi": "Phơi đồ trong khi nắng còn chiếu.",
                    "meaning_en": "Let's hang up the laundry while the sun is shining."
                  }
                ],
                "lesson_number": 58
              },
              {
                "vocab": "照らす",
                "furigana": "てらす",
                "meaning_vi": "Chiếu sáng",
                "meaning_en": "Illumination",
                "examples": [
                  {
                    "example_text": "懐中電灯で足跡を照らしながら夜道を歩いた。",
                    "furigana": "懐中（かいちゅう）でんとうあしあとてよみちあるいた。",
                    "meaning_vi": "Ánh sáng của cột đèn điện vừa chiếu tôi vừa đi bộ trên con đường đêm tối.",
                    "meaning_en": "I walked down the road at night, illuminating my footprints with a flashlight."
                  }
                ],
                "lesson_number": 59
              },
              {
                "vocab": "染まる",
                "furigana": "そまる",
                "meaning_vi": "Nhuộm",
                "meaning_en": "Dyeing",
                "examples": [
                  {
                    "example_text": "染料で布が染まる。",
                    "furigana": "染料（せんりょう）ぬのそまる。",
                    "meaning_vi": "Nhuộm vải bằng chất nhuộm.",
                    "meaning_en": "The fabric is dyed with dye."
                  }
                ],
                "lesson_number": 59
              },
              {
                "vocab": "染める",
                "furigana": "そめる",
                "meaning_vi": "thuốc nhuộm",
                "meaning_en": "dye",
                "examples": [
                  {
                    "example_text": "染料で布を染める。",
                    "furigana": "染料（せんりょう）ぬのそめる。",
                    "meaning_vi": "Dùng thuốc nhuộm để nhuộm vải.",
                    "meaning_en": "Dye the fabric with dye."
                  }
                ],
                "lesson_number": 59
              },
              {
                "vocab": "ダブる",
                "furigana": "ダブる",
                "meaning_vi": "Gấp đôi",
                "meaning_en": "Double",
                "examples": [
                  {
                    "example_text": "目が疲れてパソコンの字がダブって見える。",
                    "furigana": "目（め）つかじみえる。",
                    "meaning_vi": "Do mỏi mắt nên nhìn chữ trên máy tính ra làm đôi.",
                    "meaning_en": "My eyes are tired and my computer's letters look dumb."
                  }
                ],
                "lesson_number": 59
              },
              {
                "vocab": "憧れる",
                "furigana": "あこがれる",
                "meaning_vi": "Tôi khao khát bạn",
                "meaning_en": "I yearn for you",
                "examples": [
                  {
                    "example_text": "｛プロの選手/スター…｝にあこがれる。",
                    "furigana": "｛プロの選手（せんしゅ）/スター…｝にあこがれる。",
                    "meaning_vi": "",
                    "meaning_en": "I'm aspired to be a professional player/star..."
                  }
                ],
                "lesson_number": 59
              },
              {
                "vocab": "羨む",
                "furigana": "うらやむ",
                "meaning_vi": "ghen tỵ",
                "meaning_en": "jealousy",
                "examples": [
                  {
                    "example_text": "人の幸せをうらやんでも仕方がない。",
                    "furigana": "人（ひと）しあわしかたがない。",
                    "meaning_vi": "Dù có ghen tị với hạnh phúc của người khác cũng không còn cách nào khác.",
                    "meaning_en": "It's no wonder we envy people's happiness."
                  }
                ],
                "lesson_number": 59
              },
              {
                "vocab": "諦める",
                "furigana": "あきらめる",
                "meaning_vi": "bỏ cuộc",
                "meaning_en": "give up",
                "examples": [
                  {
                    "example_text": "大けがをして、プロのサッカーの選手になる夢をあきらめた。",
                    "furigana": "大（おお）せんしゅゆめをあきらめた。",
                    "meaning_vi": "Bị thương nặng phải từ bỏ giấc mơ trở thành cầu thủ bóng đá chuyên nghiệp.",
                    "meaning_en": "He suffered a serious injury and gave up on his dream of becoming a professional soccer player."
                  }
                ],
                "lesson_number": 59
              },
              {
                "vocab": "呆れる",
                "furigana": "あきれる",
                "meaning_vi": "Tôi bị sốc",
                "meaning_en": "I was shocked",
                "examples": [
                  {
                    "example_text": "新入社員があまりに物を知らないので、あきれてしまった。",
                    "furigana": "新（しん）にゅうしゃいんものしらないので、あきれてしまった。",
                    "meaning_vi": "Những nhân viên mới không biết nhiều nên đã bị sốc.",
                    "meaning_en": "I was so surprised that the new employees didn't know much about things."
                  }
                ],
                "lesson_number": 59
              },
              {
                "vocab": "恐れる",
                "furigana": "おそれる",
                "meaning_vi": "nỗi sợ",
                "meaning_en": "fear",
                "examples": [
                  {
                    "example_text": "動物は火を恐れる。",
                    "furigana": "動物（どうぶつ）ひおそれる。",
                    "meaning_vi": "Động vật sợ lửa.",
                    "meaning_en": "Animals fear fire."
                  }
                ],
                "lesson_number": 59
              },
              {
                "vocab": "恨む",
                "furigana": "うらむ",
                "meaning_vi": "Tôi ghét nó",
                "meaning_en": "I hate it",
                "examples": [
                  {
                    "example_text": "私は今でも、私をいじめた同級でいを恨んでいる。",
                    "furigana": "私（わたし）いまわたしどうきゅううらんでいる。",
                    "meaning_vi": "Đến giờ tôi vẫn ghét đứa đồng cấp đã bắt nạt tôi.",
                    "meaning_en": "I still grudge against my classmate who bullied me."
                  }
                ],
                "lesson_number": 59
              },
              {
                "vocab": "慰める",
                "furigana": "なぐさめる",
                "meaning_vi": "an ủi",
                "meaning_en": "appease",
                "examples": [
                  {
                    "example_text": "失恋した友達みんなで慰めた。",
                    "furigana": "失恋（しつれん）ともだちなぐさめた。",
                    "meaning_vi": "Mọi người động viên đứa bạn thất tình.",
                    "meaning_en": "All my friends were heartbroken and comforted me."
                  }
                ],
                "lesson_number": 59
              },
              {
                "vocab": "インテリア",
                "furigana": "インテリア",
                "meaning_vi": "Nội thất",
                "meaning_en": "Interior",
                "examples": [
                  {
                    "example_text": "友達の部屋はインテリアの趣味がいい。",
                    "furigana": "友達（ともだち）へやしゅみがいい。",
                    "meaning_vi": "Bạn tôi có sở thích về sở thích phòng.",
                    "meaning_en": "My friend's room has a good interior taste."
                  }
                ],
                "lesson_number": 60
              },
              {
                "vocab": "コーナー",
                "furigana": "コーナー",
                "meaning_vi": "góc",
                "meaning_en": "corner",
                "examples": [
                  {
                    "example_text": "冬になるとデパートにはお歳暮のコーナーが儲けられる。",
                    "furigana": "冬（ふゆ）せいぼもうけられる。",
                    "meaning_vi": "Thiết lập góc quà tặng cuối năm khi mùa đông đến.",
                    "meaning_en": "In winter, department stores can make money with year-end gift sections."
                  }
                ],
                "lesson_number": 60
              },
              {
                "vocab": "カウンター",
                "furigana": "カウンター",
                "meaning_vi": "quầy tính tiền",
                "meaning_en": "cash counter",
                "examples": [
                  {
                    "example_text": "デパートには入り口に案内のカウンターがある。",
                    "furigana": "デパートには入（い）ぐちあんないのカウンターがある。",
                    "meaning_vi": "Tại lối ra vào của cửa hàng bách hóa có quầy thông tin.",
                    "meaning_en": "There is a guide counter at the entrance to the department store."
                  }
                ],
                "lesson_number": 60
              },
              {
                "vocab": "スペース",
                "furigana": "スペース",
                "meaning_vi": "không gian",
                "meaning_en": "space",
                "examples": [
                  {
                    "example_text": "部屋に大型テレビを置きたいが、スペースがない。",
                    "furigana": "部屋（へや）おおがたおきたいが、スペースがない。",
                    "meaning_vi": "Tôi muốn đặt tivi cỡ lớn trong phòng nhưng không có không gian.",
                    "meaning_en": "I want to put a large TV in my room, but I don't have any space."
                  }
                ],
                "lesson_number": 60
              },
              {
                "vocab": "オープン",
                "furigana": "オープン",
                "meaning_vi": "mở",
                "meaning_en": "open",
                "examples": [
                  {
                    "example_text": "駅前に新しいデパートがオープンした。",
                    "furigana": "駅前（えきまえ）あたらしいデパートがオープンした。",
                    "meaning_vi": "Trước nhà ga đã mở một cửa hàng bách hóa mới.",
                    "meaning_en": "A new department store has opened in front of the station."
                  }
                ],
                "lesson_number": 60
              },
              {
                "vocab": "センター",
                "furigana": "センター",
                "meaning_vi": "Trung tâm",
                "meaning_en": "Center",
                "examples": [
                  {
                    "example_text": "駅前のショッピングセンターで買い物をする。",
                    "furigana": "駅前（えきまえ）かものをする。",
                    "meaning_vi": "Tôi mua sắm tại trung tâm mua sắm trước nhà ga.",
                    "meaning_en": "Shopping at a shopping center in front of the station."
                  }
                ],
                "lesson_number": 60
              },
              {
                "vocab": "カルチャー",
                "furigana": "カルチャー",
                "meaning_vi": "Văn hoá",
                "meaning_en": "Culture",
                "examples": [
                  {
                    "example_text": "外国の生活でカルチャーショックを受けることがある。",
                    "furigana": "外国（がいこく）せいかつうけることがある。",
                    "meaning_vi": "Có nhiều trường hợp bị sốc văn hóa do cuộc sống sinh hoạt ở nước ngoài.",
                    "meaning_en": "You may experience culture shock when you live abroad."
                  }
                ],
                "lesson_number": 60
              },
              {
                "vocab": "ブーム",
                "furigana": "ブーム",
                "meaning_vi": "bùng nổ",
                "meaning_en": "explosive",
                "examples": [
                  {
                    "example_text": "1960年代にフォークソングがブームになった。",
                    "furigana": "1960年代（ねんだい）にフォークソングがブームになった。",
                    "meaning_vi": "Nhạc đồng quê trở nên bùng nổ vào những năm 1960.",
                    "meaning_en": "Folk songs became a boom in the 1960s."
                  }
                ],
                "lesson_number": 60
              },
              {
                "vocab": "インフォメーション",
                "furigana": "インフォメーション",
                "meaning_vi": "Thông tin",
                "meaning_en": "Information",
                "examples": [
                  {
                    "example_text": "駅には観光客用のインフォメーションデスクがある。",
                    "furigana": "駅（えき）かんこうきゃくようのインフォメーションデスクがある。",
                    "meaning_vi": "Trước nhà ga có bàn thông tin về đồ dùng cho khách tham quan.",
                    "meaning_en": "There is an information desk for tourists at the station."
                  }
                ],
                "lesson_number": 60
              },
              {
                "vocab": "キャッチ",
                "furigana": "キャッチ",
                "meaning_vi": "nắm lấy",
                "meaning_en": "grasp",
                "examples": [
                  {
                    "example_text": "ボールをキャッチする。",
                    "furigana": "ボールをキャッチする。",
                    "meaning_vi": "Bắt bóng.",
                    "meaning_en": "Catch the ball."
                  }
                ],
                "lesson_number": 60
              },
              {
                "vocab": "メディア",
                "furigana": "メディア",
                "meaning_vi": "phương tiện truyền thông",
                "meaning_en": "media",
                "examples": [
                  {
                    "example_text": "今は、さまざまなメディアから情報を得ることができる。",
                    "furigana": "今（いま）じょうほうえることができる。",
                    "meaning_vi": "Bây giờ có thể có được nhiều thông tin từ nhiều phương tiện truyền thông khác nhau.",
                    "meaning_en": "Nowadays, you can get information from a variety of media."
                  }
                ],
                "lesson_number": 60
              },
              {
                "vocab": "コメント",
                "furigana": "コメント",
                "meaning_vi": "bình luận",
                "meaning_en": "comment",
                "examples": [
                  {
                    "example_text": "評論家はテレビで経済についてコメントしていた。",
                    "furigana": "評論家（ひょうろんか）けいざいについてコメントしていた。",
                    "meaning_vi": "Các nhà bình luận đã nhận định nền kinh tế trên tivi.",
                    "meaning_en": "Critics have commented on the economy on television."
                  }
                ],
                "lesson_number": 60
              },
              {
                "vocab": "コラム",
                "furigana": "コラム",
                "meaning_vi": "cột",
                "meaning_en": "column",
                "examples": [
                  {
                    "example_text": "新聞や雑誌には多くのコラムがある。",
                    "furigana": "新聞（しんぶん）ざっしおおくのコラムがある。",
                    "meaning_vi": "Trên báo và tạp chí có rất nhiều cột.",
                    "meaning_en": "Newspapers and magazines have many columns."
                  }
                ],
                "lesson_number": 60
              },
              {
                "vocab": "エピソード",
                "furigana": "エピソード",
                "meaning_vi": "Tập",
                "meaning_en": "Practice",
                "examples": [
                  {
                    "example_text": "日常生活のエピソードをエッセイに書く。",
                    "furigana": "日常（にちじょう）せいかつかく。",
                    "meaning_vi": "Viết bài cuộc sống thường ngày vào bài văn.",
                    "meaning_en": "Write episodes of everyday life in essays."
                  }
                ],
                "lesson_number": 60
              },
              {
                "vocab": "アリバイ",
                "furigana": "アリバイ",
                "meaning_vi": "bằng chứng ngoại phạm",
                "meaning_en": "External evidence",
                "examples": [
                  {
                    "example_text": "彼のは事件当日のアリバイがある。",
                    "furigana": "彼（かれ）じけんとうじつのアリバイがある。",
                    "meaning_vi": "Anh ta có chứng cứ ngoại phạm về sự kiện ngày hôm đó.",
                    "meaning_en": "He has an alibi for the day of the incident."
                  }
                ],
                "lesson_number": 61
              },
              {
                "vocab": "シリーズ",
                "furigana": "シリーズ",
                "meaning_vi": "loạt",
                "meaning_en": "ripary",
                "examples": [
                  {
                    "example_text": "この映画は、評判が良かったので、シリーズ化された。",
                    "furigana": "この映画（えいが）ひょうばんよかされた。",
                    "meaning_vi": "Phim này được đánh giá tốt nên đã sản xuất series liên tiếp",
                    "meaning_en": "The film had a good reputation and was made into a series."
                  }
                ],
                "lesson_number": 61
              },
              {
                "vocab": "ポイント",
                "furigana": "ポイント",
                "meaning_vi": "điểm",
                "meaning_en": "point",
                "examples": [
                  {
                    "example_text": "スクリーンのポイントを指しながら、プレゼンテーションをした。",
                    "furigana": "スクリーンのポイントを指（さ）しながら、プレゼンテーションをした。",
                    "meaning_vi": "Vừa chỉ vào điểm trên màn hình vừa giới thiệu.",
                    "meaning_en": "I gave a presentation while pointing to the points on the screen."
                  }
                ],
                "lesson_number": 61
              },
              {
                "vocab": "キー",
                "furigana": "キー",
                "meaning_vi": "chìa khóa",
                "meaning_en": "key",
                "examples": [
                  {
                    "example_text": "車のキーを中に入れたままロックしてしまった。",
                    "furigana": "車（くるま）なかいれたままロックしてしまった。",
                    "meaning_vi": "Chìa khóa xe ô tô vẫn còn để trong mà đã khóa mất rồi.",
                    "meaning_en": "I locked the car key inside."
                  }
                ],
                "lesson_number": 61
              },
              {
                "vocab": "マスター",
                "furigana": "マスター",
                "meaning_vi": "Bậc thầy",
                "meaning_en": "Master",
                "examples": [
                  {
                    "example_text": "独学で日本語をマスターした。",
                    "furigana": "独学（どくがく）にほんごをマスターした。",
                    "meaning_vi": "Bằng sự tự học tôi đã thành thạo tiếng Nhật.",
                    "meaning_en": "I mastered Japanese on my own."
                  }
                ],
                "lesson_number": 61
              },
              {
                "vocab": "ビジネス",
                "furigana": "ビジネス",
                "meaning_vi": "việc kinh doanh",
                "meaning_en": "business",
                "examples": [
                  {
                    "example_text": "彼はビジネスで世界中を飛び回っている。",
                    "furigana": "彼（かれ）せかいじゅうとまわっている。",
                    "meaning_vi": "Anh ấy làm kinh doanh nên bay khắp thế giới.",
                    "meaning_en": "He travels around the world in business."
                  }
                ],
                "lesson_number": 61
              },
              {
                "vocab": "キャリア",
                "furigana": "キャリア",
                "meaning_vi": "Sự nghiệp",
                "meaning_en": "Career",
                "examples": [
                  {
                    "example_text": "この仕事はキャリアのある人ではないと務まらない。",
                    "furigana": "この仕事（しごと）ひとつとまらない。",
                    "meaning_vi": "Công việc này nếu là người không có kinh nghiệm thì không thể giao phó được.",
                    "meaning_en": "This job can only be done by someone with a career."
                  }
                ],
                "lesson_number": 61
              },
              {
                "vocab": "ベテラン",
                "furigana": "ベテラン",
                "meaning_vi": "Cựu chiến binh",
                "meaning_en": "Veteran",
                "examples": [
                  {
                    "example_text": "田中さんは教師歴は20年のベテランだ。",
                    "furigana": "田中（たなか）きょうしれきねんのベテランだ。",
                    "meaning_vi": "Anh Tanaka là giáo viên lịch sử lão luyện đã 20 năm.",
                    "meaning_en": "Tanaka is a veteran with a 20-year teaching career."
                  }
                ],
                "lesson_number": 61
              },
              {
                "vocab": "フリー",
                "furigana": "フリー",
                "meaning_vi": "Miễn phí",
                "meaning_en": "Free of charge",
                "examples": [
                  {
                    "example_text": "彼はフリーのカメラマンをしている。",
                    "furigana": "彼（かれ）ランスのカメラマンをしている。",
                    "meaning_vi": "Anh ấy làm nhiếp ảnh gia tự do.",
                    "meaning_en": "He is a freelance photographer."
                  }
                ],
                "lesson_number": 61
              },
              {
                "vocab": "エコノミー",
                "furigana": "エコノミー",
                "meaning_vi": "Kinh tế",
                "meaning_en": "Economy",
                "examples": [
                  {
                    "example_text": "飛行機ではいつもエコノミークラスに乗っている。",
                    "furigana": "飛行機（ひこうき）のっている。",
                    "meaning_vi": "Lúc nào tôi cũng đi bằng hãng hàng không giá rẻ.",
                    "meaning_en": "I always ride economy class on planes."
                  }
                ],
                "lesson_number": 61
              },
              {
                "vocab": "キャッシュ",
                "furigana": "キャッシュ",
                "meaning_vi": "bộ đệm",
                "meaning_en": "buffer",
                "examples": [
                  {
                    "example_text": "彼は車の代金をキャッシュで払ったそうだ。",
                    "furigana": "彼（かれ）くるまだいきんはらったそうだ。",
                    "meaning_vi": "Nghe nói anh ấy mua xe bằng tiền mặt.",
                    "meaning_en": "He apparently paid cash for the car."
                  }
                ],
                "lesson_number": 62
              },
              {
                "vocab": "インフレ(インフレーション)",
                "furigana": "インフレ(インフレーション)",
                "meaning_vi": "Lạm phát",
                "meaning_en": "Inflationary",
                "examples": [
                  {
                    "example_text": "インフレで物価は上昇している。",
                    "furigana": "インフレで物価（ぶっか）じょうしょうしている。",
                    "meaning_vi": "Vì lạm phát nên giá cả tăng cao.",
                    "meaning_en": "Prices are rising due to inflation."
                  }
                ],
                "lesson_number": 62
              },
              {
                "vocab": "デモ(デモンストレーション)",
                "furigana": "デモ(デモンストレーション)",
                "meaning_vi": "Bản demo (Trình diễn)",
                "meaning_en": "Demo (performance)",
                "examples": [
                  {
                    "example_text": "増税に抗議して、国のあちこちでデモが行われた。",
                    "furigana": "増税（ぞうぜい）こうぎくにおこなわれた。",
                    "meaning_vi": "Để phản đối lại sự tăng thuế, nhiều nơi trên đất nước đã tổ chức các cuộc biểu tình.",
                    "meaning_en": "Demonstrations were held all over the country in protest of the tax hike."
                  }
                ],
                "lesson_number": 62
              },
              {
                "vocab": "メーカー",
                "furigana": "メーカー",
                "meaning_vi": "Nhà sản xuất",
                "meaning_en": "Manufacturer",
                "examples": [
                  {
                    "example_text": "メーカーは海外に工場を持っていることが多い。",
                    "furigana": "メーカーは海外（かいがい）こうじょうもおおい。",
                    "meaning_vi": "Nhà sản xuất sở hữu nhiều công ty ở nước ngoài.",
                    "meaning_en": "Manufacturers often have factories overseas."
                  }
                ],
                "lesson_number": 62
              },
              {
                "vocab": "システム",
                "furigana": "システム",
                "meaning_vi": "hệ thống",
                "meaning_en": "system",
                "examples": [
                  {
                    "example_text": "今、教育システムの見直しが進んでいる。",
                    "furigana": "今（いま）きょういくみなおすすんでいる。",
                    "meaning_vi": "Bây giờ, người ta đang cải tiến lại hệ thống giáo dục.",
                    "meaning_en": "The education system is currently being reviewed."
                  }
                ],
                "lesson_number": 62
              },
              {
                "vocab": "ケース",
                "furigana": "ケース",
                "meaning_vi": "trường hợp",
                "meaning_en": "case",
                "examples": [
                  {
                    "example_text": "指輪をケースにしまった。",
                    "furigana": "指輪（ゆびわ）をケースにしまった。",
                    "meaning_vi": "Cất nhẫn vào hộp.",
                    "meaning_en": "I put the ring in the case."
                  }
                ],
                "lesson_number": 62
              },
              {
                "vocab": "パターン",
                "furigana": "パターン",
                "meaning_vi": "mẫu",
                "meaning_en": "sample",
                "examples": [
                  {
                    "example_text": "血液型性格占いは、人間の性格を4つのパターンに分けている。",
                    "furigana": "血液型（けつえきがた）せいかくうらなにんげんせいかくわけている。",
                    "meaning_vi": "Dự đoán tính cách con người bằng nhóm máu chia tính cách con người thành 4 nhóm chính.",
                    "meaning_en": "Blood type personality fortune telling divides human personality into four patterns."
                  }
                ],
                "lesson_number": 62
              },
              {
                "vocab": "プラン",
                "furigana": "プラン",
                "meaning_vi": "Kế hoạch",
                "meaning_en": "Plan",
                "examples": [
                  {
                    "example_text": "両親は、定年後に海外移住するプランを立てている。",
                    "furigana": "両親（りょうしん）ていねんごかいがいいじゅうたてている。",
                    "meaning_vi": "Bố mẹ đang lập kế hoạch định cư nước ngoài ở tuổi về hưu.",
                    "meaning_en": "My parents plan to move abroad after retirement."
                  }
                ],
                "lesson_number": 62
              },
              {
                "vocab": "トラブル",
                "furigana": "トラブル",
                "meaning_vi": "rắc rối",
                "meaning_en": "trouble",
                "examples": [
                  {
                    "example_text": "テレビの音のことでアパートの隣人とトラブルになった。",
                    "furigana": "テレビの音（おと）りんじんとトラブルになった。",
                    "meaning_vi": "Vì chuyện âm thanh tivi mà đã xảy ra rắc rối với nhà hàng xóm.",
                    "meaning_en": "I got into trouble with my apartment neighbor over the sound of the TV."
                  }
                ],
                "lesson_number": 62
              },
              {
                "vocab": "エラー",
                "furigana": "エラー",
                "meaning_vi": "lỗi",
                "meaning_en": "error",
                "examples": [
                  {
                    "example_text": "このデジカメはよくエラーが起こる。",
                    "furigana": "このデジカメはよくエラーが起（お）こる。",
                    "meaning_vi": "Cái máy kĩ thuật số này rất hay gặp lỗi.",
                    "meaning_en": "This digital camera often causes errors."
                  }
                ],
                "lesson_number": 62
              },
              {
                "vocab": "クレーム",
                "furigana": "クレーム",
                "meaning_vi": "khẳng định",
                "meaning_en": "confirm",
                "examples": [
                  {
                    "example_text": "「買った肉が変な匂いがする」と、スーパーにクレームがあった。",
                    "furigana": "「買（か）にくへんにおいがする」と、スーパーにクレームがあった。",
                    "meaning_vi": "Miếng thịt đã mua có mùi lạ nên đã phàn nàn với siêu thị.",
                    "meaning_en": "The supermarket complained, \"The meat I bought smells strange.\""
                  }
                ],
                "lesson_number": 62
              },
              {
                "vocab": "キャンセル",
                "furigana": "キャンセル",
                "meaning_vi": "Hủy bỏ",
                "meaning_en": "Cancel",
                "examples": [
                  {
                    "example_text": "ホテルの予約をキャンセルした。",
                    "furigana": "ホテルの予約（よやく）をキャンセルした。",
                    "meaning_vi": "Hủy đặt phòng khách sạn.",
                    "meaning_en": "I cancelled my hotel reservation."
                  }
                ],
                "lesson_number": 62
              },
              {
                "vocab": "ストップ",
                "furigana": "ストップ",
                "meaning_vi": "dừng lại",
                "meaning_en": "stop",
                "examples": [
                  {
                    "example_text": "踏切事故で電話が1時間ストップした。",
                    "furigana": "踏切（ふみきり）じこでんわじかんストップした。",
                    "meaning_vi": "Do sự cố chắn tàu nên điện thoại tạm dừng 1 giờ đồng hồ.",
                    "meaning_en": "The call stopped for an hour due to a railroad crossing accident."
                  }
                ],
                "lesson_number": 62
              },
              {
                "vocab": "カット",
                "furigana": "カット",
                "meaning_vi": "cắt",
                "meaning_en": "cut",
                "examples": [
                  {
                    "example_text": "ケーキを8つにカットした。",
                    "furigana": "ケーキを8つにカットした。",
                    "meaning_vi": "Cắt bánh ra 8 cái.",
                    "meaning_en": "I cut the cake into eight pieces."
                  }
                ],
                "lesson_number": 63
              },
              {
                "vocab": "カバー",
                "furigana": "カバー",
                "meaning_vi": "che phủ",
                "meaning_en": "cover",
                "examples": [
                  {
                    "example_text": "ソファ―をカバーで覆う。",
                    "furigana": "ソファ―をカバーで覆（おお）う。",
                    "meaning_vi": "Trải bạt phủ lên ghế sofa.",
                    "meaning_en": "Cover the sofa with a cover."
                  }
                ],
                "lesson_number": 63
              },
              {
                "vocab": "リハビリ",
                "furigana": "リハビリ",
                "meaning_vi": "Phục hồi chức năng",
                "meaning_en": "Rehabilitation",
                "examples": [
                  {
                    "example_text": "骨折で入院し、退院後もしばらくリハビリのため病院に通った。",
                    "furigana": "骨折（こっせつ）にゅういんたいいんごびょういんかよった。",
                    "meaning_vi": "Bị gãy chân nên nhập viện không lâu sau khi xuất viện lại nhập viện để điều trị phục hồi.",
                    "meaning_en": "He was hospitalized due to a fracture, and after being discharged from the hospital he went to the hospital for rehabilitation for a while."
                  }
                ],
                "lesson_number": 63
              },
              {
                "vocab": "プレッシャー",
                "furigana": "プレッシャー",
                "meaning_vi": "Áp lực",
                "meaning_en": "Pressure",
                "examples": [
                  {
                    "example_text": "この仕事は、新入社員にはプレッシャーが大きい。",
                    "furigana": "この仕事（しごと）しんにゅうしゃいんおおきい。",
                    "meaning_vi": "Công việc này gây áp lực lớn đối với nhân viên mới.",
                    "meaning_en": "This job puts a lot of pressure on new employees."
                  }
                ],
                "lesson_number": 63
              },
              {
                "vocab": "カウンセリング",
                "furigana": "カウンセリング",
                "meaning_vi": "Tư vấn",
                "meaning_en": "Advise",
                "examples": [
                  {
                    "example_text": "学校で子供たち｛を/に｝カウンセリングする仕事をしている。",
                    "furigana": "学校（がっこう）こどもしごとをしている。",
                    "meaning_vi": "Tôi đang làm công việc hướng dẫn trẻ em ở trường đại học.",
                    "meaning_en": "I work in school to counsel my children."
                  }
                ],
                "lesson_number": 63
              },
              {
                "vocab": "キャラクター",
                "furigana": "キャラクター",
                "meaning_vi": "tính cách",
                "meaning_en": "character",
                "examples": [
                  {
                    "example_text": "彼はちょっと変わったキャラクターの持ち主だ。",
                    "furigana": "彼（かれ）かもぬしだ。",
                    "meaning_vi": "Anh ấy đã có chút thay đổi tính cách của một người chủ.",
                    "meaning_en": "He has a slightly unusual character."
                  }
                ],
                "lesson_number": 63
              },
              {
                "vocab": "ユニークな",
                "furigana": "ユニークな",
                "meaning_vi": "Độc nhất",
                "meaning_en": "Unique",
                "examples": [
                  {
                    "example_text": "彼女はユニークな性格だ。",
                    "furigana": "彼女（かのじょ）せいかくだ。",
                    "meaning_vi": "Cô ấy có tính cách độc đáo.",
                    "meaning_en": "She has a unique personality."
                  }
                ],
                "lesson_number": 63
              },
              {
                "vocab": "ルーズな",
                "furigana": "ルーズな",
                "meaning_vi": "Lỏng lẻo",
                "meaning_en": "Loose",
                "examples": [
                  {
                    "example_text": "あの人は時間にルーズだ。",
                    "furigana": "あの人（ひと）じかんにルーズだ。",
                    "meaning_vi": "Người ấy rất lỏng lẻo về thời gian.",
                    "meaning_en": "That person is loose in time."
                  }
                ],
                "lesson_number": 63
              },
              {
                "vocab": "ロマンチックな",
                "furigana": "ロマンチックな",
                "meaning_vi": "Lãng mạn",
                "meaning_en": "Romantic",
                "examples": [
                  {
                    "example_text": "デートするならロマンティックな場所はいい。",
                    "furigana": "デートするならロマンティックな場所（ばしょ）はいい。",
                    "meaning_vi": "Nếu hẹn hò thì chỗ nào lãng mạn là tốt.",
                    "meaning_en": "If you're going on a date, a romantic place is good."
                  }
                ],
                "lesson_number": 63
              },
              {
                "vocab": "センス",
                "furigana": "センス",
                "meaning_vi": "Giác quan",
                "meaning_en": "Sense",
                "examples": [
                  {
                    "example_text": "彼女はいつもセンスのいい服を着ている。",
                    "furigana": "彼女（かのじょ）ふくきている。",
                    "meaning_vi": "Cô ấy lúc nào cũng mặc những bộ đồ lịch sự.",
                    "meaning_en": "She is always wearing good-looking clothes."
                  }
                ],
                "lesson_number": 63
              },
              {
                "vocab": "エコロジー",
                "furigana": "エコロジー",
                "meaning_vi": "Sinh thái",
                "meaning_en": "Ecological",
                "examples": [
                  {
                    "example_text": "最近は、どの国でもエコロジーの考え方が当たり前になった。",
                    "furigana": "最近（さいきん）くにかんがかたあまえになった。",
                    "meaning_vi": "Gần đây, đất nước nào cũng có cách nghĩ về hệ sinh thái trở thành điều đương nhiên.",
                    "meaning_en": "Recently, ecology has become commonplace in every country."
                  }
                ],
                "lesson_number": 63
              },
              {
                "vocab": "ダム",
                "furigana": "ダム",
                "meaning_vi": "đập",
                "meaning_en": "bang",
                "examples": [
                  {
                    "example_text": "山奥にダムが建設された。",
                    "furigana": "山奥（やまおく）けんせつされた。",
                    "meaning_vi": "Xây đập sâu bên trong ngọn núi.",
                    "meaning_en": "A dam was built deep in the mountains."
                  }
                ],
                "lesson_number": 63
              },
              {
                "vocab": "コンクリート",
                "furigana": "コンクリート",
                "meaning_vi": "bê tông",
                "meaning_en": "concrete",
                "examples": [
                  {
                    "example_text": "この壁はコンクリートでできている。",
                    "furigana": "この壁（かべ）はコンクリートでできている。",
                    "meaning_vi": "Bức tường này được xây dựng bằng bê tông.",
                    "meaning_en": "This wall is made of concrete."
                  }
                ],
                "lesson_number": 63
              },
              {
                "vocab": "単純な",
                "furigana": "たんじゅんな",
                "meaning_vi": "đơn giản",
                "meaning_en": "simple",
                "examples": [
                  {
                    "example_text": "この機械は単純な仕掛けで働く。",
                    "furigana": "この機械（きかい）たんじゅんしかはたらく。",
                    "meaning_vi": "Máy này có thể hoạt động bằng phương pháp đơn giản.",
                    "meaning_en": "This machine works with simple mechanisms."
                  }
                ],
                "lesson_number": 64
              },
              {
                "vocab": "純粋な",
                "furigana": "じゅんすいな",
                "meaning_vi": "Nguyên chất",
                "meaning_en": "Pure",
                "examples": [
                  {
                    "example_text": "あの人は純粋な心の気持ちだ。",
                    "furigana": "あの人（ひと）じゅんすいこころきもちだ。",
                    "meaning_vi": "Người ấy có một tâm hồn đơn thuần.",
                    "meaning_en": "That person has a pure heart."
                  }
                ],
                "lesson_number": 64
              },
              {
                "vocab": "透明な",
                "furigana": "とうめいな",
                "meaning_vi": "Minh bạch",
                "meaning_en": "Transparent",
                "examples": [
                  {
                    "example_text": "水や空気は無色透明だ。",
                    "furigana": "水（みず）くうきむしょくとうめいだ。",
                    "meaning_vi": "Nước và bầu trời trong suốt như không màu.",
                    "meaning_en": "The water and air are colorless and transparent."
                  }
                ],
                "lesson_number": 64
              },
              {
                "vocab": "爽やかな",
                "furigana": "さわやかな",
                "meaning_vi": "Làm mới",
                "meaning_en": "Refresh",
                "examples": [
                  {
                    "example_text": "朝の空気はさわやかだ。",
                    "furigana": "朝（あさ）くうきはさわやかだ。",
                    "meaning_vi": "Bầu trời sáng sớm rất dễ chịu.",
                    "meaning_en": "The morning air is refreshing."
                  }
                ],
                "lesson_number": 64
              },
              {
                "vocab": "素直な",
                "furigana": "すなおな",
                "meaning_vi": "Trung thực",
                "meaning_en": "Honest",
                "examples": [
                  {
                    "example_text": "この童話を読むと、子供のような素直な気持ちになれる。",
                    "furigana": "この童話（どうわ）よこどもすなおきもちになれる。",
                    "meaning_vi": "Đọc bài đồng dao này, tâm trạng tôi lại hồn nhiên như một đứa trẻ.",
                    "meaning_en": "Reading this fairy tale gives you a genuine, childlike feeling."
                  }
                ],
                "lesson_number": 64
              },
              {
                "vocab": "率直な",
                "furigana": "そっちょくな",
                "meaning_vi": "Thẳng thắn",
                "meaning_en": "Frank",
                "examples": [
                  {
                    "example_text": "彼は率直な人で、言うべきことをきちんと言う。",
                    "furigana": "彼（かれ）そっちょくひといいう。",
                    "meaning_vi": "Anh ấy là người thẳng thắn nên những lời nên nói sẽ nói một cách nghiêm túc.",
                    "meaning_en": "He is an honest person and says exactly what he needs to say."
                  }
                ],
                "lesson_number": 64
              },
              {
                "vocab": "誠実な",
                "furigana": "せいじつな",
                "meaning_vi": "Trung thực",
                "meaning_en": "Honest",
                "examples": [
                  {
                    "example_text": "男女とも、「誠実な人と結婚したい」と言う若者が多い。",
                    "furigana": "男女（だんじょ）せいじつひとけっこんいわかものおおい。",
                    "meaning_vi": "Dù trai hay gái, nhiều người trẻ muốn kết hôn với người trung thực.",
                    "meaning_en": "Many young people both want to marry someone who is sincere."
                  }
                ],
                "lesson_number": 64
              },
              {
                "vocab": "謙虚な",
                "furigana": "けんきょな",
                "meaning_vi": "Khiêm tốn",
                "meaning_en": "Modest",
                "examples": [
                  {
                    "example_text": "彼は謙虚な人柄だ。",
                    "furigana": "彼（かれ）けんきょひとがらだ。",
                    "meaning_vi": "Cô ấy có tính cách khiêm tốn.",
                    "meaning_en": "He is a humble person."
                  }
                ],
                "lesson_number": 64
              },
              {
                "vocab": "賢い",
                "furigana": "かしこい",
                "meaning_vi": "khôn ngoan",
                "meaning_en": "wise",
                "examples": [
                  {
                    "example_text": "こんな難しい話が理解できるとは賢い子だ。",
                    "furigana": "こんな難（むずか）はなしりかいかしここだ。",
                    "meaning_vi": "Vấn đề khó như thế mà có thể giải quyết được đúng là cậu bé thông minh.",
                    "meaning_en": "He's a clever kid who can understand such a difficult story."
                  }
                ],
                "lesson_number": 64
              },
              {
                "vocab": "慎重な",
                "furigana": "しんちょうな",
                "meaning_vi": "Cẩn thận",
                "meaning_en": "Careful",
                "examples": [
                  {
                    "example_text": "私は慎重な性格なので、よく考えてからでなければ行動しない。",
                    "furigana": "私（わたし）しんちょうせいかくかんがこうどうしない。",
                    "meaning_vi": "Tôi là một người thận trọng nên sẽ suy nghĩ kĩ lưỡng mới hành động.",
                    "meaning_en": "I'm a cautious person, so I'll just have to think carefully before I act."
                  }
                ],
                "lesson_number": 64
              },
              {
                "vocab": "穏やかな",
                "furigana": "おだやかな",
                "meaning_vi": "Nó bình tĩnh",
                "meaning_en": "It calmly",
                "examples": [
                  {
                    "example_text": "この辺りは気候が穏やかで住みやすい。",
                    "furigana": "この辺（あた）きこうおだすみやすい。",
                    "meaning_vi": "Khí hậu vùng này ôn hòa nên tôi muốn sống ở đây.",
                    "meaning_en": "The climate is mild and easy to live in here."
                  }
                ],
                "lesson_number": 64
              },
              {
                "vocab": "真剣な",
                "furigana": "しんけんな",
                "meaning_vi": "Nghiêm trọng",
                "meaning_en": "Serious",
                "examples": [
                  {
                    "example_text": "二人は結婚するつもりで真剣に付き合っている。",
                    "furigana": "二人（ふたり）けっこんしんけんつあっている。",
                    "meaning_vi": "Hai người dự định sẽ kết hôn nên đã hẹn gặp nhau một cách đàng hoàng.",
                    "meaning_en": "The two are seriously involved, intending to get married."
                  }
                ],
                "lesson_number": 64
              },
              {
                "vocab": "正式な",
                "furigana": "せいしきな",
                "meaning_vi": "Chính thức",
                "meaning_en": "Official",
                "examples": [
                  {
                    "example_text": "日本のお札の正式な名称は「日本銀行券」だ。",
                    "furigana": "日本（にほん）さつせいしきめいしょうにほんぎんこうけん」だ。",
                    "meaning_vi": "Tên gọi chính thức của tờ tiền Nhật là \"Tiền giấy Nhật Bản\"",
                    "meaning_en": "The official name of Japanese talismans is \"Bank of Japan Notes.\""
                  }
                ],
                "lesson_number": 65
              },
              {
                "vocab": "主な",
                "furigana": "おもな",
                "meaning_vi": "Chủ yếu",
                "meaning_en": "Primarily",
                "examples": [
                  {
                    "example_text": "「今日の主なニュースを五つお伝えします」",
                    "furigana": "「今日（きょう）おもいつつたえします」",
                    "meaning_vi": "Hôm nay chúng tôi sẽ truyền tải 5 tin chính.",
                    "meaning_en": "\"I'll share five of the main news today.\""
                  }
                ],
                "lesson_number": 65
              },
              {
                "vocab": "主要な",
                "furigana": "しゅような",
                "meaning_vi": "Các chính",
                "meaning_en": "The main",
                "examples": [
                  {
                    "example_text": "会の主要な役員が集まって今後の方針を議論した。",
                    "furigana": "会（かい）しゅようやくいんあつこんごほうしんぎろんした。",
                    "meaning_vi": "Tập hợp những nhân viên chủ yếu trong cuộc họp để thảo luận phương châm sau đó.",
                    "meaning_en": "The main members of the association gathered to discuss future plans."
                  }
                ],
                "lesson_number": 65
              },
              {
                "vocab": "貴重な",
                "furigana": "きちょうな",
                "meaning_vi": "Một quý giá",
                "meaning_en": "A precious",
                "examples": [
                  {
                    "example_text": "留学と言う貴重な体験をした。",
                    "furigana": "留学（りゅうがく）いきちょうたいけんをした。",
                    "meaning_vi": "Du học là một trải nghiệm quý báu.",
                    "meaning_en": "It was a valuable experience of studying abroad."
                  }
                ],
                "lesson_number": 65
              },
              {
                "vocab": "偉大な",
                "furigana": "いだいな",
                "meaning_vi": "Tuyệt",
                "meaning_en": "Great",
                "examples": [
                  {
                    "example_text": "アインシュタインは科学の分野で偉大な功績をあげた。",
                    "furigana": "アインシュタインは科学（かがく）ぶんやいだいこうせきをあげた。",
                    "meaning_vi": "Einstein đã gặt hái được thành công vĩ đại trong lĩnh vực khoa học.",
                    "meaning_en": "Einstein has made great achievements in the field of science."
                  }
                ],
                "lesson_number": 65
              },
              {
                "vocab": "偉い",
                "furigana": "えらい",
                "meaning_vi": "Tuyệt",
                "meaning_en": "Great",
                "examples": [
                  {
                    "example_text": "卒業式には市長や大臣など偉い人が来ていた。",
                    "furigana": "卒業式（そつぎょうしき）しちょうだいじんえらひときていた。",
                    "meaning_vi": "Trong lễ tốt nghiệp, những người vĩ đại như thị trưởng và thủ tướng cũng đã đến dự.",
                    "meaning_en": "The graduation ceremony included great people such as the mayor and minister."
                  }
                ],
                "lesson_number": 65
              },
              {
                "vocab": "独特な",
                "furigana": "どくとくな",
                "meaning_vi": "Độc nhất",
                "meaning_en": "Unique",
                "examples": [
                  {
                    "example_text": "ブルーチーズには独特な香りがある。",
                    "furigana": "ブルーチーズには独特（どくとく）かおりがある。",
                    "meaning_vi": "Phô mai xanh có hương vị rất độc đáo.",
                    "meaning_en": "Blue cheese has a unique aroma."
                  }
                ],
                "lesson_number": 65
              },
              {
                "vocab": "特殊な",
                "furigana": "とくしゅな",
                "meaning_vi": "Đặc biệt",
                "meaning_en": "Special",
                "examples": [
                  {
                    "example_text": "この仕事には特殊な技能が必要だ。",
                    "furigana": "この仕事（しごと）とくしゅぎのうひつようだ。",
                    "meaning_vi": "Công việc này cần một kĩ năng đặc thù.",
                    "meaning_en": "This job requires special skills."
                  }
                ],
                "lesson_number": 65
              },
              {
                "vocab": "奇妙な",
                "furigana": "きみょうな",
                "meaning_vi": "Lạ lùng",
                "meaning_en": "Strange",
                "examples": [
                  {
                    "example_text": "この魚は奇妙な形をしている。",
                    "furigana": "この魚（さかな）きみょうかたをしている。",
                    "meaning_vi": "Con cá này có một hình thù kì lạ.",
                    "meaning_en": "This fish has a strange shape."
                  }
                ],
                "lesson_number": 65
              },
              {
                "vocab": "妙な",
                "furigana": "みょうな",
                "meaning_vi": "Lạ lùng",
                "meaning_en": "Strange",
                "examples": [
                  {
                    "example_text": "妙なことに、初めて来たこの場所をなんだか知っているような気がする。",
                    "furigana": "妙（みょう）はじきばしょしきがする。",
                    "meaning_vi": "Thật là kì lạ, lần đầu tiên đến nơi này nhưng tôi cứ cảm thấy như đã biết chút gì đó rồi.",
                    "meaning_en": "Strangely enough, I feel like I know something about this place I've never seen before."
                  }
                ],
                "lesson_number": 65
              },
              {
                "vocab": "怪しい",
                "furigana": "あやしい",
                "meaning_vi": "khả nghi",
                "meaning_en": "suspicious",
                "examples": [
                  {
                    "example_text": "家の前を怪しい男がうろうろしている。",
                    "furigana": "家（いえ）まえあやおとこがうろうろしている。",
                    "meaning_vi": "Có người đàn ông lạ mặt cứ đi vòng vòng trước nhà.",
                    "meaning_en": "A suspicious man wanders around the front of the house."
                  }
                ],
                "lesson_number": 65
              },
              {
                "vocab": "異常な",
                "furigana": "いじょうな",
                "meaning_vi": "Bất thường",
                "meaning_en": "Abnormal",
                "examples": [
                  {
                    "example_text": "今年の夏の暑さは異常だ。",
                    "furigana": "今年（ことし）なつあついじょうだ。",
                    "meaning_vi": "Cái nóng của mùa hè năm nay thật lạ.",
                    "meaning_en": "The heat this summer is extraordinary."
                  }
                ],
                "lesson_number": 65
              },
              {
                "vocab": "高度な",
                "furigana": "こうどな",
                "meaning_vi": "Trình độ cao",
                "meaning_en": "High level",
                "examples": [
                  {
                    "example_text": "このメーカーは高度な半導体技術で知られている。",
                    "furigana": "このメーカーは高度（こうど）はんどうたいぎじゅつしられている。",
                    "meaning_vi": "Nhà sản xuất này được biết đến với kĩ thuật chất bán dẫn cao độ.",
                    "meaning_en": "This manufacturer is known for its advanced semiconductor technology."
                  }
                ],
                "lesson_number": 65
              },
              {
                "vocab": "新たな",
                "furigana": "あらたな",
                "meaning_vi": "Một cái mới",
                "meaning_en": "A new one",
                "examples": [
                  {
                    "example_text": "裁判で新たな証人が現れた。",
                    "furigana": "裁判（さいばん）あらしょうにんあらわれた。",
                    "meaning_vi": "Thẩm phán đã tìm ra một nhân chứng mới.",
                    "meaning_en": "A new witness appeared at the trial."
                  }
                ],
                "lesson_number": 65
              },
              {
                "vocab": "合理的な",
                "furigana": "ごうりてきな",
                "meaning_vi": "Hợp lý",
                "meaning_en": "Reasonable",
                "examples": [
                  {
                    "example_text": "工場の生産ラインは合理的に作られている。",
                    "furigana": "工場（こうじょう）せいさんごうりてきつくられている。",
                    "meaning_vi": "Đường sản xuất của công ty được tạo ra một cách hợp lí.",
                    "meaning_en": "The production lines in the factory are reasonably constructed."
                  }
                ],
                "lesson_number": 66
              },
              {
                "vocab": "器用な",
                "furigana": "きような",
                "meaning_vi": "Khéo léo",
                "meaning_en": "Ingenious",
                "examples": [
                  {
                    "example_text": "彼女は手先が器用で、アクセサリーを全部手作りしている。",
                    "furigana": "彼女（かのじょ）てさききようぜんぶてづくりしている。",
                    "meaning_vi": "Cô ấy nhờ sự khéo tay đã làm toàn bộ trang sức bằng tay.",
                    "meaning_en": "She is skillful in her hands and makes all her accessories."
                  }
                ],
                "lesson_number": 66
              },
              {
                "vocab": "手軽な",
                "furigana": "てがるな",
                "meaning_vi": "Dễ",
                "meaning_en": "Easy",
                "examples": [
                  {
                    "example_text": "ジョギングは誰でも手軽にできるスポーツだ。",
                    "furigana": "ジョギングは誰（だれ）てがるにできるスポーツだ。",
                    "meaning_vi": "Môn chạy là môn mà ai cũng có thể làm được một cách đơn giản.",
                    "meaning_en": "Jogging is an easy sport for anyone to do."
                  }
                ],
                "lesson_number": 66
              },
              {
                "vocab": "手頃な",
                "furigana": "てごろな",
                "meaning_vi": "Có thể chi trả",
                "meaning_en": "Percolable",
                "examples": [
                  {
                    "example_text": "この店では手ごろな値段でおいしいフランス料理が食べられる。",
                    "furigana": "この店（みせ）てねだんりょうりたべられる。",
                    "meaning_vi": "Cửa hàng này có giá cả phải chăng nên có thể ăn những món ăn ngon của nước Pháp.",
                    "meaning_en": "This restaurant offers delicious French cuisine at a reasonable price."
                  }
                ],
                "lesson_number": 66
              },
              {
                "vocab": "高価な",
                "furigana": "こうかな",
                "meaning_vi": "Đắt",
                "meaning_en": "Expensive",
                "examples": [
                  {
                    "example_text": "この博物館には世界一高価な宝石が提示してある。",
                    "furigana": "この博物館（はくぶつかん）せかいいちこうかほうせきていじしてある。",
                    "meaning_vi": "Ở bảo tàng này đang trưng bày một mẫu đá quý nhất thế giới.",
                    "meaning_en": "This museum presents the most expensive gem in the world."
                  }
                ],
                "lesson_number": 66
              },
              {
                "vocab": "贅沢な",
                "furigana": "ぜいたくな",
                "meaning_vi": "Sang trọng",
                "meaning_en": "Luxurious",
                "examples": [
                  {
                    "example_text": "贅沢な暮らしをしている。",
                    "furigana": "贅沢（ぜいたく）くらしをしている。",
                    "meaning_vi": "Sống cuộc sống xa hoa.",
                    "meaning_en": "I live a luxurious life."
                  }
                ],
                "lesson_number": 66
              },
              {
                "vocab": "豪華な",
                "furigana": "ごうかな",
                "meaning_vi": "Sang trọng",
                "meaning_en": "Luxurious",
                "examples": [
                  {
                    "example_text": "客を500人招いて豪華な結婚披露宴をした。",
                    "furigana": "客（きゃく）にんまねごうかけっこんひろうえんをした。",
                    "meaning_vi": "Mời 500 khách và tổ chức một buổi tiệc kết hôn hoành tráng.",
                    "meaning_en": "We invited 500 customers to hold a luxurious wedding reception."
                  }
                ],
                "lesson_number": 66
              },
              {
                "vocab": "高級な",
                "furigana": "こうきゅうな",
                "meaning_vi": "Sang trọng",
                "meaning_en": "Luxurious",
                "examples": [
                  {
                    "example_text": "ツバメの巣は中華料理はでは高級な食材だ。",
                    "furigana": "ツバメの巣（す）ちゅうかりょうりこうきゅうしょくざいだ。",
                    "meaning_vi": "Tổ yến là nguyên liệu cao cấp để chế biến các món ăn trung hoa.",
                    "meaning_en": "Swallow's nest is a high-class Chinese food."
                  }
                ],
                "lesson_number": 66
              },
              {
                "vocab": "上等な",
                "furigana": "じょうとうな",
                "meaning_vi": "Chất lượng cao",
                "meaning_en": "High quality",
                "examples": [
                  {
                    "example_text": "上等なお菓子をお土産にいただいた。",
                    "furigana": "上等（じょうとう）かしみやげにいただいた。",
                    "meaning_vi": "Tôi được nhận quà ngon cao cấp làm quà.",
                    "meaning_en": "We received some fine sweets as a souvenir."
                  }
                ],
                "lesson_number": 66
              },
              {
                "vocab": "上品な",
                "furigana": "じょうひんな",
                "meaning_vi": "Thanh lịch",
                "meaning_en": "Elegant",
                "examples": [
                  {
                    "example_text": "彼女はいつも上品な服を着ている。",
                    "furigana": "彼女（かのじょ）じょうひんふくきている。",
                    "meaning_vi": "Cô ấy lúc nào cũng mang trang phục lịch sự.",
                    "meaning_en": "She is always dressed in classy clothes."
                  }
                ],
                "lesson_number": 66
              },
              {
                "vocab": "適度な",
                "furigana": "てきどな",
                "meaning_vi": "Vừa phải",
                "meaning_en": "Reasonable",
                "examples": [
                  {
                    "example_text": "健康のためには、適度な運動が大切だ。",
                    "furigana": "健康（けんこう）てきどうんどうたいせつだ。",
                    "meaning_vi": "Để có sức khỏe thì việc vận động ở mức độ hợp lí là rất quan trọng.",
                    "meaning_en": "Moderate exercise is important for your health."
                  }
                ],
                "lesson_number": 66
              },
              {
                "vocab": "快適な",
                "furigana": "かいてきな",
                "meaning_vi": "Thoải mái",
                "meaning_en": "Comfortable",
                "examples": [
                  {
                    "example_text": "新しい車の乗り心地は快適だ。",
                    "furigana": "新（あたら）くるまのごこちかいてきだ。",
                    "meaning_vi": "Cảm giác ngồi trên xe mới thật là thoải mái.",
                    "meaning_en": "The new car has a comfortable ride."
                  }
                ],
                "lesson_number": 66
              },
              {
                "vocab": "快い",
                "furigana": "こころよい",
                "meaning_vi": "dễ thương",
                "meaning_en": "cute",
                "examples": [
                  {
                    "example_text": "草原には快い風が吹いていて気持ちが良かった。",
                    "furigana": "草原（そうげん）こころよかぜふきもよかった。",
                    "meaning_vi": "Những cơn gió dễ chịu vi vu trên thảo nguyên cảm giác thật dễ chịu.",
                    "meaning_en": "There was a pleasant breeze blew through the grasslands and it felt good."
                  }
                ],
                "lesson_number": 66
              },
              {
                "vocab": "順調な",
                "furigana": "じゅんちょうな",
                "meaning_vi": "Đi tốt",
                "meaning_en": "Go well",
                "examples": [
                  {
                    "example_text": "計画は順調に進んでいる。",
                    "furigana": "計画（けいかく）じゅんちょうすすんでいる。",
                    "meaning_vi": "Kế hoạch tiến triển một cách thuận lợi.",
                    "meaning_en": "The plan is progressing smoothly."
                  }
                ],
                "lesson_number": 66
              },
              {
                "vocab": "活発な",
                "furigana": "かっぱつな",
                "meaning_vi": "Tích cực",
                "meaning_en": "Positive",
                "examples": [
                  {
                    "example_text": "うちの娘はとても活発だ。",
                    "furigana": "うちの娘（むすめ）かっぱつだ。",
                    "meaning_vi": "Con gái nhà tôi rất hoạt bát.",
                    "meaning_en": "My daughter is very active."
                  }
                ],
                "lesson_number": 67
              },
              {
                "vocab": "的確な",
                "furigana": "てきかくな",
                "meaning_vi": "Chính xác",
                "meaning_en": "Exactly",
                "examples": [
                  {
                    "example_text": "上司は部下に的確な指示を与えることが大切だ。",
                    "furigana": "上司（じょうし）ぶかてきかくしじあたたいせつだ。",
                    "meaning_vi": "Cấp trên đưa ra những chỉ đạo rõ ràng đối với cấp dưới là điều quan trọng.",
                    "meaning_en": "It is important for bosses to give accurate instructions to their subordinates."
                  }
                ],
                "lesson_number": 67
              },
              {
                "vocab": "確実な",
                "furigana": "かくじつな",
                "meaning_vi": "Một điều chắc chắn",
                "meaning_en": "One for sure",
                "examples": [
                  {
                    "example_text": "将来について確実なことは分からない。",
                    "furigana": "将来（しょうらい）かくじつわからない。",
                    "meaning_vi": "Không thể biết rõ ràng những chuyện trong tương lai.",
                    "meaning_en": "I don't know for certain about the future."
                  }
                ],
                "lesson_number": 67
              },
              {
                "vocab": "明らかな",
                "furigana": "あきらかな",
                "meaning_vi": "Rõ ràng",
                "meaning_en": "Clear",
                "examples": [
                  {
                    "example_text": "事故の原因は明らかではない。",
                    "furigana": "事故（じこ）げんいんあきらかではない。",
                    "meaning_vi": "Nguyên nhân vụ tai nạn không rõ ràng.",
                    "meaning_en": "The cause of the accident is not clear."
                  }
                ],
                "lesson_number": 67
              },
              {
                "vocab": "曖昧な",
                "furigana": "あいまいな",
                "meaning_vi": "Mơ hồ",
                "meaning_en": "Vague",
                "examples": [
                  {
                    "example_text": "社長は辞任についてあいまいな態度を取った。",
                    "furigana": "社長（しゃちょう）じにんたいどとった。",
                    "meaning_vi": "Giám đốc tỏ thái độ không rõ ràng về việc từ chức.",
                    "meaning_en": "The president took a vague attitude towards his resignation."
                  }
                ],
                "lesson_number": 67
              },
              {
                "vocab": "具体的な",
                "furigana": "ぐたいてきな",
                "meaning_vi": "Cụ thể",
                "meaning_en": "Specifically",
                "examples": [
                  {
                    "example_text": "「分かりにくいので、もっと具体的に説明してください」",
                    "furigana": "「分（わ）ぐたいてきせつめいしてください」",
                    "meaning_vi": "Khó hiểu nên hãy giải thích cụ thể hơn đi ạ.",
                    "meaning_en": "\"It's hard to understand, so please explain it more specifically.\""
                  }
                ],
                "lesson_number": 67
              },
              {
                "vocab": "抽象的な",
                "furigana": "ちゅうしょうてきな",
                "meaning_vi": "Tóm tắt",
                "meaning_en": "Summary",
                "examples": [
                  {
                    "example_text": "名詞は形のない抽象的な物事も表す。",
                    "furigana": "名詞（めいし）かたちちゅうしょうてきものごとあらわす。",
                    "meaning_vi": "Danh từ cũng chỉ những sự việc không có hình dạng mang tính trừu tượng.",
                    "meaning_en": "Nouns also represent abstract things with no form."
                  }
                ],
                "lesson_number": 67
              },
              {
                "vocab": "等しい",
                "furigana": "ひとしい",
                "meaning_vi": "bình đẳng",
                "meaning_en": "equality",
                "examples": [
                  {
                    "example_text": "この二本の直線は長さが等しい。",
                    "furigana": "この二本（にほん）ちょくせんながひとしい。",
                    "meaning_vi": "Chiều dài đường thẳng hai quyển sách này là bằng nhau.",
                    "meaning_en": "These two straight lines are of equal length."
                  }
                ],
                "lesson_number": 67
              },
              {
                "vocab": "平等な",
                "furigana": "びょうどうな",
                "meaning_vi": "Bình đẳng",
                "meaning_en": "Equality",
                "examples": [
                  {
                    "example_text": "法の下では誰でも平等だ。",
                    "furigana": "法（ほう）もとだれびょうどうだ。",
                    "meaning_vi": "Dưới pháp luật thì ai cũng như nhau.",
                    "meaning_en": "Under the law, everyone is equal."
                  }
                ],
                "lesson_number": 67
              },
              {
                "vocab": "公平な",
                "furigana": "こうへいな",
                "meaning_vi": "Hội chợ",
                "meaning_en": "Fair",
                "examples": [
                  {
                    "example_text": "教師が学生によって態度を変えるのは公平ではない。",
                    "furigana": "教師（きょうし）がくせいたいどかこうへいではない。",
                    "meaning_vi": "Giáo viên tùy vào học sinh mà thay đổi thái độ là không công bằng.",
                    "meaning_en": "It is not fair for teachers to change their attitudes across students."
                  }
                ],
                "lesson_number": 67
              },
              {
                "vocab": "人物",
                "furigana": "じんぶつ",
                "meaning_vi": "nhân vật",
                "meaning_en": "figure",
                "examples": [
                  {
                    "example_text": "これは歴史上の人物を描いた小説だ。",
                    "furigana": "これは歴史（れきし）じょうじんぶつえがしょうせつだ。",
                    "meaning_vi": "Đây là cuốn tiểu thuyết vẽ về nhân vật trong lịch sử.",
                    "meaning_en": "This is a novel about historical figures."
                  }
                ],
                "lesson_number": 68
              },
              {
                "vocab": "者",
                "furigana": "もの",
                "meaning_vi": "Những thứ kia",
                "meaning_en": "Those things",
                "examples": [
                  {
                    "example_text": "「うちの者と相談してからお返事いたします」",
                    "furigana": "「うちの者（もの）そうだんへんじいたします」",
                    "meaning_vi": "Sau khi bàn bạc với người nhà tôi sẽ trả lời lại.",
                    "meaning_en": "\"I'll talk to my person before I reply.\""
                  }
                ],
                "lesson_number": 68
              },
              {
                "vocab": "各自",
                "furigana": "かくじ",
                "meaning_vi": "tương ứng",
                "meaning_en": "corresponding",
                "examples": [
                  {
                    "example_text": "「パスポートは各自でお持ちください」",
                    "furigana": "「パスポートは各自（かくじ）もちください」",
                    "meaning_vi": "Mỗi người hãy mang theo hộ chiếu.",
                    "meaning_en": "\"Please bring your passport yourself.\""
                  }
                ],
                "lesson_number": 68
              },
              {
                "vocab": "気分",
                "furigana": "きぶん",
                "meaning_vi": "cảm giác",
                "meaning_en": "feeling",
                "examples": [
                  {
                    "example_text": "緊張過ぎて気分が悪くなった。",
                    "furigana": "緊張（きんちょう）すきぶんわるくなった。",
                    "meaning_vi": "Vì quá lo lắng nên tâm trạng không tốt.",
                    "meaning_en": "I was so nervous I felt sick."
                  }
                ],
                "lesson_number": 68
              },
              {
                "vocab": "気配",
                "furigana": "けはい",
                "meaning_vi": "Cảm xúc",
                "meaning_en": "Feeling",
                "examples": [
                  {
                    "example_text": "暗くてよく見えないが、人のいる気配がする。",
                    "furigana": "暗（くら）みひとけはいがする。",
                    "meaning_vi": "Mặc dù tối không nhìn thấy nhưng linh cảm có người.",
                    "meaning_en": "It's dark and doesn't look very good, but it shows signs of people there."
                  }
                ],
                "lesson_number": 68
              },
              {
                "vocab": "生きがい",
                "furigana": "いきがい",
                "meaning_vi": "Một mục đích trong cuộc sống",
                "meaning_en": "A purpose in life",
                "examples": [
                  {
                    "example_text": "私は今の仕事に生きがいを感じている。",
                    "furigana": "私（わたし）いましごといかんじている。",
                    "meaning_vi": "Tôi cảm thấy công việc hiện tại là lẽ sống.",
                    "meaning_en": "I feel a sense of purpose in my current job."
                  }
                ],
                "lesson_number": 68
              },
              {
                "vocab": "行儀",
                "furigana": "ぎょうぎ",
                "meaning_vi": "Hành vi",
                "meaning_en": "Behavior",
                "examples": [
                  {
                    "example_text": "音を立てて食べるのは行事が悪い。",
                    "furigana": "音（おと）たたぎょうじわるい。",
                    "meaning_vi": "Khi ăn phát ra tiếng là cách cư xử không tốt.",
                    "meaning_en": "It's a bad event to eat with a loud noise."
                  }
                ],
                "lesson_number": 68
              },
              {
                "vocab": "品",
                "furigana": "ひん",
                "meaning_vi": "Sản phẩm",
                "meaning_en": "Product",
                "examples": [
                  {
                    "example_text": "女王は姿にも話し方にも品がある。",
                    "furigana": "女王（じょおう）すがたはなかたひんがある。",
                    "meaning_vi": "Nữ vương từ vóc dáng đến cách nói chuyện đều có phẩm chất tốt.",
                    "meaning_en": "The Queen is both elegant in her appearance and speaking style."
                  }
                ],
                "lesson_number": 68
              },
              {
                "vocab": "姿",
                "furigana": "すがた",
                "meaning_vi": "nhân vật",
                "meaning_en": "figure",
                "examples": [
                  {
                    "example_text": "姉の後ろ姿は、母にそっくりだ。",
                    "furigana": "姉（あね）うしすがたははにそっくりだ。",
                    "meaning_vi": "Chị gái nhìn từ đằng sau, giống hệt mẹ.",
                    "meaning_en": "My sister's back looks just like her mother."
                  }
                ],
                "lesson_number": 68
              },
              {
                "vocab": "姿勢",
                "furigana": "しせい",
                "meaning_vi": "tư thế",
                "meaning_en": "posture",
                "examples": [
                  {
                    "example_text": "彼女はダンスをやっているので、いつも姿勢がいい。",
                    "furigana": "彼女（かのじょ）しせいがいい。",
                    "meaning_vi": "Cô ấy đang nhảy nên lúc nào tư thế cũng đẹp.",
                    "meaning_en": "She dances so she always has good posture."
                  }
                ],
                "lesson_number": 68
              },
              {
                "vocab": "見かけ",
                "furigana": "みかけ",
                "meaning_vi": "Đã xem",
                "meaning_en": "Viewed",
                "examples": [
                  {
                    "example_text": "うちの犬は見かけは強そうだが、実は怖がりだ。",
                    "furigana": "うちの犬（いぬ）みつよじつこわがりだ。",
                    "meaning_vi": "Con chó nhà tôi nhìn có vẻ khỏe mạnh nhưng thực ra là nó thấy sợ.",
                    "meaning_en": "My dog ​​looks strong, but he's actually scared."
                  }
                ],
                "lesson_number": 68
              },
              {
                "vocab": "振り",
                "furigana": "ふり",
                "meaning_vi": "Run rẩy",
                "meaning_en": "Trembling",
                "examples": [
                  {
                    "example_text": "田中さんの欠席の理由を知っ  (A) 午いたが、知らないふりをした。",
                    "furigana": "田中（たなか）けっせきりゆうししらないふりをした。",
                    "meaning_vi": "Biết lí do anh Tanaka nghỉ nhưng tôi giả vờ không biết.",
                    "meaning_en": "I learned the reason Tanaka was absent (A) I was in the afternoon, but pretended not to know."
                  }
                ],
                "lesson_number": 68
              },
              {
                "vocab": "苦情",
                "furigana": "くじょう",
                "meaning_vi": "Lời phàn nàn",
                "meaning_en": "Complaint",
                "examples": [
                  {
                    "example_text": "駅が汚いので、駅員に苦情を言った。",
                    "furigana": "駅（えき）きたなえきいんくじょういった。",
                    "meaning_vi": "Nhà ga bẩn nên phàn nàn với nhân viên.",
                    "meaning_en": "The station was dirty so I complained to the station attendant."
                  }
                ],
                "lesson_number": 68
              },
              {
                "vocab": "口実",
                "furigana": "こうじつ",
                "meaning_vi": "thứ lỗi",
                "meaning_en": "bug",
                "examples": [
                  {
                    "example_text": "気が進まなかったので、風邪を口実にして飲み会を欠席した。",
                    "furigana": "気（き）すすかぜこうじつのかいけっせきした。",
                    "meaning_vi": "Không muốn đi nên ngụy biện ốm để vắng mặt buổi tiệc.",
                    "meaning_en": "I was reluctant, so I missed the drinking party using the cold as an excuse."
                  }
                ],
                "lesson_number": 68
              },
              {
                "vocab": "動機",
                "furigana": "どうき",
                "meaning_vi": "động lực",
                "meaning_en": "dynamic",
                "examples": [
                  {
                    "example_text": "「我が社の求人に応募した動機は何ですか」",
                    "furigana": "「我（わ）しゃきゅうじんおうぼどうきなんですか」",
                    "meaning_vi": "Động cơ ứng tuyển vào công ty chúng tôi là gì vậy?",
                    "meaning_en": "\"What motivated you to apply for our company?\""
                  }
                ],
                "lesson_number": 69
              },
              {
                "vocab": "皮肉",
                "furigana": "ひにく",
                "meaning_vi": "Gầy",
                "meaning_en": "Thin",
                "examples": [
                  {
                    "example_text": "田中部長はよく皮肉を言う。",
                    "furigana": "田中（たなか）ぶちょうひにくいう。",
                    "meaning_vi": "Trưởng phòng Tanaka thường nói đùa.",
                    "meaning_en": "Director Tanaka often sarcastically says."
                  }
                ],
                "lesson_number": 69
              },
              {
                "vocab": "皮肉",
                "furigana": "ひにく",
                "meaning_vi": "Gầy",
                "meaning_en": "Thin",
                "examples": [
                  {
                    "example_text": "青年時代には人生の意義について考える物だ。",
                    "furigana": "青年（せいねん）じだいじんせいいぎかんがものだ。",
                    "meaning_vi": "Thời thanh niên mà suy nghĩ về ý nghĩa cuộc sống là điều đương nhiên.",
                    "meaning_en": "During your youth, you think about the significance of life."
                  }
                ],
                "lesson_number": 69
              },
              {
                "vocab": "主義",
                "furigana": "しゅぎ",
                "meaning_vi": "Triết lý",
                "meaning_en": "Philosophy",
                "examples": [
                  {
                    "example_text": "私は、一度言ったことは必ず最後まで貫く主義だ。",
                    "furigana": "私（わたし）いちどいかならさいごつらぬしゅぎだ。",
                    "meaning_vi": "Tôi có nguyên tắc là khi đã nói thì nhất định phải làm đến cùng.",
                    "meaning_en": "I am a stance on sticking to the end what I said once."
                  }
                ],
                "lesson_number": 69
              },
              {
                "vocab": "精神",
                "furigana": "せいしん",
                "meaning_vi": "Tinh thần",
                "meaning_en": "Spirit",
                "examples": [
                  {
                    "example_text": "精神と肉体は結び付いている。",
                    "furigana": "精神（せいしん）にくたいむすついている。",
                    "meaning_vi": "Tinh thần và thể chất có mối liên hệ với nhau.",
                    "meaning_en": "The mind and the body are connected."
                  }
                ],
                "lesson_number": 69
              },
              {
                "vocab": "年代",
                "furigana": "ねんだい",
                "meaning_vi": "ERA",
                "meaning_en": "ERA",
                "examples": [
                  {
                    "example_text": "日本では、1960年代は高度成長の時代だった。",
                    "furigana": "日本（にほん）ねんだいこうどせいちょうじだいだった。",
                    "meaning_vi": "Ở Nhật, những năm 60 là thời kì phát triển cao độ.",
                    "meaning_en": "In Japan, the 1960s were a period of high economic growth."
                  }
                ],
                "lesson_number": 69
              },
              {
                "vocab": "世代",
                "furigana": "せだい",
                "meaning_vi": "thế hệ",
                "meaning_en": "generation",
                "examples": [
                  {
                    "example_text": "我が家は三世代が一緒に住んでいる。",
                    "furigana": "我（わ）やさんせだいいっしょすんでいる。",
                    "meaning_vi": "Gia đình tôi có 3 thế hệ cùng sinh sống.",
                    "meaning_en": "Three generations live together in our house."
                  }
                ],
                "lesson_number": 69
              },
              {
                "vocab": "基礎",
                "furigana": "きそ",
                "meaning_vi": "Căn cứ",
                "meaning_en": "Base",
                "examples": [
                  {
                    "example_text": "何事も、基礎が大切だ。",
                    "furigana": "何事（なにごと）きそたいせつだ。",
                    "meaning_vi": "Bất cứ chuyện gì thì cơ bản vẫn là quan trọng.",
                    "meaning_en": "The foundation is important in everything."
                  }
                ],
                "lesson_number": 69
              },
              {
                "vocab": "基準",
                "furigana": "きじゅん",
                "meaning_vi": "tiêu chuẩn",
                "meaning_en": "standard",
                "examples": [
                  {
                    "example_text": "この川の水は水質基準を満たしていないから、飲まないほうがいい。",
                    "furigana": "この川（かわ）みずすいしつきじゅんみのまないほうがいい。",
                    "meaning_vi": "Nước của sông này không đạt tới mức độ chuẩn nên không uống thì tốt hơn.",
                    "meaning_en": "The water in this river does not meet water quality standards, so it's best not to drink it."
                  }
                ],
                "lesson_number": 69
              },
              {
                "vocab": "標準",
                "furigana": "ひょうじゅん",
                "meaning_vi": "tiêu chuẩn",
                "meaning_en": "standard",
                "examples": [
                  {
                    "example_text": "オリンピックの標準記録を上回り、出場できることになった。",
                    "furigana": "オリンピックの標準（ひょうじゅん）きろくうわまわしゅつじょうできることになった。",
                    "meaning_vi": "Vượt qua kỉ lục tiêu chuẩn của Olympic thì được tham dự.",
                    "meaning_en": "He was able to compete and surpassed the standard Olympics record."
                  }
                ],
                "lesson_number": 69
              },
              {
                "vocab": "典型",
                "furigana": "てんけい",
                "meaning_vi": "đặc trưng",
                "meaning_en": "feature",
                "examples": [
                  {
                    "example_text": "この寺は江戸時代の仏教建築の典型だと言われている。",
                    "furigana": "この寺（てら）えどじだいぶっきょうけんちくてんけいいわれている。",
                    "meaning_vi": "Người ta nói rằng ngôi chùa này là kiến trúc phật giáo cổ điển thời kì Edo.",
                    "meaning_en": "This temple is said to be a typical example of Buddhist architecture in the Edo period."
                  }
                ],
                "lesson_number": 69
              },
              {
                "vocab": "方言",
                "furigana": "ほうげん",
                "meaning_vi": "phương ngữ",
                "meaning_en": "dialect",
                "examples": [
                  {
                    "example_text": "方言を聞くと、ふるさとを思い出す。",
                    "furigana": "方言（ほうげん）きおもだす。",
                    "meaning_vi": "Khi nghe giọng địa phương tôi lại nghĩ về quê hương.",
                    "meaning_en": "When I hear the dialect, I remember my hometown."
                  }
                ],
                "lesson_number": 69
              },
              {
                "vocab": "分布",
                "furigana": "ぶんぷ",
                "meaning_vi": "phân phối",
                "meaning_en": "distribution",
                "examples": [
                  {
                    "example_text": "この植物は、西日本に広く分布している。",
                    "furigana": "この植物（しょくぶつ）にしにほんひろぶんぷしている。",
                    "meaning_vi": "Loại thực vật này phân bố rộng ở phía tây Nhật Bản.",
                    "meaning_en": "This plant is widely distributed in western Japan."
                  }
                ],
                "lesson_number": 69
              },
              {
                "vocab": "発展",
                "furigana": "はってん",
                "meaning_vi": "phát triển",
                "meaning_en": "develop",
                "examples": [
                  {
                    "example_text": "アジアは現在大きく発展している。",
                    "furigana": "アジアは現在（げんざい）おおはってんしている。",
                    "meaning_vi": "Hiện nay, châu Á đang phát triển mạnh.",
                    "meaning_en": "Asia is currently undergoing significant development."
                  }
                ],
                "lesson_number": 69
              },
              {
                "vocab": "文明",
                "furigana": "ぶんめい",
                "meaning_vi": "nền văn minh",
                "meaning_en": "civilization",
                "examples": [
                  {
                    "example_text": "日本は1868年に明治維新が行われて以来、西洋文明が流行してきた。",
                    "furigana": "日本（にほん）ねんめいじいしんおこないらいせいようぶんめいりゅうこうしてきた。",
                    "meaning_vi": "Sau khi tổ chức cuộc duy tân Minh Trị ở Nhật, nó đã trở thành trào lưu văn minh ở các nước phương đông.",
                    "meaning_en": "Since the Meiji Restoration took place in Japan in 1868, Western civilization has been popular."
                  }
                ],
                "lesson_number": 70
              },
              {
                "vocab": "普及",
                "furigana": "ふきゅう",
                "meaning_vi": "phổ quát",
                "meaning_en": "universal",
                "examples": [
                  {
                    "example_text": "携帯電話の普及は著しい。",
                    "furigana": "携帯（けいたい）でんわふきゅういちじるしい。",
                    "meaning_vi": "Sự phổ cập của điện thoại di động là rất đáng kể.",
                    "meaning_en": "Mobile phones are becoming more popular."
                  }
                ],
                "lesson_number": 70
              },
              {
                "vocab": "制限",
                "furigana": "せいげん",
                "meaning_vi": "giới hạn",
                "meaning_en": "limit",
                "examples": [
                  {
                    "example_text": "「食べ放題」は時間に制限がある。",
                    "furigana": "「食（た）ほうだいじかんせいげんがある。",
                    "meaning_vi": "Ăn thỏa thích nhưng có giới hạn về thời gian.",
                    "meaning_en": "There is a time limit for \"all-you-can-eat\"."
                  }
                ],
                "lesson_number": 70
              },
              {
                "vocab": "限度",
                "furigana": "げんど",
                "meaning_vi": "giới hạn",
                "meaning_en": "limit",
                "examples": [
                  {
                    "example_text": "「ダイエットもいいけれども、限度を考えなさい。このままでは体を壊しますよ」",
                    "furigana": "「ダイエットもいいけれども、限度（げんど）かんがからだこわしますよ」",
                    "meaning_vi": "Ăn kiêng cũng tốt nhưng phải nghĩ tới mức độ giới hạn, nếu cứ như thế này thì sẽ hại sức khỏe mất.",
                    "meaning_en": "\"Diet is good, but think about your limits. If you keep going like this, you'll be damaging.\""
                  }
                ],
                "lesson_number": 70
              },
              {
                "vocab": "限界",
                "furigana": "げんかい",
                "meaning_vi": "giới hạn",
                "meaning_en": "limit",
                "examples": [
                  {
                    "example_text": "疲労が限界に達した。",
                    "furigana": "疲労（ひろう）げんかいたっした。",
                    "meaning_vi": "Đã chạm tới giới hạn của sự mệt mỏi.",
                    "meaning_en": "My fatigue reached its limit."
                  }
                ],
                "lesson_number": 70
              },
              {
                "vocab": "検討",
                "furigana": "けんとう",
                "meaning_vi": "Coi như",
                "meaning_en": "As",
                "examples": [
                  {
                    "example_text": "災害対策について検討を重ねた。",
                    "furigana": "災害（さいがい）たいさくけんとうかさねた。",
                    "meaning_vi": "Đưa ra nhiều nghiên cứu về đối sách hỏa hoạn.",
                    "meaning_en": "We have been considering disaster prevention measures."
                  }
                ],
                "lesson_number": 70
              },
              {
                "vocab": "選択",
                "furigana": "せんたく",
                "meaning_vi": "sự lựa chọn",
                "meaning_en": "option",
                "examples": [
                  {
                    "example_text": "学校では、授業を自由に選択することができる。",
                    "furigana": "学校（がっこう）じゅぎょうじゆうせんたくすることができる。",
                    "meaning_vi": "Ở trường đại học, có thể tự do lựa chọn buổi học, giờ học.",
                    "meaning_en": "At school, classes can be freely selected."
                  }
                ],
                "lesson_number": 70
              },
              {
                "vocab": "考慮",
                "furigana": "こうりょ",
                "meaning_vi": "coi như",
                "meaning_en": "as",
                "examples": [
                  {
                    "example_text": "スピーチをする時は、聞き手のことも考慮に入れなければならない。",
                    "furigana": "スピーチをする時（とき）きてこうりょいれなければならない。",
                    "meaning_vi": "Khi hùng biện phải tham khảo ý kiến của người nghe.",
                    "meaning_en": "When giving a speech, you must also take into consideration the listener."
                  }
                ],
                "lesson_number": 70
              },
              {
                "vocab": "重視",
                "furigana": "じゅうし",
                "meaning_vi": "Chú ý đến",
                "meaning_en": "Notice",
                "examples": [
                  {
                    "example_text": "この仕事は経験が重視される。",
                    "furigana": "この仕事（しごと）けいけんじゅうしされる。",
                    "meaning_vi": "Công việc này xem trọng kinh nghiệm.",
                    "meaning_en": "This job focuses on experience."
                  }
                ],
                "lesson_number": 70
              },
              {
                "vocab": "見当",
                "furigana": "けんとう",
                "meaning_vi": "Lý do",
                "meaning_en": "Reason",
                "examples": [
                  {
                    "example_text": "この問題はどうやって解いたらいいのか、見当も付かない。",
                    "furigana": "この問題（もんだい）とけんとうつかない。",
                    "meaning_vi": "Vấn đề này nên giải quyết như thế nào thì tốt, không thể phán đoán được.",
                    "meaning_en": "I have no idea how to solve this problem."
                  }
                ],
                "lesson_number": 70
              },
              {
                "vocab": "訂正",
                "furigana": "ていせい",
                "meaning_vi": "điều chỉnh",
                "meaning_en": "adjust",
                "examples": [
                  {
                    "example_text": "間違いを訂正する。",
                    "furigana": "間違（まちが）ていせいする。",
                    "meaning_vi": "Đính chính lại lỗi sai.",
                    "meaning_en": "Correct the error."
                  }
                ],
                "lesson_number": 70
              },
              {
                "vocab": "修正",
                "furigana": "しゅうせい",
                "meaning_vi": "Điều chỉnh",
                "meaning_en": "Adjust",
                "examples": [
                  {
                    "example_text": "｛文章/デザイン/計画…｝を修正する。",
                    "furigana": "｛文章（ぶんしょう）けいかくしゅうせいする。",
                    "meaning_vi": "",
                    "meaning_en": "Modify {text/design/plan...}."
                  }
                ],
                "lesson_number": 70
              },
              {
                "vocab": "反抗",
                "furigana": "はんこう",
                "meaning_vi": "Kháng cự",
                "meaning_en": "Resist",
                "examples": [
                  {
                    "example_text": "学生は大学当局に反抗して団体交渉を行った。",
                    "furigana": "学生（がくせい）だいがくとうきょくはんこうだんたいこうしょうおこなった。",
                    "meaning_vi": "Những học sinh chống đối lại lãnh đạo nhà trường và tổ chức cuộc đàm phán đoàn thể.",
                    "meaning_en": "The students rebelled against university authorities and negotiated collectively."
                  }
                ],
                "lesson_number": 70
              },
              {
                "vocab": "抵抗",
                "furigana": "ていこう",
                "meaning_vi": "sức chống cự",
                "meaning_en": "resistance",
                "examples": [
                  {
                    "example_text": "彼は政府に抵抗して逮捕された。",
                    "furigana": "彼（かれ）せいふていこうたいほされた。",
                    "meaning_vi": "Anh ta chống đối lại chính phủ nên đã bị bắt.",
                    "meaning_en": "He was arrested for resisting the government."
                  }
                ],
                "lesson_number": 70
              },
              {
                "vocab": "災難",
                "furigana": "さいなん",
                "meaning_vi": "thảm họa",
                "meaning_en": "disaster",
                "examples": [
                  {
                    "example_text": "洪水、山火事、農作物の不作と、村に災難が続いた。",
                    "furigana": "洪水（こうずい）やまかじのうさくぶつふさくむらさいなんつづいた。",
                    "meaning_vi": "Những thảm họa như lũ lụt, núi lửa, mất mùa cứ tiếp tục xảy ra với làng.",
                    "meaning_en": "Disasters continued in the village, including floods, wildfires and poor crops."
                  }
                ],
                "lesson_number": 70
              },
              {
                "vocab": "汚染",
                "furigana": "おせん",
                "meaning_vi": "sự ô nhiễm",
                "meaning_en": "pollution",
                "examples": [
                  {
                    "example_text": "工場排水で地下水が汚染された。",
                    "furigana": "工場（こうじょう）はいすいちかすいおせんされた。",
                    "meaning_vi": "Nước thải của nhà máy làm ô nhiễm nguồn nước ngầm.",
                    "meaning_en": "The factory drainage contaminated groundwater."
                  }
                ],
                "lesson_number": 70
              },
              {
                "vocab": "害",
                "furigana": "がい",
                "meaning_vi": "Có hại",
                "meaning_en": "Harmful",
                "examples": [
                  {
                    "example_text": "この虫は人間に害を与えることはない。",
                    "furigana": "この虫（むし）にんげんがいあたえることはない。",
                    "meaning_vi": "Loại côn trùng này không gây hại cho con người.",
                    "meaning_en": "This insect does not harm humans."
                  }
                ],
                "lesson_number": 71
              },
              {
                "vocab": "伝染",
                "furigana": "でんせん",
                "meaning_vi": "Sự ngưng tụ",
                "meaning_en": "Condensation",
                "examples": [
                  {
                    "example_text": "この病気は動物から人に伝染する。",
                    "furigana": "この病気（びょうき）どうぶつひとでんせんする。",
                    "meaning_vi": "Loại bệnh này truyền nhiễm từ động vật sang người.",
                    "meaning_en": "This disease is transmitted from animals to humans."
                  }
                ],
                "lesson_number": 71
              },
              {
                "vocab": "対策",
                "furigana": "たいさく",
                "meaning_vi": "đối phó",
                "meaning_en": "cope",
                "examples": [
                  {
                    "example_text": "少子化を止める有効な対策を立てる必要がある。",
                    "furigana": "少子化（しょうしか）とゆうこうたいさくたひつようがある。",
                    "meaning_vi": "",
                    "meaning_en": "Effective measures need to be taken to stop the declining birthrate."
                  }
                ],
                "lesson_number": 71
              },
              {
                "vocab": "処置",
                "furigana": "しょち",
                "meaning_vi": "sự đối đãi",
                "meaning_en": "treatment",
                "examples": [
                  {
                    "example_text": "問題に対して適切な処分を取る。",
                    "furigana": "問題（もんだい）たいてきせつしょぶんとる。",
                    "meaning_vi": "Cần có cách xử lí hợp lí đối với vấn đề.",
                    "meaning_en": "Take appropriate measures for the problem."
                  }
                ],
                "lesson_number": 71
              },
              {
                "vocab": "処分",
                "furigana": "しょぶん",
                "meaning_vi": "xử lý",
                "meaning_en": "handle",
                "examples": [
                  {
                    "example_text": "引っ越しする時、不用品を全部処分した。",
                    "furigana": "引（ひ）こときふようひんぜんぶしょぶんした。",
                    "meaning_vi": "Khi chuyển nhà tiêu hủy những thứ không cần thiết.",
                    "meaning_en": "When I moved, I disposed of all my unnecessary items."
                  }
                ],
                "lesson_number": 71
              },
              {
                "vocab": "処理",
                "furigana": "しょり",
                "meaning_vi": "quá trình",
                "meaning_en": "progress",
                "examples": [
                  {
                    "example_text": "たまった仕事をてきぱきと処理する。",
                    "furigana": "たまった仕事（しごと）しょりする。",
                    "meaning_vi": "Nhanh chống xử lí công việc chất đống.",
                    "meaning_en": "Quickly handle accumulated work."
                  }
                ],
                "lesson_number": 71
              },
              {
                "vocab": "輪",
                "furigana": "わ",
                "meaning_vi": "bánh xe",
                "meaning_en": "wheel",
                "examples": [
                  {
                    "example_text": "日本では親指と人差し指で輪を作ると、OKのサインになる。",
                    "furigana": "日本（にほん）おやゆびひとさゆびわつくると、OKのサインになる。",
                    "meaning_vi": "Ở Nhật, ngón cái và ngón trỏ cuộn lại thành vòng tròn là kí hiệu Ok.",
                    "meaning_en": "In Japan, creating a ring with your thumb and index finger is a sign that you are OK."
                  }
                ],
                "lesson_number": 72
              },
              {
                "vocab": "凸凹",
                "furigana": "でこぼこ",
                "meaning_vi": "Lồi",
                "meaning_en": "Protruding",
                "examples": [
                  {
                    "example_text": "凸凹の土地を平らにする。",
                    "furigana": "凸凹（でこぼこ）とちたいらにする。",
                    "meaning_vi": "Làm bằng phẳng những vùng đất lồi lõm.",
                    "meaning_en": "Flatten uneven land."
                  }
                ],
                "lesson_number": 72
              },
              {
                "vocab": "跡",
                "furigana": "あと",
                "meaning_vi": "Dấu vết",
                "meaning_en": "Trace",
                "examples": [
                  {
                    "example_text": "道路に｛タイヤの/人が歩いた…｝跡がある。",
                    "furigana": "道路（どうろ）ひとあるあとがある。",
                    "meaning_vi": "Trên đường có dấu lốp xe/ dấu chân người đi….",
                    "meaning_en": "There are traces of {the tire/person walked...} on the road."
                  }
                ],
                "lesson_number": 72
              },
              {
                "vocab": "手間",
                "furigana": "てま",
                "meaning_vi": "thời gian và công sức",
                "meaning_en": "time and effort",
                "examples": [
                  {
                    "example_text": "和食を作るのは手間がかかる。",
                    "furigana": "和食（わしょく）つくてまがかかる。",
                    "meaning_vi": "Để làm món ăn kiểu Nhật mất thời gian.",
                    "meaning_en": "Cooking Japanese food is a hassle."
                  }
                ],
                "lesson_number": 72
              },
              {
                "vocab": "能率",
                "furigana": "のうりつ",
                "meaning_vi": "hiệu quả",
                "meaning_en": "effective",
                "examples": [
                  {
                    "example_text": "仕事の能率を上げよう。",
                    "furigana": "仕事（しごと）のうりつあげよう。",
                    "meaning_vi": "Hãy tăng năng suất công việc.",
                    "meaning_en": "Improve your work efficiency."
                  }
                ],
                "lesson_number": 72
              },
              {
                "vocab": "性能",
                "furigana": "せいのう",
                "meaning_vi": "hiệu suất",
                "meaning_en": "efficiency",
                "examples": [
                  {
                    "example_text": "この車はエンジンの性能がいい。",
                    "furigana": "この車（くるま）せいのうがいい。",
                    "meaning_vi": "Tính năng động cơ xe ô tô này khá tốt.",
                    "meaning_en": "This car has good engine performance."
                  }
                ],
                "lesson_number": 72
              },
              {
                "vocab": "操作",
                "furigana": "そうさ",
                "meaning_vi": "vận hành",
                "meaning_en": "operate",
                "examples": [
                  {
                    "example_text": "｛機械/ロボット…」を操作する。",
                    "furigana": "｛機械（きかい）そうさする。",
                    "meaning_vi": "",
                    "meaning_en": "Operate {Machine/Robot...\"."
                  }
                ],
                "lesson_number": 72
              },
              {
                "vocab": "発揮",
                "furigana": "はっき",
                "meaning_vi": "Hiển thị",
                "meaning_en": "Display",
                "examples": [
                  {
                    "example_text": "日本チームは実力を発揮して優勝した。",
                    "furigana": "日本（にほん）じつりょくはっきゆうしょうした。",
                    "meaning_vi": "Đội tuyển Nhật Bản đã phát huy thực lực của mình và đã chiến thắng.",
                    "meaning_en": "The Japanese team showed their abilities and won the championship."
                  }
                ],
                "lesson_number": 72
              },
              {
                "vocab": "頂点",
                "furigana": "ちょうてん",
                "meaning_vi": "đỉnh",
                "meaning_en": "top",
                "examples": [
                  {
                    "example_text": "三角形の頂点",
                    "furigana": "三角形（さんかくけい）ちょうてん",
                    "meaning_vi": "",
                    "meaning_en": "Triangle vertices"
                  }
                ],
                "lesson_number": 72
              },
              {
                "vocab": "周辺",
                "furigana": "しゅうへん",
                "meaning_vi": "hàng xóm",
                "meaning_en": "neighbor",
                "examples": [
                  {
                    "example_text": "山火事が起こり、周辺の住民たちは避難した。",
                    "furigana": "山火事（やまかじ）おしゅうへんじゅうみんひなんした。",
                    "meaning_vi": "Xảy ra núi lửa, người dân xung quanh đã lánh nạn.",
                    "meaning_en": "A wildfire broke out and residents around the area were evacuated."
                  }
                ],
                "lesson_number": 72
              },
              {
                "vocab": "現場",
                "furigana": "げんば",
                "meaning_vi": "trên trang web",
                "meaning_en": "On the site",
                "examples": [
                  {
                    "example_text": "交通事故の現場を目撃した。",
                    "furigana": "交通（こうつう）じこげんばもくげきした。",
                    "meaning_vi": "Chứng kiến hiện trường vụ tai nạn giao thông.",
                    "meaning_en": "He witnessed the scene of a traffic accident."
                  }
                ],
                "lesson_number": 72
              },
              {
                "vocab": "状況",
                "furigana": "じょうきょう",
                "meaning_vi": "tình huống",
                "meaning_en": "situation",
                "examples": [
                  {
                    "example_text": "今、経済の状況が良くない。",
                    "furigana": "今（いま）けいざいじょうきょうよくない。",
                    "meaning_vi": "Tình hình kinh tế bây giờ không tốt.",
                    "meaning_en": "The economy is not good right now."
                  }
                ],
                "lesson_number": 72
              },
              {
                "vocab": "組織",
                "furigana": "そしき",
                "meaning_vi": "tổ chức",
                "meaning_en": "organization",
                "examples": [
                  {
                    "example_text": "ユニセフは国際連合の組織だ。",
                    "furigana": "ユニセフは国際（こくさい）れんごうそしきだ。",
                    "meaning_vi": "UNICEF là một tổ chức của liên hợp quốc.",
                    "meaning_en": "UNICEF is an organization of the United Nations."
                  }
                ],
                "lesson_number": 72
              },
              {
                "vocab": "制度",
                "furigana": "せいど",
                "meaning_vi": "hệ thống",
                "meaning_en": "system",
                "examples": [
                  {
                    "example_text": "日本に郵便の制度ができたのは明治時代だ。",
                    "furigana": "日本（にほん）ゆうびんせいどめいじじだいだ。",
                    "meaning_vi": "Chế độ bưu điện ở Nhật có từ thời Minh Trị.",
                    "meaning_en": "The postal system was established in Japan during the Meiji period."
                  }
                ],
                "lesson_number": 72
              },
              {
                "vocab": "構成",
                "furigana": "こうせい",
                "meaning_vi": "sáng tác",
                "meaning_en": "compose",
                "examples": [
                  {
                    "example_text": "論文の構成を考える。",
                    "furigana": "論文（ろんぶん）こうせいかんがえる。",
                    "meaning_vi": "Suy nghĩ cấu trúc đoạn văn.",
                    "meaning_en": "Consider the structure of the paper."
                  }
                ],
                "lesson_number": 72
              },
              {
                "vocab": "形式",
                "furigana": "けいしき",
                "meaning_vi": "hình thức",
                "meaning_en": "form",
                "examples": [
                  {
                    "example_text": "日本語で手紙を書きたいのだが、形式が分からない。",
                    "furigana": "日本語（にほんご）てがみかけいしきわからない。",
                    "meaning_vi": "Tôi muốn viết thư bằng tiếng Nhật nhưng không hiểu hình thức.",
                    "meaning_en": "I want to write a letter in Japanese, but I don't know the format."
                  }
                ],
                "lesson_number": 72
              },
              {
                "vocab": "傾向",
                "furigana": "けいこう",
                "meaning_vi": "xu hướng",
                "meaning_en": "trend",
                "examples": [
                  {
                    "example_text": "最近の若者は仕事より自分の生活を重視する傾向がある。",
                    "furigana": "最近（さいきん）わかものしごとじぶんせいかつじゅうしけいこうがある。",
                    "meaning_vi": "Giới trẻ gần đây có xu hướng xem trọng đời sống cá nhân hơn là công việc.",
                    "meaning_en": "Young people these days tend to place more importance on their lives than their work."
                  }
                ],
                "lesson_number": 73
              },
              {
                "vocab": "方針",
                "furigana": "ほうしん",
                "meaning_vi": "chính sách",
                "meaning_en": "policy",
                "examples": [
                  {
                    "example_text": "会社の方針に沿って、働く。",
                    "furigana": "会社（かいしゃ）ほうしんそはたらく。",
                    "meaning_vi": "Làm việc theo phương châm của công ty.",
                    "meaning_en": "Work according to company policy."
                  }
                ],
                "lesson_number": 73
              },
              {
                "vocab": "徹底",
                "furigana": "てってい",
                "meaning_vi": "kỹ lưỡng",
                "meaning_en": "elaborate",
                "examples": [
                  {
                    "example_text": "指導を徹底する。",
                    "furigana": "指導（しどう）てっていする。",
                    "meaning_vi": "Chỉ đạo triệt để.",
                    "meaning_en": "Be thoroughly taught."
                  }
                ],
                "lesson_number": 73
              },
              {
                "vocab": "分析",
                "furigana": "ぶんせき",
                "meaning_vi": "phân tích",
                "meaning_en": "analysis",
                "examples": [
                  {
                    "example_text": "建物に使われている木を分析して、造られた年代を調べる。",
                    "furigana": "建物（たてもの）つかきぶんせきつくねんだいしらべる。",
                    "meaning_vi": "Phân tích cây dùng để xây các tòa nhà có thể điều tra năm đã xây dựng nó.",
                    "meaning_en": "The trees used in the building are analyzed and the age at which they were built is determined."
                  }
                ],
                "lesson_number": 73
              },
              {
                "vocab": "維持",
                "furigana": "いじ",
                "meaning_vi": "duy trì",
                "meaning_en": "maintain",
                "examples": [
                  {
                    "example_text": "親の家を出たら、今の生活レベルを維持するのは難しい。",
                    "furigana": "親（おや）いえでいませいかついじむずかしい。",
                    "meaning_vi": "Sau khi rời gia đình để duy trì một mức độ sống bây giờ là rất khó khăn.",
                    "meaning_en": "Once you leave your parents' house, it is difficult to maintain your current level of living."
                  }
                ],
                "lesson_number": 73
              },
              {
                "vocab": "管理",
                "furigana": "かんり",
                "meaning_vi": "quản lý",
                "meaning_en": "manage",
                "examples": [
                  {
                    "example_text": "私の仕事は｛ビル/駐車場/公園…｝の管理だ。",
                    "furigana": "私（わたし）しごとちゅうしゃじょうこうえんかんりだ。",
                    "meaning_vi": "",
                    "meaning_en": "My job is to manage buildings/parks/parks..."
                  }
                ],
                "lesson_number": 73
              },
              {
                "vocab": "行方(不明)",
                "furigana": "ゆくえ(ふめい)",
                "meaning_vi": "Nơi ở (không xác định)",
                "meaning_en": "Residence (unknown)",
                "examples": [
                  {
                    "example_text": "娘が家でした。今、行方を探しているところだ。",
                    "furigana": "娘（むすめ）いえいまゆくえさがしているところだ。",
                    "meaning_vi": "Con gái ra khỏi nhà bây giờ đang truy tìm tung tích.",
                    "meaning_en": "My daughter was at home. I'm currently looking for where it goes."
                  }
                ],
                "lesson_number": 73
              },
              {
                "vocab": "端",
                "furigana": "はし",
                "meaning_vi": "kết thúc",
                "meaning_en": "end",
                "examples": [
                  {
                    "example_text": "道の端を歩く。",
                    "furigana": "道（みち）はしあるく。",
                    "meaning_vi": "Đi bộ ở cạnh đường.",
                    "meaning_en": "Walking along the edge of the road."
                  }
                ],
                "lesson_number": 73
              },
              {
                "vocab": "場",
                "furigana": "じょう",
                "meaning_vi": "cánh đồng",
                "meaning_en": "field",
                "examples": [
                  {
                    "example_text": "山田さんは、高橋さんの申し出をその場で断った。",
                    "furigana": "山田（やまだ）たかはしもうでばことわった。",
                    "meaning_vi": "Yamada đã từ chối tại nơi đề nghị của Takahashi.",
                    "meaning_en": "Yamada declined Takahashi's offer on the spot."
                  }
                ],
                "lesson_number": 73
              },
              {
                "vocab": "分野",
                "furigana": "ぶんや",
                "meaning_vi": "Cánh đồng",
                "meaning_en": "Field",
                "examples": [
                  {
                    "example_text": "私の専門分野は会計学だ。",
                    "furigana": "私（わたし）せんもんぶんやかいけいがくだ。",
                    "meaning_vi": "Lĩnh vực chuyên môn của tôi là kế toán.",
                    "meaning_en": "My specialty is accounting."
                  }
                ],
                "lesson_number": 73
              },
              {
                "vocab": "需要",
                "furigana": "じゅよう",
                "meaning_vi": "nhu cầu",
                "meaning_en": "demand",
                "examples": [
                  {
                    "example_text": "物の値段には、需要と供給の関係が影響している。",
                    "furigana": "物（もの）ねだんじゅようきょうきゅうかんけいえいきょうしている。",
                    "meaning_vi": "Đối với giá cả đồ vật nó ảnh hưởng đến mối quan hệ giữa nhu cầu và cung cấp.",
                    "meaning_en": "The relationship between supply and demand has an impact on the price of goods."
                  }
                ],
                "lesson_number": 73
              },
              {
                "vocab": "供給",
                "furigana": "きょうきゅう",
                "meaning_vi": "cung cấp",
                "meaning_en": "provide",
                "examples": [
                  {
                    "example_text": "夏の電力の供給が不足しがちだ。",
                    "furigana": "夏（なつ）でんりょくきょうきゅうふそくしがちだ。",
                    "meaning_vi": "Sự cung cấp điện vào mùa hè thường thiếu.",
                    "meaning_en": "There is a tendency for a shortage of electricity supply in the summer."
                  }
                ],
                "lesson_number": 73
              },
              {
                "vocab": "物資",
                "furigana": "ぶっし",
                "meaning_vi": "Nguyên vật liệu",
                "meaning_en": "Raw material",
                "examples": [
                  {
                    "example_text": "内戦中のこの国は生活物資がひどく欠乏している。",
                    "furigana": "内戦中（ないせんちゅう）くにせいかつぶっしけつぼうしている。",
                    "meaning_vi": "Đất nước này trong thời kì chiến tranh đời sống vật chất thiếu thốn nghiêm trọng.",
                    "meaning_en": "During the civil war, this country is extremely scarce in its daily supplies."
                  }
                ],
                "lesson_number": 73
              },
              {
                "vocab": "用途",
                "furigana": "ようと",
                "meaning_vi": "sử dụng",
                "meaning_en": "use",
                "examples": [
                  {
                    "example_text": "海外のスーパーには、用途の分からない道具がたくさん並んでいた。",
                    "furigana": "海外（かいがい）ようとわどうぐならんでいた。",
                    "meaning_vi": "Ở siêu thị nước ngoài, sếp rất nhiều đồ không biết cách sử dụng.",
                    "meaning_en": "Overseas supermarkets were lined with a lot of tools that were hard to understand."
                  }
                ],
                "lesson_number": 73
              },
              {
                "vocab": "関連",
                "furigana": "かんれん",
                "meaning_vi": "sự liên quan",
                "meaning_en": "involvement",
                "examples": [
                  {
                    "example_text": "この二つの事件に関連があるかどうか調べてみよう。",
                    "furigana": "この二（ふた）じけんかんれんしらべてみよう。",
                    "meaning_vi": "Hãy điều tra để biết xem hai vụ án này có mối liên quan hay không.",
                    "meaning_en": "Let's find out if there is any connection between these two cases."
                  }
                ],
                "lesson_number": 73
              },
              {
                "vocab": "消耗",
                "furigana": "しょうもう",
                "meaning_vi": "Sự tiêu thụ",
                "meaning_en": "Consumption",
                "examples": [
                  {
                    "example_text": "最近コピーの量が増えて、紙の消耗が厳しい。",
                    "furigana": "最近（さいきん）りょうふかみしょうもうきびしい。",
                    "meaning_vi": "Gần đây lượng phô tô tăng lên nên tiêu hao giấy rất nhiều.",
                    "meaning_en": "The amount of copies has increased recently, and paper wears out quite a bit."
                  }
                ],
                "lesson_number": 74
              },
              {
                "vocab": "欠陥",
                "furigana": "けっかん",
                "meaning_vi": "khuyết điểm",
                "meaning_en": "defect",
                "examples": [
                  {
                    "example_text": "新発売の車のブレーキに欠陥が見つかり、回収されることになった。",
                    "furigana": "新発売（しんはつばい）くるまけっかんみかいしゅうされることになった。",
                    "meaning_vi": "Phát hiện khuyết điểm ở phanh của xe ô tô kiểu mới đã đưa vào sửa chữa.",
                    "meaning_en": "A defect was found in the brakes of the newly released car and was recovered."
                  }
                ],
                "lesson_number": 74
              },
              {
                "vocab": "予備",
                "furigana": "よび",
                "meaning_vi": "dự phòng",
                "meaning_en": "preventive",
                "examples": [
                  {
                    "example_text": "予備の電池を買っておいた。",
                    "furigana": "予備（よび）でんちかっておいた。",
                    "meaning_vi": "Mua sẵn pin dự phòng.",
                    "meaning_en": "I bought some spare batteries."
                  }
                ],
                "lesson_number": 74
              },
              {
                "vocab": "付属",
                "furigana": "ふぞく",
                "meaning_vi": "Bao gồm",
                "meaning_en": "Include",
                "examples": [
                  {
                    "example_text": "大きな工場ができ、それに付属して保育園も作られた。",
                    "furigana": "大（おお）こうじょうふぞくほいくえんつくられた。",
                    "meaning_vi": "Sau khi thành lập công ty lớn, dựa vào nó để xây dựng nhà trẻ.",
                    "meaning_en": "A large factory was built, and a nursery was also built to accompany it."
                  }
                ],
                "lesson_number": 74
              },
              {
                "vocab": "手当",
                "furigana": "てあて",
                "meaning_vi": "phụ cấp",
                "meaning_en": "allowance",
                "examples": [
                  {
                    "example_text": "けがの手当てをする。",
                    "furigana": "けがの手当（てあ）てをする。",
                    "meaning_vi": "Điều trị vết thương.",
                    "meaning_en": "Take care of injuries."
                  }
                ],
                "lesson_number": 74
              },
              {
                "vocab": "元",
                "furigana": "もと",
                "meaning_vi": "Yuan",
                "meaning_en": "Yuan",
                "examples": [
                  {
                    "example_text": "「使ったものは元に戻しておいてください」",
                    "furigana": "「使（つか）もともどしておいてください」",
                    "meaning_vi": "Hãy mang đồ đã dùng về lại chỗ cũ.",
                    "meaning_en": "\"Please put back what you used.\""
                  }
                ],
                "lesson_number": 74
              },
              {
                "vocab": "面",
                "furigana": "めん",
                "meaning_vi": "Mì",
                "meaning_en": "Noodles",
                "examples": [
                  {
                    "example_text": "この踊りは面を着けて踊る。",
                    "furigana": "この踊（おど）めんつおどる。",
                    "meaning_vi": "Điệu nhảy này gắn thêm mặt nạ để nhảy.",
                    "meaning_en": "This dance is performed with faces on."
                  }
                ],
                "lesson_number": 74
              },
              {
                "vocab": "説",
                "furigana": "せつ",
                "meaning_vi": "Lý thuyết",
                "meaning_en": "Theory",
                "examples": [
                  {
                    "example_text": "人類はアフリカから始まったという説がある。",
                    "furigana": "人類（じんるい）はじせつがある。",
                    "meaning_vi": "Có thuyết cho rằng con người bắt nguồn từ châu Phi.",
                    "meaning_en": "There is a theory that humanity began in Africa."
                  }
                ],
                "lesson_number": 74
              },
              {
                "vocab": "差",
                "furigana": "さ",
                "meaning_vi": "Sự khác biệt",
                "meaning_en": "Difference",
                "examples": [
                  {
                    "example_text": "テストの結果は、どの学生もほとんど差がなかった。",
                    "furigana": "テストの結果（けっか）がくせいさがなかった。",
                    "meaning_vi": "Kết quả của bài kiểm tra hầu như không có sự khác biệt giữa các học sinh.",
                    "meaning_en": "The results of the test were almost unchanged for all students."
                  }
                ],
                "lesson_number": 74
              },
              {
                "vocab": "間",
                "furigana": "あいだ",
                "meaning_vi": "giữa",
                "meaning_en": "between",
                "examples": [
                  {
                    "example_text": "私は来日してまだ間がない。",
                    "furigana": "私（わたし）らいにちまがない。",
                    "meaning_vi": "Sau khi tôi đến Nhật vẫn chưa có thời gian.",
                    "meaning_en": "I've come to Japan yet."
                  }
                ],
                "lesson_number": 74
              },
              {
                "vocab": "分",
                "furigana": "ぶん",
                "meaning_vi": "điểm",
                "meaning_en": "point",
                "examples": [
                  {
                    "example_text": "お菓子を、弟の分まで食べてしまって怒られた。",
                    "furigana": "お菓子（かし）おとうとぶんたおこられた。",
                    "meaning_vi": "Tôi ăn mất phần kẹo của em trai tôi nên bị nó nổi nóng.",
                    "meaning_en": "I was scolded for eating sweets for my younger brother."
                  }
                ],
                "lesson_number": 74
              },
              {
                "vocab": "筋",
                "furigana": "すじ",
                "meaning_vi": "logic",
                "meaning_en": "logic",
                "examples": [
                  {
                    "example_text": "昔読んだ小説の筋を忘れてしまった。",
                    "furigana": "昔（むかし）よしょうせつすじわすれてしまった。",
                    "meaning_vi": "Tôi đã quên mất cốt truyện tiểu thuyết đã đọc lúc xưa.",
                    "meaning_en": "I forgot the plot of a novel I read a long time ago."
                  }
                ],
                "lesson_number": 75
              },
              {
                "vocab": "余裕",
                "furigana": "よゆう",
                "meaning_vi": "phòng",
                "meaning_en": "room",
                "examples": [
                  {
                    "example_text": "車を買い替えたいが、その余裕がない。",
                    "furigana": "車（くるま）かかよゆうがない。",
                    "meaning_vi": "Muốn mua xe mới nhưng không thừa tiền.",
                    "meaning_en": "I want to buy a new car, but I don't have the time to do that."
                  }
                ],
                "lesson_number": 75
              },
              {
                "vocab": "負担",
                "furigana": "ふたん",
                "meaning_vi": "trọng tải",
                "meaning_en": "load",
                "examples": [
                  {
                    "example_text": "「送料は当社負担とします」",
                    "furigana": "「送料（そうりょう）とうしゃふたんとします」",
                    "meaning_vi": "Công ty chúng tôi sẽ chịu chi phí gửi.",
                    "meaning_en": "\"We will cover the shipping costs.\""
                  }
                ],
                "lesson_number": 75
              },
              {
                "vocab": "保証",
                "furigana": "ほしょう",
                "meaning_vi": "bảo đảm",
                "meaning_en": "warrant",
                "examples": [
                  {
                    "example_text": "この商品には1年間の保証が付いている。",
                    "furigana": "この商品（しょうひん）ねんかんほしょうついている。",
                    "meaning_vi": "Sản phẩm này có 1 năm bảo hành.",
                    "meaning_en": "This product comes with a one-year warranty."
                  }
                ],
                "lesson_number": 75
              },
              {
                "vocab": "催促",
                "furigana": "さいそく",
                "meaning_vi": "Thúc giục",
                "meaning_en": "Urge",
                "examples": [
                  {
                    "example_text": "貸した金をかえすよう、催促の電話をかけた。",
                    "furigana": "貸（か）かねさいそくでんわをかけた。",
                    "meaning_vi": "Tôi đã gọi điện để nhắc trả tiền đã mượn.",
                    "meaning_en": "I called to ask for the money I had lent."
                  }
                ],
                "lesson_number": 75
              },
              {
                "vocab": "成立",
                "furigana": "せいりつ",
                "meaning_vi": "Thành lập",
                "meaning_en": "Establish",
                "examples": [
                  {
                    "example_text": "｛国家/法律/予算/条約/契約/商談…｝が成立する。",
                    "furigana": "｛国家（こっか）ほうりつよさんじょうやくけいやくしょうだんせいりつする。",
                    "meaning_vi": "",
                    "meaning_en": "{Nation/Law/Budget/Treaty/Contract/Business Consult...} is concluded."
                  }
                ],
                "lesson_number": 75
              },
              {
                "vocab": "矛盾",
                "furigana": "むじゅん",
                "meaning_vi": "mâu thuẫn",
                "meaning_en": "conflict",
                "examples": [
                  {
                    "example_text": "田中さん言っていることとしていることが矛盾している。",
                    "furigana": "田中（たなか）いむじゅんしている。",
                    "meaning_vi": "Những lời anh Tanaka nói và làm mâu thuẫn với nhau.",
                    "meaning_en": "What Tanaka is saying is contradictory."
                  }
                ],
                "lesson_number": 75
              },
              {
                "vocab": "存在",
                "furigana": "そんざい",
                "meaning_vi": "hiện hữu",
                "meaning_en": "exist",
                "examples": [
                  {
                    "example_text": "世界にはUFOの存在を信じる人が多くいる。",
                    "furigana": "世界（せかい）そんざいしんひとおおくいる。",
                    "meaning_vi": "Nhiều người tin rằng có sự tồn tại của UFO trong thế giới.",
                    "meaning_en": "There are many people around the world who believe in the existence of UFOs."
                  }
                ],
                "lesson_number": 75
              },
              {
                "vocab": "編む",
                "furigana": "あむ",
                "meaning_vi": "Đan",
                "meaning_en": "Knit",
                "examples": [
                  {
                    "example_text": "｛毛糸でセーターを/竹でかごを｝編む。",
                    "furigana": "｛毛糸（けいと）たけあむ。",
                    "meaning_vi": "Đan áo len bằng sợi len/ đan rổ bằng tre.",
                    "meaning_en": "Knit a sweater with yarn/bamboo basket."
                  }
                ],
                "lesson_number": 76
              },
              {
                "vocab": "縫う",
                "furigana": "ぬう",
                "meaning_vi": "may",
                "meaning_en": "may",
                "examples": [
                  {
                    "example_text": "雑巾を縫う。",
                    "furigana": "雑巾（ぞうきん）ぬう。",
                    "meaning_vi": "Khâu khăn.",
                    "meaning_en": "Sew a rag."
                  }
                ],
                "lesson_number": 76
              },
              {
                "vocab": "指す",
                "furigana": "さす",
                "meaning_vi": "Điểm",
                "meaning_en": "Point",
                "examples": [
                  {
                    "example_text": "時計の針が12時を指している。",
                    "furigana": "時計（とけい）はりじさしている。",
                    "meaning_vi": "Kim đồng hồ chỉ vào 12 giờ.",
                    "meaning_en": "The clock is pointing to 12 o'clock."
                  }
                ],
                "lesson_number": 76
              },
              {
                "vocab": "示す",
                "furigana": "しめす",
                "meaning_vi": "trình diễn",
                "meaning_en": "demonstration",
                "examples": [
                  {
                    "example_text": "このビルに入るには身分証を示さなければならない。",
                    "furigana": "このビルに入（はい）みぶんしょうしめさなければならない。",
                    "meaning_vi": "Để vào tòa nhà này cần phải xuất trình giấy tờ tùy thân.",
                    "meaning_en": "You must provide your ID to enter this building."
                  }
                ],
                "lesson_number": 76
              },
              {
                "vocab": "注ぐ",
                "furigana": "そそぐ",
                "meaning_vi": "đổ",
                "meaning_en": "pour",
                "examples": [
                  {
                    "example_text": "この川は太平洋に注いでいる。",
                    "furigana": "この川（かわ）たいへいようそそいでいる。",
                    "meaning_vi": "Con sông này đổ ra Thái Bình Dương.",
                    "meaning_en": "This river flows into the Pacific Ocean."
                  }
                ],
                "lesson_number": 76
              },
              {
                "vocab": "濯ぐ",
                "furigana": "そそぐ",
                "meaning_vi": "rửa sạch",
                "meaning_en": "rinse",
                "examples": [
                  {
                    "example_text": "洗剤で洗った洗濯物を水ですすぐ。",
                    "furigana": "洗剤（せんざい）あらせんたくものみずですすぐ。",
                    "meaning_vi": "Xã áo quần đã giặt bằng xà phòng bằng nước.",
                    "meaning_en": "Rinse the laundry washed with detergent with water."
                  }
                ],
                "lesson_number": 76
              },
              {
                "vocab": "触る",
                "furigana": "さわる",
                "meaning_vi": "chạm",
                "meaning_en": "touch",
                "examples": [
                  {
                    "example_text": "切れた電線に触ると危ない。",
                    "furigana": "切（き）でんせんさわあぶない。",
                    "meaning_vi": "Sờ vào đường dây điện bị đứt là nguy hiểm.",
                    "meaning_en": "It's dangerous to touch a broken electric wire."
                  }
                ],
                "lesson_number": 76
              },
              {
                "vocab": "触れる",
                "furigana": "ふれる",
                "meaning_vi": "chạm",
                "meaning_en": "touch",
                "examples": [
                  {
                    "example_text": "「展示品にお手を触れないでください」",
                    "furigana": "「展示（てんじ）ひんてふれないでください」",
                    "meaning_vi": "Xin đừng sờ vào những vật trưng bày.",
                    "meaning_en": "\"Please do not touch the exhibits.\""
                  }
                ],
                "lesson_number": 76
              },
              {
                "vocab": "抱く",
                "furigana": "だく",
                "meaning_vi": "Tôi sẽ nắm lấy",
                "meaning_en": "I will take",
                "examples": [
                  {
                    "example_text": "私は大きな夢を抱いて留学した。",
                    "furigana": "私（わたし）おおゆめだりゅうがくした。",
                    "meaning_vi": "Tôi ôm ấp một giấc mơ lớn và đã đi du học.",
                    "meaning_en": "I studied abroad with big dreams."
                  }
                ],
                "lesson_number": 76
              },
              {
                "vocab": "抱える",
                "furigana": "かかえる",
                "meaning_vi": "Giữ nó",
                "meaning_en": "Hold it",
                "examples": [
                  {
                    "example_text": "その人は腕に大きな荷物を抱えていた。",
                    "furigana": "その人（ひと）うでおおにもつかかえていた。",
                    "meaning_vi": "Người ấy ôm trên tay hành lí lớn.",
                    "meaning_en": "The person had a large bag in his arm."
                  }
                ],
                "lesson_number": 77
              },
              {
                "vocab": "担ぐ",
                "furigana": "かつぐ",
                "meaning_vi": "Mang",
                "meaning_en": "Carry",
                "examples": [
                  {
                    "example_text": "荷物を肩に担ぐ。",
                    "furigana": "荷物（にもつ）かたかつぐ。",
                    "meaning_vi": "Vác hành lí trên vai.",
                    "meaning_en": "Carry the luggage on your shoulder."
                  }
                ],
                "lesson_number": 77
              },
              {
                "vocab": "剥がす",
                "furigana": "はがす",
                "meaning_vi": "Bóc nó ra",
                "meaning_en": "Peel off",
                "examples": [
                  {
                    "example_text": "プレゼント用に買ったクッキーの値札を剥がす。",
                    "furigana": "プレゼント用（よう）かねふだはがす。",
                    "meaning_vi": "Bóc phiếu ghi giá của cái bánh đã mua làm quà.",
                    "meaning_en": "Remove the price tag of the cookie you bought as a gift."
                  }
                ],
                "lesson_number": 77
              },
              {
                "vocab": "描く",
                "furigana": "かく",
                "meaning_vi": "vẽ tranh",
                "meaning_en": "draw a picture",
                "examples": [
                  {
                    "example_text": "この画家はよく町の風景を描く。",
                    "furigana": "この画家（がか）まちふうけいえがく。",
                    "meaning_vi": "Nhà họa sĩ đó thường vẽ phong cảnh của thành phố.",
                    "meaning_en": "This painter often paints townscapes."
                  }
                ],
                "lesson_number": 77
              },
              {
                "vocab": "砕ける",
                "furigana": "くだける",
                "meaning_vi": "Nó có thể bị nghiền nát",
                "meaning_en": "It can be crushed",
                "examples": [
                  {
                    "example_text": "落ちたカップがこなごなに砕けた。",
                    "furigana": "落（お）くだけた。",
                    "meaning_vi": "Cái cốc bị rớt vỡ tan tành.",
                    "meaning_en": "The fallen cup was shattered into Konona."
                  }
                ],
                "lesson_number": 77
              },
              {
                "vocab": "砕く",
                "furigana": "くだく",
                "meaning_vi": "Smash",
                "meaning_en": "Smash",
                "examples": [
                  {
                    "example_text": "氷を小さく砕いてグラスに入れる。",
                    "furigana": "氷（こおり）ちいくだいれる。",
                    "meaning_vi": "Làm nhỏ đá và bỏ vào cốc thủy tinh.",
                    "meaning_en": "Crush the ice in small pieces and place it in a glass."
                  }
                ],
                "lesson_number": 77
              },
              {
                "vocab": "塞がる",
                "furigana": "ふさがる",
                "meaning_vi": "Nó bị chặn",
                "meaning_en": "It is blocked",
                "examples": [
                  {
                    "example_text": "荷物で戸口がふさがっている。",
                    "furigana": "荷物（にもつ）とぐちがふさがっている。",
                    "meaning_vi": "Hành lí trần ngập ở cửa ra vào.",
                    "meaning_en": "The doorway is blocked with luggage."
                  }
                ],
                "lesson_number": 77
              },
              {
                "vocab": "塞ぐ",
                "furigana": "ふさぐ",
                "meaning_vi": "Đóng lên",
                "meaning_en": "Closed",
                "examples": [
                  {
                    "example_text": "道路の穴をセメントでふさぐ。",
                    "furigana": "道路（どうろ）あなをセメントでふさぐ。",
                    "meaning_vi": "Bịt kín lỗ trên đường bằng xi măng.",
                    "meaning_en": "Cement the hole in the road."
                  }
                ],
                "lesson_number": 77
              },
              {
                "vocab": "避ける",
                "furigana": "さける",
                "meaning_vi": "tránh xa",
                "meaning_en": "stay away",
                "examples": [
                  {
                    "example_text": "水たまりを避けて歩いた。",
                    "furigana": "水（みず）さあるいた。",
                    "meaning_vi": "Đi bộ tránh những vũng nước.",
                    "meaning_en": "I walked away from the puddles."
                  }
                ],
                "lesson_number": 77
              },
              {
                "vocab": "避ける",
                "furigana": "さける",
                "meaning_vi": "tránh xa",
                "meaning_en": "stay away",
                "examples": [
                  {
                    "example_text": "飛んでくるボールをよけようとして転んでしまった。",
                    "furigana": "飛（と）ころんでしまった。",
                    "meaning_vi": "Để tránh quả bóng đang bay tới nên bị ngã mất.",
                    "meaning_en": "I fell while trying to dodge the flying ball."
                  }
                ],
                "lesson_number": 77
              },
              {
                "vocab": "逸れる",
                "furigana": "それる",
                "meaning_vi": "Tôi tắt",
                "meaning_en": "I turn off",
                "examples": [
                  {
                    "example_text": "台風の進路が北に逸れた。",
                    "furigana": "台風（たいふう）しんろきたそれた。",
                    "meaning_vi": "Đường đi của bão chuyển sang phía bắc.",
                    "meaning_en": "The typhoon's path has shifted north."
                  }
                ],
                "lesson_number": 77
              },
              {
                "vocab": "逸らす",
                "furigana": "そらす",
                "meaning_vi": "Làm chệch hướng",
                "meaning_en": "Dislocate",
                "examples": [
                  {
                    "example_text": "「話をそらさないでちゃんと答えてください」",
                    "furigana": "「話（はなし）こたえてください」",
                    "meaning_vi": "Đừng lảng tránh câu chuyện nữa hãy trả lời nghiêm túc đi.",
                    "meaning_en": "\"Don't distract you, please answer properly.\""
                  }
                ],
                "lesson_number": 77
              },
              {
                "vocab": "見つめる",
                "furigana": "みつめる",
                "meaning_vi": "Nhìn chằm chằm",
                "meaning_en": "Stare",
                "examples": [
                  {
                    "example_text": "子供は母親の写真をじっと見つめていた。",
                    "furigana": "子供（こども）ははおやしゃしんみつめていた。",
                    "meaning_vi": "Đứa trẻ nhìn chằm chằm vào bức ảnh của người mẹ.",
                    "meaning_en": "The child stared at the photo of his mother."
                  }
                ],
                "lesson_number": 78
              },
              {
                "vocab": "眺める",
                "furigana": "ながめる",
                "meaning_vi": "Nhìn vào nó",
                "meaning_en": "Look at it",
                "examples": [
                  {
                    "example_text": "母はベンチに座って、子供が遊んでいるのをじっと眺めていた。",
                    "furigana": "母（はは）すわこどもあそながめていた。",
                    "meaning_vi": "Người mẹ ngồi trên ghế dài và nhìn ngắm đứa con đang vui chơi.",
                    "meaning_en": "My mother sat on the bench and stared at the child playing."
                  }
                ],
                "lesson_number": 78
              },
              {
                "vocab": "見合わせる",
                "furigana": "みあわせる",
                "meaning_vi": "Đàn áp",
                "meaning_en": "Suppress",
                "examples": [
                  {
                    "example_text": "不思議な現象を見て、二人は顔を見合わせた。",
                    "furigana": "不思議（ふしぎ）げんしょうみふたりかおみあわせた。",
                    "meaning_vi": "Nhìn hiện tượng quá kì lạ, hai người nhìn nhau.",
                    "meaning_en": "Seeing this strange phenomenon, the two looked at each other."
                  }
                ],
                "lesson_number": 78
              },
              {
                "vocab": "見送る",
                "furigana": "みおくる",
                "meaning_vi": "Tôi sẽ gửi nó đi",
                "meaning_en": "I will send it",
                "examples": [
                  {
                    "example_text": "客を玄関まで見送った。",
                    "furigana": "客（きゃく）げんかんみおくった。",
                    "meaning_vi": "Tiễn khách ở hành lang.",
                    "meaning_en": "I saw the guest off to the front door."
                  }
                ],
                "lesson_number": 78
              },
              {
                "vocab": "訪れる",
                "furigana": "おとずれる",
                "meaning_vi": "thăm nom",
                "meaning_en": "visit",
                "examples": [
                  {
                    "example_text": "北国にも、ようやく春が訪れた。",
                    "furigana": "北国（きたぐに）はるおとずれた。",
                    "meaning_vi": "Cuối cùng thì mùa xuân cũng ghé thăm miền bắc đất nước.",
                    "meaning_en": "Spring has finally arrived in the northern part of the country."
                  }
                ],
                "lesson_number": 78
              },
              {
                "vocab": "引き返す",
                "furigana": "ひきかえす",
                "meaning_vi": "Quay lại",
                "meaning_en": "Come back",
                "examples": [
                  {
                    "example_text": "定期を忘れたのに気づいて、うちに引き返した。",
                    "furigana": "定期（ていき）わすきひかえした。",
                    "meaning_vi": "Nhận ra là quên vé tháng nên đã quay về nhà lấy.",
                    "meaning_en": "I realized that I had forgotten my regular schedule, so I turned back to my house."
                  }
                ],
                "lesson_number": 78
              },
              {
                "vocab": "去る",
                "furigana": "さる",
                "meaning_vi": "Rời khỏi",
                "meaning_en": "Leave",
                "examples": [
                  {
                    "example_text": "冬に去って春になった。",
                    "furigana": "冬（ふゆ）さはるになった。",
                    "meaning_vi": "Mùa đông trôi qua mùa xuân đã đến.",
                    "meaning_en": "It's gone in winter and spring is here."
                  }
                ],
                "lesson_number": 78
              },
              {
                "vocab": "啜る",
                "furigana": "すする",
                "meaning_vi": "Nhâm nhi",
                "meaning_en": "Sip",
                "examples": [
                  {
                    "example_text": "そばを音を立ててすする。",
                    "furigana": "そばを音（おと）たててすする。",
                    "meaning_vi": "Húp mì soba phát ra tiếng.",
                    "meaning_en": "Slurp the soba noodles with a loud noise."
                  }
                ],
                "lesson_number": 78
              },
              {
                "vocab": "味わう",
                "furigana": "あじわう",
                "meaning_vi": "nếm",
                "meaning_en": "taste",
                "examples": [
                  {
                    "example_text": "久しぶりにふるさとの料理をゆっくり味わうことができた。",
                    "furigana": "久（ひさ）りょうりあじわうことができた。",
                    "meaning_vi": "Lâu lắm rồi mới có thể thưởng thức món ăn quê hương.",
                    "meaning_en": "It's been a while since I was able to enjoy my hometown's dishes slowly."
                  }
                ],
                "lesson_number": 78
              },
              {
                "vocab": "匂う",
                "furigana": "におう",
                "meaning_vi": "mùi",
                "meaning_en": "smell",
                "examples": [
                  {
                    "example_text": "生ごみに匂う。",
                    "furigana": "生（なま）におう。",
                    "meaning_vi": "Rác sinh hoạt bốc mùi.",
                    "meaning_en": "Smells like food waste."
                  }
                ],
                "lesson_number": 78
              },
              {
                "vocab": "飢える",
                "furigana": "かつえる",
                "meaning_vi": "Tôi đói",
                "meaning_en": "I'm hungry",
                "examples": [
                  {
                    "example_text": "戦争中は食べ物がなく、皆が飢えていた。",
                    "furigana": "戦争中（せんそうちゅう）たものみなうえていた。",
                    "meaning_vi": "Đang chiến tranh không có thức ăn nên mọi người ai cũng đói khát.",
                    "meaning_en": "During the war, there was no food and everyone was hungry."
                  }
                ],
                "lesson_number": 78
              },
              {
                "vocab": "問う",
                "furigana": "とう",
                "meaning_vi": "Hỏi",
                "meaning_en": "Ask",
                "examples": [
                  {
                    "example_text": "あんなことを言った彼の本心を問いたい。",
                    "furigana": "あんなことを言（い）かれほんしんといたい。",
                    "meaning_vi": "Tôi muốn hỏi thật tâm của anh ấy, người đã nói những lời như thế.",
                    "meaning_en": "I want to ask him what he really thinks about when he said that."
                  }
                ],
                "lesson_number": 78
              },
              {
                "vocab": "語る",
                "furigana": "かたる",
                "meaning_vi": "Nói chuyện",
                "meaning_en": "Talk",
                "examples": [
                  {
                    "example_text": "被害者が事件の状況を語った。",
                    "furigana": "被害（ひがい）しゃじけんじょうきょうかたった。",
                    "meaning_vi": "Người bị hại nói về tình trạng của vụ án.",
                    "meaning_en": "The victim spoke about the circumstances of the incident."
                  }
                ],
                "lesson_number": 78
              },
              {
                "vocab": "誓う",
                "furigana": "ちかう",
                "meaning_vi": "thề",
                "meaning_en": "swear",
                "examples": [
                  {
                    "example_text": "将来は必ず医者になって病気の人を救おうと心に誓った。",
                    "furigana": "将来（しょうらい）かならいしゃびょうきひとすくこころちかった。",
                    "meaning_vi": "Tôi thề với lòng rằng tương lai nhất định trở thành bác sĩ cứu giúp bệnh tình cho con người.",
                    "meaning_en": "I vowed to become a doctor in the future to save sick people."
                  }
                ],
                "lesson_number": 79
              },
              {
                "vocab": "支える",
                "furigana": "ささえる",
                "meaning_vi": "ủng hộ",
                "meaning_en": "donate",
                "examples": [
                  {
                    "example_text": "つえで体を支えて歩く。",
                    "furigana": "つえで体（からだ）ささあるく。",
                    "meaning_vi": "Chống cơ thể và đi bằng cây gậy.",
                    "meaning_en": "I walk with my body supported by the staff."
                  }
                ],
                "lesson_number": 79
              },
              {
                "vocab": "費やす",
                "furigana": "ついやす",
                "meaning_vi": "tiêu",
                "meaning_en": "pepper",
                "examples": [
                  {
                    "example_text": "週末の時間のほとんどを趣味に費やしている。",
                    "furigana": "週末（しゅうまつ）じかんしゅみついやしている。",
                    "meaning_vi": "Hầu hết thời gian rảnh vào cuối tuần tôi dùng cho sở thích của mình.",
                    "meaning_en": "I spend most of my weekend time on hobbies."
                  }
                ],
                "lesson_number": 79
              },
              {
                "vocab": "用いる",
                "furigana": "もちいる",
                "meaning_vi": "Đã sử dụng",
                "meaning_en": "Used",
                "examples": [
                  {
                    "example_text": "携帯電話は今や広く用いられている。",
                    "furigana": "携帯（けいたい）でんわいまひろもちいられている。",
                    "meaning_vi": "Điện thoại di động đang được sử dụng rộng rãi hiện nay.",
                    "meaning_en": "Mobile phones are now widely used."
                  }
                ],
                "lesson_number": 79
              },
              {
                "vocab": "改まる",
                "furigana": "あらたまる",
                "meaning_vi": "Cải cách",
                "meaning_en": "Reform",
                "examples": [
                  {
                    "example_text": "あの学生は何度注意しても態度が改まらない。",
                    "furigana": "あの学生（がくせい）なんどちゅういたいどあらたまらない。",
                    "meaning_vi": "Học sinh đó dù nhiều lần bị nhắc nhở nhưng không thay đổi thái độ.",
                    "meaning_en": "No matter how many times I warn that student, his attitude never changes."
                  }
                ],
                "lesson_number": 79
              },
              {
                "vocab": "改める",
                "furigana": "あらためる",
                "meaning_vi": "thay đổi",
                "meaning_en": "change",
                "examples": [
                  {
                    "example_text": "「その遅刻癖を改めないと、信用を無くしますよ」",
                    "furigana": "「その遅刻（ちこく）ぐせあらたしんようなくしますよ」",
                    "meaning_vi": "Nếu anh không thay đổi thói quen đi trễ đó đi thì sẽ mất sự tín dụng đấy.",
                    "meaning_en": "\"If you don't change that habit of being late, you'll lose your trust.\""
                  }
                ],
                "lesson_number": 79
              },
              {
                "vocab": "収まる・納まる・治まる",
                "furigana": "おさまる・おさまる・おさまる",
                "meaning_vi": "Nó phù hợp, phù hợp và định cư",
                "meaning_en": "It is suitable, suitable and settled",
                "examples": [
                  {
                    "example_text": "本が増えて、本棚に収まらなくなった。",
                    "furigana": "本（ほん）ふほんだなおさまらなくなった。",
                    "meaning_vi": "Sách tăng lên, giá sách không chứa thêm sách nữa.",
                    "meaning_en": "The number of books has increased and it can no longer be fitted on the bookshelf."
                  }
                ],
                "lesson_number": 79
              },
              {
                "vocab": "収める・納める・治める",
                "furigana": "おさめる・おさめる・おさめる",
                "meaning_vi": "Để lưu trữ, lưu trữ, để kiểm soát",
                "meaning_en": "To store, archive, to control",
                "examples": [
                  {
                    "example_text": "貴重品を金庫に収めた。",
                    "furigana": "貴重品（きちょうひん）きんこおさめた。",
                    "meaning_vi": "Cất những thứ quý giá vào trong két sắt.",
                    "meaning_en": "I put my valuables in the safe."
                  }
                ],
                "lesson_number": 79
              },
              {
                "vocab": "沿う・添う",
                "furigana": "そう・そう",
                "meaning_vi": "Cùng nhau và cùng nhau",
                "meaning_en": "Together and together",
                "examples": [
                  {
                    "example_text": "駅を出て線路に沿って歩いた。",
                    "furigana": "駅（えき）でせんろそあるいた。",
                    "meaning_vi": "Rời khỏi nhà ga, đi bộ men theo con đường.",
                    "meaning_en": "I left the station and walked along the tracks."
                  }
                ],
                "lesson_number": 79
              },
              {
                "vocab": "添える",
                "furigana": "そえる",
                "meaning_vi": "Thêm nó",
                "meaning_en": "Add it",
                "examples": [
                  {
                    "example_text": "花束にカードを添えて送る。",
                    "furigana": "花束（はなたば）そおくる。",
                    "meaning_vi": "Gửi kèm thiếp với bó hoa.",
                    "meaning_en": "Send a card to a bouquet."
                  }
                ],
                "lesson_number": 79
              },
              {
                "vocab": "兼ねる",
                "furigana": "かねる",
                "meaning_vi": "không thể",
                "meaning_en": "cannot",
                "examples": [
                  {
                    "example_text": "この家は住居と仕事場を兼ねている。",
                    "furigana": "この家（いえ）じゅうきょしごとばかねている。",
                    "meaning_vi": "Ngôi nhà này kiêm cả nơi ở và nơi làm việc.",
                    "meaning_en": "This house serves as a place of residence and work."
                  }
                ],
                "lesson_number": 80
              },
              {
                "vocab": "適する",
                "furigana": "てきする",
                "meaning_vi": "Thích hợp",
                "meaning_en": "Fit",
                "examples": [
                  {
                    "example_text": "キャベツは、冷涼な気候に適した野菜だ。",
                    "furigana": "キャベツは、冷涼（れいりょう）きこうてきやさいだ。",
                    "meaning_vi": "Bắp cải là loại rau thích hợp với thời tiết mát lạnh.",
                    "meaning_en": "Cabbage is a vegetable suitable for cool climates."
                  }
                ],
                "lesson_number": 80
              },
              {
                "vocab": "相当する",
                "furigana": "そうとうする",
                "meaning_vi": "Tương đương",
                "meaning_en": "Equivalent",
                "examples": [
                  {
                    "example_text": "月給の3か月分に相当する指輪を婚約者に送った。",
                    "furigana": "月給（げっきゅう）げつぶんそうとうゆびわこんやくしゃおくった。",
                    "meaning_vi": "Tôi đã gửi chiếc nhẫn cho vị hôn thê tương đương với mức lương 3 tháng.",
                    "meaning_en": "He sent his fiance a ring equivalent to three months' worth of monthly salary."
                  }
                ],
                "lesson_number": 80
              },
              {
                "vocab": "伴う",
                "furigana": "ともなう",
                "meaning_vi": "Cùng với",
                "meaning_en": "With",
                "examples": [
                  {
                    "example_text": "この事件には危険が伴う。",
                    "furigana": "この事件（じけん）きけんともなう。",
                    "meaning_vi": "Vụ án này kèm theo cả sự nguy hiểm.",
                    "meaning_en": "This incident is risky."
                  }
                ],
                "lesson_number": 80
              },
              {
                "vocab": "響く",
                "furigana": "ひびく",
                "meaning_vi": "Nó cộng hưởng",
                "meaning_en": "It resonates",
                "examples": [
                  {
                    "example_text": "このホールは音が良く響く。",
                    "furigana": "このホールは音（おと）よひびく。",
                    "meaning_vi": "Căn hội trường này âm thanh rất vang.",
                    "meaning_en": "This hall resonates well."
                  }
                ],
                "lesson_number": 80
              },
              {
                "vocab": "次ぐ",
                "furigana": "つぐ",
                "meaning_vi": "Kế tiếp",
                "meaning_en": "Next",
                "examples": [
                  {
                    "example_text": "大阪は東京に次ぐ大都市だ。",
                    "furigana": "大阪（おおさか）とうきょうつだいとしだ。",
                    "meaning_vi": "Osaka là thành phố lớn tiếp theo sau Tokyo.",
                    "meaning_en": "Osaka is the second largest city after Tokyo."
                  }
                ],
                "lesson_number": 80
              },
              {
                "vocab": "略す",
                "furigana": "りゃくす",
                "meaning_vi": "Viết tắt",
                "meaning_en": "Acronym",
                "examples": [
                  {
                    "example_text": "国際連合を略して国連と言う。",
                    "furigana": "国際（こくさい）れんごうりゃくこくれんいう。",
                    "meaning_vi": "Liên hợp quốc tế viết tắt là liên hợp quốc.",
                    "meaning_en": "The United Nations is shortened to the United Nations."
                  }
                ],
                "lesson_number": 81
              },
              {
                "vocab": "迫る",
                "furigana": "せまる",
                "meaning_vi": "Đóng",
                "meaning_en": "Close",
                "examples": [
                  {
                    "example_text": "後ろのランナーが前のランナーにだんだん迫ってきた。",
                    "furigana": "後（うし）まえせまってきた。",
                    "meaning_vi": "Người chạy phía sau đã tiến sát người chạy phía trước.",
                    "meaning_en": "The runner behind me gradually approached the runner in front of me."
                  }
                ],
                "lesson_number": 81
              },
              {
                "vocab": "狙う",
                "furigana": "ねらう",
                "meaning_vi": "Mục tiêu cho nó",
                "meaning_en": "Goals for it",
                "examples": [
                  {
                    "example_text": "的を狙って撃つ。",
                    "furigana": "的（まと）ねらうつ。",
                    "meaning_vi": "Tấn công hướng đến mục đích.",
                    "meaning_en": "Shoot and aim for the target."
                  }
                ],
                "lesson_number": 81
              },
              {
                "vocab": "犯す",
                "furigana": "おかす",
                "meaning_vi": "làm",
                "meaning_en": "do",
                "examples": [
                  {
                    "example_text": "罪を犯したら、償わなければならない。",
                    "furigana": "罪（つみ）おかつぐなわなければならない。",
                    "meaning_vi": "Nếu phạm tội thì phải chuộc tội.",
                    "meaning_en": "If you commit a crime, you must pay it."
                  }
                ],
                "lesson_number": 81
              },
              {
                "vocab": "侵す",
                "furigana": "おかす",
                "meaning_vi": "Vi phạm",
                "meaning_en": "Violate",
                "examples": [
                  {
                    "example_text": "他国の領土を侵す。",
                    "furigana": "他国（たこく）りょうどおかす。",
                    "meaning_vi": "Xâm phạm lãnh thổ của nước khác.",
                    "meaning_en": "Invade the territory of other countries."
                  }
                ],
                "lesson_number": 81
              },
              {
                "vocab": "冒す",
                "furigana": "おかす",
                "meaning_vi": "Tôi sẽ lấy nó",
                "meaning_en": "I will take it",
                "examples": [
                  {
                    "example_text": "救援隊は危険を冒して遭難者を救助した。",
                    "furigana": "救援隊（きゅうえんたい）きけんおかそうなんしゃきゅうじょした。",
                    "meaning_vi": "Đội quân cứu trợ xâm nhậm vào vùng nguy hiểm và cứu người bị nạn.",
                    "meaning_en": "The rescue team took risks and rescued the lost."
                  }
                ],
                "lesson_number": 81
              },
              {
                "vocab": "脅す",
                "furigana": "おどす",
                "meaning_vi": "hăm dọa",
                "meaning_en": "threaten",
                "examples": [
                  {
                    "example_text": "ナイフで脅して金を奪う。",
                    "furigana": "ナイフで脅（おど）かねうばう。",
                    "meaning_vi": "Đe dọa bằng dao để cướp đoạt tiền.",
                    "meaning_en": "He threatens him with a knife and steals his money."
                  }
                ],
                "lesson_number": 81
              },
              {
                "vocab": "脅かす",
                "furigana": "おびやかす",
                "meaning_vi": "hăm dọa",
                "meaning_en": "threaten",
                "examples": [
                  {
                    "example_text": "暗いところで突然大声を出して、友達を脅かした。",
                    "furigana": "暗（くら）とつぜんおおごえだともだちおどかした。",
                    "meaning_vi": "Ở nơi tối tăm, bỗng nhiên tôi hét to để hù bạn tôi.",
                    "meaning_en": "He suddenly yelled out loud in the dark, threatening his friend."
                  }
                ],
                "lesson_number": 81
              },
              {
                "vocab": "逆らう",
                "furigana": "さからう",
                "meaning_vi": "Thách thức",
                "meaning_en": "Challenge",
                "examples": [
                  {
                    "example_text": "川の流れに逆らって進む。",
                    "furigana": "川（かわ）ながさかすすむ。",
                    "meaning_vi": "Tiến ngược với dòng chảy của con sông.",
                    "meaning_en": "Go against the flow of the river."
                  }
                ],
                "lesson_number": 81
              },
              {
                "vocab": "妨げる",
                "furigana": "さまたげる",
                "meaning_vi": "Nó cản trở",
                "meaning_en": "It hindries",
                "examples": [
                  {
                    "example_text": "過保護は子供の成長を妨げる。",
                    "furigana": "過保護（かほご）こどもせいちょうさまたげる。",
                    "meaning_vi": "Sự chăm sóc quá mức sẽ ngăn chặn sự trưởng thành của con cái.",
                    "meaning_en": "Overprotection hinders the development of a child."
                  }
                ],
                "lesson_number": 81
              },
              {
                "vocab": "打ち消す",
                "furigana": "うちけす",
                "meaning_vi": "Hủy bỏ",
                "meaning_en": "Cancel",
                "examples": [
                  {
                    "example_text": "良くないうわさが流れると、それを打ち消すのは大変だ。",
                    "furigana": "良（よ）ながうけたいへんだ。",
                    "meaning_vi": "Một khi những tin đồn không tốt lan truyền thì để phủ nhận nó là rất khó.",
                    "meaning_en": "When bad rumors flow, it's hard to counteract them."
                  }
                ],
                "lesson_number": 81
              },
              {
                "vocab": "応じる",
                "furigana": "おうじる",
                "meaning_vi": "Tuân theo",
                "meaning_en": "Comply",
                "examples": [
                  {
                    "example_text": "ボランティア募集の呼びかけに応じて、大勢の若者が集まった。",
                    "furigana": "ボランティア募集（ぼしゅう）よおうおおぜいわかものあつまった。",
                    "meaning_vi": "Để ứng cử lời kêu gọi tình nguyện rất nhiều bạn trẻ đã tập hợp.",
                    "meaning_en": "A large number of young people gathered in response to a call for volunteers."
                  }
                ],
                "lesson_number": 81
              },
              {
                "vocab": "承る",
                "furigana": "うけたまわる",
                "meaning_vi": "Được chấp nhận",
                "meaning_en": "Accepted",
                "examples": [
                  {
                    "example_text": "「ご注文、確かに承りました」",
                    "furigana": "「ご注文（ちゅうもん）たしうけたまわりました」",
                    "meaning_vi": "Tôi đã hiểu phần gọi món rồi ạ.",
                    "meaning_en": "\"I've definitely accepted your order.\""
                  }
                ],
                "lesson_number": 81
              },
              {
                "vocab": "頂戴する",
                "furigana": "ちょうだいする",
                "meaning_vi": "Tôi sẽ cho nó",
                "meaning_en": "I will give it",
                "examples": [
                  {
                    "example_text": "「これ、お土産です」「ありがとうございます」「頂戴します」",
                    "furigana": "「これ、お土産（みやげ）ちょうだいします」",
                    "meaning_vi": "\"Cái này là quà lưu niệm\"\"Cảm ơn nhé, mình xin nhận\"",
                    "meaning_en": "\"This is a souvenir,\" \"Thank you,\" \"I'll give it to you.\""
                  }
                ],
                "lesson_number": 82
              },
              {
                "vocab": "学ぶ",
                "furigana": "まなぶ",
                "meaning_vi": "học hỏi",
                "meaning_en": "learn",
                "examples": [
                  {
                    "example_text": "大学で経済学を学ぶ。",
                    "furigana": "大学（だいがく）けいざいがくまなぶ。",
                    "meaning_vi": "Nghiên cứu kinh tế học tại trường đại học.",
                    "meaning_en": "Studying economics at university."
                  }
                ],
                "lesson_number": 82
              },
              {
                "vocab": "練る",
                "furigana": "ねる",
                "meaning_vi": "Luyện tập",
                "meaning_en": "Practice",
                "examples": [
                  {
                    "example_text": "パンの生地を練る。",
                    "furigana": "パンの生地（きじ）ねる。",
                    "meaning_vi": "Nhào bột mì.",
                    "meaning_en": "Knead the bread dough."
                  }
                ],
                "lesson_number": 82
              },
              {
                "vocab": "負う",
                "furigana": "おう",
                "meaning_vi": "Tôi sẽ chịu",
                "meaning_en": "I will bear",
                "examples": [
                  {
                    "example_text": "背に荷物を負う。",
                    "furigana": "背（せ）にもつおう。",
                    "meaning_vi": "Mang hành lí trên vai.",
                    "meaning_en": "Carry the luggage on your back."
                  }
                ],
                "lesson_number": 82
              },
              {
                "vocab": "果たす",
                "furigana": "はたす",
                "meaning_vi": "để thực hiện",
                "meaning_en": "to do",
                "examples": [
                  {
                    "example_text": "子供が成人して、ようやく親の責任を果たした。",
                    "furigana": "子供（こども）せいじんおやせきにんはたした。",
                    "meaning_vi": "Bọn trẻ trở thành người lớn, cuối cùng thì bố mẹ cũng hoàn thành nhiệm vụ.",
                    "meaning_en": "Once the child has grown, he has finally fulfilled his parents' responsibilities."
                  }
                ],
                "lesson_number": 82
              },
              {
                "vocab": "引き受ける",
                "furigana": "ひきうける",
                "meaning_vi": "đảm nhận",
                "meaning_en": "undertake",
                "examples": [
                  {
                    "example_text": "仕事を引き受けた以上、最後まで責任を持ってやるべきだ。",
                    "furigana": "仕事（しごと）ひういじょうさいごせきにんもってやるべきだ。",
                    "meaning_vi": "Một khi đã đảm nhận công việc rồi thì phải chịu trách nhiệm đến cùng.",
                    "meaning_en": "Since you have taken on the job, you should be responsible until the very end."
                  }
                ],
                "lesson_number": 82
              },
              {
                "vocab": "増す",
                "furigana": "ます",
                "meaning_vi": "Tăng",
                "meaning_en": "Increase",
                "examples": [
                  {
                    "example_text": "現地に行ってさらに興味が増した。",
                    "furigana": "現地（げんち）いきょうみました。",
                    "meaning_vi": "Đến với vùng đất địa phương càng tăng thêm sự cuốn hút hơn nữa.",
                    "meaning_en": "I went there and became even more interested."
                  }
                ],
                "lesson_number": 82
              },
              {
                "vocab": "欠ける",
                "furigana": "かける",
                "meaning_vi": "Nó bị thiếu",
                "meaning_en": "It is missing",
                "examples": [
                  {
                    "example_text": "茶碗の縁が欠けてしまった。",
                    "furigana": "茶碗（ちゃわん）ふちかけてしまった。",
                    "meaning_vi": "Viền bát trà bị nứt.",
                    "meaning_en": "The edge of the bowl is missing."
                  }
                ],
                "lesson_number": 82
              },
              {
                "vocab": "欠かす",
                "furigana": "かかす",
                "meaning_vi": "Để bỏ lỡ",
                "meaning_en": "To miss",
                "examples": [
                  {
                    "example_text": "骨の成長にカルシウムは欠かせない。",
                    "furigana": "骨（ほね）せいちょうかかせない。",
                    "meaning_vi": "Không thể thiếu canxi đối với sự phát triển của xương.",
                    "meaning_en": "Calcium is essential for bone growth."
                  }
                ],
                "lesson_number": 82
              },
              {
                "vocab": "澄む",
                "furigana": "すむ",
                "meaning_vi": "thông thoáng",
                "meaning_en": "airy",
                "examples": [
                  {
                    "example_text": "山の空気は澄んでいる。",
                    "furigana": "山（やま）くうきすんでいる。",
                    "meaning_vi": "Không khí ở núi trong lành.",
                    "meaning_en": "The mountain air is clear."
                  }
                ],
                "lesson_number": 82
              },
              {
                "vocab": "濁る",
                "furigana": "にごる",
                "meaning_vi": "Lầy lội",
                "meaning_en": "Marshy",
                "examples": [
                  {
                    "example_text": "台風で濁った川の水が激しく流れている。",
                    "furigana": "台風（たいふう）にごかわみずはげながれている。",
                    "meaning_vi": "Do bão nên dòng nước sông đục ngầu chảy xiết.",
                    "meaning_en": "The river is muddy due to the typhoon and flows violently."
                  }
                ],
                "lesson_number": 82
              },
              {
                "vocab": "濁す",
                "furigana": "にごす",
                "meaning_vi": "Lầy lội",
                "meaning_en": "Marshy",
                "examples": [
                  {
                    "example_text": "記者に鋭い質問をさせた政治家は言葉を濁した。",
                    "furigana": "記者（きしゃ）するどしつもんせいじかことばにごした。",
                    "meaning_vi": "Nhà chính trị bị nhà báo đặt câu hỏi hóc búa nên ngập ngừng mãi.",
                    "meaning_en": "The politician, who made the reporter ask a pointless question, muddily spoke."
                  }
                ],
                "lesson_number": 82
              },
              {
                "vocab": "生じる",
                "furigana": "しょうじる",
                "meaning_vi": "Nó xảy ra",
                "meaning_en": "It happens",
                "examples": [
                  {
                    "example_text": "計画の途中で問題が生じた。",
                    "furigana": "計画（けいかく）とちゅうもんだいしょうじた。",
                    "meaning_vi": "Kế hoạc giữa chừng thì xảy ra vấn đề.",
                    "meaning_en": "A problem arises during the planning process."
                  }
                ],
                "lesson_number": 82
              },
              {
                "vocab": "及ぶ",
                "furigana": "およぶ",
                "meaning_vi": "Nó đạt đến",
                "meaning_en": "It achieves",
                "examples": [
                  {
                    "example_text": "台風の被害は、九州地方全域に及んだ。",
                    "furigana": "台風（たいふう）ひがいきゅうしゅうちほうぜんいきおよんだ。",
                    "meaning_vi": "Thiệt hại của bão lan ra đến toàn bộ vùng Kyushu.",
                    "meaning_en": "The damage caused by the typhoon took place throughout the Kyushu region."
                  }
                ],
                "lesson_number": 83
              },
              {
                "vocab": "及ぼす",
                "furigana": "およぼす",
                "meaning_vi": "Cố gắng",
                "meaning_en": "Try",
                "examples": [
                  {
                    "example_text": "彼らの音楽は若者に大きな影響を及ぼした。",
                    "furigana": "彼（かれ）おんがくわかものおおえいきょうおよぼした。",
                    "meaning_vi": "Âm nhạc của anh ấy đã ảnh hưởng mạnh mẽ đến giới trẻ.",
                    "meaning_en": "Their music had a huge impact on young people."
                  }
                ],
                "lesson_number": 83
              },
              {
                "vocab": "至る",
                "furigana": "いたる",
                "meaning_vi": "Đối với",
                "meaning_en": "For",
                "examples": [
                  {
                    "example_text": "山頂に至る道",
                    "furigana": "山頂（さんちょう）いたみち",
                    "meaning_vi": "Con đường leo lên núi.",
                    "meaning_en": "The road to the summit"
                  }
                ],
                "lesson_number": 83
              },
              {
                "vocab": "達する",
                "furigana": "たっする",
                "meaning_vi": "Để tiếp cận",
                "meaning_en": "Approach",
                "examples": [
                  {
                    "example_text": "5時間昇って山頂に達した。",
                    "furigana": "5時間（じかん）のぼさんちょうたっした。",
                    "meaning_vi": "5 tiếng leo núi cuối cùng đã lên được đỉnh.",
                    "meaning_en": "We rose for five hours to reach the summit."
                  }
                ],
                "lesson_number": 83
              },
              {
                "vocab": "実る",
                "furigana": "みのる",
                "meaning_vi": "Nó có kết quả",
                "meaning_en": "It has results",
                "examples": [
                  {
                    "example_text": "今年は稲がよく実っている。",
                    "furigana": "今年（ことし）いねみのっている。",
                    "meaning_vi": "Lúa năm nay được mùa.",
                    "meaning_en": "The rice is growing well this year."
                  }
                ],
                "lesson_number": 83
              },
              {
                "vocab": "暮れる",
                "furigana": "くれる",
                "meaning_vi": "Đó là hoàng hôn",
                "meaning_en": "It is sunset",
                "examples": [
                  {
                    "example_text": "冬は日が早く暮れる。",
                    "furigana": "冬（ふゆ）ひはやくれる。",
                    "meaning_vi": "Mùa đông thì ngày nhanh tối.",
                    "meaning_en": "Winter is early in the sun."
                  }
                ],
                "lesson_number": 83
              },
              {
                "vocab": "劣る",
                "furigana": "おとる",
                "meaning_vi": "Nó kém hơn",
                "meaning_en": "It is inferior",
                "examples": [
                  {
                    "example_text": "ベテランのA 選手は体力ではB選手｛に/より｝劣るが、テクニックで勝てるだろう。",
                    "furigana": "ベテランのA 選手（せんしゅ）たいりょくせんしゅおとかてるだろう。",
                    "meaning_vi": "Tuyển thủ lão thành A có thể lực kém hơn tuyển thủ B nhưng bằng kỹ thuật sẽ chiến thắng.",
                    "meaning_en": "Veteran A player is inferior to B player in terms of physical strength, but he will be able to win with his technique."
                  }
                ],
                "lesson_number": 83
              },
              {
                "vocab": "異なる",
                "furigana": "ことなる",
                "meaning_vi": "khác biệt",
                "meaning_en": "distinctive",
                "examples": [
                  {
                    "example_text": "私はあの人と意見が異なる。",
                    "furigana": "私（わたし）ひといけんことなる。",
                    "meaning_vi": "Tôi khác với ý kiến người đó.",
                    "meaning_en": "I have a different opinion than that person."
                  }
                ],
                "lesson_number": 83
              },
              {
                "vocab": "乱れる",
                "furigana": "みだれる",
                "meaning_vi": "Nó bị nhầm lẫn",
                "meaning_en": "It is confused",
                "examples": [
                  {
                    "example_text": "風で髪が乱れた。",
                    "furigana": "風（かぜ）かみみだれた。",
                    "meaning_vi": "Tóc rối do gió.",
                    "meaning_en": "My hair was messed up by the wind."
                  }
                ],
                "lesson_number": 83
              },
              {
                "vocab": "乱す",
                "furigana": "みだす",
                "meaning_vi": "Băn khoăn",
                "meaning_en": "Disturbed",
                "examples": [
                  {
                    "example_text": "新人選手は後半ペースを乱して、負けてしまった。",
                    "furigana": "新人（しんじん）せんしゅこうはんみだまけてしまった。",
                    "meaning_vi": "Cầu thủ mới làm loạn nhịp độ hiệp sau nên thua trận.",
                    "meaning_en": "The rookie lost the pace of the second half."
                  }
                ],
                "lesson_number": 83
              },
              {
                "vocab": "緩む",
                "furigana": "ゆるむ",
                "meaning_vi": "Nới lỏng",
                "meaning_en": "Loosen",
                "examples": [
                  {
                    "example_text": "靴ひもが緩んで、くつが脱げてしまった。",
                    "furigana": "靴（くつ）ゆるぬげてしまった。",
                    "meaning_vi": "Giây giày bị lỏng nên giày bị tuột ra.",
                    "meaning_en": "My shoelaces were loose and my shoes were removed."
                  }
                ],
                "lesson_number": 83
              },
              {
                "vocab": "緩める",
                "furigana": "ゆるめる",
                "meaning_vi": "Nới lỏng",
                "meaning_en": "Loosen",
                "examples": [
                  {
                    "example_text": "ネクタイを緩めてゆっくりする。",
                    "furigana": "ネクタイを緩（ゆる）めてゆっくりする。",
                    "meaning_vi": "Nới lỏng cà vạt và thư giản.",
                    "meaning_en": "Loosen the tie and slowly."
                  }
                ],
                "lesson_number": 83
              },
              {
                "vocab": "錆びる",
                "furigana": "さびる",
                "meaning_vi": "rỉ sét",
                "meaning_en": "rust",
                "examples": [
                  {
                    "example_text": "雨に濡れて自転車がさびてしまった。",
                    "furigana": "雨（あめ）ぬじてんしゃがさびてしまった。",
                    "meaning_vi": "Bị mưa ướt nên xe đạp bị rỉ.",
                    "meaning_en": "The bike was rusted when it was wet in the rain."
                  }
                ],
                "lesson_number": 84
              },
              {
                "vocab": "接する",
                "furigana": "せっする",
                "meaning_vi": "Chạm",
                "meaning_en": "Touch",
                "examples": [
                  {
                    "example_text": "長野県は海に接していない。",
                    "furigana": "長野（ながの）けんうみせっしていない。",
                    "meaning_vi": "Huyện Nagano không tiếp giáp biển.",
                    "meaning_en": "Nagano Prefecture is not bordered by the sea."
                  }
                ],
                "lesson_number": 84
              },
              {
                "vocab": "属する",
                "furigana": "ぞくする",
                "meaning_vi": "Nó thuộc về",
                "meaning_en": "It belongs to",
                "examples": [
                  {
                    "example_text": "クジラは哺乳類に属している。",
                    "furigana": "クジラは哺乳類（ほにゅうるい）ぞくしている。",
                    "meaning_vi": "Cá voi thuộc loài có vú.",
                    "meaning_en": "Whales belong to mammals."
                  }
                ],
                "lesson_number": 84
              },
              {
                "vocab": "占める",
                "furigana": "しめる",
                "meaning_vi": "Chiếm",
                "meaning_en": "Occupy",
                "examples": [
                  {
                    "example_text": "この会社の製品は、市場の8割を占めている。",
                    "furigana": "この会社（かいしゃ）せいひんしじょうわりしめている。",
                    "meaning_vi": "Sản phẩm của công ty này chiếm 80% thị trường.",
                    "meaning_en": "This company's products account for 80% of the market."
                  }
                ],
                "lesson_number": 84
              },
              {
                "vocab": "草臥れる",
                "furigana": "くたびれる",
                "meaning_vi": "Tôi đang nằm xuống",
                "meaning_en": "I am lying down",
                "examples": [
                  {
                    "example_text": "一日中仕事をしてくたびれた。",
                    "furigana": "一日（いちにち）じゅうしごとをしてくたびれた。",
                    "meaning_vi": "Suốt một ngày làm việc nên mệt mỏi.",
                    "meaning_en": "I was tired of working all day."
                  }
                ],
                "lesson_number": 84
              },
              {
                "vocab": "恵まれる",
                "furigana": "めぐまれる",
                "meaning_vi": "Được ban phước",
                "meaning_en": "Blessed",
                "examples": [
                  {
                    "example_text": "この国は天然資源に恵まれている。",
                    "furigana": "この国（くに）てんねんしげんめぐまれている。",
                    "meaning_vi": "Đất nước này được ban tặng cho tài nguyên thiên nhiên.",
                    "meaning_en": "This country is blessed with natural resources."
                  }
                ],
                "lesson_number": 84
              },
              {
                "vocab": "湧く",
                "furigana": "わく",
                "meaning_vi": "mọc lên",
                "meaning_en": "grow",
                "examples": [
                  {
                    "example_text": "家の土地から温泉が沸いた。",
                    "furigana": "家（いえ）とちおんせんわいた。",
                    "meaning_vi": "Suối nước nóng từ vùng đất ở nhà sôi lên.",
                    "meaning_en": "Hot springs gushed out of the house."
                  }
                ],
                "lesson_number": 84
              },
              {
                "vocab": "微笑む",
                "furigana": "ほほえむ",
                "meaning_vi": "nụ cười",
                "meaning_en": "smile",
                "examples": [
                  {
                    "example_text": "彼女は私ににっこりとほほ笑んだ。",
                    "furigana": "彼女（かのじょ）わたしえんだ。",
                    "meaning_vi": "Cô ấy mỉm cười với tôi.",
                    "meaning_en": "She smiled at me."
                  }
                ],
                "lesson_number": 84
              },
              {
                "vocab": "不山戯る",
                "furigana": "ふやまぎる",
                "meaning_vi": "Chơi mà không có núi",
                "meaning_en": "Play without a mountain",
                "examples": [
                  {
                    "example_text": "弟はふざけて人を笑わせるのが得意だ。",
                    "furigana": "弟（おとうと）ひとわらとくいだ。",
                    "meaning_vi": "Em trai tôi giỏi làm trò hề chọc cười người khác.",
                    "meaning_en": "My younger brother is good at making people laugh by kidding him."
                  }
                ],
                "lesson_number": 84
              },
              {
                "vocab": "悔やむ",
                "furigana": "くやむ",
                "meaning_vi": "Tôi rất tiếc",
                "meaning_en": "I'm sorry",
                "examples": [
                  {
                    "example_text": "過ぎたことを今さら悔やんでも遅い。",
                    "furigana": "過（す）いまくおそい。",
                    "meaning_vi": "Chuyện đã qua rồi mà bây giờ hối tiếc cũng muộn rồi.",
                    "meaning_en": "It's too late to regret what has passed."
                  }
                ],
                "lesson_number": 84
              },
              {
                "vocab": "躊躇う",
                "furigana": "ためらう",
                "meaning_vi": "do dự",
                "meaning_en": "hesitant",
                "examples": [
                  {
                    "example_text": "申し込みをためらっているうちに、締め切りが過ぎてしまった。",
                    "furigana": "申（もう）こしきすぎてしまった。",
                    "meaning_vi": "Trong khi phân vân việc đăng kí thì qua thời hạn mất.",
                    "meaning_en": "While I was hesitant to apply, the deadline passed."
                  }
                ],
                "lesson_number": 84
              },
              {
                "vocab": "敬う",
                "furigana": "うやまう",
                "meaning_vi": "tôn thờ",
                "meaning_en": "worship",
                "examples": [
                  {
                    "example_text": "神仏を敬う。",
                    "furigana": "神仏（しんぶつ）うやまう。",
                    "meaning_vi": "Tôn trọng phật.",
                    "meaning_en": "Respect the gods and Buddhas."
                  }
                ],
                "lesson_number": 84
              },
              {
                "vocab": "さっぱり",
                "furigana": "さっぱり",
                "meaning_vi": "Làm mới",
                "meaning_en": "Refresh",
                "examples": [
                  {
                    "example_text": "早くシャワーを浴びて、さっぱりしたい。",
                    "furigana": "早（はや）あびて、さっぱりしたい。",
                    "meaning_vi": "Nhanh nhanh muốn đi tắm sảng khoái trở lại.",
                    "meaning_en": "I want to take a shower early and have a refreshing taste."
                  }
                ],
                "lesson_number": 85
              },
              {
                "vocab": "すっきり",
                "furigana": "すっきり",
                "meaning_vi": "Làm mới",
                "meaning_en": "Refresh",
                "examples": [
                  {
                    "example_text": "眠かったが、顔を洗うとすっきりした。",
                    "furigana": "眠（ねむ）かおあらうとすっきりした。",
                    "meaning_vi": "Buồn ngủ nhưng rửa mặt thì tỉnh táo ngay.",
                    "meaning_en": "I was sleepy, but when I washed my face I felt refreshed."
                  }
                ],
                "lesson_number": 85
              },
              {
                "vocab": "実に",
                "furigana": "じつに",
                "meaning_vi": "Thực vậy",
                "meaning_en": "Indeed",
                "examples": [
                  {
                    "example_text": "この小説は実に面白かった。",
                    "furigana": "この小説（しょうせつ）じつおもしろかった。",
                    "meaning_vi": "Cuốn tiểu thuyết này thực sự rất thú vị.",
                    "meaning_en": "This novel was really interesting."
                  }
                ],
                "lesson_number": 85
              },
              {
                "vocab": "思い切り",
                "furigana": "おもいきり",
                "meaning_vi": "Tôi rất nhiệt tình",
                "meaning_en": "I am very enthusiastic",
                "examples": [
                  {
                    "example_text": "試験が終わったら、思い切り遊びたい。",
                    "furigana": "試験（しけん）おおもきあそびたい。",
                    "meaning_vi": "Kì thi kết thúc tôi muốn chơi hết mình.",
                    "meaning_en": "Once the exam is over, I want to play with my heart."
                  }
                ],
                "lesson_number": 85
              },
              {
                "vocab": "何と無く",
                "furigana": "なんとなく",
                "meaning_vi": "Thứ gì đó",
                "meaning_en": "Something",
                "examples": [
                  {
                    "example_text": "今日は何となくいいことがありそうな気がする。",
                    "furigana": "今日（きょう）なんきがする。",
                    "meaning_vi": "Không hiểu sao hôm nay tôi cảm thấy có điều gì tốt.",
                    "meaning_en": "I feel like something good might happen today."
                  }
                ],
                "lesson_number": 85
              },
              {
                "vocab": "何だか",
                "furigana": "なんだか",
                "meaning_vi": "bằng cách nào đó",
                "meaning_en": "somehow",
                "examples": [
                  {
                    "example_text": "なんだか寒気がする、風邪を引いたのだろうか。",
                    "furigana": "なんだか寒気（さむけ）かぜひいたのだろうか。",
                    "meaning_vi": "Cảm thấy hơi lạnh sống lưng chút, bị cảm hay sao đây.",
                    "meaning_en": "It felt like a chill, perhaps he had caught a cold."
                  }
                ],
                "lesson_number": 85
              },
              {
                "vocab": "どうにか",
                "furigana": "どうにか",
                "meaning_vi": "Thứ gì đó",
                "meaning_en": "Something",
                "examples": [
                  {
                    "example_text": "家から走り続け、どうにか7時の電車に間に合った。",
                    "furigana": "家（いえ）はしつづじでんしゃまあった。",
                    "meaning_vi": "Từ nhà cứ chạy liên tục nhờ thế mà đã kịp chuyến xe điện 7 giờ.",
                    "meaning_en": "I continued running from home and somehow managed to make it to the 7am train."
                  }
                ],
                "lesson_number": 85
              },
              {
                "vocab": "どうにも",
                "furigana": "どうにも",
                "meaning_vi": "Dù sao",
                "meaning_en": "Anyway",
                "examples": [
                  {
                    "example_text": "助けてあげたかったが、私の力ではどうにもできなかった。",
                    "furigana": "助（たす）わたしちからではどうにもできなかった。",
                    "meaning_vi": "Tôi cũng muốn giúp đỡ nhưng với thể lực này thì tôi không thể làm gì cả.",
                    "meaning_en": "I wanted to help him, but I couldn't do anything about it."
                  }
                ],
                "lesson_number": 85
              },
              {
                "vocab": "何とか",
                "furigana": "なんとか",
                "meaning_vi": "bằng cách nào đó",
                "meaning_en": "somehow",
                "examples": [
                  {
                    "example_text": "必死に頑張って、何とか合格することができた。",
                    "furigana": "必死（ひっし）がんばなんごうかくすることができた。",
                    "meaning_vi": "Quyết tâm cố gắng, nhờ thế mà đã đậu được.",
                    "meaning_en": "I tried so hard, but somehow managed to pass."
                  }
                ],
                "lesson_number": 85
              },
              {
                "vocab": "何とも",
                "furigana": "なんとも",
                "meaning_vi": "Cái gì",
                "meaning_en": "What",
                "examples": [
                  {
                    "example_text": "私をいじめた人を、前は恨んでいたが、今は何とも思っていない。",
                    "furigana": "私（わたし）ひとまえうらいまなんおもっていない。",
                    "meaning_vi": "Trước đây tôi rất ghét người đã bắt nạt tôi, nhưng giờ thì không nghĩ ngợi gì.",
                    "meaning_en": "I used to hate the person who bullied me, but now I don't think about it."
                  }
                ],
                "lesson_number": 85
              },
              {
                "vocab": "態と",
                "furigana": "わざと",
                "meaning_vi": "Nhà nước và",
                "meaning_en": "State and",
                "examples": [
                  {
                    "example_text": "子供相手にゲームをするときは、時々わざと負けてやったりする。",
                    "furigana": "子供（こども）あいてときどきまけてやったりする。",
                    "meaning_vi": "Chơi game với đối thủ là con nít, đôi khi tôi cố ý thua.",
                    "meaning_en": "When playing games against children, I sometimes intentionally lose."
                  }
                ],
                "lesson_number": 85
              },
              {
                "vocab": "態々",
                "furigana": "々わざわざ",
                "meaning_vi": "Tình hình",
                "meaning_en": "Situation",
                "examples": [
                  {
                    "example_text": "学校の欠席をしたら、クラスメートがわざわざ宿題をうちまで届けてくれた。",
                    "furigana": "学校（がっこう）けっせきしゅくだいとどけてくれた。",
                    "meaning_vi": "Nghỉ học nên đứa bạn cất công gửi bài tập đến nhà cho tôi.",
                    "meaning_en": "When I missed school, my classmates went out of my way to deliver my homework."
                  }
                ],
                "lesson_number": 85
              },
              {
                "vocab": "折角",
                "furigana": "せっかく",
                "meaning_vi": "Tôi sẽ là",
                "meaning_en": "I will be",
                "examples": [
                  {
                    "example_text": "せっかく都心の美術館まで行ったのに、満員で入れなかった。",
                    "furigana": "せっかく都心（としん）びじゅつかんいまんいんはいれなかった。",
                    "meaning_vi": "Cất công đến viện bảo tàng thành phố nhưng đông quá không thể vào được.",
                    "meaning_en": "I went to an art museum in the city center, but it was packed so I couldn't get in."
                  }
                ],
                "lesson_number": 85
              },
              {
                "vocab": "生憎",
                "furigana": "あいにく",
                "meaning_vi": "Không may",
                "meaning_en": "Unfortunately",
                "examples": [
                  {
                    "example_text": "古い友人に電話をかけたが、あいにく彼女は留守だった。",
                    "furigana": "古（ふる）ゆうじんでんわかのじょるすだった。",
                    "meaning_vi": "Gọi điện đến nhà bạn thân nhưng tiếc là cô ấy vắng nhà.",
                    "meaning_en": "I called an old friend, but unfortunately she was away."
                  }
                ],
                "lesson_number": 86
              },
              {
                "vocab": "案の定",
                "furigana": "あんのじょう",
                "meaning_vi": "Như mong đợi",
                "meaning_en": "As expected",
                "examples": [
                  {
                    "example_text": "怪しいと思っていたが、案の定、彼は犯人だった。",
                    "furigana": "怪（あや）おもあんじょうかれはんにんだった。",
                    "meaning_vi": "Tôi thấy đáng nghi rồi, quả nhiên anh ta là tội phạm.",
                    "meaning_en": "I thought it was suspicious, but as expected, he was the culprit."
                  }
                ],
                "lesson_number": 86
              },
              {
                "vocab": "いよいよ",
                "furigana": "いよいよ",
                "meaning_vi": "Cuối cùng cũng vậy",
                "meaning_en": "Finally the same",
                "examples": [
                  {
                    "example_text": "あしたはいよいよ決勝戦だ。",
                    "furigana": "あしたはいよいよ決勝戦（けっしょうせん）だ。",
                    "meaning_vi": "Cuối cùng ngày mai cũng là trận chung kết nhỉ.",
                    "meaning_en": "Tomorrow is finally the final."
                  }
                ],
                "lesson_number": 86
              },
              {
                "vocab": "流石",
                "furigana": "さすが",
                "meaning_vi": "Ngay lập tức",
                "meaning_en": "Right away",
                "examples": [
                  {
                    "example_text": "有名ブランド品だけあって、さすがに高い。",
                    "furigana": "有名（ゆうめい）ひんたかい。",
                    "meaning_vi": "Quả đúng là sản phẩm thương hiệu nổi tiếng, giá đắt thật.",
                    "meaning_en": "As it is a famous brand item, it is really expensive."
                  }
                ],
                "lesson_number": 86
              },
              {
                "vocab": "兎に角",
                "furigana": "とにかく",
                "meaning_vi": "Trong mọi trường hợp",
                "meaning_en": "In all cases",
                "examples": [
                  {
                    "example_text": "できるかどうかわからないが、とにかくやってみよう。",
                    "furigana": "できるかどうかわからないが、とにかくやってみよう。",
                    "meaning_vi": "Có được hay không vẫn không rõ, nhưng dù sao hãy làm thử đi.",
                    "meaning_en": "I'm not sure if I can, but I'll give it a go."
                  }
                ],
                "lesson_number": 86
              },
              {
                "vocab": "兎も角",
                "furigana": "ともかく",
                "meaning_vi": "Dù sao,",
                "meaning_en": "Anyway,",
                "examples": [
                  {
                    "example_text": "引き受けてくれるかどうかわからないが、ともかく頼んでみるつもりだ。",
                    "furigana": "引（ひ）うたのんでみるつもりだ。",
                    "meaning_vi": "Có nhận hay không không rõ những dù sao cũng nhờ thử.",
                    "meaning_en": "I'm not sure if they'll accept it, but I'm going to ask for it anyway."
                  }
                ],
                "lesson_number": 86
              },
              {
                "vocab": "せめて",
                "furigana": "せめて",
                "meaning_vi": "ít nhất",
                "meaning_en": "at least",
                "examples": [
                  {
                    "example_text": "せめて日曜日くらいはゆっくり休みたい。",
                    "furigana": "せめて日曜日（にちようび）やすみたい。",
                    "meaning_vi": "Ít nhất thì cũng muốn chủ nhật được nghỉ ngơi.",
                    "meaning_en": "I'd like to take a leisurely break at least on Sundays."
                  }
                ],
                "lesson_number": 86
              },
              {
                "vocab": "せいぜい",
                "furigana": "せいぜい",
                "meaning_vi": "Tốt nhất",
                "meaning_en": "Best",
                "examples": [
                  {
                    "example_text": "うちから駅までは、歩いてもせいぜい10分ぐらいです。",
                    "furigana": "うちから駅（えき）あるぷんぐらいです。",
                    "meaning_vi": "Từ nhà đi bộ đến nhà ga tối đa mất 10 phút.",
                    "meaning_en": "It takes about 10 minutes to walk from my house to the station."
                  }
                ],
                "lesson_number": 86
              },
              {
                "vocab": "どうせ",
                "furigana": "どうせ",
                "meaning_vi": "Dù sao",
                "meaning_en": "Anyway",
                "examples": [
                  {
                    "example_text": "どうせ不合格に決まっているが、やっぱり受けたい。",
                    "furigana": "どうせ不合格（ふごうかく）きうけたい。",
                    "meaning_vi": "Dù cho biết không đậu nhưng vẫn muốn dự thi.",
                    "meaning_en": "I've decided to fail anyway, but I still want to take it."
                  }
                ],
                "lesson_number": 86
              },
              {
                "vocab": "ぎっしり",
                "furigana": "ぎっしり",
                "meaning_vi": "Đóng gói",
                "meaning_en": "Pack",
                "examples": [
                  {
                    "example_text": "本棚には本がぎっしり並んでいる。",
                    "furigana": "本棚（ほんだな）ほんならんでいる。",
                    "meaning_vi": "Sách xếp chật ních trên giá sách.",
                    "meaning_en": "The bookshelf is packed with books."
                  }
                ],
                "lesson_number": 86
              },
              {
                "vocab": "ずらりと",
                "furigana": "ずらりと",
                "meaning_vi": "Cạnh nhau",
                "meaning_en": "Side by side",
                "examples": [
                  {
                    "example_text": "息子の本棚にはずらりと漫画が並んでいる。",
                    "furigana": "息子（むすこ）ほんだなまんがならんでいる。",
                    "meaning_vi": "Đứa con trai xếp truyện tranh một hàng trên giá sách.",
                    "meaning_en": "My son's bookshelf is lined up with comics."
                  }
                ],
                "lesson_number": 86
              },
              {
                "vocab": "あっさり",
                "furigana": "あっさり",
                "meaning_vi": "Dễ",
                "meaning_en": "Easy",
                "examples": [
                  {
                    "example_text": "今日は食欲がないので、あっさりしたものが食べたい。",
                    "furigana": "今日（きょう）しょくよくたべたい。",
                    "meaning_vi": "Hôm nay không muốn ăn nên chỉ ăn những thứ đơn giản thôi.",
                    "meaning_en": "I don't have an appetite today, so I want to eat something light."
                  }
                ],
                "lesson_number": 86
              },
              {
                "vocab": "しんと・しいんと",
                "furigana": "しんと・しいんと",
                "meaning_vi": "Ống chân và ống chân và",
                "meaning_en": "Leg tube and leg tube and legs",
                "examples": [
                  {
                    "example_text": "先生が大声で怒ると、子供たちはしいんとなった。",
                    "furigana": "先生（せんせい）おおごえおここどもたちはしいんとなった。",
                    "meaning_vi": "Giáo viên nổi giận hét lớn lên thì cả lớp im như tờ.",
                    "meaning_en": "When the teacher yelled, the children were groaning."
                  }
                ],
                "lesson_number": 86
              },
              {
                "vocab": "ちゃんと",
                "furigana": "ちゃんと",
                "meaning_vi": "Đúng cách",
                "meaning_en": "Proper",
                "examples": [
                  {
                    "example_text": "「面接にはちゃんとした服を着ていくこと」",
                    "furigana": "「面接（めんせつ）ふくきていくこと」",
                    "meaning_vi": "Khi đi phỏng vấn nên ăn mặc chỉnh tề.",
                    "meaning_en": "\"Wear proper clothes for the interview\""
                  }
                ],
                "lesson_number": 86
              },
              {
                "vocab": "続々",
                "furigana": "々ぞくぞく",
                "meaning_vi": "liên tiếp",
                "meaning_en": "consecutive",
                "examples": [
                  {
                    "example_text": "客が続々と詰めかけ、会場はすぐに満員になった。",
                    "furigana": "客（きゃく）ぞくぞくつかいじょうまんいんになった。",
                    "meaning_vi": "Khách liên tục vào ngay lập tức hội trường đã chật người.",
                    "meaning_en": "The venue quickly packed with customers."
                  }
                ],
                "lesson_number": 86
              },
              {
                "vocab": "どっと",
                "furigana": "どっと",
                "meaning_vi": "LÀM",
                "meaning_en": "DO",
                "examples": [
                  {
                    "example_text": "その冗談を聞いて、人々はどっと笑った。",
                    "furigana": "その冗談（じょうだん）きひとびとわらった。",
                    "meaning_vi": "Khi nghe câu chuyện đùa đó, mọi người ùa lên cười.",
                    "meaning_en": "People laughed at the joke."
                  }
                ],
                "lesson_number": 87
              },
              {
                "vocab": "ばったり",
                "furigana": "ばったり",
                "meaning_vi": "Slurp",
                "meaning_en": "Slurp",
                "examples": [
                  {
                    "example_text": "隣に立っていた人が突然ばったり倒れたので驚いた。",
                    "furigana": "隣（となり）たひととつぜんたおおどろいた。",
                    "meaning_vi": "Tôi giật mình vì người đứng bên cạnh đột nhiên ngã xuống.",
                    "meaning_en": "I was surprised when the person standing next to me suddenly fell over and collapsed."
                  }
                ],
                "lesson_number": 87
              },
              {
                "vocab": "さっさと",
                "furigana": "さっさと",
                "meaning_vi": "nhanh",
                "meaning_en": "fast",
                "examples": [
                  {
                    "example_text": "「早く片付けたいから、さっさと食べて」",
                    "furigana": "「早（はや）かたづたべて」",
                    "meaning_vi": "Muốn dọn dẹp sớm nên ăn nhanh lên.",
                    "meaning_en": "\"I want to get rid of it quickly, so eat it quickly.\""
                  }
                ],
                "lesson_number": 87
              },
              {
                "vocab": "さっと",
                "furigana": "さっと",
                "meaning_vi": "đột nhiên",
                "meaning_en": "suddenly",
                "examples": [
                  {
                    "example_text": "私がコーヒーをこぼすと、店員がさっと拭いてくれた。",
                    "furigana": "私（わたし）てんいんふいてくれた。",
                    "meaning_vi": "Tôi vừa làm đổ cà phê thì nhân viên liền lau giúp.",
                    "meaning_en": "When I spilled some coffee, the clerk quickly wiped it off."
                  }
                ],
                "lesson_number": 87
              },
              {
                "vocab": "すっと",
                "furigana": "すっと",
                "meaning_vi": "thẳng",
                "meaning_en": "straight",
                "examples": [
                  {
                    "example_text": "彼女はすっと立ち上がって、部屋を出ていった。",
                    "furigana": "彼女（かのじょ）たあへやでていった。",
                    "meaning_vi": "Cô ấy đứng dậy và lao ra khỏi phòng nhanh như chớp.",
                    "meaning_en": "She quickly stood up and left the room."
                  }
                ],
                "lesson_number": 87
              },
              {
                "vocab": "せっせと",
                "furigana": "せっせと",
                "meaning_vi": "Tôi rất nhiệt tình",
                "meaning_en": "I am very enthusiastic",
                "examples": [
                  {
                    "example_text": "彼は若い時にせっせと働いてお金をためた。",
                    "furigana": "彼（かれ）わかときはたらかねをためた。",
                    "meaning_vi": "Anh ấy lúc còn trẻ đã chăm chỉ làm việc để tích góp tiền.",
                    "meaning_en": "He worked hard to save money when he was young."
                  }
                ],
                "lesson_number": 87
              },
              {
                "vocab": "ざっと",
                "furigana": "ざっと",
                "meaning_vi": "Đại khái",
                "meaning_en": "Generally",
                "examples": [
                  {
                    "example_text": "ざっと計算したところ、10万円ほどかかりそうだと分かった。",
                    "furigana": "ざっと計算（けいさん）まんえんわかった。",
                    "meaning_vi": "Tính nhanh qua mà thấy tốn 10 man.",
                    "meaning_en": "After rough calculations, I found out it would cost around 100,000 yen."
                  }
                ],
                "lesson_number": 87
              },
              {
                "vocab": "こっそり",
                "furigana": "こっそり",
                "meaning_vi": "bí mật",
                "meaning_en": "secret",
                "examples": [
                  {
                    "example_text": "先生に見つからないように、こっそりケータイのメールを見た。",
                    "furigana": "先生（せんせい）みみた。",
                    "meaning_vi": "Lén xem tin nhắn điện thoại không để giáo viên biết.",
                    "meaning_en": "I secretly looked at the email on my cell phone so that the teacher wouldn't find me."
                  }
                ],
                "lesson_number": 87
              },
              {
                "vocab": "生き生き",
                "furigana": "いきいき",
                "meaning_vi": "Sống",
                "meaning_en": "Living",
                "examples": [
                  {
                    "example_text": "彼女は生き生きと働いている。",
                    "furigana": "彼女（かのじょ）いいはたらいている。",
                    "meaning_vi": "Cô ấy làm việc rất hăng hái.",
                    "meaning_en": "She works vividly."
                  }
                ],
                "lesson_number": 87
              },
              {
                "vocab": "ぼんやり",
                "furigana": "ぼんやり",
                "meaning_vi": "Vắng mặt",
                "meaning_en": "Absent",
                "examples": [
                  {
                    "example_text": "霧の中に、ぼんやり船が見えた。",
                    "furigana": "霧（きり）なかふねみえた。",
                    "meaning_vi": "Trong sương mờ mờ ảo ảo thấy con thuyền.",
                    "meaning_en": "In the mist, I could see the boat vaguely."
                  }
                ],
                "lesson_number": 87
              },
              {
                "vocab": "不図",
                "furigana": "ふと",
                "meaning_vi": "Không minh họa",
                "meaning_en": "Unkindly",
                "examples": [
                  {
                    "example_text": "不図窓の外を見ると、雪が降っていた。",
                    "furigana": "不図（ふと）まどそとみゆきふっていた。",
                    "meaning_vi": "Đột nhiên nhìn ra bên ngoài thì thấy tuyết rơi.",
                    "meaning_en": "When I looked out the window, I saw that it was snowing."
                  }
                ],
                "lesson_number": 87
              },
              {
                "vocab": "直に",
                "furigana": "じかに",
                "meaning_vi": "trực tiếp",
                "meaning_en": "direct",
                "examples": [
                  {
                    "example_text": "何も敷かないで、直に地面に座った。",
                    "furigana": "何（なに）しじかじめんすわった。",
                    "meaning_vi": "Không phủi gì mà ngồi trực tiếp lên đất.",
                    "meaning_en": "Without putting anything on the ground, I sat straight there."
                  }
                ],
                "lesson_number": 87
              },
              {
                "vocab": "一度に",
                "furigana": "いちどに",
                "meaning_vi": "Cùng một lúc",
                "meaning_en": "At the same time",
                "examples": [
                  {
                    "example_text": "一度に多くのことを言われても、覚えられない。",
                    "furigana": "一度（いちど）おおいおぼえられない。",
                    "meaning_vi": "Không thể nhớ được những việc được nói cùng một lúc.",
                    "meaning_en": "Even if you say so many things at once, you can't remember."
                  }
                ],
                "lesson_number": 87
              },
              {
                "vocab": "一斉に",
                "furigana": "いっせいに",
                "meaning_vi": "Tất cả cùng một lúc",
                "meaning_en": "All at the same time",
                "examples": [
                  {
                    "example_text": "ピストルの音の同時に、選手たちは一斉にスタートした。",
                    "furigana": "ピストルの音（おと）どうじせんしゅいっせいにスタートした。",
                    "meaning_vi": "Đồng thời với tiếng súng, các vận động viên bắt đầu cùng lúc.",
                    "meaning_en": "The players all started off at the same time as the pistols were heard."
                  }
                ],
                "lesson_number": 87
              },
              {
                "vocab": "共に",
                "furigana": "ともに",
                "meaning_vi": "cả hai",
                "meaning_en": "both",
                "examples": [
                  {
                    "example_text": "毎年正月には、家族とともに祖父母の家に行くことになっている。",
                    "furigana": "毎年（まいねん）しょうがつかぞくそふぼいえいくことになっている。",
                    "meaning_vi": "Vào dịp tết mỗi năm, gia đình sẽ về thăm nhà ông bà.",
                    "meaning_en": "Every New Year's, I go to my grandparents' house with my family."
                  }
                ],
                "lesson_number": 87
              },
              {
                "vocab": "相互に",
                "furigana": "そうごに",
                "meaning_vi": "Lẫn nhau",
                "meaning_en": "Mutual",
                "examples": [
                  {
                    "example_text": "よく話し合って、相互に理解し合うことが大切だ。",
                    "furigana": "よく話（はな）あそうごりかいあたいせつだ。",
                    "meaning_vi": "Nói chuyện nhiều với nhau thì việc hiểu nhau hơn là điều quan trọng.",
                    "meaning_en": "It is important to discuss and understand each other carefully."
                  }
                ],
                "lesson_number": 87
              },
              {
                "vocab": "一人一人",
                "furigana": "ひとりひとり",
                "meaning_vi": "Mỗi người",
                "meaning_en": "Each person",
                "examples": [
                  {
                    "example_text": "出席者は一人一人意見を述べた。",
                    "furigana": "出席者（しゅっせきしゃ）ひとりひとりいけんのべた。",
                    "meaning_vi": "Những người tham gia từng người một phát biểu ý kiến.",
                    "meaning_en": "Each attendee expressed his opinion."
                  }
                ],
                "lesson_number": 87
              },
              {
                "vocab": "いちいち",
                "furigana": "いちいち",
                "meaning_vi": "Mỗi một",
                "meaning_en": "Each one",
                "examples": [
                  {
                    "example_text": "母は私のすることにいちいち文句を言う。",
                    "furigana": "母（はは）わたしもんくいう。",
                    "meaning_vi": "Mẹ phàn nàn về từng việc tôi làm.",
                    "meaning_en": "My mother complains about what I do every time."
                  }
                ],
                "lesson_number": 87
              },
              {
                "vocab": "所々",
                "furigana": "々ところどころ",
                "meaning_vi": "Ở đây và ở đó",
                "meaning_en": "Here and there",
                "examples": [
                  {
                    "example_text": "地震で、併が所々崩れた。",
                    "furigana": "地震（じしん）へいところどころくずれた。",
                    "meaning_vi": "Do động đất mà hàng rào đổ vỡ khắp nơi.",
                    "meaning_en": "The earthquake caused the two to collapse in places."
                  }
                ],
                "lesson_number": 88
              },
              {
                "vocab": "どうか",
                "furigana": "どうか",
                "meaning_vi": "Vui lòng",
                "meaning_en": "Please",
                "examples": [
                  {
                    "example_text": "「どうかよろしくお願いします」",
                    "furigana": "「どうかよろしくお願（ねが）いします」",
                    "meaning_vi": "Dù sao thì cũng mong anh/ chị giúp đỡ.",
                    "meaning_en": "\"Please take care.\""
                  }
                ],
                "lesson_number": 88
              },
              {
                "vocab": "できれば・できたら",
                "furigana": "できれば・できたら",
                "meaning_vi": "Nếu có thể, nếu có thể",
                "meaning_en": "If possible, if possible",
                "examples": [
                  {
                    "example_text": "「この事件、できたら今日中にお願いします」",
                    "furigana": "「この事件（じけん）きょうじゅうねがいします」",
                    "meaning_vi": "Vụ việc này, nếu được nhờ anh trong ngày hôm nay.",
                    "meaning_en": "\"If possible, please give me this incident today.\""
                  }
                ],
                "lesson_number": 88
              },
              {
                "vocab": "たいして",
                "furigana": "たいして",
                "meaning_vi": "Đó là khá nhiều",
                "meaning_en": "That is quite a lot",
                "examples": [
                  {
                    "example_text": "その映画が面白いと聞いて見に行ったのだが、たいして面白くなかった。",
                    "furigana": "その映画（えいが）おもしろきみいおもしろくなかった。",
                    "meaning_vi": "Nghe nói bộ phim đó thú vị nên đi xem nhưng mà không thú vị lắm.",
                    "meaning_en": "I heard that the movie was interesting so I went to see it, but it wasn't that interesting."
                  }
                ],
                "lesson_number": 88
              },
              {
                "vocab": "恐らく",
                "furigana": "おそらく",
                "meaning_vi": "có lẽ",
                "meaning_en": "maybe",
                "examples": [
                  {
                    "example_text": "大学に行かないと言ったら、父は恐らく反対するだろう。",
                    "furigana": "大学（だいがく）いいちちおそはんたいするだろう。",
                    "meaning_vi": "Nếu nói không đi học đại học e là bố sẽ phản đối.",
                    "meaning_en": "If I said I wasn't going to college, my father would probably oppose it."
                  }
                ],
                "lesson_number": 88
              },
              {
                "vocab": "むしろ",
                "furigana": "むしろ",
                "meaning_vi": "Hơn là",
                "meaning_en": "Rather",
                "examples": [
                  {
                    "example_text": "寒さより、むしろ暑さの方が私には耐え難い。",
                    "furigana": "寒（さむ）あつほうわたしたがたい。",
                    "meaning_vi": "Tôi chịu nóng kém hơn chịu lạnh.",
                    "meaning_en": "I find the heat more difficult for me than the cold."
                  }
                ],
                "lesson_number": 88
              },
              {
                "vocab": "果たして",
                "furigana": "はたして",
                "meaning_vi": "Nó có đúng không?",
                "meaning_en": "Is it true?",
                "examples": [
                  {
                    "example_text": "この実験は果たして成功するだろうか。",
                    "furigana": "この実験（じっけん）はせいこうするだろうか。",
                    "meaning_vi": "Thực nghiệm này quả nhiên là sẽ thành công đúng không.",
                    "meaning_en": "Will this experiment be a success?"
                  }
                ],
                "lesson_number": 88
              },
              {
                "vocab": "かえって",
                "furigana": "かえって",
                "meaning_vi": "Quay lại",
                "meaning_en": "Come back",
                "examples": [
                  {
                    "example_text": "遅れそうだったのでタクシーに乗ったら、道が込んで、かえって時間がかかってしまった。",
                    "furigana": "遅（おく）のみちこじかんがかかってしまった。",
                    "meaning_vi": "Có vẻ muộn nên lên tắc xi đi, nhưng đường tắc, ngược lại còn tốn thời gian hơn.",
                    "meaning_en": "I was about to be late so I got in a taxi and the road got in and it took me a little longer."
                  }
                ],
                "lesson_number": 88
              },
              {
                "vocab": "必ずしも",
                "furigana": "かならずしも",
                "meaning_vi": "nhất thiết",
                "meaning_en": "necessarily",
                "examples": [
                  {
                    "example_text": "お金があれば幸せとは、必ずしも言えないだろう。",
                    "furigana": "お金（かね）しあわかならいえないだろう。",
                    "meaning_vi": "Không thể nói rằng có tiền là có hạnh phúc.",
                    "meaning_en": "It's not necessarily possible to say that you're happy if you have money."
                  }
                ],
                "lesson_number": 88
              },
              {
                "vocab": "単に",
                "furigana": "たんに",
                "meaning_vi": "đơn giản",
                "meaning_en": "simple",
                "examples": [
                  {
                    "example_text": "環境問題は単に先進国のみの問題ではない。",
                    "furigana": "環境（かんきょう）もんだいたんせんしんこくもんだいではない。",
                    "meaning_vi": "Vấn đề môi trường không đơn giản là vấn đề của các nước phát triển.",
                    "meaning_en": "Environmental issues are not merely problems in developed countries."
                  }
                ],
                "lesson_number": 88
              },
              {
                "vocab": "いまだに",
                "furigana": "いまだに",
                "meaning_vi": "Vẫn",
                "meaning_en": "Still",
                "examples": [
                  {
                    "example_text": "3日前に出した手紙がいまだに着かないのはおかしい。",
                    "furigana": "3日（みっか）まえだてがみつかないのはおかしい。",
                    "meaning_vi": "Lá thư gửi từ 3 ngày trước đến giờ vẫn chưa đến thật là kì lạ.",
                    "meaning_en": "It's strange that the letter I sent three days ago hasn't arrived yet."
                  }
                ],
                "lesson_number": 88
              },
              {
                "vocab": "ついでに",
                "furigana": "ついでに",
                "meaning_vi": "Ngoài ra",
                "meaning_en": "Besides",
                "examples": [
                  {
                    "example_text": "「散歩に行くんだったら、ついでにこの手紙を出してきた」",
                    "furigana": "「散歩（さんぽ）いてがみだしてきた」",
                    "meaning_vi": "Nếu đi tản bộ thì nhân tiện gửi lá thư này với nhé.",
                    "meaning_en": "\"I was going for a walk and then I sent this letter out.\""
                  }
                ],
                "lesson_number": 88
              },
              {
                "vocab": "とりあえず",
                "furigana": "とりあえず",
                "meaning_vi": "Bây giờ",
                "meaning_en": "Now",
                "examples": [
                  {
                    "example_text": "財布を落としてしまったので、とりあえず警察に届けた。",
                    "furigana": "財布（さいふ）おけいさつとどけた。",
                    "meaning_vi": "Làm rơi ví mất nên tạm thời đến báo đồn cảnh sát.",
                    "meaning_en": "I lost my wallet so I sent it to the police for now."
                  }
                ],
                "lesson_number": 88
              },
              {
                "vocab": "万一・万が一",
                "furigana": "まんいち・まんがいち",
                "meaning_vi": "Trong sự kiện không thể xảy ra",
                "meaning_en": "During the event could not occur",
                "examples": [
                  {
                    "example_text": "大丈夫だと思うが、万一失敗したらどうしよう。",
                    "furigana": "大丈夫（だいじょうぶ）おもまんいちしっぱいしたらどうしよう。",
                    "meaning_vi": "Tôi nghĩ là không sao nhưng trong trường hợp thất bại thì làm sao?",
                    "meaning_en": "I think it's okay, but what if I fail?"
                  }
                ],
                "lesson_number": 88
              },
              {
                "vocab": "偶然",
                "furigana": "ぐうぜん",
                "meaning_vi": "tình cờ",
                "meaning_en": "incidentally",
                "examples": [
                  {
                    "example_text": "駅で偶然昔の知り合いに会った。",
                    "furigana": "駅（えき）ぐうぜんむかししああった。",
                    "meaning_vi": "Tình cờ gặp lại người quen ở nhà ga.",
                    "meaning_en": "I happened to meet an old acquaintance at the station."
                  }
                ],
                "lesson_number": 88
              },
              {
                "vocab": "偶々",
                "furigana": "々たまたま",
                "meaning_vi": "Sau cùng",
                "meaning_en": "Last",
                "examples": [
                  {
                    "example_text": "たまたま入った喫茶店は、友達に会った。",
                    "furigana": "たまたま入（はい）きっさてんともだちあった。",
                    "meaning_vi": "Gặp bạn ở quán cà phê hay vào.",
                    "meaning_en": "I happened to go to a cafe and met a friend."
                  }
                ],
                "lesson_number": 89
              },
              {
                "vocab": "実際",
                "furigana": "じっさい",
                "meaning_vi": "thật sự",
                "meaning_en": "actually",
                "examples": [
                  {
                    "example_text": "簡単そうに見えても、実際にやってみるとうまくできないことが多い。",
                    "furigana": "簡単（かんたん）みじっさいおおい。",
                    "meaning_vi": "Nhìn có vẻ đơn giản nhưng nhiều trường hợp thực tế khi bắt tay vào làm thì không tiến triển tốt.",
                    "meaning_en": "Even if it looks easy, it often doesn't work when you try it."
                  }
                ],
                "lesson_number": 89
              },
              {
                "vocab": "同様",
                "furigana": "どうよう",
                "meaning_vi": "Tương tự",
                "meaning_en": "Similar",
                "examples": [
                  {
                    "example_text": "リサイクルショップには新品同様の物もある。",
                    "furigana": "リサイクルショップには新品（しんぴん）どうようものもある。",
                    "meaning_vi": "Ở trong cửa hàng tái chế cũng có cả những sản phẩm giống với sản phẩm mới.",
                    "meaning_en": "There are also items in recycling shops that are as new."
                  }
                ],
                "lesson_number": 89
              },
              {
                "vocab": "元々",
                "furigana": "もともと",
                "meaning_vi": "ban đầu",
                "meaning_en": "initial",
                "examples": [
                  {
                    "example_text": "元々体が弱かったのだが、最近一層疲れやすかった。",
                    "furigana": "元々（もともと）からだよわさいきんいっそうつかれやすかった。",
                    "meaning_vi": "Vốn dĩ thì cơ thể đã yếu rồi nhưng gần đây thì lại càng dễ mệt hơn.",
                    "meaning_en": "I was originally physically weak, but recently I've been even more tired."
                  }
                ],
                "lesson_number": 89
              },
              {
                "vocab": "本来",
                "furigana": "ほんらい",
                "meaning_vi": "ban đầu",
                "meaning_en": "initial",
                "examples": [
                  {
                    "example_text": "このビルは本来昨年完成の予定だったが、資金不足でまだ完成していない。",
                    "furigana": "このビルは本来（ほんらい）さくねんかんせいよていしきんぶそくかんせいしていない。",
                    "meaning_vi": "Tòa nhà này vốn dĩ dự tính năm ngoái hoàn thành nhưng vì thiếu vốn đầu tư nên vẫn chưa xong.",
                    "meaning_en": "This building was originally scheduled to be completed last year, but due to a lack of funds, it has not yet been completed."
                  }
                ],
                "lesson_number": 89
              },
              {
                "vocab": "ある",
                "furigana": "ある",
                "meaning_vi": "là",
                "meaning_en": "To be",
                "examples": [
                  {
                    "example_text": "ある人から、近々人事異動があると聞いた。",
                    "furigana": "ある人（ひと）ちかぢかじんじいどうきいた。",
                    "meaning_vi": "Tôi nghe từ người ấy sẽ có cải tổ chính phủ trong thời gian tới.",
                    "meaning_en": "I heard from someone that there will be a personnel change soon."
                  }
                ],
                "lesson_number": 89
              },
              {
                "vocab": "有らゆる",
                "furigana": "たもつらゆる",
                "meaning_vi": "tất cả",
                "meaning_en": "all",
                "examples": [
                  {
                    "example_text": "あの博物館にはあらゆる種類の昆虫が集められている。",
                    "furigana": "あの博物館（はくぶつかん）しゅるいこんちゅうあつめられている。",
                    "meaning_vi": "Viện bảo tàng nọ tập hợp rất nhiều loại côn trùng.",
                    "meaning_en": "The museum has all sorts of insects gathered there."
                  }
                ],
                "lesson_number": 89
              },
              {
                "vocab": "大した",
                "furigana": "たいした",
                "meaning_vi": "Một lớn",
                "meaning_en": "Large",
                "examples": [
                  {
                    "example_text": "「けがの具合はどうですか」「大したことはありません」",
                    "furigana": "「けがの具合（ぐあい）たいしたことはありません」",
                    "meaning_vi": "\"Tình trạng vết thương thế nào?\"\"Không có gì nghiêm trọng ạ\"",
                    "meaning_en": "\"How are you injured?\" \"Nothing is a big deal.\""
                  }
                ],
                "lesson_number": 89
              },
              {
                "vocab": "所謂",
                "furigana": "いわゆる",
                "meaning_vi": "Cái gọi là",
                "meaning_en": "The so -called",
                "examples": [
                  {
                    "example_text": "私はいわゆる受験戦争とは無縁の高校時代を過ごした。",
                    "furigana": "私（わたし）じゅけんせんそうむえんこうこうじだいすごした。",
                    "meaning_vi": "Tóm lại thời cấp 3, tôi không tham gia vào chạy đua thi cử.",
                    "meaning_en": "I spent my high school days that were not related to the so-called entrance exam war."
                  }
                ],
                "lesson_number": 89
              }
            
        ]