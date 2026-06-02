const quizQuestions = [
    {
        id: 1,
        text: "文中句子“意其邻人之子”中，“意”字的正确含义是？",
        py: "wén zhāng zhōng jù zǐ yì qí lín rén zhī zǐ zhōng yì zì de zhèng què hán yì shì",
        en: "What is the meaning of 'yì' in the sentence 'yì qí lín rén zhī zǐ'?",
        options: [
            {
                text: "心意、心愿",
                py: "xīn yì xīn yuàn",
                en: "A wish or plan.",
                correct: false,
                explanation: "错误。这是名词含义，在这里当作动作（动词）来用，所以讲不通。",
                explanationPy: "cuò wù zhè shì míng cí hán yì zài zhè lǐ dàng zuò dòng zuò dòng cí lái yòng suǒ yǐ jiǎng bù tōng",
                explanationEn: "Incorrect. This is a noun meaning. It does not work here because we need a action verb."
            },
            {
                text: "猜疑、怀疑、主观断定",
                py: "cāi yí huái yí zhǔ guān duàn dìng",
                en: "To suspect or guess without proof.",
                correct: true,
                explanation: "正确！“意其邻人之子”就是指在没有任何证据的情况下，心里无理地怀疑邻居的小孩。",
                explanationPy: "zhèng què yì qí lín rén zhī zǐ zhǐ de jiù zài méi yǒu rèn hé zhèng jù de qíng kuàng xià xīn lǐ wú lǐ de huái yí lín jū de xiǎo hái",
                explanationEn: "Correct! It means to suspect or believe someone did something bad without any real proof."
            },
            {
                text: "意思、词语的概念",
                py: "yì si cí yǔ de gài niàn",
                en: "The meaning of a word.",
                correct: false,
                explanation: "错误。这属于现代汉语的词语联想，脱离了这篇古文的实际意思。",
                explanationPy: "cuò wù zhè shǔ yú xiàn dài hàn yǔ de shuāng yīn jié cí huì lián xiǎng tuō lí le zhè piān gǔ wén de shí jì yì si",
                explanationEn: "Incorrect. This is a modern vocabulary meaning, which does not fit this classical story at all."
            },
            {
                text: "意图、暗中的计划",
                py: "yì tú àn zhōng de jì huà",
                en: "A secret plan or aim.",
                correct: false,
                explanation: "错误。这个词的意思太复杂了，不符合丢了东西后着急的单纯心理。",
                explanationPy: "cuò wù zhè gè cí de yì si tài fù zá le bù fú hé diū le dōng xī hòu zháo jí de chān cuì xīn lǐ",
                explanationEn: "Incorrect. This meaning is too complex. It does not match the simple worry of a person losing things."
            }
        ]
    },
    {
        id: 2,
        text: "关于“视其行步，窃斧也；颜色，窃斧也”中“颜色”的词义分析，正确的是？",
        py: "guān yú shì qí xíng bù qiè fǔ yě yán sè qiè fǔ yě zhōng yán sè de cí yì fēn xī zhèng què de shì",
        en: "What does the word 'yán sè' mean in this classical story?",
        options: [
            {
                text: "色彩、红黄蓝等各种五颜六色",
                py: "sè cǎi hóng huáng lán děng gè zhǒng wǔ yán liù sè",
                en: "Colors, like red, yellow, or blue.",
                correct: false,
                explanation: "错误。这是现代生活中的常用意思，但在古汉语中，“颜色”的意思完全不一样。",
                explanationPy: "cuò wù zhè shì xiàn dài shēng huó zhōng de cháng yòng yì si dàn zài gǔ hàn yǔ zhōng yán sè de yì si wán quán bù yī yàng",
                explanationEn: "Incorrect. This is the modern meaning. In old Chinese, 'yan se' means something completely different."
            },
            {
                text: "面部表情、脸上的神色气色",
                py: "miàn bù biǎo qíng liǎn shàng de shén sè qì sè",
                en: "Facial expressions or the look on one's face.",
                correct: true,
                explanation: "正确！在古汉语里，“颜”是指脸面，“色”是指气色，“颜色”连起来特别指一个人的面部表情。",
                explanationPy: "zhèng què zài gǔ汉语 lǐ yán shì zhǐ liǎn miàn sè shì zhǐ qì sè yán sè lián qǐ lái tè bié zhǐ yī gè rén de miàn bù biǎo qíng",
                explanationEn: "Correct! In old Chinese, 'yan' means face and 'se' means look. Together, they mean facial expressions."
            },
            {
                text: "给别人颜色看看，指态度傲慢",
                py: "gěi bié rén yán sè kàn kàn zhǐ tài dù ào màn",
                en: "To show off or be rude to someone.",
                correct: false,
                explanation: "错误。这是近代才出现的现代口语，完全不符合古代列子的文风。",
                explanationPy: "cuò wù zhè shì jìn dài cái chū xiàn de xiàn dài kǒu yǔ wán quán bù fú hé gǔ dài liè zǐ de wén fēng",
                explanationEn: "Incorrect. This is a modern informal idiom. It does not fit the ancient style of the writer Liezi."
            },
            {
                text: "颜料、用来画画和涂色的工具材料",
                py: "yán liào yòng lái huà huà hé tú sè de gōng jù cái liào",
                en: "Paints or tools used for drawing.",
                correct: false,
                explanation: "错误。这个意思完全离开了盯着邻居小孩一举一动的具体故事画面。",
                explanationPy: "cuò wù zhè gè yì si wán quán lí kāi le dīng zhe lín jū xiǎo hái yī jǔ yī dòng de jù tǐ gù shì huà miàn",
                explanationEn: "Incorrect. This meaning has nothing to do with the story of watching the neighbor kid's movements."
            }
        ]
    },
    {
        id: 3,
        text: "文中句子“无为而不窃斧者也”采用了双重否定，这句话的意思是？",
        py: "wén zhāng zhōng jù zǐ wú wéi ér bù qiè fǔ zhě yě cǎi yòng le shuāng chóng fǒu dìng zhè jù huà de yì si shì",
        en: "The sentence uses a double negative. What does it actually mean?",
        options: [
            {
                text: "他什么事都没做，所以不可能偷斧头",
                py: "tā shén me shì dōu méi zuò suǒ yǐ bù kě néng tōu fǔ tóu",
                en: "He did nothing, so he could not steal the axe.",
                correct: false,
                explanation: "错误。理解完全相反了，两个否定词放在一起在这里表示强烈的肯定。",
                explanationPy: "cuò wù lǐ jiě wán quán xiāng fǎn le liǎng gè fǒu dìng cí fàng zài yī qǐ zài zhè lǐ biǎo shì qiáng liè de kěn dìng",
                explanationEn: "Incorrect. The meaning is completely opposite. Two negative words together here mean a strong 'yes'."
            },
            {
                text: "全身上下一举一动、一神一态没有一处不像是一个偷斧头的人",
                py: "quán shēn xià xià yī jǔ yī dòng yī shén yī tài méi yǒu yī chù bú xiàng shì yī gè tōu fǔ tóu de rén",
                en: "Every single movement and look made him look exactly like a thief.",
                correct: true,
                explanation: "正确！“无为而不”就是没有任何表现不是。这句话生动地写出了主人心里对邻居小孩有多么大的偏见。",
                explanationPy: "zhèng què wú wéi ér bù jiù shì méi yǒu rèn hé biǎo xiàn bú shì zhè jù huà shēng dòng de xiě chū le zhǔ rén xīn lǐ duì lín jū xiǎo hái yǒu duō me dà de piān jiàn",
                explanationEn: "Correct! It means everything he did matched a thief. It shows how strong the owner's bias was against the kid."
            },
            {
                text: "他偷了斧头之后，什么证据都没有留下",
                py: "tā tōu le fǔ tóu zhī hòu shén me zhèng jù dōu méi yǒu liú xià",
                en: "After stealing the axe, he left no proof behind.",
                correct: false,
                explanation: "错误。故事的核心是压根就没有发生偷窃，小孩子是完全被冤枉的。",
                explanationPy: "cuò wù gù shì de hé xīn shì yā gēn jiù méi yǒu fā shēng tōu qiè xiǎo hái zǐ shì wán quán bèi yuān wǎng de",
                explanationEn: "Incorrect. The main point of the story is that no stealing happened at all. The kid was wrongly blamed."
            },
            {
                text: "如果他没有偷斧头，他就不会做出这些伪装动作",
                py: "rú guǒ tā méi yǒu tōu fǔ tóu tā jiù bú huì zuò chū zhè xiē wěi zhuāng dòng zuò",
                en: "If he did not steal it, he would not act this way.",
                correct: false,
                explanation: "错误。小孩每天都在正常生活，所谓的“假动作”全是丢斧头的人自己乱想出来的幻觉。",
                explanationPy: "cuò wù xiǎo hái měi tiān dōu zài zhèng cháng shēng huó suǒ wèi de jiǎ dòng zuò quán shì diū fǔ tóu de rén zì jǐ luàn xiǎng chū lái de huàn jué",
                explanationEn: "Incorrect. The kid was just acting normally. The 'fake acts' were entirely the owner's own wild imagination."
            }
        ]
    },
    {
        id: 4,
        text: "后来，主人对邻居小孩的看法发生了极大的逆转，这种改变发生是因为？",
        py: "hòu lái zhǔ rén duì lín jū xiǎo hái de kàn fǎ fā shēng le jí dà de nì zhuǎn zhè zhǒng gǎi biàn fā shēng shì yīn wèi",
        en: "Later, the owner completely changed his mind about the boy. Why?",
        options: [
            {
                text: "小孩顶不住压力，主动把斧头还给了他",
                py: "xiǎo hái dǐng bú zhù yā lì zhǔ dòng bǎ fǔ tóu huán gěi le tā",
                en: "The boy felt too much pressure and gave the axe back.",
                correct: false,
                explanation: "错误。小孩子是清白的，根本没有拿过斧头，怎么可能还斧头呢。",
                explanationPy: "cuò wù xiǎo hái zǐ shì qīng bái de gēn bēn méi yǒu ná guò fǔ tóu zěn me kě néng huán fǔ tóu ne",
                explanationEn: "Incorrect. The kid was innocent and never took the axe, so he could not return it."
            },
            {
                text: "邻居亲自上门赔礼道歉，并请求他的原谅",
                py: "lín jū qīn zì shàng mén péi lǐ dào qiàn bìng qǐng qiú tā de yuán liàng",
                en: "The neighbor came over to say sorry and ask for his forgiveness.",
                correct: false,
                explanation: "错误。邻居全家人从头到尾都不知道主人在暗地里怀疑他们，一切都是主人自己在胡思乱想。",
                explanationPy: "cuò wù lín jū quán jiā rén cóng tóu dào wěi dōu bù zhī dào zhǔ rén zài àn dì lǐ huái yí tā men yī qiè dōu shì zhǔ rén zì jǐ zài hú sī luàn xiǎng",
                explanationEn: "Incorrect. The neighbors never knew they were being suspected. It was all inside the owner's own head."
            },
            {
                text: "主人在挖自己家的水沟时，意外找到了那把丢失的斧头",
                py: "zhǔ rén zài wā zì jiā de shuǐ gōu shí yì wài zhǎo dào le nà bǎ diū shī de fǔ tóu",
                en: "The owner found the missing axe by chance while digging his own ditch.",
                correct: true,
                explanation: "正确！自己找到了斧头，这就是事实证据。证据一出来，他心里的偏见一瞬间就全部消失了。",
                explanationPy: "zhèng què zì jǐ zhǎo dào le fǔ tóu zhè jiù ... shí shí zhèng jù zhèng jù yī chū lái tā xīn lǐ de piān jiàn yī shùn jiān jiù quán bù xiāo shī le",
                explanationEn: "Correct! Finding the axe by himself was the real proof. Once the proof appeared, his bias vanished instantly."
            },
            {
                text: "真正的强盗被抓到了，证明了邻居小孩是清白的",
                py: "zhēn zhèng de qiáng dào bèi zhuā dào le zhèng míng le lín jū xiǎo hái shì qīng bái de",
                en: "The real thief was caught, proving the neighbor boy was innocent.",
                correct: false,
                explanation: "错误。斧头是自己掉进水沟里的，这个故事里从头到尾都没有任何小偷。",
                explanationPy: "cuò wù fǔ tóu shì zì jǐ diào jìn shuǐ gōu lǐ de zhè gè gù shì lǐ cóng tóu dào wěi dōu méi yǒu rèn hé xiǎo tōu",
                explanationEn: "Incorrect. The axe just fell into the ditch by itself. There was no thief in this story from beginning to end."
            }
        ]
    },
    {
        id: 5,
        text: "下列哪一个汉语成语，最适合用来形容这篇故事中丢斧头的人？",
        py: "xià liè nǎ yī gè hàn yǔ chéng yǔ zuì shì hé yòng lái xíng róng zhè piān gù shì zhōng diū fǔ tóu de rén",
        en: "Which Chinese idiom best describes the mind of the owner in this story?",
        options: [
            {
                text: "守株待兔",
                py: "shǒu zhū dài tù",
                en: "To stay by a tree stump waiting for a rabbit.",
                correct: false,
                explanation: "错误。这形容死守狭隘的经验、不知道变通，跟心里无端猜忌、怀疑别人完全没有关系。",
                explanationPy: "cuò wù zhè xíng róng sǐ shǒu xiá ài de jīng yàn bù zhī biàn tōng gēn xīn lǐ wú duān cāi jì huái yí bié rén wán quán méi yǒu guān xì",
                explanationEn: "Incorrect. This means waiting foolishly for a lucky chance based on old experience. It has nothing to do with suspecting others."
            },
            {
                text: "疑心生暗鬼",
                py: "yí xīn shēng àn guǐ",
                en: "A suspicious mind creates imaginary ghosts / Too much worry makes you see things.",
                correct: true,
                explanation: "正确！成语完美对齐故事：因为在没有任何证据（如：视其行步、颜色、言语）的情况下先入为主地怀疑别人，看周围的一切就都会觉得不对劲、有鬼。",
                explanationPy: "zhèng què chéng yǔ wán měi duì qí gù shì yīn wèi zài méi yǒu rèn hé zhèng jù rú shì qí xíng bù yán sè yán yǔ de qíng kuàng xià xiān rù wéi zhǔ de huái yí bié rén kàn zhōu wéi de yī qiè jiù dōu huì jué dé bú duì jìn yǒu guǐ",
                explanationEn: "Correct! This idiom matches the story perfectly: when you suspect someone without proof (like watching his walk, face, or words), your mind will make everything look wrong or suspicious."
            },
            {
                text: "饮水思源",
                py: "yǐn shuǐ sī yuán",
                en: "When you drink water, think about its source.",
                correct: false,
                explanation: "错误。这教导人们做人要懂得感恩、不能忘本，跟丢斧头、怀疑邻居的逻辑完全不沾边。",
                explanationPy: "cuò wù zhè jiào dǎo rén mǐn zuò rén yào dǒng dé gǎn ēn bù néng wàng běn gēn diū fǔ tóu huái yí lín jū de luó jí wán quán bù zhān biān",
                explanationEn: "Incorrect. This teaches people to be thankful and remember who helped them. It has zero relation to this story."
            },
            {
                text: "狐假虎威",
                py: "hú jiǎ hǔ wēi",
                en: "The fox uses the tiger's power to scare others.",
                correct: false,
                explanation: "错误。这形容靠着别人的权势来欺负弱小的狡猾坏人，是一个完全不相干的干扰项。",
                explanationPy: "cuò wù zhè xíng róng kào zhe bié rén de quán shì lái qī fù ruò xiǎo de jiǎo huá huài rén shì yī gè wán quán bù xiāng gān de gān rǎo xiàng",
                explanationEn: "Incorrect. This means using a powerful person's status to scare or bully others. It is completely irrelevant here."
            }
        ]
    }
];
