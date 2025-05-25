// Character data for the character cards section

const characters = [
    {
        id: 1,
        name: "乔峰 (萧峰)",
        title: "丐帮帮主",
        image: "pic/Qiao_Feng.png",
        shortDesc: "豪迈侠义的丐帮帮主，精通降龙十八掌，后发现自己契丹人身份，面临身份认同和种族歧视的困境。",
        category: ["main"],
        background: "乔峰从小被汉人收养，长大后凭借一身的武艺和侠义精神成为丐帮帮主。他原以为自己是堂堂正正的汉人，后来得知自己是辽国的萧氏皇族之后，面临着巨大的身份认同危机和各方势力的敌视。",
        personality: "乔峰为人豪迈洒脱，光明磊落，顶天立地。他重情义，对朋友和恩人都格外照顾。他心胸宽广，有着'侠之大者，为国为民'的胸怀。即使在面对误解和敌视时，仍然保持着自己的风骨。",
        skills: ["降龙十八掌", "打狗棒法", "擒龙功"],
        role: "乔峰是《天龙八部》的灵魂人物之一，他的身世之谜和民族身份认同是贯穿全书的重要线索。他的悲剧命运深刻揭示了民族冲突和个人选择的痛苦。",
        relationships: [
            { person: "段誉", connection: "义兄弟，情同手足" },
            { person: "虚竹", connection: "义兄弟，相互扶持" },
            { person: "阿朱", connection: "挚爱，后被自己误杀，终生遗憾" },
            { person: "阿紫", connection: "阿朱之妹，对乔峰痴情，但乔峰对她只有兄长之情" },
            { person: "慕容复", connection: "昔日齐名，被称为'北乔峰，南慕容'，后成为对手" }
        ]
    },
    {
        id: 2,
        name: "段誉",
        title: "大理世子（王子）",
        image: "pic/Duan_Yu.png",
        shortDesc: "大理国的王子，生性温和，不喜武功，却意外习得北冥神功、六脉神剑和凌波微步等盖世武功。",
        category: ["main"],
        background: "段誉是大理镇南王段正淳的儿子，也是大理王朝的继承人。他生性不喜欢武功，喜欢读书舒适的生活。因为逃婚等原因，他冒险闯入江湖，之后阴差阳错地学会了各种高深武功。",
        personality: "段誉为人善良正直，热爱和平，不喜欢打打杀杀。他有着浓厚的书卷气和文人气质，同时也显得有些呆萌。他真诚待人，即使面对困难也保持乐观的态度。",
        skills: ["北冥神功", "六脉神剑", "凌波微步"],
        role: "段誉是《天龙八部》的重要男主角之一，他的经历充满了奇遇和巧合，代表了'无心插柳柳成荫'的命运特色。他的感情线和成长历程是故事的重要组成部分。",
        relationships: [
            { person: "乔峰", connection: "义兄弟，相互尊重" },
            { person: "虚竹", connection: "义兄弟，情谊深厚" },
            { person: "王语嫣", connection: "初见钟情的对象" },
            { person: "木婉清", connection: "重要的感情对象，后发现是同父异母的妹妹" },
            { person: "钟灵", connection: "重要的感情对象，后发现是同父异母的妹妹" },
            { person: "段正淳", connection: "父亲，大理镇南王" }
        ]
    },
    {
        id: 3,
        name: "虚竹",
        title: "少林寺和尚/灵鹫宫主",
        image: "pic/Xuzhu.png",
        shortDesc: "原是少林寺的普通和尚，性格老实木讷，却机缘巧合继承逍遥派与灵鹫宫的武功与地位。",
        category: ["main"],
        background: "虚竹是从小在少林寺长大的普通和尚。他外貌平平，性格老实木讷。后因偶然机会解开了天山童姥设下的珍珑棋局，继承了逍遥派掌门和灵鹫宫主的身份和武功。",
        personality: "虚竹忠厚老实，诚恳善良，没什么心机。他知足常乐，没有太多的野心和欲望。即使在获得巨大成功后，仍然保持本心，不骄不躁。",
        skills: ["天山六阳掌", "天山折梅手", "小无相功", "生死符"],
        role: "虚竹是《天龙八部》的第三位主角，他的经历充满了'被动式逆袭'，从一个无名小卒成为武林顶尖高手，展现了命运的奇妙和'福缘深厚'的主题。",
        relationships: [
            { person: "乔峰", connection: "义兄弟，相互支持" },
            { person: "段誉", connection: "义兄弟，彼此帮助" },
            { person: "梦姑（李清露）", connection: "妻子，西夏公主" },
            { person: "天山童姥", connection: "前任灵鹫宫主，传授武功" },
            { person: "玄慈", connection: "少林寺方丈，后发现是亲生父亲" }
        ]
    },
    {
        id: 4,
        name: "阿朱",
        title: "慕容家侍女",
        image: "pic/A_Zhu.png",
        shortDesc: "慕容家的侍女，擅长易容术，温柔善良，是乔峰的挚爱，两人的爱情故事凄美动人。",
        category: ["female"],
        background: "阿朱是姑苏慕容家的侍女，聪明伶俐，擅长易容术。她在一次事件中结识了乔峰，两人情投意合。后来因为被误会是杀害乔峰养父母和恩师的凶手（实为段正淳），她为了保护生父段正淳并让乔峰摆脱仇恨，选择易容成段正淳的模样，被乔峰误杀。",
        personality: "阿朱温柔善良，善解人意，活泼开朗。她聪明机智，有着过人的胆识和智慧。对乔峰的感情专一而深厚，甚至不惜牺牲自己来保护他所爱的人。",
        skills: ["易容术", "辨香术", "基本武功"],
        role: "阿朱是乔峰生命中最重要的女性角色，她的爱情和悲剧命运是《天龙八部》中最感人的部分之一。她的死对乔峰造成了巨大的打击，也成为推动故事的重要因素。",
        relationships: [
            { person: "乔峰", connection: "挚爱，两人的感情至死不渝" },
            { person: "阿紫", connection: "同父异母的妹妹" },
            { person: "慕容复", connection: "主人，曾经侍奉的对象" },
            { person: "段正淳", connection: "亲生父亲" }
        ]
    },
    {
        id: 5,
        name: "王语嫣",
        title: "曼陀山庄小姐",
        image: "pic/Wang_Yuyan.png",
        shortDesc: "被称为\"神仙姐姐\"的绝色美人，精通天下武学理论却不会武功，是段誉一见钟情的对象。",
        category: ["female"],
        background: "王语嫣是姑苏慕容家族的亲戚，王夫人之女，母亲是李秋水的女儿。从小生活在曼陀山庄，熟读天下武学却不会实战。她最初深爱着表哥慕容复，愿意为他付出一切。",
        personality: "王语嫣美丽聪明，知书达理。她有着令人称奇的记忆力，能记住众多武功的招式和要领。最初她性格较为柔弱，缺乏主见，对慕容复有着盲目的崇拜和爱慕。后逐渐被段誉的真情打动。",
        skills: ["武学理论 (活秘籍)", "没有实战能力"],
        role: "王语嫣是段誉感情线上的核心人物，也是改变多个人物命运的重要女性。她与慕容复、段誉之间复杂的感情关系是《天龙八部》中重要的情感线索之一。新修版结局中，她最终离开了段誉，回到了慕容复身边。",
        relationships: [
            { person: "段誉", connection: "曾痴恋她，后为夫妻（三联版），后分开（新修版）" },
            { person: "慕容复", connection: "表哥，她初恋的对象，最终伴其左右（新修版）" },
            { person: "王夫人（李青萝）", connection: "母亲" },
            { person: "段正淳", connection: "名义上的父亲（实为无崖子与李秋水之外孙女）" }
        ]
    },
    {
        id: 6,
        name: "慕容复",
        title: "姑苏慕容/大燕太子",
        image: "pic/1748014141916-Murong_Fu_Character_Concept_Image_for_Tianlong_Babu_index_0@1024x1024.png",
        shortDesc: "号称\"南慕容\"，外表风度翩翩，内心野心勃勃，一心想要复兴大燕，最终却落得疯癫结局。",
        category: ["antagonist"],
        background: "慕容复是鲜卑燕国皇族的后裔，从小就被灌输复国的理想。他外表英俊潇洒，武功高强，但内心充满野心，为了复国可以不择手段，最终却因为自己的执念而精神失常，在疯癫中继续着他的皇帝梦。",
        personality: "慕容复外表风度翩翩，内心却充满算计和野心。他为人高傲，对复国有着近乎痴狂的执念，为此不惜牺牲一切，包括自己的亲情和爱情，显得薄情寡义。",
        skills: ["斗转星移", "参合指", "慕容剑法"],
        role: "慕容复是《天龙八部》中与乔峰对立的关键人物。他的复国梦想和最终的悲惨结局与乔峰的侠义精神形成了鲜明对比，揭示了执念的危害。他代表了为虚幻目标而迷失自我的悲剧。",
        relationships: [
            { person: "乔峰", connection: "对手，曾被并称为'北乔峰，南慕容'" },
            { person: "王语嫣", connection: "表妹，曾经深爱他，后因其无情而离开（三联版），最终回到他身边照顾他（新修版）" },
            { person: "慕容博", connection: "父亲，复国计划的策划者" },
            { person: "阿碧", connection: "忠心侍女，不离不弃" }
        ]
    },
    {
        id: 7,
        name: "阿紫",
        title: "星宿派弟子",
        image: "https://r2.flowith.net/files/o/1747920159187-Portrait_of_A_Zi_from_Demi_Gods_and_Semi_Devils_index_8@1024x1024.png",
        shortDesc: "阿朱的同父异母妹妹，性格狠毒任性，对乔峰痴心不改，最终却落得抱着乔峰尸体跳崖的悲惨结局。",
        category: ["female", "antagonist"],
        background: "阿紫是星宿派丁春秋的弟子，也是段正淳的女儿，阿朱的妹妹。她从小生活在恶劣的环境中，被丁春秋教导成性格扭曲的人。她痴恋姐夫乔峰，却因为自己的行为多次伤害他。",
        personality: "阿紫性格刁蛮任性，狠毒毒辣，甚至有些残忍。她对乔峰有着偏执的爱，会为了得到他不择手段。然而在内心深处，她也有对姐姐的愧疚和对乔峰的一片痴情，只是被扭曲的性格所掩盖。",
        skills: ["星宿派武功", "化功大法", "毒技"],
        role: "阿紫是乔峰生命中重要的女性角色之一，她的存在让乔峰体会到了复杂的情感和责任。她的性格和行为也展现了环境对人性的影响，以及极端爱情的毁灭性。",
        relationships: [
            { person: "乔峰", connection: "痴恋的姐夫，最终为其殉情" },
            { person: "阿朱", connection: "同父异母的姐姐" },
            { person: "段正淳", connection: "生父" },
            { person: "丁春秋", connection: "师父，星宿派掌门" },
            { person: "游坦之", connection: "痴恋她，被她虐待" }
        ]
    },
    {
        id: 8,
        name: "木婉清",
        title: "“水木清华，婉兮清扬”",
        image: "https://r2.flowith.net/files/o/1747920162907-Portrait_of_Mu_Wanqing_from_Demi_Gods_and_Semi_Devils_index_9@1024x1024.png",
        shortDesc: "段誉的红颜知己之一，性格刚烈，外冷内热，身世复杂，与段誉情深。",
        category: ["female"],
        background: "木婉清是修罗刀秦红棉与段正淳的私生女。她自幼生长于山林，性格孤僻刚烈，发誓第一个见到她容貌的男子若不娶她，便要杀死他。段誉是第一个见到她容貌的人，两人经历生死，情愫暗生，后发现是同父异母的兄妹，经历了巨大痛苦。",
        personality: "木婉清外表冷漠，内心炙热。她敢爱敢恨，一旦认定便至死不渝。初期不谙世事，后逐渐成熟，对段誉一往情深。",
        skills: ["袖箭", "修罗刀法", "轻功"],
        role: "木婉清是段誉早期重要的感情对象，她的出现推动了段誉的江湖历程。她的刚烈性格和深情为故事增添了许多色彩。新修版中，她最终成为段誉的妃子。",
        relationships: [
            { person: "段誉", connection: "深爱之人，后发现是兄长，最终成为其妃子（新修版）" },
            { person: "段正淳", connection: "亲生父亲" },
            { person: "秦红棉", connection: "亲生母亲，师父" },
            { person: "钟灵", connection: "同父异母的妹妹" }
        ]
    },
    {
        id: 9,
        name: "钟灵",
        title: "万劫谷谷主之女",
        image: "https://r2.flowith.net/files/o/1747920166353-Portrait_of_Zhong_Ling_from_Demi_Gods_and_Semi_Devils_index_10@1024x1024.png",
        shortDesc: "天真烂漫的少女，段誉的红颜知己之一，擅长养貂，心地善良。",
        category: ["female"],
        background: "钟灵是“俏药叉”甘宝宝与段正淳的私生女，养父为万劫谷谷主钟万仇。她天真活泼，不谙世事，因闪电貂与段誉结缘，对段誉心生爱慕。后也发现与段誉是同父异母的兄妹关系。",
        personality: "钟灵天真无邪，活泼可爱，心地善良，富有同情心。她像个小妹妹一样纯真，为沉重的故事氛围带来一丝轻松。",
        skills: ["闪电貂 (宠物)", "基本武功"],
        role: "钟灵是段誉进入江湖初期遇到的重要女性，她的纯真善良给段誉留下了深刻印象。新修版中，她最终也成为段誉的妃子。",
        relationships: [
            { person: "段誉", connection: "爱慕之人，后发现是兄长，最终成为其妃子（新修版）" },
            { person: "段正淳", connection: "亲生父亲" },
            { person: "甘宝宝", connection: "亲生母亲" },
            { person: "木婉清", connection: "同父异母的姐姐" }
        ]
    },
    {
        id: 10,
        name: "天山童姥",
        title: "灵鹫宫宫主",
        image: "https://r2.flowith.net/files/o/1747920171290-Portrait_of_Tianshan_Tonglao_from_Demi_Gods_and_Semi_Devils_index_11@1024x1024.png",
        shortDesc: "逍遥派大师姐，武功高绝，性格乖张，因练功导致身材永如女童。",
        category: ["female", "antagonist"], // Antagonist to some, mentor to Xuzhu
        background: "天山童姥是逍遥派无崖子的大师姐，李秋水的师姐。她修炼“八荒六合唯我独尊功”，每三十年返老还童一次，身材永如女童。她执掌灵鹫宫，统率三十六洞七十二岛，威震江湖。与师妹李秋水有深仇大恨。",
        personality: "天山童姥性格乖张暴戾，喜怒无常，手段狠辣。但对虚竹却有传功之恩，也有其复杂的一面。",
        skills: ["八荒六合唯我独尊功", "天山折梅手", "天山六阳掌", "生死符"],
        role: "天山童姥是逍遥派的关键人物，也是虚竹命运的转折点。她与李秋水的争斗是逍遥派内部恩怨的核心。她的出现极大地提升了虚竹的武功和地位。",
        relationships: [
            { person: "虚竹", connection: "传功之人，后继任灵鹫宫主" },
            { person: "无崖子", connection: "师弟，曾暗恋他" },
            { person: "李秋水", connection: "师妹，一生宿敌" }
        ]
    },
    {
        id: 11,
        name: "康敏 (马夫人)",
        title: "丐帮副帮主夫人",
        image: "https://r2.flowith.net/files/o/1747920175266-Portrait_of_Kang_Min_Ma_Furen_from_Demi_Gods_and_Semi_Devils_index_12@1024x1024.png",
        shortDesc: "美貌妖媚，心如蛇蝎，因乔峰未多看她一眼而生恨，是乔峰悲剧的重要推手。",
        category: ["female", "antagonist"],
        background: "康敏是丐帮副帮主马大元的妻子。她自负美貌，却因乔峰在洛阳百花会中对她视若无睹而心生怨恨。为了报复乔峰，她揭露乔峰的身世之谜，并设计害死马大元，嫁祸乔峰，引发一系列江湖风波。",
        personality: "康敏外表美艳，内心阴险毒辣，嫉妒心极强，占有欲和报复心重。她善于伪装，利用美色和心计操纵他人。",
        skills: ["心计", "魅惑之术"],
        role: "康敏是《天龙八部》中最歹毒的女性角色之一，她是导致乔峰身败名裂、众叛亲离的关键人物。她的行为深刻揭示了因爱生恨的极端心理和人性的阴暗面。",
        relationships: [
            { person: "乔峰", connection: "怨恨对象，一手策划其悲剧" },
            { person: "段正淳", connection: "旧情人之一" },
            { person: "马大元", connection: "丈夫，被其害死" },
            { person: "白世镜", connection: "情人，同谋" }
        ]
    },
    {
        id: 12,
        name: "鸠摩智",
        title: "大轮明王/吐蕃国师",
        image: "https://r2.flowith.net/files/o/1747920178576-Portrait_of_Jiumozhi_from_Demi_Gods_and_Semi_Devils_index_13@1024x1024.png",
        shortDesc: "吐蕃高僧，武痴，精通多门绝学，为求六脉神剑不择手段，后大彻大悟。",
        category: ["antagonist"],
        background: "鸠摩智是吐蕃国的护国法王，人称“大轮明王”。他对武学极为痴迷，四处搜集各派武功秘籍，尤为觊觎大理段氏的六脉神剑和少林寺的七十二绝技。他曾挑战天龙寺、少林寺，引发连番大战。",
        personality: "鸠摩智天资聪颖，博学强记，但也高傲自负，为达目的不择手段。他对武学的执念近乎疯狂，但本性并非大奸大恶。最终武功尽失后，反而大彻大悟，成为一代高僧。",
        skills: ["火焰刀", "小无相功 (偷学)", "少林七十二绝技 (部分强练)"],
        role: "鸠摩智是《天龙八部》前期重要的反派角色，他的出现串联起大理、少林等多个故事线。他代表了对武学过度执迷而迷失方向的人物，其最终的顿悟也富有禅意。",
        relationships: [
            { person: "段誉", connection: "多次交手，曾掳走段誉逼问六脉神剑" },
            { person: "虚竹", connection: "间接因其获得小无相功线索" },
            { person: "慕容博", connection: "曾受其指点，交换武学" }
        ]
    },
    {
        id: 13,
        name: "丁春秋",
        title: "星宿老怪",
        image: "https://r2.flowith.net/files/o/1747920182426-Portrait_of_Ding_Chunqiu_from_Demi_Gods_and_Semi_Devils_index_14@1024x1024.png",
        shortDesc: "星宿派创始人，心狠手辣，擅长用毒，门下弟子阿谀奉承，臭名昭著。",
        category: ["antagonist"],
        background: "丁春秋原是逍遥派弟子，后背叛师门，创立星宿派。他武功邪门，尤擅用毒，为人阴险毒辣。星宿派门人以阿谀奉承、互相倾轧为常态，在江湖上声名狼藉。",
        personality: "丁春秋阴险狡诈，心狠手辣，爱慕虚荣，喜欢听奉承话。他对自己叛师的行为毫无悔意，反而自诩为武林宗师。",
        skills: ["化功大法", "各种毒功", "星宿派武功"],
        role: "丁春秋是《天龙八部》中典型的邪派反面角色，他的星宿派代表了江湖中的一股歪风邪气。他是阿紫的师父，对阿紫的性格养成有很大影响。最终被虚竹用生死符制服。",
        relationships: [
            { person: "阿紫", connection: "弟子" },
            { person: "苏星河", connection: "师兄，被其暗算" },
            { person: "无崖子", connection: "师父，被其与李秋水合谋打落山崖（情节有争议，主要为苏星河所说）" },
            { person: "游坦之", connection: "曾受其毒害，后习得其部分武功" }
        ]
    },
    {
        id: 14,
        name: "游坦之 (庄聚贤)",
        title: "丐帮帮主/铁头人",
        image: "https://r2.flowith.net/files/o/1747920185897-Portrait_of_You_Tanzhi_from_Demi_Gods_and_Semi_Devils_index_15@1024x1024.png",
        shortDesc: "命运悲惨的少年，为复仇误入歧途，痴恋阿紫，最终为阿紫殉情，是金庸笔下最悲剧的角色之一。",
        category: ["antagonist"], // More of a tragic villain
        background: "游坦之原是聚贤庄少庄主，因父母在聚贤庄大战中被乔峰间接害死而对乔峰深恶痛绝。机缘巧合下习得冰蚕毒掌和少林《易筋经》的部分神功，武功大进。他痴恋阿紫，甘愿被其虐待，甚至毁容套上铁头。后被全冠清利用，成为丐帮帮主。",
        personality: "游坦之早期性格懦弱，缺乏主见。在遭遇家庭巨变和习得神功后，性格逐渐扭曲。他对阿紫的爱近乎病态的卑微和执着，缺乏自我尊严。一生充满悲剧色彩。",
        skills: ["冰蚕毒掌", "易筋经 (神足经)", "腐尸毒"],
        role: "游坦之是《天龙八部》中极具悲剧色彩的人物。他的经历展现了仇恨、痴恋和命运捉弄下的个体沉沦。他与阿紫之间的畸形关系是小说中一段令人唏嘘的情节。最终挖眼给阿紫，随阿紫跳崖而死。",
        relationships: [
            { person: "阿紫", connection: "痴恋对象，为其付出一切乃至生命" },
            { person: "乔峰", connection: "仇人，一心想报仇" },
            { person: "全冠清", connection: "利用他夺取丐帮帮主之位" },
            { person: "丁春秋", connection: "曾被其毒虫所伤，间接习得毒功" }
        ]
    }
];

