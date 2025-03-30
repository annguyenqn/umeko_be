export interface KanjiExampleSeed {
    example_text: string;
    meaning_vi: string;
    meaning_en: string;
    furigana: string;
  }
  
  export interface KanjiSeedData {
    kanji: string;
    han_viet: string;
    radicals?: string;
    strokes: number;
    meaning_vi: string;
    meaning_en: string;
    on_reading: string[];
    kun_reading: string[];
    level: string;
  
    examples?: KanjiExampleSeed[];
  }
export const kanjiSeedData: KanjiSeedData[] = [
    {
        "kanji": "安",
        "kun_reading": [
            "やすい"
        ],
        "on_reading": [
            "アン"
        ],
        "han_viet": "AN",
        "meaning_vi": "Bình an, an toàn, rẻ",
        "meaning_en": "Peaceful, safe, cheap",
        "radicals": "宀",
        "strokes": 6,
        "level": "N5",
        "examples": [
            {
                "example_text": "この店は安いです。",
                "furigana": "このみせはやすいです。",
                "meaning_vi": "Cửa hàng này rẻ.",
                "meaning_en": "This shop is cheap."
            },
            {
                "example_text": "安全な場所を探してください。",
                "furigana": "あんぜんなばしょをさがしてください。",
                "meaning_vi": "Hãy tìm một nơi an toàn.",
                "meaning_en": "Please find a safe place."
            }
        ]
    },
    {
        "kanji": "一",
        "kun_reading": [
            "ひとつ"
        ],
        "on_reading": [
            "イチ",
            "イツ"
        ],
        "han_viet": "NHẤT",
        "meaning_vi": "Một",
        "meaning_en": "One",
        "radicals": "一",
        "strokes": 1,
        "level": "N5",
        "examples": [
            {
                "example_text": "リンゴを一つください。",
                "furigana": "りんごをひとつください。",
                "meaning_vi": "Cho tôi một quả táo.",
                "meaning_en": "Please give me one apple."
            },
            {
                "example_text": "一日中勉強しました。",
                "furigana": "いちにちじゅうべんきょうしました。",
                "meaning_vi": "Tôi đã học suốt cả ngày.",
                "meaning_en": "I studied all day long."
            }
        ]
    },
    {
        "kanji": "飲",
        "kun_reading": [
            "のむ"
        ],
        "on_reading": [
            "イン"
        ],
        "han_viet": "ẨM",
        "meaning_vi": "Uống",
        "meaning_en": "Drink",
        "radicals": "食",
        "strokes": 12,
        "level": "N5",
        "examples": [
            {
                "example_text": "水を飲みます。",
                "furigana": "みずをのみます。",
                "meaning_vi": "Tôi uống nước.",
                "meaning_en": "I drink water."
            },
            {
                "example_text": "毎朝コーヒーを飲みます。",
                "furigana": "まいあさコーヒーをのみます。",
                "meaning_vi": "Tôi uống cà phê mỗi sáng.",
                "meaning_en": "I drink coffee every morning."
            }
        ]
    },
    {
        "kanji": "右",
        "kun_reading": [
            "みぎ"
        ],
        "on_reading": [
            "ウ",
            "ユウ"
        ],
        "han_viet": "HỮU",
        "meaning_vi": "Bên phải",
        "meaning_en": "Right",
        "radicals": "口",
        "strokes": 5,
        "level": "N5",
        "examples": [
            {
                "example_text": "右を見てください。",
                "furigana": "みぎをみてください。",
                "meaning_vi": "Hãy nhìn sang phải.",
                "meaning_en": "Please look to the right."
            },
            {
                "example_text": "右手で書きます。",
                "furigana": "みぎてでかきます。",
                "meaning_vi": "Tôi viết bằng tay phải.",
                "meaning_en": "I write with my right hand."
            }
        ]
    },
    {
        "kanji": "雨",
        "kun_reading": [
            "あめ"
        ],
        "on_reading": [
            "ウ"
        ],
        "han_viet": "VŨ",
        "meaning_vi": "Mưa",
        "meaning_en": "Rain",
        "radicals": "雨",
        "strokes": 8,
        "level": "N5",
        "examples": [
            {
                "example_text": "今日は雨が降っています。",
                "furigana": "きょうはあめがふっています。",
                "meaning_vi": "Hôm nay trời đang mưa.",
                "meaning_en": "It's raining today."
            },
            {
                "example_text": "雨の日は家で映画を見ます。",
                "furigana": "あめのひはいえでえいがをみます。",
                "meaning_vi": "Vào ngày mưa tôi xem phim ở nhà.",
                "meaning_en": "On rainy days, I watch movies at home."
            }
        ]
    },
    {
        "kanji": "駅",
        "kun_reading": [],
        "on_reading": ["えき"],
        "han_viet": "DỊCH",
        "meaning_vi": "ga",
        "meaning_en": "station",
        "radicals": "馬",
        "strokes": 14,
        "level": "N5",
        "examples": [
            {
                "example_text": "駅に着きました。",
                "furigana": "えきにつきました。",
                "meaning_vi": "Tôi đã đến ga.",
                "meaning_en": "I have arrived at the station."
            },
            {
                "example_text": "駅員が案内してくれました。",
                "furigana": "えきいんがあんないしてくれました。",
                "meaning_vi": "Nhân viên nhà ga đã hướng dẫn tôi.",
                "meaning_en": "The station staff guided me."
            }
        ]
    },
    {
        "kanji": "円",
        "kun_reading": ["まる.い"],
        "on_reading": ["えん"],
        "han_viet": "VIÊN",
        "meaning_vi": "đồng yên, tròn",
        "meaning_en": "yen, round",
        "radicals": "冂",
        "strokes": 4,
        "level": "N5",
        "examples": [
            {
                "example_text": "百円を持っています。",
                "furigana": "ひゃくえんをもっています。",
                "meaning_vi": "Tôi có 100 yên.",
                "meaning_en": "I have 100 yen."
            },
            {
                "example_text": "円いテーブルを買いました。",
                "furigana": "まるいテーブルをかいました。",
                "meaning_vi": "Tôi đã mua một cái bàn tròn.",
                "meaning_en": "I bought a round table."
            }
        ]
    },
    {
        "kanji": "火",
        "kun_reading": ["ひ"],
        "on_reading": ["か"],
        "han_viet": "HỎA",
        "meaning_vi": "lửa, hỏa",
        "meaning_en": "fire",
        "radicals": "火",
        "strokes": 4,
        "level": "N5",
        "examples": [
            {
                "example_text": "火をつけないでください。",
                "furigana": "ひをつけないでください。",
                "meaning_vi": "Xin đừng đốt lửa.",
                "meaning_en": "Please do not light a fire."
            },
            {
                "example_text": "火曜日は忙しいです。",
                "furigana": "かようびはいそがしいです。",
                "meaning_vi": "Thứ ba tôi bận.",
                "meaning_en": "Tuesday is busy for me."
            }
        ]
    },
    {
        "kanji": "花",
        "kun_reading": ["はな"],
        "on_reading": ["か"],
        "han_viet": "HOA",
        "meaning_vi": "hoa",
        "meaning_en": "flower",
        "radicals": "艹",
        "strokes": 7,
        "level": "N5",
        "examples": [
            {
                "example_text": "この花はきれいです。",
                "furigana": "このはなはきれいです。",
                "meaning_vi": "Bông hoa này đẹp.",
                "meaning_en": "This flower is beautiful."
            },
            {
                "example_text": "春に花が咲きます。",
                "furigana": "はるにはながさきます。",
                "meaning_vi": "Hoa nở vào mùa xuân.",
                "meaning_en": "Flowers bloom in spring."
            }
        ]
    },
    {
        "kanji": "下",
        "kun_reading": ["した", "さ.げる", "お.ろす", "く.だる"],
        "on_reading": ["か", "げ"],
        "han_viet": "HẠ",
        "meaning_vi": "dưới, phía dưới, hạ/xuống",
        "meaning_en": "down, below",
        "radicals": "一",
        "strokes": 3,
        "level": "N5",
        "examples": [
            {
                "example_text": "机の下に猫がいます。",
                "furigana": "つくえのしたにねこがいます。",
                "meaning_vi": "Có một con mèo dưới bàn.",
                "meaning_en": "There is a cat under the desk."
            },
            {
                "example_text": "階段を下ります。",
                "furigana": "かいだんをおります。",
                "meaning_vi": "Tôi đi xuống cầu thang.",
                "meaning_en": "I go down the stairs."
            }
        ]
    },
    {
        "kanji": "何",
        "kun_reading": ["なに", "なん"],
        "on_reading": ["か"],
        "han_viet": "HÀ",
        "meaning_vi": "cái gì/cái nào",
        "meaning_en": "what",
        "radicals": "亻",
        "strokes": 7,
        "level": "N5",
        "examples": [
            {
                "example_text": "何を食べますか？",
                "furigana": "なにをたべますか？",
                "meaning_vi": "Bạn ăn gì?",
                "meaning_en": "What do you eat?"
            },
            {
                "example_text": "何時に起きますか？",
                "furigana": "なんじにおきますか？",
                "meaning_vi": "Bạn thức dậy lúc mấy giờ?",
                "meaning_en": "What time do you wake up?"
            }
        ]
    },
    {
        "kanji": "会",
        "kun_reading": ["あ.う"],
        "on_reading": ["かい", "え"],
        "han_viet": "HỘI",
        "meaning_vi": "gặp gỡ, hội họp",
        "meaning_en": "meeting",
        "radicals": "人",
        "strokes": 6,
        "level": "N5",
        "examples": [
            {
                "example_text": "友達と会いました。",
                "furigana": "ともだちとあいました。",
                "meaning_vi": "Tôi đã gặp bạn.",
                "meaning_en": "I met my friend."
            },
            {
                "example_text": "会社で働いています。",
                "furigana": "かいしゃではたらいています。",
                "meaning_vi": "Tôi làm việc ở công ty.",
                "meaning_en": "I work at a company."
            }
        ]
    },
    {
        "kanji": "外",
        "kun_reading": ["そと", "ほか", "はず.れる", "はず.す"],
        "on_reading": ["がい", "げ"],
        "han_viet": "NGOẠI",
        "meaning_vi": "ngoài, khác, tách rời ra",
        "meaning_en": "outside, external",
        "radicals": "夕",
        "strokes": 5,
        "level": "N5",
        "examples": [
            {
                "example_text": "外で遊びます。",
                "furigana": "そとであそびます。",
                "meaning_vi": "Tôi chơi ở ngoài.",
                "meaning_en": "I play outside."
            }
        ]
    },
    {
        "kanji": "学",
        "kun_reading": ["まな.ぶ"],
        "on_reading": ["がく"],
        "han_viet": "HỌC",
        "meaning_vi": "học, khoa học, trường học",
        "meaning_en": "study, school",
        "radicals": "子",
        "strokes": 8,
        "level": "N5",
        "examples": [
            {
                "example_text": "学校に行きます。",
                "furigana": "がっこうにいきます。",
                "meaning_vi": "Tôi đi đến trường.",
                "meaning_en": "I go to school."
            }
        ]
    },
    {
        "kanji": "間",
        "kun_reading": ["あいだ"],
        "on_reading": ["かん", "けん"],
        "han_viet": "GIAN",
        "meaning_vi": "thời gian, khoảng thời gian",
        "meaning_en": "time, interval",
        "radicals": "門",
        "strokes": 12,
        "level": "N5",
        "examples": [
            {
                "example_text": "時間がありません。",
                "furigana": "じかんがありません。",
                "meaning_vi": "Tôi không có thời gian.",
                "meaning_en": "I have no time."
            },
            {
                "example_text": "昼間は暖かいです。",
                "furigana": "ひるまはあたたかいです。",
                "meaning_vi": "Ban ngày thì ấm áp.",
                "meaning_en": "It is warm during the daytime."
            }
        ]
    },
    {
        "kanji": "気",
        "kun_reading": [],
        "on_reading": ["き", "け"],
        "han_viet": "KHÍ",
        "meaning_vi": "tinh thần, tâm trạng",
        "meaning_en": "spirit, mood",
        "radicals": "气",
        "strokes": 6,
        "level": "N5",
        "examples": [
            {
                "example_text": "元気ですか？",
                "furigana": "げんきですか？",
                "meaning_vi": "Bạn khỏe không?",
                "meaning_en": "How are you?"
            },
            {
                "example_text": "天気がいいですね。",
                "furigana": "てんきがいいですね。",
                "meaning_vi": "Thời tiết đẹp nhỉ.",
                "meaning_en": "The weather is nice, isn't it?"
            }
        ]
    },
    {
        "kanji": "九",
        "kun_reading": ["ここの.つ"],
        "on_reading": ["きゅう", "く"],
        "han_viet": "CỬU",
        "meaning_vi": "chín",
        "meaning_en": "nine",
        "radicals": "乙",
        "strokes": 2,
        "level": "N5",
        "examples": [
            {
                "example_text": "九月に日本へ行きます。",
                "furigana": "くがつににほんへいきます。",
                "meaning_vi": "Tôi sẽ đi Nhật vào tháng 9.",
                "meaning_en": "I will go to Japan in September."
            },
            {
                "example_text": "九時に起きます。",
                "furigana": "くじにおきます。",
                "meaning_vi": "Tôi thức dậy lúc 9 giờ.",
                "meaning_en": "I wake up at 9 o’clock."
            }
        ]
    },
    {
        "kanji": "休",
        "kun_reading": ["やす.む"],
        "on_reading": ["きゅう"],
        "han_viet": "HƯU",
        "meaning_vi": "nghỉ ngơi",
        "meaning_en": "rest",
        "radicals": "亻",
        "strokes": 6,
        "level": "N5",
        "examples": [
            {
                "example_text": "今日は休みです。",
                "furigana": "きょうはやすみです。",
                "meaning_vi": "Hôm nay là ngày nghỉ.",
                "meaning_en": "Today is a holiday."
            },
            {
                "example_text": "夏休みが始まります。",
                "furigana": "なつやすみがはじまります。",
                "meaning_vi": "Kỳ nghỉ hè bắt đầu.",
                "meaning_en": "Summer vacation starts."
            }
        ]
    },
    {
        "kanji": "魚",
        "kun_reading": ["さかな", "うお"],
        "on_reading": ["ぎょ"],
        "han_viet": "NGƯ",
        "meaning_vi": "cá",
        "meaning_en": "fish",
        "radicals": "魚",
        "strokes": 11,
        "level": "N5",
        "examples": [
            {
                "example_text": "魚を食べます。",
                "furigana": "さかなをたべます。",
                "meaning_vi": "Tôi ăn cá.",
                "meaning_en": "I eat fish."
            },
            {
                "example_text": "金魚を飼っています。",
                "furigana": "きんぎょをかっています。",
                "meaning_vi": "Tôi nuôi cá vàng.",
                "meaning_en": "I have a goldfish."
            }
        ]
    },
    {
        "kanji": "金",
        "kun_reading": ["かね"],
        "on_reading": ["きん", "こん"],
        "han_viet": "KIM",
        "meaning_vi": "vàng, tiền",
        "meaning_en": "gold, money",
        "radicals": "金",
        "strokes": 8,
        "level": "N5",
        "examples": [
            {
                "example_text": "お金を持っていますか？",
                "furigana": "おかねをもっていますか？",
                "meaning_vi": "Bạn có tiền không?",
                "meaning_en": "Do you have money?"
            },
            {
                "example_text": "金曜日に会いましょう。",
                "furigana": "きんようびにあいましょう。",
                "meaning_vi": "Hãy gặp nhau vào thứ sáu.",
                "meaning_en": "Let's meet on Friday."
            }
        ]
    },
    {
        "kanji": "空",
        "kun_reading": ["そら", "あ.ける", "あ.く", "から"],
        "on_reading": ["くう"],
        "han_viet": "KHÔNG",
        "meaning_vi": "bầu trời, trống, chỗ trống",
        "meaning_en": "sky, empty",
        "radicals": "穴",
        "strokes": 8,
        "level": "N5",
        "examples": [
            {
                "example_text": "空が青いですね。",
                "furigana": "そらがあおいですね。",
                "meaning_vi": "Bầu trời thật xanh.",
                "meaning_en": "The sky is blue."
            },
            {
                "example_text": "空港で待っています。",
                "furigana": "くうこうでまっています。",
                "meaning_vi": "Tôi đang đợi ở sân bay.",
                "meaning_en": "I am waiting at the airport."
            }
        ]
    },
    {
        "kanji": "月",
        "kun_reading": ["つき"],
        "on_reading": ["げつ", "がつ"],
        "han_viet": "NGUYỆT",
        "meaning_vi": "tháng, mặt trăng",
        "meaning_en": "moon, month",
        "radicals": "月",
        "strokes": 4,
        "level": "N5",
        "examples": [
            {
                "example_text": "月がきれいですね。",
                "furigana": "つきがきれいですね。",
                "meaning_vi": "Mặt trăng đẹp nhỉ.",
                "meaning_en": "The moon is beautiful, isn't it?"
            },
            {
                "example_text": "来月旅行します。",
                "furigana": "らいげつりょこうします。",
                "meaning_vi": "Tôi sẽ đi du lịch vào tháng sau.",
                "meaning_en": "I will travel next month."
            }
        ]
    },
    {
        "kanji": "見",
        "kun_reading": ["み.る", "み.える", "み.せる"],
        "on_reading": ["けん"],
        "han_viet": "KIẾN",
        "meaning_vi": "nhìn, ngắm, cho xem",
        "meaning_en": "see, look",
        "radicals": "見",
        "strokes": 7,
        "level": "N5",
        "examples": [
            {
                "example_text": "映画を見ました。",
                "furigana": "えいがをみました。",
                "meaning_vi": "Tôi đã xem phim.",
                "meaning_en": "I watched a movie."
            }
        ]
    },
    {
        "kanji": "言",
        "kun_reading": ["い.う", "こと"],
        "on_reading": ["げん", "ごん"],
        "han_viet": "NGÔN",
        "meaning_vi": "từ ngữ, nói",
        "meaning_en": "words, speech",
        "radicals": "言",
        "strokes": 7,
        "level": "N5",
        "examples": [
            {
                "example_text": "彼は「ありがとう」と言いました。",
                "furigana": "かれは「ありがとう」といいました。",
                "meaning_vi": "Anh ấy đã nói 'cảm ơn'.",
                "meaning_en": "He said 'thank you'."
            },
            {
                "example_text": "日本語の言葉を学ぶ。",
                "furigana": "にほんごのことばをまなぶ。",
                "meaning_vi": "Học từ vựng tiếng Nhật.",
                "meaning_en": "Learn Japanese words."
            }
        ]
    },
    {
        "kanji": "古",
        "kun_reading": ["ふる.い"],
        "on_reading": ["こ"],
        "han_viet": "CỔ",
        "meaning_vi": "cũ, cổ",
        "meaning_en": "old, ancient",
        "radicals": "口",
        "strokes": 5,
        "level": "N5",
        "examples": [
            {
                "example_text": "古い本を読みます。",
                "furigana": "ふるいほんをよみます。",
                "meaning_vi": "Tôi đọc sách cũ.",
                "meaning_en": "I read old books."
            },
            {
                "example_text": "古書を探しています。",
                "furigana": "こしょをさがしています。",
                "meaning_vi": "Tôi đang tìm sách cổ.",
                "meaning_en": "I am looking for old books."
            }
        ]
    },
    {
        "kanji": "五",
        "kun_reading": ["いつ.つ"],
        "on_reading": ["ご"],
        "han_viet": "NGŨ",
        "meaning_vi": "năm",
        "meaning_en": "five",
        "radicals": "二",
        "strokes": 4,
        "level": "N5",
        "examples": [
            {
                "example_text": "五つのりんごがあります。",
                "furigana": "いつつのりんごがあります。",
                "meaning_vi": "Có năm quả táo.",
                "meaning_en": "There are five apples."
            },
            {
                "example_text": "五千円を払いました。",
                "furigana": "ごせんえんをはらいました。",
                "meaning_vi": "Tôi đã trả 5000 yên.",
                "meaning_en": "I paid 5000 yen."
            }
        ]
    },
    {
        "kanji": "後",
        "kun_reading": ["あと", "おく.れる", "のち"],
        "on_reading": ["ご", "こう"],
        "han_viet": "HẬU",
        "meaning_vi": "sau, đằng sau, muộn",
        "meaning_en": "after, behind, late",
        "radicals": "彳",
        "strokes": 9,
        "level": "N5",
        "examples": [
            {
                "example_text": "授業の後で映画を見ます。",
                "furigana": "じゅぎょうのあとでえいがをみます。",
                "meaning_vi": "Sau buổi học, tôi sẽ xem phim.",
                "meaning_en": "After class, I will watch a movie."
            },
            {
                "example_text": "彼は試験に後れました。",
                "furigana": "かれはしけんにおくれました。",
                "meaning_vi": "Anh ấy đã trễ kỳ thi.",
                "meaning_en": "He was late for the exam."
            }
        ]
    },
    {
        "kanji": "午",
        "kun_reading": [],
        "on_reading": ["ご"],
        "han_viet": "NGỌ",
        "meaning_vi": "trưa, chiều",
        "meaning_en": "noon, afternoon",
        "radicals": "干",
        "strokes": 4,
        "level": "N5",
        "examples": [
            {
                "example_text": "午後に会いましょう。",
                "furigana": "ごごにあいましょう。",
                "meaning_vi": "Hãy gặp vào buổi chiều.",
                "meaning_en": "Let's meet in the afternoon."
            },
            {
                "example_text": "午前中は忙しいです。",
                "furigana": "ごぜんちゅうはいそがしいです。",
                "meaning_vi": "Tôi bận cả buổi sáng.",
                "meaning_en": "I'm busy in the morning."
            }
        ]
    },
    {
        "kanji": "語",
        "kun_reading": ["かた.る", "かた.らう"],
        "on_reading": ["ご"],
        "han_viet": "NGỮ",
        "meaning_vi": "ngôn từ, nói/kể",
        "meaning_en": "language, talk",
        "radicals": "言",
        "strokes": 14,
        "level": "N5",
        "examples": [
            {
                "example_text": "日本語を勉強しています。",
                "furigana": "にほんごをべんきょうしています。",
                "meaning_vi": "Tôi đang học tiếng Nhật.",
                "meaning_en": "I am studying Japanese."
            },
            {
                "example_text": "彼は物語を語った。",
                "furigana": "かれはものがたりをかたった。",
                "meaning_vi": "Anh ấy đã kể một câu chuyện.",
                "meaning_en": "He told a story."
            }
        ]
    },
    {
        "kanji": "校",
        "kun_reading": [],
        "on_reading": ["こう"],
        "han_viet": "GIÁO",
        "meaning_vi": "trường học",
        "meaning_en": "school",
        "radicals": "木",
        "strokes": 10,
        "level": "N5",
        "examples": [
            {
                "example_text": "学校に行きます。",
                "furigana": "がっこうにいきます。",
                "meaning_vi": "Tôi đi đến trường.",
                "meaning_en": "I go to school."
            },
            {
                "example_text": "高校の友達と会いました。",
                "furigana": "こうこうのともだちとあいました。",
                "meaning_vi": "Tôi đã gặp bạn cấp ba.",
                "meaning_en": "I met my high school friend."
            }
        ]
    },
    {
        "kanji": "口",
        "kun_reading": ["くち"],
        "on_reading": ["こう", "く"],
        "han_viet": "KHẨU",
        "meaning_vi": "miệng",
        "meaning_en": "mouth",
        "radicals": "口",
        "strokes": 3,
        "level": "N5",
        "examples": [
            {
                "example_text": "口を大きく開けてください。",
                "furigana": "くちをおおきくあけてください。",
                "meaning_vi": "Hãy mở miệng to ra.",
                "meaning_en": "Please open your mouth wide."
            },
            {
                "example_text": "彼は甘口のカレーが好きです。",
                "furigana": "かれはあまくちのカレーがすきです。",
                "meaning_vi": "Anh ấy thích cà ri vị ngọt.",
                "meaning_en": "He likes sweet curry."
            }
        ]
    },
    {
        "kanji": "行",
        "kun_reading": ["い.く", "ゆ.く", "おこな.う"],
        "on_reading": ["こう"],
        "han_viet": "HÀNH",
        "meaning_vi": "đi, tiến hành",
        "meaning_en": "go, conduct",
        "radicals": "行",
        "strokes": 6,
        "level": "N5",
        "examples": [
            {
                "example_text": "私は学校へ行きます。",
                "furigana": "わたしはがっこうへいきます。",
                "meaning_vi": "Tôi đi đến trường.",
                "meaning_en": "I go to school."
            },
            {
                "example_text": "旅行が大好きです。",
                "furigana": "りょこうがだいすきです。",
                "meaning_vi": "Tôi rất thích đi du lịch.",
                "meaning_en": "I love traveling."
            }
        ]
    },
    {
        "kanji": "高",
        "kun_reading": ["たか.い", "たか.まる", "たか.める"],
        "on_reading": ["こう"],
        "han_viet": "CAO",
        "meaning_vi": "cao, nâng cao, đắt",
        "meaning_en": "high, tall, expensive",
        "radicals": "高",
        "strokes": 10,
        "level": "N5",
        "examples": [
            {
                "example_text": "この建物はとても高いです。",
                "furigana": "このたてものはとてもたかいです。",
                "meaning_vi": "Tòa nhà này rất cao.",
                "meaning_en": "This building is very tall."
            },
            {
                "example_text": "この本は値段が高い。",
                "furigana": "このほんはねだんがたかい。",
                "meaning_vi": "Cuốn sách này có giá cao.",
                "meaning_en": "This book is expensive."
            }
        ]
    },
    {
        "kanji": "国",
        "kun_reading": ["くに"],
        "on_reading": ["こく"],
        "han_viet": "QUỐC",
        "meaning_vi": "đất nước",
        "meaning_en": "country, nation",
        "radicals": "囗",
        "strokes": 8,
        "level": "N5",
        "examples": [
            {
                "example_text": "日本は美しい国です。",
                "furigana": "にほんはうつくしいくにです。",
                "meaning_vi": "Nhật Bản là một đất nước đẹp.",
                "meaning_en": "Japan is a beautiful country."
            },
            {
                "example_text": "中国に行ったことがありますか？",
                "furigana": "ちゅうごくにいったことがありますか？",
                "meaning_vi": "Bạn đã từng đến Trung Quốc chưa?",
                "meaning_en": "Have you ever been to China?"
            }
        ]
    },
    {
        "kanji": "今",
        "kun_reading": ["いま"],
        "on_reading": ["こん", "きん"],
        "han_viet": "KIM",
        "meaning_vi": "bây giờ, hiện tại",
        "meaning_en": "now, present",
        "radicals": "人",
        "strokes": 4,
        "level": "N5",
        "examples": [
            {
                "example_text": "今何時ですか？",
                "furigana": "いまなんじですか？",
                "meaning_vi": "Bây giờ là mấy giờ?",
                "meaning_en": "What time is it now?"
            },
            {
                "example_text": "今週の予定は何ですか？",
                "furigana": "こんしゅうのよていはなんですか？",
                "meaning_vi": "Lịch trình tuần này là gì?",
                "meaning_en": "What is the schedule for this week?"
            }
        ]
    },
    {
        "kanji": "左",
        "kun_reading": ["ひだり"],
        "on_reading": ["さ"],
        "han_viet": "TẢ",
        "meaning_vi": "bên trái",
        "meaning_en": "left",
        "radicals": "工",
        "strokes": 5,
        "level": "N5",
        "examples": [
            {
                "example_text": "左に曲がってください。",
                "furigana": "ひだりにまがってください。",
                "meaning_vi": "Hãy rẽ trái.",
                "meaning_en": "Please turn left."
            },
            {
                "example_text": "左手で書く。",
                "furigana": "ひだりてでかく。",
                "meaning_vi": "Viết bằng tay trái.",
                "meaning_en": "Write with the left hand."
            }
        ]
    },
    {
        "kanji": "三",
        "kun_reading": ["みっつ"],
        "on_reading": ["さん"],
        "han_viet": "TAM",
        "meaning_vi": "ba, số ba",
        "meaning_en": "three",
        "radicals": "一",
        "strokes": 3,
        "level": "N5",
        "examples": [
            {
                "example_text": "リンゴを三つください。",
                "furigana": "りんごをみっつください。",
                "meaning_vi": "Cho tôi ba quả táo.",
                "meaning_en": "Please give me three apples."
            },
            {
                "example_text": "私は三日間旅行しました。",
                "furigana": "わたしはみっかかんりょこうしました。",
                "meaning_vi": "Tôi đã đi du lịch trong ba ngày.",
                "meaning_en": "I traveled for three days."
            }
        ]
    },
    {
        "kanji": "山",
        "kun_reading": ["やま"],
        "on_reading": ["さん"],
        "han_viet": "SAN",
        "meaning_vi": "núi",
        "meaning_en": "mountain",
        "radicals": "山",
        "strokes": 3,
        "level": "N5",
        "examples": [
            {
                "example_text": "富士山は日本で一番高い山です。",
                "furigana": "ふじさんはにほんでいちばんたかいやまです。",
                "meaning_vi": "Núi Phú Sĩ là ngọn núi cao nhất ở Nhật.",
                "meaning_en": "Mount Fuji is the highest mountain in Japan."
            },
            {
                "example_text": "山に登るのが好きです。",
                "furigana": "やまにのぼるのがすきです。",
                "meaning_vi": "Tôi thích leo núi.",
                "meaning_en": "I like climbing mountains."
            }
        ]
    },
    {
        "kanji": "四",
        "kun_reading": ["よっつ", "よん", "よ"],
        "on_reading": ["し"],
        "han_viet": "TỨ",
        "meaning_vi": "số bốn",
        "meaning_en": "four",
        "radicals": "囗",
        "strokes": 5,
        "level": "N5",
        "examples": [
            {
                "example_text": "四月は春の季節です。",
                "furigana": "しがつははるのきせつです。",
                "meaning_vi": "Tháng tư là mùa xuân.",
                "meaning_en": "April is the spring season."
            },
            {
                "example_text": "テーブルの上に四つのコップがあります。",
                "furigana": "テーブルのうえによっつのコップがあります。",
                "meaning_vi": "Có bốn cái cốc trên bàn.",
                "meaning_en": "There are four cups on the table."
            }
        ]
    },
    {
        "kanji": "子",
        "kun_reading": ["こ"],
        "on_reading": ["し", "す"],
        "han_viet": "TỬ",
        "meaning_vi": "trẻ con",
        "meaning_en": "child",
        "radicals": "子",
        "strokes": 3,
        "level": "N5",
        "examples": [
            {
                "example_text": "子供は公園で遊んでいます。",
                "furigana": "こどもはこうえんであそんでいます。",
                "meaning_vi": "Đứa trẻ đang chơi ở công viên.",
                "meaning_en": "The child is playing in the park."
            },
            {
                "example_text": "王子は王様の息子です。",
                "furigana": "おうじはおうさまのむすこです。",
                "meaning_vi": "Hoàng tử là con trai của nhà vua.",
                "meaning_en": "The prince is the king's son."
            }
        ]
    },
    {
        "kanji": "耳",
        "kun_reading": ["みみ"],
        "on_reading": ["じ"],
        "han_viet": "NHĨ",
        "meaning_vi": "tai",
        "meaning_en": "ear",
        "radicals": "耳",
        "strokes": 6,
        "level": "N5",
        "examples": [
            {
                "example_text": "彼は耳がいいです。",
                "furigana": "かれはみみがいいです。",
                "meaning_vi": "Anh ấy có thính giác tốt.",
                "meaning_en": "He has good hearing."
            },
            {
                "example_text": "耳目を引くニュース。",
                "furigana": "じもくをひくニュース。",
                "meaning_vi": "Tin tức thu hút sự chú ý.",
                "meaning_en": "News that catches the eye and ear."
            }
        ]
    },
    {
        "kanji": "時",
        "kun_reading": ["とき"],
        "on_reading": ["じ"],
        "han_viet": "THỜI, THÌ",
        "meaning_vi": "thời gian, giờ giấc",
        "meaning_en": "time, hour",
        "radicals": "日",
        "strokes": 10,
        "level": "N5",
        "examples": [
            {
                "example_text": "今は何時ですか？",
                "furigana": "いまはなんじですか？",
                "meaning_vi": "Bây giờ là mấy giờ?",
                "meaning_en": "What time is it now?"
            },
            {
                "example_text": "時計を持っていますか？",
                "furigana": "とけいをもっていますか？",
                "meaning_vi": "Bạn có đồng hồ không?",
                "meaning_en": "Do you have a watch?"
            }
        ]
    },
    {
        "kanji": "七",
        "kun_reading": ["なな.つ", "なな", "なの"],
        "on_reading": ["しち"],
        "han_viet": "THẤT",
        "meaning_vi": "số bảy",
        "meaning_en": "seven",
        "radicals": "一",
        "strokes": 2,
        "level": "N5",
        "examples": [
            {
                "example_text": "今日は七月七日です。",
                "furigana": "きょうはしちがつなのかです。",
                "meaning_vi": "Hôm nay là ngày 7 tháng 7.",
                "meaning_en": "Today is July 7th."
            },
            {
                "example_text": "七つのボールがあります。",
                "furigana": "ななつのボールがあります。",
                "meaning_vi": "Có bảy quả bóng.",
                "meaning_en": "There are seven balls."
            }
        ]
    },
    {
        "kanji": "車",
        "kun_reading": ["くるま"],
        "on_reading": ["しゃ"],
        "han_viet": "XA",
        "meaning_vi": "xe, ô tô",
        "meaning_en": "car, vehicle",
        "radicals": "車",
        "strokes": 7,
        "level": "N5",
        "examples": [
            {
                "example_text": "これは私の車です。",
                "furigana": "これはわたしのくるまです。",
                "meaning_vi": "Đây là xe của tôi.",
                "meaning_en": "This is my car."
            },
            {
                "example_text": "自転車に乗るのが好きです。",
                "furigana": "じてんしゃにのるのがすきです。",
                "meaning_vi": "Tôi thích đi xe đạp.",
                "meaning_en": "I like riding bicycles."
            }
        ]
    },
    {
        "kanji": "社",
        "kun_reading": ["やしろ"],
        "on_reading": ["しゃ"],
        "han_viet": "XÃ",
        "meaning_vi": "đền, miếu, công ty",
        "meaning_en": "shrine, company",
        "radicals": "示",
        "strokes": 7,
        "level": "N5",
        "examples": [
            {
                "example_text": "私は会社で働いています。",
                "furigana": "わたしはかいしゃではたらいています。",
                "meaning_vi": "Tôi làm việc tại công ty.",
                "meaning_en": "I work at a company."
            },
            {
                "example_text": "神社に行ったことがありますか？",
                "furigana": "じんじゃにいったことがありますか？",
                "meaning_vi": "Bạn đã từng đến đền thờ Thần đạo chưa?",
                "meaning_en": "Have you ever been to a Shinto shrine?"
            }
        ]
    },
    {
        "kanji": "手",
        "kun_reading": ["て"],
        "on_reading": ["しゅ"],
        "han_viet": "THỦ",
        "meaning_vi": "tay",
        "meaning_en": "hand",
        "radicals": "手",
        "strokes": 4,
        "level": "N5",
        "examples": [
            {
                "example_text": "彼は手を振った。",
                "furigana": "かれはてをふった。",
                "meaning_vi": "Anh ấy vẫy tay.",
                "meaning_en": "He waved his hand."
            },
            {
                "example_text": "彼は空手を習っています。",
                "furigana": "かれはからてをならっています。",
                "meaning_vi": "Anh ấy đang học karate.",
                "meaning_en": "He is learning karate."
            }
        ]
    },
    {
        "kanji": "手",
        "kun_reading": ["て"],
        "on_reading": ["しゅ"],
        "han_viet": "THỦ",
        "meaning_vi": "tay",
        "meaning_en": "hand",
        "radicals": "手",
        "strokes": 4,
        "level": "N5",
        "examples": [
            {
                "example_text": "彼は手を振った。",
                "furigana": "かれはてをふった。",
                "meaning_vi": "Anh ấy vẫy tay.",
                "meaning_en": "He waved his hand."
            },
            {
                "example_text": "彼は空手を習っています。",
                "furigana": "かれはからてをならっています。",
                "meaning_vi": "Anh ấy đang học karate.",
                "meaning_en": "He is learning karate."
            }
        ]
    },
    {
        "kanji": "十",
        "kun_reading": ["とお", "と"],
        "on_reading": ["じゅう", "じ"],
        "han_viet": "THẬP",
        "meaning_vi": "mười",
        "meaning_en": "ten",
        "radicals": "十",
        "strokes": 2,
        "level": "N5",
        "examples": [
            {
                "example_text": "彼は十歳です。",
                "furigana": "かれはじゅっさいです。",
                "meaning_vi": "Anh ấy 10 tuổi.",
                "meaning_en": "He is ten years old."
            },
            {
                "example_text": "十日後に会いましょう。",
                "furigana": "とおかごにあいましょう。",
                "meaning_vi": "Chúng ta gặp lại sau 10 ngày nhé.",
                "meaning_en": "Let's meet again in ten days."
            }
        ]
    },
    {
        "kanji": "出",
        "kun_reading": ["だ.す", "で.る"],
        "on_reading": ["しゅつ"],
        "han_viet": "XUẤT",
        "meaning_vi": "xuất, rời đi, ra đi",
        "meaning_en": "exit, leave",
        "radicals": "凵",
        "strokes": 5,
        "level": "N5",
        "examples": [
            {
                "example_text": "駅を出ます。",
                "furigana": "えきをでます。",
                "meaning_vi": "Tôi rời khỏi nhà ga.",
                "meaning_en": "I am leaving the station."
            },
            {
                "example_text": "手紙を出しました。",
                "furigana": "てがみをだしました。",
                "meaning_vi": "Tôi đã gửi thư.",
                "meaning_en": "I sent a letter."
            }
        ]
    },
    {
        "kanji": "書",
        "kun_reading": ["か.く"],
        "on_reading": ["しょ"],
        "han_viet": "THƯ",
        "meaning_vi": "viết",
        "meaning_en": "write",
        "radicals": "曰",
        "strokes": 10,
        "level": "N5",
        "examples": [
            {
                "example_text": "私は手紙を書きました。",
                "furigana": "わたしはてがみをかきました。",
                "meaning_vi": "Tôi đã viết thư.",
                "meaning_en": "I wrote a letter."
            },
            {
                "example_text": "この辞書は便利です。",
                "furigana": "このじしょはべんりです。",
                "meaning_vi": "Cuốn từ điển này rất tiện lợi.",
                "meaning_en": "This dictionary is convenient."
            }
        ]
    },
    {
        "kanji": "女",
        "kun_reading": ["おんな", "め"],
        "on_reading": ["じょ", "にょう"],
        "han_viet": "NỮ",
        "meaning_vi": "phụ nữ",
        "meaning_en": "woman",
        "radicals": "女",
        "strokes": 3,
        "level": "N5",
        "examples": [
            {
                "example_text": "彼女は優しい人です。",
                "furigana": "かのじょはやさしいひとです。",
                "meaning_vi": "Cô ấy là một người tốt bụng.",
                "meaning_en": "She is a kind person."
            },
            {
                "example_text": "その女の子はかわいい。",
                "furigana": "そのおんなのこはかわいい。",
                "meaning_vi": "Bé gái đó rất dễ thương.",
                "meaning_en": "That girl is cute."
            }
        ]
    },
    {
        "kanji": "女",
        "kun_reading": ["おんな", "め"],
        "on_reading": ["じょ", "にょう"],
        "han_viet": "NỮ",
        "meaning_vi": "phụ nữ",
        "meaning_en": "woman",
        "radicals": "女",
        "strokes": 3,
        "level": "N5",
        "examples": [
            {
                "example_text": "彼女は優しい人です。",
                "furigana": "かのじょはやさしいひとです。",
                "meaning_vi": "Cô ấy là một người tốt bụng.",
                "meaning_en": "She is a kind person."
            },
            {
                "example_text": "その女の子はかわいい。",
                "furigana": "そのおんなのこはかわいい。",
                "meaning_vi": "Bé gái đó rất dễ thương.",
                "meaning_en": "That girl is cute."
            }
        ]
    },
    {
        "kanji": "少",
        "kun_reading": ["すこ.し", "すく.ない"],
        "on_reading": ["しょう"],
        "han_viet": "THIỂU",
        "meaning_vi": "một chút, một ít",
        "meaning_en": "few, little",
        "radicals": "小",
        "strokes": 4,
        "level": "N5",
        "examples": [
            {
                "example_text": "少し待ってください。",
                "furigana": "すこしまってください。",
                "meaning_vi": "Vui lòng chờ một chút.",
                "meaning_en": "Please wait a little."
            },
            {
                "example_text": "彼の友達は少ないです。",
                "furigana": "かれのともだちはすくないです。",
                "meaning_vi": "Anh ấy có ít bạn.",
                "meaning_en": "He has few friends."
            }
        ]
    },
    {
        "kanji": "上",
        "kun_reading": ["うえ", "かみ", "あ.げる", "あ.がる"],
        "on_reading": ["しょう", "じょう"],
        "han_viet": "THƯỢNG",
        "meaning_vi": "trên, phía trên",
        "meaning_en": "up, above",
        "radicals": "一",
        "strokes": 3,
        "level": "N5",
        "examples": [
            {
                "example_text": "本は机の上にあります。",
                "furigana": "ほんはつくえのうえにあります。",
                "meaning_vi": "Cuốn sách nằm trên bàn.",
                "meaning_en": "The book is on the desk."
            },
            {
                "example_text": "彼は上手に話せます。",
                "furigana": "かれはじょうずにはなせます。",
                "meaning_vi": "Anh ấy nói rất giỏi.",
                "meaning_en": "He can speak well."
            }
        ]
    },
    {
        "kanji": "食",
        "kun_reading": ["た.べる", "く.らう"],
        "on_reading": ["しょく"],
        "han_viet": "THỰC",
        "meaning_vi": "ăn",
        "meaning_en": "eat",
        "radicals": "食",
        "strokes": 9,
        "level": "N5",
        "examples": [
            {
                "example_text": "毎日ご飯を食べます。",
                "furigana": "まいにちごはんをたべます。",
                "meaning_vi": "Tôi ăn cơm mỗi ngày.",
                "meaning_en": "I eat rice every day."
            },
            {
                "example_text": "彼は食堂で昼ご飯を食べました。",
                "furigana": "かれはしょくどうでひるごはんをたべました。",
                "meaning_vi": "Anh ấy đã ăn trưa ở nhà ăn.",
                "meaning_en": "He had lunch at the cafeteria."
            }
        ]
    },
    {
        "kanji": "新",
        "kun_reading": ["あたら.しい", "あら.た", "にい"],
        "on_reading": ["しん"],
        "han_viet": "TÂN",
        "meaning_vi": "mới",
        "meaning_en": "new",
        "radicals": "斤",
        "strokes": 13,
        "level": "N5",
        "examples": [
            {
                "example_text": "私は新しい本を買いました。",
                "furigana": "わたしはあたらしいほんをかいました。",
                "meaning_vi": "Tôi đã mua một cuốn sách mới.",
                "meaning_en": "I bought a new book."
            },
            {
                "example_text": "この新聞を読んでください。",
                "furigana": "このしんぶんをよんでください。",
                "meaning_vi": "Hãy đọc tờ báo này.",
                "meaning_en": "Please read this newspaper."
            }
        ]
    },
    {
        "kanji": "人",
        "kun_reading": ["ひと"],
        "on_reading": ["じん", "にん"],
        "han_viet": "NHÂN",
        "meaning_vi": "người",
        "meaning_en": "person",
        "radicals": "人",
        "strokes": 2,
        "level": "N5",
        "examples": [
            {
                "example_text": "この部屋に何人いますか？",
                "furigana": "このへやになんにんいますか？",
                "meaning_vi": "Có bao nhiêu người trong phòng này?",
                "meaning_en": "How many people are in this room?"
            },
            {
                "example_text": "彼はとてもいい人です。",
                "furigana": "かれはとてもいいひとです。",
                "meaning_vi": "Anh ấy là một người rất tốt.",
                "meaning_en": "He is a very nice person."
            }
        ]
    },
    {
        "kanji": "水",
        "kun_reading": ["みず"],
        "on_reading": ["すい"],
        "han_viet": "THỦY",
        "meaning_vi": "nước",
        "meaning_en": "water",
        "radicals": "水",
        "strokes": 4,
        "level": "N5",
        "examples": [
            {
                "example_text": "水を飲みます。",
                "furigana": "みずをのみます。",
                "meaning_vi": "Tôi uống nước.",
                "meaning_en": "I drink water."
            },
            {
                "example_text": "水泳は楽しいスポーツです。",
                "furigana": "すいえいはたのしいスポーツです。",
                "meaning_vi": "Bơi lội là một môn thể thao thú vị.",
                "meaning_en": "Swimming is a fun sport."
            }
        ]
    },
    {
        "kanji": "生",
        "kun_reading": ["い.きる", "う.む", "は.やす", "なま", "き"],
        "on_reading": ["せい", "しょう"],
        "han_viet": "SINH",
        "meaning_vi": "sống, sinh ra",
        "meaning_en": "life, birth",
        "radicals": "生",
        "strokes": 5,
        "level": "N5",
        "examples": [
            {
                "example_text": "彼は日本で生まれました。",
                "furigana": "かれはにほんでうまれました。",
                "meaning_vi": "Anh ấy sinh ra ở Nhật Bản.",
                "meaning_en": "He was born in Japan."
            },
            {
                "example_text": "私は学生です。",
                "furigana": "わたしはがくせいです。",
                "meaning_vi": "Tôi là học sinh.",
                "meaning_en": "I am a student."
            }
        ]
    },
    {
        "kanji": "西",
        "kun_reading": ["にし"],
        "on_reading": ["せい", "さい"],
        "han_viet": "TÂY",
        "meaning_vi": "phía tây",
        "meaning_en": "west",
        "radicals": "西",
        "strokes": 6,
        "level": "N5",
        "examples": [
            {
                "example_text": "太陽は西に沈みます。",
                "furigana": "たいようはにしにしずみます。",
                "meaning_vi": "Mặt trời lặn ở phía tây.",
                "meaning_en": "The sun sets in the west."
            },
            {
                "example_text": "彼は西の方から来ました。",
                "furigana": "かれはにしのほうからきました。",
                "meaning_vi": "Anh ấy đến từ phía tây.",
                "meaning_en": "He came from the west."
            }
        ]
    },
    {
        "kanji": "川",
        "kun_reading": ["かわ"],
        "on_reading": ["せん"],
        "han_viet": "XUYÊN",
        "meaning_vi": "sông",
        "meaning_en": "river",
        "radicals": "川",
        "strokes": 3,
        "level": "N5",
        "examples": [
            {
                "example_text": "川で泳ぎます。",
                "furigana": "かわでおよぎます。",
                "meaning_vi": "Tôi bơi ở sông.",
                "meaning_en": "I swim in the river."
            },
            {
                "example_text": "川口はとても美しいです。",
                "furigana": "かわぐちはとてもうつくしいです。",
                "meaning_vi": "Cửa sông rất đẹp.",
                "meaning_en": "The river mouth is very beautiful."
            }
        ]
    },
    {
        "kanji": "千",
        "kun_reading": ["ち"],
        "on_reading": ["せん"],
        "han_viet": "THIÊN",
        "meaning_vi": "một ngàn",
        "meaning_en": "thousand",
        "radicals": "千",
        "strokes": 3,
        "level": "N5",
        "examples": [
            {
                "example_text": "私は千円持っています。",
                "furigana": "わたしはせんえんもっています。",
                "meaning_vi": "Tôi có 1000 yên.",
                "meaning_en": "I have 1000 yen."
            },
            {
                "example_text": "千鳥は鳥の種類の一つです。",
                "furigana": "ちどりはとりのしゅるいのひとつです。",
                "meaning_vi": "Chidori là một loại chim.",
                "meaning_en": "Chidori is a type of bird."
            }
        ]
    },
    {
        "kanji": "先",
        "kun_reading": ["さき"],
        "on_reading": ["せん"],
        "han_viet": "TIÊN",
        "meaning_vi": "phía trước, trước, tương lai",
        "meaning_en": "ahead, before, future",
        "radicals": "先",
        "strokes": 6,
        "level": "N5",
        "examples": [
            {
                "example_text": "先生はとても親切です。",
                "furigana": "せんせいはとてもしんせつです。",
                "meaning_vi": "Giáo viên rất tốt bụng.",
                "meaning_en": "The teacher is very kind."
            },
            {
                "example_text": "私は先週東京へ行きました。",
                "furigana": "わたしはせんしゅうとうきょうへいきました。",
                "meaning_vi": "Tôi đã đi Tokyo vào tuần trước.",
                "meaning_en": "I went to Tokyo last week."
            }
        ]
    },
    {
        "kanji": "先",
        "kun_reading": ["さき"],
        "on_reading": ["せん"],
        "han_viet": "TIÊN",
        "meaning_vi": "phía trước, trước, tương lai",
        "meaning_en": "ahead, before, future",
        "radicals": "先",
        "strokes": 6,
        "level": "N5",
        "examples": [
            {
                "example_text": "先生はとても親切です。",
                "furigana": "せんせいはとてもしんせつです。",
                "meaning_vi": "Giáo viên rất tốt bụng.",
                "meaning_en": "The teacher is very kind."
            },
            {
                "example_text": "私は先週東京へ行きました。",
                "furigana": "わたしはせんしゅうとうきょうへいきました。",
                "meaning_vi": "Tôi đã đi Tokyo vào tuần trước.",
                "meaning_en": "I went to Tokyo last week."
            }
        ]
    },
    {
        "kanji": "足",
        "kun_reading": ["あし", "た.りる", "た.す"],
        "on_reading": ["そく"],
        "han_viet": "TÚC",
        "meaning_vi": "chân, đầy đủ, thêm vào",
        "meaning_en": "foot, enough, add",
        "radicals": "足",
        "strokes": 7,
        "level": "N5",
        "examples": [
            {
                "example_text": "彼の足は長いです。",
                "furigana": "かれのあしはながいです。",
                "meaning_vi": "Chân của anh ấy dài.",
                "meaning_en": "His legs are long."
            },
            {
                "example_text": "お金が足りません。",
                "furigana": "おかねがたりません。",
                "meaning_vi": "Không đủ tiền.",
                "meaning_en": "Not enough money."
            }
        ]
    },
    {
        "kanji": "多",
        "kun_reading": ["おお.い"],
        "on_reading": ["た"],
        "han_viet": "ĐA",
        "meaning_vi": "nhiều",
        "meaning_en": "many, much",
        "radicals": "夕",
        "strokes": 6,
        "level": "N5",
        "examples": [
            {
                "example_text": "東京には人が多いです。",
                "furigana": "とうきょうにはひとがおおいです。",
                "meaning_vi": "Ở Tokyo có nhiều người.",
                "meaning_en": "There are many people in Tokyo."
            },
            {
                "example_text": "質問が多すぎます。",
                "furigana": "しつもんがおおすぎます。",
                "meaning_vi": "Có quá nhiều câu hỏi.",
                "meaning_en": "There are too many questions."
            }
        ]
    },
    {
        "kanji": "大",
        "kun_reading": ["おお.きい"],
        "on_reading": ["だい", "たい"],
        "han_viet": "ĐẠI",
        "meaning_vi": "to, lớn",
        "meaning_en": "big, large",
        "radicals": "大",
        "strokes": 3,
        "level": "N5",
        "examples": [
            {
                "example_text": "大きい家に住んでいます。",
                "furigana": "おおきいいえにすんでいます。",
                "meaning_vi": "Tôi sống trong một ngôi nhà lớn.",
                "meaning_en": "I live in a big house."
            },
            {
                "example_text": "大学で勉強します。",
                "furigana": "だいがくでべんきょうします。",
                "meaning_vi": "Tôi học ở đại học.",
                "meaning_en": "I study at a university."
            }
        ]
    },
    {
        "kanji": "男",
        "kun_reading": ["おとこ"],
        "on_reading": ["だん", "なん"],
        "han_viet": "NAM",
        "meaning_vi": "đàn ông",
        "meaning_en": "man",
        "radicals": "田",
        "strokes": 7,
        "level": "N5",
        "examples": [
            {
                "example_text": "彼は優しい男の人です。",
                "furigana": "かれはやさしいおとこのひとです。",
                "meaning_vi": "Anh ấy là một người đàn ông hiền lành.",
                "meaning_en": "He is a kind man."
            },
            {
                "example_text": "男の子が遊んでいます。",
                "furigana": "おとこのこがあそんでいます。",
                "meaning_vi": "Một cậu bé đang chơi.",
                "meaning_en": "A boy is playing."
            }
        ]
    },
    {
        "kanji": "中",
        "kun_reading": ["なか"],
        "on_reading": ["ちゅう"],
        "han_viet": "TRUNG",
        "meaning_vi": "trong, bên trong",
        "meaning_en": "inside, middle",
        "radicals": "丨",
        "strokes": 4,
        "level": "N5",
        "examples": [
            {
                "example_text": "部屋の中に猫がいます。",
                "furigana": "へやのなかにねこがいます。",
                "meaning_vi": "Có một con mèo trong phòng.",
                "meaning_en": "There is a cat in the room."
            },
            {
                "example_text": "中国に行きたいです。",
                "furigana": "ちゅうごくにいきたいです。",
                "meaning_vi": "Tôi muốn đi Trung Quốc.",
                "meaning_en": "I want to go to China."
            }
        ]
    },
    {
        "kanji": "長",
        "kun_reading": ["なが.い"],
        "on_reading": ["ちょう"],
        "han_viet": "TRƯỜNG",
        "meaning_vi": "dài, trưởng",
        "meaning_en": "long, leader",
        "radicals": "長",
        "strokes": 8,
        "level": "N5",
        "examples": [
            {
                "example_text": "彼の髪はとても長いです。",
                "furigana": "かれのかみはとてもながいです。",
                "meaning_vi": "Tóc của anh ấy rất dài.",
                "meaning_en": "His hair is very long."
            },
            {
                "example_text": "部長と話しました。",
                "furigana": "ぶちょうとはなしました。",
                "meaning_vi": "Tôi đã nói chuyện với trưởng phòng.",
                "meaning_en": "I talked to the department head."
            }
        ]
    },
    {
        "kanji": "天",
        "kun_reading": ["あめ", "あま"],
        "on_reading": ["てん"],
        "han_viet": "THIÊN",
        "meaning_vi": "trời, thiên",
        "meaning_en": "sky, heaven",
        "radicals": "天",
        "strokes": 4,
        "level": "N5",
        "examples": [
            {
                "example_text": "天気がいいですね。",
                "furigana": "てんきがいいですね。",
                "meaning_vi": "Thời tiết đẹp nhỉ.",
                "meaning_en": "The weather is nice, isn't it?"
            },
            {
                "example_text": "彼は天使のように優しいです。",
                "furigana": "かれはてんしのようにやさしいです。",
                "meaning_vi": "Anh ấy hiền như thiên thần vậy.",
                "meaning_en": "He is as kind as an angel."
            }
        ]
    },
    {
        "kanji": "店",
        "kun_reading": ["みせ"],
        "on_reading": ["てん"],
        "han_viet": "ĐIẾM",
        "meaning_vi": "cửa hàng",
        "meaning_en": "shop, store",
        "radicals": "广",
        "strokes": 8,
        "level": "N5",
        "examples": [
            {
                "example_text": "この店はとても人気があります。",
                "furigana": "このみせはとてもにんきがあります。",
                "meaning_vi": "Cửa hàng này rất nổi tiếng.",
                "meaning_en": "This store is very popular."
            },
            {
                "example_text": "店員に聞いてみましょう。",
                "furigana": "てんいんにきいてみましょう。",
                "meaning_vi": "Hãy hỏi nhân viên cửa hàng xem.",
                "meaning_en": "Let's ask the store clerk."
            }
        ]
    },
    {
        "kanji": "店",
        "kun_reading": ["みせ"],
        "on_reading": ["てん"],
        "han_viet": "ĐIẾM",
        "meaning_vi": "cửa hàng",
        "meaning_en": "shop, store",
        "radicals": "广",
        "strokes": 8,
        "level": "N5",
        "examples": [
            {
                "example_text": "この店はとても人気があります。",
                "furigana": "このみせはとてもにんきがあります。",
                "meaning_vi": "Cửa hàng này rất nổi tiếng.",
                "meaning_en": "This store is very popular."
            },
            {
                "example_text": "店員に聞いてみましょう。",
                "furigana": "てんいんにきいてみましょう。",
                "meaning_vi": "Hãy hỏi nhân viên cửa hàng xem.",
                "meaning_en": "Let's ask the store clerk."
            }
        ]
    },
    {
        "kanji": "土",
        "kun_reading": ["つち"],
        "on_reading": ["ど", "と"],
        "han_viet": "THỔ",
        "meaning_vi": "đất",
        "meaning_en": "earth, soil",
        "radicals": "土",
        "strokes": 3,
        "level": "N5",
        "examples": [
            {
                "example_text": "土曜日に友達と遊びます。",
                "furigana": "どようびにともだちとあそびます。",
                "meaning_vi": "Tôi sẽ đi chơi với bạn vào thứ bảy.",
                "meaning_en": "I will hang out with my friends on Saturday."
            },
            {
                "example_text": "この土はとても肥えています。",
                "furigana": "このつちはとてもこえています。",
                "meaning_vi": "Đất này rất màu mỡ.",
                "meaning_en": "This soil is very fertile."
            }
        ]
    },
    {
        "kanji": "東",
        "kun_reading": ["ひがし"],
        "on_reading": ["とう"],
        "han_viet": "ĐÔNG",
        "meaning_vi": "phía đông",
        "meaning_en": "east",
        "radicals": "木",
        "strokes": 8,
        "level": "N5",
        "examples": [
            {
                "example_text": "東京は日本の首都です。",
                "furigana": "とうきょうはにほんのしゅとです。",
                "meaning_vi": "Tokyo là thủ đô của Nhật Bản.",
                "meaning_en": "Tokyo is the capital of Japan."
            },
            {
                "example_text": "東の空が明るくなってきた。",
                "furigana": "ひがしのそらがあかるくなってきた。",
                "meaning_vi": "Bầu trời phía đông bắt đầu sáng lên.",
                "meaning_en": "The eastern sky is getting brighter."
            }
        ]
    },
    {
        "kanji": "道",
        "kun_reading": ["みち"],
        "on_reading": ["どう"],
        "han_viet": "ĐẠO",
        "meaning_vi": "đường, con đường",
        "meaning_en": "road, path",
        "radicals": "辶",
        "strokes": 12,
        "level": "N5",
        "examples": [
            {
                "example_text": "この道をまっすぐ行ってください。",
                "furigana": "このみちをまっすぐいってください。",
                "meaning_vi": "Hãy đi thẳng đường này.",
                "meaning_en": "Please go straight on this road."
            },
            {
                "example_text": "茶道を学びたいです。",
                "furigana": "ちゃどうをまなびたいです。",
                "meaning_vi": "Tôi muốn học trà đạo.",
                "meaning_en": "I want to learn tea ceremony."
            }
        ]
    },
    {
        "kanji": "道",
        "kun_reading": ["みち"],
        "on_reading": ["どう"],
        "han_viet": "ĐẠO",
        "meaning_vi": "đường, con đường",
        "meaning_en": "road, path",
        "radicals": "辶",
        "strokes": 12,
        "level": "N5",
        "examples": [
            {
                "example_text": "この道をまっすぐ行ってください。",
                "furigana": "このみちをまっすぐいってください。",
                "meaning_vi": "Hãy đi thẳng đường này.",
                "meaning_en": "Please go straight on this road."
            },
            {
                "example_text": "茶道を学びたいです。",
                "furigana": "ちゃどうをまなびたいです。",
                "meaning_vi": "Tôi muốn học trà đạo.",
                "meaning_en": "I want to learn tea ceremony."
            }
        ]
    },
    {
        "kanji": "南",
        "kun_reading": ["みなみ"],
        "on_reading": ["なん"],
        "han_viet": "NAM",
        "meaning_vi": "phía nam",
        "meaning_en": "south",
        "radicals": "十",
        "strokes": 9,
        "level": "N5",
        "examples": [
            {
                "example_text": "南の方が暖かいです。",
                "furigana": "みなみのほうがあたたかいです。",
                "meaning_vi": "Phía nam ấm hơn.",
                "meaning_en": "The south is warmer."
            },
            {
                "example_text": "南北に長い国です。",
                "furigana": "なんぼくにながいくにです。",
                "meaning_vi": "Đây là một đất nước kéo dài từ bắc xuống nam.",
                "meaning_en": "This is a long country from north to south."
            }
        ]
    },
    {
        "kanji": "二",
        "kun_reading": ["ふた.つ"],
        "on_reading": ["に"],
        "han_viet": "NHỊ",
        "meaning_vi": "hai, số hai",
        "meaning_en": "two",
        "radicals": "二",
        "strokes": 2,
        "level": "N5",
        "examples": [
            {
                "example_text": "リンゴを二つ買いました。",
                "furigana": "りんごをふたつかいました。",
                "meaning_vi": "Tôi đã mua hai quả táo.",
                "meaning_en": "I bought two apples."
            },
            {
                "example_text": "二人で映画を見ました。",
                "furigana": "ふたりでえいがをみました。",
                "meaning_vi": "Hai người chúng tôi đã xem phim.",
                "meaning_en": "We watched a movie together."
            }
        ]
    },
    {
        "kanji": "日",
        "kun_reading": ["ひ", "か"],
        "on_reading": ["にち", "じつ"],
        "han_viet": "NHẬT",
        "meaning_vi": "ngày, mặt trời",
        "meaning_en": "day, sun",
        "radicals": "日",
        "strokes": 4,
        "level": "N5",
        "examples": [
            {
                "example_text": "今日はとても暑いです。",
                "furigana": "きょうはとてもあついです。",
                "meaning_vi": "Hôm nay rất nóng.",
                "meaning_en": "Today is very hot."
            },
            {
                "example_text": "母の日にプレゼントをあげました。",
                "furigana": "ははのひにぷれぜんとをあげました。",
                "meaning_vi": "Tôi đã tặng quà vào Ngày của Mẹ.",
                "meaning_en": "I gave a gift on Mother's Day."
            }
        ]
    },
    {
        "kanji": "入",
        "kun_reading": ["はい.る", "い.れる"],
        "on_reading": ["にゅう"],
        "han_viet": "NHẬP",
        "meaning_vi": "vào, điền vào",
        "meaning_en": "enter, insert",
        "radicals": "入",
        "strokes": 2,
        "level": "N5",
        "examples": [
            {
                "example_text": "部屋に入ってください。",
                "furigana": "へやにはいってください。",
                "meaning_vi": "Hãy vào phòng.",
                "meaning_en": "Please enter the room."
            },
            {
                "example_text": "新しい学校に入学しました。",
                "furigana": "あたらしいがっこうににゅうがくしました。",
                "meaning_vi": "Tôi đã nhập học vào trường mới.",
                "meaning_en": "I enrolled in a new school."
            }
        ]
    },
    {
        "kanji": "年",
        "kun_reading": ["とし"],
        "on_reading": ["ねん"],
        "han_viet": "NIÊN",
        "meaning_vi": "năm",
        "meaning_en": "year",
        "radicals": "干",
        "strokes": 6,
        "level": "N5",
        "examples": [
            {
                "example_text": "今年は日本に行きます。",
                "furigana": "ことしはにほんにいきます。",
                "meaning_vi": "Năm nay tôi sẽ đi Nhật Bản.",
                "meaning_en": "This year, I will go to Japan."
            },
            {
                "example_text": "去年の夏はとても暑かったです。",
                "furigana": "きょねんのなつはとてもあつかったです。",
                "meaning_vi": "Mùa hè năm ngoái rất nóng.",
                "meaning_en": "Last summer was very hot."
            }
        ]
    },
    {
        "kanji": "買",
        "kun_reading": ["か.う"],
        "on_reading": ["ばい"],
        "han_viet": "MÃI",
        "meaning_vi": "mua",
        "meaning_en": "buy",
        "radicals": "貝",
        "strokes": 12,
        "level": "N5",
        "examples": [
            {
                "example_text": "新しい靴を買いました。",
                "furigana": "あたらしいくつをかいました。",
                "meaning_vi": "Tôi đã mua một đôi giày mới.",
                "meaning_en": "I bought new shoes."
            },
            {
                "example_text": "毎日スーパーで買い物をします。",
                "furigana": "まいにちすーぱーでかいものをします。",
                "meaning_vi": "Tôi đi mua sắm ở siêu thị mỗi ngày.",
                "meaning_en": "I shop at the supermarket every day."
            }
        ]
    },
    {
        "kanji": "白",
        "kun_reading": ["しろ.い", "しろ"],
        "on_reading": ["はく", "びゃく"],
        "han_viet": "BẠCH",
        "meaning_vi": "trắng",
        "meaning_en": "white",
        "radicals": "白",
        "strokes": 5,
        "level": "N5",
        "examples": [
            {
                "example_text": "白い犬が好きです。",
                "furigana": "しろいいぬがすきです。",
                "meaning_vi": "Tôi thích chó màu trắng.",
                "meaning_en": "I like white dogs."
            },
            {
                "example_text": "彼のシャツは白いです。",
                "furigana": "かれのしゃつはしろいです。",
                "meaning_vi": "Áo sơ mi của anh ấy màu trắng.",
                "meaning_en": "His shirt is white."
            }
        ]
    },
    {
        "kanji": "白",
        "kun_reading": ["しろ.い", "しろ"],
        "on_reading": ["はく", "びゃく"],
        "han_viet": "BẠCH",
        "meaning_vi": "trắng",
        "meaning_en": "white",
        "radicals": "白",
        "strokes": 5,
        "level": "N5",
        "examples": [
            {
                "example_text": "白い犬が好きです。",
                "furigana": "しろいいぬがすきです。",
                "meaning_vi": "Tôi thích chó màu trắng.",
                "meaning_en": "I like white dogs."
            },
            {
                "example_text": "彼のシャツは白いです。",
                "furigana": "かれのしゃつはしろいです。",
                "meaning_vi": "Áo sơ mi của anh ấy màu trắng.",
                "meaning_en": "His shirt is white."
            }
        ]
    },
    {
        "kanji": "八",
        "kun_reading": ["やっ.つ", "や.つ", "よう"],
        "on_reading": ["はち"],
        "han_viet": "BÁT",
        "meaning_vi": "tám, số tám",
        "meaning_en": "eight",
        "radicals": "八",
        "strokes": 2,
        "level": "N5",
        "examples": [
            {
                "example_text": "八つのリンゴがあります。",
                "furigana": "やっつのりんごがあります。",
                "meaning_vi": "Có tám quả táo.",
                "meaning_en": "There are eight apples."
            },
            {
                "example_text": "八百円を払いました。",
                "furigana": "はっぴゃくえんをはらいました。",
                "meaning_vi": "Tôi đã trả 800 yên.",
                "meaning_en": "I paid 800 yen."
            }
        ]
    },
    {
        "kanji": "百",
        "kun_reading": [],
        "on_reading": ["ひゃく"],
        "han_viet": "BÁCH",
        "meaning_vi": "một trăm",
        "meaning_en": "hundred",
        "radicals": "白",
        "strokes": 6,
        "level": "N5",
        "examples": [
            {
                "example_text": "百円を貸してください。",
                "furigana": "ひゃくえんをかしてください。",
                "meaning_vi": "Hãy cho tôi mượn 100 yên.",
                "meaning_en": "Please lend me 100 yen."
            }
        ]
    },
    {
        "kanji": "父",
        "kun_reading": ["ちち"],
        "on_reading": ["ふ"],
        "han_viet": "PHỤ",
        "meaning_vi": "bố",
        "meaning_en": "father",
        "radicals": "父",
        "strokes": 4,
        "level": "N5",
        "examples": [
            {
                "example_text": "私の父は先生です。",
                "furigana": "わたしのちちはせんせいです。",
                "meaning_vi": "Bố tôi là giáo viên.",
                "meaning_en": "My father is a teacher."
            },
            {
                "example_text": "祖父は日本に住んでいます。",
                "furigana": "そふはにほんにすんでいます。",
                "meaning_vi": "Ông tôi sống ở Nhật Bản.",
                "meaning_en": "My grandfather lives in Japan."
            }
        ]
    },
    {
        "kanji": "分",
        "kun_reading": ["わ.ける", "わ.かれる", "わか.る"],
        "on_reading": ["ぶん", "ぶ", "ふん"],
        "han_viet": "PHÂN",
        "meaning_vi": "phần, phút, phân chia, hiểu",
        "meaning_en": "part, minute, divide, understand",
        "radicals": "刀",
        "strokes": 4,
        "level": "N5",
        "examples": [
            {
                "example_text": "この問題が分かりますか？",
                "furigana": "このもんだいがわかりますか？",
                "meaning_vi": "Bạn có hiểu bài toán này không?",
                "meaning_en": "Do you understand this problem?"
            },
            {
                "example_text": "十分休憩しましょう。",
                "furigana": "じゅっぷんきゅうけいしましょう。",
                "meaning_vi": "Hãy nghỉ 10 phút.",
                "meaning_en": "Let's take a 10-minute break."
            }
        ]
    },
    {
        "kanji": "聞",
        "kun_reading": ["き.く", "き.こえる"],
        "on_reading": ["ぶん", "もん"],
        "han_viet": "VĂN",
        "meaning_vi": "nghe, hỏi",
        "meaning_en": "hear, listen, ask",
        "radicals": "耳",
        "strokes": 14,
        "level": "N5",
        "examples": [
            {
                "example_text": "新聞を毎日読みます。",
                "furigana": "しんぶんをまいにちよみます。",
                "meaning_vi": "Tôi đọc báo mỗi ngày.",
                "meaning_en": "I read the newspaper every day."
            },
            {
                "example_text": "音楽を聞くのが好きです。",
                "furigana": "おんがくをきくのがすきです。",
                "meaning_vi": "Tôi thích nghe nhạc.",
                "meaning_en": "I like listening to music."
            }
        ]
    },
    {
        "kanji": "聞",
        "kun_reading": ["き.く", "き.こえる"],
        "on_reading": ["ぶん", "もん"],
        "han_viet": "VĂN",
        "meaning_vi": "nghe, hỏi",
        "meaning_en": "hear, listen, ask",
        "radicals": "耳",
        "strokes": 14,
        "level": "N5",
        "examples": [
            {
                "example_text": "新聞を毎日読みます。",
                "furigana": "しんぶんをまいにちよみます。",
                "meaning_vi": "Tôi đọc báo mỗi ngày.",
                "meaning_en": "I read the newspaper every day."
            },
            {
                "example_text": "音楽を聞くのが好きです。",
                "furigana": "おんがくをきくのがすきです。",
                "meaning_vi": "Tôi thích nghe nhạc.",
                "meaning_en": "I like listening to music."
            }
        ]
    },
    {
        "kanji": "母",
        "kun_reading": ["はは"],
        "on_reading": ["ぼ"],
        "han_viet": "MẪU",
        "meaning_vi": "mẹ",
        "meaning_en": "mother",
        "radicals": "母",
        "strokes": 5,
        "level": "N5",
        "examples": [
            {
                "example_text": "母の日にプレゼントをあげました。",
                "furigana": "ははのひにぷれぜんとをあげました。",
                "meaning_vi": "Tôi đã tặng quà vào Ngày của Mẹ.",
                "meaning_en": "I gave a gift on Mother's Day."
            },
            {
                "example_text": "祖母は料理が得意です。",
                "furigana": "そぼはりょうりがとくいです。",
                "meaning_vi": "Bà tôi rất giỏi nấu ăn.",
                "meaning_en": "My grandmother is good at cooking."
            }
        ]
    },
    {
        "kanji": "北",
        "kun_reading": ["きた"],
        "on_reading": ["ほく"],
        "han_viet": "BẮC",
        "meaning_vi": "phía bắc",
        "meaning_en": "north",
        "radicals": "匕",
        "strokes": 5,
        "level": "N5",
        "examples": [
            {
                "example_text": "日本の北には北海道があります。",
                "furigana": "にほんのきたにはほっかいどうがあります。",
                "meaning_vi": "Phía bắc Nhật Bản có Hokkaido.",
                "meaning_en": "In the north of Japan, there is Hokkaido."
            }
        ]
    },
    {
        "kanji": "木",
        "kun_reading": ["き", "こ"],
        "on_reading": ["ぼく", "もく"],
        "han_viet": "MỘC",
        "meaning_vi": "cây, rừng",
        "meaning_en": "tree, wood",
        "radicals": "木",
        "strokes": 4,
        "level": "N5",
        "examples": [
            {
                "example_text": "庭に大きな木があります。",
                "furigana": "にわにおおきなきがあります。",
                "meaning_vi": "Có một cái cây lớn trong vườn.",
                "meaning_en": "There is a big tree in the garden."
            }
        ]
    },
    {
        "kanji": "毎",
        "kun_reading": [],
        "on_reading": ["まい"],
        "han_viet": "MỖI",
        "meaning_vi": "mỗi, hàng",
        "meaning_en": "every",
        "radicals": "毋",
        "strokes": 6,
        "level": "N5",
        "examples": [
            {
                "example_text": "毎日、日本語を勉強しています。",
                "furigana": "まいにち、にほんごをべんきょうしています。",
                "meaning_vi": "Tôi học tiếng Nhật mỗi ngày.",
                "meaning_en": "I study Japanese every day."
            }
        ]
    },
    {
        "kanji": "万",
        "kun_reading": [],
        "on_reading": ["まん", "ばん"],
        "han_viet": "VẠN",
        "meaning_vi": "vạn, mười ngàn",
        "meaning_en": "ten thousand",
        "radicals": "一",
        "strokes": 3,
        "level": "N5",
        "examples": [
            {
                "example_text": "一万円を持っています。",
                "furigana": "いちまんえんをもっています。",
                "meaning_vi": "Tôi có 10.000 yên.",
                "meaning_en": "I have 10,000 yen."
            }
        ]
    },
    {
        "kanji": "名",
        "kun_reading": ["な"],
        "on_reading": ["めい", "みょう"],
        "han_viet": "DANH",
        "meaning_vi": "danh, tên",
        "meaning_en": "name, reputation",
        "radicals": "口",
        "strokes": 6,
        "level": "N5",
        "examples": [
            {
                "example_text": "あなたの名前は何ですか？",
                "furigana": "あなたのなまえはなんですか？",
                "meaning_vi": "Tên bạn là gì?",
                "meaning_en": "What is your name?"
            },
            {
                "example_text": "彼は有名な歌手です。",
                "furigana": "かれはゆうめいなかしゅです。",
                "meaning_vi": "Anh ấy là một ca sĩ nổi tiếng.",
                "meaning_en": "He is a famous singer."
            }
        ]
    },
    {
        "kanji": "目",
        "kun_reading": ["め"],
        "on_reading": ["もく"],
        "han_viet": "MỤC",
        "meaning_vi": "mắt",
        "meaning_en": "eye",
        "radicals": "目",
        "strokes": 5,
        "level": "N5",
        "examples": [
            {
                "example_text": "目が痛いです。",
                "furigana": "めがいたいです。",
                "meaning_vi": "Mắt tôi đau.",
                "meaning_en": "My eyes hurt."
            },
            {
                "example_text": "本の目次を見てください。",
                "furigana": "ほんのもくじをみてください。",
                "meaning_vi": "Hãy xem mục lục của cuốn sách.",
                "meaning_en": "Please check the table of contents of the book."
            }
        ]
    },
    {
        "kanji": "友",
        "kun_reading": ["とも"],
        "on_reading": ["ゆう"],
        "han_viet": "HỮU",
        "meaning_vi": "bạn",
        "meaning_en": "friend",
        "radicals": "又",
        "strokes": 4,
        "level": "N5",
        "examples": [
            {
                "example_text": "私の友達はとても優しいです。",
                "furigana": "わたしのともだちはとてもやさしいです。",
                "meaning_vi": "Bạn bè của tôi rất tốt bụng.",
                "meaning_en": "My friends are very kind."
            },
            {
                "example_text": "彼は私の友人です。",
                "furigana": "かれはわたしのゆうじんです。",
                "meaning_vi": "Anh ấy là bạn thân của tôi.",
                "meaning_en": "He is my close friend."
            }
        ]
    },
    {
        "kanji": "来",
        "kun_reading": ["く.る", "きた.る", "きた.す"],
        "on_reading": ["らい"],
        "han_viet": "LAI",
        "meaning_vi": "đến, tới",
        "meaning_en": "come",
        "radicals": "木",
        "strokes": 7,
        "level": "N5",
        "examples": [
            {
                "example_text": "彼は明日来ます。",
                "furigana": "かれはあしたきます。",
                "meaning_vi": "Anh ấy sẽ đến vào ngày mai.",
                "meaning_en": "He will come tomorrow."
            },
            {
                "example_text": "将来は医者になりたいです。",
                "furigana": "しょうらいはいしゃになりたいです。",
                "meaning_vi": "Tôi muốn trở thành bác sĩ trong tương lai.",
                "meaning_en": "I want to become a doctor in the future."
            }
        ]
    },
    {
        "kanji": "立",
        "kun_reading": ["た.つ", "た.てる"],
        "on_reading": ["りつ"],
        "han_viet": "LẬP",
        "meaning_vi": "đứng, thiết lập",
        "meaning_en": "stand, establish",
        "radicals": "立",
        "strokes": 5,
        "level": "N5",
        "examples": [
            {
                "example_text": "彼は席を立ちました。",
                "furigana": "かれはせきをたちました。",
                "meaning_vi": "Anh ấy đã đứng dậy khỏi chỗ ngồi.",
                "meaning_en": "He stood up from his seat."
            }
        ]
    },
    {
        "kanji": "六",
        "kun_reading": ["む.つ", "むい"],
        "on_reading": ["ろく"],
        "han_viet": "LỤC",
        "meaning_vi": "số sáu",
        "meaning_en": "six",
        "radicals": "八",
        "strokes": 4,
        "level": "N5",
        "examples": [
            {
                "example_text": "私は六冊の本を持っています。",
                "furigana": "わたしはろくさつのほんをもっています。",
                "meaning_vi": "Tôi có sáu cuốn sách.",
                "meaning_en": "I have six books."
            }
        ]
    },
    {
        "kanji": "話",
        "kun_reading": ["はなし", "はな.す"],
        "on_reading": ["わ"],
        "han_viet": "THOẠI",
        "meaning_vi": "nói, nói chuyện, câu chuyện",
        "meaning_en": "talk, conversation",
        "radicals": "言",
        "strokes": 13,
        "level": "N5",
        "examples": [
            {
                "example_text": "彼とよく話します。",
                "furigana": "かれとよくはなします。",
                "meaning_vi": "Tôi thường nói chuyện với anh ấy.",
                "meaning_en": "I often talk with him."
            },
            {
                "example_text": "面白い話を聞きました。",
                "furigana": "おもしろいはなしをききました。",
                "meaning_vi": "Tôi đã nghe một câu chuyện thú vị.",
                "meaning_en": "I heard an interesting story."
            }
        ]
    },
    // kanji bài 35         
    {
        "kanji": "咲",
        "kun_reading": [
            "さく"
        ],
        "on_reading": [
            "ショウ"
        ],
        "han_viet": "TIẾU",
        "meaning_vi": "Nở (hoa)",
        "meaning_en": "Bloom",
        "radicals": "口",
        "strokes": 12,
        "level": "N4",
        "examples": [
            {
                "example_text": "花が咲きます。",
                "furigana": "はながさきます。",
                "meaning_vi": "Hoa nở.",
                "meaning_en": "The flowers bloom."
            },
            {
                "example_text": "桜が咲きます。",
                "furigana": "さくらがさきます。",
                "meaning_vi": "Hoa anh đào nở.",
                "meaning_en": "The cherry blossoms bloom."
            }
        ]
    },
    {
        "kanji": "変",
        "kun_reading": [
            "かわる"
        ],
        "on_reading": [
            "ヘン"
        ],
        "han_viet": "BIẾN",
        "meaning_vi": "Thay đổi, đổi",
        "meaning_en": "Change",
        "radicals": "勿",
        "strokes": 12,
        "level": "N4",
        "examples": [
            {
                "example_text": "天気が変わります。",
                "furigana": "てんきがかわります。",
                "meaning_vi": "Thời tiết thay đổi.",
                "meaning_en": "The weather changes."
            },
            {
                "example_text": "生活が変わります。",
                "furigana": "せいかつがかわります。",
                "meaning_vi": "Cuộc sống thay đổi.",
                "meaning_en": "Life changes."
            }
        ]
    },
    {
        "kanji": "困",
        "kun_reading": [
            "こまる"
        ],
        "on_reading": [
            "コン"
        ],
        "han_viet": "KHỐN",
        "meaning_vi": "Rắc rối, khó xử, có vấn đề",
        "meaning_en": "Trouble",
        "radicals": "困",
        "strokes": 12,
        "level": "N4",
        "examples": [
            {
                "example_text": "困っています。",
                "furigana": "こまっています。",
                "meaning_vi": "Tôi gặp rắc rối.",
                "meaning_en": "I am in trouble."
            },
            {
                "example_text": "私は困っています。",
                "furigana": "わたしはこまっています。",
                "meaning_vi": "Tôi đang gặp khó khăn.",
                "meaning_en": "I am troubled."
            }
        ]
    },
    {
        "kanji": "付",
        "kun_reading": [
            "つける"
        ],
        "on_reading": [
            "フ"
        ],
        "han_viet": "PHÓ",
        "meaning_vi": "Vẽ, đánh dấu",
        "meaning_en": "Attach",
        "radicals": "丿",
        "strokes": 7,
        "level": "N4",
        "examples": [
            {
                "example_text": "名前を付けます。",
                "furigana": "なまえをつけます。",
                "meaning_vi": "Đặt tên.",
                "meaning_en": "I will give a name."
            },
            {
                "example_text": "印を付けます。",
                "furigana": "しるしをつけます。",
                "meaning_vi": "Đánh dấu.",
                "meaning_en": "I will mark it."
            }
        ]
    },
    {
        "kanji": "拾",
        "kun_reading": [
            "ひろう"
        ],
        "on_reading": [
            "シュウ"
        ],
        "han_viet": "THIỂU",
        "meaning_vi": "Nhặt lên",
        "meaning_en": "Pick up",
        "radicals": "手",
        "strokes": 12,
        "level": "N4",
        "examples": [
            {
                "example_text": "ゴミを拾います。",
                "furigana": "ごみをひろいます。",
                "meaning_vi": "Tôi nhặt rác.",
                "meaning_en": "I pick up trash."
            },
            {
                "example_text": "財布を拾いました。",
                "furigana": "さいふをひろいました。",
                "meaning_vi": "Tôi nhặt được ví.",
                "meaning_en": "I picked up a wallet."
            }
        ]
    },
    {
        "kanji": "楽",
        "kun_reading": [
            "たのしい",
            "らく"
        ],
        "on_reading": [
            "ガク",
            "ラク"
        ],
        "han_viet": "LẠC",
        "meaning_vi": "Vui vẻ, thoải mái",
        "meaning_en": "Fun, comfortable",
        "radicals": "白",
        "strokes": 13,
        "level": "N4",
        "examples": [
            {
                "example_text": "音楽が楽しいです。",
                "furigana": "おんがくがたのしいです。",
                "meaning_vi": "Âm nhạc thật vui vẻ.",
                "meaning_en": "Music is fun."
            },
            {
                "example_text": "今日は楽な日です。",
                "furigana": "きょうはらくなひです。",
                "meaning_vi": "Hôm nay là một ngày thoải mái.",
                "meaning_en": "Today is a comfortable day."
            }
        ]
    },
    {
        "kanji": "正",
        "kun_reading": [
            "ただしい",
            "しょう"
        ],
        "on_reading": [
            "セイ",
            "ショウ"
        ],
        "han_viet": "CHÍNH",
        "meaning_vi": "Đúng, chính xác",
        "meaning_en": "Correct, proper",
        "radicals": "止",
        "strokes": 5,
        "level": "N4",
        "examples": [
            {
                "example_text": "正しい答えを教えてください。",
                "furigana": "ただしいこたえをおしえてください。",
                "meaning_vi": "Hãy chỉ cho tôi câu trả lời đúng.",
                "meaning_en": "Please tell me the correct answer."
            },
            {
                "example_text": "これは正しい方法です。",
                "furigana": "これはただしいほうほうです。",
                "meaning_vi": "Đây là phương pháp đúng.",
                "meaning_en": "This is the correct method."
            }
        ]
    },
    {
        "kanji": "珍",
        "kun_reading": [
            "めずらしい"
        ],
        "on_reading": [
            "チン"
        ],
        "han_viet": "TRÂN",
        "meaning_vi": "Hiếm có, quý giá",
        "meaning_en": "Rare, precious",
        "radicals": "王",
        "strokes": 12,
        "level": "N4",
        "examples": [
            {
                "example_text": "これは珍しい品物です。",
                "furigana": "これはめずらしいしなものです。",
                "meaning_vi": "Đây là một món đồ hiếm có.",
                "meaning_en": "This is a rare item."
            },
            {
                "example_text": "珍しい動物が見つかりました。",
                "furigana": "めずらしいどうぶつがみつかりました。",
                "meaning_vi": "Một loài động vật hiếm đã được tìm thấy.",
                "meaning_en": "A rare animal has been found."
            }
        ]
    },
    {
        "kanji": "方",
        "kun_reading": [
            "かた",
            "ほう"
        ],
        "on_reading": [
            "ホウ"
        ],
        "han_viet": "PHƯƠNG",
        "meaning_vi": "Phương, hướng, cách thức",
        "meaning_en": "Direction, method",
        "radicals": "方",
        "strokes": 4,
        "level": "N4",
        "examples": [
            {
                "example_text": "あの方は先生です。",
                "furigana": "あのかたはせんせいです。",
                "meaning_vi": "Người kia là giáo viên.",
                "meaning_en": "That person is a teacher."
            },
            {
                "example_text": "新しい方法を試してみます。",
                "furigana": "あたらしいほうほうをためしてみます。",
                "meaning_vi": "Tôi sẽ thử phương pháp mới.",
                "meaning_en": "I will try the new method."
            }
        ]
    },
    {
        "kanji": "向",
        "kun_reading": [
            "むく",
            "むける"
        ],
        "on_reading": [
            "コウ"
        ],
        "han_viet": "HƯỚNG",
        "meaning_vi": "Hướng, chỉ hướng",
        "meaning_en": "Direction, to face",
        "radicals": "口",
        "strokes": 6,
        "level": "N4",
        "examples": [
            {
                "example_text": "私は前を向いて歩きます。",
                "furigana": "わたしはまえをむいてあるきます。",
                "meaning_vi": "Tôi đi bộ hướng về phía trước.",
                "meaning_en": "I walk facing forward."
            },
            {
                "example_text": "この建物は南向きです。",
                "furigana": "このたてもんはみなみむきです。",
                "meaning_vi": "Tòa nhà này hướng về phía nam.",
                "meaning_en": "This building is facing south."
            }
        ]
    },
    {
        "kanji": "島",
        "kun_reading": [
            "しま"
        ],
        "on_reading": [
            "トウ"
        ],
        "han_viet": "ĐẢO",
        "meaning_vi": "Đảo",
        "meaning_en": "Island",
        "radicals": "山",
        "strokes": 12,
        "level": "N4",
        "examples": [
            {
                "example_text": "この島は美しいです。",
                "furigana": "このしまはうつくしいです。",
                "meaning_vi": "Đảo này rất đẹp.",
                "meaning_en": "This island is beautiful."
            },
            {
                "example_text": "島に住んでいます。",
                "furigana": "しまにすんでいます。",
                "meaning_vi": "Tôi sống trên đảo.",
                "meaning_en": "I live on an island."
            }
        ]
    },
    {
        "kanji": "村",
        "kun_reading": [
            "むら"
        ],
        "on_reading": [
            "ソン"
        ],
        "han_viet": "THÔN",
        "meaning_vi": "Làng",
        "meaning_en": "Village",
        "radicals": "木",
        "strokes": 7,
        "level": "N4",
        "examples": [
            {
                "example_text": "彼は村に住んでいます。",
                "furigana": "かれはむらにすんでいます。",
                "meaning_vi": "Anh ấy sống trong làng.",
                "meaning_en": "He lives in the village."
            },
            {
                "example_text": "村の人々は親切です。",
                "furigana": "むらのひとびとはしんせつです。",
                "meaning_vi": "Người dân trong làng rất thân thiện.",
                "meaning_en": "The people in the village are kind."
            }
        ]
    },
    {
        "kanji": "港",
        "kun_reading": [
            "みなと"
        ],
        "on_reading": [
            "コウ"
        ],
        "han_viet": "CẢNG",
        "meaning_vi": "Cảng",
        "meaning_en": "Port",
        "radicals": "水",
        "strokes": 10,
        "level": "N4",
        "examples": [
            {
                "example_text": "この港はとても忙しいです。",
                "furigana": "このみなとはとてもいそがしいです。",
                "meaning_vi": "Cảng này rất bận rộn.",
                "meaning_en": "This port is very busy."
            },
            {
                "example_text": "港に船が停まっています。",
                "furigana": "みなとにふねがとまっています。",
                "meaning_vi": "Có một chiếc tàu đậu ở cảng.",
                "meaning_en": "A ship is docked at the port."
            }
        ]
    },
    {
        "kanji": "近",
        "kun_reading": [
            "ちかい"
        ],
        "on_reading": [
            "キン",
            "コン"
        ],
        "han_viet": "CẬN",
        "meaning_vi": "Gần",
        "meaning_en": "Near",
        "radicals": "辶",
        "strokes": 7,
        "level": "N4",
        "examples": [
            {
                "example_text": "駅はここから近いです。",
                "furigana": "えきはここからちかいです。",
                "meaning_vi": "Ga tàu rất gần đây.",
                "meaning_en": "The station is near here."
            },
            {
                "example_text": "近所の店に行きます。",
                "furigana": "きんじょのみせにいきます。",
                "meaning_vi": "Tôi sẽ đi đến cửa hàng gần nhà.",
                "meaning_en": "I will go to the nearby store."
            }
        ]
    },
    {
        "kanji": "所",
        "kun_reading": [
            "ところ",
            "どころ"
        ],
        "on_reading": [
            "ショ",
            "ジョ"
        ],
        "han_viet": "SỞ",
        "meaning_vi": "Nơi, chỗ",
        "meaning_en": "Place",
        "radicals": "土",
        "strokes": 8,
        "level": "N4",
        "examples": [
            {
                "example_text": "あそこはいい所です。",
                "furigana": "あそこはいいところです。",
                "meaning_vi": "Nơi đó rất tốt.",
                "meaning_en": "That place is nice."
            },
            {
                "example_text": "私はその所に行きます。",
                "furigana": "わたしはそのところにいきます。",
                "meaning_vi": "Tôi sẽ đi đến nơi đó.",
                "meaning_en": "I will go to that place."
            }
        ]
    },
    {
        "kanji": "屋",
        "kun_reading": [
            "や"
        ],
        "on_reading": [
            "オク"
        ],
        "han_viet": "ỐC",
        "meaning_vi": "Nhà, cửa hàng",
        "meaning_en": "Shop, house",
        "radicals": "土",
        "strokes": 6,
        "level": "N4",
        "examples": [
            {
                "example_text": "この屋はとても古いです。",
                "furigana": "このやはとてもふるいです。",
                "meaning_vi": "Ngôi nhà này rất cũ.",
                "meaning_en": "This house is very old."
            },
            {
                "example_text": "おもちゃ屋に行きます。",
                "furigana": "おもちゃやにいきます。",
                "meaning_vi": "Tôi sẽ đi đến cửa hàng đồ chơi.",
                "meaning_en": "I will go to the toy store."
            }
        ]
    },
    {
        "kanji": "上",
        "kun_reading": [
            "うえ",
            "あげる",
            "のぼる"
        ],
        "on_reading": [
            "ジョウ",
            "ショウ",
            "シャン"
        ],
        "han_viet": "THƯỢNG",
        "meaning_vi": "Trên, lên",
        "meaning_en": "Above, up",
        "radicals": "一",
        "strokes": 3,
        "level": "N4",
        "examples": [
            {
                "example_text": "山の上に登ります。",
                "furigana": "やまのうえにのぼります。",
                "meaning_vi": "Tôi sẽ leo lên đỉnh núi.",
                "meaning_en": "I will climb to the top of the mountain."
            },
            {
                "example_text": "上司に会います。",
                "furigana": "じょうしにあいます。",
                "meaning_vi": "Tôi sẽ gặp sếp.",
                "meaning_en": "I will meet my boss."
            }
        ]
    },
    {
        "kanji": "海",
        "kun_reading": [
            "うみ"
        ],
        "on_reading": [
            "カイ"
        ],
        "han_viet": "HẢI",
        "meaning_vi": "Biển",
        "meaning_en": "Sea",
        "radicals": "水",
        "strokes": 10,
        "level": "N4",
        "examples": [
            {
                "example_text": "海が好きです。",
                "furigana": "うみがすきです。",
                "meaning_vi": "Tôi thích biển.",
                "meaning_en": "I like the sea."
            },
            {
                "example_text": "この島は海に囲まれています。",
                "furigana": "このしまはうみにかこまれています。",
                "meaning_vi": "Đảo này được bao quanh bởi biển.",
                "meaning_en": "This island is surrounded by the sea."
            }
        ]
    },
    {
        "kanji": "外",
        "kun_reading": [
            "そと",
            "ほか"
        ],
        "on_reading": [
            "ガイ",
            "ゲ"
        ],
        "han_viet": "NGOẠI",
        "meaning_vi": "Bên ngoài",
        "meaning_en": "Outside",
        "radicals": "阝",
        "strokes": 6,
        "level": "N4",
        "examples": [
            {
                "example_text": "外に出ます。",
                "furigana": "そとにでます。",
                "meaning_vi": "Tôi ra ngoài.",
                "meaning_en": "I go outside."
            },
            {
                "example_text": "外の世界に行きたい。",
                "furigana": "そとのせかいにいきたい。",
                "meaning_vi": "Tôi muốn đi ra thế giới bên ngoài.",
                "meaning_en": "I want to go to the outside world."
            }
        ]
    },
    {
        "kanji": "登",
        "kun_reading": [
            "のぼる"
        ],
        "on_reading": [
            "トウ"
        ],
        "han_viet": "ĐĂNG",
        "meaning_vi": "Leo, lên",
        "meaning_en": "Climb, ascend",
        "radicals": "小",
        "strokes": 8,
        "level": "N4",
        "examples": [
            {
                "example_text": "山に登ります。",
                "furigana": "やまにのぼります。",
                "meaning_vi": "Tôi leo lên núi.",
                "meaning_en": "I climb the mountain."
            },
            {
                "example_text": "階段を登るのは健康に良いです。",
                "furigana": "かいだんをのぼるのはけんこうによいです。",
                "meaning_vi": "Leo cầu thang tốt cho sức khỏe.",
                "meaning_en": "Climbing stairs is good for your health."
            }
        ]
    },
    {
        "kanji": "機",
        "kun_reading": [
            "はた"
        ],
        "on_reading": [
            "キ",
            "ケ"
        ],
        "han_viet": "CƠ",
        "meaning_vi": "Máy, cơ hội",
        "meaning_en": "Machine, opportunity",
        "radicals": "木",
        "strokes": 12,
        "level": "N4",
        "examples": [
            {
                "example_text": "この機械は新しいです。",
                "furigana": "このきかいはあたらしいです。",
                "meaning_vi": "Máy này là mới.",
                "meaning_en": "This machine is new."
            },
            {
                "example_text": "飛行機は空を飛びます。",
                "furigana": "ひこうきはそらをとびます。",
                "meaning_vi": "Máy bay bay trên bầu trời.",
                "meaning_en": "The airplane flies in the sky."
            }
        ]
    },
    {
        "kanji": "会",
        "kun_reading": [
            "あう"
        ],
        "on_reading": [
            "カイ",
            "エ"
        ],
        "han_viet": "HỘI",
        "meaning_vi": "Gặp, hội",
        "meaning_en": "Meeting, society",
        "radicals": "人",
        "strokes": 6,
        "level": "N4",
        "examples": [
            {
                "example_text": "明日、会議があります。",
                "furigana": "あした、かいぎがあります。",
                "meaning_vi": "Ngày mai có cuộc họp.",
                "meaning_en": "There is a meeting tomorrow."
            },
            {
                "example_text": "この会は大切です。",
                "furigana": "このかいはたいせつです。",
                "meaning_vi": "Cuộc họp này rất quan trọng.",
                "meaning_en": "This meeting is important."
            }
        ]
    },
    {
        "kanji": "許",
        "kun_reading": [
            "ゆるす"
        ],
        "on_reading": [
            "キョ",
            "コ"
        ],
        "han_viet": "HỨA",
        "meaning_vi": "Cho phép, tha thứ",
        "meaning_en": "Allow, forgive",
        "radicals": "言",
        "strokes": 11,
        "level": "N4",
        "examples": [
            {
                "example_text": "親は子供にお菓子を買うことを許しました。",
                "furigana": "おやはこどもにおかしをかうことをゆるしました。",
                "meaning_vi": "Bố mẹ cho phép con cái mua bánh kẹo.",
                "meaning_en": "The parents allowed the children to buy sweets."
            },
            {
                "example_text": "先生は遅刻を許してくれました。",
                "furigana": "せんせいはちこくをゆるしてくれました。",
                "meaning_vi": "Giáo viên đã tha thứ cho tôi vì đi muộn.",
                "meaning_en": "The teacher forgave me for being late."
            }
        ]
    },
    {
        "kanji": "可",
        "kun_reading": [
            "か"
        ],
        "on_reading": [
            "カ",
            "コ"
        ],
        "han_viet": "KHẢ",
        "meaning_vi": "Có thể, khả năng",
        "meaning_en": "Possible, ability",
        "radicals": "口",
        "strokes": 6,
        "level": "N4",
        "examples": [
            {
                "example_text": "この方法は可能です。",
                "furigana": "このほうほうはかのうです。",
                "meaning_vi": "Phương pháp này là khả thi.",
                "meaning_en": "This method is possible."
            },
            {
                "example_text": "あなたの提案は可決されました。",
                "furigana": "あなたのていあんはかけつされました。",
                "meaning_vi": "Đề xuất của bạn đã được thông qua.",
                "meaning_en": "Your proposal has been accepted."
            }
        ]
    },
    {
        "kanji": "丸",
        "kun_reading": [
            "まる"
        ],
        "on_reading": [
            "ガン"
        ],
        "han_viet": "HOÀN",
        "meaning_vi": "Tròn",
        "meaning_en": "Circle, round",
        "radicals": "丿",
        "strokes": 3,
        "level": "N4",
        "examples": [
            {
                "example_text": "丸い形の石があります。",
                "furigana": "まるいかたちのいしがあります。",
                "meaning_vi": "Có một viên đá có hình tròn.",
                "meaning_en": "There is a round stone."
            },
            {
                "example_text": "お皿は丸いです。",
                "furigana": "おさらはまるいです。",
                "meaning_vi": "Cái đĩa là hình tròn.",
                "meaning_en": "The plate is round."
            }
        ]
    },
    {
        "kanji": "操",
        "kun_reading": [
            "あやつる"
        ],
        "on_reading": [
            "ソウ",
            "サツ"
        ],
        "han_viet": "THAO",
        "meaning_vi": "Điều khiển, thao tác",
        "meaning_en": "Manipulate, operate",
        "radicals": "手",
        "strokes": 12,
        "level": "N4",
        "examples": [
            {
                "example_text": "機械を操るのは難しいです。",
                "furigana": "きかいをあやつるのはむずかしいです。",
                "meaning_vi": "Điều khiển máy móc là khó.",
                "meaning_en": "Operating machinery is difficult."
            },
            {
                "example_text": "彼は船を操るのが得意です。",
                "furigana": "かれはふねをあやつるのがとくいです。",
                "meaning_vi": "Anh ấy giỏi điều khiển tàu.",
                "meaning_en": "He is good at operating ships."
            }
        ]
    },
    {
        "kanji": "作",
        "kun_reading": [
            "つくる"
        ],
        "on_reading": [
            "サク",
            "サ"
        ],
        "han_viet": "TÁC",
        "meaning_vi": "Tạo, làm",
        "meaning_en": "Make, create",
        "radicals": "亻",
        "strokes": 7,
        "level": "N4",
        "examples": [
            {
                "example_text": "私は毎日料理を作ります。",
                "furigana": "わたしはまいにちりょうりをつくります。",
                "meaning_vi": "Tôi làm món ăn mỗi ngày.",
                "meaning_en": "I cook every day."
            },
            {
                "example_text": "新しい製品を作りましょう。",
                "furigana": "あたらしいせいひんをつくりましょう。",
                "meaning_vi": "Hãy tạo ra sản phẩm mới.",
                "meaning_en": "Let's create a new product."
            }
        ]
    },
    {
        "kanji": "方",
        "kun_reading": [
            "かた",
            "ほう"
        ],
        "on_reading": [
            "ホウ"
        ],
        "han_viet": "PHƯƠNG",
        "meaning_vi": "Phương, cách thức",
        "meaning_en": "Direction, method",
        "radicals": "方",
        "strokes": 4,
        "level": "N4",
        "examples": [
            {
                "example_text": "どの方が正しいですか。",
                "furigana": "どのほうがただしいですか。",
                "meaning_vi": "Hướng nào là đúng?",
                "meaning_en": "Which direction is correct?"
            },
            {
                "example_text": "新しい方法を試してみます。",
                "furigana": "あたらしいほうほうをためしてみます。",
                "meaning_vi": "Tôi sẽ thử phương pháp mới.",
                "meaning_en": "I will try the new method."
            }
        ]
    },
    {
        "kanji": "法",
        "kun_reading": [
            "ほう"
        ],
        "on_reading": [
            "ホウ"
        ],
        "han_viet": "PHÁP",
        "meaning_vi": "Pháp luật, phương pháp",
        "meaning_en": "Law, method",
        "radicals": "氏",
        "strokes": 8,
        "level": "N4",
        "examples": [
            {
                "example_text": "この方法は法律に従っています。",
                "furigana": "このほうほうはほうりつにしたがっています。",
                "meaning_vi": "Phương pháp này tuân theo pháp luật.",
                "meaning_en": "This method follows the law."
            },
            {
                "example_text": "新しい法律が必要です。",
                "furigana": "あたらしいほうりつがひつようです。",
                "meaning_vi": "Cần có một luật mới.",
                "meaning_en": "A new law is necessary."
            }
        ]
    },
    {
        "kanji": "設",
        "kun_reading": [
            "もうける"
        ],
        "on_reading": [
            "セツ"
        ],
        "han_viet": "THIẾT",
        "meaning_vi": "Thiết lập, tạo ra",
        "meaning_en": "Set up, establish",
        "radicals": "言",
        "strokes": 9,
        "level": "N4",
        "examples": [
            {
                "example_text": "この会社は新しいオフィスを設立しました。",
                "furigana": "このかいしゃはあたらしいオフィスをせつりつしました。",
                "meaning_vi": "Công ty này đã thành lập một văn phòng mới.",
                "meaning_en": "This company established a new office."
            },
            {
                "example_text": "新しいシステムを設計しました。",
                "furigana": "あたらしいシステムをせっけいしました。",
                "meaning_vi": "Tôi đã thiết kế hệ thống mới.",
                "meaning_en": "I designed a new system."
            }
        ]
    },
    {
        "kanji": "備",
        "kun_reading": [
            "そなえる"
        ],
        "on_reading": [
            "ビ"
        ],
        "han_viet": "BỊ",
        "meaning_vi": "Chuẩn bị",
        "meaning_en": "Prepare",
        "radicals": "亻",
        "strokes": 14,
        "level": "N4",
        "examples": [
            {
                "example_text": "災害に備えています。",
                "furigana": "さいがいにそなえています。",
                "meaning_vi": "Chúng tôi đang chuẩn bị cho thảm họa.",
                "meaning_en": "We are preparing for a disaster."
            },
            {
                "example_text": "旅行の準備を備えました。",
                "furigana": "りょこうのじゅんびをそなえました。",
                "meaning_vi": "Tôi đã chuẩn bị cho chuyến du lịch.",
                "meaning_en": "I have prepared for the trip."
            }
        ]
    },
    {
        "kanji": "葉",
        "kun_reading": [
            "は",
            "ば"
        ],
        "on_reading": [
            "ヨウ"
        ],
        "han_viet": "DIỆP",
        "meaning_vi": "Lá",
        "meaning_en": "Leaf",
        "radicals": "木",
        "strokes": 12,
        "level": "N4",
        "examples": [
            {
                "example_text": "木の葉が落ちます。",
                "furigana": "きのはがおちます。",
                "meaning_vi": "Lá cây rụng.",
                "meaning_en": "The leaves fall."
            },
            {
                "example_text": "秋になると葉が赤くなります。",
                "furigana": "あきになるとはがあかくなります。",
                "meaning_vi": "Vào mùa thu, lá trở nên đỏ.",
                "meaning_en": "In autumn, the leaves turn red."
            }
        ]
    },
    {
        "kanji": "曲",
        "kun_reading": [
            "きょく",
            "まがる"
        ],
        "on_reading": [
            "キョク"
        ],
        "han_viet": "KHÚC",
        "meaning_vi": "Bài hát, khúc nhạc, cong",
        "meaning_en": "Song, tune, bend",
        "radicals": "曰",
        "strokes": 9,
        "level": "N4",
        "examples": [
            {
                "example_text": "彼は素晴らしい曲を作りました。",
                "furigana": "かれはすばらしいきょくをつくりました。",
                "meaning_vi": "Anh ấy đã sáng tác một bài hát tuyệt vời.",
                "meaning_en": "He composed a wonderful song."
            },
            {
                "example_text": "道が曲がっています。",
                "furigana": "みちがまがっています。",
                "meaning_vi": "Con đường bị cong.",
                "meaning_en": "The road is bent."
            }
        ]
    },
    {
        "kanji": "初",
        "kun_reading": [
            "はじめ",
            "はつ"
        ],
        "on_reading": [
            "ショ"
        ],
        "han_viet": "SƠ",
        "meaning_vi": "Bắt đầu, lần đầu",
        "meaning_en": "Beginning, first time",
        "radicals": "八",
        "strokes": 6,
        "level": "N4",
        "examples": [
            {
                "example_text": "今日は初めて会います。",
                "furigana": "きょうははじめてあいます。",
                "meaning_vi": "Hôm nay tôi gặp lần đầu.",
                "meaning_en": "This is the first time we meet."
            },
            {
                "example_text": "初めて料理を作りました。",
                "furigana": "はじめてりょうりをつくりました。",
                "meaning_vi": "Tôi đã làm món ăn lần đầu tiên.",
                "meaning_en": "I made food for the first time."
            }
        ]
    },
    {
        "kanji": "終",
        "kun_reading": [
            "おわる",
            "おえる"
        ],
        "on_reading": [
            "シュウ"
        ],
        "han_viet": "CHUNG",
        "meaning_vi": "Kết thúc",
        "meaning_en": "End",
        "radicals": "糸",
        "strokes": 6,
        "level": "N4",
        "examples": [
            {
                "example_text": "授業が終わりました。",
                "furigana": "じゅぎょうがおわりました。",
                "meaning_vi": "Buổi học đã kết thúc.",
                "meaning_en": "The class has finished."
            },
            {
                "example_text": "映画が終わった。",
                "furigana": "えいががおわった。",
                "meaning_vi": "Bộ phim đã kết thúc.",
                "meaning_en": "The movie has ended."
            }
        ]
    },
    {
        "kanji": "夜",
        "kun_reading": [
            "よる",
            "よ"
        ],
        "on_reading": [
            "ヤ"
        ],
        "han_viet": "DẠ",
        "meaning_vi": "Đêm",
        "meaning_en": "Night",
        "radicals": "亻",
        "strokes": 8,
        "level": "N4",
        "examples": [
            {
                "example_text": "夜は星が見えます。",
                "furigana": "よるはほしがみえます。",
                "meaning_vi": "Vào ban đêm, bạn có thể thấy các vì sao.",
                "meaning_en": "At night, you can see the stars."
            },
            {
                "example_text": "私は夜遅くまで働きます。",
                "furigana": "わたしはよるおそくまで働きます。",
                "meaning_vi": "Tôi làm việc muộn vào ban đêm.",
                "meaning_en": "I work late at night."
            }
        ]
    },
    {
        "kanji": "行",
        "kun_reading": [
            "いく",
            "ゆく",
            "おこなう"
        ],
        "on_reading": [
            "コウ",
            "ギョウ"
        ],
        "han_viet": "HÀNH",
        "meaning_vi": "Đi, hành động",
        "meaning_en": "Go, act",
        "radicals": "行",
        "strokes": 6,
        "level": "N4",
        "examples": [
            {
                "example_text": "私は学校に行きます。",
                "furigana": "わたしはがっこうにいきます。",
                "meaning_vi": "Tôi đi đến trường.",
                "meaning_en": "I go to school."
            },
            {
                "example_text": "彼は試合を行います。",
                "furigana": "かれはしあいをおこないます。",
                "meaning_vi": "Anh ấy sẽ tổ chức trận đấu.",
                "meaning_en": "He will hold the match."
            }
        ]
    },
    {
        "kanji": "旅",
        "kun_reading": [
            "たび"
        ],
        "on_reading": [
            "リョ"
        ],
        "han_viet": "LỮ",
        "meaning_vi": "Du lịch",
        "meaning_en": "Travel",
        "radicals": "方",
        "strokes": 7,
        "level": "N4",
        "examples": [
            {
                "example_text": "日本への旅が楽しみです。",
                "furigana": "にほんへのたびがたのしみです。",
                "meaning_vi": "Tôi mong chờ chuyến du lịch đến Nhật Bản.",
                "meaning_en": "I look forward to the trip to Japan."
            },
            {
                "example_text": "旅行の準備をしています。",
                "furigana": "りょこうのじゅんびをしています。",
                "meaning_vi": "Tôi đang chuẩn bị cho chuyến du lịch.",
                "meaning_en": "I am preparing for the trip."
            }
        ]
    },
    {
        "kanji": "詳",
        "kun_reading": [
            "くわしい"
        ],
        "on_reading": [
            "ショウ"
        ],
        "han_viet": "TƯỜNG",
        "meaning_vi": "Chi tiết",
        "meaning_en": "Detailed",
        "radicals": "言",
        "strokes": 12,
        "level": "N4",
        "examples": [
            {
                "example_text": "詳しく説明してください。",
                "furigana": "くわしくせつめいしてください。",
                "meaning_vi": "Vui lòng giải thích chi tiết.",
                "meaning_en": "Please explain in detail."
            }
        ]
    },
    {
        "kanji": "場",
        "kun_reading": [
            "ば"
        ],
        "on_reading": [
            "ジョウ"
        ],
        "han_viet": "TRƯỜNG",
        "meaning_vi": "Nơi, địa điểm",
        "meaning_en": "Place, field",
        "radicals": "土",
        "strokes": 10,
        "level": "N4",
        "examples": [
            {
                "example_text": "会議の場所はここです。",
                "furigana": "かいぎのばしょはここです。",
                "meaning_vi": "Địa điểm của cuộc họp là đây.",
                "meaning_en": "The location of the meeting is here."
            }
        ]
    },
    {
        "kanji": "必",
        "kun_reading": [
            "ひつ"
        ],
        "on_reading": [
            "ヒツ"
        ],
        "han_viet": "TẤT",
        "meaning_vi": "Cần thiết",
        "meaning_en": "Necessary",
        "radicals": "心",
        "strokes": 6,
        "level": "N4",
        "examples": [
            {
                "example_text": "必ず試験を受けなければなりません。",
                "furigana": "かならずしけんをうけなければなりません。",
                "meaning_vi": "Bạn phải tham gia kỳ thi.",
                "meaning_en": "You must take the exam."
            }
        ]
    },
    {
        "kanji": "要",
        "kun_reading": [
            "いる"
        ],
        "on_reading": [
            "ヨウ"
        ],
        "han_viet": "YÊU",
        "meaning_vi": "Cần thiết",
        "meaning_en": "Necessary",
        "radicals": "⻊",
        "strokes": 9,
        "level": "N4",
        "examples": [
            {
                "example_text": "この書類が必要です。",
                "furigana": "このしょるいがひつようです。",
                "meaning_vi": "Cần có tài liệu này.",
                "meaning_en": "This document is necessary."
            }
        ]
    },
    {
        "kanji": "朱",
        "kun_reading": [
            "しゅ"
        ],
        "on_reading": [
            "シュ"
        ],
        "han_viet": "CHU",
        "meaning_vi": "Đỏ, màu đỏ",
        "meaning_en": "Vermilion, red",
        "radicals": "小, 丶",
        "strokes": 6,
        "level": "N4",
        "examples": [
            {
                "example_text": "この朱色の花がきれいです。",
                "furigana": "このしゅいろのはながきれいです。",
                "meaning_vi": "Đoá hoa màu đỏ này rất đẹp.",
                "meaning_en": "This vermilion-colored flower is beautiful."
            }
        ]
    },
    {
        "kanji": "交",
        "kun_reading": [
            "まじわる",
            "かわる",
            "まじえる"
        ],
        "on_reading": [
            "コウ",
            "カイ"
        ],
        "han_viet": "GIAO",
        "meaning_vi": "Giao, giao lưu",
        "meaning_en": "Intersect, exchange, mix",
        "radicals": "亻, 交",
        "strokes": 6,
        "level": "N4",
        "examples": [
            {
                "example_text": "友達とよく交わります。",
                "furigana": "ともだちとよくまじわります。",
                "meaning_vi": "Tôi giao lưu với bạn bè thường xuyên.",
                "meaning_en": "I often interact with my friends."
            }
        ]
    },
    {
        "kanji": "仲",
        "kun_reading": [
            "なか"
        ],
        "on_reading": [
            "チュウ"
        ],
        "han_viet": "TRỌNG",
        "meaning_vi": "Mối quan hệ, thân thiết",
        "meaning_en": "Relationship, relationship with, harmony",
        "radicals": "亻, 中",
        "strokes": 6,
        "level": "N4",
        "examples": [
            {
                "example_text": "私たちは仲がいいです。",
                "furigana": "わたしたちはなかがいいです。",
                "meaning_vi": "Chúng tôi có mối quan hệ tốt.",
                "meaning_en": "We have a good relationship."
            }
        ]
    },
    /// bai 36 
    {
        kanji: "届",
        kun_reading: ["とど.ける", "とど.く"],
        on_reading: ["カイ"],
        han_viet: "GIỚI",
        meaning_vi: "gửi đến, đến",
        meaning_en: "deliver, reach",
        radicals: "尸",
        strokes: 8,
        level: "N3",
        examples: [
            {
                example_text: "荷物が届きました。",
                furigana: "にもつがとどきました。",
                meaning_vi: "Hàng hóa đã đến.",
                meaning_en: "The package has arrived."
            },
            {
                example_text: "手紙を届ける。",
                furigana: "てがみをとどける。",
                meaning_vi: "Gửi thư.",
                meaning_en: "Deliver a letter."
            }
        ]
    },
    {
        kanji: "打",
        kun_reading: ["う.つ"],
        on_reading: ["ダ"],
        han_viet: "ĐẢ",
        meaning_vi: "đánh, đập",
        meaning_en: "hit, strike",
        radicals: "手",
        strokes: 5,
        level: "N4",
        examples: [
            {
                example_text: "ボールを打つ。",
                furigana: "ボールをうつ。",
                meaning_vi: "Đánh bóng.",
                meaning_en: "Hit the ball."
            },
            {
                example_text: "彼の言葉が胸に打たれた。",
                furigana: "かれのことばがむねにうたれた。",
                meaning_vi: "Lời nói của anh ấy chạm đến trái tim tôi.",
                meaning_en: "His words touched my heart."
            }
        ]
    },
    {
        kanji: "彫",
        kun_reading: ["ほ.る"],
        on_reading: ["チョウ"],
        han_viet: "ĐIÊU",
        meaning_vi: "điêu khắc",
        meaning_en: "engrave, carve",
        radicals: "彡",
        strokes: 11,
        level: "N2",
        examples: [
            {
                example_text: "木に名前を彫る。",
                furigana: "きになまえをほる。",
                meaning_vi: "Khắc tên lên gỗ.",
                meaning_en: "Carve a name into wood."
            },
            {
                example_text: "この彫刻はとても美しい。",
                furigana: "このちょうこくはとてもうつくしい。",
                meaning_vi: "Bức điêu khắc này rất đẹp.",
                meaning_en: "This sculpture is very beautiful."
            }
        ]
    },
    {
        kanji: "太",
        kun_reading: ["ふと.い", "ふと.る"],
        on_reading: ["タイ", "タ"],
        han_viet: "THÁI",
        meaning_vi: "mập, dày",
        meaning_en: "thick, fat",
        radicals: "大",
        strokes: 4,
        level: "N5",
        examples: [
            {
                example_text: "彼は少し太った。",
                furigana: "かれはすこしふとった。",
                meaning_vi: "Anh ấy đã tăng cân một chút.",
                meaning_en: "He has gained some weight."
            },
            {
                example_text: "太い木が立っている。",
                furigana: "ふといきがたっている。",
                meaning_vi: "Một cái cây to đang đứng.",
                meaning_en: "A thick tree is standing."
            }
        ]
    },
    {
        kanji: "過",
        kun_reading: ["す.ぎる", "す.ごす"],
        on_reading: ["カ"],
        han_viet: "QUÁ",
        meaning_vi: "quá mức, vượt qua",
        meaning_en: "exceed, pass",
        radicals: "辶",
        strokes: 12,
        level: "N3",
        examples: [
            {
                example_text: "時間が過ぎるのは早い。",
                furigana: "じかんがすぎるのははやい。",
                meaning_vi: "Thời gian trôi qua rất nhanh.",
                meaning_en: "Time passes quickly."
            },
            {
                example_text: "休日を楽しく過ごす。",
                furigana: "きゅうじつをたのしくすごす。",
                meaning_vi: "Trải qua kỳ nghỉ vui vẻ.",
                meaning_en: "Spend a holiday joyfully."
            }
        ]
    },
    {
        kanji: "固",
        kun_reading: ["かた.い"],
        on_reading: ["コ"],
        han_viet: "CỐ",
        meaning_vi: "cứng, chắc chắn",
        meaning_en: "hard, solid",
        radicals: "囗",
        strokes: 8,
        level: "N3",
        examples: [
            {
                example_text: "氷は固い。",
                furigana: "こおりはかたい。",
                meaning_vi: "Nước đá thì cứng.",
                meaning_en: "Ice is hard."
            },
            {
                example_text: "彼の決意は固い。",
                furigana: "かれのけついはかたい。",
                meaning_vi: "Quyết tâm của anh ấy rất vững chắc.",
                meaning_en: "His determination is firm."
            }
        ]
    },
    {
        kanji: "軟",
        kun_reading: ["やわ.らかい"],
        on_reading: ["ナン"],
        han_viet: "NHUYỄN",
        meaning_vi: "mềm",
        meaning_en: "soft",
        radicals: "車",
        strokes: 11,
        level: "N2",
        examples: [
            {
                example_text: "このパンは軟らかい。",
                furigana: "このパンはやわらかい。",
                meaning_vi: "Bánh mì này rất mềm.",
                meaning_en: "This bread is soft."
            },
            {
                example_text: "彼の考え方は軟らかい。",
                furigana: "かれのかんがえかたはやわらかい。",
                meaning_vi: "Cách suy nghĩ của anh ấy rất linh hoạt.",
                meaning_en: "His way of thinking is flexible."
            }
        ]
    },
    {
        kanji: "電",
        kun_reading: [],
        on_reading: ["デン"],
        han_viet: "ĐIỆN",
        meaning_vi: "điện",
        meaning_en: "electricity",
        radicals: "雨",
        strokes: 13,
        level: "N5",
        examples: [
            {
                example_text: "電気をつける。",
                furigana: "でんきをつける。",
                meaning_vi: "Bật điện lên.",
                meaning_en: "Turn on the light."
            },
            {
                example_text: "電車で通勤する。",
                furigana: "でんしゃでつうきんする。",
                meaning_vi: "Đi làm bằng tàu điện.",
                meaning_en: "Commute by train."
            }
        ]
    },
    {
        kanji: "週",
        kun_reading: [],
        on_reading: ["シュウ"],
        han_viet: "CHU",
        meaning_vi: "tuần",
        meaning_en: "week",
        radicals: "辶",
        strokes: 11,
        level: "N5",
        examples: [
            {
                example_text: "来週、旅行に行きます。",
                furigana: "らいしゅう、りょこうにいきます。",
                meaning_vi: "Tuần sau tôi sẽ đi du lịch.",
                meaning_en: "I will travel next week."
            },
            {
                example_text: "毎週、日本語を勉強しています。",
                furigana: "まいしゅう、にほんごをべんきょうしています。",
                meaning_vi: "Tôi học tiếng Nhật mỗi tuần.",
                meaning_en: "I study Japanese every week."
            }
        ]
    },
    {
        kanji: "絶",
        kun_reading: ["た.える", "た.やす"],
        on_reading: ["ゼツ"],
        han_viet: "TUYỆT",
        meaning_vi: "tuyệt đối, ngừng",
        meaning_en: "absolute, discontinue",
        radicals: "糸",
        strokes: 12,
        level: "N3",
        examples: [
            {
                example_text: "この景色は絶景です。",
                furigana: "このけしきはぜっけいです。",
                meaning_vi: "Phong cảnh này thật tuyệt đẹp.",
                meaning_en: "This scenery is breathtaking."
            },
            {
                example_text: "絶対に忘れないでください。",
                furigana: "ぜったいにわすれないでください。",
                meaning_vi: "Tuyệt đối đừng quên nhé.",
                meaning_en: "Absolutely don't forget."
            }
        ]
    },
    {
        kanji: "対",
        kun_reading: ["たい.する"],
        on_reading: ["タイ", "ツイ"],
        han_viet: "ĐỐI",
        meaning_vi: "đối diện, phản đối",
        meaning_en: "opposite, oppose",
        radicals: "寸",
        strokes: 7,
        level: "N3",
        examples: [
            {
                example_text: "この問題に対して意見があります。",
                furigana: "このもんだいにたいしていけんがあります。",
                meaning_vi: "Tôi có ý kiến về vấn đề này.",
                meaning_en: "I have an opinion on this issue."
            },
            {
                example_text: "賛成と反対の意見がある。",
                furigana: "さんせいとはんたいのいけんがある。",
                meaning_vi: "Có ý kiến đồng ý và phản đối.",
                meaning_en: "There are opinions for and against."
            }
        ]
    },
    {
        kanji: "客",
        kun_reading: [],
        on_reading: ["キャク", "カク"],
        han_viet: "KHÁCH",
        meaning_vi: "khách hàng",
        meaning_en: "guest, customer",
        radicals: "宀",
        strokes: 9,
        level: "N4",
        examples: [
            {
                example_text: "今日はお客さんが多い。",
                furigana: "きょうはおきゃくさんがおおい。",
                meaning_vi: "Hôm nay có nhiều khách.",
                meaning_en: "There are many customers today."
            },
            {
                example_text: "お客様を大切にする。",
                furigana: "おきゃくさまをたいせつにする。",
                meaning_vi: "Trân trọng khách hàng.",
                meaning_en: "Value the customers."
            }
        ]
    },
    {
        kanji: "様",
        kun_reading: ["さま"],
        on_reading: ["ヨウ"],
        han_viet: "DẠNG",
        meaning_vi: "ngài, kiểu",
        meaning_en: "polite suffix, style",
        radicals: "木",
        strokes: 14,
        level: "N4",
        examples: [
            {
                example_text: "田中様が来ました。",
                furigana: "たなかさまがきました。",
                meaning_vi: "Ngài Tanaka đã đến.",
                meaning_en: "Mr./Ms. Tanaka has arrived."
            },
            {
                example_text: "様々な問題があります。",
                furigana: "さまざまなもんだいがあります。",
                meaning_vi: "Có nhiều vấn đề khác nhau.",
                meaning_en: "There are various problems."
            }
        ]
    },
    {
        kanji: "特",
        kun_reading: [],
        on_reading: ["トク"],
        han_viet: "ĐẶC",
        meaning_vi: "đặc biệt",
        meaning_en: "special",
        radicals: "牛",
        strokes: 10,
        level: "N4",
        examples: [
            {
                example_text: "今日は特別な日です。",
                furigana: "きょうはとくべつなひです。",
                meaning_vi: "Hôm nay là một ngày đặc biệt.",
                meaning_en: "Today is a special day."
            },
            {
                example_text: "この料理は特に美味しい。",
                furigana: "このりょうりはとくにおいしい。",
                meaning_vi: "Món ăn này đặc biệt ngon.",
                meaning_en: "This dish is especially delicious."
            }
        ]
    },
    {
        kanji: "別",
        kun_reading: ["わか.れる"],
        on_reading: ["ベツ"],
        han_viet: "BIỆT",
        meaning_vi: "chia ly, khác biệt",
        meaning_en: "separate, different",
        radicals: "刀",
        strokes: 7,
        level: "N4",
        examples: [
            {
                example_text: "友達と別れた。",
                furigana: "ともだちとわかれた。",
                meaning_vi: "Tôi đã chia tay bạn.",
                meaning_en: "I parted ways with my friend."
            },
            {
                example_text: "特別なプレゼントを用意した。",
                furigana: "とくべつなプレゼントをよういした。",
                meaning_vi: "Tôi đã chuẩn bị một món quà đặc biệt.",
                meaning_en: "I prepared a special gift."
            }
        ]
    },
    {
        kanji: "泳",
        kun_reading: ["およ.ぐ"],
        on_reading: ["エイ"],
        han_viet: "VỊNH",
        meaning_vi: "bơi lội",
        meaning_en: "swim",
        radicals: "水",
        strokes: 8,
        level: "N5",
        examples: [
            {
                example_text: "私は海で泳ぐのが好きです。",
                furigana: "わたしはうみでおよぐのがすきです。",
                meaning_vi: "Tôi thích bơi ở biển.",
                meaning_en: "I like swimming in the sea."
            },
            {
                example_text: "子供の頃に泳ぎを習った。",
                furigana: "こどものころにおよぎをならった。",
                meaning_vi: "Tôi đã học bơi khi còn nhỏ.",
                meaning_en: "I learned to swim when I was a child."
            }
        ]
    },
    {
        kanji: "持",
        kun_reading: ["も.つ"],
        on_reading: ["ジ"],
        han_viet: "TRÌ",
        meaning_vi: "cầm, nắm, giữ",
        meaning_en: "hold, carry",
        radicals: "手",
        strokes: 9,
        level: "N5",
        examples: [
            {
                example_text: "このバッグを持ってください。",
                furigana: "このバッグをもってください。",
                meaning_vi: "Hãy cầm túi này giúp tôi.",
                meaning_en: "Please hold this bag."
            },
            {
                example_text: "長い間、夢を持ち続けた。",
                furigana: "ながいあいだ、ゆめをもちつづけた。",
                meaning_vi: "Tôi đã giữ ước mơ trong một thời gian dài.",
                meaning_en: "I kept my dream for a long time."
            }
        ]
    },
    {
        kanji: "乗",
        kun_reading: ["の.る", "の.せる"],
        on_reading: ["ジョウ"],
        han_viet: "THỪA",
        meaning_vi: "lên xe, đi (tàu, xe)",
        meaning_en: "ride, board",
        radicals: "木",
        strokes: 9,
        level: "N5",
        examples: [
            {
                example_text: "電車に乗る。",
                furigana: "でんしゃにのる。",
                meaning_vi: "Lên tàu điện.",
                meaning_en: "Get on the train."
            },
            {
                example_text: "彼を車に乗せた。",
                furigana: "かれをくるまにのせた。",
                meaning_vi: "Tôi đã cho anh ấy lên xe.",
                meaning_en: "I let him ride in the car."
            }
        ]
    },
    {
        kanji: "物",
        kun_reading: ["もの"],
        on_reading: ["ブツ", "モツ"],
        han_viet: "VẬT",
        meaning_vi: "đồ vật",
        meaning_en: "thing, object",
        radicals: "牛",
        strokes: 8,
        level: "N5",
        examples: [
            {
                example_text: "大切な物をなくした。",
                furigana: "たいせつなものをなくした。",
                meaning_vi: "Tôi đã làm mất một vật quan trọng.",
                meaning_en: "I lost something important."
            },
            {
                example_text: "動物が好きです。",
                furigana: "どうぶつがすきです。",
                meaning_vi: "Tôi thích động vật.",
                meaning_en: "I like animals."
            }
        ]
    },
    {
        kanji: "歴",
        kun_reading: [],
        on_reading: ["レキ"],
        han_viet: "LỊCH",
        meaning_vi: "lịch sử",
        meaning_en: "history",
        radicals: "止",
        strokes: 14,
        level: "N3",
        examples: [
            {
                example_text: "日本の歴史を勉強する。",
                furigana: "にほんのれきしをべんきょうする。",
                meaning_vi: "Tôi học lịch sử Nhật Bản.",
                meaning_en: "I study Japanese history."
            },
            {
                example_text: "歴史的な建物を見るのが好きです。",
                furigana: "れきしてきなたてものをみるのがすきです。",
                meaning_vi: "Tôi thích ngắm những tòa nhà lịch sử.",
                meaning_en: "I like seeing historical buildings."
            }
        ]
    },
    {
        kanji: "史",
        kun_reading: [],
        on_reading: ["シ"],
        han_viet: "SỬ",
        meaning_vi: "sử, lịch sử",
        meaning_en: "history",
        radicals: "口",
        strokes: 5,
        level: "N3",
        examples: [
            {
                example_text: "世界史の授業を受ける。",
                furigana: "せかいしのじゅぎょうをうける。",
                meaning_vi: "Tôi tham gia lớp lịch sử thế giới.",
                meaning_en: "I take world history classes."
            },
            {
                example_text: "日本史を研究する。",
                furigana: "にほんしをけんきゅうする。",
                meaning_vi: "Nghiên cứu lịch sử Nhật Bản.",
                meaning_en: "Research Japanese history."
            }
        ]
    },
    {
        kanji: "世",
        kun_reading: ["よ"],
        on_reading: ["セイ", "セ"],
        han_viet: "THẾ",
        meaning_vi: "thế giới, đời",
        meaning_en: "world, generation",
        radicals: "一",
        strokes: 5,
        level: "N4",
        examples: [
            {
                example_text: "世界は広い。",
                furigana: "せかいはひろい。",
                meaning_vi: "Thế giới rất rộng lớn.",
                meaning_en: "The world is vast."
            },
            {
                example_text: "彼は世の中をよく知っている。",
                furigana: "かれはよのなかをよくしっている。",
                meaning_vi: "Anh ấy hiểu rõ về xã hội.",
                meaning_en: "He knows the world well."
            }
        ]
    },
    {
        kanji: "紀",
        kun_reading: [],
        on_reading: ["キ"],
        han_viet: "KỶ",
        meaning_vi: "thế kỷ",
        meaning_en: "era, century",
        radicals: "糸",
        strokes: 9,
        level: "N3",
        examples: [
            {
                example_text: "21世紀に生まれた。",
                furigana: "にじゅういっせいきにうまれた。",
                meaning_vi: "Tôi sinh ra vào thế kỷ 21.",
                meaning_en: "I was born in the 21st century."
            },
            {
                example_text: "紀元前の文化を学ぶ。",
                furigana: "きげんぜんのぶんかをまなぶ。",
                meaning_vi: "Học về văn hóa trước Công nguyên.",
                meaning_en: "Learn about pre-Common Era culture."
            }
        ]
    },
    {
        kanji: "汽",
        kun_reading: [],
        on_reading: ["キ"],
        han_viet: "KHÍ",
        meaning_vi: "hơi nước",
        meaning_en: "steam",
        radicals: "水",
        strokes: 7,
        level: "N3",
        examples: [
            {
                example_text: "汽車に乗る。",
                furigana: "きしゃにのる。",
                meaning_vi: "Đi tàu hơi nước.",
                meaning_en: "Ride a steam train."
            }
        ]
    },
    {
        kanji: "船",
        kun_reading: ["ふね", "ふな"],
        on_reading: ["セン"],
        han_viet: "THUYỀN",
        meaning_vi: "tàu, thuyền",
        meaning_en: "ship, boat",
        radicals: "舟",
        strokes: 11,
        level: "N4",
        examples: [
            {
                example_text: "船で旅行する。",
                furigana: "ふねでりょこうする。",
                meaning_vi: "Du lịch bằng thuyền.",
                meaning_en: "Travel by boat."
            }
        ]
    },
    {
        kanji: "勢",
        kun_reading: ["いきお.い"],
        on_reading: ["セイ"],
        han_viet: "THẾ",
        meaning_vi: "thế lực, năng lượng",
        meaning_en: "force, energy",
        radicals: "力",
        strokes: 13,
        level: "N2",
        examples: [
            {
                example_text: "彼は勢いよく走った。",
                furigana: "かれはいきおいよくはしった。",
                meaning_vi: "Anh ấy chạy với sức mạnh lớn.",
                meaning_en: "He ran with great force."
            },
            {
                example_text: "勢力を拡大する。",
                furigana: "せいりょくをかくだいする。",
                meaning_vi: "Mở rộng thế lực.",
                meaning_en: "Expand influence."
            }
        ]
    },
    {
        kanji: "運",
        kun_reading: ["はこ.ぶ"],
        on_reading: ["ウン"],
        han_viet: "VẬN",
        meaning_vi: "vận chuyển, vận mệnh",
        meaning_en: "transport, fortune",
        radicals: "辶",
        strokes: 12,
        level: "N4",
        examples: [
            {
                example_text: "荷物を運ぶ。",
                furigana: "にもつをはこぶ。",
                meaning_vi: "Vận chuyển hàng hóa.",
                meaning_en: "Transport luggage."
            },
            {
                example_text: "運が良かった。",
                furigana: "うんがよかった。",
                meaning_vi: "Tôi đã gặp may.",
                meaning_en: "I was lucky."
            }
        ]
    },
    {
        kanji: "飛",
        kun_reading: ["と.ぶ", "と.ばす"],
        on_reading: ["ヒ"],
        han_viet: "PHI",
        meaning_vi: "bay",
        meaning_en: "fly",
        radicals: "飛",
        strokes: 9,
        level: "N4",
        examples: [
            {
                example_text: "鳥が空を飛ぶ。",
                furigana: "とりがそらをとぶ。",
                meaning_vi: "Chim bay trên trời.",
                meaning_en: "The bird flies in the sky."
            },
            {
                example_text: "飛行機に乗る。",
                furigana: "ひこうきにのる。",
                meaning_vi: "Lên máy bay.",
                meaning_en: "Board a plane."
            }
        ]
    },
    {
        kanji: "宇",
        kun_reading: [],
        on_reading: ["ウ"],
        han_viet: "VŨ",
        meaning_vi: "vũ trụ",
        meaning_en: "universe",
        radicals: "宀",
        strokes: 6,
        level: "N3",
        examples: [
            {
                example_text: "宇宙は広大だ。",
                furigana: "うちゅうはこうだいだ。",
                meaning_vi: "Vũ trụ rất rộng lớn.",
                meaning_en: "The universe is vast."
            },
            {
                example_text: "宇宙飛行士になりたい。",
                furigana: "うちゅうひこうしになりたい。",
                meaning_vi: "Tôi muốn trở thành phi hành gia.",
                meaning_en: "I want to become an astronaut."
            }
        ]
    },
    {
        kanji: "宙",
        kun_reading: [],
        on_reading: ["チュウ"],
        han_viet: "TRỤ",
        meaning_vi: "không gian, vũ trụ",
        meaning_en: "space, mid-air",
        radicals: "宀",
        strokes: 8,
        level: "N3",
        examples: [
            {
                example_text: "ボールが宙に浮かんでいる。",
                furigana: "ボールがちゅうにうかんでいる。",
                meaning_vi: "Quả bóng đang lơ lửng trong không trung.",
                meaning_en: "The ball is floating in the air."
            },
            {
                example_text: "宇宙船を開発する。",
                furigana: "うちゅうせんをかいはつする。",
                meaning_vi: "Phát triển tàu vũ trụ.",
                meaning_en: "Develop a spaceship."
            }
        ]
    },
    {
        kanji: "地",
        kun_reading: ["ち", "じ"],
        on_reading: ["チ", "ジ"],
        han_viet: "ĐỊA",
        meaning_vi: "đất, địa lý",
        meaning_en: "earth, ground",
        radicals: "土",
        strokes: 6,
        level: "N5",
        examples: [
            {
                example_text: "地図を見てください。",
                furigana: "ちずをみてください。",
                meaning_vi: "Hãy xem bản đồ.",
                meaning_en: "Please look at the map."
            },
            {
                example_text: "地震が起きた。",
                furigana: "じしんがおきた。",
                meaning_vi: "Đã xảy ra động đất.",
                meaning_en: "An earthquake occurred."
            }
        ]
    },
    {
        kanji: "球",
        kun_reading: ["たま"],
        on_reading: ["キュウ"],
        han_viet: "CẦU",
        meaning_vi: "quả cầu, trái đất",
        meaning_en: "sphere, ball",
        radicals: "王",
        strokes: 11,
        level: "N3",
        examples: [
            {
                example_text: "地球は青い。",
                furigana: "ちきゅうはあおい。",
                meaning_vi: "Trái đất có màu xanh.",
                meaning_en: "The Earth is blue."
            },
            {
                example_text: "野球をするのが好きです。",
                furigana: "やきゅうをするのがすきです。",
                meaning_vi: "Tôi thích chơi bóng chày.",
                meaning_en: "I like playing baseball."
            }
        ]
    },
    {
        "kanji": "慣",
        "kun_reading": ["なれる", "ならす"],
        "on_reading": ["かん"],
        "han_viet": "QUÁN",
        "meaning_vi": "quen, thói quen",
        "meaning_en": "habit, custom",
        "radicals": "心",
        "strokes": 14,
        "level": "N3",
        "examples": [
            {
                "example_text": "私はこの仕事に慣れています。",
                "furigana": "わたしはこのしごとになれています。",
                "meaning_vi": "Tôi đã quen với công việc này.",
                "meaning_en": "I am accustomed to this job."
            },
            {
                "example_text": "この街の生活にはまだ慣れていません。",
                "furigana": "このまちのせいかつにはまだなれていません。",
                "meaning_vi": "Tôi vẫn chưa quen với cuộc sống ở thành phố này.",
                "meaning_en": "I am not used to the life in this city yet."
            }
        ]
    },
    {
        "kanji": "腐",
        "kun_reading": ["くさる", "くさらす"],
        "on_reading": ["ふ"],
        "han_viet": "HỦ",
        "meaning_vi": "thối, mục nát",
        "meaning_en": "rot, decay",
        "radicals": "肉",
        "strokes": 14,
        "level": "N2",
        "examples": [
            {
                "example_text": "この肉は腐っている。",
                "furigana": "このにくはくさっている。",
                "meaning_vi": "Thịt này đã thối.",
                "meaning_en": "This meat is rotten."
            },
            {
                "example_text": "腐った果物は食べられない。",
                "furigana": "くさったくだものはたべられない。",
                "meaning_vi": "Không thể ăn trái cây thối.",
                "meaning_en": "Rotten fruit cannot be eaten."
            }
        ]
    },
    {
        "kanji": "剣",
        "kun_reading": ["けん", "つるぎ"],
        "on_reading": ["けん"],
        "han_viet": "KIẾM",
        "meaning_vi": "kiếm, thanh kiếm",
        "meaning_en": "sword, katana",
        "radicals": "刀",
        "strokes": 10,
        "level": "N3",
        "examples": [
            {
                "example_text": "武士は剣を持っています。",
                "furigana": "ぶしはけんをもっています。",
                "meaning_vi": "Samurai mang kiếm.",
                "meaning_en": "The samurai has a sword."
            },
            {
                "example_text": "私は剣道をしています。",
                "furigana": "わたしはけんどうをしています。",
                "meaning_vi": "Tôi đang luyện kiếm đạo.",
                "meaning_en": "I practice kendo."
            }
        ]
    },
    {
        "kanji": "柔",
        "kun_reading": ["やわらかい", "やわらげる"],
        "on_reading": ["じゅう"],
        "han_viet": "NHU",
        "meaning_vi": "mềm dẻo, nhu nhược",
        "meaning_en": "soft, flexible",
        "radicals": "手",
        "strokes": 12,
        "level": "N2",
        "examples": [
            {
                "example_text": "この布は柔らかい。",
                "furigana": "このぬのはやわらかい。",
                "meaning_vi": "Tấm vải này mềm mại.",
                "meaning_en": "This cloth is soft."
            },
            {
                "example_text": "彼の柔道の技は素晴らしいです。",
                "furigana": "かれのじゅうどうのわざはすばらしいです。",
                "meaning_vi": "Kỹ thuật judo của anh ấy thật tuyệt vời.",
                "meaning_en": "His judo technique is wonderful."
            }
        ]
    },
    {
        "kanji": "事",
        "kun_reading": ["こと", "ごと"],
        "on_reading": ["じ"],
        "han_viet": "SỰ",
        "meaning_vi": "việc, sự việc",
        "meaning_en": "thing, matter, event",
        "radicals": "亅",
        "strokes": 8,
        "level": "N5",
        "examples": [
            {
                "example_text": "大切な事を忘れないでください。",
                "furigana": "たいせつなことをわすれないでください。",
                "meaning_vi": "Xin đừng quên điều quan trọng.",
                "meaning_en": "Please don't forget the important thing."
            },
            {
                "example_text": "この事は秘密です。",
                "furigana": "このことはひみつです。",
                "meaning_vi": "Điều này là bí mật.",
                "meaning_en": "This matter is a secret."
            }
        ]
    },
    {
        "kanji": "故",
        "kun_reading": ["ゆえ", "ふる"],
        "on_reading": ["こ"],
        "han_viet": "CỐ",
        "meaning_vi": "cố, lý do, vì",
        "meaning_en": "cause, reason, deceased",
        "radicals": "氏",
        "strokes": 7,
        "level": "N2",
        "examples": [
            {
                "example_text": "彼は故郷に帰りました。",
                "furigana": "かれはこきょうにかえりました。",
                "meaning_vi": "Anh ấy đã trở về quê hương.",
                "meaning_en": "He returned to his hometown."
            },
            {
                "example_text": "故障が発生しました。",
                "furigana": "こしょうがはっせいしました。",
                "meaning_vi": "Đã xảy ra sự cố.",
                "meaning_en": "A malfunction has occurred."
            }
        ]
    },
    /// bai 37
    {
        "kanji": "褒",
        "kun_reading": ["ほめる"],
        "on_reading": ["ほう"],
        "han_viet": "BAO",
        "meaning_vi": "khen ngợi, tán dương",
        "meaning_en": "praise, commend",
        "radicals": "衣",
        "strokes": 14,
        "level": "N2",
        "examples": [
            {
                "example_text": "彼は褒められるべきです。",
                "furigana": "かれはほめられるべきです。",
                "meaning_vi": "Anh ấy xứng đáng được khen ngợi.",
                "meaning_en": "He deserves to be praised."
            },
            {
                "example_text": "彼女の努力を褒めました。",
                "furigana": "かのじょのどりょくをほめました。",
                "meaning_vi": "Tôi đã khen ngợi sự nỗ lực của cô ấy.",
                "meaning_en": "I praised her efforts."
            }
        ]
    },
    {
        "kanji": "誘",
        "kun_reading": ["さそう"],
        "on_reading": ["ゆう"],
        "han_viet": "DỤ",
        "meaning_vi": "dụ dỗ, mời",
        "meaning_en": "invite, tempt",
        "radicals": "君",
        "strokes": 12,
        "level": "N2",
        "examples": [
            {
                "example_text": "友達を映画に誘いました。",
                "furigana": "ともだちをえいがにさそいました。",
                "meaning_vi": "Tôi đã mời bạn đi xem phim.",
                "meaning_en": "I invited my friend to the movie."
            },
            {
                "example_text": "彼は私を旅行に誘った。",
                "furigana": "かれはわたしをりょこうにさそった。",
                "meaning_vi": "Anh ấy đã rủ tôi đi du lịch.",
                "meaning_en": "He invited me to go on a trip."
            }
        ]
    },
    {
        "kanji": "起",
        "kun_reading": ["おきる", "おこす"],
        "on_reading": ["き"],
        "han_viet": "KHỞI",
        "meaning_vi": "dậy, thức dậy, khởi đầu",
        "meaning_en": "wake up, rise, begin",
        "radicals": "走",
        "strokes": 6,
        "level": "N4",
        "examples": [
            {
                "example_text": "私は朝早く起きます。",
                "furigana": "わたしはあさはやくおきます。",
                "meaning_vi": "Tôi dậy sớm vào buổi sáng.",
                "meaning_en": "I wake up early in the morning."
            },
            {
                "example_text": "会議を起こす必要があります。",
                "furigana": "かいぎをおこすひつようがあります。",
                "meaning_vi": "Cần phải tổ chức một cuộc họp.",
                "meaning_en": "We need to hold a meeting."
            }
        ]
    },
    {
        "kanji": "待",
        "kun_reading": ["まつ"],
        "on_reading": ["たい"],
        "han_viet": "ĐÃI",
        "meaning_vi": "chờ đợi",
        "meaning_en": "wait",
        "radicals": "心",
        "strokes": 6,
        "level": "N4",
        "examples": [
            {
                "example_text": "私は彼を待っています。",
                "furigana": "わたしはかれをまっています。",
                "meaning_vi": "Tôi đang chờ anh ấy.",
                "meaning_en": "I am waiting for him."
            },
            {
                "example_text": "彼女は駅で待ち合わせました。",
                "furigana": "かのじょはえきでまちあわせました。",
                "meaning_vi": "Cô ấy đã hẹn gặp ở ga.",
                "meaning_en": "She arranged to meet at the station."
            }
        ]
    },
    {
        "kanji": "招",
        "kun_reading": ["まねく"],
        "on_reading": ["しょう"],
        "han_viet": "CHIÊU",
        "meaning_vi": "mời, triệu tập",
        "meaning_en": "invite, summon",
        "radicals": "言",
        "strokes": 9,
        "level": "N2",
        "examples": [
            {
                "example_text": "彼は私をパーティーに招待しました。",
                "furigana": "かれはわたしをぱーてぃーにしょうたいしました。",
                "meaning_vi": "Anh ấy đã mời tôi đến bữa tiệc.",
                "meaning_en": "He invited me to the party."
            },
            {
                "example_text": "その店は客を招いています。",
                "furigana": "そのみせはきゃくをまねいています。",
                "meaning_vi": "Cửa hàng đó đang mời khách.",
                "meaning_en": "The shop is inviting customers."
            }
        ]
    },
    {
        "kanji": "頼",
        "kun_reading": ["たのむ", "たよる"],
        "on_reading": ["らい"],
        "han_viet": "LẠI",
        "meaning_vi": "nhờ cậy, yêu cầu",
        "meaning_en": "request, rely on",
        "radicals": "言",
        "strokes": 10,
        "level": "N2",
        "examples": [
            {
                "example_text": "私は彼に手伝いを頼みました。",
                "furigana": "わたしはかれにてつだいをたのみました。",
                "meaning_vi": "Tôi đã nhờ anh ấy giúp đỡ.",
                "meaning_en": "I asked him for help."
            },
            {
                "example_text": "あなたに頼んでもいいですか？",
                "furigana": "あなたにたのんでもいいですか？",
                "meaning_vi": "Tôi có thể nhờ bạn không?",
                "meaning_en": "Can I ask you for a favor?"
            }
        ]
    },
    {
        "kanji": "注",
        "kun_reading": ["ちゅう", "そそぐ"],
        "on_reading": ["ちゅう"],
        "han_viet": "CHÚ",
        "meaning_vi": "chú ý, chú trọng",
        "meaning_en": "note, pay attention, pour",
        "radicals": "水",
        "strokes": 6,
        "level": "N3",
        "examples": [
            {
                "example_text": "この問題に注目してください。",
                "furigana": "このもんだいにちゅうもくしてください。",
                "meaning_vi": "Hãy chú ý đến vấn đề này.",
                "meaning_en": "Please pay attention to this issue."
            },
            {
                "example_text": "お湯を注いでください。",
                "furigana": "おゆをそそいでください。",
                "meaning_vi": "Xin vui lòng đổ nước sôi.",
                "meaning_en": "Please pour the hot water."
            }
        ]
    },
    {
        "kanji": "意",
        "kun_reading": ["い"],
        "on_reading": ["い"],
        "han_viet": "Ý",
        "meaning_vi": "ý tưởng, ý chí",
        "meaning_en": "idea, intention",
        "radicals": "心",
        "strokes": 6,
        "level": "N3",
        "examples": [
            {
                "example_text": "私の意見はこうです。",
                "furigana": "わたしのいけんはこうです。",
                "meaning_vi": "Ý kiến của tôi là như vậy.",
                "meaning_en": "My opinion is like this."
            },
            {
                "example_text": "彼は強い意志を持っています。",
                "furigana": "かれはつよいいしをもっています。",
                "meaning_vi": "Anh ấy có ý chí mạnh mẽ.",
                "meaning_en": "He has strong willpower."
            }
        ]
    },
    {
        "kanji": "踏",
        "kun_reading": ["ふむ", "ふまえる"],
        "on_reading": ["とう"],
        "han_viet": "ĐẠP",
        "meaning_vi": "dẫm, giẫm lên",
        "meaning_en": "step on, tread",
        "radicals": "足",
        "strokes": 12,
        "level": "N2",
        "examples": [
            {
                "example_text": "彼は歩道を踏みました。",
                "furigana": "かれはほどうをふみました。",
                "meaning_vi": "Anh ấy đã bước lên vỉa hè.",
                "meaning_en": "He stepped on the sidewalk."
            },
            {
                "example_text": "私はその考えを踏まえて話します。",
                "furigana": "わたしはそのかんがえをふまえてはなします。",
                "meaning_vi": "Tôi sẽ nói dựa trên suy nghĩ đó.",
                "meaning_en": "I will speak based on that idea."
            }
        ]
    },
    {
        "kanji": "壊",
        "kun_reading": ["こわれる", "こわす"],
        "on_reading": ["かい"],
        "han_viet": "HOẠI",
        "meaning_vi": "hỏng, phá hủy",
        "meaning_en": "break, destroy",
        "radicals": "土",
        "strokes": 12,
        "level": "N3",
        "examples": [
            {
                "example_text": "この機械は壊れています。",
                "furigana": "このきかいはこわれています。",
                "meaning_vi": "Cái máy này bị hỏng.",
                "meaning_en": "This machine is broken."
            },
            {
                "example_text": "彼は私のカメラを壊しました。",
                "furigana": "かれはわたしのかめらをこわしました。",
                "meaning_vi": "Anh ấy đã làm hỏng máy ảnh của tôi.",
                "meaning_en": "He broke my camera."
            }
        ]
    },
    {
        "kanji": "汚",
        "kun_reading": ["よごす", "よごれる"],
        "on_reading": ["お"],
        "han_viet": "Ô",
        "meaning_vi": "bẩn, làm bẩn",
        "meaning_en": "dirty, soil",
        "radicals": "水",
        "strokes": 6,
        "level": "N3",
        "examples": [
            {
                "example_text": "手が汚れた。",
                "furigana": "てがよごれた。",
                "meaning_vi": "Tay tôi bị bẩn.",
                "meaning_en": "My hands are dirty."
            },
            {
                "example_text": "この服はすぐ汚れる。",
                "furigana": "このふくはすぐよごれる。",
                "meaning_vi": "Cái áo này dễ bị bẩn.",
                "meaning_en": "This shirt gets dirty quickly."
            }
        ]
    },
    {
        "kanji": "輸",
        "kun_reading": ["ゆ", "おくる"],
        "on_reading": ["ゆ"],
        "han_viet": "THÂU",
        "meaning_vi": "vận chuyển, xuất khẩu",
        "meaning_en": "transport, export",
        "radicals": "車",
        "strokes": 9,
        "level": "N2",
        "examples": [
            {
                "example_text": "この商品は海外に輸出されています。",
                "furigana": "このしょうひんはかいがいにゆしゅつされています。",
                "meaning_vi": "Sản phẩm này đang được xuất khẩu ra nước ngoài.",
                "meaning_en": "This product is being exported abroad."
            },
            {
                "example_text": "私たちは部品を輸入しています。",
                "furigana": "わたしたちはぶひんをゆにゅうしています。",
                "meaning_vi": "Chúng tôi đang nhập khẩu các linh kiện.",
                "meaning_en": "We are importing parts."
            }
        ]
    },
    {
        "kanji": "翻",
        "kun_reading": ["ひるがえす", "ひるがえる"],
        "on_reading": ["ほん"],
        "han_viet": "PHIÊN",
        "meaning_vi": "phiên dịch, quay lại",
        "meaning_en": "turn over, translate",
        "radicals": "毛",
        "strokes": 10,
        "level": "N2",
        "examples": [
            {
                "example_text": "彼はその文章を英語に翻訳しました。",
                "furigana": "かれはそのぶんしょうをえいごにほんやくしました。",
                "meaning_vi": "Anh ấy đã dịch câu văn đó sang tiếng Anh.",
                "meaning_en": "He translated the example_text into English."
            },
            {
                "example_text": "旗が風で翻っていました。",
                "furigana": "はたがふうでひるがっていました。",
                "meaning_vi": "Cờ đã bay trong gió.",
                "meaning_en": "The flag was fluttering in the wind."
            }
        ]
    },
    {
        "kanji": "訳",
        "kun_reading": ["わけ"],
        "on_reading": ["やく"],
        "han_viet": "DỊCH",
        "meaning_vi": "dịch, lý do",
        "meaning_en": "translate, reason",
        "radicals": "言",
        "strokes": 8,
        "level": "N3",
        "examples": [
            {
                "example_text": "私はその意味を訳しました。",
                "furigana": "わたしはそのいみをやくしました。",
                "meaning_vi": "Tôi đã dịch nghĩa của nó.",
                "meaning_en": "I translated its meaning."
            },
            {
                "example_text": "何か訳があるのですか？",
                "furigana": "なにかわけがあるのですか？",
                "meaning_vi": "Có lý do gì không?",
                "meaning_en": "Is there a reason?"
            }
        ]
    },
    {
        "kanji": "発",
        "kun_reading": ["はつ", "ほつ"],
        "on_reading": ["はつ"],
        "han_viet": "PHÁT",
        "meaning_vi": "phát, khởi phát",
        "meaning_en": "departure, emit",
        "radicals": "癶",
        "strokes": 5,
        "level": "N3",
        "examples": [
            {
                "example_text": "新しい商品を発表しました。",
                "furigana": "あたらしいしょうひんをはっぴょうしました。",
                "meaning_vi": "Chúng tôi đã công bố sản phẩm mới.",
                "meaning_en": "We announced the new product."
            },
            {
                "example_text": "駅から発車します。",
                "furigana": "えきからはっしゃします。",
                "meaning_vi": "Chuyến tàu xuất phát từ ga.",
                "meaning_en": "The train departs from the station."
            }
        ]
    },
    {
        "kanji": "明",
        "kun_reading": ["あかるい", "あける", "あかす"],
        "on_reading": ["めい", "みょう"],
        "han_viet": "MINH",
        "meaning_vi": "sáng, rõ ràng",
        "meaning_en": "bright, clear",
        "radicals": "日",
        "strokes": 8,
        "level": "N4",
        "examples": [
            {
                "example_text": "明日は晴れるでしょう。",
                "furigana": "あしたははれるでしょう。",
                "meaning_vi": "Ngày mai sẽ có nắng.",
                "meaning_en": "It will be sunny tomorrow."
            },
            {
                "example_text": "部屋を明るくしました。",
                "furigana": "へやをあかるくしました。",
                "meaning_vi": "Tôi đã làm sáng căn phòng.",
                "meaning_en": "I made the room brighter."
            }
        ]
    },
    {
        "kanji": "計",
        "kun_reading": ["はかる"],
        "on_reading": ["けい"],
        "han_viet": "KẾ",
        "meaning_vi": "kế hoạch, đo lường",
        "meaning_en": "plan, measure",
        "radicals": "言",
        "strokes": 7,
        "level": "N3",
        "examples": [
            {
                "example_text": "この計画は成功すると思います。",
                "furigana": "このけいかくはせいこうするとおもいます。",
                "meaning_vi": "Tôi nghĩ kế hoạch này sẽ thành công.",
                "meaning_en": "I think this plan will succeed."
            },
            {
                "example_text": "時計で時間を計りました。",
                "furigana": "とけいでじかんをはかりました。",
                "meaning_vi": "Tôi đã đo thời gian bằng đồng hồ.",
                "meaning_en": "I measured the time with a clock."
            }
        ]
    },
    {
        "kanji": "米",
        "kun_reading": ["こめ", "よね"],
        "on_reading": ["べい", "まい"],
        "han_viet": "MỄ",
        "meaning_vi": "gạo, Mỹ",
        "meaning_en": "rice, America",
        "radicals": "米",
        "strokes": 6,
        "level": "N4",
        "examples": [
            {
                "example_text": "私は毎日米を食べます。",
                "furigana": "わたしはまいにちこめをたべます。",
                "meaning_vi": "Tôi ăn cơm mỗi ngày.",
                "meaning_en": "I eat rice every day."
            },
            {
                "example_text": "彼はアメリカから来ました。",
                "furigana": "かれはあめりかからきました。",
                "meaning_vi": "Anh ấy đến từ Mỹ.",
                "meaning_en": "He came from America."
            }
        ]
    },
    {
        "kanji": "麦",
        "kun_reading": ["むぎ"],
        "on_reading": ["ばく"],
        "han_viet": "MẠCH",
        "meaning_vi": "lúa mạch",
        "meaning_en": "wheat",
        "radicals": "麦",
        "strokes": 7,
        "level": "N4",
        "examples": [
            {
                "example_text": "麦を使ってパンを作ります。",
                "furigana": "むぎをつかってぱんをつくります。",
                "meaning_vi": "Chúng tôi làm bánh mì từ lúa mạch.",
                "meaning_en": "We make bread from wheat."
            },
            {
                "example_text": "麦畑が広がっています。",
                "furigana": "むぎばたけがひろがっています。",
                "meaning_vi": "Cánh đồng lúa mạch đang lan rộng.",
                "meaning_en": "The wheat field is spfurigana."
            }
        ]
    },
    {
        "kanji": "石",
        "kun_reading": ["いし"],
        "on_reading": ["せき", "しゃく"],
        "han_viet": "THẠCH",
        "meaning_vi": "đá",
        "meaning_en": "stone, rock",
        "radicals": "石",
        "strokes": 5,
        "level": "N3",
        "examples": [
            {
                "example_text": "その道は石でできています。",
                "furigana": "そのみちはいしでできています。",
                "meaning_vi": "Con đường đó được làm từ đá.",
                "meaning_en": "The road is made of stone."
            },
            {
                "example_text": "石を拾ってきました。",
                "furigana": "いしをひろってきました。",
                "meaning_vi": "Tôi đã nhặt một viên đá.",
                "meaning_en": "I picked up a stone."
            }
        ]
    },
    {
        "kanji": "油",
        "kun_reading": ["あぶら", "ゆ"],
        "on_reading": ["ゆ"],
        "han_viet": "DẦU",
        "meaning_vi": "dầu",
        "meaning_en": "oil",
        "radicals": "油",
        "strokes": 9,
        "level": "N3",
        "examples": [
            {
                "example_text": "サラダに油を使いました。",
                "furigana": "さらだにあぶらをつかいました。",
                "meaning_vi": "Tôi đã sử dụng dầu trong món salad.",
                "meaning_en": "I used oil in the salad."
            },
            {
                "example_text": "油が漏れています。",
                "furigana": "あぶらがもれています。",
                "meaning_vi": "Dầu đang bị rò rỉ.",
                "meaning_en": "Oil is leaking."
            }
        ]
    },
    {
        "kanji": "原",
        "kun_reading": ["はら", "げん"],
        "on_reading": ["げん"],
        "han_viet": "NGUYÊN",
        "meaning_vi": "nguyên, nguyên thủy",
        "meaning_en": "original, source",
        "radicals": "原",
        "strokes": 10,
        "level": "N3",
        "examples": [
            {
                "example_text": "原っぱで遊びました。",
                "furigana": "はらっぱであそびました。",
                "meaning_vi": "Chúng tôi đã chơi ở cánh đồng.",
                "meaning_en": "We played in the field."
            },
            {
                "example_text": "彼は原子力の専門家です。",
                "furigana": "かれはげんしりょくのせんもんかです。",
                "meaning_vi": "Anh ấy là chuyên gia về năng lượng hạt nhân.",
                "meaning_en": "He is an expert in nuclear energy."
            }
        ]
    },
    {
        "kanji": "泥",
        "kun_reading": ["どろ"],
        "on_reading": ["でい"],
        "han_viet": "NÊ",
        "meaning_vi": "bùn",
        "meaning_en": "mud",
        "radicals": "土",
        "strokes": 8,
        "level": "N3",
        "examples": [
            {
                "example_text": "泥だらけの靴を履いています。",
                "furigana": "どろだらけのくつをはいています。",
                "meaning_vi": "Tôi đang đi đôi giày đầy bùn.",
                "meaning_en": "I am wearing muddy shoes."
            },
            {
                "example_text": "泥を取り除いてください。",
                "furigana": "どろをとりのぞいてください。",
                "meaning_vi": "Hãy loại bỏ bùn đi.",
                "meaning_en": "Please remove the mud."
            }
        ]
    },
    {
        "kanji": "棒",
        "kun_reading": ["ぼう"],
        "on_reading": ["ぼう"],
        "han_viet": "BỔNG",
        "meaning_vi": "gậy, thanh",
        "meaning_en": "stick, rod",
        "radicals": "木",
        "strokes": 6,
        "level": "N3",
        "examples": [
            {
                "example_text": "彼は棒を持っています。",
                "furigana": "かれはぼうをもっています。",
                "meaning_vi": "Anh ấy đang cầm một cái gậy.",
                "meaning_en": "He is holding a stick."
            },
            {
                "example_text": "木の棒で叩きました。",
                "furigana": "きのぼうでたたきました。",
                "meaning_vi": "Tôi đã đánh bằng một cây gậy gỗ.",
                "meaning_en": "I hit it with a wooden stick."
            }
        ]
    },
    {
        "kanji": "警",
        "kun_reading": ["けい"],
        "on_reading": ["けい"],
        "han_viet": "CẢNH",
        "meaning_vi": "cảnh báo",
        "meaning_en": "warn, caution",
        "radicals": "言",
        "strokes": 10,
        "level": "N2",
        "examples": [
            {
                "example_text": "警告を受けました。",
                "furigana": "けいこくをうけました。",
                "meaning_vi": "Tôi đã nhận được cảnh báo.",
                "meaning_en": "I received a warning."
            },
            {
                "example_text": "警察が来ました。",
                "furigana": "けいさつがきました。",
                "meaning_vi": "Cảnh sát đã đến.",
                "meaning_en": "The police arrived."
            }
        ]
    },
    {
        "kanji": "官",
        "kun_reading": ["かん"],
        "on_reading": ["かん"],
        "han_viet": "QUAN",
        "meaning_vi": "quan chức",
        "meaning_en": "government official",
        "radicals": "宀",
        "strokes": 8,
        "level": "N2",
        "examples": [
            {
                "example_text": "政府の官僚が集まりました。",
                "furigana": "せいふのかんりょうがあつまりました。",
                "meaning_vi": "Các quan chức chính phủ đã tụ tập.",
                "meaning_en": "The government officials gathered."
            },
            {
                "example_text": "彼は警察官です。",
                "furigana": "かれはけいさつかんです。",
                "meaning_vi": "Anh ấy là một cảnh sát.",
                "meaning_en": "He is a police officer."
            }
        ]
    },
    {
        "kanji": "建",
        "kun_reading": ["たてる", "たつ"],
        "on_reading": ["けん", "け"],
        "han_viet": "KIẾN",
        "meaning_vi": "xây dựng, tạo ra",
        "meaning_en": "build, construct",
        "radicals": "土",
        "strokes": 7,
        "level": "N3",
        "examples": [
            {
                "example_text": "新しいビルを建てました。",
                "furigana": "あたらしいびるをたてました。",
                "meaning_vi": "Tôi đã xây dựng một tòa nhà mới.",
                "meaning_en": "I built a new building."
            },
            {
                "example_text": "彼は家を建てるのが好きです。",
                "furigana": "かれはいえをたてるのがすきです。",
                "meaning_vi": "Anh ấy thích xây nhà.",
                "meaning_en": "He likes to build houses."
            }
        ]
    },
    {
        "kanji": "築",
        "kun_reading": ["きずく"],
        "on_reading": ["ちく"],
        "han_viet": "TRÚC",
        "meaning_vi": "xây dựng, xây lên",
        "meaning_en": "construct, build",
        "radicals": "木",
        "strokes": 12,
        "level": "N2",
        "examples": [
            {
                "example_text": "古い家を築き直しました。",
                "furigana": "ふるいいえをきずきなおしました。",
                "meaning_vi": "Tôi đã xây lại một ngôi nhà cũ.",
                "meaning_en": "I rebuilt an old house."
            },
            {
                "example_text": "彼は自分の家を築きました。",
                "furigana": "かれはじぶんのいえをきずきました。",
                "meaning_vi": "Anh ấy đã xây dựng ngôi nhà của mình.",
                "meaning_en": "He built his own house."
            }
        ]
    },
    {
        "kanji": "家",
        "kun_reading": ["いえ", "や", "うち"],
        "on_reading": ["か", "け"],
        "han_viet": "GIA",
        "meaning_vi": "nhà, gia đình",
        "meaning_en": "house, family",
        "radicals": "宀",
        "strokes": 6,
        "level": "N4",
        "examples": [
            {
                "example_text": "私の家は大きいです。",
                "furigana": "わたしのいえはおおきいです。",
                "meaning_vi": "Nhà tôi lớn.",
                "meaning_en": "My house is big."
            },
            {
                "example_text": "あなたの家族はどこですか？",
                "furigana": "あなたのかぞくはどこですか？",
                "meaning_vi": "Gia đình bạn ở đâu?",
                "meaning_en": "Where is your family?"
            }
        ]
    },
    {
        "kanji": "科",
        "kun_reading": ["か"],
        "on_reading": ["か"],
        "han_viet": "KHOA",
        "meaning_vi": "khoa, ngành",
        "meaning_en": "department, field of study",
        "radicals": "禾",
        "strokes": 7,
        "level": "N3",
        "examples": [
            {
                "example_text": "彼は医学科の学生です。",
                "furigana": "かれはいがくかのがくせいです。",
                "meaning_vi": "Anh ấy là sinh viên khoa y.",
                "meaning_en": "He is a student in the medical department."
            },
            {
                "example_text": "私の兄は工学科を専攻しています。",
                "furigana": "わたしのあにはこうがくかをせんこうしています。",
                "meaning_vi": "Anh trai tôi đang học ngành kỹ thuật.",
                "meaning_en": "My brother is majoring in engineering."
            }
        ]
    },
    {
        "kanji": "者",
        "kun_reading": ["もの"],
        "on_reading": ["しゃ"],
        "han_viet": "GIẢ",
        "meaning_vi": "người, kẻ",
        "meaning_en": "person, one who",
        "radicals": "亻",
        "strokes": 7,
        "level": "N3",
        "examples": [
            {
                "example_text": "その者は立派な人物です。",
                "furigana": "そのものはりっぱなじんぶつです。",
                "meaning_vi": "Người đó là một nhân vật xuất sắc.",
                "meaning_en": "That person is an outstanding individual."
            },
            {
                "example_text": "私はその者を見たことがあります。",
                "furigana": "わたしはそのものをみたことがあります。",
                "meaning_vi": "Tôi đã từng gặp người đó.",
                "meaning_en": "I have seen that person."
            }
        ]
    },
    {
        "kanji": "漫",
        "kun_reading": ["まん"],
        "on_reading": ["まん"],
        "han_viet": "MẠN",
        "meaning_vi": "mãn, thả lỏng",
        "meaning_en": "free, uninhibited",
        "radicals": "水",
        "strokes": 12,
        "level": "N2",
        "examples": [
            {
                "example_text": "漫才を見て笑いました。",
                "furigana": "まんざいをみてわらいました。",
                "meaning_vi": "Tôi đã xem hài kịch và cười.",
                "meaning_en": "I watched a comedy show and laughed."
            },
            {
                "example_text": "彼は漫遊するのが好きです。",
                "furigana": "かれはまんゆうするのがすきです。",
                "meaning_vi": "Anh ấy thích đi du lịch tự do.",
                "meaning_en": "He likes to travel freely."
            }
        ]
    },
    {
        "kanji": "画",
        "kun_reading": ["えがく", "かく"],
        "on_reading": ["が", "かく"],
        "han_viet": "HỌA",
        "meaning_vi": "vẽ, hình ảnh",
        "meaning_en": "draw, picture",
        "radicals": "田",
        "strokes": 8,
        "level": "N4",
        "examples": [
            {
                "example_text": "私は絵を描くのが好きです。",
                "furigana": "わたしはえをかくのがすきです。",
                "meaning_vi": "Tôi thích vẽ tranh.",
                "meaning_en": "I like to draw pictures."
            },
            {
                "example_text": "その映画は素晴らしい映像を持っています。",
                "furigana": "そのえいがはすばらしいえいぞうをもっています。",
                "meaning_vi": "Bộ phim đó có những hình ảnh tuyệt vời.",
                "meaning_en": "The movie has wonderful visuals."
            }
        ]
    },
    {
        "kanji": "漫",
        "kun_reading": ["まん"],
        "on_reading": ["まん"],
        "han_viet": "MẠN",
        "meaning_vi": "mãn, thả lỏng, không bị hạn chế",
        "meaning_en": "free, uninhibited",
        "radicals": "水",
        "strokes": 12,
        "level": "N2",
        "examples": [
            {
                "example_text": "彼は漫遊するのが好きです。",
                "furigana": "かれはまんゆうするのがすきです。",
                "meaning_vi": "Anh ấy thích đi du lịch tự do.",
                "meaning_en": "He likes to travel freely."
            },
            {
                "example_text": "漫才を見て笑いました。",
                "furigana": "まんざいをみてわらいました。",
                "meaning_vi": "Tôi đã xem hài kịch và cười.",
                "meaning_en": "I watched a comedy show and laughed."
            }
        ]
    },
    {
        "kanji": "画",
        "kun_reading": ["えがく", "かく"],
        "on_reading": ["が", "かく"],
        "han_viet": "HỌA",
        "meaning_vi": "vẽ, hình ảnh",
        "meaning_en": "draw, picture",
        "radicals": "田",
        "strokes": 8,
        "level": "N4",
        "examples": [
            {
                "example_text": "私は絵を描くのが好きです。",
                "furigana": "わたしはえをかくのがすきです。",
                "meaning_vi": "Tôi thích vẽ tranh.",
                "meaning_en": "I like to draw pictures."
            },
            {
                "example_text": "その映画は素晴らしい映像を持っています。",
                "furigana": "そのえいがはすばらしいえいぞうをもっています。",
                "meaning_vi": "Bộ phim đó có những hình ảnh tuyệt vời.",
                "meaning_en": "The movie has wonderful visuals."
            }
        ]
    },
    {
        "kanji": "技",
        "kun_reading": ["わざ"],
        "on_reading": ["ぎ"],
        "han_viet": "KỸ",
        "meaning_vi": "kỹ thuật, kỹ năng",
        "meaning_en": "skill, technique",
        "radicals": "手",
        "strokes": 7,
        "level": "N3",
        "examples": [
            {
                "example_text": "彼の技術は素晴らしいです。",
                "furigana": "かれのぎじゅつはすばらしいです。",
                "meaning_vi": "Kỹ thuật của anh ấy rất tuyệt vời.",
                "meaning_en": "His skill is amazing."
            },
            {
                "example_text": "これは高度な技を必要とします。",
                "furigana": "これはこうどなわざをひつようとします。",
                "meaning_vi": "Điều này đòi hỏi kỹ năng cao.",
                "meaning_en": "This requires advanced skills."
            }
        ]
    },
    {
        "kanji": "術",
        "kun_reading": ["すべ", "じゅつ"],
        "on_reading": ["じゅつ"],
        "han_viet": "THUẬT",
        "meaning_vi": "phương pháp, nghệ thuật",
        "meaning_en": "art, technique",
        "radicals": "十",
        "strokes": 6,
        "level": "N2",
        "examples": [
            {
                "example_text": "これは魔法の術です。",
                "furigana": "これはまほうのじゅつです。",
                "meaning_vi": "Đây là một phép thuật.",
                "meaning_en": "This is a magic spell."
            },
            {
                "example_text": "彼は医術に優れています。",
                "furigana": "かれはいじゅつにすぐれています。",
                "meaning_vi": "Anh ấy rất giỏi trong y học.",
                "meaning_en": "He excels in medicine."
            }
        ]
    },
    {
        "kanji": "埋",
        "kun_reading": ["うめる", "うまる"],
        "on_reading": ["まい"],
        "han_viet": "MAI",
        "meaning_vi": "chôn, vùi",
        "meaning_en": "bury",
        "radicals": "土",
        "strokes": 7,
        "level": "N3",
        "examples": [
            {
                "example_text": "彼は秘密を埋めました。",
                "furigana": "かれはひみつをうめました。",
                "meaning_vi": "Anh ấy đã chôn giấu bí mật.",
                "meaning_en": "He buried the secret."
            },
            {
                "example_text": "遺跡が土の中に埋まっています。",
                "furigana": "いせきがつちのなかにうまっています。",
                "meaning_vi": "Di tích bị chôn vùi dưới đất.",
                "meaning_en": "The ruins are buried in the ground."
            }
        ]
    },
    {
        "kanji": "騒",
        "kun_reading": ["さわぐ", "うるさい"],
        "on_reading": ["そう"],
        "han_viet": "TAO",
        "meaning_vi": "ồn ào, làm ồn",
        "meaning_en": "make noise, noisy",
        "radicals": "馬",
        "strokes": 14,
        "level": "N2",
        "examples": [
            {
                "example_text": "彼らは騒ぎながら遊んでいます。",
                "furigana": "かれらはさわぎながらあそんでいます。",
                "meaning_vi": "Họ đang chơi và làm ồn.",
                "meaning_en": "They are playing and making noise."
            },
            {
                "example_text": "あの店はいつも騒がしいです。",
                "furigana": "あのみせはいつもさわがしいです。",
                "meaning_vi": "Cửa hàng đó lúc nào cũng ồn ào.",
                "meaning_en": "That store is always noisy."
            }
        ]
    },
    {
        "kanji": "音",
        "kun_reading": ["おと", "ね"],
        "on_reading": ["おん"],
        "han_viet": "ÂM",
        "meaning_vi": "âm thanh",
        "meaning_en": "sound",
        "radicals": "音",
        "strokes": 9,
        "level": "N4",
        "examples": [
            {
                "example_text": "音楽を聴くのが好きです。",
                "furigana": "おんがくをきくのがすきです。",
                "meaning_vi": "Tôi thích nghe nhạc.",
                "meaning_en": "I like listening to music."
            },
            {
                "example_text": "その音はとても大きいです。",
                "furigana": "そのおとはとてもおおきいです。",
                "meaning_vi": "Âm thanh đó rất lớn.",
                "meaning_en": "The sound is very loud."
            }
        ]
    },
    {
        "kanji": "利",
        "kun_reading": ["きく", "り"],
        "on_reading": ["り"],
        "han_viet": "LỢI",
        "meaning_vi": "lợi ích, có lợi",
        "meaning_en": "profit, advantageous",
        "radicals": "刀",
        "strokes": 7,
        "level": "N3",
        "examples": [
            {
                "example_text": "これはあなたにとって利点です。",
                "furigana": "これはあなたにとってりてんです。",
                "meaning_vi": "Điều này có lợi cho bạn.",
                "meaning_en": "This is advantageous for you."
            },
            {
                "example_text": "この決定は会社にとって利益をもたらします。",
                "furigana": "このけっていはかいしゃにとってりえきをもたらします。",
                "meaning_vi": "Quyết định này sẽ mang lại lợi nhuận cho công ty.",
                "meaning_en": "This decision will bring profit to the company."
            }
        ]
    },
    {
        "kanji": "用",
        "kun_reading": ["もちいる", "よう"],
        "on_reading": ["よう"],
        "han_viet": "DỤNG",
        "meaning_vi": "sử dụng, công dụng",
        "meaning_en": "use, utility",
        "radicals": "用",
        "strokes": 6,
        "level": "N4",
        "examples": [
            {
                "example_text": "この道具は料理に使います。",
                "furigana": "このどうぐはりょうりに使います。",
                "meaning_vi": "Công cụ này được sử dụng trong nấu ăn.",
                "meaning_en": "This tool is used for cooking."
            },
            {
                "example_text": "これをどのように使いますか？",
                "furigana": "これをどのようにつかいますか？",
                "meaning_vi": "Bạn sử dụng cái này như thế nào?",
                "meaning_en": "How do you use this?"
            }
        ]
    },
    {
        "kanji": "豪",
        "kun_reading": ["ごう"],
        "on_reading": ["ごう"],
        "han_viet": "HÀO",
        "meaning_vi": "hào nhoáng, hoành tráng",
        "meaning_en": "luxurious, magnificent",
        "radicals": "豸",
        "strokes": 12,
        "level": "N2",
        "examples": [
            {
                "example_text": "豪華なホテルに泊まりました。",
                "furigana": "ごうかなほてるにとまりました。",
                "meaning_vi": "Tôi đã ở trong một khách sạn sang trọng.",
                "meaning_en": "I stayed in a luxurious hotel."
            },
            {
                "example_text": "彼は豪華な車を持っています。",
                "furigana": "かれはごうかなくるまをもっています。",
                "meaning_vi": "Anh ấy có một chiếc xe sang trọng.",
                "meaning_en": "He owns a luxurious car."
            }
        ]
    },
    {
        "kanji": "華",
        "kun_reading": ["はな", "か"],
        "on_reading": ["か"],
        "han_viet": "HOA",
        "meaning_vi": "hoa, lộng lẫy",
        "meaning_en": "flower, magnificent",
        "radicals": "艸",
        "strokes": 10,
        "level": "N2",
        "examples": [
            {
                "example_text": "彼女は華やかなドレスを着ています。",
                "furigana": "かのじょははなやかなどれすをきています。",
                "meaning_vi": "Cô ấy mặc một chiếc đầm lộng lẫy.",
                "meaning_en": "She is wearing a magnificent dress."
            },
            {
                "example_text": "華道を習っています。",
                "furigana": "かどうをならっています。",
                "meaning_vi": "Tôi đang học nghệ thuật cắm hoa.",
                "meaning_en": "I am learning the art of flower arrangement."
            }
        ]
    },
    {
        "kanji": "刻",
        "kun_reading": ["きざむ", "とき"],
        "on_reading": ["こく"],
        "han_viet": "KHẮC",
        "meaning_vi": "khắc, thời gian",
        "meaning_en": "carve, time",
        "radicals": "刀",
        "strokes": 8,
        "level": "N3",
        "examples": [
            {
                "example_text": "彼は石に刻むことが得意です。",
                "furigana": "かれはいしにきざむことがとくいです。",
                "meaning_vi": "Anh ấy giỏi việc khắc vào đá.",
                "meaning_en": "He is good at carving into stone."
            },
            {
                "example_text": "時間が刻々と過ぎています。",
                "furigana": "じかんがこっこくすぎています。",
                "meaning_vi": "Thời gian đang trôi qua từng phút một.",
                "meaning_en": "Time is passing by moment by moment."
            }
        ]
    },
    {
        "kanji": "眠",
        "kun_reading": ["ねむる", "ねむい"],
        "on_reading": ["みん"],
        "han_viet": "MIÊN",
        "meaning_vi": "ngủ, buồn ngủ",
        "meaning_en": "sleep, sleepy",
        "radicals": "目",
        "strokes": 8,
        "level": "N3",
        "examples": [
            {
                "example_text": "私はよく眠れません。",
                "furigana": "わたしはよくねむれません。",
                "meaning_vi": "Tôi không ngủ ngon.",
                "meaning_en": "I can't sleep well."
            },
            {
                "example_text": "彼は眠そうです。",
                "furigana": "かれはねむそうです。",
                "meaning_vi": "Anh ấy trông có vẻ buồn ngủ.",
                "meaning_en": "He looks sleepy."
            }
        ]
    },
    {
        "kanji": "懸",
        "kun_reading": ["かける", "けわしい"],
        "on_reading": ["けん"],
        "han_viet": "HUYỀN",
        "meaning_vi": "treo, đình trệ",
        "meaning_en": "hang, suspend",
        "radicals": "心",
        "strokes": 10,
        "level": "N2",
        "examples": [
            {
                "example_text": "絵を壁に懸けました。",
                "furigana": "えをかべにかけました。",
                "meaning_vi": "Tôi đã treo bức tranh lên tường.",
                "meaning_en": "I hung the picture on the wall."
            },
            {
                "example_text": "問題はまだ解決を懸けています。",
                "furigana": "もんだいはまだかいけつをけけています。",
                "meaning_vi": "Vấn đề vẫn đang treo lơ lửng.",
                "meaning_en": "The issue is still pending resolution."
            }
        ]
    },
    {
        "kanji": "命",
        "kun_reading": ["いのち", "ち"],
        "on_reading": ["めい", "みょう"],
        "han_viet": "MỆNH",
        "meaning_vi": "mệnh, cuộc sống",
        "meaning_en": "life, destiny",
        "radicals": "口",
        "strokes": 5,
        "level": "N3",
        "examples": [
            {
                "example_text": "命を大切にしてください。",
                "furigana": "いのちをたいせつにしてください。",
                "meaning_vi": "Hãy trân trọng cuộc sống.",
                "meaning_en": "Please value life."
            },
            {
                "example_text": "彼は命がけで戦いました。",
                "furigana": "かれはいのちがけでたたかいました。",
                "meaning_vi": "Anh ấy chiến đấu với tất cả mạng sống của mình.",
                "meaning_en": "He fought with his life on the line."
            }
        ]
    },
    {
        "kanji": "匹",
        "kun_reading": ["ひき", "ぴき", "びき"],
        "on_reading": ["ひつ"],
        "han_viet": "THẤT",
        "meaning_vi": "con (đơn vị đếm cho động vật nhỏ)",
        "meaning_en": "counter for small animals",
        "radicals": "毛",
        "strokes": 5,
        "level": "N4",
        "examples": [
            {
                "example_text": "犬を二匹飼っています。",
                "furigana": "いぬをにひきかっています。",
                "meaning_vi": "Tôi nuôi hai con chó.",
                "meaning_en": "I have two dogs."
            },
            {
                "example_text": "三匹の猫が庭で遊んでいます。",
                "furigana": "さんびきのねこがにわであそんでいます。",
                "meaning_vi": "Ba con mèo đang chơi trong vườn.",
                "meaning_en": "Three cats are playing in the yard."
            }
        ]
    },
    // bai 38
    {
        "kanji": "育",
        "kun_reading": ["そだ.てる", "そだ.つ"],
        "on_reading": ["いく"],
        "han_viet": "DỤC",
        "meaning_vi": "nuôi dưỡng, giáo dục",
        "meaning_en": "to raise, to nurture, education",
        "radicals": "亠, 肉",
        "strokes": 12,
        "level": "N4",
        "examples": [
            {
                "example_text": "子供を育てるのは大変です。",
                "furigana": "こどもをそだてるのはたいへんです。",
                "meaning_vi": "Việc nuôi dạy trẻ con thật khó khăn.",
                "meaning_en": "Raising children is difficult."
            },
            {
                "example_text": "彼は優れた教師として生徒を育てました。",
                "furigana": "かれはすぐれたきょうしとしてせいとをそだてました。",
                "meaning_vi": "Anh ấy đã nuôi dưỡng học sinh như một giáo viên xuất sắc.",
                "meaning_en": "He nurtured the students as an excellent teacher."
            }
        ]
    },
    {
        "kanji": "亡",
        "kun_reading": ["な.い", "ほろ.びる", "ほろ.ぶ"],
        "on_reading": ["ぼう", "もう"],
        "han_viet": "VONG",
        "meaning_vi": "chết, mất",
        "meaning_en": "death, deceased, lost",
        "radicals": "亠, 小",
        "strokes": 6,
        "level": "N4",
        "examples": [
            {
                "example_text": "彼は昨年亡くなりました。",
                "furigana": "かれはさくねんなくなりました。",
                "meaning_vi": "Anh ấy đã mất vào năm ngoái.",
                "meaning_en": "He passed away last year."
            },
            {
                "example_text": "この家は火事で亡くなった人々のものです。",
                "furigana": "このいえはかじでなくなったひとびとのものです。",
                "meaning_vi": "Ngôi nhà này thuộc về những người đã mất trong đám cháy.",
                "meaning_en": "This house belongs to those who died in the fire."
            }
        ]
    },
    {
        "kanji": "院",
        "kun_reading": ["いん"],
        "on_reading": ["いん"],
        "han_viet": "VIỆN",
        "meaning_vi": "viện, học viện",
        "meaning_en": "institution, hospital",
        "radicals": "阝, 小",
        "strokes": 7,
        "level": "N3",
        "examples": [
            {
                "example_text": "大学院に進学する予定です。",
                "furigana": "だいがくいんにしんがくするよていです。",
                "meaning_vi": "Tôi dự định học lên cao học.",
                "meaning_en": "I plan to continue to graduate school."
            },
            {
                "example_text": "病院で働いています。",
                "furigana": "びょういんではたらいています。",
                "meaning_vi": "Tôi làm việc tại bệnh viện.",
                "meaning_en": "I work at a hospital."
            }
        ]
    },
    {
        "kanji": "退",
        "kun_reading": ["しりぞ.く", "ひ.く"],
        "on_reading": ["たい"],
        "han_viet": "THOÁI",
        "meaning_vi": "rút lui, nghỉ hưu",
        "meaning_en": "to retreat, to resign, to withdraw",
        "radicals": "亻, 牛",
        "strokes": 7,
        "level": "N3",
        "examples": [
            {
                "example_text": "彼は会社を退職しました。",
                "furigana": "かれはかいしゃをたいしょくしました。",
                "meaning_vi": "Anh ấy đã nghỉ hưu khỏi công ty.",
                "meaning_en": "He resigned from the company."
            },
            {
                "example_text": "この戦争で退却することはありません。",
                "furigana": "このせんそうでたいきゃくすることはありません。",
                "meaning_vi": "Chúng tôi sẽ không rút lui trong cuộc chiến này.",
                "meaning_en": "We will not retreat in this war."
            }
        ]
    },
    {
        "kanji": "切",
        "kun_reading": ["き.る", "き.れる", "き.り", "せつ"],
        "on_reading": ["せつ", "さい"],
        "han_viet": "THIẾT",
        "meaning_vi": "cắt, chặt",
        "meaning_en": "to cut, to sever",
        "radicals": "刂, 一",
        "strokes": 7,
        "level": "N4",
        "examples": [
            {
                "example_text": "ナイフで紙を切ります。",
                "furigana": "ないふでかみをきります。",
                "meaning_vi": "Tôi cắt giấy bằng dao.",
                "meaning_en": "I cut the paper with a knife."
            },
            {
                "example_text": "明日までに切らなければならない。",
                "furigana": "あしたまでにきらなければならない。",
                "meaning_vi": "Tôi phải cắt nó trước ngày mai.",
                "meaning_en": "I must cut it by tomorrow."
            }
        ]
    },
    {
        "kanji": "掛",
        "kun_reading": ["か.ける", "か.かる", "か.け", "けん"],
        "on_reading": ["かけ"],
        "han_viet": "QUẢI",
        "meaning_vi": "treo, đeo, tốn (thời gian, tiền bạc)",
        "meaning_en": "to hang, to cost",
        "radicals": "八, 丸",
        "strokes": 7,
        "level": "N4",
        "examples": [
            {
                "example_text": "壁に絵を掛けました。",
                "furigana": "かべにえをかけました。",
                "meaning_vi": "Tôi đã treo tranh lên tường.",
                "meaning_en": "I hung a picture on the wall."
            },
            {
                "example_text": "このプロジェクトには多くの時間が掛かります。",
                "furigana": "このぷろじぇくとにはおおくのじかんがかかります。",
                "meaning_vi": "Dự án này sẽ tốn nhiều thời gian.",
                "meaning_en": "This project will take a lot of time."
            }
        ]
    },
    {
        "kanji": "小",
        "kun_reading": ["ちい.さい", "こ", "お", "さ"],
        "on_reading": ["しょう"],
        "han_viet": "TIỂU",
        "meaning_vi": "nhỏ, ít",
        "meaning_en": "small, little",
        "radicals": "小",
        "strokes": 3,
        "level": "N5",
        "examples": [
            {
                "example_text": "小さな家に住んでいます。",
                "furigana": "ちいさないえにすんでいます。",
                "meaning_vi": "Tôi sống trong một ngôi nhà nhỏ.",
                "meaning_en": "I live in a small house."
            },
            {
                "example_text": "小さな問題を解決しました。",
                "furigana": "ちいさなもんだいをかいけつしました。",
                "meaning_vi": "Tôi đã giải quyết một vấn đề nhỏ.",
                "meaning_en": "I solved a small problem."
            }
        ]
    },
    {
        "kanji": "前",
        "kun_reading": ["まえ", "さき", "まえ"],
        "on_reading": ["ぜん"],
        "han_viet": "TIỀN",
        "meaning_vi": "trước, phía trước",
        "meaning_en": "before, in front of",
        "radicals": "刂, 小",
        "strokes": 7,
        "level": "N5",
        "examples": [
            {
                "example_text": "前に進んでください。",
                "furigana": "まえにすすんでください。",
                "meaning_vi": "Xin vui lòng tiến lên phía trước.",
                "meaning_en": "Please move forward."
            },
            {
                "example_text": "彼は前に行った。",
                "furigana": "かれはまえにいった。",
                "meaning_vi": "Anh ấy đã đi phía trước.",
                "meaning_en": "He went ahead."
            }
        ]
    },
    {
        "kanji": "類",
        "kun_reading": ["たぐ.い"],
        "on_reading": ["るい"],
        "han_viet": "LOẠI",
        "meaning_vi": "loại, chủng loại",
        "meaning_en": "type, kind",
        "radicals": "米, 彐",
        "strokes": 13,
        "level": "N3",
        "examples": [
            {
                "example_text": "この類の本は面白いです。",
                "furigana": "このるいのほんはおもしろいです。",
                "meaning_vi": "Loại sách này rất thú vị.",
                "meaning_en": "Books of this kind are interesting."
            },
            {
                "example_text": "新しい技術の類を研究しています。",
                "furigana": "あたらしいぎじゅつのるいをけんきゅうしています。",
                "meaning_vi": "Chúng tôi đang nghiên cứu loại công nghệ mới.",
                "meaning_en": "We are researching a new type of technology."
            }
        ]
    },
    {
        "kanji": "源",
        "kun_reading": ["みなもと"],
        "on_reading": ["げん", "がん"],
        "han_viet": "NGUYÊN",
        "meaning_vi": "nguồn gốc, nguồn",
        "meaning_en": "source, origin",
        "radicals": "水, 小",
        "strokes": 10,
        "level": "N3",
        "examples": [
            {
                "example_text": "川の源を探しに行きました。",
                "furigana": "かわのみなもとをさがしにいきました。",
                "meaning_vi": "Tôi đã đi tìm nguồn của con sông.",
                "meaning_en": "I went to find the source of the river."
            },
            {
                "example_text": "この情報は信頼できる源から来ています。",
                "furigana": "このじょうほうはしんらいできるげんからきています。",
                "meaning_vi": "Thông tin này đến từ một nguồn đáng tin cậy.",
                "meaning_en": "This information comes from a reliable source."
            }
        ]
    },
    {
        "kanji": "回",
        "kun_reading": ["まわ.る", "まわ.す", "かえ.る", "かえ.す"],
        "on_reading": ["かい", "え"],
        "han_viet": "HỒI",
        "meaning_vi": "vòng, lượt, lần",
        "meaning_en": "time, turn, counter for occurrences",
        "radicals": "回",
        "strokes": 6,
        "level": "N5",
        "examples": [
            {
                "example_text": "もう一回やってみてください。",
                "furigana": "もういっかいやってみてください。",
                "meaning_vi": "Hãy thử làm lại lần nữa.",
                "meaning_en": "Please try it one more time."
            },
            {
                "example_text": "彼は回覧板を回しました。",
                "furigana": "かれはかいらんばんをまわしました。",
                "meaning_vi": "Anh ấy đã chuyển bảng thông báo vòng.",
                "meaning_en": "He passed the notice around."
            }
        ]
    },
    {
        "kanji": "覧",
        "kun_reading": ["み.る", "しら.べる"],
        "on_reading": ["らん"],
        "han_viet": "LÃM",
        "meaning_vi": "xem, duyệt",
        "meaning_en": "look, inspect",
        "radicals": "見, 東",
        "strokes": 13,
        "level": "N2",
        "examples": [
            {
                "example_text": "展覧会を見に行きました。",
                "furigana": "てんらんかいをみにいきました。",
                "meaning_vi": "Tôi đã đi xem triển lãm.",
                "meaning_en": "I went to see the exhibition."
            },
            {
                "example_text": "私はそのレポートを覧する必要があります。",
                "furigana": "わたしはそのれぽーとをらんするひつようがあります。",
                "meaning_vi": "Tôi cần phải duyệt báo cáo đó.",
                "meaning_en": "I need to review that report."
            }
        ]
    },
    {
        "kanji": "研",
        "kun_reading": ["と.ぐ"],
        "on_reading": ["けん"],
        "han_viet": "NGHIÊN",
        "meaning_vi": "nghiên cứu, mài giũa",
        "meaning_en": "research, polish, sharpen",
        "radicals": "石",
        "strokes": 7,
        "level": "N3",
        "examples": [
            {
                "example_text": "毎日日本語を研修しています。",
                "furigana": "まいにちにほんごをけんしゅうしています。",
                "meaning_vi": "Tôi học tiếng Nhật mỗi ngày.",
                "meaning_en": "I am studying Japanese every day."
            },
            {
                "example_text": "この問題を解決するために研究が必要です。",
                "furigana": "このもんだいをかいけつするためにけんきゅうがひつようです。",
                "meaning_vi": "Cần có nghiên cứu để giải quyết vấn đề này.",
                "meaning_en": "Research is necessary to solve this problem."
            }
        ]
    },
    {
        "kanji": "究",
        "kun_reading": ["きわ.める", "きわ.まる"],
        "on_reading": ["きゅう"],
        "han_viet": "CỨU",
        "meaning_vi": "nghiên cứu, tìm hiểu",
        "meaning_en": "study, research, investigate",
        "radicals": "小, 穴",
        "strokes": 10,
        "level": "N2",
        "examples": [
            {
                "example_text": "彼は物理学を研究しています。",
                "furigana": "かれはぶつりがくをけんきゅうしています。",
                "meaning_vi": "Anh ấy đang nghiên cứu vật lý.",
                "meaning_en": "He is studying physics."
            },
            {
                "example_text": "その問題について徹底的に研究しました。",
                "furigana": "そのもんだいについててっていてきにけんきゅうしました。",
                "meaning_vi": "Tôi đã nghiên cứu kỹ lưỡng về vấn đề đó.",
                "meaning_en": "I studied the problem thoroughly."
            }
        ]
    },
    {
        "kanji": "室",
        "kun_reading": ["むろ"],
        "on_reading": ["しつ"],
        "han_viet": "THẤT",
        "meaning_vi": "phòng, căn phòng",
        "meaning_en": "room, chamber",
        "radicals": "宀, 小",
        "strokes": 8,
        "level": "N3",
        "examples": [
            {
                "example_text": "会議室に行きましょう。",
                "furigana": "かいぎしつにいきましょう。",
                "meaning_vi": "Hãy đi đến phòng họp.",
                "meaning_en": "Let's go to the meeting room."
            },
            {
                "example_text": "彼は研究室で働いています。",
                "furigana": "かれはけんきゅうしつではたらいています。",
                "meaning_vi": "Anh ấy làm việc tại phòng nghiên cứu.",
                "meaning_en": "He works in the research room."
            }
        ]
    },
    {
        "kanji": "整",
        "kun_reading": ["ととの.う", "ととの.える"],
        "on_reading": ["せい"],
        "han_viet": "CHỈNH",
        "meaning_vi": "chỉnh sửa, sắp xếp, điều chỉnh",
        "meaning_en": "to arrange, to adjust, to organize",
        "radicals": "正, 攴",
        "strokes": 12,
        "level": "N3",
        "examples": [
            {
                "example_text": "部屋を整えました。",
                "furigana": "へやをととのえました。",
                "meaning_vi": "Tôi đã sắp xếp phòng.",
                "meaning_en": "I arranged the room."
            },
            {
                "example_text": "問題を整理するために時間が必要です。",
                "furigana": "もんだいをせいりするためにじかんがひつようです。",
                "meaning_vi": "Cần thời gian để sắp xếp vấn đề.",
                "meaning_en": "Time is needed to organize the problem."
            }
        ]
    },
    {
        "kanji": "理",
        "kun_reading": ["ことわり", "おさむ"],
        "on_reading": ["り"],
        "han_viet": "LÝ",
        "meaning_vi": "lý do, lý thuyết",
        "meaning_en": "reason, logic, principle",
        "radicals": "玉, 王",
        "strokes": 8,
        "level": "N3",
        "examples": [
            {
                "example_text": "彼の言うことには理がある。",
                "furigana": "かれのいうことにはりがある。",
                "meaning_vi": "Điều anh ấy nói có lý.",
                "meaning_en": "What he says makes sense."
            },
            {
                "example_text": "理論を理解するのは重要です。",
                "furigana": "りろんをりかいするのはじゅうようです。",
                "meaning_vi": "Hiểu lý thuyết là rất quan trọng.",
                "meaning_en": "Understanding theory is important."
            }
        ]
    },
    {
        "kanji": "押",
        "kun_reading": ["お.す", "お.し"],
        "on_reading": ["おう"],
        "han_viet": "ÁP",
        "meaning_vi": "áp, ấn",
        "meaning_en": "to push, to press",
        "radicals": "手, 小",
        "strokes": 6,
        "level": "N4",
        "examples": [
            {
                "example_text": "ボタンを押してください。",
                "furigana": "ぼたんをおしてください。",
                "meaning_vi": "Hãy nhấn nút.",
                "meaning_en": "Please press the button."
            },
            {
                "example_text": "私は彼を押して、前に進ませました。",
                "furigana": "わたしはかれをおして、まえにすすませました。",
                "meaning_vi": "Tôi đã đẩy anh ấy và khiến anh ấy tiến lên phía trước.",
                "meaning_en": "I pushed him and made him move forward."
            }
        ]
    },
    {
        "kanji": "双",
        "kun_reading": ["ふた", "たぐい"],
        "on_reading": ["そう"],
        "han_viet": "SONG",
        "meaning_vi": "song, đôi",
        "meaning_en": "pair, twins",
        "radicals": "二, 毛",
        "strokes": 9,
        "level": "N3",
        "examples": [
            {
                "example_text": "双子の兄弟がいます。",
                "furigana": "ふたごのきょうだいがいます。",
                "meaning_vi": "Tôi có anh em sinh đôi.",
                "meaning_en": "I have twin brothers."
            },
            {
                "example_text": "彼らは双方向でコミュニケーションをとっています。",
                "furigana": "かれらはそうほうこうでこみゅにけーしょんをとっています。",
                "meaning_vi": "Họ đang giao tiếp theo cả hai hướng.",
                "meaning_en": "They are communicating in both directions."
            }
        ]
    },
    {
        "kanji": "姉",
        "kun_reading": ["あね", "ねえ"],
        "on_reading": ["し"],
        "han_viet": "TỈ",
        "meaning_vi": "chị gái",
        "meaning_en": "older sister",
        "radicals": "女",
        "strokes": 6,
        "level": "N5",
        "examples": [
            {
                "example_text": "私の姉は学生です。",
                "furigana": "わたしのあねはがくせいです。",
                "meaning_vi": "Chị gái tôi là sinh viên.",
                "meaning_en": "My older sister is a student."
            },
            {
                "example_text": "姉は料理が得意です。",
                "furigana": "あねはりょうりがとくいです。",
                "meaning_vi": "Chị gái tôi rất giỏi nấu ăn.",
                "meaning_en": "My older sister is good at cooking."
            }
        ]
    },
    {
        "kanji": "妹",
        "kun_reading": ["いもうと"],
        "on_reading": ["まい"],
        "han_viet": "MUỘI",
        "meaning_vi": "em gái",
        "meaning_en": "younger sister",
        "radicals": "女",
        "strokes": 7,
        "level": "N5",
        "examples": [
            {
                "example_text": "妹は高校生です。",
                "furigana": "いもうとはこうこうせいです。",
                "meaning_vi": "Em gái tôi là học sinh cấp ba.",
                "meaning_en": "My younger sister is a high school student."
            },
            {
                "example_text": "妹と一緒に買い物に行きました。",
                "furigana": "いもうとといっしょにかいものにいきました。",
                "meaning_vi": "Tôi đã đi mua sắm với em gái.",
                "meaning_en": "I went shopping with my younger sister."
            }
        ]
    },
    {
        "kanji": "似",
        "kun_reading": ["に.る", "に.せる"],
        "on_reading": ["じ"],
        "han_viet": "TỰ",
        "meaning_vi": "giống, tương tự",
        "meaning_en": "to resemble, similar",
        "radicals": "人",
        "strokes": 6,
        "level": "N3",
        "examples": [
            {
                "example_text": "彼は父親に似ています。",
                "furigana": "かれはちちおやににています。",
                "meaning_vi": "Anh ấy giống bố anh ấy.",
                "meaning_en": "He resembles his father."
            },
            {
                "example_text": "彼女は私に似ているとよく言われます。",
                "furigana": "かのじょはわたしににているとよくいわれます。",
                "meaning_vi": "Mọi người thường nói cô ấy giống tôi.",
                "meaning_en": "People often say she resembles me."
            }
        ]
    },
    {
        "kanji": "性",
        "kun_reading": ["さが", "せい"],
        "on_reading": ["せい", "しょう"],
        "han_viet": "TÍNH",
        "meaning_vi": "tính cách, giới tính",
        "meaning_en": "nature, gender",
        "radicals": "生",
        "strokes": 9,
        "level": "N4",
        "examples": [
            {
                "example_text": "彼女は優れた性格を持っています。",
                "furigana": "かのじょはすぐれたせいかくをもちています。",
                "meaning_vi": "Cô ấy có một tính cách tuyệt vời.",
                "meaning_en": "She has a great personality."
            },
            {
                "example_text": "性別に関係なく、誰でも仕事を持つべきです。",
                "furigana": "せいべつにかんけいなく、だれでもしごとをもつべきです。",
                "meaning_vi": "Bất kể giới tính, ai cũng nên có công việc.",
                "meaning_en": "Regardless of gender, everyone should have a job."
            }
        ]
    },
    {
        "kanji": "格",
        "kun_reading": ["おきて", "おお.い"],
        "on_reading": ["かく", "こう"],
        "han_viet": "CÁCH",
        "meaning_vi": "cấp bậc, tính cách",
        "meaning_en": "status, rank, character",
        "radicals": "彳, 一",
        "strokes": 8,
        "level": "N2",
        "examples": [
            {
                "example_text": "彼は高い格を持つ人です。",
                "furigana": "かれはたかいかくをもつひとです。",
                "meaning_vi": "Anh ấy là người có cấp bậc cao.",
                "meaning_en": "He is a person of high status."
            },
            {
                "example_text": "この問題には多くの格が関わっています。",
                "furigana": "このもんだいにはおおくのかくがかかわっています。",
                "meaning_vi": "Có nhiều cấp bậc liên quan đến vấn đề này.",
                "meaning_en": "This issue involves many levels of rank."
            }
        ]
    },
    {
        "kanji": "不",
        "kun_reading": ["ふ", "ぶ"],
        "on_reading": ["ふ", "ぶ"],
        "han_viet": "BẤT",
        "meaning_vi": "không, bất, vô",
        "meaning_en": "not, un-, negative",
        "radicals": "一, 丿",
        "strokes": 4,
        "level": "N5",
        "examples": [
            {
                "example_text": "これは不可能です。",
                "furigana": "これはふかのうです。",
                "meaning_vi": "Điều này là không thể.",
                "meaning_en": "This is impossible."
            },
            {
                "example_text": "不安な気持ちを抱えています。",
                "furigana": "ふあんなきもちをかかえています。",
                "meaning_vi": "Tôi đang mang trong mình cảm giác lo lắng.",
                "meaning_en": "I am feeling anxious."
            }
        ]
    },
    {
        "kanji": "議",
        "kun_reading": ["あぎ", "うた.う"],
        "on_reading": ["ぎ"],
        "han_viet": "NGHỊ",
        "meaning_vi": "nghị luận, bàn bạc",
        "meaning_en": "discussion, deliberation",
        "radicals": "言, 羊",
        "strokes": 14,
        "level": "N3",
        "examples": [
            {
                "example_text": "会議で議論をしました。",
                "furigana": "かいぎでぎろんをしました。",
                "meaning_vi": "Chúng tôi đã thảo luận trong cuộc họp.",
                "meaning_en": "We had a discussion in the meeting."
            },
            {
                "example_text": "その問題について議論する必要があります。",
                "furigana": "そのもんだいについてぎろんするひつようがあります。",
                "meaning_vi": "Cần phải thảo luận về vấn đề đó.",
                "meaning_en": "We need to discuss that issue."
            }
        ]
    },
    {
        "kanji": "思",
        "kun_reading": ["おも.う", "おもえら.く", "おもい"],
        "on_reading": ["し"],
        "han_viet": "TƯ",
        "meaning_vi": "nghĩ, suy nghĩ, tưởng tượng",
        "meaning_en": "to think, to consider, to imagine",
        "radicals": "心",
        "strokes": 9,
        "level": "N5",
        "examples": [
            {
                "example_text": "私はあなたのことを思っています。",
                "furigana": "わたしはあなたのことをおもっています。",
                "meaning_vi": "Tôi đang nghĩ về bạn.",
                "meaning_en": "I am thinking about you."
            },
            {
                "example_text": "彼はそれを思いつきました。",
                "furigana": "かれはそれをおもいつきました。",
                "meaning_vi": "Anh ấy đã nghĩ ra điều đó.",
                "meaning_en": "He came up with that idea."
            }
        ]
    },
    {
        "kanji": "赤",
        "kun_reading": [
            "あか",
            "あかい"
        ],
        "on_reading": [
            "セキ",
            "シャク"
        ],
        "han_viet": "XÍCH",
        "meaning_vi": "Màu đỏ",
        "meaning_en": "Red",
        "radicals": "赤",
        "strokes": 6,
        "level": "N5",
        "examples": [
            {
                "example_text": "赤い花が咲いています。",
                "furigana": "あかいはながさいています。",
                "meaning_vi": "Những bông hoa đỏ đang nở.",
                "meaning_en": "Red flowers are blooming."
            },
            {
                "example_text": "彼は赤いシャツを着ています。",
                "furigana": "かれはあかいしゃつをきています。",
                "meaning_vi": "Anh ấy đang mặc áo sơ mi đỏ.",
                "meaning_en": "He is wearing a red shirt."
            }
        ]
    },
    {
        "kanji": "悪",
        "kun_reading": [
            "わるい"
        ],
        "on_reading": [
            "アク",
            "オ"
        ],
        "han_viet": "ÁC",
        "meaning_vi": "Xấu, ác",
        "meaning_en": "Bad, evil",
        "radicals": "亻",
        "strokes": 9,
        "level": "N4",
        "examples": [
            {
                "example_text": "悪いことをしてはいけません。",
                "furigana": "わるいことをしてはいけません。",
                "meaning_vi": "Không được làm điều xấu.",
                "meaning_en": "You must not do bad things."
            },
            {
                "example_text": "彼は悪い影響を与えています。",
                "furigana": "かれはわるいえいきょうをあたえています。",
                "meaning_vi": "Anh ấy đang tạo ra ảnh hưởng xấu.",
                "meaning_en": "He is having a bad influence."
            }
        ]
    },
    {
        "kanji": "岸",
        "kun_reading": [
            "きし"
        ],
        "on_reading": [
            "ガン",
            "キン"
        ],
        "han_viet": "NGẠN",
        "meaning_vi": "Bờ, bờ biển",
        "meaning_en": "Coast, shore",
        "radicals": "土",
        "strokes": 8,
        "level": "N4",
        "examples": [
            {
                "example_text": "海岸に立っています。",
                "furigana": "かいがんにたっています。",
                "meaning_vi": "Tôi đang đứng ở bờ biển.",
                "meaning_en": "I am standing on the coastline."
            },
            {
                "example_text": "川の岸を歩いています。",
                "furigana": "かわのきしをあるいています。",
                "meaning_vi": "Tôi đang đi bộ dọc theo bờ sông.",
                "meaning_en": "I am walking along the riverbank."
            }
        ]
    },
    {
        "kanji": "工",
        "kun_reading": ["たくみ", "こう"],
        "on_reading": ["こう"],
        "han_viet": "CÔNG",
        "meaning_vi": "công việc, nghề, kỹ thuật",
        "meaning_en": "work, craft, technique",
        "radicals": "工",
        "strokes": 3,
        "level": "N4",
        "examples": [
            {
                "example_text": "彼は工学を勉強しています。",
                "furigana": "かれはこうがくをべんきょうしています。",
                "meaning_vi": "Anh ấy đang học kỹ thuật.",
                "meaning_en": "He is studying engineering."
            },
            {
                "example_text": "工事が終わったばかりです。",
                "furigana": "こうじがおわったばかりです。",
                "meaning_vi": "Công trình vừa mới hoàn thành.",
                "meaning_en": "The construction has just finished."
            }
        ]
    },
    {
        "kanji": "指",
        "kun_reading": ["ゆび", "さす"],
        "on_reading": ["し"],
        "han_viet": "CHỈ",
        "meaning_vi": "ngón tay, chỉ, chỉ đạo",
        "meaning_en": "finger, to point, to direct",
        "radicals": "寸",
        "strokes": 5,
        "level": "N3",
        "examples": [
            {
                "example_text": "彼は指をさしてあそこを見ました。",
                "furigana": "かれはゆびをさしてあそこをみました。",
                "meaning_vi": "Anh ấy chỉ tay và nhìn vào đó.",
                "meaning_en": "He pointed with his finger and looked there."
            },
            {
                "example_text": "指示に従ってください。",
                "furigana": "しじにしたがってください。",
                "meaning_vi": "Hãy làm theo chỉ dẫn.",
                "meaning_en": "Please follow the instructions."
            }
        ]
    },
    {
        "kanji": "輪",
        "kun_reading": ["わ", "わく"],
        "on_reading": ["りん"],
        "han_viet": "LUÂN",
        "meaning_vi": "vòng, chu kỳ, vòng tròn",
        "meaning_en": "circle, ring, cycle",
        "radicals": "車",
        "strokes": 8,
        "level": "N2",
        "examples": [
            {
                "example_text": "自転車の車輪が壊れた。",
                "furigana": "じてんしゃのしゃりんがこわれた。",
                "meaning_vi": "Bánh xe đạp bị hỏng.",
                "meaning_en": "The bicycle wheel broke."
            },
            {
                "example_text": "輪を作って手をつなぎましょう。",
                "furigana": "わをつくっててをつなぎましょう。",
                "meaning_vi": "Hãy tạo thành một vòng tròn và nắm tay nhau.",
                "meaning_en": "Let's form a circle and hold hands."
            }
        ]
    },
    {
        "kanji": "強",
        "kun_reading": ["つよい", "つよまる", "しん"],
        "on_reading": ["きょう", "ごう"],
        "han_viet": "CƯỜNG",
        "meaning_vi": "mạnh, mạnh mẽ, cường độ",
        "meaning_en": "strong, powerful, intensity",
        "radicals": "弓",
        "strokes": 6,
        "level": "N3",
        "examples": [
            {
                "example_text": "彼は強い選手です。",
                "furigana": "かれはつよいせんしゅです。",
                "meaning_vi": "Anh ấy là một vận động viên mạnh.",
                "meaning_en": "He is a strong athlete."
            },
            {
                "example_text": "この風はとても強いです。",
                "furigana": "このかぜはとてもつよいです。",
                "meaning_vi": "Gió này rất mạnh.",
                "meaning_en": "This wind is very strong."
            }
        ]
    },
    {
        "kanji": "優",
        "kun_reading": ["やさしい", "ゆう"],
        "on_reading": ["ゆう"],
        "han_viet": "ƯU",
        "meaning_vi": "tốt, ưu việt, dịu dàng",
        "meaning_en": "gentle, superior, excellent",
        "radicals": "亻",
        "strokes": 6,
        "level": "N3",
        "examples": [
            {
                "example_text": "彼女は優しい人です。",
                "furigana": "かのじょはやさしいひとです。",
                "meaning_vi": "Cô ấy là một người dịu dàng.",
                "meaning_en": "She is a gentle person."
            },
            {
                "example_text": "彼の優れた技術を見てください。",
                "furigana": "かれのすぐれたぎじゅつをみてください。",
                "meaning_vi": "Hãy nhìn vào kỹ thuật xuất sắc của anh ấy.",
                "meaning_en": "Look at his excellent skills."
            }
        ]
    },
    {
        "kanji": "好",
        "kun_reading": ["このむ", "すき"],
        "on_reading": ["こう"],
        "han_viet": "HẢO",
        "meaning_vi": "thích, yêu thích, tốt",
        "meaning_en": "like, love, good",
        "radicals": "女",
        "strokes": 6,
        "level": "N4",
        "examples": [
            {
                "example_text": "私は音楽が好きです。",
                "furigana": "わたしはおんがくがすきです。",
                "meaning_vi": "Tôi thích âm nhạc.",
                "meaning_en": "I like music."
            },
            {
                "example_text": "彼はスポーツが好きです。",
                "furigana": "かれはスポーツがすきです。",
                "meaning_vi": "Anh ấy thích thể thao.",
                "meaning_en": "He likes sports."
            }
        ]
    },
    {
        "kanji": "点",
        "kun_reading": ["てん", "たえる"],
        "on_reading": ["てん"],
        "han_viet": "ĐIỂM",
        "meaning_vi": "điểm, chấm, dấu hiệu",
        "meaning_en": "point, mark, spot",
        "radicals": "丶",
        "strokes": 9,
        "level": "N4",
        "examples": [
            {
                "example_text": "この問題は難しい点があります。",
                "furigana": "このもんだいはむずかしいてんがあります。",
                "meaning_vi": "Vấn đề này có một số điểm khó.",
                "meaning_en": "This problem has some difficult points."
            },
            {
                "example_text": "彼の点数はとても高いです。",
                "furigana": "かれのてんすうはとてもたかいです。",
                "meaning_vi": "Điểm số của anh ấy rất cao.",
                "meaning_en": "His score is very high."
            }
        ]
    },

    // kanji bai 39
    {
        "kanji": "答",
        "kun_reading": ["こた.える", "こた.え"],
        "on_reading": ["とう"],
        "han_viet": "ĐÁP",
        "meaning_vi": "trả lời, đáp án",
        "meaning_en": "answer, response",
        "radicals": "竹",
        "strokes": 12,
        "level": "N4",
        "examples": [
            {
                "example_text": "先生の質問に答えました。",
                "furigana": "せんせいのしつもんにこたえました。",
                "meaning_vi": "Tôi đã trả lời câu hỏi của giáo viên.",
                "meaning_en": "I answered the teacher's question."
            },
            {
                "example_text": "正しい答えを選んでください。",
                "furigana": "ただしいこたえをえらんでください。",
                "meaning_vi": "Hãy chọn câu trả lời đúng.",
                "meaning_en": "Please choose the correct answer."
            }
        ]
    },
    {
        "kanji": "倒",
        "kun_reading": ["たお.れる", "たお.す"],
        "on_reading": ["とう"],
        "han_viet": "ĐẢO",
        "meaning_vi": "ngã, đổ",
        "meaning_en": "to fall, to collapse",
        "radicals": "亻",
        "strokes": 10,
        "level": "N3",
        "examples": [
            {
                "example_text": "強い風で木が倒れました。",
                "furigana": "つよいかぜできがたおれました。",
                "meaning_vi": "Cây đã đổ vì gió mạnh.",
                "meaning_en": "The tree fell down due to strong wind."
            },
            {
                "example_text": "敵を倒すことができました。",
                "furigana": "てきをたおすことができました。",
                "meaning_vi": "Tôi đã có thể đánh bại kẻ thù.",
                "meaning_en": "I was able to defeat the enemy."
            }
        ]
    },
    {
        "kanji": "焼",
        "kun_reading": ["や.く", "や.ける"],
        "on_reading": ["しょう"],
        "han_viet": "THIÊU",
        "meaning_vi": "đốt, nướng",
        "meaning_en": "to burn, to grill",
        "radicals": "火",
        "strokes": 12,
        "level": "N3",
        "examples": [
            {
                "example_text": "魚を焼いて食べました。",
                "furigana": "さかなをやいてたべました。",
                "meaning_vi": "Tôi đã nướng cá rồi ăn.",
                "meaning_en": "I grilled the fish and ate it."
            },
            {
                "example_text": "パンが焼けるいい匂いがします。",
                "furigana": "パンがやけるいいにおいがします。",
                "meaning_vi": "Có mùi thơm của bánh mì đang nướng.",
                "meaning_en": "There is a nice smell of baking bread."
            }
        ]
    },
    {
        "kanji": "通",
        "kun_reading": ["とお.る", "とお.す", "かよ.う"],
        "on_reading": ["つう"],
        "han_viet": "THÔNG",
        "meaning_vi": "đi qua, thông suốt",
        "meaning_en": "to pass, to commute",
        "radicals": "辶",
        "strokes": 10,
        "level": "N4",
        "examples": [
            {
                "example_text": "この道を通って学校へ行きます。",
                "furigana": "このみちをとおってがっこうへいきます。",
                "meaning_vi": "Tôi đi qua con đường này để đến trường.",
                "meaning_en": "I go to school through this road."
            },
            {
                "example_text": "毎日電車で会社に通っています。",
                "furigana": "まいにちでんしゃでかいしゃにかよっています。",
                "meaning_vi": "Tôi đi làm bằng tàu điện mỗi ngày.",
                "meaning_en": "I commute to work by train every day."
            }
        ]
    },
    {
        "kanji": "死",
        "kun_reading": ["し.ぬ"],
        "on_reading": ["し"],
        "han_viet": "TỬ",
        "meaning_vi": "chết",
        "meaning_en": "to die",
        "radicals": "歹",
        "strokes": 6,
        "level": "N4",
        "examples": [
            {
                "example_text": "彼は事故で死にました。",
                "furigana": "かれはじこでしにました。",
                "meaning_vi": "Anh ấy đã chết trong một tai nạn.",
                "meaning_en": "He died in an accident."
            },
            {
                "example_text": "死ぬことを考えないでください。",
                "furigana": "しぬことをかんがえないでください。",
                "meaning_vi": "Xin đừng nghĩ đến cái chết.",
                "meaning_en": "Please don't think about dying."
            }
        ]
    },
    {
        "kanji": "心",
        "kun_reading": ["こころ"],
        "on_reading": ["しん"],
        "han_viet": "TÂM",
        "meaning_vi": "trái tim, tâm hồn",
        "meaning_en": "heart, mind",
        "radicals": "心",
        "strokes": 4,
        "level": "N5",
        "examples": [
            {
                "example_text": "彼の心は優しいです。",
                "furigana": "かれのこころはやさしいです。",
                "meaning_vi": "Anh ấy có một trái tim nhân hậu.",
                "meaning_en": "He has a kind heart."
            },
            {
                "example_text": "心を開いて話してください。",
                "furigana": "こころをひらいてはなしてください。",
                "meaning_vi": "Hãy mở lòng và nói chuyện đi.",
                "meaning_en": "Please open your heart and talk."
            }
        ]
    },
    {
        "kanji": "遅",
        "kun_reading": ["おそ.い", "おく.れる"],
        "on_reading": ["ち"],
        "han_viet": "TRÌ",
        "meaning_vi": "chậm, trễ",
        "meaning_en": "slow, late",
        "radicals": "辶",
        "strokes": 12,
        "level": "N4",
        "examples": [
            {
                "example_text": "電車が遅れました。",
                "furigana": "でんしゃがおくれました。",
                "meaning_vi": "Tàu điện đã bị trễ.",
                "meaning_en": "The train was delayed."
            },
            {
                "example_text": "遅い時間に帰らないでください。",
                "furigana": "おそいじかんにかえらないでください。",
                "meaning_vi": "Đừng về nhà quá muộn.",
                "meaning_en": "Please don't come home too late."
            }
        ]
    },
    {
        "kanji": "早",
        "kun_reading": ["はや.い"],
        "on_reading": ["そう"],
        "han_viet": "TẢO",
        "meaning_vi": "sớm, nhanh",
        "meaning_en": "early, fast",
        "radicals": "日",
        "strokes": 6,
        "level": "N5",
        "examples": [
            {
                "example_text": "毎朝早く起きます。",
                "furigana": "まいあさはやくおきます。",
                "meaning_vi": "Tôi thức dậy sớm mỗi sáng.",
                "meaning_en": "I wake up early every morning."
            },
            {
                "example_text": "早く宿題を終わらせてください。",
                "furigana": "はやくしゅくだいをおわらせてください。",
                "meaning_vi": "Hãy làm xong bài tập về nhà sớm nhé.",
                "meaning_en": "Please finish your homework early."
            }
        ]
    },
    {
        "kanji": "離",
        "kun_reading": ["はな.れる", "はな.す"],
        "on_reading": ["り"],
        "han_viet": "LY",
        "meaning_vi": "rời xa, chia ly",
        "meaning_en": "to separate, to leave",
        "radicals": "隹",
        "strokes": 19,
        "level": "N3",
        "examples": [
            {
                "example_text": "私は家族と離れて暮らしています。",
                "furigana": "わたしはかぞくとはなれてくらしています。",
                "meaning_vi": "Tôi sống xa gia đình.",
                "meaning_en": "I live apart from my family."
            },
            {
                "example_text": "携帯を手から離さないでください。",
                "furigana": "けいたいをてからはなさないでください。",
                "meaning_vi": "Đừng rời điện thoại khỏi tay.",
                "meaning_en": "Don't let go of your phone."
            }
        ]
    },
    {
        "kanji": "婚",
        "kun_reading": [],
        "on_reading": ["こん"],
        "han_viet": "HÔN",
        "meaning_vi": "kết hôn",
        "meaning_en": "marriage",
        "radicals": "女",
        "strokes": 11,
        "level": "N3",
        "examples": [
            {
                "example_text": "彼女と婚約しました。",
                "furigana": "かのじょとこんやくしました。",
                "meaning_vi": "Tôi đã đính hôn với cô ấy.",
                "meaning_en": "I got engaged to her."
            },
            {
                "example_text": "結婚式は来週です。",
                "furigana": "けっこんしきはらいしゅうです。",
                "meaning_vi": "Lễ cưới sẽ diễn ra vào tuần sau.",
                "meaning_en": "The wedding ceremony is next week."
            }
        ]
    },
    {
        "kanji": "複",
        "kun_reading": [],
        "on_reading": ["ふく"],
        "han_viet": "PHỨC",
        "meaning_vi": "phức tạp",
        "meaning_en": "complex, multiple",
        "radicals": "衣",
        "strokes": 14,
        "level": "N3",
        "examples": [
            {
                "example_text": "この問題は複雑です。",
                "furigana": "このもんだいはふくざつです。",
                "meaning_vi": "Vấn đề này rất phức tạp.",
                "meaning_en": "This problem is complicated."
            },
            {
                "example_text": "複数の方法があります。",
                "furigana": "ふくすうのほうほうがあります。",
                "meaning_vi": "Có nhiều phương pháp.",
                "meaning_en": "There are multiple methods."
            }
        ]
    },
    {
        "kanji": "雑",
        "kun_reading": [],
        "on_reading": ["ざつ"],
        "han_viet": "TẠP",
        "meaning_vi": "tạp nham, hỗn tạp",
        "meaning_en": "miscellaneous",
        "radicals": "隹",
        "strokes": 14,
        "level": "N3",
        "examples": [
            {
                "example_text": "雑音が多くて集中できません。",
                "furigana": "ざつおんがおおくてしゅうちゅうできません。",
                "meaning_vi": "Có quá nhiều tạp âm nên tôi không thể tập trung.",
                "meaning_en": "There is too much noise, so I can't concentrate."
            },
            {
                "example_text": "この雑誌を読んでいます。",
                "furigana": "このざっしをよんでいます。",
                "meaning_vi": "Tôi đang đọc tạp chí này.",
                "meaning_en": "I am furigana this magazine."
            }
        ]
    },
    {
        "kanji": "邪",
        "kun_reading": [],
        "on_reading": ["じゃ"],
        "han_viet": "TÀ",
        "meaning_vi": "tà ác, xấu xa",
        "meaning_en": "evil, wicked",
        "radicals": "牙",
        "strokes": 8,
        "level": "N2",
        "examples": [
            {
                "example_text": "彼は邪悪な考えを持っている。",
                "furigana": "かれはじゃあくなかんがえをもっている。",
                "meaning_vi": "Anh ta có suy nghĩ tà ác.",
                "meaning_en": "He has an evil mind."
            },
            {
                "example_text": "邪魔しないでください。",
                "furigana": "じゃましないでください。",
                "meaning_vi": "Đừng làm phiền tôi.",
                "meaning_en": "Please don't disturb me."
            }
        ]
    },
    {
        "kanji": "魔",
        "kun_reading": [],
        "on_reading": ["ま"],
        "han_viet": "MA",
        "meaning_vi": "ma quỷ",
        "meaning_en": "demon, evil spirit",
        "radicals": "鬼",
        "strokes": 21,
        "level": "N2",
        "examples": [
            {
                "example_text": "魔法の世界が好きです。",
                "furigana": "まほうのせかいがすきです。",
                "meaning_vi": "Tôi thích thế giới phép thuật.",
                "meaning_en": "I like the world of magic."
            },
            {
                "example_text": "悪魔が出てくる物語です。",
                "furigana": "あくまがでてくるものがたりです。",
                "meaning_vi": "Đây là một câu chuyện có quỷ dữ.",
                "meaning_en": "This is a story with demons."
            }
        ]
    },
    {
        "kanji": "悲",
        "kun_reading": ["かな.しい", "かな.しむ"],
        "on_reading": ["ひ"],
        "han_viet": "BI",
        "meaning_vi": "buồn bã",
        "meaning_en": "sad, sorrowful",
        "radicals": "心",
        "strokes": 12,
        "level": "N4",
        "examples": [
            {
                "example_text": "悲しいニュースを聞きました。",
                "furigana": "かなしいニュースをききました。",
                "meaning_vi": "Tôi đã nghe một tin buồn.",
                "meaning_en": "I heard sad news."
            },
            {
                "example_text": "友達の別れを悲しんでいます。",
                "furigana": "ともだちのわかれをかなしんでいます。",
                "meaning_vi": "Tôi buồn vì sự chia tay của bạn bè.",
                "meaning_en": "I am sad about my friend's departure."
            }
        ]
    },
    {
        "kanji": "恥",
        "kun_reading": ["は.じる", "はじ", "は.ずかしい"],
        "on_reading": ["ち"],
        "han_viet": "SỈ",
        "meaning_vi": "xấu hổ",
        "meaning_en": "shame, embarrassment",
        "radicals": "心",
        "strokes": 10,
        "level": "N3",
        "examples": [
            {
                "example_text": "恥ずかしくて顔が赤くなった。",
                "furigana": "はずかしくてかおがあかくなった。",
                "meaning_vi": "Tôi xấu hổ đến mức mặt đỏ lên.",
                "meaning_en": "I was so embarrassed that my face turned red."
            },
            {
                "example_text": "そんなことをするのは恥です。",
                "furigana": "そんなことをするのははじです。",
                "meaning_vi": "Làm việc như thế là đáng xấu hổ.",
                "meaning_en": "Doing such a thing is a disgrace."
            }
        ]
    },
    {
        "kanji": "震",
        "kun_reading": ["ふる.える"],
        "on_reading": ["しん"],
        "han_viet": "CHẤN",
        "meaning_vi": "rung, chấn động",
        "meaning_en": "to shake, to tremble",
        "radicals": "雨",
        "strokes": 15,
        "level": "N2",
        "examples": [
            {
                "example_text": "地震が起こりました。",
                "furigana": "じしんがおこりました。",
                "meaning_vi": "Đã xảy ra động đất.",
                "meaning_en": "An earthquake occurred."
            },
            {
                "example_text": "彼の手が震えている。",
                "furigana": "かれのてがふるえている。",
                "meaning_vi": "Tay anh ấy đang run.",
                "meaning_en": "His hands are trembling."
            }
        ]
    },
    {
        "kanji": "台",
        "kun_reading": [],
        "on_reading": ["だい", "たい"],
        "han_viet": "ĐÀI",
        "meaning_vi": "bệ, bục, nền",
        "meaning_en": "platform, stand, base",
        "radicals": "至",
        "strokes": 5,
        "level": "N4",
        "examples": [
            {
                "example_text": "テーブルの上にテレビ台があります。",
                "furigana": "テーブルのうえにテレビだいがあります。",
                "meaning_vi": "Trên bàn có kệ để TV.",
                "meaning_en": "There is a TV stand on the table."
            },
            {
                "example_text": "この台を使ってください。",
                "furigana": "このだいをつかってください。",
                "meaning_vi": "Hãy sử dụng cái bục này.",
                "meaning_en": "Please use this stand."
            }
        ]
    },
    {
        "kanji": "風",
        "kun_reading": ["かぜ", "かざ"],
        "on_reading": ["ふう"],
        "han_viet": "PHONG",
        "meaning_vi": "gió, phong cách",
        "meaning_en": "wind, style",
        "radicals": "風",
        "strokes": 9,
        "level": "N5",
        "examples": [
            {
                "example_text": "今日は風が強いです。",
                "furigana": "きょうはかぜがつよいです。",
                "meaning_vi": "Hôm nay gió rất mạnh.",
                "meaning_en": "The wind is strong today."
            },
            {
                "example_text": "和風の料理が好きです。",
                "furigana": "わふうのりょうりがすきです。",
                "meaning_vi": "Tôi thích các món ăn kiểu Nhật.",
                "meaning_en": "I like Japanese-style cuisine."
            }
        ]
    },
    {
        "kanji": "合",
        "kun_reading": ["あ.う", "あ.わせる"],
        "on_reading": ["ごう"],
        "han_viet": "HỢP",
        "meaning_vi": "kết hợp, phù hợp",
        "meaning_en": "to match, to fit",
        "radicals": "口",
        "strokes": 6,
        "level": "N4",
        "examples": [
            {
                "example_text": "二人の意見が合いました。",
                "furigana": "ふたりのいけんがあいました。",
                "meaning_vi": "Ý kiến của hai người trùng khớp.",
                "meaning_en": "Their opinions matched."
            },
            {
                "example_text": "サイズが合っていません。",
                "furigana": "サイズがあっていません。",
                "meaning_vi": "Kích thước không phù hợp.",
                "meaning_en": "The size does not fit."
            }
        ]
    },
    {
        "kanji": "代",
        "kun_reading": ["か.わる", "か.える", "しろ"],
        "on_reading": ["だい"],
        "han_viet": "ĐẠI",
        "meaning_vi": "thay thế, thế hệ",
        "meaning_en": "substitute, generation",
        "radicals": "亻",
        "strokes": 5,
        "level": "N4",
        "examples": [
            {
                "example_text": "私は彼の代わりに行きます。",
                "furigana": "わたしはかれのかわりにいきます。",
                "meaning_vi": "Tôi sẽ đi thay anh ấy.",
                "meaning_en": "I will go in his place."
            },
            {
                "example_text": "次の世代に希望を持っています。",
                "furigana": "つぎのせだいにきぼうをもっています。",
                "meaning_vi": "Tôi có hy vọng cho thế hệ tiếp theo.",
                "meaning_en": "I have hope for the next generation."
            }
        ]
    },
    {
        "kanji": "号",
        "kun_reading": [],
        "on_reading": ["ごう"],
        "han_viet": "HIỆU",
        "meaning_vi": "số, ký hiệu, biệt hiệu",
        "meaning_en": "number, sign, nickname",
        "radicals": "口",
        "strokes": 5,
        "level": "N4",
        "examples": [
            {
                "example_text": "この列車は５号車です。",
                "furigana": "このれっしゃはごごうしゃです。",
                "meaning_vi": "Đây là toa số 5 của tàu.",
                "meaning_en": "This is car number 5 of the train."
            },
            {
                "example_text": "彼のペンネームは『風の旅人』です。",
                "furigana": "かれのペンネームは『かぜのたびびと』です。",
                "meaning_vi": "Bút danh của anh ấy là 'Lữ khách của gió'.",
                "meaning_en": "His pen name is 'Traveler of the Wind'."
            }
        ]
    },
    {
        "kanji": "汗",
        "kun_reading": ["あせ"],
        "on_reading": ["かん"],
        "han_viet": "HÃN",
        "meaning_vi": "mồ hôi",
        "meaning_en": "sweat",
        "radicals": "氵",
        "strokes": 6,
        "level": "N4",
        "examples": [
            {
                "example_text": "暑くて汗をかきました。",
                "furigana": "あつくてあせをかきました。",
                "meaning_vi": "Trời nóng nên tôi đổ mồ hôi.",
                "meaning_en": "I sweated because it was hot."
            },
            {
                "example_text": "運動した後、汗を拭きました。",
                "furigana": "うんどうしたあと、あせをふきました。",
                "meaning_vi": "Tôi lau mồ hôi sau khi tập thể dục.",
                "meaning_en": "I wiped my sweat after exercising."
            }
        ]
    },
    {
        "kanji": "勢",
        "kun_reading": ["いきお.い"],
        "on_reading": ["せい"],
        "han_viet": "THẾ",
        "meaning_vi": "thế lực, sức mạnh",
        "meaning_en": "power, force",
        "radicals": "力",
        "strokes": 13,
        "level": "N3",
        "examples": [
            {
                "example_text": "彼は勢いよく走った。",
                "furigana": "かれはいきおいよくはしった。",
                "meaning_vi": "Anh ấy chạy rất mạnh mẽ.",
                "meaning_en": "He ran with great force."
            },
            {
                "example_text": "会社の勢いが強くなっています。",
                "furigana": "かいしゃのいきおいがつよくなっています。",
                "meaning_vi": "Công ty đang trở nên mạnh hơn.",
                "meaning_en": "The company is gaining strength."
            }
        ]
    },
    {
        "kanji": "疲",
        "kun_reading": ["つか.れる"],
        "on_reading": ["ひ"],
        "han_viet": "BÌ",
        "meaning_vi": "mệt mỏi",
        "meaning_en": "tired",
        "radicals": "疒",
        "strokes": 10,
        "level": "N4",
        "examples": [
            {
                "example_text": "今日はとても疲れました。",
                "furigana": "きょうはとてもつかれました。",
                "meaning_vi": "Hôm nay tôi rất mệt.",
                "meaning_en": "I am very tired today."
            },
            {
                "example_text": "仕事で疲れがたまっています。",
                "furigana": "しごとでつかれがたまっています。",
                "meaning_vi": "Tôi đang bị mệt do công việc.",
                "meaning_en": "I am accumulating fatigue from work."
            }
        ]
    },
    {
        "kanji": "伺",
        "kun_reading": ["うかが.う"],
        "on_reading": ["し"],
        "han_viet": "TỨ",
        "meaning_vi": "hỏi thăm, viếng thăm",
        "meaning_en": "to visit, to ask",
        "radicals": "亻",
        "strokes": 7,
        "level": "N3",
        "examples": [
            {
                "example_text": "先生の家に伺いました。",
                "furigana": "せんせいのいえにうかがいました。",
                "meaning_vi": "Tôi đã đến thăm nhà của thầy giáo.",
                "meaning_en": "I visited my teacher's house."
            },
            {
                "example_text": "少し伺いたいことがあります。",
                "furigana": "すこしうかがいたいことがあります。",
                "meaning_vi": "Tôi có một số điều muốn hỏi.",
                "meaning_en": "I have something to ask."
            }
        ]
    },
    {
        "kanji": "途",
        "kun_reading": [],
        "on_reading": ["と"],
        "han_viet": "ĐỒ",
        "meaning_vi": "đường đi, lối đi",
        "meaning_en": "way, route",
        "radicals": "辶",
        "strokes": 10,
        "level": "N3",
        "examples": [
            {
                "example_text": "途中で友達に会いました。",
                "furigana": "とちゅうでともだちにあいました。",
                "meaning_vi": "Tôi đã gặp bạn trên đường đi.",
                "meaning_en": "I met my friend on the way."
            },
            {
                "example_text": "目的地までの途を調べます。",
                "furigana": "もくてきちまでのとをしらべます。",
                "meaning_vi": "Tôi sẽ tìm hiểu đường đi đến điểm đích.",
                "meaning_en": "I will check the route to the destination."
            }
        ]
    },
    {
        "kanji": "並",
        "kun_reading": ["なら.ぶ", "なら.べる", "なみ"],
        "on_reading": ["へい"],
        "han_viet": "TỊNH",
        "meaning_vi": "xếp hàng, bình thường",
        "meaning_en": "to line up, ordinary",
        "radicals": "一",
        "strokes": 8,
        "level": "N3",
        "examples": [
            {
                "example_text": "人々が並んで待っています。",
                "furigana": "ひとびとがならんでまっています。",
                "meaning_vi": "Mọi người đang xếp hàng chờ.",
                "meaning_en": "People are lining up and waiting."
            },
            {
                "example_text": "彼は並の人ではありません。",
                "furigana": "かれはなみのひとではありません。",
                "meaning_vi": "Anh ấy không phải là người bình thường.",
                "meaning_en": "He is not an ordinary person."
            }
        ]
    },
    {
        "kanji": "洋",
        "kun_reading": [],
        "on_reading": ["よう"],
        "han_viet": "DƯƠNG",
        "meaning_vi": "biển, phong cách phương Tây",
        "meaning_en": "ocean, Western style",
        "radicals": "氵",
        "strokes": 9,
        "level": "N4",
        "examples": [
            {
                "example_text": "洋服を買いました。",
                "furigana": "ようふくをかいました。",
                "meaning_vi": "Tôi đã mua quần áo kiểu phương Tây.",
                "meaning_en": "I bought Western-style clothes."
            },
            {
                "example_text": "このホテルは洋風の建物です。",
                "furigana": "このホテルはようふうのたてものです。",
                "meaning_vi": "Khách sạn này là một tòa nhà theo phong cách phương Tây.",
                "meaning_en": "This hotel is a Western-style building."
            }
        ]
    },
    {
        "kanji": "服",
        "kun_reading": [],
        "on_reading": ["ふく"],
        "han_viet": "PHỤC",
        "meaning_vi": "quần áo",
        "meaning_en": "clothes",
        "radicals": "月",
        "strokes": 8,
        "level": "N5",
        "examples": [
            {
                "example_text": "新しい服を買いました。",
                "furigana": "あたらしいふくをかいました。",
                "meaning_vi": "Tôi đã mua quần áo mới.",
                "meaning_en": "I bought new clothes."
            },
            {
                "example_text": "彼は黒い服を着ています。",
                "furigana": "かれはくろいふくをきています。",
                "meaning_vi": "Anh ấy đang mặc quần áo màu đen.",
                "meaning_en": "He is wearing black clothes."
            }
        ]
    },
    {
        "kanji": "化",
        "kun_reading": ["ば.ける", "ば.かす"],
        "on_reading": ["か"],
        "han_viet": "HÓA",
        "meaning_vi": "biến hóa, thay đổi",
        "meaning_en": "change, transformation",
        "radicals": "亻",
        "strokes": 4,
        "level": "N4",
        "examples": [
            {
                "example_text": "彼女は化粧をしています。",
                "furigana": "かのじょはけしょうをしています。",
                "meaning_vi": "Cô ấy đang trang điểm.",
                "meaning_en": "She is putting on makeup."
            },
            {
                "example_text": "水は氷に変化します。",
                "furigana": "みずはこおりにへんかします。",
                "meaning_vi": "Nước biến thành băng.",
                "meaning_en": "Water turns into ice."
            }
        ]
    },
    {
        "kanji": "成",
        "kun_reading": ["な.る", "な.す"],
        "on_reading": ["せい"],
        "han_viet": "THÀNH",
        "meaning_vi": "thành công, hoàn thành",
        "meaning_en": "to achieve, to become",
        "radicals": "戈",
        "strokes": 6,
        "level": "N3",
        "examples": [
            {
                "example_text": "彼は成功を成し遂げました。",
                "furigana": "かれはせいこうをなしとげました。",
                "meaning_vi": "Anh ấy đã đạt được thành công.",
                "meaning_en": "He achieved success."
            },
            {
                "example_text": "夢が現実になりました。",
                "furigana": "ゆめがげんじつになりました。",
                "meaning_vi": "Giấc mơ đã trở thành hiện thực.",
                "meaning_en": "The dream became a reality."
            }
        ]
    },
    {
        "kanji": "式",
        "kun_reading": [],
        "on_reading": ["しき"],
        "han_viet": "THỨC",
        "meaning_vi": "nghi lễ, công thức",
        "meaning_en": "ceremony, formula",
        "radicals": "弋",
        "strokes": 6,
        "level": "N4",
        "examples": [
            {
                "example_text": "結婚式に参加しました。",
                "furigana": "けっこんしきにさんかしました。",
                "meaning_vi": "Tôi đã tham dự lễ cưới.",
                "meaning_en": "I attended the wedding ceremony."
            },
            {
                "example_text": "数学の公式を覚えています。",
                "furigana": "すうがくのこうしきをおぼえています。",
                "meaning_vi": "Tôi đang ghi nhớ các công thức toán học.",
                "meaning_en": "I am memorizing mathematical formulas."
            }
        ]
    },
    // tu vung bai 40 
    {
        "kanji": "数",
        "kun_reading": ["かず"],
        "on_reading": ["すう"],
        "han_viet": "SỔ",
        "meaning_vi": "số, số lượng",
        "meaning_en": "number, quantity",
        "radicals": "水",
        "strokes": 6,
        "level": "N4",
        "examples": [
            {
                "example_text": "数を数えました。",
                "furigana": "かずをかぞえました。",
                "meaning_vi": "Tôi đã đếm số.",
                "meaning_en": "I counted the numbers."
            },
            {
                "example_text": "この箱には数が多い。",
                "furigana": "このはこにはすうがおおい。",
                "meaning_vi": "Hộp này có nhiều số.",
                "meaning_en": "This box has many numbers."
            }
        ]
    },
    {
        "kanji": "測",
        "kun_reading": ["はかる"],
        "on_reading": ["そく"],
        "han_viet": "TRẮC",
        "meaning_vi": "đo, đo lường",
        "meaning_en": "measure",
        "radicals": "寸",
        "strokes": 9,
        "level": "N3",
        "examples": [
            {
                "example_text": "温度を測りました。",
                "furigana": "おんどをはかりました。",
                "meaning_vi": "Tôi đã đo nhiệt độ.",
                "meaning_en": "I measured the temperature."
            },
            {
                "example_text": "距離を測る必要があります。",
                "furigana": "きょりをはかるひつようがあります。",
                "meaning_vi": "Cần phải đo khoảng cách.",
                "meaning_en": "It is necessary to measure the distance."
            }
        ]
    },
    {
        "kanji": "量",
        "kun_reading": ["はかる"],
        "on_reading": ["りょう"],
        "han_viet": "LƯỢNG",
        "meaning_vi": "lượng, số lượng",
        "meaning_en": "quantity, amount",
        "radicals": "米",
        "strokes": 10,
        "level": "N4",
        "examples": [
            {
                "example_text": "水の量を測りました。",
                "furigana": "みずのりょうをはかりました。",
                "meaning_vi": "Tôi đã đo lượng nước.",
                "meaning_en": "I measured the amount of water."
            },
            {
                "example_text": "食べる量を減らしました。",
                "furigana": "たべるりょうをへらしました。",
                "meaning_vi": "Tôi đã giảm lượng thức ăn.",
                "meaning_en": "I reduced the amount of food."
            }
        ]
    },
    {
        "kanji": "確",
        "kun_reading": ["たしか"],
        "on_reading": ["かく"],
        "han_viet": "XÁC",
        "meaning_vi": "xác nhận, chắc chắn",
        "meaning_en": "confirm, certain",
        "radicals": "土",
        "strokes": 8,
        "level": "N3",
        "examples": [
            {
                "example_text": "確かな情報を持っています。",
                "furigana": "たしかなじょうほうをもっています。",
                "meaning_vi": "Tôi có thông tin xác thực.",
                "meaning_en": "I have reliable information."
            },
            {
                "example_text": "私はそれを確かめました。",
                "furigana": "わたしはそれをたしかめました。",
                "meaning_vi": "Tôi đã xác nhận điều đó.",
                "meaning_en": "I confirmed that."
            }
        ]
    },
    {
        "kanji": "到",
        "kun_reading": ["たつ"],
        "on_reading": ["とう"],
        "han_viet": "ĐÁO",
        "meaning_vi": "đến, tới",
        "meaning_en": "arrive, reach",
        "radicals": "止",
        "strokes": 6,
        "level": "N3",
        "examples": [
            {
                "example_text": "目的地に到達しました。",
                "furigana": "もくてきちにとうたつしました。",
                "meaning_vi": "Tôi đã đến điểm đến.",
                "meaning_en": "I have reached the destination."
            },
            {
                "example_text": "彼は駅に到着しました。",
                "furigana": "かれはえきにとうちゃくしました。",
                "meaning_vi": "Anh ấy đã đến ga.",
                "meaning_en": "He arrived at the station."
            }
        ]
    },
    {
        "kanji": "着",
        "kun_reading": ["つく"],
        "on_reading": ["ちゃく"],
        "han_viet": "TRƯỚC",
        "meaning_vi": "đến nơi, mặc",
        "meaning_en": "arrive, wear",
        "radicals": "卩",
        "strokes": 7,
        "level": "N4",
        "examples": [
            {
                "example_text": "早く着きました。",
                "furigana": "はやくつきました。",
                "meaning_vi": "Tôi đã đến sớm.",
                "meaning_en": "I arrived early."
            },
            {
                "example_text": "スーツを着ています。",
                "furigana": "すーつをきています。",
                "meaning_vi": "Tôi đang mặc áo vest.",
                "meaning_en": "I am wearing a suit."
            }
        ]
    },
    {
        "kanji": "酔",
        "kun_reading": ["よる"],
        "on_reading": ["すい"],
        "han_viet": "TÚY",
        "meaning_vi": "say, uống say",
        "meaning_en": "drunk, intoxicated",
        "radicals": "酉",
        "strokes": 9,
        "level": "N4",
        "examples": [
            {
                "example_text": "お酒を飲んで酔いました。",
                "furigana": "おさけをのんでよいました。",
                "meaning_vi": "Tôi đã uống rượu và say.",
                "meaning_en": "I drank alcohol and got drunk."
            },
            {
                "example_text": "彼はすぐに酔っ払う。",
                "furigana": "かれはすぐによっぱらう。",
                "meaning_vi": "Anh ấy say rất nhanh.",
                "meaning_en": "He gets drunk very quickly."
            }
        ]
    },
    {
        "kanji": "険",
        "kun_reading": ["けわしい"],
        "on_reading": ["けん"],
        "han_viet": "HIỂM",
        "meaning_vi": "nguy hiểm, hiểm trở",
        "meaning_en": "dangerous, steep",
        "radicals": "山",
        "strokes": 8,
        "level": "N2",
        "examples": [
            {
                "example_text": "険しい道を歩いています。",
                "furigana": "けわしいみちをあるいています。",
                "meaning_vi": "Tôi đang đi trên con đường hiểm trở.",
                "meaning_en": "I am walking on a steep road."
            },
            {
                "example_text": "この山は非常に険しい。",
                "furigana": "このやまはひじょうにけわしい。",
                "meaning_vi": "Ngọn núi này rất hiểm trở.",
                "meaning_en": "This mountain is very steep."
            }
        ]
    },
    {
        "kanji": "危",
        "kun_reading": ["あぶない"],
        "on_reading": ["き"],
        "han_viet": "NGUY",
        "meaning_vi": "nguy hiểm",
        "meaning_en": "danger",
        "radicals": "土",
        "strokes": 6,
        "level": "N3",
        "examples": [
            {
                "example_text": "この場所は危険です。",
                "furigana": "このばしょはきけんです。",
                "meaning_vi": "Nơi này nguy hiểm.",
                "meaning_en": "This place is dangerous."
            },
            {
                "example_text": "危ない橋を渡る。",
                "furigana": "あぶないはしをわたる。",
                "meaning_vi": "Đi qua cây cầu nguy hiểm.",
                "meaning_en": "Cross the dangerous bridge."
            }
        ]
    },
    {
        "kanji": "忘",
        "kun_reading": ["わすれる"],
        "on_reading": ["ぼう"],
        "han_viet": "VONG",
        "meaning_vi": "quên",
        "meaning_en": "forget",
        "radicals": "亡",
        "strokes": 6,
        "level": "N5",
        "examples": [
            {
                "example_text": "約束を忘れました。",
                "furigana": "やくそくをわすれました。",
                "meaning_vi": "Tôi đã quên lời hứa.",
                "meaning_en": "I forgot the promise."
            },
            {
                "example_text": "彼は名前を忘れた。",
                "furigana": "かれはなまえをわすれた。",
                "meaning_vi": "Anh ấy đã quên tên.",
                "meaning_en": "He forgot the name."
            }
        ]
    },
    {
        "kanji": "次",
        "kun_reading": ["つぎ"],
        "on_reading": ["じ"],
        "han_viet": "THỨ",
        "meaning_vi": "tiếp theo",
        "meaning_en": "next",
        "radicals": "亻",
        "strokes": 6,
        "level": "N5",
        "examples": [
            {
                "example_text": "次の駅で降ります。",
                "furigana": "つぎのえきでおりません。",
                "meaning_vi": "Tôi sẽ xuống tại ga tiếp theo.",
                "meaning_en": "I will get off at the next station."
            },
            {
                "example_text": "次に何をすればいいですか。",
                "furigana": "つぎになにをすればいいですか。",
                "meaning_vi": "Tiếp theo tôi phải làm gì?",
                "meaning_en": "What should I do next?"
            }
        ]
    },
    {
        "kanji": "表",
        "kun_reading": ["おもて", "あらわす"],
        "on_reading": ["ひょう"],
        "han_viet": "BIỂU",
        "meaning_vi": "mặt, bề ngoài, biểu hiện",
        "meaning_en": "surface, front, expression",
        "radicals": "行",
        "strokes": 5,
        "level": "N4",
        "examples": [
            {
                "example_text": "表に名前を書いてください。",
                "furigana": "おもてになまえをかいてください。",
                "meaning_vi": "Hãy viết tên của bạn lên mặt trước.",
                "meaning_en": "Please write your name on the front."
            },
            {
                "example_text": "彼の表情を見てください。",
                "furigana": "かれのひょうじょうをみてください。",
                "meaning_vi": "Hãy nhìn biểu cảm của anh ấy.",
                "meaning_en": "Look at his expression."
            }
        ]
    },
    {
        "kanji": "裏",
        "kun_reading": ["うら"],
        "on_reading": ["り"],
        "han_viet": "LÍ",
        "meaning_vi": "mặt sau, phía sau",
        "meaning_en": "back, reverse",
        "radicals": "衣",
        "strokes": 6,
        "level": "N4",
        "examples": [
            {
                "example_text": "裏の部屋は使っていません。",
                "furigana": "うらのへやはつかっていません。",
                "meaning_vi": "Phòng phía sau tôi không sử dụng.",
                "meaning_en": "The room at the back is not used."
            },
            {
                "example_text": "裏切りは許されません。",
                "furigana": "うらぎりはゆるされません。",
                "meaning_vi": "Sự phản bội không được tha thứ.",
                "meaning_en": "Betrayal is not forgiven."
            }
        ]
    },
    {
        "kanji": "返",
        "kun_reading": ["かえす"],
        "on_reading": ["へん"],
        "han_viet": "PHẢN",
        "meaning_vi": "trả lại, hoàn lại",
        "meaning_en": "return, repay",
        "radicals": "彳",
        "strokes": 7,
        "level": "N4",
        "examples": [
            {
                "example_text": "本を返してください。",
                "furigana": "ほんをかえしてください。",
                "meaning_vi": "Hãy trả lại sách.",
                "meaning_en": "Please return the book."
            },
            {
                "example_text": "お金を返すのを忘れないでください。",
                "furigana": "おかねをかえすのをわすれないでください。",
                "meaning_vi": "Đừng quên trả lại tiền.",
                "meaning_en": "Please don't forget to return the money."
            }
        ]
    },
    {
        "kanji": "込",
        "kun_reading": ["こむ"],
        "on_reading": ["こん"],
        "han_viet": "NHẬP",
        "meaning_vi": "nhập, đầy",
        "meaning_en": "enter, fill",
        "radicals": "人",
        "strokes": 6,
        "level": "N4",
        "examples": [
            {
                "example_text": "電車は満員で込んでいます。",
                "furigana": "でんしゃはまんいんでこんでいます。",
                "meaning_vi": "Xe điện đầy người và đông đúc.",
                "meaning_en": "The train is crowded and packed."
            },
            {
                "example_text": "入力してください。",
                "furigana": "にゅうりょくしてください。",
                "meaning_vi": "Hãy nhập thông tin.",
                "meaning_en": "Please enter the information."
            }
        ]
    },
    {
        "kanji": "傷",
        "kun_reading": ["きず", "いたむ"],
        "on_reading": ["しょう"],
        "han_viet": "THƯƠNG",
        "meaning_vi": "vết thương, làm tổn thương",
        "meaning_en": "wound, injury",
        "radicals": "糸",
        "strokes": 9,
        "level": "N3",
        "examples": [
            {
                "example_text": "手に傷をつけてしまいました。",
                "furigana": "てにきずをつけてしまいました。",
                "meaning_vi": "Tôi đã làm bị thương tay.",
                "meaning_en": "I accidentally injured my hand."
            },
            {
                "example_text": "その事故で傷が深いです。",
                "furigana": "そのじこできずがふかいです。",
                "meaning_vi": "Vết thương trong vụ tai nạn rất sâu.",
                "meaning_en": "The injury from the accident is deep."
            }
        ]
    },
    {
        "kanji": "重",
        "kun_reading": ["おもい", "かさねる"],
        "on_reading": ["じゅう", "ちょう"],
        "han_viet": "TRỌNG",
        "meaning_vi": "nặng, trọng đại",
        "meaning_en": "heavy, important",
        "radicals": "車",
        "strokes": 9,
        "level": "N4",
        "examples": [
            {
                "example_text": "荷物が重いです。",
                "furigana": "にもつがおもいです。",
                "meaning_vi": "Hành lý nặng.",
                "meaning_en": "The luggage is heavy."
            },
            {
                "example_text": "重い決断を下しました。",
                "furigana": "おもいけつだんをくだしました。",
                "meaning_vi": "Tôi đã đưa ra một quyết định quan trọng.",
                "meaning_en": "I made a heavy decision."
            }
        ]
    },
    {
        "kanji": "便",
        "kun_reading": ["たより", "べん"],
        "on_reading": ["べん", "びん"],
        "han_viet": "TIỆN",
        "meaning_vi": "tiện lợi, thư tín",
        "meaning_en": "convenience, mail",
        "radicals": "亻",
        "strokes": 7,
        "level": "N3",
        "examples": [
            {
                "example_text": "便利な場所です。",
                "furigana": "べんりなばしょです。",
                "meaning_vi": "Đây là một địa điểm tiện lợi.",
                "meaning_en": "This is a convenient place."
            },
            {
                "example_text": "郵便局で手紙を送ります。",
                "furigana": "ゆうびんきょくでてがみをおくります。",
                "meaning_vi": "Tôi sẽ gửi thư tại bưu điện.",
                "meaning_en": "I will send the letter at the post office."
            }
        ]
    },
    {
        "kanji": "以",
        "kun_reading": ["もって"],
        "on_reading": ["い"],
        "han_viet": "DĨ",
        "meaning_vi": "dùng, bởi vì",
        "meaning_en": "by means of, because of",
        "radicals": "人",
        "strokes": 5,
        "level": "N3",
        "examples": [
            {
                "example_text": "この方法以外は試しません。",
                "furigana": "このほうほういがいはためしません。",
                "meaning_vi": "Tôi sẽ không thử phương pháp khác.",
                "meaning_en": "I will not try other methods."
            },
            {
                "example_text": "その理由以外は知りません。",
                "furigana": "そのりゆういがいはしりません。",
                "meaning_vi": "Tôi không biết lý do ngoài điều đó.",
                "meaning_en": "I do not know the reason except that."
            }
        ]
    },
    {
        "kanji": "績",
        "kun_reading": ["せき"],
        "on_reading": ["せき"],
        "han_viet": "TÍCH",
        "meaning_vi": "thành tích",
        "meaning_en": "achievement, result",
        "radicals": "禾",
        "strokes": 13,
        "level": "N2",
        "examples": [
            {
                "example_text": "彼は素晴らしい業績を上げました。",
                "furigana": "かれはすばらしいぎょうせきをあげました。",
                "meaning_vi": "Anh ấy đã đạt được thành tích tuyệt vời.",
                "meaning_en": "He achieved remarkable results."
            },
            {
                "example_text": "この会社は長年の業績を誇っています。",
                "furigana": "このかいしゃはながねんのぎょうせきをほこっています。",
                "meaning_vi": "Công ty này tự hào về thành tích lâu dài.",
                "meaning_en": "This company prides itself on its long-term achievements."
            }
        ]
    },
    {
        "kanji": "様",
        "kun_reading": ["さま"],
        "on_reading": ["よう"],
        "han_viet": "DẠNG",
        "meaning_vi": "hình thức, kiểu, ngài",
        "meaning_en": "form, manner, Mr/Mrs",
        "radicals": "小",
        "strokes": 9,
        "level": "N4",
        "examples": [
            {
                "example_text": "お客様の様子はどうですか。",
                "furigana": "おきゃくさまのようすはどうですか。",
                "meaning_vi": "Tình trạng của khách hàng thế nào?",
                "meaning_en": "How is the customer’s condition?"
            },
            {
                "example_text": "様々な種類の料理があります。",
                "furigana": "さまざまなしゅるいのりょうりがあります。",
                "meaning_vi": "Có nhiều loại món ăn khác nhau.",
                "meaning_en": "There are various types of dishes."
            }
        ]
    },
    {
        "kanji": "件",
        "kun_reading": ["けん"],
        "on_reading": ["けん"],
        "han_viet": "KIỆN",
        "meaning_vi": "vụ, sự việc",
        "meaning_en": "matter, case",
        "radicals": "人",
        "strokes": 6,
        "level": "N4",
        "examples": [
            {
                "example_text": "この件について話し合いましょう。",
                "furigana": "このけんについてはなしあいましょう。",
                "meaning_vi": "Hãy thảo luận về vụ này.",
                "meaning_en": "Let’s discuss this matter."
            },
            {
                "example_text": "重要な件を報告します。",
                "furigana": "じゅうようなけんをほうこくします。",
                "meaning_vi": "Tôi sẽ báo cáo về vụ quan trọng này.",
                "meaning_en": "I will report this important case."
            }
        ]
    },
    {
        "kanji": "事",
        "kun_reading": ["こと"],
        "on_reading": ["じ"],
        "han_viet": "SỰ",
        "meaning_vi": "sự việc, chuyện",
        "meaning_en": "thing, matter",
        "radicals": "二",
        "strokes": 8,
        "level": "N5",
        "examples": [
            {
                "example_text": "何か大事な事がありますか。",
                "furigana": "なにかだいじなことがありますか。",
                "meaning_vi": "Có chuyện gì quan trọng không?",
                "meaning_en": "Is there something important?"
            },
            {
                "example_text": "事務所で仕事をしています。",
                "furigana": "じむしょでしごとをしています。",
                "meaning_vi": "Tôi đang làm việc ở văn phòng.",
                "meaning_en": "I am working at the office."
            }
        ]
    },
    {
        "kanji": "爆",
        "kun_reading": ["ばく"],
        "on_reading": ["ばく"],
        "han_viet": "BẠO",
        "meaning_vi": "nổ, bùng nổ",
        "meaning_en": "explode, explosion",
        "radicals": "火",
        "strokes": 10,
        "level": "N2",
        "examples": [
            {
                "example_text": "爆弾が爆発しました。",
                "furigana": "ばくだんがばくはつしました。",
                "meaning_vi": "Một quả bom đã nổ.",
                "meaning_en": "The bomb exploded."
            },
            {
                "example_text": "爆風が街を襲いました。",
                "furigana": "ばくふうがまちをおそいました。",
                "meaning_vi": "Cơn gió nổ đã tấn công thành phố.",
                "meaning_en": "The blast hit the city."
            }
        ]
    },
    {
        "kanji": "弾",
        "kun_reading": ["たま"],
        "on_reading": ["だん"],
        "han_viet": "ĐẠN",
        "meaning_vi": "đạn, viên đạn",
        "meaning_en": "bullet, shot",
        "radicals": "弓",
        "strokes": 7,
        "level": "N3",
        "examples": [
            {
                "example_text": "弾が壁に当たりました。",
                "furigana": "だんがかべにあたりました。",
                "meaning_vi": "Viên đạn đã bắn vào tường.",
                "meaning_en": "The bullet hit the wall."
            },
            {
                "example_text": "銃を使って弾を発射しました。",
                "furigana": "じゅうをつかってだんをはっしゃしました。",
                "meaning_vi": "Tôi đã bắn viên đạn bằng súng.",
                "meaning_en": "I fired a bullet with the gun."
            }
        ]
    },
    {
        "kanji": "積",
        "kun_reading": ["つむ", "つもる"],
        "on_reading": ["せき"],
        "han_viet": "TÍCH",
        "meaning_vi": "tích lũy, chất đống",
        "meaning_en": "accumulate, pile up",
        "radicals": "土",
        "strokes": 9,
        "level": "N4",
        "examples": [
            {
                "example_text": "雪が積もっています。",
                "furigana": "ゆきがつもっています。",
                "meaning_vi": "Tuyết đang tích lũy.",
                "meaning_en": "The snow is piling up."
            },
            {
                "example_text": "彼は仕事を積んでいます。",
                "furigana": "かれはしごとをつんでいます。",
                "meaning_vi": "Anh ấy đang tích lũy công việc.",
                "meaning_en": "He is accumulating work."
            }
        ]
    },
    {
        "kanji": "転",
        "kun_reading": ["ころぶ", "てん"],
        "on_reading": ["てん"],
        "han_viet": "CHUYỂN",
        "meaning_vi": "quay, xoay, chuyển động",
        "meaning_en": "turn, roll, transfer",
        "radicals": "車",
        "strokes": 9,
        "level": "N4",
        "examples": [
            {
                "example_text": "車が転がっています。",
                "furigana": "くるまがころがっています。",
                "meaning_vi": "Chiếc xe đang lăn.",
                "meaning_en": "The car is rolling."
            },
            {
                "example_text": "役職が転職しました。",
                "furigana": "やくしょくがてんしょくしました。",
                "meaning_vi": "Vị trí công việc đã chuyển sang một công việc khác.",
                "meaning_en": "The job position has been transferred."
            }
        ]
    },
    {
        "kanji": "急",
        "kun_reading": ["いそぐ"],
        "on_reading": ["きゅう"],
        "han_viet": "CẤP",
        "meaning_vi": "gấp, khẩn cấp",
        "meaning_en": "urgent, emergency",
        "radicals": "心",
        "strokes": 8,
        "level": "N4",
        "examples": [
            {
                "example_text": "急いでください。",
                "furigana": "いそいでください。",
                "meaning_vi": "Hãy nhanh lên.",
                "meaning_en": "Please hurry."
            },
            {
                "example_text": "急な仕事が入りました。",
                "furigana": "きゅうなしごとがはいりました。",
                "meaning_vi": "Một công việc khẩn cấp đã đến.",
                "meaning_en": "An urgent task came up."
            }
        ]
    },
    {
        "kanji": "動",
        "kun_reading": ["うごく", "どう"],
        "on_reading": ["どう"],
        "han_viet": "ĐỘNG",
        "meaning_vi": "chuyển động, hoạt động",
        "meaning_en": "move, action",
        "radicals": "力",
        "strokes": 7,
        "level": "N5",
        "examples": [
            {
                "example_text": "車が動いています。",
                "furigana": "くるまがうごいています。",
                "meaning_vi": "Chiếc xe đang di chuyển.",
                "meaning_en": "The car is moving."
            },
            {
                "example_text": "運動をしています。",
                "furigana": "うんどうをしています。",
                "meaning_vi": "Tôi đang tập thể dục.",
                "meaning_en": "I am doing exercise."
            }
        ]
    },
    // kanji bai 41 
    {
        "kanji": "呼",
        "kun_reading": ["よぶ"],
        "on_reading": ["こ"],
        "han_viet": "HÔ",
        "meaning_vi": "gọi",
        "meaning_en": "call, invite",
        "radicals": "口",
        "strokes": 8,
        "level": "N4",
        "examples": [
            {
                "example_text": "友達を呼びました。",
                "furigana": "ともだちをよびました。",
                "meaning_vi": "Tôi đã gọi bạn.",
                "meaning_en": "I called my friend."
            }
        ]
    },
    {
        "kanji": "取",
        "kun_reading": ["とる"],
        "on_reading": ["しゅ"],
        "han_viet": "THỦ",
        "meaning_vi": "lấy, cầm",
        "meaning_en": "take, get",
        "radicals": "耳",
        "strokes": 8,
        "level": "N4",
        "examples": [
            {
                "example_text": "本を取ってください。",
                "furigana": "ほんをとってください。",
                "meaning_vi": "Làm ơn lấy giúp tôi cuốn sách.",
                "meaning_en": "Please take the book."
            }
        ]
    },
    {
        "kanji": "替",
        "kun_reading": ["かえる", "かわる"],
        "on_reading": ["たい"],
        "han_viet": "THẾ",
        "meaning_vi": "thay thế",
        "meaning_en": "replace, exchange",
        "radicals": "日",
        "strokes": 12,
        "level": "N3",
        "examples": [
            {
                "example_text": "古い電池を新しいものに替えました。",
                "furigana": "ふるいでんちをあたらしいものにかえました。",
                "meaning_vi": "Tôi đã thay pin cũ bằng cái mới.",
                "meaning_en": "I replaced the old battery with a new one."
            }
        ]
    },
    {
        "kanji": "親",
        "kun_reading": ["おや", "したしい"],
        "on_reading": ["しん"],
        "han_viet": "THÂN",
        "meaning_vi": "cha mẹ, thân thiết",
        "meaning_en": "parent, intimate",
        "radicals": "見",
        "strokes": 16,
        "level": "N4",
        "examples": [
            {
                "example_text": "親に電話しました。",
                "furigana": "おやにでんわしました。",
                "meaning_vi": "Tôi đã gọi điện cho bố mẹ.",
                "meaning_en": "I called my parents."
            }
        ]
    },
    {
        "kanji": "祝",
        "kun_reading": ["いわう"],
        "on_reading": ["しゅく"],
        "han_viet": "CHÚC",
        "meaning_vi": "chúc mừng",
        "meaning_en": "celebrate, congratulate",
        "radicals": "示",
        "strokes": 9,
        "level": "N3",
        "examples": [
            {
                "example_text": "誕生日を祝います。",
                "furigana": "たんじょうびをいわいます。",
                "meaning_vi": "Tôi chúc mừng sinh nhật.",
                "meaning_en": "I celebrate the birthday."
            }
        ]
    },
    {
        "kanji": "玉",
        "kun_reading": ["たま"],
        "on_reading": ["ぎょく"],
        "han_viet": "NGỌC",
        "meaning_vi": "ngọc, quả cầu",
        "meaning_en": "jewel, ball",
        "radicals": "玉",
        "strokes": 5,
        "level": "N5",
        "examples": [
            {
                "example_text": "この玉はとても美しいです。",
                "furigana": "このたまはとてもうつくしいです。",
                "meaning_vi": "Viên ngọc này rất đẹp.",
                "meaning_en": "This jewel is very beautiful."
            }
        ]
    },
    {
        "kanji": "舞",
        "kun_reading": ["まう"],
        "on_reading": ["ぶ"],
        "han_viet": "VŨ",
        "meaning_vi": "nhảy múa",
        "meaning_en": "dance",
        "radicals": "舛",
        "strokes": 15,
        "level": "N3",
        "examples": [
            {
                "example_text": "彼女は舞を習っています。",
                "furigana": "かのじょはまいをならっています。",
                "meaning_vi": "Cô ấy đang học nhảy múa.",
                "meaning_en": "She is learning to dance."
            }
        ]
    },
    {
        "kanji": "興",
        "kun_reading": ["おこる", "おこす"],
        "on_reading": ["きょう", "こう"],
        "han_viet": "HƯNG",
        "meaning_vi": "hưng thịnh, hứng thú",
        "meaning_en": "prosper, interest",
        "radicals": "臼",
        "strokes": 16,
        "level": "N2",
        "examples": [
            {
                "example_text": "歴史に興味があります。",
                "furigana": "れきしにきょうみがあります。",
                "meaning_vi": "Tôi có hứng thú với lịch sử.",
                "meaning_en": "I am interested in history."
            }
        ]
    },
    {
        "kanji": "味",
        "kun_reading": ["あじ", "あじわう"],
        "on_reading": ["み"],
        "han_viet": "VỊ",
        "meaning_vi": "hương vị, thưởng thức",
        "meaning_en": "taste, savor",
        "radicals": "口",
        "strokes": 8,
        "level": "N4",
        "examples": [
            {
                "example_text": "この料理はいい味がします。",
                "furigana": "このりょうりはいいあじがします。",
                "meaning_vi": "Món ăn này có hương vị ngon.",
                "meaning_en": "This dish has a good taste."
            }
        ]
    },
    {
        "kanji": "預",
        "kun_reading": ["あずける", "あずかる"],
        "on_reading": ["よ"],
        "han_viet": "DỰ",
        "meaning_vi": "gửi, giữ hộ",
        "meaning_en": "deposit, entrust",
        "radicals": "頁",
        "strokes": 13,
        "level": "N3",
        "examples": [
            {
                "example_text": "銀行にお金を預けました。",
                "furigana": "ぎんこうにおかねをあずけました。",
                "meaning_vi": "Tôi đã gửi tiền vào ngân hàng.",
                "meaning_en": "I deposited money in the bank."
            }
        ]
    },
    {
        "kanji": "助",
        "kun_reading": ["たすける", "たすかる"],
        "on_reading": ["じょ"],
        "han_viet": "TRỢ",
        "meaning_vi": "giúp đỡ",
        "meaning_en": "help, assist",
        "radicals": "力",
        "strokes": 7,
        "level": "N4",
        "examples": [
            {
                "example_text": "彼は私を助けてくれました。",
                "furigana": "かれはわたしをたすけてくれました。",
                "meaning_vi": "Anh ấy đã giúp tôi.",
                "meaning_en": "He helped me."
            }
        ]
    },
    {
        "kanji": "昔",
        "kun_reading": ["むかし"],
        "on_reading": ["せき"],
        "han_viet": "TÍCH",
        "meaning_vi": "ngày xưa",
        "meaning_en": "long ago, past",
        "radicals": "日",
        "strokes": 8,
        "level": "N4",
        "examples": [
            {
                "example_text": "昔の話を聞きました。",
                "furigana": "むかしのはなしをききました。",
                "meaning_vi": "Tôi đã nghe một câu chuyện xưa.",
                "meaning_en": "I heard an old story."
            }
        ]
    },
    {
        "kanji": "城",
        "kun_reading": ["しろ"],
        "on_reading": ["じょう"],
        "han_viet": "THÀNH",
        "meaning_vi": "lâu đài, thành trì",
        "meaning_en": "castle, fortress",
        "radicals": "土",
        "strokes": 9,
        "level": "N3",
        "examples": [
            {
                "example_text": "大阪城を見に行きました。",
                "furigana": "おおさかじょうをみにいきました。",
                "meaning_vi": "Tôi đã đi xem lâu đài Osaka.",
                "meaning_en": "I went to see Osaka Castle."
            }
        ]
    },
    {
        "kanji": "姫",
        "kun_reading": ["ひめ"],
        "on_reading": ["き"],
        "han_viet": "CƠ",
        "meaning_vi": "công chúa",
        "meaning_en": "princess",
        "radicals": "女",
        "strokes": 10,
        "level": "N3",
        "examples": [
            {
                "example_text": "おとぎ話には姫がよく出てきます。",
                "furigana": "おとぎばなしにはひめがよくでてきます。",
                "meaning_vi": "Công chúa thường xuất hiện trong truyện cổ tích.",
                "meaning_en": "Princesses often appear in fairy tales."
            }
        ]
    },
    {
        "kanji": "暮",
        "kun_reading": ["くれる", "くらす"],
        "on_reading": ["ぼ"],
        "han_viet": "MỘ",
        "meaning_vi": "sinh sống, cuối ngày",
        "meaning_en": "live, end of the day",
        "radicals": "日",
        "strokes": 14,
        "level": "N3",
        "examples": [
            {
                "example_text": "日本で暮らしています。",
                "furigana": "にほんでくらしています。",
                "meaning_vi": "Tôi đang sống ở Nhật.",
                "meaning_en": "I live in Japan."
            }
        ]
    },
    {
        "kanji": "陸",
        "kun_reading": ["おか"],
        "on_reading": ["りく"],
        "han_viet": "LỤC",
        "meaning_vi": "đất liền",
        "meaning_en": "land",
        "radicals": "阜",
        "strokes": 11,
        "level": "N3",
        "examples": [
            {
                "example_text": "船は陸に到着しました。",
                "furigana": "ふねはりくにとうちゃくしました。",
                "meaning_vi": "Con tàu đã cập bến đất liền.",
                "meaning_en": "The ship arrived on land."
            }
        ]
    },
    {
        "kanji": "煙",
        "kun_reading": ["けむり", "けむる", "けむい"],
        "on_reading": ["えん"],
        "han_viet": "YÊN",
        "meaning_vi": "khói",
        "meaning_en": "smoke",
        "radicals": "火",
        "strokes": 13,
        "level": "N3",
        "examples": [
            {
                "example_text": "工場から煙が出ています。",
                "furigana": "こうじょうからけむりがでています。",
                "meaning_vi": "Khói đang bốc lên từ nhà máy.",
                "meaning_en": "Smoke is coming out from the factory."
            }
        ]
    },
    {
        "kanji": "真",
        "kun_reading": ["ま", "まこと"],
        "on_reading": ["しん"],
        "han_viet": "CHÂN",
        "meaning_vi": "chân thực, sự thật",
        "meaning_en": "true, reality",
        "radicals": "目",
        "strokes": 10,
        "level": "N4",
        "examples": [
            {
                "example_text": "彼の話は真実です。",
                "furigana": "かれのはなしはしんじつです。",
                "meaning_vi": "Câu chuyện của anh ấy là sự thật.",
                "meaning_en": "His story is true."
            }
        ]
    },
    {
        "kanji": "身",
        "kun_reading": ["み"],
        "on_reading": ["しん"],
        "han_viet": "THÂN",
        "meaning_vi": "cơ thể, bản thân",
        "meaning_en": "body, self",
        "radicals": "身",
        "strokes": 7,
        "level": "N4",
        "examples": [
            {
                "example_text": "健康な体を持つことは大切です。",
                "furigana": "けんこうなからだをもつことはたいせつです。",
                "meaning_vi": "Có một cơ thể khỏe mạnh là điều quan trọng.",
                "meaning_en": "Having a healthy body is important."
            }
        ]
    },
    {
        "kanji": "孫",
        "kun_reading": ["まご"],
        "on_reading": ["そん"],
        "han_viet": "TÔN",
        "meaning_vi": "cháu",
        "meaning_en": "grandchild",
        "radicals": "子",
        "strokes": 10,
        "level": "N3",
        "examples": [
            {
                "example_text": "祖母は孫が大好きです。",
                "furigana": "そぼはまごがだいすきです。",
                "meaning_vi": "Bà rất yêu thương cháu.",
                "meaning_en": "Grandmother loves her grandchild."
            },
            {
                "example_text": "孫と一緒に公園で遊びました。",
                "furigana": "まごといっしょにこうえんであそびました。",
                "meaning_vi": "Tôi đã chơi với cháu ở công viên.",
                "meaning_en": "I played with my grandchild in the park."
            }
        ]
    },
    {
        "kanji": "祖",
        "kun_reading": [],
        "on_reading": ["そ"],
        "han_viet": "TỔ",
        "meaning_vi": "tổ tiên",
        "meaning_en": "ancestor",
        "radicals": "示",
        "strokes": 9,
        "level": "N2",
        "examples": [
            {
                "example_text": "祖先を大切にしましょう。",
                "furigana": "そせんをたいせつにしましょう。",
                "meaning_vi": "Hãy trân trọng tổ tiên.",
                "meaning_en": "Let's cherish our ancestors."
            },
            {
                "example_text": "私の祖父は有名な学者でした。",
                "furigana": "わたしのそふはゆうめいながくしゃでした。",
                "meaning_vi": "Ông tôi là một học giả nổi tiếng.",
                "meaning_en": "My grandfather was a famous scholar."
            }
        ]
    },
    {
        "kanji": "袋",
        "kun_reading": ["ふくろ"],
        "on_reading": ["たい"],
        "han_viet": "ĐẠI",
        "meaning_vi": "túi, bao",
        "meaning_en": "bag, sack",
        "radicals": "衣",
        "strokes": 11,
        "level": "N3",
        "examples": [
            {
                "example_text": "ビニール袋をください。",
                "furigana": "ビニールぶくろをください。",
                "meaning_vi": "Hãy cho tôi một túi nilon.",
                "meaning_en": "Please give me a plastic bag."
            },
            {
                "example_text": "買い物袋を持っていますか？",
                "furigana": "かいものぶくろをもっていますか？",
                "meaning_vi": "Bạn có túi mua sắm không?",
                "meaning_en": "Do you have a shopping bag?"
            }
        ]
    },
    {
        "kanji": "絵",
        "kun_reading": ["え"],
        "on_reading": ["かい"],
        "han_viet": "HỘI",
        "meaning_vi": "tranh vẽ",
        "meaning_en": "picture, painting",
        "radicals": "糸",
        "strokes": 12,
        "level": "N4",
        "examples": [
            {
                "example_text": "彼女は美しい絵を描きます。",
                "furigana": "かのじょはうつくしいえをかきます。",
                "meaning_vi": "Cô ấy vẽ những bức tranh đẹp.",
                "meaning_en": "She draws beautiful pictures."
            },
            {
                "example_text": "子供たちは絵本を読むのが好きです。",
                "furigana": "こどもたちはえほんをよむのがすきです。",
                "meaning_vi": "Trẻ em thích đọc sách tranh.",
                "meaning_en": "Children love furigana picture books."
            }
        ]
    },
    {
        "kanji": "文",
        "kun_reading": ["ふみ"],
        "on_reading": ["ぶん", "もん"],
        "han_viet": "VĂN",
        "meaning_vi": "văn bản, câu văn",
        "meaning_en": "example_text, writing",
        "radicals": "文",
        "strokes": 4,
        "level": "N5",
        "examples": [
            {
                "example_text": "この文を読んでください。",
                "furigana": "このぶんをよんでください。",
                "meaning_vi": "Hãy đọc câu văn này.",
                "meaning_en": "Please read this example_text."
            },
            {
                "example_text": "日本語の文法を勉強しています。",
                "furigana": "にほんごのぶんぽうをべんきょうしています。",
                "meaning_vi": "Tôi đang học ngữ pháp tiếng Nhật.",
                "meaning_en": "I am studying Japanese grammar."
            }
        ]
    },
    {
        "kanji": "猿",
        "kun_reading": ["さる"],
        "on_reading": ["えん"],
        "han_viet": "VIÊN",
        "meaning_vi": "con khỉ",
        "meaning_en": "monkey",
        "radicals": "犬",
        "strokes": 13,
        "level": "N3",
        "examples": [
            {
                "example_text": "山に猿がいます。",
                "furigana": "やまにさるがいます。",
                "meaning_vi": "Có khỉ trên núi.",
                "meaning_en": "There are monkeys in the mountains."
            },
            {
                "example_text": "動物園で猿を見ました。",
                "furigana": "どうぶつえんでさるをみました。",
                "meaning_vi": "Tôi đã nhìn thấy khỉ ở sở thú.",
                "meaning_en": "I saw monkeys at the zoo."
            }
        ]
    },
    {
        "kanji": "情",
        "kun_reading": ["なさけ"],
        "on_reading": ["じょう"],
        "han_viet": "TÌNH",
        "meaning_vi": "cảm xúc, tình cảm",
        "meaning_en": "emotion, feeling",
        "radicals": "心",
        "strokes": 11,
        "level": "N3",
        "examples": [
            {
                "example_text": "彼は優しい情を持っています。",
                "furigana": "かれはやさしいじょうをもっています。",
                "meaning_vi": "Anh ấy có một tấm lòng nhân hậu.",
                "meaning_en": "He has a kind heart."
            },
            {
                "example_text": "友情は大切です。",
                "furigana": "ゆうじょうはたいせつです。",
                "meaning_vi": "Tình bạn rất quan trọng.",
                "meaning_en": "Friendship is important."
            }
        ]
    },
    {
        "kanji": "報",
        "kun_reading": ["むくいる"],
        "on_reading": ["ほう"],
        "han_viet": "BÁO",
        "meaning_vi": "thông báo, báo cáo",
        "meaning_en": "report, inform",
        "radicals": "言",
        "strokes": 12,
        "level": "N3",
        "examples": [
            {
                "example_text": "ニュースを報道します。",
                "furigana": "ニュースをほうどうします。",
                "meaning_vi": "Tôi đưa tin tức.",
                "meaning_en": "I report the news."
            },
            {
                "example_text": "今日の天気予報を見ましたか？",
                "furigana": "きょうのてんきよほうをみましたか？",
                "meaning_vi": "Bạn đã xem dự báo thời tiết hôm nay chưa?",
                "meaning_en": "Did you see today's weather forecast?"
            }
        ]
    },
    {
        "kanji": "申",
        "kun_reading": ["もうす"],
        "on_reading": ["しん"],
        "han_viet": "THÂN",
        "meaning_vi": "nói, trình bày",
        "meaning_en": "say, declare",
        "radicals": "田",
        "strokes": 5,
        "level": "N4",
        "examples": [
            {
                "example_text": "私は田中と申します。",
                "furigana": "わたしはたなかともうします。",
                "meaning_vi": "Tôi tên là Tanaka.",
                "meaning_en": "My name is Tanaka."
            },
            {
                "example_text": "申し訳ありません。",
                "furigana": "もうしわけありません。",
                "meaning_vi": "Tôi xin lỗi.",
                "meaning_en": "I sincerely apologize."
            }
        ]
    },
    {
        "kanji": "本",
        "kun_reading": ["もと"],
        "on_reading": ["ほん"],
        "han_viet": "BẢN",
        "meaning_vi": "sách, nguồn gốc",
        "meaning_en": "book, origin",
        "radicals": "木",
        "strokes": 5,
        "level": "N5",
        "examples": [
            {
                "example_text": "私は本を読みます。",
                "furigana": "わたしはほんをよみます。",
                "meaning_vi": "Tôi đọc sách.",
                "meaning_en": "I read books."
            },
            {
                "example_text": "この本はとても面白いです。",
                "furigana": "このほんはとてもおもしろいです。",
                "meaning_vi": "Cuốn sách này rất thú vị.",
                "meaning_en": "This book is very interesting."
            }
        ]
    },
    {
        "kanji": "当",
        "kun_reading": ["あたる", "あてる"],
        "on_reading": ["とう"],
        "han_viet": "ĐƯƠNG",
        "meaning_vi": "trúng, tương ứng",
        "meaning_en": "hit, apply",
        "radicals": "小",
        "strokes": 6,
        "level": "N3",
        "examples": [
            {
                "example_text": "宝くじが当たりました。",
                "furigana": "たからくじがあたりました。",
                "meaning_vi": "Tôi đã trúng xổ số.",
                "meaning_en": "I won the lottery."
            },
            {
                "example_text": "この答えは当たっていますか？",
                "furigana": "このこたえはあたっていますか？",
                "meaning_vi": "Câu trả lời này có đúng không?",
                "meaning_en": "Is this answer correct?"
            }
        ]
    },
    {
        "kanji": "靴",
        "kun_reading": ["くつ"],
        "on_reading": ["か"],
        "han_viet": "NGOA",
        "meaning_vi": "giày",
        "meaning_en": "shoes",
        "radicals": "革",
        "strokes": 13,
        "level": "N3",
        "examples": [
            {
                "example_text": "新しい靴を買いました。",
                "furigana": "あたらしいくつをかいました。",
                "meaning_vi": "Tôi đã mua một đôi giày mới.",
                "meaning_en": "I bought new shoes."
            },
            {
                "example_text": "この靴はとても履きやすいです。",
                "furigana": "このくつはとてもはきやすいです。",
                "meaning_vi": "Đôi giày này rất dễ đi.",
                "meaning_en": "These shoes are very comfortable to wear."
            }
        ]
    },
    {
        "kanji": "包",
        "kun_reading": ["つつむ"],
        "on_reading": ["ほう"],
        "han_viet": "BAO",
        "meaning_vi": "bao bọc, gói",
        "meaning_en": "wrap, pack",
        "radicals": "勹",
        "strokes": 5,
        "level": "N3",
        "examples": [
            {
                "example_text": "プレゼントをきれいに包みました。",
                "furigana": "プレゼントをきれいにつつみました。",
                "meaning_vi": "Tôi đã gói quà một cách đẹp đẽ.",
                "meaning_en": "I wrapped the present beautifully."
            }
        ]
    },
    {
        "kanji": "沸",
        "kun_reading": ["わく", "わかす"],
        "on_reading": ["ふつ"],
        "han_viet": "PHÍ",
        "meaning_vi": "sôi, đun sôi",
        "meaning_en": "boil, heat up",
        "radicals": "水",
        "strokes": 8,
        "level": "N3",
        "examples": [
            {
                "example_text": "お湯を沸かしてください。",
                "furigana": "おゆをわかしてください。",
                "meaning_vi": "Hãy đun nước sôi.",
                "meaning_en": "Please boil some water."
            }
        ]
    },
    {
        "kanji": "混",
        "kun_reading": ["まじる", "まぜる", "こむ"],
        "on_reading": ["こん"],
        "han_viet": "HỖN",
        "meaning_vi": "trộn, hỗn hợp",
        "meaning_en": "mix, blend",
        "radicals": "水",
        "strokes": 11,
        "level": "N3",
        "examples": [
            {
                "example_text": "スープに牛乳を混ぜました。",
                "furigana": "スープにぎゅうにゅうをまぜました。",
                "meaning_vi": "Tôi đã trộn sữa vào súp.",
                "meaning_en": "I mixed milk into the soup."
            }
        ]
    },
    {
        "kanji": "算",
        "kun_reading": ["そろ"],
        "on_reading": ["さん"],
        "han_viet": "TOÁN",
        "meaning_vi": "tính toán, toán học",
        "meaning_en": "calculate, mathematics",
        "radicals": "竹",
        "strokes": 10,
        "level": "N3",
        "examples": [
            {
                "example_text": "数学の計算が得意です。",
                "furigana": "すうがくのけいさんがとくいです。",
                "meaning_vi": "Tôi giỏi tính toán trong toán học.",
                "meaning_en": "I am good at mathematical calculations."
            }
        ]
    },
    {
        "kanji": "厚",
        "kun_reading": ["あつい"],
        "on_reading": ["こう"],
        "han_viet": "HẬU",
        "meaning_vi": "dày, hậu hĩnh",
        "meaning_en": "thick, kind",
        "radicals": "厂",
        "strokes": 9,
        "level": "N3",
        "examples": [
            {
                "example_text": "この本はとても厚いです。",
                "furigana": "このほんはとてもあついです。",
                "meaning_vi": "Cuốn sách này rất dày.",
                "meaning_en": "This book is very thick."
            }
        ]
    },
    {
        "kanji": "薄",
        "kun_reading": ["うすい"],
        "on_reading": ["はく"],
        "han_viet": "BẠC",
        "meaning_vi": "mỏng, nhạt",
        "meaning_en": "thin, weak (taste)",
        "radicals": "艸",
        "strokes": 16,
        "level": "N3",
        "examples": [
            {
                "example_text": "このコーヒーは少し薄いですね。",
                "furigana": "このコーヒーはすこしうすいですね。",
                "meaning_vi": "Cà phê này hơi nhạt nhỉ.",
                "meaning_en": "This coffee is a bit weak."
            }
        ]
    },
    {
        "kanji": "護",
        "kun_reading": [],
        "on_reading": ["ご"],
        "han_viet": "HỘ",
        "meaning_vi": "bảo vệ, bảo hộ",
        "meaning_en": "protect, safeguard",
        "radicals": "言",
        "strokes": 20,
        "level": "N2",
        "examples": [
            {
                "example_text": "環境を保護することが大切です。",
                "furigana": "かんきょうをほごすることがたいせつです。",
                "meaning_vi": "Bảo vệ môi trường là điều quan trọng.",
                "meaning_en": "Protecting the environment is important."
            }
        ]
    },
    {
        "kanji": "弁",
        "kun_reading": [],
        "on_reading": ["べん"],
        "han_viet": "BIỆN",
        "meaning_vi": "biện luận, biện hộ",
        "meaning_en": "dialect, speech",
        "radicals": "厶",
        "strokes": 5,
        "level": "N2",
        "examples": [
            {
                "example_text": "関西弁を話せますか？",
                "furigana": "かんさいべんをはなせますか？",
                "meaning_vi": "Bạn có thể nói tiếng Kansai không?",
                "meaning_en": "Can you speak Kansai dialect?"
            }
        ]
    },
    {
        "kanji": "士",
        "kun_reading": [],
        "on_reading": ["し"],
        "han_viet": "SĨ",
        "meaning_vi": "chiến sĩ, học giả",
        "meaning_en": "warrior, gentleman",
        "radicals": "士",
        "strokes": 3,
        "level": "N3",
        "examples": [
            {
                "example_text": "彼は弁護士です。",
                "furigana": "かれはべんごしです。",
                "meaning_vi": "Anh ấy là một luật sư.",
                "meaning_en": "He is a lawyer."
            }
        ]
    },
    {
        "kanji": "教",
        "kun_reading": ["おしえる", "おそわる"],
        "on_reading": ["きょう"],
        "han_viet": "GIÁO",
        "meaning_vi": "giáo dục, dạy",
        "meaning_en": "teach, education",
        "radicals": "攵",
        "strokes": 11,
        "level": "N5",
        "examples": [
            {
                "example_text": "先生が数学を教えます。",
                "furigana": "せんせいがすうがくをおしえます。",
                "meaning_vi": "Giáo viên dạy toán.",
                "meaning_en": "The teacher teaches mathematics."
            }
        ]
    },
    {
        "kanji": "律",
        "kun_reading": [],
        "on_reading": ["りつ", "りち"],
        "han_viet": "LUẬT",
        "meaning_vi": "luật lệ, quy tắc",
        "meaning_en": "law, regulation",
        "radicals": "彳",
        "strokes": 9,
        "level": "N2",
        "examples": [
            {
                "example_text": "新しい法律が施行されました。",
                "furigana": "あたらしいほうりつがしこうされました。",
                "meaning_vi": "Luật mới đã được thi hành.",
                "meaning_en": "A new law has been enacted."
            }
        ]
    },
    {
        "kanji": "戦",
        "kun_reading": ["たたかう", "いくさ"],
        "on_reading": ["せん"],
        "han_viet": "CHIẾN",
        "meaning_vi": "chiến tranh, chiến đấu",
        "meaning_en": "war, battle",
        "radicals": "戈",
        "strokes": 13,
        "level": "N3",
        "examples": [
            {
                "example_text": "彼らは勇敢に戦いました。",
                "furigana": "かれらはゆうかんにたたかいました。",
                "meaning_vi": "Họ đã chiến đấu dũng cảm.",
                "meaning_en": "They fought bravely."
            }
        ]
    },
    {
        "kanji": "争",
        "kun_reading": ["あらそう"],
        "on_reading": ["そう"],
        "han_viet": "TRANH",
        "meaning_vi": "tranh chấp, cạnh tranh",
        "meaning_en": "conflict, competition",
        "radicals": "爭",
        "strokes": 6,
        "level": "N3",
        "examples": [
            {
                "example_text": "兄弟でおもちゃを争っています。",
                "furigana": "きょうだいでおもちゃをあらそっています。",
                "meaning_vi": "Anh em đang tranh giành đồ chơi.",
                "meaning_en": "The siblings are fighting over a toy."
            }
        ]
    },
    {
        "kanji": "平",
        "kun_reading": ["たいら", "ひら"],
        "on_reading": ["へい", "びょう"],
        "han_viet": "BÌNH",
        "meaning_vi": "bình đẳng, hòa bình",
        "meaning_en": "flat, peace",
        "radicals": "干",
        "strokes": 5,
        "level": "N3",
        "examples": [
            {
                "example_text": "世界の平和を願っています。",
                "furigana": "せかいのへいわをねがっています。",
                "meaning_vi": "Tôi mong muốn hòa bình thế giới.",
                "meaning_en": "I wish for world peace."
            }
        ]
    },
    {
        "kanji": "和",
        "kun_reading": ["やわらぐ", "なごむ"],
        "on_reading": ["わ"],
        "han_viet": "HÒA",
        "meaning_vi": "hòa bình, hòa hợp",
        "meaning_en": "harmony, peace",
        "radicals": "口",
        "strokes": 8,
        "level": "N3",
        "examples": [
            {
                "example_text": "彼の言葉は人々の心を和らげました。",
                "furigana": "かれのことばはひとびとのこころをやわらげました。",
                "meaning_vi": "Lời nói của anh ấy đã làm dịu lòng mọi người.",
                "meaning_en": "His words calmed people's hearts."
            }
        ]
    },
    {
        "kanji": "的",
        "kun_reading": ["まと"],
        "on_reading": ["てき"],
        "han_viet": "ĐÍCH",
        "meaning_vi": "mang tính, đích nhắm",
        "meaning_en": "target, -like",
        "radicals": "白",
        "strokes": 8,
        "level": "N3",
        "examples": [
            {
                "example_text": "この意見は客観的です。",
                "furigana": "このいけんはきゃっかんてきです。",
                "meaning_vi": "Ý kiến này mang tính khách quan.",
                "meaning_en": "This opinion is objective."
            }
        ]
    },
    {
        "kanji": "全",
        "kun_reading": ["まったく", "すべて"],
        "on_reading": ["ぜん"],
        "han_viet": "TOÀN",
        "meaning_vi": "toàn bộ, hoàn toàn",
        "meaning_en": "whole, complete",
        "radicals": "入",
        "strokes": 6,
        "level": "N3",
        "examples": [
            {
                "example_text": "この映画は全世界で人気があります。",
                "furigana": "このえいがはぜんせかいでにんきがあります。",
                "meaning_vi": "Bộ phim này nổi tiếng trên toàn thế giới.",
                "meaning_en": "This movie is popular worldwide."
            }
        ]
    },
    {
        "kanji": "論",
        "kun_reading": [],
        "on_reading": ["ろん"],
        "han_viet": "LUẬN",
        "meaning_vi": "thảo luận, lý luận",
        "meaning_en": "argument, discussion",
        "radicals": "言",
        "strokes": 15,
        "level": "N2",
        "examples": [
            {
                "example_text": "彼の論文はとても興味深いです。",
                "furigana": "かれのろんぶんはとてもきょうみぶかいです。",
                "meaning_vi": "Luận văn của anh ấy rất thú vị.",
                "meaning_en": "His thesis is very interesting."
            }
        ]
    },
    {
        "kanji": "関",
        "kun_reading": ["せき", "かかわる"],
        "on_reading": ["かん"],
        "han_viet": "QUAN",
        "meaning_vi": "liên quan, quan hệ",
        "meaning_en": "related, connection",
        "radicals": "門",
        "strokes": 14,
        "level": "N3",
        "examples": [
            {
                "example_text": "私はこの事件に関係ありません。",
                "furigana": "わたしはこのじけんにかんけいありません。",
                "meaning_vi": "Tôi không liên quan đến vụ việc này.",
                "meaning_en": "I have nothing to do with this case."
            }
        ]
    },
    {
        "kanji": "係",
        "kun_reading": ["かかる", "かかり"],
        "on_reading": ["けい"],
        "han_viet": "HỆ",
        "meaning_vi": "liên hệ, phụ trách",
        "meaning_en": "relation, duty",
        "radicals": "人",
        "strokes": 9,
        "level": "N3",
        "examples": [
            {
                "example_text": "この問題は市役所の係の人に聞いてください。",
                "furigana": "このもんだいはしやくしょのかかりのひとにきいてください。",
                "meaning_vi": "Hãy hỏi người phụ trách ở ủy ban thành phố về vấn đề này.",
                "meaning_en": "Please ask the person in charge at the city office about this issue."
            }
        ]
    },
    {
        "kanji": "栓",
        "kun_reading": [],
        "on_reading": ["せん"],
        "han_viet": "XUYÊN",
        "meaning_vi": "nút, nắp",
        "meaning_en": "plug, stopper",
        "radicals": "木",
        "strokes": 10,
        "level": "N2",
        "examples": [
            {
                "example_text": "お風呂の栓を抜いてください。",
                "furigana": "おふろのせんをぬいてください。",
                "meaning_vi": "Hãy rút nút bồn tắm ra.",
                "meaning_en": "Please remove the bathtub plug."
            }
        ]
    },
    {
        "kanji": "抜",
        "kun_reading": ["ぬく", "ぬける"],
        "on_reading": ["ばつ"],
        "han_viet": "BẠT",
        "meaning_vi": "rút ra, nhổ",
        "meaning_en": "extract, pull out",
        "radicals": "手",
        "strokes": 7,
        "level": "N3",
        "examples": [
            {
                "example_text": "歯を抜きました。",
                "furigana": "はをぬきました。",
                "meaning_vi": "Tôi đã nhổ răng.",
                "meaning_en": "I had my tooth pulled out."
            }
        ]
    },
    {
        "kanji": "缶",
        "kun_reading": [],
        "on_reading": ["かん"],
        "han_viet": "PHẪU",
        "meaning_vi": "hộp kim loại, lon",
        "meaning_en": "can, tin",
        "radicals": "缶",
        "strokes": 6,
        "level": "N3",
        "examples": [
            {
                "example_text": "ビールの缶を捨てました。",
                "furigana": "ビールのかんをすてました。",
                "meaning_vi": "Tôi đã vứt lon bia đi.",
                "meaning_en": "I threw away the beer can."
            }
        ]
    },
    {
        "kanji": "詰",
        "kun_reading": ["つめる", "つまる"],
        "on_reading": ["きつ"],
        "han_viet": "CẬT",
        "meaning_vi": "nhét vào, chặt",
        "meaning_en": "stuff, packed",
        "radicals": "言",
        "strokes": 13,
        "level": "N3",
        "examples": [
            {
                "example_text": "荷物をスーツケースに詰めました。",
                "furigana": "にもつをスーツケースにつめました。",
                "meaning_vi": "Tôi đã nhét hành lý vào vali.",
                "meaning_en": "I packed my luggage into the suitcase."
            }
        ]
    },
    {
        "kanji": "温",
        "kun_reading": ["あたたかい", "あたためる"],
        "on_reading": ["おん"],
        "han_viet": "ÔN",
        "meaning_vi": "ấm áp, nhiệt độ",
        "meaning_en": "warm, temperature",
        "radicals": "水",
        "strokes": 12,
        "level": "N3",
        "examples": [
            {
                "example_text": "温かいスープを飲みました。",
                "furigana": "あたたかいスープをのみました。",
                "meaning_vi": "Tôi đã uống súp nóng.",
                "meaning_en": "I drank warm soup."
            }
        ]
    },
    {
        "kanji": "体",
        "kun_reading": ["からだ"],
        "on_reading": ["たい", "てい"],
        "han_viet": "THỂ",
        "meaning_vi": "cơ thể",
        "meaning_en": "body",
        "radicals": "人",
        "strokes": 7,
        "level": "N5",
        "examples": [
            {
                "example_text": "毎日運動すると体にいいです。",
                "furigana": "まいにちうんどうするとからだにいいです。",
                "meaning_vi": "Tập thể dục mỗi ngày tốt cho cơ thể.",
                "meaning_en": "Exercising every day is good for the body."
            }
        ]
    },
    {
        "kanji": "材",
        "kun_reading": [],
        "on_reading": ["ざい"],
        "han_viet": "TÀI",
        "meaning_vi": "vật liệu, tài nguyên",
        "meaning_en": "material, resources",
        "radicals": "木",
        "strokes": 7,
        "level": "N3",
        "examples": [
            {
                "example_text": "この家具は木材で作られています。",
                "furigana": "このかぐはもくざいでつくられています。",
                "meaning_vi": "Nội thất này được làm từ gỗ.",
                "meaning_en": "This furniture is made of wood."
            }
        ]
    },
    {
        "kanji": "料",
        "kun_reading": [],
        "on_reading": ["りょう"],
        "han_viet": "LIỆU",
        "meaning_vi": "vật liệu, phí",
        "meaning_en": "ingredient, fee",
        "radicals": "米",
        "strokes": 10,
        "level": "N3",
        "examples": [
            {
                "example_text": "料理を作るのが好きです。",
                "furigana": "りょうりをつくるのがすきです。",
                "meaning_vi": "Tôi thích nấu ăn.",
                "meaning_en": "I like cooking."
            }
        ]
    },
    {
        "kanji": "連",
        "kun_reading": ["つれる"],
        "on_reading": ["れん"],
        "han_viet": "LIÊN",
        "meaning_vi": "liên kết, dẫn theo",
        "meaning_en": "connect, lead",
        "radicals": "辶",
        "strokes": 10,
        "level": "N3",
        "examples": [
            {
                "example_text": "友達を連れて行きました。",
                "furigana": "ともだちをつれていきました。",
                "meaning_vi": "Tôi đã dẫn bạn đi.",
                "meaning_en": "I took my friend with me."
            }
        ]
    },
    {
        "kanji": "際",
        "kun_reading": ["きわ"],
        "on_reading": ["さい"],
        "han_viet": "TẾ",
        "meaning_vi": "dịp, lúc",
        "meaning_en": "occasion, time",
        "radicals": "阝",
        "strokes": 14,
        "level": "N3",
        "examples": [
            {
                "example_text": "旅行の際にパスポートを忘れないでください。",
                "furigana": "りょこうのさいにパスポートをわすれないでください。",
                "meaning_vi": "Khi đi du lịch, đừng quên hộ chiếu nhé.",
                "meaning_en": "When traveling, don’t forget your passport."
            }
        ]
    },
    {
        "kanji": "品",
        "kun_reading": ["しな"],
        "on_reading": ["ひん"],
        "han_viet": "PHẨM",
        "meaning_vi": "sản phẩm, hàng hóa",
        "meaning_en": "goods, products",
        "radicals": "口",
        "strokes": 9,
        "level": "N3",
        "examples": [
            {
                "example_text": "この店には色々な品物があります。",
                "furigana": "このみせにはいろいろなしなものがあります。",
                "meaning_vi": "Cửa hàng này có rất nhiều loại hàng hóa.",
                "meaning_en": "This shop has various products."
            }
        ]
    },
    {
        "kanji": "調",
        "kun_reading": ["しらべる", "ととのう"],
        "on_reading": ["ちょう"],
        "han_viet": "ĐIỀU",
        "meaning_vi": "điều tra, điều chỉnh",
        "meaning_en": "investigate, adjust",
        "radicals": "言",
        "strokes": 15,
        "level": "N3",
        "examples": [
            {
                "example_text": "問題を調べています。",
                "furigana": "もんだいをしらべています。",
                "meaning_vi": "Tôi đang điều tra vấn đề.",
                "meaning_en": "I am investigating the problem."
            }
        ]
    },
    {
        "kanji": "査",
        "kun_reading": [],
        "on_reading": ["さ"],
        "han_viet": "TRA",
        "meaning_vi": "kiểm tra, điều tra",
        "meaning_en": "inspect, investigate",
        "radicals": "木",
        "strokes": 9,
        "level": "N3",
        "examples": [
            {
                "example_text": "警察が事件を査察しました。",
                "furigana": "けいさつがじけんをささつしました。",
                "meaning_vi": "Cảnh sát đã điều tra vụ án.",
                "meaning_en": "The police investigated the case."
            }
        ]
    },
    {
        "kanji": "私",
        "han_viet": "TƯ",
        "meaning_vi": "Riêng tư, cá nhân",
        "on_reading": [
            "シ"
        ],
        "kun_reading": [
            "わたくし",
            "わたし"
        ],
        "level": "N4",
        "strokes": 7,
        "radicals": "私禾厶",
        "meaning_en": "private; I; me",
        "examples": [
            {
                "example_text": "警察が事件を査察しました。",
                "furigana": "けいさつがじけんをささつしました。",
                "meaning_vi": "Cảnh sát đã điều tra vụ án.",
                "meaning_en": "The police investigated the case."
            }
        ]
    },
    {
        "kanji": "私",
        "han_viet": "TƯ",
        "meaning_vi": "Riêng tư, cá nhân",
        "on_reading": [
            "シ"
        ],
        "kun_reading": [
            "わたくし",
            "わたし"
        ],
        "level": "N4",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Privacy, individual"
    },
    {
        "kanji": "人",
        "han_viet": "NHÂN",
        "meaning_vi": "Người",
        "on_reading": [
            "ジン",
            "ニン"
        ],
        "kun_reading": [
            "ひと"
        ],
        "level": "N5",
        "strokes": 2,
        "examples": [],
        "radicals": "",
        "meaning_en": "People"
    },
    {
        "kanji": "方",
        "han_viet": "PHƯƠNG",
        "meaning_vi": "Phương hướng",
        "on_reading": [
            "ホウ"
        ],
        "kun_reading": [
            "かた",
            "がた"
        ],
        "level": "N4",
        "strokes": 4,
        "examples": [],
        "radicals": "",
        "meaning_en": "Direction"
    },
    {
        "kanji": "行",
        "han_viet": "HÀNH",
        "meaning_vi": "Đi, thi hành, làm được",
        "on_reading": [
            "コウ",
            "ギョウ",
            "アン"
        ],
        "kun_reading": [
            "い-く",
            "ゆ-く",
            "おこな-う"
        ],
        "level": "N5",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Go, execute, do"
    },
    {
        "kanji": "者",
        "han_viet": "GIẢ",
        "meaning_vi": "Người, kẻ",
        "on_reading": [
            "シャ"
        ],
        "kun_reading": [
            "もの"
        ],
        "level": "N4",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "People, guys"
    },
    {
        "kanji": "院",
        "han_viet": "VIỆN",
        "meaning_vi": "Trụ sở, tòa nhà",
        "on_reading": [
            "イン"
        ],
        "kun_reading": [],
        "level": "N4",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Headquarters, building"
    },
    {
        "kanji": "電",
        "han_viet": "ĐIỆN",
        "meaning_vi": "Chớp, điện",
        "on_reading": [
            "デン"
        ],
        "kun_reading": [],
        "level": "N5",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Lightning, electricity"
    },
    {
        "kanji": "気",
        "han_viet": "KHÍ",
        "meaning_vi": "Không khí, khí chất; khí khái, khí phách",
        "on_reading": [
            "キ",
            "ケ"
        ],
        "kun_reading": [
            "いき"
        ],
        "level": "N5",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Atmosphere, temperament; The temperament, mettle"
    },
    {
        "kanji": "誰",
        "han_viet": "THÙY",
        "meaning_vi": "Ai, người nào đó",
        "on_reading": [
            "スイ"
        ],
        "kun_reading": [
            "だれ",
            "たれ",
            "た"
        ],
        "level": "N1",
        "strokes": 15,
        "examples": [],
        "radicals": "",
        "meaning_en": "Who, someone"
    },
    {
        "kanji": "歳",
        "han_viet": "TUẾ",
        "meaning_vi": "Năm, tuổi",
        "on_reading": [
            "セイ",
            "サイ"
        ],
        "kun_reading": [
            "とし",
            "とせ",
            "よわい"
        ],
        "level": "N2",
        "strokes": 13,
        "examples": [],
        "radicals": "",
        "meaning_en": "Year, age"
    },
    {
        "kanji": "何",
        "han_viet": "HÀ",
        "meaning_vi": "Sao, gì, cái gì",
        "on_reading": [
            "カ"
        ],
        "kun_reading": [
            "なに",
            "なん"
        ],
        "level": "N5",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Why, what, what"
    },
    {
        "kanji": "失",
        "han_viet": "THẤT",
        "meaning_vi": "Mất mát, sai lầm",
        "on_reading": [
            "シツ"
        ],
        "kun_reading": [
            "うしな-う",
            "う-せる"
        ],
        "level": "N3",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Loss, mistakes"
    },
    {
        "kanji": "礼",
        "han_viet": "LỄ",
        "meaning_vi": "Chào, nghi thức, lễ nghi",
        "on_reading": [
            "レイ",
            "ライ"
        ],
        "kun_reading": [],
        "level": "N3",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Hi, ritual, ritual"
    },
    {
        "kanji": "名",
        "han_viet": "DANH",
        "meaning_vi": "Tên, danh tiếng, nổi danh",
        "on_reading": [
            "メイ",
            "ミョウ"
        ],
        "kun_reading": [
            "な"
        ],
        "level": "N4",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Name, reputation, famous"
    },
    {
        "kanji": "前",
        "han_viet": "TIỀN",
        "meaning_vi": "Trước, trước đây, trước khi",
        "on_reading": [
            "ゼン"
        ],
        "kun_reading": [
            "まえ"
        ],
        "level": "N5",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Before, before, before"
    },
    {
        "kanji": "初",
        "han_viet": "SƠ",
        "meaning_vi": "Mới, trước, đầu tiên",
        "on_reading": [
            "ショ"
        ],
        "kun_reading": [
            "はじ-め",
            "はじ-めて",
            "はつ"
        ],
        "level": "N3",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "New, first, first"
    },
    {
        "kanji": "願",
        "han_viet": "NGUYỆN",
        "meaning_vi": "Cầu nguyện, mong muốn",
        "on_reading": [
            "ガン"
        ],
        "kun_reading": [
            "ねが-う",
            "ねが-い"
        ],
        "level": "N3",
        "strokes": 19,
        "examples": [],
        "radicals": "",
        "meaning_en": "Prayer, desire"
    },
    {
        "kanji": "来",
        "han_viet": "LAI, LÃI",
        "meaning_vi": "Sự tới,đến",
        "on_reading": [
            "ライ",
            "タイ"
        ],
        "kun_reading": [
            "く-る",
            "きた-る",
            "きた-す",
            "き-たす",
            "き-たる",
            "き",
            "こ"
        ],
        "level": "N5",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Arrival"
    },
    {
        "kanji": "韓",
        "han_viet": "HÀN",
        "meaning_vi": "Triều Tiên, Hàn Quốc (tên nước)",
        "on_reading": [
            "カン"
        ],
        "kun_reading": [
            "から",
            "いげた"
        ],
        "level": "N1",
        "strokes": 18,
        "examples": [],
        "radicals": "",
        "meaning_en": "North Korea, Korea (country name)"
    },
    {
        "kanji": "国",
        "han_viet": "QUỐC",
        "meaning_vi": "Đất nước, quốc gia, quê nhà",
        "on_reading": [
            "コク"
        ],
        "kun_reading": [
            "くに"
        ],
        "level": "N5",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Country, country, home"
    },
    {
        "kanji": "中",
        "han_viet": "TRUNG, TRÚNG",
        "meaning_vi": "Giữa, ở trong, suốt",
        "on_reading": [
            "チュウ",
            "ジュウ"
        ],
        "kun_reading": [
            "なか",
            "うち",
            "あた-る"
        ],
        "level": "N5",
        "strokes": 4,
        "examples": [],
        "radicals": "",
        "meaning_en": "Middle, inside, transparent"
    },
    {
        "kanji": "日",
        "han_viet": "NHẬT",
        "meaning_vi": "Ngày, mặt trời",
        "on_reading": [
            "ニチ",
            "ジツ"
        ],
        "kun_reading": [
            "ひ",
            "び",
            "か",
            "に"
        ],
        "level": "N5",
        "strokes": 4,
        "examples": [],
        "radicals": "",
        "meaning_en": "Date, sun"
    },
    {
        "kanji": "本",
        "han_viet": "BỔN, BẢN",
        "meaning_vi": "Gốc, rễ, cội nguồn của sự vật, sách",
        "on_reading": [
            "ホン"
        ],
        "kun_reading": [
            "もと"
        ],
        "level": "N5",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Root, roots, roots of things, books"
    },
    {
        "kanji": "辞",
        "han_viet": "TỪ",
        "meaning_vi": "Bày tỏ, từ chức",
        "on_reading": [
            "ジ"
        ],
        "kun_reading": [
            "や.める",
            "いな.む"
        ],
        "level": "N3",
        "strokes": 13,
        "examples": [],
        "radicals": "",
        "meaning_en": "Expressing, resigning"
    },
    {
        "kanji": "書",
        "han_viet": "THƯ",
        "meaning_vi": "Sách, ghi chép, viết",
        "on_reading": [
            "ショ"
        ],
        "kun_reading": [
            "か-く",
            "が-き",
            "がき"
        ],
        "level": "N5",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Books, records, writing"
    },
    {
        "kanji": "雑",
        "han_viet": "TẠP",
        "meaning_vi": "Tạp nham, lẫn lộn",
        "on_reading": [
            "ザツ",
            "ゾウ"
        ],
        "kun_reading": [
            "まじ-える",
            "まじ-る"
        ],
        "level": "N3",
        "strokes": 14,
        "examples": [],
        "radicals": "",
        "meaning_en": "Magic, confused"
    },
    {
        "kanji": "誌",
        "han_viet": "CHÍ",
        "meaning_vi": "Ghi chép, tạp chí",
        "on_reading": [
            "シ"
        ],
        "kun_reading": [],
        "level": "N2",
        "strokes": 14,
        "examples": [],
        "radicals": "",
        "meaning_en": "Records, magazines"
    },
    {
        "kanji": "新",
        "han_viet": "TÂN",
        "meaning_vi": "Mới, trong sạch",
        "on_reading": [
            "シン"
        ],
        "kun_reading": [
            "あたら-しい",
            "あら-た",
            "あら",
            "にい"
        ],
        "level": "N4",
        "strokes": 13,
        "examples": [],
        "radicals": "",
        "meaning_en": "New, clean"
    },
    {
        "kanji": "聞",
        "han_viet": "VĂN, VẤN",
        "meaning_vi": "Nghe thấy, hỏi",
        "on_reading": [
            "ブン",
            "モン"
        ],
        "kun_reading": [
            "き-く",
            "き-こえる"
        ],
        "level": "N4",
        "strokes": 14,
        "examples": [],
        "radicals": "",
        "meaning_en": "Hearing, asking"
    },
    {
        "kanji": "手",
        "han_viet": "THỦ",
        "meaning_vi": "Tay",
        "on_reading": [
            "シュ",
            "ズ"
        ],
        "kun_reading": [
            "て"
        ],
        "level": "N4",
        "strokes": 4,
        "examples": [],
        "radicals": "",
        "meaning_en": "Hand"
    },
    {
        "kanji": "帳",
        "han_viet": "TRƯỚNG",
        "meaning_vi": "Căng lên, dương lên (màn, rèm...)",
        "on_reading": [
            "チョウ"
        ],
        "kun_reading": [
            "とばり"
        ],
        "level": "N1",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Stretch, positive (curtains, curtains ...)"
    },
    {
        "kanji": "詞",
        "han_viet": "TỪ",
        "meaning_vi": "Lời văn, từ",
        "on_reading": [
            "シ"
        ],
        "kun_reading": [],
        "level": "N2",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Words, from"
    },
    {
        "kanji": "鉛",
        "han_viet": "DUYÊN, DIÊN",
        "meaning_vi": "Chì",
        "on_reading": [
            "エン"
        ],
        "kun_reading": [
            "なまり"
        ],
        "level": "N1",
        "strokes": 13,
        "examples": [],
        "radicals": "",
        "meaning_en": "Lead"
    },
    {
        "kanji": "筆",
        "han_viet": "BÚT",
        "meaning_vi": "Cái bút",
        "on_reading": [
            "ヒツ"
        ],
        "kun_reading": [
            "ふで"
        ],
        "level": "N2",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Pen"
    },
    {
        "kanji": "時",
        "han_viet": "THÌ, THỜI",
        "meaning_vi": "Thời điểm, thời gian",
        "on_reading": [
            "ジ"
        ],
        "kun_reading": [
            "とき",
            "どき"
        ],
        "level": "N5",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Time, time"
    },
    {
        "kanji": "計",
        "han_viet": "KẾ, KÊ",
        "meaning_vi": "Kế sách, đo lường",
        "on_reading": [
            "ケイ"
        ],
        "kun_reading": [
            "はか-る",
            "はか-らう"
        ],
        "level": "N4",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Plan, measure"
    },
    {
        "kanji": "傘",
        "han_viet": "TÁN, TẢN",
        "meaning_vi": "Cái ô, cái dù",
        "on_reading": [
            "サン"
        ],
        "kun_reading": [
            "かさ"
        ],
        "level": "N1",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Umbrella, umbrella"
    },
    {
        "kanji": "自",
        "han_viet": "TỰ",
        "meaning_vi": "Tự mình, chính mình",
        "on_reading": [
            "ジ",
            "シ"
        ],
        "kun_reading": [
            "みずか-ら",
            "おの-ずから",
            "おの-ずと"
        ],
        "level": "N4",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Yourself, yourself"
    },
    {
        "kanji": "動",
        "han_viet": "ĐỘNG",
        "meaning_vi": "Động đậy, cử động, hoạt động",
        "on_reading": [
            "ドウ"
        ],
        "kun_reading": [
            "うご-く",
            "うご-かす"
        ],
        "level": "N4",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Move, move, operate"
    },
    {
        "kanji": "車",
        "han_viet": "XA",
        "meaning_vi": "Chiếc xe",
        "on_reading": [
            "シャ"
        ],
        "kun_reading": [
            "くるま"
        ],
        "level": "N5",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Car"
    },
    {
        "kanji": "机",
        "han_viet": "KỶ",
        "meaning_vi": "Cái bàn",
        "on_reading": [
            "キ"
        ],
        "kun_reading": [
            "つくえ"
        ],
        "level": "N2",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Table"
    },
    {
        "kanji": "英",
        "han_viet": "ANH",
        "meaning_vi": "Anh hùng, nước Anh",
        "on_reading": [
            "エイ"
        ],
        "kun_reading": [
            "はなぶさ"
        ],
        "level": "N4",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Hero, England"
    },
    {
        "kanji": "語",
        "han_viet": "NGỮ",
        "meaning_vi": "Ngôn ngữ, lời lẽ",
        "on_reading": [
            "ゴ"
        ],
        "kun_reading": [
            "かた-る",
            "かた-らう"
        ],
        "level": "N5",
        "strokes": 14,
        "examples": [],
        "radicals": "",
        "meaning_en": "Language, words"
    },
    {
        "kanji": "違",
        "han_viet": "VI",
        "meaning_vi": "Sai, khác biệt",
        "on_reading": [
            "イ"
        ],
        "kun_reading": [
            "ちが-う",
            "ちが-い",
            "ちが-える",
            "たが-う",
            "たが-える"
        ],
        "level": "N2",
        "strokes": 13,
        "examples": [],
        "radicals": "",
        "meaning_en": "False, difference"
    },
    {
        "kanji": "持",
        "han_viet": "TRÌ",
        "meaning_vi": "Cầm, giữ, nắm",
        "on_reading": [
            "ジ"
        ],
        "kun_reading": [
            "も-つ",
            "も-ち",
            "も-てる"
        ],
        "level": "N4",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Hold, hold, grasp"
    },
    {
        "kanji": "世",
        "han_viet": "THẾ",
        "meaning_vi": "Thế hệ, xã hội, thế giới",
        "on_reading": [
            "セイ",
            "セ",
            "ソウ"
        ],
        "kun_reading": [
            "よ",
            "さん",
            "じゅう"
        ],
        "level": "N4",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Generation, society, world"
    },
    {
        "kanji": "話",
        "han_viet": "THOẠI",
        "meaning_vi": "Lời nói, cuộc trò chuyện",
        "on_reading": [
            "ワ"
        ],
        "kun_reading": [
            "はな-す",
            "はな"
        ],
        "level": "N5",
        "strokes": 13,
        "examples": [],
        "radicals": "",
        "meaning_en": "Words, conversations"
    },
    {
        "kanji": "室",
        "han_viet": "THẤT",
        "meaning_vi": "Phòng, gian phòng",
        "on_reading": [
            "シツ"
        ],
        "kun_reading": [
            "むろ"
        ],
        "level": "N4",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Room, room"
    },
    {
        "kanji": "食",
        "han_viet": "THỰC",
        "meaning_vi": "Ăn",
        "on_reading": [
            "ショク",
            "ジキ"
        ],
        "kun_reading": [
            "く-う",
            "く-らう",
            "た-べる",
            "は-む"
        ],
        "level": "N5",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Eat"
    },
    {
        "kanji": "堂",
        "han_viet": "ĐƯỜNG",
        "meaning_vi": "Gian nhà chính giữa, nhà chính",
        "on_reading": [
            "ドウ"
        ],
        "kun_reading": [],
        "level": "N4",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "The middle house, the main house"
    },
    {
        "kanji": "事",
        "han_viet": "SỰ",
        "meaning_vi": "Việc, công việc, chức vụ",
        "on_reading": [
            "ジ",
            "ズ"
        ],
        "kun_reading": [
            "こと",
            "つか-う",
            "つか-える"
        ],
        "level": "N4",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Work, work, position"
    },
    {
        "kanji": "務",
        "han_viet": "VỤ",
        "meaning_vi": "Chức vụ, công tác",
        "on_reading": [
            "ム"
        ],
        "kun_reading": [
            "つと-める"
        ],
        "level": "N3",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Position, work"
    },
    {
        "kanji": "所",
        "han_viet": "SỞ",
        "meaning_vi": "Nơi, chốn",
        "on_reading": [
            "ショ"
        ],
        "kun_reading": [
            "ところ",
            "どころ",
            "とこ"
        ],
        "level": "N4",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Place, place"
    },
    {
        "kanji": "議",
        "han_viet": "NGHỊ",
        "meaning_vi": "Hội nghị",
        "on_reading": [
            "ギ"
        ],
        "kun_reading": [],
        "level": "N3",
        "strokes": 20,
        "examples": [],
        "radicals": "",
        "meaning_en": "Conference"
    },
    {
        "kanji": "受",
        "han_viet": "THỤ",
        "meaning_vi": "Tiếp nhận",
        "on_reading": [
            "ジュ"
        ],
        "kun_reading": [
            "う-ける",
            "う-かる"
        ],
        "level": "N3",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Accept"
    },
    {
        "kanji": "付",
        "han_viet": "PHÓ",
        "meaning_vi": "Thêm vào, gắn vào",
        "on_reading": [
            "フ"
        ],
        "kun_reading": [
            "つ-く",
            "づ-く",
            "つ-ける",
            "づ-ける"
        ],
        "level": "N3",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Add, attach to"
    },
    {
        "kanji": "部",
        "han_viet": "BỘ",
        "meaning_vi": "Bộ phận",
        "on_reading": [
            "ブ"
        ],
        "kun_reading": [],
        "level": "N3",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Part"
    },
    {
        "kanji": "屋",
        "han_viet": "ỐC",
        "meaning_vi": "Mái nhà, nóc nhà, nhà ở, cửa hàng",
        "on_reading": [
            "オク"
        ],
        "kun_reading": [
            "や"
        ],
        "level": "N4",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Roof, roof, house, shop"
    },
    {
        "kanji": "洗",
        "han_viet": "TIỂN, TẨY",
        "meaning_vi": "Giặt, rửa",
        "on_reading": [
            "セン"
        ],
        "kun_reading": [
            "あら-う"
        ],
        "level": "N3",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Washing, washing"
    },
    {
        "kanji": "階",
        "han_viet": "GIAI",
        "meaning_vi": "Bậc, tầng lầu",
        "on_reading": [
            "カイ"
        ],
        "kun_reading": [
            "きざはし"
        ],
        "level": "N2",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Steps, floors"
    },
    {
        "kanji": "段",
        "han_viet": "ĐOẠN",
        "meaning_vi": "Bậc thang, nấc, giai đoạn",
        "on_reading": [
            "ダン",
            "タン"
        ],
        "kun_reading": [],
        "level": "N2",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Steps, hiccups, phase"
    },
    {
        "kanji": "靴",
        "han_viet": "NGOA",
        "meaning_vi": "Giày",
        "on_reading": [
            "カ"
        ],
        "kun_reading": [
            "くつ"
        ],
        "level": "N2",
        "strokes": 13,
        "examples": [],
        "radicals": "",
        "meaning_en": "Shoe"
    },
    {
        "kanji": "売",
        "han_viet": "MẠI",
        "meaning_vi": "Thương mại, việc bán",
        "on_reading": [
            "バイ"
        ],
        "kun_reading": [
            "うう-る",
            "う-れる"
        ],
        "level": "N4",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Trade, sale"
    },
    {
        "kanji": "場",
        "han_viet": "TRÀNG, TRƯỜNG",
        "meaning_vi": "Địa điểm, nơi, chốn",
        "on_reading": [
            "ジョウ",
            "チョウ"
        ],
        "kun_reading": [
            "ば"
        ],
        "level": "N4",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Location, place, place"
    },
    {
        "kanji": "地",
        "han_viet": "ĐỊA",
        "meaning_vi": "Đất, địa hình",
        "on_reading": [
            "チ",
            "ジ"
        ],
        "kun_reading": [],
        "level": "N4",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Land, terrain"
    },
    {
        "kanji": "下",
        "han_viet": "HẠ, HÁ",
        "meaning_vi": "Phía dưới, bên dưới, hạ lệnh, ra khơi",
        "on_reading": [
            "カ",
            "ゲ"
        ],
        "kun_reading": [
            "した",
            "しも",
            "もと",
            "さ-げる",
            "くだ-る",
            "くだ-す",
            "くだ-さる",
            "お-ろす",
            "お-りる"
        ],
        "level": "N5",
        "strokes": 3,
        "examples": [],
        "radicals": "",
        "meaning_en": "Below, below, order, set sail"
    },
    {
        "kanji": "円",
        "han_viet": "VIÊN",
        "meaning_vi": "Đồng yên, tròn",
        "on_reading": [
            "エン"
        ],
        "kun_reading": [
            "まる-い",
            "まる",
            "まど",
            "まど-か",
            "まろ-やか"
        ],
        "level": "N5",
        "strokes": 4,
        "examples": [],
        "radicals": "",
        "meaning_en": "Yen, round"
    },
    {
        "kanji": "百",
        "han_viet": "BÁCH, MẠCH",
        "meaning_vi": "Trăm, một trăm",
        "on_reading": [
            "ヒャク",
            "ビャク"
        ],
        "kun_reading": [
            "もも"
        ],
        "level": "N5",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Hundred, one hundred"
    },
    {
        "kanji": "千",
        "han_viet": "THIÊN",
        "meaning_vi": "Nghìn, một nghìn",
        "on_reading": [
            "セン"
        ],
        "kun_reading": [
            "ち"
        ],
        "level": "N5",
        "strokes": 3,
        "examples": [],
        "radicals": "",
        "meaning_en": "Thousand, one thousand"
    },
    {
        "kanji": "万",
        "han_viet": "VẠN, MẶC",
        "meaning_vi": "Mười nghìn, một vạn, nhiều",
        "on_reading": [
            "マン",
            "バン"
        ],
        "kun_reading": [
            "よろず"
        ],
        "level": "N5",
        "strokes": 3,
        "examples": [],
        "radicals": "",
        "meaning_en": "Ten thousand, a thousand, many"
    },
    {
        "kanji": "見",
        "han_viet": "KIẾN",
        "meaning_vi": "Trông thấy, nhìn",
        "on_reading": [
            "ケン"
        ],
        "kun_reading": [
            "み-る",
            "み-える",
            "み-せる"
        ],
        "level": "N5",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "See, look"
    },
    {
        "kanji": "阪",
        "han_viet": "PHẢN",
        "meaning_vi": "Dốc, đồi",
        "on_reading": [
            "ハン"
        ],
        "kun_reading": [
            "さか"
        ],
        "level": "N3",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Slope, hill"
    },
    {
        "kanji": "寝",
        "han_viet": "TẨM",
        "meaning_vi": "Ngủ, lăng mộ",
        "on_reading": [
            "シン"
        ],
        "kun_reading": [
            "ね-る",
            "ね-かす",
            "い-ぬ、 みたまや、 や-める"
        ],
        "level": "N2",
        "strokes": 13,
        "examples": [],
        "radicals": "",
        "meaning_en": "Sleep, tomb"
    },
    {
        "kanji": "働",
        "han_viet": "ĐỘNG",
        "meaning_vi": "Làm việc",
        "on_reading": [
            "ドウ",
            "リュク",
            "リキ",
            "ロク",
            "リョク"
        ],
        "kun_reading": [
            "はたら-く"
        ],
        "level": "N3",
        "strokes": 13,
        "examples": [],
        "radicals": "",
        "meaning_en": "Work"
    },
    {
        "kanji": "休",
        "han_viet": "HƯU",
        "meaning_vi": "Nghỉ, nghỉ ngơi",
        "on_reading": [
            "キュウ"
        ],
        "kun_reading": [
            "やす-む",
            "やす-まる",
            "やす-める"
        ],
        "level": "N5",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Rest, rest"
    },
    {
        "kanji": "勉",
        "han_viet": "MIỄN",
        "meaning_vi": "Cố sức, cố gắng, siêng năng",
        "on_reading": [
            "ベン"
        ],
        "kun_reading": [
            "つと-める"
        ],
        "level": "N4",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Try hard, try, diligently"
    },
    {
        "kanji": "強",
        "han_viet": "CƯỜNG, CƯỠNG",
        "meaning_vi": "Mạnh, cưỡng lại",
        "on_reading": [
            "キョウ",
            "ゴウ"
        ],
        "kun_reading": [
            "つよ-い",
            "つよ-まる",
            "つよ-める",
            "し-いる",
            "こわ-い"
        ],
        "level": "N4",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Strong, resisting"
    },
    {
        "kanji": "終",
        "han_viet": "CHUNG",
        "meaning_vi": "Chấm dứt, kết thúc",
        "on_reading": [
            "シュウ"
        ],
        "kun_reading": [
            "お-わる",
            "お-わる",
            "おわ-る",
            "お-える",
            "つい",
            "つい-に"
        ],
        "level": "N4",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "End, end"
    },
    {
        "kanji": "郵",
        "han_viet": "BƯU",
        "meaning_vi": "Bưu điện, thư tín",
        "on_reading": [
            "ユウ"
        ],
        "kun_reading": [],
        "level": "N2",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Post office, mail"
    },
    {
        "kanji": "便",
        "han_viet": "TIỆN",
        "meaning_vi": "Sự thuận tiện, thuận lợi",
        "on_reading": [
            "ベン",
            "ビン"
        ],
        "kun_reading": [
            "たよ-り"
        ],
        "level": "N3",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Convenience, convenience"
    },
    {
        "kanji": "局",
        "han_viet": "CỤC",
        "meaning_vi": "Cục, ủy ban, bộ",
        "on_reading": [
            "つぼね"
        ],
        "kun_reading": [
            "キョク"
        ],
        "level": "N3",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Department, Commission, Ministry"
    },
    {
        "kanji": "図",
        "han_viet": "ĐỒ",
        "meaning_vi": "Bản đồ, bức vẽ",
        "on_reading": [
            "ズ",
            "ト"
        ],
        "kun_reading": [
            "え",
            "はか-る"
        ],
        "level": "N4",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Map, drawing"
    },
    {
        "kanji": "館",
        "han_viet": "QUÁN",
        "meaning_vi": "Quán trọ",
        "on_reading": [
            "カン"
        ],
        "kun_reading": [
            "やかた",
            "たて"
        ],
        "level": "N4",
        "strokes": 16,
        "examples": [],
        "radicals": "",
        "meaning_en": "Inn"
    },
    {
        "kanji": "美",
        "han_viet": "MĨ",
        "meaning_vi": "Đẹp, yêu kiều",
        "on_reading": [
            "ビ",
            "ミ"
        ],
        "kun_reading": [
            "うつく-しい"
        ],
        "level": "N3",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Beautiful, lovely"
    },
    {
        "kanji": "術",
        "han_viet": "THUẬT",
        "meaning_vi": "Kĩ thuật, nghệ thuật",
        "on_reading": [
            "ジュツ"
        ],
        "kun_reading": [
            "すべ"
        ],
        "level": "N3",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Technical, art"
    },
    {
        "kanji": "番",
        "han_viet": "PHIÊN",
        "meaning_vi": "Lần lượt, số thứ tự",
        "on_reading": [
            "バン"
        ],
        "kun_reading": [
            "つが-い"
        ],
        "level": "N3",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "In turn, order number"
    },
    {
        "kanji": "号",
        "han_viet": "HIỆU",
        "meaning_vi": "Số, dấu hiệu",
        "on_reading": [
            "ゴウ"
        ],
        "kun_reading": [
            "さけ-ぶ",
            "よびな"
        ],
        "level": "N3",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Number, signs"
    },
    {
        "kanji": "今",
        "han_viet": "KIM",
        "meaning_vi": "Nay, hiện nay, bây giờ",
        "on_reading": [
            "コン",
            "キン"
        ],
        "kun_reading": [
            "いま"
        ],
        "level": "N5",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Now, now, now"
    },
    {
        "kanji": "午",
        "han_viet": "NGỌ",
        "meaning_vi": "Giữa trưa, chi Ngọ",
        "on_reading": [
            "ゴ"
        ],
        "kun_reading": [
            "うま"
        ],
        "level": "N5",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "At noon, Chi Ngo"
    },
    {
        "kanji": "後",
        "han_viet": "HẬU, HẤU",
        "meaning_vi": "Sau, đằng sau",
        "on_reading": [
            "ゴ",
            "コウ"
        ],
        "kun_reading": [
            "のち",
            "うし-ろ",
            "うしろ",
            "あと"
        ],
        "level": "N5",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "After, behind"
    },
    {
        "kanji": "朝",
        "han_viet": "TRIÊU, TRIỀU",
        "meaning_vi": "Sớm, sáng, buổi sáng, triều đại, Bắc Hàn",
        "on_reading": [
            "チョウ"
        ],
        "kun_reading": [
            "あさ"
        ],
        "level": "N4",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Early, morning, morning, dynasty, North Korea"
    },
    {
        "kanji": "昼",
        "han_viet": "TRÚ",
        "meaning_vi": "Ban trưa, buổi trưa",
        "on_reading": [
            "チュウ"
        ],
        "kun_reading": [
            "ひる"
        ],
        "level": "N4",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "At noon, noon"
    },
    {
        "kanji": "晩",
        "han_viet": "VÃN",
        "meaning_vi": "Tối, buổi tối",
        "on_reading": [
            "バン"
        ],
        "kun_reading": [],
        "level": "N5",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Evening, evening"
    },
    {
        "kanji": "夜",
        "han_viet": "DẠ",
        "meaning_vi": "Ban đêm",
        "on_reading": [
            "ヤ"
        ],
        "kun_reading": [
            "よ",
            "よる"
        ],
        "level": "N4",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Night"
    },
    {
        "kanji": "明",
        "han_viet": "MINH",
        "meaning_vi": "Sáng, ánh sáng",
        "on_reading": [
            "メイ",
            "ミョウ",
            "ミン"
        ],
        "kun_reading": [
            "あ-かり",
            "あか-るい",
            "あか-るむ",
            "あか-らむ",
            "あき-らか",
            "あ-ける",
            "あ-け",
            "あ-く",
            "あ-くる",
            "あ-かす"
        ],
        "level": "N4",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Light, light"
    },
    {
        "kanji": "毎",
        "han_viet": "MỖI",
        "meaning_vi": "Mỗi, hàng, thường xuyên",
        "on_reading": [
            "マイ"
        ],
        "kun_reading": [
            "ごと",
            "ごと-に"
        ],
        "level": "N5",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Each, goods, often"
    },
    {
        "kanji": "変",
        "han_viet": "BIẾN",
        "meaning_vi": "Kỳ lạ, thay đổi",
        "on_reading": [
            "ヘン"
        ],
        "kun_reading": [
            "か-わる",
            "か-わり",
            "か-える"
        ],
        "level": "N3",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Strange, change"
    },
    {
        "kanji": "線",
        "han_viet": "TUYẾN",
        "meaning_vi": "Đường, dây",
        "on_reading": [
            "セン"
        ],
        "kun_reading": [
            "すじ"
        ],
        "level": "N3",
        "strokes": 15,
        "examples": [],
        "radicals": "",
        "meaning_en": "Line"
    },
    {
        "kanji": "帰",
        "han_viet": "QUY",
        "meaning_vi": "Quay lại, trở về",
        "on_reading": [
            "キ"
        ],
        "kun_reading": [
            "かえ-る",
            "かえ-す",
            "おく-る",
            "とつ-ぐ"
        ],
        "level": "N4",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Back, return"
    },
    {
        "kanji": "校",
        "han_viet": "GIÁO, HIỆU",
        "meaning_vi": "Trường học, dấu hiệu",
        "on_reading": [
            "コウ",
            "キョウ"
        ],
        "kun_reading": [],
        "level": "N5",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Schools, signs"
    },
    {
        "kanji": "駅",
        "han_viet": "DỊCH",
        "meaning_vi": "Ga, ga tàu",
        "on_reading": [
            "エキ"
        ],
        "kun_reading": [],
        "level": "N4",
        "strokes": 14,
        "examples": [],
        "radicals": "",
        "meaning_en": "Station, train station"
    },
    {
        "kanji": "飛",
        "han_viet": "PHI",
        "meaning_vi": "Bay",
        "on_reading": [
            "ヒ"
        ],
        "kun_reading": [
            "と-ぶ",
            "と-ばす"
        ],
        "level": "N3",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Fly"
    },
    {
        "kanji": "機",
        "han_viet": "CƠ",
        "meaning_vi": "Cơ hội, cơ khí, máy móc",
        "on_reading": [
            "キ"
        ],
        "kun_reading": [
            "はた"
        ],
        "level": "N3",
        "strokes": 16,
        "examples": [],
        "radicals": "",
        "meaning_en": "Opportunities, mechanics, machinery"
    },
    {
        "kanji": "船",
        "han_viet": "THUYỀN",
        "meaning_vi": "Cái thuyền",
        "on_reading": [
            "セン"
        ],
        "kun_reading": [
            "ふね",
            "ふな-"
        ],
        "level": "N3",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Boat"
    },
    {
        "kanji": "鉄",
        "han_viet": "THIẾT",
        "meaning_vi": "Sắt",
        "on_reading": [
            "テツ"
        ],
        "kun_reading": [
            "くろがね"
        ],
        "level": "N2",
        "strokes": 13,
        "examples": [],
        "radicals": "",
        "meaning_en": "Iron"
    },
    {
        "kanji": "幹",
        "han_viet": "CÁN, CAN",
        "meaning_vi": "Đảm đương, phần chính",
        "on_reading": [
            "カン"
        ],
        "kun_reading": [
            "みき"
        ],
        "level": "N1",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Take on the main part"
    },
    {
        "kanji": "転",
        "han_viet": "CHUYỂN",
        "meaning_vi": "Chuyển động, quay vòng",
        "on_reading": [
            "テン"
        ],
        "kun_reading": [
            "ころ-がる",
            "ころ-げる",
            "ころ-がす",
            "ころ-ぶ",
            "まろ-ぶ",
            "うたた",
            "うつ-る",
            "くる-めく"
        ],
        "level": "N4",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Motion, rotation"
    },
    {
        "kanji": "歩",
        "han_viet": "BỘ",
        "meaning_vi": "Đi bộ, bước",
        "on_reading": [
            "ホ",
            "ブ",
            "フ"
        ],
        "kun_reading": [
            "あるく",
            "あゆ-む"
        ],
        "level": "N4",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Walk, step"
    },
    {
        "kanji": "友",
        "han_viet": "HỮU",
        "meaning_vi": "Bạn",
        "on_reading": [
            "ユウ"
        ],
        "kun_reading": [
            "とも"
        ],
        "level": "N5",
        "strokes": 4,
        "examples": [],
        "radicals": "",
        "meaning_en": "Friend"
    },
    {
        "kanji": "達",
        "han_viet": "ĐẠT",
        "meaning_vi": "Đi đến, đạt được",
        "on_reading": [
            "タツ",
            "ダ"
        ],
        "kun_reading": [
            "-たち"
        ],
        "level": "N3",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Go to, achieve"
    },
    {
        "kanji": "彼",
        "han_viet": "BỈ",
        "meaning_vi": "Bên kia, kẻ khác, đối phương",
        "on_reading": [
            "ヒ"
        ],
        "kun_reading": [
            "かれ",
            "かの"
        ],
        "level": "N2",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "On the other side, others, the opponent"
    },
    {
        "kanji": "女",
        "han_viet": "NỮ",
        "meaning_vi": "Nữ giới, con gái, đàn bà",
        "on_reading": [
            "ジョ",
            "ニョ",
            "ニョウ"
        ],
        "kun_reading": [
            "おんな",
            "め"
        ],
        "level": "N5",
        "strokes": 3,
        "examples": [],
        "radicals": "",
        "meaning_en": "Women, girls, women"
    },
    {
        "kanji": "家",
        "han_viet": "GIA, CÔ",
        "meaning_vi": "Ngôi nhà",
        "on_reading": [
            "カ",
            "ケ"
        ],
        "kun_reading": [
            "いえ",
            "や",
            "うち"
        ],
        "level": "N4",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "House"
    },
    {
        "kanji": "族",
        "han_viet": "TỘC",
        "meaning_vi": "Thân thuộc, dòng dõi",
        "on_reading": [
            "ゾク"
        ],
        "kun_reading": [],
        "level": "N4",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Familiar, lineage"
    },
    {
        "kanji": "週",
        "han_viet": "CHU",
        "meaning_vi": "Vòng khắp, tuần lễ",
        "on_reading": [
            "シュウ"
        ],
        "kun_reading": [],
        "level": "N4",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Round, week"
    },
    {
        "kanji": "月",
        "han_viet": "NGUYỆT",
        "meaning_vi": "Tháng, mặt trăng",
        "on_reading": [
            "ゲツ",
            "ガツ"
        ],
        "kun_reading": [
            "つき"
        ],
        "level": "N5",
        "strokes": 4,
        "examples": [],
        "radicals": "",
        "meaning_en": "Month, moon"
    },
    {
        "kanji": "去",
        "han_viet": "KHỨ",
        "meaning_vi": "Quá khứ, trôi qua",
        "on_reading": [
            "キョ",
            "コ"
        ],
        "kun_reading": [
            "さ-る"
        ],
        "level": "N4",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "The past, passed"
    },
    {
        "kanji": "年",
        "han_viet": "NIÊN",
        "meaning_vi": "Năm",
        "on_reading": [
            "ネン"
        ],
        "kun_reading": [
            "とし"
        ],
        "level": "N5",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Year"
    },
    {
        "kanji": "誕",
        "han_viet": "ĐẢN",
        "meaning_vi": "Sinh ra, nói láo, viển vông",
        "on_reading": [
            "タン"
        ],
        "kun_reading": [],
        "level": "N1",
        "strokes": 15,
        "examples": [],
        "radicals": "",
        "meaning_en": "Born, liar, unrealistic"
    },
    {
        "kanji": "普",
        "han_viet": "PHỔ",
        "meaning_vi": "Rộng lớn, khắp, đều",
        "on_reading": [
            "フ"
        ],
        "kun_reading": [],
        "level": "N2",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Vast, everywhere, all"
    },
    {
        "kanji": "通",
        "han_viet": "THÔNG",
        "meaning_vi": "Thông suốt, thông qua, xuyên qua",
        "on_reading": [
            "ツウ",
            "ツ"
        ],
        "kun_reading": [
            "とお-る",
            "とお-り",
            "とお-り",
            "どお-り",
            "とお-す",
            "とお-し",
            "どお-し",
            "かよ-う"
        ],
        "level": "N4",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Throughout, through, through"
    },
    {
        "kanji": "急",
        "han_viet": "CẤP",
        "meaning_vi": "Vội vàng, nóng ruột, sốt ruột",
        "on_reading": [
            "キュウ"
        ],
        "kun_reading": [
            "いそ-ぐ",
            "いそ-ぎ"
        ],
        "level": "N4",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Hurry, impatient, impatient"
    },
    {
        "kanji": "特",
        "han_viet": "ĐẶC",
        "meaning_vi": "Riêng, khác thường, đặc biệt",
        "on_reading": [
            "トク"
        ],
        "kun_reading": [],
        "level": "N4",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Particularly, unusual, special"
    },
    {
        "kanji": "次",
        "han_viet": "THỨ",
        "meaning_vi": "Lần lượt, kế tiếp",
        "on_reading": [
            "ジ",
            "シ"
        ],
        "kun_reading": [
            "つ-ぐ",
            "つぎ"
        ],
        "level": "N3",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "In turn, next"
    },
    {
        "kanji": "飲",
        "han_viet": "ẨM",
        "meaning_vi": "Đồ uống, uống",
        "on_reading": [
            "イン",
            "オン"
        ],
        "kun_reading": [
            "の-む",
            "の-み"
        ],
        "level": "N4",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Drinks, drink"
    },
    {
        "kanji": "吸",
        "han_viet": "HẤP",
        "meaning_vi": "Hút vào, hấp thụ",
        "on_reading": [
            "キュウ"
        ],
        "kun_reading": [
            "す-う"
        ],
        "level": "N3",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Absorb, absorb"
    },
    {
        "kanji": "読",
        "han_viet": "ĐỘC",
        "meaning_vi": "Đọc",
        "on_reading": [
            "ドク",
            "トク",
            "トウ"
        ],
        "kun_reading": [
            "よ-む"
        ],
        "level": "N4",
        "strokes": 14,
        "examples": [],
        "radicals": "",
        "meaning_en": "Read"
    },
    {
        "kanji": "買",
        "han_viet": "MÃI",
        "meaning_vi": "Mua",
        "on_reading": [
            "バイ"
        ],
        "kun_reading": [
            "か-う"
        ],
        "level": "N4",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Buy"
    },
    {
        "kanji": "撮",
        "han_viet": "TOÁT",
        "meaning_vi": "Chụp (ảnh), quay (phim), bắt lấy",
        "on_reading": [
            "サツ"
        ],
        "kun_reading": [
            "と-る",
            "つま-む",
            "ど-り"
        ],
        "level": "N1",
        "strokes": 15,
        "examples": [],
        "radicals": "",
        "meaning_en": "Take (photo), film (movie), catch"
    },
    {
        "kanji": "写",
        "han_viet": "TẢ",
        "meaning_vi": "Ảnh, bức ảnh",
        "on_reading": [
            "シャ",
            "ジャ"
        ],
        "kun_reading": [
            "うつ-す",
            "うつ-る",
            "うつ",
            "うつ-し"
        ],
        "level": "N4",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Photo, photo"
    },
    {
        "kanji": "真",
        "han_viet": "CHÂN",
        "meaning_vi": "Chân thực",
        "on_reading": [
            "シン"
        ],
        "kun_reading": [
            "ま",
            "ま-",
            "まこと"
        ],
        "level": "N4",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Genuine"
    },
    {
        "kanji": "卵",
        "han_viet": "NOÃN",
        "meaning_vi": "Trứng",
        "on_reading": [
            "ラン"
        ],
        "kun_reading": [
            "たまご"
        ],
        "level": "N2",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Egg"
    },
    {
        "kanji": "肉",
        "han_viet": "NHỤC",
        "meaning_vi": "Thịt",
        "on_reading": [
            "ニク"
        ],
        "kun_reading": [
            "しし"
        ],
        "level": "N4",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Meat"
    },
    {
        "kanji": "魚",
        "han_viet": "NGƯ",
        "meaning_vi": "Con cá",
        "on_reading": [
            "ギョ"
        ],
        "kun_reading": [
            "うお",
            "さかな",
            "ざかな"
        ],
        "level": "N4",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Fish"
    },
    {
        "kanji": "野",
        "han_viet": "DÃ",
        "meaning_vi": "Đồng bằng, hoang dã",
        "on_reading": [
            "ヤ",
            "ショ"
        ],
        "kun_reading": [
            "の"
        ],
        "level": "N4",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Delta, wild"
    },
    {
        "kanji": "菜",
        "han_viet": "THÁI",
        "meaning_vi": "Rau",
        "on_reading": [
            "サイ"
        ],
        "kun_reading": [
            "な"
        ],
        "level": "N2",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Vegetable"
    },
    {
        "kanji": "果",
        "han_viet": "QUẢ",
        "meaning_vi": "Quả, trái cây, kết quả",
        "on_reading": [
            "カ"
        ],
        "kun_reading": [
            "は-たす",
            "はた-す",
            "は-てる",
            "は-て"
        ],
        "level": "N3",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Fruits, fruits, results"
    },
    {
        "kanji": "物",
        "han_viet": "VẬT",
        "meaning_vi": "Sự vật, đồ vật",
        "on_reading": [
            "ブツ",
            "モツ"
        ],
        "kun_reading": [
            "もの",
            "もの-"
        ],
        "level": "N4",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Things, objects"
    },
    {
        "kanji": "水",
        "han_viet": "THỦY",
        "meaning_vi": "Nước",
        "on_reading": [
            "スイ"
        ],
        "kun_reading": [
            "みず"
        ],
        "level": "N5",
        "strokes": 4,
        "examples": [],
        "radicals": "",
        "meaning_en": "Water"
    },
    {
        "kanji": "茶",
        "han_viet": "TRÀ",
        "meaning_vi": "Cây chè (trà)",
        "on_reading": [
            "チャ",
            "サ"
        ],
        "kun_reading": [],
        "level": "N4",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Tea tree (tea)"
    },
    {
        "kanji": "紅",
        "han_viet": "HỒNG",
        "meaning_vi": "Đỏ hồng (Sắc hồng nhạt)",
        "on_reading": [
            "コウ",
            "ク"
        ],
        "kun_reading": [
            "くれない",
            "べに",
            "あか.い"
        ],
        "level": "N2",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Red pink (light pink)"
    },
    {
        "kanji": "牛",
        "han_viet": "NGƯU",
        "meaning_vi": "Trâu",
        "on_reading": [
            "ギュウ"
        ],
        "kun_reading": [
            "うし"
        ],
        "level": "N4",
        "strokes": 4,
        "examples": [],
        "radicals": "",
        "meaning_en": "Buffalo"
    },
    {
        "kanji": "乳",
        "han_viet": "NHŨ",
        "meaning_vi": "Sữa (động vật)",
        "on_reading": [
            "ニュウ"
        ],
        "kun_reading": [
            "ちち"
        ],
        "level": "N2",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Milk (animal)"
    },
    {
        "kanji": "酒",
        "han_viet": "TỬU",
        "meaning_vi": "Rượu",
        "on_reading": [
            "シュ"
        ],
        "kun_reading": [
            "さけ",
            "さか-"
        ],
        "level": "N3",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Alcohol"
    },
    {
        "kanji": "映",
        "han_viet": "ÁNH",
        "meaning_vi": "Chiếu sáng",
        "on_reading": [
            "エイ"
        ],
        "kun_reading": [
            "うつ-る",
            "うつ-す",
            "は-える",
            "ば-え"
        ],
        "level": "N4",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Illumination"
    },
    {
        "kanji": "画",
        "han_viet": "HỌA",
        "meaning_vi": "Vẽ, bức tranh",
        "on_reading": [
            "ガ",
            "カク",
            "エ",
            "カイ"
        ],
        "kun_reading": [
            "えが-く",
            "かく-する",
            "かぎ-る",
            "はかりごと",
            "はか-る"
        ],
        "level": "N4",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Drawing, painting"
    },
    {
        "kanji": "紙",
        "han_viet": "CHỈ",
        "meaning_vi": "Giấy, báo",
        "on_reading": [
            "シ"
        ],
        "kun_reading": [
            "かみ"
        ],
        "level": "N4",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Paper"
    },
    {
        "kanji": "店",
        "han_viet": "ĐIẾM",
        "meaning_vi": "Tiệm, cửa hàng, cửa hiệu",
        "on_reading": [
            "テン"
        ],
        "kun_reading": [
            "みせ",
            "たな"
        ],
        "level": "N4",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Shops, shops, shops"
    },
    {
        "kanji": "庭",
        "han_viet": "ĐÌNH",
        "meaning_vi": "Sân, vườn",
        "on_reading": [
            "テイ"
        ],
        "kun_reading": [
            "にわ"
        ],
        "level": "N3",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Yard, garden"
    },
    {
        "kanji": "宿",
        "han_viet": "TÚC, TÚ",
        "meaning_vi": "Đỗ, nghỉ lại qua đêm",
        "on_reading": [
            "シュク"
        ],
        "kun_reading": [
            "やど",
            "やど-る",
            "やど-す"
        ],
        "level": "N3",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Do, stay overnight"
    },
    {
        "kanji": "題",
        "han_viet": "ĐỀ",
        "meaning_vi": "Vấn đề, chủ đề",
        "on_reading": [
            "ダイ"
        ],
        "kun_reading": [],
        "level": "N4",
        "strokes": 18,
        "examples": [],
        "radicals": "",
        "meaning_en": "Problem, topic"
    },
    {
        "kanji": "花",
        "han_viet": "HOA",
        "meaning_vi": "Hoa, bông hoa, đóa hoa",
        "on_reading": [
            "カ",
            "ケ"
        ],
        "kun_reading": [
            "はな"
        ],
        "level": "N4",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Flowers, flowers, flowers"
    },
    {
        "kanji": "切",
        "han_viet": "THIẾT, THẾ",
        "meaning_vi": "Cắt, sắc bén",
        "on_reading": [
            "セツ",
            "サイ"
        ],
        "kun_reading": [
            "き-る",
            "き-り",
            "ぎ-り"
        ],
        "level": "N4",
        "strokes": 4,
        "examples": [],
        "radicals": "",
        "meaning_en": "Cut, sharp"
    },
    {
        "kanji": "送",
        "han_viet": "TỐNG",
        "meaning_vi": "Gửi, đưa đi, tiễn",
        "on_reading": [
            "ソウ"
        ],
        "kun_reading": [
            "おく-る"
        ],
        "level": "N4",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Send, take away, see off"
    },
    {
        "kanji": "貸",
        "han_viet": "THẢI, THẮC",
        "meaning_vi": "Vay, cho vay",
        "on_reading": [
            "タイ"
        ],
        "kun_reading": [
            "か-す",
            "か-し",
            "かし"
        ],
        "level": "N4",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Loan, loan"
    },
    {
        "kanji": "借",
        "han_viet": "TÁ",
        "meaning_vi": "Vay, mượn",
        "on_reading": [
            "シャク"
        ],
        "kun_reading": [
            "か-りる"
        ],
        "level": "N4",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Borrow, borrow"
    },
    {
        "kanji": "荷",
        "han_viet": "HÀ",
        "meaning_vi": "Hành lý, hàng hóa",
        "on_reading": [
            "カ"
        ],
        "kun_reading": [
            "に"
        ],
        "level": "N2",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Luggage, goods"
    },
    {
        "kanji": "金",
        "han_viet": "KIM",
        "meaning_vi": "Kim loại, vàng",
        "on_reading": [
            "キン",
            "コン",
            "ゴン"
        ],
        "kun_reading": [
            "かね",
            "かな",
            "がね"
        ],
        "level": "N5",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Metal, gold"
    },
    {
        "kanji": "父",
        "han_viet": "PHỤ",
        "meaning_vi": "Cha",
        "on_reading": [
            "フ"
        ],
        "kun_reading": [
            "ちち"
        ],
        "level": "N5",
        "strokes": 4,
        "examples": [],
        "radicals": "",
        "meaning_en": "Father"
    },
    {
        "kanji": "母",
        "han_viet": "MẪU",
        "meaning_vi": "Mẹ, người mẹ",
        "on_reading": [
            "ボ"
        ],
        "kun_reading": [
            "はは",
            "も"
        ],
        "level": "N5",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Mother, mother"
    },
    {
        "kanji": "旅",
        "han_viet": "LỮ",
        "meaning_vi": "Du lịch, cuộc hành trình, quán trọ",
        "on_reading": [
            "リョ"
        ],
        "kun_reading": [
            "たび"
        ],
        "level": "N4",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Travel, journey, inn"
    },
    {
        "kanji": "土",
        "han_viet": "THỔ",
        "meaning_vi": "Đất",
        "on_reading": [
            "ド",
            "ト"
        ],
        "kun_reading": [
            "つち"
        ],
        "level": "N5",
        "strokes": 3,
        "examples": [],
        "radicals": "",
        "meaning_en": "Land"
    },
    {
        "kanji": "産",
        "han_viet": "SẢN",
        "meaning_vi": "Sản vật, sản phẩm, vật phẩm",
        "on_reading": [
            "サン"
        ],
        "kun_reading": [
            "う-む",
            "う-まれる",
            "む-す"
        ],
        "level": "N3",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Products, products, items"
    },
    {
        "kanji": "静",
        "han_viet": "TĨNH",
        "meaning_vi": "Yên lặng, yên tĩnh",
        "on_reading": [
            "セイ",
            "ジョウ"
        ],
        "kun_reading": [
            "しず-か",
            "しず-まる",
            "しず-める"
        ],
        "level": "N3",
        "strokes": 14,
        "examples": [],
        "radicals": "",
        "meaning_en": "Quiet, quiet"
    },
    {
        "kanji": "賑",
        "han_viet": "CHẨN",
        "meaning_vi": "Giàu. Cấp giúp, phát chẩn.",
        "on_reading": [],
        "kun_reading": [
            "にぎ-わい",
            "にぎ-やか",
            "にぎ-わす",
            "にぎ-わう"
        ],
        "level": "N1",
        "strokes": 14,
        "examples": [],
        "radicals": "",
        "meaning_en": "Rich. Help, diagnosis."
    },
    {
        "kanji": "有",
        "han_viet": "HỮU, DỰU",
        "meaning_vi": "Có, sở hữu, tồn tại, xảy ra",
        "on_reading": [
            "ユウ",
            "ウ"
        ],
        "kun_reading": [
            "あ-る"
        ],
        "level": "N4",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Yes, ownership, existence, occur"
    },
    {
        "kanji": "親",
        "han_viet": "THÂN",
        "meaning_vi": "Người thân, cha mẹ, bố mẹ, song thân",
        "on_reading": [
            "シン"
        ],
        "kun_reading": [
            "おや",
            "した-しい",
            "した-しむ"
        ],
        "level": "N4",
        "strokes": 16,
        "examples": [],
        "radicals": "",
        "meaning_en": "Relatives, parents, parents, but bodies"
    },
    {
        "kanji": "元",
        "han_viet": "NGUYÊN",
        "meaning_vi": "Bắt đầu, nguồn gốc",
        "on_reading": [
            "ゲン",
            "ガン"
        ],
        "kun_reading": [
            "もと"
        ],
        "level": "N4",
        "strokes": 4,
        "examples": [],
        "radicals": "",
        "meaning_en": "Start, origin"
    },
    {
        "kanji": "暇",
        "han_viet": "HẠ",
        "meaning_vi": "Nhàn rỗi",
        "on_reading": [
            "カ"
        ],
        "kun_reading": [
            "ひま",
            "いとま"
        ],
        "level": "N1",
        "strokes": 13,
        "examples": [],
        "radicals": "",
        "meaning_en": "Idle"
    },
    {
        "kanji": "忙",
        "han_viet": "MANG",
        "meaning_vi": "Bận rộn",
        "on_reading": [
            "ボウ",
            "モウ"
        ],
        "kun_reading": [
            "いそが-しい"
        ],
        "level": "N2",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Busy"
    },
    {
        "kanji": "利",
        "han_viet": "LỢI",
        "meaning_vi": "Nhanh nhẩu, lợi ích, công dụng",
        "on_reading": [
            "リ"
        ],
        "kun_reading": [
            "き-く"
        ],
        "level": "N3",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Quickly, benefits, uses"
    },
    {
        "kanji": "小",
        "han_viet": "TIỂU",
        "meaning_vi": "Nhỏ bé",
        "on_reading": [
            "ショウ"
        ],
        "kun_reading": [
            "ちい-さい",
            "こ",
            "お",
            "さ"
        ],
        "level": "N5",
        "strokes": 3,
        "examples": [],
        "radicals": "",
        "meaning_en": "Tiny"
    },
    {
        "kanji": "古",
        "han_viet": "CỔ",
        "meaning_vi": "Cổ, xưa, cũ",
        "on_reading": [
            "コ"
        ],
        "kun_reading": [
            "ふる-い",
            "ふる-す"
        ],
        "level": "N4",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Neck, old, old"
    },
    {
        "kanji": "悪",
        "han_viet": "ÁC",
        "meaning_vi": "Sự xấu, không tốt",
        "on_reading": [
            "アク",
            "オ"
        ],
        "kun_reading": [
            "わる.い",
            "わる-",
            "あ.し",
            "にく.い",
            "-にく.い",
            "ああ",
            "いずくに",
            "いずくんぞ",
            "にく.む"
        ],
        "level": "N4",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Badness, not good"
    },
    {
        "kanji": "熱",
        "han_viet": "NHIỆT",
        "meaning_vi": "Nóng, sốt",
        "on_reading": [
            "ネツ"
        ],
        "kun_reading": [
            "あつ-い"
        ],
        "level": "N3",
        "strokes": 15,
        "examples": [],
        "radicals": "",
        "meaning_en": "Hot, fever"
    },
    {
        "kanji": "冷",
        "han_viet": "LÃNH",
        "meaning_vi": "Lạnh, nhạt nhẽo",
        "on_reading": [
            "レイ"
        ],
        "kun_reading": [
            "つめ-たい",
            "ひ-える",
            "ひ-ややか",
            "ひ-やす",
            "ひ-やかす",
            "さ-める",
            "さ-ます"
        ],
        "level": "N3",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Cold, bland"
    },
    {
        "kanji": "暑",
        "han_viet": "THỬ",
        "meaning_vi": "Nắng, nóng",
        "on_reading": [
            "ショ"
        ],
        "kun_reading": [
            "あつ-い"
        ],
        "level": "N1",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Sunny, hot"
    },
    {
        "kanji": "寒",
        "han_viet": "HÀN",
        "meaning_vi": "Rét, lạnh",
        "on_reading": [
            "カン"
        ],
        "kun_reading": [
            "さむ-い"
        ],
        "level": "N3",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Cold, cold"
    },
    {
        "kanji": "難",
        "han_viet": "NẠN, NAN",
        "meaning_vi": "Khó khăn, gian nan",
        "on_reading": [
            "ナン"
        ],
        "kun_reading": [
            "かた-い",
            "むずか-しい",
            "にく-い"
        ],
        "level": "N2",
        "strokes": 18,
        "examples": [],
        "radicals": "",
        "meaning_en": "Difficult, arduous"
    },
    {
        "kanji": "優",
        "han_viet": "ƯU",
        "meaning_vi": "Trên hết, ưu việt, dịu dàng",
        "on_reading": [
            "ユウ",
            "ユ"
        ],
        "kun_reading": [
            "すぐ-れる",
            "やさ-しい",
            "まさ-る"
        ],
        "level": "N2",
        "strokes": 17,
        "examples": [],
        "radicals": "",
        "meaning_en": "Above all, superiority, gentle"
    },
    {
        "kanji": "高",
        "han_viet": "CAO",
        "meaning_vi": "Cao",
        "on_reading": [
            "コウ"
        ],
        "kun_reading": [
            "たか-い",
            "たか",
            "だか",
            "たか-まる",
            "たか-める"
        ],
        "level": "N5",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "High"
    },
    {
        "kanji": "安",
        "han_viet": "AN, YÊN",
        "meaning_vi": "Bình yên, sự yên ổn",
        "on_reading": [
            "アン"
        ],
        "kun_reading": [
            "やす-い",
            "やす-まる",
            "やす",
            "や-らか"
        ],
        "level": "N4",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Peace, peace"
    },
    {
        "kanji": "低",
        "han_viet": "ĐÊ",
        "meaning_vi": "Thấp",
        "on_reading": [
            "テイ"
        ],
        "kun_reading": [
            "ひく-い",
            "ひく-める",
            "ひく-まる"
        ],
        "level": "N2",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Short"
    },
    {
        "kanji": "楽",
        "han_viet": "LẠC, NHẠC",
        "meaning_vi": "Lạc thú, âm nhạc, thoải mái, dễ chịu",
        "on_reading": [
            "ガク",
            "ラク",
            "ゴウ"
        ],
        "kun_reading": [
            "たの-しい",
            "たの-しむ",
            "この-む"
        ],
        "level": "N4",
        "strokes": 13,
        "examples": [],
        "radicals": "",
        "meaning_en": "Lac animals, music, comfort, pleasant"
    },
    {
        "kanji": "白",
        "han_viet": "BẠCH",
        "meaning_vi": "Màu trắng",
        "on_reading": [
            "ハク",
            "ビャク"
        ],
        "kun_reading": [
            "しろ",
            "しら",
            "しろ-い"
        ],
        "level": "N5",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "White"
    },
    {
        "kanji": "黒",
        "han_viet": "HẮC",
        "meaning_vi": "Màu đen",
        "on_reading": [
            "コク"
        ],
        "kun_reading": [
            "くろ",
            "くろ-ずむ",
            "くろ-い"
        ],
        "level": "N4",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Black"
    },
    {
        "kanji": "赤",
        "han_viet": "XÍCH",
        "meaning_vi": "Màu đỏ",
        "on_reading": [
            "セキ",
            "シャク"
        ],
        "kun_reading": [
            "あか",
            "あか",
            "あか-い",
            "あか-らむ",
            "あか-らめる"
        ],
        "level": "N4",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Red"
    },
    {
        "kanji": "青",
        "han_viet": "THANH",
        "meaning_vi": "Màu xanh",
        "on_reading": [
            "セイ",
            "ショウ"
        ],
        "kun_reading": [
            "あお",
            "あお",
            "あお-い"
        ],
        "level": "N4",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Green"
    },
    {
        "kanji": "桜",
        "han_viet": "ANH",
        "meaning_vi": "Hoa anh đào",
        "on_reading": [
            "オウ",
            "ヨウ"
        ],
        "kun_reading": [
            "さくら"
        ],
        "level": "N1",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Cherry blossom"
    },
    {
        "kanji": "山",
        "han_viet": "SƠN",
        "meaning_vi": "Núi",
        "on_reading": [
            "サン",
            "セン"
        ],
        "kun_reading": [
            "やま"
        ],
        "level": "N5",
        "strokes": 3,
        "examples": [],
        "radicals": "",
        "meaning_en": "Mountain"
    },
    {
        "kanji": "町",
        "han_viet": "ĐINH",
        "meaning_vi": "Thị trấn, con phố, ngôi làng",
        "on_reading": [
            "チョウ"
        ],
        "kun_reading": [
            "まち"
        ],
        "level": "N4",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Town, street, village"
    },
    {
        "kanji": "活",
        "han_viet": "HOẠT, QUẠT",
        "meaning_vi": "Sống, hoạt động, hoạt bát",
        "on_reading": [
            "カツ"
        ],
        "kun_reading": [
            "い-きる",
            "い-かす",
            "い-ける"
        ],
        "level": "N3",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Live, activity, activity"
    },
    {
        "kanji": "仕",
        "han_viet": "SĨ",
        "meaning_vi": "Việc làm, hành động, hành vi",
        "on_reading": [
            "シ",
            "ジ"
        ],
        "kun_reading": [
            "つか-える"
        ],
        "level": "N4",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Jobs, actions, behaviors"
    },
    {
        "kanji": "好",
        "han_viet": "HẢO",
        "meaning_vi": "Yêu thích, thích",
        "on_reading": [
            "コウ"
        ],
        "kun_reading": [
            "この-む",
            "す-く",
            "よ-い",
            "い-い"
        ],
        "level": "N3",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Favorite, like"
    },
    {
        "kanji": "嫌",
        "han_viet": "HIỀM",
        "meaning_vi": "Khó chịu, ghét, không ưa",
        "on_reading": [
            "ケン",
            "ゲン"
        ],
        "kun_reading": [
            "きら-う",
            "きら-い",
            "いや"
        ],
        "level": "N1",
        "strokes": 13,
        "examples": [],
        "radicals": "",
        "meaning_en": "Annoying, hate, dislike"
    },
    {
        "kanji": "上",
        "han_viet": "THƯỢNG, THƯỚNG",
        "meaning_vi": "Trên, phía trên, đưa lên, cưỡi lên",
        "on_reading": [
            "ジョウ",
            "ショウ",
            "シャン"
        ],
        "kun_reading": [
            "うえ",
            "うわ",
            "かみ",
            "あ-げる",
            "あ-がる",
            "あ-がり",
            "のぼ-る",
            "のぼ-り",
            "のぼ-せる",
            "のぼ-す",
            "よ-す"
        ],
        "level": "N5",
        "strokes": 3,
        "examples": [],
        "radicals": "",
        "meaning_en": "Above, above, put up, ride"
    },
    {
        "kanji": "料",
        "han_viet": "LIỆU",
        "meaning_vi": "Vật liệu, đo đạc",
        "on_reading": [
            "リョウ"
        ],
        "kun_reading": [],
        "level": "N4",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Materials, measurement"
    },
    {
        "kanji": "理",
        "han_viet": "LÍ",
        "meaning_vi": "Lý luận, nguyên lý",
        "on_reading": [
            "リ"
        ],
        "kun_reading": [
            "ことわり"
        ],
        "level": "N4",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Theory, principle"
    },
    {
        "kanji": "球",
        "han_viet": "CẦU",
        "meaning_vi": "Quả cầu, quả bóng",
        "on_reading": [
            "キュウ"
        ],
        "kun_reading": [
            "たま"
        ],
        "level": "N3",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Ball, ball"
    },
    {
        "kanji": "音",
        "han_viet": "ÂM",
        "meaning_vi": "Âm thanh, tiếng",
        "on_reading": [
            "オン",
            "イン",
            "ノン"
        ],
        "kun_reading": [
            "おと",
            "ね"
        ],
        "level": "N4",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Sound, sound"
    },
    {
        "kanji": "歌",
        "han_viet": "CA",
        "meaning_vi": "Bài hát, hát",
        "on_reading": [
            "カ"
        ],
        "kun_reading": [
            "うた",
            "うた-う"
        ],
        "level": "N4",
        "strokes": 14,
        "examples": [],
        "radicals": "",
        "meaning_en": "Songs, singing"
    },
    {
        "kanji": "舞",
        "han_viet": "VŨ",
        "meaning_vi": "Nhảy múa",
        "on_reading": [
            "ブ"
        ],
        "kun_reading": [
            "ま-う"
        ],
        "level": "N2",
        "strokes": 15,
        "examples": [],
        "radicals": "",
        "meaning_en": "Dance"
    },
    {
        "kanji": "伎",
        "han_viet": "KĨ",
        "meaning_vi": "Tài năng, kỹ nghệ",
        "on_reading": [
            "ギ",
            "キ"
        ],
        "kun_reading": [
            "わざ",
            "わざおぎ"
        ],
        "level": "N1",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Talent, industry"
    },
    {
        "kanji": "絵",
        "han_viet": "HỘI",
        "meaning_vi": "Bức tranh",
        "on_reading": [
            "カイ",
            "エ"
        ],
        "kun_reading": [],
        "level": "N3",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Picture"
    },
    {
        "kanji": "字",
        "han_viet": "TỰ",
        "meaning_vi": "Chữ, ký tự",
        "on_reading": [
            "ジ"
        ],
        "kun_reading": [
            "あざ",
            "あざな",
            "な"
        ],
        "level": "N4",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Letters, characters"
    },
    {
        "kanji": "漢",
        "han_viet": "HÁN",
        "meaning_vi": "Hán, Trung Hoa",
        "on_reading": [
            "カン"
        ],
        "kun_reading": [],
        "level": "N4",
        "strokes": 13,
        "examples": [],
        "radicals": "",
        "meaning_en": "Han, China"
    },
    {
        "kanji": "細",
        "han_viet": "TẾ",
        "meaning_vi": "Thon, nhỏ, chi tiết",
        "on_reading": [
            "サイ"
        ],
        "kun_reading": [
            "ほそ-い",
            "ほそ-る",
            "こま-か",
            "こま-かい"
        ],
        "level": "N2",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Slender, small, detailed"
    },
    {
        "kanji": "間",
        "han_viet": "GIAN",
        "meaning_vi": "Khoảng, ở giữa, bên trong (không gian)",
        "on_reading": [
            "カン",
            "ケン"
        ],
        "kun_reading": [
            "あいだ",
            "ま",
            "あい"
        ],
        "level": "N5",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Interval, in the middle, inside (space)"
    },
    {
        "kanji": "用",
        "han_viet": "Dụng",
        "meaning_vi": "Dùng, công dụng",
        "on_reading": [
            "ヨウ"
        ],
        "kun_reading": [
            "もち-いる"
        ],
        "level": "N4",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Use, use"
    },
    {
        "kanji": "約",
        "han_viet": "ƯỚC",
        "meaning_vi": "Điều ước, lời hứa, ước chừng",
        "on_reading": [
            "ヤク"
        ],
        "kun_reading": [
            "つづ.まる",
            "つづ.める",
            "つづま.やか"
        ],
        "level": "N3",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Wishes, promises, estimates"
    },
    {
        "kanji": "束",
        "han_viet": "THÚC, THÚ",
        "meaning_vi": "Buộc, bó lại",
        "on_reading": [
            "ソク"
        ],
        "kun_reading": [
            "たば",
            "たば-ねる",
            "つか",
            "つか-ねる"
        ],
        "level": "N3",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Tie, bundle"
    },
    {
        "kanji": "主",
        "han_viet": "CHỦ, CHÚA",
        "meaning_vi": "Chủ, người chủ",
        "on_reading": [
            "シュ",
            "ス",
            "シュウ"
        ],
        "kun_reading": [
            "ぬし",
            "おも",
            "あるじ"
        ],
        "level": "N4",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Owner, owner"
    },
    {
        "kanji": "夫",
        "han_viet": "PHU",
        "meaning_vi": "Đàn ông, chồng",
        "on_reading": [
            "フ",
            "フウ",
            "ブ"
        ],
        "kun_reading": [
            "おっと",
            "それ"
        ],
        "level": "N3",
        "strokes": 4,
        "examples": [],
        "radicals": "",
        "meaning_en": "Men, husband"
    },
    {
        "kanji": "奥",
        "han_viet": "ÁO",
        "meaning_vi": "Bên trong",
        "on_reading": [
            "オウ",
            "オク"
        ],
        "kun_reading": [
            "おく",
            "おく-まる",
            "くま"
        ],
        "level": "N2",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Inside"
    },
    {
        "kanji": "妻",
        "han_viet": "THÊ",
        "meaning_vi": "Vợ, phu nhân",
        "on_reading": [
            "サイ"
        ],
        "kun_reading": [
            "つま"
        ],
        "level": "N3",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Wife, lady"
    },
    {
        "kanji": "内",
        "han_viet": "NỘI, NẠP",
        "meaning_vi": "Bên trong, ở giữa",
        "on_reading": [
            "ナイ",
            "ダイ"
        ],
        "kun_reading": [
            "うち"
        ],
        "level": "N3",
        "strokes": 4,
        "examples": [],
        "radicals": "",
        "meaning_en": "Inside, in the middle"
    },
    {
        "kanji": "子",
        "han_viet": "TỬ",
        "meaning_vi": "Con",
        "on_reading": [
            "シ",
            "ス",
            "ツ"
        ],
        "kun_reading": [
            "こ",
            "ね"
        ],
        "level": "N5",
        "strokes": 3,
        "examples": [],
        "radicals": "",
        "meaning_en": "Child"
    },
    {
        "kanji": "少",
        "han_viet": "THIỂU, THIẾU",
        "meaning_vi": "Ít, một chút",
        "on_reading": [
            "ショウ"
        ],
        "kun_reading": [
            "すく-ない",
            "すこ-し"
        ],
        "level": "N1",
        "strokes": 4,
        "examples": [],
        "radicals": "",
        "meaning_en": "Little, a little"
    },
    {
        "kanji": "全",
        "han_viet": "TOÀN",
        "meaning_vi": "Xong, đủ, toàn bộ",
        "on_reading": [
            "ゼン"
        ],
        "kun_reading": [
            "まった-く",
            "すべ-て"
        ],
        "level": "N3",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Done, enough, all"
    },
    {
        "kanji": "然",
        "han_viet": "NHIÊN",
        "meaning_vi": "Thế nhưng, vậy",
        "on_reading": [
            "ゼン",
            "ネン"
        ],
        "kun_reading": [
            "しか",
            "しか-り",
            "しか-し",
            "さ"
        ],
        "level": "N3",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "However, that"
    },
    {
        "kanji": "早",
        "han_viet": "TẢO",
        "meaning_vi": "Sớm, nhanh",
        "on_reading": [
            "ソウ",
            "サッ"
        ],
        "kun_reading": [
            "はや-い",
            "はや",
            "はや-まる",
            "はや-める",
            "さ"
        ],
        "level": "N4",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Early, fast"
    },
    {
        "kanji": "速",
        "han_viet": "TỐC",
        "meaning_vi": "Tốc độ, nhanh",
        "on_reading": [
            "ソク"
        ],
        "kun_reading": [
            "はや-い",
            "はや-める",
            "すみ-やか"
        ],
        "level": "N3",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Speed, fast"
    },
    {
        "kanji": "残",
        "han_viet": "TÀN",
        "meaning_vi": "Còn lại, còn thừa, tàn",
        "on_reading": [
            "ザン",
            "サン"
        ],
        "kun_reading": [
            "のこ-る",
            "のこ-す",
            "そこな-う",
            "のこ-り"
        ],
        "level": "N3",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "The rest, leftovers, remnants"
    },
    {
        "kanji": "念",
        "han_viet": "NIỆM",
        "meaning_vi": "Nghĩ nhớ",
        "on_reading": [
            "ネン"
        ],
        "kun_reading": [],
        "level": "N3",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Think"
    },
    {
        "kanji": "男",
        "han_viet": "NAM",
        "meaning_vi": "Nam giới, đàn ông",
        "on_reading": [
            "ダン",
            "ナン"
        ],
        "kun_reading": [
            "おとこ",
            "お"
        ],
        "level": "N5",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Men, men"
    },
    {
        "kanji": "犬",
        "han_viet": "KHUYỂN",
        "meaning_vi": "Con chó",
        "on_reading": [
            "ケン"
        ],
        "kun_reading": [
            "いぬ"
        ],
        "level": "N4",
        "strokes": 4,
        "examples": [],
        "radicals": "",
        "meaning_en": "Dog"
    },
    {
        "kanji": "猫",
        "han_viet": "MIÊU",
        "meaning_vi": "Con mèo",
        "on_reading": [
            "ビョウ"
        ],
        "kun_reading": [
            "ねこ"
        ],
        "level": "N2",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Cat"
    },
    {
        "kanji": "木",
        "han_viet": "MỘC",
        "meaning_vi": "Gỗ, cây cối",
        "on_reading": [
            "ボク",
            "モク"
        ],
        "kun_reading": [
            "き"
        ],
        "level": "N5",
        "strokes": 4,
        "examples": [],
        "radicals": "",
        "meaning_en": "Wood, trees"
    },
    {
        "kanji": "池",
        "han_viet": "TRÌ",
        "meaning_vi": "Cái ao",
        "on_reading": [
            "チ"
        ],
        "kun_reading": [
            "いけ"
        ],
        "level": "N2",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Pond"
    },
    {
        "kanji": "箱",
        "han_viet": "TƯƠNG, SƯƠNG",
        "meaning_vi": "Cái hòm, cái hộp",
        "on_reading": [
            "ソウ"
        ],
        "kun_reading": [
            "はこ"
        ],
        "level": "N3",
        "strokes": 15,
        "examples": [],
        "radicals": "",
        "meaning_en": "The chest, the box"
    },
    {
        "kanji": "蔵",
        "han_viet": "TÀNG",
        "meaning_vi": "Nhà kho, nơi cất giữ",
        "on_reading": [
            "ゾウ",
            "ソウ"
        ],
        "kun_reading": [
            "くら",
            "おさ-める",
            "かく-れる"
        ],
        "level": "N2",
        "strokes": 15,
        "examples": [],
        "radicals": "",
        "meaning_en": "Warehouse, storage"
    },
    {
        "kanji": "庫",
        "han_viet": "KHỐ",
        "meaning_vi": "Kho chứa đồ vật",
        "on_reading": [
            "コ",
            "ク"
        ],
        "kun_reading": [
            "くら"
        ],
        "level": "N2",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Storage"
    },
    {
        "kanji": "棚",
        "han_viet": "BẰNG",
        "meaning_vi": "Cái kệ, cái giá",
        "on_reading": [
            "ホウ"
        ],
        "kun_reading": [
            "たな",
            "だな"
        ],
        "level": "N1",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Shelves, price"
    },
    {
        "kanji": "窓",
        "han_viet": "SONG",
        "meaning_vi": "Cửa sổ",
        "on_reading": [
            "ソウ",
            "ス"
        ],
        "kun_reading": [
            "まど",
            "てんまど",
            "けむだし"
        ],
        "level": "N2",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Window"
    },
    {
        "kanji": "公",
        "han_viet": "CÔNG",
        "meaning_vi": "Quần chúng, chính thức, công cộng,",
        "on_reading": [
            "コウ",
            "ク"
        ],
        "kun_reading": [
            "おおやけ"
        ],
        "level": "N4",
        "strokes": 4,
        "examples": [],
        "radicals": "",
        "meaning_en": "Mass, official, public,"
    },
    {
        "kanji": "園",
        "han_viet": "VIÊN",
        "meaning_vi": "Vườn, công viên, trang trại",
        "on_reading": [
            "エン"
        ],
        "kun_reading": [
            "その"
        ],
        "level": "N3",
        "strokes": 13,
        "examples": [],
        "radicals": "",
        "meaning_en": "Garden, park, farm"
    },
    {
        "kanji": "喫",
        "han_viet": "KHIẾT",
        "meaning_vi": "Ăn uống, hút thuốc",
        "on_reading": [
            "キツ"
        ],
        "kun_reading": [
            "の-む"
        ],
        "level": "N2",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Eat and drink, smoke"
    },
    {
        "kanji": "乗",
        "han_viet": "THỪA",
        "meaning_vi": "Lên xe",
        "on_reading": [
            "ジョウ",
            "ショウ"
        ],
        "kun_reading": [
            "の-る",
            "の-せる"
        ],
        "level": "N3",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Board"
    },
    {
        "kanji": "県",
        "han_viet": "HUYỆN",
        "meaning_vi": "Tỉnh",
        "on_reading": [
            "ケン"
        ],
        "kun_reading": [
            "か-ける"
        ],
        "level": "N2",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Conscious"
    },
    {
        "kanji": "右",
        "han_viet": "HỮU",
        "meaning_vi": "Bên phải",
        "on_reading": [
            "ウ",
            "ユウ"
        ],
        "kun_reading": [
            "みぎ"
        ],
        "level": "N5",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Right"
    },
    {
        "kanji": "左",
        "han_viet": "TẢ, TÁ",
        "meaning_vi": "Bên trái, trái",
        "on_reading": [
            "サ",
            "シャ"
        ],
        "kun_reading": [
            "ひだり"
        ],
        "level": "N5",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Left, left"
    },
    {
        "kanji": "外",
        "han_viet": "NGOẠI",
        "meaning_vi": "Ngoài, bên ngoài, phía ngoài",
        "on_reading": [
            "ガイ",
            "ゲ"
        ],
        "kun_reading": [
            "そと",
            "ほか",
            "はず-す",
            "はず-れる",
            "と"
        ],
        "level": "N5",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Outside, outside, outside"
    },
    {
        "kanji": "隣",
        "han_viet": "LÂN",
        "meaning_vi": "Bên cạnh",
        "on_reading": [
            "リン"
        ],
        "kun_reading": [
            "とな.る",
            "となり"
        ],
        "level": "N1",
        "strokes": 16,
        "examples": [],
        "radicals": "",
        "meaning_en": "Next to"
    },
    {
        "kanji": "近",
        "han_viet": "CẬN",
        "meaning_vi": "Gần, ở sát bên",
        "on_reading": [
            "キン",
            "コン"
        ],
        "kun_reading": [
            "ちか-い"
        ],
        "level": "N4",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Near, close side"
    },
    {
        "kanji": "目",
        "han_viet": "MỤC",
        "meaning_vi": "Mắt",
        "on_reading": [
            "モク",
            "ボク"
        ],
        "kun_reading": [
            "め",
            "ま"
        ],
        "level": "N5",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Eye"
    },
    {
        "kanji": "一",
        "han_viet": "NHẤT",
        "meaning_vi": "Một",
        "on_reading": [
            "イチ",
            "イツ"
        ],
        "kun_reading": [
            "ひと",
            "ひと-つ",
            "ひと-り"
        ],
        "level": "N5",
        "strokes": 1,
        "examples": [],
        "radicals": "",
        "meaning_en": "One"
    },
    {
        "kanji": "二",
        "han_viet": "NHỊ",
        "meaning_vi": "Hai",
        "on_reading": [
            "ニ",
            "ジ"
        ],
        "kun_reading": [
            "ふた",
            "ふた-つ",
            "ふた-り"
        ],
        "level": "N5",
        "strokes": 2,
        "examples": [],
        "radicals": "",
        "meaning_en": "Two"
    },
    {
        "kanji": "葉",
        "han_viet": "DIỆP, DIẾP",
        "meaning_vi": "Lá cây",
        "on_reading": [
            "ヨウ"
        ],
        "kun_reading": [
            "は",
            "ば"
        ],
        "level": "N3",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Leaf"
    },
    {
        "kanji": "封",
        "han_viet": "PHONG",
        "meaning_vi": "Đóng kín, niêm phong",
        "on_reading": [
            "フウ",
            "ホウ"
        ],
        "kun_reading": [],
        "level": "N2",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Closed, sealed"
    },
    {
        "kanji": "筒",
        "han_viet": "ĐỒNG",
        "meaning_vi": "Ống, xuyên qua, thông qua",
        "on_reading": [
            "トウ"
        ],
        "kun_reading": [
            "つつ"
        ],
        "level": "N2",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Tube, through, through"
    },
    {
        "kanji": "留",
        "han_viet": "LƯU",
        "meaning_vi": "Lưu lại, giữ lại",
        "on_reading": [
            "リュウ",
            "ル"
        ],
        "kun_reading": [
            "と-める",
            "と-まる",
            "とど-める",
            "とど-まる",
            "るうぶる"
        ],
        "level": "N3",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Save, keep"
    },
    {
        "kanji": "遊",
        "han_viet": "DU",
        "meaning_vi": "Vui chơi",
        "on_reading": [
            "ユウ",
            "ユ"
        ],
        "kun_reading": [
            "あそ-ぶ",
            "あそ-ばす"
        ],
        "level": "N3",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Entertainment"
    },
    {
        "kanji": "泳",
        "han_viet": "VỊNH",
        "meaning_vi": "Bơi",
        "on_reading": [
            "エイ"
        ],
        "kun_reading": [
            "およ-ぐ"
        ],
        "level": "N3",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Swim"
    },
    {
        "kanji": "迎",
        "han_viet": "NGHÊNH, NGHỊNH",
        "meaning_vi": "Chào mừng, nghênh đón",
        "on_reading": [
            "ゲイ"
        ],
        "kun_reading": [
            "むか-える"
        ],
        "level": "N3",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Welcome, welcome"
    },
    {
        "kanji": "疲",
        "han_viet": "BÍ",
        "meaning_vi": "Mệt mỏi",
        "on_reading": [
            "ヒ"
        ],
        "kun_reading": [
            "つか-れる",
            "つか-らす"
        ],
        "level": "N2",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Tired"
    },
    {
        "kanji": "出",
        "han_viet": "XUẤT",
        "meaning_vi": "Ra ngoài, mở ra",
        "on_reading": [
            "シュツ",
            "スイ"
        ],
        "kun_reading": [
            "で-る",
            "だ-す",
            "い-でる",
            "い-だす"
        ],
        "level": "N4",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Out, open"
    },
    {
        "kanji": "入",
        "han_viet": "NHẬP",
        "meaning_vi": "Vào",
        "on_reading": [
            "ニュウ",
            "ジュ"
        ],
        "kun_reading": [
            "い-る",
            "い-れる",
            "はい-る"
        ],
        "level": "N4",
        "strokes": 2,
        "examples": [],
        "radicals": "",
        "meaning_en": "Enter"
    },
    {
        "kanji": "結",
        "han_viet": "KẾT",
        "meaning_vi": "Nối, buộc, kết",
        "on_reading": [
            "ケツ",
            "ケチ"
        ],
        "kun_reading": [
            "むす-ぶ",
            "ゆ-う",
            "ゆ.わえる"
        ],
        "level": "N2",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Connect, tie, conclude"
    },
    {
        "kanji": "婚",
        "han_viet": "HÔN",
        "meaning_vi": "Kết hôn, cưới hỏi",
        "on_reading": [
            "コン"
        ],
        "kun_reading": [],
        "level": "N2",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Marriage, wedding"
    },
    {
        "kanji": "散",
        "han_viet": "TÁN, TẢN",
        "meaning_vi": "Phân tán, gieo rắc",
        "on_reading": [
            "サン"
        ],
        "kun_reading": [
            "ち-る",
            "ち-らす",
            "ち-らかす",
            "ち-らかる"
        ],
        "level": "N3",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Dispersed, sowed"
    },
    {
        "kanji": "欲",
        "han_viet": "DỤC",
        "meaning_vi": "Ao ước, ước muốn",
        "on_reading": [
            "ヨク"
        ],
        "kun_reading": [
            "ほっ-する",
            "ほ-しい"
        ],
        "level": "N2",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Wish, desire"
    },
    {
        "kanji": "寂",
        "han_viet": "TỊCH",
        "meaning_vi": "Lặng yên, cô đơn",
        "on_reading": [
            "ジャク",
            "セキ"
        ],
        "kun_reading": [
            "さび",
            "さび-しい",
            "さび-れる",
            "さみ-しい"
        ],
        "level": "N1",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Quiet, lonely"
    },
    {
        "kanji": "広",
        "han_viet": "QUẢNG",
        "meaning_vi": "Rộng lớn",
        "on_reading": [
            "コウ"
        ],
        "kun_reading": [
            "ひろ-い",
            "ひろ-まる",
            "ひろ-める",
            "ひろ-がる",
            "ひろ-げる"
        ],
        "level": "N4",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Vast"
    },
    {
        "kanji": "狭",
        "han_viet": "HIỆP",
        "meaning_vi": "Hẹp",
        "on_reading": [
            "キョウ",
            "コウ"
        ],
        "kun_reading": [
            "せま-い",
            "せば-まる",
            "せば-める"
        ],
        "level": "N2",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Narrow"
    },
    {
        "kanji": "市",
        "han_viet": "THỊ",
        "meaning_vi": "Chợ",
        "on_reading": [
            "シ"
        ],
        "kun_reading": [
            "いち"
        ],
        "level": "N3",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Market"
    },
    {
        "kanji": "役",
        "han_viet": "DỊCH",
        "meaning_vi": "Chiến đấu, phục dịch, sai khiến",
        "on_reading": [
            "ヤク",
            "エキ"
        ],
        "kun_reading": [],
        "level": "N3",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Fighting, serving, wrong causing"
    },
    {
        "kanji": "川",
        "han_viet": "XUYÊN",
        "meaning_vi": "Sông ngòi",
        "on_reading": [
            "セン"
        ],
        "kun_reading": [
            "かわ"
        ],
        "level": "N5",
        "strokes": 3,
        "examples": [],
        "radicals": "",
        "meaning_en": "River"
    },
    {
        "kanji": "経",
        "han_viet": "KINH",
        "meaning_vi": "Đi qua, kinh qua",
        "on_reading": [
            "ケイ",
            "キョウ"
        ],
        "kun_reading": [
            "へ-る",
            "た-つ",
            "たていと",
            "はか-る",
            "のり"
        ],
        "level": "N3",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Passing, experiencing"
    },
    {
        "kanji": "済",
        "han_viet": "TẾ",
        "meaning_vi": "Xong xuôi, hoàn thành",
        "on_reading": [
            "サイ",
            "セイ"
        ],
        "kun_reading": [
            "す-む",
            "す-ます"
        ],
        "level": "N2",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Done, complete"
    },
    {
        "kanji": "釣",
        "han_viet": "ĐIẾU",
        "meaning_vi": "Câu cá",
        "on_reading": [
            "チョウ"
        ],
        "kun_reading": [
            "つ-る",
            "つ-り",
            "つ-り"
        ],
        "level": "N1",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Go fishing"
    },
    {
        "kanji": "登",
        "han_viet": "ĐĂNG",
        "meaning_vi": "Trèo lên, thăng tiến",
        "on_reading": [
            "トウ",
            "ト",
            "ドウ",
            "ショウ",
            "チョウ"
        ],
        "kun_reading": [
            "のぼ-る",
            "あ-がる"
        ],
        "level": "N3",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Climb up, advance"
    },
    {
        "kanji": "録",
        "han_viet": "LỤC",
        "meaning_vi": "Kỷ lục, ghi chép",
        "on_reading": [
            "ロク"
        ],
        "kun_reading": [
            "しる-す",
            "と-る"
        ],
        "level": "N2",
        "strokes": 16,
        "examples": [],
        "radicals": "",
        "meaning_en": "Records, records"
    },
    {
        "kanji": "末",
        "han_viet": "MẠT",
        "meaning_vi": "Cuối cùng, ngọn, hậu thế",
        "on_reading": [
            "マツ",
            "バツ"
        ],
        "kun_reading": [
            "すえ"
        ],
        "level": "N3",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Finally, tops, posterity"
    },
    {
        "kanji": "注",
        "han_viet": "CHÚ",
        "meaning_vi": "Rót, đổ, chú ý",
        "on_reading": [
            "チュウ"
        ],
        "kun_reading": [
            "そそ-ぐ",
            "さ-す",
            "つ-ぐ"
        ],
        "level": "N4",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Pour, pour, pay attention"
    },
    {
        "kanji": "文",
        "han_viet": "VĂN",
        "meaning_vi": "Văn vẻ, văn chương, vẻ sáng",
        "on_reading": [
            "ブン",
            "モン"
        ],
        "kun_reading": [
            "ふみ",
            "あや"
        ],
        "level": "N4",
        "strokes": 4,
        "examples": [],
        "radicals": "",
        "meaning_en": "Literature, literature, light"
    },
    {
        "kanji": "待",
        "han_viet": "ĐÃI",
        "meaning_vi": "Đợi, tiếp đãi",
        "on_reading": [
            "タイ"
        ],
        "kun_reading": [
            "ま-つ",
            "ま-ち"
        ],
        "level": "N4",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Wait, treat"
    },
    {
        "kanji": "別",
        "han_viet": "BIỆT",
        "meaning_vi": "Chia li, phân biệt, đặc biệt",
        "on_reading": [
            "ベツ"
        ],
        "kun_reading": [
            "わか-れる",
            "わ-ける"
        ],
        "level": "N4",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Division, distinction, special"
    },
    {
        "kanji": "消",
        "han_viet": "TIÊU",
        "meaning_vi": "Tiêu tan, biến mất, tiêu diệt",
        "on_reading": [
            "ショウ"
        ],
        "kun_reading": [
            "き-える",
            "け-す"
        ],
        "level": "N3",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Dissipated, disappeared, destroyed"
    },
    {
        "kanji": "開",
        "han_viet": "KHAI",
        "meaning_vi": "Mở, tổ chức, khai mạc",
        "on_reading": [
            "カイ"
        ],
        "kun_reading": [
            "ひら-く",
            "ひら-き",
            "-びら.き",
            "ひら-ける",
            "あ-く",
            "あ-ける"
        ],
        "level": "N4",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Open, organize, open"
    },
    {
        "kanji": "閉",
        "han_viet": "BẾ",
        "meaning_vi": "Đóng lại, bế mạc",
        "on_reading": [
            "ヘイ"
        ],
        "kun_reading": [
            "と-じる",
            "と-ざす",
            "し-める",
            "し-まる",
            "た-てる"
        ],
        "level": "N2",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Close, Close"
    },
    {
        "kanji": "止",
        "han_viet": "CHỈ",
        "meaning_vi": "Dừng lại",
        "on_reading": [
            "シ"
        ],
        "kun_reading": [
            "と-まる",
            "と-める",
            "さ-す",
            "とど-まる",
            "とど-める",
            "や-む",
            "や-める",
            "よ-す"
        ],
        "level": "N4",
        "strokes": 4,
        "examples": [],
        "radicals": "",
        "meaning_en": "Stop"
    },
    {
        "kanji": "曲",
        "han_viet": "KHÚC",
        "meaning_vi": "Khúc, đoạn",
        "on_reading": [
            "キョク"
        ],
        "kun_reading": [
            "ま-がる",
            "ま-げる",
            "くま"
        ],
        "level": "N3",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Pieces, segment"
    },
    {
        "kanji": "取",
        "han_viet": "THỦ",
        "meaning_vi": "Lấy",
        "on_reading": [
            "シュ"
        ],
        "kun_reading": [
            "と.る",
            "と.り",
            "と.り-",
            "とり",
            "-ど.り"
        ],
        "level": "N3",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Take"
    },
    {
        "kanji": "伝",
        "han_viet": "TRUYỀN",
        "meaning_vi": "Truyền đạt, truyền động",
        "on_reading": [
            "デン",
            "テン"
        ],
        "kun_reading": [
            "つた-える",
            "つた-わる",
            "つた-う",
            "つだ-う",
            "づた-い",
            "つて"
        ],
        "level": "N3",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Communicate, drive"
    },
    {
        "kanji": "呼",
        "han_viet": "HÔ",
        "meaning_vi": "Hô hấp, gọi",
        "on_reading": [
            "コ"
        ],
        "kun_reading": [
            "よ-ぶ"
        ],
        "level": "N2",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Respiratory, call"
    },
    {
        "kanji": "始",
        "han_viet": "THỦY",
        "meaning_vi": "Bắt đầu, mở đầu",
        "on_reading": [
            "シ"
        ],
        "kun_reading": [
            "はじ-める",
            "はじ-まる"
        ],
        "level": "N4",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Start, start"
    },
    {
        "kanji": "降",
        "han_viet": "GIÁNG",
        "meaning_vi": "Xuống, rơi",
        "on_reading": [
            "コウ",
            "ゴ"
        ],
        "kun_reading": [
            "お-りる",
            "お-ろす",
            "ふ-る",
            "ふ-り",
            "くだ-る",
            "くだ-す"
        ],
        "level": "N2",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Down, fall"
    },
    {
        "kanji": "住",
        "han_viet": "TRỤ, TRÚ",
        "meaning_vi": "Ở, trú, cư ngụ",
        "on_reading": [
            "ジュウ",
            "ヂュウ",
            "チュウ"
        ],
        "kun_reading": [
            "す-む",
            "す-まう",
            "ず-まい"
        ],
        "level": "N4",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Residence, residence, residence"
    },
    {
        "kanji": "塩",
        "han_viet": "DIÊM",
        "meaning_vi": "Muối",
        "on_reading": [
            "エン"
        ],
        "kun_reading": [
            "しお"
        ],
        "level": "N2",
        "strokes": 13,
        "examples": [],
        "radicals": "",
        "meaning_en": "Salt"
    },
    {
        "kanji": "砂",
        "han_viet": "SA",
        "meaning_vi": "Cát",
        "on_reading": [
            "サ",
            "シャ"
        ],
        "kun_reading": [
            "すな"
        ],
        "level": "N2",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Sand"
    },
    {
        "kanji": "糖",
        "han_viet": "ĐƯỜNG",
        "meaning_vi": "Đường ăn, chất ngọt",
        "on_reading": [
            "トウ"
        ],
        "kun_reading": [],
        "level": "N1",
        "strokes": 16,
        "examples": [],
        "radicals": "",
        "meaning_en": "Sugar food, sweeteners"
    },
    {
        "kanji": "立",
        "han_viet": "LẬP",
        "meaning_vi": "Đứng, thành lập",
        "on_reading": [
            "リツ",
            "リュウ",
            "リットル"
        ],
        "kun_reading": [
            "た-つ",
            "た-ち",
            "た-てる",
            "た-て",
            "だ-てる",
            "だ-て"
        ],
        "level": "N5",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Stand, establish"
    },
    {
        "kanji": "座",
        "han_viet": "TỌA",
        "meaning_vi": "Ngồi, quỳ gối, chòm sao",
        "on_reading": [
            "ザ"
        ],
        "kun_reading": [
            "すわ-る"
        ],
        "level": "N2",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Sitting, kneeling, constellation"
    },
    {
        "kanji": "使",
        "han_viet": "SỬ, SỨ",
        "meaning_vi": "Sử dụng, dùng",
        "on_reading": [
            "シ"
        ],
        "kun_reading": [
            "つか-う",
            "つか-い",
            "つか-い",
            "づか-い"
        ],
        "level": "N4",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Use, use"
    },
    {
        "kanji": "置",
        "han_viet": "TRÍ",
        "meaning_vi": "Đặt, để",
        "on_reading": [
            "チ"
        ],
        "kun_reading": [
            "お-く",
            "-お.き"
        ],
        "level": "N3",
        "strokes": 13,
        "examples": [],
        "radicals": "",
        "meaning_en": "Put, leave"
    },
    {
        "kanji": "作",
        "han_viet": "TÁC",
        "meaning_vi": "Làm, tạo nên",
        "on_reading": [
            "サク",
            "サ"
        ],
        "kun_reading": [
            "つく-る",
            "つく-り",
            "づく-り"
        ],
        "level": "N4",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Do, create"
    },
    {
        "kanji": "造",
        "han_viet": "TẠO",
        "meaning_vi": "Gây nên, tạo ra",
        "on_reading": [
            "ゾウ"
        ],
        "kun_reading": [
            "つく-る",
            "つく-り"
        ],
        "level": "N2",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Cause, create"
    },
    {
        "kanji": "資",
        "han_viet": "TƯ",
        "meaning_vi": "Của cải, vốn liếng, tiền lãi",
        "on_reading": [
            "シ"
        ],
        "kun_reading": [],
        "level": "N3",
        "strokes": 13,
        "examples": [],
        "radicals": "",
        "meaning_en": "Wealth, capital, interest"
    },
    {
        "kanji": "刻",
        "han_viet": "KHẮC",
        "meaning_vi": "Khắc, chạm trổ",
        "on_reading": [
            "コク"
        ],
        "kun_reading": [
            "きざ-む"
        ],
        "level": "N2",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Carved, carved"
    },
    {
        "kanji": "表",
        "han_viet": "BIỂU",
        "meaning_vi": "Mặt ngoài, biểu hiện",
        "on_reading": [
            "ヒョウ"
        ],
        "kun_reading": [
            "おもて",
            "あらわ-す",
            "あらわ-れる"
        ],
        "level": "N3",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Outside, expression"
    },
    {
        "kanji": "服",
        "han_viet": "PHỤC",
        "meaning_vi": "Quần áo, trang phục",
        "on_reading": [
            "フク"
        ],
        "kun_reading": [],
        "level": "N4",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Clothes, costumes"
    },
    {
        "kanji": "製",
        "han_viet": "CHẾ",
        "meaning_vi": "Sản xuất, làm ra, chế tạo",
        "on_reading": [
            "セイ"
        ],
        "kun_reading": [],
        "level": "N1",
        "strokes": 14,
        "examples": [],
        "radicals": "",
        "meaning_en": "Producing, making, manufacturing"
    },
    {
        "kanji": "品",
        "han_viet": "PHẨM",
        "meaning_vi": "Đồ vật, cái hay, phấm cách, hàng hóa, đếm số bữa ăn",
        "on_reading": [
            "ヒン",
            "ホン"
        ],
        "kun_reading": [
            "しな"
        ],
        "level": "N4",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Items, beauty, tanges, goods, counting meals"
    },
    {
        "kanji": "専",
        "han_viet": "CHUYÊN",
        "meaning_vi": "Chuyên môn, riêng biệt, độc nhất",
        "on_reading": [
            "セン"
        ],
        "kun_reading": [
            "もっぱ-ら"
        ],
        "level": "N2",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Expertise, separate, unique"
    },
    {
        "kanji": "門",
        "han_viet": "MÔN",
        "meaning_vi": "Cửa hai cánh",
        "on_reading": [
            "モン"
        ],
        "kun_reading": [
            "かど",
            "と"
        ],
        "level": "N4",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Double -wing"
    },
    {
        "kanji": "歯",
        "han_viet": "XỈ",
        "meaning_vi": "Răng",
        "on_reading": [
            "シ"
        ],
        "kun_reading": [
            "よわい",
            "は",
            "よわ-い",
            "よわい-する"
        ],
        "level": "N3",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Tooth"
    },
    {
        "kanji": "床",
        "han_viet": "SÀNG",
        "meaning_vi": "Giường, sàn nhà",
        "on_reading": [
            "ショウ"
        ],
        "kun_reading": [
            "とこ",
            "ゆか"
        ],
        "level": "N2",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Bed, floor"
    },
    {
        "kanji": "独",
        "han_viet": "ĐỘC",
        "meaning_vi": "Một mình, đơn độc",
        "on_reading": [
            "ドク",
            "トク"
        ],
        "kun_reading": [
            "ひと-り"
        ],
        "level": "N1",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Alone, alone"
    },
    {
        "kanji": "身",
        "han_viet": "THÂN, QUYÊN",
        "meaning_vi": "Bản thân",
        "on_reading": [
            "シン"
        ],
        "kun_reading": [
            "み"
        ],
        "level": "N3",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Self"
    },
    {
        "kanji": "思",
        "han_viet": "TƯ, TỨ",
        "meaning_vi": "Nghĩ ngợi, suy nghĩ",
        "on_reading": [
            "シ"
        ],
        "kun_reading": [
            "おも-う",
            "おもえら-く",
            "おぼ-す"
        ],
        "level": "N4",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Thinking, thinking"
    },
    {
        "kanji": "換",
        "han_viet": "HOÁN",
        "meaning_vi": "Thay thế; biến đổi; thời kì",
        "on_reading": [
            "カン"
        ],
        "kun_reading": [
            "か-える",
            "か-わる"
        ],
        "level": "N2",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Replace; change; period"
    },
    {
        "kanji": "浴",
        "han_viet": "DỤC",
        "meaning_vi": "Tắm rửa",
        "on_reading": [
            "ヨク"
        ],
        "kun_reading": [
            "あ-びる",
            "あ-びせる"
        ],
        "level": "N2",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Shower"
    },
    {
        "kanji": "押",
        "han_viet": "ÁP",
        "meaning_vi": "Ấn, đẩy",
        "on_reading": [
            "オウ"
        ],
        "kun_reading": [
            "お-す",
            "お-さえる",
            "お-し",
            "お-つ"
        ],
        "level": "N2",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Press, push"
    },
    {
        "kanji": "若",
        "han_viet": "NHƯỢC, NHÃ",
        "meaning_vi": "Trẻ tuổi, nếu như",
        "on_reading": [
            "ジャク",
            "ニャク",
            "ニャ"
        ],
        "kun_reading": [
            "わか-い",
            "わか",
            "も-しくわ",
            "も-し",
            "も-しくは",
            "ごと-し"
        ],
        "level": "N3",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Young, if"
    },
    {
        "kanji": "長",
        "han_viet": "TRƯỜNG",
        "meaning_vi": "Hình ảnh một người có mái tóc dài.",
        "on_reading": [
            "チョウ"
        ],
        "kun_reading": [
            "なが-い",
            "おさ"
        ],
        "level": "N5",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "The image of a person with long hair."
    },
    {
        "kanji": "短",
        "han_viet": "ĐOẢN",
        "meaning_vi": "Ngắn",
        "on_reading": [
            "タン"
        ],
        "kun_reading": [
            "みじか-い"
        ],
        "level": "N2",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Short"
    },
    {
        "kanji": "暗",
        "han_viet": "ÁM",
        "meaning_vi": "Tối tăm, bóng tối",
        "on_reading": [
            "アン"
        ],
        "kun_reading": [
            "くら-い"
        ],
        "level": "N3",
        "strokes": 13,
        "examples": [],
        "radicals": "",
        "meaning_en": "Darkness, darkness"
    },
    {
        "kanji": "背",
        "han_viet": "BỐI",
        "meaning_vi": "Chiều cao, lưng",
        "on_reading": [
            "ハイ"
        ],
        "kun_reading": [
            "せ",
            "せい",
            "そむ-く",
            "そむ-ける"
        ],
        "level": "N2",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Height, back"
    },
    {
        "kanji": "頭",
        "han_viet": "ĐẦU",
        "meaning_vi": "Đầu",
        "on_reading": [
            "トウ",
            "ズ",
            "ト"
        ],
        "kun_reading": [
            "あたま",
            "かしら",
            "-がしら",
            "かぶり"
        ],
        "level": "N3",
        "strokes": 16,
        "examples": [],
        "radicals": "",
        "meaning_en": "Head"
    },
    {
        "kanji": "体",
        "han_viet": "THỂ",
        "meaning_vi": "Thân mình, hình dạng, thể, dạng",
        "on_reading": [
            "タイ",
            "テイ"
        ],
        "kun_reading": [
            "からだ",
            "かたち"
        ],
        "level": "N4",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Body, shape, form, form"
    },
    {
        "kanji": "髪",
        "han_viet": "PHÁT",
        "meaning_vi": "Tóc",
        "on_reading": [
            "ハツ"
        ],
        "kun_reading": [
            "かみ"
        ],
        "level": "N2",
        "strokes": 14,
        "examples": [],
        "radicals": "",
        "meaning_en": "Hair"
    },
    {
        "kanji": "顔",
        "han_viet": "NHAN",
        "meaning_vi": "Khuôn mặt",
        "on_reading": [
            "ガン"
        ],
        "kun_reading": [
            "かお"
        ],
        "level": "N3",
        "strokes": 18,
        "examples": [],
        "radicals": "",
        "meaning_en": "Face"
    },
    {
        "kanji": "耳",
        "han_viet": "NHĨ",
        "meaning_vi": "Cái tai",
        "on_reading": [
            "ジ"
        ],
        "kun_reading": [
            "みみ"
        ],
        "level": "N5",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Ear"
    },
    {
        "kanji": "足",
        "han_viet": "TÚC",
        "meaning_vi": "Chân, đầy đủ",
        "on_reading": [
            "ソク"
        ],
        "kun_reading": [
            "あし",
            "た-りる",
            "た-る",
            "た-す"
        ],
        "level": "N4",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Foot, full"
    },
    {
        "kanji": "緑",
        "han_viet": "LỤC",
        "meaning_vi": "Xanh lá cây",
        "on_reading": [
            "リョク",
            "ロク"
        ],
        "kun_reading": [
            "みどり"
        ],
        "level": "N1",
        "strokes": 14,
        "examples": [],
        "radicals": "",
        "meaning_en": "Green"
    },
    {
        "kanji": "寺",
        "han_viet": "TỰ",
        "meaning_vi": "Chùa, ngôi chùa",
        "on_reading": [
            "ジ"
        ],
        "kun_reading": [
            "てら"
        ],
        "level": "N2",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Pagoda, temple"
    },
    {
        "kanji": "神",
        "han_viet": "THẦN",
        "meaning_vi": "Thần thánh",
        "on_reading": [
            "シン",
            "ジン"
        ],
        "kun_reading": [
            "かみ",
            "かん",
            "こう"
        ],
        "level": "N3",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Hallow"
    },
    {
        "kanji": "証",
        "han_viet": "CHỨNG",
        "meaning_vi": "Chứng cớ, bằng chứng",
        "on_reading": [
            "ショウ"
        ],
        "kun_reading": [
            "あかし"
        ],
        "level": "N1",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Evidence, evidence"
    },
    {
        "kanji": "確",
        "han_viet": "XÁC",
        "meaning_vi": "Chắc chắn, bảo đảm",
        "on_reading": [
            "カク",
            "コウ"
        ],
        "kun_reading": [
            "たし-か",
            "たし-かめる"
        ],
        "level": "N3",
        "strokes": 15,
        "examples": [],
        "radicals": "",
        "meaning_en": "Certainly, guarantee"
    },
    {
        "kanji": "認",
        "han_viet": "NHẬN",
        "meaning_vi": "Nhận biết, công nhận",
        "on_reading": [
            "ニン"
        ],
        "kun_reading": [
            "みと-める",
            "したた-める"
        ],
        "level": "N3",
        "strokes": 14,
        "examples": [],
        "radicals": "",
        "meaning_en": "Recognize, recognition"
    },
    {
        "kanji": "額",
        "han_viet": "NGẠCH",
        "meaning_vi": "Cái trán, khoản tiền",
        "on_reading": [
            "ガク"
        ],
        "kun_reading": [
            "ひたい"
        ],
        "level": "N2",
        "strokes": 18,
        "examples": [],
        "radicals": "",
        "meaning_en": "Forehead, money"
    },
    {
        "kanji": "覚",
        "han_viet": "GIÁC",
        "meaning_vi": "Nhớ, cảm thấy, tỉnh ngộ",
        "on_reading": [
            "カク"
        ],
        "kun_reading": [
            "おぼ-える",
            "さ-ます",
            "さ-める",
            "さと-る"
        ],
        "level": "N3",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Remember, feel, wake up"
    },
    {
        "kanji": "忘",
        "han_viet": "VONG",
        "meaning_vi": "Quên, bỏ sót",
        "on_reading": [
            "ボウ"
        ],
        "kun_reading": [
            "わす-れる"
        ],
        "level": "N2",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Forgot, miss"
    },
    {
        "kanji": "払",
        "han_viet": "PHẤT",
        "meaning_vi": "Trả, giao nộp",
        "on_reading": [
            "フツ",
            "ヒツ",
            "ホツ"
        ],
        "kun_reading": [
            "はら-う"
        ],
        "level": "N2",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Pay, hand over"
    },
    {
        "kanji": "返",
        "han_viet": "PHẢN",
        "meaning_vi": "Trả lại, phản hồi",
        "on_reading": [
            "ヘン"
        ],
        "kun_reading": [
            "かえ-す",
            "かえ-る"
        ],
        "level": "N3",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Return, feedback"
    },
    {
        "kanji": "脱",
        "han_viet": "THOÁT",
        "meaning_vi": "Cởi, bỏ ra, thoát khỏi, lọai bỏ",
        "on_reading": [
            "ダツ"
        ],
        "kun_reading": [
            "ぬ-ぐ",
            "ぬ-げる"
        ],
        "level": "N1",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Take off, remove, get rid of, remove"
    },
    {
        "kanji": "心",
        "han_viet": "TÂM",
        "meaning_vi": "Quả tim, tâm trí, tâm",
        "on_reading": [
            "シン"
        ],
        "kun_reading": [
            "こころ",
            "ごころ"
        ],
        "level": "N4",
        "strokes": 4,
        "examples": [],
        "radicals": "",
        "meaning_en": "Heart, mind, mind"
    },
    {
        "kanji": "配",
        "han_viet": "PHỐI",
        "meaning_vi": "Phân phát",
        "on_reading": [
            "ハイ"
        ],
        "kun_reading": [
            "くば-る"
        ],
        "level": "N3",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Distribution"
    },
    {
        "kanji": "業",
        "han_viet": "NGHIỆP",
        "meaning_vi": "Nghề nghiệp, sự nghiệp",
        "on_reading": [
            "ギョウ",
            "ゴウ"
        ],
        "kun_reading": [
            "わざ"
        ],
        "level": "N4",
        "strokes": 13,
        "examples": [],
        "radicals": "",
        "meaning_en": "Occupation, career"
    },
    {
        "kanji": "張",
        "han_viet": "TRƯƠNG",
        "meaning_vi": "Kéo dài, mở rộng",
        "on_reading": [
            "チョウ"
        ],
        "kun_reading": [
            "は-る",
            "‐は‐り",
            "‐ば‐り"
        ],
        "level": "N2",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Extended, expanded"
    },
    {
        "kanji": "薬",
        "han_viet": "DƯỢC",
        "meaning_vi": "Thuốc",
        "on_reading": [
            "ヤク"
        ],
        "kun_reading": [
            "くすり"
        ],
        "level": "N3",
        "strokes": 16,
        "examples": [],
        "radicals": "",
        "meaning_en": "Medicine"
    },
    {
        "kanji": "丈",
        "han_viet": "TRƯỢNG",
        "meaning_vi": "Đơn vị đo (bằng 10 thước), đo, chỉ",
        "on_reading": [
            "ジョウ"
        ],
        "kun_reading": [
            "たけ",
            "だけ"
        ],
        "level": "N1",
        "strokes": 3,
        "examples": [],
        "radicals": "",
        "meaning_en": "Measurement unit (equal to 10 meters), measurement, indicator"
    },
    {
        "kanji": "危",
        "han_viet": "NGUY",
        "meaning_vi": "Nguy hiểm, hiểm nghèo",
        "on_reading": [
            "キ"
        ],
        "kun_reading": [
            "あぶ-ない",
            "あや-うい"
        ],
        "level": "N2",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Dangerous, dangerous"
    },
    {
        "kanji": "問",
        "han_viet": "VẤN",
        "meaning_vi": "Hỏi, tra xét, hỏi thăm",
        "on_reading": [
            "モン"
        ],
        "kun_reading": [
            "と-う",
            "と-い",
            "とん"
        ],
        "level": "N4",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Ask, check, ask"
    },
    {
        "kanji": "答",
        "han_viet": "ĐÁP",
        "meaning_vi": "Trả lời",
        "on_reading": [
            "トウ"
        ],
        "kun_reading": [
            "こた-える",
            "こた-え"
        ],
        "level": "N4",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Reply"
    },
    {
        "kanji": "禁",
        "han_viet": "CẤM",
        "meaning_vi": "Cấm đoán, ngăn chặn",
        "on_reading": [
            "キン"
        ],
        "kun_reading": [],
        "level": "N2",
        "strokes": 13,
        "examples": [],
        "radicals": "",
        "meaning_en": "Prohibition, prevent"
    },
    {
        "kanji": "煙",
        "han_viet": "YÊN",
        "meaning_vi": "Khói",
        "on_reading": [
            "エン"
        ],
        "kun_reading": [
            "けむり",
            "けむ-る",
            "けむ-い"
        ],
        "level": "N2",
        "strokes": 13,
        "examples": [],
        "radicals": "",
        "meaning_en": "Smoke"
    },
    {
        "kanji": "健",
        "han_viet": "KIỆN",
        "meaning_vi": "Khỏe mạnh, tráng kiện",
        "on_reading": [
            "ケン"
        ],
        "kun_reading": [
            "すこ-やか"
        ],
        "level": "N2",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Healthy, coated"
    },
    {
        "kanji": "康",
        "han_viet": "KHANG",
        "meaning_vi": "Khoẻ mạnh, khỏe khoắn",
        "on_reading": [
            "コウ"
        ],
        "kun_reading": [],
        "level": "N2",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Healthy, healthy"
    },
    {
        "kanji": "保",
        "han_viet": "BẢO",
        "meaning_vi": "Bảo đảm, giữ gìn, duy trì",
        "on_reading": [
            "ホ",
            "ホウ"
        ],
        "kun_reading": [
            "たも-つ"
        ],
        "level": "N1",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Guarantee, preserve, maintain"
    },
    {
        "kanji": "険",
        "han_viet": "HIỂM",
        "meaning_vi": "Nguy hiểm, mạo hiểm",
        "on_reading": [
            "ケン"
        ],
        "kun_reading": [
            "けわ-しい"
        ],
        "level": "N3",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Dangerous, adventurous"
    },
    {
        "kanji": "風",
        "han_viet": "PHONG",
        "meaning_vi": "Gió",
        "on_reading": [
            "フウ",
            "フ"
        ],
        "kun_reading": [
            "かぜ",
            "かざ-",
            "-かぜ"
        ],
        "level": "N4",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Wind"
    },
    {
        "kanji": "着",
        "han_viet": "TRƯỚC",
        "meaning_vi": "Đến nơi, mặc (quần áo)",
        "on_reading": [
            "チャク",
            "ジャク"
        ],
        "kun_reading": [
            "き-る",
            "ぎ",
            "き-せる",
            "き-せ",
            "つ-く",
            "つ-ける"
        ],
        "level": "N4",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Upon arrival, wearing (clothes)"
    },
    {
        "kanji": "弾",
        "han_viet": "ĐÀN, ĐẠN",
        "meaning_vi": "Đánh đàn, viên đạn",
        "on_reading": [
            "ダン",
            "タン"
        ],
        "kun_reading": [
            "ひ-く",
            "ひ-き",
            "はず-む",
            "たま",
            "はじ-く",
            "はじ-ける",
            "ただ-す",
            "はじ-きゆみ"
        ],
        "level": "N1",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Play the guitar, the bullet"
    },
    {
        "kanji": "集",
        "han_viet": "TẬP",
        "meaning_vi": "Tập hợp, gom lại",
        "on_reading": [
            "シュウ"
        ],
        "kun_reading": [
            "あつ-まる",
            "あつ-める",
            "つど-う"
        ],
        "level": "N4",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Gather, gather"
    },
    {
        "kanji": "捨",
        "han_viet": "XẢ",
        "meaning_vi": "Vứt bỏ",
        "on_reading": [
            "シャ"
        ],
        "kun_reading": [
            "す-てる"
        ],
        "level": "N2",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Abandon"
    },
    {
        "kanji": "運",
        "han_viet": "VẬN",
        "meaning_vi": "Vận may, chuyển động",
        "on_reading": [
            "ウン"
        ],
        "kun_reading": [
            "はこ-ぶ"
        ],
        "level": "N4",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Luck, motion"
    },
    {
        "kanji": "予",
        "han_viet": "DỰ",
        "meaning_vi": "Dự định",
        "on_reading": [
            "ヨ",
            "シャ"
        ],
        "kun_reading": [
            "あらかじ-め"
        ],
        "level": "N3",
        "strokes": 4,
        "examples": [],
        "radicals": "",
        "meaning_en": "Plan"
    },
    {
        "kanji": "際",
        "han_viet": "TẾ",
        "meaning_vi": "Bên cạnh, lúc, dịp",
        "on_reading": [
            "サイ"
        ],
        "kun_reading": [
            "きわ",
            "-ぎわ"
        ],
        "level": "N3",
        "strokes": 14,
        "examples": [],
        "radicals": "",
        "meaning_en": "Beside, at the occasion"
    },
    {
        "kanji": "現",
        "han_viet": "HIỆN",
        "meaning_vi": "Xuất hiện, tồn tại, bây giờ",
        "on_reading": [
            "ゲン"
        ],
        "kun_reading": [
            "あらわ-れる",
            "あらわ-す",
            "うつつ",
            "うつ-つ"
        ],
        "level": "N3",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Appears, exists, now"
    },
    {
        "kanji": "趣",
        "han_viet": "THÚ",
        "meaning_vi": "Thú vị, tao nhã, xuất hiện",
        "on_reading": [
            "シュ"
        ],
        "kun_reading": [
            "おもむき",
            "おもむ-く"
        ],
        "level": "N1",
        "strokes": 15,
        "examples": [],
        "radicals": "",
        "meaning_en": "Interesting, elegant, appearing"
    },
    {
        "kanji": "味",
        "han_viet": "VỊ",
        "meaning_vi": "Mùi, hương vị",
        "on_reading": [
            "ミ"
        ],
        "kun_reading": [
            "あじ",
            "あじ-わう"
        ],
        "level": "N4",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Smell, flavor"
    },
    {
        "kanji": "記",
        "han_viet": "KÍ",
        "meaning_vi": "Ghi chép",
        "on_reading": [
            "キ"
        ],
        "kun_reading": [
            "しる-す"
        ],
        "level": "N3",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Record"
    },
    {
        "kanji": "祈",
        "han_viet": "KỲ",
        "meaning_vi": "Cầu phúc, cầu nguyện",
        "on_reading": [
            "キ"
        ],
        "kun_reading": [
            "いの-る"
        ],
        "level": "N2",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Praying, praying"
    },
    {
        "kanji": "課",
        "han_viet": "KHÓA",
        "meaning_vi": "Bài học, ban",
        "on_reading": [
            "カ"
        ],
        "kun_reading": [],
        "level": "N2",
        "strokes": 15,
        "examples": [],
        "radicals": "",
        "meaning_en": "Lesson, board"
    },
    {
        "kanji": "馬",
        "han_viet": "MÃ",
        "meaning_vi": "Con ngựa",
        "on_reading": [
            "バ"
        ],
        "kun_reading": [
            "うま",
            "ま"
        ],
        "level": "N3",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Horse"
    },
    {
        "kanji": "牧",
        "han_viet": "MỤC",
        "meaning_vi": "Chăn nuôi",
        "on_reading": [
            "ボク"
        ],
        "kun_reading": [
            "まき"
        ],
        "level": "N1",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Livestock"
    },
    {
        "kanji": "当",
        "han_viet": "ĐƯƠNG, ĐÁNG",
        "meaning_vi": "Tương đương, tương ứng",
        "on_reading": [
            "トウ"
        ],
        "kun_reading": [
            "あ-たる",
            "あ-たり",
            "あ-てる",
            "あ-て",
            "まさ-に",
            "まさ-にべし"
        ],
        "level": "N3",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Equivalent, corresponding"
    },
    {
        "kanji": "練",
        "han_viet": "LUYỆN",
        "meaning_vi": "Luyện tập, huấn luyện",
        "on_reading": [
            "レン"
        ],
        "kun_reading": [
            "ね-る",
            "ね-り"
        ],
        "level": "N2",
        "strokes": 14,
        "examples": [],
        "radicals": "",
        "meaning_en": "Practice, training"
    },
    {
        "kanji": "習",
        "han_viet": "TẬP",
        "meaning_vi": "Học hành, luyện tập",
        "on_reading": [
            "シュウ",
            "ジュ"
        ],
        "kun_reading": [
            "なら-う",
            "なら-い"
        ],
        "level": "N4",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Study, practice"
    },
    {
        "kanji": "掃",
        "han_viet": "TẢO",
        "meaning_vi": "Quét dọn, cái chổi",
        "on_reading": [
            "ソウ",
            "シュ"
        ],
        "kun_reading": [
            "は-く"
        ],
        "level": "N2",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Cleaning, broom"
    },
    {
        "kanji": "除",
        "han_viet": "TRỪ",
        "meaning_vi": "Loại bỏ, xóa bỏ, rút đi",
        "on_reading": [
            "ジョ",
            "ジ"
        ],
        "kun_reading": [
            "のぞ-く"
        ],
        "level": "N2",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Remove, delete, withdraw"
    },
    {
        "kanji": "濯",
        "han_viet": "TRẠC",
        "meaning_vi": "Rửa, giặt, súc miệng",
        "on_reading": [
            "タク"
        ],
        "kun_reading": [
            "すす-ぐ",
            "ゆす-ぐ"
        ],
        "level": "N2",
        "strokes": 17,
        "examples": [],
        "radicals": "",
        "meaning_en": "Wash, wash, gargle"
    },
    {
        "kanji": "泊",
        "han_viet": "BẠC, PHÁCH",
        "meaning_vi": "Dừng lại, nghỉ lại",
        "on_reading": [
            "ハク",
            "バク",
            "ヒャク"
        ],
        "kun_reading": [
            "とま-る",
            "うす-い"
        ],
        "level": "N2",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Stop, rest"
    },
    {
        "kanji": "眠",
        "han_viet": "MIÊN",
        "meaning_vi": "Ngủ",
        "on_reading": [
            "ミン"
        ],
        "kun_reading": [
            "ねむ-る",
            "ねむ-い"
        ],
        "level": "N2",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Sleep"
    },
    {
        "kanji": "弱",
        "han_viet": "NHƯỢC",
        "meaning_vi": "Yếu ớt, nhu nhược",
        "on_reading": [
            "ジャク"
        ],
        "kun_reading": [
            "よわ-い",
            "よわ-る",
            "よわ-まる",
            "よわ-める"
        ],
        "level": "N2",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Weakness, weakness"
    },
    {
        "kanji": "調",
        "han_viet": "ĐIỀU, ĐIỆU",
        "meaning_vi": "Điều tra, nhịp điệu",
        "on_reading": [
            "チョウ"
        ],
        "kun_reading": [
            "しら-べる",
            "しら-べ",
            "ととの-う",
            "ととの-える"
        ],
        "level": "N3",
        "strokes": 15,
        "examples": [],
        "radicals": "",
        "meaning_en": "Investigation, rhythm"
    },
    {
        "kanji": "相",
        "han_viet": "TƯƠNG, TƯỚNG",
        "meaning_vi": "Cùng chung, qua lại lẫn nhau",
        "on_reading": [
            "ソウ",
            "ショウ"
        ],
        "kun_reading": [
            "あい"
        ],
        "level": "N3",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Together, interact with each other"
    },
    {
        "kanji": "撲",
        "han_viet": "PHÁC, BẠC, PHỐC",
        "meaning_vi": "Đánh, đập",
        "on_reading": [
            "ボク"
        ],
        "kun_reading": [],
        "level": "N1",
        "strokes": 15,
        "examples": [],
        "radicals": "",
        "meaning_en": "Beat"
    },
    {
        "kanji": "度",
        "han_viet": "ĐỘ, ĐẠC",
        "meaning_vi": "Lần",
        "on_reading": [
            "ド",
            "ト",
            "タク"
        ],
        "kun_reading": [
            "たび",
            "た-い"
        ],
        "level": "N4",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Time"
    },
    {
        "kanji": "乾",
        "han_viet": "CÀN, CAN, KIỀN",
        "meaning_vi": "Cạn, khô",
        "on_reading": [
            "カン"
        ],
        "kun_reading": [
            "かわ-く",
            "かわ-かす"
        ],
        "level": "N2",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Dry, dry"
    },
    {
        "kanji": "杯",
        "han_viet": "BÔI",
        "meaning_vi": "Chén, ly",
        "on_reading": [
            "ハイ"
        ],
        "kun_reading": [
            "さかずき"
        ],
        "level": "N2",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Cup, cup"
    },
    {
        "kanji": "実",
        "han_viet": "THỰC",
        "meaning_vi": "Chân thực, thành thực",
        "on_reading": [
            "ジツ",
            "シツ"
        ],
        "kun_reading": [
            "み",
            "みの-る",
            "まこと",
            "みの",
            "みち-る"
        ],
        "level": "N3",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Honest, honest"
    },
    {
        "kanji": "回",
        "han_viet": "HỒI",
        "meaning_vi": "Lần, quay lại, trở lại",
        "on_reading": [
            "カイ",
            "エ"
        ],
        "kun_reading": [
            "まわ-る",
            "ま-り",
            "まわ-す",
            "まわ-し",
            "もとお-る",
            "か-える"
        ],
        "level": "N3",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Times, come back, come back"
    },
    {
        "kanji": "無",
        "han_viet": "MÔ, VÔ",
        "meaning_vi": "Không có",
        "on_reading": [
            "ム",
            "ブ"
        ],
        "kun_reading": [
            "な.い"
        ],
        "level": "N2",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Do not have"
    },
    {
        "kanji": "要",
        "han_viet": "YẾU, YÊU",
        "meaning_vi": "Thiết yếu, điểm chính",
        "on_reading": [
            "ヨウ"
        ],
        "kun_reading": [
            "い.る",
            "かなめ"
        ],
        "level": "N3",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Essential, main points"
    },
    {
        "kanji": "直",
        "han_viet": "TRỰC",
        "meaning_vi": "Thẳng thắn, ngay thẳng, sửa chữa",
        "on_reading": [
            "チョク",
            "ジキ",
            "ジカ"
        ],
        "kun_reading": [
            "ただ-ちに",
            "なお-す",
            "なお-る",
            "なお-き",
            "す-ぐ"
        ],
        "level": "N3",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Frankly, upright, repair"
    },
    {
        "kanji": "修",
        "han_viet": "TU",
        "meaning_vi": "Học, chỉnh sửa, chỉnh lý",
        "on_reading": [
            "シュウ",
            "シュ"
        ],
        "kun_reading": [
            "おさ-める",
            "おさ-まる"
        ],
        "level": "N2",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Study, edit, adjust"
    },
    {
        "kanji": "僕",
        "han_viet": "PHÓ, BỘC",
        "meaning_vi": "Tôi, tao tớ, người hầu, đầy tớ",
        "on_reading": [
            "ボク"
        ],
        "kun_reading": [
            "しもべ"
        ],
        "level": "N2",
        "strokes": 14,
        "examples": [],
        "radicals": "",
        "meaning_en": "Me, Me, servant, servant"
    },
    {
        "kanji": "君",
        "han_viet": "QUÂN",
        "meaning_vi": "Cậu, bạn, mày (chỉ người con trai)",
        "on_reading": [
            "クン"
        ],
        "kun_reading": [
            "きみ",
            "ぎみ"
        ],
        "level": "N3",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "You, friend, you (only a son)"
    },
    {
        "kanji": "言",
        "han_viet": "NGÔN",
        "meaning_vi": "Nói",
        "on_reading": [
            "ゲン",
            "ゴン"
        ],
        "kun_reading": [
            "い-う",
            "こと"
        ],
        "level": "N4",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Speak"
    },
    {
        "kanji": "価",
        "han_viet": "GIÁ",
        "meaning_vi": "Giá trị, giá cả",
        "on_reading": [
            "カ",
            "ケ"
        ],
        "kun_reading": [
            "あたい"
        ],
        "level": "N2",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Value, price"
    },
    {
        "kanji": "良",
        "han_viet": "LƯƠNG",
        "meaning_vi": "Tốt đẹp",
        "on_reading": [
            "リョウ"
        ],
        "kun_reading": [
            "よ-い"
        ],
        "level": "N2",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Good"
    },
    {
        "kanji": "色",
        "han_viet": "SẮC",
        "meaning_vi": "Màu, màu sắc",
        "on_reading": [
            "ショク",
            "シキ"
        ],
        "kun_reading": [
            "いろ"
        ],
        "level": "N1",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Color, color"
    },
    {
        "kanji": "勝",
        "han_viet": "THẮNG",
        "meaning_vi": "Chiến thắng",
        "on_reading": [
            "ショウ"
        ],
        "kun_reading": [
            "か-つ",
            "が-ち",
            "まさ-る",
            "すぐ-れる",
            "か-つ"
        ],
        "level": "N3",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Win"
    },
    {
        "kanji": "負",
        "han_viet": "PHỤ",
        "meaning_vi": "Thua, tiêu cực, chịu đựng",
        "on_reading": [
            "フ"
        ],
        "kun_reading": [
            "ま-ける",
            "ま-かす",
            "お-う"
        ],
        "level": "N3",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Losing, negative, endured"
    },
    {
        "kanji": "不",
        "han_viet": "BẤT, PHI",
        "meaning_vi": "Chẳng, không thể",
        "on_reading": [
            "フ",
            "ブ"
        ],
        "kun_reading": [],
        "level": "N4",
        "strokes": 4,
        "examples": [],
        "radicals": "",
        "meaning_en": "No, impossible"
    },
    {
        "kanji": "同",
        "han_viet": "ĐỒNG",
        "meaning_vi": "Cùng nhau, bằng nhau, giống nhau",
        "on_reading": [
            "ドウ"
        ],
        "kun_reading": [
            "おな-じ"
        ],
        "level": "N4",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Together, equal, the same"
    },
    {
        "kanji": "首",
        "han_viet": "THỦ",
        "meaning_vi": "Cái đầu, cái cổ",
        "on_reading": [
            "シュ"
        ],
        "kun_reading": [
            "くび"
        ],
        "level": "N3",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Head, neck"
    },
    {
        "kanji": "統",
        "han_viet": "THỐNG",
        "meaning_vi": "Toàn bộ, mối quan hệ, hệ thống",
        "on_reading": [
            "トウ"
        ],
        "kun_reading": [
            "す-べる",
            "ほび-る"
        ],
        "level": "N1",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Whole, relationship, system"
    },
    {
        "kanji": "領",
        "han_viet": "LÃNH, LĨNH",
        "meaning_vi": "Cổ áo, lĩnh, nhận",
        "on_reading": [
            "リョウ"
        ],
        "kun_reading": [
            "えり"
        ],
        "level": "N2",
        "strokes": 14,
        "examples": [],
        "radicals": "",
        "meaning_en": "Collar, field, receive"
    },
    {
        "kanji": "政",
        "han_viet": "CHÁNH, CHÍNH",
        "meaning_vi": "Chính trị, chính quyền",
        "on_reading": [
            "セイ",
            "ショウ"
        ],
        "kun_reading": [
            "まつりごと",
            "まん"
        ],
        "level": "N3",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Politics, government"
    },
    {
        "kanji": "治",
        "han_viet": "TRỊ",
        "meaning_vi": "Sửa, chữa trị",
        "on_reading": [
            "ジ",
            "チ"
        ],
        "kun_reading": [
            "おさ-める",
            "おさ-まる",
            "なお-る",
            "なお-す"
        ],
        "level": "N3",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Repair, treatment"
    },
    {
        "kanji": "試",
        "han_viet": "THÍ",
        "meaning_vi": "Thử nghiệm, thi",
        "on_reading": [
            "シ"
        ],
        "kun_reading": [
            "こころ-みる",
            "ため-す"
        ],
        "level": "N4",
        "strokes": 13,
        "examples": [],
        "radicals": "",
        "meaning_en": "Test, test"
    },
    {
        "kanji": "合",
        "han_viet": "HỢP, HIỆP",
        "meaning_vi": "Hợp, vừa ý, hợp lại",
        "on_reading": [
            "ゴウ",
            "ガッ",
            "カッ"
        ],
        "kun_reading": [
            "あ-う",
            "あ-わせる"
        ],
        "level": "N4",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Suitable, satisfactory, combined"
    },
    {
        "kanji": "意",
        "han_viet": "Ý",
        "meaning_vi": "Ý định, ý chí",
        "on_reading": [
            "イ"
        ],
        "kun_reading": [],
        "level": "N4",
        "strokes": 13,
        "examples": [],
        "radicals": "",
        "meaning_en": "Intention, will"
    },
    {
        "kanji": "交",
        "han_viet": "GIAO",
        "meaning_vi": "Giao lưu, giao thông",
        "on_reading": [
            "コウ"
        ],
        "kun_reading": [
            "ま-じる",
            "ま-ざる",
            "まじ-える",
            "ま-ぜる",
            "まじ-わる",
            "か-う"
        ],
        "level": "N3",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Exchange, traffic"
    },
    {
        "kanji": "最",
        "han_viet": "TỐI",
        "meaning_vi": "Rất, giỏi hơn, cao nhất",
        "on_reading": [
            "サイ",
            "シュ"
        ],
        "kun_reading": [
            "もっと-も",
            "つま"
        ],
        "level": "N3",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Very, better, highest"
    },
    {
        "kanji": "眼",
        "han_viet": "NHÃN",
        "meaning_vi": "Con mắt, ánh mắt",
        "on_reading": [
            "ガン",
            "ゲン"
        ],
        "kun_reading": [
            "まなこ",
            "め"
        ],
        "level": "N1",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Eyes, eyes"
    },
    {
        "kanji": "鏡",
        "han_viet": "KÍNH",
        "meaning_vi": "Cái gương",
        "on_reading": [
            "キョウ",
            "ケイ"
        ],
        "kun_reading": [
            "かがみ"
        ],
        "level": "N1",
        "strokes": 19,
        "examples": [],
        "radicals": "",
        "meaning_en": "Mirror"
    },
    {
        "kanji": "賃",
        "han_viet": "NHẪM",
        "meaning_vi": "Thuê, tiền công",
        "on_reading": [
            "チン"
        ],
        "kun_reading": [],
        "level": "N2",
        "strokes": 13,
        "examples": [],
        "radicals": "",
        "meaning_en": "Rent, wages"
    },
    {
        "kanji": "布",
        "han_viet": "BỐ",
        "meaning_vi": "Vải",
        "on_reading": [
            "フ"
        ],
        "kun_reading": [
            "ぬの"
        ],
        "level": "N2",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Fabric"
    },
    {
        "kanji": "団",
        "han_viet": "ĐOÀN",
        "meaning_vi": "Tập thể, đoàn thể",
        "on_reading": [
            "ダン",
            "トン"
        ],
        "kun_reading": [
            "かたまり",
            "まる-い"
        ],
        "level": "N2",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Collective, mass organizations"
    },
    {
        "kanji": "里",
        "han_viet": "LÝ",
        "meaning_vi": "Dặm, làng xóm",
        "on_reading": [
            "リ"
        ],
        "kun_reading": [
            "さと"
        ],
        "level": "N1",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Mile, village"
    },
    {
        "kanji": "城",
        "han_viet": "THÀNH",
        "meaning_vi": "Thành lũy, lâu đài",
        "on_reading": [
            "ジョウ"
        ],
        "kun_reading": [
            "しろ"
        ],
        "level": "N2",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Citadel, Castle"
    },
    {
        "kanji": "余",
        "han_viet": "Dư",
        "meaning_vi": "Thừa ra, số lẻ ra, ngoài ra",
        "on_reading": [
            "ヨ"
        ],
        "kun_reading": [
            "あま-る",
            "あま-り",
            "あま-す"
        ],
        "level": "N3",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Excess, odd numbers, in addition"
    },
    {
        "kanji": "発",
        "han_viet": "PHÁT",
        "meaning_vi": "Bắt đầu, xuất phát, phát hiện",
        "on_reading": [
            "ハツ",
            "ホツ"
        ],
        "kun_reading": [
            "た-つ",
            "あば-く",
            "おこ-る",
            "つか-わす",
            "はな-つ"
        ],
        "level": "N4",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Start, start, discover"
    },
    {
        "kanji": "道",
        "han_viet": "ĐẠO, ĐÁO",
        "meaning_vi": "Con đường, con phố",
        "on_reading": [
            "ドウ",
            "トウ"
        ],
        "kun_reading": [
            "みち"
        ],
        "level": "N4",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "The road, the street"
    },
    {
        "kanji": "操",
        "han_viet": "THAO, THÁO",
        "meaning_vi": "Thao tác, điều khiển",
        "on_reading": [
            "ソウ",
            "サン"
        ],
        "kun_reading": [
            "あやつ-る",
            "みさお"
        ],
        "level": "N2",
        "strokes": 16,
        "examples": [],
        "radicals": "",
        "meaning_en": "Operation, control"
    },
    {
        "kanji": "信",
        "han_viet": "TÍN",
        "meaning_vi": "Tin, tin cậy, tín nhiệm",
        "on_reading": [
            "シン"
        ],
        "kun_reading": [
            "しん-じる"
        ],
        "level": "N3",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "News, trust, trust"
    },
    {
        "kanji": "引",
        "han_viet": "DẪN",
        "meaning_vi": "Kéo dài, rút ra",
        "on_reading": [
            "イン"
        ],
        "kun_reading": [
            "ひ-く",
            "ひ-き",
            "ひ-ける"
        ],
        "level": "N3",
        "strokes": 4,
        "examples": [],
        "radicals": "",
        "meaning_en": "Prolonged, drawn"
    },
    {
        "kanji": "越",
        "han_viet": "VIỆT, HOẠT",
        "meaning_vi": "Đi qua, vượt trên, Việt Nam",
        "on_reading": [
            "エツ",
            "オツ"
        ],
        "kun_reading": [
            "こ-す",
            "こ-える"
        ],
        "level": "N3",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Passing, surpassing, Vietnam"
    },
    {
        "kanji": "触",
        "han_viet": "XÚC",
        "meaning_vi": "Tiếp xúc, sờ, chạm",
        "on_reading": [
            "ショク"
        ],
        "kun_reading": [
            "ふ-れる",
            "さわ-る",
            "さわ"
        ],
        "level": "N2",
        "strokes": 13,
        "examples": [],
        "radicals": "",
        "meaning_en": "Contact, touch, touch"
    },
    {
        "kanji": "渡",
        "han_viet": "ĐỘ",
        "meaning_vi": "Băng qua, đi qua",
        "on_reading": [
            "ト"
        ],
        "kun_reading": [
            "わた-る",
            "わた-す"
        ],
        "level": "N2",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Crossing, passing"
    },
    {
        "kanji": "故",
        "han_viet": "CỐ",
        "meaning_vi": "Nguyên nhân, chết, cũ, trở ngại",
        "on_reading": [
            "コ"
        ],
        "kun_reading": [
            "ゆえ",
            "ふる-い",
            "もと"
        ],
        "level": "N2",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Causes, death, old, obstacles"
    },
    {
        "kanji": "障",
        "han_viet": "CHƯỚNG",
        "meaning_vi": "Che, ngăn, làm hại",
        "on_reading": [
            "ショウ"
        ],
        "kun_reading": [
            "さわ.る"
        ],
        "level": "N1",
        "strokes": 14,
        "examples": [],
        "radicals": "",
        "meaning_en": "Cover, prevent, harm"
    },
    {
        "kanji": "械",
        "han_viet": "GIỚI",
        "meaning_vi": "Binh khí, vũ khí",
        "on_reading": [
            "カイ"
        ],
        "kun_reading": [],
        "level": "N2",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Weapons, weapons"
    },
    {
        "kanji": "角",
        "han_viet": "GIÁC",
        "meaning_vi": "Góc, sừng thú",
        "on_reading": [
            "カク"
        ],
        "kun_reading": [
            "かど",
            "つの"
        ],
        "level": "N2",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Animal corner, horn"
    },
    {
        "kanji": "橋",
        "han_viet": "KIỀU",
        "meaning_vi": "Cây cầu",
        "on_reading": [
            "キョウ"
        ],
        "kun_reading": [
            "はし"
        ],
        "level": "N2",
        "strokes": 13,
        "examples": [],
        "radicals": "",
        "meaning_en": "Bridge"
    },
    {
        "kanji": "駐",
        "han_viet": "TRÚ",
        "meaning_vi": "Dừng lại, cư trú",
        "on_reading": [
            "チュウ"
        ],
        "kun_reading": [],
        "level": "N2",
        "strokes": 15,
        "examples": [],
        "radicals": "",
        "meaning_en": "Stop, reside"
    },
    {
        "kanji": "正",
        "han_viet": "CHÁNH, CHÍNH",
        "meaning_vi": "Phải, đúng, chính đáng",
        "on_reading": [
            "セイ",
            "ショウ"
        ],
        "kun_reading": [
            "ただ-しい",
            "ただ-す",
            "まさ",
            "まさ-に"
        ],
        "level": "N4",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Yes, right, righteous"
    },
    {
        "kanji": "建",
        "han_viet": "KIẾN, KIỂN",
        "meaning_vi": "Dựng lên, thành lập",
        "on_reading": [
            "ケン",
            "コン"
        ],
        "kun_reading": [
            "た-てる",
            "た-て",
            "だ-て",
            "た-つ"
        ],
        "level": "N4",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Erect, established"
    },
    {
        "kanji": "連",
        "han_viet": "LIÊN",
        "meaning_vi": "Nối liền, liên tục, tiếp nối",
        "on_reading": [
            "レン"
        ],
        "kun_reading": [
            "つら-なる",
            "つら-ねる",
            "つ-れる"
        ],
        "level": "N3",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Connection, continuous, continuing"
    },
    {
        "kanji": "紹",
        "han_viet": "THIỆU",
        "meaning_vi": "Giới thiệu",
        "on_reading": [
            "ショウ"
        ],
        "kun_reading": [],
        "level": "N2",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Introduce"
    },
    {
        "kanji": "介",
        "han_viet": "Giới",
        "meaning_vi": "Bờ cõi, trung gian",
        "on_reading": [
            "カイ"
        ],
        "kun_reading": [],
        "level": "N2",
        "strokes": 4,
        "examples": [],
        "radicals": "",
        "meaning_en": "Realms, intermediaries"
    },
    {
        "kanji": "案",
        "han_viet": "ÁN",
        "meaning_vi": "Đề xuất, phương án",
        "on_reading": [
            "アン"
        ],
        "kun_reading": [
            "つくえ"
        ],
        "level": "N2",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Proposal, plan"
    },
    {
        "kanji": "説",
        "han_viet": "THUYẾT, DUYỆT",
        "meaning_vi": "Nói, giải thích",
        "on_reading": [
            "セツ",
            "ゼイ"
        ],
        "kun_reading": [
            "と-く"
        ],
        "level": "N3",
        "strokes": 14,
        "examples": [],
        "radicals": "",
        "meaning_en": "Say, explain"
    },
    {
        "kanji": "準",
        "han_viet": "CHUẨN",
        "meaning_vi": "Tuân theo, lấy làm mẫu",
        "on_reading": [
            "ジュン"
        ],
        "kun_reading": [
            "じゅん-じる",
            "じゅん-ずる",
            "なぞら-える",
            "のり",
            "ひと-しい",
            "みずもり"
        ],
        "level": "N2",
        "strokes": 13,
        "examples": [],
        "radicals": "",
        "meaning_en": "Follow, take a model"
    },
    {
        "kanji": "備",
        "han_viet": "BỊ",
        "meaning_vi": "Sửa soạn, sắp sẵn, chuẩn bị",
        "on_reading": [
            "ビ"
        ],
        "kun_reading": [
            "そな-える",
            "そな-わる",
            "つぶさ-に"
        ],
        "level": "N3",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Prepare, upcoming, prepared"
    },
    {
        "kanji": "菓",
        "han_viet": "QUẢ",
        "meaning_vi": "Bánh, trái cây",
        "on_reading": [
            "カ"
        ],
        "kun_reading": [],
        "level": "N2",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Cakes, fruit"
    },
    {
        "kanji": "考",
        "han_viet": "KHẢO",
        "meaning_vi": "Suy nghĩ, xem xét",
        "on_reading": [
            "コウ"
        ],
        "kun_reading": [
            "かんが-える"
        ],
        "level": "N4",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Thinking, reviewing"
    },
    {
        "kanji": "田",
        "han_viet": "ĐIỀN",
        "meaning_vi": "Ruộng",
        "on_reading": [
            "デン"
        ],
        "kun_reading": [
            "た"
        ],
        "level": "N5",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Field"
    },
    {
        "kanji": "舎",
        "han_viet": "XÁ",
        "meaning_vi": "Quán trọ, nghỉ trọ",
        "on_reading": [
            "シャ",
            "セキ"
        ],
        "kun_reading": [
            "やど-る"
        ],
        "level": "N1",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Inn, rest"
    },
    {
        "kanji": "億",
        "han_viet": "ỨC",
        "meaning_vi": "Một trăm triệu (100.000.000)",
        "on_reading": [
            "オク"
        ],
        "kun_reading": [],
        "level": "N2",
        "strokes": 15,
        "examples": [],
        "radicals": "",
        "meaning_en": "One hundred million (100,000,000)"
    },
    {
        "kanji": "勤",
        "han_viet": "CẦN",
        "meaning_vi": "Siêng năng, làm việc",
        "on_reading": [
            "キン",
            "コン"
        ],
        "kun_reading": [
            "つと-める",
            "つと-まる"
        ],
        "level": "N2",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Diligence, work"
    },
    {
        "kanji": "頑",
        "han_viet": "NGOAN",
        "meaning_vi": "Bướng bỉnh, ngoan cố, dại dột",
        "on_reading": [
            "ガン"
        ],
        "kun_reading": [
            "かたく"
        ],
        "level": "N1",
        "strokes": 13,
        "examples": [],
        "radicals": "",
        "meaning_en": "Stubborn, stubborn, foolish"
    },
    {
        "kanji": "題",
        "han_viet": "ĐỀ",
        "meaning_vi": "Vấn đề, chủ đề",
        "on_reading": [
            "ダイ"
        ],
        "kun_reading": [],
        "level": "N4",
        "strokes": 18,
        "examples": [],
        "radicals": "",
        "meaning_en": "Problem, topic"
    },
    {
        "kanji": "拾",
        "han_viet": "THẬP",
        "meaning_vi": "Thu thập, nhặt nhạnh",
        "on_reading": [
            "シュウ",
            "ジュウ"
        ],
        "kun_reading": [
            "ひろ-う",
            "じゅう"
        ],
        "level": "N2",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Collect, pick up"
    },
    {
        "kanji": "学",
        "han_viet": "HỌC",
        "meaning_vi": "Học hành",
        "on_reading": [
            "ガク"
        ],
        "kun_reading": [
            "まな-ぶ"
        ],
        "level": "N5",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Study"
    },
    {
        "kanji": "校",
        "han_viet": "GIÁO, HIỆU",
        "meaning_vi": "Trường học, dấu hiệu",
        "on_reading": [
            "コウ",
            "キョウ"
        ],
        "kun_reading": [],
        "level": "N5",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Schools, signs"
    },
    {
        "kanji": "連",
        "han_viet": "LIÊN",
        "meaning_vi": "Nối liền, liên tục, tiếp nối",
        "on_reading": [
            "レン"
        ],
        "kun_reading": [
            "つら-なる",
            "つら-ねる",
            "つ-れる"
        ],
        "level": "N3",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Connection, continuous, continuing"
    },
    {
        "kanji": "絡",
        "han_viet": "LẠC",
        "meaning_vi": "Liên lạc, bện, tết",
        "on_reading": [
            "ラク"
        ],
        "kun_reading": [
            "から-む",
            "から-まる"
        ],
        "level": "N2",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Contact, braided, Tet"
    },
    {
        "kanji": "気",
        "han_viet": "KHÍ",
        "meaning_vi": "Không khí, khí chất; khí khái, khí phách",
        "on_reading": [
            "キ",
            "ケ"
        ],
        "kun_reading": [
            "いき"
        ],
        "level": "N5",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Atmosphere, temperament; The temperament, mettle"
    },
    {
        "kanji": "分",
        "han_viet": "PHÂN",
        "meaning_vi": "Chia cắt, phân chia, lượng từ đếm thời gian",
        "on_reading": [
            "ブン",
            "フン",
            "ブ"
        ],
        "kun_reading": [
            "わ-ける",
            "わ-かれる",
            "わ-かる"
        ],
        "level": "N5",
        "strokes": 4,
        "examples": [],
        "radicals": "",
        "meaning_en": "Division, division, amount of time counting"
    },
    {
        "kanji": "悪",
        "han_viet": "ÁC",
        "meaning_vi": "Sự xấu, không tốt",
        "on_reading": [
            "アク",
            "オ"
        ],
        "kun_reading": [
            "わる.い",
            "わる-",
            "あ.し",
            "にく.い",
            "-にく.い",
            "ああ",
            "いずくに",
            "いずくんぞ",
            "にく.む"
        ],
        "level": "N4",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Badness, not good"
    },
    {
        "kanji": "運",
        "han_viet": "VẬN",
        "meaning_vi": "Vận may, chuyển động",
        "on_reading": [
            "ウン"
        ],
        "kun_reading": [
            "はこ-ぶ"
        ],
        "level": "N4",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Luck, motion"
    },
    {
        "kanji": "動",
        "han_viet": "ĐỘNG",
        "meaning_vi": "Động đậy, cử động, hoạt động",
        "on_reading": [
            "ドウ"
        ],
        "kun_reading": [
            "うご-く",
            "うご-かす"
        ],
        "level": "N4",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Move, move, operate"
    },
    {
        "kanji": "盆",
        "han_viet": "BỒN",
        "meaning_vi": "Cái bồn, cái chậu sành",
        "on_reading": [
            "ボン"
        ],
        "kun_reading": [],
        "level": "N1",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "The tank, the crockery pot"
    },
    {
        "kanji": "踊",
        "han_viet": "DŨNG",
        "meaning_vi": "Nhảy múa",
        "on_reading": [
            "ヨウ"
        ],
        "kun_reading": [
            "おど-る"
        ],
        "level": "N2",
        "strokes": 14,
        "examples": [],
        "radicals": "",
        "meaning_en": "Dance"
    },
    {
        "kanji": "場",
        "han_viet": "TRÀNG, TRƯỜNG",
        "meaning_vi": "Địa điểm, nơi, chốn",
        "on_reading": [
            "ジョウ",
            "チョウ"
        ],
        "kun_reading": [
            "ば"
        ],
        "level": "N4",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Location, place, place"
    },
    {
        "kanji": "所",
        "han_viet": "SỞ",
        "meaning_vi": "Nơi, chốn",
        "on_reading": [
            "ショ"
        ],
        "kun_reading": [
            "ところ",
            "どころ",
            "とこ"
        ],
        "level": "N4",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Place, place"
    },
    {
        "kanji": "財",
        "han_viet": "TÀI",
        "meaning_vi": "Tiền của, tài sản",
        "on_reading": [
            "ザイ",
            "サイ",
            "ゾク"
        ],
        "kun_reading": [
            "たから"
        ],
        "level": "N3",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Money of, property"
    },
    {
        "kanji": "布",
        "han_viet": "BỐ",
        "meaning_vi": "Vải",
        "on_reading": [
            "フ"
        ],
        "kun_reading": [
            "ぬの"
        ],
        "level": "N2",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Fabric"
    },
    {
        "kanji": "国",
        "han_viet": "QUỐC",
        "meaning_vi": "Đất nước, quốc gia, quê nhà",
        "on_reading": [
            "コク"
        ],
        "kun_reading": [
            "くに"
        ],
        "level": "N5",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Country, country, home"
    },
    {
        "kanji": "事",
        "han_viet": "SỰ",
        "meaning_vi": "Việc, công việc, chức vụ",
        "on_reading": [
            "ジ",
            "ズ"
        ],
        "kun_reading": [
            "こと",
            "つか-う",
            "つか-える"
        ],
        "level": "N4",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Work, work, position"
    },
    {
        "kanji": "堂",
        "han_viet": "ĐƯỜNG",
        "meaning_vi": "Gian nhà chính giữa, nhà chính",
        "on_reading": [
            "ドウ"
        ],
        "kun_reading": [],
        "level": "N4",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "The middle house, the main house"
    },
    {
        "kanji": "平",
        "han_viet": "BÌNH",
        "meaning_vi": "Bằng phẳng, bằng nhau, hòa bình",
        "on_reading": [
            "ヘイ",
            "ビョウ",
            "ヒョウ"
        ],
        "kun_reading": [
            "たい-ら",
            "だいら",
            "ひら"
        ],
        "level": "N3",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Flat, equal, peaceful"
    },
    {
        "kanji": "日",
        "han_viet": "NHẬT",
        "meaning_vi": "Ngày, mặt trời",
        "on_reading": [
            "ニチ",
            "ジツ"
        ],
        "kun_reading": [
            "ひ",
            "び",
            "か",
            "に"
        ],
        "level": "N5",
        "strokes": 4,
        "examples": [],
        "radicals": "",
        "meaning_en": "Date, sun"
    },
    {
        "kanji": "週",
        "han_viet": "CHU",
        "meaning_vi": "Vòng khắp, tuần lễ",
        "on_reading": [
            "シュウ"
        ],
        "kun_reading": [],
        "level": "N4",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Round, week"
    },
    {
        "kanji": "末",
        "han_viet": "MẠT",
        "meaning_vi": "Cuối cùng, ngọn, hậu thế",
        "on_reading": [
            "マツ",
            "バツ"
        ],
        "kun_reading": [
            "すえ"
        ],
        "level": "N3",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Finally, tops, posterity"
    },
    {
        "kanji": "大",
        "han_viet": "ĐẠI",
        "meaning_vi": "To lớn",
        "on_reading": [
            "ダイ",
            "タイ"
        ],
        "kun_reading": [
            "おお",
            "おお-きい",
            "おお-いに"
        ],
        "level": "N5",
        "strokes": 3,
        "examples": [],
        "radicals": "",
        "meaning_en": "Huge"
    },
    {
        "kanji": "大",
        "han_viet": "ĐẠI",
        "meaning_vi": "To lớn",
        "on_reading": [
            "ダイ",
            "タイ"
        ],
        "kun_reading": [
            "おお",
            "おお-きい",
            "おお-いに"
        ],
        "level": "N5",
        "strokes": 3,
        "examples": [],
        "radicals": "",
        "meaning_en": "Huge"
    },
    {
        "kanji": "弁",
        "han_viet": "BIỆN",
        "meaning_vi": "Hùng biện, cơm hộp (kiểu Nhật)",
        "on_reading": [
            "ベン",
            "ヘン"
        ],
        "kun_reading": [
            "かんむり",
            "わきま-える",
            "わ-ける",
            "はなびら",
            "あらそ-う"
        ],
        "level": "N1",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Elnesses, lunch boxes (Japanese style)"
    },
    {
        "kanji": "方",
        "han_viet": "PHƯƠNG",
        "meaning_vi": "Phương hướng",
        "on_reading": [
            "ホウ"
        ],
        "kun_reading": [
            "かた",
            "がた"
        ],
        "level": "N4",
        "strokes": 4,
        "examples": [],
        "radicals": "",
        "meaning_en": "Direction"
    },
    {
        "kanji": "言",
        "han_viet": "NGÔN",
        "meaning_vi": "Nói",
        "on_reading": [
            "ゲン",
            "ゴン"
        ],
        "kun_reading": [
            "い-う",
            "こと"
        ],
        "level": "N4",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Speak"
    },
    {
        "kanji": "今",
        "han_viet": "KIM",
        "meaning_vi": "Nay, hiện nay, bây giờ",
        "on_reading": [
            "コン",
            "キン"
        ],
        "kun_reading": [
            "いま"
        ],
        "level": "N5",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Now, now, now"
    },
    {
        "kanji": "度",
        "han_viet": "ĐỘ, ĐẠC",
        "meaning_vi": "Lần",
        "on_reading": [
            "ド",
            "ト",
            "タク"
        ],
        "kun_reading": [
            "たび",
            "た-い"
        ],
        "level": "N4",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Time"
    },
    {
        "kanji": "直",
        "han_viet": "TRỰC",
        "meaning_vi": "Thẳng thắn, ngay thẳng, sửa chữa",
        "on_reading": [
            "チョク",
            "ジキ",
            "ジカ"
        ],
        "kun_reading": [
            "ただ-ちに",
            "なお-す",
            "なお-る",
            "なお-き",
            "す-ぐ"
        ],
        "level": "N3",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Frankly, upright, repair"
    },
    {
        "kanji": "接",
        "han_viet": "TIẾP",
        "meaning_vi": "Tiếp tục, tiếp theo, nối tiếp",
        "on_reading": [
            "セツ",
            "ショウ"
        ],
        "kun_reading": [
            "つ-ぐ"
        ],
        "level": "N2",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Continue, next, continuous"
    },
    {
        "kanji": "片",
        "han_viet": "PHIẾN",
        "meaning_vi": "Mảnh, tấm, miếng",
        "on_reading": [
            "ヘン"
        ],
        "kun_reading": [
            "かた"
        ],
        "level": "N2",
        "strokes": 4,
        "examples": [],
        "radicals": "",
        "meaning_en": "Pieces, sheets, pieces"
    },
    {
        "kanji": "付",
        "han_viet": "PHÓ",
        "meaning_vi": "Thêm vào, gắn vào",
        "on_reading": [
            "フ"
        ],
        "kun_reading": [
            "つ-く",
            "づ-く",
            "つ-ける",
            "づ-ける"
        ],
        "level": "N3",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Add, attach to"
    },
    {
        "kanji": "缶",
        "han_viet": "PHẪU",
        "meaning_vi": "Uống 10 十 lon 缶 coca trên núi 山.",
        "on_reading": [
            "カン"
        ],
        "kun_reading": [
            "かま"
        ],
        "level": "N2",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Take 10 十 cans 缶 coca on the mountain 山."
    },
    {
        "kanji": "社",
        "han_viet": "XÃ",
        "meaning_vi": "Hội, đoàn thể, công ty",
        "on_reading": [
            "シャ"
        ],
        "kun_reading": [
            "やしろ"
        ],
        "level": "N4",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Association, mass organizations, company"
    },
    {
        "kanji": "宇",
        "han_viet": "VŨ",
        "meaning_vi": "Không gian, vũ trụ",
        "on_reading": [
            "ウ"
        ],
        "kun_reading": [],
        "level": "N2",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Space, universe"
    },
    {
        "kanji": "宙",
        "han_viet": "TRỤ",
        "meaning_vi": "Không gian, vũ trụ",
        "on_reading": [
            "チュウ"
        ],
        "kun_reading": [],
        "level": "N2",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Space, universe"
    },
    {
        "kanji": "田",
        "han_viet": "ĐIỀN",
        "meaning_vi": "Ruộng",
        "on_reading": [
            "デン"
        ],
        "kun_reading": [
            "た"
        ],
        "level": "N5",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Field"
    },
    {
        "kanji": "中",
        "han_viet": "TRUNG, TRÚNG",
        "meaning_vi": "Giữa, ở trong, suốt",
        "on_reading": [
            "チュウ",
            "ジュウ"
        ],
        "kun_reading": [
            "なか",
            "うち",
            "あた-る"
        ],
        "level": "N5",
        "strokes": 4,
        "examples": [],
        "radicals": "",
        "meaning_en": "Middle, inside, transparent"
    },
    {
        "kanji": "様",
        "han_viet": "DẠNG",
        "meaning_vi": "Ngài, cách thức",
        "on_reading": [
            "ヨウ",
            "ショウ"
        ],
        "kun_reading": [
            "さま",
            "さん"
        ],
        "level": "N3",
        "strokes": 14,
        "examples": [],
        "radicals": "",
        "meaning_en": "He, the way"
    },
    {
        "kanji": "客",
        "han_viet": "KHÁCH",
        "meaning_vi": "Người khách",
        "on_reading": [
            "キャク",
            "カク"
        ],
        "kun_reading": [],
        "level": "N3",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Guest"
    },
    {
        "kanji": "船",
        "han_viet": "THUYỀN",
        "meaning_vi": "Cái thuyền",
        "on_reading": [
            "セン"
        ],
        "kun_reading": [
            "ふね",
            "ふな-"
        ],
        "level": "N3",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Boat"
    },
    {
        "kanji": "怖",
        "han_viet": "PHỐ, BỐ",
        "meaning_vi": "Sợ hãi, dọa nạt, đáng sợ",
        "on_reading": [
            "フ",
            "ホ"
        ],
        "kun_reading": [
            "こわ-い",
            "こわ-がる",
            "お-じる",
            "おそ-れる"
        ],
        "level": "N3",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Fear, intimidation, scary"
    },
    {
        "kanji": "違",
        "han_viet": "VI",
        "meaning_vi": "Sai, khác biệt",
        "on_reading": [
            "イ"
        ],
        "kun_reading": [
            "ちが-う",
            "ちが-い",
            "ちが-える",
            "たが-う",
            "たが-える"
        ],
        "level": "N2",
        "strokes": 13,
        "examples": [],
        "radicals": "",
        "meaning_en": "False, difference"
    },
    {
        "kanji": "飛",
        "han_viet": "PHI",
        "meaning_vi": "Bay",
        "on_reading": [
            "ヒ"
        ],
        "kun_reading": [
            "と-ぶ",
            "と-ばす"
        ],
        "level": "N3",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Fly"
    },
    {
        "kanji": "行",
        "han_viet": "HÀNH",
        "meaning_vi": "Đi, thi hành, làm được",
        "on_reading": [
            "コウ",
            "ギョウ",
            "アン"
        ],
        "kun_reading": [
            "い-く",
            "ゆ-く",
            "おこな-う"
        ],
        "level": "N5",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Go, execute, do"
    },
    {
        "kanji": "士",
        "han_viet": "SĨ",
        "meaning_vi": "Kẻ sĩ",
        "on_reading": [
            "シ"
        ],
        "kun_reading": [
            "さむらい"
        ],
        "level": "N1",
        "strokes": 3,
        "examples": [],
        "radicals": "",
        "meaning_en": "Martyrs"
    },
    {
        "kanji": "飼",
        "han_viet": "TỰ",
        "meaning_vi": "Cho ăn, chăn nuôi",
        "on_reading": [
            "シ"
        ],
        "kun_reading": [
            "か-う"
        ],
        "level": "N1",
        "strokes": 13,
        "examples": [],
        "radicals": "",
        "meaning_en": "Feeding, raising"
    },
    {
        "kanji": "建",
        "han_viet": "KIẾN, KIỂN",
        "meaning_vi": "Dựng lên, thành lập",
        "on_reading": [
            "ケン",
            "コン"
        ],
        "kun_reading": [
            "た-てる",
            "た-て",
            "だ-て",
            "た-つ"
        ],
        "level": "N4",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Erect, established"
    },
    {
        "kanji": "走",
        "han_viet": "TẨU",
        "meaning_vi": "Đi, chạy",
        "on_reading": [
            "ソウ"
        ],
        "kun_reading": [
            "はし-る"
        ],
        "level": "N4",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Go, run"
    },
    {
        "kanji": "取",
        "han_viet": "THỦ",
        "meaning_vi": "Lấy",
        "on_reading": [
            "シュ"
        ],
        "kun_reading": [
            "と.る",
            "と.り",
            "と.り-",
            "とり",
            "-ど.り"
        ],
        "level": "N3",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Take"
    },
    {
        "kanji": "聞",
        "han_viet": "VĂN, VẤN",
        "meaning_vi": "Nghe thấy, hỏi",
        "on_reading": [
            "ブン",
            "モン"
        ],
        "kun_reading": [
            "き-く",
            "き-こえる"
        ],
        "level": "N4",
        "strokes": 14,
        "examples": [],
        "radicals": "",
        "meaning_en": "Hearing, asking"
    },
    {
        "kanji": "開",
        "han_viet": "KHAI",
        "meaning_vi": "Mở, tổ chức, khai mạc",
        "on_reading": [
            "カイ"
        ],
        "kun_reading": [
            "ひら-く",
            "ひら-き",
            "-びら.き",
            "ひら-ける",
            "あ-く",
            "あ-ける"
        ],
        "level": "N4",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Open, organize, open"
    },
    {
        "kanji": "鳥",
        "han_viet": "ĐIỂU",
        "meaning_vi": "Con chim",
        "on_reading": [
            "チョウ"
        ],
        "kun_reading": [
            "とり"
        ],
        "level": "N4",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Bird"
    },
    {
        "kanji": "波",
        "han_viet": "BA",
        "meaning_vi": "Sóng",
        "on_reading": [
            "ハ"
        ],
        "kun_reading": [
            "なみ"
        ],
        "level": "N2",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Wave"
    },
    {
        "kanji": "花",
        "han_viet": "HOA",
        "meaning_vi": "Hoa, bông hoa, đóa hoa",
        "on_reading": [
            "カ",
            "ケ"
        ],
        "kun_reading": [
            "はな"
        ],
        "level": "N4",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Flowers, flowers, flowers"
    },
    {
        "kanji": "火",
        "han_viet": "HỎA",
        "meaning_vi": "Lửa",
        "on_reading": [
            "カ"
        ],
        "kun_reading": [
            "ひ",
            "び",
            "ほ"
        ],
        "level": "N5",
        "strokes": 4,
        "examples": [],
        "radicals": "",
        "meaning_en": "Fire"
    },
    {
        "kanji": "景",
        "han_viet": "CẢNH",
        "meaning_vi": "Phong cảnh, cảnh ngộ, hoàn cảnh",
        "on_reading": [
            "ケイ"
        ],
        "kun_reading": [],
        "level": "N3",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Landscape, landscape, circumstances"
    },
    {
        "kanji": "色",
        "han_viet": "SẮC",
        "meaning_vi": "Màu, màu sắc",
        "on_reading": [
            "ショク",
            "シキ"
        ],
        "kun_reading": [
            "いろ"
        ],
        "level": "N1",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Color, color"
    },
    {
        "kanji": "昼",
        "han_viet": "TRÚ",
        "meaning_vi": "Ban trưa, buổi trưa",
        "on_reading": [
            "チュウ"
        ],
        "kun_reading": [
            "ひる"
        ],
        "level": "N4",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "At noon, noon"
    },
    {
        "kanji": "昔",
        "han_viet": "TÍCH",
        "meaning_vi": "Xưa, trước",
        "on_reading": [
            "セキ",
            "シャク"
        ],
        "kun_reading": [
            "むかし"
        ],
        "level": "N3",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Old, before"
    },
    {
        "kanji": "道",
        "han_viet": "ĐẠO, ĐÁO",
        "meaning_vi": "Con đường, con phố",
        "on_reading": [
            "ドウ",
            "トウ"
        ],
        "kun_reading": [
            "みち"
        ],
        "level": "N4",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "The road, the street"
    },
    {
        "kanji": "具",
        "han_viet": "CỤ",
        "meaning_vi": "Đồ dùng, dụng cụ",
        "on_reading": [
            "グ"
        ],
        "kun_reading": [
            "そな-える",
            "つぶさ-に"
        ],
        "level": "N3",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Utensils, tools"
    },
    {
        "kanji": "自",
        "han_viet": "TỰ",
        "meaning_vi": "Tự mình, chính mình",
        "on_reading": [
            "ジ",
            "シ"
        ],
        "kun_reading": [
            "みずか-ら",
            "おの-ずから",
            "おの-ずと"
        ],
        "level": "N4",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Yourself, yourself"
    },
    {
        "kanji": "販",
        "han_viet": "PHIẾN",
        "meaning_vi": "Buôn bán, bán ra, thương mại",
        "on_reading": [
            "ハン"
        ],
        "kun_reading": [],
        "level": "N2",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Trade, sell, trade"
    },
    {
        "kanji": "売",
        "han_viet": "MẠI",
        "meaning_vi": "Thương mại, việc bán",
        "on_reading": [
            "バイ"
        ],
        "kun_reading": [
            "うう-る",
            "う-れる"
        ],
        "level": "N4",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Trade, sale"
    },
    {
        "kanji": "機",
        "han_viet": "CƠ",
        "meaning_vi": "Cơ hội, cơ khí, máy móc",
        "on_reading": [
            "キ"
        ],
        "kun_reading": [
            "はた"
        ],
        "level": "N3",
        "strokes": 16,
        "examples": [],
        "radicals": "",
        "meaning_en": "Opportunities, mechanics, machinery"
    },
    {
        "kanji": "通",
        "han_viet": "THÔNG",
        "meaning_vi": "Thông suốt, thông qua, xuyên qua",
        "on_reading": [
            "ツウ",
            "ツ"
        ],
        "kun_reading": [
            "とお-る",
            "とお-り",
            "とお-り",
            "どお-り",
            "とお-す",
            "とお-し",
            "どお-し",
            "かよ-う"
        ],
        "level": "N4",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Throughout, through, through"
    },
    {
        "kanji": "信",
        "han_viet": "TÍN",
        "meaning_vi": "Tin, tin cậy, tín nhiệm",
        "on_reading": [
            "シン"
        ],
        "kun_reading": [
            "しん-じる"
        ],
        "level": "N3",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "News, trust, trust"
    },
    {
        "kanji": "台",
        "han_viet": "ĐÀI",
        "meaning_vi": "Khung, bệ, đếm số lượng may móc",
        "on_reading": [
            "ダイ",
            "タイ"
        ],
        "kun_reading": [
            "うてな",
            "われ",
            "つかさ"
        ],
        "level": "N4",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Frame, pedestal, counting the number of hook sewing"
    },
    {
        "kanji": "教",
        "han_viet": "GIÁO, GIAO",
        "meaning_vi": "Dạy dỗ, chỉ dẫn",
        "on_reading": [
            "キョウ"
        ],
        "kun_reading": [
            "おし-える",
            "お-.わる"
        ],
        "level": "N4",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Teaching, instructions"
    },
    {
        "kanji": "室",
        "han_viet": "THẤT",
        "meaning_vi": "Phòng, gian phòng",
        "on_reading": [
            "シツ"
        ],
        "kun_reading": [
            "むろ"
        ],
        "level": "N4",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Room, room"
    },
    {
        "kanji": "関",
        "han_viet": "QUAN",
        "meaning_vi": "Liên hệ, cổng vào",
        "on_reading": [
            "カン"
        ],
        "kun_reading": [
            "せき",
            "かか-わる",
            "からくり",
            "かんぬき"
        ],
        "level": "N3",
        "strokes": 14,
        "examples": [],
        "radicals": "",
        "meaning_en": "Contact, entrance"
    },
    {
        "kanji": "西",
        "han_viet": "Á",
        "meaning_vi": "Che đậy, úp lên, phía tây",
        "on_reading": [
            "セイ",
            "サイ",
            "ス"
        ],
        "kun_reading": [
            "にし"
        ],
        "level": "N5",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Cover, face up, west"
    },
    {
        "kanji": "空",
        "han_viet": "KHÔNG",
        "meaning_vi": "Rỗng không, hư không, bầu trời",
        "on_reading": [
            "クウ"
        ],
        "kun_reading": [
            "そら",
            "あ-く",
            "あ-き",
            "あ-ける",
            "から",
            "す-く",
            "す-かす",
            "むな-しい"
        ],
        "level": "N4",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Empty, nowhere, sky"
    },
    {
        "kanji": "港",
        "han_viet": "CẢNG",
        "meaning_vi": "Khu vực đỗ tàu, thuyền",
        "on_reading": [
            "コウ"
        ],
        "kun_reading": [
            "みなと"
        ],
        "level": "N3",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Parking area, boat"
    },
    {
        "kanji": "秋",
        "han_viet": "THU",
        "meaning_vi": "Mùa thu",
        "on_reading": [
            "シュウ"
        ],
        "kun_reading": [
            "あき",
            "とき"
        ],
        "level": "N4",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Autumn"
    },
    {
        "kanji": "葉",
        "han_viet": "DIỆP, DIẾP",
        "meaning_vi": "Lá cây",
        "on_reading": [
            "ヨウ"
        ],
        "kun_reading": [
            "は",
            "ば"
        ],
        "level": "N3",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Leaf"
    },
    {
        "kanji": "原",
        "han_viet": "NGUYÊN",
        "meaning_vi": "Cánh đồng, đồng bằng, nguyên thủy",
        "on_reading": [
            "ゲン"
        ],
        "kun_reading": [
            "はら"
        ],
        "level": "N2",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Fields, plains, primitive"
    },
    {
        "kanji": "伊",
        "han_viet": "Y",
        "meaning_vi": "Hắn, anh ta , y",
        "on_reading": [
            "イ"
        ],
        "kun_reading": [
            "かれ"
        ],
        "level": "N1",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "He, him, y"
    },
    {
        "kanji": "豆",
        "han_viet": "ĐẬU",
        "meaning_vi": "Hạt đậu, cây đậu",
        "on_reading": [
            "トウ",
            "ズ"
        ],
        "kun_reading": [
            "まめ"
        ],
        "level": "N1",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Beans, beans"
    },
    {
        "kanji": "日",
        "han_viet": "NHẬT",
        "meaning_vi": "Ngày, mặt trời",
        "on_reading": [
            "ニチ",
            "ジツ"
        ],
        "kun_reading": [
            "ひ",
            "び",
            "か",
            "に"
        ],
        "level": "N5",
        "strokes": 4,
        "examples": [],
        "radicals": "",
        "meaning_en": "Date, sun"
    },
    {
        "kanji": "工",
        "han_viet": "CÔNG",
        "meaning_vi": "Người thợ, công việc",
        "on_reading": [
            "コウ",
            "ク",
            "グ"
        ],
        "kun_reading": [],
        "level": "N4",
        "strokes": 3,
        "examples": [],
        "radicals": "",
        "meaning_en": "Worker, work"
    },
    {
        "kanji": "本",
        "han_viet": "BỔN, BẢN",
        "meaning_vi": "Gốc, rễ, cội nguồn của sự vật, sách",
        "on_reading": [
            "ホン"
        ],
        "kun_reading": [
            "もと"
        ],
        "level": "N5",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Root, roots, roots of things, books"
    },
    {
        "kanji": "棚",
        "han_viet": "BẰNG",
        "meaning_vi": "Cái kệ, cái giá",
        "on_reading": [
            "ホウ"
        ],
        "kun_reading": [
            "たな",
            "だな"
        ],
        "level": "N1",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Shelves, price"
    },
    {
        "kanji": "夢",
        "han_viet": "MỘNG",
        "meaning_vi": "Chiêm bao, nằm mơ, ao ước",
        "on_reading": [
            "ム",
            "ボウ"
        ],
        "kun_reading": [
            "ゆめ",
            "ゆめ-みる",
            "くら-い"
        ],
        "level": "N3",
        "strokes": 13,
        "examples": [],
        "radicals": "",
        "meaning_en": "Chiem Bao, dreaming, desire"
    },
    {
        "kanji": "家",
        "han_viet": "GIA, CÔ",
        "meaning_vi": "Ngôi nhà",
        "on_reading": [
            "カ",
            "ケ"
        ],
        "kun_reading": [
            "いえ",
            "や",
            "うち"
        ],
        "level": "N4",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "House"
    },
    {
        "kanji": "素",
        "han_viet": "TỐ",
        "meaning_vi": "Tơ sống màu trắng",
        "on_reading": [
            "ソ",
            "ス"
        ],
        "kun_reading": [
            "もと"
        ],
        "level": "N1",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Lifesty"
    },
    {
        "kanji": "晴",
        "han_viet": "TÌNH",
        "meaning_vi": "Trời nắng đẹp",
        "on_reading": [
            "セイ"
        ],
        "kun_reading": [
            "は-れる",
            "は-らす"
        ],
        "level": "N2",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "The sun is beautiful"
    },
    {
        "kanji": "子",
        "han_viet": "TỬ",
        "meaning_vi": "Con",
        "on_reading": [
            "シ",
            "ス",
            "ツ"
        ],
        "kun_reading": [
            "こ",
            "ね"
        ],
        "level": "N5",
        "strokes": 3,
        "examples": [],
        "radicals": "",
        "meaning_en": "Child"
    },
    {
        "kanji": "好",
        "han_viet": "HẢO",
        "meaning_vi": "Yêu thích, thích",
        "on_reading": [
            "コウ"
        ],
        "kun_reading": [
            "この-む",
            "す-く",
            "よ-い",
            "い-い"
        ],
        "level": "N3",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Favorite, like"
    },
    {
        "kanji": "漫",
        "han_viet": "MẠN, MAN",
        "meaning_vi": "Không mục đích, tình cờ, không bó buộc",
        "on_reading": [
            "マン"
        ],
        "kun_reading": [
            "みだり-に",
            "そぞ-ろ"
        ],
        "level": "N1",
        "strokes": 14,
        "examples": [],
        "radicals": "",
        "meaning_en": "No purposes, accidental, no binding"
    },
    {
        "kanji": "画",
        "han_viet": "HỌA",
        "meaning_vi": "Vẽ, bức tranh",
        "on_reading": [
            "ガ",
            "カク",
            "エ",
            "カイ"
        ],
        "kun_reading": [
            "えが-く",
            "かく-する",
            "かぎ-る",
            "はかりごと",
            "はか-る"
        ],
        "level": "N4",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Drawing, painting"
    },
    {
        "kanji": "主",
        "han_viet": "CHỦ, CHÚA",
        "meaning_vi": "Chủ, người chủ",
        "on_reading": [
            "シュ",
            "ス",
            "シュウ"
        ],
        "kun_reading": [
            "ぬし",
            "おも",
            "あるじ"
        ],
        "level": "N4",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Owner, owner"
    },
    {
        "kanji": "人",
        "han_viet": "NHÂN",
        "meaning_vi": "Người",
        "on_reading": [
            "ジン",
            "ニン"
        ],
        "kun_reading": [
            "ひと"
        ],
        "level": "N5",
        "strokes": 2,
        "examples": [],
        "radicals": "",
        "meaning_en": "People"
    },
    {
        "kanji": "公",
        "han_viet": "CÔNG",
        "meaning_vi": "Quần chúng, chính thức, công cộng,",
        "on_reading": [
            "コウ",
            "ク"
        ],
        "kun_reading": [
            "おおやけ"
        ],
        "level": "N4",
        "strokes": 4,
        "examples": [],
        "radicals": "",
        "meaning_en": "Mass, official, public,"
    },
    {
        "kanji": "形",
        "han_viet": "HÌNH",
        "meaning_vi": "Hình dạng, kiểu dáng",
        "on_reading": [
            "ケイ",
            "ギョウ"
        ],
        "kun_reading": [
            "かた",
            "-がた",
            "かたち",
            "なり"
        ],
        "level": "N3",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Shape, style"
    },
    {
        "kanji": "不",
        "han_viet": "BẤT, PHI",
        "meaning_vi": "Chẳng, không thể",
        "on_reading": [
            "フ",
            "ブ"
        ],
        "kun_reading": [],
        "level": "N4",
        "strokes": 4,
        "examples": [],
        "radicals": "",
        "meaning_en": "No, impossible"
    },
    {
        "kanji": "思",
        "han_viet": "TƯ, TỨ",
        "meaning_vi": "Nghĩ ngợi, suy nghĩ",
        "on_reading": [
            "シ"
        ],
        "kun_reading": [
            "おも-う",
            "おもえら-く",
            "おぼ-す"
        ],
        "level": "N4",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Thinking, thinking"
    },
    {
        "kanji": "例",
        "han_viet": "LỆ",
        "meaning_vi": "Ví dụ, tiền lệ",
        "on_reading": [
            "レイ"
        ],
        "kun_reading": [
            "たと-える"
        ],
        "level": "N3",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "For example, precedent"
    },
    {
        "kanji": "由",
        "han_viet": "DO",
        "meaning_vi": "Nguyên do, nguyên nhân",
        "on_reading": [
            "ユ",
            "ユウ",
            "ユイ"
        ],
        "kun_reading": [
            "よし",
            "よ.る"
        ],
        "level": "N3",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Reasons, causes"
    },
    {
        "kanji": "将",
        "han_viet": "TƯƠNG",
        "meaning_vi": "Chỉ huy, cấp tướng, sắp, sẽ",
        "on_reading": [
            "ショウ",
            "ソウ"
        ],
        "kun_reading": [
            "まさ-に",
            "はた",
            "ひきい-る"
        ],
        "level": "N2",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Commander, general, about to, will"
    },
    {
        "kanji": "来",
        "han_viet": "LAI, LÃI",
        "meaning_vi": "Sự tới,đến",
        "on_reading": [
            "ライ",
            "タイ"
        ],
        "kun_reading": [
            "く-る",
            "きた-る",
            "きた-す",
            "き-たす",
            "き-たる",
            "き",
            "こ"
        ],
        "level": "N5",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Arrival"
    },
    {
        "kanji": "選",
        "han_viet": "TUYỂN",
        "meaning_vi": "Chọn lựa",
        "on_reading": [
            "セン"
        ],
        "kun_reading": [
            "えら-ぶ"
        ],
        "level": "N3",
        "strokes": 15,
        "examples": [],
        "radicals": "",
        "meaning_en": "Select"
    },
    {
        "kanji": "真",
        "han_viet": "CHÂN",
        "meaning_vi": "Chân thực",
        "on_reading": [
            "シン"
        ],
        "kun_reading": [
            "ま",
            "ま-",
            "まこと"
        ],
        "level": "N4",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Genuine"
    },
    {
        "kanji": "面",
        "han_viet": "DIỆN",
        "meaning_vi": "Mặt, bề mặt",
        "on_reading": [
            "メン",
            "ベン"
        ],
        "kun_reading": [
            "おも",
            "つら",
            "おもて"
        ],
        "level": "N3",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Face, surface"
    },
    {
        "kanji": "目",
        "han_viet": "MỤC",
        "meaning_vi": "Mắt",
        "on_reading": [
            "モク",
            "ボク"
        ],
        "kun_reading": [
            "め",
            "ま"
        ],
        "level": "N5",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Eye"
    },
    {
        "kanji": "熱",
        "han_viet": "NHIỆT",
        "meaning_vi": "Nóng, sốt",
        "on_reading": [
            "ネツ"
        ],
        "kun_reading": [
            "あつ-い"
        ],
        "level": "N3",
        "strokes": 15,
        "examples": [],
        "radicals": "",
        "meaning_en": "Hot, fever"
    },
    {
        "kanji": "心",
        "han_viet": "TÂM",
        "meaning_vi": "Quả tim, tâm trí, tâm",
        "on_reading": [
            "シン"
        ],
        "kun_reading": [
            "こころ",
            "ごころ"
        ],
        "level": "N4",
        "strokes": 4,
        "examples": [],
        "radicals": "",
        "meaning_en": "Heart, mind, mind"
    },
    {
        "kanji": "偉",
        "han_viet": "VĨ",
        "meaning_vi": "Lớn, khác thường, tài giỏi",
        "on_reading": [
            "イ"
        ],
        "kun_reading": [
            "えら-い"
        ],
        "level": "N2",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Large, unusual, talented"
    },
    {
        "kanji": "丁",
        "han_viet": "ĐINH",
        "meaning_vi": "Can Đinh, can thứ tư trong mười can",
        "on_reading": [
            "チョウ",
            "テイ",
            "チン",
            "トウ",
            "チ"
        ],
        "kun_reading": [
            "ひのと"
        ],
        "level": "N1",
        "strokes": 2,
        "examples": [],
        "radicals": "",
        "meaning_en": "Can Dinh, the fourth of ten can"
    },
    {
        "kanji": "優",
        "han_viet": "ƯU",
        "meaning_vi": "Trên hết, ưu việt, dịu dàng",
        "on_reading": [
            "ユウ",
            "ユ"
        ],
        "kun_reading": [
            "すぐ-れる",
            "やさ-しい",
            "まさ-る"
        ],
        "level": "N2",
        "strokes": 17,
        "examples": [],
        "radicals": "",
        "meaning_en": "Above all, superiority, gentle"
    },
    {
        "kanji": "習",
        "han_viet": "TẬP",
        "meaning_vi": "Học hành, luyện tập",
        "on_reading": [
            "シュウ",
            "ジュ"
        ],
        "kun_reading": [
            "なら-う",
            "なら-い"
        ],
        "level": "N4",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Study, practice"
    },
    {
        "kanji": "行",
        "han_viet": "HÀNH",
        "meaning_vi": "Đi, thi hành, làm được",
        "on_reading": [
            "コウ",
            "ギョウ",
            "アン"
        ],
        "kun_reading": [
            "い-く",
            "ゆ-く",
            "おこな-う"
        ],
        "level": "N5",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Go, execute, do"
    },
    {
        "kanji": "経",
        "han_viet": "KINH",
        "meaning_vi": "Đi qua, kinh qua",
        "on_reading": [
            "ケイ",
            "キョウ"
        ],
        "kun_reading": [
            "へ-る",
            "た-つ",
            "たていと",
            "はか-る",
            "のり"
        ],
        "level": "N3",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Passing, experiencing"
    },
    {
        "kanji": "験",
        "han_viet": "NGHIỆM",
        "meaning_vi": "Thí nghiệm, kinh nghiệm",
        "on_reading": [
            "ケン",
            "ゲン"
        ],
        "kun_reading": [
            "あかし",
            "しるし",
            "ため-す",
            "ためし"
        ],
        "level": "N4",
        "strokes": 18,
        "examples": [],
        "radicals": "",
        "meaning_en": "Experiment, experience"
    },
    {
        "kanji": "力",
        "han_viet": "LỰC",
        "meaning_vi": "Sức mạnh",
        "on_reading": [
            "リョク",
            "リキ",
            "リイ"
        ],
        "kun_reading": [
            "ちから"
        ],
        "level": "N4",
        "strokes": 2,
        "examples": [],
        "radicals": "",
        "meaning_en": "Power"
    },
    {
        "kanji": "味",
        "han_viet": "VỊ",
        "meaning_vi": "Mùi, hương vị",
        "on_reading": [
            "ミ"
        ],
        "kun_reading": [
            "あじ",
            "あじ-わう"
        ],
        "level": "N4",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Smell, flavor"
    },
    {
        "kanji": "品",
        "han_viet": "PHẨM",
        "meaning_vi": "Đồ vật, cái hay, phấm cách, hàng hóa, đếm số bữa ăn",
        "on_reading": [
            "ヒン",
            "ホン"
        ],
        "kun_reading": [
            "しな"
        ],
        "level": "N4",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Items, beauty, tanges, goods, counting meals"
    },
    {
        "kanji": "物",
        "han_viet": "VẬT",
        "meaning_vi": "Sự vật, đồ vật",
        "on_reading": [
            "ブツ",
            "モツ"
        ],
        "kun_reading": [
            "もの",
            "もの-"
        ],
        "level": "N4",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Things, objects"
    },
    {
        "kanji": "先",
        "han_viet": "TIÊN, TIẾN",
        "meaning_vi": "Trước, đằng trước",
        "on_reading": [
            "セン"
        ],
        "kun_reading": [
            "さき",
            "ま-ず"
        ],
        "level": "N5",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Front, front"
    },
    {
        "kanji": "生",
        "han_viet": "SINH",
        "meaning_vi": "Sinh đẻ, sinh sống",
        "on_reading": [
            "セイ",
            "ショウ"
        ],
        "kun_reading": [
            "い-きる",
            "い-かす",
            "い-ける",
            "うま-れる",
            "うまれ",
            "う-む",
            "お-う",
            "は-える",
            "は-やす",
            "なま",
            "な-る",
            "な-す",
            "む-す"
        ],
        "level": "N5",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Birth, live"
    },
    {
        "kanji": "教",
        "han_viet": "GIÁO, GIAO",
        "meaning_vi": "Dạy dỗ, chỉ dẫn",
        "on_reading": [
            "キョウ"
        ],
        "kun_reading": [
            "おし-える",
            "お-.わる"
        ],
        "level": "N4",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Teaching, instructions"
    },
    {
        "kanji": "師",
        "han_viet": "SƯ",
        "meaning_vi": "Chuyên gia, giáo sư",
        "on_reading": [
            "シ"
        ],
        "kun_reading": [
            "いくさ"
        ],
        "level": "N3",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Expert, Professor"
    },
    {
        "kanji": "学",
        "han_viet": "HỌC",
        "meaning_vi": "Học hành",
        "on_reading": [
            "ガク"
        ],
        "kun_reading": [
            "まな-ぶ"
        ],
        "level": "N5",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Study"
    },
    {
        "kanji": "会",
        "han_viet": "HỘI",
        "meaning_vi": "Tụ hội, gặp gỡ, cơ hội",
        "on_reading": [
            "カイ",
            "エ"
        ],
        "kun_reading": [
            "あ-う",
            "あ-わせる",
            "あつ-まる"
        ],
        "level": "N5",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Gathering, meeting, opportunities"
    },
    {
        "kanji": "社",
        "han_viet": "XÃ",
        "meaning_vi": "Hội, đoàn thể, công ty",
        "on_reading": [
            "シャ"
        ],
        "kun_reading": [
            "やしろ"
        ],
        "level": "N4",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Association, mass organizations, company"
    },
    {
        "kanji": "員",
        "han_viet": "VIÊN, VÂN",
        "meaning_vi": "Nhân viên, thành viên, người",
        "on_reading": [
            "イン"
        ],
        "kun_reading": [],
        "level": "N4",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Staff, members, people"
    },
    {
        "kanji": "銀",
        "han_viet": "NGÂN",
        "meaning_vi": "Bạc",
        "on_reading": [
            "ギン"
        ],
        "kun_reading": [
            "しろがね"
        ],
        "level": "N4",
        "strokes": 14,
        "examples": [],
        "radicals": "",
        "meaning_en": "Silver"
    },
    {
        "kanji": "医",
        "han_viet": "Y",
        "meaning_vi": "Y học, y tế, bác sĩ",
        "on_reading": [
            "イ"
        ],
        "kun_reading": [
            "い-やす",
            "い-する",
            "くすし"
        ],
        "level": "N4",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Medicine, health, doctor"
    },
    {
        "kanji": "研",
        "han_viet": "NGHIÊN",
        "meaning_vi": "Nghiên cứu, tìm tòi",
        "on_reading": [
            "ケン"
        ],
        "kun_reading": [
            "と-ぐ"
        ],
        "level": "N4",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Research, explore"
    },
    {
        "kanji": "学",
        "han_viet": "HỌC",
        "meaning_vi": "Học hành",
        "on_reading": [
            "ガク"
        ],
        "kun_reading": [
            "まな-ぶ"
        ],
        "level": "N5",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Study"
    },
    {
        "kanji": "大",
        "han_viet": "ĐẠI",
        "meaning_vi": "To lớn",
        "on_reading": [
            "ダイ",
            "タイ"
        ],
        "kun_reading": [
            "おお",
            "おお-きい",
            "おお-いに"
        ],
        "level": "N5",
        "strokes": 3,
        "examples": [],
        "radicals": "",
        "meaning_en": "Huge"
    },
    {
        "kanji": "病",
        "han_viet": "BỆNH",
        "meaning_vi": "Ốm, bệnh",
        "on_reading": [
            "ビョウ",
            "ヘイ"
        ],
        "kun_reading": [
            "や-む",
            "や-み",
            "やまい"
        ],
        "level": "N4",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Sickness, illness"
    },
    {
        "kanji": "分",
        "han_viet": "PHÂN",
        "meaning_vi": "Chia cắt, phân chia, lượng từ đếm thời gian",
        "on_reading": [
            "ブン",
            "フン",
            "ブ"
        ],
        "kun_reading": [
            "わ-ける",
            "わ-かれる",
            "わ-かる"
        ],
        "level": "N5",
        "strokes": 4,
        "examples": [],
        "radicals": "",
        "meaning_en": "Division, division, amount of time counting"
    },
    {
        "kanji": "半",
        "han_viet": "BÁN",
        "meaning_vi": "Nửa, một nửa",
        "on_reading": [
            "ハン"
        ],
        "kun_reading": [
            "なか-ば"
        ],
        "level": "N5",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Half, half"
    },
    {
        "kanji": "知",
        "han_viet": "TRI, TRÍ",
        "meaning_vi": "Biết, hiểu biết",
        "on_reading": [
            "チ"
        ],
        "kun_reading": [
            "し-る",
            "し-らせる"
        ],
        "level": "N4",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Know, understand"
    },
    {
        "kanji": "帽",
        "han_viet": "MẠO",
        "meaning_vi": "Mũ, nón",
        "on_reading": [
            "ボウ",
            "モウ"
        ],
        "kun_reading": [
            "ずきん",
            "おお-う"
        ],
        "level": "N2",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Hat, hat"
    },

    {
        "kanji": "見",
        "han_viet": "KIẾN",
        "meaning_vi": "Trông thấy, nhìn",
        "on_reading": [
            "ケン"
        ],
        "kun_reading": [
            "み-る",
            "み-える",
            "み-せる"
        ],
        "level": "N5",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "See, look"
    },
    {
        "kanji": "診",
        "han_viet": "CHẨN",
        "meaning_vi": "Xem xét",
        "on_reading": [
            "シン"
        ],
        "kun_reading": [
            "み-る"
        ],
        "level": "N1",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Consider"
    },
    {
        "kanji": "捜",
        "han_viet": "SƯU",
        "meaning_vi": "Tìm kiếm",
        "on_reading": [
            "ソウ",
            "シュ",
            "シュウ"
        ],
        "kun_reading": [
            "さが-す"
        ],
        "level": "N2",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Search"
    },
    {
        "kanji": "探",
        "han_viet": "THÁM",
        "meaning_vi": "Tìm kiếm",
        "on_reading": [
            "タン"
        ],
        "kun_reading": [
            "さぐ-る",
            "さ-がす"
        ],
        "level": "N2",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Search"
    },
    {
        "kanji": "時",
        "han_viet": "THÌ, THỜI",
        "meaning_vi": "Thời điểm, thời gian",
        "on_reading": [
            "ジ"
        ],
        "kun_reading": [
            "とき",
            "どき"
        ],
        "level": "N5",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Time, time"
    },
    {
        "kanji": "間",
        "han_viet": "GIAN",
        "meaning_vi": "Khoảng, ở giữa, bên trong (không gian)",
        "on_reading": [
            "カン",
            "ケン"
        ],
        "kun_reading": [
            "あいだ",
            "ま",
            "あい"
        ],
        "level": "N5",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Interval, in the middle, inside (space)"
    },
    {
        "kanji": "遅",
        "han_viet": "TRÌ",
        "meaning_vi": "Chậm trễ, chậm chạp, quá hạn",
        "on_reading": [
            "チ"
        ],
        "kun_reading": [
            "おく-れる",
            "おく-らす",
            "おそ-い"
        ],
        "level": "N2",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Delayed, slow, overdue"
    },
    {
        "kanji": "会",
        "han_viet": "HỘI",
        "meaning_vi": "Tụ hội, gặp gỡ, cơ hội",
        "on_reading": [
            "カイ",
            "エ"
        ],
        "kun_reading": [
            "あ-う",
            "あ-わせる",
            "あつ-まる"
        ],
        "level": "N5",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Gathering, meeting, opportunities"
    },
    {
        "kanji": "議",
        "han_viet": "NGHỊ",
        "meaning_vi": "Hội nghị",
        "on_reading": [
            "ギ"
        ],
        "kun_reading": [],
        "level": "N3",
        "strokes": 20,
        "examples": [],
        "radicals": "",
        "meaning_en": "Conference"
    },
    {
        "kanji": "合",
        "han_viet": "HỢP, HIỆP",
        "meaning_vi": "Hợp, vừa ý, hợp lại",
        "on_reading": [
            "ゴウ",
            "ガッ",
            "カッ"
        ],
        "kun_reading": [
            "あ-う",
            "あ-わせる"
        ],
        "level": "N4",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Suitable, satisfactory, combined"
    },
    {
        "kanji": "宿",
        "han_viet": "TÚC, TÚ",
        "meaning_vi": "Đỗ, nghỉ lại qua đêm",
        "on_reading": [
            "シュク"
        ],
        "kun_reading": [
            "やど",
            "やど-る",
            "やど-す"
        ],
        "level": "N3",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Do, stay overnight"
    },
    {
        "kanji": "出",
        "han_viet": "XUẤT",
        "meaning_vi": "Ra ngoài, mở ra",
        "on_reading": [
            "シュツ",
            "スイ"
        ],
        "kun_reading": [
            "で-る",
            "だ-す",
            "い-でる",
            "い-だす"
        ],
        "level": "N4",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Out, open"
    },
    {
        "kanji": "燃",
        "han_viet": "NHIÊN",
        "meaning_vi": "Nhiên liệu, cháy",
        "on_reading": [
            "ネン"
        ],
        "kun_reading": [
            "も-える",
            "も-やす"
        ],
        "level": "N2",
        "strokes": 16,
        "examples": [],
        "radicals": "",
        "meaning_en": "Fuel, fire"
    },
    {
        "kanji": "置",
        "han_viet": "TRÍ",
        "meaning_vi": "Đặt, để",
        "on_reading": [
            "チ"
        ],
        "kun_reading": [
            "お-く",
            "-お.き"
        ],
        "level": "N3",
        "strokes": 13,
        "examples": [],
        "radicals": "",
        "meaning_en": "Put, leave"
    },
    {
        "kanji": "横",
        "han_viet": "HOÀNH",
        "meaning_vi": "Bề ngang",
        "on_reading": [
            "オウ"
        ],
        "kun_reading": [
            "よこ"
        ],
        "level": "N3",
        "strokes": 15,
        "examples": [],
        "radicals": "",
        "meaning_en": "Width"
    },
    {
        "kanji": "瓶",
        "han_viet": "BÌNH",
        "meaning_vi": "Lọ, bình",
        "on_reading": [
            "ビン"
        ],
        "kun_reading": [
            "かめ"
        ],
        "level": "N2",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Jar, jar"
    },
    {
        "kanji": "値",
        "han_viet": "TRỊ",
        "meaning_vi": "Giá trị, giá cả, xứng đáng",
        "on_reading": [
            "チ"
        ],
        "kun_reading": [
            "ね",
            "あたい"
        ],
        "level": "N2",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Value, price, worthy"
    },
    {
        "kanji": "段",
        "han_viet": "ĐOẠN",
        "meaning_vi": "Bậc thang, nấc, giai đoạn",
        "on_reading": [
            "ダン",
            "タン"
        ],
        "kun_reading": [],
        "level": "N2",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Steps, hiccups, phase"
    },
    {
        "kanji": "給",
        "han_viet": "CẤP",
        "meaning_vi": "Cung cấp, tiền lương, cho phép",
        "on_reading": [
            "キュウ"
        ],
        "kun_reading": [
            "たま.う",
            "たも.う",
            "-たま.え"
        ],
        "level": "N3",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Supply, salary, permission"
    },
    {
        "kanji": "料",
        "han_viet": "LIỆU",
        "meaning_vi": "Vật liệu, đo đạc",
        "on_reading": [
            "リョウ"
        ],
        "kun_reading": [],
        "level": "N4",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Materials, measurement"
    },
    {
        "kanji": "番",
        "han_viet": "PHIÊN",
        "meaning_vi": "Lần lượt, số thứ tự",
        "on_reading": [
            "バン"
        ],
        "kun_reading": [
            "つが-い"
        ],
        "level": "N3",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "In turn, order number"
    },
    {
        "kanji": "組",
        "han_viet": "TỔ",
        "meaning_vi": "Kết hợp, lắp ráp",
        "on_reading": [
            "ソ"
        ],
        "kun_reading": [
            "く.む",
            "くみ",
            "-ぐみ"
        ],
        "level": "N3",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Combine, assembly"
    },
    {
        "kanji": "小",
        "han_viet": "TIỂU",
        "meaning_vi": "Nhỏ bé",
        "on_reading": [
            "ショウ"
        ],
        "kun_reading": [
            "ちい-さい",
            "こ",
            "お",
            "さ"
        ],
        "level": "N5",
        "strokes": 3,
        "examples": [],
        "radicals": "",
        "meaning_en": "Tiny"
    },
    {
        "kanji": "説",
        "han_viet": "THUYẾT, DUYỆT",
        "meaning_vi": "Nói, giải thích",
        "on_reading": [
            "セツ",
            "ゼイ"
        ],
        "kun_reading": [
            "と-く"
        ],
        "level": "N3",
        "strokes": 14,
        "examples": [],
        "radicals": "",
        "meaning_en": "Say, explain"
    },
    {
        "kanji": "歌",
        "han_viet": "CA",
        "meaning_vi": "Bài hát, hát",
        "on_reading": [
            "カ"
        ],
        "kun_reading": [
            "うた",
            "うた-う"
        ],
        "level": "N4",
        "strokes": 14,
        "examples": [],
        "radicals": "",
        "meaning_en": "Songs, singing"
    },
    {
        "kanji": "手",
        "han_viet": "THỦ",
        "meaning_vi": "Tay",
        "on_reading": [
            "シュ",
            "ズ"
        ],
        "kun_reading": [
            "て"
        ],
        "level": "N4",
        "strokes": 4,
        "examples": [],
        "radicals": "",
        "meaning_en": "Hand"
    },
    {
        "kanji": "管",
        "han_viet": "QUẢN",
        "meaning_vi": "Quản lý",
        "on_reading": [
            "カン"
        ],
        "kun_reading": [
            "くだ"
        ],
        "level": "N2",
        "strokes": 14,
        "examples": [],
        "radicals": "",
        "meaning_en": "Manage"
    },
    {
        "kanji": "理",
        "han_viet": "LÍ",
        "meaning_vi": "Lý luận, nguyên lý",
        "on_reading": [
            "リ"
        ],
        "kun_reading": [
            "ことわり"
        ],
        "level": "N4",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Theory, principle"
    },
    {
        "kanji": "息",
        "han_viet": "TỨC",
        "meaning_vi": "Hơi thở, than vãn",
        "on_reading": [
            "ソク"
        ],
        "kun_reading": [
            "いき"
        ],
        "level": "N3",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Breathing, complaining"
    },
    {
        "kanji": "娘",
        "han_viet": "NƯƠNG",
        "meaning_vi": "Nàng, con gái",
        "on_reading": [
            "ジョウ"
        ],
        "kun_reading": [
            "むすめ"
        ],
        "level": "N2",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "She, daughter"
    },
    {
        "kanji": "願",
        "han_viet": "NGUYỆN",
        "meaning_vi": "Cầu nguyện, mong muốn",
        "on_reading": [
            "ガン"
        ],
        "kun_reading": [
            "ねが-う",
            "ねが-い"
        ],
        "level": "N3",
        "strokes": 19,
        "examples": [],
        "radicals": "",
        "meaning_en": "Prayer, desire"
    },
    {
        "kanji": "話",
        "han_viet": "THOẠI",
        "meaning_vi": "Lời nói, cuộc trò chuyện",
        "on_reading": [
            "ワ"
        ],
        "kun_reading": [
            "はな-す",
            "はな"
        ],
        "level": "N5",
        "strokes": 13,
        "examples": [],
        "radicals": "",
        "meaning_en": "Words, conversations"
    },
    {
        "kanji": "知",
        "han_viet": "TRI, TRÍ",
        "meaning_vi": "Biết, hiểu biết",
        "on_reading": [
            "チ"
        ],
        "kun_reading": [
            "し-る",
            "し-らせる"
        ],
        "level": "N4",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Know, understand"
    },
    {
        "kanji": "土",
        "han_viet": "THỔ",
        "meaning_vi": "Đất",
        "on_reading": [
            "ド",
            "ト"
        ],
        "kun_reading": [
            "つち"
        ],
        "level": "N5",
        "strokes": 3,
        "examples": [],
        "radicals": "",
        "meaning_en": "Land"
    },
    {
        "kanji": "体",
        "han_viet": "THỂ",
        "meaning_vi": "Thân mình, hình dạng, thể, dạng",
        "on_reading": [
            "タイ",
            "テイ"
        ],
        "kun_reading": [
            "からだ",
            "かたち"
        ],
        "level": "N4",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Body, shape, form, form"
    },
    {
        "kanji": "育",
        "han_viet": "DỤC",
        "meaning_vi": "Nuôi dưỡng",
        "on_reading": [
            "イク"
        ],
        "kun_reading": [
            "そだ-つ",
            "そだ-てる",
            "はぐく-む"
        ],
        "level": "N3",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Nourish"
    },
    {
        "kanji": "館",
        "han_viet": "QUÁN",
        "meaning_vi": "Quán trọ",
        "on_reading": [
            "カン"
        ],
        "kun_reading": [
            "やかた",
            "たて"
        ],
        "level": "N4",
        "strokes": 16,
        "examples": [],
        "radicals": "",
        "meaning_en": "Inn"
    },
    {
        "kanji": "無",
        "han_viet": "MÔ, VÔ",
        "meaning_vi": "Không có",
        "on_reading": [
            "ム",
            "ブ"
        ],
        "kun_reading": [
            "な.い"
        ],
        "level": "N2",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Do not have"
    },
    {
        "kanji": "院",
        "han_viet": "VIỆN",
        "meaning_vi": "Trụ sở, tòa nhà",
        "on_reading": [
            "イン"
        ],
        "kun_reading": [],
        "level": "N4",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Headquarters, building"
    },
    {
        "kanji": "消",
        "han_viet": "TIÊU",
        "meaning_vi": "Tiêu tan, biến mất, tiêu diệt",
        "on_reading": [
            "ショウ"
        ],
        "kun_reading": [
            "き-える",
            "け-す"
        ],
        "level": "N3",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Dissipated, disappeared, destroyed"
    },
    {
        "kanji": "込",
        "han_viet": "VÔ",
        "meaning_vi": "Đông đúc, bao gồm",
        "on_reading": [],
        "kun_reading": [
            "こ-む",
            "こ.み",
            "こ.める"
        ],
        "level": "N3",
        "strokes": 3,
        "examples": [],
        "radicals": "",
        "meaning_en": "Crowded, including"
    },
    {
        "kanji": "壊",
        "han_viet": "HOẠI",
        "meaning_vi": "Hỏng, vỡ",
        "on_reading": [
            "カイ",
            "エ"
        ],
        "kun_reading": [
            "こわ-す",
            "こわ-れる",
            "やぶ-る"
        ],
        "level": "N1",
        "strokes": 16,
        "examples": [],
        "radicals": "",
        "meaning_en": "Broken, broken"
    },
    {
        "kanji": "割",
        "han_viet": "CÁT",
        "meaning_vi": "Chia, cắt",
        "on_reading": [
            "カツ"
        ],
        "kun_reading": [
            "わ-る",
            "わ-れる",
            "わり",
            "さ-く"
        ],
        "level": "N2",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Divide, cut"
    },
    {
        "kanji": "折",
        "han_viet": "CHIẾT",
        "meaning_vi": "Gẫy, bẻ gẫy, gập lại",
        "on_reading": [
            "セツ",
            "シャク"
        ],
        "kun_reading": [
            "お-る",
            "おり",
            "お-り",
            "お-れる"
        ],
        "level": "N3",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Broken, broken, folded"
    },
    {
        "kanji": "破",
        "han_viet": "PHÁ",
        "meaning_vi": "Phá vỡ, đánh bại, xé rách",
        "on_reading": [
            "ハ"
        ],
        "kun_reading": [
            "やぶ-る",
            "やぶ-れる",
            "わ-れる"
        ],
        "level": "N3",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Break, defeat, tear"
    },
    {
        "kanji": "汚",
        "han_viet": "Ô",
        "meaning_vi": "Ô nhiễm, bẩn",
        "on_reading": [
            "オ"
        ],
        "kun_reading": [
            "きたな-い",
            "けが-らわしい",
            "よご-れる",
            "けが-れる",
            "よご-す",
            "けが-す"
        ],
        "level": "N2",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Pollution, dirty"
    },
    {
        "kanji": "外",
        "han_viet": "NGOẠI",
        "meaning_vi": "Ngoài, bên ngoài, phía ngoài",
        "on_reading": [
            "ガイ",
            "ゲ"
        ],
        "kun_reading": [
            "そと",
            "ほか",
            "はず-す",
            "はず-れる",
            "と"
        ],
        "level": "N5",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Outside, outside, outside"
    },
    {
        "kanji": "止",
        "han_viet": "CHỈ",
        "meaning_vi": "Dừng lại",
        "on_reading": [
            "シ"
        ],
        "kun_reading": [
            "と-まる",
            "と-める",
            "さ-す",
            "とど-まる",
            "とど-める",
            "や-む",
            "や-める",
            "よ-す"
        ],
        "level": "N4",
        "strokes": 4,
        "examples": [],
        "radicals": "",
        "meaning_en": "Stop"
    },
    {
        "kanji": "落",
        "han_viet": "LẠC",
        "meaning_vi": "Rơi rụng, đổ sập",
        "on_reading": [
            "ラク"
        ],
        "kun_reading": [
            "お-ちる",
            "お-とす"
        ],
        "level": "N3",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Falling, collapsing"
    },
    {
        "kanji": "金",
        "han_viet": "KIM",
        "meaning_vi": "Kim loại, vàng",
        "on_reading": [
            "キン",
            "コン",
            "ゴン"
        ],
        "kun_reading": [
            "かね",
            "かな",
            "がね"
        ],
        "level": "N5",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Metal, gold"
    },
    {
        "kanji": "皿",
        "han_viet": "MÃNH",
        "meaning_vi": "Bát dĩa",
        "on_reading": [
            "ベイ"
        ],
        "kun_reading": [
            "さら"
        ],
        "level": "N2",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Dish"
    },
    {
        "kanji": "茶",
        "han_viet": "TRÀ",
        "meaning_vi": "Cây chè (trà)",
        "on_reading": [
            "チャ",
            "サ"
        ],
        "kun_reading": [],
        "level": "N4",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Tea tree (tea)"
    },
    {
        "kanji": "碗",
        "han_viet": "OẢN",
        "meaning_vi": "Chén, bát bằng sứ",
        "on_reading": [
            "ワン"
        ],
        "kun_reading": [
            "こばち"
        ],
        "level": "N2",
        "strokes": 13,
        "examples": [],
        "radicals": "",
        "meaning_en": "Cup, porcelain bowl"
    },
    {
        "kanji": "袋",
        "han_viet": "ĐẠI",
        "meaning_vi": "Bao, túi",
        "on_reading": [
            "タイ",
            "ダイ"
        ],
        "kun_reading": [
            "ふくろ"
        ],
        "level": "N2",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Bag"
    },
    {
        "kanji": "書",
        "han_viet": "THƯ",
        "meaning_vi": "Sách, ghi chép, viết",
        "on_reading": [
            "ショ"
        ],
        "kun_reading": [
            "か-く",
            "が-き",
            "がき"
        ],
        "level": "N5",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Books, records, writing"
    },
    {
        "kanji": "類",
        "han_viet": "LOẠI",
        "meaning_vi": "Loại, chủng loại",
        "on_reading": [
            "ルイ"
        ],
        "kun_reading": [
            "たぐ-い"
        ],
        "level": "N3",
        "strokes": 18,
        "examples": [],
        "radicals": "",
        "meaning_en": "Type, type"
    },
    {
        "kanji": "枝",
        "han_viet": "CHI",
        "meaning_vi": "Cành cây",
        "on_reading": [
            "シ"
        ],
        "kun_reading": [
            "えだ"
        ],
        "level": "N2",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Bough"
    },
    {
        "kanji": "駅",
        "han_viet": "DỊCH",
        "meaning_vi": "Ga, ga tàu",
        "on_reading": [
            "エキ"
        ],
        "kun_reading": [],
        "level": "N4",
        "strokes": 14,
        "examples": [],
        "radicals": "",
        "meaning_en": "Station, train station"
    },
    {
        "kanji": "員",
        "han_viet": "VIÊN, VÂN",
        "meaning_vi": "Nhân viên, thành viên, người",
        "on_reading": [
            "イン"
        ],
        "kun_reading": [],
        "level": "N4",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Staff, members, people"
    },
    {
        "kanji": "交",
        "han_viet": "GIAO",
        "meaning_vi": "Giao lưu, giao thông",
        "on_reading": [
            "コウ"
        ],
        "kun_reading": [
            "ま-じる",
            "ま-ざる",
            "まじ-える",
            "ま-ぜる",
            "まじ-わる",
            "か-う"
        ],
        "level": "N3",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Exchange, traffic"
    },
    {
        "kanji": "返",
        "han_viet": "PHẢN",
        "meaning_vi": "Trả lại, phản hồi",
        "on_reading": [
            "ヘン"
        ],
        "kun_reading": [
            "かえ-す",
            "かえ-る"
        ],
        "level": "N3",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Return, feedback"
    },
    {
        "kanji": "先",
        "han_viet": "TIÊN, TIẾN",
        "meaning_vi": "Trước, đằng trước",
        "on_reading": [
            "セン"
        ],
        "kun_reading": [
            "さき",
            "ま-ず"
        ],
        "level": "N5",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Front, front"
    },
    {
        "kanji": "源",
        "han_viet": "NGUYÊN",
        "meaning_vi": "Nguồn (nước), tài nguyên",
        "on_reading": [
            "ゲン"
        ],
        "kun_reading": [
            "みなもと"
        ],
        "level": "N2",
        "strokes": 13,
        "examples": [],
        "radicals": "",
        "meaning_en": "Source (water), resources"
    },
    {
        "kanji": "氏",
        "han_viet": "THỊ",
        "meaning_vi": "Họ",
        "on_reading": [
            "シ"
        ],
        "kun_reading": [
            "うじ",
            "-うじ"
        ],
        "level": "N1",
        "strokes": 4,
        "examples": [],
        "radicals": "",
        "meaning_en": "Surname"
    },
    {
        "kanji": "語",
        "han_viet": "NGỮ",
        "meaning_vi": "Ngôn ngữ, lời lẽ",
        "on_reading": [
            "ゴ"
        ],
        "kun_reading": [
            "かた-る",
            "かた-らう"
        ],
        "level": "N5",
        "strokes": 14,
        "examples": [],
        "radicals": "",
        "meaning_en": "Language, words"
    },
    {
        "kanji": "電",
        "han_viet": "ĐIỆN",
        "meaning_vi": "Chớp, điện",
        "on_reading": [
            "デン"
        ],
        "kun_reading": [],
        "level": "N5",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Lightning, electricity"
    },
    {
        "kanji": "車",
        "han_viet": "XA",
        "meaning_vi": "Chiếc xe",
        "on_reading": [
            "シャ"
        ],
        "kun_reading": [
            "くるま"
        ],
        "level": "N5",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Car"
    },
    {
        "kanji": "健",
        "han_viet": "KIỆN",
        "meaning_vi": "Khỏe mạnh, tráng kiện",
        "on_reading": [
            "ケン"
        ],
        "kun_reading": [
            "すこ-やか"
        ],
        "level": "N2",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Healthy, coated"
    },
    {
        "kanji": "側",
        "han_viet": "TRẮC",
        "meaning_vi": "Phía, bề",
        "on_reading": [
            "ソク"
        ],
        "kun_reading": [
            "かわ",
            "がわ",
            "そば"
        ],
        "level": "N3",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Side, superficial"
    },
    {
        "kanji": "辺",
        "han_viet": "BIÊN",
        "meaning_vi": "Bờ, mép, lân cận",
        "on_reading": [
            "ヘン"
        ],
        "kun_reading": [
            "あた-り",
            "ほと-り"
        ],
        "level": "N2",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Bo, edges, neighboring"
    },
    {
        "kanji": "覚",
        "han_viet": "GIÁC",
        "meaning_vi": "Nhớ, cảm thấy, tỉnh ngộ",
        "on_reading": [
            "カク"
        ],
        "kun_reading": [
            "おぼ-える",
            "さ-ます",
            "さ-める",
            "さと-る"
        ],
        "level": "N3",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Remember, feel, wake up"
    },
    {
        "kanji": "網",
        "han_viet": "VÕNG",
        "meaning_vi": "Cái lưới",
        "on_reading": [
            "モウ"
        ],
        "kun_reading": [
            "あみ"
        ],
        "level": "N1",
        "strokes": 14,
        "examples": [],
        "radicals": "",
        "meaning_en": "Net"
    },
    {
        "kanji": "確",
        "han_viet": "XÁC",
        "meaning_vi": "Chắc chắn, bảo đảm",
        "on_reading": [
            "カク",
            "コウ"
        ],
        "kun_reading": [
            "たし-か",
            "たし-かめる"
        ],
        "level": "N3",
        "strokes": 15,
        "examples": [],
        "radicals": "",
        "meaning_en": "Certainly, guarantee"
    },
    {
        "kanji": "地",
        "han_viet": "ĐỊA",
        "meaning_vi": "Đất, địa hình",
        "on_reading": [
            "チ",
            "ジ"
        ],
        "kun_reading": [],
        "level": "N4",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Land, terrain"
    },
    {
        "kanji": "震",
        "han_viet": "CHẤN",
        "meaning_vi": "Rung động, chấn động, sét đánh",
        "on_reading": [
            "シン"
        ],
        "kun_reading": [
            "ふる-う",
            "ふる-える"
        ],
        "level": "N2",
        "strokes": 15,
        "examples": [],
        "radicals": "",
        "meaning_en": "Vibration, shock, lightning strike"
    },
    {
        "kanji": "壁",
        "han_viet": "BÍCH",
        "meaning_vi": "Bức tường",
        "on_reading": [
            "ヘキ"
        ],
        "kun_reading": [
            "かべ"
        ],
        "level": "N2",
        "strokes": 16,
        "examples": [],
        "radicals": "",
        "meaning_en": "Wall"
    },
    {
        "kanji": "針",
        "han_viet": "CHÂM, TRÂM",
        "meaning_vi": "Cái kim, châm",
        "on_reading": [
            "シン"
        ],
        "kun_reading": [
            "はり"
        ],
        "level": "N2",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Needle"
    },
    {
        "kanji": "前",
        "han_viet": "TIỀN",
        "meaning_vi": "Trước, trước đây, trước khi",
        "on_reading": [
            "ゼン"
        ],
        "kun_reading": [
            "まえ"
        ],
        "level": "N5",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Before, before, before"
    },
    {
        "kanji": "倒",
        "han_viet": "ĐẢO",
        "meaning_vi": "Ngã, sụp đổ",
        "on_reading": [
            "トウ"
        ],
        "kun_reading": [
            "たお-れる",
            "たお-す"
        ],
        "level": "N2",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Fall, collapse"
    },
    {
        "kanji": "飾",
        "han_viet": "SỨC",
        "meaning_vi": "Tô điểm, trang trí",
        "on_reading": [
            "ショク"
        ],
        "kun_reading": [
            "かざ-る",
            "かざ-り"
        ],
        "level": "N2",
        "strokes": 13,
        "examples": [],
        "radicals": "",
        "meaning_en": "Adorn, decorate"
    },
    {
        "kanji": "並",
        "han_viet": "TỊNH",
        "meaning_vi": "Xếp, sắp xếp, xếp hàng",
        "on_reading": [
            "ヘイ",
            "ホウ"
        ],
        "kun_reading": [
            "な-み",
            "なみ",
            "なら-べる",
            "なら-ぶ",
            "なら-びに"
        ],
        "level": "N2",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Arrange, arrange, queue"
    },
    {
        "kanji": "生",
        "han_viet": "SINH",
        "meaning_vi": "Sinh đẻ, sinh sống",
        "on_reading": [
            "セイ",
            "ショウ"
        ],
        "kun_reading": [
            "い-きる",
            "い-かす",
            "い-ける",
            "うま-れる",
            "うまれ",
            "う-む",
            "お-う",
            "は-える",
            "は-やす",
            "なま",
            "な-る",
            "な-す",
            "む-す"
        ],
        "level": "N5",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Birth, live"
    },
    {
        "kanji": "戻",
        "han_viet": "LỆ",
        "meaning_vi": "Trở lại, quay lại, hồi phục lại",
        "on_reading": [
            "レイ"
        ],
        "kun_reading": [
            "もど-る",
            "もど-す"
        ],
        "level": "N2",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Back, come back, recover"
    },
    {
        "kanji": "決",
        "han_viet": "QUYẾT",
        "meaning_vi": "Nhất quyết",
        "on_reading": [
            "ケツ"
        ],
        "kun_reading": [
            "き-める",
            "ぎ-め",
            "き-まる",
            "さ-く"
        ],
        "level": "N3",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Determined"
    },
    {
        "kanji": "祖",
        "han_viet": "TỔ",
        "meaning_vi": "Tổ tiên, người sáng lập ra",
        "on_reading": [
            "ソ"
        ],
        "kun_reading": [],
        "level": "N3",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Ancestor, founder"
    },
    {
        "kanji": "断",
        "han_viet": "ĐOẠN, ĐOÁN",
        "meaning_vi": "Phán đoán, quyết đoán",
        "on_reading": [
            "ダン"
        ],
        "kun_reading": [
            "た-つ",
            "ことわ-る",
            "さだ-める"
        ],
        "level": "N3",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Judgment, assertiveness"
    },
    {
        "kanji": "予",
        "han_viet": "DỰ",
        "meaning_vi": "Dự định",
        "on_reading": [
            "ヨ",
            "シャ"
        ],
        "kun_reading": [
            "あらかじ-め"
        ],
        "level": "N3",
        "strokes": 4,
        "examples": [],
        "radicals": "",
        "meaning_en": "Plan"
    },
    {
        "kanji": "位",
        "han_viet": "VỊ",
        "meaning_vi": "Vị trí, địa vị, chỗ",
        "on_reading": [
            "イ"
        ],
        "kun_reading": [
            "くらい",
            "ぐらい"
        ],
        "level": "N3",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Location, status, place"
    },
    {
        "kanji": "授",
        "han_viet": "THỤ",
        "meaning_vi": "Truyền đạt, cấp (cho)",
        "on_reading": [
            "ジュ"
        ],
        "kun_reading": [
            "さず-ける",
            "さず-かる"
        ],
        "level": "N2",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Communicate, grant (for)"
    },
    {
        "kanji": "業",
        "han_viet": "NGHIỆP",
        "meaning_vi": "Nghề nghiệp, sự nghiệp",
        "on_reading": [
            "ギョウ",
            "ゴウ"
        ],
        "kun_reading": [
            "わざ"
        ],
        "level": "N4",
        "strokes": 13,
        "examples": [],
        "radicals": "",
        "meaning_en": "Occupation, career"
    },
    {
        "kanji": "講",
        "han_viet": "GIẢNG",
        "meaning_vi": "Bài giảng, liên hiệp",
        "on_reading": [
            "コウ"
        ],
        "kun_reading": [],
        "level": "N2",
        "strokes": 17,
        "examples": [],
        "radicals": "",
        "meaning_en": "Lecture, Union"
    },
    {
        "kanji": "義",
        "han_viet": "NGHĨA",
        "meaning_vi": "Nghĩa vụ, điều phải, ý nghĩa",
        "on_reading": [
            "ギ"
        ],
        "kun_reading": [],
        "level": "N1",
        "strokes": 13,
        "examples": [],
        "radicals": "",
        "meaning_en": "Obligations, rights, meaning"
    },
    {
        "kanji": "定",
        "han_viet": "ĐỊNH, ĐÍNH",
        "meaning_vi": "Quyết định, chắc chắn",
        "on_reading": [
            "テイ",
            "ジョウ"
        ],
        "kun_reading": [
            "さだ-める",
            "さだ-まる",
            "さだ-か"
        ],
        "level": "N3",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Decision, sure"
    },
    {
        "kanji": "案",
        "han_viet": "ÁN",
        "meaning_vi": "Đề xuất, phương án",
        "on_reading": [
            "アン"
        ],
        "kun_reading": [
            "つくえ"
        ],
        "level": "N2",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Proposal, plan"
    },
    {
        "kanji": "内",
        "han_viet": "NỘI, NẠP",
        "meaning_vi": "Bên trong, ở giữa",
        "on_reading": [
            "ナイ",
            "ダイ"
        ],
        "kun_reading": [
            "うち"
        ],
        "level": "N3",
        "strokes": 4,
        "examples": [],
        "radicals": "",
        "meaning_en": "Inside, in the middle"
    },
    {
        "kanji": "箱",
        "han_viet": "TƯƠNG, SƯƠNG",
        "meaning_vi": "Cái hòm, cái hộp",
        "on_reading": [
            "ソウ"
        ],
        "kun_reading": [
            "はこ"
        ],
        "level": "N3",
        "strokes": 15,
        "examples": [],
        "radicals": "",
        "meaning_en": "The chest, the box"
    },
    {
        "kanji": "鏡",
        "han_viet": "KÍNH",
        "meaning_vi": "Cái gương",
        "on_reading": [
            "キョウ",
            "ケイ"
        ],
        "kun_reading": [
            "かがみ"
        ],
        "level": "N1",
        "strokes": 19,
        "examples": [],
        "radicals": "",
        "meaning_en": "Mirror"
    },
    {
        "kanji": "引",
        "han_viet": "DẪN",
        "meaning_vi": "Kéo dài, rút ra",
        "on_reading": [
            "イン"
        ],
        "kun_reading": [
            "ひ-く",
            "ひ-き",
            "ひ-ける"
        ],
        "level": "N3",
        "strokes": 4,
        "examples": [],
        "radicals": "",
        "meaning_en": "Prolonged, drawn"
    },
    {
        "kanji": "関",
        "han_viet": "QUAN",
        "meaning_vi": "Liên hệ, cổng vào",
        "on_reading": [
            "カン"
        ],
        "kun_reading": [
            "せき",
            "かか-わる",
            "からくり",
            "かんぬき"
        ],
        "level": "N3",
        "strokes": 14,
        "examples": [],
        "radicals": "",
        "meaning_en": "Contact, entrance"
    },
    {
        "kanji": "廊",
        "han_viet": "LANG",
        "meaning_vi": "Mái hiên, hành lang",
        "on_reading": [
            "ロウ"
        ],
        "kun_reading": [],
        "level": "N1",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Awnings, corridors"
    },
    {
        "kanji": "下",
        "han_viet": "HẠ, HÁ",
        "meaning_vi": "Phía dưới, bên dưới, hạ lệnh, ra khơi",
        "on_reading": [
            "カ",
            "ゲ"
        ],
        "kun_reading": [
            "した",
            "しも",
            "もと",
            "さ-げる",
            "くだ-る",
            "くだ-す",
            "くだ-さる",
            "お-ろす",
            "お-りる"
        ],
        "level": "N5",
        "strokes": 3,
        "examples": [],
        "radicals": "",
        "meaning_en": "Below, below, order, set sail"
    },
    {
        "kanji": "池",
        "han_viet": "TRÌ",
        "meaning_vi": "Cái ao",
        "on_reading": [
            "チ"
        ],
        "kun_reading": [
            "いけ"
        ],
        "level": "N2",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Pond"
    },
    {
        "kanji": "元",
        "han_viet": "NGUYÊN",
        "meaning_vi": "Bắt đầu, nguồn gốc",
        "on_reading": [
            "ゲン",
            "ガン"
        ],
        "kun_reading": [
            "もと"
        ],
        "level": "N4",
        "strokes": 4,
        "examples": [],
        "radicals": "",
        "meaning_en": "Start, origin"
    },
    {
        "kanji": "周",
        "han_viet": "CHU",
        "meaning_vi": "Vòng, xung quanh",
        "on_reading": [
            "シュウ"
        ],
        "kun_reading": [
            "まわ-り"
        ],
        "level": "N2",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Rounds, surrounding"
    },
    {
        "kanji": "表",
        "han_viet": "BIỂU",
        "meaning_vi": "Mặt ngoài, biểu hiện",
        "on_reading": [
            "ヒョウ"
        ],
        "kun_reading": [
            "おもて",
            "あらわ-す",
            "あらわ-れる"
        ],
        "level": "N3",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Outside, expression"
    },
    {
        "kanji": "希",
        "han_viet": "HI",
        "meaning_vi": "Mong muốn, hy vọng",
        "on_reading": [
            "キ",
            "ケ"
        ],
        "kun_reading": [
            "まれ"
        ],
        "level": "N2",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Desire, hope"
    },
    {
        "kanji": "望",
        "han_viet": "VỌNG",
        "meaning_vi": "Trông mong, hy vọng",
        "on_reading": [
            "ボウ",
            "モウ"
        ],
        "kun_reading": [
            "のぞ-む",
            "もち"
        ],
        "level": "N3",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Expectation, hope"
    },
    {
        "kanji": "何",
        "han_viet": "HÀ",
        "meaning_vi": "Sao, gì, cái gì",
        "on_reading": [
            "カ"
        ],
        "kun_reading": [
            "なに",
            "なん"
        ],
        "level": "N5",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Why, what, what"
    },
    {
        "kanji": "丸",
        "han_viet": "HOÀN",
        "meaning_vi": "Tròn, (trăng) tròn, hoàn mỹ, viên, vo lại",
        "on_reading": [
            "ガン"
        ],
        "kun_reading": [
            "まる-い"
        ],
        "level": "N2",
        "strokes": 3,
        "examples": [],
        "radicals": "",
        "meaning_en": "Round, (moon) round, perfect, tablet, vo again"
    },
    {
        "kanji": "月",
        "han_viet": "NGUYỆT",
        "meaning_vi": "Tháng, mặt trăng",
        "on_reading": [
            "ゲツ",
            "ガツ"
        ],
        "kun_reading": [
            "つき"
        ],
        "level": "N5",
        "strokes": 4,
        "examples": [],
        "radicals": "",
        "meaning_en": "Month, moon"
    },
    {
        "kanji": "球",
        "han_viet": "CẦU",
        "meaning_vi": "Quả cầu, quả bóng",
        "on_reading": [
            "キュウ"
        ],
        "kun_reading": [
            "たま"
        ],
        "level": "N3",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Ball, ball"
    },
    {
        "kanji": "年",
        "han_viet": "NIÊN",
        "meaning_vi": "Năm",
        "on_reading": [
            "ネン"
        ],
        "kun_reading": [
            "とし"
        ],
        "level": "N5",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Year"
    },
    {
        "kanji": "続",
        "han_viet": "TỤC",
        "meaning_vi": "Tiếp tục, chuỗi",
        "on_reading": [
            "ゾク",
            "ショク",
            "コウ",
            "キョウ"
        ],
        "kun_reading": [
            "つづ.く",
            "つづ.ける",
            "つぐ.ない"
        ],
        "level": "N3",
        "strokes": 13,
        "examples": [],
        "radicals": "",
        "meaning_en": "Continue, chain"
    },
    {
        "kanji": "受",
        "han_viet": "THỤ",
        "meaning_vi": "Tiếp nhận",
        "on_reading": [
            "ジュ"
        ],
        "kun_reading": [
            "う-ける",
            "う-かる"
        ],
        "level": "N3",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Accept"
    },
    {
        "kanji": "入",
        "han_viet": "NHẬP",
        "meaning_vi": "Vào",
        "on_reading": [
            "ニュウ",
            "ジュ"
        ],
        "kun_reading": [
            "い-る",
            "い-れる",
            "はい-る"
        ],
        "level": "N4",
        "strokes": 2,
        "examples": [],
        "radicals": "",
        "meaning_en": "Enter"
    },
    {
        "kanji": "卒",
        "han_viet": "TỐT",
        "meaning_vi": "Tốt nghiệp, binh sĩ",
        "on_reading": [
            "ソツ",
            "シュツ"
        ],
        "kun_reading": [
            "そっ-する",
            "お-える",
            "お-わる",
            "ついに",
            "にわか"
        ],
        "level": "N2",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Graduation, soldiers"
    },
    {
        "kanji": "休",
        "han_viet": "HƯU",
        "meaning_vi": "Nghỉ, nghỉ ngơi",
        "on_reading": [
            "キュウ"
        ],
        "kun_reading": [
            "やす-む",
            "やす-まる",
            "やす-める"
        ],
        "level": "N5",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Rest, rest"
    },
    {
        "kanji": "憩",
        "han_viet": "KHẾ",
        "meaning_vi": "Nghỉ ngơi",
        "on_reading": [
            "ケイ"
        ],
        "kun_reading": [
            "いこ-い",
            "いこ-う"
        ],
        "level": "N1",
        "strokes": 16,
        "examples": [],
        "radicals": "",
        "meaning_en": "Rest"
    },
    {
        "kanji": "作",
        "han_viet": "TÁC",
        "meaning_vi": "Làm, tạo nên",
        "on_reading": [
            "サク",
            "サ"
        ],
        "kun_reading": [
            "つく-る",
            "つく-り",
            "づく-り"
        ],
        "level": "N4",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Do, create"
    },
    {
        "kanji": "文",
        "han_viet": "VĂN",
        "meaning_vi": "Văn vẻ, văn chương, vẻ sáng",
        "on_reading": [
            "ブン",
            "モン"
        ],
        "kun_reading": [
            "ふみ",
            "あや"
        ],
        "level": "N4",
        "strokes": 4,
        "examples": [],
        "radicals": "",
        "meaning_en": "Literature, literature, light"
    },
    {
        "kanji": "展",
        "han_viet": "TRIỂN",
        "meaning_vi": "Phô bày, mở rộng, phát triển",
        "on_reading": [
            "テン"
        ],
        "kun_reading": [],
        "level": "N2",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Show, expand, develop"
    },
    {
        "kanji": "観",
        "han_viet": "QUAN",
        "meaning_vi": "Quan sát",
        "on_reading": [
            "カン"
        ],
        "kun_reading": [
            "み-る",
            "しめ-す"
        ],
        "level": "N3",
        "strokes": 18,
        "examples": [],
        "radicals": "",
        "meaning_en": "Observe"
    },
    {
        "kanji": "結",
        "han_viet": "KẾT",
        "meaning_vi": "Nối, buộc, kết",
        "on_reading": [
            "ケツ",
            "ケチ"
        ],
        "kun_reading": [
            "むす-ぶ",
            "ゆ-う",
            "ゆ.わえる"
        ],
        "level": "N2",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Connect, tie, conclude"
    },
    {
        "kanji": "婚",
        "han_viet": "HÔN",
        "meaning_vi": "Kết hôn, cưới hỏi",
        "on_reading": [
            "コン"
        ],
        "kun_reading": [],
        "level": "N2",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Marriage, wedding"
    },
    {
        "kanji": "式",
        "han_viet": "THỨC",
        "meaning_vi": "Buổi lễ, kiểu, phương thức",
        "on_reading": [
            "シキ"
        ],
        "kun_reading": [],
        "level": "N3",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Ceremony, style, method"
    },
    {
        "kanji": "葬",
        "han_viet": "TÁNG",
        "meaning_vi": "Chôn cất, mai táng",
        "on_reading": [
            "ソウ"
        ],
        "kun_reading": [
            "ほうむ-る"
        ],
        "level": "N1",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Burial, burial"
    },
    {
        "kanji": "支",
        "han_viet": "CHI",
        "meaning_vi": "Cành, nhánh",
        "on_reading": [
            "シ"
        ],
        "kun_reading": [
            "ささ-える",
            "つか-える",
            "か-う"
        ],
        "level": "N3",
        "strokes": 4,
        "examples": [],
        "radicals": "",
        "meaning_en": "Branches, branches"
    },
    {
        "kanji": "店",
        "han_viet": "ĐIẾM",
        "meaning_vi": "Tiệm, cửa hàng, cửa hiệu",
        "on_reading": [
            "テン"
        ],
        "kun_reading": [
            "みせ",
            "たな"
        ],
        "level": "N4",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Shops, shops, shops"
    },
    {
        "kanji": "院",
        "han_viet": "VIỆN",
        "meaning_vi": "Trụ sở, tòa nhà",
        "on_reading": [
            "イン"
        ],
        "kun_reading": [],
        "level": "N4",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Headquarters, building"
    },
    {
        "kanji": "園",
        "han_viet": "VIÊN",
        "meaning_vi": "Vườn, công viên, trang trại",
        "on_reading": [
            "エン"
        ],
        "kun_reading": [
            "その"
        ],
        "level": "N3",
        "strokes": 13,
        "examples": [],
        "radicals": "",
        "meaning_en": "Garden, park, farm"
    },
    {
        "kanji": "温",
        "han_viet": "ÔN",
        "meaning_vi": "Ấm, ôn hòa",
        "on_reading": [
            "オン"
        ],
        "kun_reading": [
            "あたた-か",
            "あたた-かい",
            "あたた-まる",
            "あたた-める",
            "ぬく"
        ],
        "level": "N2",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Warm, mild"
    },
    {
        "kanji": "泉",
        "han_viet": "TUYỀN",
        "meaning_vi": "Suối (nước nóng, nước khoáng)",
        "on_reading": [
            "セン"
        ],
        "kun_reading": [
            "いずみ"
        ],
        "level": "N2",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Stream (hot water, mineral water)"
    },
    {
        "kanji": "残",
        "han_viet": "TÀN",
        "meaning_vi": "Còn lại, còn thừa, tàn",
        "on_reading": [
            "ザン",
            "サン"
        ],
        "kun_reading": [
            "のこ-る",
            "のこ-す",
            "そこな-う",
            "のこ-り"
        ],
        "level": "N3",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "The rest, leftovers, remnants"
    },
    {
        "kanji": "普",
        "han_viet": "PHỔ",
        "meaning_vi": "Rộng lớn, khắp, đều",
        "on_reading": [
            "フ"
        ],
        "kun_reading": [],
        "level": "N2",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Vast, everywhere, all"
    },
    {
        "kanji": "村",
        "han_viet": "THÔN",
        "meaning_vi": "Làng xóm, thôn làng",
        "on_reading": [
            "ソン"
        ],
        "kun_reading": [
            "むら"
        ],
        "level": "N2",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Village, village"
    },
    {
        "kanji": "映",
        "han_viet": "ÁNH",
        "meaning_vi": "Chiếu sáng",
        "on_reading": [
            "エイ"
        ],
        "kun_reading": [
            "うつ-る",
            "うつ-す",
            "は-える",
            "ば-え"
        ],
        "level": "N4",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Illumination"
    },
    {
        "kanji": "都",
        "han_viet": "ĐÔ",
        "meaning_vi": "Kinh đô, thủ đô",
        "on_reading": [
            "ト",
            "ツ"
        ],
        "kun_reading": [
            "みやこ"
        ],
        "level": "N3",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Kinh Do, Capital"
    },
    {
        "kanji": "供",
        "han_viet": "CUNG",
        "meaning_vi": "Tùy tùng, hầu hạ, dâng nạp",
        "on_reading": [
            "キョウ",
            "ク",
            "クウ",
            "グ"
        ],
        "kun_reading": [
            "とも",
            "そな-える"
        ],
        "level": "N2",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Entourage, servant, offering"
    },
    {
        "kanji": "世",
        "han_viet": "THẾ",
        "meaning_vi": "Thế hệ, xã hội, thế giới",
        "on_reading": [
            "セイ",
            "セ",
            "ソウ"
        ],
        "kun_reading": [
            "よ",
            "さん",
            "じゅう"
        ],
        "level": "N4",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Generation, society, world"
    },
    {
        "kanji": "界",
        "han_viet": "GIỚI",
        "meaning_vi": "Thế giới, ranh giới",
        "on_reading": [
            "カイ"
        ],
        "kun_reading": [],
        "level": "N4",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "World, boundaries"
    },
    {
        "kanji": "集",
        "han_viet": "TẬP",
        "meaning_vi": "Tập hợp, gom lại",
        "on_reading": [
            "シュウ"
        ],
        "kun_reading": [
            "あつ-まる",
            "あつ-める",
            "つど-う"
        ],
        "level": "N4",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Gather, gather"
    },
    {
        "kanji": "美",
        "han_viet": "MĨ",
        "meaning_vi": "Đẹp, yêu kiều",
        "on_reading": [
            "ビ",
            "ミ"
        ],
        "kun_reading": [
            "うつく-しい"
        ],
        "level": "N3",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Beautiful, lovely"
    },
    {
        "kanji": "然",
        "han_viet": "NHIÊN",
        "meaning_vi": "Thế nhưng, vậy",
        "on_reading": [
            "ゼン",
            "ネン"
        ],
        "kun_reading": [
            "しか",
            "しか-り",
            "しか-し",
            "さ"
        ],
        "level": "N3",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "However, that"
    },
    {
        "kanji": "成",
        "han_viet": "THÀNH",
        "meaning_vi": "Thành tựu, hoàn thành",
        "on_reading": [
            "セイ",
            "ジョウ"
        ],
        "kun_reading": [
            "な-る",
            "な-す"
        ],
        "level": "N3",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Achievement, completion"
    },
    {
        "kanji": "功",
        "han_viet": "CÔNG",
        "meaning_vi": "Công lao, thành tích",
        "on_reading": [
            "コウ",
            "ク"
        ],
        "kun_reading": [
            "いさお"
        ],
        "level": "N1",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Merits and achievements"
    },
    {
        "kanji": "失",
        "han_viet": "THẤT",
        "meaning_vi": "Mất mát, sai lầm",
        "on_reading": [
            "シツ"
        ],
        "kun_reading": [
            "うしな-う",
            "う-せる"
        ],
        "level": "N3",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Loss, mistakes"
    },
    {
        "kanji": "敗",
        "han_viet": "BẠI",
        "meaning_vi": "Thất bại, đổ nát",
        "on_reading": [
            "ハイ"
        ],
        "kun_reading": [
            "やぶ-れる"
        ],
        "level": "N3",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Failure, ruin"
    },
    {
        "kanji": "試",
        "han_viet": "THÍ",
        "meaning_vi": "Thử nghiệm, thi",
        "on_reading": [
            "シ"
        ],
        "kun_reading": [
            "こころ-みる",
            "ため-す"
        ],
        "level": "N4",
        "strokes": 13,
        "examples": [],
        "radicals": "",
        "meaning_en": "Test, test"
    },
    {
        "kanji": "格",
        "han_viet": "CÁCH, CÁC",
        "meaning_vi": "Cách thức, quy cách, phong cách",
        "on_reading": [
            "カク",
            "コウ",
            "キャク",
            "ゴウ"
        ],
        "kun_reading": [],
        "level": "N3",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Ways, specifications, style"
    },
    {
        "kanji": "雨",
        "han_viet": "VŨ",
        "meaning_vi": "Mưa",
        "on_reading": [
            "ウ"
        ],
        "kun_reading": [
            "あめ",
            "あま",
            "さめ"
        ],
        "level": "N5",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Rain"
    },
    {
        "kanji": "曇",
        "han_viet": "ĐÀM",
        "meaning_vi": "Trời nhiều mây",
        "on_reading": [
            "ドン"
        ],
        "kun_reading": [
            "くも-る"
        ],
        "level": "N2",
        "strokes": 16,
        "examples": [],
        "radicals": "",
        "meaning_en": "Cloudy"
    },
    {
        "kanji": "吹",
        "han_viet": "XÚY",
        "meaning_vi": "Thổi, cổ vũ",
        "on_reading": [
            "スイ"
        ],
        "kun_reading": [
            "ふ-く"
        ],
        "level": "N2",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Blow, cheer"
    },
    {
        "kanji": "風",
        "han_viet": "PHONG",
        "meaning_vi": "Gió",
        "on_reading": [
            "フウ",
            "フ"
        ],
        "kun_reading": [
            "かぜ",
            "かざ-",
            "-かぜ"
        ],
        "level": "N4",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Wind"
    },
    {
        "kanji": "治",
        "han_viet": "TRỊ",
        "meaning_vi": "Sửa, chữa trị",
        "on_reading": [
            "ジ",
            "チ"
        ],
        "kun_reading": [
            "おさ-める",
            "おさ-まる",
            "なお-る",
            "なお-す"
        ],
        "level": "N3",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Repair, treatment"
    },
    {
        "kanji": "冷",
        "han_viet": "LÃNH",
        "meaning_vi": "Lạnh, nhạt nhẽo",
        "on_reading": [
            "レイ"
        ],
        "kun_reading": [
            "つめ-たい",
            "ひ-える",
            "ひ-ややか",
            "ひ-やす",
            "ひ-やかす",
            "さ-める",
            "さ-ます"
        ],
        "level": "N3",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Cold, bland"
    },
    {
        "kanji": "配",
        "han_viet": "PHỐI",
        "meaning_vi": "Phân phát",
        "on_reading": [
            "ハイ"
        ],
        "kun_reading": [
            "くば-る"
        ],
        "level": "N3",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Distribution"
    },
    {
        "kanji": "十",
        "han_viet": "THẬP",
        "meaning_vi": "Số mười",
        "on_reading": [
            "ジュウ",
            "ジッ",
            "ジュッ"
        ],
        "kun_reading": [
            "とお",
            "と"
        ],
        "level": "N5",
        "strokes": 2,
        "examples": [],
        "radicals": "",
        "meaning_en": "Ten"
    },
    {
        "kanji": "太",
        "han_viet": "THÁI",
        "meaning_vi": "Béo, dày",
        "on_reading": [
            "タイ"
        ],
        "kun_reading": [
            "ふと-い",
            "ふと-る"
        ],
        "level": "N4",
        "strokes": 4,
        "examples": [],
        "radicals": "",
        "meaning_en": "Fat, thick"
    },
    {
        "kanji": "陽",
        "han_viet": "DƯƠNG",
        "meaning_vi": "Mặt trời, tích cực",
        "on_reading": [
            "ヨウ"
        ],
        "kun_reading": [
            "ひ"
        ],
        "level": "N3",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "The sun, positive"
    },
    {
        "kanji": "星",
        "han_viet": "TINH",
        "meaning_vi": "Sao",
        "on_reading": [
            "セイ",
            "ショウ"
        ],
        "kun_reading": [
            "ほし"
        ],
        "level": "N2",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Star"
    },
    {
        "kanji": "北",
        "han_viet": "BẮC",
        "meaning_vi": "Phương bắc, hướng Bắc, phía Bắc",
        "on_reading": [
            "ホク"
        ],
        "kun_reading": [
            "きた"
        ],
        "level": "N5",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "North, North, North"
    },
    {
        "kanji": "南",
        "han_viet": "NAM",
        "meaning_vi": "Phía Nam, phương Nam, hướng Nam",
        "on_reading": [
            "ナン",
            "ナ"
        ],
        "kun_reading": [
            "みなみ"
        ],
        "level": "N5",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "South, South, South direction"
    },
    {
        "kanji": "東",
        "han_viet": "ĐÔNG",
        "meaning_vi": "Phương đông",
        "on_reading": [
            "トウ"
        ],
        "kun_reading": [
            "ひがし"
        ],
        "level": "N5",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Orient"
    },
    {
        "kanji": "道",
        "han_viet": "ĐẠO, ĐÁO",
        "meaning_vi": "Con đường, con phố",
        "on_reading": [
            "ドウ",
            "トウ"
        ],
        "kun_reading": [
            "みち"
        ],
        "level": "N4",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "The road, the street"
    },
    {
        "kanji": "夜",
        "han_viet": "DẠ",
        "meaning_vi": "Ban đêm",
        "on_reading": [
            "ヤ"
        ],
        "kun_reading": [
            "よ",
            "よる"
        ],
        "level": "N4",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Night"
    },
    {
        "kanji": "夕",
        "han_viet": "TỊCH",
        "meaning_vi": "Đêm tối",
        "on_reading": [
            "セキ"
        ],
        "kun_reading": [
            "ゆう"
        ],
        "level": "N4",
        "strokes": 3,
        "examples": [],
        "radicals": "",
        "meaning_en": "Night"
    },
    {
        "kanji": "胃",
        "han_viet": "VỊ",
        "meaning_vi": "Dạ dày",
        "on_reading": [
            "イ"
        ],
        "kun_reading": [],
        "level": "N3",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Stomach"
    },
    {
        "kanji": "働",
        "han_viet": "ĐỘNG",
        "meaning_vi": "Làm việc",
        "on_reading": [
            "ドウ",
            "リュク",
            "リキ",
            "ロク",
            "リョク"
        ],
        "kun_reading": [
            "はたら-く"
        ],
        "level": "N3",
        "strokes": 13,
        "examples": [],
        "radicals": "",
        "meaning_en": "Work"
    },
    {
        "kanji": "占",
        "han_viet": "CHIẾM, CHIÊM",
        "meaning_vi": "Chiếm đoạt, giữ, bói toán",
        "on_reading": [
            "セン"
        ],
        "kun_reading": [
            "し-める",
            "うらな-う"
        ],
        "level": "N2",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Appropriating, keeping, fortune telling"
    },
    {
        "kanji": "牡",
        "han_viet": "MẪU",
        "meaning_vi": "Con đực, giống đực. Chốt cửa. Lồi lên, gồ lên, gò đống. Mẫu đan [牡丹] hoa mẫu đơn.",
        "on_reading": [
            "ボ",
            "ボウ"
        ],
        "kun_reading": [
            "おす",
            "お-",
            "おん-"
        ],
        "level": "N1",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Males, male. Latch. Convex up, rough, mound. Model knitting [牡丹] Peony."
    },
    {
        "kanji": "牛",
        "han_viet": "NGƯU",
        "meaning_vi": "Trâu",
        "on_reading": [
            "ギュウ"
        ],
        "kun_reading": [
            "うし"
        ],
        "level": "N4",
        "strokes": 4,
        "examples": [],
        "radicals": "",
        "meaning_en": "Buffalo"
    },
    {
        "kanji": "座",
        "han_viet": "TỌA",
        "meaning_vi": "Ngồi, quỳ gối, chòm sao",
        "on_reading": [
            "ザ"
        ],
        "kun_reading": [
            "すわ-る"
        ],
        "level": "N2",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Sitting, kneeling, constellation"
    },
    {
        "kanji": "困",
        "han_viet": "KHỐN",
        "meaning_vi": "Khó khăn, khốn khổ",
        "on_reading": [
            "コン"
        ],
        "kun_reading": [
            "こま-る"
        ],
        "level": "N2",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Difficult, miserable"
    },
    {
        "kanji": "宝",
        "han_viet": "BẢO, BỬU",
        "meaning_vi": "Quý giá, châu báu, vật quý",
        "on_reading": [
            "ホウ"
        ],
        "kun_reading": [
            "たから"
        ],
        "level": "N2",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Precious, jewels, precious things"
    },
    {
        "kanji": "当",
        "han_viet": "ĐƯƠNG, ĐÁNG",
        "meaning_vi": "Tương đương, tương ứng",
        "on_reading": [
            "トウ"
        ],
        "kun_reading": [
            "あ-たる",
            "あ-たり",
            "あ-てる",
            "あ-て",
            "まさ-に",
            "まさ-にべし"
        ],
        "level": "N3",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Equivalent, corresponding"
    },
    {
        "kanji": "健",
        "han_viet": "KIỆN",
        "meaning_vi": "Khỏe mạnh, tráng kiện",
        "on_reading": [
            "ケン"
        ],
        "kun_reading": [
            "すこ-やか"
        ],
        "level": "N2",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Healthy, coated"
    },
    {
        "kanji": "健",
        "han_viet": "KIỆN",
        "meaning_vi": "Khỏe mạnh, tráng kiện",
        "on_reading": [
            "ケン"
        ],
        "kun_reading": [
            "すこ-やか"
        ],
        "level": "N2",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Healthy, coated"
    },
    {
        "kanji": "恋",
        "han_viet": "LUYẾN",
        "meaning_vi": "Tình yêu",
        "on_reading": [
            "レン"
        ],
        "kun_reading": [
            "こ-う",
            "こい",
            "こい-しい"
        ],
        "level": "N2",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Love"
    },
    {
        "kanji": "愛",
        "han_viet": "ÁI",
        "meaning_vi": "Yêu thích, yêu mến",
        "on_reading": [
            "アイ"
        ],
        "kun_reading": [],
        "level": "N3",
        "strokes": 13,
        "examples": [],
        "radicals": "",
        "meaning_en": "Favorite, love"
    },
    {
        "kanji": "金",
        "han_viet": "KIM",
        "meaning_vi": "Kim loại, vàng",
        "on_reading": [
            "キン",
            "コン",
            "ゴン"
        ],
        "kun_reading": [
            "かね",
            "かな",
            "がね"
        ],
        "level": "N5",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Metal, gold"
    },
    {
        "kanji": "持",
        "han_viet": "TRÌ",
        "meaning_vi": "Cầm, giữ, nắm",
        "on_reading": [
            "ジ"
        ],
        "kun_reading": [
            "も-つ",
            "も-ち",
            "も-てる"
        ],
        "level": "N4",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Hold, hold, grasp"
    },
    {
        "kanji": "逃",
        "han_viet": "ĐÀO",
        "meaning_vi": "Chạy trốn, tẩu thoát",
        "on_reading": [
            "トウ"
        ],
        "kun_reading": [
            "に-げる",
            "に-がす",
            "のが-す",
            "のが-れる"
        ],
        "level": "N3",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Flee, escape"
    },
    {
        "kanji": "騒",
        "han_viet": "TAO",
        "meaning_vi": "Tao động.Làm ồn, bị kích thích",
        "on_reading": [
            "ソウ"
        ],
        "kun_reading": [
            "さわ-ぐ",
            "うれい",
            "さわ-がしい"
        ],
        "level": "N1",
        "strokes": 18,
        "examples": [],
        "radicals": "",
        "meaning_en": "I am touched. Noisy, excited"
    },
    {
        "kanji": "投",
        "han_viet": "ĐẦU",
        "meaning_vi": "Ném, quẳng đi",
        "on_reading": [
            "トウ"
        ],
        "kun_reading": [
            "な-げる"
        ],
        "level": "N3",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Throw, throw away"
    },
    {
        "kanji": "守",
        "han_viet": "THỦ, THÚ",
        "meaning_vi": "Giữ, coi",
        "on_reading": [
            "シュ",
            "ス"
        ],
        "kun_reading": [
            "まも-る",
            "まも-り",
            "かみ"
        ],
        "level": "N3",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Keep, see"
    },
    {
        "kanji": "上",
        "han_viet": "THƯỢNG, THƯỚNG",
        "meaning_vi": "Trên, phía trên, đưa lên, cưỡi lên",
        "on_reading": [
            "ジョウ",
            "ショウ",
            "シャン"
        ],
        "kun_reading": [
            "うえ",
            "うわ",
            "かみ",
            "あ-げる",
            "あ-がる",
            "あ-がり",
            "のぼ-る",
            "のぼ-り",
            "のぼ-せる",
            "のぼ-す",
            "よ-す"
        ],
        "level": "N5",
        "strokes": 3,
        "examples": [],
        "radicals": "",
        "meaning_en": "Above, above, put up, ride"
    },
    {
        "kanji": "伝",
        "han_viet": "TRUYỀN",
        "meaning_vi": "Truyền đạt, truyền động",
        "on_reading": [
            "デン",
            "テン"
        ],
        "kun_reading": [
            "つた-える",
            "つた-わる",
            "つた-う",
            "つだ-う",
            "づた-い",
            "つて"
        ],
        "level": "N3",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Communicate, drive"
    },
    {
        "kanji": "注",
        "han_viet": "CHÚ",
        "meaning_vi": "Rót, đổ, chú ý",
        "on_reading": [
            "チュウ"
        ],
        "kun_reading": [
            "そそ-ぐ",
            "さ-す",
            "つ-ぐ"
        ],
        "level": "N4",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Pour, pour, pay attention"
    },
    {
        "kanji": "意",
        "han_viet": "Ý",
        "meaning_vi": "Ý định, ý chí",
        "on_reading": [
            "イ"
        ],
        "kun_reading": [],
        "level": "N4",
        "strokes": 13,
        "examples": [],
        "radicals": "",
        "meaning_en": "Intention, will"
    },
    {
        "kanji": "席",
        "han_viet": "TỊCH",
        "meaning_vi": "Chỗ ngồi",
        "on_reading": [
            "セキ"
        ],
        "kun_reading": [
            "むしろ"
        ],
        "level": "N3",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Seat"
    },
    {
        "kanji": "洗",
        "han_viet": "TIỂN, TẨY",
        "meaning_vi": "Giặt, rửa",
        "on_reading": [
            "セン"
        ],
        "kun_reading": [
            "あら-う"
        ],
        "level": "N3",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Washing, washing"
    },
    {
        "kanji": "濯",
        "han_viet": "TRẠC",
        "meaning_vi": "Rửa, giặt, súc miệng",
        "on_reading": [
            "タク"
        ],
        "kun_reading": [
            "すす-ぐ",
            "ゆす-ぐ"
        ],
        "level": "N2",
        "strokes": 17,
        "examples": [],
        "radicals": "",
        "meaning_en": "Wash, wash, gargle"
    },
    {
        "kanji": "校",
        "han_viet": "GIÁO, HIỆU",
        "meaning_vi": "Trường học, dấu hiệu",
        "on_reading": [
            "コウ",
            "キョウ"
        ],
        "kun_reading": [],
        "level": "N5",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Schools, signs"
    },
    {
        "kanji": "則",
        "han_viet": "TẮC",
        "meaning_vi": "Quy tắc, luật lệ",
        "on_reading": [
            "ソク"
        ],
        "kun_reading": [
            "のっと-る"
        ],
        "level": "N2",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Rules, rules"
    },
    {
        "kanji": "使",
        "han_viet": "SỬ, SỨ",
        "meaning_vi": "Sử dụng, dùng",
        "on_reading": [
            "シ"
        ],
        "kun_reading": [
            "つか-う",
            "つか-い",
            "つか-い",
            "づか-い"
        ],
        "level": "N4",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Use, use"
    },
    {
        "kanji": "用",
        "han_viet": "Dụng",
        "meaning_vi": "Dùng, công dụng",
        "on_reading": [
            "ヨウ"
        ],
        "kun_reading": [
            "もち-いる"
        ],
        "level": "N4",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Use, use"
    },
    {
        "kanji": "禁",
        "han_viet": "CẤM",
        "meaning_vi": "Cấm đoán, ngăn chặn",
        "on_reading": [
            "キン"
        ],
        "kun_reading": [],
        "level": "N2",
        "strokes": 13,
        "examples": [],
        "radicals": "",
        "meaning_en": "Prohibition, prevent"
    },
    {
        "kanji": "立",
        "han_viet": "LẬP",
        "meaning_vi": "Đứng, thành lập",
        "on_reading": [
            "リツ",
            "リュウ",
            "リットル"
        ],
        "kun_reading": [
            "た-つ",
            "た-ち",
            "た-てる",
            "た-て",
            "だ-てる",
            "だ-て"
        ],
        "level": "N5",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Stand, establish"
    },
    {
        "kanji": "非",
        "han_viet": "PHI",
        "meaning_vi": "Làm điều phi 非 pháp nên phải ở tù.",
        "on_reading": [
            "ヒ"
        ],
        "kun_reading": [
            "あら-ず"
        ],
        "level": "N3",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Doing things 非 dharma should be in prison."
    },
    {
        "kanji": "営",
        "han_viet": "DOANH",
        "meaning_vi": "Doanh nghiệp, kinh doanh; trại (lính)",
        "on_reading": [
            "エイ"
        ],
        "kun_reading": [
            "いとな-む",
            "いとな-み"
        ],
        "level": "N2",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Businesses, business; barrack)"
    },
    {
        "kanji": "兵",
        "han_viet": "BINH",
        "meaning_vi": "Người lính, quân đội",
        "on_reading": [
            "ヘイ",
            "ヒョウ"
        ],
        "kun_reading": [
            "つわもの"
        ],
        "level": "N2",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Soldier, army"
    },
    {
        "kanji": "反",
        "han_viet": "PHẢN",
        "meaning_vi": "Phản đối, trả lại",
        "on_reading": [
            "ハン",
            "ホン",
            "タン",
            "ホ"
        ],
        "kun_reading": [
            "そ-る",
            "そ-らす",
            "かえ-す",
            "かえ-る"
        ],
        "level": "N3",
        "strokes": 4,
        "examples": [],
        "radicals": "",
        "meaning_en": "Opposition, return"
    },
    {
        "kanji": "官",
        "han_viet": "QUAN",
        "meaning_vi": "Chức quan",
        "on_reading": [
            "カン"
        ],
        "kun_reading": [],
        "level": "N3",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Official"
    },
    {
        "kanji": "察",
        "han_viet": "SÁT",
        "meaning_vi": "Xét lại, xem kỹ",
        "on_reading": [
            "サツ"
        ],
        "kun_reading": [],
        "level": "N3",
        "strokes": 14,
        "examples": [],
        "radicals": "",
        "meaning_en": "Review, watch carefully"
    },
    {
        "kanji": "罰",
        "han_viet": "PHẠT",
        "meaning_vi": "Hình phạt, phạt",
        "on_reading": [
            "バツ",
            "バチ",
            "ハツ"
        ],
        "kun_reading": [
            "ばっ-する"
        ],
        "level": "N1",
        "strokes": 14,
        "examples": [],
        "radicals": "",
        "meaning_en": "Punishment, penalty"
    },
    {
        "kanji": "報",
        "han_viet": "BÁO",
        "meaning_vi": "Báo cáo, tin tức",
        "on_reading": [
            "ホウ"
        ],
        "kun_reading": [
            "むく-いる"
        ],
        "level": "N3",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Report, news"
    },
    {
        "kanji": "急",
        "han_viet": "CẤP",
        "meaning_vi": "Vội vàng, nóng ruột, sốt ruột",
        "on_reading": [
            "キュウ"
        ],
        "kun_reading": [
            "いそ-ぐ",
            "いそ-ぎ"
        ],
        "level": "N4",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Hurry, impatient, impatient"
    },
    {
        "kanji": "打",
        "han_viet": "ĐẢ",
        "meaning_vi": "Đánh, đập",
        "on_reading": [
            "ダ",
            "ダアス"
        ],
        "kun_reading": [
            "う-つ"
        ],
        "level": "N3",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Beat, beat"
    },
    {
        "kanji": "代",
        "han_viet": "ĐẠI",
        "meaning_vi": "Đại điện, thay thế, đổi",
        "on_reading": [
            "ダイ",
            "タイ"
        ],
        "kun_reading": [
            "か-わる",
            "か-わり",
            "が-わり",
            "か-える",
            "よ",
            "しろ"
        ],
        "level": "N4",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Representative, replacement, exchange"
    },
    {
        "kanji": "短",
        "han_viet": "ĐOẢN",
        "meaning_vi": "Ngắn",
        "on_reading": [
            "タン"
        ],
        "kun_reading": [
            "みじか-い"
        ],
        "level": "N2",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Short"
    },
    {
        "kanji": "危",
        "han_viet": "NGUY",
        "meaning_vi": "Nguy hiểm, hiểm nghèo",
        "on_reading": [
            "キ"
        ],
        "kun_reading": [
            "あぶ-ない",
            "あや-うい"
        ],
        "level": "N2",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Dangerous, dangerous"
    },
    {
        "kanji": "学",
        "han_viet": "HỌC",
        "meaning_vi": "Học hành",
        "on_reading": [
            "ガク"
        ],
        "kun_reading": [
            "まな-ぶ"
        ],
        "level": "N5",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Study"
    },
    {
        "kanji": "重",
        "han_viet": "TRỌNG, TRÙNG",
        "meaning_vi": "Nặng, cân nặng",
        "on_reading": [
            "ジュウ",
            "チョウ"
        ],
        "kun_reading": [
            "え",
            "おも-い",
            "おも-り",
            "おも-なう",
            "かさ-ねる",
            "かさ-なる",
            "おも"
        ],
        "level": "N4",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Heavy, weight"
    },
    {
        "kanji": "病",
        "han_viet": "BỆNH",
        "meaning_vi": "Ốm, bệnh",
        "on_reading": [
            "ビョウ",
            "ヘイ"
        ],
        "kun_reading": [
            "や-む",
            "や-み",
            "やまい"
        ],
        "level": "N4",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Sickness, illness"
    },
    {
        "kanji": "明",
        "han_viet": "MINH",
        "meaning_vi": "Sáng, ánh sáng",
        "on_reading": [
            "メイ",
            "ミョウ",
            "ミン"
        ],
        "kun_reading": [
            "あ-かり",
            "あか-るい",
            "あか-るむ",
            "あか-らむ",
            "あき-らか",
            "あ-ける",
            "あ-け",
            "あ-く",
            "あ-くる",
            "あ-かす"
        ],
        "level": "N4",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Light, light"
    },
    {
        "kanji": "係",
        "han_viet": "HỆ",
        "meaning_vi": "Ràng buộc, trói buộc, buộc",
        "on_reading": [
            "ケイ"
        ],
        "kun_reading": [
            "かか-る",
            "かかり",
            "かか-わる"
        ],
        "level": "N3",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Binding, binding, tying"
    },
    {
        "kanji": "悲",
        "han_viet": "BI",
        "meaning_vi": "Thương xót, buồn",
        "on_reading": [
            "ヒ"
        ],
        "kun_reading": [
            "かな-しい",
            "かな-しむ"
        ],
        "level": "N3",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Mercy, sadness"
    },
    {
        "kanji": "利",
        "han_viet": "LỢI",
        "meaning_vi": "Nhanh nhẩu, lợi ích, công dụng",
        "on_reading": [
            "リ"
        ],
        "kun_reading": [
            "き-く"
        ],
        "level": "N3",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Quickly, benefits, uses"
    },
    {
        "kanji": "磨",
        "han_viet": "MA",
        "meaning_vi": "Mài, đánh bóng",
        "on_reading": [
            "マ"
        ],
        "kun_reading": [
            "みが-く"
        ],
        "level": "N2",
        "strokes": 16,
        "examples": [],
        "radicals": "",
        "meaning_en": "Grinding, polishing"
    },
    {
        "kanji": "質",
        "han_viet": "CHẤT",
        "meaning_vi": "Thể chất, tư chất",
        "on_reading": [
            "シツ",
            "シチ",
            "チ"
        ],
        "kun_reading": [
            "たち",
            "ただ-す",
            "もと",
            "わりふ"
        ],
        "level": "N4",
        "strokes": 15,
        "examples": [],
        "radicals": "",
        "meaning_en": "Physical, qualified"
    },
    {
        "kanji": "問",
        "han_viet": "VẤN",
        "meaning_vi": "Hỏi, tra xét, hỏi thăm",
        "on_reading": [
            "モン"
        ],
        "kun_reading": [
            "と-う",
            "と-い",
            "とん"
        ],
        "level": "N4",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Ask, check, ask"
    },
    {
        "kanji": "細",
        "han_viet": "TẾ",
        "meaning_vi": "Thon, nhỏ, chi tiết",
        "on_reading": [
            "サイ"
        ],
        "kun_reading": [
            "ほそ-い",
            "ほそ-る",
            "こま-か",
            "こま-かい"
        ],
        "level": "N2",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Slender, small, detailed"
    },
    {
        "kanji": "図",
        "han_viet": "ĐỒ",
        "meaning_vi": "Bản đồ, bức vẽ",
        "on_reading": [
            "ズ",
            "ト"
        ],
        "kun_reading": [
            "え",
            "はか-る"
        ],
        "level": "N4",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Map, drawing"
    },
    {
        "kanji": "線",
        "han_viet": "TUYẾN",
        "meaning_vi": "Đường, dây",
        "on_reading": [
            "セン"
        ],
        "kun_reading": [
            "すじ"
        ],
        "level": "N3",
        "strokes": 15,
        "examples": [],
        "radicals": "",
        "meaning_en": "Line"
    },
    {
        "kanji": "矢",
        "han_viet": "THỈ",
        "meaning_vi": "Cây tên, mũi tên",
        "on_reading": [
            "シ"
        ],
        "kun_reading": [
            "や"
        ],
        "level": "N1",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Name tree, arrow"
    },
    {
        "kanji": "印",
        "han_viet": "ẤN",
        "meaning_vi": "Con dấu",
        "on_reading": [
            "イン"
        ],
        "kun_reading": [
            "しるし",
            "しる-す"
        ],
        "level": "N2",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Stamp"
    },
    {
        "kanji": "黒",
        "han_viet": "HẮC",
        "meaning_vi": "Màu đen",
        "on_reading": [
            "コク"
        ],
        "kun_reading": [
            "くろ",
            "くろ-ずむ",
            "くろ-い"
        ],
        "level": "N4",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Black"
    },
    {
        "kanji": "白",
        "han_viet": "BẠCH",
        "meaning_vi": "Màu trắng",
        "on_reading": [
            "ハク",
            "ビャク"
        ],
        "kun_reading": [
            "しろ",
            "しら",
            "しろ-い"
        ],
        "level": "N5",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "White"
    },
    {
        "kanji": "赤",
        "han_viet": "XÍCH",
        "meaning_vi": "Màu đỏ",
        "on_reading": [
            "セキ",
            "シャク"
        ],
        "kun_reading": [
            "あか",
            "あか",
            "あか-い",
            "あか-らむ",
            "あか-らめる"
        ],
        "level": "N4",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Red"
    },
    {
        "kanji": "青",
        "han_viet": "THANH",
        "meaning_vi": "Màu xanh",
        "on_reading": [
            "セイ",
            "ショウ"
        ],
        "kun_reading": [
            "あお",
            "あお",
            "あお-い"
        ],
        "level": "N4",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Green"
    },
    {
        "kanji": "紺",
        "han_viet": "CÁM",
        "meaning_vi": "Màu xanh tím than, xanh đậm",
        "on_reading": [
            "コン"
        ],
        "kun_reading": [],
        "level": "N1",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Purple blue, dark blue"
    },
    {
        "kanji": "黄",
        "han_viet": "HOÀNG",
        "meaning_vi": "Màu vàng",
        "on_reading": [
            "コウ",
            "オウ"
        ],
        "kun_reading": [
            "き"
        ],
        "level": "N2",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Yellow"
    },
    {
        "kanji": "載",
        "han_viet": "TÁI, TẠI, TẢI",
        "meaning_vi": "Chất lên, ghi lại, xuất bản",
        "on_reading": [
            "サイ"
        ],
        "kun_reading": [
            "の-せる",
            "の-る"
        ],
        "level": "N1",
        "strokes": 13,
        "examples": [],
        "radicals": "",
        "meaning_en": "Quality, record, publish"
    },
    {
        "kanji": "苦",
        "han_viet": "KHỔ",
        "meaning_vi": "Đắng, khổ cực",
        "on_reading": [
            "ク"
        ],
        "kun_reading": [
            "くる-しい",
            "ぐる-しい",
            "くる-しむ",
            "くる-しめる",
            "にが-い",
            "にが-る"
        ],
        "level": "N3",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Bitter, miserable"
    },
    {
        "kanji": "親",
        "han_viet": "THÂN",
        "meaning_vi": "Người thân, cha mẹ, bố mẹ, song thân",
        "on_reading": [
            "シン"
        ],
        "kun_reading": [
            "おや",
            "した-しい",
            "した-しむ"
        ],
        "level": "N4",
        "strokes": 16,
        "examples": [],
        "radicals": "",
        "meaning_en": "Relatives, parents, parents, but bodies"
    },
    {
        "kanji": "材",
        "han_viet": "TÀI",
        "meaning_vi": "Những thứ có sẵn trong tự nhiên mà dùng được",
        "on_reading": [
            "ザイ"
        ],
        "kun_reading": [],
        "level": "N2",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Things are available in nature"
    },
    {
        "kanji": "鶏",
        "han_viet": "KÊ",
        "meaning_vi": "Gà",
        "on_reading": [
            "ケイ"
        ],
        "kun_reading": [
            "にわとり"
        ],
        "level": "N1",
        "strokes": 19,
        "examples": [],
        "radicals": "",
        "meaning_en": "Chicken"
    },
    {
        "kanji": "肉",
        "han_viet": "NHỤC",
        "meaning_vi": "Thịt",
        "on_reading": [
            "ニク"
        ],
        "kun_reading": [
            "しし"
        ],
        "level": "N4",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Meat"
    },
    {
        "kanji": "調",
        "han_viet": "ĐIỀU, ĐIỆU",
        "meaning_vi": "Điều tra, nhịp điệu",
        "on_reading": [
            "チョウ"
        ],
        "kun_reading": [
            "しら-べる",
            "しら-べ",
            "ととの-う",
            "ととの-える"
        ],
        "level": "N3",
        "strokes": 15,
        "examples": [],
        "radicals": "",
        "meaning_en": "Investigation, rhythm"
    },
    {
        "kanji": "煮",
        "han_viet": "CHỬ",
        "meaning_vi": "Nấu, thổi",
        "on_reading": [
            "シャ"
        ],
        "kun_reading": [
            "に-る",
            "に",
            "に-える",
            "に-やす"
        ],
        "level": "N1",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Cook, blow"
    },
    {
        "kanji": "口",
        "han_viet": "KHẨU",
        "meaning_vi": "Cái miệng",
        "on_reading": [
            "コウ",
            "ク"
        ],
        "kun_reading": [
            "くち"
        ],
        "level": "N5",
        "strokes": 3,
        "examples": [],
        "radicals": "",
        "meaning_en": "Mouth"
    },
    {
        "kanji": "常",
        "han_viet": "THƯỜNG",
        "meaning_vi": "Bình thường, thông thường, luôn luôn",
        "on_reading": [
            "ジョウ"
        ],
        "kun_reading": [
            "つね",
            "とこ"
        ],
        "level": "N3",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Normally, usually, always"
    },
    {
        "kanji": "個",
        "han_viet": "CÁ",
        "meaning_vi": "Cá nhân, cái, quả, con",
        "on_reading": [
            "コ",
            "カ"
        ],
        "kun_reading": [],
        "level": "N2",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Individual, female, fruit, child"
    },

    {
        "kanji": "増",
        "han_viet": "TĂNG",
        "meaning_vi": "Tăng thêm, càng ...",
        "on_reading": [
            "ゾウ"
        ],
        "kun_reading": [
            "ま-す",
            "ふ-える",
            "ふ-やす"
        ],
        "level": "N3",
        "strokes": 14,
        "examples": [],
        "radicals": "",
        "meaning_en": "Increase, more ..."
    },
    {
        "kanji": "減",
        "han_viet": "GIẢM",
        "meaning_vi": "Giảm xuống, cắt bớt",
        "on_reading": [
            "ゲン"
        ],
        "kun_reading": [
            "へ-る",
            "へ-らす"
        ],
        "level": "N2",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Decrease, cut"
    },
    {
        "kanji": "上",
        "han_viet": "THƯỢNG, THƯỚNG",
        "meaning_vi": "Trên, phía trên, đưa lên, cưỡi lên",
        "on_reading": [
            "ジョウ",
            "ショウ",
            "シャン"
        ],
        "kun_reading": [
            "うえ",
            "うわ",
            "かみ",
            "あ-げる",
            "あ-がる",
            "あ-がり",
            "のぼ-る",
            "のぼ-り",
            "のぼ-せる",
            "のぼ-す",
            "よ-す"
        ],
        "level": "N5",
        "strokes": 3,
        "examples": [],
        "radicals": "",
        "meaning_en": "Above, above, put up, ride"
    },
    {
        "kanji": "下",
        "han_viet": "HẠ, HÁ",
        "meaning_vi": "Phía dưới, bên dưới, hạ lệnh, ra khơi",
        "on_reading": [
            "カ",
            "ゲ"
        ],
        "kun_reading": [
            "した",
            "しも",
            "もと",
            "さ-げる",
            "くだ-る",
            "くだ-す",
            "くだ-さる",
            "お-ろす",
            "お-りる"
        ],
        "level": "N5",
        "strokes": 3,
        "examples": [],
        "radicals": "",
        "meaning_en": "Below, below, order, set sail"
    },
    {
        "kanji": "切",
        "han_viet": "THIẾT, THẾ",
        "meaning_vi": "Cắt, sắc bén",
        "on_reading": [
            "セツ",
            "サイ"
        ],
        "kun_reading": [
            "き-る",
            "き-り",
            "ぎ-り"
        ],
        "level": "N4",
        "strokes": 4,
        "examples": [],
        "radicals": "",
        "meaning_en": "Cut, sharp"
    },
    {
        "kanji": "丈",
        "han_viet": "TRƯỢNG",
        "meaning_vi": "Đơn vị đo (bằng 10 thước), đo, chỉ",
        "on_reading": [
            "ジョウ"
        ],
        "kun_reading": [
            "たけ",
            "だけ"
        ],
        "level": "N1",
        "strokes": 3,
        "examples": [],
        "radicals": "",
        "meaning_en": "Measurement unit (equal to 10 meters), measurement, indicator"
    },
    {
        "kanji": "夫",
        "han_viet": "PHU",
        "meaning_vi": "Đàn ông, chồng",
        "on_reading": [
            "フ",
            "フウ",
            "ブ"
        ],
        "kun_reading": [
            "おっと",
            "それ"
        ],
        "level": "N3",
        "strokes": 4,
        "examples": [],
        "radicals": "",
        "meaning_en": "Men, husband"
    },
    {
        "kanji": "変",
        "han_viet": "BIẾN",
        "meaning_vi": "Kỳ lạ, thay đổi",
        "on_reading": [
            "ヘン"
        ],
        "kun_reading": [
            "か-わる",
            "か-わり",
            "か-える"
        ],
        "level": "N3",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Strange, change"
    },
    {
        "kanji": "幸",
        "han_viet": "HẠNH",
        "meaning_vi": "May, hạnh phúc",
        "on_reading": [
            "コウ"
        ],
        "kun_reading": [
            "さいわ-い",
            "さち",
            "しあわ-せ"
        ],
        "level": "N3",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Lucky, Happiness"
    },
    {
        "kanji": "火",
        "han_viet": "HỎA",
        "meaning_vi": "Lửa",
        "on_reading": [
            "カ"
        ],
        "kun_reading": [
            "ひ",
            "び",
            "ほ"
        ],
        "level": "N5",
        "strokes": 4,
        "examples": [],
        "radicals": "",
        "meaning_en": "Fire"
    },
    {
        "kanji": "暖",
        "han_viet": "NOÃN",
        "meaning_vi": "Ấm áp",
        "on_reading": [
            "ダン",
            "ノウ"
        ],
        "kun_reading": [
            "あたた-かい",
            "あたた-か",
            "あたた-まる",
            "あたた-める"
        ],
        "level": "N2",
        "strokes": 13,
        "examples": [],
        "radicals": "",
        "meaning_en": "Warm"
    },
    {
        "kanji": "房",
        "han_viet": "PHÒNG, BÀNG",
        "meaning_vi": "Căn phòng",
        "on_reading": [
            "ボウ"
        ],
        "kun_reading": [
            "ふさ"
        ],
        "level": "N1",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Room"
    },
    {
        "kanji": "冷",
        "han_viet": "LÃNH",
        "meaning_vi": "Lạnh, nhạt nhẽo",
        "on_reading": [
            "レイ"
        ],
        "kun_reading": [
            "つめ-たい",
            "ひ-える",
            "ひ-ややか",
            "ひ-やす",
            "ひ-やかす",
            "さ-める",
            "さ-ます"
        ],
        "level": "N3",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Cold, bland"
    },
    {
        "kanji": "今",
        "han_viet": "KIM",
        "meaning_vi": "Nay, hiện nay, bây giờ",
        "on_reading": [
            "コン",
            "キン"
        ],
        "kun_reading": [
            "いま"
        ],
        "level": "N5",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Now, now, now"
    },
    {
        "kanji": "会",
        "han_viet": "HỘI",
        "meaning_vi": "Tụ hội, gặp gỡ, cơ hội",
        "on_reading": [
            "カイ",
            "エ"
        ],
        "kun_reading": [
            "あ-う",
            "あ-わせる",
            "あつ-まる"
        ],
        "level": "N5",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Gathering, meeting, opportunities"
    },
    {
        "kanji": "員",
        "han_viet": "VIÊN, VÂN",
        "meaning_vi": "Nhân viên, thành viên, người",
        "on_reading": [
            "イン"
        ],
        "kun_reading": [],
        "level": "N4",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Staff, members, people"
    },
    {
        "kanji": "適",
        "han_viet": "THÍCH",
        "meaning_vi": "Phù hợp, thích hợp",
        "on_reading": [
            "テキ"
        ],
        "kun_reading": [
            "かな-う"
        ],
        "level": "N3",
        "strokes": 14,
        "examples": [],
        "radicals": "",
        "meaning_en": "Suitable, appropriate"
    },
    {
        "kanji": "当",
        "han_viet": "ĐƯƠNG, ĐÁNG",
        "meaning_vi": "Tương đương, tương ứng",
        "on_reading": [
            "トウ"
        ],
        "kun_reading": [
            "あ-たる",
            "あ-たり",
            "あ-てる",
            "あ-て",
            "まさ-に",
            "まさ-にべし"
        ],
        "level": "N3",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Equivalent, corresponding"
    },
    {
        "kanji": "年",
        "han_viet": "NIÊN",
        "meaning_vi": "Năm",
        "on_reading": [
            "ネン"
        ],
        "kun_reading": [
            "とし"
        ],
        "level": "N5",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Year"
    },
    {
        "kanji": "齢",
        "han_viet": "LINH",
        "meaning_vi": "Tuổi tác",
        "on_reading": [
            "レイ"
        ],
        "kun_reading": [
            "よわい",
            "とし"
        ],
        "level": "N2",
        "strokes": 17,
        "examples": [],
        "radicals": "",
        "meaning_en": "Age"
    },
    {
        "kanji": "収",
        "han_viet": "THU, THÂU",
        "meaning_vi": "Lợi tức, thu nhập",
        "on_reading": [
            "シュウ"
        ],
        "kun_reading": [
            "おさ-める",
            "おさ-まる"
        ],
        "level": "N2",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Income, income"
    },
    {
        "kanji": "入",
        "han_viet": "NHẬP",
        "meaning_vi": "Vào",
        "on_reading": [
            "ニュウ",
            "ジュ"
        ],
        "kun_reading": [
            "い-る",
            "い-れる",
            "はい-る"
        ],
        "level": "N4",
        "strokes": 2,
        "examples": [],
        "radicals": "",
        "meaning_en": "Enter"
    },
    {
        "kanji": "言",
        "han_viet": "NGÔN",
        "meaning_vi": "Nói",
        "on_reading": [
            "ゲン",
            "ゴン"
        ],
        "kun_reading": [
            "い-う",
            "こと"
        ],
        "level": "N4",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Speak"
    },
    {
        "kanji": "泣",
        "han_viet": "KHẤP",
        "meaning_vi": "Khóc",
        "on_reading": [
            "キュウ"
        ],
        "kun_reading": [
            "な-く"
        ],
        "level": "N3",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Cry"
    },
    {
        "kanji": "笑",
        "han_viet": "TIẾU",
        "meaning_vi": "Cười, vui cười",
        "on_reading": [
            "ショウ"
        ],
        "kun_reading": [
            "わら-う",
            "え-む"
        ],
        "level": "N3",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Laugh, laugh"
    },
    {
        "kanji": "乾",
        "han_viet": "CÀN, CAN, KIỀN",
        "meaning_vi": "Cạn, khô",
        "on_reading": [
            "カン"
        ],
        "kun_reading": [
            "かわ-く",
            "かわ-かす"
        ],
        "level": "N2",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Dry, dry"
    },
    {
        "kanji": "滑",
        "han_viet": "HOẠT, CỐT",
        "meaning_vi": "Trơn, nhẵn, trôi chảy",
        "on_reading": [
            "カツ",
            "コツ"
        ],
        "kun_reading": [
            "すべ-る",
            "なめ-らか"
        ],
        "level": "N1",
        "strokes": 13,
        "examples": [],
        "radicals": "",
        "meaning_en": "Smooth, smooth, fluent"
    },
    {
        "kanji": "丁",
        "han_viet": "ĐINH",
        "meaning_vi": "Can Đinh, can thứ tư trong mười can",
        "on_reading": [
            "チョウ",
            "テイ",
            "チン",
            "トウ",
            "チ"
        ],
        "kun_reading": [
            "ひのと"
        ],
        "level": "N1",
        "strokes": 2,
        "examples": [],
        "radicals": "",
        "meaning_en": "Can Dinh, the fourth of ten can"
    },
    {
        "kanji": "寧",
        "han_viet": "NINH, TRỮ",
        "meaning_vi": "Yên ổn, tốt hơn",
        "on_reading": [
            "ネイ"
        ],
        "kun_reading": [
            "むし-ろ"
        ],
        "level": "N1",
        "strokes": 14,
        "examples": [],
        "radicals": "",
        "meaning_en": "Peaceful, better"
    },
    {
        "kanji": "細",
        "han_viet": "TẾ",
        "meaning_vi": "Thon, nhỏ, chi tiết",
        "on_reading": [
            "サイ"
        ],
        "kun_reading": [
            "ほそ-い",
            "ほそ-る",
            "こま-か",
            "こま-かい"
        ],
        "level": "N2",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Slender, small, detailed"
    },
    {
        "kanji": "濃",
        "han_viet": "NỒNG",
        "meaning_vi": "Nồng hậu, đậm đặc",
        "on_reading": [
            "ノウ"
        ],
        "kun_reading": [
            "こ-い"
        ],
        "level": "N2",
        "strokes": 16,
        "examples": [],
        "radicals": "",
        "meaning_en": "Warmth, concentrated"
    },
    {
        "kanji": "薄",
        "han_viet": "BẠC",
        "meaning_vi": "Mỏng manh, nhẹ, nhạt nhẽo",
        "on_reading": [
            "ハク"
        ],
        "kun_reading": [
            "うす-い",
            "うす",
            "うす-める",
            "うす-まる",
            "うす-らぐ",
            "うす-ら",
            "うす-れる",
            "すすき"
        ],
        "level": "N2",
        "strokes": 16,
        "examples": [],
        "radicals": "",
        "meaning_en": "Fragile, light, bland"
    },
    {
        "kanji": "空",
        "han_viet": "KHÔNG",
        "meaning_vi": "Rỗng không, hư không, bầu trời",
        "on_reading": [
            "クウ"
        ],
        "kun_reading": [
            "そら",
            "あ-く",
            "あ-き",
            "あ-ける",
            "から",
            "す-く",
            "す-かす",
            "むな-しい"
        ],
        "level": "N4",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Empty, nowhere, sky"
    },
    {
        "kanji": "気",
        "han_viet": "KHÍ",
        "meaning_vi": "Không khí, khí chất; khí khái, khí phách",
        "on_reading": [
            "キ",
            "ケ"
        ],
        "kun_reading": [
            "いき"
        ],
        "level": "N5",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Atmosphere, temperament; The temperament, mettle"
    },
    {
        "kanji": "涙",
        "han_viet": "LỆ",
        "meaning_vi": "Nước mắt",
        "on_reading": [
            "レイ",
            "ルイ"
        ],
        "kun_reading": [
            "なみだ"
        ],
        "level": "N2",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Tear"
    },
    {
        "kanji": "和",
        "han_viet": "HÒA",
        "meaning_vi": "Hòa, trộn lẫn",
        "on_reading": [
            "ワ",
            "オ",
            "カ"
        ],
        "kun_reading": [
            "やわ-らぐ",
            "やわ-らげる",
            "なご-む",
            "なご-やか"
        ],
        "level": "N3",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Mix, mix"
    },
    {
        "kanji": "食",
        "han_viet": "THỰC",
        "meaning_vi": "Ăn",
        "on_reading": [
            "ショク",
            "ジキ"
        ],
        "kun_reading": [
            "く-う",
            "く-らう",
            "た-べる",
            "は-む"
        ],
        "level": "N5",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Eat"
    },
    {
        "kanji": "洋",
        "han_viet": "DƯƠNG",
        "meaning_vi": "Ngoại quốc, phương Tây",
        "on_reading": [
            "ヨウ"
        ],
        "kun_reading": [],
        "level": "N4",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Foreign, Western"
    },
    {
        "kanji": "量",
        "han_viet": "LƯỢNG, LƯỜNG, LƯƠNG",
        "meaning_vi": "Sức chứa, số lượng, đo đạc, ước tính",
        "on_reading": [
            "リョウ"
        ],
        "kun_reading": [
            "はか-る"
        ],
        "level": "N2",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Capacity, quantity, measurement, estimation"
    },
    {
        "kanji": "倍",
        "han_viet": "BỘI",
        "meaning_vi": "Gấp đôi, tăng lên",
        "on_reading": [
            "バイ"
        ],
        "kun_reading": [],
        "level": "N2",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Double, increase"
    },
    {
        "kanji": "半",
        "han_viet": "BÁN",
        "meaning_vi": "Nửa, một nửa",
        "on_reading": [
            "ハン"
        ],
        "kun_reading": [
            "なか-ば"
        ],
        "level": "N5",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Half, half"
    },
    {
        "kanji": "分",
        "han_viet": "PHÂN",
        "meaning_vi": "Chia cắt, phân chia, lượng từ đếm thời gian",
        "on_reading": [
            "ブン",
            "フン",
            "ブ"
        ],
        "kun_reading": [
            "わ-ける",
            "わ-かれる",
            "わ-かる"
        ],
        "level": "N5",
        "strokes": 4,
        "examples": [],
        "radicals": "",
        "meaning_en": "Division, division, amount of time counting"
    },
    {
        "kanji": "洗",
        "han_viet": "TIỂN, TẨY",
        "meaning_vi": "Giặt, rửa",
        "on_reading": [
            "セン"
        ],
        "kun_reading": [
            "あら-う"
        ],
        "level": "N3",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Washing, washing"
    },
    {
        "kanji": "濯",
        "han_viet": "TRẠC",
        "meaning_vi": "Rửa, giặt, súc miệng",
        "on_reading": [
            "タク"
        ],
        "kun_reading": [
            "すす-ぐ",
            "ゆす-ぐ"
        ],
        "level": "N2",
        "strokes": 17,
        "examples": [],
        "radicals": "",
        "meaning_en": "Wash, wash, gargle"
    },
    {
        "kanji": "物",
        "han_viet": "VẬT",
        "meaning_vi": "Sự vật, đồ vật",
        "on_reading": [
            "ブツ",
            "モツ"
        ],
        "kun_reading": [
            "もの",
            "もの-"
        ],
        "level": "N4",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Things, objects"
    },
    {
        "kanji": "理",
        "han_viet": "LÍ",
        "meaning_vi": "Lý luận, nguyên lý",
        "on_reading": [
            "リ"
        ],
        "kun_reading": [
            "ことわり"
        ],
        "level": "N4",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Theory, principle"
    },
    {
        "kanji": "由",
        "han_viet": "DO",
        "meaning_vi": "Nguyên do, nguyên nhân",
        "on_reading": [
            "ユ",
            "ユウ",
            "ユイ"
        ],
        "kun_reading": [
            "よし",
            "よ.る"
        ],
        "level": "N3",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Reasons, causes"
    },
    {
        "kanji": "疲",
        "han_viet": "BÍ",
        "meaning_vi": "Mệt mỏi",
        "on_reading": [
            "ヒ"
        ],
        "kun_reading": [
            "つか-れる",
            "つか-らす"
        ],
        "level": "N2",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Tired"
    },
    {
        "kanji": "嫌",
        "han_viet": "HIỀM",
        "meaning_vi": "Khó chịu, ghét, không ưa",
        "on_reading": [
            "ケン",
            "ゲン"
        ],
        "kun_reading": [
            "きら-う",
            "きら-い",
            "いや"
        ],
        "level": "N1",
        "strokes": 13,
        "examples": [],
        "radicals": "",
        "meaning_en": "Annoying, hate, dislike"
    },
    {
        "kanji": "順",
        "han_viet": "THUẬN",
        "meaning_vi": "Lượt, thứ tự, thuận lợi",
        "on_reading": [
            "ジュン"
        ],
        "kun_reading": [],
        "level": "N2",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Turn, order, convenience"
    },
    {
        "kanji": "序",
        "han_viet": "TỰ",
        "meaning_vi": "Cơ hội, thứ tự, trật tự",
        "on_reading": [
            "ジョ"
        ],
        "kun_reading": [
            "つい-で",
            "ついで"
        ],
        "level": "N1",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Opportunities, order, order"
    },
    {
        "kanji": "表",
        "han_viet": "BIỂU",
        "meaning_vi": "Mặt ngoài, biểu hiện",
        "on_reading": [
            "ヒョウ"
        ],
        "kun_reading": [
            "おもて",
            "あらわ-す",
            "あらわ-れる"
        ],
        "level": "N3",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Outside, expression"
    },
    {
        "kanji": "現",
        "han_viet": "HIỆN",
        "meaning_vi": "Xuất hiện, tồn tại, bây giờ",
        "on_reading": [
            "ゲン"
        ],
        "kun_reading": [
            "あらわ-れる",
            "あらわ-す",
            "うつつ",
            "うつ-つ"
        ],
        "level": "N3",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Appears, exists, now"
    },
    {
        "kanji": "例",
        "han_viet": "LỆ",
        "meaning_vi": "Ví dụ, tiền lệ",
        "on_reading": [
            "レイ"
        ],
        "kun_reading": [
            "たと-える"
        ],
        "level": "N3",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "For example, precedent"
    },
    {
        "kanji": "用",
        "han_viet": "Dụng",
        "meaning_vi": "Dùng, công dụng",
        "on_reading": [
            "ヨウ"
        ],
        "kun_reading": [
            "もち-いる"
        ],
        "level": "N4",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Use, use"
    },
    {
        "kanji": "到",
        "han_viet": "ĐÁO",
        "meaning_vi": "Đến nơi",
        "on_reading": [
            "トウ"
        ],
        "kun_reading": [
            "いた.る"
        ],
        "level": "N2",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Arrival"
    },
    {
        "kanji": "着",
        "han_viet": "TRƯỚC",
        "meaning_vi": "Đến nơi, mặc (quần áo)",
        "on_reading": [
            "チャク",
            "ジャク"
        ],
        "kun_reading": [
            "き-る",
            "ぎ",
            "き-せる",
            "き-せ",
            "つ-く",
            "つ-ける"
        ],
        "level": "N4",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Upon arrival, wearing (clothes)"
    },
    {
        "kanji": "保",
        "han_viet": "BẢO",
        "meaning_vi": "Bảo đảm, giữ gìn, duy trì",
        "on_reading": [
            "ホ",
            "ホウ"
        ],
        "kun_reading": [
            "たも-つ"
        ],
        "level": "N1",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Guarantee, preserve, maintain"
    },
    {
        "kanji": "証",
        "han_viet": "CHỨNG",
        "meaning_vi": "Chứng cớ, bằng chứng",
        "on_reading": [
            "ショウ"
        ],
        "kun_reading": [
            "あかし"
        ],
        "level": "N1",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Evidence, evidence"
    },
    {
        "kanji": "書",
        "han_viet": "THƯ",
        "meaning_vi": "Sách, ghi chép, viết",
        "on_reading": [
            "ショ"
        ],
        "kun_reading": [
            "か-く",
            "が-き",
            "がき"
        ],
        "level": "N5",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Books, records, writing"
    },
    {
        "kanji": "領",
        "han_viet": "LÃNH, LĨNH",
        "meaning_vi": "Cổ áo, lĩnh, nhận",
        "on_reading": [
            "リョウ"
        ],
        "kun_reading": [
            "えり"
        ],
        "level": "N2",
        "strokes": 14,
        "examples": [],
        "radicals": "",
        "meaning_en": "Collar, field, receive"
    },
    {
        "kanji": "贈",
        "han_viet": "TẶNG",
        "meaning_vi": "Cho, tặng",
        "on_reading": [
            "ゾウ",
            "ソウ"
        ],
        "kun_reading": [
            "おく-る"
        ],
        "level": "N2",
        "strokes": 18,
        "examples": [],
        "radicals": "",
        "meaning_en": "Give, give"
    },
    {
        "kanji": "間",
        "han_viet": "GIAN",
        "meaning_vi": "Khoảng, ở giữa, bên trong (không gian)",
        "on_reading": [
            "カン",
            "ケン"
        ],
        "kun_reading": [
            "あいだ",
            "ま",
            "あい"
        ],
        "level": "N5",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Interval, in the middle, inside (space)"
    },
    {
        "kanji": "違",
        "han_viet": "VI",
        "meaning_vi": "Sai, khác biệt",
        "on_reading": [
            "イ"
        ],
        "kun_reading": [
            "ちが-う",
            "ちが-い",
            "ちが-える",
            "たが-う",
            "たが-える"
        ],
        "level": "N2",
        "strokes": 13,
        "examples": [],
        "radicals": "",
        "meaning_en": "False, difference"
    },
    {
        "kanji": "電",
        "han_viet": "ĐIỆN",
        "meaning_vi": "Chớp, điện",
        "on_reading": [
            "デン"
        ],
        "kun_reading": [],
        "level": "N5",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Lightning, electricity"
    },
    {
        "kanji": "話",
        "han_viet": "THOẠI",
        "meaning_vi": "Lời nói, cuộc trò chuyện",
        "on_reading": [
            "ワ"
        ],
        "kun_reading": [
            "はな-す",
            "はな"
        ],
        "level": "N5",
        "strokes": 13,
        "examples": [],
        "radicals": "",
        "meaning_en": "Words, conversations"
    },
    {
        "kanji": "係",
        "han_viet": "HỆ",
        "meaning_vi": "Ràng buộc, trói buộc, buộc",
        "on_reading": [
            "ケイ"
        ],
        "kun_reading": [
            "かか-る",
            "かかり",
            "かか-わる"
        ],
        "level": "N3",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Binding, binding, tying"
    },
    {
        "kanji": "中",
        "han_viet": "TRUNG, TRÚNG",
        "meaning_vi": "Giữa, ở trong, suốt",
        "on_reading": [
            "チュウ",
            "ジュウ"
        ],
        "kun_reading": [
            "なか",
            "うち",
            "あた-る"
        ],
        "level": "N5",
        "strokes": 4,
        "examples": [],
        "radicals": "",
        "meaning_en": "Middle, inside, transparent"
    },
    {
        "kanji": "止",
        "han_viet": "CHỈ",
        "meaning_vi": "Dừng lại",
        "on_reading": [
            "シ"
        ],
        "kun_reading": [
            "と-まる",
            "と-める",
            "さ-す",
            "とど-まる",
            "とど-める",
            "や-む",
            "や-める",
            "よ-す"
        ],
        "level": "N4",
        "strokes": 4,
        "examples": [],
        "radicals": "",
        "meaning_en": "Stop"
    },
    {
        "kanji": "点",
        "han_viet": "ĐIỂM",
        "meaning_vi": "Điểm",
        "on_reading": [
            "テン"
        ],
        "kun_reading": [
            "つ-ける",
            "つ-く",
            "た-てる",
            "さ-す",
            "とぼ-す",
            "とも-す",
            "ぼち"
        ],
        "level": "N3",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Point"
    },
    {
        "kanji": "円",
        "han_viet": "VIÊN",
        "meaning_vi": "Đồng yên, tròn",
        "on_reading": [
            "エン"
        ],
        "kun_reading": [
            "まる-い",
            "まる",
            "まど",
            "まど-か",
            "まろ-やか"
        ],
        "level": "N5",
        "strokes": 4,
        "examples": [],
        "radicals": "",
        "meaning_en": "Yen, round"
    },
    {
        "kanji": "札",
        "han_viet": "TRÁT",
        "meaning_vi": "Thẻ, tờ giấy",
        "on_reading": [
            "サツ"
        ],
        "kun_reading": [
            "ふだ"
        ],
        "level": "N2",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Card, paper"
    },
    {
        "kanji": "急",
        "han_viet": "CẤP",
        "meaning_vi": "Vội vàng, nóng ruột, sốt ruột",
        "on_reading": [
            "キュウ"
        ],
        "kun_reading": [
            "いそ-ぐ",
            "いそ-ぎ"
        ],
        "level": "N4",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Hurry, impatient, impatient"
    },
    {
        "kanji": "楽",
        "han_viet": "LẠC, NHẠC",
        "meaning_vi": "Lạc thú, âm nhạc, thoải mái, dễ chịu",
        "on_reading": [
            "ガク",
            "ラク",
            "ゴウ"
        ],
        "kun_reading": [
            "たの-しい",
            "たの-しむ",
            "この-む"
        ],
        "level": "N4",
        "strokes": 13,
        "examples": [],
        "radicals": "",
        "meaning_en": "Lac animals, music, comfort, pleasant"
    },
    {
        "kanji": "以",
        "han_viet": "DĨ",
        "meaning_vi": "Lấy, dùng, bởi vì",
        "on_reading": [
            "イ"
        ],
        "kun_reading": [
            "もっ-て"
        ],
        "level": "N4",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Get, use, because"
    },
    {
        "kanji": "優",
        "han_viet": "ƯU",
        "meaning_vi": "Trên hết, ưu việt, dịu dàng",
        "on_reading": [
            "ユウ",
            "ユ"
        ],
        "kun_reading": [
            "すぐ-れる",
            "やさ-しい",
            "まさ-る"
        ],
        "level": "N2",
        "strokes": 17,
        "examples": [],
        "radicals": "",
        "meaning_en": "Above all, superiority, gentle"
    },
    {
        "kanji": "勝",
        "han_viet": "THẮNG",
        "meaning_vi": "Chiến thắng",
        "on_reading": [
            "ショウ"
        ],
        "kun_reading": [
            "か-つ",
            "が-ち",
            "まさ-る",
            "すぐ-れる",
            "か-つ"
        ],
        "level": "N3",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Win"
    },
    {
        "kanji": "悩",
        "han_viet": "NÃO",
        "meaning_vi": "Lo lắng, phiền muộn",
        "on_reading": [
            "ノウ"
        ],
        "kun_reading": [
            "なや-む",
            "なやみ",
            "なや-ます",
            "なや-ましい"
        ],
        "level": "N2",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Worry, depression"
    },
    {
        "kanji": "目",
        "han_viet": "MỤC",
        "meaning_vi": "Mắt",
        "on_reading": [
            "モク",
            "ボク"
        ],
        "kun_reading": [
            "め",
            "ま"
        ],
        "level": "N5",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Eye"
    },
    {
        "kanji": "覚",
        "han_viet": "GIÁC",
        "meaning_vi": "Nhớ, cảm thấy, tỉnh ngộ",
        "on_reading": [
            "カク"
        ],
        "kun_reading": [
            "おぼ-える",
            "さ-ます",
            "さ-める",
            "さと-る"
        ],
        "level": "N3",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Remember, feel, wake up"
    },
    {
        "kanji": "時",
        "han_viet": "THÌ, THỜI",
        "meaning_vi": "Thời điểm, thời gian",
        "on_reading": [
            "ジ"
        ],
        "kun_reading": [
            "とき",
            "どき"
        ],
        "level": "N5",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Time, time"
    },
    {
        "kanji": "計",
        "han_viet": "KẾ, KÊ",
        "meaning_vi": "Kế sách, đo lường",
        "on_reading": [
            "ケイ"
        ],
        "kun_reading": [
            "はか-る",
            "はか-らう"
        ],
        "level": "N4",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Plan, measure"
    },
    {
        "kanji": "眠",
        "han_viet": "MIÊN",
        "meaning_vi": "Ngủ",
        "on_reading": [
            "ミン"
        ],
        "kun_reading": [
            "ねむ-る",
            "ねむ-い"
        ],
        "level": "N2",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Sleep"
    },
    {
        "kanji": "大",
        "han_viet": "ĐẠI",
        "meaning_vi": "To lớn",
        "on_reading": [
            "ダイ",
            "タイ"
        ],
        "kun_reading": [
            "おお",
            "おお-きい",
            "おお-いに"
        ],
        "level": "N5",
        "strokes": 3,
        "examples": [],
        "radicals": "",
        "meaning_en": "Huge"
    },
    {
        "kanji": "学",
        "han_viet": "HỌC",
        "meaning_vi": "Học hành",
        "on_reading": [
            "ガク"
        ],
        "kun_reading": [
            "まな-ぶ"
        ],
        "level": "N5",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Study"
    },
    {
        "kanji": "生",
        "han_viet": "SINH",
        "meaning_vi": "Sinh đẻ, sinh sống",
        "on_reading": [
            "セイ",
            "ショウ"
        ],
        "kun_reading": [
            "い-きる",
            "い-かす",
            "い-ける",
            "うま-れる",
            "うまれ",
            "う-む",
            "お-う",
            "は-える",
            "は-やす",
            "なま",
            "な-る",
            "な-す",
            "む-す"
        ],
        "level": "N5",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Birth, live"
    },
    {
        "kanji": "回",
        "han_viet": "HỒI",
        "meaning_vi": "Lần, quay lại, trở lại",
        "on_reading": [
            "カイ",
            "エ"
        ],
        "kun_reading": [
            "まわ-る",
            "ま-り",
            "まわ-す",
            "まわ-し",
            "もとお-る",
            "か-える"
        ],
        "level": "N3",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Times, come back, come back"
    },
    {
        "kanji": "答",
        "han_viet": "ĐÁP",
        "meaning_vi": "Trả lời",
        "on_reading": [
            "トウ"
        ],
        "kun_reading": [
            "こた-える",
            "こた-え"
        ],
        "level": "N4",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Reply"
    },
    {
        "kanji": "焼",
        "han_viet": "THIÊU",
        "meaning_vi": "Đốt cháy",
        "on_reading": [
            "ショウ"
        ],
        "kun_reading": [
            "や-く",
            "や-き",
            "や.ける"
        ],
        "level": "N2",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Burn"
    },
    {
        "kanji": "渡",
        "han_viet": "ĐỘ",
        "meaning_vi": "Băng qua, đi qua",
        "on_reading": [
            "ト"
        ],
        "kun_reading": [
            "わた-る",
            "わた-す"
        ],
        "level": "N2",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Crossing, passing"
    },
    {
        "kanji": "帰",
        "han_viet": "QUY",
        "meaning_vi": "Quay lại, trở về",
        "on_reading": [
            "キ"
        ],
        "kun_reading": [
            "かえ-る",
            "かえ-す",
            "おく-る",
            "とつ-ぐ"
        ],
        "level": "N4",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Back, return"
    },
    {
        "kanji": "出",
        "han_viet": "XUẤT",
        "meaning_vi": "Ra ngoài, mở ra",
        "on_reading": [
            "シュツ",
            "スイ"
        ],
        "kun_reading": [
            "で-る",
            "だ-す",
            "い-でる",
            "い-だす"
        ],
        "level": "N4",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Out, open"
    },
    {
        "kanji": "係",
        "han_viet": "HỆ",
        "meaning_vi": "Ràng buộc, trói buộc, buộc",
        "on_reading": [
            "ケイ"
        ],
        "kun_reading": [
            "かか-る",
            "かかり",
            "かか-わる"
        ],
        "level": "N3",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Binding, binding, tying"
    },
    {
        "kanji": "守",
        "han_viet": "THỦ, THÚ",
        "meaning_vi": "Giữ, coi",
        "on_reading": [
            "シュ",
            "ス"
        ],
        "kun_reading": [
            "まも-る",
            "まも-り",
            "かみ"
        ],
        "level": "N3",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Keep, see"
    },
    {
        "kanji": "宅",
        "han_viet": "TRẠCH",
        "meaning_vi": "Nhà cửa, nhà tôi, chồng tôi",
        "on_reading": [
            "タク"
        ],
        "kun_reading": [],
        "level": "N2",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "My house, my house, my husband"
    },
    {
        "kanji": "配",
        "han_viet": "PHỐI",
        "meaning_vi": "Phân phát",
        "on_reading": [
            "ハイ"
        ],
        "kun_reading": [
            "くば-る"
        ],
        "level": "N3",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Distribution"
    },
    {
        "kanji": "便",
        "han_viet": "TIỆN",
        "meaning_vi": "Sự thuận tiện, thuận lợi",
        "on_reading": [
            "ベン",
            "ビン"
        ],
        "kun_reading": [
            "たよ-り"
        ],
        "level": "N3",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Convenience, convenience"
    },
    {
        "kanji": "原",
        "han_viet": "NGUYÊN",
        "meaning_vi": "Cánh đồng, đồng bằng, nguyên thủy",
        "on_reading": [
            "ゲン"
        ],
        "kun_reading": [
            "はら"
        ],
        "level": "N2",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Fields, plains, primitive"
    },
    {
        "kanji": "因",
        "han_viet": "NHÂN",
        "meaning_vi": "Nguyên nhân, nguyên do",
        "on_reading": [
            "イン"
        ],
        "kun_reading": [
            "よ-る",
            "ちな-む"
        ],
        "level": "N3",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Causes, reasons"
    },
    {
        "kanji": "注",
        "han_viet": "CHÚ",
        "meaning_vi": "Rót, đổ, chú ý",
        "on_reading": [
            "チュウ"
        ],
        "kun_reading": [
            "そそ-ぐ",
            "さ-す",
            "つ-ぐ"
        ],
        "level": "N4",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Pour, pour, pay attention"
    },
    {
        "kanji": "射",
        "han_viet": "XẠ, DẠ, DỊCH",
        "meaning_vi": "Bắn",
        "on_reading": [
            "シャ"
        ],
        "kun_reading": [
            "い-る",
            "さ-す",
            "う-つ"
        ],
        "level": "N1",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Shoot"
    },
    {
        "kanji": "欲",
        "han_viet": "DỤC",
        "meaning_vi": "Ao ước, ước muốn",
        "on_reading": [
            "ヨク"
        ],
        "kun_reading": [
            "ほっ-する",
            "ほ-しい"
        ],
        "level": "N2",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Wish, desire"
    },
    {
        "kanji": "所",
        "han_viet": "SỞ",
        "meaning_vi": "Nơi, chốn",
        "on_reading": [
            "ショ"
        ],
        "kun_reading": [
            "ところ",
            "どころ",
            "とこ"
        ],
        "level": "N4",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Place, place"
    },
    {
        "kanji": "具",
        "han_viet": "CỤ",
        "meaning_vi": "Đồ dùng, dụng cụ",
        "on_reading": [
            "グ"
        ],
        "kun_reading": [
            "そな-える",
            "つぶさ-に"
        ],
        "level": "N3",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Utensils, tools"
    },
    {
        "kanji": "合",
        "han_viet": "HỢP, HIỆP",
        "meaning_vi": "Hợp, vừa ý, hợp lại",
        "on_reading": [
            "ゴウ",
            "ガッ",
            "カッ"
        ],
        "kun_reading": [
            "あ-う",
            "あ-わせる"
        ],
        "level": "N4",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Suitable, satisfactory, combined"
    },
    {
        "kanji": "様",
        "han_viet": "DẠNG",
        "meaning_vi": "Ngài, cách thức",
        "on_reading": [
            "ヨウ",
            "ショウ"
        ],
        "kun_reading": [
            "さま",
            "さん"
        ],
        "level": "N3",
        "strokes": 14,
        "examples": [],
        "radicals": "",
        "meaning_en": "He, the way"
    },
    {
        "kanji": "向",
        "han_viet": "HƯỚNG",
        "meaning_vi": "Ngoảnh về, hướng về, nhằm vào",
        "on_reading": [
            "コウ"
        ],
        "kun_reading": [
            "む-く",
            "む-ける"
        ],
        "level": "N3",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Looking back, heading, aimed"
    },
    {
        "kanji": "待",
        "han_viet": "ĐÃI",
        "meaning_vi": "Đợi, tiếp đãi",
        "on_reading": [
            "タイ"
        ],
        "kun_reading": [
            "ま-つ",
            "ま-ち"
        ],
        "level": "N4",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Wait, treat"
    },
    {
        "kanji": "知",
        "han_viet": "TRI, TRÍ",
        "meaning_vi": "Biết, hiểu biết",
        "on_reading": [
            "チ"
        ],
        "kun_reading": [
            "し-る",
            "し-らせる"
        ],
        "level": "N4",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Know, understand"
    },
    {
        "kanji": "識",
        "han_viet": "THỨC, CHÍ",
        "meaning_vi": "Hiểu biết, ghi ghép",
        "on_reading": [
            "シキ"
        ],
        "kun_reading": [
            "し-る",
            "しる-す"
        ],
        "level": "N3",
        "strokes": 19,
        "examples": [],
        "radicals": "",
        "meaning_en": "Understanding, grafting"
    },
    {
        "kanji": "宝",
        "han_viet": "BẢO, BỬU",
        "meaning_vi": "Quý giá, châu báu, vật quý",
        "on_reading": [
            "ホウ"
        ],
        "kun_reading": [
            "たから"
        ],
        "level": "N2",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Precious, jewels, precious things"
    },
    {
        "kanji": "庫",
        "han_viet": "KHỐ",
        "meaning_vi": "Kho chứa đồ vật",
        "on_reading": [
            "コ",
            "ク"
        ],
        "kun_reading": [
            "くら"
        ],
        "level": "N2",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Storage"
    },
    {
        "kanji": "手",
        "han_viet": "THỦ",
        "meaning_vi": "Tay",
        "on_reading": [
            "シュ",
            "ズ"
        ],
        "kun_reading": [
            "て"
        ],
        "level": "N4",
        "strokes": 4,
        "examples": [],
        "radicals": "",
        "meaning_en": "Hand"
    },
    {
        "kanji": "情",
        "han_viet": "TÌNH",
        "meaning_vi": "Nhân tình, tâm lý",
        "on_reading": [
            "ジョウ",
            "セイ"
        ],
        "kun_reading": [
            "なさ-け"
        ],
        "level": "N3",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Mistress, psychology"
    },
    {
        "kanji": "報",
        "han_viet": "BÁO",
        "meaning_vi": "Báo cáo, tin tức",
        "on_reading": [
            "ホウ"
        ],
        "kun_reading": [
            "むく-いる"
        ],
        "level": "N3",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Report, news"
    },
    {
        "kanji": "一",
        "han_viet": "NHẤT",
        "meaning_vi": "Một",
        "on_reading": [
            "イチ",
            "イツ"
        ],
        "kun_reading": [
            "ひと",
            "ひと-つ",
            "ひと-り"
        ],
        "level": "N5",
        "strokes": 1,
        "examples": [],
        "radicals": "",
        "meaning_en": "One"
    },
    {
        "kanji": "人",
        "han_viet": "NHÂN",
        "meaning_vi": "Người",
        "on_reading": [
            "ジン",
            "ニン"
        ],
        "kun_reading": [
            "ひと"
        ],
        "level": "N5",
        "strokes": 2,
        "examples": [],
        "radicals": "",
        "meaning_en": "People"
    },
    {
        "kanji": "長",
        "han_viet": "TRƯỜNG",
        "meaning_vi": "Hình ảnh một người có mái tóc dài.",
        "on_reading": [
            "チョウ"
        ],
        "kun_reading": [
            "なが-い",
            "おさ"
        ],
        "level": "N5",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "The image of a person with long hair."
    },
    {
        "kanji": "音",
        "han_viet": "ÂM",
        "meaning_vi": "Âm thanh, tiếng",
        "on_reading": [
            "オン",
            "イン",
            "ノン"
        ],
        "kun_reading": [
            "おと",
            "ね"
        ],
        "level": "N4",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Sound, sound"
    },
    {
        "kanji": "声",
        "han_viet": "THANH",
        "meaning_vi": "Tiếng, giọng nói",
        "on_reading": [
            "セイ",
            "ショウ"
        ],
        "kun_reading": [
            "こえ",
            "こわ"
        ],
        "level": "N3",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Voice, voice"
    },
    {
        "kanji": "味",
        "han_viet": "VỊ",
        "meaning_vi": "Mùi, hương vị",
        "on_reading": [
            "ミ"
        ],
        "kun_reading": [
            "あじ",
            "あじ-わう"
        ],
        "level": "N4",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Smell, flavor"
    },
    {
        "kanji": "傘",
        "han_viet": "TÁN, TẢN",
        "meaning_vi": "Cái ô, cái dù",
        "on_reading": [
            "サン"
        ],
        "kun_reading": [
            "かさ"
        ],
        "level": "N1",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Umbrella, umbrella"
    },
    {
        "kanji": "怖",
        "han_viet": "PHỐ, BỐ",
        "meaning_vi": "Sợ hãi, dọa nạt, đáng sợ",
        "on_reading": [
            "フ",
            "ホ"
        ],
        "kun_reading": [
            "こわ-い",
            "こわ-がる",
            "お-じる",
            "おそ-れる"
        ],
        "level": "N3",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Fear, intimidation, scary"
    },
    {
        "kanji": "天",
        "han_viet": "THIÊN",
        "meaning_vi": "Bầu trời",
        "on_reading": [
            "テン"
        ],
        "kun_reading": [
            "あまつ",
            "あめ",
            "あま"
        ],
        "level": "N5",
        "strokes": 4,
        "examples": [],
        "radicals": "",
        "meaning_en": "Sky"
    },
    {
        "kanji": "予",
        "han_viet": "DỰ",
        "meaning_vi": "Dự định",
        "on_reading": [
            "ヨ",
            "シャ"
        ],
        "kun_reading": [
            "あらかじ-め"
        ],
        "level": "N3",
        "strokes": 4,
        "examples": [],
        "radicals": "",
        "meaning_en": "Plan"
    },
    {
        "kanji": "発",
        "han_viet": "PHÁT",
        "meaning_vi": "Bắt đầu, xuất phát, phát hiện",
        "on_reading": [
            "ハツ",
            "ホツ"
        ],
        "kun_reading": [
            "た-つ",
            "あば-く",
            "おこ-る",
            "つか-わす",
            "はな-つ"
        ],
        "level": "N4",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Start, start, discover"
    },
    {
        "kanji": "実",
        "han_viet": "THỰC",
        "meaning_vi": "Chân thực, thành thực",
        "on_reading": [
            "ジツ",
            "シツ"
        ],
        "kun_reading": [
            "み",
            "みの-る",
            "まこと",
            "みの",
            "みち-る"
        ],
        "level": "N3",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Honest, honest"
    },
    {
        "kanji": "験",
        "han_viet": "NGHIỆM",
        "meaning_vi": "Thí nghiệm, kinh nghiệm",
        "on_reading": [
            "ケン",
            "ゲン"
        ],
        "kun_reading": [
            "あかし",
            "しるし",
            "ため-す",
            "ためし"
        ],
        "level": "N4",
        "strokes": 18,
        "examples": [],
        "radicals": "",
        "meaning_en": "Experiment, experience"
    },
    {
        "kanji": "口",
        "han_viet": "KHẨU",
        "meaning_vi": "Cái miệng",
        "on_reading": [
            "コウ",
            "ク"
        ],
        "kun_reading": [
            "くち"
        ],
        "level": "N5",
        "strokes": 3,
        "examples": [],
        "radicals": "",
        "meaning_en": "Mouth"
    },
    {
        "kanji": "科",
        "han_viet": "KHOA",
        "meaning_vi": "Khoa, bộ môn",
        "on_reading": [
            "カ"
        ],
        "kun_reading": [],
        "level": "N3",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Department, subject"
    },
    {
        "kanji": "医",
        "han_viet": "Y",
        "meaning_vi": "Y học, y tế, bác sĩ",
        "on_reading": [
            "イ"
        ],
        "kun_reading": [
            "い-やす",
            "い-する",
            "くすし"
        ],
        "level": "N4",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Medicine, health, doctor"
    },
    {
        "kanji": "文",
        "han_viet": "VĂN",
        "meaning_vi": "Văn vẻ, văn chương, vẻ sáng",
        "on_reading": [
            "ブン",
            "モン"
        ],
        "kun_reading": [
            "ふみ",
            "あや"
        ],
        "level": "N4",
        "strokes": 4,
        "examples": [],
        "radicals": "",
        "meaning_en": "Literature, literature, light"
    },
    {
        "kanji": "救",
        "han_viet": "CỨU",
        "meaning_vi": "Bảo vệ, cứu giúp",
        "on_reading": [
            "キュウ"
        ],
        "kun_reading": [
            "すく-う"
        ],
        "level": "N1",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Protect, help"
    },
    {
        "kanji": "車",
        "han_viet": "XA",
        "meaning_vi": "Chiếc xe",
        "on_reading": [
            "シャ"
        ],
        "kun_reading": [
            "くるま"
        ],
        "level": "N5",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Car"
    },
    {
        "kanji": "賛",
        "han_viet": "TÁN",
        "meaning_vi": "Tán thành, đồng ý",
        "on_reading": [
            "サン"
        ],
        "kun_reading": [
            "たす-ける",
            "たた-える"
        ],
        "level": "N3",
        "strokes": 15,
        "examples": [],
        "radicals": "",
        "meaning_en": "Agree, agree"
    },
    {
        "kanji": "成",
        "han_viet": "THÀNH",
        "meaning_vi": "Thành tựu, hoàn thành",
        "on_reading": [
            "セイ",
            "ジョウ"
        ],
        "kun_reading": [
            "な-る",
            "な-す"
        ],
        "level": "N3",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Achievement, completion"
    },
    {
        "kanji": "反",
        "han_viet": "PHẢN",
        "meaning_vi": "Phản đối, trả lại",
        "on_reading": [
            "ハン",
            "ホン",
            "タン",
            "ホ"
        ],
        "kun_reading": [
            "そ-る",
            "そ-らす",
            "かえ-す",
            "かえ-る"
        ],
        "level": "N3",
        "strokes": 4,
        "examples": [],
        "radicals": "",
        "meaning_en": "Opposition, return"
    },
    {
        "kanji": "対",
        "han_viet": "ĐỐI",
        "meaning_vi": "Đối với",
        "on_reading": [
            "タイ",
            "ツイ"
        ],
        "kun_reading": [
            "あいて",
            "こた-える",
            "そろ-い",
            "つれあ.い",
            "なら-ぶ",
            "むか-う"
        ],
        "level": "N3",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "For"
    },
    {
        "kanji": "男",
        "han_viet": "NAM",
        "meaning_vi": "Nam giới, đàn ông",
        "on_reading": [
            "ダン",
            "ナン"
        ],
        "kun_reading": [
            "おとこ",
            "お"
        ],
        "level": "N5",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Men, men"
    },
    {
        "kanji": "性",
        "han_viet": "TÍNH",
        "meaning_vi": "Giới tính, giống",
        "on_reading": [
            "セイ",
            "ショウ"
        ],
        "kun_reading": [
            "さが"
        ],
        "level": "N3",
        "strokes": 8,
        "examples": [],
        "radicals": "",
        "meaning_en": "Gender, like"
    },
    {
        "kanji": "女",
        "han_viet": "NỮ",
        "meaning_vi": "Nữ giới, con gái, đàn bà",
        "on_reading": [
            "ジョ",
            "ニョ",
            "ニョウ"
        ],
        "kun_reading": [
            "おんな",
            "め"
        ],
        "level": "N5",
        "strokes": 3,
        "examples": [],
        "radicals": "",
        "meaning_en": "Women, girls, women"
    },
    {
        "kanji": "恋",
        "han_viet": "LUYẾN",
        "meaning_vi": "Tình yêu",
        "on_reading": [
            "レン"
        ],
        "kun_reading": [
            "こ-う",
            "こい",
            "こい-しい"
        ],
        "level": "N2",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Love"
    },
    {
        "kanji": "婚",
        "han_viet": "HÔN",
        "meaning_vi": "Kết hôn, cưới hỏi",
        "on_reading": [
            "コン"
        ],
        "kun_reading": [],
        "level": "N2",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Marriage, wedding"
    },
    {
        "kanji": "約",
        "han_viet": "ƯỚC",
        "meaning_vi": "Điều ước, lời hứa, ước chừng",
        "on_reading": [
            "ヤク"
        ],
        "kun_reading": [
            "つづ.まる",
            "つづ.める",
            "つづま.やか"
        ],
        "level": "N3",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Wishes, promises, estimates"
    },
    {
        "kanji": "相",
        "han_viet": "TƯƠNG, TƯỚNG",
        "meaning_vi": "Cùng chung, qua lại lẫn nhau",
        "on_reading": [
            "ソウ",
            "ショウ"
        ],
        "kun_reading": [
            "あい"
        ],
        "level": "N3",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Together, interact with each other"
    },
    {
        "kanji": "平",
        "han_viet": "BÌNH",
        "meaning_vi": "Bằng phẳng, bằng nhau, hòa bình",
        "on_reading": [
            "ヘイ",
            "ビョウ",
            "ヒョウ"
        ],
        "kun_reading": [
            "たい-ら",
            "だいら",
            "ひら"
        ],
        "level": "N3",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Flat, equal, peaceful"
    },
    {
        "kanji": "一",
        "han_viet": "NHẤT",
        "meaning_vi": "Một",
        "on_reading": [
            "イチ",
            "イツ"
        ],
        "kun_reading": [
            "ひと",
            "ひと-つ",
            "ひと-り"
        ],
        "level": "N5",
        "strokes": 1,
        "examples": [],
        "radicals": "",
        "meaning_en": "One"
    },
    {
        "kanji": "十",
        "han_viet": "THẬP",
        "meaning_vi": "Số mười",
        "on_reading": [
            "ジュウ",
            "ジッ",
            "ジュッ"
        ],
        "kun_reading": [
            "とお",
            "と"
        ],
        "level": "N5",
        "strokes": 2,
        "examples": [],
        "radicals": "",
        "meaning_en": "Ten"
    },
    {
        "kanji": "冥",
        "han_viet": "MINH",
        "meaning_vi": "Chỗ mù mịt không có ánh sáng. Tục cho là chỗ người chết ở. Ngu tối. Man mác. Nghĩ ngầm.",
        "on_reading": [
            "メイ",
            "ミョウ"
        ],
        "kun_reading": [
            "くら-い"
        ],
        "level": "N1",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "The blindness has no light. Continuing to be the dead place. Stupid dark. Man Marx. Thinking underground."
    },
    {
        "kanji": "比",
        "han_viet": "TỶ",
        "meaning_vi": "Đây có lẽ cũng là chữ Katakana (ヒ) nhỉ?",
        "on_reading": [
            "ヒ"
        ],
        "kun_reading": [
            "くら--べる"
        ],
        "level": "N3",
        "strokes": 4,
        "examples": [],
        "radicals": "",
        "meaning_en": "This is probably the word Katakana (ヒ ヒ)?"
    },
    {
        "kanji": "博",
        "han_viet": "BÁC",
        "meaning_vi": "Sâu rộng, thông suốt",
        "on_reading": [
            "ハク",
            "バク"
        ],
        "kun_reading": [],
        "level": "N1",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Deep, smooth"
    },
    {
        "kanji": "士",
        "han_viet": "SĨ",
        "meaning_vi": "Kẻ sĩ",
        "on_reading": [
            "シ"
        ],
        "kun_reading": [
            "さむらい"
        ],
        "level": "N1",
        "strokes": 3,
        "examples": [],
        "radicals": "",
        "meaning_en": "Martyrs"
    },
    {
        "kanji": "脳",
        "han_viet": "NÃO",
        "meaning_vi": "Bộ óc, não",
        "on_reading": [
            "ノウ",
            "ドウ"
        ],
        "kun_reading": [],
        "level": "N2",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Brain, brain"
    },
    {
        "kanji": "化",
        "han_viet": "HÓA",
        "meaning_vi": "Sự biến hóa, thay đổi",
        "on_reading": [
            "カ",
            "ケ"
        ],
        "kun_reading": [
            "ば-ける",
            "ば-かす",
            "ふ-ける",
            "け-する"
        ],
        "level": "N3",
        "strokes": 4,
        "examples": [],
        "radicals": "",
        "meaning_en": "Transformation, change"
    },
    {
        "kanji": "美",
        "han_viet": "MĨ",
        "meaning_vi": "Đẹp, yêu kiều",
        "on_reading": [
            "ビ",
            "ミ"
        ],
        "kun_reading": [
            "うつく-しい"
        ],
        "level": "N3",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Beautiful, lovely"
    },
    {
        "kanji": "品",
        "han_viet": "PHẨM",
        "meaning_vi": "Đồ vật, cái hay, phấm cách, hàng hóa, đếm số bữa ăn",
        "on_reading": [
            "ヒン",
            "ホン"
        ],
        "kun_reading": [
            "しな"
        ],
        "level": "N4",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Items, beauty, tanges, goods, counting meals"
    },

    {
        "kanji": "起",
        "han_viet": "KHỞI",
        "meaning_vi": "Bắt đầu, thức dậy",
        "on_reading": [
            "キ"
        ],
        "kun_reading": [
            "お-きる",
            "お-こる",
            "お-こす",
            "お-.す",
            "た-つ"
        ],
        "level": "N4",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Start, wake up"
    },
    {
        "kanji": "全",
        "han_viet": "TOÀN",
        "meaning_vi": "Xong, đủ, toàn bộ",
        "on_reading": [
            "ゼン"
        ],
        "kun_reading": [
            "まった-く",
            "すべ-て"
        ],
        "level": "N3",
        "strokes": 6,
        "examples": [],
        "radicals": "",
        "meaning_en": "Done, enough, all"
    },
    {
        "kanji": "別",
        "han_viet": "BIỆT",
        "meaning_vi": "Chia li, phân biệt, đặc biệt",
        "on_reading": [
            "ベツ"
        ],
        "kun_reading": [
            "わか-れる",
            "わ-ける"
        ],
        "level": "N4",
        "strokes": 7,
        "examples": [],
        "radicals": "",
        "meaning_en": "Division, distinction, special"
    },
    {
        "kanji": "縁",
        "han_viet": "DUYÊN",
        "meaning_vi": "Duyên số, số mệnh.",
        "on_reading": [
            "エン",
            "ネン"
        ],
        "kun_reading": [
            "ふち",
            "ふちど-る",
            "ゆかり",
            "よすが",
            "へり",
            "えにし"
        ],
        "level": "N1",
        "strokes": 15,
        "examples": [],
        "radicals": "",
        "meaning_en": "Diagram, fate."
    },
    {
        "kanji": "悪",
        "han_viet": "ÁC",
        "meaning_vi": "Sự xấu, không tốt",
        "on_reading": [
            "アク",
            "オ"
        ],
        "kun_reading": [
            "わる.い",
            "わる-",
            "あ.し",
            "にく.い",
            "-にく.い",
            "ああ",
            "いずくに",
            "いずくんぞ",
            "にく.む"
        ],
        "level": "N4",
        "strokes": 11,
        "examples": [],
        "radicals": "",
        "meaning_en": "Badness, not good"
    },
    {
        "kanji": "謝",
        "han_viet": "TẠ",
        "meaning_vi": "Tạ ơn, tạ lỗi, xin lỗi",
        "on_reading": [
            "シャ"
        ],
        "kun_reading": [
            "あやま-る"
        ],
        "level": "N1",
        "strokes": 17,
        "examples": [],
        "radicals": "",
        "meaning_en": "Thanksgiving, apology, sorry"
    },
    {
        "kanji": "信",
        "han_viet": "TÍN",
        "meaning_vi": "Tin, tin cậy, tín nhiệm",
        "on_reading": [
            "シン"
        ],
        "kun_reading": [
            "しん-じる"
        ],
        "level": "N3",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "News, trust, trust"
    },
    {
        "kanji": "意",
        "han_viet": "Ý",
        "meaning_vi": "Ý định, ý chí",
        "on_reading": [
            "イ"
        ],
        "kun_reading": [],
        "level": "N4",
        "strokes": 13,
        "examples": [],
        "radicals": "",
        "meaning_en": "Intention, will"
    },
    {
        "kanji": "部",
        "han_viet": "BỘ",
        "meaning_vi": "Bộ phận",
        "on_reading": [
            "ブ"
        ],
        "kun_reading": [],
        "level": "N3",
        "strokes": 10,
        "examples": [],
        "radicals": "",
        "meaning_en": "Part"
    },
    {
        "kanji": "力",
        "han_viet": "LỰC",
        "meaning_vi": "Sức mạnh",
        "on_reading": [
            "リョク",
            "リキ",
            "リイ"
        ],
        "kun_reading": [
            "ちから"
        ],
        "level": "N4",
        "strokes": 2,
        "examples": [],
        "radicals": "",
        "meaning_en": "Power"
    },
    {
        "kanji": "秒",
        "han_viet": "MIỂU",
        "meaning_vi": "Giây",
        "on_reading": [
            "ビョウ"
        ],
        "kun_reading": [],
        "level": "N2",
        "strokes": 9,
        "examples": [],
        "radicals": "",
        "meaning_en": "Second"
    },
    {
        "kanji": "本",
        "han_viet": "BỔN, BẢN",
        "meaning_vi": "Gốc, rễ, cội nguồn của sự vật, sách",
        "on_reading": [
            "ホン"
        ],
        "kun_reading": [
            "もと"
        ],
        "level": "N5",
        "strokes": 5,
        "examples": [],
        "radicals": "",
        "meaning_en": "Root, roots, roots of things, books"
    },
    {
        "kanji": "集",
        "han_viet": "TẬP",
        "meaning_vi": "Tập hợp, gom lại",
        "on_reading": [
            "シュウ"
        ],
        "kun_reading": [
            "あつ-まる",
            "あつ-める",
            "つど-う"
        ],
        "level": "N4",
        "strokes": 12,
        "examples": [],
        "radicals": "",
        "meaning_en": "Gather, gather"
    },
  ];
  