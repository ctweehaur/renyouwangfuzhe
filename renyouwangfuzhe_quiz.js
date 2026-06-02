const quizQuestions = [
    {
        id: 1,
        text: "文中句子“意其邻人之子”中，“意”字的正确含义是？",
        py: "wén zhāng zhōng jù zǐ yì qí lín rén zhī zǐ zhōng yì zì de zhèng què hán yì shì",
        en: "What is the correct meaning of 'yì' in the phrase 'yì qí lín rén zhī zǐ'?",
        options: [
            {
                text: "心意、心愿",
                py: "xīn yì xīn yuàn",
                en: "Intention or wish.",
                correct: false,
                explanation: "错误。这是名词含义，在句中充当谓语动词时讲不通。",
                explanationPy: "cuò wù zhè shì míng cí hán yì zài jù zhōng chōng dāng wèi yǔ dòng cí shí jiǎng bù tōng",
                explanationEn: "Incorrect. This is a noun definition, which fails to function as the main predicate verb in this context."
            },
            {
                text: "猜疑、怀疑、主观断定",
                py: "cāi yí huái yí zhǔ guān duàn dìng",
                en: "To suspect or assume subjectively.",
                correct: true,
                explanation: "正确！“意其邻人之子”指的就是在没有任何证据的情况下，主观无理地怀疑邻居的小孩。",
                explanationPy: "zhèng què yì qí lín rén zhī zǐ zhǐ de jiù zài méi yǒu rèn hé zhèng jù de qíng kuàng xià zhǔ guān wú lǐ de huái yí lín jū de xiǎo hái",
                explanationEn: "Correct! It functions as a verb meaning to suspect someone without any baseline evidence."
            },
            {
                text: "意思、词语的概念",
                py: "yì si cí yǔ de gài niàn",
                en: "Meaning or linguistic concept.",
                correct: false,
                explanation: "错误。这属于现代汉语的双音节词汇联想，脱离了古文的实际语境。",
                explanationPy: "cuò wù zhè shǔ yú xiàn dài hàn yǔ de shuāng yīn jié cí huì lián xiǎng tuō lí le gǔ wén de shí jì yǔ jìng",
                explanationEn: "Incorrect. This stems from modern vocabulary association, completely disregarding classical grammar."
            },
            {
                text: "意图、暗中的计划",
                py: "yì tú àn zhōng de jì huà",
                en: "Intent or hidden agenda.",
                correct: false,
                explanation: "错误。词义过于阴暗和复杂，不合故事主人公丢失东西后的单纯心理状态。",
                explanationPy: "cuò wù cí yì guò yú yīn àn hé fù zá bù hé gù shì zhǔ rén gōng diū shī dōng xī hòu de chān cuì xīn lǐ zhuàng tài",
                explanationEn: "Incorrect. The meaning is overly complex, failing to match the spontaneous panic of losing property."
            }
        ]
    },
    {
        id: 2,
        text: "关于“视其行步，窃斧也；颜色，窃斧也”中“颜色”的词义分析，正确的是？",
        py: "guān yú shì qí xíng bù qiè fǔ yě yán sè qiè fǔ yě zhōng yán sè de cí yì fēn xī zhèng què de shì",
        en: "Which analysis correctly defines the word 'yán sè' in this classical text?",
        options: [
            {
                text: "色彩、红黄蓝等各种五颜六色",
                py: "sè cǎi hóng huáng lán děng gè zhǒng wǔ yán liù sè",
                en: "Colors, such as red, yellow, or blue.",
                correct: false,
                explanation: "错误。这是现代汉语的常用核心定义，在古代汉语中，“颜色”是一个典型的古今异义词。",
                explanationPy: "cuò wù zhè shì xiàn dài hàn yǔ de cháng yòng hé xīn dìng yì zài gǔ dài hàn yǔ zhōng yán sè shì yī gè diǎn xíng de gǔ jīn yì yì cí",
                explanationEn: "Incorrect. This is the modern definition; in classical Chinese, 'yan se' is a classic ancient-modern shift word."
            },
            {
                text: "面部表情、脸上的神色气色",
                py: "miàn bù biǎo qíng liǎn shàng de shén sè qì sè",
                en: "Facial expression or demeanor.",
                correct: true,
                explanation: "正确！古代汉语里，“颜”是脸面，“色”是气色。“颜色”连用特指一个人的面部表情与神态。",
                explanationPy: "zhèng què gǔ dài hàn yǔ lǐ yán shì liǎn miàn sè shì qì sè yán sè lián yòng tè zhǐ yī gè rén de miàn bù biǎo qíng yǔ shén tài",
                explanationEn: "Correct! In classical lexicon, 'yan' is face and 'se' is color, combined together to mean facial expression."
            },
            {
                text: "给别人颜色看看，指态度傲慢",
                py: "gěi bié rén yán sè kàn kàn zhǐ tài dù ào màn",
                en: "To teach someone a lesson / arrogance.",
                correct: false,
                explanation: "错误。这是近代汉语衍生出的熟语口语，完全不符合先秦列子的文风法度。",
                explanationPy: "cuò wù zhè shì jìn dài hàn yǔ yǎn shēng chū de shú yǔ kǒu yǔ wán quán bù fú hé xiān qín liè zǐ de wén fēng fǎ dù",
                explanationEn: "Incorrect. This is a recent colloquial idiom, possessing zero baseline compatibility with pre-Qin styles."
            },
            {
                text: "颜料、用来画画和涂色的工具材料",
                py: "yán liào yòng lái huà huà hé tú sè de gōng jù cái liào",
                en: "Paints or pigments used for drawing.",
                correct: false,
                explanation: "错误。词义完全脱离了观察邻居小孩一举一动的基本文本逻辑。",
                explanationPy: "cuò wù cí yì wán quán tuō lí le guān chá lín jū xiǎo hái yī jǔ yī dòng de jī běn wén běn luó jí",
                explanationEn: "Incorrect. This is wholly disconnected from the premise of observing a child's reactive movements."
            }
        ]
    },
    {
        id: 3,
        text: "文中句子“无为而不窃斧者也”采用了双重否定，这句话的意思是？",
        py: "wén zhāng zhōng jù zǐ wú wéi ér bù qiè fǔ zhě yě cǎi yòng le shuāng chóng fǒu dìng zhè jù huà de yì si shì",
        en: "The sentence uses a double negative structure. What does it actually mean?",
        options: [
            {
                text: "他什么事都没做，所以不可能偷斧头",
                py: "tā shén me shì dōu méi zuò suǒ yǐ bù kě néng tōu fǔ tóu",
                en: "He did nothing, so it was impossible for him to steal the axe.",
                correct: false,
                explanation: "错误。理解完全反了，双重否定在这里表示极度的肯定强硬。",
                explanationPy: "cuò wù lǐ jiě wán quán fǎn le shuāng chóng fǒu dìng zài zhè lǐ biǎo shì jí dù de kěn dìng qiáng yìng",
                explanationEn: "Incorrect. The interpretation is fully inverted; double negatives function as intensive positive statements here."
            },
            {
                text: "全身上下一举一动、一神一态没有一处不像是一个偷斧头的人",
                py: "quán shēn xià xià yī jǔ yī dòng yī shén yī tài méi yǒu yī chù bú xiàng shì yī gè tōu fǔ tóu de rén",
                en: "Every single gesture and expression made him look exactly like an axe-thief.",
                correct: true,
                explanation: "正确！“无为而不”意思是没有任何表现不是，极其有力地渲染了主人公内心对邻居小孩坚不可摧的成见偏见。",
                explanationPy: "zhèng què wú wéi ér bù yì si shì méi yǒu rèn hé biǎo xiàn bú shì jí qǐ yǒu lì de xuàn rǎn le zhǔ rén gōng nìn xīn duì lín jū xiǎo hái jiān bù kě cuī de chéng jiàn piān jiàn",
                explanationEn: "Correct! It functions as an intensive affirmative meaning 'every single detail confirmed he was the thief'."
            },
            {
                text: "他偷了斧头之后，什么证据都没有留下",
                py: "tā tōu le fǔ tóu zhī hòu shén me zhèng jù dōu méi yǒu liú xià",
                en: "After stealing the axe, he left absolutely no evidence behind.",
                correct: false,
                explanation: "错误。故事的核心是压根就没发生过偷窃，更谈不上留下证据。",
                explanationPy: "cuò wù gù shì de hé xīn shì yā gēn jiù méi fā shēng guò tōu qiè gèng tán bú shàng liú xià zhèng jù",
                explanationEn: "Incorrect. The baseline story is that no theft occurred, rendering hidden trace evidence irrelevant."
            },
            {
                text: "如果他没有偷斧头，他就不会做出这些伪装动作",
                py: "rú guǒ tā méi yǒu tōu fǔ tóu tā jiù bú huì zuò chū zhè xiē wěi zhuāng dòng zuò",
                en: "If he hadn't stolen it, he wouldn't have disguised his actions.",
                correct: false,
                explanation: "错误。小孩并没有做任何伪装，纯粹是主人公自己疑心生暗鬼产生的幻觉。",
                explanationPy: "cuò wù xiǎo hái bìng méi yǒu zuò rèn hé wěi zhuāng chún cuì shì zhǔ rén gōng zì jǐ yí xīn shēng àn guǐ chǎn shēng de huàn jué",
                explanationEn: "Incorrect. The boy was acting normally; the 'disguise' was a hallucination built out of the owner's paranoia."
            }
        ]
    },
    {
        id: 4,
        text: "后来，主人公对邻居小孩的看法发生了天翻地覆的逆转，这种逆转发生是因为？",
        py: "hòu lái zhǔ rén gōng duì lín jū xiǎo hái de kàn fǎ fā shēng le tiān fān dì fù de nì zhuǎn zhè zhǒng nì zhuǎn fā shēng shì yīn wèi",
        en: "Later, the owner's evaluation of the boy completely inverted. What triggered this dramatic change?",
        options: [
            {
                text: "小孩顶不住压力，主动把斧头还给了他",
                py: "xiǎo hái dǐng bú zhù yā lì zhǔ dòng bǎ fǔ tóu huán gěi le tā",
                en: "The boy gave in to pressure and voluntarily returned the axe.",
                correct: false,
                explanation: "错误。小孩子是清白的，根本不存在还斧头的动作路径。",
                explanationPy: "cuò wù xiǎo hái shì qīng bái de gēn bēn bù cún zài huán fǔ tóu de dòng zuò lù jìng",
                explanationEn: "Incorrect. The boy was completely innocent, meaning no physical returning of an axe ever took place."
            },
            {
                text: "邻居亲自上门赔礼道歉，并原谅了他的无礼怀疑",
                py: "lín jū qīn zì shàng mén péi lǐ dào qiàn bìng yuán liàng le tā de wú lǐ huái yí",
                en: "The neighbor apologized and forgave his groundless suspicion.",
                correct: false,
                explanation: "错误。邻居全家自始至终都不知道主人公在暗中猜疑他们，一切都是内心戏。",
                explanationPy: "cuò wù lín jū quán jiā zì shǐ zhì zhōng dōu bù zhī dào zhǔ rén gōng zài àn zhōng cāi yí tā men yī qiè dōu shì nìn xīn xì",
                explanationEn: "Incorrect. The neighbor family was entirely unaware of the silent suspicion; it was an internal drama."
            },
            {
                text: "主人公在挖掘自家水沟时，自己物理找到了那把丢失的斧头",
                py: "zhǔ rén gōng zài wā jué zì jiā shuǐ gōu shí zì jǐ wù lǐ zhǎo dào le nà bǎ diū shī de fǔ tóu",
                en: "The owner dug his own ditch and discovered the lost axe physically himself.",
                correct: true,
                explanation: "正确！“掘其沟而得其斧”是全篇最关键的物理节点，真相大白后他眼中的主观偏见在一瞬间烟消云散。",
                explanationPy: "zhèng què jué qí gōu ér dé qí fǔ shì quán piān zuì guān jiàn de wù lǐ jié diǎn zhēn xiàng dà bái hòu tā yǎn zhōng de zhǔ guān piān jiàn zài yī shùn jiān yān xiāo yún sàn",
                explanationEn: "Correct! The text states 'jué qí gōu ér dé qí fǔ', recovering the true evidence and instantly clearing the bias."
            },
            {
                text: "守卫抓到了真正的盗贼，证明了小孩的清白",
                py: "shǒu wèi zhuā dào le zhēn zhèng de dào zéi zhèng míng le xiǎo hái de qīng bái",
                en: "The palace guards caught the true thief, proving the boy's innocence.",
                correct: false,
                explanation: "错误。斧头是自己掉进水沟里的，并没有任何第三方盗贼的存在。",
                explanationPy: "cuò wù fǔ tóu shì zì jǐ diào jìn shuǐ gōu lǐ de bìng méi yǒu rèn hé dì sān fāng dào zéi de cún zài",
                explanationEn: "Incorrect. The axe fell into the ditch accidentally; there was no active criminal thief involved."
            }
        ]
    },
    {
        id: 5,
        text: "下列哪一个汉语成语，最适合用来形容这篇故事主人公的心态？",
        py: "xià liè nǎ yī gè hàn yǔ chéng yǔ zuì shì hé yòng lái xíng róng zhè piān gù shì zhǔ rén gōng de xīn tài",
        en: "Which idiom best describes the cognitive state of the protagonist in this fable?",
        options: [
            {
                text: "守株待兔",
                py: "shǒu zhū dài tù",
                en: "To guard a tree stump waiting for rabbits.",
                correct: false,
                explanation: "错误。这形容的是死守狭隘经验、不知变通的愚蠢（如韩非子故事），与无端猜忌无关。",
                explanationPy: "cuò wù zhè xíng róng de shì sǐ shǒu xiá ài jīng yàn bù zhī biàn tōng de yú chǔn yú wú duān cāi jì wú guān",
                explanationEn: "Incorrect. This targets rigid dependency on narrow fluke events, which holds zero connection to paranoia."
            },
            {
                text: "疑心生暗鬼",
                py: "yí xīn shēng àn guǐ",
                en: "Paranoia breeds imaginary demons (Paranoid suspicions breed phantom monsters).",
                correct: true,
                explanation: "正确！成语完美对应故事主旨：只要内心产生了主观偏见和无端猜忌，就会捕风捉影，看周围的一切都觉得有鬼、不正常。",
                explanationPy: "zhèng què chéng yǔ wán quán duì yìng gù shì zhǔ zhǐ zhǐ yào nìn xīn chǎn shēng le zhǔ guān piān jiàn hé wú duān cāi jì jiù huì bǔ fēng zhuō yǐng kàn zhōu wéi de yī qiè dōu jué dé yǒu guǐ bú zhèng cháng",
                explanationEn: "Correct! It reinforces the moral: once a subjective suspicion anchors, one distorts reality to feed that phantom ghost."
            },
            {
                text: "饮水思源",
                py: "yǐn shuǐ sī yuán",
                en: "When drinking water, think of its source.",
                correct: false,
                explanation: "错误。这宣扬的是做人要懂得感恩、不忘本，跟丢斧头的逻辑完全不沾边。",
                explanationPy: "cuò wù zhè xuān yáng de shì zuò rén yào dǒng dé gǎn ēn bú wàng běn gēn diū fǔ tóu de luó jí wán quán bù zhān biān",
                explanationEn: "Incorrect. This advocates gratitude and honoring historical heritage, displaying zero relevance here."
            },
            {
                text: "狐假虎威",
                py: "hú jiǎ hǔ wēi",
                en: "The fox borrows the tiger's ferocity.",
                correct: false,
                explanation: "错误。这形容凭借别人的权势来欺压弱小的狡猾行为，属于风马牛不相及的干扰项。",
                explanationPy: "cuò wù zhè xíng róng píng jiè bié rén de quán shì lái qī yā ruò xiǎo de jiǎo huá xíng wéi shǔ yú fēng mǎ niú bù xiāng jí de gān rǎo xiàng",
                explanationEn: "Incorrect. This denotes leveraging an elite's status to terrorize subordinates, carrying zero logical correlation."
            }
        ]
    }
];