// Function to initialize the character gallery
function initCharacterGallery() {
    const container = document.getElementById('character-container');
    
    if (!container) {
        console.error('Character container not found!');
        return;
    }
    
    // Clear any existing content (like placeholders)
    container.innerHTML = '';

    // Create character cards
    characters.forEach(character => {
        const card = document.createElement('div');
        const hasLocalImage = character.image && !character.image.startsWith('https://r2.flowith.net');
        
        if (hasLocalImage) {
            // Standard card with image
            card.className = `character-card bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl ${character.category.map(cat => 'category-' + cat).join(' ')}`;
            card.innerHTML = `
                <img src="${character.image}" alt="${character.name}" class="w-full h-64 object-cover object-top">
                <div class="p-6">
                    <h3 class="text-xl font-bold mb-2 text-gray-800">${character.name}</h3>
                    <p class="text-sm text-gray-600 mb-3">${character.title}</p>
                    <p class="text-gray-700 text-sm leading-relaxed">${character.shortDesc}</p>
                    <button class="mt-4 px-4 py-2 bg-gray-800 text-white text-sm rounded-md hover:bg-gray-900 transition-colors duration-300 view-details" data-character-id="${character.id}">查看详情</button>
                </div>
            `;
        } else {
            // Compact card without image
            card.className = `character-card character-card-compact bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:from-gray-100 hover:to-gray-200 ${character.category.map(cat => 'category-' + cat).join(' ')}`;
            card.innerHTML = `
                <div class="p-6">
                    <div class="flex items-center mb-3">
                        <div class="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                            ${character.name.charAt(0)}
                        </div>
                        <div>
                            <h3 class="text-lg font-bold text-gray-800">${character.name}</h3>
                            <p class="text-sm text-gray-600">${character.title}</p>
                        </div>
                    </div>
                    <p class="text-gray-700 text-sm leading-relaxed mb-4">${character.shortDesc}</p>
                    <button class="px-4 py-2 bg-gray-800 text-white text-sm rounded-md hover:bg-gray-900 transition-colors duration-300 view-details" data-character-id="${character.id}">查看详情</button>
                </div>
            `;
        }
        
        container.appendChild(card);
    });
    
    // Add event listeners to "View Details" buttons
    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', function() {
            const characterId = parseInt(this.getAttribute('data-character-id'));
            const character = characters.find(char => char.id === characterId);
            
            if (character) {
                openCharacterModal(character); // This function is in main.js
            }
        });
    });
    
    // Character filtering
    const filterButtons = document.querySelectorAll('.character-filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active class
            filterButtons.forEach(btn => {
                btn.classList.remove('active', 'bg-gray-800', 'text-white');
                btn.classList.add('bg-white', 'text-gray-800');
            });
            button.classList.add('active', 'bg-gray-800', 'text-white');
            button.classList.remove('bg-white', 'text-gray-800');
            
            const filter = this.getAttribute('data-filter');
            
            // Filter characters
            document.querySelectorAll('.character-card').forEach(card => {
                if (filter === 'all') {
                    card.style.display = 'block';
                } else {
                    if (card.classList.contains('category-' + filter)) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });
}

// Initialize the gallery when the DOM is loaded
document.addEventListener('DOMContentLoaded', initCharacterGallery);
