export interface VocabExampleSeed {
    example_text: string;
    meaning_vi: string;
    meaning_en: string;
    furigana: string;
  }
  
  export interface VocabSeedData {
    vocab: string;
    furigana?: string;
    meaning_vi: string;
    meaning_en: string;
    word_type:string;
    level:string;
    lesson_number: number; // để tự liên kết lesson
    examples?: VocabExampleSeed[];
    kanji_list?: string[]; // nếu có kanji liên kết thủ công
  }

  export const vocabSeedData: VocabSeedData[] = [
    {
        "furigana": "わたし",
        "vocab": "私",
        "meaning_vi": "Tôi",
        "lesson_number": 1,
        "word_type": "",
        "level": "N4",
        "meaning_en": "I",
        "examples": [
          {
            "example_text": "これは私たちが外国映画を見る映画館だ。",
            "furigana": "これは私たちが外国映画を見る映画館だ。",
            "meaning_vi": "Đây là rạp chiếu phim nơi chúng tôi xem các bộ phim nước ngoài.",
            "meaning_en": "これは私たちが外国映画を見る映画館だ。"
          },
          {
            "example_text": "私はしばしば人生の意義について深く考えることがある。",
            "furigana": "私はしばしば人生の意義について深く考えることがある。",
            "meaning_vi": "Tôi luôn suy nghĩ sâu sa về ý nghĩa cuộc sống.",
            "meaning_en": "私はしばしば人生の意義について深く考えることがある。"
          },
          {
            "example_text": "私は私の息子を医者にした。",
            "furigana": "私は私の息子を医者にした。",
            "meaning_vi": "Tôi là bác sĩ của con trai tôi.",
            "meaning_en": "私は私の息子を医者にした。"
          },
          {
            "example_text": "私の姉は私に劣らず、クラシック音楽が好きだ。",
            "furigana": "私の姉は私に劣らず、くらしっく音楽が好きだ。",
            "meaning_vi": "Chị gái của tôi không kém tôi, chị ấy thích nhạc cổ điển.",
            "meaning_en": "私の姉は私に劣らず、クラシック音楽が好きだ。"
          },
          {
            "example_text": "私の姉は私の三倍本を持っています。",
            "furigana": "私の姉は私の三倍本を持っています。",
            "meaning_vi": "Chị gái có nhiều sách gấp 3 lần tôi có.",
            "meaning_en": "私の姉は私の三倍本を持っています。"
          },
          {
            "example_text": "私でなく私の兄が仙台に住んでいる。",
            "furigana": "私でなく私の兄が仙台に住んでいる。",
            "meaning_vi": "Anh trai tôi sống ở Sendai còn tôi thì không.",
            "meaning_en": "私でなく私の兄が仙台に住んでいる。"
          },
          {
            "example_text": "私の父は私の一人旅に反対した。",
            "furigana": "私の父は私の一人旅に反対した。",
            "meaning_vi": "Bố tôi phản đối việc một mình đi du lịch của tôi.",
            "meaning_en": "私の父は私の一人旅に反対した。"
          },
          {
            "example_text": "母が私を現在の私にしてくれた。",
            "furigana": "母が私を現在の私にしてくれた。",
            "meaning_vi": "Mẹ đã giúp tôi có ngày hôm nay.",
            "meaning_en": "母が私を現在の私にしてくれた。"
          },
          {
            "example_text": "私は忙しい。",
            "furigana": "私は忙しい。",
            "meaning_vi": "Tôi bận rộn.",
            "meaning_en": "私は忙しい。"
          },
          {
            "example_text": "そのハンドバッグ、私の。",
            "furigana": "そのはんどばっぐ、私の。",
            "meaning_vi": "Cái túi xách đó là của tôi.",
            "meaning_en": "そのハンドバッグ、私の。"
          },
          {
            "example_text": "私は美しい。",
            "furigana": "私は美しい。",
            "meaning_vi": "Tôi thật đẹp.",
            "meaning_en": "私は美しい。"
          },
          {
            "example_text": "私はビアンです。",
            "furigana": "私はびあんです。",
            "meaning_vi": "Tôi là người đồng tính.",
            "meaning_en": "私はビアンです。"
          }
        ]
      },
      {
        "furigana": "わたしたち",
        "vocab": "私たち",
        "meaning_vi": "Chúng tôi",
        "lesson_number": 1,
        "word_type": "",
        "level": "N4",
        "meaning_en": "We",
        "examples": [
          {
            "example_text": "３月の終わりに私たちは結婚するつもりです。",
            "furigana": "３月の終わりに私たちは結婚するつもりです。",
            "meaning_vi": "Chúng tôi dự định sẽ kết hôn vào cuối tháng 3",
            "meaning_en": "３月の終わりに私たちは結婚するつもりです。"
          },
          {
            "example_text": "彼女は私たちにとても親切です",
            "furigana": "彼女は私たちにとても親切です",
            "meaning_vi": "Nó rất thân thiết với chúng tôi.",
            "meaning_en": "彼女は私たちにとても親切です"
          },
          {
            "example_text": "私たちの手助けが必要ですか。",
            "furigana": "私たちの手助けが必要ですか。",
            "meaning_vi": "Bạn có cần chúng tôi giúp không?",
            "meaning_en": "私たちの手助けが必要ですか。"
          },
          {
            "example_text": "私たちは車で国のあちこちを旅した。",
            "furigana": "私たちは車で国のあちこちを旅した。",
            "meaning_vi": "Chúng tôi đã đi khắp đất nước bằng chiếc xe này.",
            "meaning_en": "私たちは車で国のあちこちを旅した。"
          },
          {
            "example_text": "私たちは私たちの犬をホワイトと名づけました。",
            "furigana": "私たちは私たちの犬をほわいとと名づけました。",
            "meaning_vi": "Chúng tôi đã đặt tên cho con chó của chúng tôi là Trắng.",
            "meaning_en": "私たちは私たちの犬をホワイトと名づけました。"
          },
          {
            "example_text": "私たちは、試す。",
            "furigana": "私たちは、試す。",
            "meaning_vi": "Chúng tôi sẽ cố gắng.",
            "meaning_en": "私たちは、試す。"
          },
          {
            "example_text": "私たちは彼を私たちのヒーローだと考えている。",
            "furigana": "私たちは彼を私たちのひいろうだと考えている。",
            "meaning_vi": "Chúng tôi tin rằng ông ấy là người hùng của chúng tôi.",
            "meaning_en": "私たちは彼を私たちのヒーローだと考えている。"
          },
          {
            "example_text": "私たちは平和を待ち望んでいた。",
            "furigana": "私たちは平和を待ち望んでいた。",
            "meaning_vi": "Chúng tôi đã kỳ vọng vào một nền hòa bình.",
            "meaning_en": "私たちは平和を待ち望んでいた。"
          },
          {
            "example_text": "私たちはリンゴを食べた。",
            "furigana": "私たちはりんごを食べた。",
            "meaning_vi": "Chúng tôi đã ăn táo.",
            "meaning_en": "私たちはリンゴを食べた。"
          },
          {
            "example_text": "私たちは跪いて祈った。",
            "furigana": "私たちは跪いて祈った。",
            "meaning_vi": "Chúng tôi quỳ xuống cầu nguyện.",
            "meaning_en": "私たちは跪いて祈った。"
          },
          {
            "example_text": "私たちは、岐阜に行った。",
            "furigana": "私たちは、岐阜に行った。",
            "meaning_vi": "Chúng tôi đã đến Gifu.",
            "meaning_en": "私たちは、岐阜に行った。"
          },
          {
            "example_text": "私たちは夜ニューヨークに着いた。",
            "furigana": "私たちは夜にゅうようくに着いた。",
            "meaning_vi": "Tối nay chúng ta sẽ đến New York.",
            "meaning_en": "私たちは夜ニューヨークに着いた。"
          },
          {
            "example_text": "私たちは３—０で負けた。",
            "furigana": "私たちは３—０で負けた。",
            "meaning_vi": "Chúng tôi đã thua với tỷ số 3-0.",
            "meaning_en": "私たちは３—０で負けた。"
          }
        ]
      },
      {
        "furigana": "あなた",
        "vocab": "あなた",
        "meaning_vi": "Anh/chị, ông/bà, bạn (ngôi thứ 2 số ít)",
        "lesson_number": 1,
        "word_type": "",
        "level": "N4",
        "meaning_en": "Siblings, grandparents, friends (the second person)",
        "examples": [
          {
            "example_text": "貴方は、医者です。",
            "furigana": "貴方は、医者です。",
            "meaning_vi": "Anh là bác sĩ sao?",
            "meaning_en": "貴方は、医者です。"
          },
          {
            "example_text": "貴方は、人間です。",
            "furigana": "貴方は、人間です。",
            "meaning_vi": "Bạn là con người.",
            "meaning_en": "貴方は、人間です。"
          },
          {
            "example_text": "元気です、貴方は？",
            "furigana": "元気です、貴方は？",
            "meaning_vi": "Tôi khỏe, bạn thì sao?",
            "meaning_en": "元気です、貴方は？"
          },
          {
            "example_text": "貴方は、筑紫川に行く。",
            "furigana": "貴方は、筑紫川に行く。",
            "meaning_vi": "Bạn đi đến sông Chikushi nhé.",
            "meaning_en": "貴方は、筑紫川に行く。"
          },
          {
            "example_text": "貴方は、川口が好きです。",
            "furigana": "貴方は、川口が好きです。",
            "meaning_vi": "Bạn thích Kawaguchi.",
            "meaning_en": "貴方は、川口が好きです。"
          },
          {
            "example_text": "貴方のことが大好き。",
            "furigana": "貴方のことが大好き。",
            "meaning_vi": "Anh thích em.",
            "meaning_en": "貴方のことが大好き。"
          },
          {
            "example_text": "貴方は顔色が悪い。",
            "furigana": "貴方は顔色が悪い。",
            "meaning_vi": "Bạn trông có vẻ bị ốm .",
            "meaning_en": "貴方は顔色が悪い。"
          },
          {
            "example_text": "私は、貴方が好きです。",
            "furigana": "私は、貴方が好きです。",
            "meaning_vi": "Tớ thích cậu .",
            "meaning_en": "私は、貴方が好きです。"
          },
          {
            "example_text": "私は貴方と苦楽を共にしよう。",
            "furigana": "私は貴方と苦楽を共にしよう。",
            "meaning_vi": "Tôi sẽ cùng bạn chia ngọt sẻ bùi.",
            "meaning_en": "私は貴方と苦楽を共にしよう。"
          },
          {
            "example_text": "貴方には子供がいますか？",
            "furigana": "貴方には子供がいますか？",
            "meaning_vi": "Bạn có con không?",
            "meaning_en": "貴方には子供がいますか？"
          }
        ]
      },
      {
        "furigana": "あのひと",
        "vocab": "あの人",
        "meaning_vi": "Người kia",
        "lesson_number": 1,
        "word_type": "",
        "level": "N4",
        "meaning_en": "The other",
        "examples": [
          {
            "example_text": "あの人は選手です。",
            "furigana": "あの人は選手です。",
            "meaning_vi": "Anh ta là vận động viên thể thao.",
            "meaning_en": "あの人は選手です。"
          },
          {
            "example_text": "ある人の食べ物が別の人には毒。",
            "furigana": "ある人の食べ物が別の人には毒。",
            "meaning_vi": "Cái sướng cho người này là cái khổ cho người khác.",
            "meaning_en": "ある人の食べ物が別の人には毒。"
          },
          {
            "example_text": "この人がジョンで、あの人は兄さんだ。",
            "furigana": "この人がじょんで、あの人は兄さんだ。",
            "meaning_vi": "Người này là John, đó là anh trai tôi.",
            "meaning_en": "この人がジョンで、あの人は兄さんだ。"
          },
          {
            "example_text": "あの人は仏のような人だ。",
            "furigana": "あの人は仏のような人だ。",
            "meaning_vi": "Người kia là một người có tấm lòng như phật.",
            "meaning_en": "あの人は仏のような人だ。"
          },
          {
            "example_text": "あの人の歌は玄人はだしです。",
            "furigana": "あの人の歌は玄人はだしです。",
            "meaning_vi": "Ca khúc của anh ấy vượt qua cả những người chuyên nghiệp",
            "meaning_en": "あの人の歌は玄人はだしです。"
          },
          {
            "example_text": "人間の価値は、その人の人柄に在るのであって、その人の財産にあるのではない。",
            "furigana": "人間の価値は、その人の人柄に在るのであって、その人の財産にあるのではない。",
            "meaning_vi": "Giá trị của con người tồn tại ở nhân cách của người đó, chứ không phải ở tài sản của người đó.",
            "meaning_en": "人間の価値は、その人の人柄に在るのであって、その人の財産にあるのではない。"
          },
          {
            "example_text": "あなたって人は、なんていう人なの。",
            "furigana": "あなたって人は、なんていう人なの。",
            "meaning_vi": "Cậu là một người cừ thật đấy.",
            "meaning_en": "あなたって人は、なんていう人なの。"
          },
          {
            "example_text": "あの二人できてるの？",
            "furigana": "あの二人できてるの？",
            "meaning_vi": "Hai người này có thể tiến tới không?",
            "meaning_en": "あの二人できてるの？"
          },
          {
            "example_text": "あの男の人は赤帽です。",
            "furigana": "あの男の人は赤帽です。",
            "meaning_vi": "Người đàn ông ấy là người khuân vác hành lý.",
            "meaning_en": "あの男の人は赤帽です。"
          },
          {
            "example_text": "あの人は先週ここにいた人です。",
            "furigana": "あの人は先週ここにいた人です。",
            "meaning_vi": "Người đó đã ở đây tuần trước.",
            "meaning_en": "あの人は先週ここにいた人です。"
          },
          {
            "example_text": "彼は長身の人であった。",
            "furigana": "彼は長身の人であった。",
            "meaning_vi": "Anh ấy là một người cao to.",
            "meaning_en": "彼は長身の人であった。"
          }
        ]
      },
      {
        "furigana": "あのかた",
        "vocab": "あの方",
        "meaning_vi": "Vị này Lịch sự tương đương với あのひと",
        "lesson_number": 1,
        "word_type": "",
        "level": "N4",
        "meaning_en": "This person is polite equivalent to あのひと",
        "examples": [
          {
            "example_text": "あの方にくれぐれもよろしく。",
            "furigana": "あの方にくれぐれもよろしく。",
            "meaning_vi": "Mong muốn chân thành với người đó.",
            "meaning_en": "あの方にくれぐれもよろしく。"
          },
          {
            "example_text": "駅はホテルの西の方にある。",
            "furigana": "駅はほてるの西の方にある。",
            "meaning_vi": "Nhà ga ở phía Tây của khách sạn.",
            "meaning_en": "駅はホテルの西の方にある。"
          },
          {
            "example_text": "駅はホテルの西の方にある。",
            "furigana": "駅はほてるの西の方にある。",
            "meaning_vi": "Nhà ga nằm ở phía tây của khách sạn.",
            "meaning_en": "駅はホテルの西の方にある。"
          },
          {
            "example_text": "あの方をご存知ですか？",
            "furigana": "あの方をご存知ですか？",
            "meaning_vi": "Bạn có biết người kia không?",
            "meaning_en": "あの方をご存知ですか？"
          },
          {
            "example_text": "夕方の便はありますか。",
            "furigana": "夕方の便はありますか。",
            "meaning_vi": "Có chuyến bay nào lúc chiều tối không?",
            "meaning_en": "夕方の便はありますか。"
          },
          {
            "example_text": "彼にああいう口の効き方をするな。",
            "furigana": "彼にああいう口の効き方をするな。",
            "meaning_vi": "Không được nói kiểu đó với anh ấy",
            "meaning_en": "彼にああいう口の効き方をするな。"
          },
          {
            "example_text": "彼はその問題をあの方法で解けなかったので別の方法を試みた。",
            "furigana": "彼はその問題をあの方法で解けなかったので別の方法を試みた。",
            "meaning_vi": "Anh ấy bằng cách đó đã không giải quyết được vấn đề này vì vậy đã thử dùng phương pháp khác.",
            "meaning_en": "彼はその問題をあの方法で解けなかったので別の方法を試みた。"
          },
          {
            "example_text": "丘の上の方に城があります。",
            "furigana": "丘の上の方に城があります。",
            "meaning_vi": "Có một lâu đài ở phía trên đỉnh đồi",
            "meaning_en": "丘の上の方に城があります。"
          },
          {
            "example_text": "その島は日本の西方にある。",
            "furigana": "その島は日本の西方にある。",
            "meaning_vi": "Hòn đảo đó nằm ở phía tây Nhật Bản.",
            "meaning_en": "その島は日本の西方にある。"
          },
          {
            "example_text": "彼はグロの考 え 方がある最初の人だ。",
            "furigana": "彼はぐろの考 え 方がある最初の人だ。",
            "meaning_vi": "Anh ấy là người đầu tiên có cách suy nghĩ kì lạ.",
            "meaning_en": "彼はグロの考 え 方がある最初の人だ。"
          },
          {
            "example_text": "各人各様の物事のやり方がある。",
            "furigana": "各人各様の物事のやり方がある。",
            "meaning_vi": "Mỗi người đều có cách làm của riêng mình.",
            "meaning_en": "各人各様の物事のやり方がある。"
          }
        ]
      }
  ];